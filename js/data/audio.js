/* js/data/audio.js — 5 categorías de Audio */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'tws-baja',
    nombre: 'Auriculares TWS Gama Baja',
    seccion: 'audio',
    icono: '🎧',
    complejidad: 2,
    descripcion: 'Auriculares inalámbricos tipo in-ear (True Wireless Stereo) de precio accesible. Para escuchar música, podcasts y llamadas sin cables en el día a día.',
    productoA: {
      nombre: 'Tune 230NC TWS ANC',
      marca: 'JBL',
      precio: '$49.99 USD',
      imagen: 'assets/images/audio/jbl-tune-230nc-tws.jpg',
      specs: { 'Drivers': '8mm', 'ANC': 'Sí (Active Noise Cancellation)', 'Batería (ANC ON)': '4h + 12h estuche', 'Codec': 'AAC + SBC', 'Resistencia': 'IPX4', 'Carga': 'USB-C 15min = 1h' }
    },
    productoB: {
      nombre: 'Life P3i ANC TWS',
      marca: 'Soundcore (Anker)',
      precio: '$39.99 USD',
      imagen: 'assets/images/audio/soundcore-life-p3i.webp',
      specs: { 'Drivers': '11mm', 'ANC': 'Sí (hasta -35dB)', 'Batería (ANC ON)': '6h + 24h estuche', 'Codec': 'AAC + SBC', 'Resistencia': 'IPX5', 'Carga': 'USB-C 10min = 2h' }
    },
    ganadores: { 'Drivers': 'B', 'ANC': 'B', 'Batería (ANC ON)': 'B', 'Codec': 'empate', 'Resistencia': 'B', 'Carga': 'B' },
    recomendado: 'B',
    veredicto: 'Soundcore Life P3i supera al JBL en casi todo a menor precio: mayor ANC (-35dB), drivers más grandes (11mm), 24h de batería total y IPX5. JBL Tune 230NC tiene mayor reconocimiento de marca. Para mejor valor: Soundcore Life P3i claramente gana esta comparativa.'
  },
  {
    id: 'tws-media',
    nombre: 'Auriculares TWS Gama Media',
    seccion: 'audio',
    icono: '🎧',
    complejidad: 3,
    descripcion: 'TWS de calidad intermedia con mejor sonido, ANC mejorado y mayor personalización. Para usuarios que pasan varias horas al día con auriculares.',
    productoA: {
      nombre: 'Galaxy Buds3',
      marca: 'Samsung',
      precio: '$179.99 USD',
      imagen: 'assets/images/audio/samsung-galaxy-buds3.png',
      specs: { 'Forma': 'Open-type (in-ear sin silicona)', 'ANC': 'Sí + Voice Detect', 'Batería': '6h + 30h estuche', 'Codec': 'AAC / SBC / Samsung Seamless', 'Detección oído': 'Sí', 'Integración': 'Galaxy AI + Galaxy devices' }
    },
    productoB: {
      nombre: 'Pixel Buds A-Series',
      marca: 'Google',
      precio: '$99.99 USD',
      imagen: 'assets/images/audio/google-pixel-buds-a.jpg',
      specs: { 'Forma': 'In-ear con aleta estabilizadora', 'ANC': 'No (solo resistencia al viento)', 'Batería': '5h + 24h estuche', 'Codec': 'AAC / SBC', 'Detección oído': 'No', 'Integración': 'Google Assistant integrado' }
    },
    ganadores: { 'Forma': 'empate', 'ANC': 'A', 'Batería': 'A', 'Codec': 'A', 'Detección oído': 'A', 'Integración': 'empate' },
    recomendado: 'A',
    veredicto: 'Samsung Galaxy Buds3 supera: ANC real, mayor batería total (30h vs 24h) y detección de oído. Google Pixel Buds A-Series es $80 más económico y con Google Assistant muy integrado. Para usuarios Samsung: Buds3. Para usuarios Pixel/Android con presupuesto: Pixel Buds A-Series.'
  },
  {
    id: 'tws-premium',
    nombre: 'Auriculares TWS Premium (ANC)',
    seccion: 'audio',
    icono: '🎧',
    complejidad: 5,
    descripcion: 'Los mejores auriculares inalámbricos del mercado con ANC de primer nivel, calidad de audio audiófila y tecnologías exclusivas. Sin compromisos en sonido.',
    productoA: {
      nombre: 'AirPods Pro 2 (USB-C)',
      marca: 'Apple',
      precio: '$249.99 USD',
      imagen: 'assets/images/audio/apple-airpods-pro-2.jpg',
      specs: { 'ANC': 'H2 chip - líder en transparencia', 'Batería': '6h + 30h (estuche MagSafe)', 'Codec': 'AAC / Apple Lossless (con iPhone)', 'Audio espacial': 'Dinámico personalizado', 'Resistencia': 'IP54 buds + IP54 estuche', 'Hearing aid': 'FDA aprobado' }
    },
    productoB: {
      nombre: 'WF-1000XM5',
      marca: 'Sony',
      precio: '$299.99 USD',
      imagen: 'assets/images/audio/sony-wf-1000xm5.jpg',
      specs: { 'ANC': 'QN1e + V1 chip - mejor ANC del mercado', 'Batería': '8h + 24h estuche (carga rápida)', 'Codec': 'LDAC (Hi-Res) + aptX + AAC', 'Audio espacial': '360 Reality Audio', 'Resistencia': 'IPX4', 'Hearing aid': 'No' }
    },
    ganadores: { 'ANC': 'B', 'Batería': 'B', 'Codec': 'B', 'Audio espacial': 'empate', 'Resistencia': 'A', 'Hearing aid': 'A' },
    recomendado: 'B',
    veredicto: 'Sony WF-1000XM5 tiene el mejor ANC del mercado TWS, mayor batería (8h) y LDAC para audio Hi-Res. AirPods Pro 2 son imprescindibles para usuarios Apple: integración perfecta, función de audífono FDA y modo transparencia excepcional. Para calidad de audio: Sony. Para ecosistema Apple: AirPods Pro.'
  },
  {
    id: 'soundbar-basico',
    nombre: 'Soundbar Básico',
    seccion: 'audio',
    icono: '🔊',
    complejidad: 3,
    descripcion: 'Barra de sonido compacta para mejorar el audio del televisor. Fácil instalación, Bluetooth integrado y sonido claramente superior al TV incorporado.',
    productoA: {
      nombre: 'MagniFi Mini AX 3.1.2',
      marca: 'Polk Audio',
      precio: '$249.99 USD',
      imagen: 'assets/images/audio/polk-magnifi-mini-ax.jpg',
      specs: { 'Canales': '3.1.2 (Dolby Atmos)', 'Potencia': '100W + subwoofer inalámbrico', 'Subwoofer': 'Inalámbrico incluido', 'Conectividad': 'HDMI ARC / Optical / Bluetooth', 'Dolby': 'Atmos + DTS:X', 'Tamaño': '33.5 cm compacto' }
    },
    productoB: {
      nombre: 'V21-H8 2.1 Sound Bar',
      marca: 'Vizio',
      precio: '$149.99 USD',
      imagen: 'assets/images/audio/vizio-v21-h8.jpg',
      specs: { 'Canales': '2.1', 'Potencia': '60W total', 'Subwoofer': 'Inalámbrico incluido', 'Conectividad': 'HDMI ARC / Bluetooth / Optical', 'Dolby': 'Dolby Digital', 'Tamaño': '36 cm' }
    },
    ganadores: { 'Canales': 'A', 'Potencia': 'A', 'Subwoofer': 'empate', 'Conectividad': 'empate', 'Dolby': 'A', 'Tamaño': 'A' },
    recomendado: 'A',
    veredicto: 'Polk MagniFi Mini AX tiene Dolby Atmos 3.1.2 (sonido tridimensional), mayor potencia (100W) y es más compacto. Vizio V21-H8 es $100 más barato y suficiente para TV casual. Para la mejor experiencia cinematográfica doméstica: Polk. Para actualizar el TV básico: Vizio.'
  },
  {
    id: 'soundbar-premium',
    nombre: 'Soundbar Premium Dolby Atmos',
    seccion: 'audio',
    icono: '🔊',
    complejidad: 5,
    descripcion: 'Barra de sonido flagship con Dolby Atmos, DTS:X y sistema de altavoces ascendentes para audio tridimensional envolvente. El cine en casa definitivo.',
    productoA: {
      nombre: 'HW-Q990D 11.1.4ch Soundbar',
      marca: 'Samsung',
      precio: '$1,399.99 USD',
      imagen: 'assets/images/audio/samsung-hw-q990d.jpg',
      specs: { 'Canales': '11.1.4 (con surround traseros)', 'Potencia': '656W total', 'Surround': 'Speakers traseros inalámbricos incluidos', 'Dolby': 'Atmos + DTS:X + IMAX Enhanced', 'eARC': 'Sí HDMI 2.1', 'Sincronización': 'Q-Symphony con TV Samsung' }
    },
    productoB: {
      nombre: 'HT-A7000 7.1.2ch Soundbar',
      marca: 'Sony',
      precio: '$1,299.99 USD',
      imagen: 'assets/images/audio/sony-ht-a7000.jpg',
      specs: { 'Canales': '7.1.2 (expandible con SA-RS5)', 'Potencia': '500W total', 'Surround': 'Expandible (módulos separados)', 'Dolby': 'Atmos + DTS:X + 360 Spatial Sound', 'eARC': 'Sí HDMI 2.1', 'Sincronización': 'Acoustic Center Sync con TV Sony' }
    },
    ganadores: { 'Canales': 'A', 'Potencia': 'A', 'Surround': 'A', 'Dolby': 'empate', 'eARC': 'empate', 'Sincronización': 'empate' },
    recomendado: 'A',
    veredicto: 'Samsung HW-Q990D es el más completo: 11.1.4 canales con speakers traseros incluidos y mayor potencia (656W). Sony HT-A7000 tiene 360 Spatial Sound Mapping y es expandible. Para sistema completo out-of-box: Samsung. Para usuarios Sony TV con presupuesto: Sony HT-A7000.'
  }
]);
