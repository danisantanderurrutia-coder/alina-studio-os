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
  analyzeCapturedImage,
  buildFluxPromptFromCapture,
  buildHiggsfieldMotionFromCapture,
  describeCaptureFraming
} from './engine/promptBuilder.js';
import {
  deleteShotFromDB,
  loadChaptersFromDB,
  loadObjectsFromDB,
  loadShotsFromDB,
  saveChapterToDB,
  saveObjectToDB,
  saveShotToDB
} from './engine/shotsStorage.js';
import { mountObjectsVaultUI } from './engine/objectsVaultUI.js';
import { mountChaptersCinemaUI } from './engine/chaptersCinemaUI.js';

const state = {
  activeView: 'plato', // 'plato' | 'prompts' | 'objects' | 'cinema'
  cinemaSubView: 'chapters', // 'chapters' | 'director' | 'bible'
  objects3DVisible: false,
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

let scene, renderer, lighting, arch, alina, camCtrl, cinema, cinemaUI, objectsUI, chaptersUI;
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
    if (state.sliced) {
      if (floor > state.activeFloor) {
        group.position.y = floor * FLOOR_HEIGHT + 16.0;
        group.visible = false;
      } else {
        group.position.y = floor * FLOOR_HEIGHT;
        group.visible = true;
      }
    } else {
      group.position.y = floor * FLOOR_HEIGHT;
      group.visible = true;
    }
  }
}

// ===========================================================================
// NAVEGACIÓN SUPERIOR LIMPIA DE 4 VISTAS
// ===========================================================================
function is3DViewportVisibleInCurrentView() {
  if (state.activeView === 'plato' || state.activeView === 'prompts') return true;
  if (state.activeView === 'objects' && state.objects3DVisible) return true;
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

function switchMainView(viewName) {
  const valid = ['plato', 'prompts', 'objects', 'cinema'];
  const next = valid.includes(viewName) ? viewName : 'plato';
  state.activeView = next;
  document.body.dataset.view = next;

  document.querySelectorAll('.top-nav-btn').forEach((btn) => {
    const act = btn.dataset.nav === next;
    btn.className = act
      ? 'top-nav-btn px-3 py-1.5 rounded-xl bg-[#c86446] text-white font-bold shadow transition-all flex items-center gap-1.5 whitespace-nowrap copper-glow'
      : 'top-nav-btn px-3 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap';
  });

  if (next === 'objects') objectsUI?.render();
  if (next === 'cinema') {
    if (state.cinemaSubView === 'chapters') chaptersUI?.renderChapters();
    if (state.cinemaSubView === 'bible') chaptersUI?.renderBible();
  }
  if (next === 'prompts') renderShotsPanel();

  refreshViewportLayout();
}

function updateTopCounters() {
  const shotBadge = document.getElementById('shotsCountBadge');
  const objBadge = document.getElementById('objectsCountBadge');
  const chapBadge = document.getElementById('chaptersCountBadge');

  if (shotBadge) {
    shotBadge.textContent = String(state.shots.length);
    shotBadge.classList.toggle('hidden', state.shots.length === 0);
  }
  if (objBadge) objBadge.textContent = String(state.objects.length);
  if (chapBadge) chapBadge.textContent = String(state.chapters.length);
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

  return {
    engine: 'Three.js Metric 1:1 Previz + alina.glb',
    character: 'Alina Van Dijk',
    token_lock: '28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores',
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
  const initialObjectIds = [...state.pendingObjectIdsForNextShot];
  state.pendingObjectIdsForNextShot = [];
  const attachedObjects = state.objects.filter((o) => initialObjectIds.includes(o.id));

  const fluxPrompt = buildFluxPromptFromCapture({
    spot,
    floorName,
    anim: state.activeAnim,
    lightingMode: state.lightingMode,
    framing,
    imageMetrics,
    depthPass: hasDepth,
    attachedObjects
  });

  const motionPrompt = buildHiggsfieldMotionFromCapture({
    anim: state.activeAnim,
    framing,
    motionStrength,
    motionEngine: state.motionEngine,
    cinemaMoveLabel
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
    `✅ <span class="text-emerald-400 font-bold">Captura #${state.shots.length} (${shot.engine === 'unity' ? 'Unity 6 URP' : 'Three.js'}) lista en Estudio Prompts.</span>`
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
  return Promise.resolve(camCtrl.renderVertical916DataURL(1080, h, false));
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
  shot.fluxPrompt = buildFluxPromptFromCapture({
    spot: shot.spot,
    floorName: shot.floorName,
    anim: shot.anim,
    lightingMode: shot.lightingMode,
    framing: shot.framing,
    imageMetrics: shot.imageMetrics,
    depthPass: Boolean(shot.depthImage) || shot.depthPass,
    attachedObjects: getObjectsForShot(shot)
  });
  if (!onlyFluxIfClean) {
    shot.motionPrompt = buildHiggsfieldMotionFromCapture({
      anim: shot.anim,
      framing: shot.framing,
      motionStrength: shot.motionStrength,
      motionEngine: shot.motionEngine,
      cinemaMoveLabel: shot.cinemaMoveLabel
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
      <span class="absolute bottom-0.5 right-0.5 px-1 rounded text-[7px] font-mono font-bold ${
        s.engine === 'unity' ? 'bg-pink-500/85 text-white' : 'bg-emerald-600/85 text-white'
      }">${s.engine === 'unity' ? 'U6' : '3D'}</span>
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
  engTag.textContent = shot.engine === 'unity' ? 'UNITY 6 URP' : 'THREE.JS';
  engTag.className = shot.engine === 'unity'
    ? 'text-[9px] font-mono px-1.5 py-0.5 rounded border border-pink-500/40 bg-pink-500/15 text-pink-300 shrink-0 font-bold'
    : 'text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 shrink-0 font-bold';

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
    unityBridge?.sendFloor(shot.floor);
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
    engine: shot.engine === 'unity' ? 'Motor B: Unity 6 URP WebGL' : 'Motor A: Three.js WebGL + alina.glb',
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

  // Captura rápida de Objeto desde el visor 3D hacia la Bóveda de Objetos
  document.getElementById('btn-quick-save-object').addEventListener('click', async () => {
    const imgUrl = await captureViewportAsObjectRender('1:1');
    if (!imgUrl) return;
    const spotName = state.activeSpot?.name || 'Santuario';
    const num = state.objects.length + 1;
    const newObj = {
      id: `obj-${Date.now()}`,
      order: num,
      name: `Objeto ${spotName}`,
      handle: `@prop_${state.activeSpot?.id || 'set'}_${num}`,
      category: 'Audio & Set',
      floor: state.activeFloor,
      spotId: state.activeSpot?.id || 'vanity',
      image: imgUrl,
      isPlaceholderImage: false,
      promptToken: `photorealistic prop captured from ${spotName}, detailed luxury surface texture and lighting`,
      motionPrompt: 'Subtle macro light reflections across prop surface, slow 2% push-in, no humans, motion strength 2.2',
      usage: `Capturado desde Piso ${state.activeFloor} (${spotName}).`
    };
    state.objects.unshift(newObj);
    await saveObjectToDB(newObj);
    updateTopCounters();
    switchMainView('objects');
    objectsUI?.selectObject(newObj.id);
    setStatusText(`🏺 <span class="text-emerald-400 font-bold">Objeto guardado en la Bóveda (${newObj.handle}).</span>`);
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

  // Montar Bóveda de Objetos
  objectsUI = mountObjectsVaultUI(document.getElementById('col-objects'), {
    getObjects: () => state.objects,
    getActiveFloor: () => state.activeFloor,
    getActiveSpot: () => state.activeSpot,
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
        refreshViewportLayout();
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

  // Inicializar Piso 2 en el visor 3D
  selectFloor(2);

  try {
    await alina.load('./models/alina.glb');
    alina.placeAtSpot(state.activeSpot);
    syncAnimButtons(state.activeSpot.defaultAnim || 'Idle');
    state.threeLoadMs = Math.round(performance.now() - startTime);
    updatePerfBadge();
    updateViewportHud();
  } catch (err) {
    console.error('[AlinaLoader] Error:', err);
    document.getElementById('viewport-status-hud').textContent = `Error cargando alina.glb: ${err.message}`;
  }

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
