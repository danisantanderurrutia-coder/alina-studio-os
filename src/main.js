import * as THREE from 'three';
import { FLOOR_HEIGHT, SANCTUARY_FLOORS } from './data/sanctuaryData.js';
import { SkyAndLightingController } from './engine/skyAndLighting.js';
import { buildSanctuaryArchitecture } from './engine/buildingBuilder.js';
import { AlinaAvatarController } from './engine/alinaLoader.js';
import { CameraAndExportController } from './engine/cameraAndExport.js';
import { CinemaDirector, catalog as cinemaCatalog } from './engine/cinemaDirector.js';
import { mountCinemaPanel } from './engine/cinemaUI.js';
import { mountFramingAtlasUI } from './engine/framingAtlasUI.js';
import { buildZipBlob } from './engine/zipWriter.js';
import {
  analyzeCapturedImage,
  buildCanonicalObjectTokenLock,
  buildFluxPromptFromCapture,
  buildHiggsfieldMotionFromCapture,
  describeCaptureFraming,
  detectObjectsInCameraFrustum
} from './engine/promptBuilder.js';
import {
  deleteShotFromDB,
  loadChaptersFromDB,
  loadCustom3DProps,
  loadCustomWardrobeLooks,
  loadObjectsFromDB,
  loadShotsFromDB,
  saveChapterToDB,
  saveCustom3DProp,
  saveCustomWardrobeLook,
  saveObjectToDB,
  saveShotToDB
} from './engine/shotsStorage.js';
import { mountObjectsVaultUI } from './engine/objectsVaultUI.js';
import { mountChaptersCinemaUI } from './engine/chaptersCinemaUI.js';
import { mountNodeGraphBlueprintUI } from './engine/nodeGraphBlueprintUI.js';
import { mountAdvisorsBoardUI } from './engine/advisorsBoardUI.js';
import {
  ALINA_WARDROBE_CATALOG,
  evaluateCouncilReadiness,
  getSpotBlueprint,
  getWardrobeById
} from './data/advisorsBoardData.js';

const state = {
  activeView: 'plato', // 'plato' | 'prompts' | 'objects' | 'cinema' | 'advisors'
  cinemaSubView: 'chapters', // 'chapters' | 'director' | 'bible'
  objects3DVisible: false,
  advisors3DVisible: false,
  activeWardrobeId: 'charcoal_silk_slip',
  activeEngine: 'threejs',
  activeFloor: 2,
  activeSpot: SANCTUARY_FLOORS[2].spots[0],
  activeAnim: 'Idle',
  activeCamPreset: '85mm',
  lightingMode: 'night',
  sliced: true,
  activePass: 'beauty',
  depthPass: false,
  guide916: false,
  theaterMode: false,
  motionEngine: 'higgsfield',
  shots: [],
  objects: [],
  chapters: [],
  selectedShotId: null,
  defaultChapterIdForNextShot: '',
  pendingObjectIdsForNextShot: [],
  threeLoadMs: 0
};

let scene, renderer, lighting, arch, alina, camCtrl, cinema, cinemaUI, objectsUI, chaptersUI, blueprintUI, atlasUI, advisorsUI;
const clock = new THREE.Clock();
let fpsFrames = 0;
let fpsLastTime = performance.now();
let currentFps = 0;

function downloadDataUrl(dataUrl, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadJson(obj, filename) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  downloadDataUrl(url, filename);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function cropDataUrlSquare(dataUrl, size = 1080) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const side = Math.min(img.width, img.height);
      const sx = Math.round((img.width - side) / 2);
      const sy = Math.round((img.height - side) / 2);
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

function setStatusText(html) {
  const el = document.getElementById('renderStatus');
  if (el) el.innerHTML = html;
}

function updatePerfBadge() {
  const el = document.getElementById('perf-badge');
  if (!el) return;
  el.textContent = `FPS: ${currentFps || '--'}`;
}

function syncSliceButtonUI() {
  const btn = document.getElementById('btn-slice');
  if (!btn) return;
  btn.textContent = state.sliced ? '🔪 Sliced: ON' : '🏛️ Sliced: OFF';
  btn.className = state.sliced
    ? 'text-[10px] bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 px-2 py-0.5 rounded-lg border border-emerald-500/30 font-mono transition-colors'
    : 'text-[10px] bg-white/5 hover:bg-white/10 text-slate-300 px-2 py-0.5 rounded-lg border border-white/10 font-mono transition-colors';
}

function applyThreeJSSlicing() {
  if (!arch) return;
  for (let floor = 0; floor <= 4; floor++) {
    const group = arch.floorGroups[floor];
    if (!group) continue;
    group.position.y = floor * FLOOR_HEIGHT;
    if (state.sliced) {
      group.visible = floor === state.activeFloor;
    } else {
      group.visible = true;
    }
  }
  if (arch.mirrorReflector) {
    arch.mirrorReflector.visible = state.activeFloor === 2 && state.sliced;
  }
}

// ===========================================================================
// NAVEGACIÓN SUPERIOR LIMPIA DE 4 VISTAS
// ===========================================================================
function is3DViewportVisibleInCurrentView() {
  if (state.activeView === 'plato' || state.activeView === 'prompts') return true;
  if (state.activeView === 'objects' && state.objects3DVisible) return true;
  if (state.activeView === 'advisors' && state.advisors3DVisible) return true;
  if (state.activeView === 'cinema' && state.cinemaSubView === 'director') return true;
  return false;
}

function refreshViewportLayout() {
  if (!is3DViewportVisibleInCurrentView()) return;
  requestAnimationFrame(() => {
    camCtrl?.onWindowResize();
    window.dispatchEvent(new Event('resize'));
  });
  setTimeout(() => {
    camCtrl?.onWindowResize();
    window.dispatchEvent(new Event('resize'));
  }, 140);
}

let suppressHashSync = false;

function setHashSilently(slug) {
  if (suppressHashSync) return;
  const targetHash = slug.startsWith('#') ? slug : `#${slug}`;
  if (window.location.hash !== targetHash) {
    history.replaceState(null, '', targetHash);
  }
}

function openDocsModalAtTab(tabId = 'docs-1') {
  const docsModal = document.getElementById('docs-modal');
  if (!docsModal) return;
  docsModal.classList.remove('hidden');
  document.querySelectorAll('.docs-tab-btn').forEach((b) => {
    const isActive = b.dataset.tab === tabId;
    b.className = isActive
      ? 'docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-white bg-[#c86446] transition-all shrink-0'
      : 'docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all shrink-0';
  });
  document.querySelectorAll('.docs-pane').forEach((pane) => {
    pane.classList.toggle('hidden', pane.id !== `pane-${tabId}`);
  });
}

function applySlugFromLocationHash() {
  const raw = decodeURIComponent(window.location.hash || '').replace(/^#+/, '').trim().toLowerCase();
  if (!raw) return;

  suppressHashSync = true;
  try {
    // 1. Pestañas del Modal de Guía Técnica
    const docsSlugMap = {
      guia: 'docs-1',
      'guia-arquitectura': 'docs-1',
      'guia-optica': 'docs-2',
      'guia-camaras': 'docs-3',
      'guia-pases': 'docs-4',
      'guia-regla-1-2': 'docs-5',
      'guia-boveda': 'docs-6',
      'guia-errores': 'docs-7',
      'anti-patrones': 'docs-7',
      'guia-sequencer-fusion': 'docs-8'
    };
    if (docsSlugMap[raw]) {
      openDocsModalAtTab(docsSlugMap[raw]);
      return;
    }

    // 2. Capítulos individuales (#capitulo-1, #capitulo-2...)
    const chapMatch = raw.match(/^capitulo-(\d+)$/);
    if (chapMatch) {
      const num = Number(chapMatch[1]);
      const targetChap = state.chapters.find((c) => Number(c.number) === num);
      switchMainView('cinema');
      if (targetChap) chaptersUI?.selectChapter(targetChap.id);
      else chaptersUI?.setSubTab('chapters');
      return;
    }

    // 3. Spots directos (#spot-vanity, #spot-walk-cafe, etc.)
    if (raw.startsWith('spot-')) {
      const rawId = raw.slice(5);
      const sp = findSpotById(rawId) || findSpotById(rawId.replace(/-/g, '_'));
      if (sp) {
        switchMainView('plato');
        if (state.activeFloor !== sp.floor) selectFloor(sp.floor);
        selectSpot(sp);
        return;
      }
    }

    // 4. Pisos y vistas arquitectónicas globales
    const floorSlugMap = {
      'piso-4': 4, penthouse: 4, rooftop: 4,
      'piso-3': 3, 'mind-sanctuary': 3,
      'piso-2': 2, residencia: 2,
      'piso-1': 1, 'velvet-cafe': 1,
      'planta-baja': 0, 'piso-0': 0, nocturne: 0
    };
    if (Object.prototype.hasOwnProperty.call(floorSlugMap, raw)) {
      switchMainView('plato');
      state.sliced = true;
      syncSliceButtonUI();
      selectFloor(floorSlugMap[raw]);
      return;
    }
    if (raw === 'casa-de-munecas' || raw === 'dollhouse') {
      switchMainView('plato');
      setCameraPreset('dollhouse');
      return;
    }
    if (raw === 'exterior' || raw === 'fachada') {
      switchMainView('plato');
      setCameraPreset('overview');
      return;
    }

    // 5. Sub-secciones de Cine & Capítulos
    if (raw === 'cine' || raw === 'capitulos' || raw === 'historia' || raw === 'cine/capitulos') {
      state.cinemaSubView = 'chapters';
      document.body.dataset.cinemaSub = 'chapters';
      switchMainView('cinema');
      chaptersUI?.setSubTab('chapters');
      return;
    }
    if (raw === 'blueprint' || raw === 'grafo' || raw === 'sequencer' || raw === 'cine/blueprint') {
      state.cinemaSubView = 'blueprint';
      document.body.dataset.cinemaSub = 'blueprint';
      switchMainView('cinema');
      chaptersUI?.setSubTab('blueprint');
      return;
    }
    if (raw === 'director' || raw === 'fotografia' || raw === 'animatic' || raw === 'cine/director') {
      state.cinemaSubView = 'director';
      document.body.dataset.cinemaSub = 'director';
      switchMainView('cinema');
      chaptersUI?.setSubTab('director');
      return;
    }
    if (raw === 'encuadres' || raw === 'movimientos' || raw === 'atlas' || raw === 'cine/encuadres') {
      state.cinemaSubView = 'atlas';
      document.body.dataset.cinemaSub = 'atlas';
      switchMainView('cinema');
      chaptersUI?.setSubTab('atlas');
      return;
    }
    if (raw === 'biblia' || raw === 'alina' || raw === 'reglas' || raw === 'zero-waste' || raw === 'cine/biblia') {
      state.cinemaSubView = 'bible';
      document.body.dataset.cinemaSub = 'bible';
      switchMainView('cinema');
      chaptersUI?.setSubTab('bible');
      return;
    }

    // 6. Sub-secciones de Consejo de Asesores
    if (raw === 'asesores' || raw === 'mesa-redonda' || raw === 'produccion' || raw === 'asesores/spot') {
      switchMainView('advisors');
      advisorsUI?.setSubTab?.('spot_audit', true);
      return;
    }
    if (raw === 'vestuario' || raw === 'armario' || raw === 'looks' || raw === 'asesores/vestuario') {
      switchMainView('advisors');
      advisorsUI?.setSubTab?.('wardrobe', true);
      return;
    }
    if (raw === 'hods' || raw === 'jefes' || raw === 'consejo' || raw === 'asesores/hods') {
      switchMainView('advisors');
      advisorsUI?.setSubTab?.('council_hods', true);
      return;
    }

    // 7. Vistas principales restantes
    if (raw === 'prompts' || raw === 'estudio-prompts' || raw === 'higgsfield') {
      switchMainView('prompts');
      return;
    }
    if (raw === 'objetos' || raw === 'boveda' || raw === 'props' || raw === 'objects') {
      switchMainView('objects');
      return;
    }
    if (raw === 'plato' || raw === 'inicio' || raw === 'santuario-3d') {
      switchMainView('plato');
    }
  } finally {
    suppressHashSync = false;
  }
}

function switchMainView(viewName) {
  const valid = ['plato', 'prompts', 'objects', 'cinema', 'advisors'];
  const next = valid.includes(viewName) ? viewName : 'plato';
  state.activeView = next;
  document.body.dataset.view = next;

  const viewHashMap = {
    plato: 'plato',
    prompts: 'prompts',
    objects: 'objetos',
    cinema:
      state.cinemaSubView === 'blueprint'
        ? 'blueprint'
        : state.cinemaSubView === 'director'
          ? 'director'
          : state.cinemaSubView === 'atlas'
            ? 'encuadres'
            : state.cinemaSubView === 'bible'
              ? 'biblia'
              : 'capitulos',
    advisors:
      advisorsUI?.getSubTab?.() === 'wardrobe'
        ? 'vestuario'
        : advisorsUI?.getSubTab?.() === 'council_hods'
          ? 'hods'
          : 'asesores'
  };
  setHashSilently(viewHashMap[next] || 'plato');

  document.querySelectorAll('.top-nav-btn').forEach((btn) => {
    const act = btn.dataset.nav === next;
    btn.className = act
      ? 'top-nav-btn px-3 py-1.5 rounded-xl bg-[#c86446] text-white font-bold shadow transition-all flex items-center gap-1.5 whitespace-nowrap copper-glow'
      : 'top-nav-btn px-3 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap';
  });

  if (next === 'objects') objectsUI?.render();
  if (next === 'advisors') advisorsUI?.render();
  if (next === 'cinema') {
    if (state.cinemaSubView === 'chapters') chaptersUI?.renderChapters();
    if (state.cinemaSubView === 'blueprint') blueprintUI?.render();
    if (state.cinemaSubView === 'atlas') atlasUI?.render();
    if (state.cinemaSubView === 'bible') chaptersUI?.renderBible();
  }
  if (next === 'prompts') renderShotsPanel();

  refreshViewportLayout();
}

function updateTopCounters() {
  const shotBadge = document.getElementById('shotsCountBadge');
  const objBadge = document.getElementById('objectsCountBadge');
  const chapBadge = document.getElementById('chaptersCountBadge');
  const advBadge = document.getElementById('advisorsScoreBadge');

  if (shotBadge) {
    shotBadge.textContent = String(state.shots.length);
    shotBadge.classList.toggle('hidden', state.shots.length === 0);
  }
  if (objBadge) objBadge.textContent = String(state.objects.length);
  if (chapBadge) chapBadge.textContent = String(state.chapters.length);
  if (advBadge && state.activeSpot) {
    const ev = evaluateCouncilReadiness({
      spotId: state.activeSpot.id,
      wardrobeId: state.activeWardrobeId,
      directorStyleId: cinema?.shot?.directorStyleId || null,
      focalMm: cinema?.payload?.camera?.focalMm || 85,
      motionStrength: parseFloat(document.getElementById('motionSlider')?.value) || 2.5,
      durationSec: cinema?.payload?.camera?.durationSec || 3.5,
      foregroundEnabled: Boolean(cinema?.payload?.foregroundProp),
      attachedObjectsCount: state.pendingObjectIdsForNextShot.length
    });
    advBadge.textContent = `${ev.score}%`;
  }
}

function renderFloorSidebar() {
  const container = document.getElementById('floorContainer');
  const compactBar = document.getElementById('compactFloorBar');
  container.innerHTML = '';
  compactBar.innerHTML = '';

  const colorMap = {
    amber: 'text-amber-400',
    purple: 'text-purple-400',
    copper: 'text-[#f29979]',
    emerald: 'text-emerald-400',
    rose: 'text-rose-400'
  };

  const badgeMap = {
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    copper: 'bg-[#c86446]/20 text-[#f29979] border-[#c86446]/30',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/20'
  };

  for (const floorNum of [4, 3, 2, 1, 0]) {
    const info = SANCTUARY_FLOORS[floorNum];
    const card = document.createElement('div');
    card.id = `floor-card-${floorNum}`;
    card.className = 'floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all';
    card.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold ${colorMap[info.badgeColor]} font-mono">${floorNum === 0 ? 'PLANTA BAJA' : `PISO ${floorNum}${floorNum === 2 ? ' ★' : ''}`}</span>
        <span class="text-[10px] px-2 py-0.5 rounded-full border font-medium ${badgeMap[info.badgeColor]}">${info.badge}</span>
      </div>
      <h3 class="text-xs font-semibold text-white mt-1 truncate">${info.subtitle}</h3>
    `;
    card.addEventListener('click', () => selectFloor(floorNum));
    container.appendChild(card);

    const chip = document.createElement('button');
    chip.id = `floor-chip-${floorNum}`;
    chip.textContent = floorNum === 0 ? 'PB' : `P${floorNum}`;
    chip.title = info.floorName;
    chip.addEventListener('click', () => selectFloor(floorNum));
    compactBar.appendChild(chip);
  }
}

function updateFloorCardStyles() {
  for (let i = 0; i <= 4; i++) {
    const el = document.getElementById(`floor-card-${i}`);
    if (el) {
      el.className = i === state.activeFloor
        ? 'floor-card cursor-pointer p-2.5 rounded-xl border border-[#c86446]/70 bg-[#c86446]/12 copper-glow transition-all'
        : 'floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all';
    }
    const chip = document.getElementById(`floor-chip-${i}`);
    if (chip) {
      chip.className = i === state.activeFloor
        ? 'px-2 py-1 rounded-lg text-[11px] font-mono font-bold bg-[#c86446]/25 text-[#f29979] border border-[#c86446]/60 transition-all'
        : 'px-2 py-1 rounded-lg text-[11px] font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all';
    }
  }
}

function renderSpotPills() {
  const floorInfo = SANCTUARY_FLOORS[state.activeFloor];
  const container = document.getElementById('spotPillsContainer');
  container.innerHTML = '';

  floorInfo.spots.forEach((spot) => {
    const btn = document.createElement('button');
    btn.id = `pill-${spot.id}`;
    const active = spot.id === state.activeSpot.id;
    btn.className = active
      ? 'px-3 py-1 rounded-lg text-xs font-semibold bg-[#c86446] text-white transition-all shadow'
      : 'px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition-all';
    btn.textContent = `${spot.icon} ${spot.name}`;
    btn.addEventListener('click', () => selectSpot(spot));
    container.appendChild(btn);
  });
}

function syncAnimButtons(animName) {
  state.activeAnim = animName;
  document.getElementById('alinaPoseBadge').textContent = animName;
  document.querySelectorAll('.anim-btn').forEach((btn) => {
    const isAct = btn.dataset.anim === animName;
    btn.className = isAct
      ? 'anim-btn py-1 px-2 rounded-lg border border-[#c86446] bg-[#c86446]/25 text-white font-semibold transition-colors'
      : 'anim-btn py-1 px-2 rounded-lg border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10 transition-colors';
  });
}

function selectFloor(floorNum) {
  state.activeFloor = floorNum;
  const floorInfo = SANCTUARY_FLOORS[floorNum];
  document.getElementById('currentFloorTag').textContent = floorInfo.floorName;

  updateFloorCardStyles();
  applyThreeJSSlicing();
  selectSpot(floorInfo.spots[0]);
}

function selectSpot(spot) {
  state.activeSpot = spot;
  state.activeCamPreset = '85mm';
  renderSpotPills();

  document.getElementById('currentSpotTitle').textContent = spot.name;
  document.getElementById('fluxPromptBox').textContent = spot.prompt;
  document.getElementById('scriptInput').value = spot.script;
  document.getElementById('alinaPosBadge').textContent =
    `${spot.alinaPos.x.toFixed(1)}, ${spot.alinaPos.y.toFixed(1)}, ${spot.alinaPos.z.toFixed(1)}`;
  document.getElementById('brollPackage').innerHTML = spot.brolls.map((b) => `<div>• ${b}</div>`).join('');

  alina?.placeAtSpot(spot);
  syncAnimButtons(spot.defaultAnim || 'Idle');
  camCtrl?.flyTo(spot.camPos, spot.camTarget);

  updateViewportHud();
  cinemaUI?.onSpotChanged();
  advisorsUI?.onSpotChanged();
  updateTopCounters();
}

function findSpotById(spotId) {
  for (const f of Object.values(SANCTUARY_FLOORS)) {
    const sp = f.spots.find((x) => x.id === spotId);
    if (sp) return sp;
  }
  return null;
}

function prepareSpotForCinema(spotId) {
  const spot = findSpotById(spotId);
  if (!spot || (state.activeSpot && state.activeSpot.id === spot.id && state.activeFloor === spot.floor)) return;
  state.activeFloor = spot.floor;
  state.activeSpot = spot;
  document.getElementById('currentFloorTag').textContent = SANCTUARY_FLOORS[spot.floor].floorName;
  updateFloorCardStyles();
  applyThreeJSSlicing();
  renderSpotPills();
  document.getElementById('currentSpotTitle').textContent = spot.name;
  document.getElementById('fluxPromptBox').textContent = spot.prompt;
  document.getElementById('alinaPosBadge').textContent =
    `${spot.alinaPos.x.toFixed(1)}, ${spot.alinaPos.y.toFixed(1)}, ${spot.alinaPos.z.toFixed(1)}`;
  alina?.placeAtSpot(spot);
}

function updateViewportHud() {
  const floorLabel = SANCTUARY_FLOORS[state.activeFloor].floorName.split('•')[0].trim();
  const passLabels = { beauty: state.activeSpot.name, depth: 'DEPTH PASS', normals: 'CAMERA NORMALS', mask: 'SEMANTIC MASK 7-ID' };
  const passTag = passLabels[state.activePass] || state.activeSpot.name;
  document.getElementById('viewport-status-hud').textContent = `${floorLabel} • ${passTag} [Three.js 1:1]`;
}

function setLightingMode(mode) {
  state.lightingMode = mode;
  lighting?.setMode(mode);
  cinemaUI?.onModeChanged();

  const btnDay = document.getElementById('btn-mode-day');
  const btnNight = document.getElementById('btn-mode-night');
  if (mode === 'day') {
    btnDay.className = 'px-2 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all';
    btnNight.className = 'px-2 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all';
  } else {
    btnNight.className = 'px-2 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all';
    btnDay.className = 'px-2 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all';
  }
}

function setViewportPass(pass = 'beauty') {
  state.activePass = pass;
  state.depthPass = pass === 'depth';
  const focus = new THREE.Vector3(state.activeSpot.alinaPos.x, state.activeSpot.alinaPos.y + 1.0, state.activeSpot.alinaPos.z);
  camCtrl?.setRenderPass(pass, focus);

  document.querySelectorAll('.pass-btn').forEach((btn) => {
    const isAct = btn.dataset.pass === pass;
    const activeColor = pass === 'beauty' ? 'bg-[#c86446]' : pass === 'depth' ? 'bg-emerald-600' : pass === 'normals' ? 'bg-indigo-600' : 'bg-fuchsia-600';
    btn.className = isAct
      ? `pass-btn px-2 py-1 rounded-lg ${activeColor} text-white font-semibold shadow transition-all`
      : 'pass-btn px-2 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors';
  });
  updateViewportHud();
}

function setDepthPass(enabled) {
  setViewportPass(enabled ? 'depth' : 'beauty');
}

function setCameraPreset(mode) {
  state.activeCamPreset = mode;
  const s = state.activeSpot;
  if (mode === 'dollhouse') {
    state.sliced = false;
    syncSliceButtonUI();
    applyThreeJSSlicing();
    camCtrl?.flyTo({ x: 3.5, y: 12.8, z: 36.0 }, { x: 0, y: 11.2, z: -5.5 });
    document.getElementById('viewport-status-hud').textContent = 'CASA DE MUÑECAS 5 PISOS [Three.js 1:1]';
    return;
  }
  if (mode === 'overview') {
    state.sliced = false;
    syncSliceButtonUI();
    applyThreeJSSlicing();
    camCtrl?.flyTo({ x: 30.0, y: 24.5, z: 33.5 }, { x: 0, y: 10.5, z: -4.0 });
    document.getElementById('viewport-status-hud').textContent = 'EXTERIOR 3/4 • 5 PISOS [Three.js 1:1]';
    return;
  }

  if (mode === '85mm' || mode === 'reset') {
    camCtrl?.flyTo(s.camPos, s.camTarget);
  } else if (mode === 'macro') {
    camCtrl?.flyTo(s.macroPos, s.macroTarget);
  } else if (mode === 'top') {
    camCtrl?.flyTo(
      { x: s.alinaPos.x, y: s.alinaPos.y + 4.3, z: s.alinaPos.z + 1.0 },
      { x: s.alinaPos.x, y: s.alinaPos.y, z: s.alinaPos.z }
    );
  }
  updateViewportHud();
}

function buildHiggsfieldPayload() {
  const camTelemetry = camCtrl
    ? camCtrl.getCameraTelemetry()
    : { spot: state.activeSpot.id, preset: state.activeCamPreset };
  const activeWardrobe = getWardrobeById(state.activeWardrobeId);

  return {
    engine: 'Three.js Metric 1:1 Previz + alina.glb',
    character: 'Alina Van Dijk',
    token_lock: '28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores',
    wardrobe_look: activeWardrobe
      ? {
          id: activeWardrobe.id,
          name: activeWardrobe.name,
          flux_tokens: activeWardrobe.fluxTokens,
          higgsfield_physics: activeWardrobe.higgsfieldPhysics
        }
      : null,
    floor: SANCTUARY_FLOORS[state.activeFloor].floorName,
    spot: state.activeSpot.name,
    animation: state.activeAnim,
    lighting_mode: state.lightingMode,
    spatial_coordinates: state.activeSpot.alinaPos,
    camera_telemetry: camTelemetry,
    higgsfield_zero_waste: {
      mode: 'Image-to-Video',
      motion_strength: parseFloat(document.getElementById('motionSlider').value),
      aspect_ratio: '9:16 (1080x1920)',
      duration_seconds: 3.5,
      lipsync_engine: state.motionEngine,
      brolls: state.activeSpot.brolls
    },
    flux_prompt: state.activeSpot.prompt,
    elevenlabs_script: document.getElementById('scriptInput').value
  };
}

// ===========================================================================
// ESTUDIO DE PROMPTS + INTEGRACIÓN CON BÓVEDA DE OBJETOS Y CAPÍTULOS
// ===========================================================================
let saveShotTimer = null;
function scheduleSaveShot(shot) {
  if (!shot) return;
  clearTimeout(saveShotTimer);
  saveShotTimer = setTimeout(() => {
    saveShotToDB(shot);
  }, 220);
}

function getCurrentCameraSnapshot() {
  if (camCtrl) {
    return { ...camCtrl.getCameraTelemetry(), approximate: false };
  }
  const s = state.activeSpot;
  const presetPos =
    state.activeCamPreset === 'macro'
      ? { position: { ...s.macroPos }, target: { ...s.macroTarget }, fov_deg: 24 }
      : state.activeCamPreset === 'top'
        ? { position: { x: s.alinaPos.x, y: s.alinaPos.y + 4.3, z: s.alinaPos.z + 1.0 }, target: { ...s.alinaPos }, fov_deg: 52 }
        : state.activeCamPreset === 'dollhouse'
          ? { position: { x: 3.5, y: 12.8, z: 36.0 }, target: { x: 0, y: 11.2, z: -5.5 }, fov_deg: 55 }
          : state.activeCamPreset === 'overview'
            ? { position: { x: 30.0, y: 24.5, z: 33.5 }, target: { x: 0, y: 10.5, z: -4.0 }, fov_deg: 60 }
            : { position: { ...s.camPos }, target: { ...s.camTarget }, fov_deg: 36 };
  return { ...presetPos, approximate: true };
}

function getSelectedShot() {
  return state.shots.find((s) => s.id === state.selectedShotId) || null;
}

function getObjectsForShot(shot) {
  const ids = shot?.objectIds || [];
  return state.objects.filter((o) => ids.includes(o.id));
}

async function createShotFromCapture(beautyDataUrl, depthDataUrl = null) {
  const spot = state.activeSpot;
  const floorName = SANCTUARY_FLOORS[state.activeFloor].floorName;
  const camera = getCurrentCameraSnapshot();
  const motionStrength = parseFloat(document.getElementById('motionSlider').value) || 2.5;

  const cinemaActive = cinema?.active && cinema?.shot;
  const cinemaShotInfo = cinemaActive
    ? {
        shotLabel: cinema.shot.shotTypeId?.replace(/_/g, ' '),
        angleLabel: 'cinematic angle',
        focalLengthMm: cinema.shot.focalLengthMm
      }
    : null;
  const cinemaMoveLabel = cinemaActive ? cinema.shot.cameraMoveId?.replace(/_/g, ' ') : null;

  const framing = describeCaptureFraming({
    camera,
    spot,
    camPreset: state.activeCamPreset,
    cinemaShot: cinemaShotInfo
  });

  const imageMetrics = await analyzeCapturedImage(beautyDataUrl);
  const hasDepth = Boolean(depthDataUrl) || state.depthPass;

  // MEJORA DE FLUJO 1 — FRUSTUM AUTO-TAGGING (Auto-detección matemática de objetos en el cono visual)
  const autoDetectedObjects = detectObjectsInCameraFrustum({
    cameraTelemetry: camera,
    floor: state.activeFloor,
    spotId: spot.id,
    objects: state.objects
  });
  const autoDetectedIds = autoDetectedObjects.map((o) => o.id);
  const initialObjectIds = Array.from(new Set([...state.pendingObjectIdsForNextShot, ...autoDetectedIds]));
  state.pendingObjectIdsForNextShot = [];
  const attachedObjects = state.objects.filter((o) => initialObjectIds.includes(o.id));

  const activeWardrobe = getWardrobeById(state.activeWardrobeId);

  const fluxPrompt = buildFluxPromptFromCapture({
    spot,
    floorName,
    anim: state.activeAnim,
    lightingMode: state.lightingMode,
    framing,
    imageMetrics,
    depthPass: hasDepth,
    attachedObjects,
    wardrobe: activeWardrobe
  });

  const motionPrompt = buildHiggsfieldMotionFromCapture({
    anim: state.activeAnim,
    framing,
    motionStrength,
    motionEngine: state.motionEngine,
    cinemaMoveLabel,
    wardrobe: activeWardrobe
  });

  const shot = {
    id: `shot-${Date.now()}`,
    createdAt: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    engine: state.activeEngine,
    floor: state.activeFloor,
    floorName,
    spot,
    anim: state.activeAnim,
    camPreset: state.activeCamPreset,
    lightingMode: state.lightingMode,
    sliced: state.sliced,
    depthPass: state.depthPass,
    camera,
    framing,
    imageMetrics,
    cinemaMoveLabel,
    wardrobeId: state.activeWardrobeId,
    image: beautyDataUrl,
    depthImage: depthDataUrl,
    motionEngine: state.motionEngine,
    motionStrength,
    objectIds: initialObjectIds,
    chapterId: state.defaultChapterIdForNextShot || '',
    fluxPrompt,
    motionPrompt
  };

  state.shots.unshift(shot);
  if (state.shots.length > 24) {
    const oldest = state.shots.pop();
    if (oldest?.id) deleteShotFromDB(oldest.id);
  }
  state.selectedShotId = shot.id;
  await saveShotToDB(shot);

  updateTopCounters();
  renderShotsPanel();
  setStatusText(
    `✅ <span class="text-emerald-400 font-bold">Captura #${state.shots.length} (Three.js 1:1) lista en Estudio Prompts.</span>`
  );
}

function captureCurrentViewportToPrompt({ withDepth = false } = {}) {
  if (state.activeView !== 'prompts') switchMainView('prompts');
  const beautyUrl = camCtrl.renderVertical916DataURL(1080, 1920, state.depthPass ? true : false);
  const depthUrl = withDepth ? camCtrl.renderVertical916DataURL(1080, 1920, true) : null;
  createShotFromCapture(beautyUrl, depthUrl);
}

function captureViewportAsObjectRender(aspect = '1:1') {
  const h = aspect === '1:1' ? 1080 : 1920;
  const beautyUrl = camCtrl.renderVertical916DataURL(1080, h, 'beauty');
  const depthUrl = camCtrl.renderVertical916DataURL(1080, h, 'depth');
  return Promise.resolve({ beautyUrl, depthUrl });
}

function attachDepthToSelectedShot() {
  const shot = getSelectedShot();
  if (!shot) return;
  shot.depthImage = camCtrl.renderVertical916DataURL(1080, 1920, true);
  regenerateShotPrompts(shot, { onlyFluxIfClean: true });
  saveShotToDB(shot);
  renderShotsPanel();
  setStatusText('✅ <span class="text-emerald-400 font-bold">Depth Map 9:16 adjuntado a la captura.</span>');
}

function regenerateShotPrompts(shot, { onlyFluxIfClean = false } = {}) {
  const shotWardrobe = getWardrobeById(shot.wardrobeId || state.activeWardrobeId);
  shot.fluxPrompt = buildFluxPromptFromCapture({
    spot: shot.spot,
    floorName: shot.floorName,
    anim: shot.anim,
    lightingMode: shot.lightingMode,
    framing: shot.framing,
    imageMetrics: shot.imageMetrics,
    depthPass: Boolean(shot.depthImage) || shot.depthPass,
    attachedObjects: getObjectsForShot(shot),
    wardrobe: shotWardrobe
  });
  if (!onlyFluxIfClean) {
    shot.motionPrompt = buildHiggsfieldMotionFromCapture({
      anim: shot.anim,
      framing: shot.framing,
      motionStrength: shot.motionStrength,
      motionEngine: shot.motionEngine,
      cinemaMoveLabel: shot.cinemaMoveLabel,
      wardrobe: shotWardrobe
    });
  }
}

function syncMotionButtonsUI(engineName) {
  document.querySelectorAll('.motion-btn').forEach((b) => {
    const active = b.dataset.motion === engineName;
    b.className = active
      ? 'motion-btn p-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-left transition-all'
      : 'motion-btn p-2 rounded-xl border border-white/5 bg-black/40 text-left hover:bg-white/5 transition-all';
    const titleEl = b.querySelector('div');
    if (titleEl) {
      titleEl.className = active ? 'font-bold text-emerald-400 text-[11px]' : 'font-bold text-white text-[11px]';
    }
  });
}

function renderShotsPanel() {
  const strip = document.getElementById('shotsStrip');
  const empty = document.getElementById('shotEmptyState');
  const detail = document.getElementById('shotDetail');

  const hasShots = state.shots.length > 0;
  strip.classList.toggle('hidden', !hasShots);
  strip.classList.toggle('flex', hasShots);
  empty.classList.toggle('hidden', hasShots);

  strip.innerHTML = '';
  state.shots.forEach((s, idx) => {
    const isSel = s.id === state.selectedShotId;
    const num = state.shots.length - idx;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `relative shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
      isSel ? 'border-[#c86446] scale-[1.02] copper-glow' : 'border-white/10 opacity-75 hover:opacity-100'
    }`;
    btn.title = `Toma #${num} • ${s.spot.name}`;
    btn.innerHTML = `
      <img src="${s.image}" alt="Toma ${num}" class="block w-12 object-cover bg-black" style="aspect-ratio: 9/16;">
      <span class="absolute top-0.5 left-0.5 px-1 rounded bg-black/80 text-[8px] font-mono text-white">#${num}</span>
      <span class="absolute bottom-0.5 right-0.5 px-1 rounded text-[7px] font-mono font-bold bg-emerald-600/85 text-white">3D</span>
    `;
    btn.addEventListener('click', () => {
      state.selectedShotId = s.id;
      renderShotsPanel();
    });
    strip.appendChild(btn);
  });

  const shot = getSelectedShot();
  detail.classList.toggle('hidden', !shot);
  detail.classList.toggle('flex', Boolean(shot));
  if (!shot) return;

  document.getElementById('shotPreview').src = shot.image;
  const depthImg = document.getElementById('shotDepthPreview');
  if (shot.depthImage) {
    depthImg.src = shot.depthImage;
    depthImg.classList.remove('hidden');
  } else {
    depthImg.classList.add('hidden');
  }

  document.getElementById('shotMetaTitle').textContent = `${shot.spot.icon} ${shot.spot.name}`;
  const engTag = document.getElementById('shotEngineTag');
  engTag.textContent = 'THREE.JS 1:1';
  engTag.className = 'text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 shrink-0 font-bold';

  document.getElementById('shotMetaFraming').textContent =
    `${shot.framing.shot} • ${shot.framing.mm}mm • ${shot.framing.angle}`;
  document.getElementById('shotMetaState').textContent =
    `${shot.floorName.split('•')[0].trim()} • ${shot.anim} • ${shot.lightingMode === 'day' ? '☀️ Día' : '🌙 Noche'} • ${shot.createdAt}`;
  document.getElementById('shotMetaLight').textContent =
    shot.imageMetrics ? `Luz medida: ${shot.imageMetrics.summary}` : '';

  // Selector de Capítulo asociado a esta captura
  const chapSelect = document.getElementById('shotChapterSelect');
  chapSelect.innerHTML =
    `<option value="">📖 Sin capítulo</option>` +
    state.chapters
      .map(
        (c) =>
          `<option value="${c.id}" ${shot.chapterId === c.id ? 'selected' : ''}>Cap. ${c.number}: ${c.title}</option>`
      )
      .join('');

  // Chips de Objetos Renderizados para inyectar/quitar de esta captura
  const objChips = document.getElementById('shotObjectChips');
  shot.objectIds = Array.isArray(shot.objectIds) ? shot.objectIds : [];
  objChips.innerHTML = state.objects
    .map((o) => {
      const on = shot.objectIds.includes(o.id);
      return `
      <button type="button" data-oid="${o.id}" class="shot-obj-chip flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[10px] font-mono transition-all ${
        on
          ? 'border-[#c86446] bg-[#c86446]/25 text-white font-bold shadow'
          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
      }" title="${o.name}">
        <img src="${o.image}" alt="" class="w-4 h-4 rounded object-cover">
        <span>${o.handle}</span>
      </button>`;
    })
    .join('');

  objChips.querySelectorAll('.shot-obj-chip').forEach((btn) => {
    btn.onclick = () => {
      const oid = btn.dataset.oid;
      if (shot.objectIds.includes(oid)) {
        shot.objectIds = shot.objectIds.filter((x) => x !== oid);
      } else {
        shot.objectIds.push(oid);
      }
      regenerateShotPrompts(shot, { onlyFluxIfClean: true });
      saveShotToDB(shot);
      renderShotsPanel();
    };
  });

  document.getElementById('shotFluxPrompt').value = shot.fluxPrompt;
  document.getElementById('shotMotionPrompt').value = shot.motionPrompt;
  document.getElementById('motionSlider').value = String(shot.motionStrength);
  document.getElementById('motionVal').textContent = Number(shot.motionStrength).toFixed(1);
  state.motionEngine = shot.motionEngine;
  syncMotionButtonsUI(shot.motionEngine);
}

function restoreShotToViewport(shot) {
  if (state.activeFloor !== shot.floor) {
    state.activeFloor = shot.floor;
    document.getElementById('currentFloorTag').textContent = SANCTUARY_FLOORS[shot.floor].floorName;
    updateFloorCardStyles();
    applyThreeJSSlicing();
  }

  state.activeSpot = shot.spot;
  state.activeCamPreset = shot.camPreset || '85mm';
  renderSpotPills();
  document.getElementById('currentSpotTitle').textContent = shot.spot.name;
  document.getElementById('fluxPromptBox').textContent = shot.spot.prompt;
  document.getElementById('alinaPosBadge').textContent =
    `${shot.spot.alinaPos.x.toFixed(1)}, ${shot.spot.alinaPos.y.toFixed(1)}, ${shot.spot.alinaPos.z.toFixed(1)}`;

  alina?.placeAtSpot(shot.spot);
  syncAnimButtons(shot.anim);
  alina?.playAnimation(shot.anim);
  setLightingMode(shot.lightingMode);
  setDepthPass(shot.depthPass);

  if (shot.camera?.position && shot.camera?.target) {
    camCtrl?.flyTo(shot.camera.position, shot.camera.target);
  }

  updateViewportHud();
  setStatusText(`↩ <span class="text-emerald-400 font-bold">Encuadre restaurado:</span> ${shot.spot.name} (${shot.anim}).`);
}

function buildShotExportPayload(shot) {
  const attachedObjects = getObjectsForShot(shot);
  const linkedChapter = state.chapters.find((c) => c.id === shot.chapterId);

  return {
    captured_at: shot.createdAt,
    engine: 'Three.js Metric 1:1 WebGL2 + alina.glb',
    character: 'Alina Van Dijk',
    chapter: linkedChapter ? { number: linkedChapter.number, title: linkedChapter.title } : null,
    floor: shot.floorName,
    spot: shot.spot.name,
    animation: shot.anim,
    lighting_mode: shot.lightingMode,
    spatial_coordinates: shot.spot.alinaPos,
    camera_telemetry: shot.camera,
    framing_analysis: shot.framing,
    measured_frame_lighting: shot.imageMetrics,
    reference_objects: attachedObjects.map((o) => ({
      id: o.id,
      handle: o.handle,
      name: o.name,
      category: o.category,
      floor: o.floor,
      spotId: o.spotId,
      worldPos: o.worldPos || null,
      master_still_locked: Boolean(o.masterApprovedStill),
      master_seed: o.masterSeed || null,
      flux_redux_weight: o.reduxWeight ?? 0.75,
      cn_depth_strength: o.cnDepthStrength ?? 0.68,
      cn_depth_end: o.cnDepthEnd ?? 0.58,
      object_token_lock: o.promptToken,
      broll_motion_prompt: o.motionPrompt
    })),
    higgsfield_zero_waste: {
      mode: 'Image-to-Video',
      target_engine: shot.motionEngine,
      motion_strength: shot.motionStrength,
      aspect_ratio: '9:16 (1080x1920)',
      duration_seconds: 3.5,
      has_depth_map: Boolean(shot.depthImage)
    },
    prompts: {
      flux_keyframe_prompt: shot.fluxPrompt,
      higgsfield_motion_prompt: shot.motionPrompt
    },
    elevenlabs_script: linkedChapter?.hook || document.getElementById('scriptInput').value
  };
}

async function exportSelectedShotPackage() {
  const shot = getSelectedShot();
  if (!shot) return;

  const baseName = `alina_piso${shot.floor}_${shot.spot.id}_${shot.id.slice(-5)}`;
  const attachedObjects = getObjectsForShot(shot);

  if (!shot.depthImage && camCtrl) {
    shot.depthImage = camCtrl.renderVertical916DataURL(1080, 1920, 'depth');
    saveShotToDB(shot);
    renderShotsPanel();
  }

  const entries = [
    { path: `frames_3d_raw/start_beauty_1080x1920.png`, data: shot.image },
    { path: `frames_3d_raw/start_depth_1080x1920.png`, data: shot.depthImage },
    { path: `frames_3d_raw/start_normals_1080x1920.png`, data: camCtrl.renderVertical916DataURL(1080, 1920, 'normals') },
    { path: `frames_3d_raw/start_mask_1080x1920.png`, data: camCtrl.renderVertical916DataURL(1080, 1920, 'mask') },
    { path: `higgsfield_capture_manifest.json`, data: buildShotExportPayload(shot) }
  ];

  attachedObjects.forEach((obj) => {
    entries.push({
      path: `elements_refs/${obj.handle.replace('@', '')}.png`,
      data: obj.image
    });
  });

  const zipBlob = await buildZipBlob(entries);
  const url = URL.createObjectURL(zipBlob);
  downloadDataUrl(url, `shotpack_${baseName}.zip`);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  setStatusText(
    `✅ <span class="text-emerald-400 font-bold">Shot Pack .zip exportado (Beauty + Depth + Normals + Mask + ${attachedObjects.length} Objeto(s) + JSON).</span>`
  );
}

function toggleTheaterMode(forceState = null) {
  const next = forceState !== null ? forceState : !state.theaterMode;
  state.theaterMode = next;
  const wrapper = document.getElementById('viewport-wrapper');
  const btn = document.getElementById('btn-fullscreen');
  wrapper.classList.toggle('viewport-theater', next);
  btn.textContent = next ? '✕ Salir' : '⛶ Completa';
  refreshViewportLayout();
}

function bindUIEvents() {
  // Menú superior de 4 vistas
  document.getElementById('brand-home-btn').addEventListener('click', () => switchMainView('plato'));
  document.querySelectorAll('.top-nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchMainView(btn.dataset.nav));
  });
  document.getElementById('btn-prompts-close').addEventListener('click', () => switchMainView('plato'));
  document.getElementById('btn-goto-objects-vault').addEventListener('click', () => switchMainView('objects'));

  // Iluminación
  document.getElementById('btn-mode-day').addEventListener('click', () => setLightingMode('day'));
  document.getElementById('btn-mode-night').addEventListener('click', () => setLightingMode('night'));

  document.getElementById('btn-slice').addEventListener('click', () => {
    state.sliced = !state.sliced;
    syncSliceButtonUI();
    applyThreeJSSlicing();
  });

  // Captura rápida de Toma hacia Prompts
  document.getElementById('btn-capture-to-prompt').addEventListener('click', () => captureCurrentViewportToPrompt({ withDepth: false }));
  document.getElementById('btn-capture-shot').addEventListener('click', () => captureCurrentViewportToPrompt({ withDepth: false }));
  document.getElementById('btn-capture-shot-depth').addEventListener('click', () => captureCurrentViewportToPrompt({ withDepth: true }));

  // Captura rápida de Objeto desde el visor 3D hacia la Bóveda de Objetos (Doble Registro Beauty + Depth 16-bit)
  document.getElementById('btn-quick-save-object').addEventListener('click', async () => {
    const res = await captureViewportAsObjectRender('1:1');
    if (!res?.beautyUrl) return;
    const spotName = state.activeSpot?.name || 'Santuario';
    const camSnap = getCurrentCameraSnapshot();
    const num = state.objects.length + 1;
    const newObj = {
      id: `obj-${Date.now()}`,
      order: num,
      name: `Hero Prop ${spotName}`,
      handle: `@prop_${state.activeSpot?.id || 'set'}_${num}`,
      category: 'Arte & Mobiliario',
      floor: state.activeFloor,
      spotId: state.activeSpot?.id || 'vanity',
      worldPos: camSnap?.target || state.activeSpot?.alinaPos || null,
      camPos: camSnap?.position || null,
      camTarget: camSnap?.target || null,
      image: res.beautyUrl,
      previzRender: res.beautyUrl,
      previzDepthRender: res.depthUrl,
      masterApprovedStill: null,
      masterSeed: null,
      reduxWeight: 0.75,
      cnDepthStrength: 0.68,
      cnDepthEnd: 0.58,
      isPlaceholderImage: false,
      promptToken: buildCanonicalObjectTokenLock({
        speciesOrModel: `sculpted architectural prop in ${spotName}`,
        primaryMaterial: 'crafted in Alina Master Triad finishes (obsidian #111216, charcoal silk #1f232b, forest emerald #0B2B20, raw ivory #ebe4d5)',
        containerOrHardware: 'warm brushed-brass hardware (#d4af37) and dark walnut or basalt base',
        kelvinResponse: `illuminated by ${state.lightingMode === 'day' ? 'warm Mediterranean daylight' : 'intimate Kelvin practicals'}`
      }),
      motionPrompt: 'Locked 100mm macro shot with subtle warm Kelvin specular reflections across brushed-brass and natural surface grain, slow 2% push-in, duration 3.2s, no humans, motion strength 2.1',
      usage: `Doble Registro 3D ↔ Bóveda capturado desde Piso ${state.activeFloor} (${spotName}).`
    };
    state.objects.unshift(newObj);
    await saveObjectToDB(newObj);
    updateTopCounters();
    switchMainView('objects');
    objectsUI?.selectObject(newObj.id);
    setStatusText(`🏺 <span class="text-emerald-400 font-bold">Doble Registro (Beauty + Depth 16-bit) guardado en la Bóveda (${newObj.handle}).</span>`);
  });

  // Edición sobre la captura seleccionada
  document.getElementById('shotFluxPrompt').addEventListener('input', (e) => {
    const s = getSelectedShot();
    if (s) {
      s.fluxPrompt = e.target.value;
      scheduleSaveShot(s);
    }
  });
  document.getElementById('shotMotionPrompt').addEventListener('input', (e) => {
    const s = getSelectedShot();
    if (s) {
      s.motionPrompt = e.target.value;
      scheduleSaveShot(s);
    }
  });
  document.getElementById('shotChapterSelect').addEventListener('change', (e) => {
    const s = getSelectedShot();
    if (!s) return;
    s.chapterId = e.target.value;
    saveShotToDB(s);
    setStatusText(
      s.chapterId
        ? '📖 <span class="text-emerald-400 font-bold">Captura vinculada al capítulo seleccionado.</span>'
        : 'ℹ️ Captura desvinculada de capítulo.'
    );
  });
  document.getElementById('btn-shot-regen').addEventListener('click', () => {
    const s = getSelectedShot();
    if (!s) return;
    regenerateShotPrompts(s);
    saveShotToDB(s);
    renderShotsPanel();
    setStatusText('↻ <span class="text-[#f29979]">Prompts regenerados con los Objetos y telemetría activos.</span>');
  });
  document.getElementById('btn-shot-restore').addEventListener('click', () => {
    const s = getSelectedShot();
    if (s) restoreShotToViewport(s);
  });
  document.getElementById('btn-shot-attach-depth').addEventListener('click', attachDepthToSelectedShot);
  document.getElementById('btn-shot-png').addEventListener('click', () => {
    const s = getSelectedShot();
    if (!s) return;
    downloadDataUrl(s.image, `alina_${s.engine}_piso${s.floor}_${s.spot.id}_1080x1920.png`);
    setStatusText('✅ <span class="text-emerald-400 font-bold">PNG 1080×1920 descargado.</span>');
  });
  document.getElementById('btn-shot-package').addEventListener('click', exportSelectedShotPackage);
  document.getElementById('btn-shot-delete').addEventListener('click', () => {
    if (!state.selectedShotId) return;
    const deletedId = state.selectedShotId;
    state.shots = state.shots.filter((s) => s.id !== deletedId);
    state.selectedShotId = state.shots[0]?.id ?? null;
    deleteShotFromDB(deletedId);
    updateTopCounters();
    renderShotsPanel();
  });

  document.querySelectorAll('.copy-prompt-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.copy);
      if (!target) return;
      navigator.clipboard.writeText(target.value);
      const prev = btn.textContent;
      btn.textContent = '¡Copiado!';
      setTimeout(() => { btn.textContent = prev; }, 1400);
    });
  });

  document.getElementById('btn-dollhouse').addEventListener('click', () => setCameraPreset('dollhouse'));
  document.getElementById('btn-overview').addEventListener('click', () => setCameraPreset('overview'));
  document.getElementById('btn-fullscreen').addEventListener('click', () => toggleTheaterMode());

  // Modal de Guía Técnica del Motor Dual
  const docsModal = document.getElementById('docs-modal');
  const setDocsModalOpen = (open) => {
    if (!docsModal) return;
    docsModal.classList.toggle('hidden', !open);
  };
  document.getElementById('btn-docs-modal')?.addEventListener('click', () => setDocsModalOpen(true));
  document.getElementById('btn-docs-close')?.addEventListener('click', () => setDocsModalOpen(false));
  document.getElementById('btn-docs-close-footer')?.addEventListener('click', () => setDocsModalOpen(false));
  docsModal?.addEventListener('click', (e) => {
    if (e.target === docsModal) setDocsModalOpen(false);
  });
  document.querySelectorAll('.docs-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      document.querySelectorAll('.docs-tab-btn').forEach((b) => {
        const isActive = b.dataset.tab === targetTab;
        b.className = isActive
          ? 'docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-white bg-[#c86446] transition-all shrink-0'
          : 'docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all shrink-0';
      });
      document.querySelectorAll('.docs-pane').forEach((pane) => {
        pane.classList.toggle('hidden', pane.id !== `pane-${targetTab}`);
      });
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (docsModal && !docsModal.classList.contains('hidden')) {
        setDocsModalOpen(false);
        return;
      }
      if (state.theaterMode) toggleTheaterMode(false);
    }
  });

  document.getElementById('btn-guide-916').addEventListener('click', () => {
    state.guide916 = !state.guide916;
    document.getElementById('guide-916-overlay').classList.toggle('hidden', !state.guide916);
    document.getElementById('btn-guide-916').className = state.guide916
      ? 'px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-mono transition-colors'
      : 'px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-[11px] font-mono transition-colors';
  });

  document.querySelectorAll('.pass-btn').forEach((btn) => {
    btn.addEventListener('click', () => setViewportPass(btn.dataset.pass));
  });

  document.querySelectorAll('.cam-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => setCameraPreset(btn.dataset.cam));
  });

  // Selectores desplegables categorizados en el Visor 3D (30 Encuadres + 15 Movimientos)
  const vpShotSelect = document.getElementById('vp-shot-select');
  const vpMoveSelect = document.getElementById('vp-move-select');
  if (vpShotSelect && vpMoveSelect) {
    const buildGroupedHtml = (items, fmt) => {
      const map = new Map();
      for (const it of items) {
        const g = it.category || 'General';
        if (!map.has(g)) map.set(g, []);
        map.get(g).push(it);
      }
      return [...map.entries()]
        .map(
          ([gName, arr]) =>
            `<optgroup label="${gName.replace(/"/g, '&quot;')}">${arr
              .map((it) => `<option value="${it.id}">${fmt(it)}</option>`)
              .join('')}</optgroup>`
        )
        .join('');
    };

    vpShotSelect.innerHTML =
      `<option value="__spot_default__">★ Base del Spot (Órbita Libre)</option>` +
      buildGroupedHtml(cinemaCatalog.shotTypes, (s) => `${s.shortLabel || s.label} · ${s.defaultFocalMm}mm`);
    vpMoveSelect.innerHTML = buildGroupedHtml(cinemaCatalog.cameraMoves, (m) => m.shortLabel || m.label);
    vpMoveSelect.value = 'slow_dolly_push_in';

    vpShotSelect.addEventListener('change', () => {
      const val = vpShotSelect.value;
      if (val === '__spot_default__') {
        cinema?.exit?.();
        setCameraPreset('85mm');
        return;
      }
      const st = cinemaCatalog.shotTypes.find((x) => x.id === val);
      cinemaUI?.selectQuickShotAndMove({
        shotTypeId: val,
        moveId: vpMoveSelect.value || 'static_breathing',
        play: false
      });
      if (st) {
        setStatusText(
          `📷 <span class="text-[#f29979] font-bold">${st.shortLabel || st.label}</span> (${st.defaultFocalMm}mm f/${st.defaultAperture}) aplicado en vivo.`
        );
      }
    });

    vpMoveSelect.addEventListener('change', () => {
      const shotVal = vpShotSelect.value === '__spot_default__' ? 'mcu_interview' : vpShotSelect.value;
      if (vpShotSelect.value === '__spot_default__') vpShotSelect.value = 'mcu_interview';
      cinemaUI?.selectQuickShotAndMove({
        shotTypeId: shotVal,
        moveId: vpMoveSelect.value,
        play: true
      });
    });

    document.getElementById('btn-vp-play-move')?.addEventListener('click', () => {
      const shotVal = vpShotSelect.value === '__spot_default__' ? 'mcu_interview' : vpShotSelect.value;
      if (vpShotSelect.value === '__spot_default__') vpShotSelect.value = 'mcu_interview';
      cinemaUI?.selectQuickShotAndMove({
        shotTypeId: shotVal,
        moveId: vpMoveSelect.value || 'slow_dolly_push_in',
        play: true
      });
    });

    document.getElementById('btn-vp-reset-cam')?.addEventListener('click', () => {
      vpShotSelect.value = '__spot_default__';
      cinema?.exit?.();
      setCameraPreset('reset');
    });
  }

  document.querySelectorAll('.anim-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const animName = btn.dataset.anim;
      syncAnimButtons(animName);
      alina?.playAnimation(animName);
    });
  });

  document.querySelectorAll('.motion-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.motionEngine = btn.dataset.motion;
      syncMotionButtonsUI(state.motionEngine);
      const s = getSelectedShot();
      if (s) {
        s.motionEngine = state.motionEngine;
        s.motionPrompt = buildHiggsfieldMotionFromCapture({
          anim: s.anim,
          framing: s.framing,
          motionStrength: s.motionStrength,
          motionEngine: s.motionEngine,
          cinemaMoveLabel: s.cinemaMoveLabel
        });
        document.getElementById('shotMotionPrompt').value = s.motionPrompt;
        saveShotToDB(s);
      }
    });
  });

  document.getElementById('motionSlider').addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    document.getElementById('motionVal').textContent = val.toFixed(1);
    const s = getSelectedShot();
    if (s) {
      s.motionStrength = val;
      s.motionPrompt = buildHiggsfieldMotionFromCapture({
        anim: s.anim,
        framing: s.framing,
        motionStrength: val,
        motionEngine: s.motionEngine,
        cinemaMoveLabel: s.cinemaMoveLabel
      });
      document.getElementById('shotMotionPrompt').value = s.motionPrompt;
      scheduleSaveShot(s);
    }
  });

  document.getElementById('copyBtn').addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(document.getElementById('fluxPromptBox').textContent);
    const btn = document.getElementById('copyBtn');
    btn.textContent = '¡Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar'; }, 1500);
  });

  document.getElementById('btn-share')?.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    const btn = document.getElementById('btn-share');
    btn.innerHTML = '<span>¡Copiado!</span>';
    setTimeout(() => { btn.innerHTML = '<span>🔗 Compartir</span>'; }, 1800);
  });

  document.getElementById('btn-export-png').addEventListener('click', () => {
    const pass = state.activePass || 'beauty';
    const url = camCtrl.renderVertical916DataURL(1080, 1920, pass);
    downloadDataUrl(url, `alina_9x16_piso${state.activeFloor}_${state.activeSpot.id}_${pass}.png`);
    setStatusText(`✅ <span class="text-emerald-400 font-bold">Frame 1080×1920 (${pass}) exportado.</span>`);
  });

  document.getElementById('btn-export-json').addEventListener('click', () => {
    downloadJson(buildHiggsfieldPayload(), `alina_higgsfield_piso${state.activeFloor}_${state.activeSpot.id}.json`);
    setStatusText('✅ <span class="text-amber-300 font-bold">JSON técnico del Spot descargado.</span>');
  });

  document.getElementById('btn-export-package').addEventListener('click', async () => {
    const baseName = `alina_piso${state.activeFloor}_${state.activeSpot.id}`;
    const op = camCtrl.renderOpenPose916(1080, 1920, alina?.root || null);
    const entries = [
      { path: 'frames_3d_raw/start_beauty_1080x1920.png', data: camCtrl.renderVertical916DataURL(1080, 1920, 'beauty') },
      { path: 'frames_3d_raw/start_depth_1080x1920.png', data: camCtrl.renderVertical916DataURL(1080, 1920, 'depth') },
      { path: 'frames_3d_raw/start_normals_1080x1920.png', data: camCtrl.renderVertical916DataURL(1080, 1920, 'normals') },
      { path: 'frames_3d_raw/start_mask_1080x1920.png', data: camCtrl.renderVertical916DataURL(1080, 1920, 'mask') },
      { path: 'frames_3d_raw/start_openpose_1080x1920.png', data: op.dataUrl },
      { path: 'frames_3d_raw/start_openpose.json', data: op.keypoints },
      { path: 'higgsfield_spot_manifest.json', data: buildHiggsfieldPayload() }
    ];
    const blob = await buildZipBlob(entries);
    const url = URL.createObjectURL(blob);
    downloadDataUrl(url, `shotpack_${baseName}.zip`);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setStatusText('✅ <span class="text-emerald-400 font-bold">Shot Pack 9:16 (.zip con Beauty, Depth, Normals, Mask, OpenPose y JSON) exportado.</span>');
  });
}

async function init() {
  const startTime = performance.now();

  renderFloorSidebar();
  bindUIEvents();

  const container = document.getElementById('three-canvas-container');
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth || 960, container.clientHeight || 560, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  lighting = new SkyAndLightingController(scene, renderer);
  arch = buildSanctuaryArchitecture(scene, lighting);
  camCtrl = new CameraAndExportController(container, scene, renderer, lighting);
  alina = new AlinaAvatarController(scene);

  cinema = new CinemaDirector({
    scene, renderer, lighting, camCtrl, alina,
    getSpot: (id) => (id ? findSpotById(id) : state.activeSpot),
    prepareSpot: prepareSpotForCinema,
    getBaseMode: () => state.lightingMode
  });
  cinemaUI = mountCinemaPanel(document.getElementById('cinema-panel'), {
    director: cinema,
    getSpot: findSpotById,
    getActiveSpot: () => state.activeSpot,
    setActiveSpot: prepareSpotForCinema,
    getAnim: () => state.activeAnim,
    renderer, camCtrl,
    download: { dataUrl: downloadDataUrl, json: downloadJson },
    setStatus: setStatusText
  });

  // Pipeline 2D Web → Perchero 3D + Armario Cápsula + Bóveda de Objetos (Margaux De Vries Dep. 02)
  async function importWebGarmentToRackAndVault({
    title = 'Look Couture Importado',
    subtype = 'dress',
    floor = 2,
    category = 'Vestuario & Joyas',
    swatches = ['#1f232b', '#0B2B20', '#d4af37'],
    fluxTokens = '',
    higgsfieldPhysics = '',
    referenceDataUrl = null
  } = {}) {
    const fNum = [0, 1, 2, 3, 4].includes(Number(floor)) ? Number(floor) : 2;
    const defaultSpotByFloor = { 0: 'cabaret', 1: 'cafe', 2: 'vanity', 3: 'boudoir', 4: 'pool' };
    const spotId = defaultSpotByFloor[fNum] || 'vanity';
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 18) || `look_${Date.now().toString(36).slice(-4)}`;

    // 1. Colgar físicamente la prenda en el Perchero Couture 3D del piso seleccionado
    const hung = arch?.hangCustomGarmentOnRack?.({
      floor: fNum,
      primaryHex: swatches[0] || '#1f232b',
      secondaryHex: swatches[1] || '#0B2B20',
      subtype
    });
    saveCustom3DProp({
      id: `prop3d-${slug}`,
      kind: 'garment',
      floor: fNum,
      primaryHex: swatches[0] || '#1f232b',
      secondaryHex: swatches[1] || '#0B2B20',
      subtype
    });

    // 2. Mover al piso/spot y renderizar automáticamente Beauty PBR + Depth 16-bit del perchero con la prenda colgada
    if (state.activeFloor !== fNum) selectFloor(fNum);
    const sp = findSpotById(spotId);
    if (sp && state.activeSpot?.id !== sp.id) selectSpot(sp);

    const prevAlinaVis = alina?.root ? alina.root.visible : true;
    if (alina?.root) alina.root.visible = false;
    if (hung?.camPos && hung?.camTarget) {
      camCtrl.isTransitioning = false;
      camCtrl.camera.position.set(hung.camPos.x, hung.camPos.y, hung.camPos.z);
      camCtrl.controls.target.set(hung.camTarget.x, hung.camTarget.y, hung.camTarget.z);
      camCtrl.controls.update();
      camCtrl.render();
    }
    const res3D = await captureViewportAsObjectRender('1:1');
    if (alina?.root) alina.root.visible = prevAlinaVis;
    camCtrl.render();

    const vaultObjId = `obj-look-${slug}-${Date.now().toString(36).slice(-4)}`;
    const lookId = `look_${slug}`;
    const handle = `@look_${slug}`;

    // 3. Registrar en ALINA_WARDROBE_CATALOG y persistir
    const newLook = {
      id: lookId,
      name: title,
      handle,
      vaultObjectId: vaultObjId,
      rackLocation: {
        floor: fNum,
        spotId,
        rackType: `Perchero Couture 3D Piso ${fNum}`,
        coords: hung?.worldPos || { x: -3.45, y: fNum * FLOOR_HEIGHT, z: -13.22 }
      },
      category,
      funnel: 'Virtual Try-On / IP-Adapter & Continuidad 3D',
      spots: [spotId, 'vanity', 'boudoir'],
      swatches,
      fluxTokens,
      higgsfieldPhysics,
      stylistNote: `Importado de Web/Foto con paleta extraída (${swatches.join(', ')}) y colgado físicamente en el perchero 3D del Piso ${fNum}.`
    };
    const existingLookIdx = ALINA_WARDROBE_CATALOG.findIndex((w) => w.id === lookId);
    if (existingLookIdx >= 0) ALINA_WARDROBE_CATALOG[existingLookIdx] = newLook;
    else ALINA_WARDROBE_CATALOG.unshift(newLook);
    saveCustomWardrobeLook(newLook);
    state.activeWardrobeId = lookId;

    // 4. Registrar ficha canónica en la Bóveda de Objetos (con Previz 3D del perchero + Master Still si se subió foto limpia)
    const newVaultObj = {
      id: vaultObjId,
      order: 1,
      name: `${title} (En Perchero 3D)`,
      handle,
      category: 'Vestuario & Joyas',
      floor: fNum,
      spotId,
      wardrobeId: lookId,
      modelId: `CoutureRack_P${fNum}`,
      worldPos: hung?.worldPos || null,
      camPos: hung?.camPos || null,
      camTarget: hung?.camTarget || null,
      image: referenceDataUrl || res3D.beautyUrl,
      previzRender: res3D.beautyUrl,
      previzDepthRender: res3D.depthUrl,
      masterApprovedStill: referenceDataUrl || null,
      masterSeed: referenceDataUrl ? String(Math.floor(10000000 + Math.random() * 90000000)) : null,
      kelvinRecipe: fNum === 3 ? '2200K Key / 4600K Rim' : '3400K Key / 4800K Rim',
      reduxWeight: 0.76,
      cnDepthStrength: 0.68,
      cnDepthEnd: 0.58,
      isPlaceholderImage: false,
      promptToken: `${fluxTokens} suspended on a sculpted dark-walnut hanger along a warm brushed-brass couture garment rack (#d4af37) in Piso ${fNum}`,
      motionPrompt: higgsfieldPhysics,
      usage: `Continuidad Perchero → Cuerpo importada desde Web/Foto en Piso ${fNum} (${spotId}).`
    };
    state.objects.unshift(newVaultObj);
    await saveObjectToDB(newVaultObj);
    updateTopCounters();
    objectsUI?.render();
    advisorsUI?.render();
    setStatusText(
      `👗 <span class="text-pink-300 font-bold">Prenda «${title}» (${handle}) colgada en el Perchero 3D del Piso ${fNum} y sincronizada en Armario + Bóveda.</span>`
    );
    return newVaultObj;
  }

  // Pipeline 2D Web → Objeto/Cuadro/Planta/Escultura 3D + Bóveda (Mateo Santoro Dep. 04)
  async function importWebObjectTo3DAndVault({
    title = 'Activo Web 3D',
    subtype = 'painting',
    floor = 2,
    swatches = ['#1f232b', '#0B2B20', '#d4af37'],
    promptToken = '',
    motionPrompt = '',
    referenceDataUrl = null
  } = {}) {
    const fNum = [0, 1, 2, 3, 4].includes(Number(floor)) ? Number(floor) : 2;
    const defaultSpotByFloor = { 0: 'cabaret', 1: 'cafe', 2: 'vanity', 3: 'podcast', 4: 'pool' };
    const spotId = defaultSpotByFloor[fNum] || 'vanity';
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 18) || `prop_${Date.now().toString(36).slice(-4)}`;

    const spawned = arch?.spawnCustomObjectInFloor?.({
      floor: fNum,
      subtype,
      imageDataUrl: referenceDataUrl,
      primaryHex: swatches[0] || '#1f232b'
    });
    saveCustom3DProp({
      id: `prop3d-${slug}`,
      kind: 'object',
      floor: fNum,
      subtype,
      primaryHex: swatches[0] || '#1f232b',
      imageDataUrl: subtype === 'painting' ? referenceDataUrl : null
    });

    if (state.activeFloor !== fNum) selectFloor(fNum);
    const sp = findSpotById(spotId);
    if (sp && state.activeSpot?.id !== sp.id) selectSpot(sp);

    await new Promise((r) => setTimeout(r, 140));
    const prevAlinaVis = alina?.root ? alina.root.visible : true;
    if (alina?.root) alina.root.visible = false;
    if (spawned?.camPos && spawned?.camTarget) {
      camCtrl.isTransitioning = false;
      camCtrl.camera.position.set(spawned.camPos.x, spawned.camPos.y, spawned.camPos.z);
      camCtrl.controls.target.set(spawned.camTarget.x, spawned.camTarget.y, spawned.camTarget.z);
      camCtrl.controls.update();
      camCtrl.render();
    }
    const res3D = await captureViewportAsObjectRender('1:1');
    if (alina?.root) alina.root.visible = prevAlinaVis;
    camCtrl.render();

    const catMap = {
      painting: 'Arte & Mobiliario',
      plant: 'Botánica & Esculturas',
      sculpture: 'Botánica & Esculturas',
      furniture: 'Arte & Mobiliario'
    };

    const newVaultObj = {
      id: `obj-web-${slug}-${Date.now().toString(36).slice(-4)}`,
      order: 1,
      name: title,
      handle: `@${slug}`,
      category: catMap[subtype] || 'Arte & Mobiliario',
      floor: fNum,
      spotId,
      modelId: spawned?.modelId || 'custom_3d_prop',
      worldPos: spawned?.worldPos || null,
      camPos: spawned?.camPos || null,
      camTarget: spawned?.camTarget || null,
      image: res3D.beautyUrl,
      previzRender: res3D.beautyUrl,
      previzDepthRender: res3D.depthUrl,
      masterApprovedStill: referenceDataUrl || null,
      masterSeed: referenceDataUrl ? String(Math.floor(10000000 + Math.random() * 90000000)) : null,
      reduxWeight: 0.75,
      cnDepthStrength: 0.68,
      cnDepthEnd: 0.58,
      isPlaceholderImage: false,
      promptToken,
      motionPrompt,
      usage: `Integrado desde Web/Foto en el Motor 3D (Piso ${fNum} · ${spotId}) con Doble Registro Beauty + Depth.`
    };
    state.objects.unshift(newVaultObj);
    await saveObjectToDB(newVaultObj);
    updateTopCounters();
    objectsUI?.render();
    setStatusText(
      `🏺 <span class="text-emerald-400 font-bold">Activo «${title}» (${newVaultObj.handle}) integrado en Piso ${fNum} y renderizado en Bóveda.</span>`
    );
    return newVaultObj;
  }

  /**
   * Renderiza un objeto de la Bóveda 100% AISLADO (Turntable Packshot Studio) sin paredes ni muebles detrás:
   * - bgMode = 'transparent' -> PNG RGBA con canal Alfa transparente (0% fondo)
   * - bgMode = 'white'       -> PNG con fondo Blanco Puro (#FFFFFF) estilo e-commerce / Higgsfield Reference Sheet
   * Devuelve { beauty, whiteBg, depth } en 1080x1080 (o la resolución solicitada).
   */
  async function renderIsolatedVaultObjectPackshot(obj, size = 1080) {
    if (!obj || !arch?.buildIsolatedObjectTurntableGroup || !camCtrl) return null;
    const turntableGroup = await arch.buildIsolatedObjectTurntableGroup(obj);
    turntableGroup.position.set(0, 500, 0);
    scene.add(turntableGroup);
    turntableGroup.updateMatrixWorld(true);

    // Luces dedicadas de estudio de 3 puntos (Key cálida Kelvin + Fill neutro + Rim de contorno para latón/texturas)
    const studioLights = new THREE.Group();
    studioLights.position.set(0, 500, 0);
    const keyL = new THREE.DirectionalLight(0xfff1dc, 3.2);
    keyL.position.set(2.4, 3.6, 3.2);
    const fillL = new THREE.DirectionalLight(0xe2e8f0, 1.65);
    fillL.position.set(-2.8, 2.2, 2.5);
    const rimL = new THREE.DirectionalLight(0xffd28e, 2.2);
    rimL.position.set(0.5, 3.4, -3.0);
    const ambL = new THREE.AmbientLight(0xffffff, 1.15);
    studioLights.add(keyL, fillL, rimL, ambL);
    scene.add(studioLights);

    // Calcular BoundingBox exacto del objeto aislado para encuadrarlo al 84% del lienzo 1:1
    const bbox = new THREE.Box3().setFromObject(turntableGroup);
    const center = new THREE.Vector3();
    const bSize = new THREE.Vector3();
    bbox.getCenter(center);
    bbox.getSize(bSize);

    const maxDim = Math.max(0.25, bSize.x, bSize.y, bSize.z);
    const fovRad = THREE.MathUtils.degToRad(34);
    const dist = (maxDim / (2 * Math.tan(fovRad / 2))) * 1.16;

    // Guardar estado previo de la escena y cámara
    const prevCamPos = camCtrl.camera.position.clone();
    const prevTarget = camCtrl.controls.target.clone();
    const prevFov = camCtrl.camera.fov;
    const prevBg = scene.background;
    const prevFog = scene.fog;
    const prevFloorVis = arch.floorGroups.map((fg) => fg.visible);
    const prevAlinaVis = alina?.root ? alina.root.visible : false;

    arch.floorGroups.forEach((fg) => { fg.visible = false; });
    if (alina?.root) alina.root.visible = false;
    camCtrl.isTransitioning = false;

    // Ángulo de estudio 3/4 ligeramente elevado para mostrar volumen 3D y textura PBR
    const camOffset = new THREE.Vector3(dist * 0.24, dist * 0.14, dist * 0.96);
    camCtrl.camera.fov = 34;
    camCtrl.camera.position.copy(center).add(camOffset);
    camCtrl.controls.target.copy(center);
    camCtrl.camera.updateProjectionMatrix();
    camCtrl.controls.update();

    const prevSize = renderer.getSize(new THREE.Vector2());
    const prevPR = renderer.getPixelRatio();
    renderer.setPixelRatio(1);
    renderer.setSize(size, size, false);

    const camStudio = camCtrl.camera.clone();
    camStudio.aspect = 1;
    camStudio.updateProjectionMatrix();

    // 1. Pase Beauty RGBA Transparente (Cutout PNG puro sin fondo)
    scene.overrideMaterial = null;
    scene.background = null;
    scene.fog = null;
    lighting.setDepthFogDisabled(true);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camStudio);
    const beautyRgba = renderer.domElement.toDataURL('image/png');

    // 2. Pase Beauty sobre Fondo Blanco Puro (#FFFFFF) para Higgsfield Reference Sheet
    scene.background = new THREE.Color(0xffffff);
    renderer.setClearColor(0xffffff, 1);
    renderer.clear();
    renderer.render(scene, camStudio);
    const beautyWhite = renderer.domElement.toDataURL('image/png');

    // 3. Pase Depth 16-bit aislado (solo silueta volumétrica del objeto sobre negro puro #000000)
    const camToCenter = camStudio.position.distanceTo(center);
    const halfSpan = Math.max(0.2, Math.max(bSize.x, bSize.y, bSize.z) * 0.65);
    camCtrl.updateDepthRangeForFocus(center, {
      uNear: Math.max(0.15, camToCenter - halfSpan),
      uFar: camToCenter + halfSpan
    });
    scene.overrideMaterial = camCtrl.depthMaterial;
    scene.background = null;
    renderer.setClearColor(0x000000, 1);
    renderer.clear();
    renderer.render(scene, camStudio);
    const depthIsolated = renderer.domElement.toDataURL('image/png');

    // Limpiar turntable temporal y restaurar escena original
    scene.remove(turntableGroup);
    scene.remove(studioLights);
    scene.overrideMaterial = null;
    scene.background = prevBg;
    scene.fog = prevFog;
    lighting.setDepthFogDisabled(false);
    arch.floorGroups.forEach((fg, idx) => { fg.visible = prevFloorVis[idx]; });
    if (alina?.root) alina.root.visible = prevAlinaVis;
    renderer.setPixelRatio(prevPR);
    renderer.setSize(prevSize.x, prevSize.y, false);
    camCtrl.camera.fov = prevFov;
    camCtrl.camera.position.copy(prevCamPos);
    camCtrl.controls.target.copy(prevTarget);
    camCtrl.camera.updateProjectionMatrix();
    camCtrl.controls.update();
    camCtrl.render();

    return {
      id: obj.id,
      handle: obj.handle,
      beauty: beautyRgba,
      whiteBg: beautyWhite,
      depth: depthIsolated
    };
  }

  // Auto-curación (Self-Healing) en vivo desde el Motor 3D WebGL2 si alguna imagen de la Bóveda está caída
  async function repairSingleVaultObjectFrom3D(objId) {
    const obj = state.objects.find((o) => o.id === objId);
    if (!obj || !camCtrl) return null;
    const pack = await renderIsolatedVaultObjectPackshot(obj, 720);
    if (!pack) return null;

    obj.previzRender = pack.beauty;
    obj.previzWhiteRender = pack.whiteBg;
    obj.previzDepthRender = pack.depth;
    if (!obj.masterApprovedStill) obj.image = pack.beauty;
    obj.isPlaceholderImage = false;
    await saveObjectToDB(obj);
    objectsUI?.render();
    return obj;
  }

  async function repairAllVaultImagesFrom3D() {
    setStatusText('🔄 <span class="text-amber-300 font-bold">Re-renderizando en vivo los 32 objetos de la Bóveda desde el Motor 3D WebGL2...</span>');
    for (const obj of state.objects) {
      if (obj.camPos && obj.camTarget) {
        await repairSingleVaultObjectFrom3D(obj.id);
      }
    }
    objectsUI?.render();
    setStatusText('✅ <span class="text-emerald-400 font-bold">Las 32 fichas de la Bóveda (Beauty + Depth 16-bit) han sido verificadas y re-renderizadas en 3D.</span>');
  }

  // Montar Bóveda de Objetos
  objectsUI = mountObjectsVaultUI(document.getElementById('col-objects'), {
    getObjects: () => state.objects,
    getActiveFloor: () => state.activeFloor,
    getActiveSpot: () => state.activeSpot,
    getCameraTelemetry: () => getCurrentCameraSnapshot(),
    importWebGarmentToRackAndVault,
    importWebObjectTo3DAndVault,
    repairSingleVaultObjectFrom3D,
    repairAllVaultImagesFrom3D,
    flyToVaultObjectIn3D: (obj) => {
      if (obj.floor != null && state.activeFloor !== obj.floor) {
        selectFloor(obj.floor);
      }
      if (obj.spotId) {
        const sp = findSpotById(obj.spotId);
        if (sp && state.activeSpot?.id !== sp.id) selectSpot(sp);
      }
      if (!state.objects3DVisible) {
        state.objects3DVisible = true;
        document.body.classList.add('objects-with-3d');
        objectsUI?.sync3DBar(true);
        refreshViewportLayout();
      }
      if (obj.camPos && obj.camTarget) {
        setTimeout(() => {
          camCtrl?.flyTo(obj.camPos, obj.camTarget);
          setStatusText(`🎯 <span class="text-emerald-400 font-bold">Cámara 100mm Macro encuadrando ${obj.handle}</span> en Piso ${obj.floor}.`);
        }, 90);
      }
    },
    onObjectsChanged: () => {
      updateTopCounters();
      if (state.activeView === 'prompts') renderShotsPanel();
    },
    toggle3DViewportInObjects: () => {
      state.objects3DVisible = !state.objects3DVisible;
      document.body.classList.toggle('objects-with-3d', state.objects3DVisible);
      refreshViewportLayout();
      return state.objects3DVisible;
    },
    captureObjectFrom3D: (aspect) => captureViewportAsObjectRender(aspect),
    injectObjectIntoPrompts: (obj) => {
      const currentShot = getSelectedShot();
      if (currentShot) {
        currentShot.objectIds = Array.isArray(currentShot.objectIds) ? currentShot.objectIds : [];
        if (!currentShot.objectIds.includes(obj.id)) {
          currentShot.objectIds.push(obj.id);
          regenerateShotPrompts(currentShot, { onlyFluxIfClean: true });
          saveShotToDB(currentShot);
        }
      } else if (!state.pendingObjectIdsForNextShot.includes(obj.id)) {
        state.pendingObjectIdsForNextShot.push(obj.id);
      }
      switchMainView('prompts');
      setStatusText(`🏺 <span class="text-emerald-400 font-bold">Objeto ${obj.handle} inyectado en Estudio Prompts.</span>`);
    },
    downloadDataUrl,
    downloadJson,
    setStatus: setStatusText
  });

  // Montar Cine & Capítulos + Biblia de Alina
  chaptersUI = mountChaptersCinemaUI(
    document.getElementById('cinema-subnav-wrap'),
    document.getElementById('col-chapters'),
    document.getElementById('col-bible'),
    {
      getChapters: () => state.chapters,
      getObjects: () => state.objects,
      getShots: () => state.shots,
      getActiveFloor: () => state.activeFloor,
      getActiveSpot: () => state.activeSpot,
      getLightingMode: () => state.lightingMode,
      onChaptersChanged: () => {
        updateTopCounters();
      },
      onSubTabChanged: (sub) => {
        state.cinemaSubView = sub;
        document.body.dataset.cinemaSub = sub;
        const subSlugMap = { chapters: 'capitulos', blueprint: 'blueprint', director: 'director', bible: 'biblia' };
        setHashSilently(subSlugMap[sub] || 'cine');
        if (sub === 'blueprint') blueprintUI?.render();
        refreshViewportLayout();
      },
      onOpenBlueprint: (chapId) => {
        if (chapId) blueprintUI?.openForChapter(chapId);
        else blueprintUI?.render();
      },
      onOpenAtlas: () => {
        atlasUI?.render();
      },
      loadChapterSetIntoStudio: (ch) => {
        state.defaultChapterIdForNextShot = ch.id;
        state.pendingObjectIdsForNextShot = Array.isArray(ch.linkedObjectIds) ? [...ch.linkedObjectIds] : [];
        setLightingMode(ch.lightingMode || 'night');
        selectFloor(ch.floor ?? 3);
        const sp = findSpotById(ch.spotId);
        if (sp) selectSpot(sp);
        if (ch.hook) document.getElementById('scriptInput').value = ch.hook;
        switchMainView('prompts');
        setStatusText(
          `🎥 <span class="text-emerald-400 font-bold">Set del Capítulo ${ch.number} («${ch.title}») cargado.</span> Tus próximas capturas se vincularán a este capítulo.`
        );
      },
      downloadJson,
      setStatus: setStatusText
    }
  );

  // Montar Grafo Nodal 2D Blueprint (Sequencer 1:2 + Fusion 3D-to-Higgsfield)
  blueprintUI = mountNodeGraphBlueprintUI(document.getElementById('col-blueprint'), {
    getChapters: () => state.chapters,
    getObjects: () => state.objects,
    getActiveSpot: () => state.activeSpot,
    getLightingMode: () => state.lightingMode,
    setLightingMode,
    findSpotById,
    selectFloor,
    selectSpot,
    switchMainView,
    cinema,
    camCtrl,
    alina,
    setStatus: setStatusText
  });

  // Montar Atlas Visual de 30 Encuadres & 15 Movimientos (con capturador de pantallazos y GIFs 3D reales)
  atlasUI = mountFramingAtlasUI(document.getElementById('col-atlas'), {
    getActiveSpot: () => state.activeSpot,
    selectSpotById: (spotId) => {
      const sp = findSpotById(spotId);
      if (!sp) return;
      if (state.activeFloor !== sp.floor) {
        state.activeFloor = sp.floor;
        document.getElementById('currentFloorTag').textContent = SANCTUARY_FLOORS[sp.floor].floorName;
        updateFloorCardStyles();
        applyThreeJSSlicing();
      }
      selectSpot(sp);
    },
    captureShotThumbnail3D: (shotTypeId, moveId = 'static_breathing') => {
      if (!cinema || !camCtrl) return null;
      const st = cinemaCatalog.shotTypes.find((x) => x.id === shotTypeId);
      if (!st) return null;
      const spot = state.activeSpot;
      const isMirror = shotTypeId === 'ots_mirror' && spot.id === 'vanity';
      const shotObj = {
        shotId: `atlas_thumb_${shotTypeId}`,
        spotId: spot.id,
        shotRole: st.shotRoleDefault || 'A-Roll',
        brollIndex: 0,
        directorStyleId: 'fincher_cronenweth',
        shotTypeId: st.id,
        cameraMoveId: moveId,
        lightingSchemeId: 'rembrandt_chiaroscuro',
        focalLengthMm: st.defaultFocalMm,
        apertureFStop: st.defaultAperture,
        durationSec: 3.0,
        animation: spot.defaultAnim || 'Idle',
        focusMode: isMirror ? 'mirror_reflection_plane' : st.shotRoleDefault === 'B-Roll' ? 'macro_prop_lock' : 'iris_lock',
        mirrorShot: isMirror,
        motionStrength: 2.2,
        foregroundFraming: Boolean(st.autoForeground)
      };
      cinema.apply(shotObj, '9:16');
      cinema.seekNormalized(0.5, { cleanKeyframe: true });
      const dataUrl = camCtrl.renderVertical916DataURL(360, 640, 'beauty');
      return dataUrl;
    },
    captureMoveLoopFrames3D: (moveId) => {
      if (!cinema || !camCtrl) return [];
      const mv = cinemaCatalog.cameraMoves.find((x) => x.id === moveId);
      if (!mv) return [];
      const spot = state.activeSpot;
      const isRackIn = moveId === 'rack_focus_macro_to_eyes';
      const isRackOut = moveId === 'rack_focus_eyes_to_prop';
      const shotObj = {
        shotId: `atlas_loop_${moveId}`,
        spotId: spot.id,
        shotRole: 'A-Roll',
        brollIndex: 0,
        directorStyleId: 'wong_kar_wai_doyle',
        shotTypeId: 'mcu_interview',
        cameraMoveId: mv.id,
        lightingSchemeId: 'rembrandt_chiaroscuro',
        focalLengthMm: 50,
        apertureFStop: 1.4,
        durationSec: mv.recommendedDurationSec,
        animation: spot.defaultAnim || 'Idle',
        focusMode: isRackIn ? 'rack_prop_to_iris' : isRackOut ? 'rack_iris_to_prop' : 'iris_lock',
        mirrorShot: false,
        motionStrength: mv.recommendedMotionStrength,
        foregroundFraming: Boolean(isRackIn || isRackOut)
      };
      const p = cinema.apply(shotObj, '9:16');
      const frames = [];
      for (const tNorm of [0, 0.2, 0.4, 0.6, 0.8, 1.0]) {
        cinema.seekNormalized(tNorm, { cleanKeyframe: false });
        const focusM = p.dof.startFocusDistM + (p.dof.endFocusDistM - p.dof.startFocusDistM) * tNorm;
        frames.push(
          camCtrl.renderVertical916DataURL(270, 480, 'beauty', {
            dof: {
              enabled: true,
              focalLengthMm: 50,
              apertureFStop: 1.4,
              focusDistM: focusM,
              sensorHeightMm: 36.0
            }
          })
        );
      }
      return frames;
    },
    jumpTo3DWithShotAndMove: ({ shotTypeId, moveId, play = true }) => {
      state.cinemaSubView = 'director';
      document.body.dataset.cinemaSub = 'director';
      chaptersUI?.setSubTab('director');
      switchMainView('cinema');
      setTimeout(() => {
        const res = cinemaUI?.selectQuickShotAndMove({ shotTypeId, moveId, play });
        const vpShot = document.getElementById('vp-shot-select');
        const vpMove = document.getElementById('vp-move-select');
        if (vpShot && res?.shotTypeId) vpShot.value = res.shotTypeId;
        if (vpMove && res?.cameraMoveId) vpMove.value = res.cameraMoveId;
      }, 90);
    }
  });

  // Montar Consejo de Asesores de Producción Cinematográfica (8 Jefes de Departamento)
  advisorsUI = mountAdvisorsBoardUI(document.getElementById('col-advisors'), {
    getActiveSpot: () => state.activeSpot,
    onSubTabChanged: (sub) => {
      const advSlugMap = { spot_audit: 'asesores', wardrobe: 'vestuario', council_hods: 'hods' };
      setHashSilently(advSlugMap[sub] || 'asesores');
    },
    selectSpotById: (spotId) => {
      const sp = findSpotById(spotId);
      if (!sp) return;
      if (state.activeFloor !== sp.floor) {
        state.activeFloor = sp.floor;
        document.getElementById('currentFloorTag').textContent = SANCTUARY_FLOORS[sp.floor].floorName;
        updateFloorCardStyles();
        applyThreeJSSlicing();
      }
      selectSpot(sp);
    },
    getActiveWardrobeId: () => state.activeWardrobeId,
    setActiveWardrobeId: (wid) => {
      state.activeWardrobeId = wid;
      const w = getWardrobeById(wid);
      const selShot = getSelectedShot();
      if (selShot) {
        selShot.wardrobeId = wid;
        regenerateShotPrompts(selShot);
        saveShotToDB(selShot);
        renderShotsPanel();
      }
      updateTopCounters();
      setStatusText(`👗 <span class="text-pink-300 font-bold">Vestuario equipado:</span> ${w.name} (activo en Flux & Higgsfield).`);
    },
    is3DVisible: () => state.advisors3DVisible,
    toggle3DVisible: () => {
      state.advisors3DVisible = !state.advisors3DVisible;
      document.body.classList.toggle('advisors-with-3d', state.advisors3DVisible);
      refreshViewportLayout();
      return state.advisors3DVisible;
    },
    getReadinessTelemetry: () => ({
      directorStyleId: cinema?.shot?.directorStyleId || null,
      focalMm: cinema?.payload?.camera?.focalMm || 85,
      motionStrength: parseFloat(document.getElementById('motionSlider')?.value) || 2.5,
      durationSec: cinema?.payload?.camera?.durationSec || 3.5,
      foregroundEnabled: Boolean(cinema?.payload?.foregroundProp),
      attachedObjectsCount: (getSelectedShot()?.objectIds?.length || 0) + state.pendingObjectIdsForNextShot.length
    }),
    flyCameraToHeroProp: (hp, spot) => {
      if (!state.advisors3DVisible) {
        state.advisors3DVisible = true;
        document.body.classList.add('advisors-with-3d');
        refreshViewportLayout();
      }
      cinema?.exit?.();
      setTimeout(() => {
        camCtrl?.flyTo(hp.camPos, hp.camTarget);
        setStatusText(`🎯 <span class="text-emerald-400 font-bold">B-Roll 100mm encuadrado:</span> ${hp.name} (${spot.name}).`);
      }, 80);
    },
    flyToWardrobeRack: (vaultObjId) => {
      const vObj = state.objects.find((o) => o.id === vaultObjId);
      if (!vObj) return;
      if (!state.advisors3DVisible) {
        state.advisors3DVisible = true;
        document.body.classList.add('advisors-with-3d');
        refreshViewportLayout();
      }
      cinema?.exit?.();
      if (vObj.floor != null && state.activeFloor !== vObj.floor) {
        selectFloor(vObj.floor);
      }
      if (vObj.spotId) {
        const sp = findSpotById(vObj.spotId);
        if (sp && state.activeSpot?.id !== sp.id) selectSpot(sp);
      }
      if (vObj.camPos && vObj.camTarget) {
        setTimeout(() => {
          camCtrl?.flyTo(vObj.camPos, vObj.camTarget);
          setStatusText(`👗 <span class="text-pink-300 font-bold">Continuidad Perchero → Cuerpo:</span> encuadrando ${vObj.handle} en Piso ${vObj.floor}.`);
        }, 90);
      }
    },
    importWebGarmentToRackAndVault,
    captureHeroPropToVault: async (hp, spot) => {
      if (!state.advisors3DVisible) {
        state.advisors3DVisible = true;
        document.body.classList.add('advisors-with-3d');
        refreshViewportLayout();
      }
      cinema?.exit?.();
      camCtrl?.camera.position.set(hp.camPos.x, hp.camPos.y, hp.camPos.z);
      camCtrl?.controls.target.set(hp.camTarget.x, hp.camTarget.y, hp.camTarget.z);
      camCtrl?.controls.update();
      camCtrl?.render();

      const res = await captureViewportAsObjectRender('1:1');
      const num = state.objects.length + 1;
      const slug = hp.modelId.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const newObj = {
        id: `obj-${Date.now()}`,
        order: num,
        name: hp.name,
        handle: `@${slug}_${spot.id}`,
        category: 'Arte & Mobiliario',
        floor: spot.floor,
        spotId: spot.id,
        modelId: hp.modelId,
        worldPos: hp.camTarget,
        camPos: hp.camPos,
        camTarget: hp.camTarget,
        image: res.beautyUrl,
        previzRender: res.beautyUrl,
        previzDepthRender: res.depthUrl,
        masterApprovedStill: null,
        masterSeed: null,
        reduxWeight: 0.75,
        cnDepthStrength: 0.68,
        cnDepthEnd: 0.58,
        isPlaceholderImage: false,
        promptToken: hp.promptToken,
        motionPrompt: hp.motionPrompt,
        usage: `Hero Prop 1:2 curado por el Consejo de Producción en ${spot.name}.`
      };
      state.objects.unshift(newObj);
      await saveObjectToDB(newObj);
      updateTopCounters();
      objectsUI?.render();
      setStatusText(`🏺 <span class="text-emerald-400 font-bold">Hero Prop «${hp.name}» (${newObj.handle}) renderizado y guardado en Bóveda.</span>`);
    },
    applyCouncilBlueprintToStage: (bp) => {
      state.activeWardrobeId = bp.recommendedWardrobeId;
      if (!state.advisors3DVisible) {
        state.advisors3DVisible = true;
        document.body.classList.add('advisors-with-3d');
        refreshViewportLayout();
      }
      cinemaUI?.applyCouncilPreset({
        directorId: bp.recommendedDirectorId,
        shotTypeId: bp.recommendedShotTypeId,
        moveId: bp.recommendedMoveId,
        foregroundPropId: bp.recommendedForegroundId
      });
      updateTopCounters();
      const w = getWardrobeById(bp.recommendedWardrobeId);
      setStatusText(
        `✨ <span class="text-emerald-400 font-bold">Directrices del Consejo aplicadas:</span> Director + Rig Kelvin + Bokeh f/1.4 + Look «${w.name}».`
      );
    }
  });

  // Restaurar looks y props 3D personalizados importados previamente desde la web
  for (const customLook of loadCustomWardrobeLooks()) {
    if (!ALINA_WARDROBE_CATALOG.some((w) => w.id === customLook.id)) {
      ALINA_WARDROBE_CATALOG.unshift(customLook);
    }
  }
  for (const propDef of loadCustom3DProps()) {
    if (propDef.kind === 'garment') {
      arch?.hangCustomGarmentOnRack?.(propDef);
    } else if (propDef.kind === 'object') {
      arch?.spawnCustomObjectInFloor?.(propDef);
    }
  }

  // Cargar datos persistidos en IndexedDB (Objetos, Capítulos y Capturas)
  const [savedObjects, savedChapters, savedShots] = await Promise.all([
    loadObjectsFromDB(),
    loadChaptersFromDB(),
    loadShotsFromDB(findSpotById)
  ]);
  state.objects = savedObjects;
  state.chapters = savedChapters;
  if (savedShots.length > 0) {
    state.shots = savedShots;
    state.selectedShotId = savedShots[0].id;
  }
  updateTopCounters();
  objectsUI.render();
  chaptersUI.renderChapters();
  renderShotsPanel();

  // Inicializar Piso 2 en el visor 3D y aplicar slug inicial de la URL si existe
  selectFloor(2);
  window.addEventListener('hashchange', () => applySlugFromLocationHash());
  if (window.location.hash) {
    applySlugFromLocationHash();
  }

  try {
    await alina.load('./models/alina.glb');
    alina.placeAtSpot(state.activeSpot);
    syncAnimButtons(state.activeSpot.defaultAnim || 'Idle');
    state.threeLoadMs = Math.round(performance.now() - startTime);
    updatePerfBadge();
    updateViewportHud();
    console.log('[AlinaStudioOS] 3D Engine & Double-Registry Vault Ready');
  } catch (err) {
    console.error('[AlinaLoader] Error:', err);
    document.getElementById('viewport-status-hud').textContent = `Error cargando alina.glb: ${err.message}`;
  }

  // Exponer puente programático para renderizado de Bóveda en lote (Chrome WebGL2 CDP) y Frustum Auto-Tagging
  window.__ALINA_STUDIO__ = {
    state,
    selectFloor,
    selectSpot,
    findSpotById,
    setLightingMode,
    switchMainView,
    importWebGarmentToRackAndVault,
    importWebObjectTo3DAndVault,
    detectObjectsInCameraFrustum: () =>
      detectObjectsInCameraFrustum({
        cameraTelemetry: getCurrentCameraSnapshot(),
        floor: state.activeFloor,
        spotId: state.activeSpot?.id,
        objects: state.objects
      }),
    renderVaultObject1080: async (objId) => {
      const obj = state.objects.find((o) => o.id === objId);
      if (!obj) return null;
      return await renderIsolatedVaultObjectPackshot(obj, 1080);
    }
  };

  function loop() {
    requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), 0.1);
    const elapsed = clock.elapsedTime;

    if (state.activeEngine === 'threejs' && is3DViewportVisibleInCurrentView()) {
      alina.update(dt);
      lighting.update(elapsed);
      for (const wm of arch.waterMeshes) {
        wm.position.y = (wm.userData.baseY ?? (wm.userData.baseY = wm.position.y)) + Math.sin(elapsed * 2.2) * 0.012;
      }
      cinema?.update();
      camCtrl.update();
      camCtrl.render();

      fpsFrames++;
      const now = performance.now();
      if (now - fpsLastTime >= 750) {
        currentFps = Math.round((fpsFrames * 1000) / (now - fpsLastTime));
        fpsFrames = 0;
        fpsLastTime = now;
        updatePerfBadge();
      }
    }
  }
  loop();
}

init();
