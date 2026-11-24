// Persistencia unificada en IndexedDB v2 para Alina Studio OS:
// 1) 'shots': Capturas 9:16 (Beauty + Depth), prompts editados, objetos asociados y capítulo.
// 2) 'objects': Bóveda de Objetos Renderizados (renders subidos o capturados del 3D) para Higgsfield.
// 3) 'chapters': Capítulos cinematográficos de la serie (sinopsis, guion, escaleta de tomas y objetos).

import { SEED_CHAPTERS, SEED_OBJECTS } from '../data/alinaLoreData.js';

const DB_NAME = 'AlinaStudioOS_CapturesDB';
const DB_VERSION = 2;
const STORE_SHOTS = 'shots';
const STORE_OBJECTS = 'objects';
const STORE_CHAPTERS = 'chapters';
const MAX_SAVED_SHOTS = 24;

let dbPromise = null;

function openStudioDB() {
  if (dbPromise) return dbPromise;
  if (typeof indexedDB === 'undefined') return Promise.resolve(null);

  dbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_SHOTS)) {
          const s = db.createObjectStore(STORE_SHOTS, { keyPath: 'id' });
          s.createIndex('timestamp', 'timestamp', { unique: false });
        }
        if (!db.objectStoreNames.contains(STORE_OBJECTS)) {
          db.createObjectStore(STORE_OBJECTS, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORE_CHAPTERS)) {
          db.createObjectStore(STORE_CHAPTERS, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => {
        console.warn('[StudioStorage] IndexedDB no disponible:', req.error);
        resolve(null);
      };
    } catch (err) {
      console.warn('[StudioStorage] Error abriendo IndexedDB:', err);
      resolve(null);
    }
  });
  return dbPromise;
}

function putRecord(db, storeName, record) {
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

function deleteRecord(db, storeName, id) {
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

function getAllRecords(db, storeName) {
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, 'readonly');
    const req = tx.objectStore(storeName).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

// ============================================================================
// 1. CAPTURAS (SHOTS)
// ============================================================================
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
    objectIds: Array.isArray(shot.objectIds) ? shot.objectIds : [],
    chapterId: shot.chapterId || '',
    fluxPrompt: shot.fluxPrompt,
    motionPrompt: shot.motionPrompt
  };
}

export async function saveShotToDB(shot) {
  const db = await openStudioDB();
  if (!db || !shot?.id) return;
  await putRecord(db, STORE_SHOTS, serializeShot(shot));
}

export async function deleteShotFromDB(id) {
  const db = await openStudioDB();
  if (!db || !id) return;
  await deleteRecord(db, STORE_SHOTS, id);
}

export async function loadShotsFromDB(resolveSpotFn) {
  const db = await openStudioDB();
  if (!db) return [];

  const records = await getAllRecords(db, STORE_SHOTS);
  records.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  if (records.length > MAX_SAVED_SHOTS) {
    records.slice(MAX_SAVED_SHOTS).forEach((r) => deleteShotFromDB(r.id));
  }

  return records
    .slice(0, MAX_SAVED_SHOTS)
    .map((r) => ({
      ...r,
      objectIds: Array.isArray(r.objectIds) ? r.objectIds : [],
      chapterId: r.chapterId || '',
      spot: (resolveSpotFn && r.spotId && resolveSpotFn(r.spotId)) || r.spotSnapshot
    }))
    .filter((s) => Boolean(s.spot && s.image));
}

// ============================================================================
// 2. BÓVEDA DE OBJETOS RENDERIZADOS (OBJECTS)
// ============================================================================
export async function loadObjectsFromDB() {
  const db = await openStudioDB();
  if (!db) return [...SEED_OBJECTS];

  const existing = await getAllRecords(db, STORE_OBJECTS);
  if (existing.length === 0) {
    for (let i = 0; i < SEED_OBJECTS.length; i++) {
      await putRecord(db, STORE_OBJECTS, { ...SEED_OBJECTS[i], order: i + 1 });
    }
    return SEED_OBJECTS.map((o, i) => ({ ...o, order: i + 1 }));
  }

  existing.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  return existing;
}

export async function saveObjectToDB(obj) {
  const db = await openStudioDB();
  if (!db || !obj?.id) return;
  await putRecord(db, STORE_OBJECTS, { ...obj });
}

export async function deleteObjectFromDB(id) {
  const db = await openStudioDB();
  if (!db || !id) return;
  await deleteRecord(db, STORE_OBJECTS, id);
}

// ============================================================================
// 3. CAPÍTULOS CINEMATOGRÁFICOS (CHAPTERS)
// ============================================================================
export async function loadChaptersFromDB() {
  const db = await openStudioDB();
  if (!db) return SEED_CHAPTERS.map((c) => ({ ...c }));

  const existing = await getAllRecords(db, STORE_CHAPTERS);
  if (existing.length === 0) {
    for (const ch of SEED_CHAPTERS) {
      await putRecord(db, STORE_CHAPTERS, { ...ch });
    }
    return SEED_CHAPTERS.map((c) => ({ ...c }));
  }

  existing.sort((a, b) => (a.number || 0) - (b.number || 0));
  return existing;
}

export async function saveChapterToDB(chapter) {
  const db = await openStudioDB();
  if (!db || !chapter?.id) return;
  await putRecord(db, STORE_CHAPTERS, { ...chapter });
}

export async function deleteChapterFromDB(id) {
  const db = await openStudioDB();
  if (!db || !id) return;
  await deleteRecord(db, STORE_CHAPTERS, id);
}

// ============================================================================
// UTILIDAD: Normaliza archivos de imagen subidos desde el ordenador (PNG/JPG/WebP)
// ============================================================================
export function readAndResizeImageFile(file, maxEdge = 1440) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('No se pudo leer el archivo de imagen'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Formato de imagen no válido'));
      img.onload = () => {
        const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const keepPng = file.type === 'image/png';
        resolve(keepPng ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg', 0.88));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
