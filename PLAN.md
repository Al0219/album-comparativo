# Plan de Acción y Desarrollo — Álbum Comparativo de Tecnología
## Proyecto Final: Catálogo Integral y Expansión Colaborativa en Pareja

---

## 1. Visión y Objetivo de Entrega

Desarrollar y entregar una aplicación web interactiva en español que permita explorar y comparar dispositivos tecnológicos de consumo moderno. Cada comparativa enfrenta **dos productos de marcas rivales directas**, exhibiendo imágenes reales oficiales estandarizadas, precios de referencia locales en **Quetzales guatemaltecos (GTQ)** con alternativa en Dólares (USD), tabla de especificaciones homogénea, identificación de ventajas y una recomendación final inequívoca.

- **Estado Actual Completado:** 98 categorías · 196 productos · 10 secciones temáticas · Divisa GTQ/USD interactiva · 0 imágenes placeholder.
- **Resultado de la Expansión:** **133 categorías · 266 fichas de producto · 17 secciones temáticas**, incluyendo 5 comparativas adicionales de seguridad tecnológica.
- **Metodología de Trabajo:** División equitativa y paralela para **2 Desarrolladores** (15 categorías cada uno) con aislamiento de archivos para garantizar **0 conflictos de Git**.

---

## 2. Requisitos y Criterios de Calidad

| Requisito | Criterio de Aceptación Obligatorio |
|---|---|
| **Comparativa de Marcas** | 100% de las categorías enfrentan **dos marcas diferentes** (`productoA.marca !== productoB.marca`). |
| **Estandarización Visual** | Imágenes oficiales de producto encuadradas en **1000 × 1000 px**, fondo blanco puro (`#FFFFFF`), centradas y sin marcas de agua. |
| **Precios y Divisa Local** | Precios definidos en USD y convertidos automáticamente a **Quetzales (GTQ)** como divisa predeterminada (ref. 1 USD ≈ Q7.80) con alternador en tiempo real. |
| **Especificaciones Homogéneas** | Claves de `specs` idénticas entre Producto A y B para alinear filas en la tabla comparativa. |
| **Recomendación y Veredicto** | Atributo explícito `recomendado: 'A' | 'B'` y veredicto argumentado en español neutral. |
| **Diseño y Responsividad** | Interfaz moderna (*dark/light mode*, micro-animaciones, navegación por filtros y búsqueda instantánea) adaptada a escritorio y móviles. |

---

## 3. Matriz de Distribución de Trabajo (2 Desarrolladores)

| Parámetro | 👤 Compañero A | 👤 Compañero B |
|---|---|---|
| **Especialidad Temática** | **Oficina Tech, Gaming, Streaming & Creación** | **Hogar Inteligente, Cocina Tech, Salud & Movilidad** |
| **Volumen Asignado** | **15 categorías · 30 productos** | **15 categorías · 30 productos** |
| **Secciones Asignadas** | 🖨️ `oficina` (5) · 🎮 `gaming` (5) · 🎙️ `creadores` (5) | 🏠 `hogar` (7) · 🍳 `cocina` (4) · 🛴 `movilidad` (4) |
| **Archivos de Datos JS** | `js/data/oficina.js`<br>`js/data/gaming.js`<br>`js/data/creadores.js` | `js/data/hogar.js`<br>`js/data/cocina.js`<br>`js/data/movilidad.js` |
| **Carpetas de Imágenes** | `assets/images/oficina/` (10)<br>`assets/images/gaming/` (10)<br>`assets/images/creadores/` (10) | `assets/images/hogar/` (14)<br>`assets/images/cocina/` (8)<br>`assets/images/movilidad/` (8) |
| **Carga de Imágenes** | 30 imágenes oficiales (1000×1000 px) | 30 imágenes oficiales (1000×1000 px) |
| **Tareas de Soporte / Código** | Integración de pestañas y contadores en `index.html`, tokens en `css/styles.css` y `js/app.js` | Crear script de verificación `scripts/check-catalog.js` y actualizar documentación en `README.md` |
| **Rama Git de Trabajo** | `feature/oficina-gaming-creadores` | `feature/hogar-cocina-movilidad` |

---

## 4. Desglose Detallado de Categorías y Productos

### 👤 Asignación de Compañero A (15 Categorías · 30 Productos)

#### Bloque A1: 🖨️ Oficina e Impresión Tech (`seccion: 'oficina'`)
1. **099. Impresoras Multifuncionales Tanque Continuo:**
   - *Producto A:* Epson EcoTank L3250
   - *Producto B:* HP Smart Tank 580
   - *Claves:* Costo por página, PPM, resolución DPI, Wi-Fi Direct, sistema de recarga sin derrames.
2. **100. Impresoras Láser Monocromáticas de Alta Eficiencia:**
   - *Producto A:* Brother HL-L2460DW
   - *Producto B:* HP LaserJet Pro M209dw
   - *Claves:* PPM (páginas por minuto), dúplex automático, costo de tóner, bandeja de 250 hojas.
3. **101. Impresoras 3D FDM de Escritorio:**
   - *Producto A:* Bambu Lab A1
   - *Producto B:* Creality Ender-3 V3 KE
   - *Claves:* Velocidad máx. (500 mm/s), nivelación automática con sensor de presión, hotend temp, volumen cúbico.
4. **102. Escáneres Documentales de Alta Velocidad:**
   - *Producto A:* Fujitsu / Ricoh ScanSnap iX1600
   - *Producto B:* Epson WorkForce ES-500W II
   - *Claves:* Velocidad dúplex (PPM/IPM), capacidad alimentador ADF, OCR en nube, pantalla táctil.
5. **103. Impresoras Térmicas de Etiquetas:**
   - *Producto A:* Brother QL-800
   - *Producto B:* Dymo LabelWriter 550
   - *Claves:* Ancho máx. etiqueta, velocidad de impresión, resolución, corte automático, consumibles.

#### Bloque A2: 🎮 Consolas y Gaming Tech (`seccion: 'gaming'`)
6. **104. Consolas de Videojuegos de Salón:**
   - *Producto A:* Sony PlayStation 5 Slim
   - *Producto B:* Microsoft Xbox Series X
   - *Claves:* GPU TFLOPS, velocidad SSD, lector 4K Blu-ray, Game Pass vs PlayStation Plus.
7. **105. Handheld PC Gaming Portátil:**
   - *Producto A:* Valve Steam Deck OLED
   - *Producto B:* ASUS ROG Ally X
   - *Claves:* Pantalla OLED 90Hz vs IPS 120Hz VRR, batería (Whr), SteamOS vs Windows 11.
8. **106. Consolas Híbridas / Familiares:**
   - *Producto A:* Nintendo Switch OLED
   - *Producto B:* Lenovo Legion Go
   - *Claves:* Portabilidad y peso, catálogo exclusivo, mandos desacoplables con trackpad.
9. **107. Visores de Realidad Mixta y Computación Espacial:**
   - *Producto A:* Meta Quest 3
   - *Producto B:* Apple Vision Pro
   - *Claves:* Paneles (LCD vs Micro-OLED dual 4K), seguimiento ocular y manos, ecosistema, peso y precio.
10. **108. Proyectores Inteligentes Portátiles:**
    - *Producto A:* Samsung The Freestyle (2ª Gen)
    - *Producto B:* XGIMI Halo+
    - *Claves:* Lúmenes ANSI, auto-enfoque/trapecio omnidireccional, batería integrada, Smart OS.

#### Bloque A3: 🎙️ Streaming, Creación de Contenido & Audio Pro (`seccion: 'creadores'`)
11. **109. Cámaras Mirrorless Híbridas para Creadores:**
    - *Producto A:* Sony Alpha 7 IV
    - *Producto B:* Canon EOS R6 Mark II
    - *Claves:* Sensor Full-Frame BSI, enfoque IA con tracking en tiempo real, 4K60p 10-bit, estabilización IBIS.
12. **110. Micrófonos Dinámicos Broadcast / Podcasting:**
    - *Producto A:* Shure SM7dB
    - *Producto B:* Electro-Voice RE20
    - *Claves:* Preamplificador activo integrado, tecnología Variable-D, rechazo electromagnético, respuesta en frecuencia.
13. **111. Controladores de Producción y Streaming:**
    - *Producto A:* Elgato Stream Deck +
    - *Producto B:* Loupedeck Live S
    - *Claves:* Teclas LCD dinámicas, diales analógicos táctiles, bandas táctiles multifunción, integración OBS/Adobe.
14. **112. Interfaces de Audio Profesional USB-C:**
    - *Producto A:* Focusrite Scarlett 4i4 (4ª Gen)
    - *Producto B:* Universal Audio Volt 276
    - *Claves:* Compresor analógico 1176 vintage integrado, rango dinámico (120 dB), latencia ultra-baja.
15. **113. Estabilizadores Gimbal de 3 Ejes para Cámaras:**
    - *Producto A:* DJI RS 4 Pro
    - *Producto B:* Zhiyun Crane 4
    - *Claves:* Capacidad de carga (kg), enfoque motorizado por LiDAR, bloqueo automático de ejes, autonomía.

---

### 👤 Asignación de Compañero B (15 Categorías · 30 Productos)

#### Bloque B1: 🏠 Electrodomésticos y Hogar Inteligente (`seccion: 'hogar'`)
1. **114. Robots Aspiradores y Trapeadores con Base Autónoma:**
   - *Producto A:* Roborock Q Revo
   - *Producto B:* iRobot Roomba Combo j7+
   - *Claves:* Potencia de succión (Pa), evitación de obstáculos IA, base con autovaciado/autolavado, navegación LiDAR vs vSLAM.
2. **115. Aspiradoras Stick Inalámbricas Premium:**
   - *Producto A:* Dyson V15 Detect Absolute
   - *Producto B:* Samsung Bespoke Jet AI
   - *Claves:* Potencia succión (Air Watts), autonomía batería, láser detector de polvo microscópico, filtración HEPA sellada.
3. **116. Purificadores de Aire Inteligentes HEPA:**
   - *Producto A:* Xiaomi Smart Air Purifier 4 Pro
   - *Producto B:* Levoit Core 600S
   - *Claves:* CADR (m³/h), área de cobertura (m²), nivel de ruido (dB), sensor láser PM2.5, integración domótica.
4. **117. Termostatos Inteligentes con Aprendizaje:**
   - *Producto A:* Google Nest Learning Thermostat (4ª Gen)
   - *Producto B:* Ecobee Smart Thermostat Premium
   - *Claves:* Sensor de presencia por radar mmWave, compatibilidad Matter/Thread, sensor de calidad de aire interior.
5. **118. Cerraduras Inteligentes Biométricas:**
   - *Producto A:* Yale Assure Lock 2 Plus
   - *Producto B:* August Wi-Fi Smart Lock (4ª Gen)
   - *Claves:* Apple Home Key (NFC), lector biométrico de huella, conectividad Matter/Thread, tipo de instalación.
6. **119. Estaciones de Energía LiFePO4 (Power Stations):**
   - *Producto A:* EcoFlow Delta 2
   - *Producto B:* Bluetti AC180
   - *Claves:* Química de celdas LiFePO4 (3000+ ciclos), potencia inversor onda pura (Watts), recarga rápida AC/Solar, control por app.
7. **120. Iluminación Inteligente para Monitores (Light Bars):**
   - *Producto A:* BenQ ScreenBar Halo
   - *Producto B:* Xiaomi Mi Computer Monitor Light Bar
   - *Claves:* Óptica asimétrica anti-reflejo, control remoto inalámbrico 2.4GHz, sensor de luz ambiental, iluminación trasera.

#### Bloque B2: 🍳 Cocina y Gastronomía Tech (`seccion: 'cocina'`)
8. **121. Freidoras de Aire Inteligentes con Doble Resistencia:**
   - *Producto A:* Cosori Dual Blaze Smart 6.4L
   - *Producto B:* Philips Airfryer Combi XXL Connected
   - *Claves:* Doble resistencia (arriba/abajo sin voltear comida), capacidad litros, recetas guiadas por app, potencia Watts.
9. **122. Cafeteras Superautomáticas Domésticas:**
   - *Producto A:* De'Longhi Magnifica S Smart
   - *Producto B:* Philips Serie 3200 LatteGo
   - *Claves:* Presión bomba (15 bar), molinillo cónico cerámico vs acero, sistema espumador de leche sin tubos LatteGo.
10. **123. Hornos Microondas Inverter con Sensor de Humedad:**
    - *Producto A:* Panasonic NN-SN686S Genius Inverter
    - *Producto B:* Breville The Smooth Wave
    - *Claves:* Tecnología Inverter de cocción continua, sensor de vapor para evitar resecamiento, cierre suave Soft-Close.
11. **124. Cocina al Vacío Sous Vide de Inmersión con Wi-Fi:**
    - *Producto A:* Anova Precision Cooker 3.0
    - *Producto B:* Breville Joule Turbo
    - *Claves:* Control térmico PID (±0.1°C), conectividad Wi-Fi, algoritmo de cocción turbo, resistencia al agua IPX7.

#### Bloque B3: 🛴 Movilidad Eléctrica & Salud Tech (`seccion: 'movilidad'`)
12. **125. Scooters Eléctricos Inteligentes de Movilidad Urbana:**
    - *Producto A:* Segway Ninebot KickScooter MAX G2
    - *Producto B:* Xiaomi Electric Scooter 4 Pro (2ª Gen)
    - *Claves:* Motor potencia nominal/pico (Watts), autonomía real (km), frenado regenerativo KERS, suspensión hidráulica, integración Apple Find My.
13. **126. Anillos Inteligentes de Salud y Biometría (Smart Rings):**
    - *Producto A:* Oura Ring Gen 3
    - *Producto B:* Ultrahuman Ring AIR
    - *Claves:* Sensores PPG ópticos, temperatura cutánea infrarroja, variabilidad de frecuencia cardíaca (VFC), peso pluma (<3g), autonomía sin pantalla.
14. **127. Cepillos Dentales Eléctricos con IA:**
    - *Producto A:* Oral-B iO Series 9
    - *Producto B:* Philips Sonicare 9900 Prestige
    - *Claves:* Tecnología magnética vs sónica, sensor de presión 3D, seguimiento IA por cuadrante dental, conectividad Bluetooth.
15. **128. Secadores de Cabello Iónicos de Alta Velocidad:**
    - *Producto A:* Dyson Supersonic Nural
    - *Producto B:* Shark SpeedStyle
    - *Claves:* Motor digital RPM, sensor de proximidad para proteger cuero cabelludo, control térmico inteligente, accesorios magnéticos.

---

## 5. Contrato de Datos Estandarizado (JSON / JS)

Ambos desarrolladores deben respetar rigurosamente la siguiente estructura para cada categoría añadida:

```javascript
window.CATALOG = window.CATALOG || [];

window.CATALOG.push({
  id: 'impresora-tanque-continuo',            // kebab-case único
  nombre: 'Impresoras de Tanque Continuo',     // Nombre descriptivo
  seccion: 'oficina',                          // Identificador de sección
  icono: '🖨️',                                 // Emoji representativo
  complejidad: 2,                              // Entero de 1 a 5
  descripcion: 'Comparativa de sistemas de tanque de tinta continuo para oficina y hogar.',
  productoA: {
    marca: 'Epson',
    nombre: 'EcoTank L3250',
    precio: '$199.99 USD',                     // Formato '$XXX.XX USD' (se convierte a GTQ en tiempo real)
    imagen: 'assets/images/oficina/epson-l3250.jpg',
    specs: {
      'Tecnología de impresión': 'Inyección MicroPiezo Heat-Free',
      'Velocidad de impresión': '33 ppm negro / 15 ppm color',
      'Resolución máxima': '5760 x 1440 dpi',
      'Conectividad': 'Wi-Fi, Wi-Fi Direct, USB',
      'Rendimiento tinta': '4,500 págs negro / 7,500 págs color',
      'Capacidad bandeja': '100 hojas papel común'
    }
  },
  productoB: {
    marca: 'HP',
    nombre: 'Smart Tank 580',
    precio: '$179.99 USD',
    imagen: 'assets/images/oficina/hp-smart-tank-580.jpg',
    specs: {
      'Tecnología de impresión': 'Inyección térmica de tinta HP',
      'Velocidad de impresión': '22 ppm negro / 16 ppm color',
      'Resolución máxima': '4800 x 1200 dpi',
      'Conectividad': 'Wi-Fi auto-reparable, Bluetooth LE, USB',
      'Rendimiento tinta': '6,000 págs negro / 6,000 págs color',
      'Capacidad bandeja': '100 hojas papel común'
    }
  },
  ganadores: {
    'Tecnología de impresión': 'A',
    'Velocidad de impresión': 'A',
    'Resolución máxima': 'A',
    'Conectividad': 'B',
    'Rendimiento tinta': 'B',
    'Capacidad bandeja': 'empate'
  },
  recomendado: 'A',                            // 'A' o 'B' obligatorio
  veredicto: 'Epson EcoTank L3250 ofrece mayor resolución y durabilidad con cabezal sin calor. HP Smart Tank 580 incluye mayor volumen de tinta negra por $20 menos. Para durabilidad: Epson. Para volumen de texto: HP.'
});
```

---

## 6. Pipeline de Imágenes y Fuentes

- **Dimensiones:** Exactamente **1000 × 1000 px** (relación 1:1 cuadrada).
- **Fondo:** Blanco puro (`#FFFFFF`), centrado y sin marcas de agua.
- **Formato:** JPG (calidad 90%) o PNG optimizado (< 200 KB por imagen).
- **Registro Obligatorio:** Agregar cada producto a `assets/IMAGE_SOURCES.md` indicando URL original, distribuidor/fabricante y SKU.

---

## 7. Estrategia Git para Evitar Conflictos de Fusión (*Merge Conflicts*)

```
                         ┌── feature/oficina-gaming-creadores (Dev A) ──┐
main (98 categorías) ────┤                                               ├──> main (133 categorías)
                         └── feature/hogar-cocina-movilidad (Dev B) ────┘
```

### Aislamiento de Archivos:
- **Dev A edita exclusivamente:**
  - `js/data/oficina.js`, `js/data/gaming.js`, `js/data/creadores.js`
  - `assets/images/oficina/*`, `gaming/*`, `creadores/*`
  - Ajustes de UI en `index.html` (nuevas pestañas `#section-tabs` y contadores finales `133/266/17`) y `css/styles.css`.
- **Dev B edita exclusivamente:**
  - `js/data/hogar.js`, `js/data/cocina.js`, `js/data/movilidad.js`
  - `assets/images/hogar/*`, `cocina/*`, `movilidad/*`
  - Script de validación `scripts/check-catalog.js` y actualización de `README.md`.

---

## 8. Historial de Fases Previas Completadas

- [x] **Fase 0 — Criterio de Datos:** Catálogo base verificado en 98 categorías y 196 productos sin contradicciones.
- [x] **Fase 1 — Marcas Distintas:** 100% de las comparativas enfrentan dos marcas rivales diferentes.
- [x] **Fase 2 — Sustitución de Placeholders:** 196 imágenes reales oficiales en 1000×1000 px integradas (0 referencias a placehold.co).
- [x] **Fase 3 — Recomendaciones y Veredictos:** Campo `recomendado` visible y tabla de especificaciones con unión de claves.
- [x] **Fase 4 — Experiencia de Usuario y Accesibilidad:** Filtros, búsqueda, atajos de teclado y modo claro/oscuro validados.
- [x] **Fase 5 — Selector de Divisa GTQ / USD:** Motor `js/currency.js` con conversión en tiempo real a Quetzales guatemaltecos por defecto y selector interactivo en el encabezado.

---

## 9. Lista Final de Verificación de Entrega (133 Categorías)

- [x] Las 133 comparativas muestran dos marcas diferentes (100%).
- [x] Las 266 fichas de producto cuentan con una imagen local; las fuentes de la expansión están en `assets/EXPANSION_IMAGE_SOURCES.md`.
- [x] Los precios se visualizan en Quetzales (`Q XX,XXX.XX GTQ`) por defecto y conmutan a Dólares con el selector.
- [x] Cada categoría incluye recomendación visible y justificada.
- [x] Las 17 secciones temáticas cuentan con botón de filtro activo y color asignado.
- [x] El script de verificación reporta 0 imágenes faltantes y 0 errores en las categorías nuevas.
- [x] `README.md` y los registros de fuentes de imágenes están actualizados.
