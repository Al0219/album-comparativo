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
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Amazon+Fire+HD+10',
      specs: { 'Pantalla': '10.1" Full HD 1080p', 'Procesador': 'Octa-core 2.0 GHz', 'RAM': '3 GB', 'Almacenamiento': '32 GB (MicroSD hasta 1TB)', 'Batería': 'Hasta 12 horas', 'OS': 'Fire OS (Amazon)' }
    },
    productoB: {
      nombre: 'Galaxy Tab A9+',
      marca: 'Samsung',
      precio: '$279.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Samsung+Galaxy+Tab+A9+Plus',
      specs: { 'Pantalla': '11" TFT LCD 90Hz FHD+', 'Procesador': 'Snapdragon 695', 'RAM': '8 GB', 'Almacenamiento': '128 GB (MicroSD hasta 1TB)', 'Batería': 'Hasta 15 horas', 'OS': 'Android 13 + One UI' }
    },
    ganadores: { 'Pantalla': 'B', 'Procesador': 'B', 'RAM': 'B', 'Almacenamiento': 'B', 'Batería': 'B', 'OS': 'B' },
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
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Samsung+Galaxy+Tab+S9+Plus',
      specs: { 'Pantalla': '12.4" Dynamic AMOLED 2X 120Hz WQXGA+', 'Procesador': 'Snapdragon 8 Gen 2', 'RAM': '12 GB', 'Almacenamiento': '256 GB', 'S Pen': 'Incluido', 'IP Rating': 'IP68' }
    },
    productoB: {
      nombre: 'Pixel Tablet 11"',
      marca: 'Google',
      precio: '$499.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Google+Pixel+Tablet',
      specs: { 'Pantalla': '11" LCD 60Hz 2560x1600', 'Procesador': 'Google Tensor G2', 'RAM': '8 GB', 'Almacenamiento': '128 GB', 'S Pen': 'No (stylus compatible)', 'IP Rating': 'No certificada' }
    },
    ganadores: { 'Pantalla': 'A', 'Procesador': 'A', 'RAM': 'A', 'Almacenamiento': 'A', 'S Pen': 'A', 'IP Rating': 'A' },
    veredicto: 'Samsung Galaxy Tab S9+ domina en todas las categorías: AMOLED 120Hz, Snapdragon 8 Gen 2, 12GB RAM, S Pen incluido e IP68. Google Pixel Tablet es $400 más económica pero con pantalla LCD 60Hz y menor RAM. Para productividad premium: Samsung. Para precio: Pixel Tablet.'
  },
  {
    id: 'ipad-basico',
    nombre: 'iPad (básico)',
    seccion: 'tablets',
    icono: '📟',
    complejidad: 3,
    descripcion: 'iPad estándar de Apple. Pantalla Liquid Retina, chip A-series potente y el ecosistema iPadOS con miles de apps optimizadas para tablet.',
    productoA: {
      nombre: 'iPad 10ª Generación 10.9"',
      marca: 'Apple',
      precio: '$449.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Apple+iPad+10th+Gen',
      specs: { 'Pantalla': '10.9" Liquid Retina 2360x1640', 'Chip': 'Apple A14 Bionic', 'RAM': '4 GB', 'Almacenamiento': '64 GB', 'Conector': 'USB-C', 'Cámara frontal': '12MP ultrawide' }
    },
    productoB: {
      nombre: 'iPad mini 6ª Generación 8.3"',
      marca: 'Apple',
      precio: '$499.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Apple+iPad+mini+6th',
      specs: { 'Pantalla': '8.3" Liquid Retina 2266x1488', 'Chip': 'Apple A15 Bionic', 'RAM': '4 GB', 'Almacenamiento': '64 GB', 'Conector': 'USB-C', 'Cámara frontal': '12MP ultrawide' }
    },
    ganadores: { 'Pantalla': 'A', 'Chip': 'B', 'RAM': 'empate', 'Almacenamiento': 'empate', 'Conector': 'empate', 'Cámara frontal': 'empate' },
    veredicto: 'iPad 10ª gen tiene mayor pantalla (10.9" vs 8.3") y es $50 más económico. iPad mini 6 usa el chip A15 (más reciente), es mucho más compacto y ligero para leer y usar con una mano. Para productividad y espacio de pantalla: iPad 10th. Para portabilidad y lectura: iPad mini 6.'
  },
  {
    id: 'ipad-pro',
    nombre: 'iPad Pro',
    seccion: 'tablets',
    icono: '📟',
    complejidad: 5,
    descripcion: 'La tablet más potente del mundo. Chip M4 de Apple, pantalla Ultra Retina XDR OLED, soporte para Apple Pencil Pro y Magic Keyboard. Reemplaza laptops para muchos profesionales.',
    productoA: {
      nombre: 'iPad Pro 11" M4 (2024)',
      marca: 'Apple',
      precio: '$999.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Apple+iPad+Pro+11+M4',
      specs: { 'Pantalla': '11" Ultra Retina XDR OLED tandem 120Hz', 'Chip': 'Apple M4 (10-core GPU)', 'RAM': '8 GB', 'Almacenamiento': '256 GB', 'Espesor': '5.3 mm (el más delgado de Apple)', 'Stylus': 'Apple Pencil Pro compatible' }
    },
    productoB: {
      nombre: 'iPad Pro 13" M4 (2024)',
      marca: 'Apple',
      precio: '$1,299.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/fb923c?text=Apple+iPad+Pro+13+M4',
      specs: { 'Pantalla': '13" Ultra Retina XDR OLED tandem 120Hz', 'Chip': 'Apple M4 (10-core GPU)', 'RAM': '16 GB', 'Almacenamiento': '256 GB', 'Espesor': '5.1 mm', 'Stylus': 'Apple Pencil Pro compatible' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'empate', 'RAM': 'B', 'Almacenamiento': 'empate', 'Espesor': 'B', 'Stylus': 'empate' },
    veredicto: 'iPad Pro 13" M4 tiene pantalla más grande, 16GB de RAM (vs 8GB) y es ligeramente más delgado. iPad Pro 11" M4 es $300 más barato y suficiente para el 95% de usuarios. Misma potencia M4 en ambos. Para dibujo y diseño profesional en grande: 13". Para portabilidad con potencia: 11".'
  }
]);
