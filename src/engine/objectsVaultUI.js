// Módulo UI de la Bóveda de Objetos Renderizados ("Objetos") para Higgsfield & B-Roll Zero-Face.
// Permite subir renders externos (PNG/JPG/WebP), capturar objetos 1:1 o 9:16 desde el visor 3D
// (Three.js o Unity 6 URP), editar sus tokens fijos e inyectarlos en los prompts de Alina.

import { OBJECT_CATEGORIES } from '../data/alinaLoreData.js';
import { deleteObjectFromDB, readAndResizeImageFile, saveObjectToDB } from './shotsStorage.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function mountObjectsVaultUI(root, ctx) {
  let activeCategory = 'Todos';
  let selectedId = null;
  let saveTimer = null;

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
    const box = $('obj-cat-pills');
    box.innerHTML = OBJECT_CATEGORIES.map((cat) => {
      const act = cat === activeCategory;
      return `<button data-cat="${esc(cat)}" class="obj-cat-btn px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
        act ? 'bg-[#c86446] text-white shadow' : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
      }">${esc(cat)}</button>`;
    }).join('');
    box.querySelectorAll('.obj-cat-btn').forEach((b) => {
      b.onclick = () => {
        activeCategory = b.dataset.cat;
        renderAll();
      };
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
        return `
        <div data-id="${esc(obj.id)}" class="obj-card group cursor-pointer rounded-xl border p-2.5 bg-[#151821] hover:bg-[#1a1e29] transition-all flex flex-col gap-2 ${
          isSel ? 'border-[#c86446] copper-glow' : 'border-white/10'
        }">
          <div class="relative w-full aspect-square rounded-lg overflow-hidden bg-black border border-white/10">
            <img src="${obj.image}" alt="${esc(obj.name)}" class="w-full h-full object-cover">
            <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-[#f29979] border border-white/10">${esc(obj.handle)}</span>
            ${
              obj.isPlaceholderImage
                ? '<span class="absolute bottom-1.5 inset-x-1.5 text-center px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 text-[9px] font-mono border border-amber-400/30">Pendiente render</span>'
                : '<span class="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-emerald-600/85 text-white text-[9px] font-mono font-bold">RENDER</span>'
            }
          </div>
          <div class="min-w-0">
            <div class="text-xs font-bold text-white truncate">${esc(obj.name)}</div>
            <div class="text-[10px] text-slate-400 truncate">${esc(obj.category)}</div>
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
  }

  function renderInspector() {
    const box = $('obj-inspector');
    const obj = getSelected();
    if (!obj) {
      box.innerHTML = '<div class="text-xs text-slate-400 m-auto">Selecciona o crea un objeto.</div>';
      return;
    }

    const catsWithoutAll = OBJECT_CATEGORIES.filter((c) => c !== 'Todos');

    box.innerHTML = `
      <div class="flex items-start gap-3 pb-3 border-b border-white/10">
        <div class="relative w-24 h-24 rounded-xl overflow-hidden bg-black border border-white/15 shrink-0">
          <img id="insp-obj-img" src="${obj.image}" alt="${esc(obj.name)}" class="w-full h-full object-cover">
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
          <div class="flex flex-wrap gap-1.5 pt-0.5">
            <label class="cursor-pointer px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[10px] font-semibold text-white border border-white/10">
              🖼 Cambiar Imagen
              <input id="insp-obj-file" type="file" accept="image/*" class="hidden">
            </label>
            <button id="insp-obj-use-in-prompt" class="px-2.5 py-1 rounded-lg bg-[#c86446] hover:opacity-95 text-[10px] font-bold text-white">
              ✨ Inyectar en Estudio Prompts
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="insp-obj-token" class="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Object Token Lock (Descripción que se inyecta al prompt)
          </label>
          <button id="insp-copy-token" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar</button>
        </div>
        <textarea id="insp-obj-token" rows="3" class="prompt-textarea">${esc(obj.promptToken)}</textarea>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="insp-obj-motion" class="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Motion Prompt B-Roll Zero-Face (Higgsfield I2V)
          </label>
          <button id="insp-copy-motion" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar</button>
        </div>
        <textarea id="insp-obj-motion" rows="3" class="prompt-textarea">${esc(obj.motionPrompt || '')}</textarea>
      </div>

      <div class="space-y-1">
        <label for="insp-obj-usage" class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Notas de Uso / Continuidad en Escena
        </label>
        <input id="insp-obj-usage" type="text" value="${esc(obj.usage || '')}"
          class="w-full bg-black/45 border border-white/10 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-300 focus:outline-none focus:border-[#c86446]">
      </div>

      <div class="grid grid-cols-5 gap-2 pt-2 mt-auto border-t border-white/10 text-[11px] font-semibold">
        <button id="insp-obj-export" class="col-span-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">
          📦 Descargar Render + JSON Higgsfield
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

    $('insp-obj-file').onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const dataUrl = await readAndResizeImageFile(file);
      obj.image = dataUrl;
      obj.isPlaceholderImage = false;
      await saveObjectToDB(obj);
      ctx.onObjectsChanged?.();
      renderAll();
      ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Imagen actualizada</span> para ${esc(obj.name)}.`);
    };

    $('insp-copy-token').onclick = () => navigator.clipboard.writeText(obj.promptToken);
    $('insp-copy-motion').onclick = () => navigator.clipboard.writeText(obj.motionPrompt || '');

    $('insp-obj-use-in-prompt').onclick = () => {
      ctx.injectObjectIntoPrompts(obj);
    };

    $('insp-obj-export').onclick = () => {
      const slug = obj.handle.replace('@', '');
      ctx.downloadDataUrl(obj.image, `objeto_${slug}.png`);
      setTimeout(() => {
        ctx.downloadJson(
          {
            type: 'Higgsfield_Object_Reference',
            id: obj.id,
            name: obj.name,
            handle: obj.handle,
            category: obj.category,
            object_token_lock: obj.promptToken,
            broll_zero_face_motion_prompt: obj.motionPrompt,
            usage_notes: obj.usage
          },
          `objeto_${slug}_higgsfield.json`
        );
      }, 220);
      ctx.setStatus(`📦 <span class="text-emerald-400 font-bold">Objeto ${esc(obj.handle)} exportado (Imagen + JSON).</span>`);
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

  async function createObjectWithImage(dataUrl, suggestedName = 'Nuevo Objeto Renderizado', isPlaceholder = false) {
    const list = getObjects();
    const num = list.length + 1;
    const slug = suggestedName
      .toLowerCase()
      .replace(/\.[a-z0-9]+$/i, '')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 18);

    const newObj = {
      id: `obj-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      order: num,
      name: suggestedName.replace(/\.[a-z0-9]+$/i, ''),
      handle: `@${slug || 'objeto_' + num}`,
      category: activeCategory === 'Todos' ? 'Cuero & Fetish' : activeCategory,
      floor: ctx.getActiveFloor(),
      spotId: ctx.getActiveSpot()?.id || 'vanity',
      image: dataUrl,
      isPlaceholderImage: isPlaceholder,
      promptToken: `detailed photorealistic ${suggestedName.replace(/\.[a-z0-9]+$/i, '')}, studio lighting, crisp material textures`,
      motionPrompt: 'Subtle macro light reflections across surface, locked tripod slow 2% push-in, no humans, motion strength 2.2',
      usage: 'Referencia visual para Higgsfield Elements o inserción B-Roll 1:2.'
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

  $('btn-obj-snap-new-1x1').onclick = async () => {
    const dataUrl = await ctx.captureObjectFrom3D('1:1');
    if (dataUrl) {
      await createObjectWithImage(dataUrl, `Prop ${ctx.getActiveSpot()?.name || 'Santuario'}`, false);
      ctx.setStatus('📸 <span class="text-emerald-400 font-bold">Objeto 1:1 capturado del visor 3D y guardado.</span>');
    }
  };

  $('btn-obj-snap-new-9x16').onclick = async () => {
    const dataUrl = await ctx.captureObjectFrom3D('9:16');
    if (dataUrl) {
      await createObjectWithImage(dataUrl, `B-Roll ${ctx.getActiveSpot()?.name || 'Santuario'}`, false);
      ctx.setStatus('📱 <span class="text-emerald-400 font-bold">Objeto B-Roll 9:16 capturado del visor 3D y guardado.</span>');
    }
  };

  $('btn-obj-snap-replace').onclick = async () => {
    const obj = getSelected();
    if (!obj) return;
    const dataUrl = await ctx.captureObjectFrom3D('1:1');
    if (dataUrl) {
      obj.image = dataUrl;
      obj.isPlaceholderImage = false;
      await saveObjectToDB(obj);
      ctx.onObjectsChanged?.();
      renderAll();
      ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Render 3D asignado a ${esc(obj.handle)}.</span>`);
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
