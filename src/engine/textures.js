import * as THREE from 'three';

function makeCanvas(size = 512) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  return [c, c.getContext('2d')];
}

function finalizeTexture(canvas, { colorSpace = THREE.SRGBColorSpace, repeatX = 1, repeatY = 1 } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 8;
  tex.colorSpace = colorSpace;
  return tex;
}

export function createTiledTextures(widthMeters, depthMeters, tileMeters, factoryFn, isLinear = false) {
  const tex = factoryFn();
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(Math.max(1, widthMeters / tileMeters), Math.max(1, depthMeters / tileMeters));
  tex.anisotropy = 8;
  tex.colorSpace = isLinear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  return tex;
}

export function buildWalnutParquetPair(widthMeters = 12, depthMeters = 12, tileMeters = 1.6) {
  const [c, ctx] = makeCanvas(512);
  const [b, bctx] = makeCanvas(512);

  ctx.fillStyle = '#332016';
  ctx.fillRect(0, 0, 512, 512);
  bctx.fillStyle = '#d0d0d0';
  bctx.fillRect(0, 0, 512, 512);

  const plankH = 64;
  const plankW = 128;
  const tones = ['#3d2518', '#482d1e', '#341f14', '#4e3120', '#2e1b12'];
  for (let row = 0; row < 512 / plankH; row++) {
    const offset = (row % 2) * (plankW / 2);
    for (let col = -1; col < 512 / plankW + 1; col++) {
      const x = col * plankW + offset;
      const y = row * plankH;
      const tone = tones[(row * 5 + col + 8) % tones.length];
      ctx.fillStyle = tone;
      ctx.fillRect(x, y, plankW, plankH);

      // Fine wood grain
      for (let g = 0; g < 16; g++) {
        ctx.fillStyle = g % 2 === 0 ? 'rgba(0,0,0,0.14)' : 'rgba(255,210,170,0.06)';
        ctx.fillRect(x + 2, y + g * 4, plankW - 4, 2);
      }

      // Seam grooves
      ctx.strokeStyle = '#150c08';
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, plankW, plankH);

      bctx.strokeStyle = '#353535';
      bctx.lineWidth = 3;
      bctx.strokeRect(x, y, plankW, plankH);
    }
  }

  return {
    map: finalizeTexture(c, { repeatX: widthMeters / tileMeters, repeatY: depthMeters / tileMeters }),
    bumpMap: finalizeTexture(b, { colorSpace: THREE.NoColorSpace, repeatX: widthMeters / tileMeters, repeatY: depthMeters / tileMeters })
  };
}

export function buildMarbleTexture(dark = true, widthMeters = 10, depthMeters = 10, tileMeters = 2.5) {
  const [c, ctx] = makeCanvas(512);
  ctx.fillStyle = dark ? '#16181f' : '#ebe9e4';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle tile joints
  ctx.strokeStyle = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 254, 254);
  ctx.strokeRect(256, 1, 254, 254);
  ctx.strokeRect(1, 256, 254, 254);
  ctx.strokeRect(256, 256, 254, 254);

  // Organic mineral veins
  for (let i = 0; i < 14; i++) {
    ctx.beginPath();
    let x = (i * 73) % 512;
    let y = 0;
    ctx.moveTo(x, y);
    for (let s = 0; s < 10; s++) {
      x += Math.sin(i + s * 0.9) * 42;
      y += 52;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = dark
      ? (i % 3 === 0 ? 'rgba(218, 152, 110, 0.32)' : 'rgba(225, 232, 240, 0.16)')
      : 'rgba(95, 100, 110, 0.24)';
    ctx.lineWidth = i % 3 === 0 ? 2.2 : 1.1;
    ctx.stroke();
  }

  return finalizeTexture(c, { repeatX: widthMeters / tileMeters, repeatY: depthMeters / tileMeters });
}

export function buildBrickWallPair(widthMeters = 16, heightMeters = 4.9, tileMeters = 2.0) {
  const [c, ctx] = makeCanvas(512);
  const [b, bctx] = makeCanvas(512);

  ctx.fillStyle = '#181a1f';
  ctx.fillRect(0, 0, 512, 512);
  bctx.fillStyle = '#383838';
  bctx.fillRect(0, 0, 512, 512);

  const bh = 32;
  const bw = 64;
  for (let r = 0; r < 512 / bh; r++) {
    const off = (r % 2) * (bw / 2);
    for (let col = -1; col < 512 / bw + 1; col++) {
      const x = col * bw + off + 3;
      const y = r * bh + 3;
      const shade = 34 + ((r * 7 + col * 13) % 18);
      ctx.fillStyle = `rgb(${shade + 8}, ${shade + 3}, ${shade + 4})`;
      ctx.fillRect(x, y, bw - 6, bh - 6);

      bctx.fillStyle = `rgb(${180 + ((r + col) % 4) * 15}, ${180}, ${180})`;
      bctx.fillRect(x, y, bw - 6, bh - 6);
    }
  }

  return {
    map: finalizeTexture(c, { repeatX: widthMeters / tileMeters, repeatY: heightMeters / tileMeters }),
    bumpMap: finalizeTexture(b, { colorSpace: THREE.NoColorSpace, repeatX: widthMeters / tileMeters, repeatY: heightMeters / tileMeters })
  };
}

export function buildAsphaltTexture(widthMeters = 28, depthMeters = 18, tileMeters = 3.0) {
  const [c, ctx] = makeCanvas(512);
  ctx.fillStyle = '#1f2228';
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 6000; i++) {
    const v = 22 + ((i * 37) % 34);
    ctx.fillStyle = `rgb(${v}, ${v + 2}, ${v + 5})`;
    ctx.fillRect((i * 97) % 512, (i * 53) % 512, 2, 2);
  }
  return finalizeTexture(c, { repeatX: widthMeters / tileMeters, repeatY: depthMeters / tileMeters });
}

export function buildTeakDeckTexture(widthMeters = 26, depthMeters = 16, tileMeters = 2.2) {
  const [c, ctx] = makeCanvas(512);
  ctx.fillStyle = '#5c4028';
  ctx.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 512; y += 32) {
    ctx.fillStyle = y % 64 === 0 ? '#68492e' : '#553a24';
    ctx.fillRect(0, y, 512, 29);
    ctx.fillStyle = '#24170d';
    ctx.fillRect(0, y + 29, 512, 3);
  }
  return finalizeTexture(c, { repeatX: widthMeters / tileMeters, repeatY: depthMeters / tileMeters });
}

export function buildSignTexture(text, bgHex = '#140812', glowHex = '#ff2a85', subText = '') {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 256;
  const ctx = c.getContext('2d');

  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.strokeStyle = glowHex;
  ctx.lineWidth = 8;
  ctx.strokeRect(12, 12, c.width - 24, c.height - 24);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = glowHex;
  ctx.shadowBlur = 24;
  ctx.fillStyle = '#fff5fa';
  ctx.font = 'bold 96px Georgia, serif';
  ctx.fillText(text, c.width / 2, subText ? c.height / 2 - 22 : c.height / 2);

  if (subText) {
    ctx.shadowBlur = 8;
    ctx.fillStyle = glowHex;
    ctx.font = '600 28px monospace';
    ctx.fillText(subText, c.width / 2, c.height / 2 + 54);
  }

  return finalizeTexture(c, { repeatX: 1, repeatY: 1 });
}

export function buildDanceFloorTexture(widthMeters = 12, depthMeters = 9, tileMeters = 1.5) {
  const [c, ctx] = makeCanvas(512);
  ctx.fillStyle = '#0d0e14';
  ctx.fillRect(0, 0, 512, 512);

  const step = 128;
  for (let y = 0; y < 512; y += step) {
    for (let x = 0; x < 512; x += step) {
      ctx.fillStyle = ((x + y) / step) % 2 === 0 ? '#141722' : '#0f111a';
      ctx.fillRect(x + 3, y + 3, step - 6, step - 6);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.25)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 3, y + 3, step - 6, step - 6);
    }
  }
  return finalizeTexture(c, { repeatX: widthMeters / tileMeters, repeatY: depthMeters / tileMeters });
}

export function buildExteriorStonePair(widthMeters = 26, heightMeters = 4.9, tileMeters = 3.0) {
  const [c, ctx] = makeCanvas(512);
  const [b, bctx] = makeCanvas(512);

  ctx.fillStyle = '#3b3e47';
  ctx.fillRect(0, 0, 512, 512);
  bctx.fillStyle = '#606060';
  bctx.fillRect(0, 0, 512, 512);

  const bh = 64;
  const bw = 128;
  for (let r = 0; r < 512 / bh; r++) {
    const off = (r % 2) * (bw / 2);
    for (let col = -1; col < 512 / bw + 1; col++) {
      const x = col * bw + off + 3;
      const y = r * bh + 3;
      const shade = 64 + ((r * 11 + col * 17) % 16);
      ctx.fillStyle = `rgb(${shade + 6}, ${shade + 4}, ${shade + 2})`;
      ctx.fillRect(x, y, bw - 6, bh - 6);
      bctx.fillStyle = `rgb(${190 + ((r + col) % 3) * 15}, ${190}, ${190})`;
      bctx.fillRect(x, y, bw - 6, bh - 6);
    }
  }

  return {
    map: finalizeTexture(c, { repeatX: widthMeters / tileMeters, repeatY: heightMeters / tileMeters }),
    bumpMap: finalizeTexture(b, { colorSpace: THREE.NoColorSpace, repeatX: widthMeters / tileMeters, repeatY: heightMeters / tileMeters })
  };
}

export function buildSideWindowTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 512;
  const ctx = c.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, '#ffd8a8');
  grad.addColorStop(0.55, '#c86446');
  grad.addColorStop(1, '#1e293b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 512);

  // Dark steel mullions
  ctx.fillStyle = '#111319';
  ctx.fillRect(0, 0, 256, 16);
  ctx.fillRect(0, 496, 256, 16);
  ctx.fillRect(0, 0, 14, 512);
  ctx.fillRect(242, 0, 14, 512);
  ctx.fillRect(122, 0, 12, 512);
  ctx.fillRect(0, 170, 256, 10);
  ctx.fillRect(0, 340, 256, 10);

  return finalizeTexture(c, { repeatX: 1, repeatY: 1 });
}
