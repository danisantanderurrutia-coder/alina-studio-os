/**
 * HiggsfieldAdapter — Traductor determinista de CinemaShotPayload (Alina 3D Previz)
 * hacia:
 *   1) Capa 1: Trabajo Render-to-Real (ComfyUI Flux.1 Dev + ControlNet Depth/Normal/OpenPose + 7-ID Mask + CoC)
 *   2) Capa 2: Higgsfield Cinema Studio 4.0 / DoP (Camera Body, Lens Glass, Keyframe Mode, Anti-Duplication & Delta Prompt)
 *   3) Capa 3: Protocolos Anti-Artefactos (ots_mirror, rack_focus_macro_to_eyes, foregroundFraming, handheld 1.7Hz)
 *
 * Puro ESM sin dependencias de DOM ni Three.js (compartido entre Node CLI y navegador).
 */

import { indexCatalog, sensorGateFor } from './cinematographySolver.js';

export const SEMANTIC_MASK_PALETTE = {
  environment: { id: 0, hex: '#1E293B', rgb: [30, 41, 59], label: 'Room Architecture (Walls & Ceiling)' },
  skin:        { id: 1, hex: '#FF3B30', rgb: [255, 59, 48], label: 'Alina Skin (Face/Neck/Hands)' },
  eyes:        { id: 2, hex: '#34C759', rgb: [52, 199, 89], label: 'Alina Emerald Iris & Sclera' },
  hair:        { id: 3, hex: '#FFCC00', rgb: [255, 204, 0], label: 'Alina Copper Hair Strands' },
  wardrobe:    { id: 4, hex: '#007AFF', rgb: [0, 122, 255], label: 'Alina Wardrobe Fabric' },
  foreground:  { id: 5, hex: '#AF52DE', rgb: [175, 82, 222], label: 'Foreground Bokeh Prop' },
  mirror:      { id: 6, hex: '#00C7BE', rgb: [0, 199, 190], label: 'Planar Mirror Active Disc' },
  prop:        { id: 7, hex: '#FF9500', rgb: [255, 149, 0], label: 'Hero Vault Props, Art & Botanicals' },
  furniture:   { id: 8, hex: '#14B8A6', rgb: [20, 184, 166], label: 'Set Furniture & Surfaces' }
};

export const DIRECTOR_GEAR_MAP = {
  fincher_cronenweth: {
    cameraProfile: 'red_v_raptor',
    cameraLabel: 'RED V-Raptor 8K VV',
    lensProfile: 'zeiss_ultra_prime',
    lensLabel: 'Zeiss Master / Ultra Prime',
    filmGrain: 0.025,
    colorScience: 'Clinical cyan-amber separation, crisp micro-contrast, deep negative fill'
  },
  wong_kar_wai_doyle: {
    cameraProfile: 'arriflex_35mm',
    cameraLabel: 'ARRI Arriflex 35mm Film',
    lensProfile: 'panavision_c_series',
    lensLabel: 'Panavision C-Series Anamorphic',
    filmGrain: 0.055,
    colorScience: 'Warm tungsten halation, oval anamorphic bokeh, lush emerald-crimson neon glow'
  },
  villeneuve_deakins: {
    cameraProfile: 'arri_alexa_35',
    cameraLabel: 'ARRI Alexa 35 / LF',
    lensProfile: 'arri_signature',
    lensLabel: 'ARRI Signature Prime',
    filmGrain: 0.03,
    colorScience: 'Zero geometric distortion, smooth highlight roll-off, atmospheric single-source haze'
  },
  guadagnino_mukdeeprom: {
    cameraProfile: 'film_35mm',
    cameraLabel: '35mm Film (Kodak Vision3 250D)',
    lensProfile: 'cooke_s4',
    lensLabel: 'Cooke S4/i Prime',
    filmGrain: 0.045,
    colorScience: 'Warm Mediterranean skin roll-off ("Cooke Look"), tactile organic daylight bounce'
  },
  kubrick_alcott: {
    cameraProfile: 'arri_alexa_35',
    cameraLabel: 'ARRI Alexa 35',
    lensProfile: 'canon_k35',
    lensLabel: 'Canon K-35 / Zeiss Fast Vintage Prime',
    filmGrain: 0.04,
    colorScience: '2200K practical candlelight chiaroscuro, rich velvet shadow retention, warm amber flare'
  },
  lubezki_natural: {
    cameraProfile: 'sony_venice',
    cameraLabel: 'Sony Venice 2 8K',
    lensProfile: 'arri_signature',
    lensLabel: 'ARRI Master / Signature Wide',
    filmGrain: 0.03,
    colorScience: 'High-latitude natural backlight, rectilinear wide-angle clarity, organic hair rim'
  },
  refn_neon_noir: {
    cameraProfile: 'sony_venice',
    cameraLabel: 'Sony Venice 2 8K',
    lensProfile: 'hawk_v_lite',
    lensLabel: 'Hawk V-Lite Anamorphic',
    filmGrain: 0.04,
    colorScience: 'High-saturation magenta/cyan neon separation, deep obsidian marble blacks'
  },
  coppola_intimate: {
    cameraProfile: 'arri_alexa_35',
    cameraLabel: 'ARRI Alexa 35',
    lensProfile: 'cooke_s4',
    lensLabel: 'Cooke S4/i Portrait Prime',
    filmGrain: 0.035,
    colorScience: 'Soft pastel highlight retention, creamy portrait depth transition, porcelain skin warmth'
  }
};

const HIGGSFIELD_DISCRETE_FOCALS = [14, 24, 35, 50, 75];

/** Cuantiza la focal métrica del solver al peldaño nativo más cercano de Higgsfield Cinema Studio. */
export function quantizeHiggsfieldFocal(focalMm) {
  const best = HIGGSFIELD_DISCRETE_FOCALS.reduce((a, b) =>
    Math.abs(b - focalMm) < Math.abs(a - focalMm) ? b : a
  );
  return `${best}mm`;
}

/** Calcula el radio máximo de Círculo de Confusión (CoC en px a 1920p) para el bokeh óptico. */
export function computeOpticalCoCPixels({
  focalMm,
  apertureFStop,
  focusDistM,
  sampleDistM,
  sensorHeightMm = 36.0,
  imageHeightPx = 1920
}) {
  const f = focalMm;
  const N = Math.max(1.0, apertureFStop);
  const s1 = Math.max(0.25, focusDistM) * 1000.0; // mm
  const z = Math.max(0.2, sampleDistM) * 1000.0;   // mm
  if (s1 <= f + 1) return 0;
  const cocMm = Math.abs((f * f) / (N * (s1 - f)) * ((z - s1) / z));
  const cocPx = (cocMm / sensorHeightMm) * imageHeightPx;
  return +Math.min(48, cocPx).toFixed(2);
}

/**
 * Decide determinísticamente si exportar solo Start Frame o par Start + End Frame.
 */
export function resolveKeyframeStrategy({ shot, payload }) {
  const mvId = shot.cameraMoveId;
  const isMirror = Boolean(shot.mirrorShot || shot.shotTypeId === 'ots_mirror');
  const isRack =
    shot.focusMode === 'rack_prop_to_iris' ||
    shot.focusMode === 'rack_iris_to_prop' ||
    mvId === 'rack_focus_macro_to_eyes' ||
    mvId === 'rack_focus_eyes_to_prop';
  const isWalkingOrDance =
    mvId === 'handheld_walking_lubezki' || ['Walk', 'Rumba', 'HipHop'].includes(shot.animation);

  // Caso 4: Locomoción humana o handheld walking -> prohibido End Frame rígido (evita foot-sliding y morphing)
  if (isWalkingOrDance && !isMirror && !isRack) {
    const isHandheld = mvId === 'handheld_walking_lubezki';
    const isLandscape = (payload?.aspectRatio || '9:16') === '16:9';
    return {
      mode: 'START_ONLY',
      exportEndFrame: false,
      reason: isHandheld
        ? 'Walking/Handheld <=3.0s: START_ONLY evita foot-sliding; el micro-shake 1.7Hz se aplica con 4% overscan en post para 0% jelly-walls.'
        : `Animación cíclica (${shot.animation}): START_ONLY permite física corporal fluida sin interpolación robótica hacia pose fija.`,
      overscanHandheldPost: isHandheld
        ? {
            enabled: true,
            renderResolution: isLandscape ? { width: 1998, height: 1124 } : { width: 1124, height: 1998 },
            deliveryCrop: isLandscape ? { width: 1920, height: 1080 } : { width: 1080, height: 1920 },
            frequencyHz: payload.camera.handheldHz || 1.7,
            amplitudePx: 14,
            maxClipDurationSec: 3.0
          }
        : null
    };
  }

  // Casos obligatorios de START_END: espejo, rack focus, pull-out, pedestal, arco parallax, slider B-Roll, o FG con traslación lateral
  if (isMirror) {
    return {
      mode: 'START_END',
      exportEndFrame: true,
      reason: 'ots_mirror: ancla geométricamente la ley de reflexión y el paralaje doble entre nuca/hombro y espejo.',
      overscanHandheldPost: null
    };
  }
  if (isRack) {
    return {
      mode: 'START_END',
      exportEndFrame: true,
      reason: 'Rack Focus óptico: Start tiene primer término nítido y End tiene iris/sujeto nítido con CoC físico exacto.',
      overscanHandheldPost: null
    };
  }
  const START_END_MOVES = [
    'slow_dolly_pull_out',
    'vertigo_dolly_zoom_subtle',
    'subtle_parallax_arc',
    'subtle_parallax_arc_left',
    'pedestal_reveal_up',
    'pedestal_sink_down',
    'crane_jib_high_to_eye',
    'lateral_slider_truck',
    'reveal_from_behind_wall',
    'fpv_slow_glide_through'
  ];
  if (START_END_MOVES.includes(mvId)) {
    return {
      mode: 'START_END',
      exportEndFrame: true,
      reason: `Desoclusión espacial (${mvId}): End Frame inyecta la arquitectura real del set y bloquea invenciones de fondo.`,
      overscanHandheldPost: null
    };
  }
  if (payload.foregroundProp && mvId !== 'static_breathing') {
    return {
      mode: 'START_END',
      exportEndFrame: true,
      reason: 'Foreground Framing con traslación: clava la velocidad diferencial de paralaje entre el prop a 0.48m y Alina.',
      overscanHandheldPost: null
    };
  }

  // Por defecto (static_breathing y slow_dolly_push_in frontal limpio <=28cm): START_ONLY da parpadeo y respiración más orgánicos
  return {
    mode: 'START_ONLY',
    exportEndFrame: false,
    reason: 'Encuadre frontal acotado sin desoclusión nueva: START_ONLY + MoveSet nativo maximiza naturalidad facial y ocular.',
    overscanHandheldPost: null
  };
}

function easingToSpeedRamp(easing) {
  switch (easing) {
    case 'linear': return 'linear';
    case 'easeOutCubic': return 'decelerate';
    case 'easeInOutCubic': return 'smooth_curve';
    case 'easeInOutSine':
    default: return 'smooth';
  }
}

/**
 * Mapea cameraMoveId + KeyframeMode al MoveSet nativo de Higgsfield aplicando bloqueo Anti-Duplicación.
 */
export function resolveHiggsfieldMove({ shot, keyframeMode, catalog }) {
  const ix = indexCatalog(catalog);
  const mv = ix.moves.get(shot.cameraMoveId);
  const rawStrength = shot.motionStrength ?? mv?.recommendedMotionStrength ?? 2.2;
  const baseNormalized = Math.min(0.72, Math.max(0.18, +((rawStrength - 1.0) / 3.5).toFixed(2)));

  const MOVE_TABLE = {
    static_breathing:           { id: 'static_locked',    uiLabel: 'Static / Subtle Breathing',       guidedId: 'none_keyframe_guided' },
    slow_dolly_push_in:         { id: 'dolly_in_slow',    uiLabel: 'Dolly In (Slow)',                 guidedId: 'subtle_dolly_in' },
    slow_dolly_pull_out:        { id: 'dolly_out_slow',   uiLabel: 'Dolly Out (Slow)',                guidedId: 'subtle_dolly_out' },
    vertigo_dolly_zoom_subtle:  { id: 'dolly_zoom_subtle',uiLabel: 'Vertigo / Dolly-Zoom (Subtle)',   guidedId: 'none_keyframe_guided' },
    subtle_parallax_arc:        { id: 'arc_right_subtle', uiLabel: 'Orbit / Arc Right (+14°)',        guidedId: 'keyframe_arc_guided' },
    subtle_parallax_arc_left:   { id: 'arc_left_subtle',  uiLabel: 'Orbit / Arc Left (-14°)',         guidedId: 'keyframe_arc_guided' },
    pedestal_reveal_up:         { id: 'crane_up_slow',    uiLabel: 'Crane / Pedestal Up',             guidedId: 'keyframe_pedestal_up' },
    pedestal_sink_down:         { id: 'crane_down_slow',  uiLabel: 'Crane / Pedestal Down',           guidedId: 'keyframe_pedestal_down' },
    crane_jib_high_to_eye:      { id: 'jib_descent_slow', uiLabel: 'Mini-Jib High → Eye-Level',       guidedId: 'keyframe_crane_guided' },
    lateral_slider_truck:       { id: 'truck_right',      uiLabel: 'Truck Right (Slider)',            guidedId: 'keyframe_truck_guided' },
    reveal_from_behind_wall:    { id: 'slider_reveal',    uiLabel: 'Lateral Reveal Past Edge',        guidedId: 'keyframe_truck_guided' },
    handheld_walking_lubezki:   { id: 'tracking_forward', uiLabel: 'Tracking / Handheld Low',         guidedId: 'tracking_forward' },
    fpv_slow_glide_through:     { id: 'gimbal_glide_in',  uiLabel: 'Gimbal Architectural Glide',      guidedId: 'subtle_dolly_in' },
    rack_focus_macro_to_eyes:   { id: 'rack_focus_lock',  uiLabel: 'Static + Rack Focus (Prop→Iris)', guidedId: 'none_keyframe_guided' },
    rack_focus_eyes_to_prop:    { id: 'rack_focus_out',   uiLabel: 'Static + Rack Focus (Iris→Prop)', guidedId: 'none_keyframe_guided' }
  };

  const entry = MOVE_TABLE[shot.cameraMoveId] || MOVE_TABLE.static_breathing;
  const antiDuplicationLock = keyframeMode === 'START_END';

  return {
    cameraMovement: antiDuplicationLock ? entry.guidedId : entry.id,
    uiPresetLabel: antiDuplicationLock
      ? `${entry.uiLabel} [Keyframe-Guided · Low Intensity]`
      : entry.uiLabel,
    speedRamp: antiDuplicationLock ? 'linear' : easingToSpeedRamp(mv?.easing),
    motionIntensity: antiDuplicationLock ? Math.min(0.32, baseNormalized) : baseNormalized,
    antiDuplicationLock,
    operatorNote: antiDuplicationLock
      ? 'Start + End ya contienen el desplazamiento 3D exacto: en Higgsfield UI deja Camera Move en None/Subtle (<=30%) para no duplicar velocidad.'
      : 'Usa solo Start Frame y activa el preset indicado en Higgsfield Cinema Studio.'
  };
}

/**
 * Compila el Delta Structured Prompt (5 bloques sin redundancia estática ni flags basura).
 */
export function compileHiggsfieldStructuredPrompt({ shot, spot, payload, catalog }) {
  const ix = indexCatalog(catalog);
  const li = ix.lights.get(shot.lightingSchemeId);
  const mv = ix.moves.get(shot.cameraMoveId);

  const distDeltaCm = Math.round(
    Math.hypot(
      payload.camera.endPos.x - payload.camera.startPos.x,
      payload.camera.endPos.y - payload.camera.startPos.y,
      payload.camera.endPos.z - payload.camera.startPos.z
    ) * 100
  );

  // 1. CAMERA & OPTICS DELTA
  let camClause = '';
  const fStr = `${shot.focalLengthMm}mm f/${shot.apertureFStop}`;
  if (shot.focusMode === 'rack_prop_to_iris' || shot.cameraMoveId === 'rack_focus_macro_to_eyes') {
    camClause = `Smooth optical rack focus transition (${fStr}) pulling focus plane from near foreground at ${payload.dof.startFocusDistM}m onto crisp target at ${payload.dof.endFocusDistM}m with natural lens breathing, minimal ${distDeltaCm}cm axial glide`;
  } else if (shot.mirrorShot || shot.shotTypeId === 'ots_mirror') {
    camClause = `Controlled ${distDeltaCm}cm over-the-shoulder push-in toward vanity mirror (${fStr}), optical focus locked at ${payload.dof.startFocusDistM}m on the virtual reflection plane while near shoulder stays softly blurred`;
  } else if (shot.cameraMoveId === 'static_breathing') {
    camClause = `Locked cinema tripod (${fStr}), zero camera pan or drift, razor-sharp focus locked at ${payload.dof.startFocusDistM}m`;
  } else if (shot.cameraMoveId === 'handheld_walking_lubezki') {
    camClause = `Smooth ${distDeltaCm}cm backward tracking camera keeping constant framing ahead of walking subject (${fStr}), level horizon, architectural verticals straight`;
  } else if (shot.cameraMoveId === 'subtle_parallax_arc') {
    camClause = `Gentle ${mv?.arcDegrees || 14}-degree lateral parallax glide (${distDeltaCm}cm slider arc, ${fStr}), smooth multi-plane separation with focus locked on subject`;
  } else if (shot.cameraMoveId === 'pedestal_reveal_up') {
    camClause = `Smooth ${distDeltaCm}cm vertical pedestal rise (${fStr}), steady architectural verticals, focus locked at ${payload.dof.endFocusDistM}m`;
  } else if (shot.cameraMoveId === 'lateral_slider_truck') {
    camClause = `Silky ${distDeltaCm}cm horizontal tabletop slider truck (${fStr}), zero tilt, crisp macro focus plane at ${payload.dof.startFocusDistM}m`;
  } else if (shot.cameraMoveId === 'slow_dolly_pull_out') {
    camClause = `Controlled ${distDeltaCm}cm linear dolly pull-out revealing room architecture (${fStr}), focus continuously tracking subject`;
  } else {
    camClause = `Precision ${distDeltaCm}cm linear dolly push-in along optical axis (${fStr}), zero roll, shallow depth of field locked on near iris at ${payload.dof.endFocusDistM}m`;
  }

  // 2. SUBJECT MICRO-ACTION (temporal delta only)
  let subjClause = '';
  if (shot.shotRole === 'B-Roll') {
    const brollDesc = (spot?.brolls?.[shot.brollIndex ?? 0] || 'tactile luxury object').replace(/^B-Roll \d+:\s*/i, '');
    subjClause = `Zero human presence; static ${brollDesc.toLowerCase()} anchored firmly on surface with realistic specular highlight shift as lens glides`;
  } else if (shot.mirrorShot || shot.shotTypeId === 'ots_mirror') {
    subjClause = 'Foreground back-of-head and shoulder silhouette remain poised and still while her crisp vanity mirror reflection maintains steady emerald eye contact, subtle left-corner smirk, single slow natural blink in exact optical sync';
  } else if (shot.animation === 'Walk') {
    subjClause = 'Poised woman walks forward at unhurried natural pace, relaxed shoulders, steady forward gaze with subtle asymmetric left smirk, hands relaxed below frame';
  } else if (shot.animation === 'Rumba' || shot.animation === 'HipHop') {
    subjClause = 'Fluid rhythmic torso and hip sway with feet grounded cleanly on floor, poised head control within front quadrant, natural blink and confident gaze';
  } else if (shot.animation === 'Laying') {
    subjClause = 'Reclining woman rests calmly with slow subtle ribcage breathing, serene emerald eye lock toward lens, gentle unhurried blink, relaxed hands still';
  } else {
    subjClause = 'Poised woman maintains steady hypnotic eye contact with lens, subtle asymmetric left-corner smirk, single slow natural blink, gentle ribcage inhalation, hands resting completely still';
  }

  // 3. SECONDARY PHYSICS
  const physicsParts = [];
  if (shot.shotRole === 'A-Roll') {
    physicsParts.push(
      shot.animation === 'Walk' || shot.animation === 'Rumba'
        ? 'copper red hair waves move with natural inertial follow-through, subtle metallic earring sway'
        : 'fine loose copper hair strands settle naturally with barely perceptible air drift'
    );
  }
  if (payload.foregroundProp) {
    physicsParts.push(`out-of-focus foreground ${payload.foregroundProp.name.toLowerCase()} shifts smoothly in near-plane bokeh parallax`);
  }
  if (['bath', 'pool'].includes(shot.spotId)) {
    physicsParts.push('gentle dark water surface micro-ripples catching warm specular glints');
  } else if (['boudoir', 'suite'].includes(shot.spotId) || shot.lightingSchemeId === 'kubrick_candlelight_2200k') {
    physicsParts.push('subtle organic 2200K candle flame micro-shimmer');
  } else if (['podcast', 'cafe', 'kitchen'].includes(shot.spotId)) {
    physicsParts.push('delicate wisp of warm espresso steam rising softly');
  }
  const physClause = physicsParts.join(', ') || 'subtle atmospheric dust motes drifting in light beam';

  // 4. LIGHTING & TEMPORAL INVARIANCE
  const keyK = li?.realtimeKeyLight?.kelvin ?? 3200;
  const rimK = li?.realtimeRimLight?.kelvin ?? 5400;
  const lightClause = `Constant ${keyK}K motivated key light and ${rimK}K rim separation (${li?.contrastRatio || '4:1'} ratio), locked architectural shadow geometry, zero exposure pumping or color shift`;

  const compiled = `[CAMERA: ${camClause}] [SUBJECT: ${subjClause}] [PHYSICS: ${physClause}] [LIGHTING: ${lightClause}]`;

  const negativeParts = [
    'plastic CGI skin',
    'texture boiling',
    'warped wall lines',
    'jelly architecture',
    'extra fingers',
    'hand morphing',
    'sudden zoom jump',
    'exposure flicker'
  ];
  if (shot.mirrorShot) negativeParts.unshift('desynchronized mirror reflection', 'foreground head turning 180 degrees');
  if (shot.shotRole === 'B-Roll') negativeParts.unshift('human face', 'hands entering frame');

  return {
    blocks: {
      camera: camClause,
      subject: subjClause,
      physics: physClause,
      lighting: lightClause
    },
    compiled,
    negativeGuardrails: negativeParts.join(', ')
  };
}

/**
 * Genera el payload exacto de condicionamiento Render-to-Real para ComfyUI (Flux.1 Dev + Union ControlNet + PuLID/LoRA).
 */
export function buildComfyRenderToRealJob({ shot, spot, payload, catalog, keyframeStrategy }) {
  const gear = DIRECTOR_GEAR_MAP[shot.directorStyleId] || DIRECTOR_GEAR_MAP.fincher_cronenweth;
  const aspectRatio = payload?.aspectRatio || '9:16';
  const gate = sensorGateFor(catalog, aspectRatio);
  const imgH = aspectRatio === '16:9' ? 1080 : 1920;
  const isWater = ['bath', 'pool'].includes(shot.spotId) && shot.shotRole === 'B-Roll';
  const isMirror = Boolean(shot.mirrorShot || shot.shotTypeId === 'ots_mirror');

  const fgDist = payload.foregroundProp?.distanceFromCameraM ?? 0.48;
  const startCoCFgPx = payload.foregroundProp
    ? computeOpticalCoCPixels({
        focalMm: shot.focalLengthMm,
        apertureFStop: shot.apertureFStop,
        focusDistM: payload.dof.startFocusDistM,
        sampleDistM: fgDist,
        sensorHeightMm: gate.sensorHeightMm,
        imageHeightPx: imgH
      })
    : 0;
  const startCoCBgPx = computeOpticalCoCPixels({
    focalMm: shot.focalLengthMm,
    apertureFStop: shot.apertureFStop,
    focusDistM: payload.dof.startFocusDistM,
    sampleDistM: payload.dof.startFocusDistM + 3.2,
    sensorHeightMm: gate.sensorHeightMm,
    imageHeightPx: imgH
  });
  const endCoCBgPx = computeOpticalCoCPixels({
    focalMm: shot.focalLengthMm,
    apertureFStop: shot.apertureFStop,
    focusDistM: payload.dof.endFocusDistM,
    sampleDistM: payload.dof.endFocusDistM + 3.2,
    sensorHeightMm: gate.sensorHeightMm,
    imageHeightPx: imgH
  });

  return {
    pipelineVersion: 'alina-render2real-v2.1',
    baseModel: 'flux1-dev.safetensors',
    sampler: { name: 'dpmpp_2m', scheduler: 'beta', steps: 28, fluxGuidance: 3.2 },
    pairedKeyframeLock: {
      enabled: keyframeStrategy.exportEndFrame,
      sharedSeed: 84729104,
      sharedSelfAttentionFromStart: keyframeStrategy.exportEndFrame,
      lockedDepthMeters: payload.depthBoundsM
    },
    globalStage1A: {
      denoise: isWater ? 0.32 : 0.56,
      preLuminanceFilmGrain: gear.filmGrain,
      prompt: payload.prompts.fluxClean || payload.prompts.flux,
      controlNets: {
        depth: {
          model: 'FLUX.1-dev-ControlNet-Union-Pro-2.0',
          inputPass: 'depth',
          preprocessor: 'NONE_RAW_METRIC_16BIT',
          strength: isMirror ? 0.35 : 0.68,
          startPercent: 0.0,
          endPercent: isMirror ? 0.42 : 0.58,
          regionalMultipliers: {
            environment: 1.0,
            skin: 0.85,
            hair: 0.65,
            foreground: 0.30,
            mirror: 0.35
          }
        },
        normals: {
          model: 'FLUX.1-dev-ControlNet-Union-Pro-2.0',
          inputPass: 'normals',
          preprocessor: 'NONE_VIEWSPACE_NORMAL',
          strength: 0.42,
          startPercent: 0.0,
          endPercent: 0.45,
          regionalMultipliers: {
            environment: 1.0,
            wardrobe: 0.55,
            skin: 0.20,
            eyes: 0.0,
            hair: 0.0,
            foreground: 0.0,
            mirror: 0.0
          }
        },
        openPose: {
          enabled: shot.shotRole === 'A-Roll',
          inputPass: 'openpose',
          strength: 0.75,
          startPercent: 0.0,
          endPercent: 0.50
        }
      },
      kelvinChrominanceLock: {
        enabled: true,
        referencePass: 'beauty',
        colorSpace: 'CIELAB_AB_ONLY',
        blendStrength: 0.55,
        kelvinKey: payload.realtimeRig.keyLight.kelvin,
        kelvinRim: payload.realtimeRig.rimLight.kelvin
      }
    },
    identityStage1B: {
      enabled: shot.shotRole === 'A-Roll',
      targetSemanticMasks: isMirror ? ['mirror'] : ['skin', 'eyes'],
      cropResolution: 1024,
      cropPaddingPx: 64,
      denoise: 0.36,
      lora: { file: 'alina_vandijk_v2.safetensors', strengthModel: 0.85, strengthClip: 0.80 },
      pulidFlux: { enabled: true, referenceImage: 'alina_master_id.png', weight: 0.75, endAt: 0.80 },
      hairRefinementPass: {
        targetSemanticMasks: ['hair'],
        denoise: 0.46,
        promptAppend: 'individual copper red hair strands (#9E3D24 to #C26733), anisotropic rim sheen, zero plastic helmet clump'
      }
    },
    opticalCoCStage1C: {
      enabled: true,
      focalMm: shot.focalLengthMm,
      apertureFStop: shot.apertureFStop,
      startFocusDistM: payload.dof.startFocusDistM,
      endFocusDistM: payload.dof.endFocusDistM,
      estimatedBlurRadiusPx1920: {
        startForegroundPropPx: startCoCFgPx,
        startBackground3mPx: startCoCBgPx,
        endBackground3mPx: endCoCBgPx
      }
    },
    semanticPalette: SEMANTIC_MASK_PALETTE
  };
}

/**
 * Ensambla el manifiesto maestro Higgsfield Pack completo para un plano resuelto.
 */
export function buildHiggsfieldManifest({ shot, spot, payload, catalog, sceneId = null, aspectRatio: aspectOverride = null }) {
  const aspectRatio = aspectOverride || payload?.aspectRatio || '9:16';
  const resTag = aspectRatio === '16:9' ? '1920x1080' : '1080x1920';
  const baseGear = DIRECTOR_GEAR_MAP[shot.directorStyleId] || DIRECTOR_GEAR_MAP.fincher_cronenweth;
  const isMacroBroll = shot.shotRole === 'B-Roll' && shot.focalLengthMm >= 95;
  const lensProfile = isMacroBroll ? 'laowa_macro' : baseGear.lensProfile;
  const lensLabel = isMacroBroll ? 'Laowa 100mm f/2.8 Macro 1:1' : baseGear.lensLabel;

  const keyframeStrategy = resolveKeyframeStrategy({ shot, payload });
  const moveSpec = resolveHiggsfieldMove({ shot, keyframeMode: keyframeStrategy.mode, catalog });
  const structuredPrompt = compileHiggsfieldStructuredPrompt({ shot, spot, payload, catalog });
  const comfyJob = buildComfyRenderToRealJob({ shot, spot, payload, catalog, keyframeStrategy });

  const hfDurationGen = shot.durationSec <= 3.0 ? 3 : 5;
  const startFile = `frames_higgsfield_ready/start_real_${resTag}.png`;
  const endFile = keyframeStrategy.exportEndFrame ? `frames_higgsfield_ready/end_real_${resTag}.png` : null;

  return {
    schemaVersion: '2.2.0',
    generatedAt: new Date().toISOString(),
    sceneId,
    shotId: shot.shotId,
    spotId: shot.spotId,
    spotName: spot?.name || shot.spotId,
    shotRole: shot.shotRole,
    aspectRatio,
    engine: 'Three.js Metric 1:1 Previz (Single-Source)',
    zeroWasteAudit: payload.zeroWaste,
    keyframeStrategy: {
      mode: keyframeStrategy.mode,
      exportEndFrame: keyframeStrategy.exportEndFrame,
      reason: keyframeStrategy.reason,
      startFrameFile: startFile,
      endFrameFile: endFile,
      overscanHandheldPost: keyframeStrategy.overscanHandheldPost
    },
    higgsfieldCinemaStudio: {
      endpoint: 'higgsfield/cinema-studio/4.0',
      aspectRatio,
      resolution: '1080p',
      durationGenerateSec: hfDurationGen,
      editorialTrimSec: shot.durationSec,
      cameraProfile: baseGear.cameraProfile,
      cameraLabel: baseGear.cameraLabel,
      lensProfile,
      lensLabel,
      focalLength: quantizeHiggsfieldFocal(shot.focalLengthMm),
      solverExactFocalMm: shot.focalLengthMm,
      aperture: `f/${shot.apertureFStop}`,
      cameraMovement: moveSpec.cameraMovement,
      uiPresetLabel: moveSpec.uiPresetLabel,
      speedRamp: moveSpec.speedRamp,
      motionIntensity: moveSpec.motionIntensity,
      antiDuplicationLock: moveSpec.antiDuplicationLock,
      operatorChecklist: moveSpec.operatorNote
    },
    structuredPrompt,
    opticsTelemetry: {
      sensorGateMm: sensorGateFor(catalog, aspectRatio),
      verticalFovDeg: payload.camera.verticalFovDeg,
      startPosM: payload.camera.startPos,
      endPosM: payload.camera.endPos,
      startFocusDistM: payload.dof.startFocusDistM,
      endFocusDistM: payload.dof.endFocusDistM,
      depthBoundsLockedM: payload.depthBoundsM,
      kelvinKey: payload.realtimeRig.keyLight.kelvin,
      kelvinRim: payload.realtimeRig.rimLight.kelvin,
      mirrorShot: Boolean(shot.mirrorShot),
      foregroundProp: payload.foregroundProp
    },
    raw3DPasses: {
      start: {
        beauty: `frames_3d_raw/start_beauty_${resTag}.png`,
        depth: `frames_3d_raw/start_depth_${resTag}.png`,
        normals: `frames_3d_raw/start_normals_${resTag}.png`,
        mask: `frames_3d_raw/start_mask_${resTag}.png`,
        openposePng: shot.shotRole === 'A-Roll' ? `frames_3d_raw/start_openpose_${resTag}.png` : null,
        openposeJson: shot.shotRole === 'A-Roll' ? 'frames_3d_raw/start_openpose.json' : null
      },
      end: keyframeStrategy.exportEndFrame
        ? {
            beauty: `frames_3d_raw/end_beauty_${resTag}.png`,
            depth: `frames_3d_raw/end_depth_${resTag}.png`,
            normals: `frames_3d_raw/end_normals_${resTag}.png`,
            mask: `frames_3d_raw/end_mask_${resTag}.png`,
            openposePng: shot.shotRole === 'A-Roll' ? `frames_3d_raw/end_openpose_${resTag}.png` : null,
            openposeJson: shot.shotRole === 'A-Roll' ? 'frames_3d_raw/end_openpose.json' : null
          }
        : null
    },
    renderToRealComfyJob: comfyJob
  };
}
