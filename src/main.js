import * as THREE from 'three';
import { FLOOR_HEIGHT, SANCTUARY_FLOORS } from './data/sanctuaryData.js';
import { SkyAndLightingController } from './engine/skyAndLighting.js';
import { buildSanctuaryArchitecture } from './engine/buildingBuilder.js';
import { AlinaAvatarController } from './engine/alinaLoader.js';
import { CameraAndExportController } from './engine/cameraAndExport.js';
import { CinemaDirector } from './engine/cinemaDirector.js';
import { mountCinemaPanel } from './engine/cinemaUI.js';
import { buildZipBlob } from './engine/zipWriter.js';
import {
  buildCanonicalObjectTokenLock,
  detectObjectsInCameraFrustum
} from './engine/promptBuilder.js';
import {
  loadChaptersFromDB,
  loadCustom3DProps,
  loadCustomWardrobeLooks,
  loadObjectsFromDB,
  saveChapterToDB,
  saveCustom3DProp,
  saveCustomWardrobeLook,
  saveObjectToDB
} from './engine/shotsStorage.js';
import { mountObjectsVaultUI } from './engine/objectsVaultUI.js';
import { mountStoryScriptUI } from './engine/storyScriptUI.js';
import { mountChaptersCinemaUI } from './engine/chaptersCinemaUI.js';
import { mountNodeGraphBlueprintUI } from './engine/nodeGraphBlueprintUI.js';
import { mountAdvisorsBoardUI } from './engine/advisorsBoardUI.js';
import {
  ALINA_WARDROBE_CATALOG,
  evaluateCouncilReadiness,
  getWardrobeById
} from './data/advisorsBoardData.js';

const state = {
  activeView: 'plato', // 'plato' | 'story' | 'objects' | 'cinema' | 'advisors'
  cinemaSubView: 'blueprint', // 'blueprint' | 'director'
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
  aspectRatio: '16:9', // '16:9' Horizontal YouTube (por defecto) | '9:16' Vertical Celular
  activePass: 'beauty',
  depthPass: false,
  theaterMode: false,
  objects: [],
  chapters: [],
  threeLoadMs: 0
};

let scene, renderer, lighting, arch, alina, camCtrl, cinema, cinemaUI, objectsUI, storyUI, chaptersUI, blueprintUI, advisorsUI;
const clock = new THREE.Clock();
let fpsFrames = 0;
let fpsLastTime = performance.now();
let currentFps = 0;

const PASS_ORDER = ['beauty', 'bokeh', 'depth', 'heatmap', 'normals', 'mask'];

function getExportDims(aspect = state.aspectRatio) {
  return aspect === '9:16'
    ? { w: 1080, h: 1920, tag: '1080x1920', slug: '9x16', label: '9:16 (1080×1920)' }
    : { w: 1920, h: 1080, tag: '1920x1080', slug: '16x9', label: '16:9 (1920×1080)' };
}

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
    group.visible = state.sliced ? floor === state.activeFloor : true;
  }
  if (arch.mirrorReflector) {
    arch.mirrorReflector.visible = state.activeFloor === 2 && state.sliced;
  }
}

function is3DViewportVisibleInCurrentView() {
  if (state.activeView === 'plato') return true;
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
    const docsSlugMap = {
      guia: 'docs-1',
      'guia-flujo': 'docs-1',
      'guia-guion': 'docs-2',
      'guia-tomas': 'docs-3',
      'guia-higgsfield': 'docs-4',
      'guia-objetos': 'docs-5',
      'guia-arquitectura': 'docs-6',
      'guia-errores': 'docs-7'
    };
    if (docsSlugMap[raw]) {
      openDocsModalAtTab(docsSlugMap[raw]);
      return;
    }

    if (raw === 'guion' || raw === 'historia' || raw === 'capitulos' || raw === 'prompts') {
      switchMainView('story');
      storyUI?.setSubTab('writer');
      return;
    }
    if (raw === 'biblia' || raw === 'alina') {
      switchMainView('story');
      storyUI?.setSubTab('bible');
      return;
    }
    if (raw === 'cine' || raw === 'escenas' || raw === 'blueprint' || raw === 'grafo' || raw === 'sequencer') {
      state.cinemaSubView = 'blueprint';
      document.body.dataset.cinemaSub = 'blueprint';
      switchMainView('cinema');
      chaptersUI?.setSubTab('blueprint');
      return;
    }
    if (raw === 'director' || raw === 'fotografia' || raw === 'animatic') {
      state.cinemaSubView = 'director';
      document.body.dataset.cinemaSub = 'director';
      switchMainView('cinema');
      chaptersUI?.setSubTab('director');
      return;
    }
    if (raw === 'objetos' || raw === 'boveda' || raw === 'objects') {
      switchMainView('objects');
      return;
    }
    if (raw === 'asesores' || raw === 'vestuario' || raw === 'hods') {
      switchMainView('advisors');
      return;
    }
    if (raw === 'plato' || raw === 'inicio') {
      switchMainView('plato');
    }
  } finally {
    suppressHashSync = false;
  }
}

function switchMainView(viewName) {
  const valid = ['plato', 'story', 'objects', 'cinema', 'advisors'];
  const next = valid.includes(viewName) ? viewName : 'plato';
  state.activeView = next;
  document.body.dataset.view = next;

  const viewHashMap = {
    plato: 'plato',
    story: 'guion',
    objects: 'objetos',
    cinema: state.cinemaSubView === 'director' ? 'director' : 'escenas',
    advisors: 'asesores'
  };
  setHashSilently(viewHashMap[next] || 'plato');

  document.querySelectorAll('.top-nav-btn').forEach((btn) => {
    const act = btn.dataset.nav === next;
    btn.className = act
      ? 'top-nav-btn px-3 py-1.5 rounded-xl bg-[#c86446] text-white font-bold shadow transition-all flex items-center gap-1.5 whitespace-nowrap copper-glow'
      : 'top-nav-btn px-3 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap';
  });

  if (next === 'story') storyUI?.render();
  if (next === 'objects') objectsUI?.render();
  if (next === 'advisors') advisorsUI?.render();
  if (next === 'cinema' && state.cinemaSubView === 'blueprint') blueprintUI?.render();

  refreshViewportLayout();
}

function updateTopCounters() {
  const objBadge = document.getElementById('objectsCountBadge');
  const chapBadge = document.getElementById('chaptersCountBadge');
  const scenesBadge = document.getElementById('scenesCountBadge');
  const advBadge = document.getElementById('advisorsScoreBadge');

  if (objBadge) objBadge.textContent = String(state.objects.length);
  if (chapBadge) chapBadge.textContent = String(state.chapters.length);
  if (scenesBadge) {
    let totalScenes = 0;
    for (const ch of state.chapters) {
      for (const ep of ch.episodes || []) {
        totalScenes += (ep.scenes || []).length;
      }
    }
    scenesBadge.textContent = `${totalScenes || 4} esc`;
  }
  if (advBadge && state.activeSpot) {
    const ev = evaluateCouncilReadiness({
      spotId: state.activeSpot.id,
      wardrobeId: state.activeWardrobeId,
      directorStyleId: cinema?.shot?.directorStyleId || null,
      focalMm: cinema?.payload?.camera?.focalMm || 85,
      motionStrength: 2.5,
      durationSec: cinema?.payload?.camera?.durationSec || 3.5,
      foregroundEnabled: Boolean(cinema?.payload?.foregroundProp),
      attachedObjectsCount: 1
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
  const fpBox = document.getElementById('fluxPromptBox');
  if (fpBox) fpBox.textContent = spot.prompt;
  const scInp = document.getElementById('scriptInput');
  if (scInp) scInp.value = spot.script;
  document.getElementById('alinaPosBadge').textContent =
    `${spot.alinaPos.x.toFixed(1)}, ${spot.alinaPos.y.toFixed(1)}, ${spot.alinaPos.z.toFixed(1)}`;
  const brPkg = document.getElementById('brollPackage');
  if (brPkg) brPkg.innerHTML = spot.brolls.map((b) => `<div>• ${b}</div>`).join('');

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
  const fpBox = document.getElementById('fluxPromptBox');
  if (fpBox) fpBox.textContent = spot.prompt;
  document.getElementById('alinaPosBadge').textContent =
    `${spot.alinaPos.x.toFixed(1)}, ${spot.alinaPos.y.toFixed(1)}, ${spot.alinaPos.z.toFixed(1)}`;
  alina?.placeAtSpot(spot);
}

function updateViewportHud() {
  const floorLabel = SANCTUARY_FLOORS[state.activeFloor].floorName.split('•')[0].trim();
  const passLabels = {
    beauty: state.activeSpot.name,
    bokeh: 'OPTICAL BOKEH CoC',
    depth: 'Z-DEPTH 16-BIT',
    heatmap: 'ESCALA TÉRMICA TURBO',
    normals: 'CAMERA NORMALS',
    mask: 'SEMANTIC MASK ID'
  };
  const passTag = passLabels[state.activePass] || state.activeSpot.name;
  const fmtTag = state.aspectRatio === '9:16' ? '📱 9:16' : '🖥️ 16:9';
  document.getElementById('viewport-status-hud').textContent = `${floorLabel} • ${passTag} [${fmtTag}]`;
}

function setViewportAspect(aspect = '16:9', { fromSubModule = false } = {}) {
  const next = aspect === '9:16' ? '9:16' : '16:9';
  state.aspectRatio = next;
  document.body.dataset.aspect = next;
  const wrap = document.getElementById('viewport-wrapper');
  if (wrap) wrap.dataset.aspect = next;

  document.querySelectorAll('.aspect-btn').forEach((btn) => {
    const isAct = btn.dataset.aspect === next;
    btn.className = isAct
      ? `aspect-btn px-2.5 py-1 rounded-lg ${next === '16:9' ? 'bg-sky-600' : 'bg-amber-600'} text-white font-semibold shadow transition-all`
      : 'aspect-btn px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors';
  });

  refreshViewportLayout();
  cinemaUI?.onAspectChanged?.(next);
  if (!fromSubModule) blueprintUI?.setAspectRatio?.(next, true);
  updateViewportHud();
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
  const validPass = PASS_ORDER.includes(pass) ? pass : 'beauty';
  state.activePass = validPass;
  state.depthPass = validPass === 'depth' || validPass === 'heatmap';
  const focus = new THREE.Vector3(state.activeSpot.alinaPos.x, state.activeSpot.alinaPos.y + 1.0, state.activeSpot.alinaPos.z);
  if (camCtrl) {
    camCtrl.liveBokehSpec = {
      focalLengthMm: cinema?.shot?.focalLengthMm || 85,
      apertureFStop: cinema?.shot?.apertureFStop || 1.4,
      focusDistM: cinema?.focusDistM || null
    };
    camCtrl.setRenderPass(validPass, focus, cinema?.payload?.depthBoundsM || null);
  }

  const colorMap = {
    beauty: 'bg-[#c86446]',
    bokeh: 'bg-amber-600',
    depth: 'bg-emerald-600',
    heatmap: 'bg-rose-600',
    normals: 'bg-indigo-600',
    mask: 'bg-fuchsia-600'
  };
  document.querySelectorAll('.pass-btn').forEach((btn) => {
    const isAct = btn.dataset.pass === validPass;
    const activeColor = colorMap[validPass] || 'bg-[#c86446]';
    btn.className = isAct
      ? `pass-btn px-2 py-1 rounded-lg ${activeColor} text-white font-semibold shadow transition-all`
      : 'pass-btn px-2 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors';
  });
  updateViewportHud();
}

function cycleViewportPass() {
  const idx = PASS_ORDER.indexOf(state.activePass);
  setViewportPass(PASS_ORDER[(idx + 1) % PASS_ORDER.length]);
}

function setCameraPreset(mode) {
  state.activeCamPreset = mode;
  const s = state.activeSpot;
  if (mode === 'dollhouse') {
    state.sliced = false;
    syncSliceButtonUI();
    applyThreeJSSlicing();
    camCtrl?.flyTo({ x: 3.5, y: 12.8, z: 36.0 }, { x: 0, y: 11.2, z: -5.5 });
    document.getElementById('viewport-status-hud').textContent = `CASA DE MUÑECAS 5 PISOS [${state.aspectRatio}]`;
    return;
  }
  if (mode === 'overview') {
    state.sliced = false;
    syncSliceButtonUI();
    applyThreeJSSlicing();
    camCtrl?.flyTo({ x: 30.0, y: 24.5, z: 33.5 }, { x: 0, y: 10.5, z: -4.0 });
    document.getElementById('viewport-status-hud').textContent = `EXTERIOR 3/4 • 5 PISOS [${state.aspectRatio}]`;
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

function getCurrentCameraSnapshot() {
  if (camCtrl) {
    return { ...camCtrl.getCameraTelemetry(), approximate: false };
  }
  const s = state.activeSpot;
  return { position: { ...s.camPos }, target: { ...s.camTarget }, fov_deg: 36, approximate: true };
}

function captureViewportAsObjectRender(aspect = '1:1') {
  const w = aspect === '16:9' ? 1920 : 1080;
  const h = aspect === '1:1' ? 1080 : aspect === '16:9' ? 1080 : 1920;
  const beautyUrl = camCtrl.renderFrameDataURL(w, h, 'beauty');
  const depthUrl = camCtrl.renderFrameDataURL(w, h, 'depth');
  return Promise.resolve({ beautyUrl, depthUrl });
}

function buildHiggsfieldPayload() {
  const camTelemetry = getCurrentCameraSnapshot();
  const activeWardrobe = getWardrobeById(state.activeWardrobeId);
  return {
    engine: 'Three.js Metric 1:1 Previz + alina.glb',
    character: 'Alina Van Dijk',
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
    aspect_ratio: getExportDims().label,
    flux_prompt: state.activeSpot.prompt,
    elevenlabs_script: document.getElementById('scriptInput')?.value || state.activeSpot.script
  };
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
  document.getElementById('brand-home-btn').addEventListener('click', () => switchMainView('plato'));
  document.querySelectorAll('.top-nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchMainView(btn.dataset.nav));
  });

  document.getElementById('btn-mode-day').addEventListener('click', () => setLightingMode('day'));
  document.getElementById('btn-mode-night').addEventListener('click', () => setLightingMode('night'));

  document.getElementById('btn-slice').addEventListener('click', () => {
    state.sliced = !state.sliced;
    syncSliceButtonUI();
    applyThreeJSSlicing();
  });

  // Abrir directamente Cine & Escenas desde el Plató 3D
  document.getElementById('btn-open-spot-cinema')?.addEventListener('click', () => {
    state.cinemaSubView = 'director';
    document.body.dataset.cinemaSub = 'director';
    chaptersUI?.setSubTab('director');
    switchMainView('cinema');
    setStatusText(`🎬 <span class="text-emerald-400 font-bold">Spot «${state.activeSpot.name}» abierto en Cámara Libre & Director 3D.</span>`);
  });

  // Guardar objeto rápido en la Bóveda
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
      motionPrompt: 'Locked cinema macro shot with subtle warm Kelvin specular reflections across brushed-brass and natural surface grain, slow 2% push-in, duration 3.2s, no humans',
      usage: `Capturado desde Piso ${state.activeFloor} (${spotName}).`
    };
    state.objects.unshift(newObj);
    await saveObjectToDB(newObj);
    updateTopCounters();
    switchMainView('objects');
    objectsUI?.selectObject(newObj.id);
    setStatusText(`🏺 <span class="text-emerald-400 font-bold">Objeto ${newObj.handle} guardado en la Bóveda.</span>`);
  });

  document.getElementById('btn-dollhouse').addEventListener('click', () => setCameraPreset('dollhouse'));
  document.getElementById('btn-overview').addEventListener('click', () => setCameraPreset('overview'));
  document.getElementById('btn-fullscreen').addEventListener('click', () => toggleTheaterMode());

  // Modal de Guía Oficial
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

  document.querySelectorAll('.aspect-btn').forEach((btn) => {
    btn.addEventListener('click', () => setViewportAspect(btn.dataset.aspect));
  });
  document.getElementById('btn-cycle-pass')?.addEventListener('click', () => cycleViewportPass());
  document.querySelectorAll('.pass-btn').forEach((btn) => {
    btn.addEventListener('click', () => setViewportPass(btn.dataset.pass));
  });

  document.querySelectorAll('.cam-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => setCameraPreset(btn.dataset.cam));
  });

  document.querySelectorAll('.anim-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const animName = btn.dataset.anim;
      syncAnimButtons(animName);
      alina?.playAnimation(animName);
    });
  });

  document.getElementById('copyBtn')?.addEventListener('click', (e) => {
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
    const { w, h, slug, tag } = getExportDims(state.aspectRatio);
    const url = camCtrl.renderFrameDataURL(w, h, pass);
    downloadDataUrl(url, `alina_${slug}_piso${state.activeFloor}_${state.activeSpot.id}_${pass}_${tag}.png`);
    setStatusText(`✅ <span class="text-emerald-400 font-bold">Frame ${tag} (${pass}) exportado.</span>`);
  });

  document.getElementById('btn-export-json')?.addEventListener('click', () => {
    downloadJson(buildHiggsfieldPayload(), `alina_higgsfield_piso${state.activeFloor}_${state.activeSpot.id}.json`);
    setStatusText('✅ <span class="text-amber-300 font-bold">JSON técnico del Spot descargado.</span>');
  });

  document.getElementById('btn-export-package')?.addEventListener('click', async () => {
    const baseName = `alina_piso${state.activeFloor}_${state.activeSpot.id}`;
    const { w, h, tag, label } = getExportDims(state.aspectRatio);
    const op = camCtrl.renderOpenPose916(w, h, alina?.root || null);
    const entries = [
      { path: `frames_3d_raw/start_beauty_${tag}.png`, data: camCtrl.renderFrameDataURL(w, h, 'beauty') },
      { path: `frames_3d_raw/start_depth_${tag}.png`, data: camCtrl.renderFrameDataURL(w, h, 'depth') },
      { path: `frames_3d_raw/start_normals_${tag}.png`, data: camCtrl.renderFrameDataURL(w, h, 'normals') },
      { path: `frames_3d_raw/start_mask_${tag}.png`, data: camCtrl.renderFrameDataURL(w, h, 'mask') },
      { path: `frames_3d_raw/start_openpose_${tag}.png`, data: op.dataUrl },
      { path: 'frames_3d_raw/start_openpose.json', data: op.keypoints },
      { path: 'higgsfield_spot_manifest.json', data: buildHiggsfieldPayload() }
    ];
    const blob = await buildZipBlob(entries);
    const url = URL.createObjectURL(blob);
    downloadDataUrl(url, `shotpack_${baseName}.zip`);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setStatusText(`✅ <span class="text-emerald-400 font-bold">Paquete ${label} (.zip) exportado.</span>`);
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
  renderer.setSize(container.clientWidth || 960, container.clientHeight || 540, false);
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
    getAspectRatio: () => state.aspectRatio,
    renderer, camCtrl,
    download: { dataUrl: downloadDataUrl, json: downloadJson },
    setStatus: setStatusText
  });

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
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 18) || `look_${Date.now().toString(36).slice(-4)}`;

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
      funnel: 'Virtual Try-On / Continuidad 3D',
      spots: [spotId, 'vanity', 'boudoir'],
      swatches,
      fluxTokens,
      higgsfieldPhysics,
      stylistNote: `Importado de Web/Foto y colgado físicamente en el perchero 3D del Piso ${fNum}.`
    };
    const existingLookIdx = ALINA_WARDROBE_CATALOG.findIndex((w) => w.id === lookId);
    if (existingLookIdx >= 0) ALINA_WARDROBE_CATALOG[existingLookIdx] = newLook;
    else ALINA_WARDROBE_CATALOG.unshift(newLook);
    saveCustomWardrobeLook(newLook);
    state.activeWardrobeId = lookId;

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
      reduxWeight: 0.76,
      cnDepthStrength: 0.68,
      cnDepthEnd: 0.58,
      isPlaceholderImage: false,
      promptToken: `${fluxTokens} suspended on a sculpted dark-walnut hanger along a warm brushed-brass couture garment rack (#d4af37) in Piso ${fNum}`,
      motionPrompt: higgsfieldPhysics,
      usage: `Continuidad Perchero → Cuerpo en Piso ${fNum} (${spotId}).`
    };
    state.objects.unshift(newVaultObj);
    await saveObjectToDB(newVaultObj);
    updateTopCounters();
    objectsUI?.render();
    advisorsUI?.render();
    return newVaultObj;
  }

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
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 18) || `prop_${Date.now().toString(36).slice(-4)}`;

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
      reduxWeight: 0.75,
      cnDepthStrength: 0.68,
      cnDepthEnd: 0.58,
      isPlaceholderImage: false,
      promptToken,
      motionPrompt,
      usage: `Integrado desde Web/Foto en Piso ${fNum} (${spotId}).`
    };
    state.objects.unshift(newVaultObj);
    await saveObjectToDB(newVaultObj);
    updateTopCounters();
    objectsUI?.render();
    return newVaultObj;
  }

  async function renderIsolatedVaultObjectPackshot(obj, size = 1080) {
    if (!obj || !arch?.buildIsolatedObjectTurntableGroup || !camCtrl) return null;
    const turntableGroup = await arch.buildIsolatedObjectTurntableGroup(obj);
    turntableGroup.position.set(0, 500, 0);
    scene.add(turntableGroup);
    turntableGroup.updateMatrixWorld(true);

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

    const bbox = new THREE.Box3().setFromObject(turntableGroup);
    const center = new THREE.Vector3();
    const bSize = new THREE.Vector3();
    bbox.getCenter(center);
    bbox.getSize(bSize);

    const maxDim = Math.max(0.25, bSize.x, bSize.y, bSize.z);
    const fovRad = THREE.MathUtils.degToRad(34);
    const dist = (maxDim / (2 * Math.tan(fovRad / 2))) * 1.16;

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

    scene.overrideMaterial = null;
    scene.background = null;
    scene.fog = null;
    lighting.setDepthFogDisabled(true);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camStudio);
    const beautyRgba = renderer.domElement.toDataURL('image/png');

    scene.background = new THREE.Color(0xffffff);
    renderer.setClearColor(0xffffff, 1);
    renderer.clear();
    renderer.render(scene, camStudio);
    const beautyWhite = renderer.domElement.toDataURL('image/png');

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

    return { id: obj.id, handle: obj.handle, beauty: beautyRgba, whiteBg: beautyWhite, depth: depthIsolated };
  }

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
    setStatusText('🔄 <span class="text-amber-300 font-bold">Re-renderizando los objetos de la Bóveda desde el Motor 3D...</span>');
    for (const obj of state.objects) {
      if (obj.camPos && obj.camTarget) await repairSingleVaultObjectFrom3D(obj.id);
    }
    objectsUI?.render();
    setStatusText('✅ <span class="text-emerald-400 font-bold">Bóveda sincronizada con el Motor 3D.</span>');
  }

  // 2. Montar Sala de Guion & Historia («📝 Guion & Historia»)
  storyUI = mountStoryScriptUI(document.getElementById('col-story'), {
    getChapters: () => state.chapters,
    getObjects: () => state.objects,
    onStoryChanged: () => updateTopCounters(),
    openSceneInCinema: ({ actId, chapterId, episodeId, sceneId }) => {
      state.cinemaSubView = 'blueprint';
      document.body.dataset.cinemaSub = 'blueprint';
      chaptersUI?.setSubTab('blueprint');
      switchMainView('cinema');
      blueprintUI?.openForScene({ actId, chapterId, episodeId, sceneId });
      setStatusText('🎬 <span class="text-emerald-400 font-bold">Escena abierta en Cine & Escenas:</span> revisa sus Tomas (Inicio ➔ Corte), voz y objetos.');
    },
    downloadJson,
    setStatus: setStatusText
  });

  // 3. Montar Bóveda de Objetos («🏺 Objetos»)
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
      if (obj.floor != null && state.activeFloor !== obj.floor) selectFloor(obj.floor);
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
        setTimeout(() => camCtrl?.flyTo(obj.camPos, obj.camTarget), 90);
      }
    },
    onObjectsChanged: () => updateTopCounters(),
    toggle3DViewportInObjects: () => {
      state.objects3DVisible = !state.objects3DVisible;
      document.body.classList.toggle('objects-with-3d', state.objects3DVisible);
      refreshViewportLayout();
      return state.objects3DVisible;
    },
    captureObjectFrom3D: (aspect) => captureViewportAsObjectRender(aspect),
    injectObjectIntoPrompts: (obj) => {
      // Añadir el objeto a la escena activa en Cine & Escenas y abrirla
      const sel = blueprintUI?.getCurrentSelection?.() || {};
      const ch = state.chapters.find((c) => c.id === sel.chapterId) || state.chapters[0];
      const ep = ch?.episodes?.find((e) => e.id === sel.episodeId) || ch?.episodes?.[0];
      const sc = ep?.scenes?.find((s) => s.id === sel.sceneId) || ep?.scenes?.[0];
      if (ch && sc) {
        sc.linkedObjectIds = Array.isArray(sc.linkedObjectIds) ? sc.linkedObjectIds : [];
        if (!sc.linkedObjectIds.includes(obj.id)) sc.linkedObjectIds.push(obj.id);
        saveChapterToDB(ch);
      }
      state.cinemaSubView = 'blueprint';
      document.body.dataset.cinemaSub = 'blueprint';
      chaptersUI?.setSubTab('blueprint');
      switchMainView('cinema');
      setStatusText(`🏺 <span class="text-emerald-400 font-bold">Objeto ${obj.handle} enviado a la escena activa en Cine & Escenas.</span>`);
    },
    downloadDataUrl,
    downloadJson,
    setStatus: setStatusText
  });

  // 4. Montar Sub-barra de «🎬 Cine & Escenas» + Secuenciador Nodal
  chaptersUI = mountChaptersCinemaUI(document.getElementById('cinema-subnav-wrap'), {
    onSubTabChanged: (sub) => {
      state.cinemaSubView = sub;
      document.body.dataset.cinemaSub = sub;
      setHashSilently(sub === 'director' ? 'director' : 'escenas');
      if (sub === 'blueprint') blueprintUI?.render();
      refreshViewportLayout();
    },
    onGotoStory: () => {
      const sel = blueprintUI?.getCurrentSelection?.();
      switchMainView('story');
      if (sel) storyUI?.selectScene(sel);
    }
  });

  blueprintUI = mountNodeGraphBlueprintUI(document.getElementById('col-blueprint'), {
    getChapters: () => state.chapters,
    getObjects: () => state.objects,
    getActiveSpot: () => state.activeSpot,
    getLightingMode: () => state.lightingMode,
    setLightingMode,
    getAspectRatio: () => state.aspectRatio,
    setAspectRatio: (ar) => setViewportAspect(ar, { fromSubModule: true }),
    openInStoryEditor: (sel) => {
      switchMainView('story');
      storyUI?.selectScene(sel);
    },
    findSpotById,
    selectFloor,
    selectSpot,
    switchMainView,
    cinema,
    camCtrl,
    alina,
    setStatus: setStatusText
  });

  // 5. Montar Consejo de Asesores («🎭 Asesores»)
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
      updateTopCounters();
      setStatusText(`👗 <span class="text-pink-300 font-bold">Vestuario equipado:</span> ${w.name}.`);
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
      motionStrength: 2.5,
      durationSec: cinema?.payload?.camera?.durationSec || 3.5,
      foregroundEnabled: Boolean(cinema?.payload?.foregroundProp),
      attachedObjectsCount: 1
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
        setStatusText(`🎯 <span class="text-emerald-400 font-bold">Encuadrando:</span> ${hp.name} (${spot.name}).`);
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
      if (vObj.floor != null && state.activeFloor !== vObj.floor) selectFloor(vObj.floor);
      if (vObj.spotId) {
        const sp = findSpotById(vObj.spotId);
        if (sp && state.activeSpot?.id !== sp.id) selectSpot(sp);
      }
      if (vObj.camPos && vObj.camTarget) {
        setTimeout(() => camCtrl?.flyTo(vObj.camPos, vObj.camTarget), 90);
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
        reduxWeight: 0.75,
        cnDepthStrength: 0.68,
        cnDepthEnd: 0.58,
        isPlaceholderImage: false,
        promptToken: hp.promptToken,
        motionPrompt: hp.motionPrompt,
        usage: `Hero Prop curado en ${spot.name}.`
      };
      state.objects.unshift(newObj);
      await saveObjectToDB(newObj);
      updateTopCounters();
      objectsUI?.render();
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
    }
  });

  for (const customLook of loadCustomWardrobeLooks()) {
    if (!ALINA_WARDROBE_CATALOG.some((w) => w.id === customLook.id)) {
      ALINA_WARDROBE_CATALOG.unshift(customLook);
    }
  }
  for (const propDef of loadCustom3DProps()) {
    if (propDef.kind === 'garment') arch?.hangCustomGarmentOnRack?.(propDef);
    else if (propDef.kind === 'object') arch?.spawnCustomObjectInFloor?.(propDef);
  }

  const [savedObjects, savedChapters] = await Promise.all([
    loadObjectsFromDB(),
    loadChaptersFromDB()
  ]);
  state.objects = savedObjects;
  state.chapters = savedChapters;
  updateTopCounters();
  objectsUI.render();
  storyUI.render();

  selectFloor(2);
  window.addEventListener('hashchange', () => applySlugFromLocationHash());
  if (window.location.hash) applySlugFromLocationHash();

  try {
    await alina.load('./models/alina.glb');
    alina.placeAtSpot(state.activeSpot);
    alina.update(0.05);
    syncAnimButtons(state.activeSpot.defaultAnim || 'Idle');
    state.threeLoadMs = Math.round(performance.now() - startTime);
    updatePerfBadge();
    updateViewportHud();
    if (state.activeView === 'cinema' && state.cinemaSubView === 'blueprint') {
      blueprintUI?.invalidateAndRender?.();
    }
    console.log('[AlinaStudioOS v3.4] Ready');
  } catch (err) {
    console.error('[AlinaLoader] Error:', err);
    document.getElementById('viewport-status-hud').textContent = `Error cargando alina.glb: ${err.message}`;
  }

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
