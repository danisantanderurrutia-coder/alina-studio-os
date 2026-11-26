/**
 * NodeGraphBlueprintUI — Grafo Nodal 2D Interactivo (Híbrido Unreal Sequencer + DaVinci Fusion)
 *
 * Une sin colisiones:
 *   • Opción 3 (Centro — Escaleta Secuencial 1:2 estilo Unreal Sequencer):
 *       4 Nodos de Beat encadenados en el tiempo (A1 -> B1 Zero-Face -> B2 Zero-Face -> A2) con auditoría
 *       automática de raccord térmico Kelvin en los cables verticales.
 *   • Opción 2 (Derecha — Pipeline Técnico 3D -> Render-to-Real -> Higgsfield Cinema Studio 4.0 estilo Fusion):
 *       Ruteo estricto sin mezclar A-Roll y B-Roll: el ADN de Alina SOLO cablea a A-Roll; la Bóveda de Objetos
 *       (@handles) SOLO cablea a B-Roll Zero-Face (ocultando a Alina en el render 3D).
 *
 * Vanilla JS + SVG Cubic Bézier en tiempo real (Pan + Wheel Zoom + Node Drag & Drop + Floating Glass HUD).
 */

import * as S from './cinematographySolver.js';
import * as HF from './higgsfieldAdapter.js';
import { buildZipBlob } from './zipWriter.js';
import { catalog } from './cinemaDirector.js';
import { ALINA_CHARACTER_BIBLE, PREFLIGHT_CHECKLIST } from '../data/alinaLoreData.js';
import { saveChapterToDB } from './shotsStorage.js';

const ix = S.indexCatalog(catalog);

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

/** Divide el monólogo (hook) del capítulo en 4 tramos naturales para los 4 Beats del Reel. */
function splitHookIntoSlices(hookText = '') {
  const clean = String(hookText || '').replace(/^[«"']+|[»"']+$/g, '').trim();
  if (!clean) {
    return [
      'Tramo 1 (Hook A-Roll): Apertura magnética a cámara.',
      'Tramo 2 (Voz en off sobre B-Roll 1): Pausa sensorial.',
      'Tramo 3 (Voz en off sobre B-Roll 2): Tensión psicológica.',
      'Tramo 4 (Cierre CTA A-Roll): Invitación final.'
    ];
  }
  const sentences = clean
    .split(/(?<=[.!?…])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length >= 4) {
    return [
      sentences[0],
      sentences[1],
      sentences.slice(2, -1).join(' '),
      sentences[sentences.length - 1]
    ];
  }
  const words = clean.split(/\s+/);
  const chunk = Math.max(1, Math.ceil(words.length / 4));
  return [0, 1, 2, 3].map((i) => words.slice(i * chunk, (i + 1) * chunk).join(' ') || '…');
}

/** Construye los 4 Beats canónicos 1:2 iniciales para un capítulo si aún no existen. */
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

  const slices = splitHookIntoSlices(ch?.hook || '');

  return [
    {
      beatId: 'beat_1',
      label: 'Beat 1 · Hook A-Roll',
      role: 'A-Roll',
      spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: defA.shotTypeId,
      cameraMoveId: defA.cameraMoveId,
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: ix.shotTypes.get(defA.shotTypeId)?.defaultFocalMm || 85,
      apertureFStop: ix.shotTypes.get(defA.shotTypeId)?.defaultAperture || 1.4,
      durationSec: 3.5,
      objectId: '',
      voiceSlice: slices[0]
    },
    {
      beatId: 'beat_2',
      label: 'Beat 2 · B-Roll 1 (Zero-Face)',
      role: 'B-Roll',
      spotId: obj1?.spotId && catalog.spotCinematographyMap[obj1.spotId] ? obj1.spotId : spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: 'macro_broll_prop',
      cameraMoveId: 'lateral_slider_truck',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 100,
      apertureFStop: 2.8,
      durationSec: 2.5,
      objectId: obj1?.id || '',
      voiceSlice: slices[1]
    },
    {
      beatId: 'beat_3',
      label: 'Beat 3 · B-Roll 2 (Zero-Face)',
      role: 'B-Roll',
      spotId: obj2?.spotId && catalog.spotCinematographyMap[obj2.spotId] ? obj2.spotId : spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: 'macro_broll_prop',
      cameraMoveId: 'rack_focus_macro_to_eyes',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 100,
      apertureFStop: 2.8,
      durationSec: 2.5,
      objectId: obj2?.id || '',
      voiceSlice: slices[2]
    },
    {
      beatId: 'beat_4',
      label: 'Beat 4 · Cierre CTA A-Roll',
      role: 'A-Roll',
      spotId,
      directorStyleId: defA.directorStyleId,
      shotTypeId: defA.shotTypeId === 'ots_mirror' ? 'cu_portrait' : 'ecu_eyes',
      cameraMoveId: 'static_breathing',
      lightingSchemeId: defA.lightingSchemeId,
      focalLengthMm: 85,
      apertureFStop: 1.4,
      durationSec: 3.5,
      objectId: '',
      voiceSlice: slices[3]
    }
  ];
}

const DEFAULT_NODE_POSITIONS = {
  'node-chapter':    { x: 36,   y: 48 },
  'node-dna':        { x: 36,   y: 368 },
  'node-vault':      { x: 36,   y: 650 },
  'node-beat-0':     { x: 420,  y: 44 },
  'node-beat-1':     { x: 420,  y: 280 },
  'node-beat-2':     { x: 420,  y: 516 },
  'node-beat-3':     { x: 420,  y: 752 },
  'node-render2real':{ x: 835,  y: 44 },
  'node-higgsfield': { x: 835,  y: 458 },
  'node-gate':       { x: 835,  y: 792 }
};

export function mountNodeGraphBlueprintUI(root, ctx) {
  if (!root) return null;

  const state = {
    chapterId: null,
    activeBeatIdx: 0,
    panX: 18,
    panY: 14,
    zoom: 0.86,
    positions: structuredClone(DEFAULT_NODE_POSITIONS),
    checklist: PREFLIGHT_CHECKLIST.map((_, i) => i < 4), // 4 checks técnicos pre-validados por solver
    passPreviews: {}, // beatId -> { beauty, depth, normals, mask }
    draggingNode: null,
    panning: null
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
    if (!Array.isArray(found.blueprintBeats) || found.blueprintBeats.length !== 4) {
      found.blueprintBeats = buildDefaultBeatsForChapter(found, getObjects());
    }
    return found;
  }

  /** Convierte un Beat del grafo en un StoryboardShot + resuelve su CinemaShotPayload y Manifest Higgsfield. */
  function evaluateBeat(beat, idx, chapter) {
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
    const isMirror = beat.role === 'A-Roll' && beat.shotTypeId === 'ots_mirror' && Boolean(meta.specialFlags?.mirrorShot);
    const isRack = beat.cameraMoveId === 'rack_focus_macro_to_eyes';

    const shot = {
      shotId: `ch${chapter?.number || 1}_${beat.beatId}_${beat.role === 'A-Roll' ? 'aroll' : 'broll_zeroface'}`,
      spotId: effectiveSpotId,
      shotRole: beat.role,
      brollIndex: idx % 2,
      directorStyleId: beat.directorStyleId || 'fincher_cronenweth',
      shotTypeId: beat.role === 'B-Roll' ? 'macro_broll_prop' : (beat.shotTypeId || 'mcu_interview'),
      cameraMoveId: beat.cameraMoveId || (beat.role === 'B-Roll' ? 'lateral_slider_truck' : 'slow_dolly_push_in'),
      lightingSchemeId: beat.lightingSchemeId || meta.defaultARollPreset?.lightingSchemeId || 'fincher_top_soft_negfill',
      focalLengthMm: beat.role === 'B-Roll' ? 100 : (Number(beat.focalLengthMm) || 85),
      apertureFStop: beat.role === 'B-Roll' ? 2.8 : (Number(beat.apertureFStop) || 1.4),
      durationSec: Math.min(4.0, Math.max(1.8, Number(beat.durationSec) || 3.0)),
      animation: spot?.defaultAnim || 'Idle',
      focusMode: isMirror ? 'mirror_reflection_plane' : isRack ? 'rack_prop_to_iris' : beat.role === 'B-Roll' ? 'macro_prop_lock' : 'iris_lock',
      mirrorShot: isMirror,
      motionStrength: ix.moves.get(beat.cameraMoveId)?.recommendedMotionStrength ?? 2.2,
      foregroundFraming: Boolean(isRack || beat.directorStyleId === 'wong_kar_wai_doyle'),
      controlNetOverrides: isMirror ? { depthWeight: 0.35 } : undefined
    };

    const payload = ctx.cinema.resolve(shot, '9:16');
    const manifest = HF.buildHiggsfieldManifest({
      shot,
      spot,
      payload,
      catalog,
      sceneId: `cap_${chapter?.number || 1}_blueprint`
    });

    // GARANTÍA ANTI-COLISIÓN (Regla Zero-Face Estricta):
    // Si es B-Roll, el prompt Flux y el Delta Prompt usan EXCLUSIVAMENTE el object_token_lock del @handle sin rastro de Alina.
    let cleanFluxPrompt = payload.prompts.fluxClean || payload.prompts.flux;
    if (beat.role === 'B-Roll' && vaultObj) {
      const li = ix.lights.get(shot.lightingSchemeId);
      const dir = ix.directors.get(shot.directorStyleId);
      cleanFluxPrompt = [
        `100mm macro f/2.8 tactile close-up still-life B-roll of ${vaultObj.promptToken}`,
        li?.promptLightingTokens,
        dir?.fluxPromptTokens,
        'strictly zero human presence, no face, no hands, razor-sharp material micro-texture and optical bokeh'
      ]
        .filter(Boolean)
        .join(', ');

      manifest.structuredPrompt.blocks.subject = `Zero human presence; macro still-life of ${vaultObj.name} (${vaultObj.handle}) resting motionless while specular highlights shift smoothly across brass, stone or fabric`;
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

  /** Captura las 4 miniaturas en vivo desde Three.js para el Beat activo (ocultando a Alina si es Zero-Face B-Roll). */
  function captureLiveThumbnailsForBeat(evalData, beatId) {
    const { shot, vaultObj, payload } = evalData;
    const prevAlinaVis = ctx.alina?.root ? ctx.alina.root.visible : true;

    ctx.cinema.apply(shot, '9:16');

    if (shot.shotRole === 'B-Roll') {
      if (ctx.alina?.root) ctx.alina.root.visible = false;
      if (vaultObj?.camPos && vaultObj?.camTarget) {
        ctx.camCtrl.isTransitioning = false;
        ctx.camCtrl.camera.position.set(vaultObj.camPos.x, vaultObj.camPos.y, vaultObj.camPos.z);
        ctx.camCtrl.controls.target.set(vaultObj.camTarget.x, vaultObj.camTarget.y, vaultObj.camTarget.z);
        ctx.camCtrl.camera.fov = payload.camera.verticalFovDeg;
        ctx.camCtrl.camera.updateProjectionMatrix();
        ctx.camCtrl.controls.update();
      }
    } else if (ctx.alina?.root) {
      ctx.alina.root.visible = true;
    }

    const dofSpec = {
      enabled: true,
      focalLengthMm: shot.focalLengthMm,
      apertureFStop: shot.apertureFStop,
      focusDistM: payload.dof.startFocusDistM,
      sensorHeightMm: 36.0
    };

    const thumbs = {
      beauty: ctx.camCtrl.renderVertical916DataURL(360, 640, 'beauty', { dof: dofSpec }),
      depth: ctx.camCtrl.renderVertical916DataURL(360, 640, 'depth', { depthBoundsM: payload.depthBoundsM }),
      normals: ctx.camCtrl.renderVertical916DataURL(360, 640, 'normals'),
      mask: ctx.camCtrl.renderVertical916DataURL(360, 640, 'mask')
    };

    if (ctx.alina?.root) ctx.alina.root.visible = prevAlinaVis;
    ctx.camCtrl.render();
    state.passPreviews[beatId] = thumbs;
    return thumbs;
  }

  /** Captura de alta resolución (1080×1920) para empaquetado .ZIP de un Beat. */
  function captureFullResBeatEntries(evalData, folderPrefix = '', beatVoiceSlice = '') {
    const { shot, vaultObj, payload, manifest, cleanFluxPrompt } = evalData;
    const prevAlinaVis = ctx.alina?.root ? ctx.alina.root.visible : true;
    const overscan = manifest.keyframeStrategy.overscanHandheldPost;
    const w = overscan?.enabled ? overscan.renderResolution.width : 1080;
    const h = overscan?.enabled ? overscan.renderResolution.height : 1920;

    ctx.cinema.apply(shot, '9:16');
    if (shot.shotRole === 'B-Roll') {
      if (ctx.alina?.root) ctx.alina.root.visible = false;
    } else if (ctx.alina?.root) {
      ctx.alina.root.visible = true;
    }

    const entries = [];
    const captureAt = (tNorm, tag) => {
      if (shot.shotRole === 'B-Roll' && vaultObj?.camPos && vaultObj?.camTarget) {
        const shift = tNorm * 0.16;
        ctx.camCtrl.isTransitioning = false;
        ctx.camCtrl.camera.position.set(vaultObj.camPos.x + shift, vaultObj.camPos.y, vaultObj.camPos.z);
        ctx.camCtrl.controls.target.set(vaultObj.camTarget.x, vaultObj.camTarget.y, vaultObj.camTarget.z);
        ctx.camCtrl.camera.fov = payload.camera.verticalFovDeg;
        ctx.camCtrl.camera.updateProjectionMatrix();
        ctx.camCtrl.controls.update();
      } else {
        ctx.cinema.seekNormalized(tNorm, { cleanKeyframe: true });
      }

      const focusDistM = tNorm === 0 ? payload.dof.startFocusDistM : payload.dof.endFocusDistM;
      const dofSpec = {
        enabled: true,
        focalLengthMm: shot.focalLengthMm,
        apertureFStop: shot.apertureFStop,
        focusDistM,
        sensorHeightMm: 36.0
      };

      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_beauty_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'beauty', { dof: dofSpec })
      });
      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_depth_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'depth', { depthBoundsM: payload.depthBoundsM })
      });
      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_normals_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'normals')
      });
      entries.push({
        path: `${folderPrefix}frames_3d_raw/${tag}_mask_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'mask')
      });

      if (shot.shotRole === 'A-Roll') {
        const op = ctx.camCtrl.renderOpenPose916(w, h, ctx.alina?.root || null);
        entries.push({ path: `${folderPrefix}frames_3d_raw/${tag}_openpose_1080x1920.png`, data: op.dataUrl });
        entries.push({ path: `${folderPrefix}frames_3d_raw/${tag}_openpose.json`, data: op.keypoints });
      }
    };

    captureAt(0, 'start');
    if (manifest.keyframeStrategy.exportEndFrame) {
      captureAt(1, 'end');
    }

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
        `=== BEAT SHEET (${shot.shotRole}) ===`,
        `Shot ID:        ${shot.shotId}`,
        `Keyframe Mode:  ${manifest.keyframeStrategy.mode}`,
        `Higgsfield Rig: ${manifest.higgsfieldCinemaStudio.cameraLabel} + ${manifest.higgsfieldCinemaStudio.lensLabel} (${manifest.higgsfieldCinemaStudio.focalLength} ${manifest.higgsfieldCinemaStudio.aperture})`,
        `Move Preset:    ${manifest.higgsfieldCinemaStudio.uiPresetLabel}`,
        `Voice-Over:     "${beatVoiceSlice}"`,
        ``,
        `[1] PROMPT FLUX RENDER-TO-REAL (${shot.shotRole === 'B-Roll' ? 'ZERO-FACE OBJECT LOCK' : 'ALINA IDENTITY LOCK'}):`,
        cleanFluxPrompt,
        ``,
        `[2] HIGGSFIELD DELTA STRUCTURED PROMPT:`,
        manifest.structuredPrompt.compiled
      ].join('\n')
    });

    return entries;
  }

  // ==========================================================================
  // DIBUJO DE CABLES CÚBICOS BÉZIER EN SVG EN TIEMPO REAL
  // ==========================================================================
  function updateCablesSVG() {
    const svg = root.querySelector('#bp-cables-svg');
    const stage = root.querySelector('#bp-graph-stage');
    if (!svg || !stage) return;

    const ch = getCurrentChapter();
    if (!ch) return;
    const beats = ch.blueprintBeats;
    const evaluated = beats.map((b, i) => evaluateBeat(b, i, ch));

    const getPort = (nodeId, side = 'right', yRatio = 0.5) => {
      const el = stage.querySelector(`#${nodeId}`);
      const pos = state.positions[nodeId] || { x: 0, y: 0 };
      const w = el ? el.offsetWidth : 320;
      const h = el ? el.offsetHeight : 180;
      return {
        x: side === 'right' ? pos.x + w : side === 'left' ? pos.x : pos.x + w * 0.5,
        y: side === 'bottom' ? pos.y + h : side === 'top' ? pos.y : pos.y + h * yRatio
      };
    };

    const cables = [];

    // 1. Nodo Capítulo -> Los 4 Beats (cable púrpura de guion y voz)
    beats.forEach((_, i) => {
      cables.push({
        from: getPort('node-chapter', 'right', 0.35 + i * 0.14),
        to: getPort(`node-beat-${i}`, 'left', 0.28),
        color: '#a855f7',
        opacity: i === state.activeBeatIdx ? 0.92 : 0.36,
        width: i === state.activeBeatIdx ? 2.5 : 1.5,
        dashed: true
      });
    });

    // 2. SEPARACIÓN ESTRICTA DE ROLES:
    //    • ADN Alina (#ec4899) SOLO cablea a Beats A-Roll
    //    • Bóveda @Objetos (#f59e0b) SOLO cablea a Beats B-Roll Zero-Face
    beats.forEach((b, i) => {
      if (b.role === 'A-Roll') {
        cables.push({
          from: getPort('node-dna', 'right', 0.5),
          to: getPort(`node-beat-${i}`, 'left', 0.68),
          color: '#ec4899',
          opacity: i === state.activeBeatIdx ? 0.95 : 0.45,
          width: i === state.activeBeatIdx ? 2.8 : 1.7,
          dashed: false
        });
      } else {
        cables.push({
          from: getPort('node-vault', 'right', 0.5),
          to: getPort(`node-beat-${i}`, 'left', 0.68),
          color: '#f59e0b',
          opacity: i === state.activeBeatIdx ? 0.95 : 0.48,
          width: i === state.activeBeatIdx ? 2.8 : 1.7,
          dashed: false
        });
      }
    });

    // 3. Cables verticales de Raccord Kelvin (Unreal Sequencer Timeline Beat 1 -> 2 -> 3 -> 4)
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
        opacity: 0.9,
        width: 2.6,
        dashed: !raccordOk,
        badgeText: raccordOk ? `Raccord Δ${deltaK}K ✔` : `Salto Δ${deltaK}K ⚠`
      });
    }

    // 4. Beat Activo -> Columna 3 (Render-to-Real -> Higgsfield -> Pre-Flight Gate)
    const activeBeatNode = `node-beat-${state.activeBeatIdx}`;
    const activeRole = beats[state.activeBeatIdx]?.role || 'A-Roll';
    const activeCableColor = activeRole === 'A-Roll' ? '#38bdf8' : '#f59e0b';

    cables.push({
      from: getPort(activeBeatNode, 'right', 0.5),
      to: getPort('node-render2real', 'left', 0.38),
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
      .map((c) => {
        const { from, to } = c;
        let d;
        if (c.vertical) {
          const dy = Math.max(24, Math.abs(to.y - from.y) * 0.45);
          d = `M ${from.x} ${from.y} C ${from.x} ${from.y + dy}, ${to.x} ${to.y - dy}, ${to.x} ${to.y}`;
        } else {
          const dx = Math.max(65, Math.abs(to.x - from.x) * 0.52);
          d = `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
        }
        const midX = (from.x + to.x) * 0.5;
        const midY = (from.y + to.y) * 0.5;
        return `
          <g>
            ${c.glow ? `<path d="${d}" fill="none" stroke="${c.color}" stroke-width="8" stroke-opacity="0.18" />` : ''}
            <path d="${d}" fill="none" stroke="${c.color}" stroke-width="${c.width}" stroke-opacity="${c.opacity}"
              ${c.dashed ? 'stroke-dasharray="7 5" class="bp-cable-anim"' : ''} stroke-linecap="round" />
            <circle cx="${from.x}" cy="${from.y}" r="5" fill="${c.color}" fill-opacity="${c.opacity}" />
            <circle cx="${to.x}" cy="${to.y}" r="5.5" fill="#060911" stroke="${c.color}" stroke-width="2.2" />
            ${
              c.badgeText
                ? `<g transform="translate(${midX}, ${midY})">
                     <rect x="-52" y="-9" width="104" height="18" rx="9" fill="#090d16" stroke="${c.color}" stroke-opacity="0.55" stroke-width="1"/>
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
  // RENDERIZADO COMPLETO DEL LIENZO Y LOS 10 NODOS
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
    if (state.activeBeatIdx >= beats.length) state.activeBeatIdx = 0;
    const evaluated = beats.map((b, i) => evaluateBeat(b, i, ch));
    const activeBeat = beats[state.activeBeatIdx];
    const activeEval = evaluated[state.activeBeatIdx];

    // Generar miniaturas 3D iniciales para el Beat activo si aún no están en caché
    const cacheKey = `${ch.id}_${activeBeat.beatId}_${activeBeat.role}_${activeBeat.spotId}_${activeBeat.objectId}_${activeBeat.directorStyleId}_${activeBeat.shotTypeId}_${activeBeat.cameraMoveId}`;
    const thumbs = state.passPreviews[cacheKey] || null;

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

    const allSpots = Object.keys(catalog.spotCinematographyMap);
    const hf = activeEval.manifest.higgsfieldCinemaStudio;
    const kf = activeEval.manifest.keyframeStrategy;

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
          background: rgba(15, 18, 27, 0.94);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.65);
          user-select: none;
        }
        .bp-node-header { cursor: grab; }
        .bp-node-header:active { cursor: grabbing; }
      </style>

      <div id="bp-viewport" class="bp-viewport relative w-full h-[calc(100vh-175px)] min-h-[680px] rounded-2xl border border-white/15 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing">

        <!-- Etiquetas Superiores de Columnas (Fijas en HUD Superior) -->
        <div class="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div class="flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 text-[11px]">
            <span class="text-[#f29979] font-bold">⬡ ALINA BLUEPRINT GRAPH</span>
            <span class="text-slate-500">|</span>
            <span class="text-purple-300 font-mono text-[10px]">Col 1: Fuentes</span>
            <span class="text-slate-500">→</span>
            <span class="text-emerald-300 font-mono text-[10px]">Col 2: Secuencia 1:2 (Unreal Sequencer)</span>
            <span class="text-slate-500">→</span>
            <span class="text-sky-300 font-mono text-[10px]">Col 3: 3D-to-Higgsfield (DaVinci Fusion)</span>
          </div>
          <div class="pointer-events-auto flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-emerald-500/30 rounded-xl px-3 py-1 text-[10px] font-mono">
            <span class="${ratio12Ok ? 'text-emerald-300' : 'text-rose-300'}">${aRollCount} A-Roll : ${bRollCount} B-Roll Zero-Face</span>
            <span class="text-slate-500">•</span>
            <span class="${durationsOk ? 'text-slate-200' : 'text-amber-300'}">Total ${totalSec}s</span>
          </div>
        </div>

        <!-- ESCENARIO TRANSFORMABLE (PAN + ZOOM) -->
        <div id="bp-graph-stage" class="absolute top-0 left-0 origin-top-left" style="width: 1260px; height: 1120px;">
          <svg id="bp-cables-svg" class="absolute inset-0 w-full h-full pointer-events-none overflow-visible" width="1260" height="1120"></svg>

          <!-- ===============================================================
               COLUMNA 1: FUENTES INMUTABLES (CAPÍTULO, ADN ALINA, BÓVEDA)
               =============================================================== -->

          <!-- NODO 1: ARCO NARRATIVO & VOZ ELEVENLABS (#a855f7) -->
          <div id="node-chapter" class="bp-node border border-purple-500/45" style="${posStyle('node-chapter', 330)}">
            <div data-drag="node-chapter" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-purple-500/15 border-b border-purple-500/30">
              <span class="text-[11px] font-bold text-purple-200 tracking-wide">🟣 CAPÍTULO & LOCUCIÓN VOZ</span>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/25 text-purple-200">${esc(ch.week || `Cap. ${ch.number}`)}</span>
            </div>
            <div class="p-3 space-y-2 text-[11px]">
              <select id="bp-chap-select" class="w-full bg-black/60 border border-white/15 rounded-lg p-1.5 text-white font-semibold">
                ${chapters.map((c) => `<option value="${esc(c.id)}" ${c.id === ch.id ? 'selected' : ''}>Cap. ${c.number}: ${esc(c.title)}</option>`).join('')}
              </select>
              <div class="text-[10px] text-slate-400 line-clamp-2">${esc(ch.synopsis || ch.subtitle || '')}</div>
              <div class="space-y-1">
                <div class="flex items-center justify-between text-[10px] font-mono text-purple-300">
                  <span>🎙️ ElevenLabs (${esc(ALINA_CHARACTER_BIBLE.voice.id)})</span>
                  <button id="bp-resplit-hook" class="text-[9.5px] underline hover:text-white" title="Repartir automáticamente el monólogo en los 4 Beats">Auto-repartir 4 Beats</button>
                </div>
                <textarea id="bp-chap-hook" rows="3" class="w-full bg-black/55 border border-white/10 rounded-lg p-2 text-[10px] font-mono text-slate-200 leading-snug">${esc(ch.hook || '')}</textarea>
              </div>
            </div>
          </div>

          <!-- NODO 2: ADN ALINA & RIG ARKIT (#ec4899 — SOLO CABLEA A A-ROLL) -->
          <div id="node-dna" class="bp-node border border-pink-500/45" style="${posStyle('node-dna', 330)}">
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
                  <div class="text-[9.5px] font-mono text-slate-400">Whisper Ceiling 0.35 • Boca cerrada I2V</div>
                </div>
              </div>
              <div class="p-2 rounded-lg bg-black/55 border border-white/5 text-[9.5px] font-mono text-slate-300 line-clamp-3">${esc(ALINA_CHARACTER_BIBLE.consistencyLock.tokenSnippet)}</div>
              <div class="text-[9.5px] text-pink-300/90 font-mono">⚡ Bloqueo Anti-Mezcla: este nodo jamás inyecta rostro en cables B-Roll.</div>
            </div>
          </div>

          <!-- NODO 3: BÓVEDA DE OBJETOS ZERO-FACE (#f59e0b — SOLO CABLEA A B-ROLL) -->
          <div id="node-vault" class="bp-node border border-amber-500/45" style="${posStyle('node-vault', 330)}">
            <div data-drag="node-vault" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-amber-500/15 border-b border-amber-500/30">
              <span class="text-[11px] font-bold text-amber-200 tracking-wide">🏺 BÓVEDA @OBJETOS (32 ACTIVOS)</span>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-200">ZERO-FACE B-ROLL</span>
            </div>
            <div class="p-3 space-y-2 text-[10.5px]">
              <div class="text-[10px] text-slate-300 leading-snug">
                Al alimentar un Beat B-Roll, el motor <strong>oculta automáticamente a Alina</strong> (<code class="text-amber-300 font-mono">visible=false</code>) y encuadra el objeto a <code class="text-amber-300 font-mono">100mm Macro</code>.
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
               COLUMNA 2: ESCALETA SECUENCIAL 1:2 (OPCIÓN 3 · UNREAL SEQUENCER)
               =============================================================== -->
          ${beats
            .map((b, i) => {
              const ev = evaluated[i];
              const isSel = i === state.activeBeatIdx;
              const isA = b.role === 'A-Roll';
              const borderCls = isSel
                ? isA
                  ? 'border-[#c86446] ring-2 ring-[#c86446]/45'
                  : 'border-amber-400 ring-2 ring-amber-400/45'
                : isA
                  ? 'border-white/15 hover:border-[#c86446]/60'
                  : 'border-amber-500/30 hover:border-amber-400/70';

              const tStart = beats.slice(0, i).reduce((s, x) => s + Number(x.durationSec || 0), 0).toFixed(1);
              const tEnd = (Number(tStart) + Number(b.durationSec || 0)).toFixed(1);

              return `
              <div id="node-beat-${i}" data-select-beat="${i}" class="bp-node border ${borderCls} transition-shadow" style="${posStyle(`node-beat-${i}`, 345)}">
                <div data-drag="node-beat-${i}" class="bp-node-header flex items-center justify-between px-3 py-1.5 rounded-t-2xl ${isA ? 'bg-[#c86446]/20 border-b border-[#c86446]/30' : 'bg-amber-500/15 border-b border-amber-500/30'}">
                  <div class="flex items-center gap-1.5">
                    <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${isA ? 'bg-pink-500/25 text-pink-200' : 'bg-amber-500/25 text-amber-200'}">${isA ? 'A-ROLL' : 'ZERO-FACE'}</span>
                    <span class="text-[11px] font-bold text-white">Plano ${i + 1}</span>
                  </div>
                  <span class="text-[9.5px] font-mono text-slate-300">${tStart}s → ${tEnd}s (${ev.kelvinKey}K)</span>
                </div>

                <div class="p-2.5 space-y-1.5 text-[10.5px]">
                  <div class="grid grid-cols-3 gap-1">
                    <select data-beat="${i}" data-field="role" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-white font-semibold">
                      <option value="A-Roll" ${isA ? 'selected' : ''}>🧑 A-Roll Alina</option>
                      <option value="B-Roll" ${!isA ? 'selected' : ''}>🏺 B-Roll 0-Face</option>
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
                        : `<div class="bg-black/45 border border-white/5 rounded px-1.5 py-1 text-[9.5px] font-mono text-amber-300 truncate">100mm Macro f/2.8</div>`
                    }
                    <select data-beat="${i}" data-field="cameraMoveId" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-slate-200">
                      ${catalog.cameraMoves.map((m) => `<option value="${m.id}" ${b.cameraMoveId === m.id ? 'selected' : ''}>${esc(m.label.split('(')[0].trim())}</option>`).join('')}
                    </select>
                    <select data-beat="${i}" data-field="durationSec" class="bg-black/65 border border-white/10 rounded px-1.5 py-1 text-emerald-300 font-mono">
                      ${[2.0, 2.5, 3.0, 3.5, 4.0].map((sec) => `<option value="${sec}" ${Number(b.durationSec) === sec ? 'selected' : ''}>${sec.toFixed(1)}s</option>`).join('')}
                    </select>
                  </div>

                  <input type="text" data-beat="${i}" data-field="voiceSlice" value="${esc(b.voiceSlice || '')}" placeholder="Línea de locución ElevenLabs bajo este plano..."
                    class="w-full bg-black/50 border border-white/10 rounded px-2 py-1 text-[10px] italic text-purple-200/90 focus:outline-none focus:border-purple-400">
                </div>
              </div>`;
            })
            .join('')}

          <!-- ===============================================================
               COLUMNA 3: PIPELINE 3D -> HIGGSFIELD DEL BEAT ACTIVO (OPCIÓN 2)
               =============================================================== -->

          <!-- NODO 4: RENDER-TO-REAL 3D (FLUX.1 DEV + CONTROLNET MULTIPASS) (#38bdf8) -->
          <div id="node-render2real" class="bp-node border border-sky-500/50" style="${posStyle('node-render2real', 385)}">
            <div data-drag="node-render2real" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-sky-500/15 border-b border-sky-500/30">
              <span class="text-[11px] font-bold text-sky-200 tracking-wide">🩵 CAPA 1 · RENDER-TO-REAL (PLANO ${state.activeBeatIdx + 1})</span>
              <button id="bp-btn-render-thumbs" class="text-[9.5px] font-mono px-2 py-0.5 rounded bg-sky-500/30 hover:bg-sky-500/50 text-white font-bold">↻ Capturar 3D</button>
            </div>
            <div class="p-3 space-y-2 text-[10.5px]">
              ${
                thumbs
                  ? `<div class="grid grid-cols-4 gap-1.5">
                      ${[
                        ['PBR CoC', thumbs.beauty],
                        ['Depth 16b', thumbs.depth],
                        ['Normals', thumbs.normals],
                        ['Mask 7-ID', thumbs.mask]
                      ]
                        .map(
                          ([lbl, src]) => `
                        <div class="space-y-0.5 text-center">
                          <img src="${src}" alt="${lbl}" class="w-full rounded-lg border border-white/15 object-cover bg-black" style="aspect-ratio:9/16;">
                          <div class="text-[8.5px] font-mono text-slate-400">${lbl}</div>
                        </div>`
                        )
                        .join('')}
                     </div>`
                  : `<div class="py-4 px-3 rounded-xl bg-black/55 border border-dashed border-sky-500/30 text-center text-[10px] text-slate-300">
                      Pulsa <strong class="text-sky-300">↻ Capturar 3D</strong> para renderizar en vivo los 4 pases (<code class="font-mono">PBR CoC, Depth, Normals, Mask</code>) del Plano ${state.activeBeatIdx + 1} ${activeBeat.role === 'B-Roll' ? '(con Alina oculta Zero-Face)' : ''}.
                     </div>`
              }
              <div class="flex items-center justify-between text-[9.5px] font-mono text-sky-300">
                <span>CN Depth ${activeEval.shot.mirrorShot ? '0.35 (Mirror)' : '0.68 @ 58%'} • CN Normal 0.42</span>
                <button id="bp-copy-flux" class="text-[#f29979] hover:text-white font-bold">✦ Copiar Flux</button>
              </div>
              <div id="bp-flux-box" class="p-2 rounded-lg bg-black/65 border border-white/10 text-[9.5px] font-mono text-slate-200 max-h-20 overflow-y-auto leading-relaxed select-all">${esc(activeEval.cleanFluxPrompt)}</div>
            </div>
          </div>

          <!-- NODO 5: HIGGSFIELD CINEMA STUDIO 4.0 & VOZ (#c084fc) -->
          <div id="node-higgsfield" class="bp-node border border-fuchsia-500/50" style="${posStyle('node-higgsfield', 385)}">
            <div data-drag="node-higgsfield" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-fuchsia-500/15 border-b border-fuchsia-500/30">
              <span class="text-[11px] font-bold text-fuchsia-200 tracking-wide">🟣 CAPA 2 · HIGGSFIELD CINEMA 4.0</span>
              <span class="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${kf.mode === 'START_END' ? 'bg-emerald-500/25 text-emerald-200 border border-emerald-400/40' : 'bg-amber-500/25 text-amber-200 border border-amber-400/40'}">${kf.mode === 'START_END' ? 'START + END' : 'START ONLY'}</span>
            </div>
            <div class="p-3 space-y-2 text-[10.5px]">
              <div class="grid grid-cols-2 gap-1.5 bg-black/50 p-2 rounded-lg border border-white/5 text-[9.5px] font-mono">
                <div class="truncate"><span class="text-slate-500">Body:</span> <span class="text-white">${esc(hf.cameraLabel)}</span></div>
                <div class="truncate"><span class="text-slate-500">Glass:</span> <span class="text-white">${esc(hf.lensLabel)}</span></div>
                <div><span class="text-slate-500">Optics:</span> <span class="text-fuchsia-300">${esc(hf.focalLength)} · ${esc(hf.aperture)}</span></div>
                <div class="truncate"><span class="text-slate-500">Move:</span> <span class="text-emerald-300">${esc(hf.uiPresetLabel.split('[')[0].trim())} (${Math.round(hf.motionIntensity * 100)}%)</span></div>
              </div>

              <div class="flex items-center justify-between text-[9.5px] font-mono">
                <span class="text-fuchsia-300">Delta Prompt (${activeBeat.role})</span>
                <button id="bp-copy-delta" class="text-[#f29979] hover:text-white font-bold">✦ Copiar Motion</button>
              </div>
              <div id="bp-delta-box" class="p-2 rounded-lg bg-black/65 border border-white/10 text-[9.5px] font-mono text-amber-100/95 max-h-24 overflow-y-auto leading-relaxed select-all">${esc(activeEval.manifest.structuredPrompt.compiled)}</div>

              <div class="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/25 text-[9.5px] text-purple-200 truncate">
                🎙️ <em>«${esc(activeBeat.voiceSlice || '')}»</em>
              </div>
            </div>
          </div>

          <!-- NODO 6: OUTPUT & PRE-FLIGHT ZERO-WASTE GATE (#10b981) -->
          <div id="node-gate" class="bp-node border border-emerald-500/55" style="${posStyle('node-gate', 385)}">
            <div data-drag="node-gate" class="bp-node-header flex items-center justify-between px-3.5 py-2 rounded-t-2xl bg-emerald-500/15 border-b border-emerald-500/30">
              <span class="text-[11px] font-bold text-emerald-200 tracking-wide">🟢 PRE-FLIGHT GATE & EXPORT</span>
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
                  📦 ZIP Plano ${state.activeBeatIdx + 1}
                </button>
                <button id="bp-export-episode-zip" class="py-2 px-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-bold text-[10.5px] shadow-lg">
                  📦 Episodio 4 Beats (.zip)
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- FLOATING GLASS HUD INFERIOR -->
        <div class="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c101b]/90 border border-white/15 shadow-2xl whitespace-nowrap max-w-[96%] overflow-x-auto" style="backdrop-filter: blur(16px);">
          <button id="bp-hud-prev-beat" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">◀ Beat</button>
          <span class="text-[11px] font-mono font-bold text-[#f29979]">Plano ${state.activeBeatIdx + 1}/4 (${activeBeat.role})</span>
          <button id="bp-hud-next-beat" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">Beat ▶</button>
          <span class="text-white/15">|</span>
          <button id="bp-hud-light" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200">
            ${ctx.getLightingMode() === 'day' ? '☀️ Día' : '🌙 Noche'}
          </button>
          <button id="bp-hud-zoom-out" class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-xs text-white font-mono">−</button>
          <span id="bp-hud-zoom" class="text-[10px] font-mono text-emerald-300 w-10 text-center">${Math.round(state.zoom * 100)}%</span>
          <button id="bp-hud-zoom-in" class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-xs text-white font-mono">+</button>
          <button id="bp-hud-reset" class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-slate-200 font-mono">⌖ Centrar</button>
          <button id="bp-hud-open-3d" class="px-3 py-1 rounded-full bg-[#c86446] hover:bg-[#b55539] text-[11px] text-white font-bold shadow">🎬 Ver en Plató 3D ↗</button>
        </div>
      </div>
    `;

    applyStageTransform();
    requestAnimationFrame(() => updateCablesSVG());
    bindCanvasInteractions(ch, beats, evaluated, activeEval, cacheKey);
  }

  // ==========================================================================
  // INTERACCIONES: PAN, WHEEL ZOOM, DRAG DE NODOS Y ACCIONES EN VIVO
  // ==========================================================================
  function bindCanvasInteractions(ch, beats, evaluated, activeEval, cacheKey) {
    const vp = root.querySelector('#bp-viewport');
    const stage = root.querySelector('#bp-graph-stage');
    if (!vp || !stage) return;

    // 1. Arrastre libre de Nodos por su cabecera (recalculando Bézier en vivo)
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

    // 2. Pan del lienzo vacío
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

    // 3. Zoom suave con rueda
    vp.addEventListener(
      'wheel',
      (e) => {
        if (e.target.closest('textarea, .custom-scrollbar')) return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.06 : -0.06;
        state.zoom = Math.min(1.25, Math.max(0.52, +(state.zoom + delta).toFixed(2)));
        applyStageTransform();
      },
      { passive: false }
    );

    // 4. Selección de Beat activo en Columna 2
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

    // 5. Edición de parámetros de cada Beat (persistida en el Capítulo en IndexedDB)
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
            b.focalLengthMm = 100;
            b.apertureFStop = 2.8;
            if (!b.objectId) b.objectId = getObjects()[0]?.id || '';
          } else {
            b.shotTypeId = 'mcu_interview';
            b.cameraMoveId = 'slow_dolly_push_in';
            b.focalLengthMm = 85;
            b.apertureFStop = 1.4;
          }
        }
        state.activeBeatIdx = idx;
        saveChapterToDB(ch);
        if (evType === 'change') render();
      });
    });

    // 6. Controles del Nodo Capítulo
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
      const slices = splitHookIntoSlices(ch.hook);
      beats.forEach((b, i) => { b.voiceSlice = slices[i]; });
      saveChapterToDB(ch);
      render();
      ctx.setStatus('🎙️ <span class="text-purple-300 font-bold">Monólogo repartido automáticamente entre los 4 Beats.</span>');
    });

    // 7. Renderizar en vivo las 4 miniaturas 3D del Beat activo
    root.querySelector('#bp-btn-render-thumbs')?.addEventListener('click', () => {
      captureLiveThumbnailsForBeat(activeEval, cacheKey);
      render();
      ctx.setStatus(
        `🩵 <span class="text-sky-300 font-bold">Pases 3D renderizados para Plano ${state.activeBeatIdx + 1} (${beats[state.activeBeatIdx].role}).</span>`
      );
    });

    root.querySelector('#bp-copy-flux')?.addEventListener('click', () => {
      navigator.clipboard.writeText(activeEval.cleanFluxPrompt);
      ctx.setStatus('✦ <span class="text-sky-300 font-bold">Prompt Render-to-Real (Flux) copiado sin mezcla de roles.</span>');
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

    // 8. Exportar ZIP de 1 Beat o del Episodio Completo (4 carpetas separadas A-Roll / Zero-Face B-Roll)
    root.querySelector('#bp-export-beat-zip')?.addEventListener('click', async () => {
      const b = beats[state.activeBeatIdx];
      const entries = captureFullResBeatEntries(activeEval, '', b.voiceSlice);
      const blob = await buildZipBlob(entries);
      downloadBlob(blob, `shotpack_cap${ch.number}_plano${state.activeBeatIdx + 1}_${b.role.toLowerCase()}.zip`);
      ctx.setStatus(`📦 <span class="text-emerald-400 font-bold">Shot Pack del Plano ${state.activeBeatIdx + 1} (${b.role}) descargado.</span>`);
    });

    root.querySelector('#bp-export-episode-zip')?.addEventListener('click', async () => {
      const btn = root.querySelector('#bp-export-episode-zip');
      if (btn) btn.textContent = '⏳ Compilando 4 Beats…';
      await new Promise((r) => setTimeout(r, 30));
      try {
        const allEntries = [];
        const timelineSummary = [];
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
            totalDurationSec: beats.reduce((s, x) => s + Number(x.durationSec || 0), 0),
            elevenLabsFullScript: ch.hook,
            timeline: timelineSummary
          }
        });
        allEntries.push({
          path: 'elevenlabs_voiceover_script.txt',
          data: `Voice ID: ${ALINA_CHARACTER_BIBLE.voice.id} (Pitch 0.98 | Rate 0.95)\n\n${ch.hook || ''}`
        });

        const zip = await buildZipBlob(allEntries);
        downloadBlob(zip, `episodio_cap${ch.number}_higgsfield_blueprint.zip`);
        ctx.setStatus(
          `✅ <span class="text-emerald-400 font-bold">Episodio Completo Cap. ${ch.number} exportado (${allEntries.length} archivos en 4 subcarpetas A-Roll + Zero-Face B-Roll).</span>`
        );
      } finally {
        render();
      }
    });

    // 9. Floating Glass HUD Inferior
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
      state.zoom = Math.max(0.52, +(state.zoom - 0.08).toFixed(2));
      applyStageTransform();
    };
    root.querySelector('#bp-hud-zoom-in').onclick = () => {
      state.zoom = Math.min(1.25, +(state.zoom + 0.08).toFixed(2));
      applyStageTransform();
    };
    root.querySelector('#bp-hud-reset').onclick = () => {
      state.panX = 18;
      state.panY = 14;
      state.zoom = 0.86;
      state.positions = structuredClone(DEFAULT_NODE_POSITIONS);
      render();
    };
    root.querySelector('#bp-hud-open-3d').onclick = () => {
      const b = beats[state.activeBeatIdx];
      const ev = evaluated[state.activeBeatIdx];
      ctx.selectFloor(ev.spot.floor);
      ctx.selectSpot(ev.spot);
      ctx.cinema.apply(ev.shot, '9:16');
      if (b.role === 'B-Roll' && ev.vaultObj?.camPos && ev.vaultObj?.camTarget) {
        ctx.camCtrl.flyTo(ev.vaultObj.camPos, ev.vaultObj.camTarget);
      }
      ctx.switchMainView('plato');
      ctx.setStatus(`🎬 <span class="text-emerald-400 font-bold">Plano ${state.activeBeatIdx + 1} (${b.role}) cargado en vivo en el Plató 3D.</span>`);
    };
  }

  return {
    render,
    openForChapter(chapterId) {
      state.chapterId = chapterId;
      state.activeBeatIdx = 0;
      render();
    }
  };
}
