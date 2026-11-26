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
  buildGalleryArtTexture,
  buildPersianRugTexture,
  buildEixampleHydraulicTileTexture
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
  const coutureRacksByFloor = { 0: [], 1: [], 2: [], 3: [], 4: [] };
  // Keep all PointLights in an always-visible root group so toggling floorGroups[i].visible
  // never changes Three.js #define NUM_POINT_LIGHTS (0 shader recompilations on floor switch!)
  const lightsGroup = new THREE.Group();
  lightsGroup.name = 'SanctuaryPersistentLights';
  scene.add(lightsGroup);

  function addPersistentPointLight(floorGroup, color, intensity, distance, decay, x, y, z, lightOpts) {
    const pl = new THREE.PointLight(color, intensity, distance, decay);
    pl.position.set(x, (floorGroup?.position?.y || 0) + y, z);
    lightsGroup.add(pl);
    if (lightOpts) lighting.registerLight(pl, lightOpts);
    return pl;
  }

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
  const matArt3 = new THREE.MeshStandardMaterial({ map: buildGalleryArtTexture(3), roughness: 0.35, metalness: 0.04 });
  const matArt4 = new THREE.MeshStandardMaterial({ map: buildGalleryArtTexture(4), roughness: 0.35, metalness: 0.04 });
  const matArt5 = new THREE.MeshStandardMaterial({ map: buildGalleryArtTexture(5), roughness: 0.35, metalness: 0.04 });
  const matArt6 = new THREE.MeshStandardMaterial({ map: buildGalleryArtTexture(6), roughness: 0.35, metalness: 0.04 });
  const matArts = [null, matArt1, matArt2, matArt3, matArt4, matArt5, matArt6];
  for (let v = 7; v <= 16; v++) {
    matArts[v] = new THREE.MeshStandardMaterial({ map: buildGalleryArtTexture(v), roughness: 0.34, metalness: 0.04 });
  }
  const matObsidianSilk = new THREE.MeshStandardMaterial({ color: 0x14161d, roughness: 0.34, metalness: 0.12 });
  const matTerracotta = new THREE.MeshStandardMaterial({ color: 0x9c4a32, roughness: 0.78, metalness: 0.04 });
  const matBronzePatina = new THREE.MeshStandardMaterial({ color: 0x4a3b28, roughness: 0.32, metalness: 0.84 });

  // Woven PBR Rug & Hydraulic Tile Materials (Production Designer Floor Zoning)
  const pbrWovenLinen = loadPolyHavenPBR('rough_linen', { repeatX: 6, repeatY: 6, includeAO: false });
  const makeRugMat = (palette) =>
    new THREE.MeshStandardMaterial({
      map: buildPersianRugTexture(palette),
      normalMap: pbrWovenLinen.normalMap,
      roughnessMap: pbrWovenLinen.roughnessMap,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughness: 0.96,
      metalness: 0.01
    });
  const matRugCrimson = makeRugMat('crimson');
  const matRugEmerald = makeRugMat('emerald');
  const matRugIvory = makeRugMat('ivory');
  const matRugCharcoal = makeRugMat('charcoal');
  const matHydraulicTile = new THREE.MeshStandardMaterial({
    map: buildEixampleHydraulicTileTexture(5, 4),
    normalMap: pbrConcrete.normalMap,
    normalScale: new THREE.Vector2(0.25, 0.25),
    roughness: 0.58,
    metalness: 0.04
  });
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

    // =========================================================================
    // TECHO ARTESONADO SEÑORIAL (Coffered Architectural Ceiling + Recessed Cove LED)
    // Cierra completamente el techo de cada planta (0% fuga de cielo con Sliced: ON)
    // y baja el entablamento/casetones a Y = 3.52m..4.84m para coronar los encuadres 85mm.
    // =========================================================================
    const isDarkLoft = floorIndex === 0 || floorIndex === 3;
    const ceilingMainMat = isDarkLoft ? matWoodDark : matDivider;
    const beamMat = isDarkLoft ? matWoodDark : matMoulding;

    // 1. Solid main ceiling slab at Y = 4.82m (prevents any sky leak above walls)
    box(group, BUILDING_WIDTH, 0.18, BUILDING_DEPTH, 0, FLOOR_HEIGHT - 0.09, BUILDING_CENTER_Z, ceilingMainMat, false, true);

    // 2. Stepped perimeter entablature soffit + warm recessed LED cove lighting at Y = 3.55m..4.35m
    const northZ = BUILDING_CENTER_Z - BUILDING_DEPTH / 2;
    // Upper soffit drop along North, West & East walls
    box(group, BUILDING_WIDTH - 0.3, 0.56, 0.92, 0, FLOOR_HEIGHT - 0.42, northZ + 0.48, beamMat, false, true);
    box(group, 0.92, 0.56, BUILDING_DEPTH - 0.3, -BUILDING_WIDTH / 2 + 0.48, FLOOR_HEIGHT - 0.42, BUILDING_CENTER_Z, beamMat, false, true);
    box(group, 0.92, 0.56, BUILDING_DEPTH - 0.3, BUILDING_WIDTH / 2 - 0.48, FLOOR_HEIGHT - 0.42, BUILDING_CENTER_Z, beamMat, false, true);
    // Lower frieze beam at Y = 3.56m + brushed brass lip + continuous warm glowing cove strip
    box(group, BUILDING_WIDTH - 0.4, 0.22, 0.52, 0, 3.64, northZ + 0.28, matWoodDark, false, true);
    box(group, BUILDING_WIDTH - 0.4, 0.04, 0.05, 0, 3.54, northZ + 0.54, matBrass, false, false);
    box(group, BUILDING_WIDTH - 0.8, 0.045, 0.06, 0, 3.76, northZ + 0.55, matWarmBulb, false, false);

    box(group, 0.52, 0.22, BUILDING_DEPTH - 0.4, -BUILDING_WIDTH / 2 + 0.28, 3.64, BUILDING_CENTER_Z, matWoodDark, false, true);
    box(group, 0.05, 0.04, BUILDING_DEPTH - 0.4, -BUILDING_WIDTH / 2 + 0.54, 3.54, BUILDING_CENTER_Z, matBrass, false, false);
    box(group, 0.06, 0.045, BUILDING_DEPTH - 0.8, -BUILDING_WIDTH / 2 + 0.55, 3.76, BUILDING_CENTER_Z, matWarmBulb, false, false);

    box(group, 0.52, 0.22, BUILDING_DEPTH - 0.4, BUILDING_WIDTH / 2 - 0.28, 3.64, BUILDING_CENTER_Z, matWoodDark, false, true);
    box(group, 0.05, 0.04, BUILDING_DEPTH - 0.4, BUILDING_WIDTH / 2 - 0.54, 3.54, BUILDING_CENTER_Z, matBrass, false, false);
    box(group, 0.06, 0.045, BUILDING_DEPTH - 0.8, BUILDING_WIDTH / 2 - 0.55, 3.76, BUILDING_CENTER_Z, matWarmBulb, false, false);

    // 3. Intersecting Coffered Ceiling Beams (Casetones Artesonados) + Brass Inlays at Y = 3.74m..4.74m
    for (const bx of [-10.5, -5.0, 0.2, 4.4, 9.6]) {
      box(group, 0.34, 0.96, BUILDING_DEPTH - 0.6, bx, FLOOR_HEIGHT - 0.56, BUILDING_CENTER_Z, beamMat, false, true);
      box(group, 0.06, 0.035, BUILDING_DEPTH - 0.8, bx, FLOOR_HEIGHT - 1.05, BUILDING_CENTER_Z, matBrass, false, false);
    }
    for (const bz of [-12.2, -8.8, -5.2, -1.6]) {
      box(group, BUILDING_WIDTH - 0.6, 0.88, 0.32, 0, FLOOR_HEIGHT - 0.52, bz, beamMat, false, true);
      box(group, BUILDING_WIDTH - 0.8, 0.035, 0.06, 0, FLOOR_HEIGHT - 0.97, bz, matBrass, false, false);
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

  function placeGLTFModel(parent, modelId, targetHeight, x, y, z, rotYRad = 0, { addShadow = true, customArtMat = null, hangFromCeiling = false } = {}) {
    loadCachedGLTF(modelId).then((gltf) => {
      const obj = gltf.scene.clone(true);
      // PolyHaven botanical packs (pachira_aquatica_01, calathea_orbifolia_01, anthurium_botany_01)
      // bundle multiple specimen variants side-by-side at X=-2..+4m. Keep only the primary specimen
      // so the plant sits centered inside its cachepot with 0 floating clusters.
      if (modelId === 'pachira_aquatica_01') {
        for (const ch of [...obj.children]) {
          if (!ch.name.endsWith('_d') && !ch.name.endsWith('_c')) obj.remove(ch);
          else ch.position.set(0, 0, 0);
        }
      } else if (modelId === 'calathea_orbifolia_01' || modelId === 'anthurium_botany_01') {
        for (const ch of [...obj.children]) {
          if (!ch.name.endsWith('_a') && !ch.name.endsWith('_b')) obj.remove(ch);
          else ch.position.set(0, 0, 0);
        }
      }
      const wrap = new THREE.Group();
      wrap.add(obj);
      obj.rotation.set(0, rotYRad, 0);
      wrap.updateMatrixWorld(true);

      const b0 = new THREE.Box3().setFromObject(obj);
      const size0 = new THREE.Vector3();
      b0.getSize(size0);
      const scale = targetHeight / Math.max(0.05, size0.y);
      obj.scale.multiplyScalar(scale);
      wrap.updateMatrixWorld(true);

      const b1 = new THREE.Box3().setFromObject(obj);
      const center1 = new THREE.Vector3();
      const size1 = new THREE.Vector3();
      b1.getCenter(center1);
      b1.getSize(size1);

      const targetY = hangFromCeiling ? (y - b1.max.y) : (y - b1.min.y);
      obj.position.set(x - center1.x, targetY, z - center1.z);
      const castShadowModels = new Set([
        'ArmChair_01',
        'ClassicConsole_01',
        'ClassicNightstand_01',
        'GothicBed_01',
        'GothicCabinet_01',
        'Ottoman_01',
        'Sofa_01',
        'bar_chair_round_01',
        'coffee_table_round_01',
        'dining_chair_02',
        'gothic_statue',
        'mid_century_lounge_chair',
        'modern_wooden_cabinet',
        'side_table_tall_01',
        'street_lamp_01',
        'vintage_day_bed',
        'Shelf_01',
        'steel_frame_shelves_03',
        'wooden_display_shelves_01'
      ]);
      const allowMeshShadow = !hangFromCeiling && castShadowModels.has(modelId);
      obj.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = allowMeshShadow;
          child.receiveShadow = true;
          const matName = String(child.material?.name || '').toLowerCase();
          if (customArtMat && child.material) {
            if (matName.includes('artwork')) {
              child.material = matWoodDark;
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
          } else if (matName.includes('flame') || matName.includes('globe') || matName.includes('lamps_') || matName.endsWith('_light') || matName.includes('bulb') || matName.includes('lantern')) {
            child.material = child.material.clone();
            child.material.emissive = new THREE.Color(0xffc966);
            child.material.emissiveIntensity = 1.9;
            lighting.registerEmissive(child.material, { dayIntensity: 0.35, nightIntensity: 2.1 });
          } else if (matName.includes('glass')) {
            const isGreen = matName.includes('green');
            const isAmber = matName.includes('orange') || matName.includes('yellow');
            child.material = new THREE.MeshPhysicalMaterial({
              color: isGreen ? 0x14532d : (isAmber ? 0xb45309 : 0xdbeafe),
              roughness: 0.08,
              metalness: 0.05,
              transparent: true,
              opacity: isGreen || isAmber ? 0.78 : 0.32,
              depthWrite: false
            });
          }
          if (child.material?.aoMap) child.material.aoMap.channel = 0;
        }
      });
      parent.add(obj);

      if (
        customArtMat &&
        (modelId.startsWith('hanging_picture_frame') || modelId.startsWith('fancy_picture_frame'))
      ) {
        const spanW = Math.max(size1.x, size1.z);
        const canvas = new THREE.Mesh(
          new THREE.PlaneGeometry(Math.max(0.22, spanW * 0.78), Math.max(0.28, size1.y * 0.78)),
          customArtMat
        );
        canvas.rotation.y = rotYRad;
        const depthHalf = Math.min(size1.x, size1.z) * 0.5 + 0.004;
        const fwd = new THREE.Vector3(0, 0, depthHalf).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotYRad);
        canvas.position.set(x + fwd.x, center1.y + targetY, z + fwd.z);
        parent.add(canvas);
      }

      if (addShadow && !hangFromCeiling) {
        addContactShadow(parent, x, z, Math.max(0.26, size1.x * 0.58), Math.max(0.26, size1.z * 0.58), y + 0.014);
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
      addPersistentPointLight(parent, 0xffa94d, 5.5, 7.0, 1.5, x, y + 0.32, z, {
        dayIntensity: 0.8,
        nightIntensity: 5.5,
        flicker: true
      });
    }
  }

  function addPlantPot(parent, x, y, z, scale = 1.0) {
    placeGLTFModel(parent, 'potted_plant_04', 1.35 * scale, x, y, z, x * 0.35, { addShadow: true });
  }

  // Grounded Ceramic / Basalt / Terracotta Cachepot + Lush Sculpted Foliage (Elena Vance + Mateo Santoro)
  function addBotanicalVessel(parent, plantId, x, y, z, scale = 1.0, vesselStyle = 'basalt', rotY = 0) {
    const potMat =
      vesselStyle === 'terracotta'
        ? matTerracotta
        : vesselStyle === 'ivory'
          ? matCreamLinen
          : matDarkMarble;
    const potH = 0.34 * scale;
    const potR = 0.22 * scale;
    cyl(parent, potR, potR * 0.76, potH, 18, x, y + potH * 0.5, z, potMat, true);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(potR * 0.99, 0.014 * scale, 8, 22), matBrass);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(x, y + potH - 0.01, z);
    parent.add(rim);
    cyl(parent, potR * 0.92, potR * 0.9, 0.04, 14, x, y + potH - 0.03, z, matWoodDark, false);
    addContactShadow(parent, x, z, potR * 1.45, potR * 1.45, y + 0.014);
    const foliageH = plantId === 'pachira_aquatica_01' ? 1.85 * scale : 0.68 * scale;
    placeGLTFModel(parent, plantId, foliageH, x, y + potH - 0.05, z, rotY || x * 0.4, { addShadow: false });
  }

  // Planted Wooden Balcony / Terrace Trough (planter_box_01 + multi-species tropical foliage)
  function addPlantedBox(parent, x, y, z, rotY = 0, scale = 1.0) {
    placeGLTFModel(parent, 'planter_box_01', 0.42 * scale, x, y, z, rotY, { addShadow: true });
    const right = new THREE.Vector3(0.24 * scale, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
    placeGLTFModel(parent, 'calathea_orbifolia_01', 0.48 * scale, x - right.x, y + 0.34 * scale, z - right.z, rotY + 0.3, { addShadow: false });
    placeGLTFModel(parent, 'anthurium_botany_01', 0.54 * scale, x + right.x, y + 0.34 * scale, z + right.z, rotY - 0.4, { addShadow: false });
  }

  // Museum Pedestal / Plinth + Sculpted CC0 Statue (Elena Vance Vertical Scale + Mateo Santoro B-Roll)
  function addSculpturePlinth(parent, modelId, plinthH, sculptH, x, z, rotY = 0, style = 'walnut') {
    const bodyMat = style === 'carrara' ? matWhiteMarble : style === 'basalt' ? matDarkMarble : matWoodDark;
    const w = modelId === 'gothic_statue' ? 0.88 : 0.58;
    box(parent, w + 0.1, 0.08, w + 0.1, x, 0.04, z, bodyMat);
    box(parent, w, plinthH - 0.12, w, x, 0.08 + (plinthH - 0.12) * 0.5, z, bodyMat);
    box(parent, w + 0.08, 0.05, w + 0.08, x, plinthH - 0.025, z, matBrass);
    addContactShadow(parent, x, z, w * 0.85, w * 0.85, 0.015);
    placeGLTFModel(parent, modelId, sculptH, x, plinthH, z, rotY, { addShadow: false });
  }

  // Horizontal Coffee-Table Art Monograph Stack (with optional brass / sculpted topper)
  function addBookStack(parent, x, y, z, rotY = 0, topperModel = null) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotY;
    const covers = [matObsidianSilk, matEmeraldVelvet, matCreamLinen, matCrimsonVelvet];
    let curY = 0;
    for (let i = 0; i < 3; i++) {
      const bw = 0.30 - i * 0.025;
      const bd = 0.22 - i * 0.018;
      const bh = 0.034;
      const cover = box(g, bw, bh, bd, 0, curY + bh * 0.5, 0, covers[(i + Math.abs(Math.round(x))) % covers.length]);
      cover.rotation.y = (i - 1) * 0.09;
      const pages = box(g, bw - 0.018, bh - 0.008, bd - 0.012, 0.004, curY + bh * 0.5, 0, matCreamLinen, false);
      pages.rotation.y = cover.rotation.y;
      curY += bh;
    }
    parent.add(g);
    if (topperModel) {
      placeGLTFModel(parent, topperModel, topperModel === 'carved_wooden_elephant' ? 0.13 : 0.20, x, y + curY, z, rotY + 0.35, { addShadow: false });
    }
  }

  // Curated Architectural Bookcase (Shelf_01 / wooden_display_shelves_01 populated with books, sculptures & flora)
  function addCuratedBookcase(parent, x, y, z, rotY = 0, shelfType = 'tall_wood') {
    if (shelfType === 'steel_loft') {
      placeGLTFModel(parent, 'steel_frame_shelves_03', 2.28, x, y, z, rotY, { addShadow: true });
      const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
      for (const [sy, offX, mid, h] of [
        [0.74, -0.55, 'book_encyclopedia_set_01', 0.32],
        [0.74, 0.45, 'antique_ceramic_vase_01', 0.34],
        [1.24, -0.42, 'horse_statue_01', 0.24],
        [1.24, 0.38, 'book_encyclopedia_set_01', 0.30],
        [1.74, -0.48, 'standing_picture_frame_02', 0.25],
        [1.74, 0.42, 'calathea_orbifolia_01', 0.36]
      ]) {
        const rot = mid.startsWith('standing_picture') ? rotY - Math.PI / 2 : rotY;
        placeGLTFModel(parent, mid, h, x + right.x * offX, y + sy, z + right.z * offX, rot, { addShadow: false });
      }
      return;
    }
    if (shelfType === 'display_console') {
      // wooden_display_shelves_01 native wide axis is Z (1.08m), shallow is X (0.37m)
      placeGLTFModel(parent, 'wooden_display_shelves_01', 1.56, x, y, z, rotY, { addShadow: true });
      const along = new THREE.Vector3(0, 0, 1).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
      placeGLTFModel(parent, 'book_encyclopedia_set_01', 0.29, x - along.x * 0.24, y + 0.52, z - along.z * 0.24, rotY + Math.PI / 2, { addShadow: false });
      placeGLTFModel(parent, 'carved_wooden_elephant', 0.16, x + along.x * 0.24, y + 0.52, z + along.z * 0.24, rotY + Math.PI / 2, { addShadow: false });
      placeGLTFModel(parent, 'book_encyclopedia_set_01', 0.29, x + along.x * 0.20, y + 1.02, z + along.z * 0.20, rotY + Math.PI / 2, { addShadow: false });
      placeGLTFModel(parent, 'horse_statue_01', 0.23, x - along.x * 0.22, y + 1.02, z - along.z * 0.22, rotY + Math.PI / 2, { addShadow: false });
      return;
    }
    // Default 'tall_wood': Shelf_01 (W=1.0m along X, H=2.08m, D=0.26m along Z)
    placeGLTFModel(parent, 'Shelf_01', 2.12, x, y, z, rotY, { addShadow: true });
    const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
    placeGLTFModel(parent, 'book_encyclopedia_set_01', 0.30, x - right.x * 0.20, y + 0.56, z - right.z * 0.20, rotY, { addShadow: false });
    placeGLTFModel(parent, 'antique_ceramic_vase_01', 0.30, x + right.x * 0.24, y + 0.56, z + right.z * 0.24, rotY, { addShadow: false });
    placeGLTFModel(parent, 'book_encyclopedia_set_01', 0.30, x + right.x * 0.16, y + 1.08, z + right.z * 0.16, rotY, { addShadow: false });
    placeGLTFModel(parent, 'horse_statue_01', 0.22, x - right.x * 0.24, y + 1.08, z - right.z * 0.24, rotY, { addShadow: false });
    placeGLTFModel(parent, 'book_encyclopedia_set_01', 0.28, x - right.x * 0.18, y + 1.58, z - right.z * 0.18, rotY, { addShadow: false });
    placeGLTFModel(parent, 'standing_picture_frame_01', 0.22, x + right.x * 0.24, y + 1.58, z + right.z * 0.24, rotY - Math.PI / 2, { addShadow: false });
  }

  // Margaux De Vries (Dep. 02 Costume Designer) Approved Couture Garment Rack:
  // Master Triad Fabrics (Obsidian Silk, Forest Emerald Velvet, Satin Leather, Raw Ivory Linen) + Warm Brushed Brass Hardware (0% cold chrome)
  function addCoutureGarmentRack(parent, x, y, z, rotY = 0, collection = 'atelier') {
    const rack = new THREE.Group();
    rack.position.set(x, y, z);
    rack.rotation.y = rotY;

    const baseMat = collection === 'resort' ? matTeak : matWoodDark;
    // Bevelled dark walnut / teak plinth + brushed brass trim inlay
    box(rack, 1.66, 0.065, 0.56, 0, 0.0325, 0, baseMat);
    box(rack, 1.70, 0.02, 0.60, 0, 0.012, 0, matBrass);
    addContactShadow(rack, 0, 0, 0.96, 0.42, 0.008);

    // Twin sculpted brushed-brass uprights + lower shoe/archive crossbar + top garment rail + finials
    const railH = 1.94;
    for (const sx of [-0.74, 0.74]) {
      cyl(rack, 0.018, 0.022, railH, 12, sx, railH * 0.5, 0, matBrass);
      cyl(rack, 0.042, 0.052, 0.05, 14, sx, 0.085, 0, matBrass);
      const finial = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 12), matBrass);
      finial.position.set(sx, railH + 0.025, 0);
      rack.add(finial);
    }
    const topRail = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 1.52, 12), matBrass);
    topRail.rotation.z = Math.PI / 2;
    topRail.position.set(0, railH - 0.02, 0);
    rack.add(topRail);

    // Lower walnut accessory shelf: Leather Hatbox, Boutique Archive Box & Folded Belgian Linen Stack
    cyl(rack, 0.17, 0.17, 0.21, 20, -0.44, 0.17, 0.02, matBlackLeather);
    cyl(rack, 0.176, 0.176, 0.035, 20, -0.44, 0.265, 0.02, matCognacLeather);
    box(rack, 0.03, 0.04, 0.02, -0.44, 0.25, 0.19, matBrass, false);
    box(rack, 0.30, 0.13, 0.22, 0.04, 0.13, -0.02, matObsidianSilk);
    box(rack, 0.31, 0.025, 0.23, 0.04, 0.195, -0.02, matCreamLinen);
    box(rack, 0.28, 0.045, 0.22, 0.44, 0.088, 0.02, matCreamLinen);
    box(rack, 0.27, 0.042, 0.21, 0.44, 0.132, 0.02, matCharcoalLinen);

    // 6 Sculpted Wooden & Brushed-Brass Hangers with Organically Draped Pleated Couture Silhouettes
    const palettes = {
      atelier: [
        { mat: matEmeraldVelvet, len: 1.38, w: 0.42, belt: true },
        { mat: matObsidianSilk, len: 1.18, w: 0.38, belt: false },
        { mat: matBlackLeather, len: 0.96, w: 0.44, belt: true },
        { mat: matCreamLinen, len: 0.88, w: 0.40, belt: false },
        { mat: matCharcoalLinen, len: 1.24, w: 0.39, belt: false },
        { mat: matCrimsonVelvet, len: 1.34, w: 0.41, belt: true }
      ],
      boudoir: [
        { mat: matBlackLeather, len: 1.04, w: 0.43, belt: true },
        { mat: matEmeraldVelvet, len: 1.42, w: 0.42, belt: true },
        { mat: matObsidianSilk, len: 1.22, w: 0.38, belt: false },
        { mat: matCrimsonVelvet, len: 1.36, w: 0.41, belt: true },
        { mat: matBlackLeather, len: 0.86, w: 0.42, belt: true },
        { mat: matCharcoalLinen, len: 1.16, w: 0.39, belt: false }
      ],
      resort: [
        { mat: matCreamLinen, len: 1.28, w: 0.42, belt: false },
        { mat: matCharcoalLinen, len: 1.34, w: 0.40, belt: true },
        { mat: matObsidianSilk, len: 1.12, w: 0.38, belt: false },
        { mat: matCreamLinen, len: 0.86, w: 0.40, belt: false },
        { mat: matEmeraldVelvet, len: 1.36, w: 0.41, belt: true },
        { mat: matCognacLeather, len: 0.92, w: 0.41, belt: false }
      ]
    };
    const items = palettes[collection] || palettes.atelier;

    items.forEach((cfg, idx) => {
      const gx = -0.52 + idx * 0.208;
      const gItem = new THREE.Group();
      gItem.position.set(gx, railH - 0.02, 0);
      // Natural boutique angle on the rail (35°–48°) so silhouettes overlap organically
      gItem.rotation.y = 0.68 + ((idx % 3) - 1) * 0.08;

      // Curved brushed-brass hanger hook
      const hook = new THREE.Mesh(new THREE.TorusGeometry(0.034, 0.0045, 8, 16, Math.PI * 1.4), matBrass);
      hook.position.set(0, 0.028, 0);
      hook.rotation.y = Math.PI / 2;
      gItem.add(hook);
      cyl(gItem, 0.0045, 0.0045, 0.045, 8, 0, -0.02, 0, matBrass, false);

      // Sculpted sloped dark-walnut hanger wings
      for (const side of [-1, 1]) {
        const wing = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.014, cfg.w * 0.52, 10), matWoodDark);
        wing.rotation.x = side * (Math.PI / 2 - 0.26);
        wing.position.set(0, -0.068, side * cfg.w * 0.22);
        wing.castShadow = true;
        gItem.add(wing);
      }

      // Multi-pleat draped couture body (3 overlapping fluted columns + sculpted shoulders + sleeves)
      const bodyTopY = -0.085;
      const centerPleat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.048, 0.072, cfg.len, 14),
        cfg.mat
      );
      centerPleat.scale.set(0.68, 1.0, 2.35);
      centerPleat.position.set(0, bodyTopY - cfg.len * 0.5, 0);
      centerPleat.castShadow = true;
      centerPleat.receiveShadow = true;
      gItem.add(centerPleat);

      for (const side of [-1, 1]) {
        const sideDrape = new THREE.Mesh(
          new THREE.CylinderGeometry(0.038, 0.058, cfg.len * 0.97, 12),
          cfg.mat
        );
        sideDrape.scale.set(0.62, 1.0, 1.65);
        sideDrape.position.set((side * 0.008), bodyTopY - cfg.len * 0.49, side * (cfg.w * 0.28));
        sideDrape.rotation.x = side * 0.035;
        sideDrape.castShadow = true;
        sideDrape.receiveShadow = true;
        gItem.add(sideDrape);

        // Tailored sleeve drape
        const sleeve = new THREE.Mesh(
          new THREE.CylinderGeometry(0.036, 0.028, Math.min(0.58, cfg.len * 0.54), 10),
          cfg.mat
        );
        sleeve.position.set(0, bodyTopY - 0.28, side * (cfg.w * 0.44));
        sleeve.rotation.x = side * 0.09;
        sleeve.castShadow = true;
        gItem.add(sleeve);
      }

      // Optional warm brushed-brass O-ring / waist belt catchlight (Margaux Rule 03)
      if (cfg.belt) {
        const oRing = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.0045, 8, 18), matBrass);
        oRing.rotation.y = Math.PI / 2;
        oRing.position.set(0.038, bodyTopY - 0.38, 0);
        gItem.add(oRing);
      }

      rack.add(gItem);
    });

    rack.userData.customHangerCount = 0;
    const fIdx = floorGroups.findIndex((fg) => fg === parent);
    if (fIdx >= 0 && coutureRacksByFloor[fIdx]) {
      coutureRacksByFloor[fIdx].push(rack);
    }

    parent.add(rack);
    return rack;
  }

  // Sculpted Standing Valet Coat & Hat Tree (Turned Walnut + Brushed Brass Crown Hooks + Draped Coat & Fedora)
  function addBoutiqueCoatStand(parent, x, y, z, rotY = 0, palette = 'emerald') {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotY;

    // Weighted dark marble & brushed brass pedestal disc
    cyl(g, 0.24, 0.26, 0.045, 22, 0, 0.0225, 0, matDarkMarble);
    cyl(g, 0.20, 0.22, 0.02, 20, 0, 0.052, 0, matBrass);
    addContactShadow(g, 0, 0, 0.36, 0.36, 0.008);

    // Tapered turned walnut & brass column (H = 1.82m)
    cyl(g, 0.024, 0.036, 1.05, 14, 0, 0.58, 0, matWoodDark);
    cyl(g, 0.032, 0.032, 0.045, 14, 0, 1.11, 0, matBrass);
    cyl(g, 0.019, 0.024, 0.68, 14, 0, 1.46, 0, matWoodDark);
    const crown = new THREE.Mesh(new THREE.SphereGeometry(0.034, 12, 12), matBrass);
    crown.position.set(0, 1.82, 0);
    g.add(crown);

    // 4 Curved Brushed-Brass S-Hooks
    for (let h = 0; h < 4; h++) {
      const ang = (h * Math.PI) / 2 + 0.35;
      const hookWrap = new THREE.Group();
      hookWrap.position.set(0, 1.68, 0);
      hookWrap.rotation.y = ang;
      const arc = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.007, 8, 16, Math.PI * 0.85), matBrass);
      arc.position.set(0.085, 0.02, 0);
      hookWrap.add(arc);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), matBrass);
      tip.position.set(0.16, 0.055, 0);
      hookWrap.add(tip);
      g.add(hookWrap);
    }

    // Draped Couture Coat + Silk Stole + Sculpted Wide-Brim Hat on Crown
    const coatMat =
      palette === 'ivory'
        ? matCreamLinen
        : palette === 'leather'
          ? matBlackLeather
          : palette === 'crimson'
            ? matCrimsonVelvet
            : matEmeraldVelvet;
    const scarfMat = palette === 'ivory' ? matCognacLeather : matCreamLinen;

    const coat = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.13, 1.08, 16), coatMat);
    coat.scale.set(0.82, 1.0, 1.25);
    coat.position.set(0.085, 1.13, 0.04);
    coat.rotation.z = -0.06;
    coat.castShadow = true;
    coat.receiveShadow = true;
    g.add(coat);

    const stole = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.055, 0.78, 12), scarfMat);
    stole.scale.set(0.65, 1.0, 1.15);
    stole.position.set(-0.075, 1.27, -0.045);
    stole.rotation.z = 0.05;
    stole.castShadow = true;
    g.add(stole);

    // Wide-brim felt hat perched at an editorial tilt atop the brass crown
    const hatGroup = new THREE.Group();
    hatGroup.position.set(-0.02, 1.85, 0.02);
    hatGroup.rotation.set(0.18, 0.25, 0.22);
    cyl(hatGroup, 0.19, 0.20, 0.012, 22, 0, 0, 0, matObsidianSilk);
    cyl(hatGroup, 0.095, 0.105, 0.095, 18, 0, 0.05, 0, matObsidianSilk);
    cyl(hatGroup, 0.106, 0.107, 0.018, 18, 0, 0.016, 0, matBrass, false);
    g.add(hatGroup);

    parent.add(g);
    g.userData.isCoatStand = true;
    const fIdx = floorGroups.findIndex((fg) => fg === parent);
    if (fIdx >= 0 && coutureRacksByFloor[fIdx]) {
      coutureRacksByFloor[fIdx].push(g);
    }
    return g;
  }

  // Production Designer Floor Zoning: Woven PBR Rugs with bevel trim (0% "empty warehouse floor")
  function addRug(parent, w, d, x, z, rugMat = matRugCrimson, y = 0.012, rotY = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotY;
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, 0.018, d), rugMat);
    body.receiveShadow = true;
    body.castShadow = false;
    g.add(body);
    // Subtle dark fringe / piping along short ends
    const fringeA = new THREE.Mesh(new THREE.BoxGeometry(w + 0.04, 0.01, 0.05), matCreamLinen);
    fringeA.position.set(0, -0.002, d / 2 + 0.02);
    fringeA.receiveShadow = true;
    const fringeB = fringeA.clone();
    fringeB.position.z = -d / 2 - 0.02;
    g.add(fringeA, fringeB);
    parent.add(g);
    return g;
  }

  // Architectural 4.8m Multi-Pleat Velvet Drapes + Brass Tieback Ring
  function addPleatedCurtain(parent, x, z, drapeMat = matCrimsonVelvet, height = 4.76) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    for (const [ox, oz, r] of [[-0.17, 0.02, 0.14], [0, -0.02, 0.16], [0.17, 0.02, 0.14]]) {
      cyl(g, r * 0.92, r * 1.08, height, 12, ox, height / 2, oz, drapeMat, true);
    }
    const tie = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.022, 8, 20), matBrass);
    tie.rotation.x = Math.PI / 2;
    tie.position.set(0, 1.38, 0);
    g.add(tie);
    parent.add(g);
    return g;
  }

  // Practical Warm Wall Sconce (for 85mm f/1.4 Background Bokeh Catchlights)
  function addWallSconce(parent, x, y, z, rotY = 0) {
    placeGLTFModel(parent, 'industrial_wall_sconce', 0.42, x, y, z, rotY, { addShadow: false });
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), matWarmBulb);
    const fwd = new THREE.Vector3(0, -0.04, 0.14).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
    glow.position.set(x + fwd.x, y + 0.18 + fwd.y, z + fwd.z);
    parent.add(glow);
  }

  // Grand Chain-Suspended Chandelier / Pendant with Coffered Ceiling Rosette & 8 Glowing Candle Bulbs
  // Suspends chandeliers down to lowestY = 2.38m..2.72m so they enter 85mm camera framing while clearing Alina (1.72m)
  function addGrandChandelier(parent, x, z, { lowestY = 2.48, bodyHeight = 1.15, modelId = 'Chandelier_01', ceilingY = FLOOR_HEIGHT - 0.12, addHaloCandles = true } = {}) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);

    // 1. Sculpted ceiling rosette / medallion at ceilingY + coffer medallion at Y = 3.82m
    cyl(g, 0.38, 0.42, 0.05, 24, 0, ceilingY - 0.02, 0, matMoulding, false);
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.022, 10, 28), matBrass);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.set(0, ceilingY - 0.045, 0);
    g.add(outerRing);
    cyl(g, 0.16, 0.22, 0.06, 18, 0, ceilingY - 0.06, 0, matBrass, false);

    // 2. Sculpted brushed-brass suspension downrod & chain spheres from ceilingY down to top of chandelier
    const topOfFixtureY = lowestY + bodyHeight;
    const rodLen = Math.max(0.15, ceilingY - (lowestY + bodyHeight * 0.65));
    cyl(g, 0.018, 0.018, rodLen, 10, 0, ceilingY - rodLen * 0.5, 0, matBrass, false);
    for (let sy = ceilingY - 0.32; sy > topOfFixtureY - 0.15; sy -= 0.34) {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 10), matBrass);
      node.position.set(0, sy, 0);
      g.add(node);
    }

    // 3. Sculpted GLTF Chandelier / Pendant body placed so its top hangs from topOfFixtureY
    placeGLTFModel(parent, modelId, bodyHeight, x, topOfFixtureY, z, 0, {
      addShadow: false,
      hangFromCeiling: true
    });

    // 4. Ornate Brushed-Brass Candelabra Halo Ring + 8 Warm Emissive Candle Flames & Crystal Drops
    if (addHaloCandles) {
      const haloY = lowestY + bodyHeight * 0.34;
      const haloR = modelId === 'Chandelier_01' ? 0.48 : 0.24;
      const haloRing = new THREE.Mesh(new THREE.TorusGeometry(haloR, 0.014, 10, 28), matBrass);
      haloRing.rotation.x = Math.PI / 2;
      haloRing.position.set(0, haloY, 0);
      g.add(haloRing);

      const numBulbs = modelId === 'Chandelier_01' ? 8 : 4;
      for (let i = 0; i < numBulbs; i++) {
        const ang = (i / numBulbs) * Math.PI * 2;
        const bx = Math.cos(ang) * haloR;
        const bz = Math.sin(ang) * haloR;
        // Brass bobèche cup + ivory wax candle sleeve + glowing teardrop bulb
        cyl(g, 0.032, 0.02, 0.022, 10, bx, haloY + 0.012, bz, matBrass, false);
        cyl(g, 0.014, 0.014, 0.085, 8, bx, haloY + 0.062, bz, matCreamLinen, false);
        const flame = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 10), matWarmBulb);
        flame.scale.set(0.85, 1.45, 0.85);
        flame.position.set(bx, haloY + 0.125, bz);
        g.add(flame);
        // Hanging crystal/brass pendant drop below ring
        const drop = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), matWarmBulb);
        drop.scale.set(0.7, 1.6, 0.7);
        drop.position.set(bx, haloY - 0.055, bz);
        g.add(drop);
      }
      // Central warm core glow sphere
      const coreGlow = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 12), matWarmBulb);
      coreGlow.position.set(0, haloY - 0.04, 0);
      g.add(coreGlow);
    } else {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 12), matWarmBulb);
      bulb.position.set(0, lowestY + 0.14, 0);
      g.add(bulb);
    }

    parent.add(g);
    return g;
  }

  // Multi-Arm Floor or Table Brushed-Brass Candelabra with 5 Glowing Taper Candles
  function addStandingCandelabra(parent, x, y, z, height = 1.46, arms = 5) {
    const g = new THREE.Group();
    g.position.set(x, y, z);

    const scale = height / 1.46;
    // Weighted dark-marble & brushed-brass stepped pedestal base
    cyl(g, 0.19 * scale, 0.22 * scale, 0.045 * scale, 20, 0, 0.022 * scale, 0, matDarkMarble, false);
    cyl(g, 0.14 * scale, 0.18 * scale, 0.05 * scale, 18, 0, 0.068 * scale, 0, matBrass, false);
    if (y < 0.05) {
      addContactShadow(g, 0, 0, 0.30 * scale, 0.30 * scale, 0.008);
    }

    // Fluted brass central stem + ornamental turned nodes
    const stemH = height - 0.26 * scale;
    cyl(g, 0.018 * scale, 0.028 * scale, stemH, 12, 0, 0.09 * scale + stemH * 0.5, 0, matBrass, true);
    for (const frac of [0.32, 0.64, 0.92]) {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.036 * scale, 10, 10), matBrass);
      node.position.set(0, 0.09 * scale + stemH * frac, 0);
      g.add(node);
    }

    // Central crown candle
    const topY = height - 0.16 * scale;
    cyl(g, 0.036 * scale, 0.022 * scale, 0.025 * scale, 12, 0, topY, 0, matBrass, false);
    cyl(g, 0.016 * scale, 0.016 * scale, 0.14 * scale, 10, 0, topY + 0.08 * scale, 0, matCreamLinen, false);
    const centerFlame = new THREE.Mesh(new THREE.SphereGeometry(0.026 * scale, 10, 10), matWarmBulb);
    centerFlame.scale.set(0.8, 1.5, 0.8);
    centerFlame.position.set(0, topY + 0.175 * scale, 0);
    g.add(centerFlame);

    // Surrounding scrolled brass arms + taper candles + glowing flames
    const outerCount = Math.max(2, arms - 1);
    const armR = 0.22 * scale;
    for (let i = 0; i < outerCount; i++) {
      const ang = (i / outerCount) * Math.PI * 2 + 0.35;
      const armGroup = new THREE.Group();
      armGroup.position.set(0, topY - 0.10 * scale, 0);
      armGroup.rotation.y = ang;

      const scroll = new THREE.Mesh(new THREE.TorusGeometry(armR * 0.5, 0.009 * scale, 8, 16, Math.PI), matBrass);
      scroll.rotation.x = Math.PI;
      scroll.position.set(armR * 0.5, 0.02 * scale, 0);
      armGroup.add(scroll);

      cyl(armGroup, 0.034 * scale, 0.02 * scale, 0.024 * scale, 10, armR, 0.03 * scale, 0, matBrass, false);
      cyl(armGroup, 0.015 * scale, 0.015 * scale, 0.13 * scale, 10, armR, 0.105 * scale, 0, matCreamLinen, false);
      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.024 * scale, 8, 8), matWarmBulb);
      flame.scale.set(0.8, 1.5, 0.8);
      flame.position.set(armR, 0.195 * scale, 0);
      armGroup.add(flame);

      g.add(armGroup);
    }

    parent.add(g);
    return g;
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

  // 4 Sculpted Streetlamps + 4 Boulevard Botanical Planters (potted_plant_02 + shrub_02)
  for (const [lx, lz] of [[-11.5, 4.9], [11.5, 4.9], [-11.5, 16.5], [11.5, 16.5]]) {
    placeGLTFModel(pb, 'street_lamp_01', 5.4, lx, 0, lz, lx < 0 ? Math.PI / 2 : -Math.PI / 2, { addShadow: true });
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), matWarmBulb);
    lantern.position.set(lx, 4.95, lz);
    pb.add(lantern);
  }
  for (const [tx, tz] of [[-14.5, 5.2], [14.5, 5.2], [-14.5, 15.5], [14.5, 15.5]]) {
    box(pb, 1.5, 0.72, 1.5, tx, 0.36, tz, matExteriorStone);
    placeGLTFModel(pb, 'potted_plant_02', 2.85, tx, 0.72, tz, tx * 0.22, { addShadow: false });
    const zOff = tz < 10 ? 1.25 : -1.25;
    placeGLTFModel(pb, 'shrub_02', 1.10, tx, 0, tz + zOff, tx * 0.35, { addShadow: true });
  }
  addPersistentPointLight(pb, 0xffcf88, 22.0, 32, 1.3, 0, 6.2, 8.5, { dayIntensity: 1.0, nightIntensity: 22.0 });

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

  // Stage & Full-Height Pleated Crimson Velvet Curtains
  box(pb, 8.6, 0.45, 3.8, 0, 0.225, -12.1, matWalnutFloor);
  for (const cx of [-4.7, -4.0, 4.0, 4.7]) {
    addPleatedCurtain(pb, cx, -13.7, matCrimsonVelvet, FLOOR_HEIGHT - 0.12);
  }
  // Back Brick Wall Practical Sconces & Salon Gallery (Dutch Baroque + Art-Déco Frames)
  for (const sx of [-8.4, -5.6, 5.6, 8.4]) {
    addWallSconce(pb, sx, 2.35, -14.22, 0);
  }
  placeGLTFModel(pb, 'fancy_picture_frame_02', 1.48, -7.0, 2.05, -14.22, 0, { addShadow: false });
  placeGLTFModel(pb, 'fancy_picture_frame_01', 1.15, -9.8, 2.25, -14.22, 0, { addShadow: false });
  placeGLTFModel(pb, 'hanging_picture_frame_01', 1.35, 7.0, 2.05, -14.25, 0, { addShadow: false, customArtMat: matArts[13] });
  placeGLTFModel(pb, 'hanging_picture_frame_02', 1.10, 9.5, 2.65, -14.24, 0, { addShadow: false, customArtMat: matArts[5] });
  placeGLTFModel(pb, 'hanging_picture_frame_03', 0.95, -7.0, 3.62, -14.24, 0, { addShadow: false, customArtMat: matArts[15] });
  placeGLTFModel(pb, 'hanging_picture_frame_03', 0.95, 7.0, 3.62, -14.24, 0, { addShadow: false, customArtMat: matArts[2] });
  // East & West Speakeasy Brick/Plaster Salon Walls + Lion Relief Emblem
  placeGLTFModel(pb, 'lion_head', 0.62, 0, 3.92, -14.12, 0, { addShadow: false });
  placeGLTFModel(pb, 'fancy_picture_frame_01', 1.22, 12.78, 2.25, -3.2, -Math.PI / 2, { addShadow: false });
  placeGLTFModel(pb, 'hanging_picture_frame_02', 1.18, 12.78, 2.25, -7.8, -Math.PI / 2, { addShadow: false, customArtMat: matArts[13] });
  placeGLTFModel(pb, 'hanging_picture_frame_01', 1.25, -12.78, 2.35, -11.2, Math.PI / 2, { addShadow: false, customArtMat: matArts[7] });
  // VIP Entrance Planted Troughs flanking Red Carpet Canopy
  addPlantedBox(pb, -2.55, 0.16, 3.25, Math.PI / 2, 1.08);
  addPlantedBox(pb, 2.55, 0.16, 3.25, -Math.PI / 2, 1.08);

  // West Bar Counter + Backlit Bottles + Ornate Backbar Mirror + Brass Goblets + Barstools
  box(pb, 1.6, 1.08, 7.6, -9.6, 0.54, -5.6, matDarkMarble);
  box(pb, 1.75, 0.08, 7.8, -9.6, 1.1, -5.6, matCopper);
  box(pb, 0.45, 2.5, 7.0, -12.5, 1.4, -5.6, matWoodDark);
  placeGLTFModel(pb, 'ornate_mirror_01', 1.45, -12.18, 1.55, -5.6, Math.PI / 2, { addShadow: false });
  for (let bz = -8.4; bz <= -2.8; bz += 0.7) {
    cyl(pb, 0.055, 0.055, 0.28, 10, -12.4, 1.55, bz, bz % 1.4 === 0 ? matCopper : matNeonCyan);
    cyl(pb, 0.055, 0.055, 0.28, 10, -12.4, 2.15, bz, matWarmBulb);
  }
  for (let sz = -8.2; sz <= -3.0; sz += 1.3) {
    placeGLTFModel(pb, 'bar_chair_round_01', 0.78, -8.3, 0, sz, Math.PI / 2, { addShadow: true });
  }
  placeGLTFModel(pb, 'wine_bottles_01', 0.36, -9.6, 1.14, -4.4, Math.PI / 2, { addShadow: false });
  placeGLTFModel(pb, 'wine_bottles_01', 0.36, -9.6, 1.14, -6.8, Math.PI / 2, { addShadow: false });
  placeGLTFModel(pb, 'brass_goblets', 0.22, -9.45, 1.14, -5.6, 0.4, { addShadow: false });
  placeGLTFModel(pb, 'ceramic_vase_01', 0.34, -9.65, 1.14, -8.2, 0, { addShadow: false });
  // Grand Chain-Suspended Cabaret Chandeliers (Stage Proscenium, Central Dance Floor, VIP Lounge & West Bar Pendants)
  addGrandChandelier(pb, 0, -5.2, { lowestY: 2.58, bodyHeight: 1.32, modelId: 'Chandelier_01' });
  addGrandChandelier(pb, -1.8, -11.4, { lowestY: 2.48, bodyHeight: 1.18, modelId: 'Chandelier_01' });
  addGrandChandelier(pb, 2.2, -11.4, { lowestY: 2.48, bodyHeight: 1.18, modelId: 'Chandelier_01' });
  addGrandChandelier(pb, 8.0, -5.2, { lowestY: 2.52, bodyHeight: 1.18, modelId: 'Chandelier_01' });
  for (const bz of [-3.6, -5.6, -7.6]) {
    addGrandChandelier(pb, -9.6, bz, { lowestY: 2.28, bodyHeight: 0.95, modelId: 'modern_ceiling_lamp_01', addHaloCandles: false });
  }
  // Standing 5-Arm Brass Floor Candelabras flanking the Speakeasy Stage & Piano
  addStandingCandelabra(pb, -3.5, 0.45, -11.8, 1.48, 5);
  addStandingCandelabra(pb, 3.5, 0.45, -11.8, 1.48, 5);
  addStandingCandelabra(pb, 6.4, 0, -8.8, 1.46, 5);

  // Grand Piano on Emerald Persian Rug + Brass Candelabra on Lid
  addRug(pb, 3.2, 3.6, -5.8, -11.0, matRugEmerald, 0.014, 0.45);
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

  // VIP Lounge on Crimson Persian Rug + Sculpted ArmChairs + Pillows + Brass Goblets + Cabinet
  addRug(pb, 4.2, 8.4, 8.0, -5.5, matRugCrimson, 0.014, 0);
  placeGLTFModel(pb, 'GothicCabinet_01', 1.85, 11.9, 0, -5.5, -Math.PI / 2, { addShadow: true });
  placeGLTFModel(pb, 'ArmChair_01', 0.88, 7.15, 0, -2.5, Math.PI / 2, { addShadow: true });
  placeGLTFModel(pb, 'ArmChair_01', 0.88, 7.15, 0, -5.5, Math.PI / 2, { addShadow: true });
  placeGLTFModel(pb, 'throw_pillows_01', 0.34, 7.08, 0.42, -2.5, Math.PI / 2, { addShadow: false });
  placeGLTFModel(pb, 'throw_pillows_01', 0.34, 7.08, 0.42, -5.5, Math.PI / 2, { addShadow: false });
  placeGLTFModel(pb, 'coffee_table_round_01', 0.62, 8.2, 0, -2.5, 0, { addShadow: true });
  placeGLTFModel(pb, 'coffee_table_round_01', 0.62, 8.2, 0, -5.5, 0.7, { addShadow: true });
  placeGLTFModel(pb, 'brass_goblets', 0.20, 8.38, 0.62, -2.42, 0.3, { addShadow: false });
  placeGLTFModel(pb, 'brass_goblets', 0.20, 8.38, 0.62, -5.42, -0.5, { addShadow: false });
  for (const tz of [-2.5, -5.5, -8.5]) {
    if (tz < -6.0) {
      cyl(pb, 0.55, 0.55, 0.04, 20, 8.0, 0.78, tz, matDarkMarble);
      cyl(pb, 0.06, 0.14, 0.75, 12, 8.0, 0.375, tz, matBrass);
      placeGLTFModel(pb, 'dining_chair_02', 0.92, 7.15, 0, tz, Math.PI / 2, { addShadow: true });
    }
    placeGLTFModel(pb, 'brass_candleholders', 0.26, 8.15, tz < -6.0 ? 0.80 : 0.62, tz, 0, { addShadow: false });
  }
  addPlantPot(pb, -11.4, 0, -12.6, 1.25);
  addPlantPot(pb, 9.2, 0, -10.8, 1.15);
  // Lush Speakeasy Botanical Trees, Sculptures on Plinths, VIP Bookshelves & Cloakroom Couture Racks
  addBotanicalVessel(pb, 'pachira_aquatica_01', -9.15, 0, -13.0, 1.18, 'basalt', 0.4);
  addBotanicalVessel(pb, 'pachira_aquatica_01', 5.55, 0, -13.1, 1.15, 'basalt', -0.35);
  placeGLTFModel(pb, 'potted_plant_01', 1.32, -11.6, 0, -1.3, 0.5, { addShadow: true });
  addBotanicalVessel(pb, 'anthurium_botany_01', -9.6, 1.12, -2.9, 0.58, 'terracotta', 0.2);
  addSculpturePlinth(pb, 'gothic_statue', 0.92, 1.62, 9.55, -13.15, -0.42, 'basalt');
  addSculpturePlinth(pb, 'horse_head', 1.12, 0.54, -8.35, -13.45, 0.35, 'basalt');
  placeGLTFModel(pb, 'bronze_ray_statue', 0.38, 11.88, 1.85, -5.5, -Math.PI / 2, { addShadow: false });
  placeGLTFModel(pb, 'binder_notebook', 0.035, -9.55, 1.14, -3.55, 0.25, { addShadow: false });
  addBookStack(pb, 8.05, 0.62, -5.65, 0.35, null);
  addCuratedBookcase(pb, 12.42, 0, -8.55, Math.PI, 'display_console');
  // VIP Cloakroom Couture Garment Rack (Emerald & Crimson Velvet Evening Gowns + Brushed Brass) & Entrance Coat Stand
  addCoutureGarmentRack(pb, 11.55, 0, -1.65, -Math.PI / 2, 'boudoir');
  addBoutiqueCoatStand(pb, -11.35, 0, -2.15, 0.4, 'crimson');
  addPersistentPointLight(pb, 0xff66b2, 24.0, 30, 1.3, 0, 3.85, -6.5, { dayIntensity: 2.0, nightIntensity: 24.0 });

  // =========================================================================
  // NIVEL 1 (PISO 1): LE VELVET CAFÉ & LOUNGE (SET-02 EIXAMPLE MOSAIC)
  // =========================================================================
  const p1 = new THREE.Group();
  p1.position.y = FLOOR_HEIGHT;
  scene.add(p1);
  floorGroups[1] = p1;

  addFloorBase(p1, 1, matWhiteMarble);
  // Central Barcelona Modernista Hydraulic Tile Carpet + Lateral Woven Ivory Lounge Rugs
  box(p1, 7.4, 0.016, 5.8, 0.1, 0.009, -3.6, matHydraulicTile, false, true);
  addRug(p1, 3.6, 4.2, -6.4, -4.0, matRugIvory, 0.012, 0);
  addRug(p1, 3.6, 4.2, 6.5, -4.2, matRugIvory, 0.012, 0);

  // Front Balcony Railing + Architectural Velvet/Linen Drapes on Facade Columns
  box(p1, BUILDING_WIDTH - 2.6, 0.95, 0.08, -1.2, 0.48, 1.48, matGlass, false);
  box(p1, BUILDING_WIDTH - 2.6, 0.06, 0.14, -1.2, 0.97, 1.48, matSteel);
  for (const dx of [-12.4, -5.5, 4.1]) {
    addPleatedCurtain(p1, dx, 1.12, matEmeraldVelvet, 4.76);
  }

  // 6m Oak Coffee Bar + Copper La Marzocco Espresso Machine + Pastry Display + Porcelain Service
  box(p1, 6.2, 1.05, 1.35, -0.5, 0.525, -9.8, matWoodOak);
  box(p1, 6.3, 0.06, 1.45, -0.5, 1.08, -9.8, matWhiteMarble);
  // La Marzocco Espresso Machine + Porcelain Tea/Coffee Service
  box(p1, 1.35, 0.52, 0.62, -1.2, 1.36, -9.8, matCopper);
  box(p1, 1.1, 0.18, 0.22, -1.2, 1.25, -9.45, matChrome);
  cyl(p1, 0.1, 0.14, 0.48, 12, 0.1, 1.35, -9.8, matSteel); // Grinder
  placeGLTFModel(p1, 'tea_set_01', 0.24, -2.55, 1.11, -9.75, 0.3, { addShadow: false });
  placeGLTFModel(p1, 'brass_vase_01', 0.34, -3.25, 1.11, -9.85, 0, { addShadow: false });
  // Glass Pastry Case
  box(p1, 1.6, 0.65, 0.72, 1.5, 1.42, -9.75, matGlass, false);
  for (let px = 1.0; px <= 2.0; px += 0.35) {
    cyl(p1, 0.08, 0.1, 0.08, 10, px, 1.15, -9.75, matWoodOak);
  }

  // Back Wall Dressing: Sign + Wooden Credenza + Ornate Mirror + Gallery Triptych + Sconces
  const cafeSignTex = buildSignTexture('LE VELVET CAFÉ', '#1c1410', '#d99a64', 'SPECIALTY ESPRESSO  •  EIXAMPLE');
  const matCafeSign = new THREE.MeshStandardMaterial({ map: cafeSignTex, emissiveMap: cafeSignTex, emissive: new THREE.Color(0xffdfa8), emissiveIntensity: 1.0 });
  lighting.registerEmissive(matCafeSign, { dayIntensity: 0.3, nightIntensity: 1.2 });
  box(p1, 4.4, 0.8, 0.1, -0.5, 3.1, -14.2, matCafeSign, false);
  placeGLTFModel(p1, 'modern_wooden_cabinet', 0.92, -6.2, 0, -13.55, 0, { addShadow: true });
  placeGLTFModel(p1, 'book_encyclopedia_set_01', 0.30, -6.6, 0.92, -13.55, 0, { addShadow: false });
  placeGLTFModel(p1, 'ceramic_vase_01', 0.36, -5.7, 0.92, -13.55, 0.4, { addShadow: false });
  placeGLTFModel(p1, 'ornate_mirror_01', 1.55, 5.4, 1.45, -14.22, 0, { addShadow: false });
  placeGLTFModel(p1, 'hanging_picture_frame_01', 1.35, -6.2, 2.05, -14.25, 0, { addShadow: false, customArtMat: matArt4 });
  placeGLTFModel(p1, 'hanging_picture_frame_01', 1.25, -9.2, 2.05, -14.25, 0, { addShadow: false, customArtMat: matArt6 });
  placeGLTFModel(p1, 'hanging_picture_frame_01', 1.25, 8.0, 2.05, -14.25, 0, { addShadow: false, customArtMat: matArt1 });
  addWallSconce(p1, -3.6, 2.45, -14.22, 0);
  addWallSconce(p1, 2.8, 2.45, -14.22, 0);

  // West & East Reading Lounges (ArmChairs + Mid-Century Chairs + Throw Pillows + Side Tables)
  placeGLTFModel(p1, 'coffee_table_round_01', 0.72, -5.8, 0, -4.0, 0.26, { addShadow: true });
  placeGLTFModel(p1, 'coffee_table_round_01', 0.72, 6.0, 0, -4.2, -0.44, { addShadow: true });
  placeGLTFModel(p1, 'ArmChair_01', 0.88, -7.1, 0, -4.0, Math.PI / 2, { addShadow: true });
  placeGLTFModel(p1, 'mid_century_lounge_chair', 0.82, -5.8, 0, -5.45, 0.15, { addShadow: true });
  placeGLTFModel(p1, 'ArmChair_01', 0.88, 7.25, 0, -4.2, -Math.PI / 2, { addShadow: true });
  placeGLTFModel(p1, 'mid_century_lounge_chair', 0.82, 6.0, 0, -5.6, -0.2, { addShadow: true });
  placeGLTFModel(p1, 'throw_pillows_01', 0.34, -7.02, 0.42, -4.0, Math.PI / 2, { addShadow: false });
  placeGLTFModel(p1, 'throw_pillows_01', 0.34, 7.18, 0.42, -4.2, -Math.PI / 2, { addShadow: false });
  placeGLTFModel(p1, 'ceramic_vase_01', 0.28, 6.0, 0.72, -4.2, 0, { addShadow: false });
  placeGLTFModel(p1, 'mantel_clock_01', 0.26, -5.8, 0.72, -4.0, 0.35, { addShadow: false });

  // 2 Center Carrara Bistro Tables + Sculpted Porcelain Tea Sets + Dining Chairs + Chandeliers
  for (const [tx, tz] of [[-2.0, -3.5], [2.2, -3.8]]) {
    cyl(p1, 0.58, 0.58, 0.04, 24, tx, 0.76, tz, matWhiteMarble);
    cyl(p1, 0.05, 0.18, 0.74, 12, tx, 0.37, tz, matSteel);
    placeGLTFModel(p1, 'tea_set_01', 0.21, tx + 0.12, 0.78, tz + 0.04, tx * 0.4, { addShadow: false });
    placeGLTFModel(p1, 'brass_candleholders', 0.22, tx - 0.18, 0.78, tz - 0.08, 0.35, { addShadow: false });
    placeGLTFModel(p1, 'dining_chair_02', 0.90, tx - 0.74, 0, tz, Math.PI / 2, { addShadow: true });
    placeGLTFModel(p1, 'dining_chair_02', 0.90, tx + 0.74, 0, tz, -Math.PI / 2, { addShadow: true });
  }
  placeGLTFModel(p1, 'wine_bottles_01', 0.32, 2.35, 1.11, -9.8, 0, { addShadow: false });
  // Eixample Salon Chain-Suspended Chandeliers & Espresso Bar Brass Pendants (lowered into 85mm camera framing)
  addGrandChandelier(p1, -2.2, -5.8, { lowestY: 2.45, bodyHeight: 1.18, modelId: 'Chandelier_01' });
  addGrandChandelier(p1, 2.2, -5.8, { lowestY: 2.45, bodyHeight: 1.18, modelId: 'Chandelier_01' });
  addGrandChandelier(p1, -6.0, -4.2, { lowestY: 2.52, bodyHeight: 1.12, modelId: 'Chandelier_01' });
  addGrandChandelier(p1, 6.2, -4.2, { lowestY: 2.52, bodyHeight: 1.12, modelId: 'Chandelier_01' });
  for (const bx of [-2.4, -0.5, 1.4]) {
    addGrandChandelier(p1, bx, -9.7, { lowestY: 2.26, bodyHeight: 0.92, modelId: 'modern_ceiling_lamp_01', addHaloCandles: false });
  }
  addStandingCandelabra(p1, -4.6, 0, -12.9, 1.46, 5);
  addStandingCandelabra(p1, 3.8, 0, -12.9, 1.46, 5);
  addPlantPot(p1, -11.5, 0, -12.5, 1.35);
  addPlantPot(p1, 8.8, 0, -12.5, 1.25);
  addPlantPot(p1, -11.2, 0, 0.2, 1.15);
  placeGLTFModel(p1, 'fern_02', 0.85, -9.8, 0, -0.6, 0.5, { addShadow: true });
  placeGLTFModel(p1, 'fern_02', 0.85, 8.6, 0, -0.4, -0.4, { addShadow: true });

  // Eixample Literary Café Expansion: Salon Galleries, Classical Busts, Bookcases, Botanicals & Parisian Coat Stands
  addBotanicalVessel(p1, 'pachira_aquatica_01', -10.85, 0, -1.65, 1.22, 'ivory', 0.35);
  addBotanicalVessel(p1, 'pachira_aquatica_01', 9.35, 0, -1.55, 1.18, 'terracotta', -0.45);
  placeGLTFModel(p1, 'potted_plant_01', 1.38, -4.35, 0, -9.85, 0.25, { addShadow: true });
  placeGLTFModel(p1, 'potted_plant_01', 1.34, 4.15, 0, -9.85, -0.35, { addShadow: true });
  addPlantedBox(p1, -7.8, 0, 1.02, 0, 1.05);
  addPlantedBox(p1, -4.2, 0, 1.02, 0, 1.02);
  addPlantedBox(p1, 6.2, 0, 1.02, 0, 1.05);
  addBotanicalVessel(p1, 'calathea_orbifolia_01', 0.95, 1.11, -9.82, 0.52, 'ivory', 0.2);

  // West & East Salon Gallery Walls (Dutch & Modernist Curated Hanging)
  placeGLTFModel(p1, 'fancy_picture_frame_01', 1.22, -12.78, 2.25, -2.4, Math.PI / 2, { addShadow: false });
  placeGLTFModel(p1, 'fancy_picture_frame_02', 1.38, -12.78, 2.15, -6.9, Math.PI / 2, { addShadow: false });
  placeGLTFModel(p1, 'hanging_picture_frame_02', 1.12, -12.78, 3.35, -4.6, Math.PI / 2, { addShadow: false, customArtMat: matArts[14] });
  placeGLTFModel(p1, 'hanging_picture_frame_03', 0.96, -9.2, 3.48, -14.24, 0, { addShadow: false, customArtMat: matArts[8] });
  placeGLTFModel(p1, 'hanging_picture_frame_02', 1.12, -3.4, 2.05, -14.24, 0, { addShadow: false, customArtMat: matArts[3] });
  placeGLTFModel(p1, 'fancy_picture_frame_01', 1.20, 12.78, 2.25, -2.6, -Math.PI / 2, { addShadow: false });
  placeGLTFModel(p1, 'hanging_picture_frame_01', 1.32, 12.78, 2.20, -5.6, -Math.PI / 2, { addShadow: false, customArtMat: matArts[11] });
  placeGLTFModel(p1, 'standing_picture_frame_01', 0.25, -5.35, 0.92, -13.52, -Math.PI / 2, { addShadow: false });

  // Sculptures on Marble Plinths & Credenzas
  addSculpturePlinth(p1, 'marble_bust_01', 1.14, 0.66, -11.55, -7.85, Math.PI / 2 - 0.25, 'carrara');
  addSculpturePlinth(p1, 'bronze_ray_statue', 1.08, 0.52, 9.45, -7.65, -0.65, 'walnut');
  placeGLTFModel(p1, 'horse_statue_01', 0.26, -6.95, 0.92, -13.55, 0.35, { addShadow: false });

  // Café Bookcases, Press Journals & Reading Stacks
  addCuratedBookcase(p1, -12.18, 0, -10.35, Math.PI / 2, 'steel_loft');
  addCuratedBookcase(p1, 12.48, 0, -8.35, -Math.PI / 2, 'tall_wood');
  addBookStack(p1, -5.92, 0.72, -3.82, 0.4, null);
  addBookStack(p1, 6.18, 0.72, -4.05, -0.3, 'carved_wooden_elephant');
  placeGLTFModel(p1, 'binder_notebook', 0.032, 2.38, 0.78, -3.68, -0.45, { addShadow: false });

  // Parisian Bistro Coat & Hat Stands (Ivory Raw-Silk & Cognac Leather Palette)
  addBoutiqueCoatStand(p1, -9.15, 0, -13.15, 0.25, 'ivory');
  addBoutiqueCoatStand(p1, 9.65, 0, -3.15, -0.55, 'emerald');

  addPersistentPointLight(p1, 0xffdfb0, 20.0, 28, 1.3, 0, 3.85, -5.5, { dayIntensity: 3.0, nightIntensity: 20.0 });

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
    addPleatedCurtain(p2, dx, 1.15, matCrimsonVelvet, 4.76);
  }
  placeGLTFModel(p2, 'hanging_picture_frame_01', 1.25, 2.4, 1.95, -14.25, 0, { addShadow: false, customArtMat: matArt1 });
  placeGLTFModel(p2, 'hanging_picture_frame_01', 1.25, -2.6, 2.25, -14.25, 0, { addShadow: false, customArtMat: matArt2 });
  addWallSconce(p2, -1.9, 2.35, -14.22, 0);
  addWallSconce(p2, 1.2, 2.35, -14.22, 0);

  // ZONE 1: TOCADOR VANITY & VESTIDOR (Ivory Rug + ClassicConsole_01 + GothicCabinet + Ornate Mirror)
  addRug(p2, 3.6, 2.9, -0.4, -12.0, matRugIvory, 0.012, 0);
  placeGLTFModel(p2, 'ClassicConsole_01', 0.82, -0.4, 0, -13.15, 0, { addShadow: true });
  placeGLTFModel(p2, 'GothicCabinet_01', 1.82, 2.85, 0, -13.55, -0.18, { addShadow: true });
  placeGLTFModel(p2, 'ornate_mirror_01', 1.55, -4.82, 1.45, -10.6, Math.PI / 2, { addShadow: false });
  // Real-Time Planar Reflector Mirror + Depth Fallback Disc + Brass Rim + 12 Bulbs
  const mirrorDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.76, 0.76, 0.04, 36), matMirror);
  mirrorDisc.rotation.x = Math.PI / 2;
  mirrorDisc.position.set(-0.4, 1.65, -13.58);
  mirrorDisc.userData.maskId = 'mirror';
  p2.add(mirrorDisc);
  const mirrorReflector = new Reflector(new THREE.CircleGeometry(0.74, 36), {
    clipBias: 0.003,
    textureWidth: 1024,
    textureHeight: 1024,
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
  // Vanity Cosmetics (Amber Perfume Bottles, Crimson Lipstick, Brass Vase, Candelabra, Ottoman_01)
  const matAmberGlass = new THREE.MeshPhysicalMaterial({ color: 0xd97706, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.85 });
  cyl(p2, 0.04, 0.04, 0.14, 12, 0.14, 0.89, -13.12, matAmberGlass);
  cyl(p2, 0.018, 0.018, 0.04, 10, 0.14, 0.98, -13.12, matBrass);
  cyl(p2, 0.03, 0.03, 0.11, 12, 0.24, 0.88, -13.16, matAmberGlass);
  cyl(p2, 0.014, 0.014, 0.08, 10, 0.02, 0.86, -13.06, matBrass);
  cyl(p2, 0.012, 0.012, 0.04, 10, 0.02, 0.91, -13.06, matCrimsonVelvet);
  placeGLTFModel(p2, 'brass_vase_01', 0.28, 0.42, 0.82, -13.15, 0.2, { addShadow: false });
  placeGLTFModel(p2, 'brass_candleholders', 0.24, -0.92, 0.82, -13.14, 0.18, { addShadow: false });
  placeGLTFModel(p2, 'Ottoman_01', 0.48, -0.4, 0, -12.05, -0.26, { addShadow: true });
  // Chain-Suspended Chandeliers in Vanity & Dressing Room + Standing 5-Arm Brass Candelabras
  addGrandChandelier(p2, -2.0, -11.8, { lowestY: 2.42, bodyHeight: 1.08, modelId: 'Chandelier_01' });
  addGrandChandelier(p2, 1.5, -11.8, { lowestY: 2.42, bodyHeight: 1.08, modelId: 'Chandelier_01' });
  addStandingCandelabra(p2, -1.65, 0, -13.05, 1.46, 5);
  addStandingCandelabra(p2, 0.95, 0, -13.05, 1.46, 5);

  // Walk-In Couture Wardrobe Racks & Valet Stand (Curated by Margaux De Vries — Brushed Brass + Master Triad)
  addCoutureGarmentRack(p2, -3.45, 0, -13.22, 0.06, 'atelier');
  addCoutureGarmentRack(p2, -4.38, 0, -7.85, Math.PI / 2, 'atelier');
  addBoutiqueCoatStand(p2, 3.68, 0, -11.65, -0.45, 'emerald');
  // Extra Dressing Room Art, Books & Sculptural Accents
  placeGLTFModel(p2, 'fancy_picture_frame_01', 1.12, -2.6, 3.55, -14.22, 0, { addShadow: false });
  placeGLTFModel(p2, 'fancy_picture_frame_02', 1.18, 2.4, 3.52, -14.22, 0, { addShadow: false });
  placeGLTFModel(p2, 'hanging_picture_frame_02', 1.08, -4.88, 2.25, -6.2, Math.PI / 2, { addShadow: false, customArtMat: matArts[6] });
  placeGLTFModel(p2, 'hanging_picture_frame_03', 0.92, 4.28, 2.25, -11.8, -Math.PI / 2, { addShadow: false, customArtMat: matArts[7] });
  placeGLTFModel(p2, 'standing_picture_frame_01', 0.22, -0.82, 0.82, -13.22, -1.25, { addShadow: false });
  placeGLTFModel(p2, 'horse_statue_01', 0.25, 2.85, 1.82, -13.55, -0.25, { addShadow: false });
  addBotanicalVessel(p2, 'anthurium_botany_01', 1.65, 0, -13.35, 0.92, 'ivory', -0.3);

  addPersistentPointLight(p2, 0xffd7a3, 10.0, 14, 1.4, -0.4, 1.85, -11.4, { dayIntensity: 2.5, nightIntensity: 10.0 });

  // ZONE 2: BAÑO SPA (West X: -12.8..-5.0 — Woven Spa Mat, Lanterns, Ceramic Vases, Ferns & Art)
  addRug(p2, 3.2, 2.6, -9.0, -7.8, matRugCharcoal, 0.012, 0);
  const tubOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.82, 0.66, 28), matDarkMarble);
  tubOuter.scale.set(1.35, 1.0, 0.72);
  tubOuter.position.set(-9.0, 0.33, -7.8);
  tubOuter.castShadow = true;
  p2.add(tubOuter);
  const tubWater = new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.86, 0.03, 28), matWater);
  tubWater.scale.set(1.3, 1.0, 0.68);
  tubWater.position.set(-9.0, 0.665, -7.8);
  p2.add(tubWater);
  waterMeshes.push(tubWater);
  // Brass freestanding tub faucet + Bath Side Caddy with Goblets
  cyl(p2, 0.025, 0.03, 0.95, 10, -10.5, 0.48, -7.8, matBrass);
  box(p2, 0.25, 0.04, 0.04, -10.38, 0.94, -7.8, matBrass);
  placeGLTFModel(p2, 'side_table_tall_01', 0.68, -10.65, 0, -6.65, 0.3, { addShadow: true });
  placeGLTFModel(p2, 'brass_goblets', 0.19, -10.65, 0.68, -6.65, 0, { addShadow: false });
  // Frosted Glass Shower Screen, Teak Bench, Ceramic Vases, Wooden Lanterns & Humidity Ferns
  box(p2, 0.08, 2.4, 2.8, -6.4, 1.2, -10.6, matFrostedGlass, false);
  box(p2, 1.5, 0.42, 0.55, -11.1, 0.21, -10.8, matTeak);
  for (let tx = -11.55; tx <= -10.85; tx += 0.35) {
    const towel = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.34, 12), matCreamLinen);
    towel.rotation.x = Math.PI / 2;
    towel.position.set(tx, 0.52, -10.8);
    p2.add(towel);
  }
  placeGLTFModel(p2, 'ceramic_vase_01', 0.38, -10.5, 0.42, -10.8, 0.4, { addShadow: false });
  placeGLTFModel(p2, 'wooden_lantern_01', 0.52, -10.9, 0, -9.4, 0.35, { addShadow: true });
  placeGLTFModel(p2, 'wooden_lantern_01', 0.44, -7.35, 0, -9.5, -0.25, { addShadow: true });
  placeGLTFModel(p2, 'fern_02', 0.92, -11.9, 0, -12.6, 0.6, { addShadow: true });
  placeGLTFModel(p2, 'fern_02', 0.82, -7.1, 0, -12.8, -0.4, { addShadow: true });
  placeGLTFModel(p2, 'hanging_picture_frame_01', 1.30, -9.2, 2.05, -14.25, 0, { addShadow: false, customArtMat: matArt3 });
  addWallSconce(p2, -11.2, 2.35, -14.22, 0);
  addCandle(p2, -7.8, 0.66, -7.1, true);
  addCandle(p2, -8.2, 0.0, -6.6, false);
  addCandle(p2, -10.1, 0.0, -6.9, false);

  // ZONE 3: COCINA & COMEDOR DE AUTOR (East X: +4.4..+10.0 — Credenza, Porcelain Tea Set, Rug & Art)
  addRug(p2, 3.1, 2.9, 7.3, -2.5, matRugCharcoal, 0.012, 0);
  placeGLTFModel(p2, 'modern_wooden_cabinet', 0.92, 7.3, 0, -13.45, 0, { addShadow: true });
  placeGLTFModel(p2, 'brass_vase_01', 0.36, 6.75, 0.92, -13.45, 0, { addShadow: false });
  placeGLTFModel(p2, 'wine_bottles_01', 0.34, 7.85, 0.92, -13.45, 0.2, { addShadow: false });
  placeGLTFModel(p2, 'hanging_picture_frame_01', 1.30, 7.3, 2.15, -14.25, 0, { addShadow: false, customArtMat: matArt4 });

  box(p2, 1.35, 0.94, 3.6, 7.3, 0.47, -8.0, matDarkMarble);
  box(p2, 1.45, 0.06, 3.7, 7.3, 0.96, -8.0, matDarkMarble);
  // Brass Faucet, Sculpted Porcelain Tea Set, Brass Goblets, Wine Bottles, Modern Pendants & Barstools
  cyl(p2, 0.02, 0.025, 0.38, 10, 7.4, 1.16, -7.4, matBrass);
  placeGLTFModel(p2, 'tea_set_01', 0.23, 7.18, 0.99, -8.05, -Math.PI / 2, { addShadow: false });
  placeGLTFModel(p2, 'brass_goblets', 0.20, 7.35, 0.99, -6.75, 0.3, { addShadow: false });
  placeGLTFModel(p2, 'wine_bottles_01', 0.34, 7.3, 0.99, -8.95, Math.PI / 2, { addShadow: false });
  for (const pz of [-9.0, -8.0, -7.0]) {
    addGrandChandelier(p2, 7.3, pz, { lowestY: 2.18, bodyHeight: 0.96, modelId: 'modern_ceiling_lamp_01', addHaloCandles: false });
    placeGLTFModel(p2, 'bar_chair_round_01', 0.72, 6.1, 0, pz, -Math.PI / 2, { addShadow: true });
  }
  addGrandChandelier(p2, 7.3, -2.5, { lowestY: 2.35, bodyHeight: 1.10, modelId: 'Chandelier_01' });
  addGrandChandelier(p2, -9.0, -7.8, { lowestY: 2.42, bodyHeight: 1.08, modelId: 'Chandelier_01' });
  addStandingCandelabra(p2, -7.6, 0, -8.8, 1.42, 5);
  // Dining Table & 4 Sculpted Dining Chairs + Centerpiece Vase
  box(p2, 1.8, 0.06, 1.1, 7.3, 0.75, -2.5, matWoodDark);
  for (const [lx, lz] of [[6.5, -2.95], [8.1, -2.95], [6.5, -2.05], [8.1, -2.05]]) {
    cyl(p2, 0.03, 0.02, 0.72, 8, lx, 0.36, lz, matSteel);
  }
  placeGLTFModel(p2, 'ceramic_vase_01', 0.30, 7.3, 0.78, -2.5, 0.5, { addShadow: false });
  placeGLTFModel(p2, 'dining_chair_02', 0.92, 6.8, 0, -1.65, Math.PI, { addShadow: true });
  placeGLTFModel(p2, 'dining_chair_02', 0.92, 7.8, 0, -1.65, Math.PI, { addShadow: true });
  placeGLTFModel(p2, 'dining_chair_02', 0.92, 6.8, 0, -3.35, 0, { addShadow: true });
  placeGLTFModel(p2, 'dining_chair_02', 0.92, 7.8, 0, -3.35, 0, { addShadow: true });
  addPlantPot(p2, 9.2, 0, -0.8, 1.15);

  addPersistentPointLight(p2, 0xffd39c, 10.0, 14, 1.4, 7.1, 2.55, -7.8, { dayIntensity: 2.0, nightIntensity: 10.0 });

  // ZONE 4: SUITE PRINCIPAL (Large Persian Rug + Walnut Dais + GothicBed_01 + Throw Pillows + Reading Corner)
  addRug(p2, 5.1, 4.9, -0.5, -3.2, matRugCrimson, 0.012, 0);
  box(p2, 3.9, 0.28, 4.1, -0.5, 0.14, -3.2, matWoodDark);
  box(p2, 3.6, 0.02, 3.8, -0.5, 0.29, -3.1, matCharcoalLinen, false, true);
  placeGLTFModel(p2, 'GothicBed_01', 1.52, -0.5, 0.28, -3.35, 0, { addShadow: true });
  placeGLTFModel(p2, 'throw_pillows_01', 0.36, -0.5, 0.88, -4.05, 0, { addShadow: false });
  for (const nx of [-1.85, 0.85]) {
    placeGLTFModel(p2, 'ClassicNightstand_01', 0.58, nx, 0.28, -4.15, 0, { addShadow: true });
    placeGLTFModel(p2, 'desk_lamp_arm_01', 0.44, nx, 0.86, -4.15, nx < 0 ? -0.44 : 0.44, { addShadow: false });
  }
  addGrandChandelier(p2, -0.5, -3.2, { lowestY: 2.45, bodyHeight: 1.18, modelId: 'Chandelier_01' });
  addStandingCandelabra(p2, 1.95, 0, -3.85, 1.46, 5);
  addPersistentPointLight(p2, 0xffb870, 9.5, 12, 1.4, -0.5, 1.85, -3.6, { dayIntensity: 1.5, nightIntensity: 9.5 });

  // Eixample Balcony Railing + Wine Goblets Table + Mid-Century Reading Nook
  box(p2, BUILDING_WIDTH - 2.6, 0.95, 0.08, -1.2, 0.48, 1.48, matGlass, false);
  box(p2, BUILDING_WIDTH - 2.6, 0.06, 0.14, -1.2, 0.97, 1.48, matSteel);
  placeGLTFModel(p2, 'coffee_table_round_01', 0.65, 2.5, 0, 0.65, 0, { addShadow: true });
  placeGLTFModel(p2, 'brass_goblets', 0.20, 2.45, 0.65, 0.65, 0.4, { addShadow: false });
  placeGLTFModel(p2, 'mid_century_lounge_chair', 0.84, -3.35, 0, -1.55, -0.62, { addShadow: true });
  placeGLTFModel(p2, 'side_table_tall_01', 0.68, -4.05, 0, -2.35, 0, { addShadow: true });
  placeGLTFModel(p2, 'mantel_clock_01', 0.24, -4.05, 0.68, -2.35, 0.55, { addShadow: false });

  // Piso 2 Full Residential Enrichment (Spa + Kitchen + Master Suite: Plants, Paintings, Sculptures, Books & Racks)
  // Spa Zone 2 additions:
  addBoutiqueCoatStand(p2, -5.85, 0, -13.15, 0.45, 'ivory');
  addSculpturePlinth(p2, 'marble_bust_01', 1.06, 0.62, -11.95, -4.45, 0.65, 'basalt');
  addBotanicalVessel(p2, 'pachira_aquatica_01', -11.95, 0, -1.25, 1.15, 'basalt', 0.4);
  addBotanicalVessel(p2, 'calathea_orbifolia_01', -6.05, 0, -6.25, 0.88, 'terracotta', -0.35);
  placeGLTFModel(p2, 'fancy_picture_frame_01', 1.18, -12.78, 2.25, -7.8, Math.PI / 2, { addShadow: false });
  placeGLTFModel(p2, 'hanging_picture_frame_02', 1.10, -5.12, 2.18, -8.2, -Math.PI / 2, { addShadow: false, customArtMat: matArts[3] });
  // Kitchen & Dining Zone 3 additions:
  addCuratedBookcase(p2, 9.62, 0, -5.15, Math.PI, 'display_console');
  addSculpturePlinth(p2, 'bronze_ray_statue', 1.08, 0.50, 9.35, -10.85, -0.55, 'walnut');
  placeGLTFModel(p2, 'fancy_picture_frame_02', 1.32, 12.78, 2.18, -2.5, -Math.PI / 2, { addShadow: false });
  placeGLTFModel(p2, 'hanging_picture_frame_02', 1.15, 12.78, 2.18, -6.8, -Math.PI / 2, { addShadow: false, customArtMat: matArts[4] });
  placeGLTFModel(p2, 'potted_plant_01', 1.32, 5.15, 0, -13.25, 0.3, { addShadow: true });
  addPlantedBox(p2, 7.35, 0, 1.02, 0, 1.04);
  addBookStack(p2, 7.35, 0.99, -7.35, 0.2, null);
  // Master Suite Zone 4 additions:
  addCuratedBookcase(p2, -4.65, 0, -5.35, Math.PI / 2, 'tall_wood');
  addBoutiqueCoatStand(p2, 3.55, 0, -3.85, -0.6, 'ivory');
  addSculpturePlinth(p2, 'horse_head', 1.10, 0.52, 3.55, -6.95, -0.45, 'walnut');
  addBotanicalVessel(p2, 'pachira_aquatica_01', 3.55, 0, -1.15, 1.22, 'ivory', -0.4);
  addPlantedBox(p2, -3.45, 0, 1.02, 0, 1.04);
  placeGLTFModel(p2, 'binder_notebook', 0.032, -1.82, 0.86, -3.98, 0.35, { addShadow: false });
  placeGLTFModel(p2, 'standing_picture_frame_02', 0.23, 0.88, 0.86, -3.98, -1.15, { addShadow: false });
  placeGLTFModel(p2, 'hanging_picture_frame_01', 1.25, 4.28, 2.25, -0.6, -Math.PI / 2, { addShadow: false, customArtMat: matArts[10] });

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
    addPleatedCurtain(p3, dx, 1.15, matEmeraldVelvet, 4.76);
  }

  // WEST WING: PODCAST STUDIO + CLINICAL LIBRARY (SET-01 BARCELONA DARK LOFT)
  addRug(p3, 5.8, 6.4, -5.2, -8.2, matRugCrimson, 0.012, 0);
  // Back Brick Wall Set Dressing (Credenza, Classical Marble Bust on Plinth, Archive Cabinet, 3 Edison Sconces, Art)
  placeGLTFModel(p3, 'modern_wooden_cabinet', 0.92, -5.0, 0, -13.55, 0, { addShadow: true });
  placeGLTFModel(p3, 'book_encyclopedia_set_01', 0.32, -5.5, 0.92, -13.55, 0, { addShadow: false });
  placeGLTFModel(p3, 'brass_candleholders', 0.26, -4.45, 0.92, -13.55, 0.25, { addShadow: false });
  placeGLTFModel(p3, 'GothicCabinet_01', 1.85, -1.85, 0, -13.55, -0.12, { addShadow: true });
  // Classical Psychoanalysis Marble Bust on Dark Walnut Pedestal
  box(p3, 0.62, 1.12, 0.62, -8.6, 0.56, -13.35, matWoodDark);
  box(p3, 0.70, 0.06, 0.70, -8.6, 1.14, -13.35, matBrass);
  placeGLTFModel(p3, 'marble_bust_01', 0.68, -8.6, 1.17, -13.35, 0.28, { addShadow: false });
  placeGLTFModel(p3, 'hanging_picture_frame_01', 1.35, -5.0, 2.35, -14.25, 0, { addShadow: false, customArtMat: matArt2 });
  placeGLTFModel(p3, 'hanging_picture_frame_01', 1.20, -10.4, 2.25, -14.25, 0, { addShadow: false, customArtMat: matArt6 });
  for (const sx of [-8.6, -6.8, -3.2]) {
    addWallSconce(p3, sx, 2.55, -14.22, 0);
  }

  // Clinical Walnut Desk + Shure SM7B + Analog Camera + Mantel Clock + Espresso Cup + Edison Lamp
  box(p3, 3.2, 0.08, 1.35, -4.8, 0.8, -10.5, matWoodDark);
  for (const lx of [-6.2, -3.4]) {
    box(p3, 0.08, 0.78, 1.1, lx, 0.39, -10.5, matSteel);
  }
  cyl(p3, 0.02, 0.025, 0.65, 8, -4.2, 1.15, -10.4, matSteel);
  const micBody = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.22, 14), matSteel);
  micBody.rotation.x = Math.PI / 3;
  micBody.position.set(-4.5, 1.42, -10.1);
  p3.add(micBody);
  box(p3, 0.32, 0.08, 0.2, -5.35, 0.88, -10.25, matSteel); // Audio Interface
  box(p3, 0.05, 0.03, 0.02, -5.35, 0.88, -10.14, matNeonCyan, false);
  placeGLTFModel(p3, 'Camera_01', 0.19, -3.65, 0.84, -10.38, -0.45, { addShadow: false });
  placeGLTFModel(p3, 'mantel_clock_01', 0.25, -5.88, 0.84, -10.72, 0.25, { addShadow: false });
  placeGLTFModel(p3, 'tea_set_01', 0.19, -4.85, 0.84, -10.18, 0.15, { addShadow: false });
  placeGLTFModel(p3, 'desk_lamp_arm_01', 0.48, -6.12, 0.84, -10.55, -0.78, { addShadow: false });

  // Floor-to-ceiling West Bookshelf filled with sculpted encyclopedia volumes + Vase accents
  box(p3, 0.55, 3.8, 6.4, -12.4, 1.9, -7.2, matWoodDark);
  for (let shelfY = 0.42; shelfY <= 3.12; shelfY += 0.68) {
    for (let bz = -9.6; bz <= -4.8; bz += 1.55) {
      placeGLTFModel(p3, 'book_encyclopedia_set_01', 0.34, -12.35, shelfY, bz, Math.PI / 2, { addShadow: false });
    }
  }
  // Psychoanalytic Sofa (Sofa_01) + Throw Pillows + Round Coffee Table + Side Lamp + Plants
  placeGLTFModel(p3, 'Sofa_01', 0.88, -5.5, 0, -4.2, -1.48, { addShadow: true });
  placeGLTFModel(p3, 'throw_pillows_01', 0.35, -5.45, 0.42, -4.2, -1.48, { addShadow: false });
  placeGLTFModel(p3, 'coffee_table_round_01', 0.62, -7.2, 0, -4.2, 0.2, { addShadow: true });
  placeGLTFModel(p3, 'brass_goblets', 0.19, -7.2, 0.62, -4.2, 0, { addShadow: false });
  placeGLTFModel(p3, 'mid_century_lounge_chair', 0.82, -8.5, 0, -4.2, Math.PI / 2, { addShadow: true });
  // Chain-Suspended Chandeliers in Podcast Clinical Library + Standing Brass Candelabras
  addGrandChandelier(p3, -6.6, -11.4, { lowestY: 2.44, bodyHeight: 1.12, modelId: 'Chandelier_01' });
  addGrandChandelier(p3, -2.8, -11.4, { lowestY: 2.44, bodyHeight: 1.12, modelId: 'Chandelier_01' });
  addGrandChandelier(p3, -6.2, -4.8, { lowestY: 2.48, bodyHeight: 1.12, modelId: 'Chandelier_01' });
  addStandingCandelabra(p3, -3.25, 0, -12.95, 1.46, 5);
  addStandingCandelabra(p3, -7.25, 0, -12.95, 1.46, 5);
  addPlantPot(p3, -11.4, 0, -2.2, 1.25);

  addPersistentPointLight(p3, 0xffb86c, 15.0, 18, 1.3, -4.8, 2.95, -9.2, { dayIntensity: 2.0, nightIntensity: 11.0 });

  // EAST WING: SENSORY BOUDOIR SSC (SET-04 VELVET CHIAROSCURO)
  addRug(p3, 5.8, 6.8, 5.2, -9.4, matRugEmerald, 0.012, 0);
  box(p3, 2.4, 1.6, 0.22, 4.8, 0.8, -12.4, matEmeraldVelvet);
  box(p3, 2.2, 0.52, 2.2, 4.8, 0.26, -11.2, matBlackLeather);
  box(p3, 2.15, 0.14, 1.8, 4.8, 0.56, -11.0, matCharcoalLinen);
  placeGLTFModel(p3, 'throw_pillows_01', 0.36, 4.8, 0.64, -11.9, 0, { addShadow: false });
  placeGLTFModel(p3, 'Ottoman_01', 0.46, 4.8, 0, -9.85, 0, { addShadow: true });

  // Gothic Cabinet, Vintage Day Bed Lounge, Ornate Baroque Mirror, Tall Side Table & Lanterns
  placeGLTFModel(p3, 'GothicCabinet_01', 1.88, 8.6, 0, -10.2, -Math.PI / 2, { addShadow: true });
  placeGLTFModel(p3, 'vintage_day_bed', 0.88, 8.1, 0, -5.6, -Math.PI / 2, { addShadow: true });
  placeGLTFModel(p3, 'ornate_mirror_01', 1.55, 2.15, 1.55, -14.22, 0, { addShadow: false });
  placeGLTFModel(p3, 'hanging_picture_frame_01', 1.35, 4.8, 2.55, -14.25, 0, { addShadow: false, customArtMat: matArt5 });
  placeGLTFModel(p3, 'side_table_tall_01', 0.72, 6.45, 0, -11.6, -0.3, { addShadow: true });
  placeGLTFModel(p3, 'brass_goblets', 0.21, 6.45, 0.72, -11.6, 0.2, { addShadow: false });
  placeGLTFModel(p3, 'wooden_lantern_01', 0.52, 3.1, 0, -11.6, 0.3, { addShadow: true });
  addWallSconce(p3, 3.3, 2.5, -14.22, 0);
  addWallSconce(p3, 6.4, 2.5, -14.22, 0);

  // Shibari Rope Rack (Wall Panel with Purple & Black Silk Coils)
  box(p3, 1.8, 1.5, 0.08, 8.2, 1.55, -14.2, matWoodDark);
  const matLilacRope = new THREE.MeshStandardMaterial({ color: 0x7e22ce, roughness: 0.5 });
  for (let rx = 7.6; rx <= 8.8; rx += 0.4) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 10, 20), rx > 8.1 ? matBlackLeather : matLilacRope);
    coil.position.set(rx, 1.6, -14.12);
    p3.add(coil);
  }
  // 3Dio Binaural Microphone on Tripod + Chain-Suspended Boudoir Chandeliers + Standing Candelabras
  cyl(p3, 0.025, 0.04, 1.05, 10, 4.8, 0.525, -8.8, matSteel);
  box(p3, 0.28, 0.14, 0.12, 4.8, 1.12, -8.8, matCreamLinen);
  addGrandChandelier(p3, 3.3, -10.8, { lowestY: 2.42, bodyHeight: 1.14, modelId: 'Chandelier_01' });
  addGrandChandelier(p3, 6.4, -10.8, { lowestY: 2.42, bodyHeight: 1.14, modelId: 'Chandelier_01' });
  addGrandChandelier(p3, 6.5, -5.6, { lowestY: 2.48, bodyHeight: 1.10, modelId: 'Chandelier_01' });
  addStandingCandelabra(p3, 2.85, 0, -11.95, 1.52, 5);
  addStandingCandelabra(p3, 6.85, 0, -11.95, 1.52, 5);
  addStandingCandelabra(p3, 3.15, 0, -9.2, 1.28, 5);
  placeGLTFModel(p3, 'brass_candleholders', 0.28, 6.4, 0.0, -9.5, 0.44, { addShadow: false });
  addCandle(p3, 6.4, 0.0, -9.5, true);
  addCandle(p3, 3.25, 0.0, -9.8, false);
  addPlantPot(p3, 8.9, 0, -2.0, 1.2);

  // Piso 3 Mind Sanctuary & Boudoir Expansion: Clinical Archives, Sculptures, Dutch/Rorschach Salon & Couture Racks
  // West Wing (Podcast & Psychoanalytic Library):
  addCuratedBookcase(p3, -10.65, 0, -13.68, 0, 'tall_wood');
  addCuratedBookcase(p3, -0.22, 0, -8.45, -Math.PI / 2, 'display_console');
  placeGLTFModel(p3, 'binder_notebook', 0.034, -5.25, 0.84, -10.58, 0.18, { addShadow: false });
  addBookStack(p3, -7.12, 0.62, -4.02, -0.35, 'carved_wooden_elephant');
  addSculpturePlinth(p3, 'horse_head', 1.12, 0.54, -11.65, -11.65, 0.55, 'walnut');
  addSculpturePlinth(p3, 'bronze_ray_statue', 1.04, 0.48, -1.25, -12.65, -0.45, 'basalt');
  placeGLTFModel(p3, 'lion_head', 0.54, -5.0, 3.72, -14.15, 0, { addShadow: false });
  placeGLTFModel(p3, 'fancy_picture_frame_02', 1.38, -7.0, 2.35, -14.22, 0, { addShadow: false });
  placeGLTFModel(p3, 'hanging_picture_frame_02', 1.12, -3.2, 3.55, -14.24, 0, { addShadow: false, customArtMat: matArts[9] });
  placeGLTFModel(p3, 'hanging_picture_frame_03', 0.96, -6.8, 3.65, -14.24, 0, { addShadow: false, customArtMat: matArts[11] });
  placeGLTFModel(p3, 'hanging_picture_frame_01', 1.25, 0.08, 2.25, -6.2, -Math.PI / 2, { addShadow: false, customArtMat: matArts[9] });
  placeGLTFModel(p3, 'fancy_picture_frame_01', 1.18, -12.78, 2.35, -2.6, Math.PI / 2, { addShadow: false });
  addBotanicalVessel(p3, 'pachira_aquatica_01', -11.55, 0, -0.65, 1.22, 'basalt', 0.4);
  addPlantedBox(p3, -6.8, 0, 1.02, 0, 1.04);
  addBoutiqueCoatStand(p3, -1.15, 0, -5.85, -0.4, 'leather');

  // East Wing (Sensory Boudoir SSC):
  addCoutureGarmentRack(p3, 9.25, 0, -7.55, -Math.PI / 2, 'boudoir');
  addBoutiqueCoatStand(p3, 1.35, 0, -12.85, 0.45, 'emerald');
  addSculpturePlinth(p3, 'gothic_statue', 0.88, 1.58, 9.35, -13.15, -0.52, 'basalt');
  addCuratedBookcase(p3, 0.62, 0, -8.25, Math.PI / 2, 'tall_wood');
  placeGLTFModel(p3, 'fancy_picture_frame_01', 1.20, 6.65, 3.35, -14.22, 0, { addShadow: false });
  placeGLTFModel(p3, 'hanging_picture_frame_02', 1.15, 0.32, 2.28, -11.4, Math.PI / 2, { addShadow: false, customArtMat: matArts[16] });
  placeGLTFModel(p3, 'hanging_picture_frame_01', 1.28, 12.78, 2.25, -4.8, -Math.PI / 2, { addShadow: false, customArtMat: matArts[12] });
  addBotanicalVessel(p3, 'pachira_aquatica_01', 11.45, 0, -1.15, 1.20, 'basalt', -0.35);
  placeGLTFModel(p3, 'potted_plant_01', 1.34, 1.25, 0, -6.15, 0.35, { addShadow: true });
  addPlantedBox(p3, 5.2, 0, 1.02, 0, 1.04);

  // =========================================================================
  // NIVEL 4 (PISO 4): PENTHOUSE ROOFTOP «THE INNER CIRCLE» (SET-03 TULUM/BCN)
  // =========================================================================
  const p4 = new THREE.Group();
  p4.position.y = 4 * FLOOR_HEIGHT;
  scene.add(p4);
  floorGroups[4] = p4;

  // Teak Deck Slab + Outdoor Woven Rugs Zoning Sun Loungers & Sunset Lounge
  box(p4, BUILDING_WIDTH, 0.24, BUILDING_DEPTH, 0, -0.12, BUILDING_CENTER_Z, matTeak, false, true);
  addRug(p4, 3.4, 4.6, -9.0, -6.9, matRugCharcoal, 0.012, 0);
  addRug(p4, 4.2, 3.8, 7.2, -3.2, matRugIvory, 0.012, 0);
  box(p4, BUILDING_WIDTH, 1.05, 0.08, 0, 0.525, 1.45, matGlass, false);
  box(p4, BUILDING_WIDTH, 1.05, 0.08, 0, 0.525, -14.45, matGlass, false);
  box(p4, 0.08, 1.05, BUILDING_DEPTH, -12.95, 0.525, BUILDING_CENTER_Z, matGlass, false);
  box(p4, 0.08, 1.05, BUILDING_DEPTH, 12.95, 0.525, BUILDING_CENTER_Z, matGlass, false);

  // Hollow Basalt Plunge Pool Basin + Submerged Step + Glowing Wooden Deck Lanterns
  box(p4, 7.0, 0.28, 4.2, -3.0, 0.14, -6.8, matDarkMarble);
  box(p4, 7.4, 0.66, 0.32, -3.0, 0.33, -8.95, matDarkMarble);
  box(p4, 7.4, 0.66, 0.32, -3.0, 0.33, -4.65, matDarkMarble);
  box(p4, 0.32, 0.66, 4.6, -6.55, 0.33, -6.8, matDarkMarble);
  box(p4, 0.32, 0.66, 4.6, 0.55, 0.33, -6.8, matDarkMarble);
  box(p4, 1.3, 0.22, 0.7, -5.65, 0.34, -5.35, matDarkMarble);
  const poolSurface = box(p4, 6.8, 0.03, 4.0, -3.0, 0.59, -6.8, matWater, false, true);
  waterMeshes.push(poolSurface);
  for (const [lx, lz] of [[-6.95, -4.45], [0.85, -4.45], [-6.95, -9.25], [2.45, -6.85]]) {
    placeGLTFModel(p4, 'wooden_lantern_01', 0.52, lx, 0, lz, lx * 0.2, { addShadow: true });
  }
  addPersistentPointLight(p4, 0x22d3ee, 18.0, 18, 1.35, -3.0, 0.85, -6.8, { dayIntensity: 2.5, nightIntensity: 18.0 });
  addPersistentPointLight(p4, 0xffd6a5, 14.0, 16, 1.4, -1.6, 2.85, -0.9, { dayIntensity: 2.0, nightIntensity: 14.0 });

  // 2 Teak Sun Loungers + Cream Linen Cushions + Throw Pillows + Side Table with Brass Goblets
  for (const lz of [-8.2, -5.6]) {
    box(p4, 2.1, 0.24, 0.95, -9.0, 0.12, lz, matTeak);
    box(p4, 1.5, 0.12, 0.88, -8.75, 0.28, lz, matCreamLinen);
    const backRest = box(p4, 0.62, 0.12, 0.88, -9.75, 0.44, lz, matCreamLinen);
    backRest.rotation.z = 0.48;
    placeGLTFModel(p4, 'throw_pillows_01', 0.32, -9.55, 0.42, lz, Math.PI / 2, { addShadow: false });
  }
  placeGLTFModel(p4, 'side_table_tall_01', 0.62, -9.15, 0, -6.9, 0.2, { addShadow: true });
  placeGLTFModel(p4, 'brass_goblets', 0.20, -9.15, 0.62, -6.9, 0.4, { addShadow: false });

  // East Sunset Conversation Lounge (Mid-Century Chairs + Coffee Table + Ceramic Vase + Lantern)
  placeGLTFModel(p4, 'coffee_table_round_01', 0.62, 7.2, 0, -3.2, 0.3, { addShadow: true });
  placeGLTFModel(p4, 'ceramic_vase_01', 0.30, 7.2, 0.62, -3.2, 0, { addShadow: false });
  placeGLTFModel(p4, 'mid_century_lounge_chair', 0.82, 5.95, 0, -3.2, Math.PI / 2, { addShadow: true });
  placeGLTFModel(p4, 'mid_century_lounge_chair', 0.82, 8.45, 0, -3.2, -Math.PI / 2, { addShadow: true });
  placeGLTFModel(p4, 'wooden_lantern_01', 0.48, 8.75, 0, -1.85, -0.35, { addShadow: true });

  // Bioclimatic Pergola over Copper Cocktail Bar + Illuminated Poolside Resort Canopy & Chandeliers
  for (const [px, pz] of [[2.2, -11.5], [8.8, -11.5], [2.2, -6.8], [8.8, -6.8]]) {
    box(p4, 0.18, 3.6, 0.18, px, 1.8, pz, matSteel);
  }
  for (let lz = -11.4; lz <= -6.8; lz += 0.48) {
    box(p4, 6.8, 0.12, 0.20, 5.5, 3.6, lz, matWoodDark);
    if (Math.abs((lz + 11.4) % 1.44) < 0.1) {
      box(p4, 6.4, 0.035, 0.05, 5.5, 3.52, lz, matWarmBulb, false, false);
    }
  }
  box(p4, 6.85, 0.05, 4.85, 5.5, 3.66, -9.15, matBrass, false, false);
  addGrandChandelier(p4, 4.2, -9.2, { lowestY: 2.28, bodyHeight: 0.98, modelId: 'Chandelier_01', ceilingY: 3.58 });
  addGrandChandelier(p4, 6.8, -9.2, { lowestY: 2.28, bodyHeight: 0.98, modelId: 'Chandelier_01', ceilingY: 3.58 });

  // Poolside & Lounger Architectural Pergola Canopy (West Wing X = -10.4..-0.8, Z = -9.8..-4.2) + Hanging Chandeliers & Candelabras
  for (const [px, pz] of [[-10.4, -9.6], [-0.8, -9.6], [-10.4, -4.4], [-0.8, -4.4]]) {
    box(p4, 0.18, 3.55, 0.18, px, 1.775, pz, matWoodDark);
    box(p4, 0.22, 0.06, 0.22, px, 3.52, pz, matBrass, false);
  }
  for (let lz = -9.5; lz <= -4.5; lz += 0.50) {
    box(p4, 9.8, 0.12, 0.18, -5.6, 3.55, lz, matWoodDark);
    if (Math.abs((lz + 9.5) % 1.5) < 0.1) {
      box(p4, 9.2, 0.035, 0.05, -5.6, 3.47, lz, matWarmBulb, false, false);
    }
  }
  addGrandChandelier(p4, -4.6, -7.2, { lowestY: 2.32, bodyHeight: 1.02, modelId: 'Chandelier_01', ceilingY: 3.52 });
  addGrandChandelier(p4, -8.4, -6.9, { lowestY: 2.30, bodyHeight: 0.98, modelId: 'Chandelier_01', ceilingY: 3.52 });
  addStandingCandelabra(p4, -6.8, 0, -4.85, 1.44, 5);
  addStandingCandelabra(p4, 0.75, 0, -4.85, 1.44, 5);
  addStandingCandelabra(p4, 3.1, 0, -9.6, 1.44, 5);
  // Hammered Copper Bar + Backlit Liquor Display + Brass Goblets + Stools
  box(p4, 4.6, 1.08, 1.15, 5.5, 0.54, -9.8, matCopper);
  box(p4, 4.75, 0.06, 1.25, 5.5, 1.1, -9.8, matDarkMarble);
  box(p4, 4.4, 2.1, 0.45, 5.5, 1.1, -11.4, matWoodDark);
  for (let bx = 3.6; bx <= 7.4; bx += 0.55) {
    cyl(p4, 0.05, 0.05, 0.28, 10, bx, 1.45, -11.35, bx % 1.1 === 0 ? matWarmBulb : matCopper);
  }
  placeGLTFModel(p4, 'wine_bottles_01', 0.34, 4.5, 1.13, -9.8, 0, { addShadow: false });
  placeGLTFModel(p4, 'brass_goblets', 0.22, 5.45, 1.13, -9.72, 0.35, { addShadow: false });
  placeGLTFModel(p4, 'brass_vase_01', 0.30, 6.95, 1.13, -9.85, -0.2, { addShadow: false });
  placeGLTFModel(p4, 'brass_candleholders', 0.26, 6.3, 1.13, -9.8, 0.26, { addShadow: false });
  for (let sx = 3.8; sx <= 7.2; sx += 1.1) {
    placeGLTFModel(p4, 'bar_chair_round_01', 0.78, sx, 0, -8.8, Math.PI, { addShadow: true });
  }
  addPersistentPointLight(p4, 0xffb76b, 11.0, 15, 1.4, 5.5, 2.85, -9.2, { dayIntensity: 2.0, nightIntensity: 11.0 });

  // Lush Botanical Rooftop Planters, Sculptures, Resort Books & Poolside Cabana Garment Racks (Piso 4)
  for (const [px, pz] of [[-11.8, -13.0], [-11.8, -1.0], [11.5, -13.0], [11.5, -1.0]]) {
    const isBack = pz < -6.0;
    placeGLTFModel(p4, isBack ? 'potted_plant_02' : 'potted_plant_04', isBack ? 2.15 : 1.65, px, 0, pz, px * 0.35, { addShadow: true });
  }
  placeGLTFModel(p4, 'shrub_02', 1.05, -7.6, 0, -10.4, 0.44, { addShadow: true });
  placeGLTFModel(p4, 'shrub_02', 1.05, 1.4, 0, -10.4, -0.52, { addShadow: true });
  placeGLTFModel(p4, 'fern_02', 0.95, -10.8, 0, -11.2, 0.4, { addShadow: true });
  placeGLTFModel(p4, 'fern_02', 0.95, 9.8, 0, -11.2, -0.3, { addShadow: true });

  // Mediterranean & Tulum Botanical Ring (Braided Pachira Trees, Terracotta Pots & 6 Planted Troughs)
  addBotanicalVessel(p4, 'pachira_aquatica_01', -11.4, 0, -3.6, 1.28, 'terracotta', 0.35);
  addBotanicalVessel(p4, 'pachira_aquatica_01', 11.2, 0, -6.2, 1.26, 'basalt', -0.45);
  placeGLTFModel(p4, 'potted_plant_01', 1.42, 2.35, 0, -11.2, 0.25, { addShadow: true });
  placeGLTFModel(p4, 'potted_plant_01', 1.38, 8.95, 0, -11.2, -0.35, { addShadow: true });
  for (const [bx, bz, brot] of [
    [-8.6, 0.92, 0],
    [3.6, 0.92, 0],
    [9.2, 0.92, 0],
    [-4.8, -13.85, Math.PI],
    [0.2, -13.85, Math.PI],
    [12.25, -8.8, -Math.PI / 2]
  ]) {
    addPlantedBox(p4, bx, 0, bz, brot, 1.08);
  }

  // Rooftop Monumental Sculptures, Pergola Framed Art, Resort Shelving & Poolside Linen Cabana Rack
  addSculpturePlinth(p4, 'gothic_statue', 0.88, 1.65, -9.85, -12.65, 0.48, 'basalt');
  addSculpturePlinth(p4, 'bronze_ray_statue', 1.06, 0.56, 10.65, -4.85, -0.62, 'basalt');
  addSculpturePlinth(p4, 'horse_head', 1.08, 0.54, 1.45, -12.55, -0.25, 'walnut');
  placeGLTFModel(p4, 'fancy_picture_frame_01', 0.96, 4.35, 2.45, -11.14, 0, { addShadow: false });
  placeGLTFModel(p4, 'hanging_picture_frame_02', 0.96, 6.65, 2.45, -11.14, 0, { addShadow: false, customArtMat: matArts[14] });
  placeGLTFModel(p4, 'standing_picture_frame_01', 0.23, 7.42, 0.62, -3.05, -0.85, { addShadow: false });
  addCuratedBookcase(p4, 8.45, 0, -9.85, Math.PI, 'display_console');
  addBookStack(p4, 7.02, 0.62, -3.32, 0.42, 'carved_wooden_elephant');
  placeGLTFModel(p4, 'binder_notebook', 0.032, -9.12, 0.62, -6.68, 0.3, { addShadow: false });
  addCoutureGarmentRack(p4, -11.55, 0, -6.9, Math.PI / 2, 'resort');
  addBoutiqueCoatStand(p4, 9.65, 0, -7.55, -0.45, 'ivory');

  addPlantPot(p2, -11.6, 0, -5.8, 1.0);

  /**
   * CONTINUIDAD PERCHERO → CUERPO (Margaux De Vries Dep. 02):
   * Cuelga físicamente una nueva prenda importada desde internet (con su paleta hexadecimal extraída)
   * en el Perchero Couture o Valet Stand del piso correspondiente, y devuelve las coordenadas exactas
   * de cámara macro 100mm (`worldPos`, `camPos`, `camTarget`) para renderizar su ficha en la Bóveda.
   */
  function hangCustomGarmentOnRack({ floor = 2, primaryHex = '#1f232b', secondaryHex = '#0B2B20', subtype = 'dress' } = {}) {
    const fNum = [0, 1, 2, 3, 4].includes(Number(floor)) ? Number(floor) : 2;
    const racks = coutureRacksByFloor[fNum] || coutureRacksByFloor[2];
    const rack = racks[0];
    if (!rack) return null;

    const customMat = new THREE.MeshStandardMaterial({
      ...pbrVelvet,
      color: new THREE.Color(primaryHex || '#1f232b'),
      normalScale: new THREE.Vector2(0.65, 0.65),
      roughness: subtype === 'corset' || subtype === 'blazer' ? 0.55 : 0.78,
      metalness: 0.06
    });
    const trimMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(secondaryHex || '#0B2B20'),
      roughness: 0.45,
      metalness: 0.1
    });

    const slotIdx = (rack.userData.customHangerCount || 0) % 5;
    rack.userData.customHangerCount = (rack.userData.customHangerCount || 0) + 1;

    const gItem = new THREE.Group();
    const len = subtype === 'blazer' || subtype === 'corset' ? 0.98 : 1.34;
    const w = 0.42;

    if (rack.userData.isCoatStand) {
      gItem.position.set(-0.09, 1.66, 0.07);
      gItem.rotation.y = 0.42 + slotIdx * 0.55;
    } else {
      const gx = -0.42 + slotIdx * 0.21;
      gItem.position.set(gx, 1.92, 0.025);
      gItem.rotation.y = 0.62;
    }

    const hook = new THREE.Mesh(new THREE.TorusGeometry(0.034, 0.0045, 8, 16, Math.PI * 1.4), matBrass);
    hook.position.set(0, 0.028, 0);
    hook.rotation.y = Math.PI / 2;
    gItem.add(hook);
    cyl(gItem, 0.0045, 0.0045, 0.045, 8, 0, -0.02, 0, matBrass, false);

    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.014, w * 0.52, 10), matWoodDark);
      wing.rotation.x = side * (Math.PI / 2 - 0.26);
      wing.position.set(0, -0.068, side * w * 0.22);
      gItem.add(wing);
    }

    const bodyTopY = -0.085;
    const centerPleat = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.076, len, 14), customMat);
    centerPleat.scale.set(0.7, 1.0, 2.4);
    centerPleat.position.set(0, bodyTopY - len * 0.5, 0);
    centerPleat.castShadow = true;
    gItem.add(centerPleat);

    for (const side of [-1, 1]) {
      const sideDrape = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, len * 0.96, 12), trimMat);
      sideDrape.scale.set(0.64, 1.0, 1.65);
      sideDrape.position.set(side * 0.01, bodyTopY - len * 0.49, side * (w * 0.28));
      sideDrape.castShadow = true;
      gItem.add(sideDrape);
    }

    const oRing = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.005, 8, 18), matBrass);
    oRing.rotation.y = Math.PI / 2;
    oRing.position.set(0.04, bodyTopY - 0.36, 0);
    gItem.add(oRing);

    rack.add(gItem);
    rack.updateMatrixWorld(true);

    const floorY = fNum * FLOOR_HEIGHT;
    const worldRack = new THREE.Vector3();
    rack.getWorldPosition(worldRack);
    const fwd = new THREE.Vector3(0, 0, 1.85).applyAxisAngle(new THREE.Vector3(0, 1, 0), rack.rotation.y);
    const sideOff = new THREE.Vector3(0.45, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), rack.rotation.y);

    const worldPos = {
      x: Number(worldRack.x.toFixed(2)),
      y: Number((floorY + 1.22).toFixed(2)),
      z: Number(worldRack.z.toFixed(2))
    };
    const camPos = {
      x: Number((worldRack.x + fwd.x + sideOff.x).toFixed(2)),
      y: Number((floorY + 1.36).toFixed(2)),
      z: Number((worldRack.z + fwd.z + sideOff.z).toFixed(2))
    };
    const camTarget = { ...worldPos };

    return { worldPos, camPos, camTarget };
  }

  /**
   * PIPELINE DE EXTRACCIÓN DE OBJETOS DESDE INTERNET (Mateo Santoro Dep. 04):
   * Integra en vivo un nuevo cuadro (con la foto subida como óleo enmarcado), planta, escultura o prop
   * en el piso seleccionado respetando los 12 Conos Ópticos Sagrados, y devuelve sus coordenadas macro.
   */
  function spawnCustomObjectInFloor({ floor = 2, subtype = 'painting', imageDataUrl = null, primaryHex = '#1f232b' } = {}) {
    const fNum = [0, 1, 2, 3, 4].includes(Number(floor)) ? Number(floor) : 2;
    const group = floorGroups[fNum] || floorGroups[2];
    const floorY = fNum * FLOOR_HEIGHT;

    // Coordenadas perimetrales seguras (0% invasión de los 12 Conos Ópticos Sagrados)
    const safePerimeterSlots = {
      0: { x: -3.2, z: -13.35, wallZ: -14.22, rotY: 0 },
      1: { x: -8.1, z: -13.25, wallZ: -14.22, rotY: 0 },
      2: { x: 1.55, z: -13.25, wallZ: -14.22, rotY: 0 },
      3: { x: -2.95, z: -13.35, wallZ: -14.22, rotY: 0 },
      4: { x: -2.15, z: -12.65, wallZ: -11.14, rotY: 0 }
    };
    const slot = safePerimeterSlots[fNum] || safePerimeterSlots[2];

    if (subtype === 'painting' && imageDataUrl) {
      const tex = new THREE.TextureLoader().load(imageDataUrl);
      tex.colorSpace = THREE.SRGBColorSpace;
      const customArtMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.34, metalness: 0.04 });
      const wy = 2.15;
      placeGLTFModel(group, 'fancy_picture_frame_01', 1.24, slot.x, wy, slot.wallZ, slot.rotY, {
        addShadow: false,
        customArtMat
      });
      return {
        modelId: 'fancy_picture_frame_01',
        worldPos: { x: slot.x, y: Number((floorY + wy).toFixed(2)), z: slot.wallZ },
        camPos: { x: Number((slot.x + 0.15).toFixed(2)), y: Number((floorY + wy + 0.05).toFixed(2)), z: Number((slot.wallZ + 1.85).toFixed(2)) },
        camTarget: { x: slot.x, y: Number((floorY + wy).toFixed(2)), z: slot.wallZ }
      };
    }

    if (subtype === 'plant') {
      addBotanicalVessel(group, 'pachira_aquatica_01', slot.x, 0, slot.z, 1.18, 'basalt', 0.35);
      return {
        modelId: 'pachira_aquatica_01',
        worldPos: { x: slot.x, y: Number((floorY + 0.95).toFixed(2)), z: slot.z },
        camPos: { x: Number((slot.x + 1.45).toFixed(2)), y: Number((floorY + 1.22).toFixed(2)), z: Number((slot.z + 1.55).toFixed(2)) },
        camTarget: { x: slot.x, y: Number((floorY + 0.95).toFixed(2)), z: slot.z }
      };
    }

    if (subtype === 'sculpture') {
      addSculpturePlinth(group, 'marble_bust_01', 1.1, 0.64, slot.x, slot.z, 0.25, 'basalt');
      return {
        modelId: 'marble_bust_01',
        worldPos: { x: slot.x, y: Number((floorY + 1.36).toFixed(2)), z: slot.z },
        camPos: { x: Number((slot.x + 0.85).toFixed(2)), y: Number((floorY + 1.48).toFixed(2)), z: Number((slot.z + 1.55).toFixed(2)) },
        camTarget: { x: slot.x, y: Number((floorY + 1.36).toFixed(2)), z: slot.z }
      };
    }

    // Default furniture/prop: side table with brass vase & custom color accent
    placeGLTFModel(group, 'side_table_tall_01', 0.72, slot.x, 0, slot.z, 0.2, { addShadow: true });
    placeGLTFModel(group, 'brass_vase_01', 0.32, slot.x, 0.72, slot.z, 0.3, { addShadow: false });
    const accentDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.16, 0.02, 20),
      new THREE.MeshStandardMaterial({ color: new THREE.Color(primaryHex || '#1f232b'), roughness: 0.4 })
    );
    accentDisc.position.set(slot.x, 0.73, slot.z);
    group.add(accentDisc);

    return {
      modelId: 'brass_vase_01',
      worldPos: { x: slot.x, y: Number((floorY + 0.88).toFixed(2)), z: slot.z },
      camPos: { x: Number((slot.x + 0.75).toFixed(2)), y: Number((floorY + 1.12).toFixed(2)), z: Number((slot.z + 1.25).toFixed(2)) },
      camTarget: { x: slot.x, y: Number((floorY + 0.88).toFixed(2)), z: slot.z }
    };
  }

  return {
    floorGroups,
    waterMeshes,
    frontGlassPanels,
    mirrorReflector,
    coutureRacksByFloor,
    hangCustomGarmentOnRack,
    spawnCustomObjectInFloor
  };
}
