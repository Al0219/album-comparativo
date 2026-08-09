/* js/data/redes.js — 5 categorías de Redes */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'router-basico',
    nombre: 'Router WiFi Básico',
    seccion: 'redes',
    icono: '🌐',
    complejidad: 2,
    descripcion: 'Router WiFi de doble banda para el hogar. Cubre apartamentos o casas pequeñas con buena velocidad y facilidad de configuración.',
    productoA: {
      nombre: 'Archer AX21 WiFi 6',
      marca: 'TP-Link',
      precio: '$59.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=TP-Link+Archer+AX21',
      specs: { 'WiFi': 'WiFi 6 (802.11ax)', 'Velocidad': 'AX1800 (1201+574 Mbps)', 'Antenas': '4x externas', 'Puertos LAN': '4x Gigabit', 'WPA3': 'Sí', 'App': 'Tether App' }
    },
    productoB: {
      nombre: 'WAX202 WiFi 6 AX1800',
      marca: 'NETGEAR',
      precio: '$79.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=NETGEAR+WAX202+WiFi6',
      specs: { 'WiFi': 'WiFi 6 (802.11ax)', 'Velocidad': 'AX1800 (1201+574 Mbps)', 'Antenas': '4x internas', 'Puertos LAN': '4x Gigabit', 'WPA3': 'Sí', 'App': 'Nighthawk App' }
    },
    ganadores: { 'WiFi': 'empate', 'Velocidad': 'empate', 'Antenas': 'A', 'Puertos LAN': 'empate', 'WPA3': 'empate', 'App': 'empate' },
    veredicto: 'TP-Link Archer AX21 ofrece las mismas especificaciones de red que el NETGEAR WAX202 por $20 menos, con antenas externas para mejor ajuste de señal. NETGEAR ofrece diseño más elegante con antenas internas. Para mejor valor: TP-Link Archer AX21 claramente gana en precio.'
  },
  {
    id: 'router-gaming',
    nombre: 'Router WiFi 6 Gaming',
    seccion: 'redes',
    icono: '🎮',
    complejidad: 4,
    descripcion: 'Router gaming de alto rendimiento con WiFi 6/6E, priorización de tráfico gaming (QoS), múltiples bandas y procesador potente para máxima velocidad y mínima latencia.',
    productoA: {
      nombre: 'ROG Rapture GT-AXE16000',
      marca: 'ASUS',
      precio: '$599.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=ASUS+ROG+Rapture+GT-AXE',
      specs: { 'WiFi': 'WiFi 6E Quad-Band', 'Velocidad': 'AXE16000 (12096+2402+1148 Mbps)', 'Antenas': '12x externas', 'Puertos LAN': '4x 2.5G + 2x 10G', 'Gaming': 'Game Boost + VPN Fusion', 'App': 'ASUS Router App + Aura RGB' }
    },
    productoB: {
      nombre: 'Nighthawk RAXE500 Tri-Band',
      marca: 'NETGEAR',
      precio: '$299.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=NETGEAR+Nighthawk+RAXE500',
      specs: { 'WiFi': 'WiFi 6E Tri-Band', 'Velocidad': 'AXE11000 (4804+4804+1200 Mbps)', 'Antenas': '8x externas', 'Puertos LAN': '4x 1G + 1x 2.5G', 'Gaming': 'Beamforming + MU-MIMO', 'App': 'Nighthawk App' }
    },
    ganadores: { 'WiFi': 'A', 'Velocidad': 'A', 'Antenas': 'A', 'Puertos LAN': 'A', 'Gaming': 'A', 'App': 'A' },
    veredicto: 'ASUS ROG Rapture GT-AXE16000 es el router más potente del mercado: Quad-band WiFi 6E, puertos 10G, 12 antenas y RGB. NETGEAR Nighthawk RAXE500 es $300 más económico con excelente rendimiento Tri-Band WiFi 6E. Para hardcore gaming: ASUS. Para gaming normal: NETGEAR.'
  },
  {
    id: 'mesh-wifi',
    nombre: 'Sistema Mesh WiFi',
    seccion: 'redes',
    icono: '📡',
    complejidad: 4,
    descripcion: 'Sistema de múltiples nodos que crean una red WiFi continua sin zonas muertas. Ideal para casas grandes o de varios pisos donde un solo router no llega a todas las áreas.',
    productoA: {
      nombre: 'Nest WiFi Pro 6E (3-pack)',
      marca: 'Google',
      precio: '$299.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=Google+Nest+WiFi+Pro+6E',
      specs: { 'WiFi': 'WiFi 6E Tri-Band', 'Cobertura': '6000 sq ft (3 nodos)', 'Backhaul': '6 GHz dedicado', 'Thread': 'Sí (smart home)', 'App': 'Google Home', 'Gestor': 'Google Home ecosystem' }
    },
    productoB: {
      nombre: 'eero 6+ Mesh (3-pack)',
      marca: 'Amazon (eero)',
      precio: '$199.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=Amazon+eero+6+Plus+Mesh',
      specs: { 'WiFi': 'WiFi 6 Dual-Band', 'Cobertura': '4500 sq ft (3 nodos)', 'Backhaul': 'Wireless (banda 5GHz)', 'Thread': 'Sí (Matter compatible)', 'App': 'eero App', 'Gestor': 'Alexa integrado' }
    },
    ganadores: { 'WiFi': 'A', 'Cobertura': 'A', 'Backhaul': 'A', 'Thread': 'empate', 'App': 'empate', 'Gestor': 'empate' },
    veredicto: 'Google Nest WiFi Pro 6E tiene WiFi 6E, mayor cobertura y backhaul de 6GHz dedicado para mejor rendimiento entre nodos. eero 6+ es $100 más económico con Alexa integrada. Para máxima velocidad: Google Nest. Para hogar con Alexa/Amazon: eero 6+.'
  },
  {
    id: 'switch-basico',
    nombre: 'Switch de Red Básico',
    seccion: 'redes',
    icono: '🔗',
    complejidad: 2,
    descripcion: 'Switch de red no gestionable para expandir los puertos Ethernet del router. Conecta dispositivos cableados como PCs, consolas, Smart TVs y NAS simultáneamente.',
    productoA: {
      nombre: 'TL-SG108 8-Port Gigabit',
      marca: 'TP-Link',
      precio: '$19.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=TP-Link+TL-SG108+Switch',
      specs: { 'Puertos': '8x Gigabit RJ-45', 'Velocidad': '1000 Mbps por puerto', 'Backplane': '16 Gbps', 'Tabla MAC': '4K entradas', 'Plug-and-play': 'Sí', 'Consumo': '2.8W' }
    },
    productoB: {
      nombre: 'GS308 8-Port Gigabit',
      marca: 'NETGEAR',
      precio: '$24.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=NETGEAR+GS308+Switch',
      specs: { 'Puertos': '8x Gigabit RJ-45', 'Velocidad': '1000 Mbps por puerto', 'Backplane': '16 Gbps', 'Tabla MAC': '4K entradas', 'Plug-and-play': 'Sí', 'Consumo': '3.5W' }
    },
    ganadores: { 'Puertos': 'empate', 'Velocidad': 'empate', 'Backplane': 'empate', 'Tabla MAC': 'empate', 'Plug-and-play': 'empate', 'Consumo': 'A' },
    veredicto: 'TP-Link TL-SG108 y NETGEAR GS308 son prácticamente idénticos en rendimiento. TP-Link es $5 más económico y consume menos energía (2.8W vs 3.5W). NETGEAR tiene mayor reputación en redes empresariales. Para hogar: TP-Link es la elección más inteligente por precio.'
  },
  {
    id: 'switch-gestionable',
    nombre: 'Switch Gestionable',
    seccion: 'redes',
    icono: '🔗',
    complejidad: 4,
    descripcion: 'Switch de red administrable con VLANs, QoS, monitoreo y gestión centralizada. Para oficinas pequeñas, laboratorios o usuarios avanzados que necesitan control de red.',
    productoA: {
      nombre: 'SG350-10 10-Port Managed',
      marca: 'Cisco',
      precio: '$249.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=Cisco+SG350-10+Managed',
      specs: { 'Puertos': '8x 1G + 2x SFP combo', 'Gestión': 'WebUI + CLI + SNMP', 'VLANs': '256', 'QoS': '4 colas de prioridad', 'Seguridad': 'IEEE 802.1X + ACLs', 'Stack': 'No' }
    },
    productoB: {
      nombre: 'TL-SG2210XHP-M2 Smart',
      marca: 'TP-Link',
      precio: '$149.99 USD',
      imagen: 'https://placehold.co/400x300/0d1117/2dd4bf?text=TP-Link+SG3210XHP+Smart',
      specs: { 'Puertos': '8x 2.5G + 2x 10G SFP+', 'Gestión': 'WebUI + CLI + Omada SDN', 'VLANs': '4096', 'QoS': '8 colas de prioridad', 'Seguridad': 'ACLs + Storm Control', 'Stack': 'Omada Controller' }
    },
    ganadores: { 'Puertos': 'B', 'Gestión': 'B', 'VLANs': 'B', 'QoS': 'B', 'Seguridad': 'empate', 'Stack': 'B' },
    veredicto: 'TP-Link SG2210XHP-M2 supera al Cisco en puertos 2.5G/10G, 4096 VLANs, 8 colas QoS e integración Omada SDN por $100 menos. Cisco SG350 tiene mayor reputación empresarial y soporte técnico. Para pequeña empresa con presupuesto: TP-Link. Para empresa con soporte Cisco: Cisco SG350.'
  }
]);
