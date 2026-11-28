// Datos maestros de personaje, bóveda semilla de Objetos (Zero-Face B-Roll),
// doctrina Zero-Waste y arco narrativo por capítulos importados de LMNJDRS.

export const ALINA_CHARACTER_BIBLE = {
  name: 'Alina Van Dijk',
  age: '28 años',
  origin: 'Ámsterdam (Países Bajos) ➔ Barcelona & Tulum',
  niche: 'Sexología Clínica, Dominatrix Consciente & Erotismo Terapéutico (SSC)',
  archetype: 'The Elegant Dominatrix & Sex-Positive Mentor (Magnética, intelectual, firme y empática)',
  avatar: './alina_avatar.png',
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
  'Vestuario & Joyas',
  'Botánica & Esculturas',
  'Arte & Mobiliario'
];

// Genera una miniatura SVG elegante para objetos semilla mientras se hidrata su render WebGL2 real 1:1
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
    <text x="270" y="468" text-anchor="middle" fill="${accentHex}" font-family="monospace" font-size="14">DOBLE REGISTRO 3D ↔ BÓVEDA</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ============================================================================
// LEY DE DOBLE REGISTRO (MOTOR 3D ↔ BÓVEDA) + BLOQUEO DE ADN MATERIAL INMUTABLE
// Fórmula object_token_lock:
// [Especie/Modelo Exacto] + [Material Primario + Textura/Acabado] +
// [Contenedor/Base/Herraje en Latón o Piedra] + [Respuesta a la Luz Kelvin del Piso]
// ============================================================================
export const SEED_OBJECTS = [
  {
    id: 'obj-cuero-choker',
    name: 'Gargantilla O-Ring Latón & Perchero Couture SSC',
    handle: '@cuero_choker',
    category: 'Cuero & Fetish',
    floor: 3,
    spotId: 'boudoir',
    modelId: 'gothic_statue',
    worldPos: { x: 9.25, y: 14.7 + 1.15, z: -7.55 },
    camPos: { x: 6.9, y: 14.7 + 1.38, z: -5.2 },
    camTarget: { x: 9.2, y: 14.7 + 1.22, z: -8.2 },
    image: './vault_renders/obj-cuero-choker_beauty.png',
    previzRender: './vault_renders/obj-cuero-choker_beauty.png',
    previzDepthRender: './vault_renders/obj-cuero-choker_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2200K Key / 4600K Rim (8:1 Tenebrismo Kubrick)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'bespoke satin-finish black full-grain leather collar choker and architectural corset with emerald velvet robes hung on sculpted dark-walnut hangers along a warm brushed-brass couture garment rack (#d4af37) with center O-ring hardware beside a weathered gothic stone statue on basalt plinth, catching flickering 2200K candlelit chiaroscuro highlights',
    motionPrompt:
      'Locked 100mm macro shot of 2200K candle flame reflections glinting steadily across brushed brass O-ring hardware, satin-black leather grain and deep emerald velvet nap on couture rack, duration 3.2s, no humans, motion strength 2.1',
    usage: 'Hero Prop de continuidad Vestuario ↔ Set en Boudoir Piso 3 (Cap. 3).'
  },
  {
    id: 'obj-espresso-diario',
    name: 'Servicio Espresso en Porcelana & Cuaderno Clínico',
    handle: '@espresso_diario',
    category: 'Café & Lifestyle',
    floor: 1,
    spotId: 'cafe',
    modelId: 'tea_set_01',
    worldPos: { x: -2.0, y: 4.9 + 0.78, z: -3.5 },
    camPos: { x: -1.35, y: 4.9 + 1.12, z: -2.65 },
    camTarget: { x: -2.0, y: 4.9 + 0.82, z: -3.5 },
    image: './vault_renders/obj-espresso-diario_beauty.png',
    previzRender: './vault_renders/obj-espresso-diario_beauty.png',
    previzDepthRender: './vault_renders/obj-espresso-diario_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '4600K Key / 3100K Rim (2.8:1 Editorial Luminoso)',
    reduxWeight: 0.74,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'artisan glazed ivory porcelain espresso tea service set (tea_set_01) with rich golden crema and leatherbound clinical sexology binder notebook resting on a veined white Carrara marble bistro table with warm brushed-brass candleholder (#d4af37), illuminated by 4600K Mediterranean morning sunlight and 3100K copper La Marzocco bar bokeh',
    motionPrompt:
      'Delicate wisps of white steam rising slowly from the porcelain espresso cup on Carrara marble bistro table while warm 3100K chandelier bokeh glows softly behind, locked 100mm macro tripod, duration 3.2s, motion strength 2.0',
    usage: 'Apertura o cierre reflexivo para capítulos matutinos en Le Velvet Café Piso 1 (Cap. 1 y Cap. 2).'
  },
  {
    id: 'obj-libros-whisky',
    name: 'Enciclopedias Clínicas, Vaso Ámbar & Aparador',
    handle: '@libros_whisky',
    category: 'Intelecto & Estudio',
    floor: 3,
    spotId: 'podcast',
    modelId: 'book_encyclopedia_set_01',
    worldPos: { x: -5.3, y: 14.7 + 0.94, z: -13.55 },
    camPos: { x: -4.2, y: 14.7 + 1.32, z: -11.6 },
    camTarget: { x: -5.2, y: 14.7 + 0.98, z: -13.55 },
    image: './vault_renders/obj-libros-whisky_beauty.png',
    previzRender: './vault_renders/obj-libros-whisky_beauty.png',
    previzDepthRender: './vault_renders/obj-libros-whisky_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.74,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'curated row of clothbound psychoanalysis and clinical sexology encyclopedia volumes (book_encyclopedia_set_01) with gold-foil embossed spines resting on a dark walnut credenza beside ornate brushed-brass candleholders (#d4af37) against an exposed dark brick wall, bathed in warm 3200K Edison sconce tungsten light',
    motionPrompt:
      'Slow 100mm macro rack focus across gilded vintage psychoanalysis book spines to warm brass candleholder reflections under 3200K tungsten brick-wall sconce, duration 3.4s, no humans, motion strength 2.1',
    usage: 'Refuerza autoridad intelectual en «The Mind Sanctuary» durante monólogos de podcast (Cap. 1).'
  },
  {
    id: 'obj-shibari-aceite',
    name: 'Jarrón de Gres Mate, Lino Belga & Farol de Teca Spa',
    handle: '@shibari_aceite',
    category: 'Sensorial & Spa',
    floor: 2,
    spotId: 'bath',
    modelId: 'ceramic_vase_01',
    worldPos: { x: -10.8, y: 9.8 + 0.48, z: -10.4 },
    camPos: { x: -9.6, y: 9.8 + 0.88, z: -8.9 },
    camTarget: { x: -11.1, y: 9.8 + 0.48, z: -10.7 },
    image: './vault_renders/obj-shibari-aceite_beauty.png',
    previzRender: './vault_renders/obj-shibari-aceite_beauty.png',
    previzDepthRender: './vault_renders/obj-shibari-aceite_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2600K Key / 5200K Rim (6:1 Monolítico Suave)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'handcrafted matte charcoal-stoneware ceramic vase (ceramic_vase_01) and rolled raw ivory Belgian linen spa towels (#ebe4d5) arranged on a slatted aged-teak bench beside a glowing warm-lit wooden lantern (wooden_lantern_01) and monolithic dark basalt bathtub, catching 2600K candlelit water reflections and 5200K frosted-glass rim light',
    motionPrompt:
      'Soft 2600K candle reflections and delicate wisps of spa steam drifting past matte stoneware ceramic vase and rolled Belgian linen towels on teak bench, locked 100mm macro, duration 3.3s, motion strength 2.0',
    usage: 'B-Roll táctil ideal para acompañar audios binaurales 3D de respiración y entrega sensorial en Piso 2 Spa (Cap. 2).'
  },
  {
    id: 'obj-shure-sm7b',
    name: 'Micrófono Shure SM7B & Escritorio Clínico de Nogal',
    handle: '@mic_sm7b',
    category: 'Audio & Set',
    floor: 3,
    spotId: 'podcast',
    modelId: 'desk_lamp_arm_01',
    worldPos: { x: -4.5, y: 14.7 + 1.25, z: -10.2 },
    camPos: { x: -3.85, y: 14.7 + 1.48, z: -8.95 },
    camTarget: { x: -4.65, y: 14.7 + 1.18, z: -10.35 },
    image: './vault_renders/obj-shure-sm7b_beauty.png',
    previzRender: './vault_renders/obj-shure-sm7b_beauty.png',
    previzDepthRender: './vault_renders/obj-shure-sm7b_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'professional matte-obsidian Shure SM7B dynamic broadcast microphone (#111216) on articulated studio boom arm with warm brushed-brass thumbscrews (#d4af37) over a solid dark walnut clinical desk with articulated study lamp (desk_lamp_arm_01) and porcelain espresso cup, rim-lit by 3200K tungsten key and 5600K cool hair backlight',
    motionPrompt:
      'Locked 100mm macro shallow depth-of-field focus pull across the matte-black Shure SM7B microphone capsule toward warm 3200K studio background bokeh, duration 3.2s, no humans, motion strength 2.0',
    usage: 'Objeto de encuadre en primer término (Foreground Bokeh) para confesionarios y capítulos de voz en Piso 3.'
  },
  {
    id: 'obj-busto-marmol',
    name: 'Busto Clásico de Mármol & Pedestal de Nogal/Latón',
    handle: '@busto_marmol',
    category: 'Botánica & Esculturas',
    floor: 3,
    spotId: 'podcast',
    modelId: 'marble_bust_01',
    worldPos: { x: -8.6, y: 14.7 + 1.32, z: -13.35 },
    camPos: { x: -7.65, y: 14.7 + 1.52, z: -11.45 },
    camTarget: { x: -8.6, y: 14.7 + 1.38, z: -13.35 },
    image: './vault_renders/obj-busto-marmol_beauty.png',
    previzRender: './vault_renders/obj-busto-marmol_beauty.png',
    previzDepthRender: './vault_renders/obj-busto-marmol_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'neoclassical sculpted Carrara white marble bust (marble_bust_01) with fine chiseled drapery resting on a dark walnut museum plinth crowned with a warm brushed-brass collar molding (#d4af37) in front of an exposed dark brick wall and tall mahogany bookcase, grazed by 3200K industrial wall sconce chiaroscuro light',
    motionPrompt:
      'Slow 100mm macro rack focus from sculpted white marble bust profile to gilded psychoanalysis book spines under warm 3200K Edison wall glow, duration 3.4s, no humans, motion strength 2.0',
    usage: 'Hero Prop 3D esculpido para B-Roll de autoridad intelectual en «The Mind Sanctuary» (Piso 3).'
  },
  {
    id: 'obj-camara-reloj',
    name: 'Reloj de Chimenea, Cámara Analógica & Taza Espresso',
    handle: '@camara_reloj',
    category: 'Intelecto & Estudio',
    floor: 3,
    spotId: 'podcast',
    modelId: 'mantel_clock_01',
    worldPos: { x: -5.3, y: 14.7 + 0.88, z: -10.5 },
    camPos: { x: -3.6, y: 14.7 + 1.24, z: -8.9 },
    camTarget: { x: -5.3, y: 14.7 + 0.94, z: -10.5 },
    image: './vault_renders/obj-camara-reloj_beauty.png',
    previzRender: './vault_renders/obj-camara-reloj_beauty.png',
    previzDepthRender: './vault_renders/obj-camara-reloj_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'antique mahogany mantel clock (mantel_clock_01) with warm brushed-brass bezel (#d4af37) and vintage rangefinder camera (Camera_01) in black pebble-grain leather and brass beside a porcelain espresso cup on a dark walnut clinical desk, catching warm 3200K Edison study lamp reflections',
    motionPrompt:
      'Warm 3200K Edison lamp reflections gliding subtly across vintage camera lens glass, brushed-brass mantel clock bezel and dark walnut grain with wisps of espresso steam, 100mm macro, duration 3.3s, motion strength 2.1',
    usage: 'B-Roll 1:2 sobre el escritorio clínico de nogal en Piso 3.'
  },
  {
    id: 'obj-copas-laton-bar',
    name: 'Copas Rituales de Latón & Botellería en Barra de Cobre',
    handle: '@copas_laton',
    category: 'Café & Lifestyle',
    floor: 4,
    spotId: 'bar',
    modelId: 'brass_goblets',
    worldPos: { x: 5.5, y: 19.6 + 1.13, z: -9.8 },
    camPos: { x: 4.8, y: 19.6 + 1.42, z: -8.35 },
    camTarget: { x: 5.5, y: 19.6 + 1.16, z: -9.8 },
    image: './vault_renders/obj-copas-laton-bar_beauty.png',
    previzRender: './vault_renders/obj-copas-laton-bar_beauty.png',
    previzDepthRender: './vault_renders/obj-copas-laton-bar_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2900K Key / 5400K Rim (5:1 Nocturno)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'hand-turned ornate brushed-brass cocktail goblets (brass_goblets, #d4af37) beside flickering brass candleholders and amber glass liquor bottles (wine_bottles_01) resting on a dark Nero Marquina marble bar counter with hammered copper facade (#c86446), glowing under 2900K warm bar backlighting and 5400K nocturnal sky rim',
    motionPrompt:
      'Slow 100mm macro slider across gleaming brushed-brass goblets and backlit amber liquor bottles on hammered copper rooftop bar, warm bokeh lights twinkling softly, duration 3.3s, no humans, motion strength 2.2',
    usage: 'B-Roll nocturno de lujo para Barra Botánica (Piso 4), Boudoir (Piso 3) y VIP Cabaret (PB).'
  },
  {
    id: 'obj-pachira-basalto',
    name: 'Pachira Aquatica Trenzada en Macetero de Basalto & Latón',
    handle: '@pachira_basalto',
    category: 'Botánica & Esculturas',
    floor: 3,
    spotId: 'podcast',
    modelId: 'pachira_aquatica_01',
    worldPos: { x: -11.55, y: 14.7 + 0.9, z: -0.65 },
    camPos: { x: -9.85, y: 14.7 + 1.25, z: 0.65 },
    camTarget: { x: -11.55, y: 14.7 + 1.05, z: -0.65 },
    image: './vault_renders/obj-pachira-basalto_beauty.png',
    previzRender: './vault_renders/obj-pachira-basalto_beauty.png',
    previzDepthRender: './vault_renders/obj-pachira-basalto_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.74,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'tall braided Pachira aquatica indoor tree (pachira_aquatica_01) with glossy palmate dark-emerald leaves (#0B2B20) rooted in a cylindrical matte charcoal basalt cachepot (#1f232b) crowned with a warm brushed-brass collar rim (#d4af37), catching warm 3200K tungsten interior key light and 5600K balcony edge highlights',
    motionPrompt:
      'Locked 100mm macro shot of glossy dark-emerald Pachira aquatica leaves swaying almost imperceptibly in warm indoor air above brushed-brass basalt planter rim, duration 3.2s, no humans, motion strength 2.0',
    usage: 'Ancla botánica perimetral de la Tríada Cromática en Piso 3, Piso 2, Piso 1, PB y Rooftop Piso 4.'
  },
  {
    id: 'obj-vitrina-gotica-boudoir',
    name: 'Vitrina Gótica Tallada, Candelabros & Cuerdas Shibari',
    handle: '@vitrina_gotica_boudoir',
    category: 'Cuero & Fetish',
    floor: 3,
    spotId: 'boudoir',
    modelId: 'GothicCabinet_01',
    worldPos: { x: 8.2, y: 14.7 + 1.05, z: -9.8 },
    camPos: { x: 6.4, y: 14.7 + 1.28, z: -7.6 },
    camTarget: { x: 8.2, y: 14.7 + 1.05, z: -9.8 },
    image: './vault_renders/obj-vitrina-gotica-boudoir_beauty.png',
    previzRender: './vault_renders/obj-vitrina-gotica-boudoir_beauty.png',
    previzDepthRender: './vault_renders/obj-vitrina-gotica-boudoir_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2200K Key / 4600K Rim (8:1 Tenebrismo Kubrick)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'carved dark walnut gothic apothecary cabinet (GothicCabinet_01) with arched leaded-glass doors and antiqued brass hardware (#d4af37) flanked by flickering brass candleholders, brass goblets and a wall rack of coiled obsidian and muted-plum silk shibari ropes, bathed in 2200K candlelit chiaroscuro shadows',
    motionPrompt:
      'Flickering 2200K candle flames casting slow dancing warm shadows across carved dark wood gothic cabinet and polished brass goblets in chiaroscuro boudoir, locked 100mm macro, duration 3.4s, motion strength 2.2',
    usage: 'B-Roll insignia SET-04 Boudoir para capítulos de dominación consciente SSC (Cap. 3).'
  },
  {
    id: 'obj-consola-vanity-barroca',
    name: 'Consola Barroca de Tocador, Frascos Ámbar & Jarrón Latón',
    handle: '@consola_vanity',
    category: 'Sensorial & Spa',
    floor: 2,
    spotId: 'vanity',
    modelId: 'ClassicConsole_01',
    worldPos: { x: -0.35, y: 9.8 + 0.88, z: -13.12 },
    camPos: { x: 0.42, y: 9.8 + 1.16, z: -11.65 },
    camTarget: { x: -0.35, y: 9.8 + 0.88, z: -13.12 },
    image: './vault_renders/obj-consola-vanity-barroca_beauty.png',
    previzRender: './vault_renders/obj-consola-vanity-barroca_beauty.png',
    previzDepthRender: './vault_renders/obj-consola-vanity-barroca_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3400K Key / 4800K Rim (3.5:1 Beauty Envolvente)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'carved dark walnut and antique-gilt baroque console table (ClassicConsole_01) displaying faceted amber glass perfume flacons with brushed-brass atomizers (#d4af37), crimson matte lipstick in a brass tube and an ornate fluted brass vase (brass_vase_01) below a 12-bulb glowing vanity mirror, illuminated by 3400K warm beauty bulbs',
    motionPrompt:
      'Ultra-slow 100mm macro glide across amber glass perfume flacons and fluted brass vase on carved baroque vanity console catching warm 3400K mirror bulb reflections, duration 3.2s, no humans, motion strength 2.0',
    usage: 'B-Roll 1:2 para escenas de confesionario frente al espejo planar del Piso 2 (Spot Vanity).'
  },
  {
    id: 'obj-perchero-atelier-vanity',
    name: 'Perchero Couture Atelier en Latón Cepillado & Óleo Holandés',
    handle: '@perchero_atelier_vanity',
    category: 'Vestuario & Joyas',
    floor: 2,
    spotId: 'vanity',
    modelId: 'fancy_picture_frame_01',
    worldPos: { x: -3.45, y: 9.8 + 1.18, z: -13.15 },
    camPos: { x: -1.65, y: 9.8 + 1.32, z: -10.85 },
    camTarget: { x: -3.45, y: 9.8 + 1.18, z: -13.15 },
    image: './vault_renders/obj-perchero-atelier-vanity_beauty.png',
    previzRender: './vault_renders/obj-perchero-atelier-vanity_beauty.png',
    previzDepthRender: './vault_renders/obj-perchero-atelier-vanity_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3400K Key / 4800K Rim (3.5:1 Beauty Envolvente)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'bespoke brushed-brass couture wardrobe rack (#d4af37) on bevelled dark walnut plinth holding draped deep-emerald velvet evening gown (#0B2B20), dark charcoal silk charmeuse slip (#1f232b), satin-black leather bodice (#111216) and cognac leather hatbox (#5c3a24) beneath an ornate gilded Dutch still-life oil painting (fancy_picture_frame_01), bathed in 3400K dressing-room light',
    motionPrompt:
      'Soft 3400K vanity bulb light caressing draped charcoal silk charmeuse, emerald velvet folds and warm brushed-brass hangers in quiet dressing room, locked 100mm macro, duration 3.3s, motion strength 2.0',
    usage: 'Continuidad Perchero → Cuerpo en el vestidor privado de Alina (Piso 2 Vanity).'
  },
  {
    id: 'obj-porcelana-isla-marquina',
    name: 'Servicio de Porcelana & Latón sobre Isla Nero Marquina',
    handle: '@porcelana_marquina',
    category: 'Café & Lifestyle',
    floor: 2,
    spotId: 'kitchen',
    modelId: 'tea_set_01',
    worldPos: { x: 7.25, y: 9.8 + 1.02, z: -8.05 },
    camPos: { x: 5.75, y: 9.8 + 1.26, z: -6.85 },
    camTarget: { x: 7.25, y: 9.8 + 1.02, z: -8.05 },
    image: './vault_renders/obj-porcelana-isla-marquina_beauty.png',
    previzRender: './vault_renders/obj-porcelana-isla-marquina_beauty.png',
    previzDepthRender: './vault_renders/obj-porcelana-isla-marquina_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3800K Key / 5500K Rim (3:1 Matinal Natural)',
    reduxWeight: 0.74,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'fine glazed ivory porcelain tea and espresso service set (tea_set_01) with brushed-brass goblets and vintage wine bottles resting on a honed black Nero Marquina marble kitchen island (#111216) with warm copper-vein highlights under modern warm pendant lamps, illuminated by 3800K morning key light',
    motionPrompt:
      'Smooth lateral 100mm macro slider across ivory porcelain cup with rising morning steam on veined black Nero Marquina marble counter, duration 3.2s, no humans, motion strength 2.1',
    usage: 'B-Roll matutino de lifestyle residencial en la Cocina de Autor del Piso 2.'
  },
  {
    id: 'obj-butaca-lectura-suite',
    name: 'Butaca Mid-Century de Nogal, Lino Crudo & Reloj de Mesilla',
    handle: '@butaca_lectura_suite',
    category: 'Arte & Mobiliario',
    floor: 2,
    spotId: 'suite',
    modelId: 'mid_century_lounge_chair',
    worldPos: { x: -3.35, y: 9.8 + 0.55, z: -1.65 },
    camPos: { x: -1.4, y: 9.8 + 1.18, z: -0.2 },
    camTarget: { x: -3.2, y: 9.8 + 0.65, z: -1.6 },
    image: './vault_renders/obj-butaca-lectura-suite_beauty.png',
    previzRender: './vault_renders/obj-butaca-lectura-suite_beauty.png',
    previzDepthRender: './vault_renders/obj-butaca-lectura-suite_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2800K Key / 4600K Rim (4:1 Íntimo Nocturno)',
    reduxWeight: 0.74,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'sculpted mid-century dark walnut lounge chair (mid_century_lounge_chair) upholstered in raw ivory Belgian linen (#ebe4d5) beside a tall walnut side table (side_table_tall_01) topped with a brass-trimmed mantel clock on a crimson-obsidian Persian rug, bathed in 2800K bedside lamp glow and 4600K Eixample balcony twilight',
    motionPrompt:
      'Gentle 2800K golden balcony and bedside light shifting across woven linen cushions and sculpted dark walnut lounge chair grain, locked 100mm still-life, duration 3.3s, motion strength 2.0',
    usage: 'Rincón de lectura en la Suite Principal Piso 2.'
  },
  {
    id: 'obj-faroles-teca-pool',
    name: 'Faroles de Teca, Tumbonas en Lino & Copas Junto al Agua',
    handle: '@faroles_teca_pool',
    category: 'Sensorial & Spa',
    floor: 4,
    spotId: 'pool',
    modelId: 'wooden_lantern_01',
    worldPos: { x: -8.6, y: 19.6 + 0.38, z: -6.9 },
    camPos: { x: -6.9, y: 19.6 + 0.85, z: -5.4 },
    camTarget: { x: -8.6, y: 19.6 + 0.38, z: -6.9 },
    image: './vault_renders/obj-faroles-teca-pool_beauty.png',
    previzRender: './vault_renders/obj-faroles-teca-pool_beauty.png',
    previzDepthRender: './vault_renders/obj-faroles-teca-pool_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '4300K Key / 2800K Rim (3:1 Orgánico)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'handcrafted aged-teak rooftop floor lantern (wooden_lantern_01) with warm brass latch (#d4af37) and glowing 2800K filament candle beside raw ivory linen sun-lounger cushions (#ebe4d5) and ornate brass goblets on a slatted teak deck bordering a turquoise basalt plunge pool, reflecting 4300K sunset caustics',
    motionPrompt:
      'Gentle 4300K sunset water caustics shimmering across aged teak deck planks, raw linen lounger cushions and warm 2800K lantern glass, locked 100mm macro, duration 3.3s, motion strength 2.2',
    usage: 'B-Roll 1:2 para escenas de retiro sensorial junto a la Plunge Pool del Piso 4.'
  },
  {
    id: 'obj-escultura-gotica-rooftop',
    name: 'Escultura Gótica en Piedra & Perchero Cabana Resort',
    handle: '@escultura_gotica_pool',
    category: 'Botánica & Esculturas',
    floor: 4,
    spotId: 'pool',
    modelId: 'gothic_statue',
    worldPos: { x: -10.2, y: 19.6 + 1.35, z: -12.2 },
    camPos: { x: -8.2, y: 19.6 + 1.55, z: -9.8 },
    camTarget: { x: -10.2, y: 19.6 + 1.35, z: -12.2 },
    image: './vault_renders/obj-escultura-gotica-rooftop_beauty.png',
    previzRender: './vault_renders/obj-escultura-gotica-rooftop_beauty.png',
    previzDepthRender: './vault_renders/obj-escultura-gotica-rooftop_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '4300K Key / 2800K Rim (3:1 Orgánico)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'weathered classical gothic carved limestone statue (gothic_statue) mounted on a matte charcoal basalt plinth with brushed-brass trim (#d4af37) beside a brushed-brass poolside cabana rack holding draped washed-linen resort garments and Mediterranean foliage planters, bathed in 4300K golden sunset rim light',
    motionPrompt:
      'Golden 4300K sunset breeze rustling tropical foliage beside carved gothic stone sculpture and draped linen resort robes on rooftop deck, locked 100mm macro, duration 3.3s, motion strength 2.0',
    usage: 'Foco arquitectónico y continuidad de vestuario resort en el Penthouse Piso 4.'
  },
  {
    id: 'obj-libreria-busto-cafe',
    name: 'Librería Modernista, Busto Clásico & Perchero Bistró',
    handle: '@libreria_busto_cafe',
    category: 'Arte & Mobiliario',
    floor: 1,
    spotId: 'cafe',
    modelId: 'steel_frame_shelves_03',
    worldPos: { x: -11.9, y: 4.9 + 1.25, z: -9.8 },
    camPos: { x: -9.4, y: 4.9 + 1.36, z: -8.2 },
    camTarget: { x: -11.9, y: 4.9 + 1.25, z: -9.8 },
    image: './vault_renders/obj-libreria-busto-cafe_beauty.png',
    previzRender: './vault_renders/obj-libreria-busto-cafe_beauty.png',
    previzDepthRender: './vault_renders/obj-libreria-busto-cafe_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '4600K Key / 3100K Rim (2.8:1 Editorial Luminoso)',
    reduxWeight: 0.74,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'modernist matte-obsidian steel and dark-walnut literary bookcase (steel_frame_shelves_03) stocked with art monographs, antique ceramic vases and bronze horse sculptures beside a neoclassical white marble bust on a Carrara plinth with brushed-brass trim (#d4af37), illuminated by 4600K Eixample daylight and 3100K chandelier warmth',
    motionPrompt:
      'Warm 4600K morning sunlight gliding across leatherbound art book spines, sculpted white marble bust and gilded Dutch oil frames in literary cafe corner, locked 100mm macro, duration 3.3s, motion strength 2.0',
    usage: 'Fondo vestido 3D y B-Roll cultural para Le Velvet Café (Piso 1).'
  },
  {
    id: 'obj-salon-lectura-walk-cafe',
    name: 'Butaca Tufted de Salón, Mesa Redonda & Balcón Eixample',
    handle: '@salon_lectura_cafe',
    category: 'Arte & Mobiliario',
    floor: 1,
    spotId: 'walk_cafe',
    modelId: 'ArmChair_01',
    worldPos: { x: 6.4, y: 4.9 + 0.68, z: -4.2 },
    camPos: { x: 4.8, y: 4.9 + 1.15, z: -2.6 },
    camTarget: { x: 6.4, y: 4.9 + 0.68, z: -4.2 },
    image: './vault_renders/obj-salon-lectura-walk-cafe_beauty.png',
    previzRender: './vault_renders/obj-salon-lectura-walk-cafe_beauty.png',
    previzDepthRender: './vault_renders/obj-salon-lectura-walk-cafe_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '5000K Key / 3400K Rim (3:1 Contraluz Lubezki)',
    reduxWeight: 0.74,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'classic tufted armchair (ArmChair_01) with raw ivory linen throw pillows beside a round dark-walnut coffee table (coffee_table_round_01) holding a stoneware ceramic vase and art monographs on an ivory woven rug over Carrara marble floor, bathed in 5000K Eixample balcony sunbeams',
    motionPrompt:
      'Warm 5000K afternoon sunbeams shifting gently across tufted armchair upholstery, art monograph stack and Carrara marble floor, locked 100mm macro still, duration 3.0s, motion strength 2.0',
    usage: 'B-Roll de transición para secuencias walking SET-02 en Piso 1.'
  },
  {
    id: 'obj-reservado-vip-cabaret',
    name: 'Mesa VIP Speakeasy con Copas de Latón & Candelabros',
    handle: '@reservado_vip_cabaret',
    category: 'Café & Lifestyle',
    floor: 0,
    spotId: 'cabaret',
    modelId: 'brass_goblets',
    worldPos: { x: 8.1, y: 0.72, z: -2.5 },
    camPos: { x: 6.6, y: 1.18, z: -1.4 },
    camTarget: { x: 8.1, y: 0.72, z: -2.5 },
    image: './vault_renders/obj-reservado-vip-cabaret_beauty.png',
    previzRender: './vault_renders/obj-reservado-vip-cabaret_beauty.png',
    previzDepthRender: './vault_renders/obj-reservado-vip-cabaret_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2800K Key / 6000K Rim (7:1 Neon-Noir Escénico)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'round dark-walnut speakeasy VIP table (coffee_table_round_01) set with ornate polished brushed-brass goblets (brass_goblets, #d4af37) and flickering three-arm brass candelabra beside a tufted velvet armchair on a crimson Persian rug, catching 2800K candlelight and subtle 6000K neon-noir cabaret rim reflections',
    motionPrompt:
      'Warm 2800K candlelight and subtle neon-noir cabaret reflections glinting across polished brass goblets and dark walnut VIP table, locked 100mm macro, duration 3.2s, no humans, motion strength 2.2',
    usage: 'B-Roll 1:2 de atmósfera nocturna para el Speakeasy Cabaret en Planta Baja.'
  },
  {
    id: 'obj-catenarias-farola-parking',
    name: 'Catenarias VIP en Latón, Terciopelo & Farola Clásica',
    handle: '@catenarias_vip_parking',
    category: 'Arte & Mobiliario',
    floor: 0,
    spotId: 'parking',
    modelId: 'street_lamp_01',
    worldPos: { x: -1.25, y: 0.95, z: 3.3 },
    camPos: { x: -2.6, y: 1.35, z: 5.6 },
    camTarget: { x: -1.1, y: 0.95, z: 3.3 },
    image: './vault_renders/obj-catenarias-farola-parking_beauty.png',
    previzRender: './vault_renders/obj-catenarias-farola-parking_beauty.png',
    previzDepthRender: './vault_renders/obj-catenarias-farola-parking_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3000K Key / 5800K Rim (5:1 Cinematográfico Nocturno)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'heavy turned brushed-brass VIP stanchion posts (#d4af37) strung with plush crimson velvet barrier ropes flanking a red carpet runner on wet brushed-concrete sidewalk beside a classical cast-iron boulevard streetlamp (street_lamp_01), reflecting 3000K lantern halation and glowing NOCTURNE marquee light',
    motionPrompt:
      'Warm 3000K streetlamp and neon marquee reflections shimmering subtly on turned brushed-brass VIP stanchion post and crimson velvet rope at night, locked 100mm macro shallow depth of field, duration 3.2s, motion strength 2.1',
    usage: 'B-Roll exterior de llegada VIP bajo la marquesina NOCTURNE en Planta Baja.'
  },
  // ==========================================================================
  // FICHAS DE VESTUARIO EN BÓVEDA (@look_*) — CONTINUIDAD PERCHERO ↔ CUERPO
  // ==========================================================================
  {
    id: 'obj-look-charcoal-silk-slip',
    name: 'Look 01 · Vestido Lencero Seda Charmeuse Carbón (En Perchero)',
    handle: '@look_charcoal_silk_slip',
    category: 'Vestuario & Joyas',
    floor: 2,
    spotId: 'vanity',
    wardrobeId: 'charcoal_silk_slip',
    modelId: 'CoutureRack_Atelier',
    worldPos: { x: -3.45, y: 9.8 + 1.22, z: -13.22 },
    camPos: { x: -2.15, y: 9.8 + 1.35, z: -11.35 },
    camTarget: { x: -3.45, y: 9.8 + 1.18, z: -13.22 },
    image: './vault_renders/obj-look-charcoal-silk-slip_beauty.png',
    previzRender: './vault_renders/obj-look-charcoal-silk-slip_beauty.png',
    previzDepthRender: './vault_renders/obj-look-charcoal-silk-slip_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3400K Key / 4800K Rim (3.5:1 Beauty Envolvente)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'bias-cut dark charcoal silk charmeuse slip robe (#1f232b) with liquid matte-satin drape and minimalist warm brushed-brass collarbone chain (#d4af37) suspended on a sculpted dark-walnut hanger from a brushed-brass atelier garment rack, catching soft 3400K vanity bulb highlights with zero moiré',
    motionPrompt:
      'Fluid dark charcoal silk charmeuse slip robe hanging on brushed-brass atelier rack responds with imperceptible air breath and soft 3400K specular sheen, locked 100mm macro, duration 3.2s, motion strength 2.0',
    usage: 'Referencia Virtual Try-On / IP-Adapter y continuidad Perchero → Cuerpo en Piso 2 (Vanity, Suite, Kitchen).'
  },
  {
    id: 'obj-look-clinical-blazer-corset',
    name: 'Look 02 · Blazer Sastre Negro & Corsé Esmeralda (En Perchero)',
    handle: '@look_clinical_blazer_corset',
    category: 'Vestuario & Joyas',
    floor: 3,
    spotId: 'podcast',
    wardrobeId: 'clinical_blazer_corset',
    modelId: 'BoutiqueStand_Podcast',
    worldPos: { x: -1.15, y: 14.7 + 1.25, z: -5.85 },
    camPos: { x: -2.55, y: 14.7 + 1.38, z: -4.45 },
    camTarget: { x: -1.15, y: 14.7 + 1.22, z: -5.85 },
    image: './vault_renders/obj-look-clinical-blazer-corset_beauty.png',
    previzRender: './vault_renders/obj-look-clinical-blazer-corset_beauty.png',
    previzDepthRender: './vault_renders/obj-look-clinical-blazer-corset_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'tailored unstructured matte obsidian wool-crepe blazer (#111216) over a structured deep forest-emerald bodice (#0B2B20) with warm vintage brushed-brass hardware (#d4af37) draped on a turned dark-walnut and basalt boutique valet coat stand with brass S-hooks, illuminated by 3200K studio tungsten key light',
    motionPrompt:
      'Locked 100mm macro shot of crisp matte black wool-crepe lapel and warm brushed-brass crown hooks on walnut valet stand in chiaroscuro podcast loft, duration 3.2s, motion strength 2.0',
    usage: 'Uniforme insignia de «The Mind Sanctuary» (Piso 3 Podcast y Piso 1 Café).'
  },
  {
    id: 'obj-look-boudoir-leather-choker',
    name: 'Look 03 · Corsé Sastre en Cuero Satinado & Choker O-Ring (En Perchero)',
    handle: '@look_boudoir_leather_choker',
    category: 'Vestuario & Joyas',
    floor: 3,
    spotId: 'boudoir',
    wardrobeId: 'boudoir_leather_choker',
    modelId: 'CoutureRack_Boudoir',
    worldPos: { x: 9.25, y: 14.7 + 1.22, z: -7.55 },
    camPos: { x: 7.45, y: 14.7 + 1.36, z: -6.35 },
    camTarget: { x: 9.25, y: 14.7 + 1.22, z: -7.55 },
    image: './vault_renders/obj-look-boudoir-leather-choker_beauty.png',
    previzRender: './vault_renders/obj-look-boudoir-leather-choker_beauty.png',
    previzDepthRender: './vault_renders/obj-look-boudoir-leather-choker_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2200K Key / 4600K Rim (8:1 Tenebrismo Kubrick)',
    reduxWeight: 0.77,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'bespoke architectural satin-finish black full-grain leather corset (#111216) paired with a handcrafted leather collar choker featuring a warm brushed-brass center O-ring (#d4af37) hanging on a dark-walnut and brushed-brass couture rack in a candlelit boudoir, catching 2200K flame catchlights',
    motionPrompt:
      'Supple satin-black leather corset and brushed-brass O-ring choker hanging on couture rack glint softly under flickering 2200K candlelight, locked 100mm macro, duration 3.2s, motion strength 2.0',
    usage: 'Referencia maestra Wardrobe #007AFF y continuidad Perchero → Cuerpo en Boudoir Piso 3.'
  },
  {
    id: 'obj-look-emerald-velvet-evening',
    name: 'Look 04 · Vestido Nocturne en Terciopelo Verde Esmeralda (En Perchero)',
    handle: '@look_emerald_velvet_evening',
    category: 'Vestuario & Joyas',
    floor: 0,
    spotId: 'cabaret',
    wardrobeId: 'emerald_velvet_evening',
    modelId: 'CoutureRack_Cabaret',
    worldPos: { x: 11.55, y: 1.22, z: -1.65 },
    camPos: { x: 9.65, y: 1.36, z: -1.15 },
    camTarget: { x: 11.55, y: 1.18, z: -1.65 },
    image: './vault_renders/obj-look-emerald-velvet-evening_beauty.png',
    previzRender: './vault_renders/obj-look-emerald-velvet-evening_beauty.png',
    previzDepthRender: './vault_renders/obj-look-emerald-velvet-evening_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2800K Key / 6000K Rim (7:1 Neon-Noir Escénico)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'floor-length deep forest-emerald silk-velvet evening gown (#0B2B20) with sculpted off-shoulder fold and antique brushed-brass cuff accent (#d4af37) draped on a dark walnut and brushed-brass cloakroom couture rack in a speakeasy lounge, absorbing shadow with directional 2800K velvet nap sheen',
    motionPrompt:
      'Plush deep-emerald velvet evening gown on brushed-brass cloakroom rack catches warm 2800K speakeasy candlelight along its directional nap, locked 100mm macro, duration 3.2s, motion strength 2.0',
    usage: 'Vestuario de gala para Planta Baja (Cabaret/Parking) y Piso 4 (Barra Nocturna).'
  },
  {
    id: 'obj-look-tulum-black-linen-wrap',
    name: 'Look 05 · Resort Wrap de Lino Lavado Negro & Pareo (En Cabana Rack)',
    handle: '@look_tulum_black_linen_wrap',
    category: 'Vestuario & Joyas',
    floor: 4,
    spotId: 'pool',
    wardrobeId: 'tulum_black_linen_wrap',
    modelId: 'CoutureRack_Resort',
    worldPos: { x: -11.55, y: 19.6 + 1.22, z: -6.9 },
    camPos: { x: -9.55, y: 19.6 + 1.38, z: -6.15 },
    camTarget: { x: -11.55, y: 19.6 + 1.18, z: -6.9 },
    image: './vault_renders/obj-look-tulum-black-linen-wrap_beauty.png',
    previzRender: './vault_renders/obj-look-tulum-black-linen-wrap_beauty.png',
    previzDepthRender: './vault_renders/obj-look-tulum-black-linen-wrap_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '4300K Key / 2800K Rim (3:1 Orgánico)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'minimalist washed charcoal-black Belgian linen resort wrap and sarong (#1f232b) paired with raw ivory linen separates (#ebe4d5) and fine brushed-brass body-chain hardware (#d4af37) suspended on an aged-teak and brushed-brass poolside cabana garment rack, glowing with 4300K sunset water caustics',
    motionPrompt:
      'Lightweight washed black and raw ivory linen resort garments on teak-and-brass poolside cabana rack sway gently in warm 4300K rooftop sunset breeze, locked 100mm macro, duration 3.3s, motion strength 2.1',
    usage: 'Continuidad Perchero → Cuerpo en el Penthouse Rooftop Piso 4 (Pool & Bar).'
  },
  {
    id: 'obj-look-eixample-cream-trench',
    name: 'Look 06 · Camisa Seda Marfil Crudo & Palazzo Tabaco (En Perchero Bistró)',
    handle: '@look_eixample_cream_trench',
    category: 'Vestuario & Joyas',
    floor: 1,
    spotId: 'cafe',
    wardrobeId: 'eixample_cream_trench',
    modelId: 'BoutiqueStand_Cafe',
    worldPos: { x: -9.15, y: 4.9 + 1.25, z: -13.15 },
    camPos: { x: -7.75, y: 4.9 + 1.38, z: -11.55 },
    camTarget: { x: -9.15, y: 4.9 + 1.22, z: -13.15 },
    image: './vault_renders/obj-look-eixample-cream-trench_beauty.png',
    previzRender: './vault_renders/obj-look-eixample-cream-trench_beauty.png',
    previzDepthRender: './vault_renders/obj-look-eixample-cream-trench_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '4600K Key / 3100K Rim (2.8:1 Editorial Luminoso)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'tailored raw-ivory silk shirt (#ebe4d5) and high-waisted tobacco-brown leather-trimmed palazzo drape (#5c3a24) with an obsidian felt wide-brim hat resting on a turned dark-walnut and basalt Parisian bistro coat stand with brushed-brass S-hooks (#d4af37), lit by 4600K Mediterranean morning daylight',
    motionPrompt:
      'Soft 4600K Eixample morning daylight caressing raw ivory silk shirt and tobacco leather stole on walnut-and-brass bistro coat stand, locked 100mm macro, duration 3.2s, motion strength 2.0',
    usage: 'Continuidad Perchero → Cuerpo para escenas diurnas en Piso 1 (Le Velvet Café) y Piso 2 (Cocina).'
  },
  {
    id: 'obj-look-spa-minimal-towel-silk',
    name: 'Look 07 · Envoltura de Lino Belga Crudo & Ritual Spa (En Perchero Spa)',
    handle: '@look_spa_minimal_towel_silk',
    category: 'Vestuario & Joyas',
    floor: 2,
    spotId: 'bath',
    wardrobeId: 'spa_minimal_towel_silk',
    modelId: 'BoutiqueStand_Spa',
    worldPos: { x: -5.85, y: 9.8 + 1.25, z: -13.15 },
    camPos: { x: -7.15, y: 9.8 + 1.38, z: -11.55 },
    camTarget: { x: -5.85, y: 9.8 + 1.22, z: -13.15 },
    image: './vault_renders/obj-look-spa-minimal-towel-silk_beauty.png',
    previzRender: './vault_renders/obj-look-spa-minimal-towel-silk_beauty.png',
    previzDepthRender: './vault_renders/obj-look-spa-minimal-towel-silk_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2600K Key / 5200K Rim (6:1 Monolítico Suave)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'plush raw oatmeal-ivory Belgian linen spa sheet wrap (#ebe4d5) and cognac leather trim stole (#5c3a24) draped over a turned dark-walnut valet stand with warm brushed-brass hooks (#d4af37) on a basalt pedestal beside the hydrothermal spa partition, glowing under 2600K candlelight and 5200K diffused rim',
    motionPrompt:
      'Delicate spa steam and 2600K candle glow drifting past raw ivory Belgian linen wrap on brushed-brass and walnut valet stand, locked 100mm macro, duration 3.2s, motion strength 2.0',
    usage: 'Continuidad Perchero → Cuerpo en el Santuario Hidrotermal Piso 2 (Spot Bath).'
  },
  // ==========================================================================
  // BOTÁNICA, ESCULTURAS Y LIBRERÍAS ADICIONALES (PACHIRA, ANTHURIUM, CALATHEA,
  // CABEZA ECUESTRE, BRONZE RAY, LEÓN EN RELIEVE Y LIBRERÍA DE NOGAL)
  // ==========================================================================
  {
    id: 'obj-anthurium-marfil-vanity',
    name: 'Anthurium Botany en Macetero Marfil Crudo & Aro de Latón',
    handle: '@anthurium_marfil',
    category: 'Botánica & Esculturas',
    floor: 2,
    spotId: 'vanity',
    modelId: 'anthurium_botany_01',
    worldPos: { x: 1.65, y: 9.8 + 0.48, z: -13.35 },
    camPos: { x: 1.05, y: 9.8 + 0.85, z: -11.95 },
    camTarget: { x: 1.65, y: 9.8 + 0.45, z: -13.35 },
    image: './vault_renders/obj-anthurium-marfil-vanity_beauty.png',
    previzRender: './vault_renders/obj-anthurium-marfil-vanity_beauty.png',
    previzDepthRender: './vault_renders/obj-anthurium-marfil-vanity_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3400K Key / 4800K Rim (3.5:1 Beauty Envolvente)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'sculpted tropical Anthurium andraeanum botanical specimen (anthurium_botany_01) with glossy heart-shaped deep forest-emerald leaves (#0B2B20) rooted in a cylindrical matte raw-ivory ceramic cachepot (#ebe4d5) crowned with a warm brushed-brass collar rim (#d4af37), catching 3400K dressing-room bulb warmth',
    motionPrompt:
      'Locked 100mm macro shot of glossy heart-shaped Anthurium leaves in raw-ivory and brushed-brass cachepot breathing subtly in warm 3400K dressing room air, duration 3.2s, no humans, motion strength 2.0',
    usage: 'Acento botánico de primer y tercer término en Piso 2 Vanity y jardineras del Santuario.'
  },
  {
    id: 'obj-calathea-terracota-spa',
    name: 'Calathea Orbifolia en Macetero Terracota/Cobre & Latón',
    handle: '@calathea_orbifolia',
    category: 'Botánica & Esculturas',
    floor: 2,
    spotId: 'bath',
    modelId: 'calathea_orbifolia_01',
    worldPos: { x: -6.05, y: 9.8 + 0.45, z: -6.25 },
    camPos: { x: -6.95, y: 9.8 + 0.84, z: -4.95 },
    camTarget: { x: -6.05, y: 9.8 + 0.42, z: -6.25 },
    image: './vault_renders/obj-calathea-terracota-spa_beauty.png',
    previzRender: './vault_renders/obj-calathea-terracota-spa_beauty.png',
    previzDepthRender: './vault_renders/obj-calathea-terracota-spa_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '2600K Key / 5200K Rim (6:1 Monolítico Suave)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'lush tropical Calathea orbifolia plant (calathea_orbifolia_01) with wide ribbed emerald-and-sage foliage (#0B2B20) planted in an artisan warm terracotta-copper cachepot (#c86446) finished with a brushed-brass collar ring (#d4af37), dewy under 2600K spa candlelight and 5200K diffused steam',
    motionPrompt:
      'Delicate hydrothermal spa mist drifting past broad ribbed Calathea orbifolia leaves and brushed-brass terracotta rim under 2600K candle glow, locked 100mm macro, duration 3.2s, motion strength 2.0',
    usage: 'Botánica húmeda para B-Roll sensorial en Piso 2 Spa y barra de Le Velvet Café.'
  },
  {
    id: 'obj-cabeza-ecuestre-nogal',
    name: 'Escultura Cabeza Ecuestre Clásica sobre Pedestal de Nogal & Latón',
    handle: '@cabeza_ecuestre',
    category: 'Botánica & Esculturas',
    floor: 3,
    spotId: 'podcast',
    modelId: 'horse_head',
    worldPos: { x: -11.65, y: 14.7 + 1.32, z: -11.65 },
    camPos: { x: -10.15, y: 14.7 + 1.48, z: -10.35 },
    camTarget: { x: -11.65, y: 14.7 + 1.32, z: -11.65 },
    image: './vault_renders/obj-cabeza-ecuestre-nogal_beauty.png',
    previzRender: './vault_renders/obj-cabeza-ecuestre-nogal_beauty.png',
    previzDepthRender: './vault_renders/obj-cabeza-ecuestre-nogal_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.76,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'classical carved dark-patina stone equestrian horse head sculpture (horse_head) mounted on a dark walnut museum plinth with a warm brushed-brass capital trim (#d4af37) beside floor-to-ceiling psychoanalysis bookshelves, sculpted by 3200K tungsten chiaroscuro key light',
    motionPrompt:
      'Locked 100mm macro focus pull across the chiseled equestrian horse head profile and brushed-brass plinth collar in warm 3200K library light, duration 3.3s, no humans, motion strength 2.0',
    usage: 'Escultura monumental en Piso 3 Podcast, Piso 2 Suite, Piso 4 Rooftop y PB Cabaret.'
  },
  {
    id: 'obj-escultura-bronce-ray',
    name: 'Escultura de Bronce Patinado sobre Plinto de Basalto & Latón',
    handle: '@escultura_bronce_ray',
    category: 'Botánica & Esculturas',
    floor: 3,
    spotId: 'podcast',
    modelId: 'bronze_ray_statue',
    worldPos: { x: -1.25, y: 14.7 + 1.25, z: -12.65 },
    camPos: { x: -2.45, y: 14.7 + 1.42, z: -11.15 },
    camTarget: { x: -1.25, y: 14.7 + 1.24, z: -12.65 },
    image: './vault_renders/obj-escultura-bronce-ray_beauty.png',
    previzRender: './vault_renders/obj-escultura-bronce-ray_beauty.png',
    previzDepthRender: './vault_renders/obj-escultura-bronce-ray_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'patinated antique bronze figurative gallery sculpture (bronze_ray_statue) with warm golden-brown specular highlights resting on a matte charcoal basalt pedestal (#1f232b) with brushed-brass collar molding (#d4af37), illuminated by 3200K Edison wall sconce light',
    motionPrompt:
      'Warm 3200K tungsten highlights gliding slowly across patinated bronze sculpture contours and brushed-brass basalt plinth rim, locked 100mm macro, duration 3.2s, no humans, motion strength 2.0',
    usage: 'Escultura de galería presente en Piso 3, Piso 2 Cocina, Piso 1 Café y Piso 4 Rooftop.'
  },
  {
    id: 'obj-libreria-nogal-clinica',
    name: 'Librería Alta de Nogal con Enciclopedias, Jarrón & Escultura Ecuestre',
    handle: '@libreria_nogal_clinica',
    category: 'Intelecto & Estudio',
    floor: 3,
    spotId: 'podcast',
    modelId: 'Shelf_01',
    worldPos: { x: -10.65, y: 14.7 + 1.15, z: -13.68 },
    camPos: { x: -10.35, y: 14.7 + 1.38, z: -11.45 },
    camTarget: { x: -10.65, y: 14.7 + 1.15, z: -13.68 },
    image: './vault_renders/obj-libreria-nogal-clinica_beauty.png',
    previzRender: './vault_renders/obj-libreria-nogal-clinica_beauty.png',
    previzDepthRender: './vault_renders/obj-libreria-nogal-clinica_depth.png',
    masterApprovedStill: null,
    masterSeed: null,
    kelvinRecipe: '3200K Key / 5600K Rim (6:1 Clínico Chiaroscuro)',
    reduxWeight: 0.75,
    cnDepthStrength: 0.68,
    cnDepthEnd: 0.58,
    isPlaceholderImage: false,
    promptToken:
      'tall dark-walnut architectural bookcase (Shelf_01) curated with clothbound psychoanalysis encyclopedia sets (book_encyclopedia_set_01), antique ceramic vessels (antique_ceramic_vase_01), bronze rearing horse statuette (horse_statue_01) and brass-framed archival portraits against an exposed dark brick wall under 3200K sconce glow',
    motionPrompt:
      'Slow vertical 100mm macro tilt across dark walnut bookshelf tiers, gilded psychoanalysis book spines and antique ceramic vase in warm 3200K study light, duration 3.4s, no humans, motion strength 2.0',
    usage: 'Librería de archivo clínico en Piso 3 Podcast, Boudoir, Suite Piso 2 y Café Piso 1.'
  }
];

export const NARRATIVE_ARC = {
  serieTitle: 'El Arte de Ceder el Control',
  tagline: 'De la fatiga ejecutiva al descanso mental y el placer consciente',
  route: 'Ámsterdam ➔ Barcelona (Santuario 5 Niveles) ➔ Retiro Sensorial',
  thesis:
    'Una serie cinematográfica y podcast visual (16:9 YouTube y 9:16 Celular) organizada en Actos (Meses), Capítulos (Semanas), Episodios (Días), Escenas y Tomas (Inicio ➔ Corte).'
};

export const DEFAULT_ACTS = [
  { id: 'act-1', label: 'Acto I · Mes 1: El Arte de Ceder el Control' },
  { id: 'act-2', label: 'Acto II · Mes 2: La Arquitectura del Deseo' },
  { id: 'act-3', label: 'Acto III · Mes 3: El Círculo Íntimo' }
];

export const SEED_CHAPTERS = [
  {
    id: 'chap-1',
    number: 1,
    actId: 'act-1',
    actTitle: 'Acto I · Mes 1: El Arte de Ceder el Control',
    week: 'Semana 1',
    title: 'La Sobrecarga de Decidir',
    subtitle: 'Fascinación intelectual y el descanso de soltar el mando',
    status: '🟢 Listo para Rodaje',
    floor: 3,
    spotId: 'podcast',
    lightingMode: 'night',
    format: 'Podcast Visual 16:9 & Cápsulas 9:16',
    synopsis:
      'Alina abre la serie en su estudio nocturno del Piso 3 («The Mind Sanctuary»). Expone cómo quienes toman miles de decisiones bajo presión durante el día buscan en secreto un espacio seguro donde otra mente firme decida por ellos.',
    hook:
      '«Hoy tomaste demasiadas decisiones difíciles por otros. Esta noche... decide no decidir nada. Siéntate frente a mí, suelta el teléfono y deja que mi voz se encargue del resto.»',
    audioTone: 'Voz pausada de podcast nocturno, cercana y confesional (Pitch 0.98 | Rate 0.95).',
    directorNotes:
      'Abrir con Alina hablando al micrófono @mic_sm7b en plano medio horizontal 16:9, intercalar detalle de @libros_whisky mientras continúa su narración y cerrar volviendo a su mirada.',
    linkedObjectIds: ['obj-shure-sm7b', 'obj-libros-whisky', 'obj-espresso-diario'],
    linkedShotIds: [],
    episodes: [
      {
        id: 'ep-1-1',
        number: 1,
        dayLabel: 'Lunes · Episodio Principal',
        title: 'Por qué tu mente pide tregua',
        status: '🟢 Listo para Rodaje',
        scenes: [
          {
            id: 'sc-1-1-1',
            number: 1,
            title: 'Escena 1 · Apertura en Estudio Podcast',
            floor: 3,
            spotId: 'podcast',
            lightingMode: 'night',
            synopsis: 'Alina introduce el concepto de fatiga de decisión desde su escritorio de nogal con el micrófono Shure SM7B y su taza de espresso.',
            scriptText:
              'Hoy tomaste demasiadas decisiones difíciles por otros. Revisa cuántas veces fingiste tener el control absoluto desde esta mañana. Esta noche... decide no decidir nada. Respira hondo y deja que mi voz marque el ritmo.',
            audioTone: 'Podcast íntimo frente a micrófono SM7B (Pitch 0.98 | Rate 0.95)',
            directorNotes: 'Mantener calidez 3200K en todo el estudio; usar @mic_sm7b acompañando a Alina en A-Roll y @libros_whisky en toma detalle.',
            linkedObjectIds: ['obj-shure-sm7b', 'obj-libros-whisky', 'obj-espresso-diario']
          },
          {
            id: 'sc-1-1-2',
            number: 2,
            title: 'Escena 2 · Epílogo junto al Café Matutino',
            floor: 1,
            spotId: 'cafe',
            lightingMode: 'day',
            synopsis: 'Breve reflexión final a la mañana siguiente anotando en su cuaderno clínico junto al servicio de porcelana.',
            scriptText:
              'Cuando despiertas sin el peso de sostener el mundo entero, hasta el primer café sabe distinto. Guarda esta calma contigo.',
            audioTone: 'Voz serena matutina con ambiente suave de cafetería',
            directorNotes: 'Luz natural mediterránea 4600K en Piso 1 Café.',
            linkedObjectIds: ['obj-espresso-diario']
          }
        ]
      },
      {
        id: 'ep-1-2',
        number: 2,
        dayLabel: 'Miércoles · Cápsula Confesional',
        title: 'El mito del líder incansable',
        status: '🟡 En Pre-Producción',
        scenes: [
          {
            id: 'sc-1-2-1',
            number: 1,
            title: 'Escena 1 · Confesión frente al Espejo Vanity',
            floor: 2,
            spotId: 'vanity',
            lightingMode: 'night',
            synopsis: 'Alina desmonta la coraza ejecutiva desde su vestidor privado antes de salir.',
            scriptText:
              'Nadie puede llevar la armadura puesta las veinticuatro horas. El verdadero privilegio es tener un lugar donde quitártela sin dar explicaciones.',
            audioTone: 'Susurro cercano y cómplice',
            directorNotes: 'Aprovechar encuadre con el tocador @consola_vanity y el perchero atelier.',
            linkedObjectIds: ['obj-consola-vanity-barroca', 'obj-perchero-atelier-vanity']
          }
        ]
      }
    ]
  },
  {
    id: 'chap-2',
    number: 2,
    actId: 'act-1',
    actTitle: 'Acto I · Mes 1: El Arte de Ceder el Control',
    week: 'Semana 2',
    title: 'Respira Conmigo: Apaga el Ruido',
    subtitle: 'Desconexión sensorial a través del cuerpo y la respiración',
    status: '🟡 En Pre-Producción',
    floor: 2,
    spotId: 'bath',
    lightingMode: 'day',
    format: 'Guía Sensorial YouTube & Reels',
    synopsis:
      'El ruido analítico no se apaga pensando más, sino bajando al cuerpo. Desde el Spa privado de la residencia (Piso 2), Alina guía una secuencia rítmica de respiración.',
    hook:
      '«Inhala despacio conmigo... uno, dos, tres, cuatro. Suelta el aire. ¿Notas cómo caen tus hombros cuando dejas de pelear contra el reloj? Quédate ahí.»',
    audioTone: 'Susurro binaural próximo, cadencia hipnótica lenta.',
    directorNotes:
      'Luz dorada rasante en el Spa del Piso 2 alternando con detalles táctiles de @shibari_aceite.',
    linkedObjectIds: ['obj-shibari-aceite', 'obj-espresso-diario'],
    linkedShotIds: [],
    episodes: [
      {
        id: 'ep-2-1',
        number: 1,
        dayLabel: 'Martes · Sesión Guiada',
        title: 'Protocolo de 4 tiempos para soltar tensión',
        status: '🟡 En Pre-Producción',
        scenes: [
          {
            id: 'sc-2-1-1',
            number: 1,
            title: 'Escena 1 · Spa Monolítico en Calma',
            floor: 2,
            spotId: 'bath',
            lightingMode: 'day',
            synopsis: 'Sesión guiada de pausa sensorial junto al agua templada y lino belga.',
            scriptText:
              'Inhala despacio conmigo... uno, dos, tres, cuatro. Suelta el aire sin prisa. ¿Notas cómo bajan tus hombros cuando dejas de pelear contra el reloj? Quédate exactamente ahí.',
            audioTone: 'Susurro pausado con pausas respiratorias reales',
            directorNotes: 'Alternar plano medio de Alina en el spa con detalle de @shibari_aceite.',
            linkedObjectIds: ['obj-shibari-aceite']
          }
        ]
      }
    ]
  },
  {
    id: 'chap-3',
    number: 3,
    actId: 'act-2',
    actTitle: 'Acto II · Mes 2: La Arquitectura del Deseo',
    week: 'Semana 3',
    title: 'La Regla del Poder Consensuado',
    subtitle: 'Tensión chiaroscuro y la psicología del acuerdo SSC',
    status: '⚪ En Escritura',
    floor: 3,
    spotId: 'boudoir',
    lightingMode: 'night',
    format: 'Podcast & Ensayo Visual Chiaroscuro',
    synopsis:
      'La narrativa entra en el Boudoir chiaroscuro del Piso 3. Alina explica la paradoja del consentimiento consciente: quien cede el mando por elección propia firma las reglas de su propio descanso.',
    hook:
      '«No te intimida ceder el control. Te intimida reconocer la paz que sientes cuando alguien sostiene el timón con firmeza y cuidado. Escúchame bien.»',
    audioTone: 'Voz firme, magnética, autoridad serena con pausas de 2 segundos.',
    directorNotes:
      'Iluminación cálida 2200K de velas. Mostrar @vitrina_gotica_boudoir y @cuero_choker como símbolos de estética editorial.',
    linkedObjectIds: ['obj-cuero-choker', 'obj-vitrina-gotica-boudoir'],
    linkedShotIds: [],
    episodes: [
      {
        id: 'ep-3-1',
        number: 1,
        dayLabel: 'Jueves · Podcast Nocturno',
        title: 'Límites claros, mente libre',
        status: '⚪ En Escritura',
        scenes: [
          {
            id: 'sc-3-1-1',
            number: 1,
            title: 'Escena 1 · Boudoir Chiaroscuro 2200K',
            floor: 3,
            spotId: 'boudoir',
            lightingMode: 'night',
            synopsis: 'Alina desglosa las tres reglas de confianza y límites desde el salón Boudoir.',
            scriptText:
              'La confianza nunca nace de la improvisación; nace de reglas claras acordadas antes de empezar. No te intimida soltar el timón. Te sorprende la paz que aparece cuando sabes que estás en buenas manos.',
            audioTone: 'Autoridad serena y cálida',
            directorNotes: 'Cuidar continuidad de velas 2200K entre todas las tomas.',
            linkedObjectIds: ['obj-cuero-choker', 'obj-vitrina-gotica-boudoir']
          }
        ]
      }
    ]
  },
  {
    id: 'chap-4',
    number: 4,
    actId: 'act-3',
    actTitle: 'Acto III · Mes 3: El Círculo Íntimo',
    week: 'Semana 4',
    title: 'El Círculo Íntimo en las Alturas',
    subtitle: 'Cierre nocturno en el Penthouse Rooftop',
    status: '⚪ En Escritura',
    floor: 4,
    spotId: 'bar',
    lightingMode: 'night',
    format: 'Especial de Cierre 16:9 YouTube',
    synopsis:
      'Desenlace del arco en la terraza Penthouse del Piso 4 frente al skyline nocturno y la barra de cobre.',
    hook:
      '«Desde aquí arriba la ciudad entera parece correr sin rumbo. Quienes entendieron este lenguaje ya están aquí arriba conversando en calma. Bienvenido.»',
    audioTone: 'Complicidad nocturna íntima con brisa suave de fondo.',
    directorNotes:
      'Aprovechar reflejos nocturnos sobre la barra de cobre (@copas_laton) y la terraza del Piso 4.',
    linkedObjectIds: ['obj-copas-laton-bar'],
    linkedShotIds: [],
    episodes: [
      {
        id: 'ep-4-1',
        number: 1,
        dayLabel: 'Domingo · Especial de Cierre',
        title: 'Brindis sobre el ruido de la ciudad',
        status: '⚪ En Escritura',
        scenes: [
          {
            id: 'sc-4-1-1',
            number: 1,
            title: 'Escena 1 · Barra Botánica del Penthouse',
            floor: 4,
            spotId: 'bar',
            lightingMode: 'night',
            synopsis: 'Alina cierra la temporada desde el Piso 4 invitando al oyente al siguiente mes.',
            scriptText:
              'Desde aquí arriba la ciudad entera parece correr sin rumbo. Pero tú aprendiste a detener el reloj cuando hace falta. Levanta tu copa conmigo: esto recién empieza.',
            audioTone: 'Cálido, cercano, cierre de temporada',
            directorNotes: 'Combinar plano amplio 16:9 de la barra nocturna con detalle de @copas_laton.',
            linkedObjectIds: ['obj-copas-laton-bar']
          }
        ]
      }
    ]
  }
];

/**
 * Garantiza que cualquier Capítulo (nuevo o guardado previamente en IndexedDB) posea siempre
 * la jerarquía completa: Acto -> Capítulo -> Episodios[] -> Escenas[] (con sus Tomas).
 */
export function ensureChapterHierarchy(ch) {
  if (!ch || typeof ch !== 'object') return ch;
  if (!ch.actId) {
    ch.actId = ch.number >= 4 ? 'act-3' : ch.number === 3 ? 'act-2' : 'act-1';
  }
  if (!ch.actTitle) {
    const foundAct = DEFAULT_ACTS.find((a) => a.id === ch.actId);
    ch.actTitle = foundAct ? foundAct.label : DEFAULT_ACTS[0].label;
  }
  if (!ch.week) ch.week = `Semana ${ch.number || 1}`;

  if (!Array.isArray(ch.episodes) || ch.episodes.length === 0) {
    const seedMatch = SEED_CHAPTERS.find((s) => s.id === ch.id);
    if (seedMatch?.episodes?.length) {
      ch.episodes = structuredClone(seedMatch.episodes);
      // Preservar ediciones previas del usuario en el episodio 1 / escena 1
      const sc0 = ch.episodes[0].scenes[0];
      if (ch.hook) sc0.scriptText = String(ch.hook).replace(/^[«"']+|[»"']+$/g, '').trim();
      if (ch.synopsis) sc0.synopsis = ch.synopsis;
      if (ch.spotId) { sc0.spotId = ch.spotId; sc0.floor = ch.floor ?? 3; }
      if (Array.isArray(ch.linkedObjectIds) && ch.linkedObjectIds.length) sc0.linkedObjectIds = [...ch.linkedObjectIds];
      if (Array.isArray(ch.blueprintBeats) && ch.blueprintBeats.length) sc0.shots = structuredClone(ch.blueprintBeats);
    } else {
      ch.episodes = [
        {
          id: `ep-${ch.id}-1`,
          number: 1,
          dayLabel: 'Lunes · Episodio 1',
          title: ch.title || 'Episodio Principal',
          status: ch.status || '⚪ En Escritura',
          scenes: [
            {
              id: `sc-${ch.id}-1-1`,
              number: 1,
              title: 'Escena 1 · Principal',
              floor: ch.floor ?? 3,
              spotId: ch.spotId || 'podcast',
              lightingMode: ch.lightingMode || 'night',
              synopsis: ch.synopsis || '',
              scriptText: String(ch.hook || '').replace(/^[«"']+|[»"']+$/g, '').trim(),
              audioTone: ch.audioTone || 'ElevenLabs Alina-Hypno-v1 (Pitch 0.98 | Rate 0.95)',
              directorNotes: ch.directorNotes || '',
              linkedObjectIds: Array.isArray(ch.linkedObjectIds) ? [...ch.linkedObjectIds] : [],
              shots: Array.isArray(ch.blueprintBeats) ? structuredClone(ch.blueprintBeats) : undefined
            }
          ]
        }
      ];
    }
  }

  ch.episodes.forEach((ep, epIdx) => {
    if (!ep.id) ep.id = `ep-${ch.id}-${epIdx + 1}`;
    if (!ep.number) ep.number = epIdx + 1;
    if (!ep.dayLabel) ep.dayLabel = `Episodio ${epIdx + 1}`;
    if (!Array.isArray(ep.scenes) || ep.scenes.length === 0) {
      ep.scenes = [
        {
          id: `sc-${ep.id}-1`,
          number: 1,
          title: 'Escena 1 · Principal',
          floor: ch.floor ?? 3,
          spotId: ch.spotId || 'podcast',
          lightingMode: ch.lightingMode || 'night',
          synopsis: ch.synopsis || '',
          scriptText: String(ch.hook || '').replace(/^[«"']+|[»"']+$/g, '').trim(),
          audioTone: ch.audioTone || 'ElevenLabs Alina-Hypno-v1',
          directorNotes: '',
          linkedObjectIds: Array.isArray(ch.linkedObjectIds) ? [...ch.linkedObjectIds] : []
        }
      ];
    }
    ep.scenes.forEach((sc, scIdx) => {
      if (!sc.id) sc.id = `sc-${ep.id}-${scIdx + 1}`;
      if (!sc.number) sc.number = scIdx + 1;
      if (!Array.isArray(sc.linkedObjectIds)) sc.linkedObjectIds = [];
    });
  });

  return ch;
}
