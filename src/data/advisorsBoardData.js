// ============================================================================
// CONSEJO DE ASESORES DE PRODUCCIÓN CINEMATOGRÁFICA — ALINA STUDIO OS v3.3
// 8 Jefes de Departamento (Heads of Department) + Armario Cápsula Textil +
// Matriz Ejecutable de Dirección de Arte, Luz, Props y Sonido por los 12 Spots.
// ============================================================================

export const ADVISORS_COUNCIL = [
  {
    id: 'production_designer',
    number: '01',
    icon: '🏛️',
    name: 'Elena Vance',
    role: 'Production Designer & Set Decorator',
    department: 'Diseño de Producción & Arquitectura 1:1',
    accent: '#f29979',
    motto: '«En ControlNet Depth, una pared vacía es una invitación a que la IA invente otra habitación en cada plano.»',
    mandate:
      'Gobierna la densidad espacial de los 5 niveles (26×16 m, techos de 4.90 m), la zonificación textil del suelo mediante alfombras PBR, el vestido vertical de muros y la Ley de las 3 Capas de Profundidad.',
    goldenRules: [
      'Ley de las 3 Capas Métricas: Todo encuadre 9:16 debe atravesar Primer Término (0.48–0.60 m), Sujeto en Medio Plano (2.2–3.6 m) y Fondo Vestido (4.5–9.5 m) con siluetas claras.',
      'Prohibición de "Suelo de Nave": Toda zona de estar, cama, diván o escritorio descansa sobre una alfombra tejida PBR (persa, bouclé o hidráulica) que ancla las sombras de contacto.',
      'Escala Vertical Señorial (4.90 m): Romper la altura de muro con cortinajes plisados de suelo a techo, apliques cálidos a Y=2.20 m, espejos barrocos y estanterías para evitar techos huérfanos.',
      'Cono Óptico Sagrado: Ningún mueble de piso puede invadir el cilindro entre startPos/endPos de cámara y alinaPos; el centro respira y el perímetro viste.'
    ],
    pipelineImpact: 'Ancla geometría idéntica en ControlNet Depth (0.68 @ 58%) y da puntos de flujo óptico a Higgsfield START_END.'
  },
  {
    id: 'costume_designer',
    number: '02',
    icon: '👗',
    name: 'Margaux De Vries',
    role: 'Costume Designer & Textile Stylist',
    department: 'Dirección de Vestuario, Texturas & Joyería',
    accent: '#ec4899',
    motto: '«El vestuario de Alina nunca grita; contrasta por nobleza de fibra contra su pelo cobrizo y sus ojos esmeralda.»',
    mandate:
      'Diseña el armario cápsula de Alina Van Dijk por piso y etapa del embudo, seleccionando fibras nobles que no produzcan moiré temporal al animar en Higgsfield.',
    goldenRules: [
      'Tríada Cromática Maestra: Negro obsidiana, carbón grafito, verde bosque/esmeralda (#0B2B20) y marfil crudo potencian el cabello cobrizo (#9E3D24) y la piel Fitzpatrick II.',
      'Fibras Amigas de I2V: Priorizar seda charmeuse pesada, lino lavado mate, cuero satinado sin charol espejo y terciopelo denso; prohibir micro-rejillas o estampados milimétricos que vibran en vídeo.',
      'Herrajes Cálidos con Catchlight: Usar siempre latón cepillado u oro viejo (nunca cromo azulado frío) en gargantillas O-ring, hebillas y pendientes para reflejar las luces 2200K–3400K.',
      'Higiene de Máscara (#007AFF Wardrobe): Definir escotes y bordes limpios para que Render-to-Real aplique micro-trama textil (CN Normal = 0.25) sin invadir clavículas ni cuello.'
    ],
    pipelineImpact: 'Inyecta tokens textiles exactos en Flux (Wardrobe #007AFF) y micro-física secundaria en el bloque [PHYSICS] de Higgsfield.'
  },
  {
    id: 'cinematographer',
    number: '03',
    icon: '🎥',
    name: 'Henrik Lindqvist, FSF',
    role: 'Director of Photography & Chief Gaffer',
    department: 'Fotografía, Óptica 35mm & Rig Kelvin',
    accent: '#f59e0b',
    motto: '«La autoridad psicológica se rueda en 85mm f/1.4 a la altura del iris, con una sola luz principal motivada y recorte en el pelo.»',
    mandate:
      'Calibra cuerpos de cámara y cristalería en Higgsfield Cinema Studio 4.0, ratios de contraste chiaroscuro y temperaturas Kelvin físicas aditivas sobre cada estancia.',
    goldenRules: [
      'Separación Térmica (Key vs Rim): Combinar clave cálida motivada (2200K–3600K) con contra-luz sutil (4800K–5800K) sobre el contorno cobrizo del cabello para despegar a Alina del fondo oscuro.',
      'Luces Prácticas en Bokeh: Asegurar al menos 2 puntos emisivos cálidos (velas, apliques Edison, bombillas vanity) a >2.5 m detrás del sujeto para crear discos especulares reales con el shader CoC.',
      'Disciplina de Focal en 9:16 (Gate 20.25×36 mm): 85mm para intimidad/terapia, 50mm para OTS espejo y cuerpo medio, 35mm/24mm solo en arquitectura o walking estabilizado, 100mm Laowa para B-Roll.',
      'Bloqueo Lab Kelvin: Conservar la firma cromática del director (Fincher, Wong Kar-wai, Kubrick, Guadagnino) evitando balances de blancos neutros automáticos en post.'
    ],
    pipelineImpact: 'Sincroniza cuerpo/lente de Higgsfield, cálculo físico de Círculo de Confusión (CoC) y bloqueo uNear/uFar 16-bit.'
  },
  {
    id: 'property_master',
    number: '04',
    icon: '🏺',
    name: 'Mateo Santoro',
    role: 'Property Master & B-Roll Still-Life Director',
    department: 'Atrezzo Escénico & Bodegón Macro 100mm',
    accent: '#10b981',
    motto: '«Dos de cada tres planos de un gran capítulo no muestran una cara: muestran el rastro táctil de quién habita la sala.»',
    mandate:
      'Selecciona, emplaza y encuadra los Hero Props 3D esculpidos en cada spot para alimentar la Regla 1:2 Zero-Waste (2 B-Rolls de objetos por cada A-Roll facial).',
    goldenRules: [
      'Cero Geometrías Cúbicas en Macro: Todo objeto destinado a lente 100mm debe ser una malla esculpida real (porcelana, cristal tallado, latón, cuero, páginas abiertas, botánica fenestrada).',
      'Micro-Física Ambiental Viva: Acompañar el bodegón estático con un único fenómeno sutil (hilo de vapor en el espresso, reflejo trémulo de vela en el bronce, brisa en hoja de monstera).',
      'Coherencia Biográfica del Objeto: En Piso 3 dominan tratados clínicos, busto clásico, reloj de chimenea y cuero SSC; en Piso 1 porcelana de café y prensa; en Piso 2 cosmética ámbar y espejo.',
      'Puente Directo con Bóveda: Capturar cada Hero Prop en 1:1 y 9:16 para reutilizar su @handle como ancla consistente entre episodios.'
    ],
    pipelineImpact: 'Reduce en un 66% el riesgo facial y el gasto de re-generaciones produciendo B-Rolls hiperrealistas a la primera.'
  },
  {
    id: 'intimacy_director',
    number: '05',
    icon: '🎭',
    name: 'Dra. Clara Valmont',
    role: 'Performance, Intimacy (SSC) & Movement Director',
    department: 'Dirección Escénica, Ética SSC & Anatomía',
    accent: '#a855f7',
    motto: '«El dominio real es quietud absoluta: cuanto menos se agita el cuerpo de Alina, más magnética y creíble resulta en pantalla.»',
    mandate:
      'Dirige la micro-actuación facial, el anclaje anatómico de manos y la elegancia psicológica bajo protocolo SSC (Sano, Seguro y Consensuado).',
    goldenRules: [
      'Firma Facial Inmutable: Mantener el Magnetic Smirk (+0.15 asimétrico izquierdo), parpadeo lento natural y mirada sostenida al objetivo sin giros craneales superiores a 25°.',
      'Blindaje Estricto de Manos (Regla 05): Las manos jamás cruzan delante de la cara ni gesticulan en el aire; reposan sobre nogal/mármol o sostienen un prop sólido.',
      'Boca Cerrada en Vídeo Base (Regla 08): Prohibido pedir habla articulada en Higgsfield I2V; generar en escucha activa/sonrisa sutil y delegar la locución al pase de lipsync dedicado.',
      'Distinción Dominatrix Consciente: Tensión serena, empatía clínica y postura erguida; cero clichés bruscos o poses forzadas que rompan la elegancia editorial.'
    ],
    pipelineImpact: 'Elimina alucinaciones de dedos/boca en I2V y blinda el bloque [SUBJECT] del Delta Structured Prompt.'
  },
  {
    id: 'sound_designer',
    number: '06',
    icon: '🎧',
    name: 'Julian K. Mercer',
    role: 'Binaural Sound Designer & Voice Director',
    department: 'Paisaje Sonoro 3D, ASMR & Voz ElevenLabs',
    accent: '#06b6d4',
    motto: '«La mitad del fetiche intelectual ocurre en el oído: el silencio de una sala alta de 4.9 metros tiene su propio peso acústico.»',
    mandate:
      'Diseña la arquitectura acústica de cada planta, las capas foley binaurales para los B-Rolls y la pauta respiratoria de ElevenLabs (Alina-Hypno-v1).',
    goldenRules: [
      'Cadencia Hipnótica (Rate 0.95): Insertar siempre pausas explícitas [pausa de 1.5s–2.0s] tras la pregunta gancho para dejar respirar el ambiente antes de la frase de mando.',
      'Acústica Material por Piso: Reverberación corta amortiguada por libros y alfombras en Piso 3; cristal y murmullo suave en Piso 1; brisa nocturna y agua grave en Piso 4.',
      'Foley Táctil Sincronizado a B-Roll: Emparejar cada plano macro 100mm con un micro-sonido nítido (roce de seda, clic de frasco de latón, crepitar de vela, extracción de espresso).',
      'Techo de Susurro (Whisper Ceiling): Evitar picos estridentes; trabajar en proximidad de micrófono Shure SM7B o binaural 3Dio (izquierda/derecha suave en Telegram VIP).'
    ],
    pipelineImpact: 'Estructura los guiones de ElevenLabs y convierte micro-clips de 3.5s en piezas inmersivas de altísima retención.'
  },
  {
    id: 'vfx_supervisor',
    number: '07',
    icon: '🧬',
    name: 'Kenji Takahashi',
    role: 'AI VFX, ControlNet & Continuity Supervisor',
    department: 'Supervisión Render-to-Real & Raccord',
    accent: '#6366f1',
    motto: '«Si dejas ControlNet al 100% hasta el último paso, obtienes plástico WebGL; si lo cortas al 58%, obtienes cine de 35mm.»',
    mandate:
      'Audita la pureza técnica de los 4 pases (Beauty, Depth 16-bit, Normals, Mask 7-IDs + OpenPose) y aplica los protocolos anti-artefactos entre ComfyUI y Higgsfield.',
    goldenRules: [
      'Corte Temprano de ControlNet: Fijar CN Depth = 0.68 (end 0.58) y CN Normal = 0.42 (end 0.45, anulado a 0.0 en Cabello #FFCC00 y Foreground #AF52DE) para liberar poros y hebras reales.',
      'Matriz Anti-Duplicación: En planos START_END (espejo, rack focus, pull-out, arco parallax), bloquear motionIntensity <= 0.32 para no duplicar el desplazamiento ya impreso entre t=0 y t=1.',
      'Protocolo Espejo Planar (vanity #00C7BE): Bajar CN Depth a 0.30 dentro del cristal y ejecutar el Inpainting LoRA/PuLID de Alina únicamente sobre el rostro reflejado.',
      'Desacoplamiento Handheld 1.7Hz: Renderizar caminatas a 24mm con horizonte limpio + 4% overscan (1124×1998) e inyectar el pulso orgánico en post para 0% paredes gelatinosas.'
    ],
    pipelineImpact: 'Garantiza 0% look CGI, identidad facial 100% consistente entre tomas y cero deformación geométrica.'
  },
  {
    id: 'lead_editor',
    number: '08',
    icon: '🎞️',
    name: 'Sofía Almodóvar',
    role: 'Lead Editor & Funnel Showrunner',
    department: 'Montaje Vertical, Ritmo & Conversión',
    accent: '#eab308',
    motto: '«Un plano generativo perfecto de 3.2 segundos vale diez veces más que intentar estirar 8 segundos hasta que la cara se derrita.»',
    mandate:
      'Orquesta la escaleta de montaje 9:16, la retención de los primeros 1.8 segundos y la progresión narrativa desde Reels SFW hasta el círculo privado VIP.',
    goldenRules: [
      'Arquitectura Rítmica 1:2: Abrir con un B-Roll sensorial potente (1.8s) o mirada directa en 85mm, cortar a B-Roll de contexto (2.8s), volver a A-Roll clave (3.5s) y cerrar en detalle táctil.',
      'Corte Quirúrgico <= 4.0s (<= 3.0s en acción): Cortar siempre en el pico de micro-movimiento antes de que el modelo de vídeo acumule deriva temporal.',
      'Techo de Motion Strength (2.0–3.5): Jamás superar 3.5 en planos con rostro; reservar dinámicas más amplias exclusivamente para planos generales arquitectónicos o agua.',
      'Escalera de Intimidad por Piso: Piso 1 y Balcones captan tráfico frío (SFW intelectual); Piso 2 crea cercanía cotidiana; Piso 3 y Piso 4 convierten a comunidad privada.'
    ],
    pipelineImpact: 'Maximiza retención de visionado completo y optimiza el retorno por cada crédito invertido en vídeo.'
  }
];

// ============================================================================
// ARMARIO CÁPSULA OFICIAL DE ALINA VAN DIJK (Curado por Margaux De Vries)
// ============================================================================
export const ALINA_WARDROBE_CATALOG = [
  {
    id: 'charcoal_silk_slip',
    name: 'Vestido Lencero de Seda Charmeuse Carbón',
    handle: '@look_charcoal_silk_slip',
    vaultObjectId: 'obj-look-charcoal-silk-slip',
    rackLocation: { floor: 2, spotId: 'vanity', rackType: 'addCoutureGarmentRack(atelier)', coords: { x: -3.45, y: 9.8, z: -13.22 } },
    category: 'Intimidad Residencial',
    funnel: 'SFW / Puente Sensorial',
    spots: ['vanity', 'suite', 'kitchen'],
    swatches: ['#1f232b', '#c86446', '#d4af37'],
    fluxTokens:
      'wearing a bias-cut dark charcoal silk charmeuse slip robe (#1f232b) with delicate matte satin drape and minimalist warm brushed-brass collarbone chain (#d4af37)',
    higgsfieldPhysics:
      'fluid dark silk charmeuse settles softly over collarbone with subtle specular sheen on breathing, fine brushed-brass chain resting steady, zero moiré',
    stylistNote: 'Refleja la luz cálida 2700K–3600K del tocador y la suite con transiciones suaves sin brillos plásticos. Colgado físicamente en el perchero atelier del Piso 2.'
  },
  {
    id: 'clinical_blazer_corset',
    name: 'Blazer Desestructurado Negro sobre Corsé Mate',
    handle: '@look_clinical_blazer_corset',
    vaultObjectId: 'obj-look-clinical-blazer-corset',
    rackLocation: { floor: 3, spotId: 'podcast', rackType: 'addBoutiqueCoatStand(leather)', coords: { x: -1.15, y: 14.7, z: -5.85 } },
    category: 'Autoridad Clínica',
    funnel: 'Top-Funnel SFW (Reels / Podcast)',
    spots: ['podcast', 'cafe', 'walk_cafe'],
    swatches: ['#111216', '#0B2B20', '#d4af37'],
    fluxTokens:
      'wearing a tailored unstructured matte obsidian-black wool-crepe blazer (#111216) over a sleek forest-emerald structured bodice (#0B2B20) and subtle vintage brushed-brass hoop earrings (#d4af37)',
    higgsfieldPhysics:
      'tailored matte wool lapel holds crisp architectural line while subtle brushed-brass earring catches warm 3200K key light with minimal sway, zero moiré',
    stylistNote: 'El uniforme insignia de «The Mind Sanctuary»: proyecta rigor intelectual y magnetismo. Reposando en el valet stand de nogal del Piso 3.'
  },
  {
    id: 'boudoir_leather_choker',
    name: 'Corsé Sastre en Cuero Satinado & Choker O-Ring Latón',
    handle: '@look_boudoir_leather_choker',
    vaultObjectId: 'obj-look-boudoir-leather-choker',
    rackLocation: { floor: 3, spotId: 'boudoir', rackType: 'addCoutureGarmentRack(boudoir)', coords: { x: 9.25, y: 14.7, z: -7.55 } },
    category: 'Dominatrix Consciente (SSC)',
    funnel: 'Fanvue VIP / Telegram Nocturno',
    spots: ['boudoir', 'cabaret', 'parking'],
    swatches: ['#111216', '#d4af37', '#0B2B20'],
    fluxTokens:
      'wearing a bespoke satin-finish black full-grain leather architectural corset (#111216) with clean seams and a handcrafted black leather choker featuring a warm brushed-brass center O-ring (#d4af37)',
    higgsfieldPhysics:
      'supple satin-black leather bodice maintains sculpted form, warm 2200K candle highlights glinting steadily on the brushed-brass O-ring',
    stylistNote: 'Cuero de grano natural semimate (jamás vinilo espejo) para que ControlNet Normal conserve textura orgánica. Colgado en el perchero Couture SSC del Boudoir.'
  },
  {
    id: 'emerald_velvet_evening',
    name: 'Vestido Nocturne de Terciopelo Verde Esmeralda',
    handle: '@look_emerald_velvet_evening',
    vaultObjectId: 'obj-look-emerald-velvet-evening',
    rackLocation: { floor: 0, spotId: 'cabaret', rackType: 'addCoutureGarmentRack(boudoir)', coords: { x: 11.55, y: 0, z: -1.65 } },
    category: 'Gala & Speakeasy',
    funnel: 'Capítulos Especiales / VIP',
    spots: ['cabaret', 'bar', 'parking'],
    swatches: ['#0B2B20', '#d4af37', '#111216'],
    fluxTokens:
      'wearing a floor-length deep forest-emerald silk-velvet evening gown (#0B2B20) with sculpted off-shoulder neckline and antique brushed-brass cuff bracelet (#d4af37)',
    higgsfieldPhysics:
      'plush deep emerald velvet absorbs shadow with soft directional nap sheen, antique brushed-brass cuff glinting subtly under 2800K key light',
    stylistNote: 'Armonía análoga-complementaria perfecta con sus ojos esmeralda y su melena cobriza. Presente en los percheros Couture de PB Cabaret, Piso 2 y Piso 3.'
  },
  {
    id: 'tulum_black_linen_wrap',
    name: 'Resort Wrap de Lino Lavado Negro & Pareo Ligero',
    handle: '@look_tulum_black_linen_wrap',
    vaultObjectId: 'obj-look-tulum-black-linen-wrap',
    rackLocation: { floor: 4, spotId: 'pool', rackType: 'addCoutureGarmentRack(resort)', coords: { x: -11.55, y: 19.6, z: -6.9 } },
    category: 'Penthouse & Retiro Sensorial',
    funnel: 'Lifestyle / Inner Circle',
    spots: ['pool', 'bar'],
    swatches: ['#1f232b', '#ebe4d5', '#d4af37'],
    fluxTokens:
      'wearing a minimalist charcoal-black washed-linen resort bikini top (#1f232b) paired with a flowing raw-ivory and dark linen sarong wrap (#ebe4d5) and thin brushed-brass body chain (#d4af37)',
    higgsfieldPhysics:
      'lightweight washed black linen wrap drifts gently in warm 4300K rooftop evening breeze, subtle water caustics reflecting on fabric edge',
    stylistNote: 'La trama orgánica del lino lavado da a Flux micro-textura táctil inmediata sin moiré. Colgado en el Cabana Rack de teca y latón del Piso 4.'
  },
  {
    id: 'eixample_cream_trench',
    name: 'Camisa de Seda Marfil & Pantalón Palazzo Tabaco',
    handle: '@look_eixample_cream_trench',
    vaultObjectId: 'obj-look-eixample-cream-trench',
    rackLocation: { floor: 1, spotId: 'cafe', rackType: 'addBoutiqueCoatStand(ivory)', coords: { x: -9.15, y: 4.9, z: -13.15 } },
    category: 'Lifestyle Cosmopolita Diurno',
    funnel: 'Descubrimiento SFW (Instagram / X)',
    spots: ['cafe', 'walk_cafe', 'kitchen'],
    swatches: ['#ebe4d5', '#5c3a24', '#d4af37'],
    fluxTokens:
      'wearing an effortlessly unbuttoned warm raw-ivory silk shirt (#ebe4d5) tucked into high-waisted tobacco-leather-belted espresso palazzo trousers (#5c3a24) with warm brushed-brass buckle (#d4af37)',
    higgsfieldPhysics:
      'soft raw-ivory silk collar and sleeves respond with natural gentle air movement during stride, clean fabric folds with zero moiré',
    stylistNote: 'Luminosidad editorial europea para mañanas en Le Velvet Café y cocina de autor. Colgado en el perchero bistró del Piso 1.'
  },
  {
    id: 'spa_minimal_towel_silk',
    name: 'Recogido Húmedo Spa & Envoltura de Lino Crudo',
    handle: '@look_spa_minimal_towel_silk',
    vaultObjectId: 'obj-look-spa-minimal-towel-silk',
    rackLocation: { floor: 2, spotId: 'bath', rackType: 'addBoutiqueCoatStand(ivory)', coords: { x: -5.85, y: 9.8, z: -13.15 } },
    category: 'Ritual Terapéutico & Spa',
    funnel: 'Puente Sensorial / VIP',
    spots: ['bath'],
    swatches: ['#ebe4d5', '#1f232b', '#d4af37'],
    fluxTokens:
      'copper hair loosely pinned up with damp tendrils framing her cheekbones, wrapped modestly in a plush raw-ivory Belgian linen spa sheet (#ebe4d5) with warm dewy skin sheen and fine brushed-brass hairpin (#d4af37)',
    higgsfieldPhysics:
      'damp copper hair tendrils stay softly settled against collarbone, warm 2600K candlelit water reflections shimmering gently across dewy shoulders',
    stylistNote: 'Textura húmeda natural calibrada para chiaroscuro de velas a 2600K sobre piedra basáltica. Prenda física colgada en el perchero Spa del Piso 2.'
  }
];

// ============================================================================
// MATRIZ EJECUTABLE DE DIRECCIÓN POR CADA UNO DE LOS 12 SPOTS DEL EDIFICIO
// ============================================================================
export const SPOT_ADVISORY_BLUEPRINTS = {
  // ------------------------ PISO 4: ROOFTOP PENTHOUSE ------------------------
  pool: {
    spotId: 'pool',
    artDirectionTitle: 'Eco-Lujo Basáltico & Horizonte Mediterráneo',
    recommendedDirectorId: 'guadagnino_mukdeeprom',
    recommendedShotTypeId: 'ms_waist',
    recommendedMoveId: 'subtle_parallax_arc',
    recommendedForegroundId: 'monstera_leaf',
    recommendedWardrobeId: 'tulum_black_linen_wrap',
    compatibleWardrobes: ['tulum_black_linen_wrap', 'emerald_velvet_evening'],
    interiorLayers: {
      foreground: 'Hoja real de Monstera / vegetación perimetral en desenfoque f/1.4 (0.50 m).',
      midground: 'Alina junto al espejo de agua turquesa sobre deck de teca con cojines de lino.',
      background: 'Tumbonas vestidas con cojines, faroles de teca encendidos (wooden_lantern_01), mesa auxiliar con copas de latón y pérgola al fondo.',
      floorAndWalls: 'Tarima de teca envejecida zonificada con alfombra exterior tejida bajo las tumbonas y balaustrada perimetral limpia.'
    },
    lightingRecipe: {
      kelvinKey: 4300,
      kelvinRim: 2800,
      contrastRatio: '3:1 Orgánico',
      note: 'Contraluz dorado de atardecer + cian subacuático (18 cd) + faroles de suelo cálidos a ras de teca.'
    },
    heroProps: [
      {
        name: 'Faroles de Teca & Copas Junto al Agua',
        modelId: 'wooden_lantern_01',
        camPos: { x: -6.9, y: 19.6 + 0.85, z: -5.4 },
        camTarget: { x: -8.6, y: 19.6 + 0.38, z: -6.9 },
        promptToken: 'handcrafted warm-lit wooden rooftop lantern beside woven linen sun lounger cushions and brass goblet on aged teak deck by glowing turquoise plunge pool',
        motionPrompt: 'Gentle golden sunset water caustics shimmering across aged teak wood and warm lantern glass, locked 100mm macro, motion strength 2.2'
      },
      {
        name: 'Escultura Gótica & Cabana Resort en Lino',
        modelId: 'gothic_statue',
        camPos: { x: -8.2, y: 19.6 + 1.55, z: -9.8 },
        camTarget: { x: -10.2, y: 19.6 + 1.35, z: -12.2 },
        promptToken: 'weathered classical gothic stone statue on dark basalt plinth beside lush Mediterranean terrace planters and draped washed-linen resort garments on brushed brass cabana rack',
        motionPrompt: 'Golden sunset breeze rustling tropical foliage beside carved stone sculpture on luxury rooftop deck, locked 85mm still, motion strength 2.0'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Mano derecha reposando suavemente sobre la barandilla o sujetando el borde del pareo de lino.',
      voiceAndFoley: 'Brisa cálida de ático + ondulación grave de agua + voz susurrada a ritmo 0.94 con pausa de 2.0s.'
    }
  },

  bar: {
    spotId: 'bar',
    artDirectionTitle: 'Coctelería Botánica de Cobre Martillado',
    recommendedDirectorId: 'wong_kar_wai_doyle',
    recommendedShotTypeId: 'mcu_interview',
    recommendedMoveId: 'slow_dolly_push_in',
    recommendedForegroundId: 'crystal_glass',
    recommendedWardrobeId: 'emerald_velvet_evening',
    compatibleWardrobes: ['emerald_velvet_evening', 'tulum_black_linen_wrap', 'charcoal_silk_slip'],
    interiorLayers: {
      foreground: 'Copa tallada en primer término desenfocado capturando destellos ámbar.',
      midground: 'Alina apoyada con elegancia junto al sobre de mármol oscuro de la barra de cobre.',
      background: 'Botellería retroiluminada, copas de latón (brass_goblets), jarrón cerámico, carrito auxiliar y pérgola bioclimática con faroles.',
      floorAndWalls: 'Alfombra tejida bajo zona lounge del bar + taburetes torneados con sombra de contacto.'
    },
    lightingRecipe: {
      kelvinKey: 2900,
      kelvinRim: 5400,
      contrastRatio: '5:1 Nocturno',
      note: 'Calidez ámbar rebotada en el cobre martillado con recorte azul nocturno del cielo abierto.'
    },
    heroProps: [
      {
        name: 'Copas de Latón & Botellas en Barra de Cobre',
        modelId: 'brass_goblets',
        camPos: { x: 4.8, y: 19.6 + 1.42, z: -8.35 },
        camTarget: { x: 5.5, y: 19.6 + 1.16, z: -9.8 },
        promptToken: 'polished ornate brass cocktail goblets, vintage amber liquor bottles and flickering brass candleholders on hammered copper rooftop bar counter',
        motionPrompt: 'Slow 100mm macro slider across gleaming brass goblets and backlit amber bottles, warm bokeh lights twinkling softly, no humans, motion strength 2.2'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Dedos apoyados con calma en la base de una copa sobre el mármol, nunca frente al mentón.',
      voiceAndFoley: 'Tintineo sutil de hielo/cristal + brisa nocturna lejana + tono cómplice de cierre de jornada.'
    }
  },

  // ---------------------- PISO 3: THE MIND SANCTUARY -------------------------
  podcast: {
    spotId: 'podcast',
    artDirectionTitle: 'SET-01 · Loft Psicoanalítico del Born',
    recommendedDirectorId: 'fincher_cronenweth',
    recommendedShotTypeId: 'cu_portrait',
    recommendedMoveId: 'slow_dolly_push_in',
    recommendedForegroundId: 'vintage_microphone',
    recommendedWardrobeId: 'clinical_blazer_corset',
    compatibleWardrobes: ['clinical_blazer_corset', 'charcoal_silk_slip', 'boudoir_leather_choker'],
    interiorLayers: {
      foreground: 'Cápsula de micrófono de estudio / lámpara articulada en suave bokeh lateral.',
      midground: 'Alina tras el escritorio de nogal macizo con juego de porcelana espresso y cuaderno clínico.',
      background: 'Librería de caoba repleta de volúmenes enciclopédicos, busto clásico de mármol (marble_bust_01) sobre pedestal, aparador con reloj antiguo (mantel_clock_01), cámara analógica (Camera_01), diván tapizado con cojines y apliques industriales encendidos en el ladrillo visto.',
      floorAndWalls: 'Gran alfombra persa carmesí-obsidiana bajo escritorio y diván + ladrillo oscuro vestido con apliques cálidos y cuadros.'
    },
    lightingRecipe: {
      kelvinKey: 3200,
      kelvinRim: 5600,
      contrastRatio: '6:1 Clínico Chiaroscuro',
      note: 'Luz cenital suave Fincher sobre rostro + apliques Edison 2700K al fondo + fino recorte frío en ondas cobrizas.'
    },
    heroProps: [
      {
        name: 'Busto Clásico de Mármol & Biblioteca Clínica',
        modelId: 'marble_bust_01',
        camPos: { x: -9.2, y: 14.7 + 1.48, z: -9.8 },
        camTarget: { x: -11.4, y: 14.7 + 1.32, z: -11.6 },
        promptToken: 'classical sculpted white marble bust resting on dark walnut pedestal beside leatherbound psychoanalysis encyclopedias under warm industrial wall sconce on dark brick loft wall',
        motionPrompt: 'Subtle rack focus from sculpted marble bust profile to gilded psychoanalysis book spines in warm tungsten light, locked 100mm macro, motion strength 2.0'
      },
      {
        name: 'Reloj de Estudio, Cámara Analógica & Taza Espresso',
        modelId: 'mantel_clock_01',
        camPos: { x: -3.6, y: 14.7 + 1.24, z: -8.9 },
        camTarget: { x: -5.3, y: 14.7 + 0.94, z: -10.5 },
        promptToken: 'vintage brass-trimmed mantel clock and classic analog rangefinder camera beside porcelain espresso cup on dark walnut clinical desk',
        motionPrompt: 'Warm Edison lamp reflections gliding subtly across vintage camera lens and dark walnut grain, wisps of espresso steam, motion strength 2.1'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Antebrazos descansando con aplomo sobre el tablero de nogal a ambos lados del micro.',
      voiceAndFoley: 'Silencio denso de biblioteca amortiguada por alfombra persa + tic-tac casi imperceptible + voz grave cercana al Shure SM7B.'
    }
  },

  boudoir: {
    spotId: 'boudoir',
    artDirectionTitle: 'SET-04 · Santuario Chiaroscuro & Terapia Sensorial SSC',
    recommendedDirectorId: 'kubrick_alcott',
    recommendedShotTypeId: 'mcu_interview',
    recommendedMoveId: 'rack_focus_macro_to_eyes',
    recommendedForegroundId: 'perfume_bottle',
    recommendedWardrobeId: 'boudoir_leather_choker',
    compatibleWardrobes: ['boudoir_leather_choker', 'charcoal_silk_slip', 'emerald_velvet_evening'],
    interiorLayers: {
      foreground: 'Frasco facetado / candelabro de latón a 0.48 m en transición de rack focus hacia sus ojos.',
      midground: 'Alina junto al micrófono binaural 3Dio y el diván sensorial con cojines de terciopelo.',
      background: 'Cabecero verde esmeralda (#0B2B20), vitrina gótica tallada (GothicCabinet_01), diván vintage (vintage_day_bed), espejo barroco dorado (ornate_mirror_01), panoplia de cuerdas de seda lila/negra y múltiples candelabros trémulos.',
      floorAndWalls: 'Alfombra persa profunda esmeralda-burdeos amortiguando todo el suelo + cortinajes pesados de 4.75 m.'
    },
    lightingRecipe: {
      kelvinKey: 2200,
      kelvinRim: 4600,
      contrastRatio: '8:1 Tenebrismo Kubrick',
      note: 'Iluminación íntegra motivada por llamas de vela a 2200K con penumbra rica en terciopelo y reflejos en latón.'
    },
    heroProps: [
      {
        name: 'Vitrina Gótica, Copas Rituales & Candelabros',
        modelId: 'GothicCabinet_01',
        camPos: { x: 6.4, y: 14.7 + 1.28, z: -7.6 },
        camTarget: { x: 8.2, y: 14.7 + 1.05, z: -9.8 },
        promptToken: 'carved dark wood gothic cabinet beside flickering brass candleholders, brass goblets and coiled purple silk shibari ropes in candlelit chiaroscuro boudoir',
        motionPrompt: 'Flickering 2200K candle flames casting slow dancing warm shadows across carved dark wood and polished brass goblets, 100mm macro, motion strength 2.2'
      },
      {
        name: 'Perchero Couture SSC & Escultura en Penumbra',
        modelId: 'gothic_statue',
        camPos: { x: 6.9, y: 14.7 + 1.38, z: -5.2 },
        camTarget: { x: 9.2, y: 14.7 + 1.22, z: -8.2 },
        promptToken: 'brushed brass couture garment rack holding satin-black leather bodice and deep emerald velvet evening robes with warm brass O-rings beside candlelit gothic stone statue',
        motionPrompt: 'Warm 2200K candle highlights glinting subtly on brushed brass hangers, supple black leather and emerald velvet nap, locked 85mm macro, motion strength 2.0'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Mano posada con suavidad sobre el soporte metálico o sobre el terciopelo del diván.',
      voiceAndFoley: 'Susurro binaural 3D izquierdo/derecho + crepitar suave de cera de vela + roce lento de seda.'
    }
  },

  // ---------------------- PISO 2: RESIDENCIA PRIVADA -------------------------
  vanity: {
    spotId: 'vanity',
    artDirectionTitle: 'Tocador Señorial con Espejo Planar Real',
    recommendedDirectorId: 'coppola_intimate',
    recommendedShotTypeId: 'ots_mirror',
    recommendedMoveId: 'slow_dolly_push_in',
    recommendedForegroundId: 'perfume_bottle',
    recommendedWardrobeId: 'charcoal_silk_slip',
    compatibleWardrobes: ['charcoal_silk_slip', 'emerald_velvet_evening', 'boudoir_leather_choker'],
    interiorLayers: {
      foreground: 'Frasco de perfume en latón / silueta desenfocada de nuca y hombro en OTS espejo.',
      midground: 'Reflejo nítido de Alina en el espejo circular rodeado de 12 bombillas cálidas sobre consola barroca (ClassicConsole_01) y otomana.',
      background: 'Perchero vestidor en latón, espejo ornamental secundario (ornate_mirror_01), jarrón de latón (brass_vase_01), butaca de lectura y cortinajes carmesí.',
      floorAndWalls: 'Alfombra circular/ovalada marfil y oro viejo bajo el tocador y la otomana sobre parquet en espiga.'
    },
    lightingRecipe: {
      kelvinKey: 3400,
      kelvinRim: 4800,
      contrastRatio: '3.5:1 Beauty Envolvente',
      note: 'Aro difuso de 12 bombillas cálidas reflejado en el iris (catchlight circular limpio) sin sombras duras bajo nariz.'
    },
    heroProps: [
      {
        name: 'Consola Barroca, Frascos Ámbar & Jarrón de Latón',
        modelId: 'ClassicConsole_01',
        camPos: { x: 0.42, y: 9.8 + 1.16, z: -11.65 },
        camTarget: { x: -0.35, y: 9.8 + 0.88, z: -13.12 },
        promptToken: 'amber glass perfume flacons, crimson matte lipstick in brass tube, ornate brass vase and glowing vanity bulbs reflected on carved baroque console table',
        motionPrompt: 'Ultra-slow macro glide across amber glass perfume bottles and brass vanity tray catching warm mirror bulb reflections, motion strength 2.0'
      },
      {
        name: 'Perchero Atelier de Latón Cepillado & Seda',
        modelId: 'fancy_picture_frame_01',
        camPos: { x: -1.65, y: 9.8 + 1.32, z: -10.85 },
        camTarget: { x: -3.45, y: 9.8 + 1.18, z: -13.15 },
        promptToken: 'bespoke brushed-brass and dark walnut couture wardrobe rack with draped emerald velvet gown, charcoal silk slip, leather hatbox and gilded Dutch oil painting behind',
        motionPrompt: 'Soft vanity bulb light caressing draped silk charmeuse, emerald velvet folds and warm brushed brass hangers in quiet dressing room, motion strength 2.0'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Yemas de los dedos apoyadas en el borde tallado de la consola, hombros relajados frente al espejo.',
      voiceAndFoley: 'Toque cristalino de frasco de perfume sobre madera + respiración íntima confesional.'
    }
  },

  bath: {
    spotId: 'bath',
    artDirectionTitle: 'Santuario Hidrotermal en Piedra Basáltica',
    recommendedDirectorId: 'villeneuve_deakins',
    recommendedShotTypeId: 'ms_waist',
    recommendedMoveId: 'pedestal_reveal_up',
    recommendedForegroundId: 'monstera_leaf',
    recommendedWardrobeId: 'spa_minimal_towel_silk',
    compatibleWardrobes: ['spa_minimal_towel_silk', 'charcoal_silk_slip'],
    interiorLayers: {
      foreground: 'Follaje botánico húmedo (helecho / monstera) y llama de vela en primer plano bajo.',
      midground: 'Alina recostada en la tina monolítica oscura rodeada de vapor suave y reflejos de agua.',
      background: 'Mampara traslúcida esmerilada, banco de teca con toallas enrolladas, faroles cálidos (wooden_lantern_01), jarrones cerámicos artesanales (ceramic_vase_01), helechos (fern_02) y aplique tenue.',
      floorAndWalls: 'Esterilla/alfombra de teca y lino crudo frente a la tina + hornacina iluminada con velas.'
    },
    lightingRecipe: {
      kelvinKey: 2600,
      kelvinRim: 5200,
      contrastRatio: '6:1 Monolítico Suave',
      note: 'Luz lateral rasante estilo Deakins atravesando el vidrio esmerilado + puntos cálidos de velas sobre el agua.'
    },
    heroProps: [
      {
        name: 'Jarrones Cerámicos, Farol de Teca & Velas Spa',
        modelId: 'ceramic_vase_01',
        camPos: { x: -9.6, y: 9.8 + 0.88, z: -8.9 },
        camTarget: { x: -11.1, y: 9.8 + 0.48, z: -10.7 },
        promptToken: 'handcrafted matte stoneware ceramic vase, rolled Belgian linen spa towels on teak bench and glowing wooden lantern beside dark basalt bathtub',
        motionPrompt: 'Soft warm candle reflections and delicate wisps of spa steam drifting past matte ceramic vase and linen towels, 100mm macro, motion strength 2.0'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Brazos reposando serenamente sobre el borde curvo de piedra basáltica.',
      voiceAndFoley: 'Goteo lento y cálido de agua + reverberación suave de piedra natural + voz pausada terapéutica.'
    }
  },

  kitchen: {
    spotId: 'kitchen',
    artDirectionTitle: 'Cocina de Autor en Mármol Nero Marquina & Cobre',
    recommendedDirectorId: 'guadagnino_mukdeeprom',
    recommendedShotTypeId: 'mcu_interview',
    recommendedMoveId: 'lateral_slider_truck',
    recommendedForegroundId: 'crystal_glass',
    recommendedWardrobeId: 'eixample_cream_trench',
    compatibleWardrobes: ['eixample_cream_trench', 'charcoal_silk_slip'],
    interiorLayers: {
      foreground: 'Copa / jarrón en desenfoque sobre el extremo de la isla de mármol.',
      midground: 'Alina junto a la isla Nero Marquina bajo las tres lámparas colgantes modernas.',
      background: 'Aparador contemporáneo de nogal (modern_wooden_cabinet) al fondo con vajilla de porcelana (tea_set_01), botellas seleccionadas, frutero/jarrón en latón y mesa de comedor vestida con 4 sillas esculpidas.',
      floorAndWalls: 'Alfombra tejida de yute oscuro delimitando el comedor + cuadros enmarcados sobre el muro este.'
    },
    lightingRecipe: {
      kelvinKey: 3800,
      kelvinRim: 5500,
      contrastRatio: '3:1 Matinal Natural',
      note: 'Luz natural lateral de ventanal combinada con las tres colgantes cálidas sobre la veta del mármol negro.'
    },
    heroProps: [
      {
        name: 'Juego de Porcelana & Cobre sobre Mármol Nero Marquina',
        modelId: 'tea_set_01',
        camPos: { x: 5.75, y: 9.8 + 1.26, z: -6.85 },
        camTarget: { x: 7.25, y: 9.8 + 1.02, z: -8.05 },
        promptToken: 'fine porcelain espresso and tea service set beside brushed brass vase and wine bottles on veined black Nero Marquina marble kitchen island',
        motionPrompt: 'Smooth lateral 100mm macro slider across porcelain cup with rising morning steam on black veined marble counter, motion strength 2.2'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Ambas manos rodeando la taza de porcelana apoyada sobre la encimera de mármol.',
      voiceAndFoley: 'Porcelana posándose suavemente en mármol + pájaros lejanos del Eixample por la mañana.'
    }
  },

  suite: {
    spotId: 'suite',
    artDirectionTitle: 'Suite Principal en Nogal, Lino Carbón & Balcón Eixample',
    recommendedDirectorId: 'coppola_intimate',
    recommendedShotTypeId: 'ms_waist',
    recommendedMoveId: 'slow_dolly_pull_out',
    recommendedForegroundId: 'perfume_bottle',
    recommendedWardrobeId: 'charcoal_silk_slip',
    compatibleWardrobes: ['charcoal_silk_slip', 'eixample_cream_trench'],
    interiorLayers: {
      foreground: 'Lámpara de mesilla / dosel en primer plano suave.',
      midground: 'Alina en la cama señorial (GothicBed_01) vestida con cojines mullidos (throw_pillows_01) sobre tarima de nogal.',
      background: 'Mesillas clásicas con lámparas articuladas, butaca mid-century de lectura (mid_century_lounge_chair) con mesita alta (side_table_tall_01), araña de techo y balcón modernista al sur.',
      floorAndWalls: 'Gran alfombra tejida marfil-grafito desbordando bajo la tarima de la cama + cortinajes de terciopelo enmarcando el balcón.'
    },
    lightingRecipe: {
      kelvinKey: 2800,
      kelvinRim: 4600,
      contrastRatio: '4:1 Íntimo Nocturno',
      note: 'Doble lámpara cálida de mesilla creando simetría suave + contraluz azulado o dorado entrante desde el balcón.'
    },
    heroProps: [
      {
        name: 'Rincón de Lectura Mid-Century & Mesilla Clásica',
        modelId: 'mid_century_lounge_chair',
        camPos: { x: -1.4, y: 9.8 + 1.18, z: -0.2 },
        camTarget: { x: -3.2, y: 9.8 + 0.65, z: -1.6 },
        promptToken: 'sculpted mid-century wooden lounge chair with linen throw pillows beside tall walnut side table and warm bedside lamp in Barcelona suite',
        motionPrompt: 'Gentle golden balcony light shifting across woven linen cushions and warm walnut wood grain, locked 85mm still-life, motion strength 2.0'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Mano descansando sobre el pliegue de las sábanas de lino carbón.',
      voiceAndFoley: 'Roce suave de lino lavado + silencio nocturno residencial + voz cálida de cierre del día.'
    }
  },

  // ---------------------- PISO 1: LE VELVET CAFÉ -----------------------------
  cafe: {
    spotId: 'cafe',
    artDirectionTitle: 'Boutique Specialty Coffee & Salón Modernista',
    recommendedDirectorId: 'guadagnino_mukdeeprom',
    recommendedShotTypeId: 'mcu_interview',
    recommendedMoveId: 'slow_dolly_push_in',
    recommendedForegroundId: 'monstera_leaf',
    recommendedWardrobeId: 'eixample_cream_trench',
    compatibleWardrobes: ['eixample_cream_trench', 'clinical_blazer_corset'],
    interiorLayers: {
      foreground: 'Hojas botánicas interiores / borde de candelabro de latón en mesa bistró cercana.',
      midground: 'Alina junto a las mesas de mármol Carrara vestidas con juegos de porcelana (tea_set_01) y sillas Thonet esculpidas.',
      background: 'Barra de roble de 6 m con La Marzocco en cobre, aparador de madera con libros y jarrones, letrero luminoso «LE VELVET CAFÉ», arañas clásicas y butacas lounge con alfombras.',
      floorAndWalls: 'Suelo de mármol Carrara zonificado con medallón de baldosa hidráulica barcelonesa (SET-02) y alfombras de salón laterales.'
    },
    lightingRecipe: {
      kelvinKey: 4600,
      kelvinRim: 3100,
      contrastRatio: '2.8:1 Editorial Luminoso',
      note: 'Luz matinal mediterránea entrando desde el balcón sur + brillo cálido de las arañas y el letrero al fondo.'
    },
    heroProps: [
      {
        name: 'Servicio de Café en Mesa Carrara & Barra al Fondo',
        modelId: 'tea_set_01',
        camPos: { x: -1.35, y: 4.9 + 1.12, z: -2.65 },
        camTarget: { x: -2.0, y: 4.9 + 0.82, z: -3.5 },
        promptToken: 'artisan ceramic coffee cup and saucer beside brass candleholder on white Carrara marble bistro table with blurry copper espresso bar in background',
        motionPrompt: 'Delicate steam rising from fresh espresso on Carrara marble table while warm cafe chandelier bokeh glows softly behind, 100mm macro, motion strength 2.0'
      },
      {
        name: 'Librería Literaria, Busto Clásico & Perchero Bistró',
        modelId: 'steel_frame_shelves_03',
        camPos: { x: -9.4, y: 4.9 + 1.36, z: -8.2 },
        camTarget: { x: -11.9, y: 4.9 + 1.25, z: -9.8 },
        promptToken: 'modernist Eixample literary cafe corner with steel-and-walnut bookshelves filled with art encyclopedias, classical marble bust on Carrara pedestal and gilded Dutch paintings',
        motionPrompt: 'Warm morning sunlight gliding across leatherbound book spines, sculpted white marble bust and lush tropical indoor foliage, locked 85mm still, motion strength 2.0'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Dedos apoyados en el canto de mármol blanco de la mesa bistró o sosteniendo gafas de carey.',
      voiceAndFoley: 'Vapor lejano de lanceta espresso + porcelana sutil + tono reflexivo matutino.'
    }
  },

  walk_cafe: {
    spotId: 'walk_cafe',
    artDirectionTitle: 'SET-02 · Pasarela Eixample & Balcón Hidráulico',
    recommendedDirectorId: 'lubezki_natural',
    recommendedShotTypeId: 'ms_waist',
    recommendedMoveId: 'handheld_walking_lubezki',
    recommendedForegroundId: 'monstera_leaf',
    recommendedWardrobeId: 'eixample_cream_trench',
    compatibleWardrobes: ['eixample_cream_trench', 'clinical_blazer_corset'],
    interiorLayers: {
      foreground: 'Follaje de maceteros altos en el encuadre lateral del balcón.',
      midground: 'Pasillo despejado de 3.2 m para locomoción fluida de Alina hacia la luz natural del balcón.',
      background: 'Zona lounge este con sillones esculpidos, cojines, mesita con libros, cuadros enmarcados y apliques cálidos.',
      floorAndWalls: 'Alfombra pasillera de baldosa hidráulica modernista guiando visualmente la línea de fuga.'
    },
    lightingRecipe: {
      kelvinKey: 5000,
      kelvinRim: 3400,
      contrastRatio: '3:1 Contraluz Lubezki',
      note: 'Renderizar con START_ONLY + 4% overscan (1124×1998) y cortar clip a <= 3.0s para evitar jelly-walls.'
    },
    heroProps: [
      {
        name: 'Salón de Lectura del Café & Ventanal',
        modelId: 'ArmChair_01',
        camPos: { x: 4.8, y: 4.9 + 1.15, z: -2.6 },
        camTarget: { x: 6.4, y: 4.9 + 0.68, z: -4.2 },
        promptToken: 'tufted armchair with woven throw pillows beside round wooden coffee table, ceramic vase and sunlit Eixample balcony railing',
        motionPrompt: 'Warm afternoon sunbeams shifting gently across armchair upholstery and marble floor, locked 50mm editorial still, motion strength 2.0'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Paso sereno con brazos relajados en caída natural; mantener encuadre cintura-arriba en walking <= 3.0s.',
      voiceAndFoley: 'Pasos suaves sobre mármol + ambiente urbano tenue de terraza en Barcelona.'
    }
  },

  // ---------------------- PLANTA BAJA: CABARET NOCTURNE ----------------------
  cabaret: {
    spotId: 'cabaret',
    artDirectionTitle: 'Speakeasy Art-Déco, Terciopelo Carmesí & Piano de Cola',
    recommendedDirectorId: 'refn_neon_noir',
    recommendedShotTypeId: 'ms_waist',
    recommendedMoveId: 'subtle_parallax_arc',
    recommendedForegroundId: 'crystal_glass',
    recommendedWardrobeId: 'emerald_velvet_evening',
    compatibleWardrobes: ['emerald_velvet_evening', 'boudoir_leather_choker'],
    interiorLayers: {
      foreground: 'Copa de cristal / candelabro VIP desenfocado en primer término.',
      midground: 'Alina en el eje escénico entre la pista con filete cian, el piano de cola negro lacado y la araña central.',
      background: 'Telones pesados de terciopelo carmesí en el escenario, barra oeste retroiluminada con botellas, reservados VIP sobre alfombra persa con butacas, copas de latón y apliques en el muro de ladrillo.',
      floorAndWalls: 'Mármol negro reflectante + pista geométrica + alfombras persas delimitando los reservados VIP.'
    },
    lightingRecipe: {
      kelvinKey: 2800,
      kelvinRim: 6000,
      contrastRatio: '7:1 Neon-Noir Escénico',
      note: 'Contraste teatral magenta/ámbar frente a líneas cian de piso y charol negro del piano de cola.'
    },
    heroProps: [
      {
        name: 'Reservado VIP con Copas de Latón & Candelabros',
        modelId: 'brass_goblets',
        camPos: { x: 6.6, y: 1.18, z: -1.4 },
        camTarget: { x: 8.1, y: 0.72, z: -2.5 },
        promptToken: 'luxury speakeasy VIP round table with ornate brass goblets, glowing brass candelabra and tufted velvet armchair in moody neon-noir cabaret',
        motionPrompt: 'Warm candlelight and subtle magenta-cyan cabaret reflections glinting on brass goblets and dark wood table, 100mm macro, motion strength 2.2'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Postura escénica esculpida; en baile Rumba usar siempre START_ONLY y clips cortos de 2.8s.',
      voiceAndFoley: 'Acorde grave de piano con pedal en sala amplia + murmullo nocturno aterciopelado.'
    }
  },

  parking: {
    spotId: 'parking',
    artDirectionTitle: 'Marquesina VIP «NOCTURNE» & Alfombra Roja Urbana',
    recommendedDirectorId: 'wong_kar_wai_doyle',
    recommendedShotTypeId: 'fs_full_body',
    recommendedMoveId: 'slow_dolly_push_in',
    recommendedForegroundId: 'crystal_glass',
    recommendedWardrobeId: 'emerald_velvet_evening',
    compatibleWardrobes: ['emerald_velvet_evening', 'boudoir_leather_choker', 'clinical_blazer_corset'],
    interiorLayers: {
      foreground: 'Postes de latón con cordón de terciopelo carmesí y farolas esculpidas enmarcando la llegada.',
      midground: 'Alina sobre la alfombra roja bajo la marquesina iluminada «NOCTURNE».',
      background: 'Interior del cabaret entreabierto con neón cálido + bulevar arbolado con jardineras de piedra, faroles y berlinas aparcadas.',
      floorAndWalls: 'Acera de hormigón cepillado húmedo, alfombra carmesí y fachada de piedra caliza con molduras.'
    },
    lightingRecipe: {
      kelvinKey: 3000,
      kelvinRim: 5800,
      contrastRatio: '5:1 Cinematográfico Nocturno',
      note: 'Halación cálida de farolas urbanas y neón magenta recortando la silueta contra la noche.'
    },
    heroProps: [
      {
        name: 'Catenarias de Latón, Farola Clásica & Marquesina',
        modelId: 'street_lamp_01',
        camPos: { x: -2.6, y: 1.35, z: 5.6 },
        camTarget: { x: -1.1, y: 0.95, z: 3.3 },
        promptToken: 'polished brass VIP stanchions with crimson velvet rope on wet city sidewalk under glowing neon cabaret marquee at night',
        motionPrompt: 'Warm streetlamp and neon marquee reflections shimmering subtly on polished brass stanchion post at night, 85mm shallow depth of field, motion strength 2.1'
      }
    ],
    performanceAndSound: {
      handsAnchor: 'Caminata o parada segura mirando sobre el hombro (< 20° de giro craneal).',
      voiceAndFoley: 'Ambiente nocturno elegante de bulevar + graves amortiguados saliendo tras la puerta del club.'
    }
  }
};

export function getWardrobeById(id) {
  return ALINA_WARDROBE_CATALOG.find((w) => w.id === id) || ALINA_WARDROBE_CATALOG[0];
}

export function getSpotBlueprint(spotId) {
  return SPOT_ADVISORY_BLUEPRINTS[spotId] || SPOT_ADVISORY_BLUEPRINTS.vanity;
}

/**
 * Calcula en vivo el Índice de Calidad Cinematográfica (0–100%) de una configuración de plano
 * cruzando las reglas de los 8 Jefes de Departamento.
 */
export function evaluateCouncilReadiness({
  spotId,
  wardrobeId,
  directorStyleId,
  focalMm = 85,
  motionStrength = 2.5,
  durationSec = 3.5,
  foregroundEnabled = true,
  attachedObjectsCount = 0
}) {
  const bp = getSpotBlueprint(spotId);
  const checks = [];
  let score = 0;

  // 1. Production Design (3 Capas + Foreground Bokeh)
  const fgOk = Boolean(foregroundEnabled) || focalMm >= 95;
  if (fgOk) score += 16;
  else score += 9;
  checks.push({
    dept: '01 · Interiorismo',
    ok: fgOk,
    detail: fgOk
      ? '3 capas métricas activas (Foreground + Sujeto + Fondo 3D vestido con alfombra y props).'
      : 'Activa Primer Término (Bokeh f/1.4) para completar la 3.ª capa de paralaje.'
  });

  // 2. Vestuario (Coherencia con el Spot)
  const wardOk = bp.compatibleWardrobes.includes(wardrobeId);
  score += wardOk ? 15 : 9;
  const ward = getWardrobeById(wardrobeId);
  checks.push({
    dept: '02 · Vestuario',
    ok: wardOk,
    detail: wardOk
      ? `Look «${ward.name}» armonizado con la paleta y luz de esta estancia.`
      : `Look válido, aunque Vestuario sugiere «${getWardrobeById(bp.recommendedWardrobeId).name}» para este set.`
  });

  // 3. Fotografía & Óptica
  const opticOk = focalMm >= 24 && focalMm <= 105;
  const dirMatch = !directorStyleId || directorStyleId === bp.recommendedDirectorId;
  score += opticOk ? (dirMatch ? 15 : 13) : 8;
  checks.push({
    dept: '03 · Fotografía',
    ok: opticOk,
    detail: `Óptica ${focalMm}mm en gate 9:16 • Kelvin Key ${bp.lightingRecipe.kelvinKey}K / Rim ${bp.lightingRecipe.kelvinRim}K (${bp.lightingRecipe.contrastRatio}).`
  });

  // 4. Property Master (Regla 1:2 B-Roll)
  const propsOk = attachedObjectsCount > 0 || bp.heroProps.length > 0;
  score += attachedObjectsCount > 0 ? 14 : 11;
  checks.push({
    dept: '04 · Atrezzo B-Roll',
    ok: propsOk,
    detail:
      attachedObjectsCount > 0
        ? `${attachedObjectsCount} Objeto(s) @handle vinculados para continuidad 1:2.`
        : `${bp.heroProps.length} Hero Prop(s) 3D esculpidos listos en sala para disparar B-Roll 100mm.`
  });

  // 5. Intimidad SSC & Actuación (Motion Strength)
  const motionOk = motionStrength >= 1.8 && motionStrength <= 3.5;
  score += motionOk ? 15 : 5;
  checks.push({
    dept: '05 · Dirección SSC',
    ok: motionOk,
    detail: motionOk
      ? `Motion Strength ${Number(motionStrength).toFixed(1)} en rango seguro (2.0–3.5) + boca cerrada + manos ancladas.`
      : `¡Alerta! Motion Strength ${Number(motionStrength).toFixed(1)} fuera de 2.0–3.5: riesgo de deformación facial.`
  });

  // 6. Diseño Sonoro & Voz
  score += 12;
  checks.push({
    dept: '06 · Sonido 3D',
    ok: true,
    detail: bp.performanceAndSound.voiceAndFoley
  });

  // 7 & 8. AI VFX & Montaje (Duración Zero-Waste)
  const durOk = durationSec <= 4.0;
  score += durOk ? 13 : 5;
  checks.push({
    dept: '07/08 · VFX & Corte',
    ok: durOk,
    detail: durOk
      ? `Duración ${durationSec}s <= 4.0s • CN Depth 0.68 @ 58% + Mask 7-IDs blindada.`
      : `Recorta duración (${durationSec}s) a <= 4.0s para evitar deriva temporal.`
  });

  return {
    score: Math.min(100, score),
    checks
  };
}
