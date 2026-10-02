# Handoff — Álbum comparativo de componentes

> **Actualización del 2 de octubre de 2026:** el catálogo fue ampliado a **133 categorías, 266 fichas de producto y 17 secciones**. Se agregaron las 30 comparativas de `PLAN.md` y 5 de seguridad tecnológica. Las cifras 98/196/10 que aparecen más abajo describen el catálogo base antes de esta expansión.

Documento operativo para retomar el proyecto sin repetir el diagnóstico. Actualizar las casillas y la fecha al terminar cada bloque de trabajo.

**Entrega:** sábado 3 de octubre de 2026, 23:59  
**Estado general:** MVP funcional; cifras, comparativas entre marcas, tabla completa y recomendación explícita corregidas. Aún faltan imágenes reales y pruebas visuales.  
**Última actualización:** 2 de octubre de 2026

---

## Qué ya está hecho

- [x] Aplicación web estática en español con HTML, CSS y JavaScript vanilla.
- [x] Galería de categorías, filtros por sección y complejidad, ordenamiento y búsqueda con autocompletado.
- [x] Modal de comparación con dos productos, precios, especificaciones y veredicto.
- [x] Tema claro/oscuro persistente mediante `localStorage`.
- [x] Catálogo cargado desde diez archivos en `js/data/`.
- [x] Validación de sintaxis correcta para todos los archivos JavaScript.
- [x] Revisión de integridad: las categorías existentes tienen ID, dos productos, precios, imágenes, especificaciones y veredicto.
- [x] Plan de implementación actualizado en `PLAN.md` según los requisitos de la actividad.

## Estado real confirmado del catálogo

| Métrica | Valor actual | Observación |
|---|---:|---|
| Categorías | 98 | La interfaz, metadatos y textos ya anuncian 98. |
| Productos | 196 | La interfaz, metadatos y textos ya anuncian 196. |
| Secciones | 10 | Correcto. |
| Comparativas de marcas distintas | 98 | Cumplen el requisito. |
| Comparativas de la misma marca | 0 | Corregido. |
| Productos sin precio | 0 | Correcto. |
| Productos sin URL de imagen | 0 | Correcto técnicamente, pero las URLs son marcadores. |
| Veredictos ausentes | 0 | Correcto. |
| Recomendaciones visibles | 98 | Se calculan por ventajas; en empate, por precio. |

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
