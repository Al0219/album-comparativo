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
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Motorola+Moto+G+Play',
      specs: { 'Pantalla': '6.5" IPS HD+ 90Hz', 'Procesador': 'MediaTek Helio G36', 'RAM': '4 GB', 'Almacenamiento': '64 GB (MicroSD)', 'Cámara principal': '50 MP', 'Batería': '5000 mAh (18W)' }
    },
    productoB: {
      nombre: 'Galaxy A15 5G',
      marca: 'Samsung',
      precio: '$169.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Samsung+Galaxy+A15+5G',
      specs: { 'Pantalla': '6.5" AMOLED FHD+ 90Hz', 'Procesador': 'MediaTek Dimensity 6100+', 'RAM': '4 GB', 'Almacenamiento': '128 GB (MicroSD)', 'Cámara principal': '50 MP', 'Batería': '5000 mAh (25W)' }
    },
    ganadores: { 'Pantalla': 'B', 'Procesador': 'B', 'RAM': 'empate', 'Almacenamiento': 'B', 'Cámara principal': 'empate', 'Batería': 'B' },
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
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Samsung+Galaxy+A55+5G',
      specs: { 'Pantalla': '6.6" Super AMOLED 120Hz FHD+', 'Procesador': 'Exynos 1480', 'RAM': '8 GB', 'Almacenamiento': '256 GB', 'Cámara principal': '50 MP OIS', 'Batería': '5000 mAh (25W) + IP67' }
    },
    productoB: {
      nombre: 'Pixel 7a',
      marca: 'Google',
      precio: '$499.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Google+Pixel+7a',
      specs: { 'Pantalla': '6.1" OLED 90Hz FHD+', 'Procesador': 'Google Tensor G2', 'RAM': '8 GB', 'Almacenamiento': '128 GB', 'Cámara principal': '64 MP OIS', 'Batería': '4385 mAh (18W) + IP67' }
    },
    ganadores: { 'Pantalla': 'A', 'Procesador': 'empate', 'RAM': 'empate', 'Almacenamiento': 'A', 'Cámara principal': 'B', 'Batería': 'A' },
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
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Samsung+Galaxy+S24+Ultra',
      specs: { 'Pantalla': '6.8" Dynamic AMOLED 2X 120Hz QHD+', 'Procesador': 'Snapdragon 8 Gen 3', 'RAM': '12 GB', 'Cámara': '200MP + 50MP + 10MP + 12MP', 'Stylus': 'S Pen integrado', 'Batería': '5000 mAh (45W) IP68' }
    },
    productoB: {
      nombre: 'Pixel 9 Pro XL',
      marca: 'Google',
      precio: '$1,099.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Google+Pixel+9+Pro+XL',
      specs: { 'Pantalla': '6.8" LTPO OLED 120Hz QHD+', 'Procesador': 'Google Tensor G4', 'RAM': '16 GB', 'Cámara': '50MP + 48MP + 48MP (ultrawide)', 'Stylus': 'No', 'Batería': '5060 mAh (37W) IP68' }
    },
    ganadores: { 'Pantalla': 'empate', 'Procesador': 'A', 'RAM': 'B', 'Cámara': 'A', 'Stylus': 'A', 'Batería': 'B' },
    veredicto: 'Samsung Galaxy S24 Ultra es el flagship más completo: mayor resolución de cámara (200MP), S Pen integrado y Snapdragon 8 Gen 3. Google Pixel 9 Pro XL tiene 16GB de RAM, batería ligeramente mayor y la mejor IA fotográfica. Para funcionalidades premium: Samsung. Para IA y fotos naturales: Pixel.'
  },
  {
    id: 'iphone-medio',
    nombre: 'iPhone Gama Media',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 4,
    descripcion: 'iPhone de gama media con ecosistema iOS, cámara de calidad y rendimiento Apple. Ideal para quienes quieren la experiencia iPhone sin pagar precio máximo.',
    productoA: {
      nombre: 'iPhone 16',
      marca: 'Apple',
      precio: '$799.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Apple+iPhone+16',
      specs: { 'Pantalla': '6.1" Super Retina XDR 60Hz', 'Chip': 'A18 Bionic', 'RAM': '8 GB', 'Cámara': '48MP + 12MP ultrawide', 'USB': 'USB-C (USB 3)', 'Batería': '3561 mAh (25W)' }
    },
    productoB: {
      nombre: 'iPhone SE (3ra gen)',
      marca: 'Apple',
      precio: '$429.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Apple+iPhone+SE+3rd+Gen',
      specs: { 'Pantalla': '4.7" Retina IPS 60Hz', 'Chip': 'A15 Bionic', 'RAM': '4 GB', 'Cámara': '12MP principal (single)', 'USB': 'Lightning', 'Batería': '2018 mAh (20W)' }
    },
    ganadores: { 'Pantalla': 'A', 'Chip': 'A', 'RAM': 'A', 'Cámara': 'A', 'USB': 'A', 'Batería': 'A' },
    veredicto: 'iPhone 16 supera al SE en todos los aspectos: mayor pantalla, A18 Bionic más reciente, 8GB RAM, cámara dual y USB-C vs Lightning. iPhone SE es para quienes quieren el precio más bajo en el ecosistema Apple o prefieren tamaño compacto. Para la mejor experiencia: iPhone 16.'
  },
  {
    id: 'iphone-alto',
    nombre: 'iPhone Gama Alta',
    seccion: 'smartphones',
    icono: '📱',
    complejidad: 5,
    descripcion: 'Los iPhones más potentes de Apple con titanio, ProMotion 120Hz, sistema de cámaras pro y el chip A18 Pro. El teléfono de mayor rendimiento de Apple.',
    productoA: {
      nombre: 'iPhone 16 Pro',
      marca: 'Apple',
      precio: '$999.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Apple+iPhone+16+Pro',
      specs: { 'Pantalla': '6.3" ProMotion OLED 120Hz', 'Chip': 'A18 Pro', 'RAM': '8 GB', 'Cámara': '48MP + 48MP ultrawide + 12MP 5x zoom', 'Cuerpo': 'Titanio grado 5', 'Video': '4K 120fps ProRes' }
    },
    productoB: {
      nombre: 'iPhone 16 Pro Max',
      marca: 'Apple',
      precio: '$1,199.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Apple+iPhone+16+Pro+Max',
      specs: { 'Pantalla': '6.9" ProMotion OLED 120Hz', 'Chip': 'A18 Pro', 'RAM': '8 GB', 'Cámara': '48MP + 48MP ultrawide + 12MP 5x zoom', 'Cuerpo': 'Titanio grado 5', 'Video': '4K 120fps ProRes' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'empate', 'RAM': 'empate', 'Cámara': 'empate', 'Cuerpo': 'empate', 'Video': 'empate' },
    veredicto: 'iPhone 16 Pro Max y Pro son casi idénticos, con la única diferencia siendo el tamaño de pantalla (6.9" vs 6.3") y la batería (mayor en Pro Max). Para pantalla grande y máxima batería: Pro Max. Para tamaño más compacto manejable: iPhone 16 Pro con $200 de ahorro.'
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
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Samsung+Galaxy+Z+Fold+6',
      specs: { 'Pantalla interior': '7.6" Dynamic AMOLED 120Hz', 'Pantalla exterior': '6.3" AMOLED 120Hz', 'Procesador': 'Snapdragon 8 Gen 3', 'RAM': '12 GB', 'Cámara': '50MP + 10MP + 10MP', 'Batería': '4400 mAh + IP48' }
    },
    productoB: {
      nombre: 'Razr+ 2024',
      marca: 'Motorola',
      precio: '$999.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/4ade80?text=Motorola+Razr+Plus+2024',
      specs: { 'Pantalla interior': '6.9" pOLED 165Hz', 'Pantalla exterior': '4" LTPO pOLED 165Hz', 'Procesador': 'Snapdragon 8s Gen 3', 'RAM': '12 GB', 'Cámara': '50MP + 50MP ultrawide', 'Batería': '4000 mAh (45W rápida)' }
    },
    ganadores: { 'Pantalla interior': 'A', 'Pantalla exterior': 'B', 'Procesador': 'A', 'RAM': 'empate', 'Cámara': 'empate', 'Batería': 'A' },
    veredicto: 'Samsung Galaxy Z Fold 6 se convierte en tablet con 7.6" — un verdadero reemplazo de tablet/teléfono. Motorola Razr+ es tipo clamshell (se dobla en la mitad) y es $800 más barato con pantalla exterior grande de 4". Para máxima productividad: Z Fold 6. Para compacidad y precio: Razr+.'
  }
]);
