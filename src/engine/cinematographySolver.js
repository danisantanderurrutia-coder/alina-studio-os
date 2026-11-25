/**
 * CinematographySolver — fuente única de verdad (puro, sin THREE ni DOM).
 * Se copia tal cual a alina-studio-os/src/engine/cinematographySolver.js
 * (ver scripts de sincronización en SPEC §6). Probado por validate_cinematography.mjs.
 *
 * Convenciones (idénticas a alina-sanctuary.blueprint.json / Three.js / Unity):
 *  - 1 unidad = 1 metro, Y arriba, alinaRotY en radianes, frente de Alina F = (sin rotY, 0, cos rotY).
 *  - azimuthOffsetDeg se mide desde el frente de Alina hacia su derecha-de-pantalla R = (cos rotY, 0, -sin rotY).
 */

export const DEG = Math.PI / 180;
const UP = { x: 0, y: 1, z: 0 };

// ---------- vectores ----------
export const add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
export const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
export const mul = (a, s) => ({ x: a.x * s, y: a.y * s, z: a.z * s });
export const len = (a) => Math.hypot(a.x, a.y, a.z);
export const dist = (a, b) => len(sub(a, b));
export const norm = (a) => { const l = len(a) || 1; return mul(a, 1 / l); };
export const cross = (a, b) => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x
});
export const lerp3 = (a, b, t) => ({
  x: a.x + (b.x - a.x) * t,
  y: a.y + (b.y - a.y) * t,
  z: a.z + (b.z - a.z) * t
});
const r3 = (v) => ({ x: +v.x.toFixed(3), y: +v.y.toFixed(3), z: +v.z.toFixed(3) });

// ---------- óptica ----------
export function sensorGateFor(catalog, aspectRatio) {
  return catalog.sensorGates[aspectRatio] || catalog.sensorGates['9:16'];
}

/** FOV vertical real (grados) para una focal sobre el gate 35 mm del formato. */
export function verticalFovDeg(focalMm, aspectRatio, catalog) {
  const gate = sensorGateFor(catalog, aspectRatio);
  return (2 * Math.atan(gate.sensorHeightMm / (2 * focalMm))) / DEG;
}

export function ease(name, t) {
  const x = Math.min(1, Math.max(0, t));
  switch (name) {
    case 'linear': return x;
    case 'easeOutCubic': return 1 - Math.pow(1 - x, 3);
    case 'easeInOutCubic': return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    case 'easeInOutSine':
    default: return -(Math.cos(Math.PI * x) - 1) / 2;
  }
}

export function indexCatalog(catalog) {
  return {
    directors: new Map(catalog.directorStyles.map((d) => [d.id, d])),
    shotTypes: new Map(catalog.shotTypes.map((s) => [s.id, s])),
    moves: new Map(catalog.cameraMoves.map((m) => [m.id, m])),
    lights: new Map(catalog.lightingSchemes.map((l) => [l.id, l]))
  };
}

// ---------- Zero-Waste ----------
/** Devuelve { ok, issues[] } para un plano (reglas 02, 03, 07 y espejo). */
export function auditShot(shot, catalog) {
  const ix = indexCatalog(catalog);
  const st = ix.shotTypes.get(shot.shotTypeId);
  const mv = ix.moves.get(shot.cameraMoveId);
  const issues = [];
  if (shot.durationSec > 4.0) issues.push(`Regla 07: plano de ${shot.durationSec}s (> 4.0s)`);
  if (shot.cameraMoveId === 'handheld_walking_lubezki' && shot.durationSec > 3.0) {
    issues.push(`Walking Selfie: ${shot.durationSec}s (> 3.0s)`);
  }
  if (mv && mv.arcDegrees > 25) issues.push(`Regla 02: arco ${mv.arcDegrees}° (> 25°)`);
  if (st && st.shotRoleDefault === 'A-Roll' && st.id !== 'ots_mirror' && st.maxSafeHeadYawDeg > 25) {
    issues.push(`Regla 02: yaw seguro ${st.maxSafeHeadYawDeg}° (> 25°)`);
  }
  if (shot.shotRole === 'A-Roll' && (shot.motionStrength ?? 2.0) > 3.5) {
    issues.push(`Regla 03: motion ${shot.motionStrength} (> 3.5)`);
  }
  if (shot.mirrorShot && (shot.controlNetOverrides?.depthWeight ?? 1) > 0.4) {
    issues.push('mirrorShot: depthWeight debe ser ≤ 0.40');
  }
  return { ok: issues.length === 0, issues };
}

/** Audita una escena completa: Fórmula 1:2, suma de duración y cada plano. */
export function auditScene(scene, catalog) {
  const issues = [];
  let a = 0, b = 0, total = 0;
  for (const s of scene.shots) {
    const r = auditShot(s, catalog);
    r.issues.forEach((i) => issues.push(`${s.shotId}: ${i}`));
    total += s.durationSec;
    if (s.shotRole === 'A-Roll') a++; else b++;
  }
  if (b < 2) issues.push(`Fórmula 1:2: faltan B-Roll (${b} < 2)`);
  if (Math.abs(total - scene.audioTrack.durationSec) > 0.01) {
    issues.push(`Duración: planos ${total}s ≠ audio ${scene.audioTrack.durationSec}s`);
  }
  return { ok: issues.length === 0, issues, aRoll: a, bRoll: b, totalSec: total };
}

// ---------- presets por spot ----------
/** Plano por defecto de un spot según el mapa cinematográfico. */
export function defaultShotFor(spotId, role, brollIndex, catalog, overrides = {}) {
  const meta = catalog.spotCinematographyMap[spotId];
  if (!meta) throw new Error(`Spot sin mapa cinematográfico: ${spotId}`);
  const ix = indexCatalog(catalog);
  if (role === 'B-Roll') {
    const br = meta.defaultBRollPresets[brollIndex % meta.defaultBRollPresets.length];
    const dir = ix.directors.get(meta.defaultARollPreset.directorStyleId);
    return {
      shotId: `auto_${spotId}_broll${brollIndex}`,
      spotId, shotRole: 'B-Roll',
      directorStyleId: dir.id,
      shotTypeId: br.shotTypeId,
      cameraMoveId: br.cameraMoveId,
      lightingSchemeId: meta.defaultARollPreset.lightingSchemeId,
      focalLengthMm: br.focalMm,
      apertureFStop: 2.8,
      durationSec: br.durationSec,
      animation: 'Idle',
      focusMode: 'macro_prop_lock',
      brollIndex,
      mirrorShot: false,
      motionStrength: ix.moves.get(br.cameraMoveId).recommendedMotionStrength,
      ...overrides
    };
  }
  const p = meta.defaultARollPreset;
  const dir = ix.directors.get(p.directorStyleId);
  const st = ix.shotTypes.get(p.shotTypeId);
  const mv = ix.moves.get(p.cameraMoveId);
  return {
    shotId: `auto_${spotId}_aroll`,
    spotId, shotRole: 'A-Roll',
    directorStyleId: p.directorStyleId,
    shotTypeId: p.shotTypeId,
    cameraMoveId: p.cameraMoveId,
    lightingSchemeId: p.lightingSchemeId,
    focalLengthMm: st.defaultFocalMm,
    apertureFStop: st.defaultAperture,
    durationSec: mv.recommendedDurationSec,
    animation: 'Idle',
    focusMode: st.id === 'ots_mirror' ? 'mirror_reflection_plane' : 'iris_lock',
    mirrorShot: Boolean(meta.specialFlags?.mirrorShot && st.id === 'ots_mirror'),
    motionStrength: mv.recommendedMotionStrength,
    controlNetOverrides: meta.specialFlags?.mirrorShot && st.id === 'ots_mirror'
      ? { depthWeight: meta.specialFlags.controlNetDepthWeightOverride ?? 0.35 }
      : undefined,
    ...overrides
  };
}

// ---------- prompts ----------
function stripLensAndAr(text) {
  return text
    .replace(/--ar\s+\S+/gi, '')
    .replace(/\b\d{2,3}\s?mm(?:\s+(?:prime\s+lens|portrait\s+lens|lens|f\/[\d.]+))?(?:\s+f\/[\d.]+)?/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+,/g, ',')
    .trim();
}

export function selectForegroundPropId(spotId) {
  if (spotId === 'vanity') return 'perfume_bottle';
  if (spotId === 'podcast') return 'vintage_microphone';
  if (['bar', 'pool', 'cabaret'].includes(spotId)) return 'crystal_glass';
  return 'monstera_leaf';
}

export function assemblePrompts({ shot, spot, catalog, aspectRatio, foregroundProp = null }) {
  const ix = indexCatalog(catalog);
  const dir = ix.directors.get(shot.directorStyleId);
  const st = ix.shotTypes.get(shot.shotTypeId);
  const mv = ix.moves.get(shot.cameraMoveId);
  const li = ix.lights.get(shot.lightingSchemeId);
  const optics = `${shot.focalLengthMm}mm f/${shot.apertureFStop} lens`;
  const fgTokens = foregroundProp ? foregroundProp.promptTokens : null;
  let flux;
  if (shot.shotRole === 'B-Roll') {
    const brollText = (spot.brolls?.[shot.brollIndex ?? 0] || '').replace(/^B-Roll \d+:\s*/i, '');
    flux = [brollText, fgTokens, st.promptTokens, optics, li.promptLightingTokens, dir.fluxPromptTokens].filter(Boolean).join(', ');
  } else {
    const ctx = stripLensAndAr(spot.prompt || '');
    const hasChar = /Alina Van Dijk/i.test(ctx);
    const lock = hasChar ? '' : catalog.characterReference.tokenLockPrompt;
    flux = [lock, ctx, fgTokens, st.promptTokens, optics, li.promptLightingTokens, dir.fluxPromptTokens].filter(Boolean).join(', ');
  }
  const fluxClean = flux;
  flux += ` --ar ${aspectRatio}`;
  const cleanMoveTokens = (mv.motionPromptTokens || '')
    .replace(/--motion\s+[\d.]+/gi, '')
    .replace(/,?\s*strict\s+[\d.]+s?(?:\s+seconds?)?\s+(?:clip\s+)?(?:limit|max)/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const cleanDirMotion = (dir.motionPromptStyle || '')
    .replace(/,?\s*strict\s+[\d.]+s?(?:\s+seconds?)?\s+(?:clip\s+)?(?:limit|max)/gi, '')
    .trim();
  const motion = `${mv.motionPromptTokens}, ${dir.motionPromptStyle}`;
  const motionClean = [cleanMoveTokens, cleanDirMotion].filter(Boolean).join(', ');
  return { flux, fluxClean, motion, motionClean };
}

// ---------- solver ----------
/**
 * Resuelve un plano completo -> CinemaShotPayload (+ extras: threeJsGrade, prompts, zeroWaste, alinaRotY).
 * @param shot   StoryboardShot (ver schema v2)
 * @param spot   spot del blueprint (alinaPos, alinaRotY, macroPos, macroTarget, floor, brolls, prompt)
 * @param building {floorHeight,width,depth,centerZ}
 */
export function solveShot({ shot, spot, catalog, building, aspectRatio = '9:16', baseMode = 'night' }) {
  const ix = indexCatalog(catalog);
  const dir = ix.directors.get(shot.directorStyleId);
  const st = ix.shotTypes.get(shot.shotTypeId);
  const mv = ix.moves.get(shot.cameraMoveId);
  const li = ix.lights.get(shot.lightingSchemeId);
  const meta = catalog.spotCinematographyMap[shot.spotId] || { specialFlags: {} };
  const flags = meta.specialFlags || {};
  if (!dir || !st || !mv || !li) throw new Error(`Plano con ids inválidos: ${shot.shotId}`);

  const floorY = spot.floor * building.floorHeight;
  const isLaying = Boolean(flags.isLayingPosture) || shot.animation === 'Laying';
  const warnings = [];

  // Orientación de Alina: en mirrorShot se gira hacia el espejo planar.
  let rotY = spot.alinaRotY || 0;
  let mirrorPoint = null;
  if (shot.mirrorShot && flags.mirrorCenter) {
    mirrorPoint = { x: flags.mirrorCenter.x, y: floorY + flags.mirrorCenter.yOffset, z: flags.mirrorCenter.z };
    rotY = Math.atan2(mirrorPoint.x - spot.alinaPos.x, mirrorPoint.z - spot.alinaPos.z);
  }
  const F = { x: Math.sin(rotY), y: 0, z: Math.cos(rotY) };
  const R = { x: Math.cos(rotY), y: 0, z: -Math.sin(rotY) };

  // Objetivo
  let target, Fb = F, Rb = R;
  if (shot.shotRole === 'B-Roll' && spot.macroTarget && spot.macroPos) {
    target = { ...spot.macroTarget };
    Fb = norm({ x: spot.macroPos.x - spot.macroTarget.x, y: 0, z: spot.macroPos.z - spot.macroTarget.z });
    Rb = norm(cross(UP, Fb));
  } else {
    const h = isLaying ? (st.layingHeightOverrideM ?? 0.22) : st.targetHeightM;
    target = { x: spot.alinaPos.x, y: spot.alinaPos.y + h, z: spot.alinaPos.z };
    // OTS espejo: mirar al punto medio Alina<->espejo para encuadrar el reflejo.
    if (mirrorPoint) target = lerp3(target, mirrorPoint, 0.5);
  }

  // B-Roll alterna lado para dar variedad entre brollIndex pares/impares
  let azDeg = st.azimuthOffsetDeg;
  if (shot.shotRole === 'B-Roll' && (shot.brollIndex ?? 0) % 2 === 1) azDeg = -azDeg;
  const az = azDeg * DEG, el = st.elevationDeg * DEG;
  const horiz = add(mul(Fb, Math.cos(az)), mul(Rb, Math.sin(az)));
  const camDir = norm(add(mul(horiz, Math.cos(el)), mul(UP, Math.sin(el))));
  const base = add(target, mul(camDir, st.distanceM));
  const camRight = norm(cross(UP, horiz));

  const local = (o) => add(base, add(mul(camRight, o.right), add(mul(UP, o.up), mul(camDir, o.forward))));
  let startPos = local(mv.startOffsetLocal);
  let endPos = local(mv.endOffsetLocal);

  // Wall guard: recorte al volumen interior (el raycast fino lo hace el motor).
  const halfW = building.width / 2;
  const north = building.centerZ - building.depth / 2;
  const south = building.centerZ + building.depth / 2;
  const exterior = Boolean(flags.isExterior);
  let clamped = false;
  const clampPos = (p) => {
    const c = { ...p };
    if (!exterior) {
      c.x = Math.min(halfW - 0.4, Math.max(-halfW + 0.4, c.x));
      c.z = Math.min(south + 1.4, Math.max(north + 0.4, c.z));
      c.y = Math.min(floorY + building.floorHeight - 0.35, Math.max(floorY + 0.3, c.y));
    } else {
      c.y = Math.max(floorY + 0.3, c.y);
    }
    if (c.x !== p.x || c.y !== p.y || c.z !== p.z) clamped = true;
    return c;
  };
  startPos = clampPos(startPos);
  endPos = clampPos(endPos);

  const inBounds = (p) => exterior
    ? p.y >= floorY + 0.3
    : p.x >= -halfW + 0.35 - 1e-6 && p.x <= halfW - 0.35 + 1e-6 && p.z >= north + 0.35 - 1e-6 &&
      p.z <= south + 1.5 && p.y >= floorY + 0.3 - 1e-6 && p.y <= floorY + building.floorHeight - 0.3;
  const boundsOk = inBounds(startPos) && inBounds(endPos);
  if (clamped) warnings.push('Wall Guard recortó la trayectoria al volumen interior');

  // Foco (Bokeh DoF)
  const subject = shot.shotRole === 'B-Roll' ? target : { x: spot.alinaPos.x, y: target.y, z: spot.alinaPos.z };
  const dS = dist(startPos, subject);
  const dE = dist(endPos, subject);
  let focusStart = dS, focusEnd = dE;
  if (shot.focusMode === 'rack_prop_to_iris') { focusStart = 0.48 * dE; focusEnd = dE; }
  if (shot.focusMode === 'mirror_reflection_plane' && mirrorPoint) {
    const gap = dist(mirrorPoint, subject);
    focusStart = dist(startPos, mirrorPoint) + gap;
    focusEnd = dist(endPos, mirrorPoint) + gap;
  }

  // Rig de luz Realtime anclado a Alina (torso/ojos) en base F,R,U
  const lightTarget = { x: spot.alinaPos.x, y: spot.alinaPos.y + (isLaying ? 0.25 : 1.35), z: spot.alinaPos.z };
  const lightWorld = (L) => {
    const a = L.azimuthDeg * DEG, e = L.elevationDeg * DEG;
    const d = norm(add(mul(add(mul(F, Math.cos(a)), mul(R, Math.sin(a))), Math.cos(e)), mul(UP, Math.sin(e))));
    return r3(add(lightTarget, mul(d, L.distanceM)));
  };
  const lightSpec = (L) => ({
    worldPos: lightWorld(L), targetPos: r3(lightTarget),
    colorHex: L.colorHex, intensity: L.intensity, spotAngleDeg: L.spotAngleDeg ?? 55, kelvin: L.kelvin
  });

  if (!li.compatibleBaseModes.includes(baseMode)) {
    warnings.push(`Luz '${li.id}' no recomendada en modo ${baseMode}`);
  }

  // Salto 3: Foreground Framing (Props reales en primer término con desenfoque / bokeh)
  let foregroundProp = null;
  if (shot.foregroundFraming && catalog.foregroundProps) {
    const propId = shot.foregroundPropId || selectForegroundPropId(shot.spotId);
    const propSpec = catalog.foregroundProps[propId] || catalog.foregroundProps.monstera_leaf;
    if (propSpec) {
      const camFwd = norm(sub(target, startPos));
      const camViewRight = norm(cross(camFwd, UP));
      const camViewUp = norm(cross(camViewRight, camFwd));
      const propPos = add(
        startPos,
        add(
          mul(camFwd, propSpec.distanceMeters),
          add(
            mul(camViewRight, propSpec.lateralOffsetM),
            mul(camViewUp, propSpec.verticalOffsetM)
          )
        )
      );
      foregroundProp = {
        propId: propSpec.id,
        name: propSpec.name,
        polyhavenModelId: propSpec.polyhavenModelId,
        worldPos: r3(propPos),
        scale: propSpec.scale,
        distanceFromCameraM: propSpec.distanceMeters,
        promptTokens: propSpec.promptTokens
      };
    }
  }

  const zw = auditShot(shot, catalog);
  const prompts = assemblePrompts({ shot, spot, catalog, aspectRatio, foregroundProp });

  const minFocus = Math.min(focusStart, focusEnd, foregroundProp?.distanceFromCameraM ?? Infinity);
  const maxFocus = Math.max(focusStart, focusEnd);
  const depthBoundsM = {
    uNear: +Math.max(0.32, minFocus * 0.28).toFixed(3),
    uFar: +Math.max(maxFocus + 8.0, maxFocus * 2.8).toFixed(3)
  };

  return {
    shotId: shot.shotId,
    spotId: shot.spotId,
    baseMode,
    animation: shot.animation,
    mirrorShot: Boolean(shot.mirrorShot),
    foregroundFraming: Boolean(shot.foregroundFraming),
    foregroundProp,
    alinaRotY: +rotY.toFixed(4),
    alinaRotYDeg: +(rotY / DEG).toFixed(2),
    depthBoundsM,
    camera: {
      startPos: r3(startPos), startTarget: r3(target),
      endPos: r3(endPos), endTarget: r3(target),
      verticalFovDeg: +verticalFovDeg(shot.focalLengthMm, aspectRatio, catalog).toFixed(2),
      focalMm: shot.focalLengthMm,
      rollDeg: st.rollDeg,
      durationSec: shot.durationSec,
      easing: mv.easing,
      handheldHz: mv.handheldHz,
      handheldAmpM: mv.handheldAmpM
    },
    dof: {
      enabled: true,
      focalLengthMm: shot.focalLengthMm,
      apertureFStop: shot.apertureFStop,
      startFocusDistM: +focusStart.toFixed(3),
      endFocusDistM: +focusEnd.toFixed(3)
    },
    realtimeRig: {
      keyLight: lightSpec(li.realtimeKeyLight),
      rimLight: lightSpec(li.realtimeRimLight),
      ambientMultiplier: li.ambientMultiplier,
      reflectionMultiplier: li.reflectionMultiplier,
      fogDensityOverride: li.fogDensityOverride
    },
    volumeGrade: dir.volumeProfileGrade,
    threeJsGrade: dir.threeJsGrade,
    prompts,
    zeroWaste: zw,
    boundsOk,
    clamped,
    warnings
  };
}
