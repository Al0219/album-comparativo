/* js/data/perifericos.js — 17 categorías de Periféricos Externos */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'pad-mouse',
    nombre: 'Pad de Mouse',
    seccion: 'perifericos',
    icono: '🖱️',
    complejidad: 1,
    descripcion: 'Alfombrilla de escritorio que proporciona la superficie óptima para el mouse. Disponible en tela o dura, con diferentes texturas para control o velocidad.',
    productoA: {
      nombre: 'QcK Heavy Large',
      marca: 'SteelSeries',
      precio: '$29.99 USD',
      imagen: 'assets/images/perifericos/steelseries-qck-heavy.jpg',
      specs: { 'Tamaño': '450x400 mm', 'Grosor': '6 mm', 'Material': 'Tela micro-texturada', 'Base': 'Caucho antideslizante', 'Costuras': 'Bordeadas', 'Optimizado para': 'Control + Velocidad' }
    },
    productoB: {
      nombre: 'Gigantus V2 Large',
      marca: 'Razer',
      precio: '$24.99 USD',
      imagen: 'assets/images/perifericos/razer-gigantus-v2.jpg',
      specs: { 'Tamaño': '450x400 mm', 'Grosor': '4 mm', 'Material': 'Micro-texturado premium', 'Base': 'Caucho antideslizante', 'Costuras': 'Bordeadas', 'Optimizado para': 'Velocidad' }
    },
    ganadores: { 'Tamaño': 'empate', 'Grosor': 'A', 'Material': 'empate', 'Base': 'empate', 'Costuras': 'empate', 'Optimizado para': 'A' },
    recomendado: 'A',
    veredicto: 'SteelSeries QcK Heavy tiene 6mm de grosor (vs 4mm de Razer) para más confort en sesiones largas y equilibra control con velocidad. Razer Gigantus V2 es más económico y optimizado para velocidad. Para gaming competitivo: Razer. Para comodidad: SteelSeries.'
  },
  {
    id: 'mouse-oficina',
    nombre: 'Mouse de Oficina',
    seccion: 'perifericos',
    icono: '🖱️',
    complejidad: 2,
    descripcion: 'Mouse ergonómico inalámbrico para productividad y trabajo de escritorio. Múltiples botones programables y conexión multi-dispositivo.',
    productoA: {
      nombre: 'MX Master 3S Wireless',
      marca: 'Logitech',
      precio: '$99.99 USD',
      imagen: 'assets/images/perifericos/logitech-mx-master-3s.jpg',
      specs: { 'DPI': '200–8000 DPI', 'Botones': '7 programables', 'Conexión': 'USB-C / Bluetooth / Unifying', 'Batería': 'Hasta 70 días', 'Scroll': 'MagSpeed electromagnetic', 'Ergonomía': 'Mano derecha' }
    },
    productoB: {
      nombre: 'Arc Mouse Wireless',
      marca: 'Microsoft',
      precio: '$79.99 USD',
      imagen: 'assets/images/perifericos/microsoft-arc-mouse.jpg',
      specs: { 'DPI': 'Hasta 1800 DPI', 'Botones': '5', 'Conexión': 'Bluetooth 5.0', 'Batería': 'Hasta 6 meses (AA)', 'Scroll': 'Tira táctil', 'Ergonomía': 'Ambidiestro' }
    },
    ganadores: { 'DPI': 'A', 'Botones': 'A', 'Conexión': 'A', 'Batería': 'B', 'Scroll': 'A', 'Ergonomía': 'B' },
    recomendado: 'A',
    veredicto: 'Logitech MX Master 3S es el mouse de productividad más avanzado: 7 botones, scroll electromagnético ultra preciso y 3 métodos de conexión. Microsoft Arc Mouse destaca por batería de 6 meses y diseño ultrafino ideal para viajes. Para productividad: Logitech. Para viajes: Microsoft.'
  },
  {
    id: 'mouse-gaming',
    nombre: 'Mouse Gaming',
    seccion: 'perifericos',
    icono: '🎮',
    complejidad: 3,
    descripcion: 'Mouse gaming de alto rendimiento con sensor óptico de grado competitivo, bajos clics de latencia y diseño ergonómico para sesiones de juego intensas.',
    productoA: {
      nombre: 'G502 X Plus Gaming Mouse',
      marca: 'Logitech',
      precio: '$159.99 USD',
      imagen: 'assets/images/perifericos/logitech-g502-x-plus.jpg',
      specs: { 'Sensor': 'HERO 25K', 'DPI': '25,600 máx.', 'Clics': 'LIGHTFORCE hybrid', 'Conexión': 'Inalámbrico LIGHTSPEED + cable', 'Batería': 'Hasta 130 hrs', 'Peso': '106 g' }
    },
    productoB: {
      nombre: 'DeathAdder V3 Pro',
      marca: 'Razer',
      precio: '$159.99 USD',
      imagen: 'assets/images/perifericos/razer-deathadder-v3-pro.jpg',
      specs: { 'Sensor': 'Focus Pro 35K', 'DPI': '35,000 máx.', 'Clics': 'Razer HyperSpeed optical', 'Conexión': 'Inalámbrico HyperSpeed + cable', 'Batería': 'Hasta 90 hrs', 'Peso': '88 g' }
    },
    ganadores: { 'Sensor': 'B', 'DPI': 'B', 'Clics': 'empate', 'Conexión': 'empate', 'Batería': 'A', 'Peso': 'B' },
    recomendado: 'B',
    veredicto: 'Razer DeathAdder V3 Pro tiene sensor de mayor DPI (35K vs 25K) y es más ligero (88g vs 106g), ventaja en FPS competitivo. Logitech G502 X Plus tiene mayor duración de batería y los clics LIGHTFORCE con menor latencia. Para FPS competitivo: Razer. Para uso largo: Logitech.'
  },
  {
    id: 'teclado-membrana',
    nombre: 'Teclado de Membrana',
    seccion: 'perifericos',
    icono: '⌨️',
    complejidad: 2,
    descripcion: 'Teclado de membrana estándar de bajo costo. Silencioso y adecuado para uso de oficina cotidiano. Funcionamiento suave sin el tacto clicky de los mecánicos.',
    productoA: {
      nombre: 'K120 Wired Keyboard',
      marca: 'Logitech',
      precio: '$17.99 USD',
      imagen: 'assets/images/perifericos/logitech-k120.jpg',
      specs: { 'Tipo': 'Membrana', 'Conexión': 'USB con cable', 'Distribución': 'QWERTY full-size', 'Retroiluminación': 'No', 'Resistencia': 'Resistente a derrames', 'Garantía': '3 años' }
    },
    productoB: {
      nombre: 'Wired Keyboard 600',
      marca: 'Microsoft',
      precio: '$19.99 USD',
      imagen: 'assets/images/perifericos/microsoft-wired-keyboard-600.jpg',
      specs: { 'Tipo': 'Membrana', 'Conexión': 'USB con cable', 'Distribución': 'QWERTY full-size', 'Retroiluminación': 'No', 'Resistencia': 'Normal', 'Garantía': '1 año' }
    },
    ganadores: { 'Tipo': 'empate', 'Conexión': 'empate', 'Distribución': 'empate', 'Retroiluminación': 'empate', 'Resistencia': 'A', 'Garantía': 'A' },
    recomendado: 'A',
    veredicto: 'Logitech K120 es más económico, tiene resistencia a derrames y mayor garantía (3 vs 1 año). Microsoft Keyboard 600 tiene teclas con perfil cóncavo ligeramente más cómodo. Para oficina con café cerca: Logitech K120 es la elección lógica.'
  },
  {
    id: 'teclado-mecanico',
    nombre: 'Teclado Mecánico Gaming',
    seccion: 'perifericos',
    icono: '⌨️',
    complejidad: 3,
    descripcion: 'Teclado gaming de switches mecánicos con retroiluminación RGB. Mayor durabilidad (50M pulsaciones), tactilidad y personalización respecto a membranas.',
    productoA: {
      nombre: 'K95 RGB Platinum XT',
      marca: 'Corsair',
      precio: '$199.99 USD',
      imagen: 'assets/images/perifericos/corsair-k95-rgb-platinum-xt.jpg',
      specs: { 'Switches': 'Cherry MX Speed (lineal)', 'RGB': 'Per-key RGB + light bar', 'Macros': '6 teclas macro G', 'Reposamuñecas': 'Cuero suave magnético', 'N-Key Rollover': 'Sí (full)', 'USB pass-through': 'Sí' }
    },
    productoB: {
      nombre: 'Apex Pro TKL Wireless',
      marca: 'SteelSeries',
      precio: '$219.99 USD',
      imagen: 'assets/images/perifericos/steelseries-apex-pro-tkl.jpg',
      specs: { 'Switches': 'OmniPoint 2.0 (ajustable 0.1-4mm)', 'RGB': 'Per-key RGB', 'Macros': 'Todas las teclas programables', 'Reposamuñecas': 'Magnético incluido', 'N-Key Rollover': 'Sí', 'USB pass-through': 'No (TKL)' }
    },
    ganadores: { 'Switches': 'B', 'RGB': 'A', 'Macros': 'B', 'Reposamuñecas': 'empate', 'N-Key Rollover': 'empate', 'USB pass-through': 'A' },
    recomendado: 'A',
    veredicto: 'SteelSeries Apex Pro tiene los únicos switches con punto de actuación ajustable (0.1-4mm) — ventaja única en el mercado. Corsair K95 incluye 6 teclas macro físicas y USB pass-through. Para competitivo extremo: SteelSeries. Para macros y productividad: Corsair.'
  },
  {
    id: 'monitor-1080p',
    nombre: 'Monitor 1080p 144Hz Gaming',
    seccion: 'perifericos',
    icono: '🖥️',
    complejidad: 3,
    descripcion: 'Monitor gaming Full HD de 27 pulgadas con 144Hz de tasa de refresco. El estándar de entrada para gaming competitivo fluido.',
    productoA: {
      nombre: '27GL850-B 27" 144Hz IPS',
      marca: 'LG',
      precio: '$299.99 USD',
      imagen: 'assets/images/perifericos/lg-27gl850-b.jpg',
      specs: { 'Resolución': '2560x1440 (QHD)', 'Tasa refresco': '144 Hz', 'Panel': 'IPS', 'Tiempo respuesta': '1ms (GtG)', 'Sync': 'G-Sync Compatible / FreeSync', 'HDR': 'HDR400' }
    },
    productoB: {
      nombre: 'VG27AQL1A 27" 170Hz IPS',
      marca: 'ASUS',
      precio: '$329.99 USD',
      imagen: 'assets/images/perifericos/asus-vg27aql1a.png',
      specs: { 'Resolución': '2560x1440 (QHD)', 'Tasa refresco': '170 Hz', 'Panel': 'IPS', 'Tiempo respuesta': '1ms (MPRT)', 'Sync': 'G-Sync Compatible / FreeSync Premium', 'HDR': 'HDR600' }
    },
    ganadores: { 'Resolución': 'empate', 'Tasa refresco': 'B', 'Panel': 'empate', 'Tiempo respuesta': 'empate', 'Sync': 'B', 'HDR': 'B' },
    recomendado: 'B',
    veredicto: 'ASUS VG27AQL1A ofrece 170Hz (vs 144Hz), FreeSync Premium y HDR600. LG 27GL850-B es $30 más barato con las mismas 1440p. Para competitivo puro: ASUS con 170Hz. Para valor: LG con 144Hz que ya es excelente para gaming fluido.'
  },
  {
    id: 'monitor-1440p',
    nombre: 'Monitor 1440p (QHD)',
    seccion: 'perifericos',
    icono: '🖥️',
    complejidad: 4,
    descripcion: 'Monitor QHD de 27 pulgadas, el punto óptimo entre nitidez y rendimiento. Mayor densidad de píxeles que 1080p con mejor rendimiento que 4K.',
    productoA: {
      nombre: '27GP850-B 27" 180Hz Nano IPS',
      marca: 'LG',
      precio: '$349.99 USD',
      imagen: 'assets/images/perifericos/lg-27gp850-b.jpg',
      specs: { 'Resolución': '2560x1440 (QHD)', 'Tasa refresco': '180 Hz', 'Panel': 'Nano IPS', 'Tiempo respuesta': '1ms (GtG)', 'Color': 'sRGB 99% / DCI-P3 98%', 'HDR': 'HDR400' }
    },
    productoB: {
      nombre: 'Odyssey G5 27" 165Hz VA',
      marca: 'Samsung',
      precio: '$299.99 USD',
      imagen: 'assets/images/perifericos/samsung-odyssey-g5-27.jpg',
      specs: { 'Resolución': '2560x1440 (QHD)', 'Tasa refresco': '165 Hz', 'Panel': 'VA (1000R curvo)', 'Tiempo respuesta': '1ms (MPRT)', 'Color': 'sRGB 125%', 'HDR': 'HDR600' }
    },
    ganadores: { 'Resolución': 'empate', 'Tasa refresco': 'A', 'Panel': 'A', 'Tiempo respuesta': 'empate', 'Color': 'A', 'HDR': 'B' },
    recomendado: 'A',
    veredicto: 'LG GP850-B usa Nano IPS con mayor cobertura de color real (DCI-P3 98%) y 180Hz. Samsung Odyssey G5 tiene panel VA curvo con mejor contraste, HDR600 y es $50 más barato. Para colores precisos y contenido: LG. Para contraste y HDR: Samsung.'
  },
  {
    id: 'monitor-4k',
    nombre: 'Monitor 4K UHD',
    seccion: 'perifericos',
    icono: '🖥️',
    complejidad: 5,
    descripcion: 'Monitor 4K de 27 pulgadas con panel IPS de alta fidelidad de color. Para profesionales de diseño gráfico, video y fotografía que necesitan máxima nitidez.',
    productoA: {
      nombre: '27UP850-W 27" 4K USB-C',
      marca: 'LG',
      precio: '$449.99 USD',
      imagen: 'assets/images/perifericos/lg-27up850-w.jpg',
      specs: { 'Resolución': '3840x2160 (4K)', 'Tasa refresco': '60 Hz', 'Panel': 'IPS', 'USB-C': '90W Power Delivery', 'Color': 'DCI-P3 95% / HDR400 True', 'Calibración': 'De fábrica ΔE < 2' }
    },
    productoB: {
      nombre: 'ProArt PA279CRV 27" 4K',
      marca: 'ASUS',
      precio: '$549.99 USD',
      imagen: 'assets/images/perifericos/asus-proart-pa279crv.jpg',
      specs: { 'Resolución': '3840x2160 (4K)', 'Tasa refresco': '60 Hz', 'Panel': 'IPS', 'USB-C': '96W Power Delivery', 'Color': 'DCI-P3 99% / sRGB 100%', 'Calibración': 'Hardware calibración (ColorNavigator)' }
    },
    ganadores: { 'Resolución': 'empate', 'Tasa refresco': 'empate', 'Panel': 'empate', 'USB-C': 'B', 'Color': 'B', 'Calibración': 'B' },
    recomendado: 'B',
    veredicto: 'ASUS ProArt PA279CRV es el monitor profesional con DCI-P3 99%, calibración de hardware y 96W de carga USB-C. LG 27UP850-W es $100 más barato con excelente color (95% DCI-P3). Para diseño profesional crítico: ASUS ProArt. Para usuarios exigentes con presupuesto: LG.'
  },
  {
    id: 'monitor-ultrawide',
    nombre: 'Monitor Ultrawide',
    seccion: 'perifericos',
    icono: '🖥️',
    complejidad: 4,
    descripcion: 'Monitor ultrawide 21:9 de 34 pulgadas. Reemplaza la necesidad de dos monitores con campo visual inmersivo para gaming, edición y multitarea.',
    productoA: {
      nombre: '34GP83A-B 34" UW 160Hz IPS',
      marca: 'LG',
      precio: '$499.99 USD',
      imagen: 'assets/images/perifericos/lg-34gp83a-b.jpg',
      specs: { 'Resolución': '3440x1440 (UWQHD)', 'Tasa refresco': '160 Hz', 'Panel': 'IPS', 'Curvatura': '1000R curvo', 'HDR': 'HDR400', 'Sync': 'G-Sync / FreeSync' }
    },
    productoB: {
      nombre: 'Odyssey G9 49" DQHD 240Hz',
      marca: 'Samsung',
      precio: '$1,099.99 USD',
      imagen: 'assets/images/perifericos/samsung-odyssey-g9-49.jpg',
      specs: { 'Resolución': '5120x1440 (DQHD)', 'Tasa refresco': '240 Hz', 'Panel': 'VA', 'Curvatura': '1000R curvo', 'HDR': 'HDR1000 QLED', 'Sync': 'G-Sync / FreeSync' }
    },
    ganadores: { 'Resolución': 'B', 'Tasa refresco': 'B', 'Panel': 'A', 'Curvatura': 'empate', 'HDR': 'B', 'Sync': 'empate' },
    recomendado: 'B',
    veredicto: 'Samsung Odyssey G9 es el monstruo ultra-wide: 49", DQHD 5120x1440 y 240Hz. LG 34GP83A-B es la opción práctica y accesible a $500 con 34" que ya es inmersivo. Para experiencia extrema sin límite: Samsung G9. Para inmersión sin excesos: LG 34".'
  },
  {
    id: 'webcam-basica',
    nombre: 'Webcam Básica 1080p',
    seccion: 'perifericos',
    icono: '📹',
    complejidad: 2,
    descripcion: 'Cámara web 1080p para videollamadas, reuniones y streaming básico. Plug-and-play sin drivers adicionales.',
    productoA: {
      nombre: 'C920s HD Pro Webcam',
      marca: 'Logitech',
      precio: '$69.99 USD',
      imagen: 'assets/images/perifericos/logitech-c920s-pro.jpg',
      specs: { 'Resolución': '1080p 30fps / 720p 60fps', 'FOV': '78°', 'Micrófono': 'Dual estéreo', 'Privacidad': 'Obturador físico', 'Autofocus': 'Sí', 'Compatibilidad': 'PC / Mac / Chromebook' }
    },
    productoB: {
      nombre: 'LifeCam HD-3000 1080p',
      marca: 'Microsoft',
      precio: '$39.99 USD',
      imagen: 'assets/images/perifericos/microsoft-lifecam-hd-3000.jpg',
      specs: { 'Resolución': '720p 30fps', 'FOV': '68.5°', 'Micrófono': 'Mono', 'Privacidad': 'Sin obturador', 'Autofocus': 'No', 'Compatibilidad': 'PC / Windows' }
    },
    ganadores: { 'Resolución': 'A', 'FOV': 'A', 'Micrófono': 'A', 'Privacidad': 'A', 'Autofocus': 'A', 'Compatibilidad': 'A' },
    recomendado: 'A',
    veredicto: 'Logitech C920s gana en prácticamente todos los aspectos: 1080p, dual estéreo, autofocus, obturador de privacidad y mayor FOV. Microsoft LifeCam HD-3000 es $30 más barata pero con specs claramente inferiores. Para videollamadas profesionales: Logitech C920s sin duda.'
  },
  {
    id: 'webcam-4k',
    nombre: 'Webcam 4K Streaming',
    seccion: 'perifericos',
    icono: '📹',
    complejidad: 4,
    descripcion: 'Cámara web de alta resolución 4K para streaming profesional, creación de contenido y videollamadas de primer nivel.',
    productoA: {
      nombre: 'BRIO 4K Pro Webcam',
      marca: 'Logitech',
      precio: '$199.99 USD',
      imagen: 'assets/images/perifericos/logitech-brio-4k-pro.jpg',
      specs: { 'Resolución': '4K 30fps / 1080p 90fps', 'HDR': 'Sí (RightLight 3)', 'FOV': '65°/78°/90° (ajustable)', 'Micrófono': 'Omnidireccional dual', 'Autofocus': 'Infrarrojo', 'Windows Hello': 'Sí' }
    },
    productoB: {
      nombre: 'Kiyo Pro Ultra 4K',
      marca: 'Razer',
      precio: '$299.99 USD',
      imagen: 'assets/images/perifericos/razer-kiyo-pro-ultra.jpg',
      specs: { 'Resolución': '4K 30fps / 1080p 60fps', 'HDR': 'Sí (Adaptive Light Sensor)', 'FOV': '82° (fijo)', 'Micrófono': 'Cardioid integrado', 'Autofocus': 'Rápido', 'Windows Hello': 'No' }
    },
    ganadores: { 'Resolución': 'empate', 'HDR': 'empate', 'FOV': 'A', 'Micrófono': 'A', 'Autofocus': 'A', 'Windows Hello': 'A' },
    recomendado: 'A',
    veredicto: 'Logitech BRIO 4K es más versátil: FOV ajustable, autofocus infrarrojo, Windows Hello y $100 más barata. Razer Kiyo Pro Ultra tiene sensor más grande y mejor rendimiento en poca luz. Para streaming con configuración ajustable: Logitech. Para calidad de imagen en oscuridad: Razer.'
  },
  {
    id: 'auriculares-gaming-cable',
    nombre: 'Auriculares Gaming (Cable)',
    seccion: 'perifericos',
    icono: '🎧',
    complejidad: 3,
    descripcion: 'Auriculares gaming de alta fidelidad con cable y micrófono retráctil. Sonido envolvente virtual 7.1 para mayor inmersión y ventaja competitiva.',
    productoA: {
      nombre: 'Cloud II Wireless 7.1',
      marca: 'HyperX',
      precio: '$79.99 USD',
      imagen: 'assets/images/perifericos/hyperx-cloud-ii-wireless.jpg',
      specs: { 'Drivers': '53mm', 'Sonido': 'Virtual 7.1 surround', 'Micrófono': 'Retráctil, cardioid', 'Conexión': '3.5mm / USB', 'Almohadillas': 'Memory foam velvet', 'Peso': '310 g' }
    },
    productoB: {
      nombre: 'Arctis Nova 3 Stereo',
      marca: 'SteelSeries',
      precio: '$74.99 USD',
      imagen: 'assets/images/perifericos/steelseries-arctis-nova-3.jpg',
      specs: { 'Drivers': '40mm Neodymium', 'Sonido': 'Virtual 7.1 Surround', 'Micrófono': 'Retráctil ClearCast Gen2', 'Conexión': 'USB-A / 3.5mm', 'Almohadillas': 'Memory foam Airweave', 'Peso': '268 g' }
    },
    ganadores: { 'Drivers': 'A', 'Sonido': 'empate', 'Micrófono': 'B', 'Conexión': 'empate', 'Almohadillas': 'B', 'Peso': 'B' },
    recomendado: 'B',
    veredicto: 'SteelSeries Arctis Nova 3 es más ligero (268g vs 310g) con el reconocido micrófono ClearCast (el mejor del mercado) y almohadillas Airweave más transpirables. HyperX Cloud II tiene drivers más grandes (53mm) para mayor bass. Para micro claro: SteelSeries. Para bass: HyperX.'
  },
  {
    id: 'auriculares-gaming-wireless',
    nombre: 'Auriculares Gaming Inalámbricos',
    seccion: 'perifericos',
    icono: '🎧',
    complejidad: 4,
    descripcion: 'Auriculares gaming inalámbricos de alta gama. Sin cables para mayor libertad de movimiento, con baja latencia para gaming competitivo.',
    productoA: {
      nombre: 'Arctis Nova Pro Wireless',
      marca: 'SteelSeries',
      precio: '$349.99 USD',
      imagen: 'assets/images/perifericos/steelseries-arctis-nova-pro.jpg',
      specs: { 'Batería': 'Dual (hot swap)  — infinita', 'Conexión': '2.4GHz + BT 5.0', 'ANC': 'Activo', 'DAC/Amp': 'GameDAC incluido', 'Drivers': '40mm Hi-Fi', 'Respuesta frec.': '10-40,000 Hz' }
    },
    productoB: {
      nombre: 'G935 Wireless 7.1',
      marca: 'Logitech',
      precio: '$129.99 USD',
      imagen: 'assets/images/perifericos/logitech-g935-wireless.jpg',
      specs: { 'Batería': 'Hasta 12 horas', 'Conexión': '2.4GHz LIGHTSPEED', 'ANC': 'No (audio pasivo)', 'DAC/Amp': 'No incluido', 'Drivers': '40mm Pro-G', 'Respuesta frec.': '20-20,000 Hz' }
    },
    ganadores: { 'Batería': 'A', 'Conexión': 'A', 'ANC': 'A', 'DAC/Amp': 'A', 'Drivers': 'A', 'Respuesta frec.': 'A' },
    recomendado: 'A',
    veredicto: 'SteelSeries Arctis Nova Pro Wireless es el mejor auricular gaming del mercado: batería intercambiable (nunca muere), ANC activo, DAC/Amp incluido y rango de frecuencia Hi-Fi. Logitech G935 es mucho más asequible pero con 12h de batería limitadas. Para máxima calidad: Nova Pro. Para presupuesto: G935.'
  },
  {
    id: 'bocinas-20',
    nombre: 'Bocinas 2.0 de Escritorio',
    seccion: 'perifericos',
    icono: '🔊',
    complejidad: 2,
    descripcion: 'Sistema de audio estéreo compacto de 2 canales para escritorio. Ideal para gaming, música y trabajo sin necesidad de subwoofer externo.',
    productoA: {
      nombre: 'Z150 Multimedia 2.0 Speakers',
      marca: 'Logitech',
      precio: '$19.99 USD',
      imagen: 'assets/images/perifericos/logitech-z150.jpg',
      specs: { 'Potencia RMS': '3W', 'Rango frec.': '90Hz–20KHz', 'Entrada': '3.5mm + Auriculares', 'Control': 'Volumen lateral', 'Alimentación': 'USB', 'Garantía': '2 años' }
    },
    productoB: {
      nombre: 'Pebble V3 2.0 USB-C',
      marca: 'Creative',
      precio: '$34.99 USD',
      imagen: 'assets/images/perifericos/creative-pebble-v3.jpg',
      specs: { 'Potencia RMS': '8W', 'Rango frec.': '80Hz–20KHz', 'Entrada': 'USB-C / 3.5mm / Bluetooth', 'Control': 'Botón digital', 'Alimentación': 'USB-C', 'Garantía': '1 año' }
    },
    ganadores: { 'Potencia RMS': 'B', 'Rango frec.': 'B', 'Entrada': 'B', 'Control': 'empate', 'Alimentación': 'empate', 'Garantía': 'A' },
    recomendado: 'B',
    veredicto: 'Creative Pebble V3 supera claramente: mayor potencia (8W vs 3W), Bluetooth integrado y USB-C. Logitech Z150 es más económico y suficiente para uso básico. Si el presupuesto lo permite, el upgrade a Creative Pebble V3 vale totalmente la diferencia en calidad de audio.'
  },
  {
    id: 'bocinas-21',
    nombre: 'Bocinas 2.1 (con Subwoofer)',
    seccion: 'perifericos',
    icono: '🔊',
    complejidad: 3,
    descripcion: 'Sistema de audio 2.1 con dos satélites y subwoofer dedicado. Los bajos profundos del subwoofer mejoran dramáticamente la experiencia en gaming, películas y música.',
    productoA: {
      nombre: 'Z623 2.1 Speaker System 200W',
      marca: 'Logitech',
      precio: '$109.99 USD',
      imagen: 'assets/images/perifericos/logitech-z623.jpg',
      specs: { 'Potencia total': '200W RMS', 'Subwoofer': '7.6 cm', 'Entradas': '3.5mm + RCA', 'Frecuencia': '35Hz–20KHz', 'THD+N': '<0.5%', 'Certificación': 'THX' }
    },
    productoB: {
      nombre: 'Pebble Plus 2.1 Speakers',
      marca: 'Creative',
      precio: '$44.99 USD',
      imagen: 'assets/images/perifericos/creative-pebble-plus-21.jpg',
      specs: { 'Potencia total': '8W RMS (16W Peak)', 'Subwoofer': 'Subwoofer down-firing dedicado', 'Entradas': '3.5mm AUX + USB power', 'Frecuencia': '50Hz–20KHz', 'THD+N': '<1%', 'Certificación': 'N/A' }
    },
    ganadores: { 'Potencia total': 'A', 'Subwoofer': 'A', 'Entradas': 'A', 'Frecuencia': 'A', 'THD+N': 'A', 'Certificación': 'A' },
    recomendado: 'A',
    veredicto: 'Logitech Z623 ofrece 200W RMS, certificación THX y potencia acústica masiva para gaming y cine. Creative Pebble Plus 2.1 es mucho más compacto, económico y alimentado por USB con subwoofer independiente para escritorios con espacio reducido. Para impacto absoluto: Logitech Z623. Para portabilidad y valor: Creative Pebble Plus.'
  },
  {
    id: 'hub-usb',
    nombre: 'Hub USB',
    seccion: 'perifericos',
    icono: '🔌',
    complejidad: 2,
    descripcion: 'Concentrador USB que multiplica los puertos disponibles. Permite conectar múltiples dispositivos a un solo puerto USB del equipo.',
    productoA: {
      nombre: '7-Port USB 3.0 Powered Data Hub',
      marca: 'Anker',
      precio: '$39.99 USD',
      imagen: 'assets/images/perifericos/anker-7-port-usb-hub.jpg',
      specs: { 'Puertos': '7x USB 3.0', 'Velocidad': 'USB 3.0 5Gbps', 'Adaptador': '36W incluido', 'Indicadores': 'LED por puerto', 'Diseño': 'Escritorio horizontal', 'Compatibilidad': 'PC / Mac / Linux' }
    },
    productoB: {
      nombre: '4-Port USB 3.0 Hub',
      marca: 'Sabrent',
      precio: '$9.99 USD',
      imagen: 'assets/images/perifericos/sabrent-4-port-usb-hub.jpg',
      specs: { 'Puertos': '4x USB 3.0', 'Velocidad': 'USB 3.0 5Gbps', 'Adaptador': 'Bus powered (sin adaptador)', 'Indicadores': 'LED individual', 'Diseño': 'Compacto portátil', 'Compatibilidad': 'PC / Mac' }
    },
    ganadores: { 'Puertos': 'A', 'Velocidad': 'empate', 'Adaptador': 'A', 'Indicadores': 'A', 'Diseño': 'B', 'Compatibilidad': 'A' },
    recomendado: 'A',
    veredicto: 'Anker ofrece 7 puertos con adaptador de corriente dedicado (no sobrecarga el puerto host) e interruptores de energía. Sabrent es ultra compacto y económico para viajes con 4 puertos básicos. Para escritorio estable: Anker Powered Hub. Para portabilidad y presupuesto: Sabrent 4-Port.'
  },
  {
    id: 'dock-station',
    nombre: 'Dock Station Multipuerto',
    seccion: 'perifericos',
    icono: '🔗',
    complejidad: 3,
    descripcion: 'Estación de acoplamiento para laptop que expande la conectividad con un solo cable USB-C. Carga la laptop mientras se conecta a monitores, red y periféricos.',
    productoA: {
      nombre: 'TS4 Thunderbolt 4 Dock',
      marca: 'CalDigit',
      precio: '$249.99 USD',
      imagen: 'assets/images/perifericos/caldigit-ts4-dock.jpg',
      specs: { 'Conexión host': 'Thunderbolt 4 (40Gbps)', 'Puertos totales': '18 puertos', 'Carga laptop': '98W', 'Video': '2x TB4 + 1x DP 1.4 (hasta 8K)', 'Ethernet': '2.5G', 'USB-A': '4x USB 3.2 Gen 2 (10Gbps)' }
    },
    productoB: {
      nombre: '575 USB-C Docking Station',
      marca: 'Anker',
      precio: '$149.99 USD',
      imagen: 'assets/images/perifericos/anker-575-dock.jpg',
      specs: { 'Conexión host': 'USB-C (10Gbps)', 'Puertos totales': '13 puertos', 'Carga laptop': '85W', 'Video': 'HDMI 2.1 + DP 1.4 (hasta 4K@144Hz)', 'Ethernet': '1G', 'USB-A': '3x USB-A 3.2 Gen 1' }
    },
    ganadores: { 'Conexión host': 'A', 'Puertos totales': 'A', 'Carga laptop': 'A', 'Video': 'A', 'Ethernet': 'A', 'USB-A': 'A' },
    recomendado: 'A',
    veredicto: 'CalDigit TS4 es el dock más completo del mercado con Thunderbolt 4, 18 puertos, 2.5G Ethernet y soporte 8K. Anker 575 ofrece excelente valor con 13 puertos y HDMI 2.1 a $100 menos. Para máxima conectividad profesional: CalDigit. Para uso general: Anker 575.'
  }
]);
