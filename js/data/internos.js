/* js/data/internos.js — 33 categorías de Componentes Internos PC */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'cable-sata',
    nombre: 'Cable SATA',
    seccion: 'internos',
    icono: '🔌',
    complejidad: 1,
    descripcion: 'Cable de datos para conectar unidades de almacenamiento (HDD/SSD SATA) a la placa base. Transfiere datos a hasta 6 Gbps.',
    productoA: {
      nombre: 'SATA III 6Gbps Cable Premium',
      marca: 'Sabrent',
      precio: '$6.99 USD',
      imagen: 'assets/images/cables/sabrent-sata-iii-cable.jpg',
      specs: { 'Velocidad': '6 Gbps', 'Longitud': '18 pulgadas', 'Conector': 'L-shaped + Recto', 'Blindaje': 'Sí', 'Material': 'Nylon trenzado', 'Color': 'Negro' }
    },
    productoB: {
      nombre: 'SATA III Cable Delgado',
      marca: 'StarTech',
      precio: '$5.49 USD',
      imagen: 'assets/images/cables/startech-sata-iii-cable.jpg',
      specs: { 'Velocidad': '6 Gbps', 'Longitud': '12 pulgadas', 'Conector': 'Recto + Recto', 'Blindaje': 'No', 'Material': 'PVC', 'Color': 'Rojo' }
    },
    ganadores: { 'Velocidad': 'empate', 'Longitud': 'A', 'Conector': 'A', 'Blindaje': 'A', 'Material': 'A', 'Color': 'empate' },
    recomendado: 'A',
    veredicto: 'Sabrent ofrece mayor longitud, conector en L para mejor manejo de cables y blindaje anti-interferencias. StarTech es más económico y su color rojo facilita la identificación en el interior del gabinete.'
  },
  {
    id: 'cable-pcie',
    nombre: 'Cable de Alimentación PCIe',
    seccion: 'internos',
    icono: '⚡',
    complejidad: 1,
    descripcion: 'Cable que conecta la fuente de poder a la tarjeta gráfica. Disponible en configuraciones de 6 y 8 pines para diferentes requerimientos de energía.',
    productoA: {
      nombre: 'CableMod Pro ModFlex 8-pin PCIe',
      marca: 'CableMod',
      precio: '$19.99 USD',
      imagen: 'assets/images/cables/cablemod-pro-modflex-pcie-8pin.jpg',
      specs: { 'Tipo': '8-pin (6+2)', 'Longitud': '60 cm', 'Material': 'Sleeved individual', 'Flexibilidad': 'Ultra flexible', 'Conector PSU': '8-pin', 'Compatibilidad': 'Universal' }
    },
    productoB: {
      nombre: 'Corsair Premium Individually Sleeved',
      marca: 'Corsair',
      precio: '$14.99 USD',
      imagen: 'assets/images/cables/corsair-premium-pcie-8pin.png',
      specs: { 'Tipo': '8-pin (6+2)', 'Longitud': '50 cm', 'Material': 'Sleeved individual', 'Flexibilidad': 'Flexible', 'Conector PSU': '8-pin', 'Compatibilidad': 'Corsair PSU' }
    },
    ganadores: { 'Tipo': 'empate', 'Longitud': 'A', 'Material': 'empate', 'Flexibilidad': 'A', 'Conector PSU': 'empate', 'Compatibilidad': 'A' },
    recomendado: 'A',
    veredicto: 'CableMod ofrece mayor longitud y mayor flexibilidad ideal para build con gestión extrema de cables. El cable Corsair es más económico pero limitado a fuentes Corsair, lo que restringe su uso en builds mixtos.'
  },
  {
    id: 'pasta-termica',
    nombre: 'Pasta Térmica',
    seccion: 'internos',
    icono: '🧪',
    complejidad: 1,
    descripcion: 'Compuesto que mejora la transferencia de calor entre el procesador y el disipador. Esencial para mantener temperaturas óptimas de operación.',
    productoA: {
      nombre: 'NT-H1 Thermal Compound',
      marca: 'Noctua',
      precio: '$8.90 USD',
      imagen: 'assets/images/refrigeracion/noctua-nt-h1-10g.jpg',
      specs: { 'Conductividad': '8.5 W/mK', 'Cantidad': '3.5 g', 'Base': 'No-metálica', 'Curing': 'Sin curing', 'Vida útil': '5 años', 'Peligrosidad': 'No conductiva' }
    },
    productoB: {
      nombre: 'MX-6 Thermal Compound',
      marca: 'Arctic',
      precio: '$12.99 USD',
      imagen: 'assets/images/refrigeracion/arctic-mx-6-4g.jpg',
      specs: { 'Conductividad': '12.5 W/mK', 'Cantidad': '4 g', 'Base': 'No-metálica', 'Curing': 'Sin curing', 'Vida útil': '8 años', 'Peligrosidad': 'No conductiva' }
    },
    ganadores: { 'Conductividad': 'B', 'Cantidad': 'B', 'Base': 'empate', 'Curing': 'empate', 'Vida útil': 'B', 'Peligrosidad': 'empate' },
    recomendado: 'B',
    veredicto: 'Arctic MX-6 supera a Noctua NT-H1 en conductividad térmica (12.5 vs 8.5 W/mK) y durabilidad. Noctua NT-H1 sigue siendo excelente opción con precio más bajo y amplia trayectoria comprobada.'
  },
  {
    id: 'disipador-aire',
    nombre: 'Disipador de Calor (Aire)',
    seccion: 'internos',
    icono: '🌀',
    complejidad: 2,
    descripcion: 'Sistema de enfriamiento pasivo con aletas de aluminio/cobre y ventiladores que disipan el calor del procesador sin usar líquido.',
    productoA: {
      nombre: 'NH-D15 Dual Tower',
      marca: 'Noctua',
      precio: '$99.90 USD',
      imagen: 'assets/images/refrigeracion/noctua-nh-d15.jpg',
      specs: { 'Ventiladores': '2x 140mm', 'TDP soportado': '250W+', 'Altura': '165 mm', 'Peso': '1320 g', 'Ruido': '24.6 dBA', 'Sockets': 'LGA1700 / AM5' }
    },
    productoB: {
      nombre: 'Dark Rock Pro 4',
      marca: 'be quiet!',
      precio: '$89.90 USD',
      imagen: 'assets/images/refrigeracion/be-quiet-dark-rock-pro-4.jpg',
      specs: { 'Ventiladores': '2x 120mm + 1x 135mm', 'TDP soportado': '250W', 'Altura': '162.8 mm', 'Peso': '1130 g', 'Ruido': '24.3 dBA', 'Sockets': 'LGA1700 / AM5' }
    },
    ganadores: { 'Ventiladores': 'empate', 'TDP soportado': 'A', 'Altura': 'B', 'Peso': 'B', 'Ruido': 'B', 'Sockets': 'empate' },
    recomendado: 'B',
    veredicto: 'Noctua NH-D15 es el referente absoluto en refrigeración por aire, con mayor TDP soportado. be quiet! Dark Rock Pro 4 es ligeramente más silencioso, más compacto y estéticamente más premium con su acabado negro.'
  },
  {
    id: 'psu-basica',
    nombre: 'Fuente de Poder Básica (PSU)',
    seccion: 'internos',
    icono: '🔋',
    complejidad: 2,
    descripcion: 'Fuente de alimentación no modular de 550W. Convierte la corriente alterna (CA) en corriente continua (CC) para alimentar todos los componentes del PC.',
    productoA: {
      nombre: 'SuperNOVA 550 B5',
      marca: 'EVGA',
      precio: '$49.99 USD',
      imagen: 'assets/images/fuentes/evga-550-b5.png',
      specs: { 'Potencia': '550W', 'Certificación': '80+ Bronze', 'Modularidad': 'No modular', 'PFC': 'Activo', 'Protecciones': 'OVP/OCP/SCP', 'Garantía': '5 años' }
    },
    productoB: {
      nombre: 'CV550 ATX Power Supply',
      marca: 'Corsair',
      precio: '$44.99 USD',
      imagen: 'assets/images/fuentes/corsair-cv550.png',
      specs: { 'Potencia': '550W', 'Certificación': '80+ Bronze', 'Modularidad': 'No modular', 'PFC': 'Activo', 'Protecciones': 'OVP/UVP/OCP/SCP', 'Garantía': '3 años' }
    },
    ganadores: { 'Potencia': 'empate', 'Certificación': 'empate', 'Modularidad': 'empate', 'PFC': 'empate', 'Protecciones': 'B', 'Garantía': 'A' },
    recomendado: 'B',
    veredicto: 'EVGA ofrece mayor garantía (5 vs 3 años), lo cual es importante para una fuente. Corsair incluye más protecciones (UVP adicional) y es ligeramente más económica. Ambas son opciones sólidas para builds de entrada.'
  },
  {
    id: 'psu-modular',
    nombre: 'Fuente de Poder Modular',
    seccion: 'internos',
    icono: '⚡',
    complejidad: 3,
    descripcion: 'Fuente de alimentación totalmente modular de 850W con certificación 80+ Gold. Permite desconectar los cables no utilizados para mejor gestión del cableado.',
    productoA: {
      nombre: 'RM850x ATX 3.0',
      marca: 'Corsair',
      precio: '$139.99 USD',
      imagen: 'assets/images/fuentes/corsair-rm850x-atx3.jpg',
      specs: { 'Potencia': '850W', 'Certificación': '80+ Gold', 'Modularidad': 'Full modular', 'ATX': 'ATX 3.0', 'PCIe 5.0': 'Sí (16-pin)', 'Garantía': '10 años' }
    },
    productoB: {
      nombre: 'Focus GX-850 Gold',
      marca: 'Seasonic',
      precio: '$129.99 USD',
      imagen: 'assets/images/fuentes/seasonic-focus-gx-850.jpg',
      specs: { 'Potencia': '850W', 'Certificación': '80+ Gold', 'Modularidad': 'Full modular', 'ATX': 'ATX 3.0', 'PCIe 5.0': 'Sí (16-pin)', 'Garantía': '12 años' }
    },
    ganadores: { 'Potencia': 'empate', 'Certificación': 'empate', 'Modularidad': 'empate', 'ATX': 'empate', 'PCIe 5.0': 'empate', 'Garantía': 'B' },
    recomendado: 'B',
    veredicto: 'Seasonic ofrece la mayor garantía de la industria: 12 años. Corsair RM850x tiene mejor ecosistema de software y gestión de cables propios. Seasonic fabricó las fuentes de Corsair durante años, por lo que la calidad es prácticamente idéntica.'
  },
  {
    id: 'ram-ddr4',
    nombre: 'Memoria RAM DDR4',
    seccion: 'internos',
    icono: '🧠',
    complejidad: 2,
    descripcion: 'Memoria de acceso aleatorio DDR4 de 16GB. Es la generación estándar de RAM para sistemas de plataformas Intel y AMD de la generación anterior.',
    productoA: {
      nombre: 'Vengeance LPX 16GB DDR4-3200',
      marca: 'Corsair',
      precio: '$32.99 USD',
      imagen: 'assets/images/ram/corsair-vengeance-lpx-ddr4-3200.jpg',
      specs: { 'Capacidad': '16 GB (2x8 GB)', 'Velocidad': '3200 MHz', 'Latencia': 'CL16', 'Voltaje': '1.35V', 'Perfil XMP': 'XMP 2.0', 'Altura': '31.25 mm (Low Profile)' }
    },
    productoB: {
      nombre: 'FURY Beast DDR4-3200',
      marca: 'Kingston',
      precio: '$29.99 USD',
      imagen: 'assets/images/ram/kingston-fury-beast-ddr4-3200.jpg',
      specs: { 'Capacidad': '16 GB (2x8 GB)', 'Velocidad': '3200 MHz', 'Latencia': 'CL16', 'Voltaje': '1.35V', 'Perfil XMP': 'XMP 3.0 / Expo', 'Altura': '34.1 mm' }
    },
    ganadores: { 'Capacidad': 'empate', 'Velocidad': 'empate', 'Latencia': 'empate', 'Voltaje': 'empate', 'Perfil XMP': 'B', 'Altura': 'A' },
    recomendado: 'B',
    veredicto: 'Kingston FURY Beast incluye perfil XMP 3.0/EXPO compatible con más plataformas y es más económico. Corsair Vengeance LPX destaca por su perfil ultrabajo (31mm) ideal para gabinetes compactos o con disipadores de gran tamaño.'
  },
  {
    id: 'ram-ddr5',
    nombre: 'Memoria RAM DDR5',
    seccion: 'internos',
    icono: '🧠',
    complejidad: 3,
    descripcion: 'Memoria DDR5 de última generación con 32GB. Ofrece mayor ancho de banda y eficiencia energética respecto a DDR4. Compatible con Intel 12th/13th/14th gen y AMD Ryzen 7000+.',
    productoA: {
      nombre: 'FURY Beast DDR5-6000 32GB',
      marca: 'Kingston',
      precio: '$79.99 USD',
      imagen: 'assets/images/ram/kingston-fury-beast-ddr5-6000.jpg',
      specs: { 'Capacidad': '32 GB (2x16 GB)', 'Velocidad': '6000 MHz', 'Latencia': 'CL36', 'Voltaje': '1.35V', 'Perfil': 'XMP 3.0 / EXPO', 'ECC': 'On-die ECC' }
    },
    productoB: {
      nombre: 'Dominator Platinum DDR5-6000 32GB',
      marca: 'Corsair',
      precio: '$109.99 USD',
      imagen: 'assets/images/ram/corsair-dominator-platinum-ddr5-6000.jpg',
      specs: { 'Capacidad': '32 GB (2x16 GB)', 'Velocidad': '6000 MHz', 'Latencia': 'CL30', 'Voltaje': '1.40V', 'Perfil': 'XMP 3.0', 'ECC': 'On-die ECC' }
    },
    ganadores: { 'Capacidad': 'empate', 'Velocidad': 'empate', 'Latencia': 'B', 'Voltaje': 'A', 'Perfil': 'A', 'ECC': 'empate' },
    recomendado: 'A',
    veredicto: 'Corsair Dominator Platinum ofrece latencia inferior (CL30 vs CL36) para mejor rendimiento en juegos. Kingston FURY Beast es más asequible, compatible con EXPO para AMD y consume menos voltaje. Para gaming: Corsair. Para presupuesto: Kingston.'
  },
  {
    id: 'hdd-35',
    nombre: 'HDD 3.5" Escritorio',
    seccion: 'internos',
    icono: '💿',
    complejidad: 2,
    descripcion: 'Disco duro mecánico de 3.5 pulgadas y 2TB para almacenamiento masivo en PC de escritorio. Ideal como unidad secundaria de datos.',
    productoA: {
      nombre: 'BarraCuda 2TB 7200RPM',
      marca: 'Seagate',
      precio: '$49.99 USD',
      imagen: 'assets/images/almacenamiento/seagate-barracuda-2tb.jpg',
      specs: { 'Capacidad': '2 TB', 'RPM': '7200 RPM', 'Caché': '256 MB', 'Interfaz': 'SATA III 6Gbps', 'Velocidad lectura': '210 MB/s', 'Garantía': '2 años' }
    },
    productoB: {
      nombre: 'WD Blue 2TB 7200RPM',
      marca: 'Western Digital',
      precio: '$52.99 USD',
      imagen: 'assets/images/almacenamiento/wd-blue-2tb.jpg',
      specs: { 'Capacidad': '2 TB', 'RPM': '7200 RPM', 'Caché': '256 MB', 'Interfaz': 'SATA III 6Gbps', 'Velocidad lectura': '180 MB/s', 'Garantía': '2 años' }
    },
    ganadores: { 'Capacidad': 'empate', 'RPM': 'empate', 'Caché': 'empate', 'Interfaz': 'empate', 'Velocidad lectura': 'A', 'Garantía': 'empate' },
    recomendado: 'A',
    veredicto: 'Seagate BarraCuda supera en velocidad de lectura (210 vs 180 MB/s) y es ligeramente más económico. WD Blue tiene reputación de mayor confiabilidad en estudios de campo. Para almacenamiento multimedia: Seagate. Para archivos críticos: WD.'
  },
  {
    id: 'hdd-25',
    nombre: 'HDD 2.5" Portátil',
    seccion: 'internos',
    icono: '💿',
    complejidad: 2,
    descripcion: 'Disco duro mecánico de 2.5 pulgadas para laptops o como unidad secundaria en PC. Opera a 5400 RPM para balancear consumo y ruido.',
    productoA: {
      nombre: 'BarraCuda 1TB 5400RPM',
      marca: 'Seagate',
      precio: '$39.99 USD',
      imagen: 'assets/images/almacenamiento/seagate-barracuda-1tb-25.jpg',
      specs: { 'Capacidad': '1 TB', 'RPM': '5400 RPM', 'Caché': '128 MB', 'Interfaz': 'SATA III', 'Altura': '7 mm', 'Garantía': '2 años' }
    },
    productoB: {
      nombre: 'WD Blue 1TB 5400RPM',
      marca: 'Western Digital',
      precio: '$37.99 USD',
      imagen: 'assets/images/almacenamiento/wd-blue-1tb-25.png',
      specs: { 'Capacidad': '1 TB', 'RPM': '5400 RPM', 'Caché': '128 MB', 'Interfaz': 'SATA III', 'Altura': '7 mm', 'Garantía': '2 años' }
    },
    ganadores: { 'Capacidad': 'empate', 'RPM': 'empate', 'Caché': 'empate', 'Interfaz': 'empate', 'Altura': 'empate', 'Garantía': 'empate' },
    recomendado: 'B',
    veredicto: 'En esta categoría las especificaciones son prácticamente idénticas. WD Blue tiene ligera ventaja en precio. Seagate puede ofrecer ligeramente más velocidad secuencial en pruebas reales. Ambas son elecciones seguras para laptop o PC de escritorio.'
  },
  {
    id: 'ssd-sata',
    nombre: 'SSD SATA 2.5"',
    seccion: 'internos',
    icono: '⚡',
    complejidad: 3,
    descripcion: 'Unidad de estado sólido SATA de 1TB. Sin partes móviles, mucho más rápido que un HDD. Ideal para el sistema operativo y aplicaciones frecuentes.',
    productoA: {
      nombre: '870 EVO 1TB SATA SSD',
      marca: 'Samsung',
      precio: '$79.99 USD',
      imagen: 'assets/images/almacenamiento/samsung-870-evo-1tb.png',
      specs: { 'Capacidad': '1 TB', 'Lectura': '560 MB/s', 'Escritura': '530 MB/s', 'NAND': 'V-NAND MLC 3-bit', 'DRAM': 'Sí', 'Garantía': '5 años' }
    },
    productoB: {
      nombre: 'A400 1TB SATA SSD',
      marca: 'Kingston',
      precio: '$54.99 USD',
      imagen: 'assets/images/almacenamiento/kingston-a400-1tb.jpg',
      specs: { 'Capacidad': '1 TB', 'Lectura': '500 MB/s', 'Escritura': '450 MB/s', 'NAND': 'TLC 3D NAND', 'DRAM': 'No', 'Garantía': '3 años' }
    },
    ganadores: { 'Capacidad': 'empate', 'Lectura': 'A', 'Escritura': 'A', 'NAND': 'A', 'DRAM': 'A', 'Garantía': 'A' },
    recomendado: 'A',
    veredicto: 'Samsung 870 EVO gana claramente en velocidad, calidad de NAND (MLC), caché DRAM y garantía. Kingston A400 es la opción más asequible que aún supera a cualquier HDD. Para rendimiento: Samsung. Para presupuesto ajustado: Kingston.'
  },
  {
    id: 'ssd-nvme-gen3',
    nombre: 'SSD NVMe M.2 Gen 3',
    seccion: 'internos',
    icono: '🚀',
    complejidad: 4,
    descripcion: 'Unidad NVMe PCIe Gen 3 de 1TB en formato M.2. Hasta 5x más rápido que un SSD SATA. Conecta directamente a la placa base sin cables.',
    productoA: {
      nombre: 'WD Black SN770 1TB NVMe',
      marca: 'Western Digital',
      precio: '$64.99 USD',
      imagen: 'assets/images/almacenamiento/wd-black-sn770-1tb.jpg',
      specs: { 'Capacidad': '1 TB', 'Lectura sec.': '5150 MB/s', 'Escritura sec.': '4900 MB/s', 'IOPS lectura': '740K', 'Interfaz': 'PCIe Gen 4 x4', 'Garantía': '5 años' }
    },
    productoB: {
      nombre: 'FireCuda 520 1TB NVMe',
      marca: 'Seagate',
      precio: '$74.99 USD',
      imagen: 'assets/images/almacenamiento/seagate-firecuda-520-1tb.png',
      specs: { 'Capacidad': '1 TB', 'Lectura sec.': '5000 MB/s', 'Escritura sec.': '4850 MB/s', 'IOPS lectura': '800K', 'Interfaz': 'PCIe Gen 4 x4', 'Garantía': '5 años' }
    },
    ganadores: { 'Capacidad': 'empate', 'Lectura sec.': 'A', 'Escritura sec.': 'A', 'IOPS lectura': 'B', 'Interfaz': 'empate', 'Garantía': 'empate' },
    recomendado: 'A',
    veredicto: 'WD Black SN770 tiene mayor velocidad secuencial y mejor precio. Seagate FireCuda 520 supera en IOPS (operaciones por segundo), ventaja notable en cargas de trabajo intensas. Para gaming y uso general: WD Black SN770.'
  },
  {
    id: 'ssd-nvme-gen4',
    nombre: 'SSD NVMe M.2 Gen 4',
    seccion: 'internos',
    icono: '🚀',
    complejidad: 5,
    descripcion: 'SSD NVMe PCIe Gen 4 de máxima velocidad para entusiastas. Hasta 7000 MB/s de lectura. Requiere placa base compatible con PCIe 4.0.',
    productoA: {
      nombre: '980 Pro 2TB NVMe PCIe 4.0',
      marca: 'Samsung',
      precio: '$139.99 USD',
      imagen: 'assets/images/almacenamiento/samsung-980-pro-2tb.jpg',
      specs: { 'Capacidad': '2 TB', 'Lectura sec.': '7000 MB/s', 'Escritura sec.': '6900 MB/s', 'NAND': 'Samsung V-NAND TLC', 'DRAM': 'Sí', 'Garantía': '5 años' }
    },
    productoB: {
      nombre: 'WD Black SN850X 2TB NVMe',
      marca: 'Western Digital',
      precio: '$149.99 USD',
      imagen: 'assets/images/almacenamiento/wd-black-sn850x-2tb.png',
      specs: { 'Capacidad': '2 TB', 'Lectura sec.': '7300 MB/s', 'Escritura sec.': '7100 MB/s', 'NAND': 'WD 3D NAND TLC', 'DRAM': 'Sí', 'Garantía': '5 años' }
    },
    ganadores: { 'Capacidad': 'empate', 'Lectura sec.': 'B', 'Escritura sec.': 'B', 'NAND': 'empate', 'DRAM': 'empate', 'Garantía': 'empate' },
    recomendado: 'B',
    veredicto: 'WD Black SN850X lidera en velocidades secuenciales y viene con función de GameMode 2.0 optimizada para gaming. Samsung 980 Pro ofrece fiabilidad probada y es ligeramente más económico. Para gaming hardcore: WD SN850X. Para trabajo profesional: Samsung 980 Pro.'
  },
  {
    id: 'tarjeta-wifi',
    nombre: 'Tarjeta de Red WiFi PCIe',
    seccion: 'internos',
    icono: '📶',
    complejidad: 2,
    descripcion: 'Tarjeta de red inalámbrica que se instala en un slot PCIe de la placa base. Añade conectividad WiFi y Bluetooth a escritorios sin conectividad inalámbrica.',
    productoA: {
      nombre: 'PCE-AX58BT WiFi 6 Adapter',
      marca: 'ASUS',
      precio: '$54.99 USD',
      imagen: 'assets/images/conectividad/asus-pce-ax58bt.png',
      specs: { 'Estándar': 'WiFi 6 (802.11ax)', 'Velocidad': '3000 Mbps (2.4+5 GHz)', 'Bluetooth': 'BT 5.0', 'Antenas': '3x externa magnética', 'Bandas': 'Dual Band', 'MU-MIMO': 'Sí' }
    },
    productoB: {
      nombre: 'Archer TX3000E AX3000',
      marca: 'TP-Link',
      precio: '$39.99 USD',
      imagen: 'assets/images/conectividad/tplink-archer-tx3000e.jpg',
      specs: { 'Estándar': 'WiFi 6 (802.11ax)', 'Velocidad': '2400 Mbps (5GHz) + 574 Mbps (2.4GHz)', 'Bluetooth': 'BT 5.0', 'Antenas': '2x externa', 'Bandas': 'Dual Band', 'MU-MIMO': 'Sí' }
    },
    ganadores: { 'Estándar': 'empate', 'Velocidad': 'A', 'Bluetooth': 'empate', 'Antenas': 'A', 'Bandas': 'empate', 'MU-MIMO': 'empate' },
    recomendado: 'A',
    veredicto: 'ASUS PCE-AX58BT ofrece mayor velocidad total (3000 vs ~3000 Mbps) y una antena adicional para mejor cobertura. TP-Link Archer TX3000E es más económica y suficiente para la mayoría. Ambas ofrecen WiFi 6 y BT 5.0.'
  },
  {
    id: 'tarjeta-ethernet',
    nombre: 'Tarjeta de Red Ethernet PCIe',
    seccion: 'internos',
    icono: '🔗',
    complejidad: 2,
    descripcion: 'Tarjeta de red cableada de alta velocidad con puerto 10GbE o 2.5GbE. Para usuarios que requieren máximo ancho de banda en conexiones LAN.',
    productoA: {
      nombre: 'XG-C100C 10G Network Adapter',
      marca: 'ASUS',
      precio: '$79.99 USD',
      imagen: 'assets/images/conectividad/asus-xg-c100c-10g.png',
      specs: { 'Velocidad': '10 Gbps', 'Conector': 'RJ-45', 'Interfaz': 'PCIe 2.0 x4', 'Chipset': 'Aquantia AQC107', 'OS': 'Win 10/11 / Linux', 'Jumbo Frame': '9K' }
    },
    productoB: {
      nombre: '2.5G PCIe Network Adapter',
      marca: 'Intel',
      precio: '$29.99 USD',
      imagen: 'assets/images/conectividad/intel-i225v-25g-nic.jpg',
      specs: { 'Velocidad': '2.5 Gbps', 'Conector': 'RJ-45', 'Interfaz': 'PCIe 2.0 x1', 'Chipset': 'Intel I225-V', 'OS': 'Win 10/11 / Linux', 'Jumbo Frame': '9.5K' }
    },
    ganadores: { 'Velocidad': 'A', 'Conector': 'empate', 'Interfaz': 'A', 'Chipset': 'empate', 'OS': 'empate', 'Jumbo Frame': 'B' },
    recomendado: 'A',
    veredicto: 'ASUS XG-C100C ofrece 10 Gbps para NAS y servidores domésticos de alta velocidad pero a mayor costo. Intel 2.5G es ideal si tu router o switch soporta 2.5GbE, precio muy accesible. La mayoría de usuarios domésticos no necesita más de 2.5 Gbps.'
  },
  {
    id: 'tarjeta-sonido',
    nombre: 'Tarjeta de Sonido Interna',
    seccion: 'internos',
    icono: '🎵',
    complejidad: 3,
    descripcion: 'Tarjeta de audio PCIe que supera al audio integrado de la placa base. Para gaming de alto nivel o producción de audio de calidad profesional.',
    productoA: {
      nombre: 'Sound Blaster AE-9',
      marca: 'Creative',
      precio: '$189.99 USD',
      imagen: 'assets/images/audio/creative-sound-blaster-ae-9.png',
      specs: { 'DAC': 'ESS SABRE32 Ultra', 'SNR': '130 dB', 'Canales': '7.1 PCM virtual', 'Auriculares': 'Amp. valvular', 'Micrófono': 'Módulo externo', 'Dolby': 'Atmos ready' }
    },
    productoB: {
      nombre: 'Xonar AE PCIe Gaming Audio',
      marca: 'ASUS',
      precio: '$69.99 USD',
      imagen: 'assets/images/audio/asus-xonar-ae.png',
      specs: { 'DAC': 'ESS ES9023P', 'SNR': '110 dB', 'Canales': '7.1 PCM', 'Auriculares': 'Amp. de estado sólido', 'Micrófono': 'Entrada integrada', 'Dolby': 'Dolby Digital Live' }
    },
    ganadores: { 'DAC': 'A', 'SNR': 'A', 'Canales': 'empate', 'Auriculares': 'A', 'Micrófono': 'B', 'Dolby': 'B' },
    recomendado: 'A',
    veredicto: 'Creative AE-9 es la tarjeta de sonido PCIe más premium del mercado con amplificador valvular y DAC Elite. ASUS Xonar AE ofrece sonido excelente para gaming con Dolby Digital Live a un precio accesible. Para audiofilia: Creative. Para gaming: ASUS.'
  },
  {
    id: 'lector-tarjetas',
    nombre: 'Lector de Tarjetas Interno',
    seccion: 'internos',
    icono: '💳',
    complejidad: 1,
    descripcion: 'Lector de tarjetas de memoria que se instala en una bahía de 3.5" del gabinete. Compatible con SD, microSD, CF, MS y más formatos.',
    productoA: {
      nombre: 'USB 3.0 3.5" Internal Card Reader',
      marca: 'Sabrent',
      precio: '$11.99 USD',
      imagen: 'assets/images/almacenamiento/sabrent-internal-card-reader.jpg',
      specs: { 'Formatos': 'SD / microSD / CF / MS', 'Interfaz': 'USB 3.0 interna', 'Velocidad': 'Hasta 5 Gbps', 'Bahía': '3.5 pulgadas', 'Slots': '6 slots', 'LED': 'Indicador actividad' }
    },
    productoB: {
      nombre: '3.5" Internal USB 3.0 Hub Reader',
      marca: 'StarTech',
      precio: '$14.99 USD',
      imagen: 'assets/images/almacenamiento/startech-internal-card-reader.jpg',
      specs: { 'Formatos': 'SD / microSD / CF / MS / M2', 'Interfaz': 'USB 3.0 interna', 'Velocidad': 'Hasta 5 Gbps', 'Bahía': '3.5 pulgadas', 'Slots': '8 slots', 'LED': 'Sin indicador' }
    },
    ganadores: { 'Formatos': 'B', 'Interfaz': 'empate', 'Velocidad': 'empate', 'Bahía': 'empate', 'Slots': 'B', 'LED': 'A' },
    recomendado: 'B',
    veredicto: 'StarTech ofrece más slots (8 vs 6) y compatibilidad con M2 adicional. Sabrent es más económico y tiene LED de actividad para saber cuándo está transfiriendo. Ambos son opciones sólidas; la elección depende de cuántos formatos necesitas.'
  },
  {
    id: 'unidad-optica',
    nombre: 'Unidad Óptica (Blu-ray)',
    seccion: 'internos',
    icono: '💿',
    complejidad: 2,
    descripcion: 'Unidad óptica interna capaz de leer y grabar discos Blu-ray, DVD y CD. Para usuarios que aún manejan medios físicos o necesitan grabar discos.',
    productoA: {
      nombre: 'BW-16D1HT Blu-ray Writer',
      marca: 'ASUS',
      precio: '$69.99 USD',
      imagen: 'assets/images/almacenamiento/asus-bw-16d1ht-bluray.png',
      specs: { 'Lectura BD': '16x', 'Escritura BD': '16x', 'Escritura DVD': '16x', 'M-Disc': 'Sí', 'Compatibilidad': 'UHD friendly', 'Buffer': '4 MB' }
    },
    productoB: {
      nombre: 'BDR-212V BD-R Writer',
      marca: 'Pioneer',
      precio: '$79.99 USD',
      imagen: 'assets/images/almacenamiento/pioneer-bdr-212v-bluray.jpg',
      specs: { 'Lectura BD': '16x', 'Escritura BD': '16x', 'Escritura DVD': '16x', 'M-Disc': 'Sí', 'Compatibilidad': 'Ultra HD Blu-ray', 'Buffer': '6 MB' }
    },
    ganadores: { 'Lectura BD': 'empate', 'Escritura BD': 'empate', 'Escritura DVD': 'empate', 'M-Disc': 'empate', 'Compatibilidad': 'B', 'Buffer': 'B' },
    recomendado: 'B',
    veredicto: 'Pioneer BDR-212V tiene buffer mayor (6MB) y mejor compatibilidad con Ultra HD Blu-ray oficial. ASUS BW-16D1HT es más económico y también compatible con UHD. Pioneer es la opción preferida de videófilos por su mayor calidad de lectura en discos complejos.'
  },
  {
    id: 'motherboard-amd-b',
    nombre: 'Placa Base AMD B-Series (Gama Media)',
    seccion: 'internos',
    icono: '🖥️',
    complejidad: 4,
    descripcion: 'Placa base para procesadores AMD Ryzen con socket AM5. Chipset B650 de gama media con soporte DDR5, PCIe 5.0 parcial y WiFi 6E.',
    productoA: {
      nombre: 'ROG Strix B650-A Gaming WiFi',
      marca: 'ASUS',
      precio: '$229.99 USD',
      imagen: 'assets/images/motherboards/asus-rog-strix-b650-a.png',
      specs: { 'Socket': 'AM5', 'Chipset': 'B650', 'Slots RAM': '4x DDR5 (hasta 128GB)', 'PCIe': 'Gen 5 x16 + Gen 4 x4', 'USB': 'USB4 + USB 3.2 Gen 2x2', 'WiFi': 'WiFi 6E' }
    },
    productoB: {
      nombre: 'MAG B650 Tomahawk WiFi',
      marca: 'MSI',
      precio: '$199.99 USD',
      imagen: 'assets/images/motherboards/msi-mag-b650-tomahawk.png',
      specs: { 'Socket': 'AM5', 'Chipset': 'B650', 'Slots RAM': '4x DDR5 (hasta 128GB)', 'PCIe': 'Gen 5 x16 + Gen 4 x4', 'USB': 'USB 3.2 Gen 2x2', 'WiFi': 'WiFi 6E' }
    },
    ganadores: { 'Socket': 'empate', 'Chipset': 'empate', 'Slots RAM': 'empate', 'PCIe': 'empate', 'USB': 'A', 'WiFi': 'empate' },
    recomendado: 'A',
    veredicto: 'ASUS ROG Strix B650-A incluye USB4 (hasta 40Gbps) y mejor software de gestión AI Overclocking. MSI MAG B650 Tomahawk es más asequible y ofrece excelentes fases de alimentación para overclocking. Para entusiastas: ASUS. Para relación calidad-precio: MSI.'
  },
  {
    id: 'motherboard-amd-x',
    nombre: 'Placa Base AMD X-Series (Gama Alta)',
    seccion: 'internos',
    icono: '🖥️',
    complejidad: 5,
    descripcion: 'Placa base premium X670E para AMD Ryzen 7000+. PCIe 5.0 completo en todos los slots principales, máximo soporte de overclocking y conectividad.',
    productoA: {
      nombre: 'ROG Crosshair X670E Hero',
      marca: 'ASUS',
      precio: '$449.99 USD',
      imagen: 'assets/images/motherboards/asus-rog-crosshair-x670e-hero.png',
      specs: { 'Socket': 'AM5', 'Chipset': 'X670E', 'Fases VRM': '18+2 teamed', 'PCIe': 'Gen 5 x16 + x16 (bifurcable)', 'USB': 'USB4 Gen 3x2 (80Gbps)', 'WiFi': 'WiFi 6E (3×3)' }
    },
    productoB: {
      nombre: 'X670E Aorus Master',
      marca: 'Gigabyte',
      precio: '$399.99 USD',
      imagen: 'assets/images/motherboards/gigabyte-x670e-aorus-master.jpg',
      specs: { 'Socket': 'AM5', 'Chipset': 'X670E', 'Fases VRM': '16+2+2 direct', 'PCIe': 'Gen 5 x16 + x16 (bifurcable)', 'USB': 'USB4 Gen 2x2 (40Gbps)', 'WiFi': 'WiFi 6E (2×2)' }
    },
    ganadores: { 'Socket': 'empate', 'Chipset': 'empate', 'Fases VRM': 'A', 'PCIe': 'empate', 'USB': 'A', 'WiFi': 'A' },
    recomendado: 'A',
    veredicto: 'ASUS ROG Crosshair X670E Hero ofrece mayor USB4 (80Gbps vs 40Gbps), VRM superior y WiFi de tres antenas. Gigabyte X670E Aorus Master es $50 más económico con funcionalidades muy similares. Ambas son placas de entusiasta de primer nivel.'
  },
  {
    id: 'motherboard-intel-b',
    nombre: 'Placa Base Intel B-Series (Gama Media)',
    seccion: 'internos',
    icono: '🖥️',
    complejidad: 4,
    descripcion: 'Placa base para procesadores Intel Core de 13ª y 14ª generación con socket LGA1700. Chipset B760 con soporte DDR5 y PCIe 4.0.',
    productoA: {
      nombre: 'Prime B760M-A WiFi D4',
      marca: 'ASUS',
      precio: '$139.99 USD',
      imagen: 'assets/images/motherboards/asus-prime-b760m-a-wifi-d4.png',
      specs: { 'Socket': 'LGA1700', 'Chipset': 'B760', 'Formato': 'Micro-ATX', 'RAM': 'DDR4 hasta 128GB', 'PCIe': 'Gen 4 x16', 'WiFi': 'WiFi 6' }
    },
    productoB: {
      nombre: 'PRO B760M-A WiFi DDR5',
      marca: 'MSI',
      precio: '$149.99 USD',
      imagen: 'assets/images/motherboards/msi-pro-b760m-a-wifi-ddr5.png',
      specs: { 'Socket': 'LGA1700', 'Chipset': 'B760', 'Formato': 'Micro-ATX', 'RAM': 'DDR5 hasta 96GB', 'PCIe': 'Gen 4 x16', 'WiFi': 'WiFi 6E' }
    },
    ganadores: { 'Socket': 'empate', 'Chipset': 'empate', 'Formato': 'empate', 'RAM': 'A', 'PCIe': 'empate', 'WiFi': 'B' },
    recomendado: 'A',
    veredicto: 'ASUS Prime B760M-A con DDR4 permite usar RAM más económica con mayor capacidad (128GB). MSI PRO B760M-A DDR5 incluye WiFi 6E y es la opción orientada al futuro. Elige según si tienes DDR4 existente (ASUS) o empiezas desde cero (MSI DDR5).'
  },
  {
    id: 'motherboard-intel-z',
    nombre: 'Placa Base Intel Z-Series (Gama Alta)',
    seccion: 'internos',
    icono: '🖥️',
    complejidad: 5,
    descripcion: 'Placa base Intel Z790 de alto rendimiento con soporte de overclocking desbloqueado para CPUs Core i9/i7/i5-K. PCIe 5.0, DDR5 y máxima conectividad.',
    productoA: {
      nombre: 'ROG Maximus Z790 Hero',
      marca: 'ASUS',
      precio: '$629.99 USD',
      imagen: 'assets/images/motherboards/asus-rog-maximus-z790-hero.png',
      specs: { 'Socket': 'LGA1700', 'Chipset': 'Z790', 'VRM': '24+1 power stages', 'M.2 Slots': '5x M.2 PCIe 4.0/5.0', 'USB': 'Thunderbolt 4 + USB4', 'WiFi': 'WiFi 6E + BT 5.3' }
    },
    productoB: {
      nombre: 'MEG Z790 ACE MAX',
      marca: 'MSI',
      precio: '$549.99 USD',
      imagen: 'assets/images/motherboards/msi-meg-z790-ace-max.png',
      specs: { 'Socket': 'LGA1700', 'Chipset': 'Z790', 'VRM': '22+1+1 power stages', 'M.2 Slots': '5x M.2 PCIe 4.0', 'USB': 'Thunderbolt 4 + USB 3.2', 'WiFi': 'WiFi 6E + BT 5.3' }
    },
    ganadores: { 'Socket': 'empate', 'Chipset': 'empate', 'VRM': 'A', 'M.2 Slots': 'A', 'USB': 'A', 'WiFi': 'empate' },
    recomendado: 'A',
    veredicto: 'ASUS ROG Maximus Z790 Hero tiene VRM superior (24+1), un slot M.2 PCIe 5.0 adicional y USB4 integrado. MSI MEG Z790 ACE es $80 más económico y ofrece funcionalidades muy competitivas. Ambas son placas de lujo orientadas a overclockers y entusiastas.'
  },
  {
    id: 'cpu-intel-i5',
    nombre: 'CPU Gama Media — Rendimiento',
    seccion: 'internos',
    icono: '⚙️',
    complejidad: 4,
    descripcion: 'Procesadores de gama media para gaming y trabajo. Compara rendimiento multinúcleo, eficiencia y plataforma entre Intel y AMD.',
    productoA: {
      nombre: 'Core i5-13600K',
      marca: 'Intel',
      precio: '$219.99 USD',
      imagen: 'assets/images/procesadores/intel-core-i5.png',
      specs: { 'Núcleos': '14 (6P + 8E)', 'Hilos': '20', 'Boost frecuencia': '5.1 GHz', 'TDP': '125W (PL2: 253W)', 'Caché L3': '24 MB', 'Socket': 'LGA1700' }
    },
    productoB: {
      nombre: 'Ryzen 5 7600X',
      marca: 'AMD',
      precio: '$199.99 USD',
      imagen: 'assets/images/procesadores/amd-ryzen-5-7600x.jpg',
      specs: { 'Núcleos': '6', 'Hilos': '12', 'Boost frecuencia': '5.3 GHz', 'TDP': '105W', 'Caché L3': '32 MB', 'Socket': 'AM5' }
    },
    ganadores: { 'Núcleos': 'A', 'Hilos': 'A', 'Boost frecuencia': 'B', 'TDP': 'B', 'Caché L3': 'B', 'Socket': 'empate' },
    recomendado: 'A',
    veredicto: 'Intel Core i5-13600K ofrece más núcleos e hilos para tareas mixtas y creación de contenido. AMD Ryzen 5 7600X consume menos bajo carga y ofrece más caché por menor precio. Para productividad y multitarea: Intel. Para una plataforma AM5 eficiente: AMD.'
  },
  {
    id: 'cpu-intel-i9',
    nombre: 'CPU Gama Alta — Workstation',
    seccion: 'internos',
    icono: '⚙️',
    complejidad: 5,
    descripcion: 'Procesadores de alto rendimiento para workstations, creación de contenido y gaming exigente. Compara potencia multinúcleo, caché y consumo entre Intel y AMD.',
    productoA: {
      nombre: 'Core i9-13900K',
      marca: 'Intel',
      precio: '$399.99 USD',
      imagen: 'assets/images/procesadores/intel-core-i9.png',
      specs: { 'Núcleos': '24 (8P + 16E)', 'Hilos': '32', 'Boost frecuencia': '5.8 GHz', 'TDP': '125W (PL2: 253W)', 'Caché L3': '36 MB', 'Memoria': 'DDR4/DDR5' }
    },
    productoB: {
      nombre: 'Ryzen 9 7950X',
      marca: 'AMD',
      precio: '$549.99 USD',
      imagen: 'assets/images/procesadores/amd-ryzen-9-7950x.jpg',
      specs: { 'Núcleos': '16', 'Hilos': '32', 'Boost frecuencia': '5.7 GHz', 'TDP': '170W', 'Caché L3': '64 MB', 'Memoria': 'DDR5' }
    },
    ganadores: { 'Núcleos': 'A', 'Hilos': 'empate', 'Boost frecuencia': 'A', 'TDP': 'A', 'Caché L3': 'B', 'Memoria': 'A' },
    recomendado: 'A',
    veredicto: 'Intel Core i9-13900K combina más núcleos, mayor frecuencia máxima y menor TDP nominal. AMD Ryzen 9 7950X destaca por sus 64 MB de caché L3 y plataforma AM5. Para una workstation equilibrada con memoria DDR4 o DDR5: Intel. Para cargas sensibles a caché y AM5: AMD.'
  },
  {
    id: 'cpu-amd-r5',
    nombre: 'CPU Gama Media — Eficiencia',
    seccion: 'internos',
    icono: '⚙️',
    complejidad: 4,
    descripcion: 'Procesadores de gama media enfocados en eficiencia y gaming. Compara una plataforma AMD Zen 5 con un Intel Core i5 de mayor número de núcleos.',
    productoA: {
      nombre: 'Ryzen 5 9600X',
      marca: 'AMD',
      precio: '$279.99 USD',
      imagen: 'assets/images/procesadores/amd-ryzen-5-9600x.jpg',
      specs: { 'Núcleos': '6', 'Hilos': '12', 'Boost frecuencia': '5.4 GHz', 'TDP': '65W', 'Caché L3': '32 MB', 'Socket': 'AM5' }
    },
    productoB: {
      nombre: 'Core i5-14600K',
      marca: 'Intel',
      precio: '$239.99 USD',
      imagen: 'assets/images/procesadores/intel-core-i5.png',
      specs: { 'Núcleos': '14 (6P + 8E)', 'Hilos': '20', 'Boost frecuencia': '5.3 GHz', 'TDP': '125W (PL2: 253W)', 'Caché L3': '24 MB', 'Socket': 'LGA1700' }
    },
    ganadores: { 'Núcleos': 'B', 'Hilos': 'B', 'Boost frecuencia': 'A', 'TDP': 'A', 'Caché L3': 'A', 'Socket': 'empate' },
    recomendado: 'A',
    veredicto: 'AMD Ryzen 5 9600X ofrece una frecuencia ligeramente superior, más caché L3 y un TDP de solo 65 W. Intel Core i5-14600K aporta más núcleos e hilos para cargas paralelas. Para un equipo eficiente y compacto: AMD. Para multitarea intensiva: Intel.'
  },
  {
    id: 'cpu-amd-r9',
    nombre: 'CPU Gama Alta — Máximo Rendimiento',
    seccion: 'internos',
    icono: '⚙️',
    complejidad: 5,
    descripcion: 'Procesadores de máxima gama para renderizado, streaming y workstations. Compara la arquitectura Ryzen 9 con Intel Core i9.',
    productoA: {
      nombre: 'Ryzen 9 9950X',
      marca: 'AMD',
      precio: '$649.99 USD',
      imagen: 'assets/images/procesadores/amd-ryzen-9-9950x.jpg',
      specs: { 'Núcleos': '16', 'Hilos': '32', 'Boost frecuencia': '5.7 GHz', 'TDP': '170W', 'Caché L3': '64 MB', 'Socket': 'AM5' }
    },
    productoB: {
      nombre: 'Core i9-14900K',
      marca: 'Intel',
      precio: '$439.99 USD',
      imagen: 'assets/images/procesadores/intel-core-i9.png',
      specs: { 'Núcleos': '24 (8P + 16E)', 'Hilos': '32', 'Boost frecuencia': '6.0 GHz', 'TDP': '125W (PL2: 253W)', 'Caché L3': '36 MB', 'Socket': 'LGA1700' }
    },
    ganadores: { 'Núcleos': 'B', 'Hilos': 'empate', 'Boost frecuencia': 'B', 'TDP': 'B', 'Caché L3': 'A', 'Socket': 'empate' },
    recomendado: 'B',
    veredicto: 'Intel Core i9-14900K ofrece más núcleos, mayor frecuencia de boost y menor TDP nominal a un precio inferior. AMD Ryzen 9 9950X ofrece el doble de caché L3 y la plataforma AM5. Para rendimiento general y valor: Intel. Para flujos de trabajo que se benefician de mucha caché: AMD.'
  },
  {
    id: 'gpu-baja',
    nombre: 'GPU Gama Baja',
    seccion: 'internos',
    icono: '🎮',
    complejidad: 3,
    descripcion: 'Tarjeta gráfica de entrada para gaming 1080p en high settings. Ideal para usuarios que inician en PC gaming con presupuesto limitado.',
    productoA: {
      nombre: 'GeForce RTX 4060',
      marca: 'NVIDIA',
      precio: '$299.99 USD',
      imagen: 'assets/images/gpu/nvidia-geforce-rtx-4060.jpg',
      specs: { 'VRAM': '8 GB GDDR6', 'Núcleos de procesamiento': '3072 (CUDA)', 'Rendimiento 1080p': 'Alto', 'Tecnología de escalado': 'DLSS 3 (Frame Gen)', 'TDP': '115W', 'Ray Tracing': 'Generación 3' }
    },
    productoB: {
      nombre: 'Radeon RX 7600',
      marca: 'AMD',
      precio: '$269.99 USD',
      imagen: 'assets/images/gpu/amd-radeon-rx-7600.jpg',
      specs: { 'VRAM': '8 GB GDDR6', 'Núcleos de procesamiento': '2048 (Stream Processors)', 'Rendimiento 1080p': 'Alto', 'Tecnología de escalado': 'FSR 3.0', 'TDP': '165W', 'Ray Tracing': 'Generación 2' }
    },
    ganadores: { 'VRAM': 'empate', 'Núcleos de procesamiento': 'A', 'Rendimiento 1080p': 'A', 'Tecnología de escalado': 'A', 'TDP': 'A', 'Ray Tracing': 'A' },
    recomendado: 'A',
    veredicto: 'NVIDIA RTX 4060 gana en eficiencia (115W vs 165W), DLSS 3 con Frame Generation y Ray Tracing de generación 3. AMD RX 7600 es $30 más barata y ofrece rendimiento rasterización comparable. Para Ray Tracing y eficiencia: NVIDIA. Para presupuesto: AMD.'
  },
  {
    id: 'gpu-media',
    nombre: 'GPU Gama Media',
    seccion: 'internos',
    icono: '🎮',
    complejidad: 4,
    descripcion: 'Tarjeta gráfica de gama media para gaming 1440p fluido. El punto óptimo entre precio y rendimiento para la mayoría de los gamers.',
    productoA: {
      nombre: 'GeForce RTX 4070 Super',
      marca: 'NVIDIA',
      precio: '$599.99 USD',
      imagen: 'assets/images/gpu/nvidia-geforce-rtx-4070-super.jpg',
      specs: { 'VRAM': '12 GB GDDR6X', 'Núcleos de procesamiento': '7168 (CUDA)', 'Rendimiento 1440p': 'Muy Alto', 'Tecnología de escalado': 'DLSS 3.5', 'TDP': '220W', 'Ancho bus mem.': '192-bit' }
    },
    productoB: {
      nombre: 'Radeon RX 7800 XT',
      marca: 'AMD',
      precio: '$499.99 USD',
      imagen: 'assets/images/gpu/amd-radeon-rx-7800-xt.jpg',
      specs: { 'VRAM': '16 GB GDDR6', 'Núcleos de procesamiento': '3840 (Stream Processors)', 'Rendimiento 1440p': 'Muy Alto', 'Tecnología de escalado': 'FSR 3.1', 'TDP': '263W', 'Ancho bus mem.': '256-bit' }
    },
    ganadores: { 'VRAM': 'B', 'Núcleos de procesamiento': 'A', 'Rendimiento 1440p': 'A', 'Tecnología de escalado': 'A', 'TDP': 'A', 'Ancho bus mem.': 'B' },
    recomendado: 'A',
    veredicto: 'AMD RX 7800 XT ofrece 4GB más de VRAM y bus de memoria más ancho por $100 menos. NVIDIA RTX 4070 Super supera en rasterización, DLSS 3.5 y eficiencia energética. Para VRAM y precio: AMD. Para DLSS y calidad de imagen overall: NVIDIA.'
  },
  {
    id: 'gpu-alta',
    nombre: 'GPU Gama Alta',
    seccion: 'internos',
    icono: '🎮',
    complejidad: 5,
    descripcion: 'La tarjeta gráfica más potente del mercado para gaming 4K y ray tracing extremo. Para entusiastas que no aceptan compromisos en rendimiento.',
    productoA: {
      nombre: 'GeForce RTX 4090',
      marca: 'NVIDIA',
      precio: '$1,599.99 USD',
      imagen: 'assets/images/gpu/nvidia-geforce-rtx-4090.jpg',
      specs: { 'VRAM': '24 GB GDDR6X', 'Núcleos de procesamiento': '16384 (CUDA)', 'Rendimiento 4K': 'Excepcional', 'Tecnología de escalado': 'DLSS 3.5 + Frame Gen', 'TDP': '450W', 'Ancho bus mem.': '384-bit' }
    },
    productoB: {
      nombre: 'Radeon RX 7900 XTX',
      marca: 'AMD',
      precio: '$999.99 USD',
      imagen: 'assets/images/gpu/amd-radeon-rx-7900-xtx.jpg',
      specs: { 'VRAM': '24 GB GDDR6', 'Núcleos de procesamiento': '12288 (Stream Processors)', 'Rendimiento 4K': 'Muy Alto', 'Tecnología de escalado': 'FSR 3.1', 'TDP': '355W', 'Ancho bus mem.': '384-bit' }
    },
    ganadores: { 'VRAM': 'A', 'Núcleos de procesamiento': 'A', 'Rendimiento 4K': 'A', 'Tecnología de escalado': 'A', 'TDP': 'B', 'Ancho bus mem.': 'empate' },
    recomendado: 'A',
    veredicto: 'NVIDIA RTX 4090 domina en rendimiento 4K con RT activo, DLSS 3.5 con Frame Generation. AMD RX 7900 XTX es $600 más barata, más eficiente (355W vs 450W) y excelente para 4K sin RT. Para el máximo absoluto: RTX 4090. Para valor flagship: RX 7900 XTX.'
  },
  {
    id: 'refrigeracion-aio-240',
    nombre: 'Refrigeración Líquida AIO 240mm',
    seccion: 'internos',
    icono: '❄️',
    complejidad: 4,
    descripcion: 'Sistema de refrigeración líquida todo-en-uno (AIO) con radiador de 240mm. Mejor rendimiento térmico que aire para CPUs de gama alta.',
    productoA: {
      nombre: 'H100i Elite Capellix XT',
      marca: 'Corsair',
      precio: '$129.99 USD',
      imagen: 'assets/images/refrigeracion/corsair-h100i-elite-capellix-xt.png',
      specs: { 'Radiador': '240mm', 'Ventiladores': '2x 120mm RGB', 'Bomba': 'Ceramic bearing', 'RGB': 'iCUE 33 LEDs', 'Control': 'Software iCUE', 'Compatibilidad': 'AM5 / LGA1700' }
    },
    productoB: {
      nombre: 'Kraken X53 240mm AIO',
      marca: 'NZXT',
      precio: '$109.99 USD',
      imagen: 'assets/images/refrigeracion/nzxt-kraken-x53.jpg',
      specs: { 'Radiador': '240mm', 'Ventiladores': '2x 120mm', 'Bomba': 'Magnetic bearing', 'RGB': 'LCD pantalla cabezal', 'Control': 'Software CAM', 'Compatibilidad': 'AM5 / LGA1700' }
    },
    ganadores: { 'Radiador': 'empate', 'Ventiladores': 'A', 'Bomba': 'B', 'RGB': 'B', 'Control': 'empate', 'Compatibilidad': 'empate' },
    recomendado: 'B',
    veredicto: 'NZXT Kraken X53 tiene la pantalla LCD en el cabezal (muestra temperatura o GIFs) y bomba de rodamiento magnético más duradera. Corsair H100i Elite tiene ventiladores RGB más vistosos integrados con iCUE. Para pantalla LCD: NZXT. Para RGB gaming: Corsair.'
  },
  {
    id: 'refrigeracion-aio-360',
    nombre: 'Refrigeración Líquida AIO 360mm',
    seccion: 'internos',
    icono: '❄️',
    complejidad: 5,
    descripcion: 'AIO de máxima capacidad con radiador de 360mm. Para CPUs de alto TDP como Core i9 y Ryzen 9. Mayor superficie de disipación para temperaturas más bajas.',
    productoA: {
      nombre: 'H170i Elite LCD XT',
      marca: 'Corsair',
      precio: '$199.99 USD',
      imagen: 'assets/images/refrigeracion/corsair-h170i-elite-lcd-xt.png',
      specs: { 'Radiador': '360mm', 'Ventiladores': '3x 120mm PWM RGB', 'Cabezal': 'Pantalla LCD 2.1"', 'Bomba': 'Ceramic', 'Ruido máx.': '37.5 dBA', 'Garantía': '5 años' }
    },
    productoB: {
      nombre: 'Kraken X73 360mm AIO',
      marca: 'NZXT',
      precio: '$179.99 USD',
      imagen: 'assets/images/refrigeracion/nzxt-kraken-x73.jpg',
      specs: { 'Radiador': '360mm', 'Ventiladores': '3x 120mm PWM', 'Cabezal': 'Pantalla LCD 1.54"', 'Bomba': 'Magnetic', 'Ruido máx.': '36 dBA', 'Garantía': '6 años' }
    },
    ganadores: { 'Radiador': 'empate', 'Ventiladores': 'A', 'Cabezal': 'A', 'Bomba': 'B', 'Ruido máx.': 'B', 'Garantía': 'B' },
    recomendado: 'B',
    veredicto: 'NZXT Kraken X73 es más silencioso, tiene mejor garantía (6 años) y bomba magnética más duradera. Corsair H170i Elite incluye ventiladores RGB, pantalla LCD más grande (2.1") y es $20 más caro. Para longevidad silenciosa: NZXT. Para RGB premium: Corsair.'
  },
  {
    id: 'gabinete-mid',
    nombre: 'Gabinete Mid-Tower',
    seccion: 'internos',
    icono: '🖥️',
    complejidad: 2,
    descripcion: 'Gabinete ATX Mid-Tower con buen flujo de aire. El formato más popular para builds de escritorio con buena gestión de cables y opciones de expansión.',
    productoA: {
      nombre: 'Pop Air RGB ATX Mid Tower',
      marca: 'Fractal Design',
      precio: '$94.99 USD',
      imagen: 'assets/images/gabinetes/fractal-pop-air-rgb.jpg',
      specs: { 'Formato': 'ATX Mid-Tower', 'Ventiladores incluidos': '3x 140mm + 1x 120mm', 'Gestión cables': 'Panel lateral ciega', 'Vidrio templado': 'Sí (lateral)', 'Filtros polvo': 'Magnéticos (3)', 'Soporte AIO': 'Hasta 360mm' }
    },
    productoB: {
      nombre: 'H5 Flow RGB ATX Mid Tower',
      marca: 'NZXT',
      precio: '$84.99 USD',
      imagen: 'assets/images/gabinetes/nzxt-h5-flow-rgb.jpg',
      specs: { 'Formato': 'ATX Mid-Tower', 'Ventiladores incluidos': '2x 120mm RGB', 'Gestión cables': 'Canal horizontal + vertical', 'Vidrio templado': 'Sí (lateral + frontal)', 'Filtros polvo': 'Magnéticos (2)', 'Soporte AIO': 'Hasta 360mm' }
    },
    ganadores: { 'Formato': 'empate', 'Ventiladores incluidos': 'A', 'Gestión cables': 'B', 'Vidrio templado': 'B', 'Filtros polvo': 'A', 'Soporte AIO': 'empate' },
    recomendado: 'B',
    veredicto: 'Fractal Pop Air incluye 4 ventiladores (vs 2) y más filtros de polvo para mejor mantenimiento. NZXT H5 Flow tiene panel frontal también en vidrio templado para mejor visibilidad del interior y gestión de cables más innovadora. Para flujo de aire: Fractal. Para estética: NZXT.'
  },
  {
    id: 'gabinete-full',
    nombre: 'Gabinete Full-Tower',
    seccion: 'internos',
    icono: '🖥️',
    complejidad: 3,
    descripcion: 'Gabinete de gran formato para sistemas de alto rendimiento, custom water cooling o múltiples GPUs. Más espacio y opciones de personalización.',
    productoA: {
      nombre: '7000D Airflow Full-Tower',
      marca: 'Corsair',
      precio: '$219.99 USD',
      imagen: 'assets/images/gabinetes/corsair-7000d-airflow.png',
      specs: { 'Formato': 'ATX Full-Tower', 'Ventiladores': '3x 120mm incluidos', 'Bahías 3.5"': '4', 'Vidrio templado': 'Lateral + panel frontal', 'Espacio GPU': 'Hasta 450mm', 'Soporte AIO': 'Hasta 480mm' }
    },
    productoB: {
      nombre: 'PC-O11D XL E-ATX Full Tower',
      marca: 'Lian Li',
      precio: '$189.99 USD',
      imagen: 'assets/images/gabinetes/lian-li-o11d-xl.jpg',
      specs: { 'Formato': 'E-ATX Full-Tower', 'Ventiladores': 'Sin ventiladores incluidos', 'Bahías 3.5"': '2', 'Vidrio templado': '2x paneles de vidrio templado', 'Espacio GPU': 'Hasta 420mm', 'Soporte AIO': 'Hasta 360mm x3' }
    },
    ganadores: { 'Formato': 'empate', 'Ventiladores': 'A', 'Bahías 3.5"': 'A', 'Vidrio templado': 'B', 'Espacio GPU': 'A', 'Soporte AIO': 'A' },
    recomendado: 'A',
    veredicto: 'Corsair 7000D incluye ventiladores, más bahías de almacenamiento y mayor espacio para GPU. Lian Li PC-O11D XL es el favorito de la comunidad de custom water cooling por su distribución dual chamber y estética premium con dos paneles de vidrio. Para Air Cooling: Corsair. Para WC custom: Lian Li.'
  }
]);
