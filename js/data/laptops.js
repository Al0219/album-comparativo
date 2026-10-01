/* js/data/laptops.js — 8 categorías de Laptops */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'laptop-basica',
    nombre: 'Laptop Básica / Estudiante',
    seccion: 'laptops',
    icono: '💻',
    complejidad: 2,
    descripcion: 'Laptop de entrada para estudiantes y uso básico: navegación, documentos, videoconferencias. Buena autonomía y precio accesible.',
    productoA: {
      nombre: 'HP 15-ef2126wm 15.6"',
      marca: 'HP',
      precio: '$329.99 USD',
      imagen: 'assets/images/laptops/hp-15-ef2126wm.jpg',
      specs: { 'Pantalla': '15.6" FHD 60Hz IPS', 'Procesador': 'AMD Ryzen 3 5300U', 'RAM': '8 GB DDR4', 'Almacenamiento': '256 GB SSD', 'GPU': 'AMD Radeon integrada', 'Batería': 'Hasta 7.5 horas' }
    },
    productoB: {
      nombre: 'Aspire 3 A315-59',
      marca: 'Acer',
      precio: '$299.99 USD',
      imagen: 'assets/images/laptops/acer-aspire-3-a315.jpg',
      specs: { 'Pantalla': '15.6" FHD 60Hz IPS', 'Procesador': 'Intel Core i5-1235U', 'RAM': '8 GB DDR4', 'Almacenamiento': '512 GB SSD', 'GPU': 'Intel Iris Xe integrada', 'Batería': 'Hasta 9 horas' }
    },
    ganadores: { 'Pantalla': 'empate', 'Procesador': 'B', 'RAM': 'empate', 'Almacenamiento': 'B', 'GPU': 'B', 'Batería': 'B' },
    recomendado: 'B',
    veredicto: 'Acer Aspire 3 gana claramente: Intel i5-1235U más potente, doble almacenamiento (512GB), mejor GPU integrada (Iris Xe) y mayor batería a $30 menos. HP 15 es perfectamente funcional para tareas básicas. Para mejor valor estudiantil: Acer Aspire 3.'
  },
  {
    id: 'laptop-media',
    nombre: 'Laptop Gama Media',
    seccion: 'laptops',
    icono: '💻',
    complejidad: 3,
    descripcion: 'Laptop de gama media para trabajo, multimedia y entretenimiento. Mayor rendimiento para multitarea, mejores pantallas y mayor almacenamiento.',
    productoA: {
      nombre: 'VivoBook 15 F515 OLED',
      marca: 'ASUS',
      precio: '$549.99 USD',
      imagen: 'assets/images/laptops/asus-vivobook-15-oled.jpg',
      specs: { 'Pantalla': '15.6" OLED FHD 120Hz', 'Procesador': 'AMD Ryzen 5 7530U', 'RAM': '16 GB DDR4', 'Almacenamiento': '512 GB NVMe SSD', 'Peso': '1.7 kg', 'Batería': 'Hasta 8 horas' }
    },
    productoB: {
      nombre: 'IdeaPad 5 Pro 14" 2.8K',
      marca: 'Lenovo',
      precio: '$599.99 USD',
      imagen: 'assets/images/laptops/lenovo-ideapad-5-pro-14.jpg',
      specs: { 'Pantalla': '14" IPS 2.8K 90Hz', 'Procesador': 'AMD Ryzen 5 7535HS', 'RAM': '16 GB LPDDR5', 'Almacenamiento': '512 GB NVMe SSD', 'Peso': '1.46 kg', 'Batería': 'Hasta 12 horas' }
    },
    ganadores: { 'Pantalla': 'A', 'Procesador': 'B', 'RAM': 'empate', 'Almacenamiento': 'empate', 'Peso': 'B', 'Batería': 'B' },
    recomendado: 'B',
    veredicto: 'ASUS VivoBook OLED tiene pantalla OLED de 120Hz con colores increíbles para creadores. Lenovo IdeaPad 5 Pro es más ligero (1.46kg), tiene 12h de batería y procesador más potente. Para calidad visual: ASUS OLED. Para portabilidad y batería: Lenovo IdeaPad 5 Pro.'
  },
  {
    id: 'laptop-gaming-media',
    nombre: 'Laptop Gaming Gama Media',
    seccion: 'laptops',
    icono: '🎮',
    complejidad: 4,
    descripcion: 'Laptop gaming con GPU dedicada para jugar en 1080p. Balance entre rendimiento en juegos y precio, con pantalla de alta tasa de refresco.',
    productoA: {
      nombre: 'ROG Strix G16 G614JI',
      marca: 'ASUS',
      precio: '$1,199.99 USD',
      imagen: 'assets/images/laptops/asus-rog-strix-g16.png',
      specs: { 'Pantalla': '16" QHD 240Hz IPS', 'Procesador': 'Intel Core i7-13650HX', 'GPU': 'NVIDIA RTX 4070 (140W)', 'RAM': '16 GB DDR5', 'Almacenamiento': '1 TB NVMe SSD', 'Batería': '90Wh' }
    },
    productoB: {
      nombre: 'Legion 5i Pro 16" Gen 8',
      marca: 'Lenovo',
      precio: '$1,099.99 USD',
      imagen: 'assets/images/laptops/lenovo-legion-pro-5i-16.png',
      specs: { 'Pantalla': '16" WQXGA 165Hz IPS', 'Procesador': 'Intel Core i7-13700H', 'GPU': 'NVIDIA RTX 4060 (140W)', 'RAM': '16 GB DDR5', 'Almacenamiento': '1 TB NVMe SSD', 'Batería': '99.9Wh' }
    },
    ganadores: { 'Pantalla': 'A', 'Procesador': 'B', 'GPU': 'A', 'RAM': 'empate', 'Almacenamiento': 'empate', 'Batería': 'B' },
    recomendado: 'B',
    veredicto: 'ASUS ROG Strix G16 tiene RTX 4070 (GPU superior), pantalla QHD 240Hz para gaming suave. Lenovo Legion 5i Pro tiene mayor batería (99.9Wh) y mejor teclado mecánico. Para gaming puro: ASUS ROG con RTX 4070. Para uso mixto: Lenovo Legion con mejor batería.'
  },
  {
    id: 'laptop-gaming-alta',
    nombre: 'Laptop Gaming Gama Alta',
    seccion: 'laptops',
    icono: '🎮',
    complejidad: 5,
    descripcion: 'Laptop gaming premium con GPU de alto rendimiento para 1440p/4K gaming. Pantallas de alta tasa de refresco, diseño delgado y specs de workstation.',
    productoA: {
      nombre: 'ROG Zephyrus G16 GU605',
      marca: 'ASUS',
      precio: '$2,499.99 USD',
      imagen: 'assets/images/laptops/asus-rog-zephyrus-g16.png',
      specs: { 'Pantalla': '16" OLED QHD+ 240Hz', 'Procesador': 'Intel Core Ultra 9 185H', 'GPU': 'NVIDIA RTX 4090 (120W)', 'RAM': '32 GB LPDDR5x', 'Almacenamiento': '2 TB NVMe SSD', 'Peso': '1.85 kg' }
    },
    productoB: {
      nombre: 'Razer Blade 16 2024',
      marca: 'Razer',
      precio: '$3,499.99 USD',
      imagen: 'assets/images/laptops/razer-blade-16-2024.webp',
      specs: { 'Pantalla': '16" OLED UHD+ 240Hz', 'Procesador': 'Intel Core i9-14900HX', 'GPU': 'NVIDIA RTX 4090 (175W)', 'RAM': '32 GB DDR5', 'Almacenamiento': '2 TB NVMe SSD', 'Peso': '2.34 kg' }
    },
    ganadores: { 'Pantalla': 'B', 'Procesador': 'B', 'GPU': 'B', 'RAM': 'empate', 'Almacenamiento': 'empate', 'Peso': 'A' },
    recomendado: 'B',
    veredicto: 'Razer Blade 16 tiene GPU con mayor TDP (175W vs 120W) — diferencia significativa en rendimiento real. ASUS ROG Zephyrus G16 es $1000 más barato, más ligero (1.85kg vs 2.34kg) y ofrece 90% del rendimiento. Para máxima potencia sin mirar precio: Razer. Para mejor relación: ASUS.'
  },
  {
    id: 'ultrabook',
    nombre: 'Ultrabook Premium',
    seccion: 'laptops',
    icono: '💼',
    complejidad: 4,
    descripcion: 'Laptop ultrafina y ligera para profesionales. Diseño premium en aluminio, pantalla de alta calidad, Thunderbolt 4 y batería de larga duración en formato compacto.',
    productoA: {
      nombre: 'XPS 13 9340 Plus',
      marca: 'Dell',
      precio: '$1,299.99 USD',
      imagen: 'assets/images/laptops/dell-xps-13-plus-9340.jpg',
      specs: { 'Pantalla': '13.4" OLED 3.5K 60Hz touch', 'Procesador': 'Intel Core Ultra 7 155H', 'RAM': '32 GB LPDDR5x', 'Almacenamiento': '1 TB NVMe', 'Peso': '1.17 kg', 'Puertos': '2x Thunderbolt 4' }
    },
    productoB: {
      nombre: 'Spectre x360 14" OLED',
      marca: 'HP',
      precio: '$1,399.99 USD',
      imagen: 'assets/images/laptops/hp-spectre-x360-14.jpg',
      specs: { 'Pantalla': '14" OLED 2.8K 120Hz touch (2-en-1)', 'Procesador': 'Intel Core Ultra 7 155H', 'RAM': '32 GB LPDDR5x', 'Almacenamiento': '2 TB NVMe', 'Peso': '1.4 kg', 'Puertos': '2x Thunderbolt 4 + USB-A + MicroSD' }
    },
    ganadores: { 'Pantalla': 'B', 'Procesador': 'empate', 'RAM': 'empate', 'Almacenamiento': 'B', 'Peso': 'A', 'Puertos': 'B' },
    recomendado: 'B',
    veredicto: 'Dell XPS 13 es el ultrabook más ligero (1.17kg) con pantalla OLED de mayor resolución. HP Spectre x360 14 tiene doble almacenamiento (2TB), pantalla 120Hz, es convertible 2-en-1 y ofrece más puertos. Para viajes frecuentes: Dell XPS. Para versatilidad: HP Spectre.'
  },
  {
    id: 'macbook-air',
    nombre: 'Laptop Ultraligera Premium',
    seccion: 'laptops',
    icono: '🍎',
    complejidad: 4,
    descripcion: 'Laptops ultraligeras premium para estudio, desarrollo y trabajo móvil. Compara autonomía, pantalla, memoria y portabilidad entre macOS y Windows.',
    productoA: {
      nombre: 'MacBook Air 13" M3',
      marca: 'Apple',
      precio: '$1,099.99 USD',
      imagen: 'assets/images/laptops/apple-macbook-air-13-m3.jpg',
      specs: { 'Pantalla': '13.6" Liquid Retina 2560x1664', 'Chip': 'Apple M3 (8-core CPU, 10-core GPU)', 'RAM': '8 GB unificada', 'Almacenamiento': '256 GB SSD', 'Batería': 'Hasta 18 horas', 'Peso': '1.24 kg' }
    },
    productoB: {
      nombre: 'Spectre x360 14" 2-en-1',
      marca: 'HP',
      precio: '$1,399.99 USD',
      imagen: 'assets/images/laptops/hp-spectre-x360-14.jpg',
      specs: { 'Pantalla': '14" OLED 2.8K 120Hz touch', 'Chip': 'Intel Core Ultra 7 155H', 'RAM': '32 GB LPDDR5x', 'Almacenamiento': '2 TB NVMe', 'Batería': 'Hasta 13 horas', 'Peso': '1.4 kg' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'empate', 'RAM': 'B', 'Almacenamiento': 'B', 'Batería': 'A', 'Peso': 'A' },
    recomendado: 'A',
    veredicto: 'MacBook Air destaca por menor peso, autonomía superior y funcionamiento silencioso sin ventilador. HP Spectre x360 ofrece pantalla OLED táctil, mucha más memoria y almacenamiento, además de diseño convertible. Para máxima movilidad y macOS: Apple. Para versatilidad y especificaciones: HP.'
  },
  {
    id: 'macbook-pro',
    nombre: 'Laptop Profesional de Alto Rendimiento',
    seccion: 'laptops',
    icono: '🍎',
    complejidad: 5,
    descripcion: 'Laptops de alto rendimiento para edición, desarrollo y creación 3D. Compara un equipo profesional de Apple con una workstation Windows de alta potencia.',
    productoA: {
      nombre: 'MacBook Pro 14" M4 Pro',
      marca: 'Apple',
      precio: '$1,999.99 USD',
      imagen: 'assets/images/laptops/apple-macbook-pro-14-m4-pro.jpg',
      specs: { 'Pantalla': '14.2" Liquid Retina XDR 120Hz ProMotion', 'Chip': 'Apple M4 Pro (12-core CPU, 20-core GPU)', 'RAM': '24 GB unificada', 'Almacenamiento': '512 GB SSD', 'Batería': 'Hasta 22 horas', 'Puertos': 'MagSafe + 3x TB4 + HDMI + SD' }
    },
    productoB: {
      nombre: 'ROG Zephyrus G16 GU605',
      marca: 'ASUS',
      precio: '$2,499.99 USD',
      imagen: 'assets/images/laptops/asus-rog-zephyrus-g16.png',
      specs: { 'Pantalla': '16" OLED QHD+ 240Hz', 'Chip': 'Intel Core Ultra 9 185H + NVIDIA RTX 4090', 'RAM': '32 GB LPDDR5x', 'Almacenamiento': '2 TB NVMe SSD', 'Batería': '90 Wh', 'Puertos': 'Thunderbolt 4 + USB-A + HDMI + lector SD' }
    },
    ganadores: { 'Pantalla': 'B', 'Chip': 'B', 'RAM': 'B', 'Almacenamiento': 'B', 'Batería': 'A', 'Puertos': 'A' },
    recomendado: 'A',
    veredicto: 'MacBook Pro ofrece gran autonomía, memoria unificada y una selección completa de puertos para flujos profesionales. ASUS ROG Zephyrus G16 ofrece GPU dedicada RTX 4090, pantalla de 240 Hz y 2 TB de almacenamiento por un precio menor. Para trabajo móvil con macOS: Apple. Para GPU y creación 3D: ASUS.'
  },
  {
    id: 'laptop-2en1',
    nombre: 'Laptop 2-en-1 / Convertible',
    seccion: 'laptops',
    icono: '🔄',
    complejidad: 4,
    descripcion: 'Laptop que se convierte en tablet. Bisagra de 360° que permite usar en modo laptop, tablet, tienda o carpa. Pantalla táctil compatible con stylus.',
    productoA: {
      nombre: 'Surface Pro 10 for Business',
      marca: 'Microsoft',
      precio: '$1,499.99 USD',
      imagen: 'assets/images/laptops/microsoft-surface-pro-10.jpg',
      specs: { 'Pantalla': '13" PixelSense 2K 120Hz touch', 'Procesador': 'Intel Core Ultra 5 135U', 'RAM': '16 GB LPDDR5x', 'Almacenamiento': '256 GB SSD', 'Stylus': 'Surface Slim Pen 2 (incluido)', 'Modo': 'Tablet detachable' }
    },
    productoB: {
      nombre: 'Spectre x360 14" 2-en-1',
      marca: 'HP',
      precio: '$1,399.99 USD',
      imagen: 'assets/images/laptops/hp-spectre-x360-14.jpg',
      specs: { 'Pantalla': '14" OLED 2.8K 120Hz touch', 'Procesador': 'Intel Core Ultra 7 155H', 'RAM': '32 GB LPDDR5x', 'Almacenamiento': '2 TB NVMe', 'Stylus': 'HP MPP stylus (opcional)', 'Modo': 'Bisagra 360° clamshell' }
    },
    ganadores: { 'Pantalla': 'B', 'Procesador': 'B', 'RAM': 'B', 'Almacenamiento': 'B', 'Stylus': 'A', 'Modo': 'A' },
    recomendado: 'B',
    veredicto: 'HP Spectre x360 14 tiene mejor pantalla OLED, procesador más potente, 32GB RAM y 2TB — gana en specs. Microsoft Surface Pro 10 incluye el stylus (sin costo adicional) y como tablet detachable es más cómodo para uso puro tablet. Para laptop+tablet: HP. Para tablet+laptop: Microsoft Surface.'
  }
]);
