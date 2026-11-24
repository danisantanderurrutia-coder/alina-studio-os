import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export class SkyAndLightingController {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.lights = [];
    this.flickerCandles = [];
    this.emissiveRefs = [];
    this.mode = 'night';

    this._setupEnvironment();
    this._setupSkyDome();
    this._setupSkylineSilhouettes();
    this._setupGlobalLights();
  }

  _setupEnvironment() {
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.18;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    pmrem.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    this.envRT = pmrem.fromScene(roomEnv, 0.04);
    this.scene.environment = this.envRT.texture;
    this.scene.environmentIntensity = 0.55;
    roomEnv.dispose();
    pmrem.dispose();
  }

  _setupSkyDome() {
    const skyGeo = new THREE.SphereGeometry(140, 32, 24);
    this.skyUniforms = {
      topColor: { value: new THREE.Color(0x060913) },
      midColor: { value: new THREE.Color(0x141b2d) },
      horizonColor: { value: new THREE.Color(0x281c26) },
      sunDir: { value: new THREE.Vector3(0.55, 0.35, -0.75).normalize() },
      sunStrength: { value: 0.0 },
      starOpacity: { value: 1.0 }
    };

    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vWorldDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldDir = normalize(position);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 sunDir;
        uniform float sunStrength;
        uniform float starOpacity;
        varying vec3 vWorldDir;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + 0.1);
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        void main() {
          float h = clamp(vWorldDir.y, 0.0, 1.0);
          vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          col = mix(col, topColor, smoothstep(0.28, 0.85, h));

          float sunDot = max(dot(normalize(vWorldDir), sunDir), 0.0);
          col += vec3(1.0, 0.65, 0.35) * pow(sunDot, 16.0) * 0.55 * sunStrength;
          col += vec3(1.0, 0.92, 0.78) * pow(sunDot, 220.0) * 1.4 * sunStrength;

          if (starOpacity > 0.01 && h > 0.08) {
            vec3 grid = floor(vWorldDir * 220.0);
            float n = hash(grid);
            if (n > 0.9945) {
              float tw = (n - 0.9945) / 0.0055;
              col += vec3(0.85, 0.90, 1.0) * tw * starOpacity * smoothstep(0.08, 0.3, h);
            }
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `
    });

    this.skyDome = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyDome);
  }

  _setupSkylineSilhouettes() {
    this.skylineGroup = new THREE.Group();
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x10131a,
      roughness: 0.9,
      metalness: 0.1
    });

    // Window strip texture on skyline towers
    const wc = document.createElement('canvas');
    wc.width = 128;
    wc.height = 256;
    const wctx = wc.getContext('2d');
    wctx.fillStyle = '#0c0e14';
    wctx.fillRect(0, 0, 128, 256);
    for (let y = 8; y < 248; y += 16) {
      for (let x = 8; x < 120; x += 16) {
        if ((x * 7 + y * 13) % 5 === 0) {
          wctx.fillStyle = (x + y) % 3 === 0 ? '#fbbf24' : '#7dd3fc';
          wctx.fillRect(x, y, 8, 8);
        }
      }
    }
    const winTex = new THREE.CanvasTexture(wc);
    winTex.colorSpace = THREE.SRGBColorSpace;
    winTex.wrapS = THREE.RepeatWrapping;
    winTex.wrapT = THREE.RepeatWrapping;
    winTex.repeat.set(2, 4);

    this.skylineMat = new THREE.MeshStandardMaterial({
      color: 0x12151e,
      emissiveMap: winTex,
      emissive: new THREE.Color(0xffd7a8),
      emissiveIntensity: 0.9,
      roughness: 0.85
    });

    const ringCount = 26;
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      const dist = 52 + (i % 3) * 10;
      const w = 6 + (i % 4) * 2.5;
      const h = 14 + (i % 5) * 6.5;
      const d = 6 + ((i + 1) % 3) * 2.2;
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), i % 2 === 0 ? this.skylineMat : towerMat);
      mesh.position.set(Math.cos(angle) * dist, h / 2 - 1.0, Math.sin(angle) * dist);
      mesh.rotation.y = -angle;
      this.skylineGroup.add(mesh);
    }

    // Surrounding ground plane extending out so there's no floating void
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x121419, roughness: 0.95, metalness: 0.05 });
    const ground = new THREE.Mesh(new THREE.CircleGeometry(110, 48), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.32;
    ground.receiveShadow = true;
    this.skylineGroup.add(ground);

    this.scene.add(this.skylineGroup);
  }

  _setupGlobalLights() {
    this.hemiLight = new THREE.HemisphereLight(0x8fa8d6, 0x261d17, 0.75);
    this.scene.add(this.hemiLight);

    this.dirLight = new THREE.DirectionalLight(0xffcf99, 1.2);
    this.dirLight.position.set(22, 26, 20);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.set(2048, 2048);
    this.dirLight.shadow.camera.near = 2;
    this.dirLight.shadow.camera.far = 95;
    this.dirLight.shadow.camera.left = -28;
    this.dirLight.shadow.camera.right = 28;
    this.dirLight.shadow.camera.top = 28;
    this.dirLight.shadow.camera.bottom = -28;
    this.dirLight.shadow.bias = -0.0005;
    this.scene.add(this.dirLight);
  }

  registerLight(light, { dayIntensity = 0.8, nightIntensity = 2.0, flicker = false } = {}) {
    this.lights.push({ light, dayIntensity, nightIntensity, baseNight: nightIntensity });
    if (flicker) {
      this.flickerCandles.push({ light, dayIntensity, nightIntensity, phase: Math.random() * 10 });
    }
    light.intensity = this.mode === 'day' ? dayIntensity : nightIntensity;
  }

  registerEmissive(material, { dayIntensity = 0.2, nightIntensity = 1.6 } = {}) {
    this.emissiveRefs.push({ material, dayIntensity, nightIntensity });
    material.emissiveIntensity = this.mode === 'day' ? dayIntensity : nightIntensity;
  }

  setMode(mode) {
    this.mode = mode;
    if (mode === 'day') {
      this.skyUniforms.topColor.value.setHex(0x28589c);
      this.skyUniforms.midColor.value.setHex(0x7ca2cf);
      this.skyUniforms.horizonColor.value.setHex(0xf3ae76);
      this.skyUniforms.sunStrength.value = 1.0;
      this.skyUniforms.starOpacity.value = 0.0;

      this.scene.fog = new THREE.FogExp2(0xdab79e, 0.0055);
      this.scene.environmentIntensity = 0.95;

      this.hemiLight.color.setHex(0xffe6cc);
      this.hemiLight.groundColor.setHex(0x4b3b30);
      this.hemiLight.intensity = 1.05;

      this.dirLight.color.setHex(0xffd299);
      this.dirLight.position.set(24, 17, 22);
      this.dirLight.intensity = 2.8;

      this.skylineMat.emissiveIntensity = 0.08;
      this.renderer.toneMappingExposure = 1.15;
    } else {
      this.skyUniforms.topColor.value.setHex(0x050711);
      this.skyUniforms.midColor.value.setHex(0x111729);
      this.skyUniforms.horizonColor.value.setHex(0x271923);
      this.skyUniforms.sunStrength.value = 0.0;
      this.skyUniforms.starOpacity.value = 1.0;

      this.scene.fog = new THREE.FogExp2(0x0a0d16, 0.009);
      this.scene.environmentIntensity = 0.48;

      this.hemiLight.color.setHex(0x3a4f7a);
      this.hemiLight.groundColor.setHex(0x1e1510);
      this.hemiLight.intensity = 0.65;

      this.dirLight.color.setHex(0x7aa4e8);
      this.dirLight.position.set(-18, 28, 22);
      this.dirLight.intensity = 0.65;

      this.skylineMat.emissiveIntensity = 1.1;
      this.renderer.toneMappingExposure = 1.25;
    }

    for (const item of this.lights) {
      item.light.intensity = mode === 'day' ? item.dayIntensity : item.nightIntensity;
    }
    for (const em of this.emissiveRefs) {
      em.material.emissiveIntensity = mode === 'day' ? em.dayIntensity : em.nightIntensity;
    }
  }

  update(time) {
    for (const c of this.flickerCandles) {
      const base = this.mode === 'day' ? c.dayIntensity : c.nightIntensity;
      c.light.intensity = base * (0.85 + Math.sin(time * 9.5 + c.phase) * 0.1 + Math.sin(time * 17.0 + c.phase) * 0.05);
    }
  }

  setDepthFogDisabled(disabled) {
    if (disabled) {
      this.scene.fog = null;
    } else {
      this.setMode(this.mode);
    }
  }
}
