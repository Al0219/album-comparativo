# Handoff — Álbum comparativo de componentes

Documento operativo para retomar el proyecto sin repetir el diagnóstico. Actualizar las casillas y la fecha al terminar cada bloque de trabajo.

**Entrega:** sábado 3 de octubre de 2026, 23:59  
**Estado general:** Fase de expansión en marcha; Asignación de Compañero A (Oficina, Gaming, Creadores) 100% completada e integrada en main. 113 categorías, 226 productos, 13 secciones, 0 placeholders y compatibilidad total GTQ/USD.  
**Última actualización:** 1 de octubre de 2026

---

## Qué ya está hecho

- [x] Aplicación web estática en español con HTML, CSS y JavaScript vanilla.
- [x] Galería de categorías, filtros por sección y complejidad, ordenamiento y búsqueda con autocompletado.
- [x] Modal de comparación con dos productos, precios, especificaciones y veredicto.
- [x] Tema claro/oscuro persistente mediante `localStorage`.
- [x] Catálogo cargado desde 13 archivos en `js/data/`.
- [x] Validación de sintaxis correcta para todos los archivos JavaScript (`node -c`).
- [x] Revisión de integridad: 100% de las 113 categorías tienen ID, marcas distintas, precios, imágenes locales 1000×1000 px, especificaciones homogéneas y recomendación explícita.
- [x] Plan de implementación actualizado en `PLAN.md` según los requisitos de la actividad.
- [x] Asignación Compañero A completada: 15 categorías (Oficina, Gaming, Creadores), 30 imágenes oficiales procesadas y registradas en `IMAGE_SOURCES.md`, nuevas pestañas de filtro en `index.html` y badges en CSS.
- [x] Optimización de layout del catálogo: Eliminado bloque intermedio de contadores en el hero; ancho de tarjetas ajustado (`minmax(300px, 1fr)`) en contenedor de 1760px para 5 columnas completas sin márgenes muertos laterales.
- [x] Optimización de modal comparativo: Rediseño compacto manteniendo distribución vertical (Header -> Productos enfrentados -> Especificaciones -> Veredicto) visible en pantalla completa sin scroll.

## Estado real confirmado del catálogo

| Métrica | Valor actual | Observación |
|---|---:|---|
| Categorías | 113 | 98 base + 15 de Compañero A. |
| Productos | 226 | 196 base + 30 de Compañero A. |
| Secciones | 13 | 10 base + 3 de Compañero A (oficina, gaming, creadores). |
| Comparativas de marcas distintas | 113 | 100% cumplen el requisito. |
| Comparativas de la misma marca | 0 | Ninguna. |
| Productos sin precio | 0 | Correcto. |
| Productos sin imagen local | 0 | 100% cuentan con imagen local en `assets/images/`. |
| Veredictos ausentes | 0 | Correcto. |
| Recomendaciones visibles | 113 | 100% con campo explícito `recomendado: 'A' \| 'B'`. |

---

## Pendiente obligatorio, en orden

### 1. Corregir el criterio “comparativa por marcas”

- [x] Cambiar las comparativas que actualmente tenían la misma marca en ambos lados.
- [x] Verificar que `productoA.marca !== productoB.marca` para todo el catálogo.

Comparativas identificadas:

- [x] `cpu-intel-i5` — ahora Intel vs AMD
- [x] `cpu-intel-i9` — ahora Intel vs AMD
- [x] `cpu-amd-r5` — ahora AMD vs Intel
- [x] `cpu-amd-r9` — ahora AMD vs Intel
- [x] `macbook-air` — ahora Apple vs HP
- [x] `macbook-pro` — ahora Apple vs ASUS
- [x] `apple-watch` — ahora Apple vs Samsung
- [x] `iphone-medio` — ahora Apple vs Samsung
- [x] `iphone-alto` — ahora Apple vs Samsung
- [x] `ipad-basico` — ahora Apple vs Samsung
- [x] `ipad-pro` — ahora Apple vs Samsung

**Criterio de cierre:** 98 de 98 categorías comparan marcas diferentes. **Estado actual: 98 de 98.**

### 2. Sustituir imágenes de marcador

- [x] Crear `assets/images/` y definir la estructura de nombres.
- [x] Reemplazar las 196 URL de `https://placehold.co/...` por imágenes reales de producto.
- [x] Guardar o documentar la fuente y licencia de cada imagen.
- [x] Optimizar formato, peso y dimensiones de las imágenes.
- [x] Comprobar que todas cargan y conservan texto alternativo útil.

**Decisión de implementación:** usar imágenes descargadas desde páginas oficiales del fabricante y distribuidores autorizados; no usar imágenes generadas por IA. Registrar por producto la URL de origen y verificar que marca y modelo coincidan antes de incorporarla.

**Avance:** 100% completado. Los 196 productos usan recursos locales verificados en `assets/images/` normalizados a WebP/JPEG/PNG con resolución máxima de 1200px y calidad 88. Todas las fuentes se encuentran registradas y verificadas en `assets/IMAGE_SOURCES.md`.

**Criterio de cierre:** no queda ninguna referencia a `placehold.co` en `js/data/`. (Completado: 0 referencias restantes)

### 3. Hacer la recomendación explícita

- [x] Añadir el campo `recomendado: 'A'` o `recomendado: 'B'` a cada objeto de categoría (100% de las 98 categorías tienen campo explícito).
- [x] Renderizar “Recomendación: [marca + modelo]” bajo la tabla en `js/compare.js`.
- [x] Mantener `veredicto` como explicación, no como sustituto de la recomendación.
- [x] Confirmar que toda recomendación se corresponde con datos y ganadores de la tabla.

**Criterio de cierre:** todas las comparativas recomiendan claramente un solo producto. **(Completado)**

### 4. Corregir consistencia de datos y de la vista

- [x] Elegir entre conservar 98/196 o agregar dos categorías para llegar a 100/200: se conserva 98/196.
- [x] Si se conserva 98/196, corregir hero, contador, footer y metadatos de `index.html`.
- [x] Cambiar `js/compare.js` para renderizar la unión de campos de ambos productos, no solo los del producto A.
- [x] Normalizar las comparativas `gpu-baja`, `gpu-media` y `gpu-alta` para no ocultar datos de AMD (`Núcleos de procesamiento` y `Tecnología de escalado`).
- [x] Mostrar el precio o diferencia de precio como parte explícita de la comparación (fila comparativa en tabla con ventaja de ahorro calculada).

**Criterio de cierre:** las cifras públicas coinciden con el catálogo y ningún dato de ambos productos queda oculto. **(Completado)**

### 5. Verificación y entrega

- [x] Probar en escritorio (1440 px) y móvil (375 px).
- [x] Probar búsqueda, autocompletado, filtros, ordenamiento y limpieza de búsqueda.
- [x] Probar apertura/cierre del modal mediante clic, Enter, Espacio, overlay, Escape y navegación por hash.
- [x] Probar ambos temas y persistencia al recargar.
- [x] Revisar foco, contraste, navegación con teclado, accesibilidad (`prefers-reduced-motion`) e imágenes rotas.
- [x] Añadir `README.md` con instrucciones, alcance y fuentes.
- [x] Preparar capturas de inicio, filtro, comparativa, recomendación y versión móvil.

### 6. Expansión Compañero A y Auditoría Visual de Imágenes

- [x] Implementación de 15 categorías adicionales (IDs 099 a 113) en `oficina` (5), `gaming` (5) y `creadores` (5).
- [x] Generación de archivos de datos: `js/data/oficina.js`, `js/data/gaming.js`, `js/data/creadores.js`.
- [x] Integración de 3 nuevos botones de filtros de sección y actualización de contadores a 113 categorías y 226 productos.
- [x] **Auditoría visual de producto y resolución de inconsistencias:**
  - `sony-playstation-5-slim.jpg`: Reemplazado placeholder no disponible por fotografía de estudio oficial con mando DualSense (Best Buy SKU 6646419).
  - `lenovo-legion-go.jpg`: Corregido SKU erróneo (era monitor MSI) por render auténtico de la consola portátil Lenovo Legion Go (Best Buy SKU 6559605).
  - `nintendo-switch-oled.jpg`: Reemplazada foto con caja por fotografía limpia de consola con mandos Joy-Con blancos.
  - `meta-quest-3.jpg`: Corregida imagen de altavoz LG por el visor Meta Quest 3 oficial con mandos Touch Plus (B&H SKU 1781297).
  - `apple-vision-pro.jpg`: Corregida imagen de iPhone 15 Pro por fotografía de prensa oficial del visor de computación espacial Apple Vision Pro y batería externa (Apple Newsroom WWDC23).
  - `samsung-the-freestyle-gen-2.jpg`: Corregido SKU erróneo (era disipador Corsair) por fotografía oficial del proyector Samsung The Freestyle 2ª Gen (Best Buy SKU 6552953).
  - `elgato-stream-deck-plus.jpg`: Corregido SKU erróneo (era UPS Panamax) por fotografía oficial de consola Elgato Stream Deck + con diales y LCD (Best Buy SKU 6524801).
  - `bambu-lab-a1.jpg` y `creality-ender-3-v3-ke.jpg`: Limpieza completa de etiquetas y banners comerciales sobre lienzo blanco puro 1000×1000 px.
  - `epson-ecotank-l3250.jpg`: Reencuadre y ajuste de escala a proporciones óptimas.
- [x] Todas las 30 imágenes de Compañero A validadas a 1000×1000 px, fondo `#FFFFFF`, peso optimizado (<150 KB) y registradas en `assets/IMAGE_SOURCES.md`.
- [x] **Rediseño Ergonómico de Modal y Catálogo:**
  - Modal comparativo organizado en arquitectura Split Dashboard (2 columnas): productos y veredicto a la izquierda, marcador y tabla a la derecha, garantizando visualización integral a simple vista con cero scroll en monitores de escritorio.
  - Catálogo panorámico expandido a `min(1800px, 94vw)` con cuadrícula fluida de 5 a 6 columnas en monitores 1080p+, aprovechando armónicamente todo el espacio horizontal.

---

## Archivos clave

| Archivo o carpeta | Responsabilidad |
|---|---|
| `index.html` | Estructura, cifras visibles, metadatos y scripts cargados. |
| `css/styles.css` | Diseño responsivo, tema y estilos del modal. |
| `js/app.js` | Galería, filtros, contador y tema. |
| `js/search.js` | Búsqueda y autocompletado. |
| `js/compare.js` | Modal, tabla de especificaciones, puntajes y veredicto. |
| `js/data/*.js` | Fuente de verdad de categorías y productos. |
| `PLAN.md` | Plan de acción y criterios de aceptación. |
| `HANDOFF.md` | Seguimiento operativo de este documento. |

## Decisiones abiertas

- [x] ¿Se mantiene el alcance de 98 categorías o se completa a 100? Se mantienen 98 categorías y 196 productos.
- [x] ¿Las imágenes se almacenarán en el repositorio o se enlazarán desde fuentes oficiales estables? Se almacenan en el repositorio dentro de `assets/images/` optimizadas (WebP/JPEG/PNG).
- [x] ¿Se conservarán categorías de dispositivos de consumo (smartphones, TV, drones) o se priorizará exclusivamente hardware de PC y periféricos? Se conservan y comparan marcas reconocidas (Apple, Samsung, Google, DJI, etc.).

## Reglas para quien retome el trabajo

1. No cambiar cifras públicas sin comprobar primero el tamaño de `window.CATALOG`.
2. Antes de cerrar una categoría, verificar marca distinta, imagen real, precio, especificaciones y recomendación única.
3. Actualizar las casillas de este archivo y de `PLAN.md` al completar cada fase.
4. No introducir mejoras visuales nuevas antes de completar los pendientes obligatorios.
