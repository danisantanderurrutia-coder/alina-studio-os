// Módulo UI de "Cine & Capítulos":
// 1) Desarrollo episódico de la historia por Capítulos (importados de LMNJDRS + creación ilimitada en IndexedDB).
// 2) Director de Fotografía & Animatic (con el visor 3D a la izquierda).
// 3) Biblia del Personaje Alina Van Dijk, Master Prompts y Decálogo Zero-Waste.

import {
  ALINA_CHARACTER_BIBLE,
  NARRATIVE_ARC,
  PREFLIGHT_CHECKLIST,
  ZERO_WASTE_DOCTRINE
} from '../data/alinaLoreData.js';
import { SANCTUARY_FLOORS } from '../data/sanctuaryData.js';
import { deleteChapterFromDB, saveChapterToDB } from './shotsStorage.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const STATUS_OPTIONS = [
  '🟢 Listo para Rodaje',
  '🟡 En Pre-Producción',
  '⚪ En Escritura',
  '🎬 En Montaje',
  '✅ Publicado'
];

export function mountChaptersCinemaUI(subNavRoot, chaptersPaneRoot, biblePaneRoot, ctx) {
  let subTab = 'chapters'; // 'chapters' | 'director' | 'bible'
  let selectedChapterId = null;
  let saveTimer = null;
  const checklistState = PREFLIGHT_CHECKLIST.map(() => false);

  function allSpotsList() {
    const out = [];
    for (const f of [4, 3, 2, 1, 0]) {
      const fi = SANCTUARY_FLOORS[f];
      fi.spots.forEach((sp) => {
        out.push({ floor: f, spotId: sp.id, label: `P${f === 0 ? 'B' : f} · ${sp.icon} ${sp.name}` });
      });
    }
    return out;
  }

  // Barra de sub-navegación limpia dentro de Cine & Capítulos
  subNavRoot.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 bg-[#12141a] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
      <div class="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
        <button data-csub="chapters" class="csub-btn px-3 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all">
          📖 Capítulos & Historia
        </button>
        <button data-csub="blueprint" class="csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all">
          ⬡ Grafo Blueprint (2D)
        </button>
        <button data-csub="director" class="csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all">
          🎬 Director de Fotografía & Animatic
        </button>
        <button data-csub="bible" class="csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all">
          👤 Biblia de Alina & Reglas
        </button>
      </div>
      <div class="text-[11px] text-slate-400 font-mono truncate">
        Serie activa: <span class="text-[#f29979] font-semibold">${esc(NARRATIVE_ARC.serieTitle)}</span>
      </div>
    </div>
  `;

  function setSubTab(nextTab) {
    subTab = nextTab;
    subNavRoot.querySelectorAll('.csub-btn').forEach((b) => {
      const act = b.dataset.csub === subTab;
      b.className = act
        ? 'csub-btn px-3 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all shadow'
        : 'csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all';
    });
    ctx.onSubTabChanged(subTab);
    if (subTab === 'chapters') renderChaptersView();
    if (subTab === 'blueprint') ctx.onOpenBlueprint?.(selectedChapterId);
    if (subTab === 'bible') renderBibleView();
  }

  subNavRoot.querySelectorAll('.csub-btn').forEach((b) => {
    b.onclick = () => setSubTab(b.dataset.csub);
  });

  function getChapters() {
    return ctx.getChapters();
  }

  function getSelectedChapter() {
    const list = getChapters();
    return list.find((c) => c.id === selectedChapterId) || list[0] || null;
  }

  function scheduleChapterSave(ch) {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      await saveChapterToDB(ch);
      ctx.onChaptersChanged?.();
    }, 220);
  }

  // ==========================================================================
  // SUB-VISTA 1: CAPÍTULOS & DESARROLLO DE LA HISTORIA
  // ==========================================================================
  function renderChaptersView() {
    const chapters = getChapters();
    if (!selectedChapterId && chapters[0]) selectedChapterId = chapters[0].id;
    const ch = getSelectedChapter();
    const spotsOptions = allSpotsList();
    const objects = ctx.getObjects();
    const shots = ctx.getShots();

    // Capturas vinculadas explícitamente a este capítulo (por shot.chapterId o ch.linkedShotIds)
    const chapShots = ch
      ? shots.filter((s) => s.chapterId === ch.id || (ch.linkedShotIds || []).includes(s.id))
      : [];

    chaptersPaneRoot.innerHTML = `
      <div class="grid grid-cols-12 gap-4">
        <!-- Lista lateral de Capítulos -->
        <aside class="col-span-12 lg:col-span-4 xl:col-span-3 bg-[#12141a] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
          <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-white/5">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-white">📖 Capítulos de Cine</h3>
              <p class="text-[10px] text-slate-400">${chapters.length} episodios en desarrollo</p>
            </div>
            <button id="btn-chap-add" class="px-2.5 py-1.5 rounded-xl bg-[#c86446] hover:bg-[#a34a32] text-white text-xs font-bold shadow transition-all">
              ➕ Capítulo
            </button>
          </div>

          <div class="flex flex-col gap-2 overflow-y-auto custom-scrollbar max-h-[65vh] pr-1" id="chap-list">
            ${chapters
              .map((item) => {
                const act = ch && item.id === ch.id;
                return `
                <button data-cid="${esc(item.id)}" class="chap-item text-left p-3 rounded-xl border transition-all ${
                  act
                    ? 'border-[#c86446] bg-[#c86446]/15 copper-glow'
                    : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.06]'
                }">
                  <div class="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <span class="text-[#f29979] font-bold">CAPÍTULO ${item.number}</span>
                    <span class="text-slate-400 truncate">${esc(item.status)}</span>
                  </div>
                  <div class="text-xs font-bold text-white mt-1">${esc(item.title)}</div>
                  <div class="text-[10px] text-slate-400 mt-0.5 line-clamp-2">${esc(item.subtitle || '')}</div>
                </button>`;
              })
              .join('')}
          </div>
        </aside>

        <!-- Editor del Capítulo Seleccionado -->
        <section class="col-span-12 lg:col-span-8 xl:col-span-9 bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col gap-4">
          ${
            !ch
              ? '<div class="text-xs text-slate-400 m-auto py-12">Crea tu primer capítulo para empezar la historia.</div>'
              : `
          <!-- Cabecera editable del Capítulo + Salto directo al Set 3D -->
          <div class="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-white/10">
            <div class="flex-1 min-w-[240px] space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30 text-[10px] font-mono font-bold">
                  CAPÍTULO ${ch.number}
                </span>
                <input id="chap-week" type="text" value="${esc(ch.week || '')}" placeholder="Acto / Semana"
                  class="bg-black/40 border border-white/10 rounded-lg px-2 py-0.5 text-[11px] font-mono text-slate-300 w-40 focus:outline-none focus:border-[#c86446]">
                <select id="chap-status" class="bg-black/40 border border-white/10 rounded-lg px-2 py-0.5 text-[11px] text-slate-200">
                  ${STATUS_OPTIONS.map((st) => `<option value="${esc(st)}" ${st === ch.status ? 'selected' : ''}>${esc(st)}</option>`).join('')}
                </select>
              </div>
              <input id="chap-title" type="text" value="${esc(ch.title)}" placeholder="Título del capítulo"
                class="w-full bg-transparent border-b border-transparent hover:border-white/15 focus:border-[#c86446] text-lg font-bold text-white focus:outline-none py-0.5">
              <input id="chap-subtitle" type="text" value="${esc(ch.subtitle || '')}" placeholder="Subtítulo o tema dramático"
                class="w-full bg-transparent border-b border-transparent hover:border-white/15 focus:border-[#c86446] text-xs text-slate-400 focus:outline-none py-0.5">
            </div>

            <!-- Set 3D vinculado + Ir a Rodar -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-black/45 p-2.5 rounded-xl border border-white/10 text-xs">
              <div class="space-y-1">
                <label class="block text-[10px] font-mono text-slate-400 uppercase">Locación en el Santuario 3D</label>
                <div class="flex items-center gap-1.5">
                  <select id="chap-spot" class="bg-black/70 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white">
                    ${spotsOptions
                      .map(
                        (s) =>
                          `<option value="${s.floor}:${esc(s.spotId)}" ${
                            s.spotId === ch.spotId ? 'selected' : ''
                          }>${esc(s.label)}</option>`
                      )
                      .join('')}
                  </select>
                  <select id="chap-light" class="bg-black/70 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white">
                    <option value="night" ${ch.lightingMode === 'night' ? 'selected' : ''}>🌙 Noche</option>
                    <option value="day" ${ch.lightingMode === 'day' ? 'selected' : ''}>☀️ Día</option>
                  </select>
                </div>
              </div>
              <button id="btn-chap-open-blueprint" class="px-3 py-2 rounded-xl bg-purple-600/85 hover:bg-purple-500 text-white font-bold shadow whitespace-nowrap">
                ⬡ Grafo Blueprint 2D
              </button>
              <button id="btn-chap-goto-set" class="px-3 py-2 rounded-xl bg-gradient-to-r from-[#c86446] to-[#9a3412] hover:opacity-95 text-white font-bold shadow copper-glow whitespace-nowrap">
                🎥 Rodar en Estudio Prompts ↗
              </button>
            </div>
          </div>

          <!-- Guion Narrativo + Voz en Off + Notas de Dirección -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label for="chap-synopsis" class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                1. Sinopsis & Escaleta Narrativa
              </label>
              <textarea id="chap-synopsis" rows="4" class="prompt-textarea" placeholder="Qué ocurre dramática y visualmente en este capítulo...">${esc(
                ch.synopsis
              )}</textarea>

              <label for="chap-notes" class="block pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                2. Notas de Dirección & Montaje (1:2)
              </label>
              <textarea id="chap-notes" rows="3" class="prompt-textarea" placeholder="Instrucciones de cámara, ritmo de cortes y atmósfera...">${esc(
                ch.directorNotes || ''
              )}</textarea>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label for="chap-hook" class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  3. Monólogo / Voz en Off ("Alina-Hypno-v1")
                </label>
                <button id="btn-chap-copy-voice" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar Voz</button>
              </div>
              <textarea id="chap-hook" rows="4" class="prompt-textarea" placeholder="Texto exacto que susurra o narra Alina en ElevenLabs...">${esc(
                ch.hook
              )}</textarea>

              <label for="chap-tone" class="block pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                4. Dirección Vocal & Diseño Sonoro
              </label>
              <textarea id="chap-tone" rows="3" class="prompt-textarea" placeholder="Cadencia, silencios, efectos binaurales...">${esc(
                ch.audioTone || ''
              )}</textarea>
            </div>
          </div>

          <!-- Objetos B-Roll vinculados al Capítulo -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                🏺 Objetos B-Roll / Referencias de este Capítulo
              </span>
              <span class="text-[10px] text-slate-400 font-mono">Clic para incluir o quitar del capítulo</span>
            </div>
            <div class="flex flex-wrap gap-2" id="chap-obj-chips">
              ${objects
                .map((o) => {
                  const linked = (ch.linkedObjectIds || []).includes(o.id);
                  return `
                  <button data-oid="${esc(o.id)}" class="chap-obj-chip flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs transition-all ${
                    linked
                      ? 'border-[#c86446] bg-[#c86446]/20 text-white font-semibold'
                      : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }">
                    <img src="${o.image}" alt="" class="w-5 h-5 rounded object-cover">
                    <span class="font-mono text-[11px]">${esc(o.handle)}</span>
                  </button>`;
                })
                .join('')}
            </div>
          </div>

          <!-- Tira Cinematográfica de Tomas Capturadas asignadas al Capítulo -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                🎞️ Planos Capturados en este Capítulo (${chapShots.length})
              </span>
              <span class="text-[10px] text-slate-400">
                Asigna cualquier captura desde «Estudio Prompts» o pulsa «Rodar en Estudio Prompts ↗»
              </span>
            </div>
            ${
              chapShots.length === 0
                ? `<div class="text-xs text-slate-400 py-3 text-center border border-dashed border-white/10 rounded-lg">
                    Aún no has vinculado capturas 9:16 a este capítulo. Pulsa <strong class="text-[#f29979]">Rodar en Estudio Prompts ↗</strong> para encuadrar sus planos.
                  </div>`
                : `<div class="flex gap-3 overflow-x-auto custom-scrollbar pb-1">
                    ${chapShots
                      .map(
                        (s, idx) => `
                      <div class="shrink-0 w-28 rounded-xl bg-[#151821] border border-white/10 p-1.5 space-y-1">
                        <img src="${s.image}" alt="Plano ${idx + 1}" class="w-full rounded-lg object-cover" style="aspect-ratio: 9/16;">
                        <div class="text-[10px] font-bold text-white truncate">Plano ${idx + 1} · ${esc(s.spot.name)}</div>
                        <div class="text-[9px] font-mono text-slate-400">${s.framing.mm}mm · ${esc(s.anim)}</div>
                      </div>`
                      )
                      .join('')}
                  </div>`
            }
          </div>

          <!-- Acciones de exportación de la Ficha de Rodaje del Capítulo -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
            <button id="btn-chap-delete" class="px-3 py-2 rounded-xl bg-white/5 hover:bg-rose-600/70 text-slate-300 hover:text-white border border-white/10 transition-colors">
              🗑 Eliminar Capítulo
            </button>
            <div class="flex flex-wrap items-center gap-2">
              <button id="btn-chap-copy-sheet" class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 transition-colors">
                📋 Copiar Ficha de Rodaje (LMNJDRS)
              </button>
              <button id="btn-chap-export-json" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow transition-colors">
                📦 Exportar Guion & Escaleta (.json)
              </button>
            </div>
          </div>
          `
          }
        </section>
      </div>
    `;

    chaptersPaneRoot.querySelector('#btn-chap-add')?.addEventListener('click', async () => {
      const list = getChapters();
      const nextNum = list.reduce((m, c) => Math.max(m, c.number || 0), 0) + 1;
      const activeSp = ctx.getActiveSpot();
      const created = {
        id: `chap-${Date.now()}`,
        number: nextNum,
        week: `Capítulo ${nextNum}`,
        title: `Nuevo Capítulo ${nextNum}`,
        subtitle: 'En desarrollo narrativo',
        status: '⚪ En Escritura',
        floor: ctx.getActiveFloor(),
        spotId: activeSp?.id || 'vanity',
        lightingMode: ctx.getLightingMode(),
        format: 'Ficción Vertical 9:16',
        synopsis: '',
        hook: '«Escribe aquí el monólogo susurrado de Alina para este episodio...»',
        audioTone: 'ElevenLabs Alina-Hypno-v1 (Pitch 0.98 | Rate 0.95)',
        directorNotes: '',
        linkedObjectIds: [],
        linkedShotIds: []
      };
      list.push(created);
      selectedChapterId = created.id;
      await saveChapterToDB(created);
      ctx.onChaptersChanged?.();
      renderChaptersView();
      ctx.setStatus(`📖 <span class="text-emerald-400 font-bold">Capítulo ${nextNum} creado.</span>`);
    });

    chaptersPaneRoot.querySelectorAll('.chap-item').forEach((b) => {
      b.onclick = () => {
        selectedChapterId = b.dataset.cid;
        renderChaptersView();
      };
    });

    if (!ch) return;

    const bindField = (id, key, refreshList = false) => {
      const el = chaptersPaneRoot.querySelector('#' + id);
      if (!el) return;
      el.addEventListener('input', (e) => {
        ch[key] = e.target.value;
        if (refreshList) {
          const itemBtn = chaptersPaneRoot.querySelector(`.chap-item[data-cid="${ch.id}"] .text-xs.font-bold`);
          if (itemBtn && key === 'title') itemBtn.textContent = ch.title;
        }
        scheduleChapterSave(ch);
      });
    };

    bindField('chap-week', 'week');
    bindField('chap-title', 'title', true);
    bindField('chap-subtitle', 'subtitle');
    bindField('chap-synopsis', 'synopsis');
    bindField('chap-notes', 'directorNotes');
    bindField('chap-hook', 'hook');
    bindField('chap-tone', 'audioTone');

    chaptersPaneRoot.querySelector('#chap-status').onchange = (e) => {
      ch.status = e.target.value;
      scheduleChapterSave(ch);
      renderChaptersView();
    };

    chaptersPaneRoot.querySelector('#chap-spot').onchange = (e) => {
      const [fl, spId] = e.target.value.split(':');
      ch.floor = Number(fl);
      ch.spotId = spId;
      scheduleChapterSave(ch);
    };

    chaptersPaneRoot.querySelector('#chap-light').onchange = (e) => {
      ch.lightingMode = e.target.value;
      scheduleChapterSave(ch);
    };

    chaptersPaneRoot.querySelectorAll('.chap-obj-chip').forEach((btn) => {
      btn.onclick = () => {
        const oid = btn.dataset.oid;
        ch.linkedObjectIds = Array.isArray(ch.linkedObjectIds) ? ch.linkedObjectIds : [];
        if (ch.linkedObjectIds.includes(oid)) {
          ch.linkedObjectIds = ch.linkedObjectIds.filter((x) => x !== oid);
        } else {
          ch.linkedObjectIds.push(oid);
        }
        saveChapterToDB(ch);
        renderChaptersView();
      };
    });

    chaptersPaneRoot.querySelector('#btn-chap-open-blueprint')?.addEventListener('click', () => {
      selectedChapterId = ch.id;
      setSubTab('blueprint');
    });

    chaptersPaneRoot.querySelector('#btn-chap-goto-set').onclick = () => {
      ctx.loadChapterSetIntoStudio(ch);
    };

    chaptersPaneRoot.querySelector('#btn-chap-copy-voice').onclick = () => {
      navigator.clipboard.writeText(ch.hook || '');
      ctx.setStatus('🎙️ <span class="text-emerald-400 font-bold">Guion de voz copiado para ElevenLabs.</span>');
    };

    chaptersPaneRoot.querySelector('#btn-chap-copy-sheet').onclick = () => {
      const linkedObjs = objects.filter((o) => (ch.linkedObjectIds || []).includes(o.id));
      const sheet = [
        `=== FICHA DE RODAJE CINEMATOGRÁFICO: ALINA VAN DIJK ===`,
        `SERIE: ${NARRATIVE_ARC.serieTitle}`,
        `CAPÍTULO ${ch.number}: ${ch.title} (${ch.week || ''})`,
        `ESTADO: ${ch.status}`,
        `SET 3D: Piso ${ch.floor} • Spot ${ch.spotId} • Luz ${ch.lightingMode === 'day' ? 'Día (Golden Hour)' : 'Noche (Chiaroscuro)'}`,
        ``,
        `[SINOPSIS]`,
        ch.synopsis || '(Sin sinopsis)',
        ``,
        `[LOCUCIÓN ELEVENLABS — Alina-Hypno-v1 | Pitch 0.98 | Rate 0.95]`,
        ch.hook || '',
        `Tono vocal: ${ch.audioTone || ''}`,
        ``,
        `[NOTAS DE DIRECCIÓN]`,
        ch.directorNotes || '',
        ``,
        `[OBJETOS B-ROLL ASIGNADOS (${linkedObjs.length})]`,
        ...linkedObjs.map((o) => `- ${o.handle} (${o.name}): ${o.promptToken}`),
        ``,
        `[PLANOS CAPTURADOS VINCULADOS (${chapShots.length})]`,
        ...chapShots.map((s, i) => `Plano ${i + 1} (${s.framing.mm}mm, ${s.anim}): ${s.fluxPrompt}`),
        `=======================================================`
      ].join('\n');
      navigator.clipboard.writeText(sheet);
      ctx.setStatus(`📋 <span class="text-emerald-400 font-bold">Ficha completa del Capítulo ${ch.number} copiada al portapapeles.</span>`);
    };

    chaptersPaneRoot.querySelector('#btn-chap-export-json').onclick = () => {
      const linkedObjs = objects.filter((o) => (ch.linkedObjectIds || []).includes(o.id));
      ctx.downloadJson(
        {
          series: NARRATIVE_ARC.serieTitle,
          chapter: ch,
          objects_broll: linkedObjs.map((o) => ({
            id: o.id,
            handle: o.handle,
            name: o.name,
            promptToken: o.promptToken,
            motionPrompt: o.motionPrompt
          })),
          captured_shots: chapShots.map((s, i) => ({
            order: i + 1,
            id: s.id,
            spot: s.spot.name,
            framing: s.framing,
            fluxPrompt: s.fluxPrompt,
            motionPrompt: s.motionPrompt
          }))
        },
        `alina_capitulo_${ch.number}_escaleta.json`
      );
      ctx.setStatus(`📦 <span class="text-emerald-400 font-bold">Escaleta JSON del Capítulo ${ch.number} descargada.</span>`);
    };

    chaptersPaneRoot.querySelector('#btn-chap-delete').onclick = async () => {
      const list = getChapters();
      if (list.length <= 1) {
        ctx.setStatus('⚠️ Conserva al menos un capítulo en la serie.');
        return;
      }
      const idx = list.findIndex((x) => x.id === ch.id);
      if (idx >= 0) list.splice(idx, 1);
      await deleteChapterFromDB(ch.id);
      selectedChapterId = list[0]?.id || null;
      ctx.onChaptersChanged?.();
      renderChaptersView();
    };
  }

  // ==========================================================================
  // SUB-VISTA 3: BIBLIA DE ALINA & REGLAS ZERO-WASTE (traído de LMNJDRS)
  // ==========================================================================
  function renderBibleView() {
    const b = ALINA_CHARACTER_BIBLE;
    const checkedCount = checklistState.filter(Boolean).length;
    const pct = Math.round((checkedCount / PREFLIGHT_CHECKLIST.length) * 100);

    biblePaneRoot.innerHTML = `
      <div class="grid grid-cols-12 gap-4">
        <!-- Columna Izquierda: Perfil & Token Lock Maestro -->
        <div class="col-span-12 lg:col-span-5 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center gap-3.5">
              <img src="${b.avatar}" alt="${esc(b.name)}" class="w-16 h-16 rounded-2xl object-cover border border-[#c86446]/50 shadow-lg">
              <div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">CANON LMNJDRS</span>
                <h3 class="text-base font-bold text-white mt-1">${esc(b.name)} (${esc(b.age)})</h3>
                <p class="text-[11px] text-slate-400">${esc(b.origin)}</p>
              </div>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${esc(b.story)}</p>
            <div class="p-3 rounded-xl bg-black/45 border border-white/5 space-y-1 text-xs">
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-bold text-[#f29979]">🎙️ Voz ElevenLabs: ${esc(b.voice.id)}</span>
                <span class="font-mono text-slate-400">Pitch ${b.voice.pitch} | Rate ${b.voice.rate}</span>
              </div>
              <p class="text-[11px] italic text-slate-300">${esc(b.voice.sample)}</p>
            </div>
          </div>

          <!-- Master Facial Token Lock -->
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">🔒 Master Facial Token Lock</h4>
              <button id="btn-copy-master-token" class="text-[11px] font-mono text-[#f29979] hover:text-white font-semibold">Copiar Token</button>
            </div>
            <div class="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-emerald-300/95 leading-relaxed select-all">${esc(
              b.consistencyLock.tokenSnippet
            )}</div>

            <div class="flex items-center justify-between pt-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Negative Prompt Base</span>
              <button id="btn-copy-neg-token" class="text-[11px] font-mono text-slate-400 hover:text-white">Copiar Negative</button>
            </div>
            <div class="p-2.5 rounded-xl bg-black/60 border border-white/5 text-[10px] font-mono text-rose-300/85 select-all">${esc(
              b.consistencyLock.negativeTokens
            )}</div>
          </div>
        </div>

        <!-- Columna Derecha: Prompts Maestros LMNJDRS + Decálogo Zero-Waste + Checklist -->
        <div class="col-span-12 lg:col-span-7 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-white">✨ Prompts Maestros de Referencia (LMNJDRS)</h4>
            <div class="space-y-2.5">
              ${b.masterPromptScenes
                .map(
                  (sc, idx) => `
                <div class="p-3 rounded-xl bg-black/45 border border-white/10 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white">${esc(sc.label)}</span>
                    <button data-mscene="${idx}" class="copy-mscene-btn text-[10px] font-mono text-[#f29979] hover:text-white">Copiar Prompt</button>
                  </div>
                  <p class="text-[11px] font-mono text-slate-300 leading-relaxed select-all">${esc(sc.prompt)}</p>
                </div>`
                )
                .join('')}
            </div>
          </div>

          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">🛡️ Checklist Pre-Flight & Doctrina Zero-Waste</h4>
              <span class="text-[11px] font-mono font-bold ${pct === 100 ? 'text-emerald-400' : 'text-amber-300'}">${pct}% Verificado</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              ${PREFLIGHT_CHECKLIST.map(
                (label, idx) => `
                <label class="flex items-start gap-2 p-2.5 rounded-xl bg-black/40 border border-white/5 cursor-pointer text-[11px] text-slate-200">
                  <input type="checkbox" data-chk="${idx}" ${checklistState[idx] ? 'checked' : ''} class="mt-0.5 accent-[#c86446]">
                  <span>${esc(label)}</span>
                </label>`
              ).join('')}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5">
              ${ZERO_WASTE_DOCTRINE.map(
                (r) => `
                <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px]">
                  <div class="font-bold text-[#f29979]">#${r.num} · ${esc(r.rule)}</div>
                  <div class="text-slate-400 text-[10px] mt-0.5 leading-snug">${esc(r.desc)}</div>
                </div>`
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    biblePaneRoot.querySelector('#btn-copy-master-token').onclick = () => {
      navigator.clipboard.writeText(b.consistencyLock.tokenSnippet);
      ctx.setStatus('🔒 <span class="text-emerald-400 font-bold">Master Facial Token Lock copiado.</span>');
    };
    biblePaneRoot.querySelector('#btn-copy-neg-token').onclick = () => {
      navigator.clipboard.writeText(b.consistencyLock.negativeTokens);
      ctx.setStatus('🚫 <span class="text-emerald-400 font-bold">Negative Prompt copiado.</span>');
    };
    biblePaneRoot.querySelectorAll('.copy-mscene-btn').forEach((btn) => {
      btn.onclick = () => {
        const sc = b.masterPromptScenes[Number(btn.dataset.mscene)];
        if (sc) {
          navigator.clipboard.writeText(sc.prompt);
          ctx.setStatus(`✨ <span class="text-emerald-400 font-bold">Prompt «${esc(sc.label)}» copiado.</span>`);
        }
      };
    });
    biblePaneRoot.querySelectorAll('input[data-chk]').forEach((inp) => {
      inp.onchange = (e) => {
        checklistState[Number(inp.dataset.chk)] = e.target.checked;
        renderBibleView();
      };
    });
  }

  return {
    getSubTab: () => subTab,
    setSubTab,
    renderChapters: renderChaptersView,
    renderBible: renderBibleView,
    selectChapter(id) {
      selectedChapterId = id;
      setSubTab('chapters');
    }
  };
}
