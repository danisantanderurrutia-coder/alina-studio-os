// Generador de prompts Flux.1 Dev y Higgsfield I2V directamente desde capturas reales
// del visor 3D (Motor A: Three.js WebGL y Motor B: Unity 6 URP WebGL).

const TOKEN_LOCK =
  '28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles across nose, subtle crimson lips, realistic skin micro-pores';

const POSE_DESCRIPTORS = {
  Idle: {
    still: 'standing poised with relaxed confident posture, subtle gaze toward lens',
    motion: 'subtle natural breathing, slow soft blink, gentle copper hair micro-movement, slight weight shift'
  },
  Walk: {
    still: 'mid-stride walking forward with poised runway posture and natural movement',
    motion: 'smooth confident slow walk forward, natural hip and shoulder sway, copper hair flowing gently with each step'
  },
  Rumba: {
    still: 'expressive sensual dance posture, sculpted silhouette and graceful arm line',
    motion: 'fluid rhythmic rumba sway, smooth hip and torso articulation, hair catching warm rim light'
  },
  Laying: {
    still: 'reclining gracefully in relaxed boudoir lounge pose, calm magnetic gaze',
    motion: 'calm reclined breathing, subtle slow head tilt, soft eye blink, fabric settling naturally'
  },
  HipHop: {
    still: 'dynamic contemporary urban dance stance with grounded energy',
    motion: 'controlled rhythmic groove, subtle shoulder and head bounce on beat, natural hair motion'
  }
};

const PRESET_FRAMING = {
  '85mm': { shot: 'medium portrait shot', angle: 'eye-level angle', mm: 85 },
  reset: { shot: 'medium portrait shot', angle: 'eye-level angle', mm: 85 },
  macro: { shot: 'intimate close-up detail shot', angle: 'slightly high macro angle', mm: 100 },
  top: { shot: 'overhead editorial shot', angle: 'top-down cenital angle', mm: 35 },
  dollhouse: { shot: 'architectural cross-section wide shot', angle: 'elevated three-quarter angle', mm: 28 },
  overview: { shot: 'establishing architectural exterior-interior wide shot', angle: 'high three-quarter drone angle', mm: 24 }
};

function dist3(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

/**
 * Calcula tipo de plano, ángulo vertical y focal equivalente desde telemetría 3D o preset de Unity.
 */
export function describeCaptureFraming({ camera, spot, camPreset = '85mm', cinemaShot = null }) {
  if (cinemaShot) {
    return {
      shot: cinemaShot.shotLabel || 'cinematic medium close-up',
      angle: cinemaShot.angleLabel || 'eye-level angle',
      mm: cinemaShot.focalLengthMm || 85,
      distance: camera?.position ? Number(dist3(camera.position, spot.alinaPos).toFixed(2)) : 2.8,
      elevationDeg: 0,
      source: 'Director de Fotografía'
    };
  }

  if (camera && !camera.approximate && camera.position && camera.target) {
    const head = { x: spot.alinaPos.x, y: spot.alinaPos.y + 1.45, z: spot.alinaPos.z };
    const d = dist3(camera.position, head);
    const horiz = Math.hypot(camera.position.x - camera.target.x, camera.position.z - camera.target.z) || 0.001;
    const elevDeg = (Math.atan2(camera.position.y - camera.target.y, horiz) * 180) / Math.PI;

    let shot;
    if (d < 1.35) shot = 'extreme close-up';
    else if (d < 2.35) shot = 'close-up portrait';
    else if (d < 4.4) shot = 'medium shot';
    else if (d < 9.0) shot = 'full-body wide shot';
    else shot = 'architectural establishing wide shot';

    let angle;
    if (elevDeg > 45) angle = 'top-down overhead angle';
    else if (elevDeg > 14) angle = 'slightly high angle';
    else if (elevDeg < -12) angle = 'low heroic angle';
    else angle = 'eye-level angle';

    const fov = camera.fov_deg || 45;
    const mm = Math.max(18, Math.min(135, Math.round(18 / Math.tan((fov * Math.PI) / 360))));

    return {
      shot,
      angle,
      mm,
      distance: Number(d.toFixed(2)),
      elevationDeg: Math.round(elevDeg),
      source: 'Cámara 3D en vivo'
    };
  }

  const preset = PRESET_FRAMING[camPreset] || PRESET_FRAMING['85mm'];
  const d = camera?.position ? Number(dist3(camera.position, spot.alinaPos).toFixed(2)) : 3.0;
  return {
    ...preset,
    distance: d,
    elevationDeg: camPreset === 'top' ? 72 : 4,
    source: `Unity 6 URP (${camPreset})`
  };
}

/**
 * Analiza el PNG capturado (Unity 6 URP o Three.js) para medir clave lumínica, contraste y balance cálido/frío.
 */
export function analyzeCapturedImage(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const w = 72;
        const h = 128;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, w, h);
        const { data } = ctx.getImageData(0, 0, w, h);

        let sumLum = 0;
        let darkPx = 0;
        let brightPx = 0;
        let sumR = 0;
        let sumB = 0;
        const total = w * h;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          sumLum += lum;
          sumR += r;
          sumB += b;
          if (lum < 42) darkPx++;
          if (lum > 205) brightPx++;
        }

        const avgLum = Math.round(sumLum / total);
        const shadowPct = Math.round((darkPx / total) * 100);
        const highlightPct = Math.round((brightPx / total) * 100);
        const warmth = (sumR - sumB) / total;

        let keyDescriptor;
        if (avgLum < 68 && shadowPct > 45) {
          keyDescriptor = 'deep low-key chiaroscuro contrast with sculpted rim highlights';
        } else if (avgLum < 115) {
          keyDescriptor = 'moody cinematic mid-low key lighting with soft practical falloff';
        } else if (avgLum < 165) {
          keyDescriptor = 'balanced natural architectural lighting with gentle specular depth';
        } else {
          keyDescriptor = 'bright luminous high-key daylight with airy reflections';
        }

        const toneDescriptor =
          warmth > 18
            ? 'warm amber-copper tungsten & golden tones'
            : warmth < -10
              ? 'cool moonlight slate-blue & silver atmosphere'
              : 'neutral cinema color grading with warm skin tones';

        resolve({
          avgLum,
          shadowPct,
          highlightPct,
          warmth: Math.round(warmth),
          keyDescriptor,
          toneDescriptor,
          summary: `Lum ${avgLum}/255 · Sombras ${shadowPct}% · ${warmth > 12 ? 'Cálido' : warmth < -8 ? 'Frío' : 'Neutro'}`
        });
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
}

/**
 * Construye el prompt de imagen (Flux.1 Dev 4K / ControlNet Depth) a partir de la captura real.
 */
export function buildFluxPromptFromCapture({
  spot,
  floorName,
  anim,
  lightingMode,
  framing,
  imageMetrics,
  depthPass,
  attachedObjects = [],
  wardrobe = null
}) {
  const pose = POSE_DESCRIPTORS[anim]?.still || POSE_DESCRIPTORS.Idle.still;
  const baseLight =
    lightingMode === 'day'
      ? 'warm golden hour sunlight streaming through architectural glass'
      : 'intimate nocturnal chiaroscuro with warm practical lamps';
  const measuredLight = imageMetrics
    ? `${imageMetrics.keyDescriptor}, ${imageMetrics.toneDescriptor}`
    : baseLight;

  // Limpia prefijos de lente fijos del prompt base del spot para evitar contradicciones con el encuadre real capturado
  const cleanSpotContext = spot.prompt
    .replace(/^Cinematic\s+\d+mm\s+[^,]+,\s*/i, '')
    .replace(/^Cinematic\s+(medium|wide|close-up|overhead)[^,]*shot\s+of\s+/i, '');

  const depthNote = depthPass
    ? '[ControlNet Depth 9:16 lock active] '
    : '';

  const wardrobeClause = wardrobe?.fluxTokens ? `, ${wardrobe.fluxTokens}` : '';

  const objectsClause =
    Array.isArray(attachedObjects) && attachedObjects.length > 0
      ? ` Featured Higgsfield reference objects (${attachedObjects.map((o) => o.handle).join(', ')}): ${attachedObjects
          .map((o) => o.promptToken)
          .join('; ')}.`
      : '';

  return `${depthNote}Cinematic ${framing.shot}, ${framing.angle}, shot on ARRI Alexa 35 ${framing.mm}mm prime lens, shallow depth of field, vertical 9:16 composition. ${TOKEN_LOCK}${wardrobeClause}, ${pose}, located at ${spot.name} (${floorName}).${objectsClause} ${measuredLight}, ${baseLight}. Scene reference: ${cleanSpotContext}`.replace(/\s+/g, ' ').trim();
}

/**
 * Construye el prompt de movimiento (Higgsfield I2V / Kling Zero-Waste) sincronizado con la captura.
 */
export function buildHiggsfieldMotionFromCapture({
  anim,
  framing,
  motionStrength = 2.5,
  motionEngine = 'higgsfield',
  cinemaMoveLabel = null,
  wardrobe = null
}) {
  const action = POSE_DESCRIPTORS[anim]?.motion || POSE_DESCRIPTORS.Idle.motion;
  const fabricPhysics = wardrobe?.higgsfieldPhysics ? ` Wardrobe physics: ${wardrobe.higgsfieldPhysics}.` : '';

  let camMove;
  if (cinemaMoveLabel) {
    camMove = cinemaMoveLabel;
  } else if (framing.mm >= 90 || framing.distance < 2.2) {
    camMove = 'locked-off tripod with imperceptible 2% micro push-in, crisp focus locked on emerald eyes';
  } else if (framing.angle.includes('top-down')) {
    camMove = 'ultra-slow overhead boom descent, smooth stabilized gimbal';
  } else if (framing.distance > 7.5) {
    camMove = 'slow architectural dolly-in revealing spatial depth';
  } else {
    camMove = 'smooth stabilized 3% slow dolly push-in maintaining framing';
  }

  const lipRule =
    motionEngine === 'liveportrait'
      ? 'Mouth gently closed, no talking (prepared for LivePortrait audio sync).'
      : 'Mouth closed, no talking, zero facial distortion, locked identity.';

  return `${action}.${fabricPhysics} Camera: ${camMove}, ${framing.angle}, ${framing.mm}mm lens feel. ${lipRule} Temporal consistency, natural physics, Higgsfield motion strength ${Number(motionStrength).toFixed(1)}.`;
}
