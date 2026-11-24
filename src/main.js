import * as THREE from 'three';
import { FLOOR_HEIGHT, SANCTUARY_FLOORS } from './data/sanctuaryData.js';
import { SkyAndLightingController } from './engine/skyAndLighting.js';
import { buildSanctuaryArchitecture } from './engine/buildingBuilder.js';
import { AlinaAvatarController } from './engine/alinaLoader.js';
import { CameraAndExportController } from './engine/cameraAndExport.js';
import { UnityWebGLBridge } from './engine/unityBridge.js';
import { CinemaDirector } from './engine/cinemaDirector.js';
import { mountCinemaPanel } from './engine/cinemaUI.js';
import {
  analyzeCapturedImage,
  buildFluxPromptFromCapture,
  buildHiggsfieldMotionFromCapture,
  describeCaptureFraming
} from './engine/promptBuilder.js';
import { deleteShotFromDB, loadShotsFromDB, saveShotToDB } from './engine/shotsStorage.js';

const state = {
  activeEngine: 'threejs', // 'threejs' | 'unity'
  activeFloor: 2,
  activeSpot: SANCTUARY_FLOORS[2].spots[0],
  activeAnim: 'Idle',
  activeCamPreset: '85mm',
  lightingMode: 'night',
  sliced: true,
  depthPass: false,
  guide916: false,
  theaterMode: false,
  promptsMode: false,
  promptsTab: 'captures', // 'captures' | 'director'
  motionEngine: 'higgsfield',
  shots: [],
  selectedShotId: null,
  pendingUnityCapture: null, // null | { mode: 'create', withDepth: boolean } | { mode: 'attachDepth', shotId: string } | { mode: 'exportDepth', baseName: string, payload: object }
  threeLoadMs: 0,
  unityLoadMs: null,
  unityFps: null
};

let scene, renderer, lighting, arch, alina, camCtrl, unityBridge, cinema, cinemaUI;
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

function setStatusText(html) {
  const el = document.getElementById('renderStatus');
  if (el) el.innerHTML = html;
}

function updatePerfBadge() {
  const el = document.getElementById('perf-badge');
  if (state.activeEngine === 'threejs') {
    el.textContent = `FPS: ${currentFps || '--'} | Carga: ${state.threeLoadMs}ms`;
  } else {
    const loadTxt = state.unityLoadMs != null ? `${(state.unityLoadMs / 1000).toFixed(1)}s` : 'Cargando...';
    const fpsTxt = state.unityFps != null ? `${state.unityFps}` : '--';
    el.textContent = `Unity 6 URP | FPS: ${fpsTxt} | Carga: ${loadTxt}`;
  }
}

function syncSliceButtonUI() {
  const btn = document.getElementById('btn-slice');
  btn.textContent = state.sliced ? '🔪 Corte Sliced: ACTIVO' : '🏛️ Corte Sliced: OFF';
  btn.className = state.sliced
    ? 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 px-2.5 py-1.5 rounded-lg border border-emerald-500/30 font-mono transition-colors'
    : 'bg-white/5 hover:bg-white/10 text-slate-300 px-2.5 py-1.5 rounded-lg border border-white/10 font-mono transition-colors';
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
      <h3 class="text-xs font-semibold text-white mt-1">${info.subtitle}</h3>
      <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${info.description}</p>
    `;
    card.addEventListener('click', () => selectFloor(floorNum));
    container.appendChild(card);

    // Botón compacto para cambiar de piso cuando la columna izquierda está oculta en Modo Prompts
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
      ? 'px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#c86446] text-white transition-all shadow'
      : 'px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition-all';
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

  unityBridge?.sendFloor(floorNum);
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
    `X: ${spot.alinaPos.x.toFixed(1)} Y: ${spot.alinaPos.y.toFixed(1)} Z: ${spot.alinaPos.z.toFixed(1)}`;
  document.getElementById('brollPackage').innerHTML = spot.brolls.map((b) => `<div>• ${b}</div>`).join('');

  alina?.placeAtSpot(spot);
  syncAnimButtons(spot.defaultAnim || 'Idle');
  camCtrl?.flyTo(spot.camPos, spot.camTarget);
  unityBridge?.sendSpot(spot.id);
  unityBridge?.sendAnimation(spot.defaultAnim || 'Idle');

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

/** Posiciona piso/spot/Alina para un plano de cine SIN mover la cámara (la mueve el Director). */
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
    `X: ${spot.alinaPos.x.toFixed(1)} Y: ${spot.alinaPos.y.toFixed(1)} Z: ${spot.alinaPos.z.toFixed(1)}`;
  alina?.placeAtSpot(spot);
}

function updateViewportHud() {
  const floorLabel = SANCTUARY_FLOORS[state.activeFloor].floorName.split('•')[0].trim();
  const engineTag = state.activeEngine === 'threejs' ? 'Three.js GLB' : 'Unity 6 URP';
  const passTag = state.depthPass ? 'DEPTH PASS' : state.activeSpot.name;
  document.getElementById('viewport-status-hud').textContent = `${floorLabel} • ${passTag} [${engineTag}]`;
}

function setLightingMode(mode) {
  state.lightingMode = mode;
  lighting?.setMode(mode);
  unityBridge?.sendLightingMode(mode);
  cinemaUI?.onModeChanged();

  const btnDay = document.getElementById('btn-mode-day');
  const btnNight = document.getElementById('btn-mode-night');
  if (mode === 'day') {
    btnDay.className = 'px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all';
    btnNight.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all';
  } else {
    btnNight.className = 'px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all';
    btnDay.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all';
  }
}

function setDepthPass(enabled) {
  state.depthPass = enabled;
  const focus = new THREE.Vector3(state.activeSpot.alinaPos.x, state.activeSpot.alinaPos.y + 1.0, state.activeSpot.alinaPos.z);
  camCtrl?.setDepthPass(enabled, focus);
  unityBridge?.sendRenderPass(enabled ? 'depth' : 'beauty');

  const btnBeauty = document.getElementById('btn-beauty-pass');
  const btnDepth = document.getElementById('btn-depth-pass');
  if (enabled) {
    btnDepth.className = 'px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow';
    btnBeauty.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors';
  } else {
    btnBeauty.className = 'px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-semibold shadow';
    btnDepth.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors';
  }
  updateViewportHud();
}

function setCameraPreset(mode) {
  state.activeCamPreset = mode;
  const s = state.activeSpot;
  if (mode === 'dollhouse') {
    state.sliced = false;
    syncSliceButtonUI();
    applyThreeJSSlicing();
    camCtrl?.flyTo({ x: 3.5, y: 12.8, z: 36.0 }, { x: 0, y: 11.2, z: -5.5 });
    unityBridge?.sendDollhouseSlice(false);
    unityBridge?.sendCameraAngle('dollhouse');
    document.getElementById('viewport-status-hud').textContent = `CASA DE MUÑECAS 5 PISOS (4.9m/nivel) [${state.activeEngine === 'threejs' ? 'Three.js' : 'Unity 6 URP'}]`;
    return;
  }
  if (mode === 'overview') {
    state.sliced = false;
    syncSliceButtonUI();
    applyThreeJSSlicing();
    camCtrl?.flyTo({ x: 30.0, y: 24.5, z: 33.5 }, { x: 0, y: 10.5, z: -4.0 });
    unityBridge?.sendDollhouseSlice(false);
    unityBridge?.sendCameraAngle('overview');
    document.getElementById('viewport-status-hud').textContent = `EXTERIOR 3/4 • 5 PISOS (24.5m ALTO) [${state.activeEngine === 'threejs' ? 'Three.js' : 'Unity 6 URP'}]`;
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
  unityBridge?.sendCameraAngle(mode);
  updateViewportHud();
}

function buildHiggsfieldPayload() {
  const camTelemetry = state.activeEngine === 'threejs' && camCtrl
    ? camCtrl.getCameraTelemetry()
    : { source: 'Unity6_URP_WebGL', spot: state.activeSpot.id, preset: state.activeCamPreset };

  return {
    engine: state.activeEngine === 'threejs' ? 'Motor A: Three.js WebGL + alina.glb' : 'Motor B: Unity 6 URP WebGL',
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
// MODO PROMPTS: Columna izquierda oculta, Visor 3D a la izq, Prompts a la der
// ===========================================================================
function refreshViewportLayout() {
  requestAnimationFrame(() => {
    camCtrl?.onWindowResize();
    window.dispatchEvent(new Event('resize'));
  });
  setTimeout(() => {
    camCtrl?.onWindowResize();
    window.dispatchEvent(new Event('resize'));
  }, 140);
}

function setPromptsMode(enabled) {
  state.promptsMode = Boolean(enabled);
  document.body.classList.toggle('prompts-mode', state.promptsMode);

  const btn = document.getElementById('btn-prompts-toggle');
  btn.setAttribute('aria-pressed', String(state.promptsMode));
  btn.className = state.promptsMode
    ? 'bg-[#c86446] text-white px-3 py-1.5 rounded-lg border border-[#c86446] font-semibold transition-all flex items-center gap-1.5 shadow-lg copper-glow'
    : 'bg-white/5 hover:bg-[#c86446]/25 text-slate-100 hover:text-white px-3 py-1.5 rounded-lg border border-[#c86446]/40 font-semibold transition-all flex items-center gap-1.5';

  refreshViewportLayout();
}

function setPromptsTab(tabName) {
  state.promptsTab = tabName;
  const isCap = tabName === 'captures';
  document.getElementById('pane-ptab-captures').classList.toggle('hidden', !isCap);
  document.getElementById('pane-ptab-captures').classList.toggle('flex', isCap);
  document.getElementById('pane-ptab-director').classList.toggle('hidden', isCap);
  document.getElementById('pane-ptab-director').classList.toggle('flex', !isCap);

  document.getElementById('btn-ptab-captures').className = isCap
    ? 'py-1.5 px-2 rounded-lg bg-[#c86446] text-white font-semibold transition-all'
    : 'py-1.5 px-2 rounded-lg text-slate-400 hover:text-white font-semibold transition-all';
  document.getElementById('btn-ptab-director').className = !isCap
    ? 'py-1.5 px-2 rounded-lg bg-[#c86446] text-white font-semibold transition-all'
    : 'py-1.5 px-2 rounded-lg text-slate-400 hover:text-white font-semibold transition-all';
}

function getCurrentCameraSnapshot() {
  if (state.activeEngine === 'threejs' && camCtrl) {
    return { ...camCtrl.getCameraTelemetry(), approximate: false };
  }
  if (state.activeEngine === 'unity' && unityBridge?.lastCameraTelemetry) {
    return { ...unityBridge.lastCameraTelemetry, approximate: false };
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

let saveShotTimer = null;
function scheduleSaveShot(shot) {
  if (!shot) return;
  clearTimeout(saveShotTimer);
  saveShotTimer = setTimeout(() => {
    saveShotToDB(shot);
  }, 220);
}

function updateShotsBadge() {
  const badge = document.getElementById('shotsCountBadge');
  const count = state.shots.length;
  badge.textContent = String(count);
  badge.classList.toggle('hidden', count === 0);
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

  // Si el Director de Fotografía está activo en Three.js, aprovechamos también su prompt óptico si aplica
  const fluxPrompt = buildFluxPromptFromCapture({
    spot,
    floorName,
    anim: state.activeAnim,
    lightingMode: state.lightingMode,
    framing,
    imageMetrics,
    depthPass: hasDepth
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
    fluxPrompt,
    motionPrompt
  };

  state.shots.unshift(shot);
  if (state.shots.length > 24) {
    const oldest = state.shots.pop();
    if (oldest?.id) deleteShotFromDB(oldest.id);
  }
  state.selectedShotId = shot.id;
  saveShotToDB(shot);

  updateShotsBadge();
  renderShotsPanel();
  setStatusText(
    `✅ <span class="text-emerald-400 font-bold">Captura #${state.shots.length} (${shot.engine === 'unity' ? 'Unity 6 URP' : 'Three.js'}) convertida en Prompt Higgsfield.</span>`
  );
}

function captureCurrentViewportToPrompt({ withDepth = false } = {}) {
  if (!state.promptsMode) setPromptsMode(true);
  if (state.promptsTab !== 'captures') setPromptsTab('captures');

  if (state.activeEngine === 'threejs') {
    const beautyUrl = camCtrl.renderVertical916DataURL(1080, 1920, state.depthPass ? true : false);
    const depthUrl = withDepth ? camCtrl.renderVertical916DataURL(1080, 1920, true) : null;
    createShotFromCapture(beautyUrl, depthUrl);
    return;
  }

  // Motor B: Unity 6 URP WebGL
  if (!unityBridge?.ready) {
    setStatusText('⏳ <span class="text-amber-300 font-bold">Espera a que termine de cargar Unity 6 URP para capturar el frame.</span>');
    return;
  }

  state.pendingUnityCapture = { mode: 'create', withDepth };
  setStatusText('📸 <span class="text-[#f29979]">Capturando frame 1080×1920 en vivo desde Unity 6 URP...</span>');
  if (state.depthPass) {
    unityBridge.requestDepthScreenshot916();
  } else {
    unityBridge.requestScreenshot916();
  }
}

function attachDepthToSelectedShot() {
  const shot = getSelectedShot();
  if (!shot) return;

  if (state.activeEngine === 'threejs') {
    shot.depthImage = camCtrl.renderVertical916DataURL(1080, 1920, true);
    regenerateShotPrompts(shot, { onlyFluxIfClean: true });
    saveShotToDB(shot);
    renderShotsPanel();
    setStatusText('✅ <span class="text-emerald-400 font-bold">Depth Map 9:16 adjuntado a la captura actual.</span>');
    return;
  }

  if (!unityBridge?.ready) {
    setStatusText('⏳ <span class="text-amber-300">Unity 6 URP aún no está listo.</span>');
    return;
  }
  state.pendingUnityCapture = { mode: 'attachDepth', shotId: shot.id };
  setStatusText('🌑 <span class="text-emerald-300">Capturando Depth Map 1080×1920 desde Unity 6 URP...</span>');
  unityBridge.requestDepthScreenshot916();
}

function regenerateShotPrompts(shot, { onlyFluxIfClean = false } = {}) {
  shot.fluxPrompt = buildFluxPromptFromCapture({
    spot: shot.spot,
    floorName: shot.floorName,
    anim: shot.anim,
    lightingMode: shot.lightingMode,
    framing: shot.framing,
    imageMetrics: shot.imageMetrics,
    depthPass: Boolean(shot.depthImage) || shot.depthPass
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
    btn.title = `Toma #${num} • ${s.spot.name} (${s.engine === 'unity' ? 'Unity' : 'Three.js'})`;
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
    `${shot.floorName.split('•')[0].trim()} • Pose: ${shot.anim} • ${shot.lightingMode === 'day' ? '☀️ Día' : '🌙 Noche'} • ${shot.createdAt}`;
  document.getElementById('shotMetaLight').textContent =
    shot.imageMetrics ? `Luz medida: ${shot.imageMetrics.summary}` : '';

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
    `X: ${shot.spot.alinaPos.x.toFixed(1)} Y: ${shot.spot.alinaPos.y.toFixed(1)} Z: ${shot.spot.alinaPos.z.toFixed(1)}`;

  alina?.placeAtSpot(shot.spot);
  syncAnimButtons(shot.anim);
  alina?.playAnimation(shot.anim);
  setLightingMode(shot.lightingMode);
  setDepthPass(shot.depthPass);

  unityBridge?.sendSpot(shot.spot.id);
  unityBridge?.sendAnimation(shot.anim);

  if (state.activeEngine === 'threejs' && shot.camera?.position && shot.camera?.target) {
    camCtrl?.flyTo(shot.camera.position, shot.camera.target);
  } else if (!shot.camera?.approximate && shot.camera?.position && shot.camera?.target) {
    unityBridge?.flyCameraTo(shot.camera.position, shot.camera.target);
  } else {
    unityBridge?.sendCameraAngle(shot.camPreset || '85mm');
  }

  updateViewportHud();
  setStatusText(`↩ <span class="text-emerald-400 font-bold">Encuadre restaurado:</span> ${shot.spot.name} (${shot.anim}).`);
}

function buildShotExportPayload(shot) {
  return {
    captured_at: shot.createdAt,
    engine: shot.engine === 'unity' ? 'Motor B: Unity 6 URP WebGL' : 'Motor A: Three.js WebGL + alina.glb',
    character: 'Alina Van Dijk',
    floor: shot.floorName,
    spot: shot.spot.name,
    animation: shot.anim,
    lighting_mode: shot.lightingMode,
    spatial_coordinates: shot.spot.alinaPos,
    camera_telemetry: shot.camera,
    framing_analysis: shot.framing,
    measured_frame_lighting: shot.imageMetrics,
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
    elevenlabs_script: document.getElementById('scriptInput').value
  };
}

function exportSelectedShotPackage() {
  const shot = getSelectedShot();
  if (!shot) return;

  const baseName = `alina_${shot.engine}_piso${shot.floor}_${shot.spot.id}_${shot.id.slice(-5)}`;
  downloadDataUrl(shot.image, `${baseName}_beauty_1080x1920.png`);

  if (shot.depthImage) {
    setTimeout(() => {
      downloadDataUrl(shot.depthImage, `${baseName}_depth_1080x1920.png`);
    }, 220);
    setTimeout(() => {
      downloadJson(buildShotExportPayload(shot), `${baseName}_higgsfield.json`);
    }, 440);
    setStatusText('✅ <span class="text-emerald-400 font-bold">Paquete de captura exportado (Beauty + Depth + JSON con tus prompts).</span>');
    return;
  }

  if (state.activeEngine === 'threejs') {
    const autoDepth = camCtrl.renderVertical916DataURL(1080, 1920, true);
    shot.depthImage = autoDepth;
    renderShotsPanel();
    setTimeout(() => {
      downloadDataUrl(autoDepth, `${baseName}_depth_1080x1920.png`);
    }, 220);
    setTimeout(() => {
      downloadJson(buildShotExportPayload(shot), `${baseName}_higgsfield.json`);
    }, 440);
    setStatusText('✅ <span class="text-emerald-400 font-bold">Paquete completo exportado (Beauty + Depth + JSON).</span>');
    return;
  }

  if (unityBridge?.ready) {
    state.pendingUnityCapture = {
      mode: 'exportDepth',
      shotId: shot.id,
      baseName
    };
    unityBridge.requestDepthScreenshot916();
    setTimeout(() => {
      downloadJson(buildShotExportPayload(shot), `${baseName}_higgsfield.json`);
    }, 450);
    setStatusText('✅ <span class="text-emerald-400 font-bold">Exportando Beauty + Depth desde Unity 6 URP + JSON...</span>');
  } else {
    setTimeout(() => {
      downloadJson(buildShotExportPayload(shot), `${baseName}_higgsfield.json`);
    }, 250);
    setStatusText('✅ <span class="text-emerald-400 font-bold">Exportado Beauty PNG + JSON de la captura.</span>');
  }
}

async function switchEngine(targetEngine) {
  if (state.activeEngine === targetEngine) return;
  state.activeEngine = targetEngine;

  const threeBox = document.getElementById('three-canvas-container');
  const unityBox = document.getElementById('unity-canvas-container');
  const btnA = document.getElementById('btn-engine-a');
  const btnB = document.getElementById('btn-engine-b');
  const badge = document.getElementById('motor-badge');

  if (targetEngine === 'threejs') {
    threeBox.classList.remove('hidden');
    unityBox.classList.add('hidden');
    btnA.className = 'px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all';
    btnB.className = 'px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all';
    badge.textContent = 'THREE.JS ACTIVE';
    badge.className = 'text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold shrink-0';
    camCtrl?.onWindowResize();
    updatePerfBadge();
    updateViewportHud();
    return;
  }

  // Motor B: Unity 6 URP WebGL (lazy load on first activation)
  threeBox.classList.add('hidden');
  unityBox.classList.remove('hidden');
  btnB.className = 'px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all';
  btnA.className = 'px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all';
  badge.textContent = 'UNITY 6 URP';
  badge.className = 'text-[10px] font-mono text-pink-300 bg-pink-500/15 px-2 py-0.5 rounded-full border border-pink-500/30 font-bold shrink-0';
  updatePerfBadge();
  updateViewportHud();
  refreshViewportLayout();

  unityBridge.pendingState = {
    floor: state.activeFloor,
    spotId: state.activeSpot.id,
    lightingMode: state.lightingMode,
    sliced: state.sliced,
    anim: state.activeAnim,
    renderPass: state.depthPass ? 'depth' : 'beauty'
  };

  try {
    await unityBridge.ensureLoaded();
    unityBridge.syncFullState(unityBridge.pendingState);
    refreshViewportLayout();
  } catch (err) {
    document.getElementById('unity-loading-text').textContent = `Error al cargar Unity WebGL: ${err.message}`;
    setStatusText(`⚠️ <span class="text-rose-400">Error Unity WebGL:</span> ${err.message}`);
  }
}

function toggleTheaterMode(forceState = null) {
  const next = forceState !== null ? forceState : !state.theaterMode;
  state.theaterMode = next;
  const wrapper = document.getElementById('viewport-wrapper');
  const btn = document.getElementById('btn-fullscreen');
  wrapper.classList.toggle('viewport-theater', next);
  btn.textContent = next ? '✕ Salir Completa' : '⛶ Completa';
  refreshViewportLayout();
}

function bindUIEvents() {
  document.getElementById('btn-engine-a').addEventListener('click', () => switchEngine('threejs'));
  document.getElementById('btn-engine-b').addEventListener('click', () => switchEngine('unity'));

  document.getElementById('btn-mode-day').addEventListener('click', () => setLightingMode('day'));
  document.getElementById('btn-mode-night').addEventListener('click', () => setLightingMode('night'));

  document.getElementById('btn-slice').addEventListener('click', () => {
    state.sliced = !state.sliced;
    syncSliceButtonUI();
    applyThreeJSSlicing();
    unityBridge?.sendDollhouseSlice(state.sliced);
  });

  // Conmutación Modo Plató 3D <-> Modo Prompts Higgsfield
  document.getElementById('btn-prompts-toggle').addEventListener('click', () => setPromptsMode(!state.promptsMode));
  document.getElementById('btn-prompts-close').addEventListener('click', () => setPromptsMode(false));

  document.getElementById('btn-ptab-captures').addEventListener('click', () => setPromptsTab('captures'));
  document.getElementById('btn-ptab-director').addEventListener('click', () => setPromptsTab('director'));

  // Botones de captura directa hacia prompts (desde el visor o desde el panel derecho)
  document.getElementById('btn-capture-to-prompt').addEventListener('click', () => captureCurrentViewportToPrompt({ withDepth: false }));
  document.getElementById('btn-capture-shot').addEventListener('click', () => captureCurrentViewportToPrompt({ withDepth: false }));
  document.getElementById('btn-capture-shot-depth').addEventListener('click', () => captureCurrentViewportToPrompt({ withDepth: true }));

  // Edición e interacción sobre la captura seleccionada (con persistencia IndexedDB)
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
  document.getElementById('btn-shot-regen').addEventListener('click', () => {
    const s = getSelectedShot();
    if (!s) return;
    regenerateShotPrompts(s);
    saveShotToDB(s);
    renderShotsPanel();
    setStatusText('↻ <span class="text-[#f29979]">Prompts regenerados desde la telemetría de la captura.</span>');
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
    setStatusText('✅ <span class="text-emerald-400 font-bold">PNG 1080×1920 de la captura descargado.</span>');
  });
  document.getElementById('btn-shot-package').addEventListener('click', exportSelectedShotPackage);
  document.getElementById('btn-shot-delete').addEventListener('click', () => {
    if (!state.selectedShotId) return;
    const deletedId = state.selectedShotId;
    state.shots = state.shots.filter((s) => s.id !== deletedId);
    state.selectedShotId = state.shots[0]?.id ?? null;
    deleteShotFromDB(deletedId);
    updateShotsBadge();
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

  // Modal de Arquitectura & Motor (5 pestañas)
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
    document.getElementById('btn-guide-916').textContent = state.guide916 ? '📱 Guía 9:16: ON' : '📱 Guía 9:16: OFF';
  });

  document.getElementById('btn-beauty-pass').addEventListener('click', () => setDepthPass(false));
  document.getElementById('btn-depth-pass').addEventListener('click', () => setDepthPass(true));

  document.querySelectorAll('.cam-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => setCameraPreset(btn.dataset.cam));
  });

  document.querySelectorAll('.anim-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const animName = btn.dataset.anim;
      syncAnimButtons(animName);
      alina?.playAnimation(animName);
      unityBridge?.sendAnimation(animName);
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

  document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('fluxPromptBox').textContent);
    const btn = document.getElementById('copyBtn');
    btn.textContent = '¡Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar'; }, 1500);
  });

  document.getElementById('btn-share').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    const btn = document.getElementById('btn-share');
    btn.innerHTML = '<span>¡Enlace Copiado!</span>';
    setTimeout(() => { btn.innerHTML = '<span>Compartir Web</span>'; }, 1800);
  });

  document.getElementById('btn-export-png').addEventListener('click', () => {
    if (state.activeEngine === 'threejs') {
      const url = camCtrl.renderVertical916DataURL(1080, 1920, state.depthPass);
      const tag = state.depthPass ? 'depth' : 'beauty';
      downloadDataUrl(url, `alina_9x16_piso${state.activeFloor}_${state.activeSpot.id}_${tag}.png`);
      setStatusText(`✅ <span class="text-emerald-400 font-bold">Frame 1080×1920 (${tag}) exportado.</span>`);
    } else if (state.depthPass) {
      unityBridge.requestDepthScreenshot916();
      setStatusText('📸 Capturando Depth Map 1080×1920 desde Unity 6 URP...');
    } else {
      unityBridge.requestScreenshot916();
      setStatusText('📸 Capturando 1080×1920 desde Unity 6 URP...');
    }
  });

  document.getElementById('btn-export-json').addEventListener('click', () => {
    downloadJson(buildHiggsfieldPayload(), `alina_higgsfield_piso${state.activeFloor}_${state.activeSpot.id}.json`);
    setStatusText('✅ <span class="text-amber-300 font-bold">JSON técnico de cámara Higgsfield descargado.</span>');
  });

  document.getElementById('btn-export-package').addEventListener('click', () => {
    const baseName = `alina_piso${state.activeFloor}_${state.activeSpot.id}`;
    if (state.activeEngine === 'threejs') {
      const beautyUrl = camCtrl.renderVertical916DataURL(1080, 1920, false);
      downloadDataUrl(beautyUrl, `${baseName}_beauty_1080x1920.png`);
      setTimeout(() => {
        const depthUrl = camCtrl.renderVertical916DataURL(1080, 1920, true);
        downloadDataUrl(depthUrl, `${baseName}_depth_1080x1920.png`);
      }, 220);
      setTimeout(() => {
        downloadJson(buildHiggsfieldPayload(), `${baseName}_higgsfield.json`);
      }, 440);
      setStatusText('✅ <span class="text-emerald-400 font-bold">Paquete 9:16 completo exportado (Beauty + Depth + JSON).</span>');
    } else {
      unityBridge.requestScreenshot916();
      setTimeout(() => {
        unityBridge.requestDepthScreenshot916();
      }, 300);
      setTimeout(() => {
        downloadJson(buildHiggsfieldPayload(), `${baseName}_unity_higgsfield.json`);
      }, 600);
      setStatusText('✅ <span class="text-emerald-400 font-bold">Paquete Unity 9:16 exportado (Beauty + Depth + JSON).</span>');
    }
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

  unityBridge = new UnityWebGLBridge(
    document.getElementById('unity-canvas'),
    (pct) => {
      document.getElementById('unity-progress-bar').style.width = `${pct}%`;
      document.getElementById('unity-loading-text').textContent = `Cargando runtime Unity 6 URP... ${pct}%`;
    },
    (loadMs) => {
      if (loadMs != null) state.unityLoadMs = loadMs;
      document.getElementById('unity-loading-overlay').classList.add('hidden');
      unityBridge.requestCameraTelemetry();
      updatePerfBadge();
      updateViewportHud();
    },
    async (base64Png) => {
      const dataUrl = `data:image/png;base64,${base64Png}`;
      if (state.pendingUnityCapture?.mode === 'create') {
        const wantDepth = state.pendingUnityCapture.withDepth;
        state.pendingUnityCapture = null;
        await createShotFromCapture(dataUrl, null);
        if (wantDepth && state.selectedShotId) {
          state.pendingUnityCapture = { mode: 'attachDepth', shotId: state.selectedShotId };
          setTimeout(() => unityBridge.requestDepthScreenshot916(), 180);
        }
        return;
      }
      downloadDataUrl(dataUrl, `alina_unity_9x16_piso${state.activeFloor}_${state.activeSpot.id}_beauty.png`);
      setStatusText('✅ <span class="text-emerald-400 font-bold">Captura Unity Beauty 1080×1920 PNG descargada.</span>');
    },
    (fps) => {
      state.unityFps = fps;
      if (state.activeEngine === 'unity') updatePerfBadge();
    },
    async (base64DepthPng) => {
      const depthUrl = `data:image/png;base64,${base64DepthPng}`;
      const pending = state.pendingUnityCapture;
      if (pending?.mode === 'create') {
        state.pendingUnityCapture = null;
        await createShotFromCapture(depthUrl, depthUrl);
        return;
      }
      if (pending?.mode === 'attachDepth') {
        state.pendingUnityCapture = null;
        const target = state.shots.find((s) => s.id === pending.shotId);
        if (target) {
          target.depthImage = depthUrl;
          regenerateShotPrompts(target, { onlyFluxIfClean: true });
          saveShotToDB(target);
          renderShotsPanel();
          setStatusText('✅ <span class="text-emerald-400 font-bold">Depth Map Unity 1080×1920 adjuntado a la captura.</span>');
        }
        return;
      }
      if (pending?.mode === 'exportDepth') {
        state.pendingUnityCapture = null;
        const target = state.shots.find((s) => s.id === pending.shotId);
        if (target) {
          target.depthImage = depthUrl;
          saveShotToDB(target);
          renderShotsPanel();
        }
        downloadDataUrl(depthUrl, `${pending.baseName}_depth_1080x1920.png`);
        return;
      }
      downloadDataUrl(depthUrl, `alina_unity_9x16_piso${state.activeFloor}_${state.activeSpot.id}_depth.png`);
      setStatusText('✅ <span class="text-emerald-400 font-bold">Captura Unity Depth Map 1080×1920 PNG descargada.</span>');
    }
  );

  cinema = new CinemaDirector({
    scene, renderer, lighting, camCtrl, alina, unityBridge,
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

  // Restaurar capturas y prompts guardados en IndexedDB de sesiones anteriores
  loadShotsFromDB(findSpotById).then((savedShots) => {
    if (savedShots.length > 0 && state.shots.length === 0) {
      state.shots = savedShots;
      state.selectedShotId = savedShots[0].id;
      updateShotsBadge();
      renderShotsPanel();
    }
  });

  // Immediately render Floor 2 UI + spots so pills never wait on network
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

    if (state.activeEngine === 'threejs') {
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
