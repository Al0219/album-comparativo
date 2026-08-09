/* js/data/accesorios.js — 6 categorías de Accesorios */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'cargador-usbc',
    nombre: 'Cargador USB-C GaN',
    seccion: 'accesorios',
    icono: '🔌',
    complejidad: 2,
    descripcion: 'Cargador USB-C de tecnología GaN (Nitruro de Galio). Más compactos, eficientes y rápidos que los cargadores tradicionales. Soportan Power Delivery para laptops.',
    productoA: {
      nombre: '735 Charger (120W) GaN',
      marca: 'Anker',
      precio: '$49.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Anker+735+GaN+Charger',
      specs: { 'Potencia total': '120W', 'Puertos': '2x USB-C + 1x USB-A', 'PD máx.': '100W por puerto USB-C', 'Tecnología': 'GaN II', 'Tamaño': 'Compacto (sin adaptador)', 'Protecciones': 'Sobrecalentamiento / sobrevoltaje' }
    },
    productoB: {
      nombre: '200W Desktop Charger GaN3',
      marca: 'Ugreen',
      precio: '$69.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Ugreen+200W+GaN3+Charger',
      specs: { 'Potencia total': '200W', 'Puertos': '3x USB-C + 1x USB-A', 'PD máx.': '140W por puerto USB-C', 'Tecnología': 'GaN 3ra gen', 'Tamaño': 'Desktop (con cable)', 'Protecciones': 'Protección múltiple' }
    },
    ganadores: { 'Potencia total': 'B', 'Puertos': 'B', 'PD máx.': 'B', 'Tecnología': 'B', 'Tamaño': 'A', 'Protecciones': 'empate' },
    veredicto: 'Ugreen 200W GaN3 es el rey de potencia: 200W total, 140W por puerto y GaN de 3ra generación para el más eficiente. Anker 735 es más compacto (sin cable de mesa) y suficiente para la mayoría de laptops+teléfonos. Para carga múltiple simultánea: Ugreen. Para viajes: Anker 735.'
  },
  {
    id: 'cable-usbc',
    nombre: 'Cable USB-C',
    seccion: 'accesorios',
    icono: '🔌',
    complejidad: 2,
    descripcion: 'Cable USB-C para carga y transferencia de datos. La calidad del cable determina si aprovechas la carga rápida y la velocidad máxima de datos de tus dispositivos.',
    productoA: {
      nombre: 'USB-C to USB-C 240W Cable',
      marca: 'Anker',
      precio: '$15.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Anker+USB-C+240W+Cable',
      specs: { 'Carga': '240W (EPR USB PD 3.1)', 'Datos': 'USB 2.0 (480 Mbps)', 'Longitud': '6 ft (1.8m)', 'Material': 'Nylon trenzado', 'Conector': 'USB-C 90° + recto', 'Compatibilidad': 'USB4 / Thunderbolt compatible' }
    },
    productoB: {
      nombre: 'Thunderbolt 4 Pro Cable',
      marca: 'Apple',
      precio: '$39.00 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Apple+Thunderbolt+4+Cable',
      specs: { 'Carga': '100W (USB PD)', 'Datos': '40 Gbps (Thunderbolt 4)', 'Longitud': '1 m (3.3ft)', 'Material': 'Trenzado premium', 'Conector': 'USB-C + USB-C (recto+recto)', 'Compatibilidad': 'Thunderbolt 4 / USB4' }
    },
    ganadores: { 'Carga': 'A', 'Datos': 'B', 'Longitud': 'A', 'Material': 'empate', 'Conector': 'A', 'Compatibilidad': 'empate' },
    veredicto: 'Anker 240W soporta mayor carga (240W vs 100W), mayor longitud y es más económico. Apple Thunderbolt 4 Pro Cable ofrece 40Gbps de velocidad de datos — esencial para conexiones Thunderbolt 4/eGPU. Para carga rápida de laptops: Anker. Para Thunderbolt 4 / eGPU: Apple.'
  },
  {
    id: 'bateria-portatil',
    nombre: 'Batería Portátil / Power Bank',
    seccion: 'accesorios',
    icono: '🔋',
    complejidad: 2,
    descripcion: 'Batería externa para cargar smartphones, tablets y laptops cuando no hay toma de corriente. La capacidad (mAh) determina cuántas veces puede recargar tu dispositivo.',
    productoA: {
      nombre: 'PowerCore 26800mAh PD 60W',
      marca: 'Anker',
      precio: '$69.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Anker+PowerCore+26800+PD',
      specs: { 'Capacidad': '26800 mAh', 'Carga rápida': '60W USB-C PD (carga laptops)', 'Puertos salida': '2x USB-C + 1x USB-A', 'Recarga (vacío)': '6h con carga 60W', 'Tamaño': '180 x 62 x 30 mm', 'Garantía': '24 meses' }
    },
    productoB: {
      nombre: 'BPB012 10000mAh 20W PD',
      marca: 'Baseus',
      precio: '$29.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Baseus+10000mAh+20W+PD',
      specs: { 'Capacidad': '10000 mAh', 'Carga rápida': '20W USB-C PD (smartphones)', 'Puertos salida': '1x USB-C + 1x USB-A', 'Recarga (vacío)': '2.5h con carga 22.5W', 'Tamaño': '143 x 68 x 14 mm', 'Garantía': '18 meses' }
    },
    ganadores: { 'Capacidad': 'A', 'Carga rápida': 'A', 'Puertos salida': 'A', 'Recarga (vacío)': 'B', 'Tamaño': 'B', 'Garantía': 'A' },
    veredicto: 'Anker PowerCore 26800 tiene casi 3x más capacidad, carga laptops (60W PD) y más puertos. Baseus es ultra delgado (14mm) y se recarga más rápido — perfecto para bolsillo. Para laptops en viajes largos: Anker. Para carga diaria de teléfono ultraportátil: Baseus.'
  },
  {
    id: 'ups',
    nombre: 'UPS / SAI (Alimentación Ininterrumpida)',
    seccion: 'accesorios',
    icono: '⚡',
    complejidad: 3,
    descripcion: 'Sistema de alimentación ininterrumpida que protege el PC contra cortes y fluctuaciones de corriente. Proporciona tiempo para guardar el trabajo y apagar correctamente.',
    productoA: {
      nombre: 'Back-UPS PRO 1500VA BR1500MS2',
      marca: 'APC (Schneider)',
      precio: '$199.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=APC+Back-UPS+Pro+1500VA',
      specs: { 'Capacidad': '1500VA / 900W', 'Tipo': 'Line-interactive', 'Tomas protegidas': '10 NEMA 5-15R', 'Batería backup': 'Hasta 3.7 min a carga completa', 'Regulación voltaje': 'AVR automático', 'Puerto USB': 'Sí (gestión UPS)' }
    },
    productoB: {
      nombre: 'OL1500RTXL2U Online UPS',
      marca: 'APC',
      precio: '$649.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=APC+Smart-UPS+Online',
      specs: { 'Capacidad': '1500VA / 1350W', 'Tipo': 'Online doble conversión', 'Tomas protegidas': '6x C13 + 1x C19', 'Batería backup': 'Hasta 8 min a carga completa', 'Regulación voltaje': 'Online (aislamiento total)', 'Puerto USB': 'Sí + RS-232' }
    },
    ganadores: { 'Capacidad': 'B', 'Tipo': 'B', 'Tomas protegidas': 'A', 'Batería backup': 'B', 'Regulación voltaje': 'B', 'Puerto USB': 'B' },
    veredicto: 'APC Smart-UPS Online usa conversión doble (aislamiento total del circuito) para protección perfecta — esencial para servidores. APC Back-UPS PRO es más económico y suficiente para PCs domésticos con mayor cantidad de tomas. Para PC hogar: Back-UPS PRO. Para servidor: Smart-UPS Online.'
  },
  {
    id: 'soporte-laptop',
    nombre: 'Soporte para Laptop / Arm Monitor',
    seccion: 'accesorios',
    icono: '🖥️',
    complejidad: 2,
    descripcion: 'Soporte ergonómico para elevar la laptop o monitor a la altura adecuada de los ojos. Mejora la postura, reduce el dolor de cuello y libera espacio en el escritorio.',
    productoA: {
      nombre: 'ProStand Adjustable Laptop Stand',
      marca: 'Twelve South',
      precio: '$69.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Twelve+South+ProStand',
      specs: { 'Material': 'Aluminio pulido', 'Altura': 'Ajustable 3 niveles', 'Compatibilidad': 'Laptops 10–17.3"', 'Antideslizante': 'Sí (pads de silicona)', 'Peso máx.': '10 kg', 'Ventilación': 'Sí (base abierta)' }
    },
    productoB: {
      nombre: 'Nexstand K2 Portable Stand',
      marca: 'Nexstand',
      precio: '$24.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Nexstand+K2+Portable',
      specs: { 'Material': 'Plástico ABS premium', 'Altura': 'Ajustable 7 posiciones', 'Compatibilidad': 'Laptops hasta 17"', 'Antideslizante': 'Sí', 'Peso máx.': '5 kg', 'Ventilación': 'Sí (abierto)' }
    },
    ganadores: { 'Material': 'A', 'Altura': 'B', 'Compatibilidad': 'empate', 'Antideslizante': 'empate', 'Peso máx.': 'A', 'Ventilación': 'empate' },
    veredicto: 'Twelve South ProStand es de aluminio premium con mayor capacidad de peso (10kg) y apariencia elegante compatible con la estética Apple/premium. Nexstand K2 es plegable/portátil y tiene más posiciones de ajuste a un precio $45 menor. Para escritorio fijo: Twelve South. Para viajes: Nexstand K2.'
  },
  {
    id: 'alfombrilla-premium',
    nombre: 'Alfombrilla de Escritorio XL',
    seccion: 'accesorios',
    icono: '🖥️',
    complejidad: 1,
    descripcion: 'Alfombrilla de escritorio extra grande que cubre toda la superficie. Protege el escritorio, organiza el espacio y mejora la experiencia del mouse con superficie uniforme.',
    productoA: {
      nombre: 'XL Gaming Mouse Pad RGB',
      marca: 'Corsair',
      precio: '$44.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=Corsair+XL+RGB+Mouse+Pad',
      specs: { 'Tamaño': '930 x 400 mm', 'Grosor': '4 mm', 'RGB': 'Sí - 15 zonas LED', 'Material': 'Tela premium micro-texturada', 'Conector': 'USB para RGB', 'Base': 'Caucho antideslizante' }
    },
    productoB: {
      nombre: 'Desk Pad Extended XXL',
      marca: 'MOUS',
      precio: '$29.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/94a3b8?text=MOUS+Desk+Pad+XXL',
      specs: { 'Tamaño': '900 x 400 mm', 'Grosor': '3 mm', 'RGB': 'No', 'Material': 'Tela vegana premium', 'Conector': 'Sin conector', 'Base': 'Caucho antideslizante' }
    },
    ganadores: { 'Tamaño': 'A', 'Grosor': 'A', 'RGB': 'A', 'Material': 'empate', 'Conector': 'B', 'Base': 'empate' },
    veredicto: 'Corsair XL RGB tiene mayor tamaño (930mm), RGB de 15 zonas y mayor grosor. MOUS Desk Pad es más económico ($15 menos), más minimalista sin cables USB y con material vegano premium. Para setup gaming RGB: Corsair. Para escritorio minimalista de trabajo: MOUS.'
  }
]);
