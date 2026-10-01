/* js/data/almacenamiento.js — 5 categorías de Almacenamiento Externo */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'usb-flash',
    nombre: 'USB Flash Drive',
    seccion: 'almacenamiento',
    icono: '💾',
    complejidad: 1,
    descripcion: 'Memoria USB portable para transferencia y almacenamiento de archivos. Compacta, plug-and-play y compatible universalmente con cualquier dispositivo USB.',
    productoA: {
      nombre: 'Ultra USB 3.0 128GB',
      marca: 'SanDisk',
      precio: '$12.99 USD',
      imagen: 'assets/images/almacenamiento/sandisk-ultra-128gb-usb.png',
      specs: { 'Capacidad': '128 GB', 'Lectura': 'Hasta 130 MB/s', 'Escritura': 'No especificada (NAND)', 'Interfaz': 'USB 3.0', 'Dimensiones': '56.9 x 21.0 x 9.5 mm', 'Garantía': '5 años' }
    },
    productoB: {
      nombre: 'DataTraveler 100 G3 128GB',
      marca: 'Kingston',
      precio: '$10.99 USD',
      imagen: 'assets/images/almacenamiento/kingston-datatraveler-100-g3-128gb.webp',
      specs: { 'Capacidad': '128 GB', 'Lectura': 'Hasta 100 MB/s', 'Escritura': 'Hasta 10 MB/s', 'Interfaz': 'USB 3.2 Gen 1', 'Dimensiones': '58.0 x 20.7 x 11.0 mm', 'Garantía': '5 años' }
    },
    ganadores: { 'Capacidad': 'empate', 'Lectura': 'A', 'Escritura': 'B', 'Interfaz': 'empate', 'Dimensiones': 'empate', 'Garantía': 'empate' },
    recomendado: 'B',
    veredicto: 'SanDisk Ultra es más rápido en lectura (130 vs 100 MB/s) y es ligeramente más compacto. Kingston especifica su velocidad de escritura (10 MB/s). Ambos ofrecen 5 años de garantía. Para transferencias rápidas: SanDisk. Para precio más bajo: Kingston DataTraveler.'
  },
  {
    id: 'ssd-externo',
    nombre: 'SSD Externo Portátil',
    seccion: 'almacenamiento',
    icono: '💾',
    complejidad: 3,
    descripcion: 'SSD portátil de alta velocidad con interfaz USB 3.2 o USB4. Hasta 10-20x más rápido que un HDD externo. Ideal para backups rápidos y uso con laptops.',
    productoA: {
      nombre: 'T7 Shield 1TB Portable SSD',
      marca: 'Samsung',
      precio: '$79.99 USD',
      imagen: 'assets/images/almacenamiento/samsung-t7-shield-1tb.jpg',
      specs: { 'Capacidad': '1 TB', 'Lectura': 'Hasta 1050 MB/s', 'Escritura': 'Hasta 1000 MB/s', 'Interfaz': 'USB 3.2 Gen 2 (10Gbps)', 'Resistencia': 'IP65 (polvo + agua)', 'Garantía': '3 años' }
    },
    productoB: {
      nombre: 'My Passport SSD 1TB',
      marca: 'Western Digital',
      precio: '$69.99 USD',
      imagen: 'assets/images/almacenamiento/wd-my-passport-ssd-1tb.png',
      specs: { 'Capacidad': '1 TB', 'Lectura': 'Hasta 1050 MB/s', 'Escritura': 'Hasta 1000 MB/s', 'Interfaz': 'USB 3.2 Gen 2 (10Gbps)', 'Resistencia': 'Sin certificación IP', 'Garantía': '5 años' }
    },
    ganadores: { 'Capacidad': 'empate', 'Lectura': 'empate', 'Escritura': 'empate', 'Interfaz': 'empate', 'Resistencia': 'A', 'Garantía': 'B' },
    recomendado: 'B',
    veredicto: 'Samsung T7 Shield tiene resistencia IP65 (agua y polvo) ideal para uso en campo. WD My Passport SSD ofrece 5 años de garantía (vs 3) y es $10 más económico. Para trabajo outdoor: Samsung T7 Shield. Para garantía y precio: WD My Passport SSD.'
  },
  {
    id: 'hdd-externo-1tb',
    nombre: 'HDD Externo 1TB',
    seccion: 'almacenamiento',
    icono: '💾',
    complejidad: 2,
    descripcion: 'Disco duro externo mecánico de 1TB compacto para llevar en el bolsillo. Para backups personales, transferencia de archivos y almacenamiento adicional.',
    productoA: {
      nombre: 'Backup Plus Slim 1TB',
      marca: 'Seagate',
      precio: '$44.99 USD',
      imagen: 'assets/images/almacenamiento/seagate-backup-plus-slim-1tb.jpg',
      specs: { 'Capacidad': '1 TB', 'Interfaz': 'USB 3.0', 'Velocidad transferencia': '120 MB/s', 'Alimentación': 'Bus-powered (USB)', 'Dimensiones': '117 x 72 x 9.6 mm', 'Software': 'Seagate Dashboard + 2 años Dropbox' }
    },
    productoB: {
      nombre: 'Elements Portable 1TB',
      marca: 'Western Digital',
      precio: '$39.99 USD',
      imagen: 'assets/images/almacenamiento/wd-elements-portable-1tb.png',
      specs: { 'Capacidad': '1 TB', 'Interfaz': 'USB 3.0', 'Velocidad transferencia': '110 MB/s', 'Alimentación': 'Bus-powered (USB)', 'Dimensiones': '111 x 82 x 14 mm', 'Software': 'WD Discovery' }
    },
    ganadores: { 'Capacidad': 'empate', 'Interfaz': 'empate', 'Velocidad transferencia': 'A', 'Alimentación': 'empate', 'Dimensiones': 'A', 'Software': 'A' },
    recomendado: 'A',
    veredicto: 'Seagate Backup Plus Slim es más delgado (9.6mm vs 14mm), más rápido y viene con 2 años de Dropbox. WD Elements Portable es $5 más barato y con la reputación de confiabilidad WD. Para portabilidad y software incluido: Seagate. Para precio y confiabilidad: WD Elements.'
  },
  {
    id: 'hdd-externo-4tb',
    nombre: 'HDD Externo 4TB',
    seccion: 'almacenamiento',
    icono: '💾',
    complejidad: 3,
    descripcion: 'Disco duro externo de gran capacidad para backups completos, colecciones de medios y archivo masivo. Se requiere alimentación externa en algunos modelos.',
    productoA: {
      nombre: 'My Passport Ultra 4TB',
      marca: 'Western Digital',
      precio: '$89.99 USD',
      imagen: 'assets/images/almacenamiento/wd-my-passport-ultra-4tb.png',
      specs: { 'Capacidad': '4 TB', 'Interfaz': 'USB-C + USB-A', 'Velocidad': 'USB 3.0 compatible', 'Alimentación': 'Bus-powered (USB-C)', 'Software': 'WD Discovery + backup automático', 'Garantía': '3 años' }
    },
    productoB: {
      nombre: 'Expansion Desktop 4TB',
      marca: 'Seagate',
      precio: '$79.99 USD',
      imagen: 'assets/images/almacenamiento/seagate-expansion-desktop-4tb.jpg',
      specs: { 'Capacidad': '4 TB', 'Interfaz': 'USB 3.0', 'Velocidad': 'USB 3.0 compatible', 'Alimentación': 'Adaptador externo (escritorio)', 'Software': 'Seagate Toolkit', 'Garantía': '1 año' }
    },
    ganadores: { 'Capacidad': 'empate', 'Interfaz': 'A', 'Velocidad': 'empate', 'Alimentación': 'A', 'Software': 'A', 'Garantía': 'A' },
    recomendado: 'A',
    veredicto: 'WD My Passport Ultra 4TB es portable y bus-powered (sin adaptador), con USB-C y 3 años de garantía. Seagate Expansion Desktop requiere adaptador de corriente pero es $10 más económico. Para uso portable: WD. Para escritorio fijo y precio: Seagate Expansion.'
  },
  {
    id: 'nas-hogar',
    nombre: 'NAS para Hogar',
    seccion: 'almacenamiento',
    icono: '🗄️',
    complejidad: 4,
    descripcion: 'Almacenamiento conectado en red (NAS) para centralizar backups de todos los dispositivos del hogar. Funciona como nube privada, servidor multimedia y archivo central.',
    productoA: {
      nombre: 'DiskStation DS223',
      marca: 'Synology',
      precio: '$299.99 USD (sin discos)',
      imagen: 'assets/images/almacenamiento/synology-diskstation-ds223.png',
      specs: { 'Bahías': '2x SATA HDD/SSD', 'Procesador': 'Realtek RTD1619B quad-core', 'RAM': '2 GB DDR4', 'Red': '1x 1GbE RJ-45', 'USB': '2x USB 3.2', 'Software': 'DSM 7.2 (el mejor ecosistema NAS)' }
    },
    productoB: {
      nombre: 'TS-233 2-Bay NAS',
      marca: 'QNAP',
      precio: '$249.99 USD (sin discos)',
      imagen: 'assets/images/almacenamiento/qnap-ts-233.png',
      specs: { 'Bahías': '2x SATA HDD/SSD', 'Procesador': 'Realtek RTD1619B quad-core', 'RAM': '2 GB DDR4', 'Red': '1x 1GbE RJ-45', 'USB': '2x USB 3.2', 'Software': 'QTS 5.x (más funcionalidades advanced)' }
    },
    ganadores: { 'Bahías': 'empate', 'Procesador': 'empate', 'RAM': 'empate', 'Red': 'empate', 'USB': 'empate', 'Software': 'A' },
    recomendado: 'A',
    veredicto: 'Synology DS223 y QNAP TS-233 tienen hardware prácticamente idéntico. La diferencia clave es el software: Synology DSM 7.2 es más fácil de usar y el ecosistema más completo para principiantes. QNAP QTS es más poderoso para usuarios avanzados. Para principiantes: Synology. Para usuarios técnicos: QNAP.'
  }
]);
