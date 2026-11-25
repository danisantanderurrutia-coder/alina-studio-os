import * as S from './cinematographySolver.js';
import * as HF from './higgsfieldAdapter.js';
import { buildZipBlob } from './zipWriter.js';
import { catalog } from './cinemaDirector.js';
import sampleScenes from '../data/sampleScenes.json';

const ix = S.indexCatalog(catalog);
const LENSES = [24, 28, 35, 40, 50, 85, 100];
const FOCUS_MODES = {
  iris_lock: 'Iris (lock)',
  macro_prop_lock: 'Prop macro (lock)',
  rack_prop_to_iris: 'Rack prop → iris',
  mirror_reflection_plane: 'Plano del espejo'
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const opt = (v, label, sel) => `<option value="${esc(v)}" ${sel ? 'selected' : ''}>${esc(label)}</option>`;

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2500);
}

/**
 * Panel DOM del Director de Fotografía + Higgsfield Cinema Studio Adapter + Exportador Shot Pack (.zip).
 */
export function mountCinemaPanel(root, ctx) {
  const { director: dir } = ctx;
  const ui = {
    directorId: 'fincher_cronenweth',
    shotTypeId: 'mcu_interview',
    moveId: 'slow_dolly_push_in',
    lightId: 'fincher_top_soft_negfill',
    lens: 85,
    aperture: 1.4,
    role: 'A',
    focusOverride: 'auto',
    scene: null,
    sceneKey: 'auto',
    recording: null,
    playingScene: false,
    sceneAbort: false,
    foregroundFraming: false,
    foregroundPropId: null,
    lastManifest: null
  };

  root.innerHTML = `
  <div class="bg-[#12141a] border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3" id="cinema-card">
    <div class="flex items-center justify-between pb-2 border-b border-white/5">
      <h2 class="text-xs font-bold tracking-wider uppercase text-slate-200">🎬 Director & Higgsfield Pack</h2>
      <div class="flex items-center gap-1.5">
        <span id="cin-zw" class="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-slate-400">—</span>
        <button id="cin-exit" class="hidden text-[10px] font-mono px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10">✕ Salir</button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 text-[11px]">
      <label class="space-y-1"><span class="text-slate-400">Director</span>
        <select id="cin-dir" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${catalog.directorStyles.map((d) => opt(d.id, d.name.split('—')[0].trim(), d.id === ui.directorId)).join('')}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Toma / Encuadre</span>
        <select id="cin-shot" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${catalog.shotTypes.map((s) => opt(s.id, s.label.split('(')[0].trim(), s.id === ui.shotTypeId)).join('')}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Desplazamiento</span>
        <select id="cin-move" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${catalog.cameraMoves.map((m) => opt(m.id, m.label.split('(')[0].trim(), m.id === ui.moveId)).join('')}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Iluminación</span>
        <select id="cin-light" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${catalog.lightingSchemes.map((l) => opt(l.id, l.label.split('(')[0].trim(), l.id === ui.lightId)).join('')}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Lente (Gate 35mm)</span>
        <select id="cin-lens" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${LENSES.map((l) => opt(l, `${l} mm`, l === ui.lens)).join('')}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Rol / Foco</span>
        <div class="grid grid-cols-2 gap-1">
          <select id="cin-role" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">
            <option value="A">A-Roll</option><option value="B0">B-Roll 1</option><option value="B1">B-Roll 2</option></select>
          <select id="cin-focus" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white" title="Modo de enfoque óptico">
            <option value="auto">Foco Auto</option>
            <option value="iris_lock">Iris Lock</option>
            <option value="rack_prop_to_iris">Rack Focus</option>
            <option value="mirror_reflection_plane">Espejo</option>
          </select>
        </div>
      </label>
    </div>

    <!-- Foreground Framing (Bokeh f/1.4) -->
    <div class="flex items-center justify-between px-2.5 py-1.5 bg-black/35 rounded-lg border border-white/10 text-[11px]">
      <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="checkbox" id="cin-fg-toggle" class="accent-[#c86446] rounded cursor-pointer">
        <span class="text-slate-200 font-medium">🌿 Primer Término (Bokeh CoC f/1.4)</span>
      </label>
      <select id="cin-fg-prop" class="hidden bg-black/60 border border-white/15 rounded px-1.5 py-0.5 text-[10px] text-slate-200 font-mono">
        <option value="auto">Auto (por spot)</option>
        <option value="monstera_leaf">Hoja Monstera</option>
        <option value="crystal_glass">Copa Cristal</option>
        <option value="vintage_microphone">Micrófono</option>
        <option value="perfume_bottle">Perfume Latón</option>
      </select>
    </div>

    <div class="grid grid-cols-3 gap-1.5 text-[11px]">
      <button id="cin-recipe" class="py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10" title="Carga la receta recomendada para el spot activo">🎯 Receta spot</button>
      <button id="cin-apply" class="py-1.5 rounded-lg bg-[#c86446]/80 hover:bg-[#c86446] text-white font-semibold">📐 Aplicar</button>
      <button id="cin-play" class="py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">▶ Mover</button>
    </div>

    <div id="cin-readout" class="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] font-mono text-slate-400 bg-black/40 rounded-lg p-2 border border-white/5"></div>
    <div id="cin-warn" class="hidden text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2"></div>

    <!-- Tarjeta Determinista Higgsfield Cinema Studio 4.0 -->
    <div class="p-2.5 bg-gradient-to-br from-[#191c26] to-[#0f1117] border border-[#c86446]/35 rounded-xl space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[10px] uppercase tracking-wider font-bold text-[#f29979]">🎥 Higgsfield Cinema Studio Preset</span>
        <span id="cin-hf-mode" class="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-300">START ONLY</span>
      </div>
      <div id="cin-hf-specs" class="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] font-mono text-slate-300"></div>
      <div id="cin-hf-note" class="text-[9.5px] text-slate-400 leading-snug bg-black/40 rounded-lg px-2 py-1 border border-white/5"></div>
    </div>

    <div class="space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold">1. Render-to-Real Prompt (Flux.1 Dev + CN)</span>
        <button id="cin-copy-flux" class="text-[10px] text-[#f29979] hover:text-white font-mono">Copiar</button>
      </div>
      <div id="cin-flux" class="p-2 bg-black/60 border border-white/5 rounded-lg text-slate-300 text-[10px] font-mono leading-relaxed max-h-16 overflow-y-auto select-all"></div>

      <div class="flex items-center justify-between">
        <span class="text-[10px] uppercase tracking-wider text-amber-300 font-semibold">2. Higgsfield Structured Delta Prompt (I2V)</span>
        <button id="cin-copy-motion" class="text-[10px] text-[#f29979] hover:text-white font-mono">Copiar</button>
      </div>
      <div id="cin-motion" class="p-2 bg-black/60 border border-white/5 rounded-lg text-amber-100/95 text-[10px] font-mono leading-relaxed max-h-24 overflow-y-auto select-all"></div>
    </div>

    <button id="cin-export-pack" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#c86446] to-[#9a3412] hover:opacity-95 text-white text-xs font-bold shadow-lg copper-glow flex items-center justify-center gap-1.5">
      <span>📦 Exportar Shot Pack Higgsfield (.zip)</span>
    </button>

    <div class="pt-2 border-t border-white/5 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-[10px] uppercase tracking-wider text-slate-300 font-bold">🎞️ Maqueta de escena (Storyboard 1:2)</span>
        <span id="cin-scene-badge" class="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-slate-400">—</span>
      </div>
      <select id="cin-scene" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white text-[11px]"></select>
      <div id="cin-chips" class="flex flex-wrap gap-1"></div>
      <div class="grid grid-cols-3 gap-1.5 text-[11px]">
        <button id="cin-scene-play" class="py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">▶ Escena</button>
        <button id="cin-scene-rec" class="py-1.5 rounded-lg bg-rose-600/80 hover:bg-rose-500 text-white font-semibold">⏺ Animatic</button>
        <button id="cin-scene-pack" class="py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-100 border border-white/15 font-semibold" title="Exporta todos los planos de la escena en un único ZIP">📦 Escena ZIP</button>
      </div>
    </div>
  </div>`;

  const $ = (id) => root.querySelector('#' + id);
  const hud = document.createElement('div');
  hud.id = 'cinema-hud';
  hud.className = 'hidden absolute top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center';
  hud.innerHTML = `<div class="bg-black/80 backdrop-blur-md border border-white/15 rounded-lg px-3 py-1.5 text-[10px] font-mono text-slate-200 shadow-xl">
      <div id="cin-hud-title" class="font-bold text-[#f29979]"></div><div id="cin-hud-sub" class="text-slate-400"></div>
      <div class="h-1 mt-1 bg-white/10 rounded overflow-hidden"><div id="cin-hud-bar" class="h-full bg-emerald-400" style="width:0%"></div></div></div>`;
  document.getElementById('viewport-wrapper')?.appendChild(hud);
  const hudShow = (on) => hud.classList.toggle('hidden', !on);

  const roleToShot = () => ({
    role: ui.role === 'A' ? 'A-Roll' : 'B-Roll',
    brollIndex: ui.role === 'A' ? 0 : Number(ui.role[1])
  });

  function currentShot() {
    const spot = ctx.getActiveSpot();
    const mv = ix.moves.get(ui.moveId);
    const st = ix.shotTypes.get(ui.shotTypeId);
    const meta = catalog.spotCinematographyMap[spot.id];
    const { role, brollIndex } = roleToShot();
    const isMirror = st.id === 'ots_mirror' && Boolean(meta?.specialFlags?.mirrorShot);

    let focusMode = isMirror
      ? 'mirror_reflection_plane'
      : mv.id === 'rack_focus_macro_to_eyes'
        ? 'rack_prop_to_iris'
        : role === 'B-Roll'
          ? 'macro_prop_lock'
          : 'iris_lock';
    if (ui.focusOverride !== 'auto') focusMode = ui.focusOverride;

    const sh = {
      shotId: `manual_${spot.id}_${role === 'A-Roll' ? 'a' : 'b' + brollIndex}`,
      spotId: spot.id,
      shotRole: role,
      brollIndex,
      directorStyleId: ui.directorId,
      shotTypeId: ui.shotTypeId,
      cameraMoveId: ui.moveId,
      lightingSchemeId: ui.lightId,
      focalLengthMm: ui.lens,
      apertureFStop: ui.aperture,
      durationSec: Math.min(4, mv.recommendedDurationSec),
      animation: ctx.getAnim?.() || spot.defaultAnim || 'Idle',
      focusMode,
      mirrorShot: isMirror,
      motionStrength: mv.recommendedMotionStrength,
      foregroundFraming: Boolean(ui.foregroundFraming || focusMode === 'rack_prop_to_iris'),
      foregroundPropId: ui.foregroundPropId || undefined
    };
    if (isMirror) sh.controlNetOverrides = { depthWeight: meta.specialFlags.controlNetDepthWeightOverride ?? 0.35 };
    return sh;
  }

  function syncSelectors() {
    $('cin-dir').value = ui.directorId;
    $('cin-shot').value = ui.shotTypeId;
    $('cin-move').value = ui.moveId;
    $('cin-light').value = ui.lightId;
    $('cin-lens').value = String(ui.lens);
    $('cin-role').value = ui.role;
    $('cin-focus').value = ui.focusOverride;
    $('cin-fg-toggle').checked = Boolean(ui.foregroundFraming);
    $('cin-fg-prop').classList.toggle('hidden', !ui.foregroundFraming);
    if (ui.foregroundPropId) $('cin-fg-prop').value = ui.foregroundPropId;
  }

  function readout(p, shot) {
    const spot = ctx.getSpot(shot.spotId) || ctx.getActiveSpot();
    const manifest = HF.buildHiggsfieldManifest({ shot, spot, payload: p, catalog, sceneId: ui.sceneKey });
    ui.lastManifest = manifest;

    const li = ix.lights.get(shot.lightingSchemeId);
    const zw = p.zeroWaste;
    $('cin-readout').innerHTML = [
      ['vFOV', `${p.camera.verticalFovDeg}° (${shot.focalLengthMm}mm f/${shot.apertureFStop})`],
      ['Foco', `${p.dof.startFocusDistM}→${p.dof.endFocusDistM} m`],
      ['Depth Lock', `${p.depthBoundsM.uNear}–${p.depthBoundsM.uFar} m`],
      ['Key/Rim', `${li.realtimeKeyLight.kelvin}K / ${li.realtimeRimLight.kelvin}K · ${li.contrastRatio}`],
      ['Primer Plano', p.foregroundProp ? `🌿 ${p.foregroundProp.name}` : 'Desactivado'],
      ['Foco en', FOCUS_MODES[shot.focusMode] || shot.focusMode]
    ].map(([k, v]) => `<div><span class="text-slate-500">${k}</span> <span class="text-slate-200">${esc(v)}</span></div>`).join('');

    const badge = $('cin-zw');
    badge.textContent = zw.ok ? 'Zero-Waste ✔' : 'Zero-Waste ✖';
    badge.className = `text-[10px] font-mono px-2 py-0.5 rounded-full border ${zw.ok ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' : 'text-rose-300 border-rose-500/30 bg-rose-500/10'}`;
    const w = [...zw.issues, ...p.warnings];
    $('cin-warn').classList.toggle('hidden', w.length === 0);
    $('cin-warn').innerHTML = w.map((x) => '⚠ ' + esc(x)).join('<br>');

    // Higgsfield Cinema Studio Card
    const hf = manifest.higgsfieldCinemaStudio;
    const kf = manifest.keyframeStrategy;
    const modeBadge = $('cin-hf-mode');
    modeBadge.textContent = kf.mode === 'START_END' ? 'START + END (LOCKED)' : 'START ONLY + MOVESET';
    modeBadge.className = kf.mode === 'START_END'
      ? 'text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
      : 'text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-amber-500/40 bg-amber-500/15 text-amber-300';

    $('cin-hf-specs').innerHTML = [
      ['Body', hf.cameraLabel],
      ['Glass', hf.lensLabel],
      ['Optics', `${hf.focalLength} · ${hf.aperture}`],
      ['Move', `${hf.uiPresetLabel.split('[')[0].trim()} (${Math.round(hf.motionIntensity * 100)}%)`]
    ].map(([k, v]) => `<div class="truncate" title="${esc(v)}"><span class="text-slate-500">${k}:</span> <span class="text-white">${esc(v)}</span></div>`).join('');

    $('cin-hf-note').textContent = `💡 ${kf.reason}`;

    $('cin-flux').textContent = p.prompts.fluxClean || p.prompts.flux;
    $('cin-motion').textContent = manifest.structuredPrompt.compiled;
  }

  function apply(shot, silent) {
    const p = dir.apply(shot, '9:16');
    $('cin-exit').classList.remove('hidden');
    readout(p, shot);
    if (!silent) {
      ctx.setStatus(
        `🎬 <span class="text-emerald-400 font-bold">${esc(ix.directors.get(shot.directorStyleId).name.split('—')[0].trim())}</span> · ${esc(ix.shotTypes.get(shot.shotTypeId).label.split('(')[0].trim())} · ${shot.focalLengthMm}mm`
      );
    }
    return p;
  }

  function hudFor(shot, extra = '') {
    $('cin-hud-title').textContent = `${shot.shotRole} · ${ix.shotTypes.get(shot.shotTypeId).label.split('(')[0].trim()}`;
    $('cin-hud-sub').textContent = `${ix.directors.get(shot.directorStyleId).name.split('—')[0].trim()} · ${shot.focalLengthMm}mm f/${shot.apertureFStop} · ${ix.moves.get(shot.cameraMoveId).label.split('(')[0].trim()}${extra}`;
  }
  dir.onFrameHud = ({ t }) => { $('cin-hud-bar').style.width = `${Math.round(t * 100)}%`; };

  // ---------- captura determinista de pases 3D para un plano ----------
  function captureShotPackEntries(shot, prefix = '') {
    const spot = ctx.getSpot(shot.spotId) || ctx.getActiveSpot();
    const p = dir.apply(shot, '9:16');
    const manifest = HF.buildHiggsfieldManifest({ shot, spot, payload: p, catalog, sceneId: ui.sceneKey });
    const overscan = manifest.keyframeStrategy.overscanHandheldPost;
    const w = overscan?.enabled ? overscan.renderResolution.width : 1080;
    const h = overscan?.enabled ? overscan.renderResolution.height : 1920;

    const entries = [];
    const alinaRoot = dir.alina?.root || null;

    const captureAtNormalizedT = (tNorm, tag) => {
      dir.seekNormalized(tNorm, { cleanKeyframe: true });
      const focusDistM = tNorm === 0 ? p.dof.startFocusDistM : p.dof.endFocusDistM;
      const dofSpec = {
        enabled: true,
        focalLengthMm: shot.focalLengthMm,
        apertureFStop: shot.apertureFStop,
        focusDistM,
        sensorHeightMm: 36.0
      };

      entries.push({
        path: `${prefix}frames_3d_raw/${tag}_beauty_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'beauty', { dof: dofSpec })
      });
      entries.push({
        path: `${prefix}frames_3d_raw/${tag}_depth_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'depth', { depthBoundsM: p.depthBoundsM })
      });
      entries.push({
        path: `${prefix}frames_3d_raw/${tag}_normals_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'normals')
      });
      entries.push({
        path: `${prefix}frames_3d_raw/${tag}_mask_1080x1920.png`,
        data: ctx.camCtrl.renderVertical916DataURL(w, h, 'mask')
      });

      if (shot.shotRole === 'A-Roll') {
        const op = ctx.camCtrl.renderOpenPose916(w, h, alinaRoot);
        entries.push({ path: `${prefix}frames_3d_raw/${tag}_openpose_1080x1920.png`, data: op.dataUrl });
        entries.push({ path: `${prefix}frames_3d_raw/${tag}_openpose.json`, data: op.keypoints });
      }
    };

    captureAtNormalizedT(0, 'start');
    if (manifest.keyframeStrategy.exportEndFrame) {
      captureAtNormalizedT(1, 'end');
      dir.seekNormalized(0, { cleanKeyframe: true });
    }

    entries.push({ path: `${prefix}higgsfield_manifest.json`, data: manifest });
    entries.push({ path: `${prefix}comfy_render2real_job.json`, data: manifest.renderToRealComfyJob });
    entries.push({
      path: `${prefix}HIGGSFIELD_QUICK_CARD.txt`,
      data: [
        `=== ALINA STUDIO OS -> HIGGSFIELD CINEMA STUDIO 4.0 ===`,
        `Shot ID:         ${manifest.shotId} (${manifest.shotRole})`,
        `Spot:            ${manifest.spotName}`,
        `Keyframe Mode:   ${manifest.keyframeStrategy.mode}`,
        `Reason:          ${manifest.keyframeStrategy.reason}`,
        `Camera Body:     ${manifest.higgsfieldCinemaStudio.cameraLabel} (${manifest.higgsfieldCinemaStudio.cameraProfile})`,
        `Cinema Glass:    ${manifest.higgsfieldCinemaStudio.lensLabel} (${manifest.higgsfieldCinemaStudio.lensProfile})`,
        `Focal / f-Stop:  ${manifest.higgsfieldCinemaStudio.focalLength} ${manifest.higgsfieldCinemaStudio.aperture}`,
        `Move Preset:     ${manifest.higgsfieldCinemaStudio.uiPresetLabel}`,
        `Speed / Motion:  ${manifest.higgsfieldCinemaStudio.speedRamp} | Intensity=${manifest.higgsfieldCinemaStudio.motionIntensity}`,
        `Editorial Trim:  ${manifest.higgsfieldCinemaStudio.editorialTrimSec}s (gen ${manifest.higgsfieldCinemaStudio.durationGenerateSec}s)`,
        ``,
        `--- 1) RENDER-TO-REAL PROMPT (ComfyUI Flux.1 Dev) ---`,
        p.prompts.fluxClean || p.prompts.flux,
        ``,
        `--- 2) HIGGSFIELD STRUCTURED DELTA PROMPT ---`,
        manifest.structuredPrompt.compiled,
        ``,
        `--- NEGATIVE GUARDRAILS ---`,
        manifest.structuredPrompt.negativeGuardrails
      ].join('\n')
    });

    return { entries, manifest };
  }

  // ---------- eventos ----------
  $('cin-dir').onchange = (e) => {
    const d = ix.directors.get(e.target.value);
    ui.directorId = d.id;
    ui.shotTypeId = d.preferredShotTypes[0];
    ui.moveId = d.preferredMoves[0];
    ui.lightId = d.defaultLightingSchemeId;
    ui.lens = LENSES.reduce((a, b) => (Math.abs(b - d.defaultFocalMm) < Math.abs(a - d.defaultFocalMm) ? b : a));
    ui.aperture = d.defaultAperture;
    ui.role = 'A';
    ui.focusOverride = 'auto';
    ui.foregroundFraming = d.id === 'wong_kar_wai_doyle' || d.id === 'guadagnino_mukdeeprom';
    syncSelectors();
    apply(currentShot());
  };
  $('cin-shot').onchange = (e) => {
    const st = ix.shotTypes.get(e.target.value);
    ui.shotTypeId = st.id;
    ui.lens = LENSES.reduce((a, b) => (Math.abs(b - st.defaultFocalMm) < Math.abs(a - st.defaultFocalMm) ? b : a));
    ui.aperture = st.defaultAperture;
    if (st.shotRoleDefault === 'B-Roll' && ui.role === 'A') ui.role = 'B0';
    if (st.shotRoleDefault === 'A-Roll' && ui.role !== 'A') ui.role = 'A';
    syncSelectors();
    apply(currentShot());
  };
  $('cin-move').onchange = (e) => {
    ui.moveId = e.target.value;
    if (ui.moveId === 'rack_focus_macro_to_eyes') ui.foregroundFraming = true;
    syncSelectors();
    apply(currentShot());
  };
  $('cin-light').onchange = (e) => { ui.lightId = e.target.value; apply(currentShot()); };
  $('cin-lens').onchange = (e) => { ui.lens = Number(e.target.value); apply(currentShot()); };
  $('cin-role').onchange = (e) => {
    ui.role = e.target.value;
    if (ui.role !== 'A') { ui.shotTypeId = 'macro_broll_prop'; ui.lens = 100; ui.aperture = 2.8; }
    else if (ui.shotTypeId === 'macro_broll_prop') {
      ui.shotTypeId = ix.directors.get(ui.directorId).preferredShotTypes[0];
      ui.lens = 85;
      ui.aperture = 1.4;
    }
    syncSelectors();
    apply(currentShot());
  };
  $('cin-focus').onchange = (e) => {
    ui.focusOverride = e.target.value;
    if (ui.focusOverride === 'rack_prop_to_iris') ui.foregroundFraming = true;
    syncSelectors();
    apply(currentShot());
  };
  $('cin-fg-toggle').onchange = (e) => {
    ui.foregroundFraming = e.target.checked;
    $('cin-fg-prop').classList.toggle('hidden', !ui.foregroundFraming);
    apply(currentShot());
  };
  $('cin-fg-prop').onchange = (e) => {
    ui.foregroundPropId = e.target.value === 'auto' ? null : e.target.value;
    apply(currentShot());
  };
  $('cin-recipe').onclick = () => { loadRecipe(); apply(currentShot()); };
  $('cin-apply').onclick = () => apply(currentShot());
  $('cin-play').onclick = () => {
    const shot = currentShot();
    apply(shot, true);
    hudFor(shot);
    hudShow(true);
    dir.play(() => setTimeout(() => hudShow(false), 600));
  };
  $('cin-exit').onclick = () => {
    dir.exit();
    hudShow(false);
    $('cin-exit').classList.add('hidden');
    $('cin-zw').textContent = '—';
    ctx.setStatus('Modo cine desactivado.');
  };
  $('cin-copy-flux').onclick = () => {
    navigator.clipboard.writeText($('cin-flux').textContent);
    $('cin-copy-flux').textContent = '¡Copiado!';
    setTimeout(() => { $('cin-copy-flux').textContent = 'Copiar'; }, 1200);
  };
  $('cin-copy-motion').onclick = () => {
    navigator.clipboard.writeText($('cin-motion').textContent);
    $('cin-copy-motion').textContent = '¡Copiado!';
    setTimeout(() => { $('cin-copy-motion').textContent = 'Copiar'; }, 1200);
  };

  $('cin-export-pack').onclick = async () => {
    const btn = $('cin-export-pack');
    const prevTxt = btn.innerHTML;
    btn.innerHTML = '<span>⏳ Empaquetando Multipass + Bokeh CoC...</span>';
    await new Promise((r) => setTimeout(r, 30));
    try {
      const shot = dir.active && dir.shot ? dir.shot : currentShot();
      const { entries, manifest } = captureShotPackEntries(shot, '');
      const zipBlob = await buildZipBlob(entries);
      const fname = `shotpack_${shot.spotId}_${shot.shotId}.zip`;
      downloadBlob(zipBlob, fname);
      readout(dir.payload, shot);
      ctx.setStatus(
        `✅ <span class="text-emerald-400 font-bold">Shot Pack ${esc(fname)}</span> exportado (${manifest.keyframeStrategy.mode} · ${entries.length} archivos con Bokeh CoC, Depth, Normals, Mask 7-ID y Manifest Higgsfield).`
      );
    } finally {
      btn.innerHTML = prevTxt;
    }
  };

  function loadRecipe() {
    const spot = ctx.getActiveSpot();
    const sh = S.defaultShotFor(spot.id, 'A-Roll', 0, catalog);
    ui.directorId = sh.directorStyleId;
    ui.shotTypeId = sh.shotTypeId;
    ui.moveId = sh.cameraMoveId;
    ui.lightId = sh.lightingSchemeId;
    ui.role = 'A';
    ui.focusOverride = 'auto';
    ui.foregroundFraming = sh.directorStyleId === 'wong_kar_wai_doyle' || sh.directorStyleId === 'guadagnino_mukdeeprom';
    ui.lens = LENSES.reduce((a, b) => (Math.abs(b - sh.focalLengthMm) < Math.abs(a - sh.focalLengthMm) ? b : a));
    ui.aperture = sh.apertureFStop;
    syncSelectors();
  }

  // ---------- storyboard ----------
  function autoScene() {
    const spot = ctx.getActiveSpot();
    const meta = catalog.spotCinematographyMap[spot.id];
    const a = S.defaultShotFor(spot.id, 'A-Roll', 0, catalog, { shotId: `auto_${spot.id}_a1`, durationSec: 3.5 });
    const b0 = S.defaultShotFor(spot.id, 'B-Roll', 0, catalog, { shotId: `auto_${spot.id}_b0`, durationSec: 2.5 });
    const b1 = S.defaultShotFor(spot.id, 'B-Roll', 1, catalog, { shotId: `auto_${spot.id}_b1`, durationSec: 2.5 });
    const a2 = { ...a, shotId: `auto_${spot.id}_a2`, durationSec: 3.5, cameraMoveId: 'static_breathing', motionStrength: 2.0 };
    const shots = [a, b0, b1, a2].map((s, i) => ({ ...s, order: i + 1, animation: spot.defaultAnim || 'Idle' }));
    return {
      sceneId: `auto_${spot.id}`,
      title: `Auto-maqueta 1:2 · ${spot.name}`,
      targetPlatform: 'Instagram Reels',
      aspectRatio: '9:16',
      baseLightingMode: meta.recommendedBaseMode,
      audioTrack: { provider: 'ElevenLabs', voiceId: 'Alina-Hypno-v1', durationSec: 12, scriptFull: spot.script },
      shots
    };
  }
  function allScenes() { return [autoScene(), ...sampleScenes.storyboard]; }
  function currentScene() { return allScenes().find((s) => s.sceneId === ui.sceneKey) || allScenes()[0]; }

  function renderScenePicker() {
    const sc = allScenes();
    $('cin-scene').innerHTML = sc.map((s) => opt(s.sceneId, s.title, s.sceneId === ui.sceneKey)).join('');
    if (!sc.find((s) => s.sceneId === ui.sceneKey)) ui.sceneKey = sc[0].sceneId;
    const scene = currentScene();
    ui.scene = scene;
    const aud = S.auditScene(scene, catalog);
    const b = $('cin-scene-badge');
    b.textContent = `${aud.aRoll}A:${aud.bRoll}B · ${aud.totalSec}s ${aud.ok ? '✔' : '✖'}`;
    b.className = `text-[10px] font-mono px-2 py-0.5 rounded-full border ${aud.ok ? 'text-emerald-300 border-emerald-500/30' : 'text-rose-300 border-rose-500/30'}`;
    b.title = aud.issues.join('\n');
    $('cin-chips').innerHTML = scene.shots.map((s, i) =>
      `<button data-i="${i}" class="cin-chip text-[10px] font-mono px-2 py-1 rounded-lg border ${s.shotRole === 'A-Roll' ? 'border-[#c86446]/50 text-[#f29979]' : 'border-sky-500/40 text-sky-300'} bg-black/40 hover:bg-white/10">${i + 1}·${s.shotRole === 'A-Roll' ? 'A' : 'B'} ${esc(ix.shotTypes.get(s.shotTypeId).id.replace('_', ' ').slice(0, 10))} ${s.durationSec}s</button>`
    ).join('');
    root.querySelectorAll('.cin-chip').forEach((c) => {
      c.onclick = () => {
        const sh = scene.shots[Number(c.dataset.i)];
        ui.directorId = sh.directorStyleId;
        ui.shotTypeId = sh.shotTypeId;
        ui.moveId = sh.cameraMoveId;
        ui.lightId = sh.lightingSchemeId;
        ui.lens = LENSES.reduce((a, b) => (Math.abs(b - sh.focalLengthMm) < Math.abs(a - sh.focalLengthMm) ? b : a));
        ui.aperture = sh.apertureFStop;
        ui.role = sh.shotRole === 'A-Roll' ? 'A' : `B${sh.brollIndex ?? 0}`;
        ui.focusOverride = sh.focusMode || 'auto';
        ui.foregroundFraming = Boolean(sh.foregroundFraming);
        syncSelectors();
        apply(sh);
      };
    });
  }
  $('cin-scene').onchange = (e) => { ui.sceneKey = e.target.value; renderScenePicker(); };

  async function playScene({ record = false } = {}) {
    if (ui.playingScene) { ui.sceneAbort = true; dir.stop(false); return; }
    const scene = currentScene();
    ui.playingScene = true;
    ui.sceneAbort = false;
    $('cin-scene-play').textContent = '■ Detener';
    let rec = null;
    if (record) rec = startRecording();
    hudShow(true);
    for (let i = 0; i < scene.shots.length && !ui.sceneAbort; i++) {
      const sh = scene.shots[i];
      const spot = ctx.getSpot(sh.spotId);
      if (spot) ctx.setActiveSpot?.(sh.spotId);
      apply(sh, true);
      hudFor(sh, ` · plano ${i + 1}/${scene.shots.length}`);
      await new Promise((res) => {
        dir.play(res);
        const guard = setInterval(() => {
          if (ui.sceneAbort || !dir.playing) { clearInterval(guard); res(); }
        }, 120);
      });
    }
    if (rec) await stopRecording(rec, scene.sceneId);
    ui.playingScene = false;
    ui.sceneAbort = false;
    $('cin-scene-play').textContent = '▶ Escena';
    setTimeout(() => hudShow(false), 500);
  }
  $('cin-scene-play').onclick = () => playScene();
  $('cin-scene-rec').onclick = () => { if (!ui.playingScene) playScene({ record: true }); };

  $('cin-scene-pack').onclick = async () => {
    const scene = currentScene();
    const btn = $('cin-scene-pack');
    const prev = btn.textContent;
    btn.textContent = '⏳ ZIP…';
    await new Promise((r) => setTimeout(r, 30));
    try {
      const allEntries = [];
      const shotManifests = [];
      for (let i = 0; i < scene.shots.length; i++) {
        const sh = scene.shots[i];
        const folder = `${String(i + 1).padStart(2, '0')}_${sh.shotId}/`;
        const { entries, manifest } = captureShotPackEntries(sh, folder);
        allEntries.push(...entries);
        shotManifests.push(manifest);
      }
      allEntries.push({
        path: 'scene_storyboard_manifest.json',
        data: {
          sceneId: scene.sceneId,
          title: scene.title,
          aspectRatio: scene.aspectRatio,
          audioTrack: scene.audioTrack,
          zeroWasteSceneAudit: S.auditScene(scene, catalog),
          shots: shotManifests
        }
      });
      const blob = await buildZipBlob(allEntries);
      downloadBlob(blob, `storyboard_pack_${scene.sceneId}.zip`);
      ctx.setStatus(
        `✅ <span class="text-emerald-400 font-bold">Storyboard Pack (${scene.shots.length} planos · ${allEntries.length} archivos)</span> descargado en .zip.`
      );
    } finally {
      btn.textContent = prev;
    }
  };

  // ---------- grabación animatic (recorte central 9:16 del canvas) ----------
  function startRecording() {
    const src = ctx.renderer.domElement;
    const out = document.createElement('canvas');
    out.width = 720;
    out.height = 1280;
    const c2 = out.getContext('2d');
    let raf = 0;
    const draw = () => {
      const sh = src.height;
      const sw = (sh * 9) / 16;
      const sx = (src.width - sw) / 2;
      c2.drawImage(src, sx, 0, sw, sh, 0, 0, out.width, out.height);
      raf = requestAnimationFrame(draw);
    };
    draw();
    const mime = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((m) => MediaRecorder.isTypeSupported(m));
    const mr = new MediaRecorder(out.captureStream(30), { mimeType: mime, videoBitsPerSecond: 6_000_000 });
    const chunks = [];
    mr.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    mr.start(250);
    $('cin-scene-rec').textContent = '● Grabando…';
    return { mr, chunks, stopDraw: () => cancelAnimationFrame(raf) };
  }
  function stopRecording(rec, name) {
    return new Promise((res) => {
      rec.mr.onstop = () => {
        rec.stopDraw();
        const blob = new Blob(rec.chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        ctx.download.dataUrl(url, `animatic_${name}_720x1280.webm`);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        $('cin-scene-rec').textContent = '⏺ Animatic';
        ctx.setStatus(`✅ <span class="text-emerald-400 font-bold">Animatic ${esc(name)} (.webm 9:16)</span> descargado.`);
        res();
      };
      rec.mr.stop();
    });
  }

  loadRecipe();
  renderScenePicker();
  return {
    onSpotChanged() {
      if (!ui.playingScene) {
        loadRecipe();
        renderScenePicker();
        if (dir.active) apply(currentShot(), true);
      }
    },
    onModeChanged() {
      if (dir.active && dir.shot) {
        dir._saved = null;
        apply(dir.shot, true);
      }
    },
    isPlayingScene: () => ui.playingScene
  };
}
