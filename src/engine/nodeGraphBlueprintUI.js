/**
 * NodeGraphBlueprintUI — Grafo Nodal 2D Interactivo (Visual Sequencer IN→OUT + DaVinci Fusion Multipass)
 *
 * • Formato Horizontal 16:9 (YouTube 1920×1080) por defecto, alternable en 1 clic a Vertical 9:16 (Celular 1080×1920).
 * • Columna 2 (Visual Sequencer): Cada Toma muestra sus dos fotogramas reales 3D [INICIO (IN) ➔ CORTE (OUT)]
 *   para que el director arme y rellene la historia corte por corte con lectura espacial limpia.
 * • Columna 3 (Visor Único de Toma + Selector Contiguo de Efectos/Escalas): Un único monitor 3D nítido
 *   con botón contiguo (⟳ Escala) + selector directo (PBR | Bokeh | Depth | Térmico | Normals | Mask ID).
 */

import * as S from './cinematographySolver.js';
import * as HF from './higgsfieldAdapter.js';
import { buildZipBlob } from './zipWriter.js';
import { catalog } from './cinemaDirector.js';
import { ALINA_CHARACTER_BIBLE, PREFLIGHT_CHECKLIST } from '../data/alinaLoreData.js';
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

/** Divide el monólogo (hook) del capítulo en N tramos naturales para los cortes del Sequencer. */
function splitHookIntoSlices(hookText = '', count = 4) {
  const clean = String(hookText || '').replace(/^[«"']+|[»"']+$/g, '').trim();
  if (!clean) {
    return Array.from({ length: count }, (_, i) =>
      i === 0
        ? 'Apertura a cámara: plantea el conflicto o gancho inicial.'
        : i === count - 1
          ? 'Cierre / Remate: conclusión magnética antes del corte final.'
          : `Desarrollo sobre B-Roll ${i}: detalle visual que acompaña la narración.`
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

/** Construye los 4 Beats canónicos iniciales (A1 -> B1 Zero-Face -> B2 Zero-Face -> A2) con encuadre legible. */
function buildDefaultBeatsForChapter(ch, objects) {
  const spotId = ch?.spotId && catalog.spotCinematographyMap[ch.spotId] ? ch.spotId : 'podcast';
  const meta = catalog.spotCinematographyMap[spotId] || catalog.spotCinematographyMap.podcast;
  const defA = meta.defaultARollPreset;

  const linkedIds = Array.isArray(ch?.linkedObjectIds) ? ch.linkedObjectIds : [];
  const linkedObjs = objects.filter((o) => linkedIds.includes(o.id));
  const sameSpotObjs = objects.filter((o) => o.spotId === spotId || o.floor === meta.floor);
  const pool = [...linkedObjs, ...sameSpotObjs, ...objects];
  const obj1 = pool[0] || null;
  const obj2 = pool.find((o) => o && o.id !== obj1?.id) || obj1 || null;

  const slices = splitHookIntoSlices(ch?.hook || '', 4);

  return [
    {
      beatId: 'beat_1',
      label: 'Toma 1 · Apertura A-Roll',
      role: 'A-Roll',
      spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: defA.shotTypeId === 'ecu_eyes' ? 'mcu_interview' : defA.shotTypeId,
      cameraMoveId: defA.cameraMoveId,
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 50,
      apertureFStop: 1.8,
      durationSec: 3.5,
      objectId: '',
      voiceSlice: slices[0]
    },
    {
      beatId: 'beat_2',
      label: 'Toma 2 · Detalle B-Roll 1',
      role: 'B-Roll',
      spotId: obj1?.spotId && catalog.spotCinematographyMap[obj1.spotId] ? obj1.spotId : spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: 'macro_broll_prop',
      cameraMoveId: 'lateral_slider_truck',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 85,
      apertureFStop: 2.8,
      durationSec: 2.5,
      objectId: obj1?.id || '',
      voiceSlice: slices[1]
    },
    {
      beatId: 'beat_3',
      label: 'Toma 3 · Detalle B-Roll 2',
      role: 'B-Roll',
      spotId: obj2?.spotId && catalog.spotCinematographyMap[obj2.spotId] ? obj2.spotId : spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: 'macro_broll_prop',
      cameraMoveId: 'slow_dolly_push_in',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 85,
      apertureFStop: 2.8,
      durationSec: 2.5,
      objectId: obj2?.id || '',
      voiceSlice: slices[2]
    },
    {
      beatId: 'beat_4',
      label: 'Toma 4 · Cierre A-Roll',
      role: 'A-Roll',
      spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: defA.shotTypeId === 'ots_mirror' ? 'cu_portrait' : 'mcu_interview',
      cameraMoveId: 'slow_dolly_pull_out',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 50,
      apertureFStop: 1.8,
      durationSec: 3.5,
      objectId: '',
      voiceSlice: slices[3]
    }
  ];
}

function buildDefaultNodePositions(beatCount = 4) {
  const pos = {
    'node-chapter':     { x: 32,  y: 52 },
    'node-dna':         { x: 32,  y: 382 },
    'node-vault':       { x: 32,  y: 675 },
    'node-render2real': { x: 855, y: 48 },
    'node-higgsfield':  { x: 855, y: 558 },
    'node-gate':        { x: 855, y: 898 }
  };
  for (let i = 0; i < beatCount; i++) {
    pos[`node-beat-${i}`] = { x: 405, y: 48 + i * 334 };
  }
  return pos;
}

export function mountNodeGraphBlueprintUI(root, ctx) {
  if (!root) return null;

  const state = {
    chapterId: null,
    activeBeatIdx: 0,
    aspectRatio: ctx.getAspectRatio?.() || '16:9', // '16:9' Horizontal YouTube (default) | '9:16' Vertical Celular
    viewerPass: 'beauty', // 'beauty' | 'bokeh' | 'depth' | 'heatmap' | 'normals' | 'mask'
    viewerFramePoint: 'start', // 'start' (IN) | 'end' (OUT)
    panX: 16,
    panY: 12,
    zoom: 0.84,
    positions: buildDefaultNodePositions(4),
    checklist: PREFLIGHT_CHECKLIST.map((_, i) => i < 4),
    cutPairCache: {},    // beatCacheKey -> { startBeauty, endBeauty, moveSummary }
    viewerPassCache: {}, // `${beatCacheKey}_${framePoint}_${pass}` -> dataURL
    draggingNode: null,
    panning: null,
    // Estado del reproductor interactivo del Pipeline ("▶ Play Pipeline")
    tourRunning: false,
    tourAbort: false,
    execStage: '',
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
    return ctx.getChapters() || [];
  }

  function getObjects() {
    return ctx.getObjects() || [];
  }

  function getCurrentChapter() {
    const list = getChapters();
    if (!list.length) return null;
    const found = list.find((c) => c.id === state.chapterId) || list[0];
    state.chapterId = found.id;
    if (!Array.isArray(found.blueprintBeats) || found.blueprintBeats.length < 2) {
      found.blueprintBeats = buildDefaultBeatsForChapter(found, getObjects());
    } else {
      // Migrar cualquier B-Roll antiguo que tuviera rack_focus_macro_to_eyes (cilindro bloqueando cámara)
      for (const b of found.blueprintBeats) {
        if (b.role === 'B-Roll' && b.cameraMoveId === 'rack_focus_macro_to_eyes') {
          b.cameraMoveId = 'slow_dolly_push_in';
        }
      }
    }
    for (let i = 0; i < found.blueprintBeats.length; i++) {
      if (!state.positions[`node-beat-${i}`]) {
        state.positions[`node-beat-${i}`] = { x: 405, y: 48 + i * 334 };
      }
    }
    return found;
  }

  function makeBeatCacheKey(ch, b, aspect = state.aspectRatio) {
    const lightMode = ctx.getLightingMode?.() || 'night';
    return `${ch.id}_${b.beatId}_${aspect}_${lightMode}_${b.role}_${b.spotId}_${b.objectId}_${b.directorStyleId}_${b.shotTypeId}_${b.cameraMoveId}_${b.focalLengthMm}`;
  }

  /** Convierte un Beat del Sequencer en un StoryboardShot + CinemaShotPayload + Manifest Higgsfield. */
  function evaluateBeat(beat, idx, chapter, aspect = state.aspectRatio) {
    const objects = getObjects();
    const vaultObj = beat.role === 'B-Roll'
      ? (objects.find((o) => o.id === beat.objectId) || objects[0] || null)
      : null;

    const effectiveSpotId =
      beat.role === 'B-Roll' && vaultObj?.spotId && catalog.spotCinematographyMap[vaultObj.spotId]
        ? vaultObj.spotId
        : (catalog.spotCinematographyMap[beat.spotId] ? beat.spotId : 'podcast');

    const spot = ctx.findSpotById(effectiveSpotId) || ctx.getActiveSpot();
    const meta = catalog.spotCinematographyMap[effectiveSpotId] || { specialFlags: {} };
    const isBroll = beat.role === 'B-Roll';
    const isMirror = !isBroll && beat.shotTypeId === 'ots_mirror' && Boolean(meta.specialFlags?.mirrorShot);
    const isRack = !isBroll && beat.cameraMoveId === 'rack_focus_macro_to_eyes';

    const shot = {
      shotId: `ch${chapter?.number || 1}_${beat.beatId}_${isBroll ? 'broll_zeroface' : 'aroll'}`,
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
      // CRÍTICO: Jamás activar cilindros/props sintéticos en primer término sobre un B-Roll de Objeto de Bóveda
      foregroundFraming: isBroll ? false : Boolean(isRack),
      controlNetOverrides: isMirror ? { depthWeight: 0.35 } : undefined
    };

    const payload = ctx.cinema.resolve(shot, aspect);
    const manifest = HF.buildHiggsfieldManifest({
      shot,
      spot,
      payload,
      catalog,
      sceneId: `cap_${chapter?.number || 1}_blueprint`,
      aspectRatio: aspect
    });

    // GARANTÍA ZERO-FACE ESTRICTA EN B-ROLL
    let cleanFluxPrompt = payload.prompts.fluxClean || payload.prompts.flux;
    if (isBroll && vaultObj) {
      const li = ix.lights.get(shot.lightingSchemeId);
      const dir = ix.directors.get(shot.directorStyleId);
      cleanFluxPrompt = [
        `85mm cinema close-up still-life B-roll of ${vaultObj.promptToken}`,
        li?.promptLightingTokens,
        dir?.fluxPromptTokens,
        'strictly zero human presence, no face, no hands, readable room context and crisp PBR surface detail'
      ]
        .filter(Boolean)
        .join(', ');

      manifest.structuredPrompt.blocks.subject = `Zero human presence; clear tabletop/architectural shot of ${vaultObj.name} (${vaultObj.handle}) with smooth specular highlights`;
      manifest.structuredPrompt.compiled = `[CAMERA: ${manifest.structuredPrompt.blocks.camera}] [SUBJECT: ${manifest.structuredPrompt.blocks.subject}] [PHYSICS: ${vaultObj.motionPrompt || manifest.structuredPrompt.blocks.physics}] [LIGHTING: ${manifest.structuredPrompt.blocks.lighting}]`;
      manifest.vaultObjectRef = {
        id: vaultObj.id,
        handle: vaultObj.handle,
        name: vaultObj.name,
        reduxWeight: vaultObj.reduxWeight ?? 0.75
      };
    }

    const kelvinKey = payload.realtimeRig.keyLight.kelvin || 3200;
    return { shot, spot, vaultObj, payload, manifest, cleanFluxPrompt, kelvinKey };
  }

  /**
   * Coloca la cámara 3D de forma limpia y legible en tNorm ∈ {0 (INICIO), 1 (CORTE)}
   * tanto para A-Roll (Alina con aire cinematográfico) como para B-Roll (Objeto completo sin obstrucciones).
   */
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
        // Vector derecho perpendicular en XZ para movimientos de slider/arco
        const rx = vz / horizLen;
        const rz = -vx / horizLen;

        // Alejar suavemente para que el objeto se lea entero con su mesa/entorno (y aún más en 9:16 vertical)
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
          // slow_dolly_push_in por defecto: IN plano medio del objeto -> OUT acercamiento nítido
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

  /** Renderiza el par [INICIO (IN) ➔ CORTE (OUT)] para una tarjeta del Visual Sequencer. */
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

    const mvLabel = ix.moves.get(evalData.shot.cameraMoveId)?.shortLabel
      || ix.moves.get(evalData.shot.cameraMoveId)?.label?.split('(')[0]?.trim()
      || evalData.shot.cameraMoveId;

    const pair = {
      startBeauty,
      endBeauty,
      startFocusM: st0.focusDistM,
      endFocusM: st1.focusDistM,
      moveLabel: mvLabel
    };
    state.cutPairCache[beatKey] = pair;
    state.viewerPassCache[`${beatKey}_start_beauty`] = startBeauty;
    state.viewerPassCache[`${beatKey}_end_beauty`] = endBeauty;
    return pair;
  }

  /** Renderiza bajo demanda en alta nitidez el pase/escala seleccionado para el Visor Único de Toma. */
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
  // MONITOR DE MONTAJE EN VIVO (SOPORTA 16:9 YOUTUBE Y 9:16 CELULAR)
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
    } else if (mv === 'handheld_walking_lubezki') {
      scale = 1.05;
      tx = Math.sin(globalElapsedSec * Math.PI * 2 * 1.7) * 3.5;
      ty = Math.abs(Math.cos(globalElapsedSec * Math.PI * 2 * 1.7)) * 4.0 - 2;
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
    if (sceneClip.endImg) {
      drawTransformed(sceneClip.endImg, easeT * 0.9);
    }
    c2.restore();

    const g = sceneClip.grade || {};
    if (g.splitShadowsHex) {
      c2.save();
      c2.globalCompositeOperation = 'soft-light';
      const grad = c2.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, g.splitHighlightsHex || '#ffe0b2');
      grad.addColorStop(1, g.splitShadowsHex || '#14202e');
      c2.globalAlpha = 0.28;
      c2.fillStyle = grad;
      c2.fillRect(0, 0, W, H);
      c2.restore();
    }

    if (state.monitorSplit3D) {
      const splitX = Math.round(W * 0.36);
      c2.save();
      c2.beginPath();
      c2.rect(0, 0, splitX, H);
      c2.clip();
      c2.drawImage(sceneClip.startImg, 0, 0, W, H);
      if (sceneClip.depthImg) {
        c2.globalAlpha = 0.34;
        const pipW = Math.round(W * 0.22);
        const pipH = Math.round(H * 0.22);
        c2.drawImage(sceneClip.depthImg, 6, H - pipH - 12, pipW, pipH);
      }
      c2.restore();

      c2.strokeStyle = 'rgba(56, 189, 248, 0.9)';
      c2.lineWidth = 1.5;
      c2.beginPath();
      c2.moveTo(splitX, 0);
      c2.lineTo(splitX, H);
      c2.stroke();

      c2.fillStyle = 'rgba(6, 9, 17, 0.82)';
      c2.fillRect(6, 30, 74, 15);
      c2.fillRect(splitX + 6, 30, 108, 15);
      c2.font = 'bold 8.5px ui-monospace, monospace';
      c2.fillStyle = '#38bdf8';
      c2.fillText('IN 3D PREVIZ', 10, 40);
      c2.fillStyle = '#34d399';
      c2.fillText('CORTE / SIM IA', splitX + 10, 40);
    }

    // HUD Superior
    c2.fillStyle = 'rgba(6, 9, 17, 0.78)';
    c2.fillRect(0, 0, W, 26);
    c2.font = 'bold 9.5px ui-monospace, monospace';
    c2.fillStyle = sceneClip.role === 'A-Roll' ? '#f472b6' : '#fbbf24';
    c2.fillText(`● TOMA ${sceneClip.beatIdx + 1}/${sceneClip.totalBeats} [${sceneClip.role === 'A-Roll' ? 'A-ROLL' : 'B-ROLL 0-FACE'}]`, 8, 16);
    c2.textAlign = 'right';
    c2.fillStyle = '#34d399';
    c2.fillText(`${globalElapsedSec.toFixed(1)}s / ${totalDurSec.toFixed(1)}s`, W - 8, 16);
    c2.textAlign = 'left';

    // Subtítulo de Historia / Voz
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
      lines.slice(0, 2).forEach((ln, idx) => {
        c2.fillText(ln, W / 2, H - 28 + idx * 13);
      });
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
      state.execStage = '';
      state.execBanner = '';
      state.execNodeIds.clear();
      stopMonitorLoop();
      render();
      return;
    }

    const ch = getCurrentChapter();
    if (!ch) return;
    stopMonitorLoop();
    state.tourRunning = true;
    state.tourAbort = false;
    state.compiledScenes = [];
    state.monitorOpen = true;
    state.monitorFilterScene = -1;

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const beats = ch.blueprintBeats;

    for (let i = 0; i < beats.length; i++) {
      if (state.tourAbort) break;
      const b = beats[i];
      const ev = evaluateBeat(b, i, ch, state.aspectRatio);
      const bKey = makeBeatCacheKey(ch, b, state.aspectRatio);

      state.activeBeatIdx = i;
      state.execStage = 'sources';
      state.execNodeIds = new Set(['node-chapter', b.role === 'A-Roll' ? 'node-dna' : 'node-vault', `node-beat-${i}`]);
      state.execBanner = `⚡ [Toma ${i + 1}/${beats.length} · ${state.aspectRatio}] Enrutando historia y sujeto hacia Inicio (IN) → Corte (OUT)…`;
      render();
      await sleep(420);
      if (state.tourAbort) break;

      state.execStage = 'render2real';
      state.execNodeIds = new Set([`node-beat-${i}`, 'node-render2real']);
      state.execBanner = `🩵 [Toma ${i + 1}/${beats.length}] Renderizando par 3D Inicio (IN) → Corte (OUT) y mapa de profundidad…`;
      render();
      await sleep(60);

      const pair = ensureBeatCutPair(ev, bKey, state.aspectRatio);
      const depthUrl = ensureViewerSinglePass(ev, bKey, 'start', 'heatmap', state.aspectRatio);
      const [startImg, endImg, depthImg] = await Promise.all([
        loadImageAsync(pair?.startBeauty),
        loadImageAsync(pair?.endBeauty || pair?.startBeauty),
        loadImageAsync(depthUrl)
      ]);
      render();
      await sleep(380);
      if (state.tourAbort) break;

      state.execStage = 'higgsfield';
      state.execNodeIds = new Set(['node-render2real', 'node-higgsfield', 'node-gate']);
      const hf = ev.manifest.higgsfieldCinemaStudio;
      state.execBanner = `🟣 [Toma ${i + 1}/${beats.length}] Empalmando corte (${hf.cameraLabel} + ${hf.lensLabel}) en el montaje ${state.aspectRatio}…`;

      const sceneClip = {
        beatIdx: i,
        totalBeats: beats.length,
        role: b.role,
        label: `Toma ${i + 1}`,
        durationSec: Number(b.durationSec) || 3.0,
        voiceSlice: b.voiceSlice || '',
        cameraLabel: hf.cameraLabel,
        lensLabel: hf.lensLabel,
        moveId: ev.shot.cameraMoveId,
        grade: ev.payload.volumeGrade,
        startImg,
        endImg,
        depthImg
      };
      state.compiledScenes.push(sceneClip);
      render();

      const previewStart = performance.now();
      while (performance.now() - previewStart < 620 && !state.tourAbort) {
        const pT = (performance.now() - previewStart) / 620;
        renderMonitorFrame(sceneClip, pT, pT * sceneClip.durationSec, sceneClip.durationSec);
        await sleep(32);
      }
    }

    state.tourRunning = false;
    state.execNodeIds.clear();
    if (!state.tourAbort && state.compiledScenes.length > 0) {
      state.execStage = 'reel_loop';
      state.execBanner = `✅ Secuencia ${state.aspectRatio} lista: Reproduciendo ${state.compiledScenes.length} tomas encadenadas (Inicio → Corte).`;
      render();
      startReelPlaybackLoop();
      ctx.setStatus(`🎬 <span class="text-emerald-400 font-bold">Montaje Visual Sequencer (${state.aspectRatio}) en reproducción:</span> ${state.compiledScenes.length} cortes encadenados.`);
    } else {
      state.execStage = '';
      state.execBanner = '';
      render();
    }
  }

  /** Captura Full-HD (1920×1080 en 16:9 YouTube, o 1080×1920 en 9:16 Celular) para exportación .ZIP. */
  function captureFullResBeatEntries(evalData, folderPrefix = '', beatVoiceSlice = '') {
    const { shot, vaultObj, manifest, cleanFluxPrompt } = evalData;
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

      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_beauty_${resTag}.png`,
        data: ctx.camCtrl.renderFrameDataURL(w, h, 'beauty')
      });
      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_bokeh_${resTag}.png`,
        data: ctx.camCtrl.renderFrameDataURL(w, h, 'bokeh', { dof: dofSpec })
      });
      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_depth_${resTag}.png`,
        data: ctx.camCtrl.renderFrameDataURL(w, h, 'depth', { depthBoundsM: camMetrics.depthBoundsM })
      });
      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_normals_${resTag}.png`,
        data: ctx.camCtrl.renderFrameDataURL(w, h, 'normals')
      });
      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_mask_${resTag}.png`,
        data: ctx.camCtrl.renderFrameDataURL(w, h, 'mask')
      });

      if (shot.shotRole === 'A-Roll') {
        const op = ctx.camCtrl.renderOpenPose916(w, h, ctx.alina?.root || null);
        entries.push({ path: `${folderPrefix}frames_3d_raw/${tag}_openpose_${resTag}.png`, data: op.dataUrl });
        entries.push({ path: `${folderPrefix}frames_3d_raw/${tag}_openpose.json`, data: op.keypoints });
      }
    };

    captureAt(0, 'start');
    captureAt(1, 'end');

    if (shot.shotRole === 'B-Roll' && vaultObj?.image?.startsWith('data:')) {
      entries.push({
        path: `${folderPrefix}vault_object_ref/${vaultObj.handle.replace('@', '')}.png`,
        data: vaultObj.image
      });
    }

    if (ctx.alina?.root) ctx.alina.root.visible = prevAlinaVis;
    ctx.camCtrl.render();

    manifest.renderToRealComfyJob.globalStage1A.prompt = cleanFluxPrompt;
    manifest.elevenLabsVoiceSlice = beatVoiceSlice;

    entries.push({ path: `${folderPrefix}higgsfield_manifest.json`, data: manifest });
    entries.push({ path: `${folderPrefix}comfy_render2real_job.json`, data: manifest.renderToRealComfyJob });
    entries.push({
      path: `${folderPrefix}BEAT_PRODUCTION_SHEET.txt`,
      data: [
        `=== BEAT SHEET (${shot.shotRole} · ${state.aspectRatio}) ===`,
        `Shot ID:        ${shot.shotId}`,
        `Format:         ${state.aspectRatio} (${resTag})`,
        `Keyframe Mode:  ${manifest.keyframeStrategy.mode}`,
        `Higgsfield Rig: ${manifest.higgsfieldCinemaStudio.cameraLabel} + ${manifest.higgsfieldCinemaStudio.lensLabel} (${manifest.higgsfieldCinemaStudio.focalLength} ${manifest.higgsfieldCinemaStudio.aperture})`,
        `Move Preset:    ${manifest.higgsfieldCinemaStudio.uiPresetLabel}`,
        `Story / Voice:  "${beatVoiceSlice}"`,
        ``,
        `[1] PROMPT FLUX RENDER-TO-REAL:`,
        cleanFluxPrompt,
        ``,
        `[2] HIGGSFIELD DELTA STRUCTURED PROMPT:`,
        manifest.structuredPrompt.compiled
      ].join('\n')
    });

    return entries;
  }

  // ==========================================================================
  // CABLES CÚBICOS BÉZIER EN SVG EN TIEMPO REAL
  // ==========================================================================
  function updateCablesSVG() {
    const svg = root.querySelector('#bp-cables-svg');
    const stage = root.querySelector('#bp-graph-stage');
    if (!svg || !stage) return;

    const ch = getCurrentChapter();
    if (!ch) return;
    const beats = ch.blueprintBeats;
    const evaluated = beats.map((b, i) => evaluateBeat(b, i, ch, state.aspectRatio));

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

    beats.forEach((_, i) => {
      cables.push({
        from: getPort('node-chapter', 'right', Math.min(0.88, 0.28 + i * 0.14)),
        to: getPort(`node-beat-${i}`, 'left', 0.22),
        color: '#a855f7',
        opacity: i === state.activeBeatIdx ? 0.92 : 0.34,
        width: i === state.activeBeatIdx ? 2.5 : 1.5,
        dashed: true
      });
    });

    beats.forEach((b, i) => {
      if (b.role === 'A-Roll') {
        cables.push({
          from: getPort('node-dna', 'right', 0.5),
          to: getPort(`node-beat-${i}`, 'left', 0.65),
          color: '#ec4899',
          opacity: i === state.activeBeatIdx ? 0.95 : 0.42,
          width: i === state.activeBeatIdx ? 2.8 : 1.6,
          dashed: false
        });
      } else {
        cables.push({
          from: getPort('node-vault', 'right', 0.5),
          to: getPort(`node-beat-${i}`, 'left', 0.65),
          color: '#f59e0b',
          opacity: i === state.activeBeatIdx ? 0.95 : 0.46,
          width: i === state.activeBeatIdx ? 2.8 : 1.6,
          dashed: false
        });
      }
    });

    // Cables verticales de Corte + Raccord Kelvin entre Toma i (OUT) -> Toma i+1 (IN)
    for (let i = 0; i < beats.length - 1; i++) {
      const kA = evaluated[i].kelvinKey;
      const kB = evaluated[i + 1].kelvinKey;
      const deltaK = Math.abs(kA - kB);
      const raccordOk = deltaK <= 1800;
      cables.push({
        from: getPort(`node-beat-${i}`, 'bottom'),
        to: getPort(`node-beat-${i + 1}`, 'top'),
        vertical: true,
        color: raccordOk ? '#10b981' : '#f59e0b',
        opacity: 0.92,
        width: 2.6,
        dashed: !raccordOk,
        badgeText: raccordOk ? `✂ Corte · Δ${deltaK}K ✔` : `✂ Corte · Δ${deltaK}K ⚠`
      });
    }

    const activeBeatNode = `node-beat-${state.activeBeatIdx}`;
    const activeRole = beats[state.activeBeatIdx]?.role || 'A-Roll';
    const activeCableColor = activeRole === 'A-Roll' ? '#38bdf8' : '#f59e0b';

    cables.push({
      from: getPort(activeBeatNode, 'right', 0.42),
      to: getPort('node-render2real', 'left', 0.35),
      color: activeCableColor,
      opacity: 1.0,
      width: 3.2,
      dashed: true,
      glow: true
    });
    cables.push({
      from: getPort('node-render2real', 'bottom'),
      to: getPort('node-higgsfield', 'top'),
      vertical: true,
      color: '#c084fc',
      opacity: 0.95,
      width: 2.8,
      dashed: true
    });
    cables.push({
      from: getPort('node-higgsfield', 'bottom'),
      to: getPort('node-gate', 'top'),
      vertical: true,
      color: '#10b981',
      opacity: 0.95,
      width: 2.8,
      dashed: false
    });

    svg.innerHTML = cables
      .map((c, idx) => {
        const { from, to } = c;
        let d;
        if (c.vertical) {
          const dy = Math.max(22, Math.abs(to.y - from.y) * 0.45);
          d = `M ${from.x} ${from.y} C ${from.x} ${from.y + dy}, ${to.x} ${to.y - dy}, ${to.x} ${to.y}`;
        } else {
          const dx = Math.max(60, Math.abs(to.x - from.x) * 0.52);
          d = `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
        }
        const midX = (from.x + to.x) * 0.5;
        const midY = (from.y + to.y) * 0.5;
        const showPulse = state.tourRunning && c.opacity >= 0.9;
        return `
          <g>
            ${c.glow || showPulse ? `<path d="${d}" fill="none" stroke="${c.color}" stroke-width="9" stroke-opacity="0.22" />` : ''}
            <path id="bp-path-${idx}" d="${d}" fill="none" stroke="${c.color}" stroke-width="${c.width}" stroke-opacity="${c.opacity}"
              ${c.dashed ? 'stroke-dasharray="7 5" class="bp-cable-anim"' : ''} stroke-linecap="round" />
            ${
              showPulse
                ? `<circle r="5.5" fill="#ffffff" filter="drop-shadow(0 0 6px ${c.color})">
                     <animateMotion dur="0.65s" repeatCount="indefinite" path="${d}" />
                   </circle>`
                : ''
            }
            <circle cx="${from.x}" cy="${from.y}" r="5" fill="${c.color}" fill-opacity="${c.opacity}" />
            <circle cx="${to.x}" cy="${to.y}" r="5.5" fill="#060911" stroke="${c.color}" stroke-width="2.2" />
            ${
              c.badgeText
                ? `<g transform="translate(${midX}, ${midY})">
                     <rect x="-58" y="-9" width="116" height="18" rx="9" fill="#090d16" stroke="${c.color}" stroke-opacity="0.55" stroke-width="1"/>
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
    if (stage) {
      stage.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    }
    if (vp) {
      vp.style.backgroundPosition = `${state.panX}px ${state.panY}px, ${state.panX}px ${state.panY}px, ${state.panX}px ${state.panY}px`;
    }
    if (zoomLbl) {
      zoomLbl.textContent = `${Math.round(state.zoom * 100)}%`;
    }
  }

  // ==========================================================================
  // RENDERIZADO COMPLETO DEL LIENZO Y LOS NODOS
  // ==========================================================================
  function render() {
    const chapters = getChapters();
    const objects = getObjects();
    const ch = getCurrentChapter();
    if (!ch) {
      root.innerHTML = `<div class="p-8 text-center text-xs text-slate-400 bg-[#12141a] rounded-2xl border border-white/10">Crea primero un capítulo en «Capítulos & Historia» para abrir el Grafo Blueprint.</div>`;
      return;
    }

    const beats = ch.blueprintBeats;
    if (state.activeBeatIdx >= beats.length) state.activeBeatIdx = Math.max(0, beats.length - 1);
    const evaluated = beats.map((b, i) => evaluateBeat(b, i, ch, state.aspectRatio));
    const activeBeat = beats[state.activeBeatIdx];
    const activeEval = evaluated[state.activeBeatIdx];

    // Pre-generar automáticamente los fotogramas [INICIO ➔ CORTE] de las tomas visibles para que el encuadre sea siempre claro
    const beatPairs = beats.map((b, i) => {
      const bKey = makeBeatCacheKey(ch, b, state.aspectRatio);
      return ensureBeatCutPair(evaluated[i], bKey, state.aspectRatio);
    });

    const activeBeatKey = makeBeatCacheKey(ch, activeBeat, state.aspectRatio);
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

    const aRollCount = beats.filter((b) => b.role === 'A-Roll').length;
    const bRollCount = beats.filter((b) => b.role === 'B-Roll').length;
    const totalSec = +beats.reduce((acc, b) => acc + (Number(b.durationSec) || 0), 0).toFixed(1);
    const ratio12Ok = bRollCount >= 2 && aRollCount >= 1;
    const durationsOk = beats.every((b) => Number(b.durationSec) <= 4.0);
    const checkedCount = state.checklist.filter(Boolean).length;
    const safetyPct = Math.round((checkedCount / PREFLIGHT_CHECKLIST.length) * 100);

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
    const kf = activeEval.manifest.keyframeStrategy;
    const stageHeight = Math.max(1280, 120 + beats.length * 315);

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

      <div id="bp-viewport" class="bp-viewport relative w-full h-[calc(100vh-175px)] min-h-[700px] rounded-2xl border border-white/15 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing">

        <!-- BARRA SUPERIOR: PLAY PIPELINE + FORMATO (16:9 YOUTUBE / 9:16 CELULAR) + AÑADIR TOMA -->
        <div class="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div class="pointer-events-auto flex flex-wrap items-center gap-2 bg-black/85 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 text-[11px]">
            <button id="bp-play-pipeline-top" class="px-3 py-1 rounded-lg font-bold text-white shadow-lg transition-all flex items-center gap-1.5 ${
              state.tourRunning
                ? 'bg-rose-600 hover:bg-rose-500 animate-pulse'
                : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95'
            }">
              <span>${state.tourRunning ? '⏹ Detener' : `▶ Play Secuencia (${beats.length} Tomas)`}</span>
            </button>

            <div class="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10 text-[10.5px]">
              <button data-bp-aspect="16:9" class="px-2 py-0.5 rounded-md font-semibold transition-all ${
                isLand ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }" title="Horizontal para YouTube (1920×1080)">🖥️ 16:9 YouTube</button>
              <button data-bp-aspect="9:16" class="px-2 py-0.5 rounded-md font-semibold transition-all ${
                !isLand ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }" title="Vertical para Celular / Reels (1080×1920)">📱 9:16 Celular</button>
            </div>

            <button id="bp-add-beat-top" class="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-slate-100 font-semibold text-[10.5px]" title="Añadir un nuevo corte al Visual Sequencer para alargar la historia">
              + Añadir Toma
            </button>

            ${
              state.compiledScenes.length > 0 && !state.tourRunning
                ? `<button id="bp-toggle-monitor-top" class="px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/35 border border-purple-400/40 text-purple-200 font-semibold text-[10.5px]">
                     🎞️ ${state.monitorOpen ? 'Ocultar Monitor' : 'Ver Monitor'}
                   </button>`
                : ''
            }
            <span class="text-slate-300 font-mono text-[10px] hidden xl:inline">
              ${state.execBanner ? esc(state.execBanner) : 'Visual Sequencer: cada toma muestra su INICIO y su CORTE para rellenar la historia tramo a tramo'}
            </span>
          </div>

          <div class="pointer-events-auto flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-emerald-500/30 rounded-xl px-3 py-1 text-[10px] font-mono">
            <span class="text-sky-300 font-bold">${state.aspectRatio}</span>
            <span class="text-slate-600">•</span>
            <span class="${ratio12Ok ? 'text-emerald-300' : 'text-amber-300'}">${aRollCount} A-Roll : ${bRollCount} B-Roll</span>
            <span class="text-slate-600">•</span>
            <span class="${durationsOk ? 'text-slate-200' : 'text-amber-300'}">${totalSec}s</span>
          </div>
        </div>

        <!-- ESCENARIO TRANSFORMABLE (PAN + ZOOM) -->
        <div id="bp-graph-stage" class="absolute top-0 left-0 origin-top-left" style="width: 1320px; height: ${stageHeight}px;">
          <svg id="bp-cables-svg" class="absolute inset-0 w-full h-full pointer-events-none overflow-visible" width="1320" height="${stageHeight}"></svg>

          <!-- ===============================================================
               COLUMNA 1: FUENTES INMUTABLES (HISTORIA, ADN ALINA, BÓVEDA)
               =============================================================== -->

          <!-- NODO 1: HISTORIA GENERAL & LOCUCIÓN -->
          <div id="node-chapter" class="bp-node border border-purple-500/45 ${execRing('node-chapter')}" style="${posStyle('node-chapter', 330)}">
            <div data-drag="node-chapter" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-purple-500/15 border-b border-purple-500/30">
              <span class="text-[11px] font-bold text-purple-200 tracking-wide">🟣 HISTORIA & GUION MAESTRO</span>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/25 text-purple-200">${esc(ch.week || `Cap. ${ch.number}`)}</span>
            </div>
            <div class="p-3 space-y-2 text-[11px]">
              <select id="bp-chap-select" class="w-full bg-black/60 border border-white/15 rounded-lg p-1.5 text-white font-semibold">
                ${chapters.map((c) => `<option value="${esc(c.id)}" ${c.id === ch.id ? 'selected' : ''}>Cap. ${c.number}: ${esc(c.title)}</option>`).join('')}
              </select>
              <div class="text-[10px] text-slate-400 line-clamp-2">${esc(ch.synopsis || ch.subtitle || '')}</div>
              <div class="space-y-1">
                <div class="flex items-center justify-between text-[10px] font-mono text-purple-300">
                  <span>🎙️ Voz completa del capítulo</span>
                  <button id="bp-resplit-hook" class="text-[9.5px] underline hover:text-white" title="Dividir el texto completo entre las tomas del Sequencer">Repartir en ${beats.length} Tomas</button>
                </div>
                <textarea id="bp-chap-hook" rows="3" class="w-full bg-black/55 border border-white/10 rounded-lg p-2 text-[10px] font-mono text-slate-200 leading-snug" placeholder="Escribe la historia o monólogo general y repártelo en las tomas...">${esc(ch.hook || '')}</textarea>
              </div>
            </div>
          </div>

          <!-- NODO 2: ADN ALINA & RIG ARKIT -->
          <div id="node-dna" class="bp-node border border-pink-500/45 ${execRing('node-dna')}" style="${posStyle('node-dna', 330)}">
            <div data-drag="node-dna" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-pink-500/15 border-b border-pink-500/30">
              <span class="text-[11px] font-bold text-pink-200 tracking-wide">🩷 ADN ALINA & RIG 3D LOCK</span>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-pink-500/25 text-pink-200">SOLO A-ROLL</span>
            </div>
            <div class="p-3 space-y-2 text-[10.5px]">
              <div class="flex items-center gap-2.5">
                <img src="./alina_avatar.jpg" onerror="this.style.display='none'" alt="Alina" class="w-11 h-11 rounded-xl object-cover border border-pink-500/40 shrink-0">
                <div class="min-w-0">
                  <div class="font-bold text-white truncate">Alina Van Dijk (1.72m Metric)</div>
                  <div class="text-[9.5px] font-mono text-pink-300">LoRA 0.85 + PuLID 0.75 • Smirk +0.15</div>
                  <div class="text-[9.5px] font-mono text-slate-400">Encuadre ${state.aspectRatio} compensado</div>
                </div>
              </div>
              <div class="p-2 rounded-lg bg-black/55 border border-white/5 text-[9.5px] font-mono text-slate-300 line-clamp-2">${esc(ALINA_CHARACTER_BIBLE.consistencyLock.tokenSnippet)}</div>
            </div>
          </div>

          <!-- NODO 3: BÓVEDA DE OBJETOS ZERO-FACE -->
          <div id="node-vault" class="bp-node border border-amber-500/45 ${execRing('node-vault')}" style="${posStyle('node-vault', 330)}">
            <div data-drag="node-vault" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-amber-500/15 border-b border-amber-500/30">
              <span class="text-[11px] font-bold text-amber-200 tracking-wide">🏺 BÓVEDA @OBJETOS (${objects.length})</span>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-200">B-ROLL 0-FACE</span>
            </div>
            <div class="p-3 space-y-2 text-[10.5px]">
              <div class="text-[10px] text-slate-300 leading-snug">
                Oculta a Alina y encuadra el objeto completo con su mesa/entorno (sin cilindros ni recortes ciegos).
              </div>
              <div class="grid grid-cols-2 gap-1.5 max-h-32 overflow-y-auto custom-scrollbar pr-0.5">
                ${objects
                  .slice(0, 8)
                  .map(
                    (o) => `
                  <div class="flex items-center gap-1.5 p-1 rounded-lg bg-black/50 border border-white/10">
                    <img src="${o.image}" alt="" class="w-6 h-6 rounded object-cover shrink-0 bg-black">
                    <span class="text-[9.5px] font-mono text-amber-200 truncate">${esc(o.handle)}</span>
                  </div>`
                  )
                  .join('')}
              </div>
            </div>
          </div>

          <!-- ===============================================================
               COLUMNA 2: VISUAL SEQUENCER (INICIO [IN] ➔ CORTE [OUT] + HISTORIA)
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

              return `
              <div id="node-beat-${i}" data-select-beat="${i}" class="bp-node border ${borderCls} ${execRing(`node-beat-${i}`)} transition-shadow" style="${posStyle(`node-beat-${i}`, 405)}">
                <div data-drag="node-beat-${i}" class="bp-node-header flex items-center justify-between px-3 py-1.5 rounded-t-2xl ${isA ? 'bg-[#c86446]/20 border-b border-[#c86446]/30' : 'bg-amber-500/15 border-b border-amber-500/30'}">
                  <div class="flex items-center gap-1.5">
                    <span class="text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded ${isA ? 'bg-pink-500/25 text-pink-200' : 'bg-amber-500/25 text-amber-200'}">${isA ? 'A-ROLL' : 'B-ROLL'}</span>
                    <span class="text-[11px] font-bold text-white">Toma ${i + 1}</span>
                    <span class="text-[9.5px] font-mono text-emerald-300">${tStart}s → ${tEnd}s</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[9px] font-mono text-slate-300">${ev.kelvinKey}K</span>
                    ${
                      beats.length > 2
                        ? `<button type="button" data-del-beat="${i}" class="px-1.5 py-0.2 rounded bg-black/40 hover:bg-rose-600/80 text-[9.5px] text-slate-300 hover:text-white" title="Eliminar esta toma">✕</button>`
                        : ''
                    }
                  </div>
                </div>

                <div class="p-2.5 space-y-2 text-[10.5px]">
                  <!-- PAR VISUAL DE MONTAJE: [ INICIO (IN) ➔ CORTE / FINAL (OUT) ] -->
                  <div class="grid grid-cols-11 gap-1 items-center bg-black/55 p-1.5 rounded-xl border border-white/10">
                    <div class="col-span-5 space-y-0.5">
                      <div class="flex items-center justify-between text-[8.5px] font-mono">
                        <span class="text-emerald-400 font-bold">● INICIO (IN)</span>
                        <span class="text-slate-400">${tStart}s</span>
                      </div>
                      ${
                        pair?.startBeauty
                          ? `<img src="${pair.startBeauty}" alt="Inicio Toma ${i + 1}" class="w-full rounded-lg border border-white/15 bg-black object-cover mx-auto block" style="aspect-ratio:${aspectCss}; max-height:${isLand ? '96px' : '118px'}; width:${isLand ? '100%' : 'auto'};">`
                          : `<div class="h-16 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[9px] text-slate-500">Render…</div>`
                      }
                    </div>

                    <div class="col-span-1 flex flex-col items-center justify-center text-center">
                      <span class="text-sky-400 font-bold text-xs">➔</span>
                      <span class="text-[7.5px] font-mono text-slate-400 leading-tight">✂</span>
                    </div>

                    <div class="col-span-5 space-y-0.5">
                      <div class="flex items-center justify-between text-[8.5px] font-mono">
                        <span class="text-rose-400 font-bold">■ CORTE (OUT)</span>
                        <span class="text-slate-400">${tEnd}s</span>
                      </div>
                      ${
                        pair?.endBeauty
                          ? `<img src="${pair.endBeauty}" alt="Corte Toma ${i + 1}" class="w-full rounded-lg border border-white/15 bg-black object-cover mx-auto block" style="aspect-ratio:${aspectCss}; max-height:${isLand ? '96px' : '118px'}; width:${isLand ? '100%' : 'auto'};">`
                          : `<div class="h-16 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[9px] text-slate-500">Render…</div>`
                      }
                    </div>
                  </div>

                  <!-- CONTROLES DE SUJETO, ENCUADRE Y RECORRIDO IN->OUT -->
                  <div class="grid grid-cols-3 gap-1">
                    <select data-beat="${i}" data-field="role" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-white font-semibold">
                      <option value="A-Roll" ${isA ? 'selected' : ''}>🧑 A-Roll Alina</option>
                      <option value="B-Roll" ${!isA ? 'selected' : ''}>🏺 B-Roll Objeto</option>
                    </select>
                    ${
                      isA
                        ? `<select data-beat="${i}" data-field="spotId" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-white">
                            ${allSpots.map((spId) => `<option value="${spId}" ${b.spotId === spId ? 'selected' : ''}>📍 ${spId}</option>`).join('')}
                           </select>`
                        : `<select data-beat="${i}" data-field="objectId" class="col-span-2 bg-black/65 border border-amber-500/30 rounded px-1.5 py-1 text-amber-200 font-mono">
                            ${objects.map((o) => `<option value="${esc(o.id)}" ${b.objectId === o.id ? 'selected' : ''}>${esc(o.handle)} · ${esc(o.name.slice(0, 18))}</option>`).join('')}
                           </select>`
                    }
                    ${
                      isA
                        ? `<select data-beat="${i}" data-field="directorStyleId" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-white">
                            ${catalog.directorStyles.map((d) => `<option value="${d.id}" ${b.directorStyleId === d.id ? 'selected' : ''}>🎬 ${esc(d.name.split('—')[0].trim())}</option>`).join('')}
                           </select>`
                        : ''
                    }
                  </div>

                  <div class="grid grid-cols-3 gap-1">
                    ${
                      isA
                        ? `<select data-beat="${i}" data-field="shotTypeId" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-slate-200">
                            ${catalog.shotTypes.filter((s) => s.shotRoleDefault === 'A-Roll').map((s) => `<option value="${s.id}" ${b.shotTypeId === s.id ? 'selected' : ''}>${esc(s.label.split('(')[0].trim())}</option>`).join('')}
                           </select>`
                        : `<div class="bg-black/45 border border-white/5 rounded px-1.5 py-1 text-[9.5px] font-mono text-amber-300 truncate">Plano Detalle</div>`
                    }
                    <select data-beat="${i}" data-field="cameraMoveId" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-slate-200">
                      ${catalog.cameraMoves
                        .filter((m) => isA || m.id !== 'rack_focus_macro_to_eyes')
                        .map((m) => `<option value="${m.id}" ${b.cameraMoveId === m.id ? 'selected' : ''}>${esc(m.label.split('(')[0].trim())}</option>`)
                        .join('')}
                    </select>
                    <select data-beat="${i}" data-field="durationSec" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-emerald-300 font-mono">
                      ${[2.0, 2.5, 3.0, 3.5, 4.0].map((sec) => `<option value="${sec}" ${Number(b.durationSec) === sec ? 'selected' : ''}>${sec.toFixed(1)}s</option>`).join('')}
                    </select>
                  </div>

                  <!-- CAMPO NARRATIVO ("RELLENAR SEGÚN HISTORIA") -->
                  <div class="space-y-0.5">
                    <label class="text-[9px] font-mono text-purple-300 flex items-center justify-between">
                      <span>✍️ Historia / Voz durante esta toma (${tStart}s → ${tEnd}s):</span>
                      <span class="text-slate-500">${i < beats.length - 1 ? `Corta a Toma ${i + 2}` : 'Fin de escena'}</span>
                    </label>
                    <input type="text" data-beat="${i}" data-field="voiceSlice" value="${esc(b.voiceSlice || '')}" placeholder="Escribe qué ocurre o qué dice Alina entre este Inicio y Corte..."
                      class="w-full bg-black/60 border border-purple-500/25 rounded-lg px-2 py-1 text-[10px] text-purple-100 focus:outline-none focus:border-purple-400">
                  </div>
                </div>
              </div>`;
            })
            .join('')}

          <!-- ===============================================================
               COLUMNA 3: VISOR ÚNICO DE TOMA + ESCALAS DE COLOR & HIGGSFIELD
               =============================================================== -->

          <!-- NODO 4: VISOR 3D NORMAL + BOTÓN CONTIGUO DE ESCALAS DE COLOR / EFECTOS -->
          <div id="node-render2real" class="bp-node border border-sky-500/50 ${execRing('node-render2real')}" style="${posStyle('node-render2real', 435)}">
            <div data-drag="node-render2real" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-sky-500/15 border-b border-sky-500/30">
              <span class="text-[11px] font-bold text-sky-200 tracking-wide">🩵 VISOR 3D · TOMA ${state.activeBeatIdx + 1} (${state.aspectRatio})</span>
              <div class="flex items-center gap-1">
                <button id="bp-btn-cycle-pass" class="text-[9.5px] font-mono px-2 py-0.5 rounded bg-amber-500/25 hover:bg-amber-500/45 border border-amber-400/40 text-amber-200 font-bold" title="Alternar escala de colores o efecto óptico">⟳ Escala / Efecto</button>
                <button id="bp-btn-render-thumbs" class="text-[9.5px] font-mono px-2 py-0.5 rounded bg-sky-500/30 hover:bg-sky-500/50 text-white font-bold" title="Re-renderizar en vivo desde Three.js">↻</button>
              </div>
            </div>

            <div class="p-3 space-y-2.5 text-[10.5px]">
              <!-- Conmutador superior: Formato (16:9 / 9:16) + Punto del Corte (INICIO / CORTE) -->
              <div class="flex items-center justify-between gap-1.5">
                <div class="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
                  <button data-bp-frame="start" class="px-2 py-0.5 rounded font-bold transition-all ${
                    state.viewerFramePoint === 'start' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                  }">● INICIO (IN)</button>
                  <button data-bp-frame="end" class="px-2 py-0.5 rounded font-bold transition-all ${
                    state.viewerFramePoint === 'end' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                  }">■ CORTE (OUT)</button>
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

              <!-- PANTALLA ÚNICA CLARA DEL VISOR 3D -->
              <div class="relative rounded-xl bg-[#05070c] border border-white/15 overflow-hidden flex items-center justify-center p-1" style="min-height: 215px;">
                ${
                  activeViewerImg
                    ? `<img src="${activeViewerImg}" alt="${esc(activePassMeta.label)}" class="rounded-lg object-cover bg-black shadow-xl block" style="aspect-ratio:${aspectCss}; ${
                        isLand ? 'width:100%; height:auto;' : 'height:235px; width:auto;'
                      }">`
                    : `<div class="text-[10px] text-slate-400 py-12">Renderizando visor 3D…</div>`
                }
                <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 pointer-events-none">
                  <span class="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold shadow ${activePassMeta.badgeCls}">${esc(activePassMeta.label)}</span>
                  <span class="px-1.5 py-0.5 rounded-md bg-black/75 border border-white/15 text-[9px] font-mono text-slate-200">${
                    state.viewerFramePoint === 'start' ? 'IN · Inicio' : 'OUT · Corte'
                  }</span>
                </div>
              </div>

              <!-- BARRA CONTIGUA DE ESCALAS DE COLOR Y EFECTOS DISPONIBLES -->
              <div class="grid grid-cols-6 gap-1 bg-black/55 p-1 rounded-xl border border-white/10">
                ${PASS_SPECS.map((p) => {
                  const isAct = state.viewerPass === p.id;
                  return `<button type="button" data-bp-pass="${p.id}" class="py-1 px-1 rounded-lg text-[9px] font-mono font-bold transition-all truncate ${
                    isAct ? `${p.badgeCls} shadow` : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }" title="${esc(p.label)}">${esc(p.short)}</button>`;
                }).join('')}
              </div>

              ${
                state.viewerPass === 'mask'
                  ? `<div class="flex flex-wrap items-center gap-2 text-[8.5px] font-mono text-slate-300 bg-black/50 px-2 py-1 rounded-lg border border-white/5">
                       <span><i class="inline-block w-2 h-2 rounded-full bg-[#FF3B30]"></i> Piel</span>
                       <span><i class="inline-block w-2 h-2 rounded-full bg-[#FFCC00]"></i> Pelo</span>
                       <span><i class="inline-block w-2 h-2 rounded-full bg-[#007AFF]"></i> Ropa</span>
                       <span><i class="inline-block w-2 h-2 rounded-full bg-[#FF9500]"></i> Objeto</span>
                       <span><i class="inline-block w-2 h-2 rounded-full bg-[#14B8A6]"></i> Mueble</span>
                       <span><i class="inline-block w-2 h-2 rounded-full bg-[#1E293B] border border-white/20"></i> Set</span>
                     </div>`
                  : ''
              }

              <div class="flex items-center justify-between text-[9.5px] font-mono text-sky-300">
                <span>Flux.1 + ControlNet (${state.aspectRatio})</span>
                <button id="bp-copy-flux" class="text-[#f29979] hover:text-white font-bold">✦ Copiar Prompt Imagen</button>
              </div>
              <div id="bp-flux-box" class="p-2 rounded-lg bg-black/65 border border-white/10 text-[9.5px] font-mono text-slate-200 max-h-16 overflow-y-auto leading-relaxed select-all">${esc(activeEval.cleanFluxPrompt)}</div>
            </div>
          </div>

          <!-- NODO 5: HIGGSFIELD CINEMA STUDIO 4.0 & VOZ -->
          <div id="node-higgsfield" class="bp-node border border-fuchsia-500/50 ${execRing('node-higgsfield')}" style="${posStyle('node-higgsfield', 435)}">
            <div data-drag="node-higgsfield" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-fuchsia-500/15 border-b border-fuchsia-500/30">
              <span class="text-[11px] font-bold text-fuchsia-200 tracking-wide">🟣 CAPA 2 · HIGGSFIELD CINEMA 4.0</span>
              <span class="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${kf.mode === 'START_END' ? 'bg-emerald-500/25 text-emerald-200 border border-emerald-400/40' : 'bg-amber-500/25 text-amber-200 border border-amber-400/40'}">${kf.mode === 'START_END' ? 'IN + OUT GUIADO' : 'SOLO IN + MOVESET'}</span>
            </div>
            <div class="p-3 space-y-2 text-[10.5px]">
              <div class="grid grid-cols-2 gap-1.5 bg-black/50 p-2 rounded-lg border border-white/5 text-[9.5px] font-mono">
                <div class="truncate"><span class="text-slate-500">Body:</span> <span class="text-white">${esc(hf.cameraLabel)}</span></div>
                <div class="truncate"><span class="text-slate-500">Glass:</span> <span class="text-white">${esc(hf.lensLabel)}</span></div>
                <div><span class="text-slate-500">Formato:</span> <span class="text-sky-300 font-bold">${esc(hf.aspectRatio)}</span> · <span class="text-fuchsia-300">${esc(hf.focalLength)}</span></div>
                <div class="truncate"><span class="text-slate-500">Move:</span> <span class="text-emerald-300">${esc(hf.uiPresetLabel.split('[')[0].trim())}</span></div>
              </div>

              <div class="flex items-center justify-between text-[9.5px] font-mono">
                <span class="text-fuchsia-300">Delta Motion Prompt (IN → OUT)</span>
                <button id="bp-copy-delta" class="text-[#f29979] hover:text-white font-bold">✦ Copiar Motion</button>
              </div>
              <div id="bp-delta-box" class="p-2 rounded-lg bg-black/65 border border-white/10 text-[9.5px] font-mono text-amber-100/95 max-h-20 overflow-y-auto leading-relaxed select-all">${esc(activeEval.manifest.structuredPrompt.compiled)}</div>

              <div class="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/25 text-[9.5px] text-purple-200 truncate">
                🎙️ <em>«${esc(activeBeat.voiceSlice || '')}»</em>
              </div>
            </div>
          </div>

          <!-- NODO 6: OUTPUT & PRE-FLIGHT ZERO-WASTE GATE -->
          <div id="node-gate" class="bp-node border border-emerald-500/55 ${execRing('node-gate')}" style="${posStyle('node-gate', 435)}">
            <div data-drag="node-gate" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-emerald-500/15 border-b border-emerald-500/30">
              <span class="text-[11px] font-bold text-emerald-200 tracking-wide">🟢 EXPORTADOR ${state.aspectRatio} (${isLand ? '1920×1080' : '1080×1920'})</span>
              <span class="text-[10px] font-mono font-bold ${safetyPct === 100 && ratio12Ok ? 'text-emerald-300' : 'text-amber-300'}">${safetyPct}% Blindaje</span>
            </div>
            <div class="p-3 space-y-2 text-[10px]">
              <div class="grid grid-cols-2 gap-1">
                ${PREFLIGHT_CHECKLIST.map(
                  (lbl, idx) => `
                  <label class="flex items-center gap-1.5 px-2 py-1 rounded bg-black/50 border border-white/5 cursor-pointer text-[9px] text-slate-300 truncate" title="${esc(lbl)}">
                    <input type="checkbox" data-bp-chk="${idx}" ${state.checklist[idx] ? 'checked' : ''} class="accent-emerald-500 shrink-0">
                    <span class="truncate">${esc(lbl.split('(')[0].trim())}</span>
                  </label>`
                ).join('')}
              </div>

              <div class="grid grid-cols-2 gap-1.5 pt-1">
                <button id="bp-export-beat-zip" class="py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-[10.5px]">
                  📦 ZIP Toma ${state.activeBeatIdx + 1} (${state.aspectRatio})
                </button>
                <button id="bp-export-episode-zip" class="py-2 px-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-bold text-[10.5px] shadow-lg">
                  📦 Episodio (${beats.length} Tomas .zip)
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- MONITOR FLOTANTE DE SALIDA (ADAPTABLE 16:9 YOUTUBE O 9:16 CELULAR) -->
        ${
          state.monitorOpen
            ? `<div id="bp-cinema-monitor" class="absolute top-14 right-3.5 z-30 ${
                isLand ? 'w-[390px]' : 'w-[268px]'
              } rounded-2xl bg-[#090d16]/95 border border-emerald-500/45 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2.5 space-y-2" style="backdrop-filter: blur(16px);">
                 <div class="flex items-center justify-between gap-1">
                   <span class="text-[10px] font-mono font-bold text-emerald-300">🎞️ MONTAJE ${state.aspectRatio} (${state.compiledScenes.length}/${beats.length} TOMAS)</span>
                   <div class="flex items-center gap-1">
                     <button id="bp-mon-split" class="px-1.5 py-0.5 rounded text-[9px] font-mono border ${
                       state.monitorSplit3D
                         ? 'bg-sky-500/25 border-sky-400/50 text-sky-200'
                         : 'bg-white/5 border-white/10 text-slate-400'
                     }">🔀 IN|CORTE</button>
                     <button id="bp-mon-close" class="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/15 text-[10px] text-slate-300">✕</button>
                   </div>
                 </div>

                 <canvas id="bp-monitor-canvas" width="${isLand ? 480 : 270}" height="${isLand ? 270 : 480}" class="w-full rounded-xl border border-white/15 bg-black block" style="aspect-ratio: ${aspectCss};"></canvas>

                 <div class="flex flex-wrap gap-1">
                   <button data-mon-scene="-1" class="mon-scene-btn px-2 py-1 rounded text-[9px] font-mono font-bold border ${
                     state.monitorFilterScene === -1
                       ? 'bg-emerald-500/25 border-emerald-400 text-emerald-200'
                       : 'bg-black/50 border-white/10 text-slate-400'
                   }">TODAS</button>
                   ${beats
                     .map((_, idx) => {
                       const sc = state.compiledScenes[idx];
                       const isAct = state.monitorFilterScene === idx;
                       return `<button data-mon-scene="${idx}" ${!sc ? 'disabled' : ''} class="mon-scene-btn px-2 py-1 rounded text-[9px] font-mono border ${
                         !sc
                           ? 'opacity-30 bg-black/30 border-white/5 text-slate-500'
                           : isAct
                             ? 'bg-[#c86446]/35 border-[#c86446] text-white font-bold'
                             : 'bg-black/60 border-white/15 text-slate-200 hover:border-white/40'
                       }">T${idx + 1}</button>`;
                     })
                     .join('')}
                 </div>

                 <div class="grid grid-cols-2 gap-1.5 text-[10px]">
                   <button id="bp-mon-playpause" class="py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold">
                     ${state.monitorPlaying ? '⏸ Pausar' : '▶ Reproducir'}
                   </button>
                   <button id="bp-mon-rec-webm" class="py-1.5 rounded-lg bg-rose-600/85 hover:bg-rose-500 text-white font-bold">
                     ${state.recordingDemo ? '● Grabando…' : `⏺ Demo ${state.aspectRatio}`}
                   </button>
                 </div>
               </div>`
            : ''
        }

        <!-- FLOATING GLASS HUD INFERIOR -->
        <div class="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c101b]/90 border border-white/15 shadow-2xl whitespace-nowrap max-w-[96%] overflow-x-auto" style="backdrop-filter: blur(16px);">
          <button id="bp-play-pipeline-hud" class="px-3 py-1 rounded-full font-bold text-[11px] text-white shadow ${
            state.tourRunning ? 'bg-rose-600' : 'bg-emerald-600 hover:bg-emerald-500'
          }">${state.tourRunning ? '⏹ Stop' : '▶ Play'}</button>
          <span class="text-white/15">|</span>
          <button id="bp-hud-prev-beat" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">◀</button>
          <span class="text-[11px] font-mono font-bold text-[#f29979]">Toma ${state.activeBeatIdx + 1}/${beats.length}</span>
          <button id="bp-hud-next-beat" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">▶</button>
          <span class="text-white/15">|</span>
          <button id="bp-hud-aspect" class="px-2.5 py-1 rounded-full bg-sky-500/20 hover:bg-sky-500/35 border border-sky-400/40 text-[11px] text-sky-200 font-mono font-bold">
            ${isLand ? '🖥️ 16:9 YouTube' : '📱 9:16 Celular'}
          </button>
          <button id="bp-hud-light" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200">
            ${ctx.getLightingMode() === 'day' ? '☀️ Día' : '🌙 Noche'}
          </button>
          <button id="bp-hud-zoom-out" class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-xs text-white font-mono">−</button>
          <span id="bp-hud-zoom" class="text-[10px] font-mono text-emerald-300 w-10 text-center">${Math.round(state.zoom * 100)}%</span>
          <button id="bp-hud-zoom-in" class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-xs text-white font-mono">+</button>
          <button id="bp-hud-reset" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">⌖ Centrar</button>
          <button id="bp-hud-open-3d" class="px-3 py-1 rounded-full bg-[#c86446] hover:bg-[#b55539] text-[11px] text-white font-bold shadow">🎬 Abrir Toma en Plató 3D ↗</button>
        </div>
      </div>
    `;

    applyStageTransform();
    requestAnimationFrame(() => updateCablesSVG());
    bindCanvasInteractions(ch, beats, evaluated, activeEval, activeBeatKey);
  }

  function setAspectInternal(nextAspect, silentSync = false) {
    const clean = nextAspect === '9:16' ? '9:16' : '16:9';
    if (state.aspectRatio === clean && silentSync) return;
    state.aspectRatio = clean;
    if (!silentSync) ctx.setAspectRatio?.(clean);
    if (root.innerHTML.trim()) render();
  }

  // ==========================================================================
  // INTERACCIONES DEL GRAFO Y DEL VISUAL SEQUENCER
  // ==========================================================================
  function bindCanvasInteractions(ch, beats, evaluated, activeEval, activeBeatKey) {
    const vp = root.querySelector('#bp-viewport');
    const stage = root.querySelector('#bp-graph-stage');
    if (!vp || !stage) return;

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
      state.panning = {
        startX: e.clientX,
        startY: e.clientY,
        origPanX: state.panX,
        origPanY: state.panY
      };
    });

    const onMove = (e) => {
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

    const onUp = () => {
      state.draggingNode = null;
      state.panning = null;
    };

    vp.onpointermove = onMove;
    vp.onpointerup = onUp;
    vp.onpointerleave = onUp;

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

    // Selección de Toma activa
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

    // Añadir / Eliminar Tomas del Visual Sequencer
    root.querySelector('#bp-add-beat-top')?.addEventListener('click', () => {
      if (beats.length >= 8) {
        ctx.setStatus('ℹ️ <span class="text-amber-300">Máximo 8 tomas por secuencia en esta vista.</span>');
        return;
      }
      const last = beats[beats.length - 1];
      const nextRole = last?.role === 'A-Roll' ? 'B-Roll' : 'A-Roll';
      const newIdx = beats.length;
      const defObj = getObjects()[newIdx % Math.max(1, getObjects().length)];
      beats.push({
        beatId: `beat_${Date.now().toString(36).slice(-4)}`,
        label: `Toma ${newIdx + 1}`,
        role: nextRole,
        spotId: last?.spotId || ch.spotId || 'podcast',
        directorStyleId: last?.directorStyleId || 'fincher_cronenweth',
        shotTypeId: nextRole === 'B-Roll' ? 'macro_broll_prop' : 'mcu_interview',
        cameraMoveId: nextRole === 'B-Roll' ? 'lateral_slider_truck' : 'slow_dolly_push_in',
        lightingSchemeId: last?.lightingSchemeId || 'fincher_top_soft_negfill',
        focalLengthMm: nextRole === 'B-Roll' ? 85 : 50,
        apertureFStop: nextRole === 'B-Roll' ? 2.8 : 1.8,
        durationSec: nextRole === 'B-Roll' ? 2.5 : 3.5,
        objectId: nextRole === 'B-Roll' ? (defObj?.id || '') : '',
        voiceSlice: ''
      });
      state.positions[`node-beat-${newIdx}`] = { x: 405, y: 48 + newIdx * 334 };
      state.activeBeatIdx = newIdx;
      saveChapterToDB(ch);
      render();
      ctx.setStatus(`➕ <span class="text-emerald-400 font-bold">Toma ${newIdx + 1} (${nextRole}) añadida al Visual Sequencer.</span>`);
    });

    stage.querySelectorAll('[data-del-beat]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (beats.length <= 2) return;
        const delIdx = Number(btn.dataset.delBeat);
        beats.splice(delIdx, 1);
        state.positions = buildDefaultNodePositions(beats.length);
        if (state.activeBeatIdx >= beats.length) state.activeBeatIdx = beats.length - 1;
        saveChapterToDB(ch);
        render();
      });
    });

    // Edición de parámetros de cada Toma
    stage.querySelectorAll('[data-beat]').forEach((ctrl) => {
      const evType = ctrl.tagName === 'INPUT' ? 'input' : 'change';
      ctrl.addEventListener(evType, (e) => {
        const idx = Number(ctrl.dataset.beat);
        const field = ctrl.dataset.field;
        const b = beats[idx];
        if (!b) return;
        b[field] = field === 'durationSec' ? Number(e.target.value) : e.target.value;

        if (field === 'role') {
          if (b.role === 'B-Roll') {
            b.shotTypeId = 'macro_broll_prop';
            b.cameraMoveId = 'lateral_slider_truck';
            b.focalLengthMm = 85;
            b.apertureFStop = 2.8;
            if (!b.objectId) b.objectId = getObjects()[idx % Math.max(1, getObjects().length)]?.id || '';
          } else {
            b.shotTypeId = 'mcu_interview';
            b.cameraMoveId = 'slow_dolly_push_in';
            b.focalLengthMm = 50;
            b.apertureFStop = 1.8;
          }
        }
        state.activeBeatIdx = idx;
        saveChapterToDB(ch);
        if (evType === 'change') render();
      });
    });

    // Alternar formato 16:9 YouTube <-> 9:16 Celular
    root.querySelectorAll('[data-bp-aspect]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setAspectInternal(btn.dataset.bpAspect, false);
        ctx.setStatus(
          `📐 <span class="text-sky-300 font-bold">Formato cambiado a ${state.aspectRatio === '16:9' ? '16:9 Horizontal (YouTube)' : '9:16 Vertical (Celular)'}</span> — tomas Inicio → Corte actualizadas.`
        );
      });
    });
    root.querySelector('#bp-hud-aspect')?.addEventListener('click', () => {
      setAspectInternal(state.aspectRatio === '16:9' ? '9:16' : '16:9', false);
    });

    // Visor Único: cambiar entre INICIO (IN) y CORTE (OUT) y entre Escalas de Color / Efectos
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
      ctx.setStatus(`🩵 <span class="text-sky-300 font-bold">Toma ${state.activeBeatIdx + 1} (${state.aspectRatio}) re-renderizada en vivo.</span>`);
    });

    // Controles del Nodo Capítulo
    root.querySelector('#bp-chap-select')?.addEventListener('change', (e) => {
      state.chapterId = e.target.value;
      state.activeBeatIdx = 0;
      render();
    });
    root.querySelector('#bp-chap-hook')?.addEventListener('input', (e) => {
      ch.hook = e.target.value;
      saveChapterToDB(ch);
    });
    root.querySelector('#bp-resplit-hook')?.addEventListener('click', () => {
      const slices = splitHookIntoSlices(ch.hook, beats.length);
      beats.forEach((b, i) => { b.voiceSlice = slices[i]; });
      saveChapterToDB(ch);
      render();
      ctx.setStatus(`🎙️ <span class="text-purple-300 font-bold">Historia repartida automáticamente entre las ${beats.length} Tomas.</span>`);
    });

    root.querySelector('#bp-copy-flux')?.addEventListener('click', () => {
      navigator.clipboard.writeText(activeEval.cleanFluxPrompt);
      ctx.setStatus('✦ <span class="text-sky-300 font-bold">Prompt Render-to-Real (Flux) copiado.</span>');
    });
    root.querySelector('#bp-copy-delta')?.addEventListener('click', () => {
      navigator.clipboard.writeText(activeEval.manifest.structuredPrompt.compiled);
      ctx.setStatus('✦ <span class="text-fuchsia-300 font-bold">Delta Structured Prompt (Higgsfield 4.0) copiado.</span>');
    });

    root.querySelectorAll('[data-bp-chk]').forEach((inp) => {
      inp.addEventListener('change', (e) => {
        state.checklist[Number(inp.dataset.bpChk)] = e.target.checked;
        render();
      });
    });

    // Exportar ZIP
    root.querySelector('#bp-export-beat-zip')?.addEventListener('click', async () => {
      const b = beats[state.activeBeatIdx];
      const slug = state.aspectRatio.replace(':', 'x');
      const entries = captureFullResBeatEntries(activeEval, '', b.voiceSlice);
      const blob = await buildZipBlob(entries);
      downloadBlob(blob, `shotpack_cap${ch.number}_toma${state.activeBeatIdx + 1}_${b.role.toLowerCase()}_${slug}.zip`);
      ctx.setStatus(`📦 <span class="text-emerald-400 font-bold">Shot Pack de Toma ${state.activeBeatIdx + 1} (${state.aspectRatio}) descargado.</span>`);
    });

    root.querySelector('#bp-export-episode-zip')?.addEventListener('click', async () => {
      const btn = root.querySelector('#bp-export-episode-zip');
      if (btn) btn.textContent = `⏳ Compilando ${beats.length} Tomas…`;
      await new Promise((r) => setTimeout(r, 30));
      try {
        const allEntries = [];
        const timelineSummary = [];
        const slug = state.aspectRatio.replace(':', 'x');
        for (let i = 0; i < beats.length; i++) {
          const b = beats[i];
          const ev = evaluated[i];
          const folder = `${String(i + 1).padStart(2, '0')}_${b.beatId}_${b.role === 'A-Roll' ? 'aroll_alina' : 'broll_zeroface'}/`;
          const beatEntries = captureFullResBeatEntries(ev, folder, b.voiceSlice);
          allEntries.push(...beatEntries);
          timelineSummary.push({
            order: i + 1,
            folder,
            role: b.role,
            aspectRatio: state.aspectRatio,
            durationSec: b.durationSec,
            voiceSlice: b.voiceSlice,
            vaultObject: ev.vaultObj ? ev.vaultObj.handle : null,
            higgsfieldPreset: ev.manifest.higgsfieldCinemaStudio,
            keyframeMode: ev.manifest.keyframeStrategy.mode
          });
        }
        allEntries.push({
          path: 'episode_blueprint_manifest.json',
          data: {
            chapterNumber: ch.number,
            chapterTitle: ch.title,
            aspectRatio: state.aspectRatio,
            totalDurationSec: beats.reduce((s, x) => s + Number(x.durationSec || 0), 0),
            elevenLabsFullScript: ch.hook,
            timeline: timelineSummary
          }
        });
        const zip = await buildZipBlob(allEntries);
        downloadBlob(zip, `episodio_cap${ch.number}_${slug}_higgsfield_blueprint.zip`);
        ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Episodio Cap. ${ch.number} (${state.aspectRatio}) exportado con ${allEntries.length} archivos.</span>`);
      } finally {
        render();
      }
    });

    // Monitor y Play Pipeline
    root.querySelector('#bp-play-pipeline-top')?.addEventListener('click', () => runInteractivePipelineTour());
    root.querySelector('#bp-play-pipeline-hud')?.addEventListener('click', () => runInteractivePipelineTour());
    root.querySelector('#bp-toggle-monitor-top')?.addEventListener('click', () => {
      state.monitorOpen = !state.monitorOpen;
      render();
      if (state.monitorOpen && state.compiledScenes.length) startReelPlaybackLoop();
      else stopMonitorLoop();
    });
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
      if (state.monitorPlaying) {
        stopMonitorLoop();
        render();
      } else {
        startReelPlaybackLoop();
        const btn = root.querySelector('#bp-mon-playpause');
        if (btn) btn.textContent = '⏸ Pausar';
      }
    });
    root.querySelectorAll('.mon-scene-btn').forEach((b) => {
      b.addEventListener('click', () => {
        state.monitorFilterScene = Number(b.dataset.monScene);
        if (state.monitorFilterScene >= 0) state.activeBeatIdx = state.monitorFilterScene;
        render();
        startReelPlaybackLoop();
      });
    });
    root.querySelector('#bp-mon-rec-webm')?.addEventListener('click', () => {
      const canvas = root.querySelector('#bp-monitor-canvas');
      if (!canvas || state.recordingDemo || !state.compiledScenes.length) return;
      state.recordingDemo = true;
      state.monitorFilterScene = -1;
      startReelPlaybackLoop();
      const recBtn = root.querySelector('#bp-mon-rec-webm');
      if (recBtn) recBtn.textContent = '● Grabando…';
      const mime = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((m) => MediaRecorder.isTypeSupported(m));
      const mr = new MediaRecorder(canvas.captureStream(30), { mimeType: mime, videoBitsPerSecond: 4_500_000 });
      const chunks = [];
      mr.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      mr.onstop = () => {
        state.recordingDemo = false;
        const blob = new Blob(chunks, { type: 'video/webm' });
        const slug = state.aspectRatio.replace(':', 'x');
        downloadBlob(blob, `alina_sequencer_demo_cap${ch.number}_${slug}.webm`);
        if (recBtn) recBtn.textContent = `⏺ Demo ${state.aspectRatio}`;
        ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Video Demo .webm (${state.aspectRatio}) descargado.</span>`);
      };
      mr.start(200);
      const totalMs = state.compiledScenes.reduce((s, c) => s + c.durationSec, 0) * 1000;
      setTimeout(() => { if (mr.state !== 'inactive') mr.stop(); }, Math.min(15000, totalMs));
    });

    // HUD Inferior
    root.querySelector('#bp-hud-prev-beat').onclick = () => {
      state.activeBeatIdx = (state.activeBeatIdx + beats.length - 1) % beats.length;
      render();
    };
    root.querySelector('#bp-hud-next-beat').onclick = () => {
      state.activeBeatIdx = (state.activeBeatIdx + 1) % beats.length;
      render();
    };
    root.querySelector('#bp-hud-light').onclick = () => {
      const nextMode = ctx.getLightingMode() === 'day' ? 'night' : 'day';
      ctx.setLightingMode(nextMode);
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
      state.panX = 16;
      state.panY = 12;
      state.zoom = 0.84;
      state.positions = buildDefaultNodePositions(beats.length);
      render();
    };
    root.querySelector('#bp-hud-open-3d').onclick = () => {
      const b = beats[state.activeBeatIdx];
      const ev = evaluated[state.activeBeatIdx];
      ctx.setAspectRatio?.(state.aspectRatio);
      ctx.selectFloor(ev.spot.floor);
      ctx.selectSpot(ev.spot);
      ctx.cinema.apply(ev.shot, state.aspectRatio);
      positionCameraForBeatAt(ev, 0, state.aspectRatio);
      if (ctx.alina?.root && b.role === 'A-Roll') ctx.alina.root.visible = true;
      ctx.switchMainView('plato');
      ctx.setStatus(`🎬 <span class="text-emerald-400 font-bold">Toma ${state.activeBeatIdx + 1} (${state.aspectRatio}) abierta en el Plató 3D.</span>`);
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
    openForChapter(chapterId) {
      state.chapterId = chapterId;
      state.activeBeatIdx = 0;
      render();
    }
  };
}
