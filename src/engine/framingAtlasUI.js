// ============================================================================
// ATLAS VISUAL DE ENCUADRES (30) & MOVIMIENTOS DE CÁMARA (15)
// Muestra cada tipo de toma y rig mecánico con:
//  1) Visor esquemático 9:16 óptico instantáneo + Animación tipo GIF en bucle continuo
//  2) Renderizador real 3D bajo demanda / en lote (Pantallazos PNG 9:16 + Loops animados 3D reales)
//  3) Salto directo en 1 clic ("🎬 Aplicar y Ver en Plató 3D")
// ============================================================================

import catalog from '../data/cinematographyCatalog.json';
import { SANCTUARY_FLOORS } from '../data/sanctuaryData.js';
import * as HF from './higgsfieldAdapter.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/**
 * Construye una previsualización SVG 9:16 cinematográfica ultra-clara que representa a escala
 * el recorte exacto de Alina (ECU, CU, MCU, MS, Americano, FS, WS, Perfil, OTS Espejo, Picado, Contrapicado, B-Roll)
 * mientras el usuario no haya generado aún el pantallazo WebGL real (o como comparativa técnica).
 */
function buildShotPreviewSvg(st) {
  const id = st.id;
  const isBroll = st.shotRoleDefault === 'B-Roll';
  const roll = st.rollDeg || 0;

  // Escala y encuadre de la silueta de Alina dentro del viewBox 180x320 (9:16)
  let figScale = 1.0;
  let figY = 165;
  let figX = 90;
  let profileShift = 0;
  let isRear = false;

  if (id === 'ecu_eyes') { figScale = 3.9; figY = 395; }
  else if (id === 'choker_lips_cu') { figScale = 3.5; figY = 335; }
  else if (id === 'cu_portrait') { figScale = 2.45; figY = 278; }
  else if (id === 'rembrandt_3q_cu') { figScale = 2.35; figY = 272; profileShift = 10; }
  else if (id === 'silhouette_profile_90') { figScale = 2.3; figY = 270; profileShift = 22; }
  else if (id === 'mcu_interview' || id === 'dutch_tension_cu') { figScale = 1.85; figY = 232; }
  else if (id === 'high_editorial_beauty') { figScale = 2.0; figY = 250; }
  else if (id === 'low_angle_authority') { figScale = 1.65; figY = 212; }
  else if (id === 'heroic_floor_low') { figScale = 1.32; figY = 188; }
  else if (id === 'ots_mirror') { figScale = 1.75; figY = 235; isRear = true; }
  else if (id === 'back_mystery_follow') { figScale = 1.85; figY = 235; isRear = true; }
  else if (id === 'doorframe_voyeur') { figScale = 1.28; figY = 195; }
  else if (id === 'dirty_single_fg') { figScale = 1.68; figY = 222; figX = 104; }
  else if (id === 'surface_reflection_low') { figScale = 1.45; figY = 185; }
  else if (id === 'seated_listener_pov') { figScale = 1.65; figY = 215; }
  else if (id === 'ms_waist') { figScale = 1.48; figY = 205; }
  else if (id === 'cowboy_american' || id === 'seated_lounge_3q') { figScale = 1.22; figY = 186; }
  else if (id === 'fs_full_body') { figScale = 0.96; figY = 166; }
  else if (id === 'walking_selfie_24mm') { figScale = 1.95; figY = 248; }
  else if (id === 'ws_architectural') { figScale = 0.74; figY = 162; }
  else if (id === 'cathedral_16mm_wide') { figScale = 0.58; figY = 162; }
  else if (id === 'top_down_zenital') { figScale = 0.88; figY = 168; }
  else if (id === 'high_corner_loft') { figScale = 0.78; figY = 172; figX = 96; }

  const elevBadge = st.elevationDeg > 8 ? `Picado +${st.elevationDeg}°` : st.elevationDeg < -6 ? `Contrapicado ${st.elevationDeg}°` : 'Nivel Ojos';
  const doorOverlay =
    id === 'doorframe_voyeur'
      ? `<rect x="0" y="0" width="38" height="320" fill="#07080c" opacity="0.92"/><rect x="144" y="0" width="36" height="320" fill="#07080c" opacity="0.88"/>`
      : '';
  const fgBokeh =
    st.autoForeground || id === 'dirty_single_fg'
      ? `<circle cx="34" cy="268" r="46" fill="#c86446" opacity="0.34"/><circle cx="24" cy="282" r="28" fill="#10b981" opacity="0.28"/>`
      : '';
  const mirrorFrame =
    id === 'ots_mirror'
      ? `<circle cx="96" cy="118" r="48" fill="#18202c" stroke="#d4af37" stroke-width="3"/><circle cx="96" cy="108" r="15" fill="#e2b49a"/><ellipse cx="96" cy="142" rx="24" ry="18" fill="#1f242d"/>`
      : '';

  const brollGraphic = isBroll
    ? id === 'broll_chandelier_sconce'
      ? `<g transform="translate(90,115)">
           <line x1="0" y1="-115" x2="0" y2="-35" stroke="#d4af37" stroke-width="3"/>
           <ellipse cx="0" cy="-20" rx="44" ry="16" fill="none" stroke="#d4af37" stroke-width="2.5"/>
           <circle cx="-36" cy="-24" r="7" fill="#ffd89b"/><circle cx="0" cy="-14" r="8" fill="#ffd89b"/><circle cx="36" cy="-24" r="7" fill="#ffd89b"/>
           <circle cx="0" cy="-20" r="56" fill="#ffa94d" opacity="0.16"/>
         </g>`
      : id === 'broll_hands_surface'
        ? `<g transform="translate(90,185)">
             <rect x="-75" y="25" width="150" height="80" fill="#2a1c14"/>
             <path d="M-42,24 Q-15,4 18,22 L36,28 Q12,34 -28,30 Z" fill="#e0b196"/>
             <rect x="-36" y="12" width="12" height="16" rx="3" fill="#d4af37"/>
           </g>`
        : id === 'broll_collarbone_silk'
          ? `<g transform="translate(90,165)">
               <path d="M-75,95 Q-45,15 0,22 Q45,15 75,95 Z" fill="#171a22"/>
               <path d="M-42,22 Q0,38 42,22 L26,-25 L-26,-25 Z" fill="#dfb095"/>
               <rect x="-28" y="-12" width="56" height="8" rx="3" fill="#111216"/>
               <circle cx="0" cy="-8" r="7" fill="none" stroke="#d4af37" stroke-width="3"/>
             </g>`
          : id === 'broll_stride_heels'
            ? `<g transform="translate(90,215)">
                 <rect x="-90" y="38" width="180" height="68" fill="#3d131b"/>
                 <line x1="-90" y1="44" x2="90" y2="44" stroke="#d4af37" stroke-width="2"/>
                 <path d="M-24,-65 L-16,28 L8,38 L-12,38 L-24,18 L-28,38 L-34,38 L-34,-65 Z" fill="#15171e"/>
               </g>`
            : `<g transform="translate(90,178)">
                 <rect x="-75" y="36" width="150" height="70" fill="#1e222b"/>
                 <path d="M-26,36 L-20,-12 L20,-12 L26,36 Z" fill="#c86446"/>
                 <ellipse cx="0" cy="-12" rx="20" ry="6" fill="#ffd89b"/>
                 <path d="M-4,-24 Q6,-42 -2,-58" fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="2.5"/>
                 <circle cx="38" cy="18" r="18" fill="#d97706" opacity="0.75"/>
               </g>`
    : '';

  const humanGraphic = !isBroll
    ? `<g transform="translate(${figX},${figY}) rotate(${roll}) scale(${figScale})">
         <!-- Cabello cobrizo trasero -->
         <ellipse cx="${-profileShift * 0.3}" cy="-68" rx="22" ry="28" fill="#9e3d24"/>
         <!-- Torso & piernas -->
         <path d="M-26,-34 Q0,-40 26,-34 L32,38 L18,125 L4,125 L0,46 L-4,125 L-18,125 L-32,38 Z" fill="${isRear ? '#14171f' : '#1d212b'}" stroke="#c86446" stroke-opacity="0.35" stroke-width="1"/>
         <!-- Cuello & Cabeza -->
         <rect x="-6" y="-48" width="12" height="16" rx="4" fill="${isRear ? '#8c341e' : '#dfb095'}"/>
         <ellipse cx="${profileShift * 0.25}" cy="-68" rx="${profileShift > 16 ? 13 : 16}" ry="21" fill="${isRear ? '#9e3d24' : '#e4b79d'}"/>
         ${
           isRear
             ? `<path d="M-18,-72 Q0,-42 18,-72" fill="none" stroke="#c26733" stroke-width="2"/>`
             : `<circle cx="${-5 + profileShift * 0.35}" cy="-70" r="2.1" fill="#10b981"/>
                ${profileShift > 16 ? '' : `<circle cx="${5 + profileShift * 0.25}" cy="-70" r="2.1" fill="#10b981"/>`}
                <path d="M${-4 + profileShift * 0.3},-60 Q${profileShift * 0.3},-57 ${5 + profileShift * 0.3},-61" fill="none" stroke="#a61d34" stroke-width="1.8"/>
                <path d="M-17,-74 Q-6,-92 16,-76" fill="none" stroke="#b84a27" stroke-width="4.5"/>`
         }
       </g>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 320" class="w-full h-full block">
    <defs>
      <linearGradient id="bg_${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#171b26"/>
        <stop offset="65%" stop-color="#0e1017"/>
        <stop offset="100%" stop-color="#1d1412"/>
      </linearGradient>
    </defs>
    <rect width="180" height="320" fill="url(#bg_${id})"/>
    <!-- Líneas arquitectónicas de escala 4.90m + bokeh cálido -->
    <line x1="24" y1="0" x2="24" y2="245" stroke="#ffffff" stroke-opacity="0.06"/>
    <line x1="156" y1="0" x2="156" y2="245" stroke="#ffffff" stroke-opacity="0.06"/>
    <line x1="0" y1="245" x2="180" y2="245" stroke="#c86446" stroke-opacity="0.22"/>
    <circle cx="142" cy="68" r="14" fill="#ffb86c" opacity="0.22"/>
    <circle cx="42" cy="84" r="10" fill="#ffb86c" opacity="0.16"/>
    ${mirrorFrame}
    ${humanGraphic}
    ${brollGraphic}
    ${fgBokeh}
    ${doorOverlay}
    <!-- Tercios de cine -->
    <line x1="60" y1="0" x2="60" y2="320" stroke="#ffffff" stroke-opacity="0.08" stroke-dasharray="3,3"/>
    <line x1="120" y1="0" x2="120" y2="320" stroke="#ffffff" stroke-opacity="0.08" stroke-dasharray="3,3"/>
    <line x1="0" y1="106" x2="180" y2="106" stroke="#ffffff" stroke-opacity="0.08" stroke-dasharray="3,3"/>
    <line x1="0" y1="213" x2="180" y2="213" stroke="#ffffff" stroke-opacity="0.08" stroke-dasharray="3,3"/>
    <!-- Pastillas técnicas en monitor -->
    <rect x="8" y="8" width="76" height="18" rx="5" fill="#000000" fill-opacity="0.72"/>
    <text x="14" y="20" fill="#f29979" font-family="monospace" font-size="9.5" font-weight="bold">${st.defaultFocalMm}mm f/${st.defaultAperture}</text>
    <rect x="8" y="294" width="164" height="18" rx="5" fill="#000000" fill-opacity="0.72"/>
    <text x="90" y="306" text-anchor="middle" fill="#cbd5e1" font-family="monospace" font-size="8.5">${elevBadge} · Az ${st.azimuthOffsetDeg}° · ${st.distanceM}m</text>
  </svg>`;
}

/**
 * Construye el monitor animado tipo GIF (CSS @keyframes continuos a 60fps) para cada uno de los 15 Movimientos.
 */
function buildMoveAnimatedPreviewHtml(mv) {
  const animMap = {
    static_breathing: 'atlas-anim-breathe',
    slow_dolly_push_in: 'atlas-anim-push',
    slow_dolly_pull_out: 'atlas-anim-pull',
    vertigo_dolly_zoom_subtle: 'atlas-anim-vertigo',
    subtle_parallax_arc: 'atlas-anim-arc-r',
    subtle_parallax_arc_left: 'atlas-anim-arc-l',
    lateral_slider_truck: 'atlas-anim-truck',
    reveal_from_behind_wall: 'atlas-anim-reveal',
    pedestal_reveal_up: 'atlas-anim-ped-up',
    pedestal_sink_down: 'atlas-anim-ped-down',
    crane_jib_high_to_eye: 'atlas-anim-jib',
    rack_focus_macro_to_eyes: 'atlas-anim-rack-in',
    rack_focus_eyes_to_prop: 'atlas-anim-rack-out',
    handheld_walking_lubezki: 'atlas-anim-walk',
    fpv_slow_glide_through: 'atlas-anim-glide'
  };
  const cls = animMap[mv.id] || 'atlas-anim-push';
  const isRackIn = mv.id === 'rack_focus_macro_to_eyes';
  const isRackOut = mv.id === 'rack_focus_eyes_to_prop';
  const isReveal = mv.id === 'reveal_from_behind_wall';

  const vectorArrow = {
    static_breathing: '⦿ LOCK',
    slow_dolly_push_in: '▲ PUSH IN 28cm',
    slow_dolly_pull_out: '▼ PULL OUT 40cm',
    vertigo_dolly_zoom_subtle: '⇅ DOLLY + ZOOM',
    subtle_parallax_arc: '↷ ARCO +14°',
    subtle_parallax_arc_left: '↶ ARCO -14°',
    lateral_slider_truck: '⟶ SLIDER 64cm',
    reveal_from_behind_wall: '⇥ REVEAL MARCO',
    pedestal_reveal_up: '↑ PEDESTAL UP',
    pedestal_sink_down: '↓ PEDESTAL DOWN',
    crane_jib_high_to_eye: '↘ PLUMA JIB',
    rack_focus_macro_to_eyes: '◎ PROP → IRIS',
    rack_focus_eyes_to_prop: '◎ IRIS → PROP',
    handheld_walking_lubezki: '〰 WALK 1.7Hz',
    fpv_slow_glide_through: '⟰ GLIDE 55cm'
  }[mv.id] || mv.shortLabel;

  return `
    <div class="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#171b26] via-[#0d1017] to-[#1a1210] select-none">
      <!-- Fondo arquitectónico con paralaje propio -->
      <div class="atlas-bg-layer ${cls}-bg absolute inset-[-18%] flex items-center justify-around opacity-40 pointer-events-none">
        <div class="w-px h-full bg-white/15"></div>
        <div class="w-4 h-4 rounded-full bg-amber-300/60 blur-[2px] -mt-24"></div>
        <div class="w-5 h-5 rounded-full bg-[#c86446]/65 blur-[3px] -mt-12"></div>
        <div class="w-px h-full bg-white/15"></div>
      </div>

      <!-- Sujeto Alina en plano medio -->
      <div class="atlas-subj-layer ${cls} absolute inset-0 flex flex-col items-center justify-end pb-8 pointer-events-none">
        <div class="w-9 h-11 rounded-full bg-[#e4b79d] border-2 border-[#9e3d24] relative shadow-lg">
          <span class="absolute top-4 left-2 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span class="absolute top-4 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        </div>
        <div class="w-20 h-28 rounded-t-2xl bg-[#1d222d] border-t border-[#c86446]/40 -mt-1"></div>
      </div>

      <!-- Primer término para Rack Focus / Reveal -->
      ${
        isRackIn || isRackOut
          ? `<div class="${isRackIn ? 'atlas-fg-rack-in' : 'atlas-fg-rack-out'} absolute bottom-5 left-4 w-12 h-16 rounded-xl bg-amber-500/75 border border-amber-200/60 flex items-center justify-center text-[9px] font-mono text-black font-bold shadow-xl pointer-events-none">PROP</div>`
          : ''
      }
      ${
        isReveal
          ? `<div class="atlas-fg-curtain absolute inset-y-0 left-0 w-16 bg-[#2a0e16] border-r border-[#d4af37]/40 pointer-events-none"></div>`
          : ''
      }

      <!-- Guía de tercios + etiqueta GIF vivo -->
      <div class="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/75 border border-emerald-500/35 text-[9px] font-mono text-emerald-300 font-bold">
        GIF LOOP · ${mv.recommendedDurationSec}s
      </div>
      <div class="absolute bottom-2 inset-x-2 px-2 py-1 rounded bg-black/80 text-center text-[9px] font-mono text-[#f29979] font-bold truncate">
        ${esc(vectorArrow)}
      </div>
    </div>
  `;
}

export function mountFramingAtlasUI(root, ctx) {
  let mode = 'shots'; // 'shots' | 'moves' | 'all'
  let selectedCat = 'Todas';
  // Caché en memoria de pantallazos reales 3D y loops animados por spotId + id
  const realThumbCache = new Map(); // key: `${spotId}:shot:${id}` -> dataUrl
  const realLoopCache = new Map();  // key: `${spotId}:move:${id}` -> string[] (frames)
  const loopTimers = new Set();
  let batchBusy = false;

  // Inyectar CSS de animaciones continuas 60fps una sola vez
  if (!document.getElementById('framing-atlas-keyframes')) {
    const st = document.createElement('style');
    st.id = 'framing-atlas-keyframes';
    st.textContent = `
      @keyframes atlasBreathe { 0%,100%{transform:scale(1) translateY(0)} 50%{transform:scale(1.025) translateY(-2px)} }
      @keyframes atlasPush { 0%{transform:scale(0.92)} 100%{transform:scale(1.18)} }
      @keyframes atlasPull { 0%{transform:scale(1.18)} 100%{transform:scale(0.90)} }
      @keyframes atlasVertigoSubj { 0%,100%{transform:scale(1.02)} 50%{transform:scale(1.02)} }
      @keyframes atlasVertigoBg { 0%{transform:scale(0.82)} 100%{transform:scale(1.38)} }
      @keyframes atlasArcR { 0%{transform:translateX(-12px)} 100%{transform:translateX(12px)} }
      @keyframes atlasArcRBg { 0%{transform:translateX(18px)} 100%{transform:translateX(-18px)} }
      @keyframes atlasArcL { 0%{transform:translateX(12px)} 100%{transform:translateX(-12px)} }
      @keyframes atlasArcLBg { 0%{transform:translateX(-18px)} 100%{transform:translateX(18px)} }
      @keyframes atlasTruck { 0%{transform:translateX(18px)} 100%{transform:translateX(-18px)} }
      @keyframes atlasRevealCurtain { 0%{transform:translateX(0)} 100%{transform:translateX(-115%)} }
      @keyframes atlasPedUp { 0%{transform:translateY(-16px)} 100%{transform:translateY(14px)} }
      @keyframes atlasPedDown { 0%{transform:translateY(14px)} 100%{transform:translateY(-16px)} }
      @keyframes atlasJib { 0%{transform:translate(12px,18px) scale(0.88)} 100%{transform:translate(0,0) scale(1.1)} }
      @keyframes atlasRackSubjIn { 0%,20%{filter:blur(4px);opacity:0.75} 80%,100%{filter:blur(0);opacity:1} }
      @keyframes atlasRackFgIn { 0%,20%{filter:blur(0);transform:scale(1)} 80%,100%{filter:blur(5px);transform:scale(1.08);opacity:0.55} }
      @keyframes atlasRackSubjOut { 0%,20%{filter:blur(0);opacity:1} 80%,100%{filter:blur(4px);opacity:0.72} }
      @keyframes atlasRackFgOut { 0%,20%{filter:blur(5px);opacity:0.55} 80%,100%{filter:blur(0);opacity:1} }
      @keyframes atlasWalk { 0%{transform:scale(0.95) translate(-2px,0)} 25%{transform:scale(1.0) translate(2px,-3px)} 50%{transform:scale(1.05) translate(-2px,1px)} 75%{transform:scale(1.1) translate(2px,-2px)} 100%{transform:scale(1.14) translate(0,0)} }
      @keyframes atlasGlide { 0%{transform:scale(0.84) translateY(8px)} 100%{transform:scale(1.22) translateY(-6px)} }

      .atlas-anim-breathe { animation: atlasBreathe 3.2s ease-in-out infinite; }
      .atlas-anim-push { animation: atlasPush 2.8s ease-in-out infinite alternate; }
      .atlas-anim-pull { animation: atlasPull 2.8s ease-in-out infinite alternate; }
      .atlas-anim-vertigo { animation: atlasVertigoSubj 2.8s ease-in-out infinite alternate; }
      .atlas-anim-vertigo-bg { animation: atlasVertigoBg 2.8s ease-in-out infinite alternate; }
      .atlas-anim-arc-r { animation: atlasArcR 2.8s ease-in-out infinite alternate; }
      .atlas-anim-arc-r-bg { animation: atlasArcRBg 2.8s ease-in-out infinite alternate; }
      .atlas-anim-arc-l { animation: atlasArcL 2.8s ease-in-out infinite alternate; }
      .atlas-anim-arc-l-bg { animation: atlasArcLBg 2.8s ease-in-out infinite alternate; }
      .atlas-anim-truck { animation: atlasTruck 2.4s ease-in-out infinite alternate; }
      .atlas-anim-reveal { animation: atlasPush 3.0s ease-out infinite alternate; }
      .atlas-fg-curtain { animation: atlasRevealCurtain 3.0s ease-out infinite alternate; }
      .atlas-anim-ped-up { animation: atlasPedUp 2.8s ease-in-out infinite alternate; }
      .atlas-anim-ped-down { animation: atlasPedDown 2.8s ease-in-out infinite alternate; }
      .atlas-anim-jib { animation: atlasJib 3.0s ease-in-out infinite alternate; }
      .atlas-anim-rack-in { animation: atlasRackSubjIn 2.6s ease-in-out infinite alternate; }
      .atlas-fg-rack-in { animation: atlasRackFgIn 2.6s ease-in-out infinite alternate; }
      .atlas-anim-rack-out { animation: atlasRackSubjOut 2.6s ease-in-out infinite alternate; }
      .atlas-fg-rack-out { animation: atlasRackFgOut 2.6s ease-in-out infinite alternate; }
      .atlas-anim-walk { animation: atlasWalk 2.6s linear infinite alternate; }
      .atlas-anim-glide { animation: atlasGlide 3.0s ease-in-out infinite alternate; }
    `;
    document.head.appendChild(st);
  }

  function clearActiveLoopTimers() {
    for (const id of loopTimers) clearInterval(id);
    loopTimers.clear();
  }

  function allSpotsFlat() {
    const out = [];
    for (const f of [4, 3, 2, 1, 0]) {
      SANCTUARY_FLOORS[f].spots.forEach((sp) => out.push(sp));
    }
    return out;
  }

  function getCategoriesForCurrentMode() {
    const set = new Set(['Todas']);
    if (mode === 'shots' || mode === 'all') catalog.shotTypes.forEach((s) => set.add(s.category));
    if (mode === 'moves' || mode === 'all') catalog.cameraMoves.forEach((m) => set.add(m.category));
    return [...set];
  }

  async function renderAllVisible3DSnapshots() {
    if (batchBusy) return;
    batchBusy = true;
    const btn = root.querySelector('#btn-atlas-batch-3d');
    const spot = ctx.getActiveSpot();
    const list = catalog.shotTypes.filter((s) => selectedCat === 'Todas' || s.category === selectedCat);
    let done = 0;

    for (const st of list) {
      if (btn) btn.textContent = `⏳ Renderizando 3D (${++done}/${list.length})...`;
      await new Promise((r) => setTimeout(r, 18));
      const dataUrl = ctx.captureShotThumbnail3D(st.id, 'static_breathing');
      if (dataUrl) {
        realThumbCache.set(`${spot.id}:shot:${st.id}`, dataUrl);
        const imgEl = root.querySelector(`[data-shot-img="${st.id}"]`);
        if (imgEl) {
          imgEl.src = dataUrl;
          imgEl.classList.remove('hidden');
        }
      }
    }
    batchBusy = false;
    if (btn) btn.textContent = `✅ ${list.length} Pantallazos 3D Listos`;
    setTimeout(() => {
      const b2 = root.querySelector('#btn-atlas-batch-3d');
      if (b2) b2.textContent = '📸 Renderizar Pantallazos 3D Reales del Spot';
    }, 2200);
  }

  function mountLoopPlayerOnCard(containerEl, frames) {
    if (!containerEl || !frames?.length) return;
    containerEl.innerHTML = `
      <img class="w-full h-full object-cover block" src="${frames[0]}" alt="Loop 3D">
      <span class="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-emerald-600/90 text-white text-[9px] font-mono font-bold shadow">3D GIF LIVE</span>
    `;
    const img = containerEl.querySelector('img');
    let idx = 0;
    let dirStep = 1;
    const timer = setInterval(() => {
      if (!document.body.contains(img)) {
        clearInterval(timer);
        loopTimers.delete(timer);
        return;
      }
      idx += dirStep;
      if (idx >= frames.length - 1) { idx = frames.length - 1; dirStep = -1; }
      else if (idx <= 0) { idx = 0; dirStep = 1; }
      img.src = frames[idx];
    }, 150);
    loopTimers.add(timer);
  }

  function render() {
    clearActiveLoopTimers();
    const activeSpot = ctx.getActiveSpot();
    const categories = getCategoriesForCurrentMode();
    if (!categories.includes(selectedCat)) selectedCat = 'Todas';

    const shotsFiltered =
      mode === 'moves'
        ? []
        : catalog.shotTypes.filter((s) => selectedCat === 'Todas' || s.category === selectedCat);
    const movesFiltered =
      mode === 'shots'
        ? []
        : catalog.cameraMoves.filter((m) => selectedCat === 'Todas' || m.category === selectedCat);

    root.innerHTML = `
      <div class="bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl space-y-4">
        <!-- Cabecera + Controles Globales del Atlas -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h2 class="text-sm font-bold tracking-wide text-white uppercase">🎥 Catálogo Visual de Encuadres (30) & Movimientos (15)</h2>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/35">450 Combinaciones Ópticas</span>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">
              Explora visualmente qué hace cada lente, ángulo y rig mecánico, genera pantallazos o GIFs 3D reales sobre cualquier habitación y aplícalos con 1 clic.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2 text-xs">
            <label class="flex items-center gap-1.5 bg-black/55 border border-white/10 rounded-xl px-2.5 py-1.5">
              <span class="text-slate-400 text-[11px]">Set de prueba:</span>
              <select id="atlas-spot-select" class="bg-transparent text-white font-semibold focus:outline-none">
                ${allSpotsFlat()
                  .map(
                    (sp) =>
                      `<option value="${esc(sp.id)}" class="bg-[#12141a]" ${
                        sp.id === activeSpot.id ? 'selected' : ''
                      }>P${sp.floor === 0 ? 'B' : sp.floor} · ${esc(sp.name)}</option>`
                  )
                  .join('')}
              </select>
            </label>

            <button id="btn-atlas-batch-3d" type="button" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#c86446] to-[#9a3412] hover:opacity-95 text-white font-bold shadow transition-all copper-glow">
              📸 Renderizar Pantallazos 3D Reales del Spot
            </button>
          </div>
        </div>

        <!-- Conmutador Encuadres vs Movimientos + Filtros por Categoría -->
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10 text-xs">
            <button data-amode="shots" class="atlas-mode-btn px-3 py-1.5 rounded-lg font-semibold transition-all ${
              mode === 'shots' ? 'bg-[#c86446] text-white shadow' : 'text-slate-300 hover:text-white'
            }">📐 Encuadres & Ángulos (30)</button>
            <button data-amode="moves" class="atlas-mode-btn px-3 py-1.5 rounded-lg font-semibold transition-all ${
              mode === 'moves' ? 'bg-[#c86446] text-white shadow' : 'text-slate-300 hover:text-white'
            }">🎞️ Movimientos & Rigs (15 GIFs)</button>
            <button data-amode="all" class="atlas-mode-btn px-3 py-1.5 rounded-lg font-semibold transition-all ${
              mode === 'all' ? 'bg-[#c86446] text-white shadow' : 'text-slate-300 hover:text-white'
            }">🌐 Ver Todo (45)</button>
          </div>

          <div class="flex flex-wrap items-center gap-1.5 text-[11px]">
            ${categories
              .map(
                (c) => `
              <button type="button" data-acat="${esc(c)}" class="atlas-cat-btn px-2.5 py-1 rounded-lg border transition-all ${
                selectedCat === c
                  ? 'bg-white/15 border-[#c86446] text-white font-bold'
                  : 'bg-black/40 border-white/10 text-slate-400 hover:text-white'
              }">${esc(c)}</button>`
              )
              .join('')}
          </div>
        </div>

        <!-- SECCIÓN ENCUADRES (30) -->
        ${
          shotsFiltered.length > 0
            ? `
          <div class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-wider text-[#f29979] border-b border-white/5 pb-1.5">
              📐 Encuadres, Alturas & Ángulos de Cámara (${shotsFiltered.length})
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
              ${shotsFiltered
                .map((st) => {
                  const cachedUrl = realThumbCache.get(`${activeSpot.id}:shot:${st.id}`);
                  const isBroll = st.shotRoleDefault === 'B-Roll';
                  return `
                  <div class="bg-black/45 border border-white/10 hover:border-[#c86446]/60 rounded-2xl p-3 flex flex-col justify-between gap-2.5 transition-all">
                    <div class="space-y-2">
                      <!-- Monitor 9:16 -->
                      <div class="relative mx-auto w-full max-w-[175px] aspect-[9/16] rounded-xl overflow-hidden border border-white/15 bg-black shadow-lg">
                        ${buildShotPreviewSvg(st)}
                        <img data-shot-img="${esc(st.id)}" src="${cachedUrl || ''}" alt="${esc(st.shortLabel)}" class="${
                          cachedUrl ? '' : 'hidden'
                        } absolute inset-0 w-full h-full object-cover">
                        <span class="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold ${
                          isBroll ? 'bg-emerald-600/90 text-white' : 'bg-[#c86446]/90 text-white'
                        }">${esc(st.shotRoleDefault)}</span>
                      </div>

                      <div>
                        <div class="text-[10px] font-mono text-slate-400 truncate">${esc(st.category.replace(/^\d+\.\s*/, ''))}</div>
                        <h4 class="text-xs font-bold text-white leading-snug mt-0.5">${esc(st.shortLabel || st.label)}</h4>
                        <p class="text-[11px] text-slate-400 leading-relaxed mt-1">${esc(st.useCaseEs || st.label)}</p>
                      </div>
                    </div>

                    <div class="space-y-1.5 pt-2 border-t border-white/5">
                      <div class="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Riesgo: <strong class="text-emerald-300">${esc(st.zeroWasteRisk)}</strong></span>
                        <button type="button" data-snap-shot="${esc(st.id)}" class="btn-atlas-snap-one text-[#f29979] hover:text-white underline">📸 Foto 3D</button>
                      </div>
                      <button type="button" data-try-shot="${esc(st.id)}" class="btn-atlas-try-shot w-full py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-[#c86446] text-white text-[11px] font-semibold transition-colors">
                        🎬 Usar este Encuadre en 3D
                      </button>
                    </div>
                  </div>`;
                })
                .join('')}
            </div>
          </div>`
            : ''
        }

        <!-- SECCIÓN MOVIMIENTOS & RIGS (15) -->
        ${
          movesFiltered.length > 0
            ? `
          <div class="space-y-3 pt-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-300 border-b border-white/5 pb-1.5">
              🎞️ Desplazamientos, Rieles, Grúas & Trasfocos (${movesFiltered.length} Loops Animados)
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
              ${movesFiltered
                .map((mv) => {
                  const dummyShot = {
                    cameraMoveId: mv.id,
                    shotTypeId: 'mcu_interview',
                    animation: mv.id === 'handheld_walking_lubezki' ? 'Walk' : 'Idle',
                    focusMode:
                      mv.id === 'rack_focus_macro_to_eyes'
                        ? 'rack_prop_to_iris'
                        : mv.id === 'rack_focus_eyes_to_prop'
                          ? 'rack_iris_to_prop'
                          : 'iris_lock'
                  };
                  const kf = HF.resolveKeyframeStrategy({ shot: dummyShot, payload: { camera: { handheldHz: mv.handheldHz } } });
                  return `
                  <div class="bg-black/45 border border-white/10 hover:border-emerald-500/50 rounded-2xl p-3 flex flex-col justify-between gap-2.5 transition-all">
                    <div class="space-y-2">
                      <div data-move-preview="${esc(mv.id)}" class="relative mx-auto w-full max-w-[175px] aspect-[9/16] rounded-xl overflow-hidden border border-white/15 bg-black shadow-lg">
                        ${buildMoveAnimatedPreviewHtml(mv)}
                      </div>

                      <div>
                        <div class="flex items-center justify-between gap-1">
                          <span class="text-[9.5px] font-mono text-slate-400 truncate">${esc(mv.category.replace(/^\d+\.\s*/, ''))}</span>
                          <span class="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ${
                            kf.mode === 'START_END'
                              ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                              : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          }">${kf.mode}</span>
                        </div>
                        <h4 class="text-xs font-bold text-white leading-snug mt-1">${esc(mv.shortLabel || mv.label)}</h4>
                        <p class="text-[11px] text-slate-400 leading-relaxed mt-1">${esc(mv.useCaseEs || mv.label)}</p>
                      </div>
                    </div>

                    <div class="space-y-1.5 pt-2 border-t border-white/5">
                      <div class="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Motion: <strong class="text-white">${mv.recommendedMotionStrength}</strong> · Arco ${mv.arcDegrees}°</span>
                        <button type="button" data-gif-move="${esc(mv.id)}" class="btn-atlas-gif-move text-emerald-300 hover:text-white underline">🎞️ GIF 3D Real</button>
                      </div>
                      <button type="button" data-try-move="${esc(mv.id)}" class="btn-atlas-try-move w-full py-1.5 px-2.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-500 text-white text-[11px] font-semibold transition-colors">
                        ▶ Reproducir Movimiento en 3D
                      </button>
                    </div>
                  </div>`;
                })
                .join('')}
            </div>
          </div>`
            : ''
        }
      </div>
    `;

    // Restaurar loops 3D ya cacheados para este spot
    movesFiltered.forEach((mv) => {
      const cachedFrames = realLoopCache.get(`${activeSpot.id}:move:${mv.id}`);
      if (cachedFrames) {
        mountLoopPlayerOnCard(root.querySelector(`[data-move-preview="${mv.id}"]`), cachedFrames);
      }
    });

    // Eventos UI
    root.querySelector('#atlas-spot-select')?.addEventListener('change', (e) => {
      ctx.selectSpotById(e.target.value);
      render();
    });

    root.querySelector('#btn-atlas-batch-3d')?.addEventListener('click', () => {
      renderAllVisible3DSnapshots();
    });

    root.querySelectorAll('.atlas-mode-btn').forEach((b) => {
      b.onclick = () => {
        mode = b.dataset.amode;
        selectedCat = 'Todas';
        render();
      };
    });

    root.querySelectorAll('.atlas-cat-btn').forEach((b) => {
      b.onclick = () => {
        selectedCat = b.dataset.acat;
        render();
      };
    });

    root.querySelectorAll('.btn-atlas-snap-one').forEach((b) => {
      b.onclick = () => {
        const shotId = b.dataset.snapShot;
        const spot = ctx.getActiveSpot();
        const url = ctx.captureShotThumbnail3D(shotId, 'static_breathing');
        if (url) {
          realThumbCache.set(`${spot.id}:shot:${shotId}`, url);
          const img = root.querySelector(`[data-shot-img="${shotId}"]`);
          if (img) {
            img.src = url;
            img.classList.remove('hidden');
          }
        }
      };
    });

    root.querySelectorAll('.btn-atlas-gif-move').forEach((b) => {
      b.onclick = async () => {
        const moveId = b.dataset.gifMove;
        const spot = ctx.getActiveSpot();
        b.textContent = '⏳ Grabando...';
        await new Promise((r) => setTimeout(r, 20));
        const frames = ctx.captureMoveLoopFrames3D(moveId);
        if (frames?.length) {
          realLoopCache.set(`${spot.id}:move:${moveId}`, frames);
          mountLoopPlayerOnCard(root.querySelector(`[data-move-preview="${moveId}"]`), frames);
        }
        b.textContent = '✓ Loop 3D Activo';
      };
    });

    root.querySelectorAll('.btn-atlas-try-shot').forEach((b) => {
      b.onclick = () => ctx.jumpTo3DWithShotAndMove({ shotTypeId: b.dataset.tryShot, play: false });
    });

    root.querySelectorAll('.btn-atlas-try-move').forEach((b) => {
      b.onclick = () => ctx.jumpTo3DWithShotAndMove({ moveId: b.dataset.tryMove, play: true });
    });
  }

  return {
    render,
    destroyLoops: clearActiveLoopTimers
  };
}
