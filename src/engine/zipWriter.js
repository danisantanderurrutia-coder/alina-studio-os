/**
 * Generador ligero de archivos .ZIP en memoria (STORE / sin dependencias externas).
 * Soporta DataURLs (PNG/WebM), Uint8Array, Blob y objetos JSON / texto UTF-8.
 */

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export function dataUrlToBytes(dataUrl) {
  const commaIdx = dataUrl.indexOf(',');
  const b64 = commaIdx >= 0 ? dataUrl.slice(commaIdx + 1) : dataUrl;
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export async function toUint8Array(content) {
  if (content instanceof Uint8Array) return content;
  if (typeof content === 'string') {
    if (content.startsWith('data:')) return dataUrlToBytes(content);
    return new TextEncoder().encode(content);
  }
  if (typeof Blob !== 'undefined' && content instanceof Blob) {
    return new Uint8Array(await content.arrayBuffer());
  }
  return new TextEncoder().encode(JSON.stringify(content, null, 2));
}

/**
 * Construye un Blob application/zip a partir de [{ path, data }].
 */
export async function buildZipBlob(entries) {
  const encoder = new TextEncoder();
  const prepared = [];
  let offset = 0;

  const now = new Date();
  const dosTime =
    ((now.getHours() & 0x1f) << 11) |
    ((now.getMinutes() & 0x3f) << 5) |
    ((now.getSeconds() >> 1) & 0x1f);
  const dosDate =
    (((now.getFullYear() - 1980) & 0x7f) << 9) |
    (((now.getMonth() + 1) & 0x0f) << 5) |
    (now.getDate() & 0x1f);

  const chunks = [];

  for (const item of entries) {
    if (!item || item.data == null) continue;
    const nameBytes = encoder.encode(item.path.replace(/^\/+/, ''));
    const dataBytes = await toUint8Array(item.data);
    const crc = crc32(dataBytes);

    const localHeader = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(localHeader.buffer);
    lv.setUint32(0, 0x04034b50, true); // Local file header signature
    lv.setUint16(4, 20, true);         // Version needed (2.0)
    lv.setUint16(6, 0x0800, true);     // UTF-8 filename flag
    lv.setUint16(8, 0, true);          // Compression: 0 (STORE - PNG/WebM already compressed)
    lv.setUint16(10, dosTime, true);
    lv.setUint16(12, dosDate, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, dataBytes.length, true);
    lv.setUint32(22, dataBytes.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    prepared.push({ nameBytes, crc, size: dataBytes.length, offset, dosTime, dosDate });
    chunks.push(localHeader, dataBytes);
    offset += localHeader.length + dataBytes.length;
  }

  const centralStart = offset;
  for (const p of prepared) {
    const cd = new Uint8Array(46 + p.nameBytes.length);
    const cv = new DataView(cd.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0x0800, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, p.dosTime, true);
    cv.setUint16(14, p.dosDate, true);
    cv.setUint32(16, p.crc, true);
    cv.setUint32(20, p.size, true);
    cv.setUint32(24, p.size, true);
    cv.setUint16(28, p.nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, p.offset, true);
    cd.set(p.nameBytes, 46);
    chunks.push(cd);
    offset += cd.length;
  }

  const centralSize = offset - centralStart;
  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, prepared.length, true);
  ev.setUint16(10, prepared.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, centralStart, true);
  ev.setUint16(20, 0, true);
  chunks.push(eocd);

  return new Blob(chunks, { type: 'application/zip' });
}
