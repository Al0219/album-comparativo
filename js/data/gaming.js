/* js/data/gaming.js — 5 categorías de Consolas y Gaming Tech */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'consola-videojuegos-salon',
    nombre: 'Consolas de Videojuegos de Salón de Nueva Generación',
    seccion: 'gaming',
    icono: '🎮',
    complejidad: 3,
    descripcion: 'Las plataformas líderes de sobremesa para gaming 4K con trazado de rayos (Ray Tracing), almacenamiento SSD ultra-rápido y audio espacial.',
    productoA: {
      nombre: 'PlayStation 5 Slim',
      marca: 'Sony',
      precio: '$499.99 USD',
      imagen: 'assets/images/gaming/sony-playstation-5-slim.jpg',
      specs: {
        'Potencia gráfica GPU': '10.28 TFLOPS AMD RDNA 2 personalizada',
        'Almacenamiento interno': '1 TB SSD PCIe 4.0 personalizado (5.5 GB/s sin compresión)',
        'Mando y háptica': 'DualSense con gatillos adaptativos y vibración háptica avanzada',
        'Tasa de refresco y resolución': 'Hasta 4K 120Hz con VRR y salida 8K',
        'Lector óptico': 'Ultra HD Blu-ray 4K desacoplable',
        'Ecosistema y servicios': 'PlayStation Plus y exclusivos aclamados (Spider-Man, God of War)'
      }
    },
    productoB: {
      nombre: 'Xbox Series X',
      marca: 'Microsoft',
      precio: '$499.99 USD',
      imagen: 'assets/images/gaming/xbox-series-x.jpg',
      specs: {
        'Potencia gráfica GPU': '12.15 TFLOPS AMD RDNA 2 completa (52 CUs a 1.825 GHz)',
        'Almacenamiento interno': '1 TB SSD NVMe personalizado (2.4 GB/s sin compresión)',
        'Mando y háptica': 'Xbox Wireless Controller con rumble tradicional de bajo consumo',
        'Tasa de refresco y resolución': 'Hasta 4K 120Hz nativo con Dolby Vision Gaming',
        'Lector óptico': 'Ultra HD Blu-ray 4K integrado',
        'Ecosistema y servicios': 'Xbox Game Pass Ultimate con catálogo inmenso día uno'
      }
    },
    ganadores: {
      'Potencia gráfica GPU': 'B',
      'Almacenamiento interno': 'A',
      'Mando y háptica': 'A',
      'Tasa de refresco y resolución': 'B',
      'Lector óptico': 'empate',
      'Ecosistema y servicios': 'empate'
    },
    recomendado: 'A',
    veredicto: 'PS5 Slim ofrece una experiencia sensorial superior gracias a la inmersión del mando DualSense, mayor velocidad de ancho de banda en su SSD y un catálogo incomparable de juegos exclusivos single-player. Xbox Series X ofrece una ventaja técnica bruta de casi 2 TFLOPS en GPU y el valor inigualable de Game Pass. Para la experiencia de juego más inmersiva: PlayStation 5.'
  },
  {
    id: 'consola-portatil-pc',
    nombre: 'Consolas Portátiles para PC Gaming (Handheld PC)',
    seccion: 'gaming',
    icono: '🕹️',
    complejidad: 4,
    descripcion: 'Computadoras de mano con procesadores APU x86 capaces de ejecutar la biblioteca completa de juegos de PC en cualquier lugar.',
    productoA: {
      nombre: 'Steam Deck OLED (512 GB)',
      marca: 'Valve',
      precio: '$549.00 USD',
      imagen: 'assets/images/gaming/valve-steam-deck-oled.jpg',
      specs: {
        'Pantalla': '7.4" HDR OLED 90Hz (1280 x 800, 1000 nits pico)',
        'Procesador APU': 'AMD "Sephiroth" 6nm Zen 2 (4c/8t) + RDNA 2 (8 CUs)',
        'Memoria RAM': '16 GB LPDDR5 6400 MT/s',
        'Capacidad de batería': '50 Whr (3 a 12 horas de juego continuo)',
        'Sistema operativo': 'SteamOS 3.5 basado en Linux (ergonomía de consola)',
        'Controles especiales': 'Dual trackpads capacitivos + 4 botones traseros'
      }
    },
    productoB: {
      nombre: 'ROG Ally X (1 TB)',
      marca: 'ASUS',
      precio: '$799.99 USD',
      imagen: 'assets/images/gaming/asus-rog-ally-x.jpg',
      specs: {
        'Pantalla': '7.0" FHD IPS 120Hz con VRR FreeSync Premium (1920 x 1080)',
        'Procesador APU': 'AMD Ryzen Z1 Extreme 4nm Zen 4 (8c/16t) + RDNA 3 (12 CUs)',
        'Memoria RAM': '24 GB LPDDR5X 7500 MT/s',
        'Capacidad de batería': '80 Whr (la mayor de su categoría)',
        'Sistema operativo': 'Windows 11 Home (compatibilidad total Game Pass/Epic)',
        'Controles especiales': 'Joysticks de efecto Hall reforzados + 2 botones traseros'
      }
    },
    ganadores: {
      'Pantalla': 'A',
      'Procesador APU': 'B',
      'Memoria RAM': 'B',
      'Capacidad de batería': 'B',
      'Sistema operativo': 'A',
      'Controles especiales': 'A'
    },
    recomendado: 'A',
    veredicto: 'Steam Deck OLED ofrece la mejor relación calidad-precio y la experiencia de usuario más refinada gracias a su pantalla OLED 90Hz con negros perfectos, ergonomía superior con trackpads duales y la inmediatez de SteamOS costando $250 menos. ASUS ROG Ally X es un monstruo de potencia con 24GB de RAM, batería colosal de 80Whr y Windows nativo, pero para portabilidad pura: Steam Deck OLED.'
  },
  {
    id: 'consola-hibrida',
    nombre: 'Consolas Híbridas y Versátiles de Entretenimiento',
    seccion: 'gaming',
    icono: '👾',
    complejidad: 3,
    descripcion: 'Dispositivos versátiles capaces de conmutar entre uso portátil, modo sobremesa y modo televisor con mandos desacoplables.',
    productoA: {
      nombre: 'Switch OLED',
      marca: 'Nintendo',
      precio: '$349.99 USD',
      imagen: 'assets/images/gaming/nintendo-switch-oled.jpg',
      specs: {
        'Pantalla': '7.0 pulgadas OLED vibrante (1280 x 720)',
        'Peso total': '420 gramos (máxima ligereza y portabilidad)',
        'Almacenamiento': '64 GB interno + ranura microSD',
        'Mandos': 'Joy-Con desacoplables con giroscopio y vibración HD',
        'Autonomía': '4.5 a 9 horas de batería',
        'Catálogo': 'Exclusivos legendarios: Mario, Zelda, Pokémon, Smash Bros'
      }
    },
    productoB: {
      nombre: 'Legion Go',
      marca: 'Lenovo',
      precio: '$699.99 USD',
      imagen: 'assets/images/gaming/lenovo-legion-go.jpg',
      specs: {
        'Pantalla': '8.8 pulgadas QHD+ IPS 144Hz (2560 x 1600)',
        'Peso total': '854 gramos (dispositivo de gran formato)',
        'Almacenamiento': '512 GB / 1 TB PCIe 4.0 NVMe SSD',
        'Mandos': 'TrueStrike desacoplables con modo FPS (sensor óptico ratón)',
        'Autonomía': '2 a 5 horas de batería (49.2 Whr)',
        'Catálogo': 'Biblioteca completa de PC Windows (Steam, Game Pass, Epic)'
      }
    },
    ganadores: {
      'Pantalla': 'B',
      'Peso total': 'A',
      'Almacenamiento': 'B',
      'Mandos': 'A',
      'Autonomía': 'A',
      'Catálogo': 'A'
    },
    recomendado: 'A',
    veredicto: 'Nintendo Switch OLED es la reina indiscutible del juego híbrido portátil: pesa la mitad que la Lenovo, ofrece el doble de autonomía, cuesta la mitad del precio y tiene el catálogo familiar y multijugador local más aclamado del mundo. Lenovo Legion Go es impresionante por su gigantesca pantalla de 8.8" 144Hz y modo FPS, pero su peso de casi 1 kg limita la comodidad portátil.'
  },
  {
    id: 'visor-realidad-mixta',
    nombre: 'Visores de Realidad Mixta y Computación Espacial',
    seccion: 'gaming',
    icono: '🥽',
    complejidad: 5,
    descripcion: 'Dispositivos inmersivos de realidad virtual y aumentada con cámaras de paso a color de alta fidelidad, audio espacial y computación espacial.',
    productoA: {
      nombre: 'Quest 3 (128 GB)',
      marca: 'Meta',
      precio: '$499.99 USD',
      imagen: 'assets/images/gaming/meta-quest-3.jpg',
      specs: {
        'Tecnología de pantalla': 'Dual LCD 4K+ con lentes Pancake (2064 x 2208 por ojo)',
        'Frecuencia de actualización': '90Hz / 120Hz nativos',
        'Procesador': 'Qualcomm Snapdragon XR2 Gen 2 (doble GPU que Quest 2)',
        'Seguimiento y control': 'Cámaras Passthrough RGB a color + mandos Touch Plus hápticos',
        'Peso y batería': '515 gramos / 2 a 2.5 horas de batería integrada',
        'Biblioteca': 'Catálogo masivo de juegos VR, Xbox Cloud Gaming y SteamVR'
      }
    },
    productoB: {
      nombre: 'Vision Pro (256 GB)',
      marca: 'Apple',
      precio: '$3,499.00 USD',
      imagen: 'assets/images/gaming/apple-vision-pro.jpg',
      specs: {
        'Tecnología de pantalla': 'Micro-OLED dual 4K personalizado (23 millones de píxeles)',
        'Frecuencia de actualización': '90Hz / 96Hz / 100Hz',
        'Procesador': 'Apple M2 (computación) + chip Apple R1 (procesamiento de 12 sensores)',
        'Seguimiento y control': 'Seguimiento ocular ultra-preciso + gestos con los dedos (sin mandos)',
        'Peso y batería': '650 gramos / 2 horas con batería externa conectada',
        'Biblioteca': 'visionOS, multitarea espacial, Mac Virtual Display, fotos y cine 3D'
      }
    },
    ganadores: {
      'Tecnología de pantalla': 'B',
      'Frecuencia de actualización': 'A',
      'Procesador': 'B',
      'Seguimiento y control': 'B',
      'Peso y batería': 'A',
      'Biblioteca': 'A'
    },
    recomendado: 'A',
    veredicto: 'Meta Quest 3 es el visor definitivo para el público general: ofrece realidad mixta a todo color, biblioteca masiva de juegos VR, mandos de precisión y libertad inalámbrica completa por la séptima parte del costo de Apple. Vision Pro es una maravilla de ingeniería óptica con pantallas Micro-OLED inigualables y seguimiento ocular mágico, pero su precio de $3,500 lo orienta a nichos profesionales y desarrolladores.'
  },
  {
    id: 'proyector-inteligente-portatil',
    nombre: 'Proyectores Inteligentes Portátiles para Cine y Gaming',
    seccion: 'gaming',
    icono: '📽️',
    complejidad: 3,
    descripcion: 'Proyectores compactos con sistema operativo inteligente integrado, altavoces 360° y funciones de calibración y auto-nivelación instantánea.',
    productoA: {
      nombre: 'The Freestyle (2ª Gen)',
      marca: 'Samsung',
      precio: '$599.99 USD',
      imagen: 'assets/images/gaming/samsung-the-freestyle-gen-2.jpg',
      specs: {
        'Resolución nativa': 'Full HD 1080p con soporte HDR10+',
        'Brillo de imagen': '230 lúmenes ANSI (550 lúmenes LED)',
        'Tamaño de proyección': '30 a 100 pulgadas con soporte giratorio 180°',
        'Auto-calibración': 'Auto-Focus, Auto-Keystone y Auto-Leveling en cualquier ángulo',
        'Sistema operativo': 'Samsung Tizen OS con Gaming Hub (Xbox Game Pass sin consola)',
        'Audio': 'Altavoz omnidireccional de 360 grados (5W)'
      }
    },
    productoB: {
      nombre: 'Halo+',
      marca: 'XGIMI',
      precio: '$649.00 USD',
      imagen: 'assets/images/gaming/xgimi-halo-plus.jpg',
      specs: {
        'Resolución nativa': 'Full HD 1080p con tecnología DLP (0.33" DMD)',
        'Brillo de imagen': '700 lúmenes ISO (aproximadamente 900 lúmenes ANSI)',
        'Tamaño de proyección': '40 a 200 pulgadas',
        'Auto-calibración': 'ISA (Intelligent Screen Adaptation) con evasión de obstáculos',
        'Sistema operativo': 'Android TV / Google TV con Chromecast integrado',
        'Audio': 'Altavoces duales Harman Kardon de 5W (10W total) con Dolby Audio'
      }
    },
    ganadores: {
      'Resolución nativa': 'empate',
      'Brillo de imagen': 'B',
      'Tamaño de proyección': 'B',
      'Auto-calibración': 'B',
      'Sistema operativo': 'A',
      'Audio': 'B'
    },
    recomendado: 'B',
    veredicto: 'XGIMI Halo+ supera ampliamente a Samsung en el aspecto más crítico de cualquier proyector: el brillo y la potencia lumínica (700 lúmenes ISO frente a solo 230 lúmenes ANSI), además de incluir altavoces Harman Kardon de 10W y batería integrada recargable para usarlo sin enchufes. The Freestyle 2 tiene un diseño de rotación cilíndrico encantador y Tizen Gaming Hub, pero la imagen del Halo+ es mucho más brillante y nítida.'
  }
]);
