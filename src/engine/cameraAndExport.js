import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SKINNED_COMMON_VERT = `
  #include <common>
  #include <skinning_pars_vertex>
  varying vec2 vUv;
  varying float vViewZ;
  void main() {
    vUv = uv;
    #include <skinbase_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>
    vec4 mvPos = modelViewMatrix * vec4(transformed, 1.0);
    vViewZ = -mvPos.z;
    gl_Position = projectionMatrix * mvPos;
  }
`;

export class CameraAndExportController {
  constructor(container, scene, renderer, lighting) {
    this.container = container;
    this.scene = scene;
    this.renderer = renderer;
    this.lighting = lighting;

    const w = container.clientWidth || 720;
    const h = container.clientHeight || 480;

    this.camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 320);
    this.camera.position.set(0.25, 11.3, -8.1);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.01;
    this.controls.minDistance = 0.8;
    this.controls.maxDistance = 110;
    this.controls.target.set(-0.4, 11.18, -10.8);
    this.controls.update();

    this.isTransitioning = false;
    this.targetPos = this.camera.position.clone();
    this.targetLook = this.controls.target.clone();

    this.controls.addEventListener('start', () => {
      this.isTransitioning = false;
    });

    this.activePass = 'beauty'; // 'beauty' | 'depth' | 'normals' | 'mask'
    this.isDepthPass = false;
    this.lockedDepthBounds = null;

    this.depthMaterial = this._createSkinnedLinearDepthMaterial();
    this.metricDepthMaterial = this._createMetricDepthMaterial(0.0);
    this.metricMirrorDepthMaterial = this._createMetricDepthMaterial(1.0);
    this.normalsMaterial = this._createSkinnedNormalsMaterial();
    this.maskMaterials = this._createSemanticMaskMaterials();
    this._bokeh = this._createOpticalBokehPipeline();
    this._activeMaskRestore = null;

    this._bindResize();
  }

  _createSkinnedLinearDepthMaterial() {
    return new THREE.ShaderMaterial({
      uniforms: {
        uNear: { value: 0.6 },
        uFar: { value: 24.0 }
      },
      vertexShader: SKINNED_COMMON_VERT,
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

  _createMetricDepthMaterial(isMirrorVal = 0.0) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uIsMirror: { value: isMirrorVal }
      },
      vertexShader: SKINNED_COMMON_VERT,
      fragmentShader: `
        uniform float uIsMirror;
        varying float vViewZ;
        void main() {
          float zNorm = clamp(vViewZ / 32.0, 0.0, 1.0);
          float hi = floor(zNorm * 255.0) / 255.0;
          float lo = fract(zNorm * 255.0);
          gl_FragColor = vec4(hi, lo, uIsMirror, 1.0);
        }
      `
    });
  }

  _createSkinnedNormalsMaterial() {
    return new THREE.ShaderMaterial({
      vertexShader: `
        #include <common>
        #include <skinning_pars_vertex>
        varying vec3 vNormalVS;
        void main() {
          #include <beginnormal_vertex>
          #include <skinbase_vertex>
          #include <skinnormal_vertex>
          #include <defaultnormal_vertex>
          vNormalVS = normalize(transformedNormal);
          #include <begin_vertex>
          #include <skinning_vertex>
          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormalVS;
        void main() {
          vec3 n = normalize(vNormalVS);
          gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);
        }
      `
    });
  }

  _createFlatMaskMat(hex) {
    const c = new THREE.Color();
    c.setStyle(hex, THREE.NoColorSpace);
    return new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Vector3(c.r, c.g, c.b) } },
      side: THREE.DoubleSide,
      vertexShader: SKINNED_COMMON_VERT,
      fragmentShader: `
        uniform vec3 uColor;
        void main() {
          gl_FragColor = vec4(uColor, 1.0);
        }
      `
    });
  }

  _createAlinaAtlasMaskMaterial() {
    // Replica en GLSL la segmentación exacta del atlas 2048x2048 de customize_alina_textures.py
    return new THREE.ShaderMaterial({
      uniforms: {
        uDiffuse: { value: null },
        uHasMap: { value: 0.0 }
      },
      vertexShader: SKINNED_COMMON_VERT,
      fragmentShader: `
        uniform sampler2D uDiffuse;
        uniform float uHasMap;
        varying vec2 vUv;
        void main() {
          const vec3 COL_SKIN     = vec3(1.000, 0.231, 0.188); // #FF3B30
          const vec3 COL_EYES     = vec3(0.204, 0.780, 0.349); // #34C759
          const vec3 COL_HAIR     = vec3(1.000, 0.800, 0.000); // #FFCC00
          const vec3 COL_WARDROBE = vec3(0.000, 0.478, 1.000); // #007AFF

          if (uHasMap < 0.5) {
            gl_FragColor = vec4(COL_SKIN, 1.0);
            return;
          }

          float xx = vUv.x * 2048.0;
          float yy = vUv.y * 2048.0;

          // Convertir lectura lineal de textura sRGB a valores aproximados 0..255 del atlas
          vec3 raw = texture2D(uDiffuse, vUv).rgb;
          vec3 srgb = pow(clamp(raw, 0.0, 1.0), vec3(1.0 / 2.2)) * 255.0;
          float r = srgb.r, g = srgb.g, b = srgb.b;
          float lum = 0.299 * r + 0.587 * g + 0.114 * b;

          bool inEyeball = (xx >= 565.0 && xx <= 755.0 && yy >= 660.0 && yy <= 785.0);
          if (inEyeball) {
            gl_FragColor = vec4(COL_EYES, 1.0);
            return;
          }

          bool isSkinTone = (r > 115.0) && (g > 65.0) && (b > 45.0) && ((r - b) > 14.0) && (r > g);
          bool inFaceInner = (xx >= 290.0 && xx <= 570.0 && yy >= 170.0 && yy <= 430.0);
          bool inEars = ((xx < 120.0 && yy < 155.0) || (xx > 730.0 && xx < 880.0 && yy < 155.0));
          bool inSkinIsland = (xx < 880.0 && yy < 875.0 && isSkinTone);

          bool inBun = (xx >= 945.0 && xx <= 1165.0 && yy < 175.0 && lum > 6.0);
          bool inCrown = (xx < 945.0 && yy < 445.0 && !inFaceInner && !inEars && !isSkinTone && lum > 14.0);
          if (inBun || inCrown) {
            gl_FragColor = vec4(COL_HAIR, 1.0);
            return;
          }

          if (inFaceInner || inEars || inSkinIsland) {
            gl_FragColor = vec4(COL_SKIN, 1.0);
            return;
          }

          gl_FragColor = vec4(COL_WARDROBE, 1.0);
        }
      `
    });
  }

  _createSemanticMaskMaterials() {
    return {
      environment: this._createFlatMaskMat('#000000'),
      skin: this._createFlatMaskMat('#FF3B30'),
      eyes: this._createFlatMaskMat('#34C759'),
      hair: this._createFlatMaskMat('#FFCC00'),
      wardrobe: this._createFlatMaskMat('#007AFF'),
      foreground: this._createFlatMaskMat('#AF52DE'),
      mirror: this._createFlatMaskMat('#00C7BE'),
      alinaAtlas: this._createAlinaAtlasMaskMaterial()
    };
  }

  _createOpticalBokehPipeline() {
    const postScene = new THREE.Scene();
    const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const mat = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      uniforms: {
        tBeauty: { value: null },
        tMetricDepth: { value: null },
        uResolution: { value: new THREE.Vector2(1080, 1920) },
        uFocalMm: { value: 50.0 },
        uFStop: { value: 1.8 },
        uFocusDistM: { value: 2.5 },
        uSensorHeightMm: { value: 36.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tBeauty;
        uniform sampler2D tMetricDepth;
        uniform vec2 uResolution;
        uniform float uFocalMm;
        uniform float uFStop;
        uniform float uFocusDistM;
        uniform float uSensorHeightMm;
        varying vec2 vUv;

        float decodeDepthM(vec4 dm) {
          return (dm.r + dm.g / 255.0) * 32.0;
        }

        float computeCoCPx(float zM) {
          float f = uFocalMm;
          float N = max(1.0, uFStop);
          float s1 = max(0.25, uFocusDistM) * 1000.0;
          float z = max(0.2, zM) * 1000.0;
          float cocMm = abs((f * f) / (N * max(s1 - f, 1.0)) * ((z - s1) / z));
          return clamp((cocMm / uSensorHeightMm) * uResolution.y, 0.0, 30.0);
        }

        void main() {
          vec4 baseCol = texture2D(tBeauty, vUv);
          vec4 centerDm = texture2D(tMetricDepth, vUv);

          // Proteger superficie activa del espejo planar en ots_mirror para preservar reflejo nítido
          if (centerDm.b > 0.5) {
            gl_FragColor = baseCol;
            return;
          }

          float centerZ = decodeDepthM(centerDm);
          float centerCoC = computeCoCPx(centerZ);

          vec2 texel = 1.0 / uResolution;
          vec3 acc = baseCol.rgb;
          float totalW = 1.0;

          // Espiral de ángulo áureo de 28 muestras (bokeh circular cinematográfico con highlight boost)
          const int SAMPLES = 28;
          const float GOLDEN_ANGLE = 2.39996323;

          for (int i = 1; i <= SAMPLES; i++) {
            float fi = float(i);
            float rNorm = sqrt(fi / float(SAMPLES));
            float theta = fi * GOLDEN_ANGLE;
            vec2 dir = vec2(cos(theta), sin(theta));

            // Radio máximo combina CoC propio + posible desenfoque de objetos cercanos (foreground bokeh)
            float searchRadiusPx = max(centerCoC, 22.0) * rNorm;
            vec2 sampleUv = clamp(vUv + dir * texel * searchRadiusPx, vec2(0.001), vec2(0.999));

            vec4 sDm = texture2D(tMetricDepth, sampleUv);
            float sZ = decodeDepthM(sDm);
            float sCoC = sDm.b > 0.5 ? 0.0 : computeCoCPx(sZ);

            // Evitar que un objeto nítido en primer plano sangre sobre el fondo desenfocado,
            // pero permitir que un prop desenfocado (sZ < centerZ y sCoC grande) envuelva suavemente el borde.
            float inFront = step(sZ, centerZ + 0.06);
            float allowBg = smoothstep(0.0, 2.5, centerCoC) * smoothstep(0.0, 2.5, sCoC);
            float reach = step(searchRadiusPx, max(sCoC, centerCoC * (1.0 - inFront)) + 0.75);
            float w = reach * max(inFront, allowBg);

            vec3 sCol = texture2D(tBeauty, sampleUv).rgb;
            float luma = dot(sCol, vec3(0.2126, 0.7152, 0.0722));
            float bokehHighlight = 1.0 + smoothstep(0.72, 1.0, luma) * 0.65;
            w *= bokehHighlight;

            acc += sCol * w;
            totalW += w;
          }

          gl_FragColor = vec4(acc / max(totalW, 0.001), 1.0);
        }
      `
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    postScene.add(quad);
    return { postScene, postCam, mat };
  }

  _applySemanticMasksToScene() {
    const saved = [];
    this.scene.traverse((obj) => {
      if (!obj.isMesh) return;
      saved.push([obj, obj.material]);
      const tag = obj.userData?.maskId;
      if (tag === 'mirror') {
        obj.material = this.maskMaterials.mirror;
        return;
      }
      if (tag === 'foreground') {
        obj.material = this.maskMaterials.foreground;
        return;
      }
      if (tag === 'alina') {
        const orig = Array.isArray(obj.material) ? obj.material[0] : obj.material;
        const mName = (orig?.name || '').toLowerCase();
        if (mName.includes('eye') || mName.includes('cornea') || mName.includes('iris')) {
          obj.material = this.maskMaterials.eyes;
        } else if (mName.includes('hair') || mName.includes('brow') || mName.includes('lash')) {
          obj.material = this.maskMaterials.hair;
        } else if (mName.includes('cloth') || mName.includes('wardrobe') || mName.includes('outfit') || mName.includes('dress')) {
          obj.material = this.maskMaterials.wardrobe;
        } else if (mName.includes('skin') || mName.includes('head') || mName.includes('body')) {
          obj.material = this.maskMaterials.skin;
        } else {
          // Atlas único Alina_Custom_PBR -> segmentación UV + croma en shader
          this.maskMaterials.alinaAtlas.uniforms.uDiffuse.value = orig?.map || null;
          this.maskMaterials.alinaAtlas.uniforms.uHasMap.value = orig?.map ? 1.0 : 0.0;
          obj.material = this.maskMaterials.alinaAtlas;
        }
        return;
      }
      obj.material = this.maskMaterials.environment;
    });
    return saved;
  }

  _restoreSceneMaterials(saved) {
    if (!saved) return;
    for (const [obj, mat] of saved) {
      obj.material = mat;
    }
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

  updateDepthRangeForFocus(focusPoint, lockedBounds = null) {
    if (lockedBounds && lockedBounds.uNear != null && lockedBounds.uFar != null) {
      this.depthMaterial.uniforms.uNear.value = lockedBounds.uNear;
      this.depthMaterial.uniforms.uFar.value = lockedBounds.uFar;
      return;
    }
    const dist = this.camera.position.distanceTo(focusPoint);
    this.depthMaterial.uniforms.uNear.value = Math.max(0.4, dist * 0.28);
    this.depthMaterial.uniforms.uFar.value = Math.max(dist + 8.0, dist * 2.8);
  }

  /** Cambia el pase activo del visor en tiempo real ('beauty' | 'depth' | 'normals' | 'mask'). */
  setRenderPass(pass = 'beauty', focusPoint = null, lockedBounds = null) {
    if (this._activeMaskRestore) {
      this._restoreSceneMaterials(this._activeMaskRestore);
      this._activeMaskRestore = null;
    }
    this.scene.overrideMaterial = null;
    this.activePass = pass;
    this.isDepthPass = pass === 'depth';
    this.lockedDepthBounds = lockedBounds;

    const isUtility = pass !== 'beauty';
    this.scene.traverse((obj) => {
      if (obj.userData?.hideOnDepthPass) obj.visible = !isUtility;
    });

    if (pass === 'depth') {
      if (focusPoint || lockedBounds) {
        this.updateDepthRangeForFocus(focusPoint || this.controls.target, lockedBounds);
      }
      this.scene.overrideMaterial = this.depthMaterial;
      this.lighting.setDepthFogDisabled(true);
      this.renderer.setClearColor(0x000000, 1);
    } else if (pass === 'normals') {
      this.scene.overrideMaterial = this.normalsMaterial;
      this.lighting.setDepthFogDisabled(true);
      this.renderer.setClearColor(0x8080ff, 1);
    } else if (pass === 'mask') {
      this._activeMaskRestore = this._applySemanticMasksToScene();
      this.lighting.setDepthFogDisabled(true);
      this.renderer.setClearColor(0x000000, 1);
    } else {
      this.lighting.setDepthFogDisabled(false);
    }
  }

  setDepthPass(enabled, focusPoint = null) {
    this.setRenderPass(enabled ? 'depth' : 'beauty', focusPoint);
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
    if (this.activePass === 'depth') {
      this.updateDepthRangeForFocus(this.controls.target, this.lockedDepthBounds);
    }
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Renderiza un fotograma vertical 9:16 (por defecto 1080×1920) en el pase solicitado:
   *   passOrForceDepth: false/'beauty' | true/'depth' | 'normals' | 'mask'
   *   options: { dof: { enabled, focalLengthMm, apertureFStop, focusDistM }, depthBoundsM: { uNear, uFar } }
   */
  renderVertical916DataURL(width = 1080, height = 1920, passOrForceDepth = null, options = {}) {
    const pass =
      passOrForceDepth === true
        ? 'depth'
        : passOrForceDepth === false || passOrForceDepth === null
          ? (passOrForceDepth === false ? 'beauty' : this.activePass)
          : passOrForceDepth;

    const prevOverride = this.scene.overrideMaterial;
    const prevFog = this.scene.fog;
    const prevBg = this.scene.background;
    const prevDepthDisabled = this.lighting.depthFogDisabled;
    const prevSize = this.renderer.getSize(new THREE.Vector2());
    const prevPR = this.renderer.getPixelRatio();

    if (this._activeMaskRestore) {
      this._restoreSceneMaterials(this._activeMaskRestore);
      this._activeMaskRestore = null;
    }

    const isUtility = pass !== 'beauty';
    const prevHidden = [];
    this.scene.traverse((obj) => {
      if (obj.userData?.hideOnDepthPass) {
        prevHidden.push([obj, obj.visible]);
        obj.visible = !isUtility;
      }
    });

    const cam916 = this.camera.clone();
    cam916.aspect = width / height;
    cam916.updateProjectionMatrix();

    this.renderer.setPixelRatio(1);
    this.renderer.setSize(width, height, false);

    let tempMaskSaved = null;
    if (pass === 'depth') {
      this.updateDepthRangeForFocus(this.controls.target, options.depthBoundsM || null);
      this.scene.overrideMaterial = this.depthMaterial;
      this.lighting.setDepthFogDisabled(true);
      this.scene.background = null;
      this.renderer.setClearColor(0x000000, 1);
      this.renderer.render(this.scene, cam916);
    } else if (pass === 'normals') {
      this.scene.overrideMaterial = this.normalsMaterial;
      this.lighting.setDepthFogDisabled(true);
      this.scene.background = null;
      this.renderer.setClearColor(0x8080ff, 1);
      this.renderer.render(this.scene, cam916);
    } else if (pass === 'mask') {
      this.scene.overrideMaterial = null;
      tempMaskSaved = this._applySemanticMasksToScene();
      this.lighting.setDepthFogDisabled(true);
      this.scene.background = null;
      this.renderer.setClearColor(0x000000, 1);
      this.renderer.render(this.scene, cam916);
      this._restoreSceneMaterials(tempMaskSaved);
    } else {
      // Beauty Pass (con Bokeh Óptico CoC real si options.dof está activo)
      this.scene.overrideMaterial = null;
      this.lighting.setDepthFogDisabled(false);
      this.renderer.render(this.scene, cam916);

      if (options.dof && options.dof.enabled) {
        this._applyOpticalBokehOnCanvas(width, height, cam916, options.dof);
      }
    }

    const dataURL = this.renderer.domElement.toDataURL('image/png');

    // Restaurar escena y viewport interactivo
    for (const [obj, vis] of prevHidden) obj.visible = vis;
    this.renderer.setPixelRatio(prevPR);
    this.renderer.setSize(prevSize.x, prevSize.y, false);
    this.scene.overrideMaterial = prevOverride;
    this.lighting.setDepthFogDisabled(prevDepthDisabled);
    this.scene.fog = prevFog;
    this.scene.background = prevBg;
    if (this.activePass === 'mask') {
      this._activeMaskRestore = this._applySemanticMasksToScene();
    }
    this.renderer.render(this.scene, this.camera);

    return dataURL;
  }

  _applyOpticalBokehOnCanvas(width, height, cam916, dof) {
    // 1. Copiar Beauty ya tonemapeado en sRGB desde el canvas actual
    const copyCanvas = document.createElement('canvas');
    copyCanvas.width = width;
    copyCanvas.height = height;
    copyCanvas.getContext('2d').drawImage(this.renderer.domElement, 0, 0);
    const beautyTex = new THREE.CanvasTexture(copyCanvas);
    beautyTex.minFilter = THREE.LinearFilter;
    beautyTex.magFilter = THREE.LinearFilter;
    beautyTex.colorSpace = THREE.NoColorSpace;

    // 2. Renderizar mapa de profundidad métrica (en metros + flag espejo) a un RenderTarget offscreen
    const depthRT = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      type: THREE.UnsignedByteType,
      depthBuffer: true
    });

    const prevBg = this.scene.background;
    const prevFog = this.scene.fog;
    const savedMats = [];
    const savedVis = [];
    this.scene.traverse((obj) => {
      if (obj.userData?.hideOnDepthPass) {
        savedVis.push([obj, obj.visible]);
        obj.visible = false;
      } else if (obj.isMesh) {
        savedMats.push([obj, obj.material]);
        obj.material = obj.userData?.maskId === 'mirror'
          ? this.metricMirrorDepthMaterial
          : this.metricDepthMaterial;
      }
    });

    this.lighting.setDepthFogDisabled(true);
    this.scene.background = null;
    this.renderer.setRenderTarget(depthRT);
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.clear();
    this.renderer.render(this.scene, cam916);
    this.renderer.setRenderTarget(null);

    for (const [obj, mat] of savedMats) obj.material = mat;
    for (const [obj, vis] of savedVis) obj.visible = vis;
    this.scene.background = prevBg;
    this.scene.fog = prevFog;
    this.lighting.setDepthFogDisabled(false);

    // 3. Ejecutar shader de Círculo de Confusión (CoC) sobre el framebuffer principal
    const u = this._bokeh.mat.uniforms;
    u.tBeauty.value = beautyTex;
    u.tMetricDepth.value = depthRT.texture;
    u.uResolution.value.set(width, height);
    u.uFocalMm.value = dof.focalLengthMm || 50;
    u.uFStop.value = dof.apertureFStop || 1.8;
    u.uFocusDistM.value = dof.focusDistM || dof.startFocusDistM || 2.5;
    u.uSensorHeightMm.value = dof.sensorHeightMm || 36.0;

    const prevColorSpace = this.renderer.outputColorSpace;
    const prevToneMapping = this.renderer.toneMapping;
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.render(this._bokeh.postScene, this._bokeh.postCam);
    this.renderer.outputColorSpace = prevColorSpace;
    this.renderer.toneMapping = prevToneMapping;

    beautyTex.dispose();
    depthRT.dispose();
  }

  /**
   * Proyecta el esqueleto 3D de Alina (glTF / Mixamo bones) + ojos a un mapa OpenPose 2D 1080×1920 + JSON.
   */
  renderOpenPose916(width = 1080, height = 1920, alinaRoot = null) {
    const cam916 = this.camera.clone();
    cam916.aspect = width / height;
    cam916.updateProjectionMatrix();
    cam916.updateMatrixWorld(true);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    if (!alinaRoot) {
      return { dataUrl: canvas.toDataURL('image/png'), keypoints: {} };
    }

    alinaRoot.updateMatrixWorld(true);
    const bonesByName = new Map();
    alinaRoot.traverse((o) => {
      if (o.isBone) {
        const clean = o.name.replace(/^mixamorig:?/i, '');
        bonesByName.set(clean, o);
      }
    });

    const getWorld = (names, localOffset = null) => {
      for (const n of names) {
        const b = bonesByName.get(n);
        if (b) {
          const v = localOffset ? localOffset.clone().applyMatrix4(b.matrixWorld) : new THREE.Vector3().setFromMatrixPosition(b.matrixWorld);
          return v;
        }
      }
      return null;
    };

    const rawJoints = {
      nose:       getWorld(['Head'], new THREE.Vector3(0, 0.08, 0.11)),
      leftEye:    getWorld(['LeftEye']) || getWorld(['Head'], new THREE.Vector3(0.032, 0.105, 0.095)),
      rightEye:   getWorld(['RightEye']) || getWorld(['Head'], new THREE.Vector3(-0.032, 0.105, 0.095)),
      leftEar:    getWorld(['Head'], new THREE.Vector3(0.075, 0.095, 0.01)),
      rightEar:   getWorld(['Head'], new THREE.Vector3(-0.075, 0.095, 0.01)),
      neck:       getWorld(['Neck', 'Spine2']),
      rShoulder:  getWorld(['RightArm', 'RightShoulder']),
      rElbow:     getWorld(['RightForeArm']),
      rWrist:     getWorld(['RightHand']),
      lShoulder:  getWorld(['LeftArm', 'LeftShoulder']),
      lElbow:     getWorld(['LeftForeArm']),
      lWrist:     getWorld(['LeftHand']),
      midHip:     getWorld(['Hips']),
      rHip:       getWorld(['RightUpLeg']),
      rKnee:      getWorld(['RightLeg']),
      rAnkle:     getWorld(['RightFoot']),
      lHip:       getWorld(['LeftUpLeg']),
      lKnee:      getWorld(['LeftLeg']),
      lAnkle:     getWorld(['LeftFoot'])
    };

    const keypoints = {};
    for (const [k, wPos] of Object.entries(rawJoints)) {
      if (!wPos) continue;
      const ndc = wPos.clone().project(cam916);
      const inFront = ndc.z >= -1 && ndc.z <= 1;
      const x = (ndc.x * 0.5 + 0.5) * width;
      const y = (-ndc.y * 0.5 + 0.5) * height;
      const visible = inFront && x >= -120 && x <= width + 120 && y >= -120 && y <= height + 120;
      keypoints[k] = {
        x: +x.toFixed(1),
        y: +y.toFixed(1),
        normX: +(x / width).toFixed(4),
        normY: +(y / height).toFixed(4),
        confidence: visible ? 1.0 : 0.0
      };
    }

    // Conexiones estándar ControlNet OpenPose COCO-18
    const limbs = [
      ['neck', 'rShoulder', '#ff0000'],
      ['neck', 'lShoulder', '#ff5500'],
      ['rShoulder', 'rElbow', '#ffaa00'],
      ['rElbow', 'rWrist', '#ffff00'],
      ['lShoulder', 'lElbow', '#aaff00'],
      ['lElbow', 'lWrist', '#55ff00'],
      ['neck', 'midHip', '#00ff00'],
      ['midHip', 'rHip', '#00ff55'],
      ['rHip', 'rKnee', '#00ffaa'],
      ['rKnee', 'rAnkle', '#00ffff'],
      ['midHip', 'lHip', '#00aaff'],
      ['lHip', 'lKnee', '#0055ff'],
      ['lKnee', 'lAnkle', '#0000ff'],
      ['neck', 'nose', '#5500ff'],
      ['nose', 'rEye', '#aa00ff'],
      ['rEye', 'rEar', '#ff00ff'],
      ['nose', 'lEye', '#ff00aa'],
      ['lEye', 'lEar', '#ff0055']
    ];
    // Fix aliases for eyes/ears keys
    keypoints.rEye = keypoints.rightEye;
    keypoints.lEye = keypoints.leftEye;
    keypoints.rEar = keypoints.rightEar;
    keypoints.lEar = keypoints.leftEar;

    ctx.lineCap = 'round';
    ctx.lineWidth = Math.max(6, Math.round(width * 0.0075));
    for (const [a, b, color] of limbs) {
      const pa = keypoints[a];
      const pb = keypoints[b];
      if (!pa || !pb || pa.confidence < 0.5 || pb.confidence < 0.5) continue;
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.stroke();
    }

    const rJoint = Math.max(5, Math.round(width * 0.006));
    for (const [k, p] of Object.entries(keypoints)) {
      if (['rEye', 'lEye', 'rEar', 'lEar'].includes(k)) continue;
      if (!p || p.confidence < 0.5) continue;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, rJoint, 0, Math.PI * 2);
      ctx.fill();
    }

    delete keypoints.rEye;
    delete keypoints.lEye;
    delete keypoints.rEar;
    delete keypoints.lEar;

    return {
      dataUrl: canvas.toDataURL('image/png'),
      keypoints
    };
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
