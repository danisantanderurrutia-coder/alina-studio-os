import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class CameraAndExportController {
  constructor(container, scene, renderer, lighting) {
    this.container = container;
    this.scene = scene;
    this.renderer = renderer;
    this.lighting = lighting;

    const w = container.clientWidth || 720;
    const h = container.clientHeight || 480;

    this.camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 260);
    this.camera.position.set(0.25, 8.3, -8.1);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.01;
    this.controls.minDistance = 0.8;
    this.controls.maxDistance = 80;
    this.controls.target.set(-0.4, 8.18, -10.8);
    this.controls.update();

    this.isTransitioning = false;
    this.targetPos = this.camera.position.clone();
    this.targetLook = this.controls.target.clone();

    // Immediately cancel camera transition on user drag or wheel input
    this.controls.addEventListener('start', () => {
      this.isTransitioning = false;
    });

    this.isDepthPass = false;
    this.depthMaterial = this._createSkinnedLinearDepthMaterial();

    this._bindResize();
  }

  _createSkinnedLinearDepthMaterial() {
    return new THREE.ShaderMaterial({
      uniforms: {
        uNear: { value: 0.6 },
        uFar: { value: 24.0 }
      },
      vertexShader: `
        #include <common>
        #include <skinning_pars_vertex>
        varying float vViewZ;
        void main() {
          #include <skinbase_vertex>
          #include <begin_vertex>
          #include <skinning_vertex>
          vec4 mvPos = modelViewMatrix * vec4(transformed, 1.0);
          vViewZ = -mvPos.z;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        uniform float uNear;
        uniform float uFar;
        varying float vViewZ;
        void main() {
          float d = clamp((vViewZ - uNear) / max(uFar - uNear, 0.001), 0.0, 1.0);
          float val = 1.0 - pow(d, 0.82);
          gl_FragColor = vec4(vec3(val), 1.0);
        }
      `
    });
  }

  _bindResize() {
    this.onWindowResize = () => {
      if (!this.container || !this.renderer || !this.camera) return;
      const w = Math.max(1, this.container.clientWidth);
      const h = Math.max(1, this.container.clientHeight);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h, false);
    };

    window.addEventListener('resize', this.onWindowResize);
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.onWindowResize());
      this.resizeObserver.observe(this.container);
    }
  }

  flyTo(pos, target) {
    this.targetPos.set(pos.x, pos.y, pos.z);
    this.targetLook.set(target.x, target.y, target.z);
    this.isTransitioning = true;
  }

  updateDepthRangeForFocus(focusPoint) {
    const dist = this.camera.position.distanceTo(focusPoint);
    this.depthMaterial.uniforms.uNear.value = Math.max(0.4, dist * 0.28);
    this.depthMaterial.uniforms.uFar.value = Math.max(dist + 8.0, dist * 2.8);
  }

  setDepthPass(enabled, focusPoint = null) {
    this.isDepthPass = enabled;
    if (enabled) {
      if (focusPoint) this.updateDepthRangeForFocus(focusPoint);
      this.scene.overrideMaterial = this.depthMaterial;
      if (this.lighting.skyDome) this.lighting.skyDome.visible = false;
      this.lighting.setDepthFogDisabled(true);
      this.renderer.setClearColor(0x000000, 1);
    } else {
      this.scene.overrideMaterial = null;
      if (this.lighting.skyDome) this.lighting.skyDome.visible = true;
      this.lighting.setDepthFogDisabled(false);
    }
  }

  update() {
    if (this.isTransitioning) {
      this.camera.position.lerp(this.targetPos, 0.09);
      this.controls.target.lerp(this.targetLook, 0.09);
      if (
        this.camera.position.distanceTo(this.targetPos) < 0.03 &&
        this.controls.target.distanceTo(this.targetLook) < 0.03
      ) {
        this.camera.position.copy(this.targetPos);
        this.controls.target.copy(this.targetLook);
        this.isTransitioning = false;
      }
    }
    this.controls.update();
  }

  render() {
    if (this.isDepthPass) {
      this.updateDepthRangeForFocus(this.controls.target);
    }
    this.renderer.render(this.scene, this.camera);
  }

  renderVertical916DataURL(width = 1080, height = 1920, forceDepth = null) {
    const prevOverride = this.scene.overrideMaterial;
    const prevSkyVis = this.lighting.skyDome ? this.lighting.skyDome.visible : true;
    const prevFog = this.scene.fog;
    const prevSize = this.renderer.getSize(new THREE.Vector2());
    const prevPR = this.renderer.getPixelRatio();

    if (forceDepth === true) {
      this.updateDepthRangeForFocus(this.controls.target);
      this.scene.overrideMaterial = this.depthMaterial;
      this.scene.fog = null;
      if (this.lighting.skyDome) this.lighting.skyDome.visible = false;
      this.renderer.setClearColor(0x000000, 1);
    } else if (forceDepth === false) {
      this.scene.overrideMaterial = null;
      this.lighting.setDepthFogDisabled(false);
      if (this.lighting.skyDome) this.lighting.skyDome.visible = true;
    }

    const cam916 = this.camera.clone();
    cam916.aspect = width / height;
    cam916.updateProjectionMatrix();

    this.renderer.setPixelRatio(1);
    this.renderer.setSize(width, height, false);
    this.renderer.render(this.scene, cam916);
    const dataURL = this.renderer.domElement.toDataURL('image/png');

    // Restore viewport size and scene state
    this.renderer.setPixelRatio(prevPR);
    this.renderer.setSize(prevSize.x, prevSize.y, false);
    this.scene.overrideMaterial = prevOverride;
    this.scene.fog = prevFog;
    if (this.lighting.skyDome) this.lighting.skyDome.visible = prevSkyVis;
    this.renderer.render(this.scene, this.camera);

    return dataURL;
  }

  getCameraTelemetry() {
    return {
      position: {
        x: Number(this.camera.position.x.toFixed(3)),
        y: Number(this.camera.position.y.toFixed(3)),
        z: Number(this.camera.position.z.toFixed(3))
      },
      target: {
        x: Number(this.controls.target.x.toFixed(3)),
        y: Number(this.controls.target.y.toFixed(3)),
        z: Number(this.controls.target.z.toFixed(3))
      },
      fov_deg: this.camera.fov
    };
  }
}
