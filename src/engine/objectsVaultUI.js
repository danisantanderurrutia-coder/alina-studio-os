// Módulo UI de la Bóveda de Objetos Renderizados ("Objetos") para Higgsfield & B-Roll Zero-Face.
// Permite subir renders externos (PNG/JPG/WebP), capturar objetos 1:1 o 9:16 desde el visor 3D
// en Three.js WebGL2, editar sus tokens fijos e inyectarlos en los prompts de Alina.

import { OBJECT_CATEGORIES } from '../data/alinaLoreData.js';
import { buildCanonicalObjectTokenLock } from './promptBuilder.js';
import {
  deleteObjectFromDB,
  extractPaletteAndTokensFromDataUrl,
  fetchWebImageAsDataUrl,
  processReferenceImageForHiggsfield,
  readAndResizeImageFile,
  saveObjectToDB
} from './shotsStorage.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function mountObjectsVaultUI(root, ctx) {
  let activeCategory = 'Todos';
  let selectedId = null;
  let saveTimer = null;
  let showWebImporter = false;
  let pendingWebDataUrl = null;
  let pendingWebAnalysis = null;

  root.innerHTML = `
    <div class="bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex-1 flex flex-col gap-4">
      <!-- Cabecera limpia de Objetos -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-sm font-bold tracking-wide text-white uppercase">🏺 Bóveda de Objetos & B-Roll (Higgsfield)</h2>
            <span id="obj-total-pill" class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">0 objetos</span>
          </div>
          <p class="text-xs text-slate-400 mt-0.5">
            Guarda renders de accesorios u objetos capturados del 3D para inyectarlos como referencia visual y textual en los prompts de Alina.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2 text-xs">
          <button id="btn-obj-toggle-web-import" type="button" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-600 to-[#c86446] hover:opacity-95 text-white font-bold shadow transition-all">
            🌐 Ruta B (4 Pasos): Traer Objeto/Ropa de Internet
          </button>
          <button id="btn-obj-toggle-3d" class="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold transition-all">
            👁 Mostrar Visor 3D para Capturar
          </button>
          <label class="cursor-pointer px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow transition-all">
            📂 Subir Render Nuevo
            <input id="input-obj-upload-new" type="file" accept="image/*" multiple class="hidden">
          </label>
          <button id="btn-obj-create-empty" class="px-3 py-1.5 rounded-xl bg-[#c86446] hover:bg-[#a34a32] text-white font-bold shadow transition-all">
            ➕ Crear Ficha
          </button>
        </div>
      </div>

      <!-- PANEL GUÍA DE LAS 2 RUTAS OPERATIVAS DE OBJETOS (RUTA A: 3 PASOS · RUTA B: 4 PASOS) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 text-xs">
        <!-- RUTA A (3 PASOS): OBJETOS NATIVOS DEL MODELO 3D -->
        <div class="p-3.5 rounded-2xl bg-black/50 border border-emerald-500/30 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              🏛️ RUTA A (3 Pasos) · Objeto Nativo del Modelo 3D
            </span>
            <span class="text-[10px] font-mono text-slate-400">32 objetos canónicos listos</span>
          </div>
          <div class="grid grid-cols-3 gap-2 pt-0.5">
            <div class="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-[10px] font-mono font-bold text-emerald-300">PASO 1 · Existe en 3D</div>
              <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">El objeto existe en el edificio 3D (<code class="font-mono">worldPos XYZ</code>) y la Bóveda tiene su <strong>PNG RGBA + Depth 16-bit</strong> aislado.</p>
            </div>
            <div class="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-[10px] font-mono font-bold text-amber-300">PASO 2 · Crear Realista</div>
              <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">Se genera fotorrealista en <strong>Flux / ComfyUI</strong> (con <code class="font-mono">Depth 0.68</code> + <code class="font-mono">object_token_lock</code>) y se bloquea como <code class="font-mono">🔒 Master Still</code>.</p>
            </div>
            <div class="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-[10px] font-mono font-bold text-cyan-300">PASO 3 · Insertar en Video</div>
              <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">Se anima como <strong>B-Roll 100mm Macro (≤3.5s)</strong> o se pasa en <strong>Fondo Blanco (#FFFFFF)</strong> a Higgsfield Elements.</p>
            </div>
          </div>
        </div>

        <!-- RUTA B (4 PASOS): OBJETOS / ROPA TRAÍDOS DIRECTAMENTE DE INTERNET -->
        <div class="p-3.5 rounded-2xl bg-black/50 border border-pink-500/35 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 font-bold">
              🌐 RUTA B (4 Pasos) · Objeto o Ropa Traído de Internet
            </span>
            <button id="btn-obj-open-route-b" type="button" class="text-[10px] font-mono font-bold text-pink-300 hover:text-white underline">
              Abrir Importador Ruta B ↓
            </button>
          </div>
          <div class="grid grid-cols-4 gap-1.5 pt-0.5">
            <div class="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-[10px] font-mono font-bold text-pink-300">1 · Internet</div>
              <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">Eliges foto o URL de ropa, planta, cuadro o mueble en la web.</p>
            </div>
            <div class="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-[10px] font-mono font-bold text-amber-300">2 · Recorte + LLM</div>
              <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">Pegas aquí (o pasas a Antigravity): se recorta en <strong>PNG / Fondo Blanco</strong> y el LLM extrae su ADN Tríada.</p>
            </div>
            <div class="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-[10px] font-mono font-bold text-emerald-300">3 · Insertar en 3D</div>
              <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">Se cuelga en el <strong>Perchero Couture 3D</strong> o se instancia en el piso elegido.</p>
            </div>
            <div class="p-2 rounded-xl bg-white/[0.03] border border-white/10">
              <div class="text-[10px] font-mono font-bold text-cyan-300">4 · Video Higgsfield</div>
              <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">La ficha en <strong>Fondo Blanco (#FFFFFF)</strong> + <code class="font-mono">@handle</code> entra directo al video de Higgsfield.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- IMPORTADOR DIRECTO DE FOTOS / URL DE ROPA U OBJETOS (RUTA B DE 4 PASOS: INTERNET -> ANTIGRAVITY/LLM CUTOUT -> 3D -> HIGGSFIELD) -->
      <div id="obj-web-importer-bar" class="hidden p-4 rounded-2xl bg-black/65 border border-pink-500/40 space-y-3 text-xs">
        <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-pink-300 font-bold">🌐 RUTA B EN 4 PASOS: 1. Foto Internet → 2. Recorte PNG/Blanco + LLM (Antigravity) → 3. Insertar en Modelo 3D → 4. Video Higgsfield</span>
            <h4 class="text-xs font-bold text-white mt-0.5">Pega con Ctrl+V / Cmd+V cualquier imagen copiada de internet, sube archivo o pega URL: recorta el fondo y extrae su ADN Material</h4>
          </div>
          <button id="btn-imp-copy-antigravity" type="button" class="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 text-[10px] font-mono font-bold" title="Copia el comando listo para pegárselo a Antigravity en el chat si quieres que el agente descargue, recorte e integre el activo por código">
            🤖 Copiar Comando para Antigravity LLM
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
          <div class="md:col-span-5 space-y-2">
            <div class="flex gap-1.5">
              <label class="cursor-pointer px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 shrink-0">
                📂 Subir Foto
                <input id="imp-obj-web-file" type="file" accept="image/*" class="hidden">
              </label>
              <input id="imp-obj-web-url" type="url" placeholder="https://.../objeto_o_prenda.jpg"
                class="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#c86446]">
              <button id="btn-imp-obj-web-fetch" type="button" class="px-2.5 py-1.5 rounded-xl bg-[#c86446] hover:opacity-95 text-white font-bold shrink-0">Extraer</button>
            </div>
            <div class="grid grid-cols-4 gap-1.5">
              <input id="imp-obj-web-name" type="text" placeholder="Nombre del activo"
                class="col-span-1 bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-white">
              <select id="imp-obj-web-type" class="col-span-1 bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-slate-200">
                <option value="garment">👗 Prenda Ropa → Colgar en Perchero 3D</option>
                <option value="painting">🖼 Cuadro / Obra → Enmarcar en Muro 3D</option>
                <option value="plant">🌿 Planta Botánica → Macetero Basalto/Latón</option>
                <option value="sculpture">🏛 Escultura → Plinto Museo 3D</option>
                <option value="furniture">🏺 Prop / Jarrón → Mesa Auxiliar 3D</option>
              </select>
              <select id="imp-obj-web-floor" class="col-span-1 bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-xs text-slate-200">
                <option value="2">Piso 2 · Residencia / Vanity</option>
                <option value="3">Piso 3 · Mind Sanctuary / Boudoir</option>
                <option value="4">Piso 4 · Penthouse Rooftop</option>
                <option value="1">Piso 1 · Le Velvet Café</option>
                <option value="0">Planta Baja · Cabaret Nocturne</option>
              </select>
              <select id="imp-obj-web-bgmode" class="col-span-1 bg-black/50 border border-emerald-500/40 rounded-lg px-2 py-1 text-xs text-emerald-200 font-semibold" title="Modo de preparación de la imagen de referencia para Higgsfield">
                <option value="white_sheet">⬜ Ficha Fondo Blanco (#FFFFFF Higgsfield)</option>
                <option value="auto_cutout">✂️ Recorte PNG Transparente (Auto-Cutout RGBA)</option>
                <option value="original">🖼 Conservar Foto Original</option>
              </select>
            </div>
          </div>
          <div class="md:col-span-7 p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-[10px] font-mono text-emerald-300 font-bold">Paleta Hexadecimal Extraída & Armonizada (Tríada + Latón #d4af37):</span>
              <div id="imp-obj-web-swatches" class="flex items-center gap-1.5">
                <span class="px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/25 text-white" style="background:#1f232b">#1f232b</span>
                <span class="px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/25 text-white" style="background:#0B2B20">#0B2B20</span>
                <span class="px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/25 text-black font-bold" style="background:#d4af37">#d4af37</span>
              </div>
            </div>
            <textarea id="imp-obj-web-token" rows="2" placeholder="ADN Material Inmutable (object_token_lock)..."
              class="w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[11px] font-mono text-slate-200"></textarea>
            <div class="flex items-center justify-end gap-2">
              <button id="btn-imp-obj-web-commit" type="button" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-[#c86446] hover:opacity-95 text-white font-bold shadow">
                ✨ Integrar en Motor 3D + Renderizar 1:1 a Bóveda
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Barra de captura desde 3D (visible cuando el visor 3D lateral está abierto en Objetos) -->
      <div id="obj-3d-capture-bar" class="hidden flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-[#c86446]/10 border border-[#c86446]/30 text-xs">
        <span class="text-slate-200">
          🎯 Encuadra cualquier mueble o accesorio en el visor izquierdo y guárdalo como Objeto:
        </span>
        <div class="flex flex-wrap items-center gap-2">
          <button id="btn-obj-snap-new-1x1" class="px-3 py-1.5 rounded-lg bg-[#c86446] hover:opacity-95 text-white font-bold">
            📸 Capturar Nuevo (1:1)
          </button>
          <button id="btn-obj-snap-new-9x16" class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15">
            📱 Capturar Nuevo (9:16 B-Roll)
          </button>
          <button id="btn-obj-snap-replace" class="px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white font-semibold">
            ↻ Reemplazar Imagen Seleccionada
          </button>
        </div>
      </div>

      <!-- Filtros por categoría -->
      <div id="obj-cat-pills" class="flex flex-wrap gap-1.5"></div>

      <!-- Cuerpo: Galería a la izquierda + Inspector del Objeto a la derecha -->
      <div class="grid grid-cols-12 gap-4 flex-1 min-h-[420px]">
        <div id="obj-grid" class="col-span-12 xl:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 content-start overflow-y-auto custom-scrollbar pr-1 max-h-[68vh]"></div>

        <div id="obj-inspector" class="col-span-12 xl:col-span-5 bg-black/45 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
          <!-- Renderizado dinámico -->
        </div>
      </div>
    </div>
  `;

  const $ = (id) => root.querySelector('#' + id);

  function getObjects() {
    return ctx.getObjects();
  }

  function getSelected() {
    const list = getObjects();
    return list.find((o) => o.id === selectedId) || list[0] || null;
  }

  function scheduleSave(obj) {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      await saveObjectToDB(obj);
      ctx.onObjectsChanged?.();
    }, 220);
  }

  function sanitizeHandle(raw) {
    const clean = String(raw || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_@-]/g, '_')
      .replace(/^@+/, '');
    return '@' + (clean || 'objeto');
  }

  function renderCategories() {
    const all = getObjects();
    const box = $('obj-cat-pills');
    box.innerHTML =
      OBJECT_CATEGORIES.map((cat) => {
        const act = cat === activeCategory;
        const count = cat === 'Todos' ? all.length : all.filter((o) => o.category === cat).length;
        return `<button data-cat="${esc(cat)}" class="obj-cat-btn px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
          act ? 'bg-[#c86446] text-white shadow' : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
        }"><span>${esc(cat)}</span><span class="text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
          act ? 'bg-black/35 text-white' : 'bg-black/45 text-slate-400'
        }">${count}</span></button>`;
      }).join('') +
      `<button id="btn-obj-refresh-all-3d" type="button" class="ml-auto px-3 py-1 rounded-lg text-[11px] font-mono font-bold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all" title="Re-renderiza en vivo cualquier imagen caída directamente desde el Motor 3D WebGL2">↻ Reparar / Re-Renderizar Fotos 3D</button>`;

    box.querySelectorAll('.obj-cat-btn').forEach((b) => {
      b.onclick = () => {
        activeCategory = b.dataset.cat;
        renderAll();
      };
    });
    $('btn-obj-refresh-all-3d')?.addEventListener('click', () => {
      ctx.repairAllVaultImagesFrom3D?.();
    });
  }

  function renderGrid() {
    const all = getObjects();
    $('obj-total-pill').textContent = `${all.length} objeto${all.length === 1 ? '' : 's'}`;

    const filtered = activeCategory === 'Todos' ? all : all.filter((o) => o.category === activeCategory);
    if (!selectedId && filtered[0]) selectedId = filtered[0].id;

    const grid = $('obj-grid');
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full rounded-xl border border-dashed border-white/15 p-8 text-center text-xs text-slate-400">
          No hay objetos en «${esc(activeCategory)}». Sube un render o captura uno desde el visor 3D.
        </div>`;
      return;
    }

    grid.innerHTML = filtered
      .map((obj) => {
        const isSel = obj.id === selectedId;
        const hasMaster = Boolean(obj.masterApprovedStill);
        const displayImg = obj.masterApprovedStill || obj.previzRender || obj.image;
        const floorTag = obj.floor === 0 ? 'PB' : `P${obj.floor ?? 2}`;
        return `
        <div data-id="${esc(obj.id)}" class="obj-card group cursor-pointer rounded-xl border p-2.5 bg-[#151821] hover:bg-[#1a1e29] transition-all flex flex-col gap-2 ${
          isSel ? 'border-[#c86446] copper-glow' : 'border-white/10'
        }">
          <div class="relative w-full aspect-square rounded-lg overflow-hidden border border-white/15" style="background: radial-gradient(circle at 50% 42%, #232834 0%, #10131a 72%, #090b10 100%);">
            <img src="${displayImg}" data-obj-id="${esc(obj.id)}" alt="${esc(obj.name)}" class="vault-card-img w-full h-full object-contain p-1.5 drop-shadow-[0_10px_18px_rgba(0,0,0,0.65)]">
            <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-[#f29979] border border-white/10">${esc(obj.handle)}</span>
            <span class="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-slate-300 border border-white/10">${floorTag}</span>
            ${
              hasMaster
                ? '<span class="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-amber-500 text-black text-[9px] font-mono font-extrabold shadow">🔒 REF / MASTER</span>'
                : obj.isPlaceholderImage
                  ? '<span class="absolute bottom-1.5 inset-x-1.5 text-center px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 text-[9px] font-mono border border-amber-400/30">Pendiente render</span>'
                  : '<span class="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-emerald-600/90 text-white text-[9px] font-mono font-bold">PNG RGBA 1:1</span>'
            }
          </div>
          <div class="min-w-0">
            <div class="text-xs font-bold text-white truncate">${esc(obj.name)}</div>
            <div class="text-[10px] text-slate-400 truncate">${esc(obj.category)} ${obj.modelId ? `• ${esc(obj.modelId)}` : ''}</div>
          </div>
        </div>`;
      })
      .join('');

    grid.querySelectorAll('.obj-card').forEach((el) => {
      el.onclick = () => {
        selectedId = el.dataset.id;
        renderGrid();
        renderInspector();
      };
    });

    // Auto-curación (Self-Healing): si alguna foto falla al cargar, se re-renderiza en vivo desde el motor 3D WebGL2
    grid.querySelectorAll('.vault-card-img').forEach((imgEl) => {
      imgEl.onerror = () => {
        const brokenId = imgEl.dataset.objId;
        if (brokenId && !imgEl.dataset.retried) {
          imgEl.dataset.retried = '1';
          ctx.repairSingleVaultObjectFrom3D?.(brokenId);
        }
      };
    });
  }

  let inspectorPreviewMode = 'active'; // 'active' | 'previz' | 'depth' | 'master'

  function renderInspector() {
    const box = $('obj-inspector');
    const obj = getSelected();
    if (!obj) {
      box.innerHTML = '<div class="text-xs text-slate-400 m-auto">Selecciona o crea un objeto.</div>';
      return;
    }

    const catsWithoutAll = OBJECT_CATEGORIES.filter((c) => c !== 'Todos');
    const hasMaster = Boolean(obj.masterApprovedStill);
    const hasDepth = Boolean(obj.previzDepthRender);
    const previzSrc = obj.previzRender || obj.image;
    const whiteSrc = obj.previzWhiteRender || String(previzSrc || '').replace(/_beauty\.png$/i, '_white.png');
    let shownImg = obj.masterApprovedStill || previzSrc;
    if (inspectorPreviewMode === 'previz') shownImg = previzSrc;
    else if (inspectorPreviewMode === 'white') shownImg = whiteSrc;
    else if (inspectorPreviewMode === 'depth' && hasDepth) shownImg = obj.previzDepthRender;
    else if (inspectorPreviewMode === 'master' && hasMaster) shownImg = obj.masterApprovedStill;

    const coordsText = obj.worldPos
      ? `(${Number(obj.worldPos.x).toFixed(2)}, ${Number(obj.worldPos.y).toFixed(2)}, ${Number(obj.worldPos.z).toFixed(2)})`
      : obj.camTarget
        ? `(${Number(obj.camTarget.x).toFixed(2)}, ${Number(obj.camTarget.y).toFixed(2)}, ${Number(obj.camTarget.z).toFixed(2)})`
        : 'Sin anclaje 3D';

    box.innerHTML = `
      <div class="flex items-start gap-3 pb-3 border-b border-white/10">
        <div class="space-y-1.5 shrink-0">
          <div class="relative w-24 h-24 rounded-xl overflow-hidden border border-white/15" style="${inspectorPreviewMode === 'white' ? 'background:#ffffff;' : 'background: radial-gradient(circle at 50% 42%, #232834 0%, #10131a 72%, #090b10 100%);'}">
            <img id="insp-obj-img" src="${shownImg}" alt="${esc(obj.name)}" class="w-full h-full object-contain p-1">
            <span class="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[8px] font-mono ${hasMaster ? 'text-amber-300' : 'text-emerald-300'}">
              ${inspectorPreviewMode === 'depth' ? 'DEPTH 16B' : inspectorPreviewMode === 'white' ? '⬜ WHITE BG' : hasMaster && inspectorPreviewMode !== 'previz' ? '🔒 REF/MASTER' : 'PNG RGBA'}
            </span>
          </div>
          <div class="grid grid-cols-4 gap-1 text-[8.5px] font-mono">
            <button id="insp-tab-previz" type="button" class="px-1 py-0.5 rounded border ${inspectorPreviewMode === 'previz' || (inspectorPreviewMode === 'active' && !hasMaster) ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200 font-bold' : 'border-white/10 bg-white/5 text-slate-400'}">PNG</button>
            <button id="insp-tab-white" type="button" class="px-1 py-0.5 rounded border ${inspectorPreviewMode === 'white' ? 'border-white bg-white text-black font-bold' : 'border-white/10 bg-white/5 text-slate-300'}" title="Vista en Fondo Blanco Puro (#FFFFFF) para Higgsfield Elements">Blanco</button>
            <button id="insp-tab-depth" type="button" ${hasDepth ? '' : 'disabled'} class="px-1 py-0.5 rounded border ${inspectorPreviewMode === 'depth' ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 font-bold' : 'border-white/10 bg-white/5 text-slate-400 disabled:opacity-35'}">Depth</button>
            <button id="insp-tab-master" type="button" ${hasMaster ? '' : 'disabled'} class="px-1 py-0.5 rounded border ${inspectorPreviewMode === 'master' || (inspectorPreviewMode === 'active' && hasMaster) ? 'border-amber-400 bg-amber-500/25 text-amber-200 font-bold' : 'border-white/10 bg-white/5 text-slate-400 disabled:opacity-35'}">Ref</button>
          </div>
        </div>

        <div class="flex-1 min-w-0 space-y-1.5">
          <input id="insp-obj-name" type="text" value="${esc(obj.name)}" placeholder="Nombre del objeto"
            class="w-full bg-black/50 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-[#c86446]">
          <div class="grid grid-cols-2 gap-1.5">
            <input id="insp-obj-handle" type="text" value="${esc(obj.handle)}" placeholder="@etiqueta"
              class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] font-mono text-[#f29979] focus:outline-none focus:border-[#c86446]">
            <select id="insp-obj-cat" class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-slate-200">
              ${catsWithoutAll.map((c) => `<option value="${esc(c)}" ${c === obj.category ? 'selected' : ''}>${esc(c)}</option>`).join('')}
            </select>
          </div>
          <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5">
            <span>📍 Piso ${obj.floor ?? 2} (${esc(obj.spotId || 'set')}) • ${coordsText}</span>
            ${obj.camPos ? '<button id="insp-obj-fly-3d" type="button" class="text-emerald-300 hover:text-white font-bold">🎯 Ver en 3D</button>' : ''}
          </div>
          <div class="flex flex-wrap gap-1.5 pt-0.5">
            <label class="cursor-pointer px-2 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[10px] font-semibold text-white border border-white/10">
              🖼 Previz
              <input id="insp-obj-file" type="file" accept="image/*" class="hidden">
            </label>
            <label class="cursor-pointer px-2 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-[10px] font-bold text-amber-200 border border-amber-400/40" title="Sube el primer render fotorrealista aprobado en Flux/ComfyUI para congelarlo en todos los capítulos">
              🔒 Subir Master Still Flux
              <input id="insp-obj-master-file" type="file" accept="image/*" class="hidden">
            </label>
            <button id="insp-obj-use-in-prompt" class="px-2.5 py-1 rounded-lg bg-[#c86446] hover:opacity-95 text-[10px] font-bold text-white">
              ✨ Inyectar en Prompt
            </button>
          </div>
        </div>
      </div>

      <!-- STEPPER DE PIPELINE ACTIVO EN EL INSPECTOR (RUTA A 3 PASOS vs RUTA B 4 PASOS) -->
      ${
        obj.id.startsWith('obj-web-') || String(obj.usage || '').includes('Web/Foto')
          ? `<div class="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/35 space-y-1.5 text-[10px]">
              <div class="flex items-center justify-between font-mono font-bold text-pink-300">
                <span>🌐 RUTA B (4 PASOS · INTERNET → ANTIGRAVITY/LLM → 3D → HIGGSFIELD)</span>
                <span class="text-emerald-300">4/4 LISTO</span>
              </div>
              <div class="grid grid-cols-4 gap-1 font-mono text-[9px]">
                <div class="px-1.5 py-1 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">✔ 1. Web Foto</div>
                <div class="px-1.5 py-1 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">✔ 2. Recorte LLM</div>
                <div class="px-1.5 py-1 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">✔ 3. En 3D (P${obj.floor ?? 2})</div>
                <div class="px-1.5 py-1 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-400/40">🎬 4. Higgsfield</div>
              </div>
            </div>`
          : `<div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5 text-[10px]">
              <div class="flex items-center justify-between font-mono font-bold text-emerald-300">
                <span>🏛️ RUTA A (3 PASOS · MODELO 3D → REALISTA FLUX → VIDEO HIGGSFIELD)</span>
                <span class="${hasMaster ? 'text-amber-300' : 'text-cyan-300'}">${hasMaster ? 'PASO 3/3 LISTO' : 'PASO 1/3 → FALTA MASTER'}</span>
              </div>
              <div class="grid grid-cols-3 gap-1 font-mono text-[9px]">
                <div class="px-1.5 py-1 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">✔ 1. Existe en 3D (PNG+Depth)</div>
                <div class="px-1.5 py-1 rounded ${hasMaster ? 'bg-amber-500/25 text-amber-200 border border-amber-400/40' : 'bg-white/5 text-slate-300 border border-white/10'}">${hasMaster ? '🔒 2. Realista Creado' : '⏳ 2. Crear Realista (Subir Master)'}</div>
                <div class="px-1.5 py-1 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-400/40">🎬 3. Insertar en Video</div>
              </div>
            </div>`
      }

      <!-- MASTER STILL LOCK PANEL (MEJORA DE FLUJO 2 — REGLA 1:2 ZERO-WASTE) -->
      <div class="p-2.5 rounded-xl border ${hasMaster ? 'bg-amber-500/10 border-amber-400/40' : 'bg-white/[0.03] border-white/10'} space-y-1.5 text-[10px]">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold uppercase ${hasMaster ? 'text-amber-300' : 'text-slate-300'}">
            ${hasMaster ? '🔒 MASTER STILL LOCK ACTIVO (Flux Redux + CN Depth)' : '🔓 ESTADO 1: PREVIZ 3D (Pendiente Master Still Flux)'}
          </span>
          ${hasMaster ? '<button id="insp-clear-master" type="button" class="text-rose-300 hover:text-white font-mono">Desbloquear</button>' : ''}
        </div>
        <div class="grid grid-cols-3 gap-1.5 font-mono">
          <div>
            <label class="text-slate-400 block text-[9px]">Seed Aprobada</label>
            <input id="insp-master-seed" type="text" value="${esc(obj.masterSeed || '')}" placeholder="ej. 84920144"
              class="w-full bg-black/50 border border-white/10 rounded px-1.5 py-0.5 text-[10px] text-amber-200">
          </div>
          <div>
            <label class="text-slate-400 block text-[9px]">Redux / IP Weight</label>
            <input id="insp-redux-weight" type="number" step="0.01" min="0.50" max="0.95" value="${Number(obj.reduxWeight ?? 0.75).toFixed(2)}"
              class="w-full bg-black/50 border border-white/10 rounded px-1.5 py-0.5 text-[10px] text-emerald-300">
          </div>
          <div>
            <label class="text-slate-400 block text-[9px]">CN Depth @ End</label>
            <input type="text" readonly value="${obj.cnDepthStrength ?? 0.68} @ ${obj.cnDepthEnd ?? 0.58}"
              class="w-full bg-black/40 border border-white/5 rounded px-1.5 py-0.5 text-[10px] text-cyan-300">
          </div>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="insp-obj-token" class="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            ADN Material Inmutable (object_token_lock)
          </label>
          <div class="flex items-center gap-2">
            <button id="insp-sanitize-triad" type="button" class="text-[10px] font-mono text-emerald-300 hover:text-white" title="Aplica filtro estético de la Tríada Cromática + Latón Cepillado (#d4af37)">🎨 Filtro Tríada</button>
            <button id="insp-copy-token" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar</button>
          </div>
        </div>
        <textarea id="insp-obj-token" rows="3" class="prompt-textarea">${esc(obj.promptToken)}</textarea>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="insp-obj-motion" class="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Motion Prompt B-Roll 100mm Macro (<= 3.5s · Motion 2.0–2.2)
          </label>
          <button id="insp-copy-motion" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar</button>
        </div>
        <textarea id="insp-obj-motion" rows="2" class="prompt-textarea">${esc(obj.motionPrompt || '')}</textarea>
      </div>

      <div class="space-y-1">
        <label for="insp-obj-usage" class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Receta Kelvin & Continuidad en Escena
        </label>
        <input id="insp-obj-usage" type="text" value="${esc(obj.usage || '')}"
          class="w-full bg-black/45 border border-white/10 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-300 focus:outline-none focus:border-[#c86446]">
      </div>

      <div class="grid grid-cols-5 gap-2 pt-2 mt-auto border-t border-white/10 text-[11px] font-semibold">
        <button id="insp-obj-export" class="col-span-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">
          📦 Descargar Pack Bóveda (Beauty + Depth + JSON)
        </button>
        <button id="insp-obj-delete" class="col-span-1 py-2 rounded-xl bg-white/5 hover:bg-rose-600/70 text-slate-300 hover:text-white border border-white/10 transition-colors" title="Eliminar objeto">
          🗑
        </button>
      </div>
    `;

    $('insp-obj-name').oninput = (e) => {
      obj.name = e.target.value;
      renderGrid();
      scheduleSave(obj);
    };
    $('insp-obj-handle').onchange = (e) => {
      obj.handle = sanitizeHandle(e.target.value);
      e.target.value = obj.handle;
      renderGrid();
      scheduleSave(obj);
    };
    $('insp-obj-cat').onchange = (e) => {
      obj.category = e.target.value;
      renderGrid();
      scheduleSave(obj);
    };
    $('insp-obj-token').oninput = (e) => {
      obj.promptToken = e.target.value;
      scheduleSave(obj);
    };
    $('insp-obj-motion').oninput = (e) => {
      obj.motionPrompt = e.target.value;
      scheduleSave(obj);
    };
    $('insp-obj-usage').oninput = (e) => {
      obj.usage = e.target.value;
      scheduleSave(obj);
    };

    $('insp-tab-previz')?.addEventListener('click', () => {
      inspectorPreviewMode = 'previz';
      renderInspector();
    });
    $('insp-tab-white')?.addEventListener('click', () => {
      inspectorPreviewMode = 'white';
      renderInspector();
    });
    $('insp-tab-depth')?.addEventListener('click', () => {
      if (obj.previzDepthRender) {
        inspectorPreviewMode = 'depth';
        renderInspector();
      }
    });
    $('insp-tab-master')?.addEventListener('click', () => {
      if (obj.masterApprovedStill) {
        inspectorPreviewMode = 'master';
        renderInspector();
      }
    });

    $('insp-obj-fly-3d')?.addEventListener('click', () => {
      ctx.flyToVaultObjectIn3D?.(obj);
    });

    $('insp-master-seed')?.addEventListener('input', (e) => {
      obj.masterSeed = e.target.value.trim() || null;
      scheduleSave(obj);
    });
    $('insp-redux-weight')?.addEventListener('change', (e) => {
      const val = Math.min(0.95, Math.max(0.5, parseFloat(e.target.value) || 0.75));
      obj.reduxWeight = Number(val.toFixed(2));
      e.target.value = obj.reduxWeight.toFixed(2);
      scheduleSave(obj);
    });

    $('insp-clear-master')?.addEventListener('click', async () => {
      obj.masterApprovedStill = null;
      obj.image = obj.previzRender || obj.image;
      inspectorPreviewMode = 'previz';
      await saveObjectToDB(obj);
      ctx.onObjectsChanged?.();
      renderAll();
      ctx.setStatus(`🔓 <span class="text-amber-300 font-bold">Master Still desbloqueado</span> en ${esc(obj.handle)} (usando Previz 3D).`);
    });

    $('insp-sanitize-triad')?.addEventListener('click', () => {
      obj.promptToken = buildCanonicalObjectTokenLock({
        speciesOrModel: obj.name,
        primaryMaterial: obj.promptToken,
        containerOrHardware: 'warm brushed-brass hardware (#d4af37) and dark walnut or matte charcoal basalt base (#1f232b)',
        kelvinResponse: `calibrated to ${obj.kelvinRecipe || '3200K key light'} with zero moiré`
      });
      $('insp-obj-token').value = obj.promptToken;
      scheduleSave(obj);
      ctx.setStatus(`🎨 <span class="text-emerald-400 font-bold">ADN Material filtrado con la Tríada Cromática y Latón Cepillado (#d4af37).</span>`);
    });

    $('insp-obj-file').onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const dataUrl = await readAndResizeImageFile(file);
      obj.previzRender = dataUrl;
      if (!obj.masterApprovedStill) obj.image = dataUrl;
      obj.isPlaceholderImage = false;
      inspectorPreviewMode = 'previz';
      await saveObjectToDB(obj);
      ctx.onObjectsChanged?.();
      renderAll();
      ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Previz actualizado</span> para ${esc(obj.name)}.`);
    };

    $('insp-obj-master-file').onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const dataUrl = await readAndResizeImageFile(file);
      obj.masterApprovedStill = dataUrl;
      obj.image = dataUrl;
      obj.isPlaceholderImage = false;
      if (!obj.masterSeed) obj.masterSeed = String(Math.floor(10000000 + Math.random() * 90000000));
      inspectorPreviewMode = 'master';
      await saveObjectToDB(obj);
      ctx.onObjectsChanged?.();
      renderAll();
      ctx.setStatus(`🔒 <span class="text-amber-300 font-bold">Master Approved Still bloqueado</span> para ${esc(obj.handle)} (Redux ${obj.reduxWeight || 0.75} + CN Depth 0.68@0.58).`);
    };

    $('insp-copy-token').onclick = () => navigator.clipboard.writeText(obj.promptToken);
    $('insp-copy-motion').onclick = () => navigator.clipboard.writeText(obj.motionPrompt || '');

    $('insp-obj-use-in-prompt').onclick = () => {
      ctx.injectObjectIntoPrompts(obj);
    };

    $('insp-obj-export').onclick = () => {
      const slug = obj.handle.replace('@', '');
      const primaryImg = obj.masterApprovedStill || obj.previzRender || obj.image;
      ctx.downloadDataUrl(primaryImg, `objeto_${slug}_${obj.masterApprovedStill ? 'master' : 'previz_beauty'}.png`);
      if (obj.previzDepthRender) {
        setTimeout(() => {
          ctx.downloadDataUrl(obj.previzDepthRender, `objeto_${slug}_previz_depth16b.png`);
        }, 160);
      }
      setTimeout(() => {
        ctx.downloadJson(
          {
            type: 'AlinaStudioOS_DoubleRegistry_VaultObject',
            id: obj.id,
            name: obj.name,
            handle: obj.handle,
            category: obj.category,
            floor: obj.floor,
            spotId: obj.spotId,
            modelId: obj.modelId || null,
            wardrobeId: obj.wardrobeId || null,
            spatial_coordinates_3d: {
              worldPos: obj.worldPos || null,
              camPos: obj.camPos || null,
              camTarget: obj.camTarget || null
            },
            master_still_lock: {
              locked: Boolean(obj.masterApprovedStill),
              masterSeed: obj.masterSeed || null,
              kelvinRecipe: obj.kelvinRecipe || null,
              fluxReduxWeight: obj.reduxWeight ?? 0.75,
              controlNetDepthStrength: obj.cnDepthStrength ?? 0.68,
              controlNetDepthEnd: obj.cnDepthEnd ?? 0.58
            },
            object_token_lock: obj.promptToken,
            broll_zero_face_motion_prompt: obj.motionPrompt,
            usage_notes: obj.usage
          },
          `objeto_${slug}_higgsfield.json`
        );
      }, 340);
      ctx.setStatus(`📦 <span class="text-emerald-400 font-bold">Objeto ${esc(obj.handle)} exportado (Beauty + Depth + JSON).</span>`);
    };

    $('insp-obj-delete').onclick = async () => {
      const list = getObjects();
      const idx = list.findIndex((x) => x.id === obj.id);
      if (idx >= 0) list.splice(idx, 1);
      await deleteObjectFromDB(obj.id);
      selectedId = list[0]?.id || null;
      ctx.onObjectsChanged?.();
      renderAll();
    };
  }

  async function createObjectWithImage(dataUrl, suggestedName = 'Nuevo Objeto Renderizado', isPlaceholder = false, extra = {}) {
    const list = getObjects();
    const num = list.length + 1;
    const cleanName = suggestedName.replace(/\.[a-z0-9]+$/i, '');
    const slug = cleanName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 18);

    const activeSpot = ctx.getActiveSpot();
    const camSnap = ctx.getCameraTelemetry?.() || null;

    const newObj = {
      id: `obj-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      order: num,
      name: cleanName,
      handle: `@${slug || 'objeto_' + num}`,
      category: activeCategory === 'Todos' ? 'Arte & Mobiliario' : activeCategory,
      floor: ctx.getActiveFloor(),
      spotId: activeSpot?.id || 'vanity',
      worldPos: extra.worldPos || camSnap?.target || activeSpot?.alinaPos || null,
      camPos: extra.camPos || camSnap?.position || activeSpot?.macroPos || null,
      camTarget: extra.camTarget || camSnap?.target || activeSpot?.macroTarget || null,
      image: dataUrl,
      previzRender: dataUrl,
      previzDepthRender: extra.depthDataUrl || null,
      masterApprovedStill: null,
      masterSeed: null,
      reduxWeight: 0.75,
      cnDepthStrength: 0.68,
      cnDepthEnd: 0.58,
      isPlaceholderImage: isPlaceholder,
      promptToken: buildCanonicalObjectTokenLock({
        speciesOrModel: cleanName,
        primaryMaterial: 'crafted in Alina Master Triad finishes (obsidian #111216, charcoal silk #1f232b, forest emerald #0B2B20, raw ivory #ebe4d5, tobacco leather #5c3a24)',
        containerOrHardware: 'warm brushed-brass hardware (#d4af37) on dark walnut or matte charcoal basalt plinth',
        kelvinResponse: `catching warm practical key light in ${activeSpot?.name || 'sanctuary set'}`
      }),
      motionPrompt: 'Locked 100mm macro shot with subtle warm Kelvin specular reflections across brushed-brass and natural surface grain, slow 2% push-in, duration 3.2s, no humans, motion strength 2.1',
      usage: 'Doble Registro 3D ↔ Bóveda para Flux Redux / IP-Adapter e inserción B-Roll 1:2.'
    };

    list.unshift(newObj);
    selectedId = newObj.id;
    await saveObjectToDB(newObj);
    ctx.onObjectsChanged?.();
    renderAll();
    return newObj;
  }

  // Eventos superiores de creación / subida / captura 3D
  $('input-obj-upload-new').onchange = async (e) => {
    const files = Array.from(e.target.files || []);
    for (const f of files) {
      const dataUrl = await readAndResizeImageFile(f);
      await createObjectWithImage(dataUrl, f.name, false);
    }
    e.target.value = '';
    if (files.length) {
      ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">${files.length} render(s) guardado(s) en Bóveda de Objetos.</span>`);
    }
  };

  $('btn-obj-create-empty').onclick = async () => {
    const fallbackSvg = `data:image/svg+xml;utf8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="540" height="540"><rect width="540" height="540" fill="#0d1017"/><text x="270" y="260" text-anchor="middle" font-size="88">🏺</text><text x="270" y="330" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="20">Sube o captura imagen</text></svg>'
    )}`;
    await createObjectWithImage(fallbackSvg, `Objeto ${getObjects().length + 1}`, true);
  };

  $('btn-obj-toggle-3d').onclick = () => {
    const showing = ctx.toggle3DViewportInObjects();
    $('btn-obj-toggle-3d').textContent = showing ? '✕ Ocultar Visor 3D' : '👁 Mostrar Visor 3D para Capturar';
    $('obj-3d-capture-bar').classList.toggle('hidden', !showing);
    $('obj-3d-capture-bar').classList.toggle('flex', showing);
  };

  $('btn-obj-toggle-web-import').onclick = () => {
    showWebImporter = !showWebImporter;
    $('obj-web-importer-bar').classList.toggle('hidden', !showWebImporter);
  };
  $('btn-obj-open-route-b')?.addEventListener('click', () => {
    showWebImporter = true;
    $('obj-web-importer-bar').classList.remove('hidden');
  });

  // Soporte de pegado directo desde el portapapeles (Ctrl+V / Cmd+V) para Ruta B Paso 2
  window.addEventListener('paste', async (ev) => {
    if ($('obj-web-importer-bar')?.classList.contains('hidden')) return;
    const items = Array.from(ev.clipboardData?.items || []);
    const imgItem = items.find((it) => it.type.startsWith('image/'));
    if (imgItem) {
      const file = imgItem.getAsFile();
      if (file) {
        const dataUrl = await readAndResizeImageFile(file);
        await runVaultWebAnalysis(dataUrl, $('imp-obj-web-name')?.value || 'Objeto Pegado Web');
        ctx.setStatus('📋 <span class="text-emerald-400 font-bold">Ruta B · Paso 2: Imagen pegada desde el portapapeles y analizada por LLM/Tríada.</span>');
      }
    }
  });

  $('btn-imp-copy-antigravity')?.addEventListener('click', () => {
    const title = $('imp-obj-web-name')?.value?.trim() || 'Prenda / Objeto Web';
    const rawType = $('imp-obj-web-type')?.value || 'garment';
    const floor = $('imp-obj-web-floor')?.value || '2';
    const url = $('imp-obj-web-url')?.value?.trim() || '[PEGA_URL_O_ADJUNTA_FOTO]';
    const brief = `RUTA B (4 PASOS - ANTIGRAVITY LLM):
1. Objeto de internet: "${title}" (${url})
2. Recórtalo en PNG transparente (RGBA) + Ficha en Fondo Blanco (#FFFFFF) y armoniza su ADN Material a la Tríada de Alina (#111216, #1f232b, #0B2B20, #ebe4d5, #5c3a24) + Latón Cepillado (#d4af37).
3. Insértalo en el Modelo 3D (Tipo: ${rawType}, Piso ${floor}) respetando los 12 Conos Ópticos.
4. Déjalo registrado en la Bóveda con su @handle y prompt 100mm macro listo para el video de Higgsfield.`;
    navigator.clipboard.writeText(brief);
    ctx.setStatus('🤖 <span class="text-amber-300 font-bold">Comando de Ruta B (4 Pasos) copiado para Antigravity LLM.</span>');
  });

  async function runVaultWebAnalysis(dataUrl, suggestedName) {
    pendingWebDataUrl = dataUrl;
    const nameEl = $('imp-obj-web-name');
    if (nameEl && !nameEl.value.trim() && suggestedName) {
      nameEl.value = suggestedName.replace(/\.[a-z0-9]+$/i, '');
    }
    const title = nameEl?.value?.trim() || suggestedName || 'Activo Web Couture';
    const rawType = $('imp-obj-web-type')?.value || 'garment';
    const mode = rawType === 'garment' ? 'wardrobe' : 'object';
    const subtype = rawType === 'garment' ? 'dress' : rawType;
    const floor = Number($('imp-obj-web-floor')?.value ?? ctx.getActiveFloor() ?? 2);
    const kelvin = floor === 3 ? '2200K' : floor === 4 ? '4300K' : floor === 1 ? '4600K' : '3400K';
    pendingWebAnalysis = await extractPaletteAndTokensFromDataUrl(dataUrl, {
      mode,
      title,
      subtype,
      floor,
      kelvin
    });
    if ($('imp-obj-web-token')) $('imp-obj-web-token').value = pendingWebAnalysis.fluxTokens;
    if ($('imp-obj-web-swatches')) {
      $('imp-obj-web-swatches').innerHTML = pendingWebAnalysis.triadSwatches
        .map((hex) => `<span class="px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/25 text-white" style="background:${hex}">${hex}</span>`)
        .join('');
    }
  }

  $('imp-obj-web-file').onchange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readAndResizeImageFile(file);
    await runVaultWebAnalysis(dataUrl, file.name);
  };

  $('btn-imp-obj-web-fetch').onclick = async () => {
    const url = $('imp-obj-web-url')?.value?.trim();
    const dataUrl = await fetchWebImageAsDataUrl(url);
    await runVaultWebAnalysis(dataUrl, $('imp-obj-web-name')?.value || 'Activo Web');
  };

  $('btn-imp-obj-web-commit').onclick = async () => {
    const title = $('imp-obj-web-name')?.value?.trim() || 'Activo Importado Web';
    const rawType = $('imp-obj-web-type')?.value || 'garment';
    const floor = Number($('imp-obj-web-floor')?.value ?? ctx.getActiveFloor() ?? 2);
    const bgMode = $('imp-obj-web-bgmode')?.value || 'white_sheet';
    if (!pendingWebAnalysis) {
      await runVaultWebAnalysis(pendingWebDataUrl, title);
    }
    const processedRefUrl = pendingWebDataUrl
      ? await processReferenceImageForHiggsfield(pendingWebDataUrl, bgMode, 1080)
      : null;
    const tokenLock = $('imp-obj-web-token')?.value?.trim() || pendingWebAnalysis.fluxTokens;
    const swatches = pendingWebAnalysis?.triadSwatches || ['#1f232b', '#0B2B20', '#d4af37'];

    if (rawType === 'garment') {
      const created = await ctx.importWebGarmentToRackAndVault?.({
        title,
        subtype: 'dress',
        floor,
        category: 'Vestuario & Joyas',
        swatches,
        fluxTokens: tokenLock,
        higgsfieldPhysics: pendingWebAnalysis.higgsfieldPhysics,
        referenceDataUrl: processedRefUrl
      });
      if (created?.id) selectedId = created.id;
    } else {
      const created = await ctx.importWebObjectTo3DAndVault?.({
        title,
        subtype: rawType,
        floor,
        swatches,
        promptToken: tokenLock,
        motionPrompt: pendingWebAnalysis.higgsfieldPhysics,
        referenceDataUrl: processedRefUrl
      });
      if (created?.id) selectedId = created.id;
    }

    showWebImporter = false;
    $('obj-web-importer-bar').classList.add('hidden');
    pendingWebDataUrl = null;
    pendingWebAnalysis = null;
    renderAll();
  };

  $('btn-obj-snap-new-1x1').onclick = async () => {
    const res = await ctx.captureObjectFrom3D('1:1');
    if (res?.beautyUrl) {
      await createObjectWithImage(res.beautyUrl, `Prop ${ctx.getActiveSpot()?.name || 'Santuario'}`, false, {
        depthDataUrl: res.depthUrl
      });
      ctx.setStatus('📸 <span class="text-emerald-400 font-bold">Doble Registro 1:1 (Beauty + Depth 16-bit) capturado del visor 3D y guardado.</span>');
    }
  };

  $('btn-obj-snap-new-9x16').onclick = async () => {
    const res = await ctx.captureObjectFrom3D('9:16');
    if (res?.beautyUrl) {
      await createObjectWithImage(res.beautyUrl, `B-Roll ${ctx.getActiveSpot()?.name || 'Santuario'}`, false, {
        depthDataUrl: res.depthUrl
      });
      ctx.setStatus('📱 <span class="text-emerald-400 font-bold">Doble Registro B-Roll 9:16 (Beauty + Depth 16-bit) capturado del visor 3D y guardado.</span>');
    }
  };

  $('btn-obj-snap-replace').onclick = async () => {
    const obj = getSelected();
    if (!obj) return;
    const res = await ctx.captureObjectFrom3D('1:1');
    if (res?.beautyUrl) {
      obj.previzRender = res.beautyUrl;
      obj.previzDepthRender = res.depthUrl || obj.previzDepthRender;
      if (!obj.masterApprovedStill) obj.image = res.beautyUrl;
      obj.isPlaceholderImage = false;
      const snap = ctx.getCameraTelemetry?.();
      if (snap?.position && snap?.target) {
        obj.camPos = snap.position;
        obj.camTarget = snap.target;
        obj.worldPos = snap.target;
      }
      await saveObjectToDB(obj);
      ctx.onObjectsChanged?.();
      renderAll();
      ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Previz 3D (Beauty + Depth) asignado a ${esc(obj.handle)}.</span>`);
    }
  };

  function renderAll() {
    renderCategories();
    renderGrid();
    renderInspector();
  }

  return {
    render: renderAll,
    selectObject(id) {
      selectedId = id;
      renderAll();
    },
    sync3DBar(showing) {
      $('btn-obj-toggle-3d').textContent = showing ? '✕ Ocultar Visor 3D' : '👁 Mostrar Visor 3D para Capturar';
      $('obj-3d-capture-bar').classList.toggle('hidden', !showing);
      $('obj-3d-capture-bar').classList.toggle('flex', showing);
    }
  };
}
