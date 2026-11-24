export class UnityWebGLBridge {
  constructor(canvasEl, onProgress, onReady, onScreenshot, onFps, onDepthScreenshot) {
    this.canvasEl = canvasEl;
    this.onProgress = onProgress;
    this.onReady = onReady;
    this.onScreenshot = onScreenshot;
    this.onFps = onFps;
    this.onDepthScreenshot = onDepthScreenshot;
    this.instance = null;
    this.loading = false;
    this.ready = false;
    this.loadStartMs = 0;
    this.loadDurationMs = null;
    this.pendingState = null;

    window.AlinaUnityCallbacks = {
      onReady: () => {
        this.ready = true;
        if (this.pendingState) {
          this.syncFullState(this.pendingState);
        }
        if (this.onReady) this.onReady(this.loadDurationMs);
      },
      onScreenshot: (base64Png) => {
        if (this.onScreenshot) this.onScreenshot(base64Png);
      },
      onDepthScreenshot: (base64Png) => {
        if (this.onDepthScreenshot) this.onDepthScreenshot(base64Png);
      },
      onFps: (fps) => {
        if (this.onFps) this.onFps(fps);
      }
    };
  }

  async ensureLoaded() {
    if (this.instance) return this.instance;
    if (this.loading) return null;

    this.loading = true;
    this.loadStartMs = performance.now();

    const buildUrl = './unity-build/Build';
    const loaderUrl = `${buildUrl}/unity-build.loader.js`;

    await new Promise((resolve, reject) => {
      if (typeof window.createUnityInstance === 'function') {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = loaderUrl;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`No se pudo cargar ${loaderUrl}`));
      document.body.appendChild(script);
    });

    const config = {
      arguments: [],
      dataUrl: `${buildUrl}/unity-build.data.unityweb`,
      frameworkUrl: `${buildUrl}/unity-build.framework.js.unityweb`,
      codeUrl: `${buildUrl}/unity-build.wasm.unityweb`,
      streamingAssetsUrl: './unity-build/StreamingAssets',
      companyName: 'LMNJDRS',
      productName: 'AlinaSanctuary',
      productVersion: '3.0',
      matchWebGLToCanvasSize: true
    };

    this.instance = await window.createUnityInstance(this.canvasEl, config, (progress) => {
      if (this.onProgress) this.onProgress(Math.round(progress * 100));
    });

    this.loadDurationMs = Math.round(performance.now() - this.loadStartMs);
    this.loading = false;
    this.ready = true;
    if (this.pendingState) {
      this.syncFullState(this.pendingState);
    }
    if (this.onReady) this.onReady(this.loadDurationMs);
    return this.instance;
  }

  _send(method, arg) {
    if (!this.instance || !this.ready) return;
    try {
      if (arg === undefined) {
        this.instance.SendMessage('AlinaSanctuaryBridge', method);
      } else {
        this.instance.SendMessage('AlinaSanctuaryBridge', method, arg);
      }
    } catch (err) {
      console.warn('[UnityBridge] SendMessage error:', method, err);
    }
  }

  syncFullState(state) {
    this.pendingState = { ...state };
    if (!this.instance || !this.ready) return;
    this._send('SetLightingMode', state.lightingMode);
    this._send('SetDollhouseSlice', state.sliced ? 1 : 0);
    this._send('SelectFloor', state.floor);
    this._send('SelectSpot', state.spotId);
    if (state.anim) this._send('SetAnimation', state.anim);
    if (state.renderPass) this._send('SetRenderPass', state.renderPass);
  }

  sendRenderPass(pass) {
    if (this.pendingState) this.pendingState.renderPass = pass;
    this._send('SetRenderPass', pass);
  }

  sendFloor(floorNum) {
    if (this.pendingState) this.pendingState.floor = floorNum;
    this._send('SelectFloor', floorNum);
  }

  sendSpot(spotId) {
    if (this.pendingState) this.pendingState.spotId = spotId;
    this._send('SelectSpot', spotId);
  }

  sendLightingMode(mode) {
    if (this.pendingState) this.pendingState.lightingMode = mode;
    this._send('SetLightingMode', mode);
  }

  sendDollhouseSlice(enabled) {
    if (this.pendingState) this.pendingState.sliced = enabled;
    this._send('SetDollhouseSlice', enabled ? 1 : 0);
  }

  sendCameraAngle(angle) {
    this._send('SetCameraAngle', angle);
  }

  sendAnimation(animName) {
    if (this.pendingState) this.pendingState.anim = animName;
    this._send('SetAnimation', animName);
  }

  requestScreenshot916() {
    this._send('CaptureFrame916');
  }

  requestDepthScreenshot916() {
    this._send('CaptureDepth916');
  }
}
