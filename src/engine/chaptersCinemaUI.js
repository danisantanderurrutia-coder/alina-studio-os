/**
 * ChaptersCinemaUI — Sub-navegación limpia de «🎬 Cine & Escenas»
 *
 * Separa claramente la fase visual de la fase de escritura («📝 Guion & Historia»):
 *   1) ⬡ Secuenciador Visual & Grafo de Tomas (Inicio ➔ Corte por Acto ▸ Cap ▸ Ep ▸ Escena) — Vista principal
 *   2) 🎥 Cámara Libre & Director 3D (Encuadre interactivo en vivo + Animatic)
 */

import { NARRATIVE_ARC } from '../data/alinaLoreData.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function mountChaptersCinemaUI(subNavRoot, ctx) {
  let subTab = 'blueprint'; // 'blueprint' | 'director'

  subNavRoot.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 bg-[#12141a] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
      <div class="flex flex-wrap items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
        <button data-csub="blueprint" class="csub-btn px-3.5 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all shadow">
          ⬡ Secuenciador de Tomas (Inicio ➔ Corte)
        </button>
        <button data-csub="director" class="csub-btn px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all">
          🎥 Cámara Libre & Director 3D
        </button>
      </div>

      <div class="flex items-center gap-3 text-[11px]">
        <button id="csub-goto-story" class="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-purple-200 font-semibold transition-colors">
          📝 Editar Guion en «Guion & Historia»
        </button>
        <span class="hidden md:inline text-slate-400 font-mono truncate">
          Serie: <span class="text-[#f29979] font-semibold">${esc(NARRATIVE_ARC.serieTitle)}</span>
        </span>
      </div>
    </div>
  `;

  function setSubTab(nextTab) {
    subTab = nextTab === 'director' ? 'director' : 'blueprint';
    subNavRoot.querySelectorAll('.csub-btn').forEach((b) => {
      const act = b.dataset.csub === subTab;
      b.className = act
        ? 'csub-btn px-3.5 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all shadow'
        : 'csub-btn px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all';
    });
    ctx.onSubTabChanged?.(subTab);
  }

  subNavRoot.querySelectorAll('.csub-btn').forEach((b) => {
    b.onclick = () => setSubTab(b.dataset.csub);
  });

  subNavRoot.querySelector('#csub-goto-story')?.addEventListener('click', () => {
    ctx.onGotoStory?.();
  });

  return {
    getSubTab: () => subTab,
    setSubTab
  };
}
