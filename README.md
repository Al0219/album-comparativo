# TechCompare — Álbum Comparativo de Tecnología y Hardware

Aplicación web interactiva en español para explorar y comparar componentes de hardware internos y externos, periféricos y dispositivos tecnológicos. Cada ficha enfrenta dos productos de marcas distintas, con especificaciones técnicas detalladas, comparación visual de precios y una recomendación explícita fundamentada.

---

## 🚀 Características Principales

- **133 Categorías y 266 Productos:** Catálogo completo organizado en 17 secciones temáticas:
  - 🧠 **Componentes Internos:** Procesadores (CPU), Tarjetas Gráficas (GPU), Placas Madre, Memoria RAM, Almacenamiento SSD/HDD, Fuentes de Poder (PSU) y Refrigeración Líquida / Aire.
  - 🖥️ **Periféricos Externos:** Monitores (1080p, 1440p, 4K, Ultrawide), Teclados (mecánicos y de membrana), Ratones (gaming y oficina), Webcams, Auriculares, Bocinas, Hubs USB y Docks Thunderbolt.
  - 💻 **Laptops y Portátiles:** Ultrabooks, Gaming, Productividad y 2-en-1.
  - 📱 **Smartphones:** Gama de entrada, media, alta y flagship.
  - 📟 **Tablets:** Opciones multimedia, productividad y gama profesional.
  - ⌚ **Tecnología Inteligente:** Smartwatches, Smart Displays, Dispositivos de Streaming, Drones y Cámaras de Acción.
  - 🌐 **Redes y Conectividad:** Routers Wi-Fi 6/6E, Sistemas Mesh y Switches Gigabit administrables/no administrables.
  - 🔌 **Accesorios de Productividad:** Soportes ergonómicos, cargadores GaN y sistemas UPS.
  - 🖨️ **Oficina:** Impresoras, escáneres, etiquetadoras e impresión 3D.
  - 🎮 **Gaming:** Consolas de salón, portátiles, realidad mixta y proyectores.
  - 🎙️ **Creadores:** Cámaras, micrófonos, interfaces, controladores y gimbals.
  - 🏠 **Hogar:** Limpieza, clima, energía e iluminación inteligente.
  - 🍳 **Cocina:** Freidoras, cafeteras, microondas y cocción sous vide.
  - 🛴 **Movilidad y Salud:** Scooters, anillos, cuidado dental y personal.
  - 🛡️ **Seguridad:** Cámaras, timbres, alarmas, llaves FIDO2 y dashcams.

- **Comparativa Estricta Entre Marcas Diferentes:** El 100% de las 133 categorías compara productos de fabricantes competidores directos (Intel vs. AMD, NVIDIA vs. AMD, Apple vs. Samsung, Logitech vs. Razer, etc.).
- **Recursos visuales locales y trazables:** El catálogo base conserva fotografías verificadas. La expansión usa fotografías solo cuando el modelo pudo comprobarse y fichas SVG rotuladas para el resto, evitando mostrar imágenes incorrectas. Las fuentes se documentan en [`assets/IMAGE_SOURCES.md`](assets/IMAGE_SOURCES.md) y [`assets/EXPANSION_IMAGE_SOURCES.md`](assets/EXPANSION_IMAGE_SOURCES.md).
- **Recomendación Explícita:** Cada comparativa incluye un veredicto estructurado y un badge destacado indicando el producto recomendado y su justificación técnica/económica.
- **Tabla de Especificaciones Dinámica:** Muestra la unión completa de atributos técnicos sin ocultar datos específicos de ninguna marca, resaltando ganadores y ventajas por característica.
- **Interfaz Moderna y Accesible:**
  - Búsqueda instantánea con autocompletado y navegación por teclado.
  - Filtros multifacéticos por sección y nivel de complejidad técnica.
  - Modal accesible con control de historial y soporte para hash URLs (apertura directa y botón atrás).
  - Tema claro y oscuro persistente mediante `localStorage`.
  - Diseño responsivo adaptado para dispositivos móviles, tablets y monitores de escritorio.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura limpia y accesible con metadatos Open Graph y SEO.
- **CSS3 Vanilla:** Sistema de diseño con variables CSS (`custom properties`), diseño flexbox y grid fluido, animaciones y soporte para modo oscuro nativo.
- **JavaScript Vanilla (ES6+):** Lógica modular sin dependencias externas ni frameworks pesados para máxima velocidad de carga.
- **ImageMagick:** Normalización y optimización de dimensiones y peso de activos visuales.

---

## 📂 Estructura del Proyecto

```text
album-comparativo/
├── index.html                  # Punto de entrada principal de la aplicación
├── PLAN.md                     # Plan de trabajo y criterios de aceptación
├── HANDOFF.md                  # Bitácora operativa y estado del proyecto
├── README.md                   # Documentación general del proyecto
├── css/
│   └── styles.css              # Estilos globales, tema claro/oscuro y componentes
├── js/
│   ├── app.js                  # Inicialización de la galería, filtros y tema
│   ├── search.js               # Búsqueda interactiva y autocompletado
│   ├── compare.js              # Lógica del modal, tabla de specs y recomendaciones
│   └── data/                   # Base de datos modular en JavaScript
│       ├── internos.js         # CPUs, GPUs, Placas Madre, Fuentes, etc.
│       ├── perifericos.js      # Monitores, Teclados, Ratones, Webcams, Audio, etc.
│       ├── laptops.js          # Portátiles gaming, ultrabooks y oficina
│       ├── smartphones.js      # Teléfonos inteligentes organizados por gama
│       ├── tablets.js          # Tablets y dispositivos convertibles
│       ├── smart.js            # Smartwatches, TVs, Drones y Gadgets inteligentes
│       ├── redes.js            # Routers, Mesh, Switches de red
│       ├── almacenamiento.js   # Discos duros y SSDs
│       ├── audio.js            # Dispositivos de audio y sonido
│       ├── accesorios.js       # Soportes, UPS y accesorios de escritorio
│       ├── oficina.js          # Impresión, escaneo y etiquetado
│       ├── gaming.js           # Consolas, visores y proyectores
│       ├── creadores.js        # Producción audiovisual y streaming
│       ├── hogar.js            # Electrodomésticos y domótica
│       ├── cocina.js           # Cocina conectada
│       ├── movilidad.js        # Movilidad y salud tecnológica
│       └── seguridad.js        # Seguridad doméstica y digital
└── assets/
    ├── IMAGE_SOURCES.md        # Registro de fuentes oficiales y licencias de imágenes
    └── images/                 # Fotografías reales organizadas por categoría
        ├── procesadores/
        ├── gpu/
        ├── motherboards/
        ├── ram/
        ├── almacenamiento/
        ├── fuentes/
        ├── refrigeracion/
        ├── perifericos/
        ├── laptops/
        ├── smartphones/
        ├── tablets/
        ├── smart/
        ├── redes/
        └── accesorios/
```

---

## 🖥️ Cómo Ejecutar el Proyecto Localmente

No se requieren gestores de paquetes ni pasos de compilación:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Al0219/album-comparativo.git
   cd album-comparativo
   ```

2. Abrir con cualquier servidor web estático (o directamente abriendo `index.html` en el navegador):
   - Con Python:
     ```bash
     python3 -m http.server 8000
     ```
     Luego visitar `http://localhost:8000` en tu navegador.
   - Con Node.js (`npx serve` o similar):
     ```bash
     npx serve .
     ```
   - Con la extensión Live Server de VS Code / IDE.

---

## 📋 Validación de Integridad y Sintaxis

Para comprobar la validez de los scripts del proyecto:
```bash
node scripts/check-catalog.js
```

Para verificar que no existen marcadores de posición (`placehold.co`):
```bash
grep -rn "placehold.co" js/
```
*(Debe retornar 0 resultados).*

---

## 📜 Créditos y Fuentes de Imágenes

Todas las imágenes utilizadas provienen de páginas oficiales de fabricantes (Intel, AMD, NVIDIA, ASUS, Corsair, Samsung, Apple, Logitech, Razer, etc.) y distribuidores oficiales certificados para fines educativos y comparativos. La lista completa con enlaces y códigos de modelo se encuentra detallada en [`assets/IMAGE_SOURCES.md`](assets/IMAGE_SOURCES.md).
