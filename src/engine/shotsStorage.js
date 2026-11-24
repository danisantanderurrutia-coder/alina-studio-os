// Persistencia local en IndexedDB para capturas 9:16 (Beauty + Depth) y prompts editados.
// Permite recargar la pestaña sin perder la galería de tomas ni las ediciones manuales.

const DB_NAME = 'AlinaStudioOS_CapturesDB';
const DB_VERSION = 1;
const STORE_NAME = 'shots';
const MAX_SAVED_SHOTS = 24;

let dbPromise = null;

function openShotsDB() {
  if (dbPromise) return dbPromise;
  if (typeof indexedDB === 'undefined') return Promise.resolve(null);

  dbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => {
        console.warn('[ShotsStorage] IndexedDB no disponible:', req.error);
        resolve(null);
      };
    } catch (err) {
      console.warn('[ShotsStorage] Error abriendo IndexedDB:', err);
      resolve(null);
    }
  });
  return dbPromise;
}

function serializeShot(shot) {
  return {
    id: shot.id,
    timestamp: shot.timestamp || Number(String(shot.id).replace('shot-', '')) || Date.now(),
    createdAt: shot.createdAt,
    engine: shot.engine,
    floor: shot.floor,
    floorName: shot.floorName,
    spotId: shot.spot?.id,
    spotSnapshot: shot.spot,
    anim: shot.anim,
    camPreset: shot.camPreset,
    lightingMode: shot.lightingMode,
    sliced: shot.sliced,
    depthPass: shot.depthPass,
    camera: shot.camera,
    framing: shot.framing,
    imageMetrics: shot.imageMetrics,
    cinemaMoveLabel: shot.cinemaMoveLabel,
    image: shot.image,
    depthImage: shot.depthImage || null,
    motionEngine: shot.motionEngine,
    motionStrength: shot.motionStrength,
    fluxPrompt: shot.fluxPrompt,
    motionPrompt: shot.motionPrompt
  };
}

export async function saveShotToDB(shot) {
  const db = await openShotsDB();
  if (!db || !shot?.id) return;

  const record = serializeShot(shot);
  await new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

export async function deleteShotFromDB(id) {
  const db = await openShotsDB();
  if (!db || !id) return;

  await new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

export async function clearAllShotsFromDB() {
  const db = await openShotsDB();
  if (!db) return;

  await new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

export async function loadShotsFromDB(resolveSpotFn) {
  const db = await openShotsDB();
  if (!db) return [];

  const records = await new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });

  records.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  // Podar registros antiguos si superan MAX_SAVED_SHOTS
  if (records.length > MAX_SAVED_SHOTS) {
    const overflow = records.slice(MAX_SAVED_SHOTS);
    overflow.forEach((r) => deleteShotFromDB(r.id));
  }

  return records.slice(0, MAX_SAVED_SHOTS).map((r) => {
    const liveSpot = (resolveSpotFn && r.spotId && resolveSpotFn(r.spotId)) || r.spotSnapshot;
    return {
      ...r,
      spot: liveSpot
    };
  }).filter((s) => Boolean(s.spot && s.image));
}
