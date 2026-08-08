# Álbum Comparativo — Tecnología Completa

## Descripción

Aplicación web de una sola página (SPA) con **100 categorías** de productos tecnológicos, desde el componente más simple hasta dispositivos de alta gama. El usuario puede buscar cualquier categoría y ver una **comparativa lado a lado** de dos productos de distintas marcas con sus especificaciones completas.

- **Idioma**: Español
- **Imágenes**: URLs externas (fabricantes / tiendas oficiales)
- **Stack**: HTML + CSS + JavaScript Vanilla

---

## Arquitectura de Archivos

```
album-comparativo/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data/
│   │   ├── internos.js       ← ~33 categorías de componentes internos PC
│   │   ├── perifericos.js    ← ~17 categorías de periféricos
│   │   ├── smartphones.js    ← 6 categorías de teléfonos
│   │   ├── laptops.js        ← 8 categorías de laptops
│   │   ├── tablets.js        ← 4 categorías de tablets
│   │   ├── audio.js          ← 5 categorías de audio
│   │   ├── almacenamiento.js ← 5 categorías de almacenamiento externo
│   │   ├── redes.js          ← 5 categorías de redes
│   │   ├── accesorios.js     ← 6 categorías de accesorios/cargadores
│   │   └── smart.js          ← 11 categorías de smart devices
│   ├── search.js             ← Motor de búsqueda + filtros
│   ├── compare.js            ← Renderizado del panel comparativo
│   └── app.js                ← Punto de entrada principal
└── assets/
    └── icons/                ← Íconos SVG por sección
```

---

## Catálogo Completo de 100 Categorías

### 🔧 Componentes Internos PC (33)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 1 | Cable SATA | ★☆☆☆☆ |
| 2 | Cable de alimentación PCIe | ★☆☆☆☆ |
| 3 | Pasta térmica | ★☆☆☆☆ |
| 4 | Disipador de calor con ventilador | ★★☆☆☆ |
| 5 | Fuente de poder básica (PSU no modular) | ★★☆☆☆ |
| 6 | Fuente de poder modular | ★★★☆☆ |
| 7 | Memoria RAM DDR4 | ★★☆☆☆ |
| 8 | Memoria RAM DDR5 | ★★★☆☆ |
| 9 | HDD 3.5" escritorio | ★★☆☆☆ |
| 10 | HDD 2.5" portátil | ★★☆☆☆ |
| 11 | SSD SATA 2.5" | ★★★☆☆ |
| 12 | SSD NVMe M.2 Gen 3 | ★★★★☆ |
| 13 | SSD NVMe M.2 Gen 4 | ★★★★★ |
| 14 | Tarjeta de red WiFi PCIe | ★★☆☆☆ |
| 15 | Tarjeta de red Ethernet PCIe | ★★☆☆☆ |
| 16 | Tarjeta de sonido interna | ★★★☆☆ |
| 17 | Lector de tarjetas interno | ★☆☆☆☆ |
| 18 | Óptico (Blu-ray / DVD) | ★★☆☆☆ |
| 19 | Placa base AMD B-series (gama media) | ★★★★☆ |
| 20 | Placa base AMD X-series (gama alta) | ★★★★★ |
| 21 | Placa base Intel B-series (gama media) | ★★★★☆ |
| 22 | Placa base Intel Z-series (gama alta) | ★★★★★ |
| 23 | CPU Intel gama media (Core i5) | ★★★★☆ |
| 24 | CPU Intel gama alta (Core i9) | ★★★★★ |
| 25 | CPU AMD gama media (Ryzen 5) | ★★★★☆ |
| 26 | CPU AMD gama alta (Ryzen 9) | ★★★★★ |
| 27 | GPU gama baja | ★★★☆☆ |
| 28 | GPU gama media | ★★★★☆ |
| 29 | GPU gama alta | ★★★★★ |
| 30 | Refrigeración líquida AIO 240mm | ★★★★☆ |
| 31 | Refrigeración líquida AIO 360mm | ★★★★★ |
| 32 | Gabinete Mid-Tower | ★★☆☆☆ |
| 33 | Gabinete Full-Tower | ★★★☆☆ |

### 🖱️ Periféricos Externos (17)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 34 | Pad de mouse | ★☆☆☆☆ |
| 35 | Mouse de oficina | ★★☆☆☆ |
| 36 | Mouse gaming | ★★★☆☆ |
| 37 | Teclado de membrana | ★★☆☆☆ |
| 38 | Teclado mecánico gaming | ★★★☆☆ |
| 39 | Monitor 1080p 144Hz gaming | ★★★☆☆ |
| 40 | Monitor 1440p | ★★★★☆ |
| 41 | Monitor 4K | ★★★★★ |
| 42 | Monitor ultrawide | ★★★★☆ |
| 43 | Webcam básica 1080p | ★★☆☆☆ |
| 44 | Webcam 4K streaming | ★★★★☆ |
| 45 | Auriculares gaming con cable | ★★★☆☆ |
| 46 | Auriculares gaming inalámbricos | ★★★★☆ |
| 47 | Bocinas 2.0 de escritorio | ★★☆☆☆ |
| 48 | Bocinas 2.1 (con subwoofer) | ★★★☆☆ |
| 49 | Hub USB | ★★☆☆☆ |
| 50 | Dock station multipuerto | ★★★☆☆ |

### 📱 Smartphones (6)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 51 | Smartphone gama baja Android | ★★☆☆☆ |
| 52 | Smartphone gama media Android | ★★★☆☆ |
| 53 | Smartphone gama alta Android | ★★★★★ |
| 54 | iPhone gama media (iPhone 16) | ★★★★☆ |
| 55 | iPhone gama alta (iPhone 16 Pro) | ★★★★★ |
| 56 | Smartphone plegable | ★★★★★ |

### 💻 Laptops (8)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 57 | Laptop básica / estudiante | ★★☆☆☆ |
| 58 | Laptop gama media | ★★★☆☆ |
| 59 | Laptop gaming gama media | ★★★★☆ |
| 60 | Laptop gaming gama alta | ★★★★★ |
| 61 | Ultrabook premium | ★★★★☆ |
| 62 | MacBook Air | ★★★★☆ |
| 63 | MacBook Pro | ★★★★★ |
| 64 | Laptop 2-en-1 / convertible | ★★★★☆ |

### 📟 Tablets (4)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 65 | Tablet Android básica | ★★☆☆☆ |
| 66 | Tablet Android premium | ★★★★☆ |
| 67 | iPad básico | ★★★☆☆ |
| 68 | iPad Pro | ★★★★★ |

### 🎧 Audio (5)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 69 | Auriculares TWS gama baja | ★★☆☆☆ |
| 70 | Auriculares TWS gama media | ★★★☆☆ |
| 71 | Auriculares TWS premium (ANC) | ★★★★★ |
| 72 | Soundbar básico | ★★★☆☆ |
| 73 | Soundbar premium Dolby Atmos | ★★★★★ |

### 💾 Almacenamiento Externo (5)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 74 | USB Flash Drive | ★☆☆☆☆ |
| 75 | SSD externo portátil | ★★★☆☆ |
| 76 | HDD externo 1TB | ★★☆☆☆ |
| 77 | HDD externo 4TB | ★★★☆☆ |
| 78 | NAS para hogar | ★★★★☆ |

### 🌐 Redes (5)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 79 | Router WiFi básico | ★★☆☆☆ |
| 80 | Router WiFi 6 gaming | ★★★★☆ |
| 81 | Sistema Mesh WiFi | ★★★★☆ |
| 82 | Switch de red básico | ★★☆☆☆ |
| 83 | Switch gestionable | ★★★★☆ |

### 🔌 Accesorios y Cargadores (6)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 84 | Cargador inalámbrico | ★★☆☆☆ |
| 85 | Power bank básico | ★★☆☆☆ |
| 86 | Power bank premium (alta capacidad) | ★★★☆☆ |
| 87 | Adaptador multipuerto USB-C | ★★☆☆☆ |
| 88 | Cable USB-C de alta velocidad | ★☆☆☆☆ |
| 89 | UPS doméstico | ★★★☆☆ |

### 📺 Smart Devices / IoT (11)
| # | Categoría | Complejidad |
|---|-----------|-------------|
| 90 | Smart Speaker | ★★★☆☆ |
| 91 | Smart TV 43" | ★★★☆☆ |
| 92 | Smart TV 55" | ★★★★☆ |
| 93 | Smart TV 65" 4K OLED | ★★★★★ |
| 94 | Proyector básico | ★★★☆☆ |
| 95 | Proyector láser 4K | ★★★★★ |
| 96 | Smartwatch gama baja | ★★★☆☆ |
| 97 | Smartwatch gama alta | ★★★★★ |
| 98 | Cámara de seguridad IP | ★★★☆☆ |
| 99 | Impresora de inyección | ★★☆☆☆ |
| 100 | Impresora láser multifunción | ★★★★☆ |

---

## Diseño de la Interfaz

### Header
- Logo + nombre de la app
- Barra de búsqueda central (grande, prominente) con autocompletado
- Toggle modo oscuro/claro

### Filtros
- **Sección**: Todos | PC Internos | Periféricos | Smartphones | Laptops | Tablets | Audio | Almacenamiento | Redes | Accesorios | Smart Devices
- **Complejidad**: Slider de ★ a ★★★★★
- **Orden**: Alfabético | Complejidad ↑ | Complejidad ↓

### Galería de Categorías
- Grid de tarjetas (3-4 columnas en desktop, 1-2 en móvil)
- Cada tarjeta: ícono representativo, nombre, estrellas de complejidad, badge de sección con color por categoría

### Panel Comparativo (al seleccionar una categoría)
```
┌──────────────────────────────────────────────────────────────┐
│  ← Volver    GPU gama alta    ★★★★★  |  Sección: PC Interno  │
├─────────────────────────┬────────────────────────────────────┤
│  NVIDIA RTX 4090        │  AMD Radeon RX 7900 XTX            │
│  [Imagen URL externa]   │  [Imagen URL externa]              │
│  $ 1,599 USD            │  $ 999 USD                         │
├─────────────────────────┴────────────────────────────────────┤
│  ESPECIFICACIONES                                            │
│  VRAM        │ 24 GB GDDR6X  │ 24 GB GDDR6   │  =           │
│  TDP         │ 450W          │ 355W          │  AMD ✅       │
│  Rend. 4K    │ Excelente     │ Muy Alto      │  NVIDIA ✅    │
│  Precio      │ $ 1,599       │ $ 999         │  AMD ✅       │
├──────────────────────────────────────────────────────────────┤
│  🏆 VEREDICTO: AMD gana en precio. NVIDIA lidera en          │
│  rendimiento absoluto y ray tracing.                         │
└──────────────────────────────────────────────────────────────┘
```

---

## Diseño Visual

| Elemento | Valor |
|----------|-------|
| Fuente principal | `Inter` (Google Fonts) |
| Fuente técnica | `JetBrains Mono` |
| Color primario | `hsl(220, 90%, 60%)` — Azul eléctrico |
| Color acento | `hsl(280, 80%, 65%)` — Violeta |
| Color éxito | `hsl(150, 60%, 50%)` — Verde |
| Fondo dark | `hsl(220, 20%, 8%)` |
| Glassmorphism | `backdrop-filter: blur(20px)` |
| Animaciones | Fade-in, hover scale, transiciones CSS suaves |

### Colores de Badge por Sección
| Sección | Color |
|---------|-------|
| PC Internos | Azul |
| Periféricos | Cian |
| Smartphones | Verde |
| Laptops | Violeta |
| Tablets | Naranja |
| Audio | Rosa |
| Almacenamiento | Amarillo |
| Redes | Turquesa |
| Accesorios | Gris |
| Smart Devices | Rojo |

---

## Fases de Implementación

### Fase 1 — Estructura y Datos
- [ ] `index.html` con HTML semántico completo
- [ ] `css/styles.css` con sistema de diseño, dark mode, animaciones
- [ ] `js/data/internos.js` — 33 categorías con specs reales
- [ ] `js/data/perifericos.js` — 17 categorías
- [ ] `js/data/smartphones.js` — 6 categorías
- [ ] `js/data/laptops.js` — 8 categorías
- [ ] `js/data/tablets.js` — 4 categorías
- [ ] `js/data/audio.js` — 5 categorías
- [ ] `js/data/almacenamiento.js` — 5 categorías
- [ ] `js/data/redes.js` — 5 categorías
- [ ] `js/data/accesorios.js` — 6 categorías
- [ ] `js/data/smart.js` — 11 categorías

### Fase 2 — Búsqueda y Navegación
- [ ] `js/search.js` — búsqueda en tiempo real + autocompletado
- [ ] Filtros por sección, complejidad y orden

### Fase 3 — Vista Comparativa
- [ ] `js/compare.js` — panel de comparación lado a lado
- [ ] Indicadores visuales de ganador por especificación
- [ ] Panel de veredicto automático

### Fase 4 — Pulido Final
- [ ] `js/app.js` — inicialización, router y eventos globales
- [ ] Responsividad móvil completa
- [ ] Animaciones de entrada y transición
- [ ] Meta tags SEO

---

## Verificación
- [ ] Buscar: "RAM DDR5", "iPhone Pro", "GPU alta", "laptop gaming", "soundbar", "mesh wifi"
- [ ] Verificar panel comparativo en desktop (1440px) y móvil (375px)
- [ ] Confirmar carga de imágenes por URL externa
- [ ] Probar toggle dark/light mode
- [ ] Navegar por todas las secciones con los filtros
