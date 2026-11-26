import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as S from './cinematographySolver.js';
import catalog from '../data/cinematographyCatalog.json';
import { FLOOR_HEIGHT, BUILDING_WIDTH, BUILDING_DEPTH, BUILDING_CENTER_Z } from '../data/sanctuaryData.js';

/** Convierte la intensidad base del catálogo a candelas físicas de Three.js (r155+). */
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
  constructor({ scene, renderer, lighting, camCtrl, alina, getSpot, prepareSpot, getBaseMode }) {
    Object.assign(this, { scene, renderer, lighting, camCtrl, alina, getSpot, prepareSpot, getBaseMode });
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

    // Salto 3: Foreground Framing (Props reales en primer término con desenfoque / bokeh)
    this.foregroundGroup = new THREE.Group();
    this.foregroundGroup.name = 'CinemaForegroundPropGroup';
    this.foregroundGroup.visible = false;
    this.scene.add(this.foregroundGroup);
    this._initForegroundMeshes();

    // El usuario toma el control → cancelar movimiento.
    camCtrl.controls.addEventListener('start', () => { if (this.playing) this.stop(false); });
  }

  _initForegroundMeshes() {
    // 1. Follaje Botánico Real (Carga fern_02 CC0 con frondas fenestradas + fallback multi-hoja orgánico)
    const leafGroup = new THREE.Group();
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x165b33,
      roughness: 0.42,
      metalness: 0.04,
      side: THREE.DoubleSide
    });
    for (const [rx, ry, rz, s] of [
      [0.25, 0.2, 0.55, 1.0],
      [-0.2, -0.35, 0.85, 0.78],
      [0.1, 0.65, 0.3, 0.68]
    ]) {
      const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.32 * s, 0.72 * s, 4, 8), leafMat);
      blade.rotation.set(rx, ry, rz);
      leafGroup.add(blade);
    }

    // 2. Copa Tallada con Tallo Fino (LatheGeometry + reemplazo asíncrono brass_goblets)
    const glassGroup = new THREE.Group();
    const gobletPts = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.09, 0.0),
      new THREE.Vector2(0.085, 0.015),
      new THREE.Vector2(0.014, 0.03),
      new THREE.Vector2(0.012, 0.19),
      new THREE.Vector2(0.095, 0.26),
      new THREE.Vector2(0.115, 0.38),
      new THREE.Vector2(0.108, 0.38)
    ];
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xfff8eb,
      roughness: 0.06,
      metalness: 0.08,
      transmission: 0.9,
      transparent: true,
      opacity: 0.76,
      ior: 1.52
    });
    glassGroup.add(new THREE.Mesh(new THREE.LatheGeometry(gobletPts, 24), glassMat));

    // 3. Micrófono Broadcast Estudio con Horquilla (Shure SM7B Yoke Silhouette)
    const micGroup = new THREE.Group();
    const darkAnodized = new THREE.MeshStandardMaterial({ color: 0x1c1f26, roughness: 0.52, metalness: 0.65 });
    const brassAccent = new THREE.MeshStandardMaterial({ color: 0xc8963e, roughness: 0.28, metalness: 0.88 });
    const micBody = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.062, 0.26, 20), darkAnodized);
    const micFoam = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.066, 0.08, 8, 18),
      new THREE.MeshStandardMaterial({ color: 0x262932, roughness: 0.92 })
    );
    micFoam.position.y = 0.14;
    const micRing = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.007, 8, 24), brassAccent);
    micRing.rotation.x = Math.PI / 2;
    micRing.position.y = 0.06;
    const yoke = new THREE.Mesh(new THREE.TorusGeometry(0.095, 0.009, 8, 20, Math.PI), darkAnodized);
    yoke.rotation.z = Math.PI;
    micGroup.add(micBody, micFoam, micRing, yoke);
    micGroup.rotation.z = -0.22;

    // 4. Frasco de Perfume Facetado en Cristal Ámbar & Atomizador de Latón
    const flaconGroup = new THREE.Group();
    const amberGlass = new THREE.MeshPhysicalMaterial({
      color: 0xd97706,
      roughness: 0.08,
      metalness: 0.08,
      transmission: 0.82,
      transparent: true,
      opacity: 0.86,
      ior: 1.54
    });
    const flaconBody = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.095, 0.22, 8), amberGlass);
    const flaconNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.034, 0.05, 16), brassAccent);
    flaconNeck.position.y = 0.135;
    const flaconCap = new THREE.Mesh(new THREE.OctahedronGeometry(0.042, 0), amberGlass);
    flaconCap.position.y = 0.19;
    flaconGroup.add(flaconBody, flaconNeck, flaconCap);

    this.foregroundMeshes = {
      monstera_leaf: leafGroup,
      crystal_glass: glassGroup,
      vintage_microphone: micGroup,
      perfume_bottle: flaconGroup
    };

    // Upgrade asíncrono a mallas escaneadas CC0 reales para silueta bokeh orgánica
    const fgLoader = new GLTFLoader();
    const upgradeFG = (propKey, url, targetH) => {
      fgLoader.load(
        url,
        (gltf) => {
          const model = gltf.scene;
          const box = new THREE.Box3().setFromObject(model);
          const sz = new THREE.Vector3();
          const ctr = new THREE.Vector3();
          box.getSize(sz);
          box.getCenter(ctr);
          const sc = targetH / Math.max(0.05, sz.y);
          model.scale.multiplyScalar(sc);
          model.position.set(-ctr.x * sc, -ctr.y * sc, -ctr.z * sc);
          model.traverse((m) => {
            if (m.isMesh) m.userData.maskId = 'foreground';
          });
          const wrap = new THREE.Group();
          wrap.add(model);
          this.foregroundMeshes[propKey] = wrap;
          if (this.active && this.payload?.foregroundProp?.propId === propKey) {
            this._updateForegroundProp(this.payload.foregroundProp);
          }
        },
        undefined,
        () => {}
      );
    };
    upgradeFG('monstera_leaf', './polyhaven/models/fern_02/fern_02.gltf', 0.85);
    upgradeFG('perfume_bottle', './polyhaven/models/brass_vase_01/brass_vase_01.gltf', 0.36);
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
    this.foregroundGroup.visible = false;
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
    this._updateForegroundProp(p.foregroundProp);
    return p;
  }

  _updateForegroundProp(propData) {
    while (this.foregroundGroup.children.length > 0) {
      this.foregroundGroup.remove(this.foregroundGroup.children[0]);
    }
    if (!propData) {
      this.foregroundGroup.visible = false;
      return;
    }
    const baseMesh = this.foregroundMeshes[propData.propId] || this.foregroundMeshes.monstera_leaf;
    if (baseMesh) {
      const clone = baseMesh.clone(true);
      clone.traverse((o) => {
        if (o.isMesh) o.userData.maskId = 'foreground';
      });
      clone.scale.setScalar(propData.scale || 0.3);
      this.foregroundGroup.add(clone);
      this.foregroundGroup.position.set(propData.worldPos.x, propData.worldPos.y, propData.worldPos.z);
      this.foregroundGroup.visible = true;
    }
  }

  /** Posiciona cámara y foco de forma limpia en t ∈ [0, 1] (sin ruido handheld si cleanKeyframe=true). */
  seekNormalized(t, { cleanKeyframe = true } = {}) {
    if (!this.payload) return;
    this._setCamera(t, cleanKeyframe ? 0 : t * this.payload.camera.durationSec, cleanKeyframe);
  }

  // ---------- cámara ----------
  _setCamera(t, elapsed, suppressHandheld = false) {
    const p = this.payload; if (!p) return;
    const c = p.camera;
    const k = S.ease(c.easing, t);
    const pos = S.lerp3(c.startPos, c.endPos, k);
    const tgt = S.lerp3(c.startTarget, c.endTarget, k);

    // handheld orgánico (Perlin-lite con senos incomensurables; desactivado en captura limpia de keyframes)
    if (c.handheldAmpM > 0 && !suppressHandheld) {
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

    // foco (para pase Depth, Bokeh CoC y HUD)
    const f = p.dof.startFocusDistM + (p.dof.endFocusDistM - p.dof.startFocusDistM) * k;
    this.focusDistM = f;
  }

  play(onEnd) {
    if (!this.payload) return;
    this.stop(false);
    this.playing = true;
    this.t0 = performance.now();
    this.onMoveEnd = onEnd || null;
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
