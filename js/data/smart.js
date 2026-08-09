/* js/data/smart.js — 6 categorías de Smart Devices */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'smart-tv',
    nombre: 'Smart TV 4K',
    seccion: 'smart',
    icono: '📺',
    complejidad: 3,
    descripcion: 'Televisor inteligente 4K UHD de 55 pulgadas con procesamiento de imagen avanzado, HDR, apps de streaming integradas y conectividad moderna.',
    productoA: {
      nombre: 'OLED C4 55" 4K 120Hz',
      marca: 'LG',
      precio: '$1,299.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=LG+OLED+C4+55+4K',
      specs: { 'Panel': 'OLED (pixeles autoiluminados)', 'Resolución': '4K UHD 3840x2160', 'Tasa refresco': '120 Hz VRR (hasta 144Hz HDMI 2.1)', 'HDR': 'Dolby Vision IQ + HDR10+', 'Procesador': 'α9 Gen 7 AI', 'Gaming': 'G-Sync / FreeSync' }
    },
    productoB: {
      nombre: 'S95D 55" 4K QD-OLED 144Hz',
      marca: 'Samsung',
      precio: '$1,799.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Samsung+S95D+QD-OLED',
      specs: { 'Panel': 'QD-OLED (Quantum Dot + OLED)', 'Resolución': '4K UHD 3840x2160', 'Tasa refresco': '144 Hz (native)', 'HDR': 'HDR10+ Adaptive + Dolby Vision', 'Procesador': 'NQ4 AI Gen 2', 'Gaming': 'G-Sync / FreeSync Premium Pro' }
    },
    ganadores: { 'Panel': 'B', 'Resolución': 'empate', 'Tasa refresco': 'B', 'HDR': 'B', 'Procesador': 'empate', 'Gaming': 'B' },
    veredicto: 'Samsung S95D QD-OLED combina Quantum Dot (brillo y colores de QLED) con OLED (negros perfectos) — la tecnología de panel más avanzada. LG OLED C4 es $500 más barato con negros OLED perfectos y excelente calidad. Para el absolutamente mejor panel: Samsung S95D. Para el mejor valor OLED: LG C4.'
  },
  {
    id: 'streaming-device',
    nombre: 'Dispositivo de Streaming',
    seccion: 'smart',
    icono: '📺',
    complejidad: 2,
    descripcion: 'Dispositivo externo para convertir cualquier TV en Smart TV o mejorar sus capacidades. Accede a Netflix, Disney+, YouTube y más aplicaciones.',
    productoA: {
      nombre: 'Fire TV Stick 4K Max 2ª Gen',
      marca: 'Amazon',
      precio: '$59.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Amazon+Fire+TV+Stick+4K+Max',
      specs: { 'Resolución': '4K UHD + HDR + Dolby Vision', 'WiFi': 'WiFi 6E (6 GHz)', 'Alexa': 'Integrado en control remoto', 'Bluetooth': '5.0 + LE', 'Procesador': 'MediaTek MT8696T quad-core', 'Precio por mes': 'Requiere Prime para ventajas' }
    },
    productoB: {
      nombre: 'Chromecast con Google TV (4K)',
      marca: 'Google',
      precio: '$49.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Google+Chromecast+4K+TV',
      specs: { 'Resolución': '4K UHD + HDR + Dolby Vision', 'WiFi': 'WiFi 5 (5 GHz)', 'Alexa': 'No nativo (Google Assistant)', 'Bluetooth': '5.0', 'Procesador': 'Amlogic S905X4 quad-core', 'Precio por mes': 'Sin suscripción requerida' }
    },
    ganadores: { 'Resolución': 'empate', 'WiFi': 'A', 'Alexa': 'A', 'Bluetooth': 'empate', 'Procesador': 'A', 'Precio por mes': 'B' },
    veredicto: 'Amazon Fire TV 4K Max tiene WiFi 6E (más rápido), Alexa nativa y $10 más caro. Google Chromecast TV es $10 más barato, no requiere suscripción Prime y Google Assistant es preferible en ecosistema Android. Para hogar con Alexa/Echo: Amazon Fire TV. Para Android/Google: Chromecast.'
  },
  {
    id: 'smart-speaker',
    nombre: 'Bocina Inteligente',
    seccion: 'smart',
    icono: '🔊',
    complejidad: 2,
    descripcion: 'Bocina inteligente con asistente de voz para controlar el hogar inteligente, escuchar música, poner temporizadores y más con comandos de voz manos libres.',
    productoA: {
      nombre: 'Echo (4ta Gen)',
      marca: 'Amazon',
      precio: '$99.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Amazon+Echo+4th+Gen',
      specs: { 'Asistente': 'Alexa', 'Audio': '3" woofer + dual pasivos', 'Hub smart home': 'Zigbee + Thread + Matter', 'Privacidad': 'Botón físico micrófono', 'Bluetooth': 'BT 5.0', 'WiFi': 'Dual band 802.11 a/b/g/n/ac' }
    },
    productoB: {
      nombre: 'Nest Audio',
      marca: 'Google',
      precio: '$99.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Google+Nest+Audio',
      specs: { 'Asistente': 'Google Assistant', 'Audio': '3" woofer + 0.75" tweeter', 'Hub smart home': 'Solo Thread (Matter)', 'Privacidad': 'Botón físico micrófono', 'Bluetooth': 'BT 5.0', 'WiFi': 'Dual band 802.11 a/b/g/n/ac' }
    },
    ganadores: { 'Asistente': 'empate', 'Audio': 'B', 'Hub smart home': 'A', 'Privacidad': 'empate', 'Bluetooth': 'empate', 'WiFi': 'empate' },
    veredicto: 'Amazon Echo 4ta Gen tiene hub Zigbee integrado (conecta directamente con más dispositivos sin necesidad de hub adicional). Google Nest Audio tiene mayor calidad de audio (tweeter dedicado + woofer). Para control smart home completo: Echo 4ta Gen. Para mejor sonido: Nest Audio.'
  },
  {
    id: 'smartwatch-android',
    nombre: 'Smartwatch Android',
    seccion: 'smart',
    icono: '⌚',
    complejidad: 3,
    descripcion: 'Reloj inteligente para Android con monitoreo de salud, GPS, notificaciones y apps. El accesorio wearable que complementa tu smartphone Android.',
    productoA: {
      nombre: 'Galaxy Watch7 44mm',
      marca: 'Samsung',
      precio: '$299.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Samsung+Galaxy+Watch7+44mm',
      specs: { 'Pantalla': '1.5" Super AMOLED 480x480', 'Procesador': 'Exynos W1000 (3nm)', 'RAM / ROM': '2GB / 16GB', 'Batería': '425mAh (Hasta 40h)', 'Salud': 'BIA + ECG + SpO2 + glucosa estimada', 'OS': 'Wear OS 5 + One UI 6' }
    },
    productoB: {
      nombre: 'Pixel Watch 3 45mm',
      marca: 'Google',
      precio: '$349.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Google+Pixel+Watch+3+45mm',
      specs: { 'Pantalla': '1.45" AMOLED 480x480', 'Procesador': 'Qualcomm W5 Gen 1', 'RAM / ROM': '2GB / 32GB', 'Batería': '420mAh (Hasta 24h con AOD)', 'Salud': 'ECG + SpO2 + Fitbit avanzado', 'OS': 'Wear OS 4 + Pixel AI' }
    },
    ganadores: { 'Pantalla': 'A', 'Procesador': 'A', 'RAM / ROM': 'B', 'Batería': 'A', 'Salud': 'A', 'OS': 'A' },
    veredicto: 'Samsung Galaxy Watch7 tiene mayor pantalla, procesador 3nm (el más eficiente), mejor batería (40h vs 24h) y sensores de salud más completos incluyendo estimación de glucosa. Pixel Watch 3 tiene Fitbit integrado y más storage (32GB). Para duración: Samsung. Para usuarios Pixel: Google Pixel Watch.'
  },
  {
    id: 'apple-watch',
    nombre: 'Apple Watch',
    seccion: 'smart',
    icono: '⌚',
    complejidad: 4,
    descripcion: 'El smartwatch más vendido del mundo, exclusivo para iPhone. Monitoreo de salud avanzado, detección de accidentes, chip S-series y ecosistema Apple Watch OS.',
    productoA: {
      nombre: 'Apple Watch Series 10 46mm',
      marca: 'Apple',
      precio: '$429.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Apple+Watch+Series+10+46mm',
      specs: { 'Pantalla': '46mm LTPO OLED 2000 nits (más delgado)', 'Chip': 'S10 SiP', 'Salud': 'ECG + SpO2 + Temp. piel + Sueño + Apnea', 'GPS': 'L1 + L5 (más preciso)', 'Batería': 'Hasta 18h (36h Modo ahorro)', 'Agua': 'IP6X + WR50 + 60m buceo' }
    },
    productoB: {
      nombre: 'Apple Watch Ultra 2 49mm',
      marca: 'Apple',
      precio: '$799.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Apple+Watch+Ultra+2+49mm',
      specs: { 'Pantalla': '49mm Flat OLED 3000 nits', 'Chip': 'S9 SiP + R1', 'Salud': 'ECG + SpO2 + Temp. piel + Sueño + Apnea', 'GPS': 'L1 + L5 + S + Galileo', 'Batería': 'Hasta 36h (60h Modo ahorro)', 'Agua': 'IP6X + WR100 + 100m buceo + MIL-STD' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'A', 'Salud': 'empate', 'GPS': 'B', 'Batería': 'B', 'Agua': 'B' },
    veredicto: 'Apple Watch Ultra 2 tiene pantalla más brillante (3000 nits), mayor GPS (satélites adicionales), 60h de batería y resistencia MIL-STD para deportes extremos. Watch Series 10 es $370 más barato con chip S10 más reciente y diseño más delgado. Para aventura extrema: Ultra 2. Para cotidiano: Series 10.'
  },
  {
    id: 'smart-home-hub',
    nombre: 'Hub / Controlador Smart Home',
    seccion: 'smart',
    icono: '🏠',
    complejidad: 4,
    descripcion: 'Hub central para controlar todos los dispositivos del hogar inteligente desde un único punto. Protocolo Matter para compatibilidad universal entre marcas y ecosistemas.',
    productoA: {
      nombre: 'Home Hub (con pantalla)',
      marca: 'Google',
      precio: '$99.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Google+Home+Hub+Display',
      specs: { 'Pantalla': '7" táctil Full HD', 'Asistente': 'Google Assistant', 'Protocolos': 'Matter + Thread + Zigbee (en Nest Hub Max)', 'Cámara': 'Sin cámara (privacidad)', 'Control por voz': 'Manos libres', 'Integraciones': '50,000+ dispositivos compatibles' }
    },
    productoB: {
      nombre: 'HomePod mini (Smart home Hub)',
      marca: 'Apple',
      precio: '$99.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Apple+HomePod+mini',
      specs: { 'Pantalla': 'Sin pantalla (solo touch surface)', 'Asistente': 'Siri', 'Protocolos': 'Matter + Thread (hub automático)', 'Cámara': 'Sin cámara', 'Control por voz': 'Manos libres', 'Integraciones': 'HomeKit + Matter devices' }
    },
    ganadores: { 'Pantalla': 'A', 'Asistente': 'empate', 'Protocolos': 'empate', 'Cámara': 'empate', 'Control por voz': 'empate', 'Integraciones': 'A' },
    veredicto: 'Google Home Hub tiene pantalla 7" para visualizar cámaras y controlar dispositivos visualmente, además de 50,000+ dispositivos compatibles. Apple HomePod mini es hub Thread/Matter automático para iPhones/iPads con sonido superior. Para ecosistema Google/Android: Google. Para ecosistema Apple: HomePod mini.'
  },
  {
    id: 'camara-accion',
    nombre: 'Cámara de Acción',
    seccion: 'smart',
    icono: '🎥',
    complejidad: 3,
    descripcion: 'Cámara compacta resistente al agua para deportes extremos, viajes y aventura. Graba video 4K/5.3K con estabilización electrónica avanzada.',
    productoA: {
      nombre: 'HERO12 Black',
      marca: 'GoPro',
      precio: '$399.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=GoPro+HERO12+Black',
      specs: { 'Video': '5.3K 60fps / 4K 120fps', 'Estabilización': 'HyperSmooth 6.0', 'Resistencia': 'Impermeble 10m sin carcasa', 'Pantallas': 'Frontal + trasera táctil', 'Batería': '1720mAh (removible)', 'Conectividad': 'WiFi 5GHz + Bluetooth + USB-C' }
    },
    productoB: {
      nombre: 'Osmo Action 4',
      marca: 'DJI',
      precio: '$299.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=DJI+Osmo+Action+4',
      specs: { 'Video': '4K 120fps / 4K HDR', 'Estabilización': 'RockSteady 3.0 + HorizonSteady', 'Resistencia': 'Impermeable 18m sin carcasa', 'Pantallas': 'Frontal + trasera táctil', 'Batería': '1770mAh (removible)', 'Conectividad': 'WiFi + Bluetooth + USB-C' }
    },
    ganadores: { 'Video': 'A', 'Estabilización': 'A', 'Resistencia': 'B', 'Pantallas': 'empate', 'Batería': 'B', 'Conectividad': 'A' },
    veredicto: 'GoPro HERO12 graba a 5.3K y tiene HyperSmooth 6.0 más avanzado. DJI Osmo Action 4 es $100 más barato, resistente a mayor profundidad (18m vs 10m) y HorizonSteady para horizonte siempre recto. Para máxima calidad: GoPro. Para valor y buceo: DJI Osmo Action 4.'
  },
  {
    id: 'drone-basico',
    nombre: 'Drone / Dron Básico',
    seccion: 'smart',
    icono: '🚁',
    complejidad: 4,
    descripcion: 'Dron con cámara para fotografía y video aéreo. GPS integrado para posicionamiento estable, retorno automático y modos de vuelo inteligentes.',
    productoA: {
      nombre: 'Mini 4 Pro',
      marca: 'DJI',
      precio: '$759.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=DJI+Mini+4+Pro',
      specs: { 'Cámara': '4K 60fps + RAW / HDR', 'Peso': '249 g (sin registro en muchos países)', 'Tiempo vuelo': '34 minutos', 'Transmisión': 'DJI O4 (hasta 20 km)', 'Obstáculos': 'Omnidireccional APAS 5.0', 'ActiveTrack': 'ActiveTrack 360°' }
    },
    productoB: {
      nombre: 'EVO Nano+ Premium Bundle',
      marca: 'Autel Robotics',
      precio: '$649.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Autel+EVO+Nano+Plus',
      specs: { 'Cámara': '4K 30fps + RAW', 'Peso': '249 g (sin registro)', 'Tiempo vuelo': '28 minutos', 'Transmisión': 'Autel SkyLink (hasta 10 km)', 'Obstáculos': '3 direcciones (frontal/trasero/abajo)', 'ActiveTrack': 'Dynamic Track 3.0' }
    },
    ganadores: { 'Cámara': 'A', 'Peso': 'empate', 'Tiempo vuelo': 'A', 'Transmisión': 'A', 'Obstáculos': 'A', 'ActiveTrack': 'A' },
    veredicto: 'DJI Mini 4 Pro domina: cámara 4K 60fps, 34 min de vuelo, transmisión de 20km y obstáculos omnidireccionales. Autel EVO Nano+ es una alternativa sólida $110 más barata y sin las restricciones de geofencing de DJI. Para máximo rendimiento: DJI. Para alternativa sin geofencing: Autel.'
  },
  {
    id: 'ereader',
    nombre: 'E-Reader / Libro Electrónico',
    seccion: 'smart',
    icono: '📖',
    complejidad: 2,
    descripcion: 'Lector de libros electrónicos con pantalla e-ink para lectura sin fatiga ocular incluso bajo el sol. Batería que dura semanas y miles de libros en el bolsillo.',
    productoA: {
      nombre: 'Kindle Paperwhite (11ª gen) 8GB',
      marca: 'Amazon',
      precio: '$139.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Amazon+Kindle+Paperwhite',
      specs: { 'Pantalla': '6.8" e-ink 300ppi (sin brillos)', 'Luz': 'Luz frontal cálida/fría ajustable', 'Almacenamiento': '8 GB', 'Batería': 'Hasta 10 semanas', 'Resistencia': 'IPX8 (2m/60min)', 'Tienda': 'Kindle Store (millones de títulos)' }
    },
    productoB: {
      nombre: 'Kobo Libra Colour 32GB',
      marca: 'Rakuten Kobo',
      precio: '$199.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/f87171?text=Rakuten+Kobo+Libra+Colour',
      specs: { 'Pantalla': '7" e-ink color 300ppi', 'Luz': 'Luz cálida/fría + ComfortLight Pro', 'Almacenamiento': '32 GB', 'Batería': 'Hasta 6 semanas', 'Resistencia': 'IPX8 (2m/60min)', 'Tienda': 'Kobo Store + ePub libre' }
    },
    ganadores: { 'Pantalla': 'B', 'Luz': 'B', 'Almacenamiento': 'B', 'Batería': 'A', 'Resistencia': 'empate', 'Tienda': 'B' },
    veredicto: 'Kobo Libra Colour tiene pantalla a color e-ink (para cómics y mangas), 4x más almacenamiento (32GB) y es compatible con formato ePub libre (sin DRM propio). Kindle Paperwhite dura más batería (10 vs 6 semanas) y tiene la mayor tienda de libros. Para libertad de formatos: Kobo. Para ecosistema simple: Kindle.'
  }
]);
