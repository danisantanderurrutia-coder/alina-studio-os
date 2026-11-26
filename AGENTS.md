# Regla de Arquitectura Single-Source 3D: Three.js Métrico 1:1

`alina-studio-os` opera exclusivamente sobre **Three.js WebGL2 + Blender GLB (`alina.glb`) + activos escaneados PBR CC0** como única fuente de verdad métrica (`1 unidad = 1 metro`, 5 niveles de `4.90 m` de altura libre).

1. **Sin dependencias ni binarios de Unity:**
   - El pipeline de previsualización 3D, multipass (`Beauty PBR CoC`, `Linear Depth 16-bit`, `Camera Normals`, `Semantic Mask 7-ID`, `OpenPose`) y exportación hacia **Flux.1 Dev** y **Higgsfield Cinema Studio 4.0** corre de forma 100% nativa en Three.js WebGL2.
   - No reintroducir contenedores `#unity-canvas`, puentes `.jslib` ni carpetas `unity-build/`.

2. **Navegación directa mediante Slugs (`#hash`):**
   - Todas las secciones principales (`#plato`, `#prompts`, `#objetos`, `#cine`, `#asesores`), sub-vistas (`#capitulos`, `#blueprint`, `#director`, `#biblia`, `#vestuario`, `#hods`), pisos (`#piso-4` a `#planta-baja`), spots (`#spot-<id>`) y pestañas de la guía (`#guia` a `#guia-sequencer-fusion`) son enlazables por URL directa.
