import * as THREE from 'three';
import { FLOOR_HEIGHT, SANCTUARY_FLOORS } from './data/sanctuaryData.js';
import { SkyAndLightingController } from './engine/skyAndLighting.js';
import { buildSanctuaryArchitecture } from './engine/buildingBuilder.js';
import { AlinaAvatarController } from './engine/alinaLoader.js';
import { CameraAndExportController } from './engine/cameraAndExport.js';
import { UnityWebGLBridge } from './engine/unityBridge.js';
import { CinemaDirector } from './engine/cinemaDirector.js';
import { mountCinemaPanel } from './engine/cinemaUI.js';

const state = {
  activeEngine: 'threejs', // 'threejs' | 'unity'
  activeFloor: 2,
  activeSpot: SANCTUARY_FLOORS[2].spots[0],
  activeAnim: 'Idle',
  lightingMode: 'night',
  sliced: true,
  depthPass: false,
  guide916: false,
  theaterMode: false,
  motionEngine: 'liveportrait',
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
  document.getElementById('renderStatus').innerHTML = html;
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
  container.innerHTML = '';

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
  }
}

function updateFloorCardStyles() {
  for (let i = 0; i <= 4; i++) {
    const el = document.getElementById(`floor-card-${i}`);
    if (!el) continue;
    el.className = i === state.activeFloor
      ? 'floor-card cursor-pointer p-2.5 rounded-xl border border-[#c86446]/70 bg-[#c86446]/12 copper-glow transition-all'
      : 'floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all';
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
      ? 'anim-btn py-1.5 px-1 rounded-lg border border-[#c86446] bg-[#c86446]/25 text-white font-semibold'
      : 'anim-btn py-1.5 px-1 rounded-lg border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10';
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
    : { source: 'Unity6_URP_WebGL', spot: state.activeSpot.id };

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
  updatePerfBadge();
  updateViewportHud();

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
  requestAnimationFrame(() => camCtrl?.onWindowResize());
  setTimeout(() => camCtrl?.onWindowResize(), 120);
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

  document.getElementById('btn-dollhouse').addEventListener('click', () => setCameraPreset('dollhouse'));
  document.getElementById('btn-overview').addEventListener('click', () => setCameraPreset('overview'));
  document.getElementById('btn-fullscreen').addEventListener('click', () => toggleTheaterMode());
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.theaterMode) toggleTheaterMode(false);
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
      document.querySelectorAll('.motion-btn').forEach((b) => {
        const active = b.dataset.motion === state.motionEngine;
        b.className = active
          ? 'motion-btn p-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-left'
          : 'motion-btn p-2 rounded-xl border border-white/5 bg-black/40 text-left hover:bg-white/5';
        b.querySelector('div').className = active
          ? 'font-bold text-emerald-400 text-[11px]'
          : 'font-bold text-white text-[11px]';
      });
    });
  });

  document.getElementById('motionSlider').addEventListener('input', (e) => {
    document.getElementById('motionVal').textContent = e.target.value;
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
  renderer.setSize(container.clientWidth || 720, container.clientHeight || 460, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  lighting = new SkyAndLightingController(scene, renderer);
  arch = buildSanctuaryArchitecture(scene, lighting);
  camCtrl = new CameraAndExportController(container, scene, renderer, lighting);
  alina = new AlinaAvatarController(scene);

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

  unityBridge = new UnityWebGLBridge(
    document.getElementById('unity-canvas'),
    (pct) => {
      document.getElementById('unity-progress-bar').style.width = `${pct}%`;
      document.getElementById('unity-loading-text').textContent = `Cargando runtime Unity 6 URP... ${pct}%`;
    },
    (loadMs) => {
      if (loadMs != null) state.unityLoadMs = loadMs;
      document.getElementById('unity-loading-overlay').classList.add('hidden');
      updatePerfBadge();
      updateViewportHud();
    },
    (base64Png) => {
      downloadDataUrl(`data:image/png;base64,${base64Png}`, `alina_unity_9x16_piso${state.activeFloor}_${state.activeSpot.id}_beauty.png`);
      setStatusText('✅ <span class="text-emerald-400 font-bold">Captura Unity Beauty 1080×1920 PNG descargada.</span>');
    },
    (fps) => {
      state.unityFps = fps;
      if (state.activeEngine === 'unity') updatePerfBadge();
    },
    (base64DepthPng) => {
      downloadDataUrl(`data:image/png;base64,${base64DepthPng}`, `alina_unity_9x16_piso${state.activeFloor}_${state.activeSpot.id}_depth.png`);
      setStatusText('✅ <span class="text-emerald-400 font-bold">Captura Unity Depth Map 1080×1920 PNG descargada.</span>');
    }
  );

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
