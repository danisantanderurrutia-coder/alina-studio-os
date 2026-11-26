// ============================================================================
// MÓDULO UI: CONSEJO DE ASESORES DE PRODUCCIÓN CINEMATOGRÁFICA ("🎭 Asesores")
// Conecta a los 8 Jefes de Departamento en vivo con:
//  • Los 12 Spots 3D del Santuario + Vuelo directo a Hero Props 100mm Macro
//  • El Armario Cápsula Textil de Alina (inyección en Flux & Higgsfield Physics)
//  • Auditoría Matemática de Rodaje (0–100%) y Aplicación en 1 Clic al Motor 3D
// ============================================================================

import {
  ADVISORS_COUNCIL,
  ALINA_WARDROBE_CATALOG,
  evaluateCouncilReadiness,
  getSpotBlueprint,
  getWardrobeById
} from '../data/advisorsBoardData.js';
import { SANCTUARY_FLOORS } from '../data/sanctuaryData.js';
import {
  extractPaletteAndTokensFromDataUrl,
  fetchWebImageAsDataUrl,
  readAndResizeImageFile
} from './shotsStorage.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const DIRECTOR_LABELS = {
  fincher_cronenweth: 'David Fincher · RED V-Raptor + Zeiss',
  wong_kar_wai_doyle: 'Wong Kar-wai · Arriflex 35mm + Panavision',
  villeneuve_deakins: 'Denis Villeneuve · ARRI Alexa 35 + Signature',
  guadagnino_mukdeeprom: 'Luca Guadagnino · 35mm Film + Cooke S4/i',
  kubrick_alcott: 'Stanley Kubrick · Alexa 35 + Canon K-35 (f/1.4)',
  lubezki_natural: 'Emmanuel Lubezki · Sony Venice 2 + 24mm Wide',
  refn_neon_noir: 'Nicolas Winding Refn · Sony Venice 2 + Hawk Anamorphic',
  coppola_intimate: 'Sofia Coppola · ARRI Alexa 35 + Cooke S4/i'
};

export function mountAdvisorsBoardUI(root, ctx) {
  let activeSubTab = 'spot_audit'; // 'spot_audit' | 'wardrobe' | 'council_hods'
  let selectedAdvisorId = ADVISORS_COUNCIL[0].id;
  let showWardrobeImporter = false;
  let pendingImportDataUrl = null;
  let pendingImportAnalysis = null;

  function listAllSpots() {
    const out = [];
    for (const floorNum of [4, 3, 2, 1, 0]) {
      const f = SANCTUARY_FLOORS[floorNum];
      for (const sp of f.spots) {
        out.push({ floor: floorNum, spot: sp });
      }
    }
    return out;
  }

  root.innerHTML = `
    <div class="bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex-1 flex flex-col gap-4">
      <!-- Cabecera Ejecutiva del Consejo -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h2 class="text-sm font-bold tracking-wide text-white uppercase">🎭 Consejo de Producción Cinematográfica</h2>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">8 Jefes de Departamento</span>
            <span id="adv-score-pill" class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">Índice Rodaje: --%</span>
          </div>
          <p class="text-xs text-slate-400 mt-0.5">
            Dirección de Arte 1:1, Vestuario Textil, Óptica 35mm, Hero Props B-Roll 1:2, Intimidad SSC, Sonido Binaural y Supervisión AI VFX para Higgsfield.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2 text-xs">
          <button id="btn-adv-toggle-3d" type="button" class="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold transition-all">
            👁 Mostrar Visor 3D en Vivo
          </button>
          <button id="btn-adv-apply-all" type="button" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#c86446] to-[#9a3412] hover:opacity-95 text-white font-bold shadow transition-all copper-glow">
            ✨ Aplicar Directrices del Consejo al Plano
          </button>
        </div>
      </div>

      <!-- Sub-navegación interna limpia (3 vistas sin saturación) -->
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-1 bg-black/55 p-1 rounded-xl border border-white/10 text-xs overflow-x-auto max-w-full">
          <button data-asub="spot_audit" class="adv-sub-btn px-3 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all whitespace-nowrap">
            🎬 Mesa Redonda del Spot Activo
          </button>
          <button data-asub="wardrobe" class="adv-sub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all whitespace-nowrap">
            👗 Armario Cápsula & Telas (7 Looks)
          </button>
          <button data-asub="council_hods" class="adv-sub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all whitespace-nowrap">
            👥 Los 8 Jefes de Departamento & Reglas
          </button>
        </div>

        <div id="adv-active-wardrobe-tag" class="text-[11px] font-mono text-slate-300 bg-black/45 border border-white/10 px-2.5 py-1 rounded-xl truncate max-w-full">
          👗 Look activo: --
        </div>
      </div>

      <!-- Selector rápido de los 12 Spots para auditar sin salir de la pestaña -->
      <div id="adv-spot-strip" class="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1"></div>

      <!-- Cuerpo dinámico según sub-pestaña -->
      <div id="adv-body" class="flex-1 min-h-[430px]"></div>
    </div>
  `;

  const $ = (id) => root.querySelector('#' + id);

  function sync3DButtonUI() {
    const on = ctx.is3DVisible();
    const btn = $('btn-adv-toggle-3d');
    if (!btn) return;
    btn.textContent = on ? '✕ Ocultar Visor 3D Lateral' : '👁 Mostrar Visor 3D en Vivo';
    btn.className = on
      ? 'px-3 py-1.5 rounded-xl bg-emerald-600/25 text-emerald-300 border border-emerald-500/40 font-semibold transition-all'
      : 'px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold transition-all';
  }

  function renderSpotStrip() {
    const activeSpot = ctx.getActiveSpot();
    const strip = $('adv-spot-strip');
    if (!strip) return;
    strip.innerHTML = listAllSpots()
      .map(({ floor, spot }) => {
        const isAct = spot.id === activeSpot.id;
        const fTag = floor === 0 ? 'PB' : `P${floor}`;
        return `
          <button type="button" data-spot-id="${esc(spot.id)}" class="adv-spot-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all ${
            isAct
              ? 'bg-[#c86446]/25 border-[#c86446] text-white font-bold shadow'
              : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
          }">
            <span class="font-mono text-[10px] text-[#f29979] mr-1">${fTag}</span>${esc(spot.icon)} ${esc(spot.name)}
          </button>`;
      })
      .join('');

    strip.querySelectorAll('.adv-spot-pill').forEach((b) => {
      b.onclick = () => {
        ctx.selectSpotById(b.dataset.spotId);
        render();
      };
    });
  }

  function computeCurrentEvaluation() {
    const spot = ctx.getActiveSpot();
    const tele = ctx.getReadinessTelemetry();
    return evaluateCouncilReadiness({
      spotId: spot.id,
      wardrobeId: ctx.getActiveWardrobeId(),
      directorStyleId: tele.directorStyleId,
      focalMm: tele.focalMm,
      motionStrength: tele.motionStrength,
      durationSec: tele.durationSec,
      foregroundEnabled: tele.foregroundEnabled,
      attachedObjectsCount: tele.attachedObjectsCount
    });
  }

  function updateHeaderBadges() {
    const evalRes = computeCurrentEvaluation();
    const scorePill = $('adv-score-pill');
    if (scorePill) {
      scorePill.textContent = `Índice Rodaje: ${evalRes.score}%`;
      scorePill.className =
        evalRes.score >= 88
          ? 'text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold'
          : 'text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold';
    }
    const w = getWardrobeById(ctx.getActiveWardrobeId());
    const wTag = $('adv-active-wardrobe-tag');
    if (wTag && w) {
      wTag.innerHTML = `👗 Look activo: <strong class="text-white">${esc(w.name)}</strong>`;
    }
  }

  function renderSpotAuditSubView() {
    const spot = ctx.getActiveSpot();
    const bp = getSpotBlueprint(spot.id);
    const evalRes = computeCurrentEvaluation();
    const recWardrobe = getWardrobeById(bp.recommendedWardrobeId);
    const activeWardrobeId = ctx.getActiveWardrobeId();

    const body = $('adv-body');
    body.innerHTML = `
      <div class="grid grid-cols-12 gap-4">
        <!-- Columna Izquierda: Dictamen de Arte, 3 Capas, Luz Kelvin y Semáforo de Departamentos -->
        <div class="col-span-12 xl:col-span-7 flex flex-col gap-3">
          <div class="p-4 rounded-2xl bg-black/45 border border-white/10 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-[#f29979]">Dirección de Arte & Fotografía del Spot</span>
                <h3 class="text-sm font-bold text-white mt-0.5">${esc(spot.icon)} ${esc(spot.name)} — ${esc(bp.artDirectionTitle)}</h3>
              </div>
              <span class="text-[10px] font-mono px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300">
                🎥 ${esc(DIRECTOR_LABELS[bp.recommendedDirectorId] || bp.recommendedDirectorId)}
              </span>
            </div>

            <!-- Ley de las 3 Capas Métricas (Production Designer) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div class="font-mono text-[10px] text-purple-300 font-bold">1. PRIMER TÉRMINO (0.48–0.55 m · #AF52DE)</div>
                <p class="text-slate-300 mt-1 leading-relaxed">${esc(bp.interiorLayers.foreground)}</p>
              </div>
              <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div class="font-mono text-[10px] text-emerald-300 font-bold">2. MEDIO PLANO SUJETO (Alina 1.72 m)</div>
                <p class="text-slate-300 mt-1 leading-relaxed">${esc(bp.interiorLayers.midground)}</p>
              </div>
              <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 sm:col-span-2">
                <div class="font-mono text-[10px] text-[#f29979] font-bold">3. FONDO VESTIDO 3D (4.5–9.5 m · Ancla ControlNet Depth/Normals)</div>
                <p class="text-slate-300 mt-1 leading-relaxed">${esc(bp.interiorLayers.background)}</p>
                <p class="text-slate-400 text-[10px] mt-1">🏛️ <strong>Suelo & Muros 4.90 m:</strong> ${esc(bp.interiorLayers.floorAndWalls)}</p>
              </div>
            </div>

            <!-- Receta Kelvin + Dirección Escénica SSC & Sonido 3D -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
              <div class="p-2.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/20">
                <div class="flex items-center justify-between font-mono text-[10px] text-amber-300 font-bold">
                  <span>💡 GAFFER & RIG KELVIN</span>
                  <span>${bp.lightingRecipe.kelvinKey}K / ${bp.lightingRecipe.kelvinRim}K (${esc(bp.lightingRecipe.contrastRatio)})</span>
                </div>
                <p class="text-slate-300 mt-1 leading-relaxed">${esc(bp.lightingRecipe.note)}</p>
              </div>
              <div class="p-2.5 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/20">
                <div class="font-mono text-[10px] text-cyan-300 font-bold">🎭 ACTUACIÓN SSC & 🎧 FOLEY BINAURAL</div>
                <p class="text-slate-300 mt-1 leading-relaxed"><strong>Manos:</strong> ${esc(bp.performanceAndSound.handsAnchor)}</p>
                <p class="text-slate-400 text-[10px] mt-0.5"><strong>Audio:</strong> ${esc(bp.performanceAndSound.voiceAndFoley)}</p>
              </div>
            </div>
          </div>

          <!-- Semáforo de Auditoría en Vivo por Departamento -->
          <div class="p-4 rounded-2xl bg-black/45 border border-white/10 space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200">✅ Semáforo Pre-Rodaje en Vivo (Zero-Waste)</h4>
              <span class="text-[11px] font-mono text-emerald-400 font-bold">${evalRes.score}/100 pts</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
              ${evalRes.checks
                .map(
                  (c) => `
                <div class="p-2 rounded-xl border ${
                  c.ok ? 'bg-emerald-500/[0.05] border-emerald-500/20' : 'bg-amber-500/[0.08] border-amber-500/30'
                } flex items-start gap-2">
                  <span class="mt-0.5">${c.ok ? '🟢' : '🟡'}</span>
                  <div class="min-w-0">
                    <div class="font-mono text-[10px] font-bold ${c.ok ? 'text-emerald-300' : 'text-amber-300'}">${esc(c.dept)}</div>
                    <p class="text-slate-300 text-[10px] leading-snug mt-0.5">${esc(c.detail)}</p>
                  </div>
                </div>`
                )
                .join('')}
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Vestuario Recomendado + Hero Props 3D Macro (Regla 1:2) -->
        <div class="col-span-12 xl:col-span-5 flex flex-col gap-3">
          <!-- Tarjeta rápida de Vestuario de Margaux De Vries -->
          <div class="p-4 rounded-2xl bg-black/45 border border-pink-500/25 space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[10px] font-mono uppercase tracking-wider text-pink-300 font-bold">👗 Recomendación de Vestuario</span>
              <button id="btn-adv-open-wardrobe" type="button" class="text-[10px] font-mono text-[#f29979] hover:text-white underline">Ver los 7 looks →</button>
            </div>
            <div class="flex items-center justify-between gap-2">
              <div class="font-bold text-xs text-white">${esc(recWardrobe.name)}</div>
              <div class="flex items-center gap-1 shrink-0">
                ${recWardrobe.swatches
                  .map((hex) => `<span class="w-3.5 h-3.5 rounded-full border border-white/25" style="background:${hex}"></span>`)
                  .join('')}
              </div>
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">${esc(recWardrobe.stylistNote)}</p>
            <button id="btn-adv-equip-rec-wardrobe" type="button" class="w-full py-1.5 px-3 rounded-xl text-xs font-semibold transition-all ${
              activeWardrobeId === recWardrobe.id
                ? 'bg-emerald-600/25 border border-emerald-500/40 text-emerald-300'
                : 'bg-pink-600/80 hover:bg-pink-500 text-white shadow'
            }">
              ${activeWardrobeId === recWardrobe.id ? '✓ Look Equipado en Prompts Flux & Higgsfield' : '👗 Equipar este Look para Alina'}
            </button>
          </div>

          <!-- Hero Props 3D Esculpidos para B-Roll 100mm (Mateo Santoro) -->
          <div class="p-4 rounded-2xl bg-black/45 border border-emerald-500/25 space-y-3 flex-1">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold">🏺 Hero Props 3D en Sala (Regla 1:2 B-Roll 100mm)</span>
              <p class="text-[11px] text-slate-400 mt-0.5">
                Objetos GLTF esculpidos añadidos en este spot. Vuela la cámara directo al bodegón macro o captúralo en la Bóveda:
              </p>
            </div>

            <div class="space-y-2.5">
              ${bp.heroProps
                .map(
                  (hp, idx) => `
                <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-bold text-xs text-white">${esc(hp.name)}</span>
                    <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">${esc(hp.modelId)}</span>
                  </div>
                  <p class="text-[10px] font-mono text-slate-400 line-clamp-2">${esc(hp.promptToken)}</p>
                  <div class="grid grid-cols-2 gap-2 pt-0.5">
                    <button type="button" data-hp-fly="${idx}" class="btn-hp-fly py-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-[#c86446] text-white text-[11px] font-semibold transition-colors">
                      🎯 Encuadrar en 3D
                    </button>
                    <button type="button" data-hp-vault="${idx}" class="btn-hp-vault py-1.5 px-2.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white text-[11px] font-semibold transition-colors">
                      🏺 Capturar a Bóveda
                    </button>
                  </div>
                </div>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    $('btn-adv-open-wardrobe')?.addEventListener('click', () => setSubTab('wardrobe'));
    $('btn-adv-equip-rec-wardrobe')?.addEventListener('click', () => {
      ctx.setActiveWardrobeId(recWardrobe.id);
      render();
    });

    body.querySelectorAll('.btn-hp-fly').forEach((btn) => {
      btn.onclick = () => {
        const hp = bp.heroProps[Number(btn.dataset.hpFly)];
        if (hp) ctx.flyCameraToHeroProp(hp, spot);
        sync3DButtonUI();
      };
    });

    body.querySelectorAll('.btn-hp-vault').forEach((btn) => {
      btn.onclick = async () => {
        const hp = bp.heroProps[Number(btn.dataset.hpVault)];
        if (hp) await ctx.captureHeroPropToVault(hp, spot);
        sync3DButtonUI();
      };
    });
  }

  function renderWardrobeSubView() {
    const activeId = ctx.getActiveWardrobeId();
    const activeSpot = ctx.getActiveSpot();
    const bp = getSpotBlueprint(activeSpot.id);

    const body = $('adv-body');
    body.innerHTML = `
      <div class="space-y-3">
        <div class="p-3 rounded-xl bg-pink-500/[0.07] border border-pink-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex-1 min-w-[260px]">
            <strong class="text-pink-300">👗 Directriz de Margaux De Vries (Costume Designer):</strong>
            <span class="text-slate-300 ml-1">El look seleccionado se inyecta automáticamente en tus nuevas capturas hacia <strong>Flux (Wardrobe #007AFF)</strong> y en la física de tela de <strong>Higgsfield</strong> sin tocar el rostro de Alina.</span>
          </div>
          <button id="btn-adv-toggle-web-garment" type="button" class="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold shadow transition-all shrink-0">
            ${showWardrobeImporter ? '✕ Cerrar Importador' : '🌐 Importar Prenda desde Foto / URL Web → Perchero 3D'}
          </button>
        </div>

        <!-- PANEL IMPORTADOR DIRECTO DE ROPA DESDE FOTO / URL DE INTERNET (2D WEB -> PERCHERO 3D + BÓVEDA) -->
        <div id="adv-wardrobe-importer" class="${showWardrobeImporter ? 'block' : 'hidden'} p-4 rounded-2xl bg-black/65 border border-pink-500/40 space-y-3 text-xs">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-wider text-pink-300 font-bold">Pipeline 2D Web → Perchero Couture 3D + Bóveda (@look_*)</span>
              <h4 class="text-xs font-bold text-white mt-0.5">Extrae paleta Hexadecimal, armoniza a la Tríada Cromática + Latón (#d4af37) y cuelga la prenda en el Perchero 3D</h4>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
            <div class="md:col-span-4 space-y-2">
              <label class="block text-[10px] font-mono text-slate-300">1. Subir Foto de Ropa o Pegar URL de Internet</label>
              <div class="flex gap-1.5">
                <label class="cursor-pointer px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 shrink-0">
                  📂 Subir Foto
                  <input id="imp-ward-file" type="file" accept="image/*" class="hidden">
                </label>
                <input id="imp-ward-url" type="url" placeholder="https://.../prenda.jpg"
                  class="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-pink-400">
                <button id="btn-imp-ward-fetch" type="button" class="px-2.5 py-1.5 rounded-xl bg-pink-600/80 hover:bg-pink-500 text-white font-bold shrink-0">Extraer</button>
              </div>
              <div class="grid grid-cols-2 gap-1.5">
                <input id="imp-ward-name" type="text" placeholder="Nombre del Look (ej. Corsé Terciopelo)"
                  class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-white">
                <select id="imp-ward-subtype" class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-slate-200">
                  <option value="dress">Vestido / Gown</option>
                  <option value="corset">Corsé Sastre / Bodice</option>
                  <option value="blazer">Blazer / Sastre</option>
                  <option value="lingerie">Lencero Seda / Slip</option>
                  <option value="resort">Resort Lino / Pareo</option>
                </select>
              </div>
              <div class="grid grid-cols-2 gap-1.5">
                <select id="imp-ward-floor" class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-slate-200">
                  <option value="2">Piso 2 · Perchero Atelier Vanity</option>
                  <option value="3">Piso 3 · Perchero Boudoir SSC</option>
                  <option value="4">Piso 4 · Perchero Cabana Pool</option>
                  <option value="1">Piso 1 · Perchero Bistró Café</option>
                  <option value="0">Planta Baja · Perchero Cabaret VIP</option>
                </select>
                <input id="imp-ward-cat" type="text" value="Couture Importado"
                  class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-slate-200">
              </div>
            </div>

            <div class="md:col-span-8 p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-[10px] font-mono text-emerald-300 font-bold">2. Dictamen Automático de Paleta & Tokens Anti-Moiré</span>
                <div id="imp-ward-swatches" class="flex items-center gap-1.5">
                  ${(pendingImportAnalysis?.triadSwatches || ['#1f232b', '#0B2B20', '#d4af37'])
                    .map((hex) => `<span class="px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/25 text-white" style="background:${hex}">${hex}</span>`)
                    .join('')}
                </div>
              </div>
              <textarea id="imp-ward-flux" rows="2" placeholder="Flux Wardrobe Tokens (#007AFF)..."
                class="w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[11px] font-mono text-pink-200">${esc(pendingImportAnalysis?.fluxTokens || '')}</textarea>
              <textarea id="imp-ward-physics" rows="2" placeholder="Higgsfield Fabric Physics..."
                class="w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[11px] font-mono text-cyan-200">${esc(pendingImportAnalysis?.higgsfieldPhysics || '')}</textarea>
              <div class="flex items-center justify-end gap-2 pt-1">
                <button id="btn-imp-ward-commit" type="button" class="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-[#c86446] hover:opacity-95 text-white font-bold shadow">
                  👗 Colgar en Perchero 3D + Registrar en Armario & Bóveda (Render 1:1)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          ${ALINA_WARDROBE_CATALOG.map((w) => {
            const isEquipped = w.id === activeId;
            const isRecHere = bp.recommendedWardrobeId === w.id;
            return `
              <div class="p-4 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                isEquipped
                  ? 'bg-[#c86446]/12 border-[#c86446] copper-glow'
                  : 'bg-black/45 border-white/10 hover:border-white/25'
              }">
                <div class="space-y-2">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">${esc(w.category)}</span>
                    <div class="flex items-center gap-1">
                      ${isRecHere ? '<span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">★ Ideal aquí</span>' : ''}
                      ${w.swatches
                        .map((hex) => `<span class="w-3.5 h-3.5 rounded-full border border-white/25" style="background:${hex}"></span>`)
                        .join('')}
                    </div>
                  </div>
                  <h4 class="text-xs font-bold text-white">${esc(w.name)}</h4>
                  ${w.handle ? `<div class="text-[10px] font-mono text-[#f29979]">${esc(w.handle)} • 📍 Piso ${w.rackLocation?.floor ?? 2} (${esc(w.rackLocation?.rackType || 'Perchero Couture')})</div>` : ''}
                  <p class="text-[11px] text-slate-400 leading-relaxed">${esc(w.stylistNote)}</p>
                  <div class="p-2 rounded-lg bg-black/55 border border-white/5 space-y-1 text-[10px] font-mono">
                    <div class="text-pink-300 truncate" title="${esc(w.fluxTokens)}"><strong>Flux:</strong> ${esc(w.fluxTokens)}</div>
                    <div class="text-cyan-300 truncate" title="${esc(w.higgsfieldPhysics)}"><strong>Higgsfield:</strong> ${esc(w.higgsfieldPhysics)}</div>
                  </div>
                </div>

                <div class="flex items-center justify-between gap-2 pt-1 border-t border-white/5">
                  <span class="text-[10px] font-mono text-slate-400">${esc(w.funnel)}</span>
                  <div class="flex items-center gap-1.5">
                    ${w.vaultObjectId ? `<button type="button" data-wvault="${esc(w.vaultObjectId)}" class="btn-fly-wardrobe-rack px-2 py-1.5 rounded-xl text-[10px] font-mono bg-white/5 hover:bg-white/15 text-emerald-300 border border-emerald-500/30" title="Ver prenda colgada físicamente en su perchero 3D">🎯 Perchero 3D</button>` : ''}
                    <button type="button" data-wid="${esc(w.id)}" class="btn-equip-wardrobe px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isEquipped
                        ? 'bg-emerald-600 text-white shadow'
                        : 'bg-white/10 hover:bg-[#c86446] text-slate-200 hover:text-white'
                    }">
                      ${isEquipped ? '✓ Activo' : 'Equipar Look'}
                    </button>
                  </div>
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>
    `;

    body.querySelectorAll('.btn-equip-wardrobe').forEach((b) => {
      b.onclick = () => {
        ctx.setActiveWardrobeId(b.dataset.wid);
        render();
      };
    });
    body.querySelectorAll('.btn-fly-wardrobe-rack').forEach((b) => {
      b.onclick = () => {
        ctx.flyToWardrobeRack?.(b.dataset.wvault);
        sync3DButtonUI();
      };
    });

    $('btn-adv-toggle-web-garment')?.addEventListener('click', () => {
      showWardrobeImporter = !showWardrobeImporter;
      renderWardrobeSubView();
    });

    async function runWardrobeImageAnalysis(dataUrl, suggestedTitle) {
      pendingImportDataUrl = dataUrl;
      const nameInput = $('imp-ward-name');
      if (nameInput && !nameInput.value.trim() && suggestedTitle) {
        nameInput.value = suggestedTitle.replace(/\.[a-z0-9]+$/i, '');
      }
      const title = nameInput?.value?.trim() || suggestedTitle || 'Prenda Couture';
      const subtype = $('imp-ward-subtype')?.value || 'dress';
      const floor = Number($('imp-ward-floor')?.value ?? 2);
      const kelvin = floor === 3 ? '2200K' : floor === 4 ? '4300K' : floor === 1 ? '4600K' : '3400K';
      pendingImportAnalysis = await extractPaletteAndTokensFromDataUrl(dataUrl, {
        mode: 'wardrobe',
        title,
        subtype,
        floor,
        kelvin
      });
      if ($('imp-ward-flux')) $('imp-ward-flux').value = pendingImportAnalysis.fluxTokens;
      if ($('imp-ward-physics')) $('imp-ward-physics').value = pendingImportAnalysis.higgsfieldPhysics;
      if ($('imp-ward-swatches')) {
        $('imp-ward-swatches').innerHTML = pendingImportAnalysis.triadSwatches
          .map((hex) => `<span class="px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/25 text-white" style="background:${hex}">${hex}</span>`)
          .join('');
      }
    }

    $('imp-ward-file')?.addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const dataUrl = await readAndResizeImageFile(file);
      await runWardrobeImageAnalysis(dataUrl, file.name);
    });

    $('btn-imp-ward-fetch')?.addEventListener('click', async () => {
      const url = $('imp-ward-url')?.value?.trim();
      const dataUrl = await fetchWebImageAsDataUrl(url);
      await runWardrobeImageAnalysis(dataUrl, $('imp-ward-name')?.value || 'Look Web Couture');
    });

    $('btn-imp-ward-commit')?.addEventListener('click', async () => {
      const title = $('imp-ward-name')?.value?.trim() || 'Look Couture Importado';
      const subtype = $('imp-ward-subtype')?.value || 'dress';
      const floor = Number($('imp-ward-floor')?.value ?? 2);
      const category = $('imp-ward-cat')?.value?.trim() || 'Couture Importado';
      if (!pendingImportAnalysis) {
        await runWardrobeImageAnalysis(pendingImportDataUrl, title);
      }
      const fluxTokens = $('imp-ward-flux')?.value?.trim() || pendingImportAnalysis.fluxTokens;
      const higgsfieldPhysics = $('imp-ward-physics')?.value?.trim() || pendingImportAnalysis.higgsfieldPhysics;
      const swatches = pendingImportAnalysis?.triadSwatches || ['#1f232b', '#0B2B20', '#d4af37'];

      await ctx.importWebGarmentToRackAndVault?.({
        title,
        subtype,
        floor,
        category,
        swatches,
        fluxTokens,
        higgsfieldPhysics,
        referenceDataUrl: pendingImportDataUrl
      });
      showWardrobeImporter = false;
      pendingImportDataUrl = null;
      pendingImportAnalysis = null;
      render();
      sync3DButtonUI();
    });
  }

  function renderCouncilHodsSubView() {
    const sel = ADVISORS_COUNCIL.find((a) => a.id === selectedAdvisorId) || ADVISORS_COUNCIL[0];
    const body = $('adv-body');

    body.innerHTML = `
      <div class="grid grid-cols-12 gap-4">
        <!-- Lista de los 8 Jefes de Departamento -->
        <div class="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 content-start">
          ${ADVISORS_COUNCIL.map((a) => {
            const act = a.id === sel.id;
            return `
              <button type="button" data-aid="${esc(a.id)}" class="adv-hod-card text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                act
                  ? 'bg-[#c86446]/15 border-[#c86446] copper-glow'
                  : 'bg-black/40 border-white/10 hover:bg-white/[0.04]'
              }">
                <span class="text-2xl shrink-0">${a.icon}</span>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-1">
                    <span class="text-[10px] font-mono text-[#f29979] font-bold">DEP. ${a.number}</span>
                    <span class="text-[10px] text-slate-400 truncate">${esc(a.name)}</span>
                  </div>
                  <div class="text-xs font-bold text-white truncate">${esc(a.role)}</div>
                  <div class="text-[10px] text-slate-400 truncate">${esc(a.department)}</div>
                </div>
              </button>`;
          }).join('')}
        </div>

        <!-- Ficha Doctrinal Completa del Jefe de Departamento Seleccionado -->
        <div class="col-span-12 lg:col-span-7 p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between gap-4">
          <div class="space-y-4">
            <div class="flex items-start gap-3 pb-3 border-b border-white/10">
              <span class="text-3xl">${sel.icon}</span>
              <div>
                <div class="text-[11px] font-mono font-bold" style="color:${sel.accent}">DEPARTAMENTO ${sel.number} • ${esc(sel.department.toUpperCase())}</div>
                <h3 class="text-base font-bold text-white mt-0.5">${esc(sel.name)} — ${esc(sel.role)}</h3>
                <p class="text-xs italic text-slate-300 mt-1.5">${esc(sel.motto)}</p>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 leading-relaxed">
              <strong class="text-white">Mandato en Alina Studio OS:</strong> ${esc(sel.mandate)}
            </div>

            <div class="space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">📐 Las 4 Reglas de Oro del Departamento</h4>
              <div class="space-y-2">
                ${sel.goldenRules
                  .map(
                    (rule, i) => `
                  <div class="p-3 rounded-xl bg-black/45 border border-white/10 flex items-start gap-2.5 text-xs">
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#c86446]/25 text-[#f29979] font-bold shrink-0">0${i + 1}</span>
                    <p class="text-slate-300 leading-relaxed">${esc(rule)}</p>
                  </div>`
                  )
                  .join('')}
              </div>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-200 font-mono">
            ⚡ <strong>Impacto Técnico en Pipeline:</strong> ${esc(sel.pipelineImpact)}
          </div>
        </div>
      </div>
    `;

    body.querySelectorAll('.adv-hod-card').forEach((b) => {
      b.onclick = () => {
        selectedAdvisorId = b.dataset.aid;
        renderCouncilHodsSubView();
      };
    });
  }

  function setSubTab(tabName) {
    activeSubTab = tabName;
    root.querySelectorAll('.adv-sub-btn').forEach((b) => {
      const act = b.dataset.asub === activeSubTab;
      b.className = act
        ? 'adv-sub-btn px-3 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all whitespace-nowrap shadow'
        : 'adv-sub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all whitespace-nowrap';
    });
    renderBody();
  }

  function renderBody() {
    if (activeSubTab === 'wardrobe') renderWardrobeSubView();
    else if (activeSubTab === 'council_hods') renderCouncilHodsSubView();
    else renderSpotAuditSubView();
  }

  function render() {
    sync3DButtonUI();
    renderSpotStrip();
    updateHeaderBadges();
    renderBody();
  }

  // Event listeners principales
  root.querySelectorAll('.adv-sub-btn').forEach((b) => {
    b.onclick = () => setSubTab(b.dataset.asub);
  });

  $('btn-adv-toggle-3d')?.addEventListener('click', () => {
    ctx.toggle3DVisible();
    sync3DButtonUI();
  });

  $('btn-adv-apply-all')?.addEventListener('click', () => {
    const spot = ctx.getActiveSpot();
    const bp = getSpotBlueprint(spot.id);
    ctx.applyCouncilBlueprintToStage(bp);
    render();
  });

  render();

  return {
    render,
    onSpotChanged: render
  };
}
