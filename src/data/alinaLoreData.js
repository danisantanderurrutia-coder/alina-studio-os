// Datos maestros de personaje, bóveda semilla de Objetos (Zero-Face B-Roll),
// doctrina Zero-Waste y arco narrativo por capítulos importados de LMNJDRS.

export const ALINA_CHARACTER_BIBLE = {
  name: 'Alina Van Dijk',
  age: '28 años',
  origin: 'Ámsterdam (Países Bajos) ➔ Barcelona & Tulum',
  niche: 'Sexología Clínica, Dominatrix Consciente & Erotismo Terapéutico (SSC)',
  archetype: 'The Elegant Dominatrix & Sex-Positive Mentor (Magnética, intelectual, firme y empática)',
  avatar: './alina_avatar.jpg',
  tagline: 'Exploración del deseo sin culpa, dominación psicológica elegante y descanso mental.',
  story:
    'Nacida en Ámsterdam de madre neerlandesa y padre de raíces latinas, y radicada entre su estudio loft de Barcelona y retiros sensoriales en Tulum. Formada en sexología clínica y dinámicas de poder consensuadas (SSC: Sano, Seguro y Consensuado), Alina descubrió que ceder el control en un espacio seguro es una de las válvulas terapéuticas más potentes frente al agotamiento ejecutivo y el exceso de decisiones diarias.',
  voice: {
    id: 'Alina-Hypno-v1',
    provider: 'ElevenLabs (Inflexión Susurrada Íntima)',
    pitch: 0.98,
    rate: 0.95,
    sample:
      '«Respira hondo y suelta el control. No hay nada oscuro en tus fantasías cuando hay consentimiento y respeto. Aquí estás a salvo para dejar de decidir.»'
  },
  consistencyLock: {
    hair: 'Pelirrojo cobrizo intenso con ondas naturales suaves o moño alto con mechones sueltos',
    eyes: 'Verde esmeralda penetrante con pestañas definidas',
    skin: 'Pecas naturales sobre puente nasal y pómulos, micro-poros reales sin suavizado plástico',
    lips: 'Labios naturales con tinte mate carmesí sutil y leve expresión segura (smirk +0.15)',
    tokenSnippet:
      '28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles dusting the bridge of nose and upper cheeks, full naturally pigmented crimson lips, authentic photorealistic skin texture with visible micro-pores, refined facial bone structure, magnetic and commanding yet empathetic gaze',
    negativeTokens:
      'deformed, extra fingers, cartoon, plastic skin, airbrushed, blur, cross-eyed, bad anatomy, third arm, fused limbs, distorted ears, talking mouth distortion'
  },
  funnel: [
    { stage: '1. Atracción SFW (X / Instagram / Reels)', desc: 'Reflexiones psicológicas sobre control, fatiga de decisión y clips cortos 9:16 con estética editorial.' },
    { stage: '2. Puente Sensorial (Telegram)', desc: 'Micro-audios binaurales 3D susurrados, detrás de escenas y estrenos de capítulos.' },
    { stage: '3. Círculo Privado (Fanvue VIP)', desc: 'Capítulos completos, sesiones de audio inmersivo y experiencias personalizadas.' }
  ],
  masterPromptScenes: [
    {
      id: 'loft_editorial',
      label: '🖤 Dominatrix Elegante Studio (Chiaroscuro)',
      aspect: '9:16 / 16:9',
      prompt:
        'Cinematic moody studio portrait of 28yo Dutch-Latin woman Alina Van Dijk wearing sleek black leather corset and tailored brass-ring choker, vivid copper red hair, emerald green eyes, natural freckles, intense commanding yet warm gaze, chiaroscuro lighting, deep shadows, 85mm f/1.4 lens, 8k photographic master --ar 9:16'
    },
    {
      id: 'tropical_day',
      label: '🌴 Retiro Sensorial Diurno (Luz Natural)',
      aspect: '4:5 / 9:16',
      prompt:
        'Close-up sensual portrait of 28yo redhead woman Alina Van Dijk with freckled skin, vivid emerald green eyes, crimson lips, copper hair in a high bun with loose strands, wearing minimalist black linen bikini, lush tropical foliage in soft bokeh background, natural dappled golden sunlight, realistic skin pores, 85mm lens --ar 4:5'
    },
    {
      id: 'still_life_broll',
      label: '💎 Bodegón B-Roll Zero-Face (0 Créditos Rostro)',
      aspect: '9:16 / 16:9',
      prompt:
        'Cinematic close-up still life of a handcrafted sleek black leather choker with warm brass ring resting on dark silk sheets beside an open vintage clinical sexology notebook and a steaming espresso cup, moody warm candlelight, deep shadows, 100mm macro lens, 8k photographic master, no humans --ar 9:16'
    }
  ]
};

export const ZERO_WASTE_DOCTRINE = [
  { num: '01', severity: 'Crítica', rule: 'Entrada Limpia 2K+', desc: 'Jamás animar en Higgsfield una imagen base con dedos dudosos o resolución baja; el video multiplica x10 cualquier fallo.' },
  { num: '02', severity: 'Crítica', rule: 'Ángulo Ciego < 25°', desc: 'No pedir giros de cabeza mayores a 25° respecto al encuadre inicial para evitar pérdida de identidad facial.' },
  { num: '03', severity: 'Alta', rule: 'Motion Strength 2.0–3.5', desc: 'Mantener el slider entre 2.0 y 3.5 en planos con rostro. Por encima de 4.0 se degrada la geometría facial.' },
  { num: '04', severity: 'Alta', rule: 'Cuerpo Estable, Cámara Móvil', desc: 'Priorizar slow dolly push-in o rack focus sobre desplazamientos largos del personaje.' },
  { num: '05', severity: 'Crítica', rule: 'Blindaje de Manos', desc: 'Evitar que las manos crucen el rostro o se entrelacen en movimiento; apoyarlas en superficies o sujetar un objeto fijo.' },
  { num: '06', severity: 'Media', rule: 'Fórmula 1:2 con Objetos B-Roll', desc: '1 plano de Alina (3.5s) + 2 planos de Objetos/Accesorios (Zero-Face) = máxima retención y 70% menos gasto de créditos.' },
  { num: '07', severity: 'Alta', rule: 'Micro-Tomas de 2.5 a 4s', desc: 'Cortar antes del segundo 4.0 elimina la deriva temporal de fondo y da ritmo cinematográfico.' },
  { num: '08', severity: 'Crítica', rule: 'Boca Cerrada en Higgsfield', desc: 'Nunca pedir «she talks» en I2V. Generar con labios cerrados y aplicar lipsync dedicado en LivePortrait / Hedra.' }
];

export const PREFLIGHT_CHECKLIST = [
  'Imagen base revisada en manos, ojos y simetría antes de animar (Regla 01)',
  'Motion Strength fijado entre 2.0 y 3.5 (Regla 03)',
  'Manos apoyadas o sujetando prop sin cruzar el rostro (Regla 05)',
  'Duración por clip acotada entre 2.5s y 4.0s (Regla 07)',
  'Objetos B-Roll Zero-Face seleccionados para montaje 1:2 (Regla 06)',
  'Boca cerrada en prompt de video si lleva voz de ElevenLabs (Regla 08)'
];

export const OBJECT_CATEGORIES = [
  'Todos',
  'Cuero & Fetish',
  'Café & Lifestyle',
  'Intelecto & Estudio',
  'Sensorial & Spa',
  'Audio & Set',
  'Vestuario & Joyas'
];

// Genera una miniatura SVG elegante para objetos semilla mientras el usuario sube o captura su render real
function makeSeedObjectSvg(emoji, title, subtitle, accentHex) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="540" viewBox="0 0 540 540">
    <defs>
      <radialGradient id="g" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="${accentHex}" stop-opacity="0.34"/>
        <stop offset="100%" stop-color="#090a0f" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <rect width="540" height="540" fill="url(#g)"/>
    <rect x="24" y="24" width="492" height="492" rx="28" fill="none" stroke="${accentHex}" stroke-opacity="0.35" stroke-width="2"/>
    <text x="270" y="225" text-anchor="middle" font-size="108">${emoji}</text>
    <text x="270" y="320" text-anchor="middle" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="700">${title}</text>
    <text x="270" y="356" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="16">${subtitle}</text>
    <text x="270" y="468" text-anchor="middle" fill="${accentHex}" font-family="monospace" font-size="14">SUBE TU RENDER O CAPTURA DESDE 3D</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const SEED_OBJECTS = [
  {
    id: 'obj-cuero-choker',
    name: 'Gargantilla & Antifaz de Cuero Negro',
    handle: '@cuero_choker',
    category: 'Cuero & Fetish',
    floor: 3,
    spotId: 'boudoir',
    image: makeSeedObjectSvg('🖤', 'Gargantilla & Antifaz', '@cuero_choker • Piso 3 Boudoir', '#c86446'),
    isPlaceholderImage: true,
    promptToken:
      'handcrafted sleek black satin-finish leather choker with polished warm brass O-ring and matching black velvet blindfold resting on dark charcoal silk sheets',
    motionPrompt:
      'Subtle flickering warm candle flame reflections glinting across polished brass O-ring and black leather grain, slow macro push-in, no people, motion strength 2.2',
    usage: 'Plano B-Roll de tensión elegante entre miradas de Alina o prop equipado en escenas de Boudoir (Cap. 3).'
  },
  {
    id: 'obj-espresso-diario',
    name: 'Espresso Doble & Cuaderno de Sexología',
    handle: '@espresso_diario',
    category: 'Café & Lifestyle',
    floor: 1,
    spotId: 'cafe',
    image: makeSeedObjectSvg('☕', 'Espresso & Diario Clínico', '@espresso_diario • Piso 1/2', '#f59e0b'),
    isPlaceholderImage: true,
    promptToken:
      'matte black ceramic espresso cup with rich golden crema beside an open leatherbound clinical sexology notebook with fountain pen and tortoiseshell glasses on dark marble table',
    motionPrompt:
      'Delicate wisps of white steam rising slowly from the hot espresso crema, soft morning light shifting across notebook pages, locked macro tripod, motion strength 2.0',
    usage: 'Apertura o cierre reflexivo para capítulos matutinos y reels confesionales (Cap. 1 y Cap. 2).'
  },
  {
    id: 'obj-libros-whisky',
    name: ' Manuales Clínicos & Vaso Ámbar',
    handle: '@libros_whisky',
    category: 'Intelecto & Estudio',
    floor: 3,
    spotId: 'podcast',
    image: makeSeedObjectSvg('📚', 'Biblioteca & Vaso Ámbar', '@libros_whisky • Piso 3 Estudio', '#10b981'),
    isPlaceholderImage: true,
    promptToken:
      'stack of vintage clothbound psychoanalysis and clinical sexology books on dark walnut desk next to a cut-crystal tumbler with amber liquor catching warm Edison lamp light',
    motionPrompt:
      'Slow cinematic rack focus from gilded vintage book spines to warm amber reflections inside crystal glass, subtle dust motes in lamp beam, motion strength 2.2',
    usage: 'Refuerza autoridad intelectual en «The Mind Sanctuary» durante monólogos de podcast (Cap. 1).'
  },
  {
    id: 'obj-shibari-aceite',
    name: 'Cuerdas de Seda & Frasco de Aceite Ámbar',
    handle: '@shibari_aceite',
    category: 'Sensorial & Spa',
    floor: 2,
    spotId: 'bath',
    image: makeSeedObjectSvg('🪶', 'Seda & Aceite Botánico', '@shibari_aceite • Piso 2 Spa', '#ec4899'),
    isPlaceholderImage: true,
    promptToken:
      'coiled obsidian and muted plum silk ropes arranged neatly on raw natural linen beside an amber glass dropper bottle of botanical massage oil and a soft dark feather',
    motionPrompt:
      'Ultra-slow macro slider glide over braided silk texture, warm spa candlelight catching the amber glass dropper, serene atmosphere, motion strength 2.0',
    usage: 'B-Roll táctil ideal para acompañar audios binaurales 3D de respiración y entrega sensorial (Cap. 2 y 3).'
  },
  {
    id: 'obj-shure-sm7b',
    name: 'Micrófono Shure SM7B en Brazo Articulado',
    handle: '@mic_sm7b',
    category: 'Audio & Set',
    floor: 3,
    spotId: 'podcast',
    image: makeSeedObjectSvg('🎙️', 'Shure SM7B Broadcast', '@mic_sm7b • Piso 3 Podcast', '#38bdf8'),
    isPlaceholderImage: true,
    promptToken:
      'professional matte-black Shure SM7B dynamic broadcast microphone mounted on articulated studio boom arm in foreground soft bokeh with warm copper rim light',
    motionPrompt:
      'Subtle shallow depth-of-field focus pull past the matte black microphone capsule toward warm studio background glow, stationary camera, motion strength 2.0',
    usage: 'Objeto de encuadre en primer plano (Foreground Bokeh) para confesionarios y capítulos de voz.'
  },
  {
    id: 'obj-busto-marmol',
    name: 'Busto Clásico de Mármol & Enciclopedias',
    handle: '@busto_marmol',
    category: 'Intelecto & Estudio',
    floor: 3,
    spotId: 'podcast',
    image: makeSeedObjectSvg('🏛️', 'Busto Clásico & Libros', '@busto_marmol • Piso 3 Podcast', '#f29979'),
    isPlaceholderImage: true,
    promptToken:
      'classical sculpted white marble bust on dark walnut pedestal beside leatherbound psychoanalysis encyclopedias illuminated by warm tungsten brick-wall sconce',
    motionPrompt:
      'Slow 100mm macro rack focus from sculpted marble bust profile to gilded book spines under warm Edison wall glow, no humans, motion strength 2.0',
    usage: 'Hero Prop 3D esculpido para B-Roll de autoridad intelectual en «The Mind Sanctuary».'
  },
  {
    id: 'obj-camara-reloj',
    name: 'Cámara Analógica & Reloj de Chimenea',
    handle: '@camara_reloj',
    category: 'Intelecto & Estudio',
    floor: 3,
    spotId: 'podcast',
    image: makeSeedObjectSvg('📷', 'Cámara & Reloj Estudio', '@camara_reloj • Piso 3 Mesa', '#eab308'),
    isPlaceholderImage: true,
    promptToken:
      'vintage brass-trimmed wooden mantel clock and classic analog rangefinder camera beside porcelain espresso cup on dark walnut desk',
    motionPrompt:
      'Warm Edison desk lamp light glinting softly across vintage camera lens glass and polished brass clock bezel, locked 100mm macro, motion strength 2.1',
    usage: 'B-Roll 1:2 sobre el escritorio clínico de nogal en Piso 3.'
  },
  {
    id: 'obj-copas-laton-bar',
    name: 'Copas Rituales de Latón & Candelabros',
    handle: '@copas_laton',
    category: 'Café & Lifestyle',
    floor: 4,
    spotId: 'bar',
    image: makeSeedObjectSvg('🏆', 'Copas Talladas Latón', '@copas_laton • Piso 4 / PB', '#d97706'),
    isPlaceholderImage: true,
    promptToken:
      'ornate polished brass goblets beside flickering brass candleholders and backlit amber liquor bottles on hammered copper bar counter',
    motionPrompt:
      'Subtle lateral 100mm macro slider across gleaming brass goblets with warm candlelight bokeh twinkling behind, no people, motion strength 2.2',
    usage: 'B-Roll nocturno de lujo para Barra Botánica (Piso 4), Boudoir (Piso 3) y VIP Cabaret (PB).'
  }
];

export const NARRATIVE_ARC = {
  serieTitle: 'El Arte de Ceder el Control',
  tagline: 'De la fatiga ejecutiva al descanso mental y el placer consciente',
  route: 'Ámsterdam ➔ Barcelona (Santuario 5 Niveles) ➔ Retiro Sensorial',
  thesis:
    'Una serie cinematográfica episódica en formato vertical 9:16 donde cada capítulo explora la psicología de soltar el mando: combinando encuadres reales del Santuario 3D, objetos simbólicos recurrentes (B-Roll 1:2) y la voz hipnótica de Alina.'
};

export const SEED_CHAPTERS = [
  {
    id: 'chap-1',
    number: 1,
    week: 'Acto I · Capítulo 1',
    title: 'La Sobrecarga de Decidir',
    subtitle: 'Fascinación intelectual y el descanso de soltar el mando',
    status: '🟢 Listo para Rodaje',
    floor: 3,
    spotId: 'podcast',
    lightingMode: 'night',
    format: 'Podcast Confesional 9:16',
    synopsis:
      'Alina abre la serie en su estudio nocturno del Piso 3 («The Mind Sanctuary»). Expone cómo quienes toman miles de decisiones bajo presión durante el día buscan en secreto un espacio seguro donde otra mente firme decida por ellos.',
    hook:
      '«Hoy tomaste demasiadas decisiones difíciles por otros. Esta noche... decide no decidir nada. Cierra los ojos y deja que mi voz se encargue de todo.»',
    audioTone: 'Voz pausada, cercana y confesional (Pitch 0.98 | Rate 0.95). Silencio de 1.5s tras la primera frase.',
    directorNotes:
      'Arrancar con plano detalle de @libros_whisky (2.5s), cortar a plano medio 85mm de Alina frente a @mic_sm7b con empuje lento (3.5s) y cerrar con @espresso_diario.',
    linkedObjectIds: ['obj-libros-whisky', 'obj-shure-sm7b'],
    linkedShotIds: []
  },
  {
    id: 'chap-2',
    number: 2,
    week: 'Acto I · Capítulo 2',
    title: 'Respira Conmigo: Apaga el Ruido',
    subtitle: 'Desconexión sensorial a través del cuerpo y la respiración',
    status: '🟡 En Pre-Producción',
    floor: 2,
    spotId: 'bath',
    lightingMode: 'day',
    format: 'Guía Sensorial & B-Roll Táctil',
    synopsis:
      'El ruido analítico no se apaga pensando más, sino bajando al cuerpo. Desde el Spa privado y la luz cálida de la residencia (Piso 2), Alina guía una secuencia rítmica de respiración mientras el agua y los aceites marcan el tempo visual.',
    hook:
      '«Inhala despacio conmigo... uno, dos, tres, cuatro. Suelta el aire. ¿Notas cómo caen tus hombros cuando dejas de pelear contra el reloj? Quédate ahí.»',
    audioTone: 'Susurro binaural muy próximo al oído, respiración audible, cadencia hipnótica lenta.',
    directorNotes:
      'Usar luz dorada rasante. Alternar plano cenital/lateral suave en el Spa con macros táctiles de @shibari_aceite y reflejos de agua.',
    linkedObjectIds: ['obj-shibari-aceite', 'obj-espresso-diario'],
    linkedShotIds: []
  },
  {
    id: 'chap-3',
    number: 3,
    week: 'Acto II · Capítulo 3',
    title: 'La Regla del Poder Consensuado',
    subtitle: 'Tensión chiaroscuro y la arquitectura de la obediencia',
    status: '⚪ En Escritura',
    floor: 3,
    spotId: 'boudoir',
    lightingMode: 'night',
    format: 'Ficción Psicológica Boudoir',
    synopsis:
      'La narrativa entra en el Boudoir chiaroscuro del Piso 3. Alina revela la paradoja del consentimiento: quien obedece voluntariamente no pierde poder, sino que firma las reglas de su propia liberación.',
    hook:
      '«No te intimida obedecerme. Te intimida reconocer la paz que sientes cuando por fin alguien sostiene las riendas sin dudar. Mírame.»',
    audioTone: 'Voz firme, magnética, autoridad serena con pausas dramáticas de 2 segundos.',
    directorNotes:
      'Iluminación de vela 2200K de alto contraste. Abrir fuera de foco sobre @cuero_choker en primer plano antes de revelar la mirada esmeralda de Alina.',
    linkedObjectIds: ['obj-cuero-choker', 'obj-shibari-aceite'],
    linkedShotIds: []
  },
  {
    id: 'chap-4',
    number: 4,
    week: 'Acto II · Capítulo 4',
    title: 'El Círculo Íntimo',
    subtitle: 'Cierre nocturno en el Penthouse Rooftop',
    status: '⚪ Planificado',
    floor: 4,
    spotId: 'bar',
    lightingMode: 'night',
    format: 'Editorial Nocturno 9:16',
    synopsis:
      'Desenlace del primer arco en la terraza Penthouse del Piso 4 frente al skyline nocturno y la piscina basáltica. Alina brinda con quienes cruzaron el umbral del santuario y deja abierto el cliffhanger hacia la segunda temporada.',
    hook:
      '«Desde aquí arriba la ciudad entera parece correr sin rumbo. Quienes entendieron mi lenguaje ya están aquí dentro conmigo. ¿Subes o sigues mirando desde abajo?»',
    audioTone: 'Complicidad nocturna íntima, brisa suave de fondo, tono cálido de cierre de temporada.',
    directorNotes:
      'Aprovechar reflejos nocturnos sobre la barra de cobre y la plunge pool del Piso 4. Lente 50mm/85mm con bokeh del skyline.',
    linkedObjectIds: ['obj-cuero-choker'],
    linkedShotIds: []
  }
];
