/**
 * NodeGraphBlueprintUI — Secuenciador Visual & Grafo de Tomas en «🎬 Cine & Escenas»
 *
 * Selección jerárquica ordenada de 5 niveles:
 *   1. Acto (Mes) ▸ 2. Capítulo (Semana) ▸ 3. Episodio (Día) ▸ 4. Escena ▸ 5. Toma (Inicio ➔ Corte)
 *
 * Cada Toma reúne de forma clara y sin tecnicismos confusos:
 *   • Visor 3D único (16:9 YouTube o 9:16 Celular) con botón contiguo de escalas de color y efectos.
 *   • 1. Prompts para Higgsfield (Imagen Realista según estudio/ambiente + Movimiento Inicio ➔ Corte).
 *   • 2. Texto de Voz de la Narradora Alina (Hablando a cámara Lip-Sync vs Voz en Off Podcast).
 *   • 3. Objetos que la acompañan en la toma (acompañando a Alina en el set o como plano detalle).
 */

import * as S from './cinematographySolver.js';
import * as HF from './higgsfieldAdapter.js';
import { buildZipBlob } from './zipWriter.js';
import { catalog } from './cinemaDirector.js';
import {
  ALINA_CHARACTER_BIBLE,
  DEFAULT_ACTS,
  ensureChapterHierarchy
} from '../data/alinaLoreData.js';
import { saveChapterToDB } from './shotsStorage.js';

const ix = S.indexCatalog(catalog);

const PASS_SPECS = [
  { id: 'beauty',  label: 'PBR Real',   short: 'PBR',     badgeCls: 'bg-[#c86446] text-white' },
  { id: 'bokeh',   label: 'Bokeh CoC',  short: 'Bokeh',   badgeCls: 'bg-amber-600 text-white' },
  { id: 'depth',   label: 'Depth 16b',  short: 'Depth',   badgeCls: 'bg-emerald-600 text-white' },
  { id: 'heatmap', label: 'Térmico Z',  short: 'Térmico', badgeCls: 'bg-rose-600 text-white' },
  { id: 'normals', label: 'Normals',    short: 'Normals', badgeCls: 'bg-indigo-600 text-white' },
  { id: 'mask',    label: 'Mask ID',    short: 'Mask ID', badgeCls: 'bg-fuchsia-600 text-white' }
];

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2500);
}

/** Reparte el guion de la escena entre N tomas de forma natural frase por frase. */
function splitScriptIntoShots(scriptText = '', count = 4) {
  const clean = String(scriptText || '').replace(/^[«"']+|[»"']+$/g, '').trim();
  if (!clean) {
    return Array.from({ length: count }, (_, i) =>
      i === 0
        ? 'Apertura de Alina a cámara presentando el tema del episodio.'
        : i === count - 1
          ? 'Cierre de Alina conectando con la audiencia antes del corte.'
          : `Narración de Alina mientras mostramos detalle del ambiente (${i}).`
    );
  }
  const sentences = clean
    .split(/(?<=[.!?…])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length >= count) {
    const out = [];
    for (let i = 0; i < count - 1; i++) out.push(sentences[i]);
    out.push(sentences.slice(count - 1).join(' '));
    return out;
  }
  const words = clean.split(/\s+/);
  const chunk = Math.max(1, Math.ceil(words.length / count));
  return Array.from({ length: count }, (_, i) => words.slice(i * chunk, (i + 1) * chunk).join(' ') || '…');
}

/** Construye las 4 Tomas iniciales para una Escena usando su locación, su guion y sus objetos asignados. */
function buildDefaultShotsForScene(scene, objects) {
  const spotId = scene?.spotId && catalog.spotCinematographyMap[scene.spotId] ? scene.spotId : 'podcast';
  const meta = catalog.spotCinematographyMap[spotId] || catalog.spotCinematographyMap.podcast;
  const defA = meta.defaultARollPreset;

  const sceneObjIds = Array.isArray(scene?.linkedObjectIds) ? scene.linkedObjectIds : [];
  const linkedObjs = objects.filter((o) => sceneObjIds.includes(o.id));
  const sameSpotObjs = objects.filter((o) => o.spotId === spotId || o.floor === meta.floor);
  const pool = [...linkedObjs, ...sameSpotObjs, ...objects];

  const propCompanion = pool[0] || null;
  const detailObj1 = pool.find((o) => o && o.id !== propCompanion?.id) || propCompanion || null;
  const detailObj2 = pool.find((o) => o && o.id !== propCompanion?.id && o.id !== detailObj1?.id) || detailObj1 || null;

  const slices = splitScriptIntoShots(scene?.scriptText || '', 4);

  return [
    {
      beatId: 'toma_1',
      role: 'A-Roll',
      voiceMode: 'on_camera',
      spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: defA.shotTypeId === 'ecu_eyes' ? 'mcu_interview' : defA.shotTypeId,
      cameraMoveId: defA.cameraMoveId,
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 50,
      apertureFStop: 1.8,
      durationSec: 3.5,
      objectId: propCompanion?.id || '',
      objectIds: propCompanion ? [propCompanion.id] : [],
      voiceSlice: slices[0]
    },
    {
      beatId: 'toma_2',
      role: 'B-Roll',
      voiceMode: 'voiceover',
      spotId: detailObj1?.spotId && catalog.spotCinematographyMap[detailObj1.spotId] ? detailObj1.spotId : spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: 'macro_broll_prop',
      cameraMoveId: 'lateral_slider_truck',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 85,
      apertureFStop: 2.8,
      durationSec: 2.5,
      objectId: detailObj1?.id || '',
      objectIds: detailObj1 ? [detailObj1.id] : [],
      voiceSlice: slices[1]
    },
    {
      beatId: 'toma_3',
      role: 'B-Roll',
      voiceMode: 'voiceover',
      spotId: detailObj2?.spotId && catalog.spotCinematographyMap[detailObj2.spotId] ? detailObj2.spotId : spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: 'macro_broll_prop',
      cameraMoveId: 'slow_dolly_push_in',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 85,
      apertureFStop: 2.8,
      durationSec: 2.5,
      objectId: detailObj2?.id || '',
      objectIds: detailObj2 ? [detailObj2.id] : [],
      voiceSlice: slices[2]
    },
    {
      beatId: 'toma_4',
      role: 'A-Roll',
      voiceMode: 'on_camera',
      spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: defA.shotTypeId === 'ots_mirror' ? 'cu_portrait' : 'mcu_interview',
      cameraMoveId: 'slow_dolly_pull_out',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 50,
      apertureFStop: 1.8,
      durationSec: 3.5,
      objectId: propCompanion?.id || '',
      objectIds: propCompanion ? [propCompanion.id] : [],
      voiceSlice: slices[3]
    }
  ];
}

function normalizeShotRecord(s, idx, scene, objects) {
  if (!s.beatId) s.beatId = `toma_${idx + 1}`;
  if (s.role === 'B-Roll' && s.cameraMoveId === 'rack_focus_macro_to_eyes') {
    s.cameraMoveId = 'slow_dolly_push_in';
  }
  if (!s.voiceMode) {
    s.voiceMode = s.role === 'B-Roll' ? 'voiceover' : 'on_camera';
  }
  if (!Array.isArray(s.objectIds)) {
    s.objectIds = s.objectId ? [s.objectId] : [];
  }
  if (s.role === 'B-Roll' && s.objectIds.length === 0 && objects[0]) {
    s.objectIds = [objects[0].id];
    s.objectId = objects[0].id;
  }
  if (s.objectIds.length > 0 && !s.objectId) {
    s.objectId = s.objectIds[0];
  }
  if (!s.spotId) s.spotId = scene?.spotId || 'podcast';
  return s;
}

function buildDefaultNodePositions(shotCount = 4) {
  const pos = {
    'node-scene':     { x: 28,  y: 52 },
    'node-dna':       { x: 28,  y: 392 },
    'node-vault':     { x: 28,  y: 655 },
    'node-viewer':    { x: 855, y: 48 },
    'node-inspector': { x: 855, y: 505 }
  };
  for (let i = 0; i < shotCount; i++) {
    pos[`node-beat-${i}`] = { x: 398, y: 48 + i * 324 };
  }
  return pos;
}

export function mountNodeGraphBlueprintUI(root, ctx) {
  if (!root) return null;

  const state = {
    actId: 'act-1',
    chapterId: null,
    episodeId: null,
    sceneId: null,
    activeBeatIdx: 0,
    aspectRatio: ctx.getAspectRatio?.() || '16:9',
    viewerPass: 'beauty',
    viewerFramePoint: 'start',
    panX: 14,
    panY: 12,
    zoom: 0.84,
    positions: buildDefaultNodePositions(4),
    cutPairCache: {},
    viewerPassCache: {},
    draggingNode: null,
    panning: null,
    tourRunning: false,
    tourAbort: false,
    execBanner: '',
    execNodeIds: new Set(),
    compiledScenes: [],
    monitorOpen: false,
    monitorPlaying: false,
    monitorSplit3D: true,
    monitorFilterScene: -1,
    monitorRaf: 0,
    monitorT0: 0,
    recordingDemo: false
  };

  function getChapters() {
    return (ctx.getChapters() || []).map((c) => ensureChapterHierarchy(c));
  }

  function getObjects() {
    return ctx.getObjects() || [];
  }

  function resolveHierarchy() {
    const chapters = getChapters();
    const objects = getObjects();
    const actMap = new Map();
    DEFAULT_ACTS.forEach((a) => actMap.set(a.id, a.label));
    chapters.forEach((c) => {
      if (c.actId && c.actTitle) actMap.set(c.actId, c.actTitle);
    });
    const acts = [...actMap.entries()].map(([id, label]) => ({ id, label }));

    if (!acts.some((a) => a.id === state.actId) && acts[0]) state.actId = acts[0].id;
    let actChapters = chapters.filter((c) => c.actId === state.actId);
    if (!actChapters.length && chapters.length) {
      state.actId = chapters[0].actId;
      actChapters = chapters.filter((c) => c.actId === state.actId);
    }

    const ch = actChapters.find((c) => c.id === state.chapterId) || actChapters[0] || chapters[0] || null;
    if (ch) state.chapterId = ch.id;

    const ep = ch ? (ch.episodes.find((e) => e.id === state.episodeId) || ch.episodes[0] || null) : null;
    if (ep) state.episodeId = ep.id;

    const sc = ep ? (ep.scenes.find((s) => s.id === state.sceneId) || ep.scenes[0] || null) : null;
    if (sc) {
      state.sceneId = sc.id;
      if (!Array.isArray(sc.shots) || sc.shots.length < 2) {
        sc.shots = buildDefaultShotsForScene(sc, objects);
      } else {
        sc.shots.forEach((s, idx) => normalizeShotRecord(s, idx, sc, objects));
      }
      for (let i = 0; i < sc.shots.length; i++) {
        if (!state.positions[`node-beat-${i}`]) {
          state.positions[`node-beat-${i}`] = { x: 398, y: 48 + i * 324 };
        }
      }
    }

    return { chapters, acts, actChapters, ch, ep, sc, objects };
  }

  function makeBeatCacheKey(sc, b, aspect = state.aspectRatio) {
    const lightMode = sc?.lightingMode || ctx.getLightingMode?.() || 'night';
    const primaryObj = b.objectIds?.[0] || b.objectId || '';
    return `${sc.id}_${b.beatId}_${aspect}_${lightMode}_${b.role}_${b.spotId}_${primaryObj}_${b.directorStyleId}_${b.shotTypeId}_${b.cameraMoveId}_${b.focalLengthMm}`;
  }

  /** Evalúa una Toma produciendo los 2 prompts de Higgsfield (Imagen con Ambiente/Objetos + Movimiento). */
  function evaluateBeat(beat, idx, ch, ep, sc, aspect = state.aspectRatio) {
    const objects = getObjects();
    const attachedObjs = (beat.objectIds || [])
      .map((id) => objects.find((o) => o.id === id))
      .filter(Boolean);
    const primaryVaultObj = attachedObjs[0] || (beat.role === 'B-Roll' ? objects[0] : null) || null;

    const isBroll = beat.role === 'B-Roll';
    const effectiveSpotId =
      isBroll && primaryVaultObj?.spotId && catalog.spotCinematographyMap[primaryVaultObj.spotId]
        ? primaryVaultObj.spotId
        : (catalog.spotCinematographyMap[beat.spotId] ? beat.spotId : (sc?.spotId || 'podcast'));

    const spot = ctx.findSpotById(effectiveSpotId) || ctx.getActiveSpot();
    const meta = catalog.spotCinematographyMap[effectiveSpotId] || { specialFlags: {} };
    const isMirror = !isBroll && beat.shotTypeId === 'ots_mirror' && Boolean(meta.specialFlags?.mirrorShot);
    const isRack = !isBroll && beat.cameraMoveId === 'rack_focus_macro_to_eyes';

    const shot = {
      shotId: `ep${ep?.number || 1}_sc${sc?.number || 1}_toma${idx + 1}_${isBroll ? 'detalle' : 'alina'}`,
      spotId: effectiveSpotId,
      shotRole: beat.role,
      brollIndex: idx % 2,
      directorStyleId: beat.directorStyleId || 'fincher_cronenweth',
      shotTypeId: isBroll ? 'macro_broll_prop' : (beat.shotTypeId || 'mcu_interview'),
      cameraMoveId: beat.cameraMoveId || (isBroll ? 'lateral_slider_truck' : 'slow_dolly_push_in'),
      lightingSchemeId: beat.lightingSchemeId || meta.defaultARollPreset?.lightingSchemeId || 'fincher_top_soft_negfill',
      focalLengthMm: isBroll ? 85 : (Number(beat.focalLengthMm) || 50),
      apertureFStop: isBroll ? 2.8 : (Number(beat.apertureFStop) || 1.8),
      durationSec: Math.min(4.0, Math.max(1.8, Number(beat.durationSec) || 3.0)),
      animation: spot?.defaultAnim || 'Idle',
      focusMode: isMirror ? 'mirror_reflection_plane' : isRack ? 'rack_prop_to_iris' : isBroll ? 'macro_prop_lock' : 'iris_lock',
      mirrorShot: isMirror,
      motionStrength: ix.moves.get(beat.cameraMoveId)?.recommendedMotionStrength ?? 2.2,
      foregroundFraming: isBroll ? false : Boolean(isRack),
      controlNetOverrides: isMirror ? { depthWeight: 0.35 } : undefined
    };

    const payload = ctx.cinema.resolve(shot, aspect);
    const manifest = HF.buildHiggsfieldManifest({
      shot,
      spot,
      payload,
      catalog,
      sceneId: `${ep?.id || 'ep'}_${sc?.id || 'sc'}`,
      aspectRatio: aspect
    });

    // Construir Prompt de Imagen Realista incorporando ambiente + objetos acompañantes (en A-Roll) o detalle puro (en B-Roll)
    let cleanFluxPrompt = payload.prompts.fluxClean || payload.prompts.flux;
    const li = ix.lights.get(shot.lightingSchemeId);
    const dir = ix.directors.get(shot.directorStyleId);

    if (isBroll && primaryVaultObj) {
      const extraCompanions = attachedObjs.slice(1).map((o) => o.name).join(', ');
      cleanFluxPrompt = [
        `85mm cinema close-up still-life shot of ${primaryVaultObj.promptToken}`,
        extraCompanions ? `accompanied on set by ${extraCompanions}` : null,
        li?.promptLightingTokens,
        dir?.fluxPromptTokens,
        'strictly zero human presence, no face, no hands, readable architectural room context and crisp PBR surface detail'
      ]
        .filter(Boolean)
        .join(', ');

      manifest.structuredPrompt.blocks.subject = `Zero human presence; clear architectural/tabletop shot of ${primaryVaultObj.name} (${primaryVaultObj.handle}) with smooth specular highlights`;
      manifest.structuredPrompt.compiled = `[CAMERA: ${manifest.structuredPrompt.blocks.camera}] [SUBJECT: ${manifest.structuredPrompt.blocks.subject}] [PHYSICS: ${primaryVaultObj.motionPrompt || manifest.structuredPrompt.blocks.physics}] [LIGHTING: ${manifest.structuredPrompt.blocks.lighting}]`;
    } else if (!isBroll && attachedObjs.length > 0) {
      // En A-Roll con Alina en cámara, los objetos seleccionados la acompañan orgánicamente en el ambiente del estudio
      const companionDesc = attachedObjs
        .map((o) => `${o.name} (${o.handle}) positioned naturally in the set environment`)
        .join('; ');
      cleanFluxPrompt = `${cleanFluxPrompt}, accompanied in scene by ${companionDesc}`;
    }

    const kelvinKey = payload.realtimeRig.keyLight.kelvin || 3200;
    return {
      shot,
      spot,
      vaultObj: primaryVaultObj,
      attachedObjs,
      payload,
      manifest,
      cleanFluxPrompt,
      kelvinKey
    };
  }

  function positionCameraForBeatAt(evalData, tNorm = 0, aspect = state.aspectRatio) {
    const { shot, vaultObj, payload } = evalData;
    const isLand = aspect === '16:9';

    if (shot.shotRole === 'B-Roll') {
      if (ctx.alina?.root) ctx.alina.root.visible = false;
      if (ctx.cinema?.foregroundGroup) ctx.cinema.foregroundGroup.visible = false;

      if (vaultObj?.camPos && vaultObj?.camTarget) {
        const tx = vaultObj.camTarget.x;
        const ty = vaultObj.camTarget.y;
        const tz = vaultObj.camTarget.z;
        const vx = vaultObj.camPos.x - tx;
        const vy = vaultObj.camPos.y - ty;
        const vz = vaultObj.camPos.z - tz;
        const horizLen = Math.hypot(vx, vz) || 1;
        const rx = vz / horizLen;
        const rz = -vx / horizLen;

        const basePullback = isLand ? 1.22 : 1.56;
        let distFactor = basePullback;
        let latShiftM = 0;
        let vertShiftM = 0;

        const mv = shot.cameraMoveId;
        if (mv === 'lateral_slider_truck' || mv === 'subtle_parallax_arc' || mv === 'subtle_parallax_arc_left') {
          latShiftM = (tNorm - 0.5) * 0.34 * (mv === 'subtle_parallax_arc_left' ? -1 : 1);
        } else if (mv === 'slow_dolly_pull_out') {
          distFactor = basePullback * (0.82 + tNorm * 0.34);
        } else if (mv === 'pedestal_reveal_up' || mv === 'crane_jib_high_to_eye') {
          vertShiftM = (tNorm - 0.5) * 0.22 * (mv === 'crane_jib_high_to_eye' ? -1 : 1);
        } else if (mv === 'static_breathing') {
          distFactor = basePullback * (1.0 - tNorm * 0.04);
        } else {
          distFactor = basePullback * (1.16 - tNorm * 0.30);
        }

        const cx = tx + vx * distFactor + rx * latShiftM;
        const cy = ty + vy * distFactor + vertShiftM;
        const cz = tz + vz * distFactor + rz * latShiftM;

        ctx.camCtrl.isTransitioning = false;
        ctx.camCtrl.camera.position.set(cx, cy, cz);
        ctx.camCtrl.controls.target.set(tx, ty, tz);
        ctx.camCtrl.camera.fov = isLand ? 38 : 44;
        ctx.camCtrl.camera.updateProjectionMatrix();
        ctx.camCtrl.controls.update();

        const realDistM = Math.max(0.3, Math.hypot(cx - tx, cy - ty, cz - tz));
        return {
          focusDistM: +realDistM.toFixed(3),
          depthBoundsM: {
            uNear: +Math.max(0.15, realDistM * 0.35).toFixed(3),
            uFar: +Math.max(realDistM + 5.0, realDistM * 3.1).toFixed(3)
          }
        };
      }
    }

    if (ctx.alina?.root) ctx.alina.root.visible = true;
    ctx.cinema.seekNormalized(tNorm, { cleanKeyframe: true });
    const focusDistM = tNorm === 0 ? payload.dof.startFocusDistM : payload.dof.endFocusDistM;
    return {
      focusDistM,
      depthBoundsM: payload.depthBoundsM
    };
  }

  function ensureBeatCutPair(evalData, beatKey, aspect = state.aspectRatio) {
    if (state.cutPairCache[beatKey]) return state.cutPairCache[beatKey];
    if (!ctx.camCtrl || !ctx.cinema) return null;

    const isLand = aspect === '16:9';
    const w = isLand ? 512 : 288;
    const h = isLand ? 288 : 512;
    const prevAlinaVis = ctx.alina?.root ? ctx.alina.root.visible : true;

    ctx.cinema.apply(evalData.shot, aspect);
    const st0 = positionCameraForBeatAt(evalData, 0, aspect);
    const startBeauty = ctx.camCtrl.renderFrameDataURL(w, h, 'beauty');

    const st1 = positionCameraForBeatAt(evalData, 1, aspect);
    const endBeauty = ctx.camCtrl.renderFrameDataURL(w, h, 'beauty');

    if (evalData.shot.shotRole !== 'B-Roll') ctx.cinema.seekNormalized(0, { cleanKeyframe: true });
    if (ctx.alina?.root) ctx.alina.root.visible = prevAlinaVis;
    ctx.camCtrl.render();

    const pair = {
      startBeauty,
      endBeauty,
      startFocusM: st0.focusDistM,
      endFocusM: st1.focusDistM
    };
    state.cutPairCache[beatKey] = pair;
    state.viewerPassCache[`${beatKey}_start_beauty`] = startBeauty;
    state.viewerPassCache[`${beatKey}_end_beauty`] = endBeauty;
    return pair;
  }

  function ensureViewerSinglePass(evalData, beatKey, framePoint = state.viewerFramePoint, pass = state.viewerPass, aspect = state.aspectRatio) {
    const passKey = `${beatKey}_${framePoint}_${pass}`;
    if (state.viewerPassCache[passKey]) return state.viewerPassCache[passKey];
    if (!ctx.camCtrl || !ctx.cinema) return null;

    const isLand = aspect === '16:9';
    const w = isLand ? 768 : 432;
    const h = isLand ? 432 : 768;
    const tNorm = framePoint === 'end' ? 1 : 0;
    const prevAlinaVis = ctx.alina?.root ? ctx.alina.root.visible : true;

    ctx.cinema.apply(evalData.shot, aspect);
    const camMetrics = positionCameraForBeatAt(evalData, tNorm, aspect);

    const dofSpec = {
      enabled: pass === 'bokeh',
      focalLengthMm: evalData.shot.focalLengthMm,
      apertureFStop: evalData.shot.apertureFStop,
      focusDistM: camMetrics.focusDistM,
      sensorHeightMm: isLand ? 20.25 : 36.0
    };

    const url = ctx.camCtrl.renderFrameDataURL(w, h, pass, {
      dof: dofSpec,
      depthBoundsM: camMetrics.depthBoundsM
    });

    if (evalData.shot.shotRole !== 'B-Roll') ctx.cinema.seekNormalized(0, { cleanKeyframe: true });
    if (ctx.alina?.root) ctx.alina.root.visible = prevAlinaVis;
    ctx.camCtrl.render();

    state.viewerPassCache[passKey] = url;
    return url;
  }

  function loadImageAsync(dataUrl) {
    return new Promise((resolve) => {
      if (!dataUrl) { resolve(null); return; }
      const im = new Image();
      im.onload = () => resolve(im);
      im.onerror = () => resolve(null);
      im.src = dataUrl;
    });
  }

  // ==========================================================================
  // MONITOR DE REPRODUCCIÓN DE LA ESCENA
  // ==========================================================================
  function stopMonitorLoop() {
    if (state.monitorRaf) {
      cancelAnimationFrame(state.monitorRaf);
      state.monitorRaf = 0;
    }
    state.monitorPlaying = false;
  }

  function renderMonitorFrame(sceneClip, localT, globalElapsedSec, totalDurSec) {
    const canvas = root.querySelector('#bp-monitor-canvas');
    if (!canvas || !sceneClip || !sceneClip.startImg) return;
    const c2 = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    c2.save();
    c2.fillStyle = '#05070c';
    c2.fillRect(0, 0, W, H);

    const mv = sceneClip.moveId;
    const easeT = -(Math.cos(Math.PI * Math.min(1, Math.max(0, localT))) - 1) / 2;
    let scale = 1.03;
    let tx = 0;
    let ty = 0;
    if (mv === 'slow_dolly_push_in' || mv === 'rack_focus_macro_to_eyes') {
      scale = 1.0 + easeT * 0.065;
    } else if (mv === 'slow_dolly_pull_out') {
      scale = 1.07 - easeT * 0.06;
    } else if (mv === 'lateral_slider_truck' || mv === 'subtle_parallax_arc') {
      scale = 1.05;
      tx = (easeT - 0.5) * W * 0.05;
    } else if (mv === 'pedestal_reveal_up') {
      scale = 1.05;
      ty = (0.5 - easeT) * H * 0.05;
    } else {
      scale = 1.012 + Math.sin(localT * Math.PI) * 0.012;
    }

    const drawTransformed = (img, alpha = 1) => {
      if (!img) return;
      c2.save();
      c2.globalAlpha = alpha;
      c2.translate(W / 2 + tx, H / 2 + ty);
      c2.scale(scale, scale);
      c2.drawImage(img, -W / 2, -H / 2, W, H);
      c2.restore();
    };

    c2.save();
    c2.filter = 'contrast(1.10) saturate(1.12) brightness(1.02)';
    drawTransformed(sceneClip.startImg, 1.0);
    if (sceneClip.endImg) drawTransformed(sceneClip.endImg, easeT * 0.9);
    c2.restore();

    if (state.monitorSplit3D) {
      const splitX = Math.round(W * 0.35);
      c2.save();
      c2.beginPath();
      c2.rect(0, 0, splitX, H);
      c2.clip();
      c2.drawImage(sceneClip.startImg, 0, 0, W, H);
      c2.restore();
      c2.strokeStyle = 'rgba(56, 189, 248, 0.9)';
      c2.lineWidth = 1.5;
      c2.beginPath();
      c2.moveTo(splitX, 0);
      c2.lineTo(splitX, H);
      c2.stroke();
    }

    c2.fillStyle = 'rgba(6, 9, 17, 0.8)';
    c2.fillRect(0, 0, W, 26);
    c2.font = 'bold 9.5px ui-monospace, monospace';
    c2.fillStyle = sceneClip.role === 'A-Roll' ? '#f472b6' : '#fbbf24';
    c2.fillText(`● TOMA ${sceneClip.beatIdx + 1}/${sceneClip.totalBeats} [${sceneClip.voiceMode === 'voiceover' ? 'VOZ EN OFF' : 'ALINA EN CÁMARA'}]`, 8, 16);
    c2.textAlign = 'right';
    c2.fillStyle = '#34d399';
    c2.fillText(`${globalElapsedSec.toFixed(1)}s / ${totalDurSec.toFixed(1)}s`, W - 8, 16);
    c2.textAlign = 'left';

    if (sceneClip.voiceSlice) {
      const gradSub = c2.createLinearGradient(0, H - 68, 0, H);
      gradSub.addColorStop(0, 'rgba(0,0,0,0)');
      gradSub.addColorStop(1, 'rgba(4,6,12,0.92)');
      c2.fillStyle = gradSub;
      c2.fillRect(0, H - 68, W, 68);
      c2.font = 'italic 600 10.5px -apple-system, BlinkMacSystemFont, sans-serif';
      c2.fillStyle = '#f8fafc';
      c2.textAlign = 'center';
      const words = `«${sceneClip.voiceSlice}»`.split(' ');
      let line = '';
      const lines = [];
      for (const w of words) {
        const test = line ? `${line} ${w}` : w;
        if (c2.measureText(test).width > W - 24 && line) {
          lines.push(line);
          line = w;
        } else {
          line = test;
        }
      }
      if (line) lines.push(line);
      lines.slice(0, 2).forEach((ln, idx) => c2.fillText(ln, W / 2, H - 28 + idx * 13));
      c2.textAlign = 'left';
    }

    c2.fillStyle = 'rgba(255,255,255,0.18)';
    c2.fillRect(0, H - 4, W, 4);
    c2.fillStyle = sceneClip.role === 'A-Roll' ? '#ec4899' : '#f59e0b';
    c2.fillRect(0, H - 4, W * Math.min(1, localT), 4);
    c2.restore();
  }

  function startReelPlaybackLoop() {
    stopMonitorLoop();
    if (!state.compiledScenes.length) return;
    state.monitorOpen = true;
    state.monitorPlaying = true;
    state.monitorT0 = performance.now();

    const tick = () => {
      if (!state.monitorPlaying || !state.compiledScenes.length) return;
      const clips =
        state.monitorFilterScene >= 0 && state.compiledScenes[state.monitorFilterScene]
          ? [state.compiledScenes[state.monitorFilterScene]]
          : state.compiledScenes;
      const totalDur = clips.reduce((s, c) => s + c.durationSec, 0) || 3.0;
      const elapsed = ((performance.now() - state.monitorT0) / 1000) % totalDur;

      let acc = 0;
      let activeClip = clips[0];
      let localT = 0;
      for (const c of clips) {
        if (elapsed >= acc && elapsed < acc + c.durationSec) {
          activeClip = c;
          localT = (elapsed - acc) / c.durationSec;
          break;
        }
        acc += c.durationSec;
      }

      root.querySelectorAll('[data-select-beat]').forEach((el) => {
        const bIdx = Number(el.dataset.selectBeat);
        el.classList.toggle('ring-2', bIdx === activeClip.beatIdx);
        el.classList.toggle('ring-emerald-400', bIdx === activeClip.beatIdx);
      });

      renderMonitorFrame(activeClip, localT, elapsed, totalDur);
      state.monitorRaf = requestAnimationFrame(tick);
    };
    state.monitorRaf = requestAnimationFrame(tick);
  }

  async function runInteractivePipelineTour() {
    if (state.tourRunning) {
      state.tourAbort = true;
      state.tourRunning = false;
      state.execBanner = '';
      state.execNodeIds.clear();
      stopMonitorLoop();
      render();
      return;
    }

    const { ch, ep, sc } = resolveHierarchy();
    if (!ch || !ep || !sc) return;
    stopMonitorLoop();
    state.tourRunning = true;
    state.tourAbort = false;
    state.compiledScenes = [];
    state.monitorOpen = true;
    state.monitorFilterScene = -1;

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const beats = sc.shots;

    for (let i = 0; i < beats.length; i++) {
      if (state.tourAbort) break;
      const b = beats[i];
      const ev = evaluateBeat(b, i, ch, ep, sc, state.aspectRatio);
      const bKey = makeBeatCacheKey(sc, b, state.aspectRatio);

      state.activeBeatIdx = i;
      state.execNodeIds = new Set(['node-scene', b.role === 'A-Roll' ? 'node-dna' : 'node-vault', `node-beat-${i}`, 'node-viewer', 'node-inspector']);
      state.execBanner = `▶ Reproduciendo Toma ${i + 1}/${beats.length} (${state.aspectRatio}) · Inicio ➔ Corte…`;
      render();
      await sleep(120);
      if (state.tourAbort) break;

      const pair = ensureBeatCutPair(ev, bKey, state.aspectRatio);
      const [startImg, endImg] = await Promise.all([
        loadImageAsync(pair?.startBeauty),
        loadImageAsync(pair?.endBeauty || pair?.startBeauty)
      ]);

      const sceneClip = {
        beatIdx: i,
        totalBeats: beats.length,
        role: b.role,
        voiceMode: b.voiceMode || (b.role === 'B-Roll' ? 'voiceover' : 'on_camera'),
        durationSec: Number(b.durationSec) || 3.0,
        voiceSlice: b.voiceSlice || '',
        moveId: ev.shot.cameraMoveId,
        startImg,
        endImg
      };
      state.compiledScenes.push(sceneClip);
      render();

      const previewStart = performance.now();
      while (performance.now() - previewStart < 560 && !state.tourAbort) {
        const pT = (performance.now() - previewStart) / 560;
        renderMonitorFrame(sceneClip, pT, pT * sceneClip.durationSec, sceneClip.durationSec);
        await sleep(32);
      }
    }

    state.tourRunning = false;
    state.execNodeIds.clear();
    if (!state.tourAbort && state.compiledScenes.length > 0) {
      state.execBanner = `✅ Escena en reproducción continua (${state.compiledScenes.length} tomas · ${state.aspectRatio})`;
      render();
      startReelPlaybackLoop();
    } else {
      state.execBanner = '';
      render();
    }
  }

  /** Exporta Full-HD (1920×1080 en 16:9 YouTube o 1080×1920 en 9:16 Celular) para una Toma. */
  function captureFullResBeatEntries(evalData, folderPrefix = '', beatObj = {}) {
    const { shot, attachedObjs, manifest, cleanFluxPrompt } = evalData;
    const isLand = state.aspectRatio === '16:9';
    const prevAlinaVis = ctx.alina?.root ? ctx.alina.root.visible : true;
    const overscan = manifest.keyframeStrategy.overscanHandheldPost;
    const w = overscan?.enabled ? overscan.renderResolution.width : (isLand ? 1920 : 1080);
    const h = overscan?.enabled ? overscan.renderResolution.height : (isLand ? 1080 : 1920);
    const resTag = isLand ? '1920x1080' : '1080x1920';

    ctx.cinema.apply(shot, state.aspectRatio);
    const entries = [];

    const captureAt = (tNorm, tag) => {
      const camMetrics = positionCameraForBeatAt(evalData, tNorm, state.aspectRatio);
      const dofSpec = {
        enabled: true,
        focalLengthMm: shot.focalLengthMm,
        apertureFStop: shot.apertureFStop,
        focusDistM: camMetrics.focusDistM,
        sensorHeightMm: isLand ? 20.25 : 36.0
      };

      entries.push({ path: `${folderPrefix}frames_3d/${tag}_pbr_${resTag}.png`, data: ctx.camCtrl.renderFrameDataURL(w, h, 'beauty') });
      entries.push({ path: `${folderPrefix}frames_3d/${tag}_bokeh_${resTag}.png`, data: ctx.camCtrl.renderFrameDataURL(w, h, 'bokeh', { dof: dofSpec }) });
      entries.push({ path: `${folderPrefix}frames_3d/${tag}_depth_${resTag}.png`, data: ctx.camCtrl.renderFrameDataURL(w, h, 'depth', { depthBoundsM: camMetrics.depthBoundsM }) });
      entries.push({ path: `${folderPrefix}frames_3d/${tag}_normals_${resTag}.png`, data: ctx.camCtrl.renderFrameDataURL(w, h, 'normals') });
      entries.push({ path: `${folderPrefix}frames_3d/${tag}_mask_${resTag}.png`, data: ctx.camCtrl.renderFrameDataURL(w, h, 'mask') });
    };

    captureAt(0, 'inicio');
    captureAt(1, 'corte');

    attachedObjs.forEach((vo) => {
      if (vo?.image?.startsWith('data:')) {
        entries.push({
          path: `${folderPrefix}objetos_acompanantes/${vo.handle.replace('@', '')}.png`,
          data: vo.image
        });
      }
    });

    if (ctx.alina?.root) ctx.alina.root.visible = prevAlinaVis;
    ctx.camCtrl.render();

    manifest.renderToRealComfyJob.globalStage1A.prompt = cleanFluxPrompt;
    manifest.narratorVoice = {
      mode: beatObj.voiceMode || 'on_camera',
      voiceId: ALINA_CHARACTER_BIBLE.voice.id,
      text: beatObj.voiceSlice || ''
    };
    manifest.accompanyingObjects = attachedObjs.map((o) => ({ id: o.id, handle: o.handle, name: o.name }));

    entries.push({ path: `${folderPrefix}higgsfield_manifest.json`, data: manifest });
    entries.push({
      path: `${folderPrefix}FICHA_TOMA_HIGGSFIELD.txt`,
      data: [
        `=== FICHA DE TOMA (${state.aspectRatio} · ${resTag}) ===`,
        `Modo Sujeto:    ${shot.shotRole === 'A-Roll' ? 'Alina en Cámara' : 'Detalle de Objeto / Ambiente'}`,
        `Modo Narradora: ${beatObj.voiceMode === 'voiceover' ? 'Voz en Off (Podcast)' : 'Hablando a Cámara (Lip-Sync)'}`,
        `Cámara / Lente: ${manifest.higgsfieldCinemaStudio.cameraLabel} + ${manifest.higgsfieldCinemaStudio.lensLabel}`,
        `Objetos:        ${attachedObjs.map((o) => o.handle).join(', ') || 'Ninguno'}`,
        ``,
        `1A) PROMPT IMAGEN REALISTA (3D -> Foto Real con Ambiente):`,
        cleanFluxPrompt,
        ``,
        `1B) PROMPT MOVIMIENTO HIGGSFIELD (Inicio -> Corte):`,
        manifest.structuredPrompt.compiled,
        ``,
        `2) TEXTO VOZ NARRADORA (Alina):`,
        `"${beatObj.voiceSlice || ''}"`
      ].join('\n')
    });

    return entries;
  }

  // ==========================================================================
  // CABLES BÉZIER EN TIEMPO REAL
  // ==========================================================================
  function updateCablesSVG() {
    const svg = root.querySelector('#bp-cables-svg');
    const stage = root.querySelector('#bp-graph-stage');
    if (!svg || !stage) return;

    const { ch, ep, sc } = resolveHierarchy();
    if (!ch || !ep || !sc) return;
    const beats = sc.shots;
    const evaluated = beats.map((b, i) => evaluateBeat(b, i, ch, ep, sc, state.aspectRatio));

    const getPort = (nodeId, side = 'right', yRatio = 0.5) => {
      const el = stage.querySelector(`#${nodeId}`);
      const pos = state.positions[nodeId] || { x: 0, y: 0 };
      const w = el ? el.offsetWidth : 340;
      const h = el ? el.offsetHeight : 220;
      return {
        x: side === 'right' ? pos.x + w : side === 'left' ? pos.x : pos.x + w * 0.5,
        y: side === 'bottom' ? pos.y + h : side === 'top' ? pos.y : pos.y + h * yRatio
      };
    };

    const cables = [];

    // Escena -> Todas las tomas (guion/ambiente)
    beats.forEach((_, i) => {
      cables.push({
        from: getPort('node-scene', 'right', Math.min(0.88, 0.28 + i * 0.14)),
        to: getPort(`node-beat-${i}`, 'left', 0.22),
        color: '#a855f7',
        opacity: i === state.activeBeatIdx ? 0.92 : 0.32,
        width: i === state.activeBeatIdx ? 2.4 : 1.4,
        dashed: true
      });
    });

    // Protagonista Alina -> Tomas donde aparece Alina | Objetos -> Tomas que llevan objetos acompañantes o detalle
    beats.forEach((b, i) => {
      if (b.role === 'A-Roll') {
        cables.push({
          from: getPort('node-dna', 'right', 0.5),
          to: getPort(`node-beat-${i}`, 'left', 0.58),
          color: '#ec4899',
          opacity: i === state.activeBeatIdx ? 0.95 : 0.4,
          width: i === state.activeBeatIdx ? 2.6 : 1.5,
          dashed: false
        });
      }
      if (b.role === 'B-Roll' || (Array.isArray(b.objectIds) && b.objectIds.length > 0)) {
        cables.push({
          from: getPort('node-vault', 'right', 0.5),
          to: getPort(`node-beat-${i}`, 'left', 0.78),
          color: '#f59e0b',
          opacity: i === state.activeBeatIdx ? 0.95 : 0.38,
          width: i === state.activeBeatIdx ? 2.6 : 1.5,
          dashed: b.role === 'A-Roll'
        });
      }
    });

    // Continuidad de Corte vertical entre Tomas
    for (let i = 0; i < beats.length - 1; i++) {
      const deltaK = Math.abs(evaluated[i].kelvinKey - evaluated[i + 1].kelvinKey);
      const raccordOk = deltaK <= 1800;
      cables.push({
        from: getPort(`node-beat-${i}`, 'bottom'),
        to: getPort(`node-beat-${i + 1}`, 'top'),
        vertical: true,
        color: raccordOk ? '#10b981' : '#f59e0b',
        opacity: 0.92,
        width: 2.5,
        dashed: !raccordOk,
        badgeText: raccordOk ? `✂ Corte · Luz OK ✔` : `✂ Cambio Luz Δ${deltaK}K`
      });
    }

    // Toma Activa -> Visor 3D -> Inspector de Toma (Prompts + Voz + Objetos)
    const activeBeatNode = `node-beat-${state.activeBeatIdx}`;
    cables.push({
      from: getPort(activeBeatNode, 'right', 0.42),
      to: getPort('node-viewer', 'left', 0.4),
      color: '#38bdf8',
      opacity: 1.0,
      width: 3.2,
      dashed: true,
      glow: true
    });
    cables.push({
      from: getPort('node-viewer', 'bottom'),
      to: getPort('node-inspector', 'top'),
      vertical: true,
      color: '#34d399',
      opacity: 0.95,
      width: 2.8,
      dashed: false
    });

    svg.innerHTML = cables
      .map((c) => {
        const { from, to } = c;
        let d;
        if (c.vertical) {
          const dy = Math.max(22, Math.abs(to.y - from.y) * 0.45);
          d = `M ${from.x} ${from.y} C ${from.x} ${from.y + dy}, ${to.x} ${to.y - dy}, ${to.x} ${to.y}`;
        } else {
          const dx = Math.max(58, Math.abs(to.x - from.x) * 0.52);
          d = `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
        }
        const midX = (from.x + to.x) * 0.5;
        const midY = (from.y + to.y) * 0.5;
        const showPulse = state.tourRunning && c.opacity >= 0.9;
        return `
          <g>
            ${c.glow || showPulse ? `<path d="${d}" fill="none" stroke="${c.color}" stroke-width="9" stroke-opacity="0.22" />` : ''}
            <path d="${d}" fill="none" stroke="${c.color}" stroke-width="${c.width}" stroke-opacity="${c.opacity}"
              ${c.dashed ? 'stroke-dasharray="7 5" class="bp-cable-anim"' : ''} stroke-linecap="round" />
            ${
              showPulse
                ? `<circle r="5.5" fill="#ffffff"><animateMotion dur="0.65s" repeatCount="indefinite" path="${d}" /></circle>`
                : ''
            }
            <circle cx="${from.x}" cy="${from.y}" r="5" fill="${c.color}" fill-opacity="${c.opacity}" />
            <circle cx="${to.x}" cy="${to.y}" r="5.5" fill="#060911" stroke="${c.color}" stroke-width="2.2" />
            ${
              c.badgeText
                ? `<g transform="translate(${midX}, ${midY})">
                     <rect x="-64" y="-9" width="128" height="18" rx="9" fill="#090d16" stroke="${c.color}" stroke-opacity="0.55" stroke-width="1"/>
                     <text x="0" y="3.5" text-anchor="middle" fill="${c.color}" font-size="9" font-family="ui-monospace, monospace" font-weight="700">${esc(c.badgeText)}</text>
                   </g>`
                : ''
            }
          </g>`;
      })
      .join('');
  }

  function applyStageTransform() {
    const stage = root.querySelector('#bp-graph-stage');
    const zoomLbl = root.querySelector('#bp-hud-zoom');
    const vp = root.querySelector('#bp-viewport');
    if (stage) stage.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    if (vp) vp.style.backgroundPosition = `${state.panX}px ${state.panY}px, ${state.panX}px ${state.panY}px, ${state.panX}px ${state.panY}px`;
    if (zoomLbl) zoomLbl.textContent = `${Math.round(state.zoom * 100)}%`;
  }

  // ==========================================================================
  // RENDERIZADO COMPLETO DEL SECUENCIADOR JERÁRQUICO Y SUS NODOS
  // ==========================================================================
  function render() {
    const { acts, actChapters, ch, ep, sc, objects } = resolveHierarchy();
    if (!ch || !ep || !sc) {
      root.innerHTML = `<div class="p-8 text-center text-xs text-slate-400 bg-[#12141a] rounded-2xl border border-white/10">Crea primero una escena en «📝 Guion & Historia».</div>`;
      return;
    }

    const beats = sc.shots;
    if (state.activeBeatIdx >= beats.length) state.activeBeatIdx = Math.max(0, beats.length - 1);
    const evaluated = beats.map((b, i) => evaluateBeat(b, i, ch, ep, sc, state.aspectRatio));
    const activeBeat = beats[state.activeBeatIdx];
    const activeEval = evaluated[state.activeBeatIdx];

    const beatPairs = beats.map((b, i) => {
      const bKey = makeBeatCacheKey(sc, b, state.aspectRatio);
      return ensureBeatCutPair(evaluated[i], bKey, state.aspectRatio);
    });

    const activeBeatKey = makeBeatCacheKey(sc, activeBeat, state.aspectRatio);
    const activeViewerImg = ensureViewerSinglePass(
      activeEval,
      activeBeatKey,
      state.viewerFramePoint,
      state.viewerPass,
      state.aspectRatio
    );
    const activePassMeta = PASS_SPECS.find((p) => p.id === state.viewerPass) || PASS_SPECS[0];

    const isLand = state.aspectRatio === '16:9';
    const aspectCss = isLand ? '16 / 9' : '9 / 16';
    const totalSec = +beats.reduce((acc, b) => acc + (Number(b.durationSec) || 0), 0).toFixed(1);
    const shotDurationOk = Number(activeBeat.durationSec) <= 4.0;

    const posStyle = (id, widthPx) => {
      const p = state.positions[id] || { x: 0, y: 0 };
      return `left:${p.x}px; top:${p.y}px; width:${widthPx}px;`;
    };
    const execRing = (id) =>
      state.execNodeIds.has(id)
        ? 'ring-4 ring-emerald-400 shadow-[0_0_34px_rgba(16,185,129,0.65)] z-30'
        : '';

    const allSpots = Object.keys(catalog.spotCinematographyMap);
    const hf = activeEval.manifest.higgsfieldCinemaStudio;
    const stageHeight = Math.max(1220, 120 + beats.length * 335);

    // Objetos priorizados: primero los vinculados a la escena en el guion, luego el resto
    const sceneObjSet = new Set(sc.linkedObjectIds || []);
    const orderedObjects = [
      ...objects.filter((o) => sceneObjSet.has(o.id)),
      ...objects.filter((o) => !sceneObjSet.has(o.id))
    ];

    root.innerHTML = `
      <style>
        @keyframes bpDashFlow { to { stroke-dashoffset: -24; } }
        .bp-cable-anim { animation: bpDashFlow 1.1s linear infinite; }
        .bp-viewport {
          background-color: #060911;
          background-image:
            radial-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 20px 20px, 100px 100px, 100px 100px;
        }
        .bp-node {
          position: absolute;
          background: rgba(15, 18, 27, 0.95);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.65);
          user-select: none;
        }
        .bp-node-header { cursor: grab; }
        .bp-node-header:active { cursor: grabbing; }
      </style>

      <div class="space-y-2.5">
        <!-- =================================================================
             BARRA SELECTORA JERÁRQUICA EN 5 PASOS:
             1. Acto ▸ 2. Capítulo ▸ 3. Episodio ▸ 4. Escena ▸ 5. Toma
             ================================================================= -->
        <div class="bg-[#12141a] border border-white/10 rounded-2xl p-3 shadow-xl flex flex-wrap items-center justify-between gap-2.5 text-xs">
          <div class="flex flex-wrap items-center gap-2 flex-1 min-w-0">
            <!-- 1. ACTO -->
            <label class="flex items-center gap-1.5 bg-black/55 px-2.5 py-1.5 rounded-xl border border-purple-500/30">
              <span class="text-[10px] font-mono font-bold text-purple-300">1. Acto:</span>
              <select id="bp-sel-act" class="bg-transparent text-white font-semibold focus:outline-none max-w-[175px] truncate">
                ${acts.map((a) => `<option value="${esc(a.id)}" class="bg-[#12141a]" ${a.id === state.actId ? 'selected' : ''}>${esc(a.label)}</option>`).join('')}
              </select>
            </label>

            <!-- 2. CAPÍTULO -->
            <label class="flex items-center gap-1.5 bg-black/55 px-2.5 py-1.5 rounded-xl border border-[#c86446]/35">
              <span class="text-[10px] font-mono font-bold text-[#f29979]">2. Capítulo:</span>
              <select id="bp-sel-chap" class="bg-transparent text-white font-semibold focus:outline-none max-w-[195px] truncate">
                ${actChapters.map((c) => `<option value="${esc(c.id)}" class="bg-[#12141a]" ${c.id === ch.id ? 'selected' : ''}>${esc(c.week)} · ${esc(c.title)}</option>`).join('')}
              </select>
            </label>

            <!-- 3. EPISODIO -->
            <label class="flex items-center gap-1.5 bg-black/55 px-2.5 py-1.5 rounded-xl border border-sky-500/35">
              <span class="text-[10px] font-mono font-bold text-sky-300">3. Episodio:</span>
              <select id="bp-sel-ep" class="bg-transparent text-white font-semibold focus:outline-none max-w-[195px] truncate">
                ${ch.episodes.map((e) => `<option value="${esc(e.id)}" class="bg-[#12141a]" ${e.id === ep.id ? 'selected' : ''}>${esc(e.dayLabel)} · ${esc(e.title)}</option>`).join('')}
              </select>
            </label>

            <!-- 4. ESCENA -->
            <div class="flex items-center gap-1 bg-black/55 px-2.5 py-1.5 rounded-xl border border-emerald-500/35">
              <span class="text-[10px] font-mono font-bold text-emerald-300">4. Escena:</span>
              <select id="bp-sel-sc" class="bg-transparent text-white font-semibold focus:outline-none max-w-[190px] truncate">
                ${ep.scenes.map((s) => `<option value="${esc(s.id)}" class="bg-[#12141a]" ${s.id === sc.id ? 'selected' : ''}>${esc(s.title)}</option>`).join('')}
              </select>
              <button id="bp-quick-add-sc" class="ml-1 px-1.5 py-0.5 rounded bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-200 font-mono text-[10px]" title="Añadir otra escena a este episodio">+Esc</button>
            </div>

            <!-- 5. TOMA -->
            <label class="flex items-center gap-1.5 bg-black/55 px-2.5 py-1.5 rounded-xl border border-amber-500/35">
              <span class="text-[10px] font-mono font-bold text-amber-300">5. Toma:</span>
              <select id="bp-sel-beat" class="bg-transparent text-white font-bold focus:outline-none">
                ${beats.map((b, idx) => `<option value="${idx}" class="bg-[#12141a]" ${idx === state.activeBeatIdx ? 'selected' : ''}>Toma ${idx + 1}/${beats.length} (${b.role === 'A-Roll' ? 'Alina' : 'Objeto'})</option>`).join('')}
              </select>
            </label>
          </div>

          <!-- CONTROLES DE FORMATO (16:9 YOUTUBE / 9:16 CELULAR) + REPRODUCCIÓN -->
          <div class="flex items-center gap-2 shrink-0">
            <div class="flex items-center bg-black/65 p-1 rounded-xl border border-white/10 text-[11px]">
              <button data-bp-aspect="16:9" class="px-2.5 py-1 rounded-lg font-semibold transition-all ${
                isLand ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }">🖥️ 16:9 YouTube</button>
              <button data-bp-aspect="9:16" class="px-2.5 py-1 rounded-lg font-semibold transition-all ${
                !isLand ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }">📱 9:16 Celular</button>
            </div>

            <button id="bp-add-beat-top" class="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-[11px]">
              + Añadir Toma
            </button>

            <button id="bp-play-pipeline-top" class="px-3.5 py-1.5 rounded-xl font-bold text-white shadow-lg transition-all ${
              state.tourRunning ? 'bg-rose-600 animate-pulse' : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95'
            }">
              ${state.tourRunning ? '⏹ Detener' : `▶ Play Escena (${totalSec}s)`}
            </button>
          </div>
        </div>

        <!-- LIENZO ESPACIAL 2D DEL SECUENCIADOR Y SUS CONEXIONES -->
        <div id="bp-viewport" class="bp-viewport relative w-full h-[calc(100vh-235px)] min-h-[680px] rounded-2xl border border-white/15 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing">

          ${
            state.execBanner
              ? `<div class="absolute top-3 left-3 z-20 px-3 py-1.5 rounded-xl bg-black/85 border border-emerald-500/35 text-[11px] font-mono text-emerald-300 pointer-events-none">${esc(state.execBanner)}</div>`
              : ''
          }

          <div id="bp-graph-stage" class="absolute top-0 left-0 origin-top-left" style="width: 1330px; height: ${stageHeight}px;">
            <svg id="bp-cables-svg" class="absolute inset-0 w-full h-full pointer-events-none overflow-visible" width="1330" height="${stageHeight}"></svg>

            <!-- ===============================================================
                 COLUMNA IZQUIERDA: CONTEXTO DE LA ESCENA SELECCIONADA
                 =============================================================== -->

            <!-- NODO ESCENA & GUION DE ORIGEN -->
            <div id="node-scene" class="bp-node border border-purple-500/45 ${execRing('node-scene')}" style="${posStyle('node-scene', 328)}">
              <div data-drag="node-scene" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-purple-500/15 border-b border-purple-500/30">
                <span class="text-[11px] font-bold text-purple-200 tracking-wide">🟣 ESCENA ACTIVA & GUION</span>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/25 text-purple-200">📍 ${esc(sc.spotId)}</span>
              </div>
              <div class="p-3 space-y-2 text-[11px]">
                <div class="text-xs font-bold text-white truncate">${esc(ep.dayLabel)} · ${esc(sc.title)}</div>
                <div class="text-[10px] text-slate-400 line-clamp-2">${esc(sc.synopsis || ch.synopsis || 'Guion listo para dividir en tomas visuales.')}</div>
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-[10px] font-mono text-purple-300">
                    <span>🎙️ Guion de la Escena</span>
                    <button id="bp-resplit-script" class="underline hover:text-white" title="Dividir el guion de la escena entre las tomas actuales">Repartir en ${beats.length} Tomas</button>
                  </div>
                  <textarea id="bp-sc-script" rows="3" class="w-full bg-black/55 border border-white/10 rounded-lg p-2 text-[10px] font-mono text-slate-200 leading-snug" placeholder="Guion hablado de esta escena...">${esc(sc.scriptText || '')}</textarea>
                </div>
                <button id="bp-open-story-editor" class="w-full py-1.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-[10px] font-semibold text-purple-200">
                  📝 Abrir en «Guion & Historia»
                </button>
              </div>
            </div>

            <!-- NODO PROTAGONISTA ALINA -->
            <div id="node-dna" class="bp-node border border-pink-500/45 ${execRing('node-dna')}" style="${posStyle('node-dna', 328)}">
              <div data-drag="node-dna" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-pink-500/15 border-b border-pink-500/30">
                <span class="text-[11px] font-bold text-pink-200 tracking-wide">🩷 ALINA VAN DIJK (NARRADORA)</span>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-pink-500/25 text-pink-200">PODCAST & CÁMARA</span>
              </div>
              <div class="p-3 space-y-2 text-[10.5px]">
                <div class="flex items-center gap-2.5">
                  <img src="./alina_avatar.jpg" onerror="this.style.display='none'" alt="Alina" class="w-11 h-11 rounded-xl object-cover border border-pink-500/40 shrink-0">
                  <div class="min-w-0">
                    <div class="font-bold text-white truncate">Alina Van Dijk · 1.72m</div>
                    <div class="text-[9.5px] font-mono text-pink-300">Voz: ${esc(ALINA_CHARACTER_BIBLE.voice.id)}</div>
                    <div class="text-[9.5px] font-mono text-slate-400">Aparece en tomas «Alina en Cámara»</div>
                  </div>
                </div>
                <div class="p-2 rounded-lg bg-black/55 border border-white/5 text-[9.5px] font-mono text-slate-300 line-clamp-2">${esc(ALINA_CHARACTER_BIBLE.consistencyLock.tokenSnippet)}</div>
              </div>
            </div>

            <!-- NODO OBJETOS DE LA ESCENA -->
            <div id="node-vault" class="bp-node border border-amber-500/45 ${execRing('node-vault')}" style="${posStyle('node-vault', 328)}">
              <div data-drag="node-vault" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-amber-500/15 border-b border-amber-500/30">
                <span class="text-[11px] font-bold text-amber-200 tracking-wide">🏺 OBJETOS DE LA ESCENA</span>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-200">${orderedObjects.length} ACTIVOS</span>
              </div>
              <div class="p-3 space-y-2 text-[10.5px]">
                <div class="text-[10px] text-slate-300 leading-snug">
                  Pueden <strong>acompañar a Alina en el set</strong> (ej. micrófono, café) o protagonizar una <strong>Toma de Detalle</strong> mientras Alina narra en voz en off.
                </div>
                <div class="grid grid-cols-2 gap-1.5 max-h-32 overflow-y-auto custom-scrollbar pr-0.5">
                  ${orderedObjects
                    .slice(0, 8)
                    .map(
                      (o) => `
                    <div class="flex items-center gap-1.5 p-1 rounded-lg bg-black/50 border ${sceneObjSet.has(o.id) ? 'border-amber-400/50' : 'border-white/10'}">
                      <img src="${o.image}" alt="" class="w-6 h-6 rounded object-cover shrink-0 bg-black">
                      <span class="text-[9.5px] font-mono text-amber-200 truncate">${esc(o.handle)}</span>
                    </div>`
                    )
                    .join('')}
                </div>
              </div>
            </div>

            <!-- ===============================================================
                 COLUMNA CENTRAL: TOMAS DE LA ESCENA (INICIO [IN] ➔ CORTE [OUT])
                 =============================================================== -->
            ${beats
              .map((b, i) => {
                const ev = evaluated[i];
                const pair = beatPairs[i];
                const isSel = i === state.activeBeatIdx;
                const isA = b.role === 'A-Roll';
                const borderCls = isSel
                  ? isA
                    ? 'border-[#c86446] ring-2 ring-[#c86446]/55'
                    : 'border-amber-400 ring-2 ring-amber-400/55'
                  : isA
                    ? 'border-white/15 hover:border-[#c86446]/60'
                    : 'border-amber-500/30 hover:border-amber-400/70';

                const tStart = beats.slice(0, i).reduce((s, x) => s + Number(x.durationSec || 0), 0).toFixed(1);
                const tEnd = (Number(tStart) + Number(b.durationSec || 0)).toFixed(1);
                const objHandles = ev.attachedObjs.map((o) => o.handle).join(' ');

                return `
                <div id="node-beat-${i}" data-select-beat="${i}" class="bp-node border ${borderCls} ${execRing(`node-beat-${i}`)} transition-shadow" style="${posStyle(`node-beat-${i}`, 405)}">
                  <div data-drag="node-beat-${i}" class="bp-node-header flex items-center justify-between px-3 py-1.5 rounded-t-2xl ${isA ? 'bg-[#c86446]/20 border-b border-[#c86446]/30' : 'bg-amber-500/15 border-b border-amber-500/30'}">
                    <div class="flex items-center gap-1.5">
                      <span class="text-[11px] font-bold text-white">Toma ${i + 1}</span>
                      <span class="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${isA ? 'bg-pink-500/25 text-pink-200' : 'bg-amber-500/25 text-amber-200'}">${isA ? 'ALINA EN CÁMARA' : 'DETALLE OBJETO'}</span>
                      <span class="text-[9.5px] font-mono text-emerald-300">${tStart}s → ${tEnd}s</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      ${
                        beats.length > 2
                          ? `<button type="button" data-del-beat="${i}" class="px-1.5 py-0.2 rounded bg-black/40 hover:bg-rose-600/80 text-[9.5px] text-slate-300 hover:text-white" title="Eliminar esta toma">✕</button>`
                          : ''
                      }
                    </div>
                  </div>

                  <div class="p-2.5 space-y-2 text-[10.5px]">
                    <!-- PAR VISUAL: INICIO (IN) ➔ CORTE (OUT) -->
                    <div class="grid grid-cols-11 gap-1 items-center bg-black/55 p-1.5 rounded-xl border border-white/10">
                      <div class="col-span-5 space-y-0.5">
                        <div class="flex items-center justify-between text-[8.5px] font-mono">
                          <span class="text-emerald-400 font-bold">● INICIO</span>
                          <span class="text-slate-400">${tStart}s</span>
                        </div>
                        ${
                          pair?.startBeauty
                            ? `<img src="${pair.startBeauty}" alt="Inicio Toma ${i + 1}" class="w-full rounded-lg border border-white/15 bg-black object-cover mx-auto block" style="aspect-ratio:${aspectCss}; max-height:${isLand ? '96px' : '116px'}; width:${isLand ? '100%' : 'auto'};">`
                            : `<div class="h-16 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[9px] text-slate-500">Render…</div>`
                        }
                      </div>

                      <div class="col-span-1 flex flex-col items-center justify-center text-center">
                        <span class="text-sky-400 font-bold text-xs">➔</span>
                        <span class="text-[7.5px] font-mono text-slate-400">✂</span>
                      </div>

                      <div class="col-span-5 space-y-0.5">
                        <div class="flex items-center justify-between text-[8.5px] font-mono">
                          <span class="text-rose-400 font-bold">■ CORTE</span>
                          <span class="text-slate-400">${tEnd}s</span>
                        </div>
                        ${
                          pair?.endBeauty
                            ? `<img src="${pair.endBeauty}" alt="Corte Toma ${i + 1}" class="w-full rounded-lg border border-white/15 bg-black object-cover mx-auto block" style="aspect-ratio:${aspectCss}; max-height:${isLand ? '96px' : '116px'}; width:${isLand ? '100%' : 'auto'};">`
                            : `<div class="h-16 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[9px] text-slate-500">Render…</div>`
                        }
                      </div>
                    </div>

                    <!-- SELECTORES RÁPIDOS DE LA TOMA -->
                    <div class="grid grid-cols-3 gap-1">
                      <select data-beat="${i}" data-field="role" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-white font-semibold">
                        <option value="A-Roll" ${isA ? 'selected' : ''}>🧑 Alina en Cámara</option>
                        <option value="B-Roll" ${!isA ? 'selected' : ''}>🏺 Detalle Objeto</option>
                      </select>
                      ${
                        isA
                          ? `<select data-beat="${i}" data-field="spotId" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-white">
                              ${allSpots.map((spId) => `<option value="${spId}" ${b.spotId === spId ? 'selected' : ''}>📍 ${spId}</option>`).join('')}
                             </select>`
                          : `<select data-beat="${i}" data-field="primaryObject" class="col-span-2 bg-black/65 border border-amber-500/30 rounded px-1.5 py-1 text-amber-200 font-mono">
                              ${orderedObjects.map((o) => `<option value="${esc(o.id)}" ${(b.objectIds?.[0] || b.objectId) === o.id ? 'selected' : ''}>${esc(o.handle)} · ${esc(o.name.slice(0, 18))}</option>`).join('')}
                             </select>`
                      }
                      ${
                        isA
                          ? `<select data-beat="${i}" data-field="shotTypeId" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-slate-200">
                              ${catalog.shotTypes.filter((s) => s.shotRoleDefault === 'A-Roll').map((s) => `<option value="${s.id}" ${b.shotTypeId === s.id ? 'selected' : ''}>${esc(s.label.split('(')[0].trim())}</option>`).join('')}
                             </select>`
                          : ''
                      }
                    </div>

                    <div class="grid grid-cols-3 gap-1">
                      <select data-beat="${i}" data-field="cameraMoveId" class="col-span-2 bg-black/65 border border-white/10 rounded px-1.5 py-1 text-slate-200">
                        ${catalog.cameraMoves
                          .filter((m) => isA || m.id !== 'rack_focus_macro_to_eyes')
                          .map((m) => `<option value="${m.id}" ${b.cameraMoveId === m.id ? 'selected' : ''}>🎥 ${esc(m.label.split('(')[0].trim())}</option>`)
                          .join('')}
                      </select>
                      <select data-beat="${i}" data-field="durationSec" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-emerald-300 font-mono">
                        ${[2.0, 2.5, 3.0, 3.5, 4.0].map((sec) => `<option value="${sec}" ${Number(b.durationSec) === sec ? 'selected' : ''}>${sec.toFixed(1)}s</option>`).join('')}
                      </select>
                    </div>

                    <!-- RESUMEN DE VOZ Y OBJETOS EN LA TARJETA -->
                    <div class="p-1.5 rounded-lg bg-black/45 border border-white/5 space-y-0.5 text-[9.5px]">
                      <div class="text-purple-200 truncate">🎙️ ${esc(b.voiceSlice || '(Sin texto de narradora en esta toma)')}</div>
                      <div class="text-amber-300/90 font-mono truncate">🏺 ${objHandles ? esc(objHandles) : 'Sin objetos adjuntos (pulsa a la derecha para elegir)'}</div>
                    </div>
                  </div>
                </div>`;
              })
              .join('')}

            <!-- ===============================================================
                 COLUMNA DERECHA: VISOR 3D + LOS 3 BLOQUES DE LA TOMA SELECCIONADA
                 =============================================================== -->

            <!-- NODO VISOR 3D NORMAL + ESCALAS CONTIGUAS -->
            <div id="node-viewer" class="bp-node border border-sky-500/50 ${execRing('node-viewer')}" style="${posStyle('node-viewer', 445)}">
              <div data-drag="node-viewer" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-sky-500/15 border-b border-sky-500/30">
                <span class="text-[11px] font-bold text-sky-200 tracking-wide">🩵 VISOR 3D · TOMA ${state.activeBeatIdx + 1} (${state.aspectRatio})</span>
                <div class="flex items-center gap-1">
                  <button id="bp-btn-cycle-pass" class="text-[9.5px] font-mono px-2 py-0.5 rounded bg-amber-500/25 hover:bg-amber-500/45 border border-amber-400/40 text-amber-200 font-bold">⟳ Cambiar Escala</button>
                  <button id="bp-btn-render-thumbs" class="text-[9.5px] font-mono px-2 py-0.5 rounded bg-sky-500/30 hover:bg-sky-500/50 text-white font-bold" title="Actualizar captura 3D">↻</button>
                </div>
              </div>

              <div class="p-3 space-y-2 text-[10.5px]">
                <div class="flex items-center justify-between gap-1.5">
                  <div class="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
                    <button data-bp-frame="start" class="px-2 py-0.5 rounded font-bold transition-all ${
                      state.viewerFramePoint === 'start' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }">● Ver INICIO</button>
                    <button data-bp-frame="end" class="px-2 py-0.5 rounded font-bold transition-all ${
                      state.viewerFramePoint === 'end' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                    }">■ Ver CORTE</button>
                  </div>

                  <div class="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
                    <button data-bp-aspect="16:9" class="px-2 py-0.5 rounded font-bold transition-all ${
                      isLand ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                    }">🖥️ 16:9</button>
                    <button data-bp-aspect="9:16" class="px-2 py-0.5 rounded font-bold transition-all ${
                      !isLand ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }">📱 9:16</button>
                  </div>
                </div>

                <div class="relative rounded-xl bg-[#05070c] border border-white/15 overflow-hidden flex items-center justify-center p-1" style="min-height: 215px;">
                  ${
                    activeViewerImg
                      ? `<img src="${activeViewerImg}" alt="${esc(activePassMeta.label)}" class="rounded-lg object-cover bg-black shadow-xl block" style="aspect-ratio:${aspectCss}; ${
                          isLand ? 'width:100%; height:auto;' : 'height:230px; width:auto;'
                        }">`
                      : `<div class="text-[10px] text-slate-400 py-12">Renderizando visor 3D…</div>`
                  }
                  <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 pointer-events-none">
                    <span class="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold shadow ${activePassMeta.badgeCls}">${esc(activePassMeta.label)}</span>
                    <span class="px-1.5 py-0.5 rounded-md bg-black/75 border border-white/15 text-[9px] font-mono text-slate-200">${
                      state.viewerFramePoint === 'start' ? 'Inicio de Toma' : 'Corte de Toma'
                    }</span>
                  </div>
                </div>

                <!-- Botones Contiguos de Escalas de Color / Efectos -->
                <div class="grid grid-cols-6 gap-1 bg-black/55 p-1 rounded-xl border border-white/10">
                  ${PASS_SPECS.map((p) => {
                    const isAct = state.viewerPass === p.id;
                    return `<button type="button" data-bp-pass="${p.id}" class="py-1 px-1 rounded-lg text-[9px] font-mono font-bold transition-all truncate ${
                      isAct ? `${p.badgeCls} shadow` : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }">${esc(p.short)}</button>`;
                  }).join('')}
                </div>
              </div>
            </div>

            <!-- NODO INSPECTOR DE LA TOMA: 1. PROMPTS HIGGSFIELD · 2. VOZ NARRADORA · 3. OBJETOS QUE ACOMPAÑAN -->
            <div id="node-inspector" class="bp-node border border-emerald-500/50 ${execRing('node-inspector')}" style="${posStyle('node-inspector', 445)}">
              <div data-drag="node-inspector" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-emerald-500/15 border-b border-emerald-500/30">
                <span class="text-[11px] font-bold text-emerald-200 tracking-wide">🎬 CONTENIDO DE LA TOMA ${state.activeBeatIdx + 1}</span>
                <span class="text-[9.5px] font-mono font-bold ${shotDurationOk ? 'text-emerald-300' : 'text-amber-300'}">${shotDurationOk ? '✔ Toma óptima' : '⚠ > 4.0s'}</span>
              </div>

              <div class="p-3.5 space-y-3 text-[10.5px]">
                <!-- 1. PROMPTS PARA HIGGSFIELD (AMBIENTE + MOVIMIENTO) -->
                <div class="space-y-1.5 bg-black/40 p-2.5 rounded-xl border border-white/10">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-sky-300 uppercase tracking-wider text-[10px]">1. Prompts de Producción para Higgsfield</span>
                    <span class="text-[9px] font-mono text-slate-400">${esc(hf.cameraLabel.slice(0, 14))} · ${esc(hf.focalLength)}</span>
                  </div>

                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-[9.5px] font-mono">
                      <span class="text-slate-300">Paso A · Imagen Realista (Ambiente + Sujeto):</span>
                      <button id="bp-copy-flux" class="text-[#f29979] hover:text-white font-bold">Copiar Imagen</button>
                    </div>
                    <div class="p-2 rounded-lg bg-black/70 border border-white/10 text-[9.5px] font-mono text-slate-200 max-h-16 overflow-y-auto leading-relaxed select-all">${esc(activeEval.cleanFluxPrompt)}</div>
                  </div>

                  <div class="space-y-1 pt-1">
                    <div class="flex items-center justify-between text-[9.5px] font-mono">
                      <span class="text-amber-200">Paso B · Movimiento en Higgsfield (Inicio ➔ Corte):</span>
                      <button id="bp-copy-delta" class="text-[#f29979] hover:text-white font-bold">Copiar Movimiento</button>
                    </div>
                    <div class="p-2 rounded-lg bg-black/70 border border-white/10 text-[9.5px] font-mono text-amber-100/95 max-h-16 overflow-y-auto leading-relaxed select-all">${esc(activeEval.manifest.structuredPrompt.compiled)}</div>
                  </div>
                </div>

                <!-- 2. VOZ DE LA NARRADORA (ALINA — PODCAST) -->
                <div class="space-y-1.5 bg-black/40 p-2.5 rounded-xl border border-purple-500/25">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-bold text-purple-300 uppercase tracking-wider text-[10px]">2. Voz de la Narradora (Alina)</span>
                    <div class="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/10 text-[9px] font-mono">
                      <button type="button" data-vmode="on_camera" class="px-2 py-0.5 rounded transition-all ${
                        activeBeat.voiceMode !== 'voiceover' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }">🎙️ Hablando a Cámara</button>
                      <button type="button" data-vmode="voiceover" class="px-2 py-0.5 rounded transition-all ${
                        activeBeat.voiceMode === 'voiceover' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }">🎧 Voz en Off</button>
                    </div>
                  </div>
                  <textarea id="bp-active-voice" rows="2" class="w-full bg-black/70 border border-white/10 rounded-lg p-2 text-[10.5px] text-purple-100 leading-snug focus:outline-none focus:border-purple-400" placeholder="Texto exacto que narra Alina durante esta toma...">${esc(activeBeat.voiceSlice || '')}</textarea>
                  <div class="flex justify-end">
                    <button id="bp-copy-voice" class="text-[9.5px] font-mono text-[#f29979] hover:text-white font-bold">Copiar Texto de Voz</button>
                  </div>
                </div>

                <!-- 3. OBJETOS QUE LA ACOMPAÑAN EN ESTA TOMA -->
                <div class="space-y-1.5 bg-black/40 p-2.5 rounded-xl border border-amber-500/25">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-amber-300 uppercase tracking-wider text-[10px]">
                      3. ${activeBeat.role === 'A-Roll' ? 'Objetos que acompañan a Alina en el Set' : 'Objeto Protagonista del Detalle'}
                    </span>
                    <span class="text-[9px] font-mono text-slate-400">${activeEval.attachedObjs.length} activo(s)</span>
                  </div>
                  <div class="flex flex-wrap gap-1 max-h-24 overflow-y-auto custom-scrollbar pr-0.5">
                    ${orderedObjects
                      .slice(0, 14)
                      .map((o) => {
                        const on = (activeBeat.objectIds || []).includes(o.id);
                        return `
                        <button type="button" data-toggle-shot-obj="${esc(o.id)}" class="flex items-center gap-1 px-2 py-0.5 rounded-lg border text-[9.5px] font-mono transition-all ${
                          on
                            ? 'border-amber-400 bg-amber-500/25 text-white font-bold shadow'
                            : 'border-white/10 bg-black/50 text-slate-400 hover:text-white'
                        }" title="${esc(o.name)}">
                          <img src="${o.image}" alt="" class="w-3.5 h-3.5 rounded object-cover bg-black">
                          <span>${esc(o.handle)}</span>
                        </button>`;
                      })
                      .join('')}
                  </div>
                </div>

                <!-- BOTONES DE DESCARGA DE TOMA O ESCENA COMPLETA -->
                <div class="grid grid-cols-2 gap-1.5 pt-0.5">
                  <button id="bp-export-beat-zip" class="py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-[10.5px]">
                    📦 Descargar Toma ${state.activeBeatIdx + 1} (.zip)
                  </button>
                  <button id="bp-export-episode-zip" class="py-2 px-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-bold text-[10.5px] shadow-lg">
                    📦 Descargar Escena (${beats.length} Tomas)
                  </button>
                </div>
              </div>
            </div>

          </div>

          <!-- MONITOR FLOTANTE DE MONTAJE DE LA ESCENA -->
          ${
            state.monitorOpen
              ? `<div id="bp-cinema-monitor" class="absolute top-14 right-3.5 z-30 ${
                  isLand ? 'w-[390px]' : 'w-[268px]'
                } rounded-2xl bg-[#090d16]/95 border border-emerald-500/45 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2.5 space-y-2" style="backdrop-filter: blur(16px);">
                   <div class="flex items-center justify-between gap-1">
                     <span class="text-[10px] font-mono font-bold text-emerald-300">🎞️ MONTAJE ESCENA (${state.aspectRatio})</span>
                     <div class="flex items-center gap-1">
                       <button id="bp-mon-split" class="px-1.5 py-0.5 rounded text-[9px] font-mono border ${
                         state.monitorSplit3D ? 'bg-sky-500/25 border-sky-400/50 text-sky-200' : 'bg-white/5 border-white/10 text-slate-400'
                       }">🔀 IN|CORTE</button>
                       <button id="bp-mon-close" class="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/15 text-[10px] text-slate-300">✕</button>
                     </div>
                   </div>
                   <canvas id="bp-monitor-canvas" width="${isLand ? 480 : 270}" height="${isLand ? 270 : 480}" class="w-full rounded-xl border border-white/15 bg-black block" style="aspect-ratio: ${aspectCss};"></canvas>
                   <div class="grid grid-cols-2 gap-1.5 text-[10px]">
                     <button id="bp-mon-playpause" class="py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold">
                       ${state.monitorPlaying ? '⏸ Pausar' : '▶ Reproducir'}
                     </button>
                     <button id="bp-mon-rec-webm" class="py-1.5 rounded-lg bg-rose-600/85 hover:bg-rose-500 text-white font-bold">
                       ${state.recordingDemo ? '● Grabando…' : `⏺ Video ${state.aspectRatio}`}
                     </button>
                   </div>
                 </div>`
              : ''
          }

          <!-- FLOATING HUD INFERIOR -->
          <div class="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c101b]/90 border border-white/15 shadow-2xl whitespace-nowrap max-w-[96%] overflow-x-auto" style="backdrop-filter: blur(16px);">
            <button id="bp-play-pipeline-hud" class="px-3 py-1 rounded-full font-bold text-[11px] text-white shadow ${
              state.tourRunning ? 'bg-rose-600' : 'bg-emerald-600 hover:bg-emerald-500'
            }">${state.tourRunning ? '⏹ Stop' : '▶ Play'}</button>
            <span class="text-white/15">|</span>
            <button id="bp-hud-prev-beat" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">◀</button>
            <span class="text-[11px] font-mono font-bold text-[#f29979]">Toma ${state.activeBeatIdx + 1}/${beats.length}</span>
            <button id="bp-hud-next-beat" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">▶</button>
            <span class="text-white/15">|</span>
            <button id="bp-hud-zoom-out" class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-xs text-white font-mono">−</button>
            <span id="bp-hud-zoom" class="text-[10px] font-mono text-emerald-300 w-10 text-center">${Math.round(state.zoom * 100)}%</span>
            <button id="bp-hud-zoom-in" class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-xs text-white font-mono">+</button>
            <button id="bp-hud-reset" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">⌖ Centrar</button>
            <button id="bp-hud-open-3d" class="px-3 py-1 rounded-full bg-[#c86446] hover:bg-[#b55539] text-[11px] text-white font-bold shadow">🏛️ Ver Toma en Plató 3D ↗</button>
          </div>
        </div>
      </div>
    `;

    applyStageTransform();
    requestAnimationFrame(() => updateCablesSVG());
    bindCanvasInteractions(ch, ep, sc, beats, evaluated, activeBeat, activeEval, activeBeatKey);
  }

  function setAspectInternal(nextAspect, silentSync = false) {
    const clean = nextAspect === '9:16' ? '9:16' : '16:9';
    if (state.aspectRatio === clean && silentSync) return;
    state.aspectRatio = clean;
    if (!silentSync) ctx.setAspectRatio?.(clean);
    if (root.innerHTML.trim()) render();
  }

  // ==========================================================================
  // INTERACCIONES DEL SECUENCIADOR Y DEL INSPECTOR DE TOMA
  // ==========================================================================
  function bindCanvasInteractions(ch, ep, sc, beats, evaluated, activeBeat, activeEval, activeBeatKey) {
    const vp = root.querySelector('#bp-viewport');
    const stage = root.querySelector('#bp-graph-stage');
    if (!vp || !stage) return;

    // 1..5 Selectores Jerárquicos Superiores
    root.querySelector('#bp-sel-act')?.addEventListener('change', (e) => {
      state.actId = e.target.value;
      state.chapterId = null;
      state.episodeId = null;
      state.sceneId = null;
      state.activeBeatIdx = 0;
      render();
    });
    root.querySelector('#bp-sel-chap')?.addEventListener('change', (e) => {
      state.chapterId = e.target.value;
      state.episodeId = null;
      state.sceneId = null;
      state.activeBeatIdx = 0;
      render();
    });
    root.querySelector('#bp-sel-ep')?.addEventListener('change', (e) => {
      state.episodeId = e.target.value;
      state.sceneId = null;
      state.activeBeatIdx = 0;
      render();
    });
    root.querySelector('#bp-sel-sc')?.addEventListener('change', (e) => {
      state.sceneId = e.target.value;
      state.activeBeatIdx = 0;
      render();
    });
    root.querySelector('#bp-sel-beat')?.addEventListener('change', (e) => {
      state.activeBeatIdx = Number(e.target.value);
      render();
    });

    root.querySelector('#bp-quick-add-sc')?.addEventListener('click', async () => {
      const nextNum = ep.scenes.length + 1;
      const newSc = {
        id: `sc-${Date.now().toString(36)}`,
        number: nextNum,
        title: `Escena ${nextNum} · Nueva Locación`,
        floor: sc.floor ?? 3,
        spotId: sc.spotId || 'podcast',
        lightingMode: sc.lightingMode || 'night',
        synopsis: '',
        scriptText: '',
        audioTone: sc.audioTone || 'Podcast íntimo',
        linkedObjectIds: [...(sc.linkedObjectIds || [])]
      };
      ep.scenes.push(newSc);
      state.sceneId = newSc.id;
      state.activeBeatIdx = 0;
      await saveChapterToDB(ch);
      render();
      ctx.setStatus(`🎬 <span class="text-emerald-400 font-bold">Escena ${nextNum} añadida al episodio «${esc(ep.title)}».</span>`);
    });

    // Arrastre de Nodos y Pan/Zoom
    stage.querySelectorAll('[data-drag]').forEach((hdr) => {
      hdr.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button, select, input, textarea')) return;
        e.stopPropagation();
        const nodeId = hdr.dataset.drag;
        const startPos = state.positions[nodeId] || { x: 0, y: 0 };
        state.draggingNode = {
          nodeId,
          el: stage.querySelector(`#${nodeId}`),
          startClientX: e.clientX,
          startClientY: e.clientY,
          origX: startPos.x,
          origY: startPos.y
        };
        hdr.setPointerCapture?.(e.pointerId);
      });
    });

    vp.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.bp-node, button, select, input, textarea')) return;
      state.panning = { startX: e.clientX, startY: e.clientY, origPanX: state.panX, origPanY: state.panY };
    });

    vp.onpointermove = (e) => {
      if (state.draggingNode) {
        const d = state.draggingNode;
        const nx = Math.round(d.origX + (e.clientX - d.startClientX) / state.zoom);
        const ny = Math.round(d.origY + (e.clientY - d.startClientY) / state.zoom);
        state.positions[d.nodeId] = { x: nx, y: ny };
        if (d.el) {
          d.el.style.left = `${nx}px`;
          d.el.style.top = `${ny}px`;
        }
        updateCablesSVG();
      } else if (state.panning) {
        state.panX = Math.round(state.panning.origPanX + (e.clientX - state.panning.startX));
        state.panY = Math.round(state.panning.origPanY + (e.clientY - state.panning.startY));
        applyStageTransform();
      }
    };
    vp.onpointerup = () => { state.draggingNode = null; state.panning = null; };
    vp.onpointerleave = () => { state.draggingNode = null; state.panning = null; };

    vp.addEventListener(
      'wheel',
      (e) => {
        if (e.target.closest('textarea, .custom-scrollbar')) return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.06 : -0.06;
        state.zoom = Math.min(1.25, Math.max(0.48, +(state.zoom + delta).toFixed(2)));
        applyStageTransform();
      },
      { passive: false }
    );

    // Selección de Toma en Columna Central
    stage.querySelectorAll('[data-select-beat]').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('select, input, textarea, button')) return;
        const idx = Number(card.dataset.selectBeat);
        if (idx !== state.activeBeatIdx) {
          state.activeBeatIdx = idx;
          render();
        }
      });
    });

    // Añadir / Eliminar Tomas
    root.querySelector('#bp-add-beat-top')?.addEventListener('click', () => {
      if (beats.length >= 8) {
        ctx.setStatus('ℹ️ Máximo 8 tomas por escena.');
        return;
      }
      const last = beats[beats.length - 1];
      const nextRole = last?.role === 'A-Roll' ? 'B-Roll' : 'A-Roll';
      const newIdx = beats.length;
      const defObj = getObjects()[newIdx % Math.max(1, getObjects().length)];
      beats.push({
        beatId: `toma_${Date.now().toString(36).slice(-4)}`,
        role: nextRole,
        voiceMode: nextRole === 'B-Roll' ? 'voiceover' : 'on_camera',
        spotId: sc.spotId || 'podcast',
        directorStyleId: last?.directorStyleId || 'fincher_cronenweth',
        shotTypeId: nextRole === 'B-Roll' ? 'macro_broll_prop' : 'mcu_interview',
        cameraMoveId: nextRole === 'B-Roll' ? 'lateral_slider_truck' : 'slow_dolly_push_in',
        lightingSchemeId: last?.lightingSchemeId || 'fincher_top_soft_negfill',
        focalLengthMm: nextRole === 'B-Roll' ? 85 : 50,
        apertureFStop: nextRole === 'B-Roll' ? 2.8 : 1.8,
        durationSec: nextRole === 'B-Roll' ? 2.5 : 3.5,
        objectId: defObj?.id || '',
        objectIds: defObj ? [defObj.id] : [],
        voiceSlice: ''
      });
      state.positions[`node-beat-${newIdx}`] = { x: 398, y: 48 + newIdx * 324 };
      state.activeBeatIdx = newIdx;
      saveChapterToDB(ch);
      render();
    });

    stage.querySelectorAll('[data-del-beat]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (beats.length <= 2) return;
        beats.splice(Number(btn.dataset.delBeat), 1);
        state.positions = buildDefaultNodePositions(beats.length);
        if (state.activeBeatIdx >= beats.length) state.activeBeatIdx = beats.length - 1;
        saveChapterToDB(ch);
        render();
      });
    });

    // Edición rápida en tarjetas de Toma
    stage.querySelectorAll('[data-beat]').forEach((ctrl) => {
      ctrl.addEventListener('change', (e) => {
        const idx = Number(ctrl.dataset.beat);
        const field = ctrl.dataset.field;
        const b = beats[idx];
        if (!b) return;
        if (field === 'primaryObject') {
          b.objectId = e.target.value;
          b.objectIds = [e.target.value];
        } else {
          b[field] = field === 'durationSec' ? Number(e.target.value) : e.target.value;
        }

        if (field === 'role') {
          if (b.role === 'B-Roll') {
            b.voiceMode = 'voiceover';
            b.shotTypeId = 'macro_broll_prop';
            b.cameraMoveId = 'lateral_slider_truck';
            b.focalLengthMm = 85;
            b.apertureFStop = 2.8;
            if (!b.objectIds?.length && getObjects()[0]) {
              b.objectIds = [getObjects()[0].id];
              b.objectId = getObjects()[0].id;
            }
          } else {
            b.voiceMode = 'on_camera';
            b.shotTypeId = 'mcu_interview';
            b.cameraMoveId = 'slow_dolly_push_in';
            b.focalLengthMm = 50;
            b.apertureFStop = 1.8;
          }
        }
        state.activeBeatIdx = idx;
        saveChapterToDB(ch);
        render();
      });
    });

    // Inspector de la Toma Seleccionada (Voz Narradora + Objetos Acompañantes)
    root.querySelectorAll('[data-vmode]').forEach((btn) => {
      btn.onclick = () => {
        activeBeat.voiceMode = btn.dataset.vmode;
        saveChapterToDB(ch);
        render();
      };
    });

    root.querySelector('#bp-active-voice')?.addEventListener('input', (e) => {
      activeBeat.voiceSlice = e.target.value;
      saveChapterToDB(ch);
    });

    root.querySelectorAll('[data-toggle-shot-obj]').forEach((btn) => {
      btn.onclick = () => {
        const oid = btn.dataset.toggleShotObj;
        activeBeat.objectIds = Array.isArray(activeBeat.objectIds) ? activeBeat.objectIds : [];
        if (activeBeat.role === 'B-Roll') {
          // En detalle de objeto, el clic elige directamente ese objeto como protagonista del encuadre
          activeBeat.objectIds = [oid];
          activeBeat.objectId = oid;
        } else {
          // En toma de Alina, permite activar/desactivar varios objetos que la acompañen en el set
          if (activeBeat.objectIds.includes(oid)) {
            activeBeat.objectIds = activeBeat.objectIds.filter((x) => x !== oid);
          } else {
            activeBeat.objectIds.push(oid);
          }
          activeBeat.objectId = activeBeat.objectIds[0] || '';
        }
        saveChapterToDB(ch);
        render();
      };
    });

    // Nodo Escena & Guion
    root.querySelector('#bp-sc-script')?.addEventListener('input', (e) => {
      sc.scriptText = e.target.value;
      saveChapterToDB(ch);
    });
    root.querySelector('#bp-resplit-script')?.addEventListener('click', () => {
      const slices = splitScriptIntoShots(sc.scriptText, beats.length);
      beats.forEach((b, i) => { b.voiceSlice = slices[i]; });
      saveChapterToDB(ch);
      render();
      ctx.setStatus(`🎙️ <span class="text-purple-300 font-bold">Guion de la escena repartido entre las ${beats.length} Tomas.</span>`);
    });
    root.querySelector('#bp-open-story-editor')?.addEventListener('click', () => {
      ctx.openInStoryEditor?.({
        actId: ch.actId,
        chapterId: ch.id,
        episodeId: ep.id,
        sceneId: sc.id
      });
    });

    // Formato y Escalas del Visor
    root.querySelectorAll('[data-bp-aspect]').forEach((btn) => {
      btn.addEventListener('click', () => setAspectInternal(btn.dataset.bpAspect, false));
    });
    root.querySelectorAll('[data-bp-frame]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.viewerFramePoint = btn.dataset.bpFrame;
        render();
      });
    });
    root.querySelectorAll('[data-bp-pass]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.viewerPass = btn.dataset.bpPass;
        render();
      });
    });
    root.querySelector('#bp-btn-cycle-pass')?.addEventListener('click', () => {
      const idx = PASS_SPECS.findIndex((p) => p.id === state.viewerPass);
      state.viewerPass = PASS_SPECS[(idx + 1) % PASS_SPECS.length].id;
      render();
    });
    root.querySelector('#bp-btn-render-thumbs')?.addEventListener('click', () => {
      delete state.cutPairCache[activeBeatKey];
      for (const k of Object.keys(state.viewerPassCache)) {
        if (k.startsWith(activeBeatKey)) delete state.viewerPassCache[k];
      }
      render();
    });

    // Copiar Prompts / Voz
    root.querySelector('#bp-copy-flux')?.addEventListener('click', () => {
      navigator.clipboard.writeText(activeEval.cleanFluxPrompt);
      ctx.setStatus('✦ <span class="text-sky-300 font-bold">Prompt de Imagen Realista copiado.</span>');
    });
    root.querySelector('#bp-copy-delta')?.addEventListener('click', () => {
      navigator.clipboard.writeText(activeEval.manifest.structuredPrompt.compiled);
      ctx.setStatus('✦ <span class="text-amber-300 font-bold">Prompt de Movimiento Higgsfield copiado.</span>');
    });
    root.querySelector('#bp-copy-voice')?.addEventListener('click', () => {
      navigator.clipboard.writeText(activeBeat.voiceSlice || '');
      ctx.setStatus('🎙️ <span class="text-purple-300 font-bold">Texto de voz de la toma copiado.</span>');
    });

    // Exportar Toma o Escena Completa
    root.querySelector('#bp-export-beat-zip')?.addEventListener('click', async () => {
      const slug = state.aspectRatio.replace(':', 'x');
      const entries = captureFullResBeatEntries(activeEval, '', activeBeat);
      const blob = await buildZipBlob(entries);
      downloadBlob(blob, `toma_${state.activeBeatIdx + 1}_${sc.id}_${slug}.zip`);
      ctx.setStatus(`📦 <span class="text-emerald-400 font-bold">Paquete de Toma ${state.activeBeatIdx + 1} (${state.aspectRatio}) descargado.</span>`);
    });

    root.querySelector('#bp-export-episode-zip')?.addEventListener('click', async () => {
      const btn = root.querySelector('#bp-export-episode-zip');
      if (btn) btn.textContent = `⏳ Empaquetando ${beats.length} Tomas…`;
      await new Promise((r) => setTimeout(r, 30));
      try {
        const allEntries = [];
        const slug = state.aspectRatio.replace(':', 'x');
        for (let i = 0; i < beats.length; i++) {
          const folder = `${String(i + 1).padStart(2, '0')}_toma_${i + 1}/`;
          allEntries.push(...captureFullResBeatEntries(evaluated[i], folder, beats[i]));
        }
        const zip = await buildZipBlob(allEntries);
        downloadBlob(zip, `escena_${sc.number}_${ep.id}_${slug}.zip`);
        ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Escena completa (${beats.length} tomas · ${state.aspectRatio}) descargada en .zip.</span>`);
      } finally {
        render();
      }
    });

    // Monitor y HUD
    root.querySelector('#bp-play-pipeline-top')?.addEventListener('click', () => runInteractivePipelineTour());
    root.querySelector('#bp-play-pipeline-hud')?.addEventListener('click', () => runInteractivePipelineTour());
    root.querySelector('#bp-mon-close')?.addEventListener('click', () => {
      state.monitorOpen = false;
      stopMonitorLoop();
      render();
    });
    root.querySelector('#bp-mon-split')?.addEventListener('click', () => {
      state.monitorSplit3D = !state.monitorSplit3D;
      render();
      if (state.compiledScenes.length) startReelPlaybackLoop();
    });
    root.querySelector('#bp-mon-playpause')?.addEventListener('click', () => {
      if (state.monitorPlaying) { stopMonitorLoop(); render(); }
      else startReelPlaybackLoop();
    });
    root.querySelector('#bp-mon-rec-webm')?.addEventListener('click', () => {
      const canvas = root.querySelector('#bp-monitor-canvas');
      if (!canvas || state.recordingDemo || !state.compiledScenes.length) return;
      state.recordingDemo = true;
      startReelPlaybackLoop();
      const mime = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((m) => MediaRecorder.isTypeSupported(m));
      const mr = new MediaRecorder(canvas.captureStream(30), { mimeType: mime, videoBitsPerSecond: 4_500_000 });
      const chunks = [];
      mr.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      mr.onstop = () => {
        state.recordingDemo = false;
        const blob = new Blob(chunks, { type: 'video/webm' });
        downloadBlob(blob, `montaje_${sc.id}_${state.aspectRatio.replace(':', 'x')}.webm`);
        render();
      };
      mr.start(200);
      const totalMs = state.compiledScenes.reduce((s, c) => s + c.durationSec, 0) * 1000;
      setTimeout(() => { if (mr.state !== 'inactive') mr.stop(); }, Math.min(15000, totalMs));
    });

    root.querySelector('#bp-hud-prev-beat').onclick = () => {
      state.activeBeatIdx = (state.activeBeatIdx + beats.length - 1) % beats.length;
      render();
    };
    root.querySelector('#bp-hud-next-beat').onclick = () => {
      state.activeBeatIdx = (state.activeBeatIdx + 1) % beats.length;
      render();
    };
    root.querySelector('#bp-hud-zoom-out').onclick = () => {
      state.zoom = Math.max(0.48, +(state.zoom - 0.08).toFixed(2));
      applyStageTransform();
    };
    root.querySelector('#bp-hud-zoom-in').onclick = () => {
      state.zoom = Math.min(1.25, +(state.zoom + 0.08).toFixed(2));
      applyStageTransform();
    };
    root.querySelector('#bp-hud-reset').onclick = () => {
      state.panX = 14;
      state.panY = 12;
      state.zoom = 0.84;
      state.positions = buildDefaultNodePositions(beats.length);
      render();
    };
    root.querySelector('#bp-hud-open-3d').onclick = () => {
      ctx.setAspectRatio?.(state.aspectRatio);
      ctx.selectFloor(activeEval.spot.floor);
      ctx.selectSpot(activeEval.spot);
      ctx.cinema.apply(activeEval.shot, state.aspectRatio);
      positionCameraForBeatAt(activeEval, 0, state.aspectRatio);
      if (ctx.alina?.root && activeBeat.role === 'A-Roll') ctx.alina.root.visible = true;
      ctx.switchMainView('plato');
    };
  }

  return {
    render,
    invalidateAndRender() {
      state.cutPairCache = {};
      state.viewerPassCache = {};
      if (root.innerHTML.trim()) render();
    },
    setAspectRatio(aspect, silentSync = true) {
      setAspectInternal(aspect, silentSync);
    },
    getCurrentSelection() {
      return {
        actId: state.actId,
        chapterId: state.chapterId,
        episodeId: state.episodeId,
        sceneId: state.sceneId
      };
    },
    openForScene({ actId, chapterId, episodeId, sceneId }) {
      if (actId) state.actId = actId;
      if (chapterId) state.chapterId = chapterId;
      if (episodeId) state.episodeId = episodeId;
      if (sceneId) state.sceneId = sceneId;
      state.activeBeatIdx = 0;
      render();
    }
  };
}
