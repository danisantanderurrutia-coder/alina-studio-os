import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { FLOOR_HEIGHT, BUILDING_WIDTH, BUILDING_DEPTH, BUILDING_CENTER_Z } from '../data/sanctuaryData.js';
import {
  buildSignTexture,
  buildDanceFloorTexture,
  buildSideWindowTexture,
  loadPolyHavenPBR,
  buildContactShadowTexture,
  buildGalleryArtTexture
} from './textures.js';

const gltfModelLoader = new GLTFLoader();
const gltfPromiseCache = new Map();

function loadCachedGLTF(modelId) {
  if (!gltfPromiseCache.has(modelId)) {
    gltfPromiseCache.set(modelId, gltfModelLoader.loadAsync(`./polyhaven/models/${modelId}/${modelId}.gltf`));
  }
  return gltfPromiseCache.get(modelId);
}

export function buildSanctuaryArchitecture(scene, lighting) {
  const floorGroups = [];
  const waterMeshes = [];
  const frontGlassPanels = [];

  // Shared 1K CC0 Poly Haven PBR Materials
  const pbrAsphalt = loadPolyHavenPBR('asphalt_02', { repeatX: 8, repeatY: 5.5 });
  const matAsphalt = new THREE.MeshStandardMaterial({
    ...pbrAsphalt,
    color: 0x9aa0aa,
    roughness: 1.0,
    metalness: 0.03
  });
  const pbrConcrete = loadPolyHavenPBR('brushed_concrete_04', { repeatX: 9, repeatY: 1.2 });
  const matSidewalk = new THREE.MeshStandardMaterial({
    ...pbrConcrete,
    color: 0xd0d4dc,
    roughness: 1.0,
    metalness: 0.04
  });
  const matYellowLine = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.65 });

  const pbrParquet = loadPolyHavenPBR('herringbone_parquet', { repeatX: 6.5, repeatY: 4.0 });
  const matWalnutFloor = new THREE.MeshStandardMaterial({
    ...pbrParquet,
    color: 0xe6d3c2,
    normalScale: new THREE.Vector2(0.75, 0.75),
    roughness: 0.92,
    metalness: 0.04
  });

  const pbrMarbleDark = loadPolyHavenPBR('marble_01', { repeatX: 5.2, repeatY: 3.2 });
  const matDarkMarble = new THREE.MeshStandardMaterial({
    ...pbrMarbleDark,
    color: 0x2d333f,
    normalScale: new THREE.Vector2(0.5, 0.5),
    roughness: 0.72,
    metalness: 0.1
  });
  const pbrMarbleWhite = loadPolyHavenPBR('marble_01', { repeatX: 5.2, repeatY: 3.2 });
  const matWhiteMarble = new THREE.MeshStandardMaterial({
    ...pbrMarbleWhite,
    color: 0xf5f2ec,
    normalScale: new THREE.Vector2(0.45, 0.45),
    roughness: 0.76,
    metalness: 0.06
  });

  const pbrBrick = loadPolyHavenPBR('brick_wall_005', { repeatX: 8, repeatY: 1.8 });
  const matBrick = new THREE.MeshStandardMaterial({
    ...pbrBrick,
    color: 0xcab8b0,
    normalScale: new THREE.Vector2(0.9, 0.9),
    roughness: 1.0,
    metalness: 0.02
  });

  const pbrPlaster = loadPolyHavenPBR('beige_wall_001', { repeatX: 6, repeatY: 1.6 });
  const matPlaster = new THREE.MeshStandardMaterial({
    ...pbrPlaster,
    color: 0x454957,
    normalScale: new THREE.Vector2(0.55, 0.55),
    roughness: 1.0,
    metalness: 0.02
  });
  const pbrGranite = loadPolyHavenPBR('granite_tile_02', { repeatX: 8, repeatY: 1.6 });
  const matExteriorStone = new THREE.MeshStandardMaterial({
    ...pbrGranite,
    color: 0xa4aab3,
    normalScale: new THREE.Vector2(0.7, 0.7),
    roughness: 1.0,
    metalness: 0.06
  });
  const sideWinTex = buildSideWindowTexture();
  const matSideWindow = new THREE.MeshStandardMaterial({
    map: sideWinTex,
    emissiveMap: sideWinTex,
    emissive: new THREE.Color(0xffcfa0),
    emissiveIntensity: 1.2,
    roughness: 0.25
  });
  lighting.registerEmissive(matSideWindow, { dayIntensity: 0.35, nightIntensity: 1.25 });
  const matDivider = new THREE.MeshStandardMaterial({
    ...pbrPlaster,
    color: 0x4b4f5e,
    normalScale: new THREE.Vector2(0.45, 0.45),
    roughness: 1.0,
    metalness: 0.02
  });
  const pbrPlanks = loadPolyHavenPBR('brown_planks_03', { repeatX: 6, repeatY: 4 });
  const matTeak = new THREE.MeshStandardMaterial({
    ...pbrPlanks,
    color: 0xd8c3b0,
    normalScale: new THREE.Vector2(0.75, 0.75),
    roughness: 1.0,
    metalness: 0.04
  });
  const matWoodDark = new THREE.MeshStandardMaterial({ color: 0x3b2418, roughness: 0.48, metalness: 0.08 });
  const matWoodOak = new THREE.MeshStandardMaterial({
    ...loadPolyHavenPBR('brown_planks_03', { repeatX: 2, repeatY: 1 }),
    color: 0xd9bf9f,
    roughness: 0.88,
    metalness: 0.04
  });
  const matCopper = new THREE.MeshStandardMaterial({ color: 0xc86446, roughness: 0.28, metalness: 0.88 });
  const matBrass = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.25, metalness: 0.9 });
  const matChrome = new THREE.MeshStandardMaterial({ color: 0xd4d8df, roughness: 0.18, metalness: 0.92 });
  const matSteel = new THREE.MeshStandardMaterial({ color: 0x1e222b, roughness: 0.45, metalness: 0.75 });
  const pbrVelvet = loadPolyHavenPBR('velour_velvet', { repeatX: 2, repeatY: 2 });
  const matEmeraldVelvet = new THREE.MeshStandardMaterial({
    ...pbrVelvet,
    color: 0x10785a,
    normalScale: new THREE.Vector2(0.7, 0.7),
    roughness: 1.0,
    metalness: 0.02
  });
  const matCrimsonVelvet = new THREE.MeshStandardMaterial({
    ...pbrVelvet,
    color: 0xa61d34,
    normalScale: new THREE.Vector2(0.7, 0.7),
    roughness: 1.0,
    metalness: 0.02
  });
  const matCharcoalLinen = new THREE.MeshStandardMaterial({ color: 0x2a2d36, roughness: 0.92, metalness: 0.02 });
  const matCreamLinen = new THREE.MeshStandardMaterial({ color: 0xe7e1d6, roughness: 0.88, metalness: 0.02 });
  const pbrLeather = loadPolyHavenPBR('fabric_leather_02', { repeatX: 2, repeatY: 2 });
  const matCognacLeather = new THREE.MeshStandardMaterial({
    ...pbrLeather,
    color: 0x9c532d,
    normalScale: new THREE.Vector2(0.65, 0.65),
    roughness: 0.9,
    metalness: 0.05
  });
  const matBlackLeather = new THREE.MeshStandardMaterial({
    ...pbrLeather,
    color: 0x262830,
    normalScale: new THREE.Vector2(0.65, 0.65),
    roughness: 0.85,
    metalness: 0.08
  });
  const matMirror = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.04, metalness: 0.98 });
  const matMoulding = new THREE.MeshStandardMaterial({ color: 0xc2bdae, roughness: 0.72, metalness: 0.02 });
  const contactShadowTex = buildContactShadowTexture();
  const matContactShadow = new THREE.MeshBasicMaterial({
    map: contactShadowTex,
    transparent: true,
    opacity: 0.68,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1
  });
  const matArt1 = new THREE.MeshStandardMaterial({ map: buildGalleryArtTexture(1), roughness: 0.35, metalness: 0.04 });
  const matArt2 = new THREE.MeshStandardMaterial({ map: buildGalleryArtTexture(2), roughness: 0.35, metalness: 0.04 });
  const matGlass = new THREE.MeshPhysicalMaterial({
    color: 0xa5f3fc,
    roughness: 0.08,
    metalness: 0.1,
    transparent: true,
    opacity: 0.28,
    transmission: 0.35
  });
  const matFrostedGlass = new THREE.MeshStandardMaterial({
    color: 0xd1dce2,
    roughness: 0.45,
    metalness: 0.1,
    transparent: true,
    opacity: 0.55
  });
  const matWater = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    roughness: 0.08,
    metalness: 0.35,
    transparent: true,
    opacity: 0.78
  });
  const matWarmBulb = new THREE.MeshStandardMaterial({
    color: 0xfff3d1,
    emissive: new THREE.Color(0xffc978),
    emissiveIntensity: 1.8,
    roughness: 0.2
  });
  lighting.registerEmissive(matWarmBulb, { dayIntensity: 0.5, nightIntensity: 2.2 });

  const matNeonMagenta = new THREE.MeshStandardMaterial({
    color: 0xff2a85,
    emissive: new THREE.Color(0xff1e78),
    emissiveIntensity: 1.8
  });
  lighting.registerEmissive(matNeonMagenta, { dayIntensity: 0.4, nightIntensity: 2.4 });

  const matNeonCyan = new THREE.MeshStandardMaterial({
    color: 0x00e5ff,
    emissive: new THREE.Color(0x00d9ff),
    emissiveIntensity: 1.8
  });
  lighting.registerEmissive(matNeonCyan, { dayIntensity: 0.3, nightIntensity: 2.0 });

  // Helper to add shadows & mesh cleanly
  function box(parent, w, h, d, x, y, z, mat, cast = true, receive = true) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = cast;
    m.receiveShadow = receive;
    parent.add(m);
    return m;
  }

  function cyl(parent, rTop, rBot, h, seg, x, y, z, mat, cast = true) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), mat);
    m.position.set(x, y, z);
    m.castShadow = cast;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }

  function addFloorBase(group, floorIndex, floorMat) {
    // Main interior slab
    box(group, BUILDING_WIDTH, 0.26, BUILDING_DEPTH, 0, -0.13, BUILDING_CENTER_Z, floorMat, false, true);
    // Exterior cornice band on front open-side cutaway edge + brushed brass hairline accent
    box(group, BUILDING_WIDTH + 0.5, 0.34, 0.38, 0, -0.13, 1.55, matSteel, true, true);
    box(group, BUILDING_WIDTH + 0.52, 0.06, 0.06, 0, 0.01, 1.73, matBrass, false, false);

    // Interior walls (open front South facade for cutaway dollhouse visibility)
    box(group, BUILDING_WIDTH, FLOOR_HEIGHT, 0.3, 0, FLOOR_HEIGHT / 2, BUILDING_CENTER_Z - BUILDING_DEPTH / 2, floorIndex === 3 || floorIndex === 0 ? matBrick : matPlaster);
    box(group, 0.3, FLOOR_HEIGHT, BUILDING_DEPTH, -BUILDING_WIDTH / 2, FLOOR_HEIGHT / 2, BUILDING_CENTER_Z, matPlaster);
    box(group, 0.3, FLOOR_HEIGHT, BUILDING_DEPTH, BUILDING_WIDTH / 2, FLOOR_HEIGHT / 2, BUILDING_CENTER_Z, matPlaster);

    // Exterior architectural limestone shell (North, West, East) + illuminated loft side-window bays
    box(group, BUILDING_WIDTH + 0.36, FLOOR_HEIGHT, 0.16, 0, FLOOR_HEIGHT / 2, BUILDING_CENTER_Z - BUILDING_DEPTH / 2 - 0.19, matExteriorStone);
    box(group, 0.16, FLOOR_HEIGHT, BUILDING_DEPTH + 0.16, -BUILDING_WIDTH / 2 - 0.19, FLOOR_HEIGHT / 2, BUILDING_CENTER_Z, matExteriorStone);
    box(group, 0.16, FLOOR_HEIGHT, BUILDING_DEPTH + 0.16, BUILDING_WIDTH / 2 + 0.19, FLOOR_HEIGHT / 2, BUILDING_CENTER_Z, matExteriorStone);
    if (floorIndex >= 1 && floorIndex <= 3) {
      for (const wz of [-4.2, -9.8]) {
        box(group, 0.08, 3.1, 2.5, -BUILDING_WIDTH / 2 - 0.28, FLOOR_HEIGHT * 0.52, wz, matSideWindow, false, false);
        box(group, 0.08, 3.1, 2.5, BUILDING_WIDTH / 2 + 0.28, FLOOR_HEIGHT * 0.52, wz, matSideWindow, false, false);
      }
    }

    // Ceiling cutaway cove beam along top perimeter (gives tall 4.9m rooms architectural framing)
    box(group, BUILDING_WIDTH + 0.2, 0.24, 0.24, 0, FLOOR_HEIGHT - 0.12, 1.45, matSteel, false, false);
    box(group, BUILDING_WIDTH, 0.24, 0.36, 0, FLOOR_HEIGHT - 0.12, BUILDING_CENTER_Z - BUILDING_DEPTH / 2 + 0.18, matDivider, false, false);

    // Modernist front facade columns
    for (const px of [-12.85, -5.2, 4.4, 12.85]) {
      box(group, 0.38, FLOOR_HEIGHT, 0.38, px, FLOOR_HEIGHT / 2, 1.45, matSteel);
    }
    // Vertical elevator + staircase core (East wing X = +10.2..+12.7, Z = -14.2..-10.0)
    const elevWall = box(group, 0.1, FLOOR_HEIGHT, 4.2, 10.2, FLOOR_HEIGHT / 2, -12.1, matGlass, false, false);
    elevWall.castShadow = false;
    box(group, 1.8, 0.14, 1.8, 11.4, 0.08, -12.8, matSteel);
    box(group, 0.08, FLOOR_HEIGHT, 0.08, 10.6, FLOOR_HEIGHT / 2, -11.9, matNeonCyan, false, false);
    // Stepped staircase connecting 4.9m levels (floors 0..3)
    if (floorIndex < 4) {
      const steps = 14;
      for (let s = 0; s < steps; s++) {
        const sy = (s + 0.5) * (FLOOR_HEIGHT / steps);
        const sz = -10.5 + s * 0.38;
        box(group, 1.3, 0.16, 0.4, 11.4, sy, sz, matWoodOak);
      }
    }

    // Architectural Baseboards, Crown Mouldings & Pilasters (4.9m height scale cues)
    box(group, BUILDING_WIDTH - 0.3, 0.14, 0.06, 0, 0.07, BUILDING_CENTER_Z - BUILDING_DEPTH / 2 + 0.16, matWoodDark, false, true);
    box(group, 0.06, 0.14, BUILDING_DEPTH - 0.3, -BUILDING_WIDTH / 2 + 0.16, 0.07, BUILDING_CENTER_Z, matWoodDark, false, true);
    box(group, 0.06, 0.14, BUILDING_DEPTH - 0.3, BUILDING_WIDTH / 2 - 0.16, 0.07, BUILDING_CENTER_Z, matWoodDark, false, true);
    box(group, BUILDING_WIDTH - 0.3, 0.12, 0.16, 0, FLOOR_HEIGHT - 0.09, BUILDING_CENTER_Z - BUILDING_DEPTH / 2 + 0.2, matMoulding, false, false);
    box(group, 0.16, 0.12, BUILDING_DEPTH - 0.3, -BUILDING_WIDTH / 2 + 0.2, FLOOR_HEIGHT - 0.09, BUILDING_CENTER_Z, matMoulding, false, false);
    box(group, 0.16, 0.12, BUILDING_DEPTH - 0.3, BUILDING_WIDTH / 2 - 0.2, FLOOR_HEIGHT - 0.09, BUILDING_CENTER_Z, matMoulding, false, false);
    for (const px of [-10.5, -5.0, 0.2, 4.4, 9.6]) {
      box(group, 0.28, FLOOR_HEIGHT, 0.12, px, FLOOR_HEIGHT / 2, BUILDING_CENTER_Z - BUILDING_DEPTH / 2 + 0.18, matMoulding, false, true);
    }
  }

  function addContactShadow(parent, x, z, radiusX = 0.75, radiusZ = 0.75, y = 0.015) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(radiusX * 2, radiusZ * 2), matContactShadow);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, y, z);
    m.userData.hideOnDepthPass = true;
    parent.add(m);
    return m;
  }

  function placeGLTFModel(parent, modelId, targetHeight, x, y, z, rotYRad = 0, { addShadow = true, customArtMat = null } = {}) {
    loadCachedGLTF(modelId).then((gltf) => {
      const obj = gltf.scene.clone(true);
      obj.rotation.set(0, rotYRad, 0);
      obj.updateMatrixWorld(true);

      const b0 = new THREE.Box3().setFromObject(obj);
      const size0 = new THREE.Vector3();
      b0.getSize(size0);
      const scale = targetHeight / Math.max(0.05, size0.y);
      obj.scale.multiplyScalar(scale);
      obj.updateMatrixWorld(true);

      const b1 = new THREE.Box3().setFromObject(obj);
      const center1 = new THREE.Vector3();
      const size1 = new THREE.Vector3();
      b1.getCenter(center1);
      b1.getSize(size1);

      obj.position.set(x - center1.x, y - b1.min.y, z - center1.z);
      obj.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (customArtMat && child.material) {
            const matName = String(child.material.name || '').toLowerCase();
            if (matName.includes('artwork')) {
              child.material = customArtMat;
            } else if (matName.includes('glass')) {
              child.material = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                roughness: 0.06,
                metalness: 0.05,
                transparent: true,
                opacity: 0.1,
                depthWrite: false
              });
            }
          }
          if (child.material?.aoMap) child.material.aoMap.channel = 0;
        }
      });
      parent.add(obj);
      if (addShadow) {
        addContactShadow(parent, x, z, Math.max(0.32, size1.x * 0.58), Math.max(0.32, size1.z * 0.58), y + 0.014);
      }
    }).catch((err) => console.warn('[PolyHaven GLTF]', modelId, err));
  }

  function addCandle(parent, x, y, z, withLight = false) {
    cyl(parent, 0.045, 0.045, 0.16, 10, x, y + 0.08, z, matCreamLinen);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), matWarmBulb);
    flame.scale.set(0.8, 1.5, 0.8);
    flame.position.set(x, y + 0.2, z);
    parent.add(flame);
    if (withLight) {
      const pl = new THREE.PointLight(0xffa94d, 5.5, 7.0, 1.5);
      pl.position.set(x, y + 0.32, z);
      parent.add(pl);
      lighting.registerLight(pl, { dayIntensity: 0.8, nightIntensity: 5.5, flicker: true });
    }
  }

  function addPlantPot(parent, x, y, z, scale = 1.0) {
    placeGLTFModel(parent, 'potted_plant_04', 1.35 * scale, x, y, z, x * 0.35, { addShadow: true });
  }

  function addChair(parent, x, y, z, rotY = 0, seatMat = matWoodDark) {
    const cg = new THREE.Group();
    cg.position.set(x, y, z);
    cg.rotation.y = rotY;
    cyl(cg, 0.23, 0.23, 0.05, 16, 0, 0.45, 0, seatMat);
    for (const [lx, lz] of [[-0.16, -0.16], [0.16, -0.16], [-0.16, 0.16], [0.16, 0.16]]) {
      cyl(cg, 0.022, 0.018, 0.44, 8, lx, 0.22, lz, matSteel);
    }
    box(cg, 0.42, 0.38, 0.05, 0, 0.68, -0.19, seatMat);
    parent.add(cg);
  }

  function addCar(parent, x, z, rotY, colorHex) {
    const car = new THREE.Group();
    car.position.set(x, 0, z);
    car.rotation.y = rotY;
    const bodyMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.2, metalness: 0.85 });
    const glassCabMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.9 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x111216, roughness: 0.88 });
    const tailMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: new THREE.Color(0xdc2626), emissiveIntensity: 1.5 });

    // Lower chassis & sloped cabin
    box(car, 1.92, 0.58, 4.3, 0, 0.56, 0, bodyMat);
    box(car, 1.62, 0.52, 2.25, 0, 1.08, -0.25, bodyMat);
    box(car, 1.56, 0.42, 1.85, 0, 1.08, -0.25, glassCabMat);
    // 4 wheels + rims
    for (const [wx, wz] of [[-0.94, 1.32], [0.94, 1.32], [-0.94, -1.32], [0.94, -1.32]]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.24, 18), tireMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wx, 0.36, wz);
      wheel.castShadow = true;
      car.add(wheel);

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.26, 12), matChrome);
      rim.rotation.z = Math.PI / 2;
      rim.position.set(wx, 0.36, wz);
      car.add(rim);
    }
    // Headlights & taillights
    box(car, 0.38, 0.14, 0.08, -0.62, 0.62, 2.16, matWarmBulb, false);
    box(car, 0.38, 0.14, 0.08, 0.62, 0.62, 2.16, matWarmBulb, false);
    box(car, 0.42, 0.12, 0.08, -0.62, 0.65, -2.16, tailMat, false);
    box(car, 0.42, 0.12, 0.08, 0.62, 0.65, -2.16, tailMat, false);

    parent.add(car);
  }

  // =========================================================================
  // NIVEL 0 (PLANTA BAJA): PARKING EXTERIOR + CABARET NOCTURNE (PORTADO UNITY)
  // =========================================================================
  const pb = new THREE.Group();
  pb.position.y = 0;
  scene.add(pb);
  floorGroups[0] = pb;

  // Exterior Asphalt Parking Lot (28m x 18m at Z = +1.5..+19.5)
  box(pb, 28.0, 0.24, 18.0, 0, -0.12, 10.5, matAsphalt, false, true);
  // Concrete Sidewalk (28m x 3.3m)
  box(pb, 28.0, 0.16, 3.3, 0, 0.08, 3.15, matSidewalk, false, true);
  // 8 Yellow Parking Lines
  for (let i = -3; i <= 3; i++) {
    box(pb, 0.14, 0.02, 5.4, i * 3.4, 0.015, 12.5, matYellowLine, false, true);
  }
  // 4 Composite Cars
  addCar(pb, -8.5, 12.5, 0, 0xb91c1c);
  addCar(pb, -5.1, 12.5, 0, 0x111827);
  addCar(pb, 5.1, 12.5, 0, 0xe2e8f0);
  addCar(pb, 8.5, 12.5, Math.PI, 0x7c2d12);

  // 3 Streetlamps (left, right, far parking — NOT blocking center entrance!)
  for (const [lx, lz] of [[-11.5, 4.9], [11.5, 4.9], [-11.5, 16.5]]) {
    cyl(pb, 0.08, 0.14, 5.2, 12, lx, 2.6, lz, matSteel);
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 14), matWarmBulb);
    lantern.position.set(lx, 5.3, lz);
    pb.add(lantern);
  }
  const parkingLight = new THREE.PointLight(0xffcf88, 22.0, 32, 1.3);
  parkingLight.position.set(0, 6.2, 8.5);
  pb.add(parkingLight);
  lighting.registerLight(parkingLight, { dayIntensity: 1.0, nightIntensity: 22.0 });

  // VIP Entrance Canopy, Neon "NOCTURNE" Sign, Red Carpet & Brass Stanchions
  box(pb, 6.4, 0.24, 3.4, 0, 3.45, 3.1, matSteel);
  const signTex = buildSignTexture('NOCTURNE', '#120610', '#ff2a85', 'CABARET  •  SPEAKEASY  •  VIP');
  const matSign = new THREE.MeshStandardMaterial({
    map: signTex,
    emissiveMap: signTex,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 1.5,
    roughness: 0.2
  });
  lighting.registerEmissive(matSign, { dayIntensity: 0.4, nightIntensity: 1.7 });
  box(pb, 4.8, 0.9, 0.14, 0, 4.0, 4.78, matSign, false);
  box(pb, 2.3, 0.03, 4.2, 0, 0.175, 3.4, matCrimsonVelvet, false, true);
  for (const sx of [-1.25, 1.25]) {
    for (const sz of [1.8, 3.3, 4.7]) {
      cyl(pb, 0.04, 0.09, 0.92, 10, sx, 0.62, sz, matBrass);
    }
    box(pb, 0.05, 0.05, 3.0, sx, 0.96, 3.25, matCrimsonVelvet);
  }

  // Interior Cabaret Floor + Central Neon Dance Floor
  addFloorBase(pb, 0, matDarkMarble);
  const matDance = new THREE.MeshStandardMaterial({
    map: buildDanceFloorTexture(12, 9, 1.5),
    roughness: 0.16,
    metalness: 0.45
  });
  box(pb, 12.0, 0.04, 9.0, 0, 0.02, -5.2, matDance, false, true);
  box(pb, 12.15, 0.05, 0.12, 0, 0.03, -0.7, matNeonCyan, false);
  box(pb, 12.15, 0.05, 0.12, 0, 0.03, -9.7, matNeonCyan, false);
  box(pb, 0.12, 0.05, 9.1, -6.0, 0.03, -5.2, matNeonCyan, false);
  box(pb, 0.12, 0.05, 9.1, 6.0, 0.03, -5.2, matNeonCyan, false);

  // Stage & Crimson Velvet Curtains
  box(pb, 8.6, 0.45, 3.8, 0, 0.225, -12.1, matWalnutFloor);
  for (const cx of [-4.6, -4.1, 4.1, 4.6]) {
    cyl(pb, 0.26, 0.28, FLOOR_HEIGHT - 0.1, 14, cx, FLOOR_HEIGHT / 2, -13.7, matCrimsonVelvet);
  }

  // West Bar Counter + Backlit Bottles + Barstools
  box(pb, 1.6, 1.08, 7.6, -9.6, 0.54, -5.6, matDarkMarble);
  box(pb, 1.75, 0.08, 7.8, -9.6, 1.1, -5.6, matCopper);
  box(pb, 0.45, 2.5, 7.0, -12.5, 1.4, -5.6, matWoodDark);
  for (let bz = -8.4; bz <= -2.8; bz += 0.7) {
    cyl(pb, 0.055, 0.055, 0.28, 10, -12.4, 1.55, bz, bz % 1.4 === 0 ? matCopper : matNeonCyan);
    cyl(pb, 0.055, 0.055, 0.28, 10, -12.4, 2.15, bz, matWarmBulb);
  }
  for (let sz = -8.2; sz <= -3.0; sz += 1.3) {
    cyl(pb, 0.2, 0.2, 0.06, 14, -8.3, 0.76, sz, matCrimsonVelvet);
    cyl(pb, 0.04, 0.06, 0.74, 10, -8.3, 0.37, sz, matBrass);
  }

  // Grand Piano (Compound: contoured body, open lid + prop, 3 legs, keys, bench)
  const piano = new THREE.Group();
  piano.position.set(-5.8, 0, -11.2);
  piano.rotation.y = 0.45;
  const matPianoLacquer = new THREE.MeshStandardMaterial({ color: 0x0b0c10, roughness: 0.08, metalness: 0.55 });
  box(piano, 1.6, 0.28, 2.1, 0, 0.78, 0, matPianoLacquer);
  box(piano, 1.54, 0.06, 0.35, 0, 0.72, 1.08, matCreamLinen); // White keys
  const lid = box(piano, 1.56, 0.05, 1.85, 0.25, 1.16, -0.05, matPianoLacquer);
  lid.rotation.z = -0.35;
  cyl(piano, 0.02, 0.02, 0.55, 8, 0.65, 1.05, 0.2, matBrass); // Prop stick
  for (const [lx, lz] of [[-0.65, 0.85], [0.65, 0.85], [0, -0.85]]) {
    cyl(piano, 0.05, 0.035, 0.7, 10, lx, 0.35, lz, matPianoLacquer);
  }
  box(piano, 0.9, 0.08, 0.4, 0, 0.48, 1.65, matBlackLeather);
  box(piano, 0.82, 0.44, 0.34, 0, 0.22, 1.65, matPianoLacquer);
  pb.add(piano);

  // 3 Cocktail Tables + Candles
  for (const tz of [-2.5, -5.5, -8.5]) {
    cyl(pb, 0.55, 0.55, 0.06, 20, 8.0, 0.78, tz, matDarkMarble);
    cyl(pb, 0.06, 0.22, 0.75, 12, 8.0, 0.375, tz, matBrass);
    addCandle(pb, 8.0, 0.81, tz, false);
    addChair(pb, 7.15, 0, tz, Math.PI / 2, matCrimsonVelvet);
    addChair(pb, 8.85, 0, tz, -Math.PI / 2, matCrimsonVelvet);
  }
  const cabaretLight = new THREE.PointLight(0xff66b2, 24.0, 30, 1.3);
  cabaretLight.position.set(0, 3.85, -6.5);
  pb.add(cabaretLight);
  lighting.registerLight(cabaretLight, { dayIntensity: 2.0, nightIntensity: 24.0 });

  // =========================================================================
  // NIVEL 1 (PISO 1): LE VELVET CAFÉ & LOUNGE
  // =========================================================================
  const p1 = new THREE.Group();
  p1.position.y = FLOOR_HEIGHT;
  scene.add(p1);
  floorGroups[1] = p1;

  addFloorBase(p1, 1, matWhiteMarble);
  // Front Balcony Railing
  box(p1, BUILDING_WIDTH - 2.6, 0.95, 0.08, -1.2, 0.48, 1.48, matGlass, false);
  box(p1, BUILDING_WIDTH - 2.6, 0.06, 0.14, -1.2, 0.97, 1.48, matSteel);

  // 6m Oak Coffee Bar + Copper La Marzocco Espresso Machine + Pastry Display
  box(p1, 6.2, 1.05, 1.35, -0.5, 0.525, -9.8, matWoodOak);
  box(p1, 6.3, 0.06, 1.45, -0.5, 1.08, -9.8, matWhiteMarble);
  // La Marzocco Espresso Machine
  box(p1, 1.35, 0.52, 0.62, -1.2, 1.36, -9.8, matCopper);
  box(p1, 1.1, 0.18, 0.22, -1.2, 1.25, -9.45, matChrome);
  cyl(p1, 0.1, 0.14, 0.48, 12, 0.1, 1.35, -9.8, matSteel); // Grinder
  // Glass Pastry Case
  box(p1, 1.6, 0.65, 0.72, 1.5, 1.42, -9.75, matGlass, false);
  for (let px = 1.0; px <= 2.0; px += 0.35) {
    cyl(p1, 0.08, 0.1, 0.08, 10, px, 1.15, -9.75, matWoodOak);
  }
  // Cafe Wall Sign
  const cafeSignTex = buildSignTexture('LE VELVET CAFÉ', '#1c1410', '#d99a64', 'SPECIALTY ESPRESSO  •  EIXAMPLE');
  const matCafeSign = new THREE.MeshStandardMaterial({ map: cafeSignTex, emissiveMap: cafeSignTex, emissive: new THREE.Color(0xffdfa8), emissiveIntensity: 1.0 });
  lighting.registerEmissive(matCafeSign, { dayIntensity: 0.3, nightIntensity: 1.2 });
  box(p1, 4.4, 0.8, 0.1, -0.5, 3.1, -14.2, matCafeSign, false);
  placeGLTFModel(p1, 'hanging_picture_frame_01', 1.35, -6.2, 1.85, -14.25, 0, { addShadow: false, customArtMat: matArt1 });
  placeGLTFModel(p1, 'hanging_picture_frame_01', 1.35, 5.2, 1.85, -14.25, 0, { addShadow: false, customArtMat: matArt2 });
  placeGLTFModel(p1, 'coffee_table_round_01', 0.72, -5.8, 0, -4.0, 0.26, { addShadow: true });
  placeGLTFModel(p1, 'coffee_table_round_01', 0.72, 6.0, 0, -4.2, -0.44, { addShadow: true });
  placeGLTFModel(p1, 'ArmChair_01', 0.88, -6.9, 0, -4.0, Math.PI / 2, { addShadow: true });
  placeGLTFModel(p1, 'ArmChair_01', 0.88, 7.1, 0, -4.2, -Math.PI / 2, { addShadow: true });

  // 4 Carrara Bistro Tables + Thonet Chairs
  for (const [tx, tz] of [[-5.8, -4.0], [-2.0, -3.5], [2.2, -3.8], [6.0, -4.2]]) {
    cyl(p1, 0.56, 0.56, 0.05, 22, tx, 0.76, tz, matWhiteMarble);
    cyl(p1, 0.05, 0.22, 0.74, 12, tx, 0.37, tz, matSteel);
    cyl(p1, 0.055, 0.045, 0.08, 10, tx + 0.1, 0.82, tz, matCreamLinen);
    addChair(p1, tx - 0.72, 0, tz, Math.PI / 2, matWoodDark);
    addChair(p1, tx + 0.72, 0, tz, -Math.PI / 2, matWoodDark);
  }
  addPlantPot(p1, -11.5, 0, -12.5, 1.3);
  addPlantPot(p1, 8.8, 0, -12.5, 1.2);
  addPlantPot(p1, -11.2, 0, 0.2, 1.1);

  const cafeLight = new THREE.PointLight(0xffdfb0, 20.0, 28, 1.3);
  cafeLight.position.set(0, 3.85, -5.5);
  p1.add(cafeLight);
  lighting.registerLight(cafeLight, { dayIntensity: 3.0, nightIntensity: 20.0 });

  // =========================================================================
  // NIVEL 2 (PISO 2): RESIDENCIA PRIVADA DE ALINA (4 ZONAS CON TABIQUES)
  // =========================================================================
  const p2 = new THREE.Group();
  p2.position.y = 2 * FLOOR_HEIGHT;
  scene.add(p2);
  floorGroups[2] = p2;

  addFloorBase(p2, 2, matWalnutFloor);

  // Interior Partition Walls with Doorways (West Spa & East Kitchen)
  // West divider at X = -5.0 (doorway Z = -4.2..-2.2)
  box(p2, 0.16, FLOOR_HEIGHT, 9.8, -5.0, FLOOR_HEIGHT / 2, -9.4, matDivider);
  box(p2, 0.16, FLOOR_HEIGHT, 3.6, -5.0, FLOOR_HEIGHT / 2, -0.3, matDivider);
  box(p2, 0.16, FLOOR_HEIGHT - 2.4, 2.0, -5.0, 2.4 + (FLOOR_HEIGHT - 2.4) / 2, -3.2, matDivider); // Door lintel
  // East divider at X = +4.4 (wide archway Z = -9.5..-2.0)
  box(p2, 0.16, FLOOR_HEIGHT, 4.8, 4.4, FLOOR_HEIGHT / 2, -12.0, matDivider);
  box(p2, 0.16, FLOOR_HEIGHT, 3.4, 4.4, FLOOR_HEIGHT / 2, -0.2, matDivider);
  for (const dx of [-4.75, 4.15, -12.65]) {
    cyl(p2, 0.22, 0.22, 4.75, 12, dx, 2.38, 1.15, matCrimsonVelvet);
  }
  placeGLTFModel(p2, 'hanging_picture_frame_01', 1.25, 2.4, 1.95, -14.25, 0, { addShadow: false, customArtMat: matArt1 });
  placeGLTFModel(p2, 'hanging_picture_frame_01', 1.25, -2.8, 2.25, -14.25, 0, { addShadow: false, customArtMat: matArt2 });

  // ZONE 1: TOCADOR VANITY & VESTIDOR (Center North Z: -14.2..-8.5)
  box(p2, 3.2, 0.08, 0.85, -0.4, 0.78, -13.2, matWoodDark);
  box(p2, 3.0, 0.22, 0.78, -0.4, 0.65, -13.2, matWoodOak);
  for (const lx of [-1.8, 1.0]) {
    cyl(p2, 0.035, 0.025, 0.74, 10, lx, 0.37, -13.5, matBrass);
    cyl(p2, 0.035, 0.025, 0.74, 10, lx, 0.37, -12.9, matBrass);
  }
  // Real-Time Planar Reflector Mirror + Depth Fallback Disc + Brass Rim + 12 Bulbs
  const mirrorDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.76, 0.76, 0.04, 36), matMirror);
  mirrorDisc.rotation.x = Math.PI / 2;
  mirrorDisc.position.set(-0.4, 1.65, -13.58);
  p2.add(mirrorDisc);
  const mirrorReflector = new Reflector(new THREE.CircleGeometry(0.74, 36), {
    clipBias: 0.003,
    textureWidth: 512,
    textureHeight: 512,
    color: 0x9aa4b2
  });
  mirrorReflector.position.set(-0.4, 1.65, -13.55);
  mirrorReflector.userData.hideOnDepthPass = true;
  p2.add(mirrorReflector);
  const mirrorFrame = new THREE.Mesh(new THREE.TorusGeometry(0.79, 0.035, 14, 48), matBrass);
  mirrorFrame.position.set(-0.4, 1.65, -13.545);
  p2.add(mirrorFrame);
  for (let b = 0; b < 12; b++) {
    const ba = (b / 12) * Math.PI * 2;
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.038, 10, 10), matWarmBulb);
    bulb.position.set(-0.4 + Math.cos(ba) * 0.78, 1.65 + Math.sin(ba) * 0.78, -13.505);
    p2.add(bulb);
  }
  // Vanity Cosmetics (Amber Perfume Bottles, Crimson Lipstick, Brush Cup, Sculpted Tufted Ottoman_01)
  const matAmberGlass = new THREE.MeshPhysicalMaterial({ color: 0xd97706, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.85 });
  cyl(p2, 0.045, 0.045, 0.14, 12, 0.35, 0.89, -13.1, matAmberGlass);
  cyl(p2, 0.02, 0.02, 0.04, 10, 0.35, 0.98, -13.1, matBrass);
  cyl(p2, 0.032, 0.032, 0.11, 12, 0.52, 0.88, -13.15, matAmberGlass);
  cyl(p2, 0.015, 0.015, 0.08, 10, 0.22, 0.86, -13.05, matBrass); // Lipstick tube
  cyl(p2, 0.012, 0.012, 0.04, 10, 0.22, 0.91, -13.05, matCrimsonVelvet);
  cyl(p2, 0.045, 0.04, 0.12, 12, -1.05, 0.88, -13.1, matCreamLinen); // Brush cup
  placeGLTFModel(p2, 'Ottoman_01', 0.48, -0.4, 0, -12.05, -0.26, { addShadow: true });

  // Walk-In Wardrobe Rack (West of Vanity)
  box(p2, 1.6, 0.06, 0.65, -3.5, 0.03, -13.2, matWoodDark);
  cyl(p2, 0.02, 0.02, 2.0, 8, -4.2, 1.0, -13.2, matBrass);
  cyl(p2, 0.02, 0.02, 2.0, 8, -2.8, 1.0, -13.2, matBrass);
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.45, 8), matBrass);
  rail.rotation.z = Math.PI / 2;
  rail.position.set(-3.5, 1.98, -13.2);
  p2.add(rail);
  for (let gx = -4.0; gx <= -3.0; gx += 0.24) {
    box(p2, 0.14, 1.1, 0.38, gx, 1.38, -13.2, gx % 0.48 === 0 ? matEmeraldVelvet : matBlackLeather);
  }

  const vanityLight = new THREE.PointLight(0xffd7a3, 10.0, 14, 1.4);
  vanityLight.position.set(-0.4, 1.85, -11.4);
  p2.add(vanityLight);
  lighting.registerLight(vanityLight, { dayIntensity: 2.5, nightIntensity: 10.0 });

  // ZONE 2: BAÑO SPA (West X: -12.8..-5.0)
  const tubOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.82, 0.66, 28), matDarkMarble);
  tubOuter.scale.set(1.35, 1.0, 0.72);
  tubOuter.position.set(-9.0, 0.33, -7.8);
  tubOuter.castShadow = true;
  p2.add(tubOuter);
  const tubWater = new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.86, 0.04, 28), matWater);
  tubWater.scale.set(1.3, 1.0, 0.68);
  tubWater.position.set(-9.0, 0.62, -7.8);
  p2.add(tubWater);
  waterMeshes.push(tubWater);
  // Brass freestanding tub faucet
  cyl(p2, 0.025, 0.03, 0.95, 10, -10.5, 0.48, -7.8, matBrass);
  box(p2, 0.25, 0.04, 0.04, -10.38, 0.94, -7.8, matBrass);
  // Frosted Glass Shower Screen & Teak Towel Bench
  box(p2, 0.08, 2.4, 2.8, -6.4, 1.2, -10.6, matFrostedGlass, false);
  box(p2, 1.2, 0.42, 0.5, -11.2, 0.21, -10.8, matTeak);
  for (let tx = -11.55; tx <= -10.85; tx += 0.35) {
    const towel = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.34, 12), matCreamLinen);
    towel.rotation.x = Math.PI / 2;
    towel.position.set(tx, 0.52, -10.8);
    p2.add(towel);
  }
  addCandle(p2, -7.8, 0.66, -7.1, true);
  addCandle(p2, -8.2, 0.0, -6.6, false);
  addCandle(p2, -10.1, 0.0, -6.9, false);

  // ZONE 3: COCINA & COMEDOR DE AUTOR (East X: +4.4..+10.0)
  box(p2, 1.35, 0.94, 3.6, 7.3, 0.47, -8.0, matDarkMarble);
  box(p2, 1.45, 0.06, 3.7, 7.3, 0.96, -8.0, matDarkMarble);
  // Brass Faucet & Espresso Cup on Island
  cyl(p2, 0.02, 0.025, 0.38, 10, 7.4, 1.16, -7.4, matBrass);
  cyl(p2, 0.055, 0.045, 0.09, 12, 6.8, 1.03, -8.3, matCreamLinen);
  // 3 Copper Pendant Lamps
  for (const pz of [-9.0, -8.0, -7.0]) {
    const rodH = FLOOR_HEIGHT - 2.35;
    cyl(p2, 0.01, 0.01, rodH, 8, 7.3, 2.35 + rodH / 2, pz, matSteel, false);
    cyl(p2, 0.1, 0.22, 0.24, 16, 7.3, 2.25, pz, matCopper);
  }
  // 3 Barstools
  for (const sz of [-9.0, -8.0, -7.0]) {
    cyl(p2, 0.2, 0.2, 0.06, 16, 6.1, 0.68, sz, matCognacLeather);
    cyl(p2, 0.035, 0.05, 0.66, 10, 6.1, 0.33, sz, matSteel);
  }
  // Dining Table & 4 Chairs
  box(p2, 1.8, 0.06, 1.1, 7.3, 0.75, -2.5, matWoodDark);
  for (const [lx, lz] of [[6.5, -2.95], [8.1, -2.95], [6.5, -2.05], [8.1, -2.05]]) {
    cyl(p2, 0.03, 0.02, 0.72, 8, lx, 0.36, lz, matSteel);
  }
  addChair(p2, 6.8, 0, -1.65, Math.PI, matCognacLeather);
  addChair(p2, 7.8, 0, -1.65, Math.PI, matCognacLeather);
  addChair(p2, 6.8, 0, -3.35, 0, matCognacLeather);
  addChair(p2, 7.8, 0, -3.35, 0, matCognacLeather);

  const kitchenLight = new THREE.PointLight(0xffd39c, 10.0, 14, 1.4);
  kitchenLight.position.set(7.1, 2.15, -7.8);
  p2.add(kitchenLight);
  lighting.registerLight(kitchenLight, { dayIntensity: 2.0, nightIntensity: 10.0 });

  // ZONE 4: SUITE PRINCIPAL (Center-South Z: -6.2..+1.2)
  // Area Rug + King Bed + Low 1.22m Headboard (won't block vanity view) + Bedside Lamps
  box(p2, 3.6, 0.02, 3.8, -0.5, 0.01, -3.1, matCharcoalLinen, false, true);
  box(p2, 2.15, 0.32, 2.3, -0.5, 0.16, -3.2, matWoodDark);
  box(p2, 2.02, 0.28, 2.18, -0.5, 0.45, -3.2, matCreamLinen);
  box(p2, 2.08, 0.16, 1.45, -0.5, 0.56, -2.75, matCharcoalLinen); // Charcoal duvet
  for (const px of [-0.95, -0.05]) {
    box(p2, 0.72, 0.14, 0.44, px, 0.66, -3.95, matCreamLinen);
  }
  box(p2, 2.45, 1.22, 0.18, -0.5, 0.61, -4.4, matEmeraldVelvet);
  // 2 Sculpted Bedside Nightstands (ClassicNightstand_01) + Lamps
  for (const nx of [-2.15, 1.15]) {
    placeGLTFModel(p2, 'ClassicNightstand_01', 0.58, nx, 0, -4.15, 0, { addShadow: true });
    cyl(p2, 0.04, 0.08, 0.24, 12, nx, 0.70, -4.15, matBrass);
    cyl(p2, 0.14, 0.2, 0.22, 16, nx, 0.90, -4.15, matWarmBulb);
  }
  const suiteLight = new THREE.PointLight(0xffb870, 8.5, 12, 1.4);
  suiteLight.position.set(-0.5, 1.45, -3.6);
  p2.add(suiteLight);
  lighting.registerLight(suiteLight, { dayIntensity: 1.5, nightIntensity: 8.5 });

  // Eixample Balcony Railing + Sculpted Coffee Table + Accent ArmChair
  box(p2, BUILDING_WIDTH - 2.6, 0.95, 0.08, -1.2, 0.48, 1.48, matGlass, false);
  box(p2, BUILDING_WIDTH - 2.6, 0.06, 0.14, -1.2, 0.97, 1.48, matSteel);
  placeGLTFModel(p2, 'coffee_table_round_01', 0.65, 2.5, 0, 0.65, 0, { addShadow: true });
  placeGLTFModel(p2, 'ArmChair_01', 0.88, -3.3, 0, -1.5, -0.66, { addShadow: true });

  // =========================================================================
  // NIVEL 3 (PISO 3): THE MIND SANCTUARY (PODCAST & CLÍNICA + BOUDOIR SSC)
  // =========================================================================
  const p3 = new THREE.Group();
  p3.position.y = 3 * FLOOR_HEIGHT;
  scene.add(p3);
  floorGroups[3] = p3;

  addFloorBase(p3, 3, matWalnutFloor);
  box(p3, BUILDING_WIDTH - 2.6, 0.95, 0.08, -1.2, 0.48, 1.48, matGlass, false);
  // Center divider separating Podcast/Clinical (West) from Sensory Boudoir (East)
  box(p3, 0.18, FLOOR_HEIGHT, 9.0, 0.2, FLOOR_HEIGHT / 2, -9.8, matDivider);
  for (const dx of [-12.6, -0.1, 9.6]) {
    cyl(p3, 0.22, 0.22, 4.75, 12, dx, 2.38, 1.15, matEmeraldVelvet);
  }
  placeGLTFModel(p3, 'hanging_picture_frame_01', 1.35, -4.8, 2.25, -14.25, 0, { addShadow: false, customArtMat: matArt2 });
  placeGLTFModel(p3, 'hanging_picture_frame_01', 1.35, 4.8, 2.45, -14.25, 0, { addShadow: false, customArtMat: matArt1 });

  // WEST WING: PODCAST STUDIO + CLINICAL LIBRARY
  box(p3, 3.2, 0.08, 1.35, -4.8, 0.8, -10.5, matWoodDark);
  for (const lx of [-6.2, -3.4]) {
    box(p3, 0.08, 0.78, 1.1, lx, 0.39, -10.5, matSteel);
  }
  // Boom Arm + Shure SM7B Microphone + Audio Interface + Headphones Stand + Edison Lamp
  cyl(p3, 0.02, 0.025, 0.65, 8, -4.2, 1.15, -10.4, matSteel);
  const micBody = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.22, 14), matSteel);
  micBody.rotation.x = Math.PI / 3;
  micBody.position.set(-4.5, 1.42, -10.1);
  p3.add(micBody);
  box(p3, 0.32, 0.08, 0.2, -5.5, 0.88, -10.3, matSteel); // Interface
  box(p3, 0.05, 0.03, 0.02, -5.5, 0.88, -10.19, matNeonCyan, false);
  cyl(p3, 0.02, 0.06, 0.32, 10, -3.7, 1.0, -10.5, matBrass); // Headphone stand
  const lampHead = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), matWarmBulb);
  lampHead.position.set(-6.0, 1.32, -10.6);
  p3.add(lampHead);
  cyl(p3, 0.02, 0.09, 0.42, 10, -6.0, 1.05, -10.6, matBrass);
  // Floor-to-ceiling Bookshelf filled with colorful books
  box(p3, 0.55, 3.8, 6.4, -12.4, 1.9, -7.2, matWoodDark);
  const bookColors = [0x7c2d12, 0x064e3b, 0x1e293b, 0x991b1b, 0xb45309, 0x312e81];
  for (let shelfY = 0.45; shelfY <= 3.45; shelfY += 0.5) {
    for (let bz = -10.0; bz <= -4.4; bz += 0.28) {
      const bm = new THREE.MeshStandardMaterial({ color: bookColors[Math.abs(Math.round(bz * 10 + shelfY)) % bookColors.length], roughness: 0.75 });
      box(p3, 0.32, 0.36, 0.18, -12.35, shelfY, bz, bm);
    }
  }
  // Sculpted Leather/Velvet Psychoanalytic Sofa (Sofa_01)
  placeGLTFModel(p3, 'Sofa_01', 0.88, -5.5, 0, -4.2, -1.48, { addShadow: true });

  const podcastLight = new THREE.PointLight(0xffb86c, 15.0, 18, 1.3);
  podcastLight.position.set(-4.8, 2.95, -9.2);
  p3.add(podcastLight);
  lighting.registerLight(podcastLight, { dayIntensity: 2.0, nightIntensity: 11.0 });

  // EAST WING: SENSORY BOUDOIR SSC (Emerald Headboard, Shibari Ropes, 3Dio Binaural Mic)
  box(p3, 2.4, 1.6, 0.22, 4.8, 0.8, -12.4, matEmeraldVelvet);
  box(p3, 2.2, 0.52, 2.2, 4.8, 0.26, -11.2, matBlackLeather);
  box(p3, 2.15, 0.14, 1.8, 4.8, 0.56, -11.0, matCharcoalLinen);
  // Shibari Rope Rack (Wall Panel with Purple & Black Silk Coils)
  box(p3, 1.8, 1.5, 0.08, 8.2, 1.55, -14.2, matWoodDark);
  const matLilacRope = new THREE.MeshStandardMaterial({ color: 0x7e22ce, roughness: 0.5 });
  for (let rx = 7.6; rx <= 8.8; rx += 0.4) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 10, 20), rx > 8.1 ? matBlackLeather : matLilacRope);
    coil.position.set(rx, 1.6, -14.12);
    p3.add(coil);
  }
  // 3Dio Binaural Microphone on Tripod
  cyl(p3, 0.025, 0.04, 1.05, 10, 4.8, 0.525, -8.8, matSteel);
  box(p3, 0.28, 0.14, 0.12, 4.8, 1.12, -8.8, matCreamLinen);
  addCandle(p3, 6.4, 0.0, -9.5, true);

  // =========================================================================
  // NIVEL 4 (PISO 4): PENTHOUSE ROOFTOP «THE INNER CIRCLE»
  // =========================================================================
  const p4 = new THREE.Group();
  p4.position.y = 4 * FLOOR_HEIGHT;
  scene.add(p4);
  floorGroups[4] = p4;

  // Teak Deck Slab (no solid high side walls — open panoramic sky & glass balustrade)
  box(p4, BUILDING_WIDTH, 0.24, BUILDING_DEPTH, 0, -0.12, BUILDING_CENTER_Z, matTeak, false, true);
  box(p4, BUILDING_WIDTH, 1.05, 0.08, 0, 0.525, 1.45, matGlass, false);
  box(p4, BUILDING_WIDTH, 1.05, 0.08, 0, 0.525, -14.45, matGlass, false);
  box(p4, 0.08, 1.05, BUILDING_DEPTH, -12.95, 0.525, BUILDING_CENTER_Z, matGlass, false);
  box(p4, 0.08, 1.05, BUILDING_DEPTH, 12.95, 0.525, BUILDING_CENTER_Z, matGlass, false);

  // Basalt Plunge Pool (7.0m x 4.2m) + Submerged Steps + Underwater Cyan Light
  box(p4, 7.4, 0.65, 4.6, -3.0, 0.325, -6.8, matDarkMarble);
  const poolSurface = box(p4, 6.8, 0.08, 4.0, -3.0, 0.58, -6.8, matWater, false, true);
  waterMeshes.push(poolSurface);
  box(p4, 1.4, 0.24, 0.7, -5.5, 0.36, -5.3, matDarkMarble);
  const poolLight = new THREE.PointLight(0x22d3ee, 14.0, 16, 1.4);
  poolLight.position.set(-3.0, 0.5, -6.8);
  p4.add(poolLight);
  lighting.registerLight(poolLight, { dayIntensity: 2.0, nightIntensity: 14.0 });

  // 2 Teak Sun Loungers + Cream Linen Cushions
  for (const lz of [-8.2, -5.6]) {
    box(p4, 2.1, 0.24, 0.95, -9.0, 0.12, lz, matTeak);
    box(p4, 1.5, 0.12, 0.88, -8.75, 0.28, lz, matCreamLinen);
    const backRest = box(p4, 0.62, 0.12, 0.88, -9.75, 0.44, lz, matCreamLinen);
    backRest.rotation.z = 0.48;
  }

  // Bioclimatic Pergola over Copper Cocktail Bar
  for (const [px, pz] of [[2.2, -11.5], [8.8, -11.5], [2.2, -6.8], [8.8, -6.8]]) {
    box(p4, 0.18, 3.6, 0.18, px, 1.8, pz, matSteel);
  }
  for (let lz = -11.4; lz <= -6.8; lz += 0.48) {
    box(p4, 6.8, 0.08, 0.18, 5.5, 3.6, lz, matSteel);
  }
  // Hammered Copper Bar + Backlit Liquor Display + Stools
  box(p4, 4.6, 1.08, 1.15, 5.5, 0.54, -9.8, matCopper);
  box(p4, 4.75, 0.06, 1.25, 5.5, 1.1, -9.8, matDarkMarble);
  box(p4, 4.4, 2.1, 0.45, 5.5, 1.1, -11.4, matWoodDark);
  for (let bx = 3.6; bx <= 7.4; bx += 0.55) {
    cyl(p4, 0.05, 0.05, 0.28, 10, bx, 1.45, -11.35, bx % 1.1 === 0 ? matWarmBulb : matCopper);
  }
  for (let sx = 3.8; sx <= 7.2; sx += 1.1) {
    cyl(p4, 0.2, 0.2, 0.06, 14, sx, 0.76, -8.8, matCreamLinen);
    cyl(p4, 0.035, 0.05, 0.74, 10, sx, 0.37, -8.8, matSteel);
  }
  const barLight = new THREE.PointLight(0xffb76b, 10.0, 14, 1.4);
  barLight.position.set(5.5, 2.45, -9.2);
  p4.add(barLight);
  lighting.registerLight(barLight, { dayIntensity: 2.0, nightIntensity: 10.0 });

  // 6 Terracotta Planters
  for (const [px, pz] of [[-11.8, -13.0], [-11.8, -1.0], [0.5, -13.0], [11.5, -13.0], [11.5, -1.0], [2.0, -1.0]]) {
    addPlantPot(p4, px, 0, pz, 1.25);
  }

  addPlantPot(p2, -11.6, 0, -5.8, 1.0);
  return {
    floorGroups,
    waterMeshes,
    frontGlassPanels,
    mirrorReflector
  };
}
