#!/usr/bin/env node
// Renderizador automático en Chrome WebGL2 (Ley de Doble Registro 3D <-> Bóveda)
// Captura Beauty PBR (1080x1080) + Depth 16-bit (1080x1080) para todos los objetos canónicos
// de SEED_OBJECTS y verifica la auto-detección Frustum Auto-Tagging.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PROJECT_ROOT = '/Users/danielsantander/Desktop/alina-studio-os';
const DOCS_DIR = path.join(PROJECT_ROOT, 'docs');
const OUT_PUBLIC_DIR = path.join(PROJECT_ROOT, 'public/vault_renders');
const OUT_DOCS_DIR = path.join(DOCS_DIR, 'vault_renders');

fs.mkdirSync(OUT_PUBLIC_DIR, { recursive: true });
fs.mkdirSync(OUT_DOCS_DIR, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.hdr': 'application/octet-stream',
  '.gltf': 'model/gltf+json',
  '.glb': 'model/gltf-binary',
  '.bin': 'application/octet-stream',
  '.json': 'application/json'
};

const CHROME_BIN = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const userDataDir = `/tmp/chrome-cdp-vault-${process.pid}`;
fs.rmSync(userDataDir, { recursive: true, force: true });
fs.mkdirSync(userDataDir, { recursive: true });

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '/').split('?')[0];
  const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const fullPath = path.resolve(DOCS_DIR, rel);
  if (!fullPath.startsWith(DOCS_DIR) || !fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(fullPath);
  const stat = fs.statSync(fullPath);
  res.writeHead(200, {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Content-Length': stat.size
  });
  fs.createReadStream(fullPath).pipe(res);
});

await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
const url = `http://127.0.0.1:${port}/index.html`;
console.log(`[VaultCDP] Serving ${DOCS_DIR} at ${url}`);

const chrome = spawn(CHROME_BIN, [
  '--headless=new',
  '--remote-debugging-port=0',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  '--use-gl=angle',
  '--enable-webgl',
  '--ignore-gpu-blocklist',
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank'
], { stdio: ['ignore', 'pipe', 'pipe'] });

const debugPort = await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('DevTools timeout')), 15000);
  const scan = (d) => {
    const m = d.toString().match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\//);
    if (m) {
      clearTimeout(t);
      resolve(Number(m[1]));
    }
  };
  chrome.stderr.on('data', scan);
  chrome.stdout.on('data', scan);
});

let ws;
try {
  const targets = await (await fetch(`http://127.0.0.1:${debugPort}/json/list`)).json();
  const page = targets.find((t) => t.type === 'page') || targets[0];
  ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });

  let seq = 1;
  const inflight = new Map();
  const cdp = (method, params = {}) => new Promise((res, rej) => {
    const id = seq++;
    inflight.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params }));
  });

  let readyMatched = false;
  let resolveReady;
  const readyPromise = new Promise((r) => { resolveReady = r; });

  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && inflight.has(msg.id)) {
      const { res, rej } = inflight.get(msg.id);
      inflight.delete(msg.id);
      if (msg.error) rej(new Error(msg.error.message));
      else res(msg.result);
      return;
    }
    if (msg.method === 'Runtime.consoleAPICalled') {
      const txt = (msg.params.args || []).map((a) => a.value ?? a.description ?? '').join(' ');
      if (txt.includes('[AlinaStudioOS] 3D Engine & Double-Registry Vault Ready') && !readyMatched) {
        readyMatched = true;
        resolveReady('ready');
      }
    }
  });

  await cdp('Runtime.enable');
  await cdp('Page.enable');
  await cdp('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await cdp('Page.navigate', { url });

  await Promise.race([
    readyPromise,
    new Promise((r) => setTimeout(() => r('timeout'), 20000))
  ]);

  // Esperar a que todos los modelos GLTF de PolyHaven terminen de descargarse y texturizarse
  await new Promise((r) => setTimeout(r, 4200));

  const listEval = await cdp('Runtime.evaluate', {
    expression: `JSON.stringify(window.__ALINA_STUDIO__.state.objects.map(o => ({ id: o.id, handle: o.handle, floor: o.floor, spotId: o.spotId })))`,
    returnByValue: true
  });
  const objectsList = JSON.parse(listEval.result.value || '[]');
  console.log(`[VaultCDP] Found ${objectsList.length} canonical objects to render in WebGL2...`);

  for (const item of objectsList) {
    const evalRes = await cdp('Runtime.evaluate', {
      expression: `(async () => {
        const api = window.__ALINA_STUDIO__;
        const res = await api.renderVaultObject1080(${JSON.stringify(item.id)});
        return JSON.stringify(res);
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    const data = JSON.parse(evalRes.result.value || 'null');
    if (data && data.beauty && data.depth) {
      const b64Beauty = data.beauty.replace(/^data:image\/png;base64,/, '');
      const b64Depth = data.depth.replace(/^data:image\/png;base64,/, '');
      const beautyName = `${item.id}_beauty.png`;
      const depthName = `${item.id}_depth.png`;
      fs.writeFileSync(path.join(OUT_PUBLIC_DIR, beautyName), Buffer.from(b64Beauty, 'base64'));
      fs.writeFileSync(path.join(OUT_PUBLIC_DIR, depthName), Buffer.from(b64Depth, 'base64'));
      fs.writeFileSync(path.join(OUT_DOCS_DIR, beautyName), Buffer.from(b64Beauty, 'base64'));
      fs.writeFileSync(path.join(OUT_DOCS_DIR, depthName), Buffer.from(b64Depth, 'base64'));
      if (data.whiteBg) {
        const b64White = data.whiteBg.replace(/^data:image\/png;base64,/, '');
        const whiteName = `${item.id}_white.png`;
        fs.writeFileSync(path.join(OUT_PUBLIC_DIR, whiteName), Buffer.from(b64White, 'base64'));
        fs.writeFileSync(path.join(OUT_DOCS_DIR, whiteName), Buffer.from(b64White, 'base64'));
      }
      console.log(`  ✓ Rendered ISOLATED PNG ${item.handle} (${item.id}) -> RGBA Cutout + White BG + Depth 1080x1080`);
    }
  }

  // Verificar Frustum Auto-Tagging en Piso 3 Podcast
  const frustumEval = await cdp('Runtime.evaluate', {
    expression: `(() => {
      const api = window.__ALINA_STUDIO__;
      api.selectFloor(3);
      const sp = api.findSpotById('podcast');
      api.selectSpot(sp);
      const detected = api.detectObjectsInCameraFrustum();
      return JSON.stringify(detected.map(o => o.handle));
    })()`,
    returnByValue: true
  });
  console.log(`[VaultCDP] Frustum Auto-Tagging (Piso 3 Podcast): ${frustumEval.result.value}`);

  // Abrir la vista de Bóveda de Objetos con el Importador Web desplegado y capturar screenshot de verificación
  await cdp('Runtime.evaluate', {
    expression: `(() => {
      const api = window.__ALINA_STUDIO__;
      api.switchMainView('objects');
      document.getElementById('btn-obj-toggle-web-import')?.click();
    })()`,
    returnByValue: true
  });
  await new Promise((r) => setTimeout(r, 900));
  const vaultShot = await cdp('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/alina_vault_verified.png', Buffer.from(vaultShot.data, 'base64'));
  console.log(`[VaultCDP] UI verification screenshot saved to /tmp/alina_vault_verified.png`);
} finally {
  if (ws) ws.close();
  server.close();
  chrome.kill('SIGTERM');
  await new Promise((r) => {
    chrome.once('exit', r);
    setTimeout(r, 1200);
  });
  try {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  } catch (_) {}
}
