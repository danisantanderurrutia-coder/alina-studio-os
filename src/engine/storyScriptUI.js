/**
 * StoryScriptUI — Pestaña dedicada «📝 Guion & Historia» (Sala de Guionistas + Biblia de Alina)
 *
 * Reemplaza la antigua pestaña redundante «Estudio de Prompts» para albergar toda la narrativa
 * estructurada antes de pasar a la maquetación visual en «🎬 Cine & Escenas»:
 *   1. Acto (ej. Mes 1)
 *   2. Capítulo (ej. Semana 1)
 *   3. Episodio (ej. Lunes — Podcast / Miércoles — Cápsula)
 *   4. Escena(s) (Locación en el Santuario 3D, Guion de la Narradora Alina y Objetos que la acompañan)
 */

import {
  ALINA_CHARACTER_BIBLE,
  DEFAULT_ACTS,
  ensureChapterHierarchy,
  NARRATIVE_ARC,
  ZERO_WASTE_DOCTRINE
} from '../data/alinaLoreData.js';
import { SANCTUARY_FLOORS } from '../data/sanctuaryData.js';
import { deleteChapterFromDB, saveChapterToDB } from './shotsStorage.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const STATUS_OPTIONS = [
  '🟢 Listo para Cine & Escenas',
  '🟡 En Revisión de Guion',
  '⚪ En Escritura',
  '🎬 En Montaje',
  '✅ Publicado'
];

export function mountStoryScriptUI(root, ctx) {
  if (!root) return null;

  const ui = {
    subTab: 'writer', // 'writer' | 'bible'
    actId: 'act-1',
    chapterId: null,
    episodeId: null,
    sceneId: null,
    customActs: []
  };

  let saveTimer = null;

  function allActs(chapters) {
    const map = new Map();
    DEFAULT_ACTS.forEach((a) => map.set(a.id, a.label));
    ui.customActs.forEach((a) => map.set(a.id, a.label));
    chapters.forEach((c) => {
      ensureChapterHierarchy(c);
      if (c.actId && c.actTitle) map.set(c.actId, c.actTitle);
    });
    return [...map.entries()].map(([id, label]) => ({ id, label }));
  }

  function allSpotsList() {
    const out = [];
    for (const f of [4, 3, 2, 1, 0]) {
      const fi = SANCTUARY_FLOORS[f];
      fi.spots.forEach((sp) => {
        out.push({ floor: f, spotId: sp.id, label: `Piso ${f === 0 ? 'PB' : f} · ${sp.icon} ${sp.name}` });
      });
    }
    return out;
  }

  function resolveSelection() {
    const chapters = (ctx.getChapters() || []).map((c) => ensureChapterHierarchy(c));
    const acts = allActs(chapters);
    if (!acts.some((a) => a.id === ui.actId) && acts[0]) ui.actId = acts[0].id;

    let actChapters = chapters.filter((c) => c.actId === ui.actId);
    if (!actChapters.length && chapters.length) {
      ui.actId = chapters[0].actId;
      actChapters = chapters.filter((c) => c.actId === ui.actId);
    }

    const ch = actChapters.find((c) => c.id === ui.chapterId) || actChapters[0] || chapters[0] || null;
    if (ch) ui.chapterId = ch.id;

    const ep = ch ? (ch.episodes.find((e) => e.id === ui.episodeId) || ch.episodes[0] || null) : null;
    if (ep) ui.episodeId = ep.id;

    const sc = ep ? (ep.scenes.find((s) => s.id === ui.sceneId) || ep.scenes[0] || null) : null;
    if (sc) ui.sceneId = sc.id;

    return { chapters, acts, actChapters, ch, ep, sc };
  }

  function scheduleSave(ch) {
    if (!ch) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      // Sincronizar campos raíz para compatibilidad
      const sc0 = ch.episodes?.[0]?.scenes?.[0];
      if (sc0) {
        ch.floor = sc0.floor;
        ch.spotId = sc0.spotId;
        ch.lightingMode = sc0.lightingMode;
        ch.hook = sc0.scriptText;
        ch.synopsis = sc0.synopsis;
        ch.linkedObjectIds = sc0.linkedObjectIds;
      }
      await saveChapterToDB(ch);
      ctx.onStoryChanged?.();
    }, 200);
  }

  function render() {
    const { chapters, acts, actChapters, ch, ep, sc } = resolveSelection();
    const objects = ctx.getObjects() || [];
    const spotsOptions = allSpotsList();

    root.innerHTML = `
      <div class="space-y-4">
        <!-- Sub-navegación de Guion & Historia -->
        <div class="flex flex-wrap items-center justify-between gap-3 bg-[#12141a] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
          <div class="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
            <button data-stab="writer" class="stab-btn px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              ui.subTab === 'writer' ? 'bg-[#c86446] text-white shadow' : 'text-slate-300 hover:text-white'
            }">
              ✍️ Sala de Guion (Acto ▸ Capítulo ▸ Episodio ▸ Escena)
            </button>
            <button data-stab="bible" class="stab-btn px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              ui.subTab === 'bible' ? 'bg-[#c86446] text-white shadow' : 'text-slate-300 hover:text-white'
            }">
              👤 Biblia de Alina & Voz Podcast
            </button>
          </div>
          <div class="text-[11px] text-slate-400 font-mono truncate">
            Serie: <span class="text-[#f29979] font-semibold">${esc(NARRATIVE_ARC.serieTitle)}</span>
          </div>
        </div>

        <div id="story-subpane"></div>
      </div>
    `;

    root.querySelectorAll('.stab-btn').forEach((b) => {
      b.onclick = () => {
        ui.subTab = b.dataset.stab;
        render();
      };
    });

    const pane = root.querySelector('#story-subpane');
    if (ui.subTab === 'bible') {
      renderBiblePane(pane);
    } else {
      renderWriterPane(pane, { chapters, acts, actChapters, ch, ep, sc, objects, spotsOptions });
    }
  }

  function renderWriterPane(pane, { acts, actChapters, ch, ep, sc, objects, spotsOptions }) {
    const wordCount = (sc?.scriptText || '').trim() ? (sc.scriptText.trim().split(/\s+/).length) : 0;
    const estSeconds = Math.max(4, Math.round(wordCount / 2.4));

    pane.innerHTML = `
      <div class="grid grid-cols-12 gap-4">
        <!-- COLUMNA IZQUIERDA (4 cols): NAVEGADOR JERÁRQUICO 1. ACTO ▸ 2. CAPÍTULO ▸ 3. EPISODIO ▸ 4. ESCENA -->
        <aside class="col-span-12 lg:col-span-4 bg-[#12141a] border border-white/10 rounded-2xl p-4 shadow-2xl space-y-4">
          <!-- 1. ACTO (MES) -->
          <div class="space-y-1.5 pb-3 border-b border-white/10">
            <div class="flex items-center justify-between">
              <span class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-purple-300">1. Acto (Ej. Mes)</span>
              <button id="st-add-act" class="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/30 text-purple-200 border border-purple-500/30">+ Nuevo Acto</button>
            </div>
            <select id="st-act-select" class="w-full bg-black/60 border border-white/15 rounded-xl p-2 text-xs text-white font-semibold">
              ${acts.map((a) => `<option value="${esc(a.id)}" ${a.id === ui.actId ? 'selected' : ''}>${esc(a.label)}</option>`).join('')}
            </select>
          </div>

          <!-- 2. CAPÍTULO (SEMANA) -->
          <div class="space-y-2 pb-3 border-b border-white/10">
            <div class="flex items-center justify-between">
              <span class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#f29979]">2. Capítulo (Ej. Semana)</span>
              <button id="st-add-chap" class="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[#c86446]/25 hover:bg-[#c86446] text-white border border-[#c86446]/40">+ Capítulo</button>
            </div>
            <div class="space-y-1.5 max-h-44 overflow-y-auto custom-scrollbar pr-0.5">
              ${
                actChapters.length === 0
                  ? `<div class="text-[11px] text-slate-400 py-2 text-center border border-dashed border-white/10 rounded-xl">Sin capítulos en este acto. Pulsa + Capítulo.</div>`
                  : actChapters
                      .map((item) => {
                        const isAct = ch && item.id === ch.id;
                        return `
                        <button data-sel-chap="${esc(item.id)}" class="w-full text-left p-2.5 rounded-xl border transition-all ${
                          isAct ? 'border-[#c86446] bg-[#c86446]/15 copper-glow' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.06]'
                        }">
                          <div class="flex items-center justify-between text-[10px] font-mono">
                            <span class="text-[#f29979] font-bold">${esc(item.week || `Cap. ${item.number}`)}</span>
                            <span class="text-slate-400">${item.episodes?.length || 1} ep.</span>
                          </div>
                          <div class="text-xs font-bold text-white truncate mt-0.5">${esc(item.title)}</div>
                        </button>`;
                      })
                      .join('')
              }
            </div>
          </div>

          <!-- 3. EPISODIO (DÍA DE PUBLICACIÓN) -->
          ${
            ch
              ? `<div class="space-y-2 pb-3 border-b border-white/10">
                   <div class="flex items-center justify-between">
                     <span class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-sky-300">3. Episodio (Ej. Día)</span>
                     <button id="st-add-ep" class="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/30 text-sky-200 border border-sky-500/30">+ Episodio</button>
                   </div>
                   <div class="space-y-1.5">
                     ${ch.episodes
                       .map((item) => {
                         const isAct = ep && item.id === ep.id;
                         return `
                         <button data-sel-ep="${esc(item.id)}" class="w-full text-left p-2 rounded-xl border transition-all ${
                           isAct ? 'border-sky-400 bg-sky-500/15' : 'border-white/5 bg-black/35 hover:bg-white/[0.06]'
                         }">
                           <div class="flex items-center justify-between text-[9.5px] font-mono">
                             <span class="text-sky-300 font-bold">${esc(item.dayLabel)}</span>
                             <span class="text-slate-400">${item.scenes?.length || 1} esc.</span>
                           </div>
                           <div class="text-xs font-semibold text-white truncate">${esc(item.title)}</div>
                         </button>`;
                       })
                       .join('')}
                   </div>
                 </div>`
              : ''
          }

          <!-- 4. ESCENA(S) DEL EPISODIO -->
          ${
            ep
              ? `<div class="space-y-2">
                   <div class="flex items-center justify-between">
                     <span class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-emerald-300">4. Escena del Episodio</span>
                     <button id="st-add-sc" class="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/30">+ Escena</button>
                   </div>
                   <div class="space-y-1.5">
                     ${ep.scenes
                       .map((item, idx) => {
                         const isAct = sc && item.id === sc.id;
                         return `
                         <button data-sel-sc="${esc(item.id)}" class="w-full text-left p-2 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                           isAct ? 'border-emerald-400 bg-emerald-500/15' : 'border-white/5 bg-black/35 hover:bg-white/[0.06]'
                         }">
                           <div class="min-w-0">
                             <div class="text-[11px] font-bold text-white truncate">${esc(item.title || `Escena ${idx + 1}`)}</div>
                             <div class="text-[9.5px] font-mono text-slate-400">📍 Spot: ${esc(item.spotId)} · Piso ${item.floor === 0 ? 'PB' : item.floor}</div>
                           </div>
                           <span class="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-emerald-200 shrink-0">${item.shots?.length || 4} tomas</span>
                         </button>`;
                       })
                       .join('')}
                   </div>
                 </div>`
              : ''
          }
        </aside>

        <!-- COLUMNA DERECHA (8 cols): EDITOR DE GUION DE LA ESCENA Y PASO DIRECTO A CINE & ESCENAS -->
        <section class="col-span-12 lg:col-span-8 bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl space-y-4">
          ${
            !ch || !ep || !sc
              ? `<div class="py-16 text-center text-xs text-slate-400">Selecciona o crea un Capítulo y Episodio a la izquierda para escribir el guion.</div>`
              : `
              <!-- Migas de Pan Jerárquicas + Botón Principal "Pasar a Cine & Escenas" -->
              <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div class="space-y-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                    <span class="px-2 py-0.5 rounded bg-purple-500/15 text-purple-200 border border-purple-500/30">${esc(ch.actTitle.split(':')[0])}</span>
                    <span class="text-slate-500">▸</span>
                    <span class="px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">${esc(ch.week)}</span>
                    <span class="text-slate-500">▸</span>
                    <span class="px-2 py-0.5 rounded bg-sky-500/15 text-sky-200 border border-sky-500/30">${esc(ep.dayLabel)}</span>
                    <span class="text-slate-500">▸</span>
                    <span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-200 border border-emerald-500/30">Escena ${sc.number}</span>
                  </div>
                  <h2 class="text-base md:text-lg font-bold text-white truncate">${esc(ep.title)} — ${esc(sc.title)}</h2>
                </div>

                <button id="st-open-in-cinema" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 text-white text-xs font-extrabold shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <span>🎬 Pasar a Cine & Escenas (Maquetar Tomas) ↗</span>
                </button>
              </div>

              <!-- Metadatos editables de Capítulo / Episodio / Escena -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 bg-black/35 p-3 rounded-xl border border-white/5 text-xs">
                <label class="space-y-1">
                  <span class="text-[10px] font-mono uppercase text-[#f29979]">Título del Capítulo (${esc(ch.week)})</span>
                  <input id="st-chap-title" type="text" value="${esc(ch.title)}" class="w-full bg-black/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-white font-semibold focus:outline-none focus:border-[#c86446]">
                </label>
                <label class="space-y-1">
                  <span class="text-[10px] font-mono uppercase text-sky-300">Día & Título del Episodio</span>
                  <div class="flex gap-1.5">
                    <input id="st-ep-day" type="text" value="${esc(ep.dayLabel)}" placeholder="Lunes" class="w-28 bg-black/60 border border-white/10 rounded-lg px-2 py-1.5 text-sky-200 font-mono text-[11px]">
                    <input id="st-ep-title" type="text" value="${esc(ep.title)}" placeholder="Título episodio" class="flex-1 min-w-0 bg-black/60 border border-white/10 rounded-lg px-2 py-1.5 text-white font-semibold">
                  </div>
                </label>
                <label class="space-y-1">
                  <span class="text-[10px] font-mono uppercase text-emerald-300">Nombre de esta Escena</span>
                  <div class="flex gap-1.5">
                    <input id="st-sc-title" type="text" value="${esc(sc.title)}" class="flex-1 min-w-0 bg-black/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-white font-semibold">
                    <select id="st-ep-status" class="bg-black/60 border border-white/10 rounded-lg px-2 py-1.5 text-[11px] text-slate-200">
                      ${STATUS_OPTIONS.map((st) => `<option value="${esc(st)}" ${st === ep.status ? 'selected' : ''}>${esc(st.split(' ')[0])}</option>`).join('')}
                    </select>
                  </div>
                </label>
              </div>

              <!-- Locación 3D y Ambiente de la Escena -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 bg-black/40 p-3.5 rounded-xl border border-white/10 text-xs">
                <div class="space-y-1">
                  <label class="text-[10.5px] font-bold uppercase tracking-wider text-slate-300">🏛️ Set / Ambiente del Plató 3D donde ocurre esta Escena</label>
                  <div class="flex items-center gap-2">
                    <select id="st-sc-spot" class="flex-1 bg-black/70 border border-white/15 rounded-lg px-2.5 py-1.5 text-white font-semibold">
                      ${spotsOptions.map((s) => `<option value="${s.floor}:${esc(s.spotId)}" ${s.spotId === sc.spotId ? 'selected' : ''}>${esc(s.label)}</option>`).join('')}
                    </select>
                    <select id="st-sc-light" class="bg-black/70 border border-white/15 rounded-lg px-2.5 py-1.5 text-white">
                      <option value="night" ${sc.lightingMode === 'night' ? 'selected' : ''}>🌙 Noche</option>
                      <option value="day" ${sc.lightingMode === 'day' ? 'selected' : ''}>☀️ Día</option>
                    </select>
                  </div>
                </div>
                <div class="space-y-1">
                  <label class="text-[10.5px] font-bold uppercase tracking-wider text-slate-300">🎧 Intención Vocal / Formato Podcast</label>
                  <input id="st-sc-tone" type="text" value="${esc(sc.audioTone || '')}" placeholder="Ej. Podcast nocturno frente a Shure SM7B, pausado e íntimo..."
                    class="w-full bg-black/70 border border-white/15 rounded-lg px-2.5 py-1.5 text-slate-200">
                </div>
              </div>

              <!-- BLOQUE CENTRAL DE ESCRITURA: EL GUION / MONÓLOGO DE ALINA -->
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <label for="st-sc-script" class="text-xs font-bold uppercase tracking-wider text-purple-200">
                    🎙️ Guion Hablado / Voz Narradora de Alina en esta Escena
                  </label>
                  <div class="flex items-center gap-3 text-[11px] font-mono">
                    <span class="text-slate-400">${wordCount} palabras (~${estSeconds}s estimados)</span>
                    <button id="st-copy-script" class="text-[#f29979] hover:text-white font-bold">Copiar Guion</button>
                  </div>
                </div>
                <textarea id="st-sc-script" rows="6" class="prompt-textarea text-xs leading-relaxed" placeholder="Escribe aquí todo lo que dice Alina en esta escena (formato podcast o narración). Al pulsar «Pasar a Cine & Escenas», podrás repartir este texto frase por frase entre las tomas Inicio ➔ Corte...">${esc(sc.scriptText || '')}</textarea>
              </div>

              <!-- Sinopsis dramática + Notas de Puesta en Escena -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="space-y-1">
                  <label for="st-sc-synopsis" class="text-[11px] font-bold uppercase tracking-wider text-slate-300"> Contexto / Qué pasa en la historia</label>
                  <textarea id="st-sc-synopsis" rows="3" class="prompt-textarea" placeholder="Resumen de la intención narrativa de esta escena...">${esc(sc.synopsis || '')}</textarea>
                </div>
                <div class="space-y-1">
                  <label for="st-sc-notes" class="text-[11px] font-bold uppercase tracking-wider text-slate-300">🎬 Notas Visuales para Cine & Escenas</label>
                  <textarea id="st-sc-notes" rows="3" class="prompt-textarea" placeholder="Ej. Empezar en plano general horizontal 16:9, cortar a los libros cuando mencione el control...">${esc(sc.directorNotes || '')}</textarea>
                </div>
              </div>

              <!-- Objetos que acompañan a Alina en esta Escena -->
              <div class="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-amber-200">
                    🏺 Objetos que acompañan la Escena (${(sc.linkedObjectIds || []).length} seleccionados)
                  </span>
                  <span class="text-[10px] text-slate-400 font-mono">Estarán listos para usar en cada Toma de «Cine & Escenas»</span>
                </div>
                <div class="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto custom-scrollbar pr-1">
                  ${objects
                    .map((o) => {
                      const on = (sc.linkedObjectIds || []).includes(o.id);
                      return `
                      <button type="button" data-sc-obj="${esc(o.id)}" class="sc-obj-chip flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] transition-all ${
                        on
                          ? 'border-amber-400 bg-amber-500/20 text-white font-semibold shadow'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                      }">
                        <img src="${o.image}" alt="" class="w-4 h-4 rounded object-cover bg-black">
                        <span class="font-mono">${esc(o.handle)}</span>
                      </button>`;
                    })
                    .join('')}
                </div>
              </div>

              <!-- Pie de acciones -->
              <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
                <div class="flex items-center gap-2">
                  <button id="st-del-sc" class="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-rose-600/75 text-slate-300 hover:text-white border border-white/10">🗑 Borrar Escena</button>
                  <button id="st-del-ep" class="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-rose-600/75 text-slate-300 hover:text-white border border-white/10">🗑 Borrar Episodio</button>
                  <button id="st-del-chap" class="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-rose-600/75 text-slate-300 hover:text-white border border-white/10">🗑 Borrar Capítulo</button>
                </div>
                <div class="flex items-center gap-2">
                  <button id="st-export-json" class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15">
                    📦 Exportar Guion (.json)
                  </button>
                  <button id="st-open-in-cinema-bottom" class="px-4 py-2 rounded-xl bg-[#c86446] hover:bg-[#b55539] text-white font-bold shadow copper-glow">
                    🎬 Maquetar Tomas en Cine & Escenas ↗
                  </button>
                </div>
              </div>
              `
          }
        </section>
      </div>
    `;

    // Eventos de Selección Jerárquica
    pane.querySelector('#st-act-select')?.addEventListener('change', (e) => {
      ui.actId = e.target.value;
      ui.chapterId = null;
      ui.episodeId = null;
      ui.sceneId = null;
      render();
    });
    pane.querySelectorAll('[data-sel-chap]').forEach((b) => {
      b.onclick = () => {
        ui.chapterId = b.dataset.selChap;
        ui.episodeId = null;
        ui.sceneId = null;
        render();
      };
    });
    pane.querySelectorAll('[data-sel-ep]').forEach((b) => {
      b.onclick = () => {
        ui.episodeId = b.dataset.selEp;
        ui.sceneId = null;
        render();
      };
    });
    pane.querySelectorAll('[data-sel-sc]').forEach((b) => {
      b.onclick = () => {
        ui.sceneId = b.dataset.selSc;
        render();
      };
    });

    // Crear Nuevo Acto / Capítulo / Episodio / Escena
    pane.querySelector('#st-add-act')?.addEventListener('click', async () => {
      const nextNum = acts.length + 1;
      const newActId = `act-${Date.now().toString(36).slice(-4)}`;
      const newActLabel = `Acto ${nextNum} · Mes ${nextNum}: Nuevo Arco`;
      ui.customActs.push({ id: newActId, label: newActLabel });
      const list = ctx.getChapters();
      const chapNum = list.reduce((m, c) => Math.max(m, c.number || 0), 0) + 1;
      const created = ensureChapterHierarchy({
        id: `chap-${Date.now()}`,
        number: chapNum,
        actId: newActId,
        actTitle: newActLabel,
        week: `Semana ${chapNum}`,
        title: `Capítulo ${chapNum}`,
        status: '⚪ En Escritura',
        floor: 3,
        spotId: 'podcast',
        lightingMode: 'night'
      });
      list.push(created);
      ui.actId = newActId;
      ui.chapterId = created.id;
      ui.episodeId = created.episodes[0].id;
      ui.sceneId = created.episodes[0].scenes[0].id;
      await saveChapterToDB(created);
      ctx.onStoryChanged?.();
      render();
      ctx.setStatus(`🟣 <span class="text-purple-300 font-bold">${esc(newActLabel)} creado con su primer Capítulo.</span>`);
    });

    pane.querySelector('#st-add-chap')?.addEventListener('click', async () => {
      const list = ctx.getChapters();
      const nextNum = list.reduce((m, c) => Math.max(m, c.number || 0), 0) + 1;
      const actLabel = acts.find((a) => a.id === ui.actId)?.label || DEFAULT_ACTS[0].label;
      const created = ensureChapterHierarchy({
        id: `chap-${Date.now()}`,
        number: nextNum,
        actId: ui.actId,
        actTitle: actLabel,
        week: `Semana ${nextNum}`,
        title: `Nuevo Capítulo ${nextNum}`,
        status: '⚪ En Escritura',
        floor: 3,
        spotId: 'podcast',
        lightingMode: 'night'
      });
      list.push(created);
      ui.chapterId = created.id;
      ui.episodeId = created.episodes[0].id;
      ui.sceneId = created.episodes[0].scenes[0].id;
      await saveChapterToDB(created);
      ctx.onStoryChanged?.();
      render();
      ctx.setStatus(`📖 <span class="text-emerald-400 font-bold">Capítulo ${nextNum} añadido a ${esc(actLabel.split(':')[0])}.</span>`);
    });

    pane.querySelector('#st-add-ep')?.addEventListener('click', async () => {
      if (!ch) return;
      const nextEpNum = ch.episodes.length + 1;
      const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const newEp = {
        id: `ep-${Date.now().toString(36)}`,
        number: nextEpNum,
        dayLabel: `${days[(nextEpNum - 1) % 7]} · Episodio ${nextEpNum}`,
        title: `Nuevo Episodio ${nextEpNum}`,
        status: '⚪ En Escritura',
        scenes: [
          {
            id: `sc-${Date.now().toString(36)}-1`,
            number: 1,
            title: 'Escena 1 · Estudio Principal',
            floor: ch.floor ?? 3,
            spotId: ch.spotId || 'podcast',
            lightingMode: 'night',
            synopsis: '',
            scriptText: '',
            audioTone: 'Podcast íntimo frente a micrófono SM7B',
            directorNotes: '',
            linkedObjectIds: ['obj-shure-sm7b']
          }
        ]
      };
      ch.episodes.push(newEp);
      ui.episodeId = newEp.id;
      ui.sceneId = newEp.scenes[0].id;
      await saveChapterToDB(ch);
      render();
      ctx.setStatus(`📅 <span class="text-sky-300 font-bold">${esc(newEp.dayLabel)} creado dentro de ${esc(ch.title)}.</span>`);
    });

    pane.querySelector('#st-add-sc')?.addEventListener('click', async () => {
      if (!ch || !ep) return;
      const nextScNum = ep.scenes.length + 1;
      const newSc = {
        id: `sc-${Date.now().toString(36)}`,
        number: nextScNum,
        title: `Escena ${nextScNum} · Cambio de Set`,
        floor: 2,
        spotId: 'vanity',
        lightingMode: 'night',
        synopsis: '',
        scriptText: '',
        audioTone: 'Narración continua de Alina',
        directorNotes: '',
        linkedObjectIds: []
      };
      ep.scenes.push(newSc);
      ui.sceneId = newSc.id;
      await saveChapterToDB(ch);
      render();
      ctx.setStatus(`🎬 <span class="text-emerald-400 font-bold">Escena ${nextScNum} añadida al episodio «${esc(ep.title)}».</span>`);
    });

    if (!ch || !ep || !sc) return;

    // Edición en tiempo real
    pane.querySelector('#st-chap-title')?.addEventListener('input', (e) => {
      ch.title = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-ep-day')?.addEventListener('input', (e) => {
      ep.dayLabel = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-ep-title')?.addEventListener('input', (e) => {
      ep.title = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-ep-status')?.addEventListener('change', (e) => {
      ep.status = e.target.value;
      ch.status = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-sc-title')?.addEventListener('input', (e) => {
      sc.title = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-sc-spot')?.addEventListener('change', (e) => {
      const [fl, spId] = e.target.value.split(':');
      sc.floor = Number(fl);
      sc.spotId = spId;
      scheduleSave(ch);
      render();
    });
    pane.querySelector('#st-sc-light')?.addEventListener('change', (e) => {
      sc.lightingMode = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-sc-tone')?.addEventListener('input', (e) => {
      sc.audioTone = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-sc-script')?.addEventListener('input', (e) => {
      sc.scriptText = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-sc-synopsis')?.addEventListener('input', (e) => {
      sc.synopsis = e.target.value;
      scheduleSave(ch);
    });
    pane.querySelector('#st-sc-notes')?.addEventListener('input', (e) => {
      sc.directorNotes = e.target.value;
      scheduleSave(ch);
    });

    pane.querySelectorAll('.sc-obj-chip').forEach((btn) => {
      btn.onclick = () => {
        const oid = btn.dataset.scObj;
        sc.linkedObjectIds = Array.isArray(sc.linkedObjectIds) ? sc.linkedObjectIds : [];
        if (sc.linkedObjectIds.includes(oid)) {
          sc.linkedObjectIds = sc.linkedObjectIds.filter((x) => x !== oid);
        } else {
          sc.linkedObjectIds.push(oid);
        }
        saveChapterToDB(ch);
        render();
      };
    });

    pane.querySelector('#st-copy-script')?.addEventListener('click', () => {
      navigator.clipboard.writeText(sc.scriptText || '');
      ctx.setStatus('🎙️ <span class="text-purple-300 font-bold">Guion de voz de la escena copiado al portapapeles.</span>');
    });

    const jumpToCinema = () => {
      saveChapterToDB(ch);
      ctx.openSceneInCinema?.({
        actId: ch.actId,
        chapterId: ch.id,
        episodeId: ep.id,
        sceneId: sc.id
      });
    };
    pane.querySelector('#st-open-in-cinema')?.addEventListener('click', jumpToCinema);
    pane.querySelector('#st-open-in-cinema-bottom')?.addEventListener('click', jumpToCinema);

    pane.querySelector('#st-export-json')?.addEventListener('click', () => {
      ctx.downloadJson?.(
        {
          series: NARRATIVE_ARC.serieTitle,
          act: ch.actTitle,
          chapter: { id: ch.id, week: ch.week, title: ch.title },
          episode: ep
        },
        `guion_${ch.week.replace(/\s+/g, '_').toLowerCase()}_${ep.id}.json`
      );
    });

    // Borrado seguro
    pane.querySelector('#st-del-sc')?.addEventListener('click', async () => {
      if (ep.scenes.length <= 1) {
        ctx.setStatus('ℹ️ Cada episodio conserva al menos 1 escena.');
        return;
      }
      ep.scenes = ep.scenes.filter((x) => x.id !== sc.id);
      ep.scenes.forEach((x, idx) => { x.number = idx + 1; });
      ui.sceneId = ep.scenes[0].id;
      await saveChapterToDB(ch);
      render();
    });
    pane.querySelector('#st-del-ep')?.addEventListener('click', async () => {
      if (ch.episodes.length <= 1) {
        ctx.setStatus('ℹ️ Cada capítulo conserva al menos 1 episodio.');
        return;
      }
      ch.episodes = ch.episodes.filter((x) => x.id !== ep.id);
      ui.episodeId = ch.episodes[0].id;
      ui.sceneId = ch.episodes[0].scenes[0].id;
      await saveChapterToDB(ch);
      render();
    });
    pane.querySelector('#st-del-chap')?.addEventListener('click', async () => {
      const list = ctx.getChapters();
      if (list.length <= 1) {
        ctx.setStatus('ℹ️ Conserva al menos un capítulo en la historia.');
        return;
      }
      const idx = list.findIndex((x) => x.id === ch.id);
      if (idx >= 0) list.splice(idx, 1);
      await deleteChapterFromDB(ch.id);
      ui.chapterId = list[0]?.id || null;
      ctx.onStoryChanged?.();
      render();
    });
  }

  function renderBiblePane(pane) {
    const b = ALINA_CHARACTER_BIBLE;
    pane.innerHTML = `
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-5 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center gap-3.5">
              <img src="./alina_avatar.jpg" onerror="this.style.display='none'" alt="${esc(b.name)}" class="w-16 h-16 rounded-2xl object-cover border border-[#c86446]/50 shadow-lg">
              <div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">BIBLIA DE PERSONAJE</span>
                <h3 class="text-base font-bold text-white mt-1">${esc(b.name)} (${esc(b.age)})</h3>
                <p class="text-[11px] text-slate-400">${esc(b.origin)}</p>
              </div>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${esc(b.story)}</p>
            <div class="p-3 rounded-xl bg-black/45 border border-white/5 space-y-1 text-xs">
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-bold text-[#f29979]">🎙️ Voz Narradora / Podcast: ${esc(b.voice.id)}</span>
                <span class="font-mono text-slate-400">Pitch ${b.voice.pitch} | Rate ${b.voice.rate}</span>
              </div>
              <p class="text-[11px] italic text-slate-300">${esc(b.voice.sample)}</p>
            </div>
          </div>

          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">🔒 ADN Visual Inmutable de Alina</h4>
              <button id="st-copy-dna" class="text-[11px] font-mono text-[#f29979] hover:text-white font-semibold">Copiar ADN</button>
            </div>
            <div class="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-emerald-300/95 leading-relaxed select-all">${esc(b.consistencyLock.tokenSnippet)}</div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-7 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-white">🛡️ Principios de Narración Visual & Ahorro de Créditos</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${ZERO_WASTE_DOCTRINE.map(
                (r) => `
                <div class="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px]">
                  <div class="font-bold text-[#f29979]">#${r.num} · ${esc(r.rule)}</div>
                  <div class="text-slate-400 text-[10.5px] mt-1 leading-snug">${esc(r.desc)}</div>
                </div>`
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    pane.querySelector('#st-copy-dna')?.addEventListener('click', () => {
      navigator.clipboard.writeText(b.consistencyLock.tokenSnippet);
      ctx.setStatus('🔒 <span class="text-emerald-400 font-bold">ADN visual de Alina copiado.</span>');
    });
  }

  return {
    render,
    setSubTab(tab) {
      ui.subTab = tab === 'bible' ? 'bible' : 'writer';
      render();
    },
    selectScene({ actId, chapterId, episodeId, sceneId }) {
      if (actId) ui.actId = actId;
      if (chapterId) ui.chapterId = chapterId;
      if (episodeId) ui.episodeId = episodeId;
      if (sceneId) ui.sceneId = sceneId;
      ui.subTab = 'writer';
      render();
    }
  };
}
