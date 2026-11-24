import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { buildContactShadowTexture } from './textures.js';

export class AlinaAvatarController {
  constructor(scene) {
    this.scene = scene;
    this.root = null;
    this.mixer = null;
    this.actions = {};
    this.currentActionName = null;
    this.loaded = false;
  }

  async load(url = './models/alina.glb') {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(url);
    this.root = gltf.scene;

    this.root.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        if (obj.material) {
          obj.material.envMapIntensity = 0.75;
          obj.material.needsUpdate = true;
        }
      }
    });

    this.mixer = new THREE.AnimationMixer(this.root);
    for (const clip of gltf.animations || []) {
      const action = this.mixer.clipAction(clip);
      if (clip.name === 'Laying') {
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
      } else {
        action.setLoop(THREE.LoopRepeat);
      }
      this.actions[clip.name] = action;
    }

    this.scene.add(this.root);

    // Soft contact shadow directly under Alina's feet (hidden during Depth Pass)
    const shadowTex = buildContactShadowTexture();
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1
    });
    const shadowQuad = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 1.15), shadowMat);
    shadowQuad.rotation.x = -Math.PI / 2;
    shadowQuad.position.y = 0.015;
    shadowQuad.userData.hideOnDepthPass = true;
    this.root.add(shadowQuad);

    this.loaded = true;
    this.playAnimation('Idle');
    return Object.keys(this.actions);
  }

  playAnimation(name, fadeSec = 0.35) {
    if (!this.loaded) return;
    const next = this.actions[name] || this.actions.Idle || Object.values(this.actions)[0];
    if (!next) return;

    const prev = this.currentActionName ? this.actions[this.currentActionName] : null;
    if (prev && prev !== next) {
      next.reset();
      next.play();
      prev.crossFadeTo(next, fadeSec, true);
    } else {
      next.reset();
      next.play();
    }
    this.currentActionName = next.getClip().name;
  }

  placeAtSpot(spot) {
    if (!this.root || !spot) return;
    this.root.position.set(spot.alinaPos.x, spot.alinaPos.y, spot.alinaPos.z);
    this.root.rotation.set(0, spot.alinaRotY || 0, 0);
    if (spot.defaultAnim) {
      this.playAnimation(spot.defaultAnim, 0.3);
    }
  }

  update(delta) {
    if (this.mixer) {
      this.mixer.update(delta);
    }
  }
}
