// Persistencia unificada en IndexedDB v2 para Alina Studio OS:
// 1) 'shots': Capturas 9:16 (Beauty + Depth), prompts editados, objetos asociados y capítulo.
// 2) 'objects': Bóveda de Objetos Renderizados (renders subidos o capturados del 3D) para Higgsfield.
// 3) 'chapters': Capítulos cinematográficos de la serie (sinopsis, guion, escaleta de tomas y objetos).

import { SEED_CHAPTERS, SEED_OBJECTS } from '../data/alinaLoreData.js';

const DB_NAME = 'AlinaStudioOS_CapturesDB';
const DB_VERSION = 3;
const STORE_SHOTS = 'shots';
const STORE_OBJECTS = 'objects';
const STORE_CHAPTERS = 'chapters';
const CUSTOM_WARDROBE_LS_KEY = 'AlinaStudioOS_CustomWardrobe_v1';
const CUSTOM_3D_PROPS_LS_KEY = 'AlinaStudioOS_Custom3DProps_v1';
const MAX_SAVED_SHOTS = 24;

export function loadCustomWardrobeLooks() {
  try {
    const raw = localStorage.getItem(CUSTOM_WARDROBE_LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomWardrobeLook(look) {
  try {
    const list = loadCustomWardrobeLooks().filter((w) => w.id !== look.id);
    list.unshift(look);
    localStorage.setItem(CUSTOM_WARDROBE_LS_KEY, JSON.stringify(list));
  } catch (err) {
    console.warn('[StudioStorage] No se pudo guardar look personalizado:', err);
  }
}

export function loadCustom3DProps() {
  try {
    const raw = localStorage.getItem(CUSTOM_3D_PROPS_LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustom3DProp(propDef) {
  try {
    const list = loadCustom3DProps().filter((p) => p.id !== propDef.id);
    list.push(propDef);
    localStorage.setItem(CUSTOM_3D_PROPS_LS_KEY, JSON.stringify(list));
  } catch (err) {
    console.warn('[StudioStorage] No se pudo guardar prop 3D personalizado:', err);
  }
}

let dbPromise = null;

function openStudioDB() {
  if (dbPromise) return dbPromise;
  if (typeof indexedDB === 'undefined') return Promise.resolve(null);

  dbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_SHOTS)) {
          const s = db.createObjectStore(STORE_SHOTS, { keyPath: 'id' });
          s.createIndex('timestamp', 'timestamp', { unique: false });
        }
        if (!db.objectStoreNames.contains(STORE_OBJECTS)) {
          db.createObjectStore(STORE_OBJECTS, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORE_CHAPTERS)) {
          db.createObjectStore(STORE_CHAPTERS, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => {
        console.warn('[StudioStorage] IndexedDB no disponible:', req.error);
        resolve(null);
      };
    } catch (err) {
      console.warn('[StudioStorage] Error abriendo IndexedDB:', err);
      resolve(null);
    }
  });
  return dbPromise;
}

function putRecord(db, storeName, record) {
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

function deleteRecord(db, storeName, id) {
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

function getAllRecords(db, storeName) {
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, 'readonly');
    const req = tx.objectStore(storeName).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

// ============================================================================
// 1. CAPTURAS (SHOTS)
// ============================================================================
function serializeShot(shot) {
  return {
    id: shot.id,
    timestamp: shot.timestamp || Number(String(shot.id).replace('shot-', '')) || Date.now(),
    createdAt: shot.createdAt,
    engine: shot.engine,
    floor: shot.floor,
    floorName: shot.floorName,
    spotId: shot.spot?.id,
    spotSnapshot: shot.spot,
    anim: shot.anim,
    camPreset: shot.camPreset,
    lightingMode: shot.lightingMode,
    sliced: shot.sliced,
    depthPass: shot.depthPass,
    camera: shot.camera,
    framing: shot.framing,
    imageMetrics: shot.imageMetrics,
    cinemaMoveLabel: shot.cinemaMoveLabel,
    image: shot.image,
    depthImage: shot.depthImage || null,
    motionEngine: shot.motionEngine,
    motionStrength: shot.motionStrength,
    objectIds: Array.isArray(shot.objectIds) ? shot.objectIds : [],
    chapterId: shot.chapterId || '',
    fluxPrompt: shot.fluxPrompt,
    motionPrompt: shot.motionPrompt
  };
}

export async function saveShotToDB(shot) {
  const db = await openStudioDB();
  if (!db || !shot?.id) return;
  await putRecord(db, STORE_SHOTS, serializeShot(shot));
}

export async function deleteShotFromDB(id) {
  const db = await openStudioDB();
  if (!db || !id) return;
  await deleteRecord(db, STORE_SHOTS, id);
}

export async function loadShotsFromDB(resolveSpotFn) {
  const db = await openStudioDB();
  if (!db) return [];

  const records = await getAllRecords(db, STORE_SHOTS);
  records.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  if (records.length > MAX_SAVED_SHOTS) {
    records.slice(MAX_SAVED_SHOTS).forEach((r) => deleteShotFromDB(r.id));
  }

  return records
    .slice(0, MAX_SAVED_SHOTS)
    .map((r) => ({
      ...r,
      objectIds: Array.isArray(r.objectIds) ? r.objectIds : [],
      chapterId: r.chapterId || '',
      spot: (resolveSpotFn && r.spotId && resolveSpotFn(r.spotId)) || r.spotSnapshot
    }))
    .filter((s) => Boolean(s.spot && s.image));
}

// ============================================================================
// 2. BÓVEDA DE OBJETOS RENDERIZADOS (OBJECTS) — DOBLE REGISTRO 3D ↔ BÓVEDA
// ============================================================================
export async function loadObjectsFromDB() {
  const db = await openStudioDB();
  if (!db) return SEED_OBJECTS.map((o, i) => ({ ...o, order: i + 1 }));

  const existing = await getAllRecords(db, STORE_OBJECTS);
  const seedIds = new Set(SEED_OBJECTS.map((s) => s.id));
  const byId = new Map();

  // Conservar objetos personalizados creados por el usuario, pero purgar fichas semilla antiguas o con imágenes rotas
  for (const item of existing) {
    if (!item || !item.id) continue;
    const imgStr = String(item.image || '');
    const isBrokenOrSvg =
      !imgStr ||
      imgStr === 'undefined' ||
      imgStr === 'null' ||
      imgStr.startsWith('data:image/svg+xml') ||
      item.isPlaceholderImage;
    if (!seedIds.has(item.id) && isBrokenOrSvg) {
      await deleteRecord(db, STORE_OBJECTS, item.id);
      continue;
    }
    byId.set(item.id, item);
  }

  for (let i = 0; i < SEED_OBJECTS.length; i++) {
    const seed = SEED_OBJECTS[i];
    const curr = byId.get(seed.id);
    if (!curr) {
      const rec = { ...seed, order: i + 1 };
      byId.set(seed.id, rec);
      await putRecord(db, STORE_OBJECTS, rec);
    } else {
      // Solo conservar una imagen personalizada si el usuario subió un Master Still real (data:image/png o data:image/jpeg)
      const hasUserUploadedDataUrl =
        curr.masterApprovedStill &&
        (String(curr.masterApprovedStill).startsWith('data:image/png') ||
          String(curr.masterApprovedStill).startsWith('data:image/jpeg') ||
          String(curr.masterApprovedStill).startsWith('data:image/webp'));

      const updated = {
        ...seed,
        order: i + 1,
        worldPos: seed.worldPos,
        camPos: seed.camPos,
        camTarget: seed.camTarget,
        modelId: seed.modelId,
        wardrobeId: seed.wardrobeId,
        kelvinRecipe: seed.kelvinRecipe,
        reduxWeight: curr.reduxWeight ?? seed.reduxWeight ?? 0.75,
        cnDepthStrength: curr.cnDepthStrength ?? seed.cnDepthStrength ?? 0.68,
        cnDepthEnd: curr.cnDepthEnd ?? seed.cnDepthEnd ?? 0.58,
        previzRender: seed.previzRender,
        previzDepthRender: seed.previzDepthRender,
        masterApprovedStill: hasUserUploadedDataUrl ? curr.masterApprovedStill : null,
        masterSeed: hasUserUploadedDataUrl ? curr.masterSeed : null,
        image: hasUserUploadedDataUrl ? curr.masterApprovedStill : seed.image,
        isPlaceholderImage: false,
        promptToken: seed.promptToken,
        motionPrompt: seed.motionPrompt,
        usage: seed.usage
      };
      byId.set(seed.id, updated);
      await putRecord(db, STORE_OBJECTS, updated);
    }
  }

  const merged = Array.from(byId.values());
  merged.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  return merged;
}

export async function saveObjectToDB(obj) {
  const db = await openStudioDB();
  if (!db || !obj?.id) return;
  await putRecord(db, STORE_OBJECTS, { ...obj });
}

export async function deleteObjectFromDB(id) {
  const db = await openStudioDB();
  if (!db || !id) return;
  await deleteRecord(db, STORE_OBJECTS, id);
}

// ============================================================================
// 3. CAPÍTULOS CINEMATOGRÁFICOS (CHAPTERS)
// ============================================================================
export async function loadChaptersFromDB() {
  const db = await openStudioDB();
  if (!db) return SEED_CHAPTERS.map((c) => ({ ...c }));

  const existing = await getAllRecords(db, STORE_CHAPTERS);
  if (existing.length === 0) {
    for (const ch of SEED_CHAPTERS) {
      await putRecord(db, STORE_CHAPTERS, { ...ch });
    }
    return SEED_CHAPTERS.map((c) => ({ ...c }));
  }

  existing.sort((a, b) => (a.number || 0) - (b.number || 0));
  return existing;
}

export async function saveChapterToDB(chapter) {
  const db = await openStudioDB();
  if (!db || !chapter?.id) return;
  await putRecord(db, STORE_CHAPTERS, { ...chapter });
}

export async function deleteChapterFromDB(id) {
  const db = await openStudioDB();
  if (!db || !id) return;
  await deleteRecord(db, STORE_CHAPTERS, id);
}

// ============================================================================
// UTILIDAD: Normaliza archivos de imagen subidos desde el ordenador (PNG/JPG/WebP)
// ============================================================================
export function readAndResizeImageFile(file, maxEdge = 1440) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('No se pudo leer el archivo de imagen'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Formato de imagen no válido'));
      img.onload = () => {
        const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const keepPng = file.type === 'image/png';
        resolve(keepPng ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg', 0.88));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// ============================================================================
// PIPELINE 2D WEB / FOTO → PALETA HEX + TRÍADA CROMÁTICA + TOKENS DE TEJIDO/PROP
// (Margaux De Vries Dep. 02 + Mateo Santoro Dep. 04 + Kenji Takahashi Dep. 07)
// ============================================================================
const MASTER_TRIAD_REFS = [
  { name: 'Negro Obsidiana', hex: '#111216', rgb: [17, 18, 22], fabric: 'matte obsidian-black silk-crepe and full-grain satin leather (#111216)', material: 'honed obsidian-black Nero Marquina marble and matte basalt (#111216)' },
  { name: 'Carbón Seda', hex: '#1f232b', rgb: [31, 35, 43], fabric: 'bias-cut dark charcoal silk charmeuse (#1f232b) with liquid matte-satin sheen', material: 'matte charcoal basalt stoneware and smoked slate (#1f232b)' },
  { name: 'Verde Bosque Esmeralda', hex: '#0B2B20', rgb: [11, 43, 32], fabric: 'plush deep forest-emerald silk velvet (#0B2B20) with directional nap', material: 'deep forest-emerald glazed ceramic and botanical foliage (#0B2B20)' },
  { name: 'Marfil Crudo', hex: '#ebe4d5', rgb: [235, 228, 213], fabric: 'raw oatmeal-ivory Belgian washed linen and raw silk (#ebe4d5)', material: 'veined white Carrara marble and raw ivory porcelain (#ebe4d5)' },
  { name: 'Cuero Tabaco', hex: '#5c3a24', rgb: [92, 58, 36], fabric: 'supple tobacco-cognac full-grain satin leather (#5c3a24)', material: 'hand-rubbed dark walnut wood and tobacco cognac leather (#5c3a24)' },
  { name: 'Latón Cepillado', hex: '#d4af37', rgb: [212, 175, 55], fabric: 'warm brushed-brass O-ring and minimalist hardware accents (#d4af37)', material: 'warm brushed-brass hardware and antique gold trim (#d4af37)' },
  { name: 'Cobre Martillado', hex: '#c86446', rgb: [200, 100, 70], fabric: 'warm terracotta-copper silk piping (#c86446)', material: 'hammered copper and artisan terracotta (#c86446)' }
];

function rgbToHex(r, g, b) {
  const toH = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return `#${toH(r)}${toH(g)}${toH(b)}`;
}

function nearestMasterTriad(r, g, b) {
  let best = MASTER_TRIAD_REFS[0];
  let bestDist = Infinity;
  for (const ref of MASTER_TRIAD_REFS) {
    const d = Math.hypot(r - ref.rgb[0], g - ref.rgb[1], b - ref.rgb[2]);
    if (d < bestDist) {
      bestDist = d;
      best = ref;
    }
  }
  return best;
}

/**
 * Carga una URL de internet (vía CORS directo o proxy de imagen) o DataURL y la convierte en DataURL local.
 */
export function fetchWebImageAsDataUrl(url, maxEdge = 1080) {
  return new Promise((resolve) => {
    const cleanUrl = String(url || '').trim();
    if (!cleanUrl) return resolve(null);
    if (cleanUrl.startsWith('data:image/')) return resolve(cleanUrl);

    const tryLoad = (src, isFallback = false) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const scale = Math.min(1, maxEdge / Math.max(img.width || 512, img.height || 512));
          const w = Math.max(1, Math.round((img.width || 512) * scale));
          const h = Math.max(1, Math.round((img.height || 512) * scale));
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', 0.9));
        } catch {
          if (!isFallback) {
            tryLoad(`https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl.replace(/^https?:\/\//i, ''))}`, true);
          } else {
            resolve(null);
          }
        }
      };
      img.onerror = () => {
        if (!isFallback) {
          tryLoad(`https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl.replace(/^https?:\/\//i, ''))}`, true);
        } else {
          resolve(null);
        }
      };
      img.src = src;
    };
    tryLoad(cleanUrl, false);
  });
}

/**
 * Extrae automáticamente de cualquier foto/URL:
 *  - Paleta hexadecimal dominante (3 swatches reales + sus equivalentes armonizados en la Tríada de Alina)
 *  - Tokens de tejido nobles anti-moiré (seda charmeuse, terciopelo esmeralda, cuero satinado, lino belga)
 *  - Herrajes en latón cepillado (#d4af37)
 */
export function extractPaletteAndTokensFromDataUrl(dataUrl, { mode = 'wardrobe', title = 'Prenda Couture', subtype = 'dress', floor = 2, kelvin = '3400K' } = {}) {
  return new Promise((resolve) => {
    const fallbackResult = () => {
      const triadPrimary = MASTER_TRIAD_REFS[1];
      const triadSecondary = MASTER_TRIAD_REFS[2];
      return {
        rawSwatches: ['#1f232b', '#0B2B20', '#d4af37'],
        triadSwatches: [triadPrimary.hex, triadSecondary.hex, '#d4af37'],
        primaryHex: triadPrimary.hex,
        triadLabel: `${triadPrimary.name} + ${triadSecondary.name} + Latón Cepillado`,
        fluxTokens:
          mode === 'wardrobe'
            ? `wearing a bespoke ${title.toLowerCase()} crafted in ${triadPrimary.fabric} with ${triadSecondary.fabric} accents and warm brushed-brass hardware (#d4af37), zero moiré`
            : `bespoke ${title.toLowerCase()} crafted in ${triadPrimary.material} with ${triadSecondary.material} and warm brushed-brass hardware (#d4af37), catching warm ${kelvin} key light`,
        higgsfieldPhysics:
          mode === 'wardrobe'
            ? `fluid ${triadPrimary.name.toLowerCase()} textile settles naturally over silhouette with soft directional specular sheen on breathing, warm brushed-brass hardware (#d4af37) glinting steadily, zero moiré`
            : `Locked 100mm macro shot of ${title.toLowerCase()} catching warm ${kelvin} specular highlights across ${triadPrimary.name.toLowerCase()} and brushed-brass hardware (#d4af37), duration 3.2s, no humans, motion strength 2.1`
      };
    };

    if (!dataUrl) return resolve(fallbackResult());

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 48;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);

        // Agrupar píxeles centrales (evitando bordes blancos/transparentes de catálogos e-commerce)
        const buckets = [
          { r: 0, g: 0, b: 0, count: 0 }, // Oscuros
          { r: 0, g: 0, b: 0, count: 0 }, // Medios / Color
          { r: 0, g: 0, b: 0, count: 0 }  // Claros / Metálicos
        ];

        for (let y = 6; y < size - 6; y++) {
          for (let x = 6; x < size - 6; x++) {
            const idx = (y * size + x) * 4;
            const a = data[idx + 3];
            if (a < 128) continue;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            // Ignorar blanco puro de fondo de e-commerce (> 244)
            if (r > 244 && g > 244 && b > 244) continue;
            const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            const bIdx = lum < 75 ? 0 : lum < 175 ? 1 : 2;
            buckets[bIdx].r += r;
            buckets[bIdx].g += g;
            buckets[bIdx].b += b;
            buckets[bIdx].count++;
          }
        }

        const rawColors = [];
        for (const bk of buckets) {
          if (bk.count > 0) {
            rawColors.push([bk.r / bk.count, bk.g / bk.count, bk.b / bk.count]);
          }
        }
        if (rawColors.length === 0) return resolve(fallbackResult());

        const rawSwatches = rawColors.map(([r, g, b]) => rgbToHex(r, g, b));
        while (rawSwatches.length < 3) rawSwatches.push('#d4af37');

        const triadMatches = rawColors.map(([r, g, b]) => nearestMasterTriad(r, g, b));
        const primaryTriad = triadMatches[0] || MASTER_TRIAD_REFS[1];
        const secondaryTriad =
          triadMatches.find((t) => t.hex !== primaryTriad.hex) || MASTER_TRIAD_REFS[2];

        const triadSwatches = [primaryTriad.hex, secondaryTriad.hex, '#d4af37'];
        const cleanTitle = String(title || 'Prenda Couture').trim();

        const subtypeDesc = {
          dress: 'floor-length bias-cut couture gown',
          corset: 'structured architectural satin-leather and velvet corset bodice',
          blazer: 'tailored unstructured couture blazer jacket',
          lingerie: 'intimate silk charmeuse slip robe and collar',
          resort: 'minimalist washed Belgian linen resort wrap and sarong',
          plant: 'tall braided indoor botanical specimen with glossy dark-emerald foliage',
          sculpture: 'museum-grade chiseled gallery sculpture',
          painting: 'chiaroscuro oil canvas mounted in a sculpted gilded frame',
          furniture: 'bespoke architectural furniture piece'
        }[subtype] || cleanTitle.toLowerCase();

        const fluxTokens =
          mode === 'wardrobe'
            ? `wearing a ${subtypeDesc} («${cleanTitle}») crafted in ${primaryTriad.fabric} with ${secondaryTriad.fabric} accents and warm brushed-brass hardware (#d4af37), anti-moiré weave calibrated for ${kelvin} key light`
            : `${subtypeDesc} («${cleanTitle}») crafted in ${primaryTriad.material} with ${secondaryTriad.material} details and warm brushed-brass hardware (#d4af37) on dark walnut or basalt base, catching ${kelvin} practical key light`;

        const higgsfieldPhysics =
          mode === 'wardrobe'
            ? `supple ${primaryTriad.name.toLowerCase()} fabric drapes with natural weight and subtle ${kelvin} specular sheen during breathing, warm brushed-brass hardware (#d4af37) glinting steadily with zero moiré`
            : `Locked 100mm macro shot of ${cleanTitle.toLowerCase()} with warm ${kelvin} highlights gliding across ${primaryTriad.name.toLowerCase()} texture and brushed-brass hardware (#d4af37), duration 3.2s, no humans, motion strength 2.1`;

        resolve({
          rawSwatches: rawSwatches.slice(0, 3),
          triadSwatches,
          primaryHex: primaryTriad.hex,
          triadLabel: `${primaryTriad.name} (${primaryTriad.hex}) + ${secondaryTriad.name} (${secondaryTriad.hex}) + Latón (#d4af37)`,
          fluxTokens,
          higgsfieldPhysics
        });
      } catch {
        resolve(fallbackResult());
      }
    };
    img.onerror = () => resolve(fallbackResult());
    img.src = dataUrl;
  });
}
