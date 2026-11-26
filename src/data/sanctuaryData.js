export const FLOOR_HEIGHT = 4.9;
export const BUILDING_WIDTH = 26.0;
export const BUILDING_DEPTH = 16.0;
export const BUILDING_CENTER_Z = -6.5;

export const SANCTUARY_FLOORS = {
  4: {
    floorNumber: 4,
    floorName: 'PISO 4 • ROOFTOP & PENTHOUSE',
    subtitle: '«The Inner Circle» Terrace',
    badge: 'Penthouse VIP',
    badgeColor: 'amber',
    description: 'Plunge pool basáltica, tumbonas de teca, barra en cobre martillado, pérgola bioclimática y vistas skyline.',
    floorY: 4 * FLOOR_HEIGHT,
    funnelStage: 'High-Ticket / Membresía Anual',
    spots: [
      {
        id: 'pool',
        name: 'Plunge Pool Basáltica',
        icon: '🏊‍♀️',
        floor: 4,
        alinaPose: 'De pie al borde de la piscina infinita',
        alinaPos: { x: -2.5, y: 4 * FLOOR_HEIGHT + 0.06, z: -2.8 },
        alinaRotY: 0.25,
        defaultAnim: 'Idle',
        camPos: { x: -1.4, y: 4 * FLOOR_HEIGHT + 1.55, z: 0.4 },
        camTarget: { x: -2.5, y: 4 * FLOOR_HEIGHT + 1.38, z: -2.8 },
        macroPos: { x: -0.5, y: 4 * FLOOR_HEIGHT + 1.1, z: -4.2 },
        macroTarget: { x: -2.2, y: 4 * FLOOR_HEIGHT + 0.45, z: -6.2 },
        prompt: 'Cinematic 85mm medium shot of 28yo Dutch-Latin woman Alina Van Dijk standing beside volcanic stone plunge pool on luxury rooftop deck at sunset, vivid copper red hair with natural soft waves, vivid emerald green eyes, light freckles, crimson lips, black silk resort wrap, turquoise water reflections, golden hour rim light --ar 9:16',
        script: 'Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo.',
        brolls: [
          'B-Roll 1: Reflejos dorados sobre el agua turquesa de la plunge pool basáltica.',
          'B-Roll 2: Tumbona de teca con copa de cristal tallado al atardecer.'
        ]
      },
      {
        id: 'bar',
        name: 'Barra de Cócteles Botánicos',
        icon: '🍸',
        floor: 4,
        alinaPose: 'Junto a la barra de cobre martillado',
        alinaPos: { x: 4.5, y: 4 * FLOOR_HEIGHT + 0.06, z: -7.8 },
        alinaRotY: -0.35,
        defaultAnim: 'Idle',
        camPos: { x: 3.1, y: 4 * FLOOR_HEIGHT + 1.55, z: -4.6 },
        camTarget: { x: 4.5, y: 4 * FLOOR_HEIGHT + 1.38, z: -7.8 },
        macroPos: { x: 4.6, y: 4 * FLOOR_HEIGHT + 1.45, z: -7.5 },
        macroTarget: { x: 5.5, y: 4 * FLOOR_HEIGHT + 1.18, z: -9.5 },
        prompt: '28yo Dutch-Latin woman Alina Van Dijk standing by polished hammered copper rooftop cocktail bar, vivid copper red hair, emerald green eyes, holding crystal martini glass, moody skyline bokeh, warm backlighting, 85mm f/1.4 --ar 9:16',
        script: 'La mente necesita un antídoto contra el exceso de control. Este es el mío. [pausa de 1.5s] Salud por los que no le temen a su propia vulnerabilidad.',
        brolls: [
          'B-Roll 1: Botellas ámbar retroiluminadas sobre estantería de latón.',
          'B-Roll 2: Macro de copa de martini sobre barra de cobre martillado.'
        ]
      }
    ]
  },
  3: {
    floorNumber: 3,
    floorName: 'PISO 3 • THE MIND SANCTUARY',
    subtitle: 'Estudio Clínico & Boudoir',
    badge: 'Trabajo & Terapia',
    badgeColor: 'purple',
    description: 'Estudio de podcast con Shure SM7B, biblioteca clínica, diván de cuero negro y laboratorio sensorial SSC.',
    floorY: 3 * FLOOR_HEIGHT,
    funnelStage: 'Conversión Fanvue & Telegram VIP',
    spots: [
      {
        id: 'podcast',
        name: 'The Mind Sanctuary (Podcast)',
        icon: '🎙️',
        floor: 3,
        alinaPose: 'Frente al escritorio clínico y Shure SM7B',
        alinaPos: { x: -4.8, y: 3 * FLOOR_HEIGHT, z: -8.8 },
        alinaRotY: 0.15,
        defaultAnim: 'Idle',
        camPos: { x: -4.1, y: 3 * FLOOR_HEIGHT + 1.52, z: -5.4 },
        camTarget: { x: -4.8, y: 3 * FLOOR_HEIGHT + 1.42, z: -8.8 },
        macroPos: { x: -3.5, y: 3 * FLOOR_HEIGHT + 1.35, z: -6.8 },
        macroTarget: { x: -4.5, y: 3 * FLOOR_HEIGHT + 1.05, z: -8.2 },
        prompt: 'Cinematic medium close-up of 28yo Dutch-Latin woman Alina Van Dijk in dark loft podcast studio SET-01, vivid copper red hair, vivid emerald green eyes, light freckles, Shure SM7B microphone on boom arm, exposed dark brick wall, warm Edison bulb, bookshelf with psychoanalysis books, 85mm f/1.8 --ar 9:16',
        script: 'Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo.',
        brolls: [
          'B-Roll 1: Vapor de café espresso sobre cuaderno de notas clínicas en nogal.',
          'B-Roll 2: Rack focus por lomos antiguos de Bataille y Foucault junto a vaso ámbar.'
        ]
      },
      {
        id: 'boudoir',
        name: 'Boudoir Velvet & Terapia SSC',
        icon: '🗝️',
        floor: 3,
        alinaPose: 'En el laboratorio sensorial junto al micrófono 3Dio',
        alinaPos: { x: 4.5, y: 3 * FLOOR_HEIGHT, z: -7.5 },
        alinaRotY: -0.25,
        defaultAnim: 'Idle',
        camPos: { x: 3.4, y: 3 * FLOOR_HEIGHT + 1.5, z: -4.0 },
        camTarget: { x: 4.5, y: 3 * FLOOR_HEIGHT + 1.35, z: -7.5 },
        macroPos: { x: 3.6, y: 3 * FLOOR_HEIGHT + 1.15, z: -6.2 },
        macroTarget: { x: 4.8, y: 3 * FLOOR_HEIGHT + 0.9, z: -7.9 },
        prompt: '28yo Dutch-Latin woman Alina Van Dijk in luxury chiaroscuro boudoir SET-04, emerald velvet tufted headboard behind her, warm candlelight shadows, silk shibari rope rack in soft bokeh, hypnotic emerald gaze, 85mm prime lens --ar 9:16',
        script: 'El poder real nunca se impone a la fuerza. Se entrega voluntariamente a quien sabe sostenerlo sin juicio. [pausa de 2.0s] ¿Estás listo?',
        brolls: [
          'B-Roll 1: Paneo macro por madejas de cuerda shibari lila y negra sobre satén.',
          'B-Roll 2: Micrófono binaural 3Dio y antifaz de cuero pulido bajo luz de vela.'
        ]
      }
    ]
  },
  2: {
    floorNumber: 2,
    floorName: 'PISO 2 • RESIDENCIA PRIVADA',
    subtitle: 'Hogar Privado («Donde Nace Todo»)',
    badge: 'Residencia Alina',
    badgeColor: 'copper',
    description: '4 estancias divididas con tabiques reales: tocador vanity con 12 bombillas, baño spa con tina basáltica, cocina de autor y suite principal.',
    floorY: 2 * FLOOR_HEIGHT,
    funnelStage: 'Top-Funnel / Intimidad Cotidiana',
    spots: [
      {
        id: 'vanity',
        name: 'El Tocador Vanity & Vestidor',
        icon: '💄',
        floor: 2,
        alinaPose: 'Frente al tocador iluminado y espejo vanity',
        alinaPos: { x: -0.4, y: 2 * FLOOR_HEIGHT, z: -10.8 },
        alinaRotY: 0.12,
        defaultAnim: 'Idle',
        camPos: { x: 0.25, y: 2 * FLOOR_HEIGHT + 1.5, z: -8.1 },
        camTarget: { x: -0.4, y: 2 * FLOOR_HEIGHT + 1.38, z: -10.8 },
        macroPos: { x: 0.45, y: 2 * FLOOR_HEIGHT + 1.15, z: -11.6 },
        macroTarget: { x: -0.35, y: 2 * FLOOR_HEIGHT + 0.85, z: -13.1 },
        prompt: 'Intimate cinematic shot of 28yo Dutch-Latin woman Alina Van Dijk by luxury dark walnut vanity table in Piso 2 suite, vivid copper red hair with soft waves, vivid emerald green eyes, light natural freckles, crimson lips, glowing round vanity bulbs in mirror behind her, black silk outfit, 85mm f/1.4 --ar 9:16',
        script: 'Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando.',
        brolls: [
          'B-Roll 1: Macro slider sobre labial carmesí dorado y frascos ámbar de perfume.',
          'B-Roll 2: Aro de bombillas cálidas reflejado en el espejo biselado.'
        ]
      },
      {
        id: 'bath',
        name: 'Baño Spa & Tina Monolítica',
        icon: '🛁',
        floor: 2,
        alinaPose: 'Recostada en tina basáltica entre velas',
        alinaPos: { x: -9.0, y: 2 * FLOOR_HEIGHT + 0.68, z: -7.8 },
        alinaRotY: 0.35,
        defaultAnim: 'Laying',
        camPos: { x: -6.8, y: 2 * FLOOR_HEIGHT + 1.65, z: -4.6 },
        camTarget: { x: -9.0, y: 2 * FLOOR_HEIGHT + 0.72, z: -7.8 },
        macroPos: { x: -7.4, y: 2 * FLOOR_HEIGHT + 1.1, z: -6.2 },
        macroTarget: { x: -8.8, y: 2 * FLOOR_HEIGHT + 0.55, z: -7.5 },
        prompt: '28yo Dutch-Latin woman Alina Van Dijk reclining in freestanding black basalt stone bathtub filled with warm water, copper hair pinned up loosely, emerald green eyes, surrounded by flickering scented candles and frosted glass partition, chiaroscuro luxury spa, 85mm f/1.8 --ar 9:16',
        script: 'El cuerpo guarda todo lo que la mente reprime. Cierra los ojos... siente el peso soltarse en el agua. [pausa de 2.0s] Yo me encargo del resto.',
        brolls: [
          'B-Roll 1: Llamas de velas aromáticas reflejadas sobre piedra basáltica negra.',
          'B-Roll 2: Bandeja de teca con sales minerales y toallas de algodón enrolladas.'
        ]
      },
      {
        id: 'kitchen',
        name: 'Cocina de Autor & Isla Mármol',
        icon: '☕',
        floor: 2,
        alinaPose: 'Junto a la isla de mármol Nero Marquina',
        alinaPos: { x: 6.0, y: 2 * FLOOR_HEIGHT, z: -7.6 },
        alinaRotY: -0.45,
        defaultAnim: 'Idle',
        camPos: { x: 4.5, y: 2 * FLOOR_HEIGHT + 1.5, z: -4.2 },
        camTarget: { x: 6.2, y: 2 * FLOOR_HEIGHT + 1.35, z: -7.6 },
        macroPos: { x: 5.5, y: 2 * FLOOR_HEIGHT + 1.25, z: -6.6 },
        macroTarget: { x: 7.2, y: 2 * FLOOR_HEIGHT + 0.98, z: -8.2 },
        prompt: '28yo Dutch-Latin woman Alina Van Dijk standing beside black Nero Marquina marble kitchen island, copper red waves, emerald eyes, brass pendant lights overhead, morning espresso cup on marble counter, 85mm f/1.8 --ar 9:16',
        script: 'Antes de que empiece el caos de tu agenda... regálate tres minutos de silencio absoluto. [pausa de 1.5s] Respira conmigo.',
        brolls: [
          'B-Roll 1: Vapor ascendiendo desde taza de espresso sobre mármol Nero Marquina.',
          'B-Roll 2: Lámparas colgantes de latón sobre copas de cristal suspendidas.'
        ]
      },
      {
        id: 'suite',
        name: 'Suite Principal & Balcón',
        icon: '🛏️',
        floor: 2,
        alinaPose: 'En la cama King de lino carbón',
        alinaPos: { x: -0.5, y: 2 * FLOOR_HEIGHT + 0.92, z: -3.2 },
        alinaRotY: 0.0,
        defaultAnim: 'Laying',
        camPos: { x: 1.4, y: 2 * FLOOR_HEIGHT + 1.68, z: 0.1 },
        camTarget: { x: -0.5, y: 2 * FLOOR_HEIGHT + 0.95, z: -3.2 },
        macroPos: { x: -2.2, y: 2 * FLOOR_HEIGHT + 1.25, z: -1.6 },
        macroTarget: { x: -2.2, y: 2 * FLOOR_HEIGHT + 0.85, z: -4.2 },
        prompt: '28yo Dutch-Latin woman Alina Van Dijk resting on king bed dressed in charcoal linen sheets, emerald velvet headboard, warm bedside table lamps, Eixample balcony doors behind, 85mm f/1.4 --ar 9:16',
        script: 'Apaga la pantalla. Deja de repasar mentalmente tus pendientes de mañana. [pausa de 2.0s] Tu mente necesita rendirse para poder renacer.',
        brolls: [
          'B-Roll 1: Lámpara de mesilla proyectando luz ámbar sobre lino carbón.',
          'B-Roll 2: Copa de vino tinto en mesa del balcón modernista al atardecer.'
        ]
      }
    ]
  },
  1: {
    floorNumber: 1,
    floorName: 'PISO 1 • LE VELVET CAFÉ',
    subtitle: 'Cafetería Especialidad & Balcón',
    badge: 'Lifestyle Diurno',
    badgeColor: 'emerald',
    description: 'Barra de roble con cafetera La Marzocco en cobre, vitrina de repostería, 4 mesas Carrara con sillas Thonet y balcón.',
    floorY: 1 * FLOOR_HEIGHT,
    funnelStage: 'Descubrimiento & Street Lifestyle',
    spots: [
      {
        id: 'cafe',
        name: 'Barra La Marzocco & Mesas Carrara',
        icon: '🥐',
        floor: 1,
        alinaPose: 'De pie junto a las mesas de mármol Carrara',
        alinaPos: { x: -2.0, y: 1 * FLOOR_HEIGHT, z: -3.5 },
        alinaRotY: 0.2,
        defaultAnim: 'Idle',
        camPos: { x: -0.9, y: 1 * FLOOR_HEIGHT + 1.5, z: -0.3 },
        camTarget: { x: -2.0, y: 1 * FLOOR_HEIGHT + 1.35, z: -3.5 },
        macroPos: { x: -1.4, y: 1 * FLOOR_HEIGHT + 1.45, z: -6.5 },
        macroTarget: { x: 0.0, y: 1 * FLOOR_HEIGHT + 1.25, z: -9.5 },
        prompt: '28yo Dutch-Latin woman Alina Van Dijk inside boutique Barcelona specialty coffee lounge, Carrara marble bistro tables, oak bar with copper La Marzocco espresso machine behind, soft morning sunlight, 85mm f/2.0 --ar 9:16',
        script: 'La productividad sin introspección es solo ansiedad disfrazada de éxito. [pausa de 1.5s] ¿Tú qué buscas hoy?',
        brolls: [
          'B-Roll 1: Cafetera La Marzocco en cobre pulido extrayendo espresso.',
          'B-Roll 2: Mesa bistró de mármol blanco junto al ventanal del Eixample.'
        ]
      },
      {
        id: 'walk_cafe',
        name: 'Pasarela Interior Café (Walking)',
        icon: '🚶‍♀️',
        floor: 1,
        alinaPose: 'Caminando entre mesas hacia el balcón',
        alinaPos: { x: 2.8, y: 1 * FLOOR_HEIGHT, z: -3.0 },
        alinaRotY: -0.15,
        defaultAnim: 'Walk',
        camPos: { x: 2.2, y: 1 * FLOOR_HEIGHT + 1.48, z: 0.4 },
        camTarget: { x: 2.8, y: 1 * FLOOR_HEIGHT + 1.25, z: -3.0 },
        macroPos: { x: 4.5, y: 1 * FLOOR_HEIGHT + 1.1, z: -2.2 },
        macroTarget: { x: 3.5, y: 1 * FLOOR_HEIGHT + 0.78, z: -3.2 },
        prompt: 'Walking selfie style shot of 28yo Dutch-Latin woman Alina Van Dijk walking gracefully across specialty coffee lounge toward wrought-iron balcony, natural copper hair movement, warm daylight --ar 9:16',
        script: 'Tres minutos para ordenar la cabeza antes de entrar en sesión.',
        brolls: [
          'B-Roll 1: Hojas de monstera y luz natural atravesando el balcón.',
          'B-Roll 2: Vitrina iluminada con repostería artesanal.'
        ]
      }
    ]
  },
  0: {
    floorNumber: 0,
    floorName: 'PLANTA BAJA • CABARET & PARKING',
    subtitle: 'Nocturne Speakeasy & Exterior',
    badge: 'Speakeasy & Exterior',
    badgeColor: 'rose',
    description: 'Parking exterior 28m×18m con 8 líneas amarillas, 4 coches, 3 farolas, marquesina VIP con alfombra roja, pista neón, barra y piano de cola.',
    floorY: 0.0,
    funnelStage: 'Mundo Exterior / Viral Dance & Reels',
    spots: [
      {
        id: 'cabaret',
        name: 'Pista Neón & Piano de Cola',
        icon: '🎷',
        floor: 0,
        alinaPose: 'Bailando en el escenario junto al piano',
        alinaPos: { x: 0.0, y: 0.45, z: -10.5 },
        alinaRotY: 0.0,
        defaultAnim: 'Rumba',
        camPos: { x: 1.5, y: 1.85, z: -6.8 },
        camTarget: { x: 0.0, y: 1.45, z: -10.5 },
        macroPos: { x: -3.5, y: 1.55, z: -7.0 },
        macroTarget: { x: -5.8, y: 0.95, z: -9.5 },
        prompt: '28yo Dutch-Latin woman Alina Van Dijk on elevated wood stage inside Nocturne speakeasy club, crimson velvet curtains, glowing cyan floor rim, grand black lacquered piano nearby, dramatic chiaroscuro spotlights, 85mm f/1.4 --ar 9:16',
        script: 'Las mejores conversaciones ocurren cuando la ciudad se va a dormir y caen todas las máscaras. [pausa de 2.0s] ¿Entras?',
        brolls: [
          'B-Roll 1: Teclas blancas y negras del piano de cola bajo foco cálido.',
          'B-Roll 2: Copa iluminada sobre mesa de cóctel con vela parpadeante.'
        ]
      },
      {
        id: 'parking',
        name: 'Parking Exterior & Alfombra VIP',
        icon: '🚗',
        floor: 0,
        alinaPose: 'Llegando por la alfombra roja bajo el neón NOCTURNE',
        alinaPos: { x: 0.0, y: 0.16, z: 3.4 },
        alinaRotY: 0.0,
        defaultAnim: 'Walk',
        camPos: { x: 1.8, y: 1.55, z: 7.4 },
        camTarget: { x: 0.0, y: 1.25, z: 3.4 },
        macroPos: { x: -3.2, y: 1.35, z: 9.2 },
        macroTarget: { x: -3.8, y: 0.7, z: 12.5 },
        prompt: 'Full body evening street shot of 28yo Dutch-Latin woman Alina Van Dijk walking on red carpet under glowing magenta NOCTURNE marquee sign, parked luxury cars and glowing streetlamps on wet asphalt behind, 85mm f/1.8 --ar 9:16',
        script: 'Deja el ruido afuera. Aquí dentro las reglas las pongo yo.',
        brolls: [
          'B-Roll 1: Reflejo de farola cálida y neón magenta sobre capó negro brillante.',
          'B-Roll 2: Postes dorados y cordón de terciopelo en la entrada del club.'
        ]
      }
    ]
  }
};
