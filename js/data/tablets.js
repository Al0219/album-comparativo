/* js/data/tablets.js — 4 categorías de Tablets */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'tablet-android-basica',
    nombre: 'Tablet Android Básica',
    seccion: 'tablets',
    icono: '📟',
    complejidad: 2,
    descripcion: 'Tablet Android económica para consumo de contenido, lecturas y uso cotidiano familiar. Pantalla amplia, buena duración de batería y apps Android.',
    productoA: {
      nombre: 'Fire HD 10 (2023)',
      marca: 'Amazon',
      precio: '$139.99 USD',
      imagen: 'assets/images/tablets/amazon-fire-hd-10-2023.jpg',
      specs: { 'Pantalla': '10.1" Full HD 1080p', 'Procesador': 'Octa-core 2.0 GHz', 'RAM': '3 GB', 'Almacenamiento': '32 GB (MicroSD hasta 1TB)', 'Batería': 'Hasta 12 horas', 'OS': 'Fire OS (Amazon)' }
    },
    productoB: {
      nombre: 'Galaxy Tab A9+',
      marca: 'Samsung',
      precio: '$279.99 USD',
      imagen: 'assets/images/tablets/samsung-galaxy-tab-a9-plus.jpg',
      specs: { 'Pantalla': '11" TFT LCD 90Hz FHD+', 'Procesador': 'Snapdragon 695', 'RAM': '8 GB', 'Almacenamiento': '128 GB (MicroSD hasta 1TB)', 'Batería': 'Hasta 15 horas', 'OS': 'Android 13 + One UI' }
    },
    ganadores: { 'Pantalla': 'B', 'Procesador': 'B', 'RAM': 'B', 'Almacenamiento': 'B', 'Batería': 'B', 'OS': 'B' },
    recomendado: 'B',
    veredicto: 'Samsung Galaxy Tab A9+ supera al Fire HD 10 en todas las specs: mayor RAM, más almacenamiento, mejor procesador y Android puro. Amazon Fire HD 10 es $140 más económica y perfecta para Netflix y lectura. Para ecosistema completo Android: Samsung. Para entretenimiento básico: Amazon Fire.'
  },
  {
    id: 'tablet-android-premium',
    nombre: 'Tablet Android Premium',
    seccion: 'tablets',
    icono: '📟',
    complejidad: 4,
    descripcion: 'Tablet Android de alto rendimiento con pantalla premium, chip potente y soporte para lápiz y teclado. El iPad Pro alternativo del ecosistema Android.',
    productoA: {
      nombre: 'Galaxy Tab S9+ 12.4"',
      marca: 'Samsung',
      precio: '$899.99 USD',
      imagen: 'assets/images/tablets/samsung-galaxy-tab-s9-plus.png',
      specs: { 'Pantalla': '12.4" Dynamic AMOLED 2X 120Hz WQXGA+', 'Procesador': 'Snapdragon 8 Gen 2', 'RAM': '12 GB', 'Almacenamiento': '256 GB', 'S Pen': 'Incluido', 'IP Rating': 'IP68' }
    },
    productoB: {
      nombre: 'Pixel Tablet 11"',
      marca: 'Google',
      precio: '$499.99 USD',
      imagen: 'assets/images/tablets/google-pixel-tablet.jpg',
      specs: { 'Pantalla': '11" LCD 60Hz 2560x1600', 'Procesador': 'Google Tensor G2', 'RAM': '8 GB', 'Almacenamiento': '128 GB', 'S Pen': 'No (stylus compatible)', 'IP Rating': 'No certificada' }
    },
    ganadores: { 'Pantalla': 'A', 'Procesador': 'A', 'RAM': 'A', 'Almacenamiento': 'A', 'S Pen': 'A', 'IP Rating': 'A' },
    recomendado: 'A',
    veredicto: 'Samsung Galaxy Tab S9+ domina en todas las categorías: AMOLED 120Hz, Snapdragon 8 Gen 2, 12GB RAM, S Pen incluido e IP68. Google Pixel Tablet es $400 más económica pero con pantalla LCD 60Hz y menor RAM. Para productividad premium: Samsung. Para precio: Pixel Tablet.'
  },
  {
    id: 'ipad-basico',
    nombre: 'Tablet Gama Media',
    seccion: 'tablets',
    icono: '📟',
    complejidad: 3,
    descripcion: 'Tablets versátiles para estudio, entretenimiento y productividad ligera. Compara el ecosistema iPadOS con una alternativa Android de Samsung.',
    productoA: {
      nombre: 'iPad 10ª Generación 10.9"',
      marca: 'Apple',
      precio: '$449.99 USD',
      imagen: 'assets/images/tablets/apple-ipad-10th-gen.png',
      specs: { 'Pantalla': '10.9" Liquid Retina 2360x1640', 'Chip': 'Apple A14 Bionic', 'RAM': '4 GB', 'Almacenamiento': '64 GB', 'Conector': 'USB-C', 'Cámara frontal': '12MP ultrawide' }
    },
    productoB: {
      nombre: 'Galaxy Tab A9+',
      marca: 'Samsung',
      precio: '$279.99 USD',
      imagen: 'assets/images/tablets/samsung-galaxy-tab-a9-plus.jpg',
      specs: { 'Pantalla': '11" TFT LCD 90Hz FHD+', 'Chip': 'Snapdragon 695', 'RAM': '8 GB', 'Almacenamiento': '128 GB + MicroSD hasta 1 TB', 'Conector': 'USB-C', 'Cámara frontal': '5 MP' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'A', 'RAM': 'B', 'Almacenamiento': 'B', 'Conector': 'empate', 'Cámara frontal': 'A' },
    recomendado: 'B',
    veredicto: 'Galaxy Tab A9+ ofrece más RAM, almacenamiento ampliable, pantalla de 90 Hz y un precio menor. iPad de 10ª generación tiene un chip más potente y una mejor cámara frontal para videollamadas. Para valor y consumo de contenido: Samsung. Para rendimiento y apps optimizadas: Apple.'
  },
  {
    id: 'ipad-pro',
    nombre: 'Tablet Profesional',
    seccion: 'tablets',
    icono: '📟',
    complejidad: 5,
    descripcion: 'Tablets de alto rendimiento para diseño, ilustración y productividad. Compara pantalla, potencia, lápiz y resistencia entre Apple y Samsung.',
    productoA: {
      nombre: 'iPad Pro 11" M4 (2024)',
      marca: 'Apple',
      precio: '$999.99 USD',
      imagen: 'assets/images/tablets/apple-ipad-pro-11-m4.png',
      specs: { 'Pantalla': '11" Ultra Retina XDR OLED tandem 120Hz', 'Chip': 'Apple M4 (10-core GPU)', 'RAM': '8 GB', 'Almacenamiento': '256 GB', 'Espesor': '5.3 mm (el más delgado de Apple)', 'Stylus': 'Apple Pencil Pro compatible' }
    },
    productoB: {
      nombre: 'Galaxy Tab S9+ 12.4"',
      marca: 'Samsung',
      precio: '$899.99 USD',
      imagen: 'assets/images/tablets/samsung-galaxy-tab-s9-plus.png',
      specs: { 'Pantalla': '12.4" Dynamic AMOLED 2X 120Hz WQXGA+', 'Chip': 'Snapdragon 8 Gen 2', 'RAM': '12 GB', 'Almacenamiento': '256 GB', 'Espesor': '5.7 mm', 'Stylus': 'S Pen incluido' }
    },
    ganadores: { 'Pantalla': 'A', 'Chip': 'A', 'RAM': 'B', 'Almacenamiento': 'empate', 'Espesor': 'A', 'Stylus': 'B' },
    recomendado: 'A',
    veredicto: 'iPad Pro M4 ofrece chip más potente, pantalla OLED tandem y un diseño más delgado. Galaxy Tab S9+ ofrece más RAM, pantalla AMOLED de 120 Hz y S Pen incluido a menor precio. Para apps profesionales y máxima potencia: Apple. Para valor y lápiz incluido: Samsung.'
  }
]);
