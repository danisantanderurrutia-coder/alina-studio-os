# Regla de Arquitectura Dual-Engine: Carga por Piso en Unity WebGL

Esta regla aplica a toda integración del **Motor B (Unity 6 URP WebGL)** dentro de `alina-studio-os`:

1. **Carga diferida por piso (`StreamingAssets/bundles/floor_<N>.bundle`):**
   - Unity WebGL nunca debe obligar a descargar el mobiliario de los 5 pisos de golpe al arrancar. El archivo base `unity-build.data.unityweb` solo carga el cascarón arquitectónico, iluminación, shaders y el avatar de Alina; cada piso (`0` a `4`) descarga su `AssetBundle` bajo demanda únicamente cuando el usuario entra a ese piso (o activa `Casa de Muñecas` / `Exterior`).

2. **Cartel obligatorio de carga por piso con porcentaje:**
   - Al ir a cualquier piso cuyo paquete aún no esté cargado en memoria, el visor debe mostrar el indicador de progreso con el formato exacto:
     > `Cargando piso X: <descripción aquí>, favor espere`
     acompañado del **porcentaje de carga en vivo (`0%` – `100%`)** reportado desde Unity (`onFloorLoadProgress`).
   - Una vez cargado en sesión, volver a ese piso debe ser instantáneo sin volver a descargarlo.
