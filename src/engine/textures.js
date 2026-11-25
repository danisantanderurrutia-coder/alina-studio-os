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

const pbrTexLoader = new THREE.TextureLoader();

export function loadPolyHavenPBR(polyId, { repeatX = 1, repeatY = 1, includeAO = true } = {}) {
  const base = `./polyhaven/textures/${polyId}`;
  const prep = (url, isColor) => {
    const t = pbrTexLoader.load(url);
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeatX, repeatY);
    t.anisotropy = 8;
    t.colorSpace = isColor ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    if (!isColor && url.endsWith('ao.jpg')) t.channel = 0;
    return t;
  };
  return {
    map: prep(`${base}/diffuse.jpg`, true),
    normalMap: prep(`${base}/nor_gl.jpg`, false),
    roughnessMap: prep(`${base}/rough.jpg`, false),
    aoMap: includeAO ? prep(`${base}/ao.jpg`, false) : undefined
  };
}

export function buildContactShadowTexture() {
  const [c, ctx] = makeCanvas(128);
  const g = ctx.createRadialGradient(64, 64, 8, 64, 64, 62);
  g.addColorStop(0, 'rgba(0, 0, 0, 0.56)');
  g.addColorStop(0.55, 'rgba(0, 0, 0, 0.25)');
  g.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return finalizeTexture(c, { repeatX: 1, repeatY: 1 });
}

export function buildGalleryArtTexture(variant = 1) {
  const [c, ctx] = makeCanvas(512);
  const palettes = {
    // 1–4: Modernist Eixample & Editorial Copper-Emerald Abstracts
    1:  { bg: '#12141a', c0: '#d18447', c1: '#1a735c', accent: '#f2c98a', frame: '#e5dfd3', style: 'eclipse' },
    2:  { bg: '#181014', c0: '#bf2e4c', c1: '#dbba6b', accent: '#f7e6c4', frame: '#ded6c6', style: 'arch' },
    3:  { bg: '#0f1715', c0: '#10b981', c1: '#c8963e', accent: '#e7e1d6', frame: '#1e222a', style: 'botanical' },
    4:  { bg: '#1d1916', c0: '#e2c799', c1: '#5c3a24', accent: '#c86446', frame: '#d8cfc0', style: 'horizon' },
    // 5–8: Chiaroscuro Dutch Still-Life & Classical Silhouette Studies (Alina Van Dijk Heritage)
    5:  { bg: '#120e10', c0: '#c86446', c1: '#3b1d28', accent: '#e6be78', frame: '#242731', style: 'chiaroscuro' },
    6:  { bg: '#ebe5d8', c0: '#1f242d', c1: '#9e3d24', accent: '#0b3b2c', frame: '#181a20', style: 'ink_study' },
    7:  { bg: '#0d1014', c0: '#d4af37', c1: '#5c331c', accent: '#f4e7ce', frame: '#1c1917', style: 'chiaroscuro' },
    8:  { bg: '#151c19', c0: '#c8963e', c1: '#0b3b2c', accent: '#e5dec9', frame: '#27231f', style: 'botanical' },
    // 9–12: Psychoanalytic Ink, Architectural Monoliths & Minimalist Linen Reliefs (Piso 3 & Suite)
    9:  { bg: '#e6dfd1', c0: '#18191f', c1: '#6b4226', accent: '#9e3d24', frame: '#221e1b', style: 'rorschach' },
    10: { bg: '#14161d', c0: '#9e3d24', c1: '#1e293b', accent: '#d4af37', frame: '#d8cfc0', style: 'arch' },
    11: { bg: '#ded6c6', c0: '#262932', c1: '#8c583a', accent: '#0f5132', frame: '#1b1d24', style: 'ink_study' },
    12: { bg: '#110d12', c0: '#7e22ce', c1: '#9a3412', accent: '#eab308', frame: '#1e1b24', style: 'eclipse' },
    // 13–16: Art-Déco Nocturne & Mediterranean Sunset Triptychs (Cabaret & Café)
    13: { bg: '#0b0d13', c0: '#d4af37', c1: '#881337', accent: '#fde68a', frame: '#18181b', style: 'deco' },
    14: { bg: '#f0ebe1', c0: '#b85a3a', c1: '#2a4365', accent: '#c8963e', frame: '#292524', style: 'horizon' },
    15: { bg: '#171311', c0: '#d97706', c1: '#064e3b', accent: '#f5f0e6', frame: '#312a24', style: 'deco' },
    16: { bg: '#191518', c0: '#be123c', c1: '#4c1d95', accent: '#f3d08a', frame: '#221f26', style: 'rorschach' }
  };
  const idx = ((variant - 1) % 16) + 1;
  const p = palettes[idx] || palettes[1];
  ctx.fillStyle = p.bg;
  ctx.fillRect(0, 0, 512, 512);

  // Passepartout / inner museum mat border
  ctx.strokeStyle = p.frame;
  ctx.lineWidth = 28;
  ctx.strokeRect(14, 14, 484, 484);

  ctx.save();
  ctx.beginPath();
  ctx.rect(36, 36, 440, 440);
  ctx.clip();

  const grad = ctx.createRadialGradient(256, 224, 18, 256, 256, 240);
  grad.addColorStop(0, p.c0);
  grad.addColorStop(0.62, p.c1);
  grad.addColorStop(1, p.bg);
  ctx.fillStyle = grad;
  ctx.fillRect(36, 36, 440, 440);

  if (p.style === 'arch') {
    ctx.fillStyle = p.c1;
    ctx.beginPath();
    ctx.arc(256, 230, 118, Math.PI, 0);
    ctx.lineTo(374, 430);
    ctx.lineTo(138, 430);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = p.accent;
    ctx.beginPath();
    ctx.arc(256, 185, 42, 0, Math.PI * 2);
    ctx.fill();
  } else if (p.style === 'botanical') {
    ctx.strokeStyle = p.accent;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(256, 435);
    ctx.quadraticCurveTo(238, 260, 272, 95);
    ctx.stroke();
    for (let l = 0; l < 7; l++) {
      const ly = 390 - l * 42;
      const side = l % 2 === 0 ? 1 : -1;
      ctx.fillStyle = l % 2 === 0 ? p.accent : p.c0;
      ctx.beginPath();
      ctx.ellipse(256 + side * 46, ly, 44, 16, side * -0.45, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (p.style === 'horizon') {
    ctx.fillStyle = p.c0;
    ctx.beginPath();
    ctx.arc(276, 206, 74, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = p.c1;
    ctx.fillRect(36, 278, 440, 198);
    ctx.strokeStyle = p.accent;
    ctx.lineWidth = 3;
    for (let y = 298; y <= 398; y += 20) {
      ctx.beginPath();
      ctx.moveTo(92, y);
      ctx.lineTo(420, y);
      ctx.stroke();
    }
  } else if (p.style === 'chiaroscuro') {
    // Dutch Golden Age chiaroscuro vessel & warm rim highlight
    ctx.fillStyle = 'rgba(0,0,0,0.48)';
    ctx.fillRect(36, 340, 440, 136);
    ctx.fillStyle = p.accent;
    ctx.beginPath();
    ctx.ellipse(246, 286, 68, 92, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = p.c1;
    ctx.beginPath();
    ctx.ellipse(264, 292, 62, 88, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = p.c0;
    ctx.beginPath();
    ctx.arc(178, 348, 28, 0, Math.PI * 2);
    ctx.fill();
  } else if (p.style === 'ink_study') {
    ctx.strokeStyle = p.c0;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(118, 390);
    ctx.bezierCurveTo(148, 120, 356, 110, 382, 360);
    ctx.stroke();
    ctx.strokeStyle = p.accent;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(270, 220, 78, 0.2, Math.PI * 1.45);
    ctx.stroke();
  } else if (p.style === 'rorschach') {
    for (const s of [-1, 1]) {
      ctx.fillStyle = p.c0;
      ctx.beginPath();
      ctx.ellipse(256 + s * 54, 210, 56, 86, s * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = p.accent;
      ctx.beginPath();
      ctx.ellipse(256 + s * 36, 318, 38, 52, s * -0.25, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (p.style === 'deco') {
    ctx.strokeStyle = p.accent;
    ctx.lineWidth = 3.5;
    for (let r = 48; r <= 196; r += 36) {
      ctx.beginPath();
      ctx.arc(256, 396, r, Math.PI, 0);
      ctx.stroke();
    }
    ctx.strokeRect(86, 86, 340, 340);
  } else {
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(256, 246, 104, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = p.accent;
    ctx.beginPath();
    ctx.arc(294, 212, 34, 0, Math.PI * 2);
    ctx.fill();
  }

  // Subtle canvas linen weave grain
  for (let i = 0; i < 2400; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255,250,240,0.035)' : 'rgba(0,0,0,0.045)';
    ctx.fillRect((i * 83) % 512, (i * 137) % 512, 2, 1);
  }
  ctx.restore();

  return finalizeTexture(c, { repeatX: 1, repeatY: 1 });
}

export function buildPersianRugTexture(palette = 'crimson') {
  const [c, ctx] = makeCanvas(512);
  const schemes = {
    crimson: { base: '#3d131b', border: '#181216', gold: '#c8963e', accent: '#124e3f', cream: '#d8cbb8' },
    emerald: { base: '#0d2b22', border: '#12131a', gold: '#c8963e', accent: '#6b1d2f', cream: '#d2c7b4' },
    ivory:   { base: '#cfc5b4', border: '#4a3b31', gold: '#9c6b3b', accent: '#2c333d', cream: '#ece6da' },
    charcoal:{ base: '#21242c', border: '#121419', gold: '#b57c4a', accent: '#3c4250', cream: '#9aa1ad' }
  };
  const s = schemes[palette] || schemes.crimson;

  ctx.fillStyle = s.base;
  ctx.fillRect(0, 0, 512, 512);

  // Outer multi-band woven border
  ctx.strokeStyle = s.border;
  ctx.lineWidth = 36;
  ctx.strokeRect(24, 24, 464, 464);
  ctx.strokeStyle = s.gold;
  ctx.lineWidth = 6;
  ctx.strokeRect(46, 46, 420, 420);
  ctx.strokeStyle = s.cream;
  ctx.lineWidth = 3;
  ctx.strokeRect(58, 58, 396, 396);

  // Corner spandrels
  ctx.fillStyle = s.accent;
  for (const [cx, cy] of [[62, 62], [450, 62], [62, 450], [450, 450]]) {
    ctx.beginPath();
    ctx.arc(cx, cy, 48, 0, Math.PI * 2);
    ctx.fill();
  }
  // Re-mask outer border clean
  ctx.strokeStyle = s.border;
  ctx.lineWidth = 28;
  ctx.strokeRect(14, 14, 484, 484);

  // Central Persian medallion + geometric diamonds
  ctx.save();
  ctx.translate(256, 256);
  for (let ring = 3; ring >= 1; ring--) {
    const r = ring * 38;
    ctx.fillStyle = ring === 3 ? s.accent : ring === 2 ? s.gold : s.cream;
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.25);
    ctx.lineTo(r * 0.92, 0);
    ctx.lineTo(0, r * 1.25);
    ctx.lineTo(-r * 0.92, 0);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // Subtle vintage distressing / weave grain so it never looks vector-flat
  for (let i = 0; i < 4200; i++) {
    const x = (i * 79) % 512;
    const y = (i * 131) % 512;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255,245,230,0.045)' : 'rgba(0,0,0,0.065)';
    ctx.fillRect(x, y, 2, 1);
  }

  return finalizeTexture(c, { repeatX: 1, repeatY: 1 });
}

export function buildEixampleHydraulicTileTexture(repeatX = 6, repeatY = 4) {
  const [c, ctx] = makeCanvas(256);
  ctx.fillStyle = '#e7dfd1';
  ctx.fillRect(0, 0, 256, 256);

  // Grout lines (2x2 sub-tiles)
  ctx.strokeStyle = 'rgba(60,52,44,0.28)';
  ctx.lineWidth = 3;
  ctx.strokeRect(1, 1, 126, 126);
  ctx.strokeRect(129, 1, 126, 126);
  ctx.strokeRect(1, 129, 126, 126);
  ctx.strokeRect(129, 129, 126, 126);

  // Barcelona modernista panot / floral geometry in terracotta & slate blue
  const drawTile = (ox, oy) => {
    ctx.save();
    ctx.translate(ox + 64, oy + 64);
    ctx.strokeStyle = '#334e68';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(0, 0, 42, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#b85a3a';
    for (let a = 0; a < 4; a++) {
      ctx.rotate(Math.PI / 2);
      ctx.beginPath();
      ctx.ellipse(0, -24, 9, 18, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#2a4365';
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  drawTile(0, 0);
  drawTile(128, 0);
  drawTile(0, 128);
  drawTile(128, 128);

  return finalizeTexture(c, { repeatX, repeatY });
}
