/* js/data/smartphones.js — 6 categorías de Smartphones */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'smartphone-gama-baja',
    nombre: 'Smartphone Gama Baja Android',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 2,
    descripcion: 'Smartphone Android de entrada con lo esencial para comunicación, redes sociales y apps cotidianas. Precio accesible para todos los presupuestos.',
    productoA: {
      nombre: 'Moto G Play (2024)',
      marca: 'Motorola',
      precio: '$149.99 USD',
      imagen: 'assets/images/smartphones/motorola-moto-g-play-2024.jpg',
      specs: { 'Pantalla': '6.5" IPS HD+ 90Hz', 'Procesador': 'MediaTek Helio G36', 'RAM': '4 GB', 'Almacenamiento': '64 GB (MicroSD)', 'Cámara principal': '50 MP', 'Batería': '5000 mAh (18W)' }
    },
    productoB: {
      nombre: 'Galaxy A15 5G',
      marca: 'Samsung',
      precio: '$169.99 USD',
      imagen: 'assets/images/smartphones/samsung-galaxy-a15-5g.jpg',
      specs: { 'Pantalla': '6.5" AMOLED FHD+ 90Hz', 'Procesador': 'MediaTek Dimensity 6100+', 'RAM': '4 GB', 'Almacenamiento': '128 GB (MicroSD)', 'Cámara principal': '50 MP', 'Batería': '5000 mAh (25W)' }
    },
    ganadores: { 'Pantalla': 'B', 'Procesador': 'B', 'RAM': 'empate', 'Almacenamiento': 'B', 'Cámara principal': 'empate', 'Batería': 'B' },
    recomendado: 'B',
    veredicto: 'Samsung Galaxy A15 5G supera al Moto G Play en casi todo: pantalla AMOLED, mayor almacenamiento (128GB), carga más rápida (25W) y conectividad 5G por solo $20 más. Motorola ofrece precio menor y software más limpio. Para valor: Samsung A15. Para precio mínimo: Moto G Play.'
  },
  {
    id: 'smartphone-gama-media',
    nombre: 'Smartphone Gama Media Android',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 3,
    descripcion: 'Smartphone Android de gama media con cámaras versátiles, pantalla de calidad y rendimiento sólido para el día a día y entretenimiento.',
    productoA: {
      nombre: 'Galaxy A55 5G',
      marca: 'Samsung',
      precio: '$449.99 USD',
      imagen: 'assets/images/smartphones/samsung-galaxy-a55-5g.jpg',
      specs: { 'Pantalla': '6.6" Super AMOLED 120Hz FHD+', 'Procesador': 'Exynos 1480', 'RAM': '8 GB', 'Almacenamiento': '256 GB', 'Cámara principal': '50 MP OIS', 'Batería': '5000 mAh (25W) + IP67' }
    },
    productoB: {
      nombre: 'Pixel 7a',
      marca: 'Google',
      precio: '$499.99 USD',
      imagen: 'assets/images/smartphones/google-pixel-7a.jpg',
      specs: { 'Pantalla': '6.1" OLED 90Hz FHD+', 'Procesador': 'Google Tensor G2', 'RAM': '8 GB', 'Almacenamiento': '128 GB', 'Cámara principal': '64 MP OIS', 'Batería': '4385 mAh (18W) + IP67' }
    },
    ganadores: { 'Pantalla': 'A', 'Procesador': 'empate', 'RAM': 'empate', 'Almacenamiento': 'A', 'Cámara principal': 'B', 'Batería': 'A' },
    recomendado: 'A',
    veredicto: 'Samsung Galaxy A55 tiene pantalla 120Hz mayor, doble almacenamiento (256GB vs 128GB) y mayor batería. Google Pixel 7a tiene mejor cámara con IA (Tensor G2 para procesamiento fotográfico) y 5 años de actualizaciones garantizadas. Para fotografía IA: Pixel 7a. Para todo lo demás: Samsung A55.'
  },
  {
    id: 'smartphone-gama-alta',
    nombre: 'Smartphone Gama Alta Android',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 5,
    descripcion: 'Smartphone Android flagship con el mejor procesador, cámara de calidad profesional, pantalla premium y características de lujo. Sin compromisos.',
    productoA: {
      nombre: 'Galaxy S24 Ultra',
      marca: 'Samsung',
      precio: '$1,299.99 USD',
      imagen: 'assets/images/smartphones/samsung-galaxy-s24-ultra.jpg',
      specs: { 'Pantalla': '6.8" Dynamic AMOLED 2X 120Hz QHD+', 'Procesador': 'Snapdragon 8 Gen 3', 'RAM': '12 GB', 'Cámara': '200MP + 50MP + 10MP + 12MP', 'Stylus': 'S Pen integrado', 'Batería': '5000 mAh (45W) IP68' }
    },
    productoB: {
      nombre: 'Pixel 9 Pro XL',
      marca: 'Google',
      precio: '$1,099.99 USD',
      imagen: 'assets/images/smartphones/google-pixel-9-pro-xl.jpg',
      specs: { 'Pantalla': '6.8" LTPO OLED 120Hz QHD+', 'Procesador': 'Google Tensor G4', 'RAM': '16 GB', 'Cámara': '50MP + 48MP + 48MP (ultrawide)', 'Stylus': 'No', 'Batería': '5060 mAh (37W) IP68' }
    },
    ganadores: { 'Pantalla': 'empate', 'Procesador': 'A', 'RAM': 'B', 'Cámara': 'A', 'Stylus': 'A', 'Batería': 'B' },
    recomendado: 'A',
    veredicto: 'Samsung Galaxy S24 Ultra es el flagship más completo: mayor resolución de cámara (200MP), S Pen integrado y Snapdragon 8 Gen 3. Google Pixel 9 Pro XL tiene 16GB de RAM, batería ligeramente mayor y la mejor IA fotográfica. Para funcionalidades premium: Samsung. Para IA y fotos naturales: Pixel.'
  },
  {
    id: 'iphone-medio',
    nombre: 'Smartphone Gama Media Premium',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 4,
    descripcion: 'Smartphones de gama media premium con cámaras, buen rendimiento y soporte de software. Compara una opción iOS con una alternativa Android.',
    productoA: {
      nombre: 'iPhone 16',
      marca: 'Apple',
      precio: '$799.99 USD',
      imagen: 'assets/images/smartphones/apple-iphone-16.jpg',
      specs: { 'Pantalla': '6.1" Super Retina XDR 60Hz', 'Chip': 'A18 Bionic', 'RAM': '8 GB', 'Cámara': '48MP + 12MP ultrawide', 'USB': 'USB-C (USB 3)', 'Batería': '3561 mAh (25W)' }
    },
    productoB: {
      nombre: 'Galaxy A55 5G',
      marca: 'Samsung',
      precio: '$449.99 USD',
      imagen: 'assets/images/smartphones/samsung-galaxy-a55-5g.jpg',
      specs: { 'Pantalla': '6.6" Super AMOLED 120Hz FHD+', 'Chip': 'Exynos 1480', 'RAM': '8 GB', 'Cámara': '50MP principal con OIS', 'USB': 'USB-C', 'Batería': '5000 mAh (25W) + IP67' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'A', 'RAM': 'empate', 'Cámara': 'A', 'USB': 'empate', 'Batería': 'B' },
    recomendado: 'A',
    veredicto: 'iPhone 16 ofrece un chip más potente, cámara dual y acceso al ecosistema iOS. Galaxy A55 5G ofrece una pantalla AMOLED de 120 Hz, batería de 5000 mAh e IP67 por un precio menor. Para rendimiento y iOS: Apple. Para pantalla, batería y valor: Samsung.'
  },
  {
    id: 'iphone-alto',
    nombre: 'Smartphone Gama Alta',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 5,
    descripcion: 'Smartphones insignia con pantalla de alta frecuencia, cámaras avanzadas y materiales premium. Compara las propuestas de Apple y Samsung.',
    productoA: {
      nombre: 'iPhone 16 Pro',
      marca: 'Apple',
      precio: '$999.99 USD',
      imagen: 'assets/images/smartphones/apple-iphone-16-pro.jpg',
      specs: { 'Pantalla': '6.3" ProMotion OLED 120Hz', 'Chip': 'A18 Pro', 'RAM': '8 GB', 'Cámara': '48MP + 48MP ultrawide + 12MP 5x zoom', 'Cuerpo': 'Titanio grado 5', 'Video': '4K 120fps ProRes' }
    },
    productoB: {
      nombre: 'Galaxy S24 Ultra',
      marca: 'Samsung',
      precio: '$1,299.99 USD',
      imagen: 'assets/images/smartphones/samsung-galaxy-s24-ultra.jpg',
      specs: { 'Pantalla': '6.8" Dynamic AMOLED 2X 120Hz QHD+', 'Chip': 'Snapdragon 8 Gen 3', 'RAM': '12 GB', 'Cámara': '200MP + 50MP + 10MP + 12MP', 'Cuerpo': 'Titanio', 'Video': '8K 30fps / 4K 120fps' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'empate', 'RAM': 'B', 'Cámara': 'B', 'Cuerpo': 'empate', 'Video': 'empate' },
    recomendado: 'B',
    veredicto: 'Galaxy S24 Ultra ofrece pantalla más grande con resolución QHD+, más RAM, cámara principal de 200 MP y S Pen integrado. iPhone 16 Pro destaca por su integración con Apple, video ProRes y un formato más compacto. Para especificaciones y fotografía versátil: Samsung. Para el ecosistema Apple y video: iPhone.'
  },
  {
    id: 'smartphone-plegable',
    nombre: 'Smartphone Plegable',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 5,
    descripcion: 'El futuro de los smartphones: pantalla que se dobla para convertirse en tablet o formato compacto. La innovación más emocionante en dispositivos móviles.',
    productoA: {
      nombre: 'Galaxy Z Fold 6',
      marca: 'Samsung',
      precio: '$1,799.99 USD',
      imagen: 'assets/images/smartphones/samsung-galaxy-z-fold-6.jpg',
      specs: { 'Pantalla interior': '7.6" Dynamic AMOLED 120Hz', 'Pantalla exterior': '6.3" AMOLED 120Hz', 'Procesador': 'Snapdragon 8 Gen 3', 'RAM': '12 GB', 'Cámara': '50MP + 10MP + 10MP', 'Batería': '4400 mAh + IP48' }
    },
    productoB: {
      nombre: 'Razr+ 2024',
      marca: 'Motorola',
      precio: '$999.99 USD',
      imagen: 'assets/images/smartphones/motorola-razr-plus-2024.jpg',
      specs: { 'Pantalla interior': '6.9" pOLED 165Hz', 'Pantalla exterior': '4" LTPO pOLED 165Hz', 'Procesador': 'Snapdragon 8s Gen 3', 'RAM': '12 GB', 'Cámara': '50MP + 50MP ultrawide', 'Batería': '4000 mAh (45W rápida)' }
    },
    ganadores: { 'Pantalla interior': 'A', 'Pantalla exterior': 'B', 'Procesador': 'A', 'RAM': 'empate', 'Cámara': 'empate', 'Batería': 'A' },
    recomendado: 'A',
    veredicto: 'Samsung Galaxy Z Fold 6 se convierte en tablet con 7.6" — un verdadero reemplazo de tablet/teléfono. Motorola Razr+ es tipo clamshell (se dobla en la mitad) y es $800 más barato con pantalla exterior grande de 4". Para máxima productividad: Z Fold 6. Para compacidad y precio: Razr+.'
  }
]);
