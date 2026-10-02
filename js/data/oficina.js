/* js/data/oficina.js — 5 categorías de Impresoras y Oficina Tech */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'impresora-tanque-continuo',
    nombre: 'Impresoras Multifuncionales de Tanque Continuo',
    seccion: 'oficina',
    icono: '🖨️',
    complejidad: 2,
    descripcion: 'Sistemas multifuncionales (impresión, copia y escaneo) con tanques de tinta recargables para volúmenes altos y costo ultra bajo por página.',
    productoA: {
      nombre: 'EcoTank L3250',
      marca: 'Epson',
      precio: '$199.99 USD',
      imagen: 'assets/images/oficina/epson-ecotank-l3250.jpg',
      specs: {
        'Tecnología de impresión': 'Inyección MicroPiezo Heat-Free',
        'Velocidad de impresión': '33 ppm negro / 15 ppm color',
        'Resolución máxima': '5760 x 1440 dpi',
        'Rendimiento tinta inicial': '4,500 págs negro / 7,500 págs color',
        'Conectividad': 'Wi-Fi, Wi-Fi Direct, USB 2.0',
        'Capacidad bandeja': '100 hojas papel común'
      }
    },
    productoB: {
      nombre: 'Smart Tank 580',
      marca: 'HP',
      precio: '$179.99 USD',
      imagen: 'assets/images/oficina/hp-smart-tank-580.jpg',
      specs: {
        'Tecnología de impresión': 'Inyección térmica de tinta HP',
        'Velocidad de impresión': '22 ppm negro / 16 ppm color',
        'Resolución máxima': '4800 x 1200 dpi',
        'Rendimiento tinta inicial': '6,000 págs negro / 6,000 págs color',
        'Conectividad': 'Wi-Fi autorreparable, Bluetooth LE, USB',
        'Capacidad bandeja': '100 hojas papel común'
      }
    },
    ganadores: {
      'Tecnología de impresión': 'A',
      'Velocidad de impresión': 'A',
      'Resolución máxima': 'A',
      'Rendimiento tinta inicial': 'B',
      'Conectividad': 'B',
      'Capacidad bandeja': 'empate'
    },
    recomendado: 'A',
    veredicto: 'Epson EcoTank L3250 destaca por su cabezal MicroPiezo sin calor de mayor longevidad y una resolución superior de 5760x1440 dpi para gráficos y fotos. HP Smart Tank 580 ofrece mayor rendimiento inicial de tinta negra y Wi-Fi autorreparable por $20 menos. Para durabilidad y nitidez en documentos combinados: Epson.'
  },
  {
    id: 'impresora-laser-monocromatica',
    nombre: 'Impresoras Láser Monocromáticas de Alta Eficiencia',
    seccion: 'oficina',
    icono: '📄',
    complejidad: 2,
    descripcion: 'Impresoras láser de texto monocromático de alta velocidad con impresión dúplex automática pensadas para oficinas, despachos y productividad.',
    productoA: {
      nombre: 'HL-L2460DW',
      marca: 'Brother',
      precio: '$159.99 USD',
      imagen: 'assets/images/oficina/brother-hl-l2460dw.jpg',
      specs: {
        'Velocidad de impresión': '36 ppm (páginas por minuto)',
        'Impresión dúplex': 'Automática a doble cara',
        'Resolución de impresión': '2400 x 600 dpi equivalente',
        'Capacidad de bandeja': '250 hojas estándar',
        'Ciclo de trabajo mensual': 'Hasta 35,000 páginas',
        'Conectividad': 'Ethernet Gigabit, Wi-Fi dual, USB'
      }
    },
    productoB: {
      nombre: 'LaserJet Pro M209dw',
      marca: 'HP',
      precio: '$149.99 USD',
      imagen: 'assets/images/oficina/hp-laserjet-pro-m209dw.jpg',
      specs: {
        'Velocidad de impresión': '30 ppm (páginas por minuto)',
        'Impresión dúplex': 'Automática más rápida de su clase',
        'Resolución de impresión': '600 x 600 dpi',
        'Capacidad de bandeja': '150 hojas estándar',
        'Ciclo de trabajo mensual': 'Hasta 20,000 páginas',
        'Conectividad': 'Ethernet, Wi-Fi autorreparable, BLE, USB'
      }
    },
    ganadores: {
      'Velocidad de impresión': 'A',
      'Impresión dúplex': 'empate',
      'Resolución de impresión': 'A',
      'Capacidad de bandeja': 'A',
      'Ciclo de trabajo mensual': 'A',
      'Conectividad': 'A'
    },
    recomendado: 'A',
    veredicto: 'Brother HL-L2460DW supera a la HP en prácticamente todas las métricas de oficina: 36 ppm frente a 30 ppm, bandeja de 250 hojas (100 más que HP) y un ciclo de trabajo mensual mucho más robusto con costos de tóner genérico muy accesibles. HP M209dw es más compacta y cuesta $10 menos, pero para productividad de oficina Brother es la clara ganadora.'
  },
  {
    id: 'impresora-3d-fdm',
    nombre: 'Impresoras 3D de Escritorio FDM de Alta Velocidad',
    seccion: 'oficina',
    icono: '🧊',
    complejidad: 4,
    descripcion: 'Equipos de manufactura aditiva FDM con calibración automática y aceleración activa para prototipado rápido, piezas mecánicas y proyectos de ingeniería.',
    productoA: {
      nombre: 'A1 3D Printer',
      marca: 'Bambu Lab',
      precio: '$399.00 USD',
      imagen: 'assets/images/oficina/bambu-lab-a1.jpg',
      specs: {
        'Volumen de construcción': '256 x 256 x 256 mm',
        'Velocidad máxima': '500 mm/s (aceleración 10,000 mm/s²)',
        'Calibración y nivelación': 'Totalmente automática (compensación de vibración activa)',
        'Temperatura máxima hotend': '300 °C (soporta PLA, PETG, TPU, PVA)',
        'Soporte multi-color': 'Compatible con AMS Lite (4 colores)',
        'Interfaz y cámara': 'Pantalla táctil IPS 3.5" + cámara 1080p con timelapse'
      }
    },
    productoB: {
      nombre: 'Ender-3 V3 KE',
      marca: 'Creality',
      precio: '$279.00 USD',
      imagen: 'assets/images/oficina/creality-ender-3-v3-ke.jpg',
      specs: {
        'Volumen de construcción': '220 x 220 x 240 mm',
        'Velocidad máxima': '500 mm/s (aceleración 8,000 mm/s²)',
        'Calibración y nivelación': 'CR-Touch automática con sensor de presión',
        'Temperatura máxima hotend': '300 °C (extrusor Sprite directo)',
        'Soporte multi-color': 'Mono-filamento (sin sistema multi-color nativo)',
        'Interfaz y cámara': 'Pantalla táctil 4.3" Creality OS (cámara opcional)'
      }
    },
    ganadores: {
      'Volumen de construcción': 'A',
      'Velocidad máxima': 'A',
      'Calibración y nivelación': 'A',
      'Temperatura máxima hotend': 'empate',
      'Soporte multi-color': 'A',
      'Interfaz y cámara': 'A'
    },
    recomendado: 'A',
    veredicto: 'Bambu Lab A1 representa la nueva era de la impresión 3D: calibración de flujo por corrientes de Foucault, compensación activa de resonancia, mayor volumen cúbico y ecosistema multi-color AMS Lite. Creality Ender-3 V3 KE es $120 más económica y excelente para iniciarse, pero Bambu Lab ofrece una experiencia de uso mucho más pulida y sin fricción.'
  },
  {
    id: 'escaner-documental-alta-velocidad',
    nombre: 'Escáneres Documentales Profesionales de Alta Velocidad',
    seccion: 'oficina',
    icono: '🗂️',
    complejidad: 3,
    descripcion: 'Dispositivos de digitalización masiva con alimentador automático de hojas (ADF), escaneo a doble cara de una sola pasada y procesamiento OCR inteligente.',
    productoA: {
      nombre: 'ScanSnap iX1600',
      marca: 'Ricoh',
      precio: '$499.00 USD',
      imagen: 'assets/images/oficina/scansnap-ix1600.jpg',
      specs: {
        'Velocidad de escaneo': '40 ppm / 80 ipm a doble cara',
        'Capacidad alimentador ADF': '50 hojas',
        'Resolución óptica': '600 dpi sensor CIS dual',
        'Pantalla de control': 'Táctil a color de 4.3 pulgadas personalizable',
        'Conectividad': 'Wi-Fi dual band, USB 3.2 Gen 1',
        'Software y nube': 'ScanSnap Home con OCR automático a PDF con búsqueda'
      }
    },
    productoB: {
      nombre: 'WorkForce ES-500W II',
      marca: 'Epson',
      precio: '$399.99 USD',
      imagen: 'assets/images/oficina/epson-workforce-es-500w-ii.jpg',
      specs: {
        'Velocidad de escaneo': '35 ppm / 70 ipm a doble cara',
        'Capacidad alimentador ADF': '50 hojas',
        'Resolución óptica': '600 dpi sensor CIS dual',
        'Pantalla de control': 'Panel con botones LED físicos',
        'Conectividad': 'Wi-Fi, USB 3.0',
        'Software y nube': 'Epson ScanSmart con controladores TWAIN/ISIS'
      }
    },
    ganadores: {
      'Velocidad de escaneo': 'A',
      'Capacidad alimentador ADF': 'empate',
      'Resolución óptica': 'empate',
      'Pantalla de control': 'A',
      'Conectividad': 'A',
      'Software y nube': 'A'
    },
    recomendado: 'A',
    veredicto: 'Ricoh ScanSnap iX1600 es el estándar de oro en escaneo de documentos: 40 ppm/80 ipm, pantalla táctil intuitiva para perfiles directos a la nube sin PC y el mejor software OCR del mercado. Epson WorkForce ES-500W II es $100 más económico e incluye drivers TWAIN para empresas, pero la agilidad del ScanSnap iX1600 justifica plenamente la diferencia.'
  },
  {
    id: 'impresora-termica-etiquetas',
    nombre: 'Impresoras Térmicas de Etiquetas para Logística y Oficina',
    seccion: 'oficina',
    icono: '🏷️',
    complejidad: 2,
    descripcion: 'Impresoras térmicas directas que no requieren tinta ni tóner, ideales para envíos de comercio electrónico, rotulado de carpetas y código de barras.',
    productoA: {
      nombre: 'QL-800 High-Speed',
      marca: 'Brother',
      precio: '$119.99 USD',
      imagen: 'assets/images/oficina/brother-ql-800.jpg',
      specs: {
        'Velocidad de impresión': 'Hasta 93 etiquetas por minuto (148 mm/s)',
        'Ancho máximo de etiqueta': '62 mm (2.4 pulgadas)',
        'Resolución de impresión': '300 x 600 dpi',
        'Impresión a dos colores': 'Negro y Rojo con rollo DK-22251',
        'Cortador automático': 'Guillotina automática integrada',
        'Compatibilidad de consumibles': 'Rollos originales y genéricos abiertos'
      }
    },
    productoB: {
      nombre: 'LabelWriter 550',
      marca: 'Dymo',
      precio: '$129.99 USD',
      imagen: 'assets/images/oficina/dymo-labelwriter-550.jpg',
      specs: {
        'Velocidad de impresión': 'Hasta 62 etiquetas por minuto (110 mm/s)',
        'Ancho máximo de etiqueta': '59 mm (2.3 pulgadas)',
        'Resolución de impresión': '300 x 300 dpi',
        'Impresión a dos colores': 'Monocromático exclusivo',
        'Cortador automático': 'Corte manual por barra dentada',
        'Compatibilidad de consumibles': 'Bloqueo RFID: solo etiquetas originales Dymo'
      }
    },
    ganadores: {
      'Velocidad de impresión': 'A',
      'Ancho máximo de etiqueta': 'A',
      'Resolución de impresión': 'A',
      'Impresión a dos colores': 'A',
      'Cortador automático': 'A',
      'Compatibilidad de consumibles': 'A'
    },
    recomendado: 'A',
    veredicto: 'Brother QL-800 domina contundentemente: es 50% más rápida, tiene cortador automático integrado, permite imprimir en negro y rojo, y no restringe al usuario con chips DRM. Dymo LabelWriter 550 implementa bloqueo RFID que rechaza etiquetas genéricas y carece de corte automático costando $10 más. Para todo uso profesional: Brother.'
  }
]);
