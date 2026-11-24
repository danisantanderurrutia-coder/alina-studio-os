import * as THREE from 'three';
import * as S from './cinematographySolver.js';
import catalog from '../data/cinematographyCatalog.json';
import { FLOOR_HEIGHT, BUILDING_WIDTH, BUILDING_DEPTH, BUILDING_CENTER_Z } from '../data/sanctuaryData.js';

/** Convierte la intensidad "Unity-like" del catálogo a candelas de Three (física r155+). */
const THREE_INTENSITY_SCALE = 5.0;
const BUILDING = { floorHeight: FLOOR_HEIGHT, width: BUILDING_WIDTH, depth: BUILDING_DEPTH, centerZ: BUILDING_CENTER_Z };

export { catalog };

/**
 * Motor A (Three.js) del Director de Fotografía.
 * Aplica un CinemaShotPayload: pose de cámara, FOV real por focal, rig de luz Realtime (key+rim),
 * grade (exposición/entorno/ambiente/niebla) y movimiento A→B con easing + handheld.
 * No toca luces del edificio ni el modo Día/Noche (solo se suma encima y se restaura).
 */
export class CinemaDirector {
  constructor({ scene, renderer, lighting, camCtrl, alina, unityBridge, getSpot, prepareSpot, getBaseMode }) {
    Object.assign(this, { scene, renderer, lighting, camCtrl, alina, unityBridge, getSpot, prepareSpot, getBaseMode });
    this.active = false;
    this.payload = null;
    this.shot = null;
    this.playing = false;
    this.t0 = 0;
    this.onFrameHud = null;
    this.onMoveEnd = null;
    this._saved = null;

    const mk = (castShadow) => {
      const l = new THREE.SpotLight(0xffffff, 0, 30, 0, 0.6, 1.4);
      l.castShadow = castShadow;
      if (castShadow) {
        l.shadow.mapSize.set(1024, 1024);
        l.shadow.bias = -0.0004;
        l.shadow.radius = 4;
      }
      l.visible = false;
      this.scene.add(l, l.target);
      return l;
    };
    this.keyLight = mk(true);
    this.rimLight = mk(false);

    // El usuario toma el control → cancelar movimiento.
    camCtrl.controls.addEventListener('start', () => { if (this.playing) this.stop(false); });
  }

  // ---------- estado base ----------
  _saveBase() {
    if (this._saved) return;
    const L = this.lighting;
    this._saved = {
      exposure: this.renderer.toneMappingExposure,
      envIntensity: this.scene.environmentIntensity,
      hemi: L.hemiLight.intensity,
      fog: this.scene.fog && this.scene.fog.isFogExp2 ? this.scene.fog.density : null,
      fov: this.camCtrl.camera.fov,
      maxPolar: this.camCtrl.controls.maxPolarAngle,
      minDist: this.camCtrl.controls.minDistance
    };
    // Contrapicados y macros necesitan salir de los límites del orbit libre.
    this.camCtrl.controls.maxPolarAngle = Math.PI * 0.99;
    this.camCtrl.controls.minDistance = 0.25;
  }

  _restoreBase() {
    if (!this._saved) return;
    const s = this._saved, L = this.lighting;
    this.renderer.toneMappingExposure = s.exposure;
    this.scene.environmentIntensity = s.envIntensity;
    L.hemiLight.intensity = s.hemi;
    if (s.fog != null && this.scene.fog?.isFogExp2) this.scene.fog.density = s.fog;
    this.camCtrl.camera.fov = s.fov;
    this.camCtrl.controls.maxPolarAngle = s.maxPolar;
    this.camCtrl.controls.minDistance = s.minDist;
    this.camCtrl.camera.updateProjectionMatrix();
    this._saved = null;
  }

  exit() {
    this.stop(false);
    this.keyLight.visible = false;
    this.rimLight.visible = false;
    this.keyLight.intensity = this.rimLight.intensity = 0;
    this._restoreBase();
    const spot = this.getSpot();
    if (spot) this.alina?.placeAtSpot(spot);
    this.active = false;
    this.payload = null;
  }

  // ---------- resolver / aplicar ----------
  resolve(shot, aspectRatio = '9:16') {
    const spot = this.getSpot(shot.spotId);
    if (!spot) throw new Error(`Spot desconocido: ${shot.spotId}`);
    return S.solveShot({ shot, spot, catalog, building: BUILDING, aspectRatio, baseMode: this.getBaseMode() });
  }

  /** Coloca la escena (spot, Alina, rig de luz, grade) y salta al primer fotograma del plano. */
  apply(shot, aspectRatio = '9:16') {
    this.stop(false);
    this.prepareSpot?.(shot.spotId);
    const p = this.resolve(shot, aspectRatio);
    this._saveBase();
    this.active = true;
    this.shot = shot;
    this.payload = p;

    // Alina: animación + orientación (espejo)
    if (this.alina?.root) {
      this.alina.root.rotation.y = p.alinaRotY;
      if (p.animation) this.alina.playAnimation(p.animation, 0.25);
    }

    // Rig de luz
    const place = (light, spec) => {
      light.visible = true;
      light.color.set(spec.colorHex);
      light.intensity = spec.intensity * THREE_INTENSITY_SCALE;
      light.angle = THREE.MathUtils.degToRad(Math.min(75, spec.spotAngleDeg / 2));
      light.position.set(spec.worldPos.x, spec.worldPos.y, spec.worldPos.z);
      light.target.position.set(spec.targetPos.x, spec.targetPos.y, spec.targetPos.z);
      light.target.updateMatrixWorld();
    };
    place(this.keyLight, p.realtimeRig.keyLight);
    place(this.rimLight, p.realtimeRig.rimLight);

    // Grade de la escuela del director + multiplicadores del rig
    const g = p.threeJsGrade;
    const s = this._saved;
    this.renderer.toneMappingExposure = g.toneMappingExposure;
    this.scene.environmentIntensity = s.envIntensity * g.environmentIntensityMultiplier * p.realtimeRig.reflectionMultiplier;
    this.lighting.hemiLight.intensity = s.hemi * p.realtimeRig.ambientMultiplier;
    if (this.scene.fog?.isFogExp2 && p.realtimeRig.fogDensityOverride > 0) {
      this.scene.fog.density = p.realtimeRig.fogDensityOverride;
    }

    this._setCamera(0, 0);
    this.unityBridge?.applyCinemaShot(p);
    return p;
  }

  // ---------- cámara ----------
  _setCamera(t, elapsed) {
    const p = this.payload; if (!p) return;
    const c = p.camera;
    const k = S.ease(c.easing, t);
    const pos = S.lerp3(c.startPos, c.endPos, k);
    const tgt = S.lerp3(c.startTarget, c.endTarget, k);

    // handheld orgánico (Perlin-lite con senos incomensurables)
    if (c.handheldAmpM > 0) {
      const w = 2 * Math.PI * c.handheldHz;
      pos.x += Math.sin(elapsed * w) * c.handheldAmpM * 0.6 + Math.sin(elapsed * w * 0.37 + 1.3) * c.handheldAmpM * 0.4;
      pos.y += Math.sin(elapsed * w * 2.0 + 0.5) * c.handheldAmpM * 0.7;
      pos.z += Math.sin(elapsed * w * 0.53 + 2.1) * c.handheldAmpM * 0.3;
    }

    const cam = this.camCtrl.camera;
    cam.position.set(pos.x, pos.y, pos.z);
    this.camCtrl.controls.target.set(tgt.x, tgt.y, tgt.z);
    this.camCtrl.isTransitioning = false;
    cam.fov = c.verticalFovDeg;
    cam.updateProjectionMatrix();
    this.camCtrl.controls.update();
    if (c.rollDeg) cam.rotateZ(THREE.MathUtils.degToRad(c.rollDeg));

    // foco (para pase Depth y HUD)
    const f = p.dof.startFocusDistM + (p.dof.endFocusDistM - p.dof.startFocusDistM) * k;
    this.focusDistM = f;
  }

  play(onEnd) {
    if (!this.payload) return;
    this.stop(false);
    this.playing = true;
    this.t0 = performance.now();
    this.onMoveEnd = onEnd || null;
    this.unityBridge?.playCameraMove(this.payload);
  }

  stop(finished) {
    if (!this.playing) return;
    this.playing = false;
    const cb = this.onMoveEnd; this.onMoveEnd = null;
    if (finished && cb) cb();
  }

  /** Llamar cada frame desde el loop principal (antes de camCtrl.update/render). */
  update() {
    if (!this.active) return false;
    if (this.playing && this.payload) {
      const el = (performance.now() - this.t0) / 1000;
      const dur = this.payload.camera.durationSec;
      const t = Math.min(1, el / dur);
      this._setCamera(t, el);
      this.onFrameHud?.({ t, el, dur, focusM: this.focusDistM });
      if (t >= 1) { this.playing = false; const cb = this.onMoveEnd; this.onMoveEnd = null; cb?.(); }
      return true;
    }
    return false;
  }
}
