/* js/data/creadores.js — 5 categorías de Creación de Contenido, Streaming y Audio Pro */
window.CATALOG = window.CATALOG || [];

window.CATALOG.push(...[
  {
    id: 'camara-mirrorless-creadores',
    nombre: 'Cámaras Mirrorless Híbridas Full-Frame para Creadores',
    seccion: 'creadores',
    icono: '📸',
    complejidad: 4,
    descripcion: 'Cámaras sin espejo con sensor de fotograma completo, autoenfoque predictivo por inteligencia artificial y grabación de video cinematográfico 4K de 10 bits.',
    productoA: {
      nombre: 'Alpha 7 IV',
      marca: 'Sony',
      precio: '$2,499.99 USD',
      imagen: 'assets/images/creadores/sony-alpha-7-iv.jpg',
      specs: {
        'Resolución de sensor': '33 MP Full-Frame Exmor R BSI CMOS',
        'Grabación de video': '4K a 60p (recorte Super35) / 4K a 30p sobremuestreado 7K',
        'Profundidad y color': '10-bit 4:2:2 con perfiles S-Cinetone y S-Log3',
        'Sistema de autoenfoque': '759 puntos AF híbrido con seguimiento en tiempo real para humanos, animales y aves',
        'Estabilización IBIS': '5 ejes en el cuerpo (hasta 5.5 pasos)',
        'Ranuras de tarjeta': 'Dual: 1x CFexpress Tipo A/SD + 1x SD UHS-II'
      }
    },
    productoB: {
      nombre: 'EOS R6 Mark II',
      marca: 'Canon',
      precio: '$2,399.00 USD',
      imagen: 'assets/images/creadores/canon-eos-r6-mark-ii.jpg',
      specs: {
        'Resolución de sensor': '24.2 MP Full-Frame CMOS de alta velocidad',
        'Grabación de video': '4K a 60p sin recorte sobremuestreado 6K completo',
        'Profundidad y color': '10-bit 4:2:2 con Canon Log 3 y HDR PQ',
        'Sistema de autoenfoque': 'Dual Pixel CMOS AF II con detección de vehículos, caballos y trenes',
        'Estabilización IBIS': '5 ejes en el cuerpo con hasta 8 pasos de compensación coordinada',
        'Ranuras de tarjeta': 'Dual: 2x ranuras SD UHS-II'
      }
    },
    ganadores: {
      'Resolución de sensor': 'A',
      'Grabación de video': 'B',
      'Profundidad y color': 'empate',
      'Sistema de autoenfoque': 'B',
      'Estabilización IBIS': 'B',
      'Ranuras de tarjeta': 'A'
    },
    recomendado: 'B',
    veredicto: 'Canon EOS R6 Mark II es la herramienta de video más versátil: graba 4K60p sin ningún factor de recorte en el sensor completo, ofrece una estabilización IBIS de hasta 8 pasos y ráfaga electrónica de 40 fps por $100 menos. Sony A7 IV ofrece mayor resolución en foto (33 MP frente a 24 MP) y compatibilidad con tarjetas CFexpress Type A ultra veloces, pero para video dinámico y creadores híbridos: Canon R6 II.'
  },
  {
    id: 'microfono-dinamico-broadcast',
    nombre: 'Micrófonos Dinámicos Broadcast para Podcasting y Streaming',
    seccion: 'creadores',
    icono: '🎙️',
    complejidad: 3,
    descripcion: 'Micrófonos vocales dinámicos de estándar de estudio con rechazo de ruido ambiente y respuesta en frecuencia cálida para locución y transmisiones.',
    productoA: {
      nombre: 'SM7dB',
      marca: 'Shure',
      precio: '$499.00 USD',
      imagen: 'assets/images/creadores/shure-sm7db.jpg',
      specs: {
        'Preamplificador integrado': 'Preamplificador activo Shure/Cloudlifter con bypass (+18dB / +28dB)',
        'Patrón polar': 'Cardioide uniforme con rechazo simétrico fuera del eje',
        'Respuesta en frecuencia': '50 Hz a 20,000 Hz con realce de presencia seleccionable',
        'Aislamiento de choque': 'Suspensión neumática interna contra ruidos de manipulación',
        'Filtro antipop': 'Espuma de alta densidad desmontable incluida para oclusivas',
        'Conexión': 'XLR analógico profesional (requiere Phantom +48V solo con preamp activo)'
      }
    },
    productoB: {
      nombre: 'RE20',
      marca: 'Electro-Voice',
      precio: '$449.00 USD',
      imagen: 'assets/images/creadores/electro-voice-re20.jpg',
      specs: {
        'Preamplificador integrado': 'Pasivo tradicional (requiere interfaz o Cloudlifter externo)',
        'Patrón polar': 'Cardioide con tecnología Variable-D sin efecto de proximidad',
        'Respuesta en frecuencia': '45 Hz a 18,000 Hz con filtro pasialto de graves',
        'Aislamiento de choque': 'Cuerpo de acero macizo con bobina humbucker anti-interferencias',
        'Filtro antipop': 'Filtro integral de dos etapas para aire y viento',
        'Conexión': 'XLR analógico profesional tradicional'
      }
    },
    ganadores: {
      'Preamplificador integrado': 'A',
      'Patrón polar': 'B',
      'Respuesta en frecuencia': 'A',
      'Aislamiento de choque': 'empate',
      'Filtro antipop': 'A',
      'Conexión': 'A'
    },
    recomendado: 'A',
    veredicto: 'Shure SM7dB soluciona la histórica debilidad del SM7B original incorporando un preamplificador activo de +28dB diseñado con tecnología Cloud, permitiendo conectarlo a cualquier interfaz económica sin necesidad de comprar preamplificadores externos de $150. Electro-Voice RE20 es legendario por su tecnología Variable-D que elimina la distorsión tonal por cercanía, pero el valor integrado del SM7dB es superior.'
  },
  {
    id: 'controlador-streaming-produccion',
    nombre: 'Controladores de Producción y Streaming en Vivo',
    seccion: 'creadores',
    icono: '🎛️',
    complejidad: 3,
    descripcion: 'Superficies de control con teclas LCD personalizables, diales rotativos y paneles táctiles para gestionar escenas, mezcla de audio y atajos de software.',
    productoA: {
      nombre: 'Stream Deck +',
      marca: 'Elgato',
      precio: '$199.99 USD',
      imagen: 'assets/images/creadores/elgato-stream-deck-plus.jpg',
      specs: {
        'Teclas LCD dinámicas': '8 botones LCD táctiles en color de respuesta instantánea',
        'Controles analógicos': '4 diales giratorios continuos con pulsación táctil (encoders)',
        'Banda táctil': 'Franja LCD táctil panorámica interactiva para visualización y deslizamiento',
        'Ecosistema de audio': 'Integración completa con Wave Link (mezcla multicanal profesional)',
        'Tienda de plugins': 'Elgato Marketplace con miles de plugins, iconos y perfiles',
        'Conexión': 'USB-C desmontable de alta velocidad'
      }
    },
    productoB: {
      nombre: 'Live S',
      marca: 'Loupedeck',
      precio: '$179.00 USD',
      imagen: 'assets/images/creadores/loupedeck-live-s.jpg',
      specs: {
        'Teclas LCD dinámicas': '15 botones táctiles LCD táctiles cuadrículas',
        'Controles analógicos': '2 diales giratorios con pulsador',
        'Banda táctil': '4 botones redondos táctiles analógicos adicionales',
        'Ecosistema de audio': 'Loupedeck Audio Mixer integrado para Windows y macOS',
        'Tienda de plugins': 'Loupedeck Marketplace con soporte nativo profundo para Adobe y Final Cut',
        'Conexión': 'Cable USB-C con adaptador USB-A'
      }
    },
    ganadores: {
      'Teclas LCD dinámicas': 'B',
      'Controles analógicos': 'A',
      'Banda táctil': 'A',
      'Ecosistema de audio': 'A',
      'Tienda de plugins': 'A',
      'Conexión': 'A'
    },
    recomendado: 'A',
    veredicto: 'Elgato Stream Deck + es el centro de mando más completo del mercado: la combinación de 8 teclas LCD, la franja táctil horizontal y 4 perillas diales infinitas con el software de mezcla de audio Wave Link proporciona un control inigualable para streaming y edición de video. Loupedeck Live S ofrece 15 teclas y excelente integración con Lightroom por $20 menos, pero el ecosistema Elgato es el estándar de la industria.'
  },
  {
    id: 'interfaz-audio-usb',
    nombre: 'Interfaces de Audio Profesional USB-C de Estudio',
    seccion: 'creadores',
    icono: '🎚️',
    complejidad: 4,
    descripcion: 'Convertidores analógico-digitales de 24-bit/192kHz con preamplificadores de bajo ruido y alimentación Phantom +48V para grabación musical y podcasts.',
    productoA: {
      nombre: 'Scarlett 4i4 (4ª Gen)',
      marca: 'Focusrite',
      precio: '$279.99 USD',
      imagen: 'assets/images/creadores/focusrite-scarlett-4i4-4th-gen.jpg',
      specs: {
        'Rango dinámico de convertidores': '120 dB (convertidores de grado RedNet de estudio)',
        'Preamplificadores': '2 previos ultrabajos de ruido con modo Air analógico rediseñado',
        'Procesamiento y DSP': 'Auto Gain inteligente + Clip Safe anti-distorsión',
        'Entradas / Salidas': '4 entradas / 4 salidas analógicas + MIDI I/O',
        'Salida de auriculares': 'Amplificador de audífonos de alta potencia con control de volumen independiente',
        'Loopback de audio': 'Función Loopback virtual para grabación de audio del sistema'
      }
    },
    productoB: {
      nombre: 'Volt 276',
      marca: 'Universal Audio',
      precio: '$299.00 USD',
      imagen: 'assets/images/creadores/universal-audio-volt-276.jpg',
      specs: {
        'Rango dinámico de convertidores': '112 dB convertidores de alta resolución 24-bit/192kHz',
        'Preamplificadores': '2 previos analógicos con emulación de tubo de vacío Vintage Mic Preamp',
        'Procesamiento y DSP': 'Compresor analógico integrado basado en el mítico UA 1176',
        'Entradas / Salidas': '2 entradas combo XLR/TRS / 2 salidas balanceadas + MIDI I/O',
        'Salida de auriculares': 'Amplificador de auriculares con calidad audiófila de estudio',
        'Loopback de audio': 'Soportado a través de software de enrutamiento UA'
      }
    },
    ganadores: {
      'Rango dinámico de convertidores': 'A',
      'Preamplificadores': 'empate',
      'Procesamiento y DSP': 'empate',
      'Entradas / Salidas': 'A',
      'Salida de auriculares': 'empate',
      'Loopback de audio': 'A'
    },
    recomendado: 'A',
    veredicto: 'Focusrite Scarlett 4i4 de 4ª generación lidera con 120 dB de rango dinámico, 4 entradas/4 salidas independientes, Auto Gain para calibración en segundos y Clip Safe que previene cualquier saturación en directo. Universal Audio Volt 276 es fantástica por su compresor analógico tipo 1176 integrado en hardware, pero la flexibilidad de E/S y prestaciones modernas de la Scarlett 4i4 la convierten en la opción más completa.'
  },
  {
    id: 'estabilizador-gimbal-camaras',
    nombre: 'Estabilizadores Gimbal de 3 Ejes para Cámaras Mirrorless',
    seccion: 'creadores',
    icono: '🎥',
    complejidad: 4,
    descripcion: 'Sistemas motorizados de estabilización de 3 ejes con algoritmos avanzados de compensación de movimiento y enfoque de precisión para producción cinematográfica.',
    productoA: {
      nombre: 'RS 4 Pro',
      marca: 'DJI',
      precio: '$869.00 USD',
      imagen: 'assets/images/creadores/dji-rs-4-pro.jpg',
      specs: {
        'Capacidad de carga útil': '4.5 kg (brazos de fibra de carbono para cuerpos cine y lentes pesados)',
        'Algoritmo de estabilización': 'Algoritmo de 4ª generación con modo Car Mount especializado',
        'Sistema de enfoque': 'Soporte de telémetro LiDAR Focus Pro (76,800 puntos de alcance a 20m)',
        'Bloqueo automático de ejes': 'Bloqueo/desbloqueo motorizado automático de 2ª generación en 1 segundo',
        'Pantalla y control': 'Pantalla táctil OLED a color con bloqueo automático',
        'Accesorio integrado / Transmisión': 'Transmisión inalámbrica de alta velocidad DJI Transmission integrada'
      }
    },
    productoB: {
      nombre: 'Crane 4',
      marca: 'Zhiyun',
      precio: '$669.00 USD',
      imagen: 'assets/images/creadores/zhiyun-crane-4.jpg',
      specs: {
        'Capacidad de carga útil': '6.0 kg (motores de alto torque para cámaras de cine pesadas)',
        'Algoritmo de estabilización': 'Algoritmo de balanceado dinámico Zhiyun de alta precisión',
        'Sistema de enfoque': 'Control de enfoque y zoom motorizado mecánico Follow Focus',
        'Bloqueo automático de ejes': 'Bloqueo manual con palancas mecánicas de alta rigidez',
        'Pantalla y control': 'Pantalla táctil a color de 1.22 pulgadas',
        'Accesorio integrado / Transmisión': 'Luz de relleno LED integrada de 10W (3200 Lux bi-color)'
      }
    },
    ganadores: {
      'Capacidad de carga útil': 'B',
      'Algoritmo de estabilización': 'A',
      'Sistema de enfoque': 'A',
      'Bloqueo automático de ejes': 'A',
      'Pantalla y control': 'A',
      'Accesorio integrado / Transmisión': 'A'
    },
    recomendado: 'A',
    veredicto: 'DJI RS 4 Pro es el estándar indiscutible en filmación profesional gracias a sus bloqueos motorizados automáticos que ahorran minutos de preparación, su enfoque LiDAR Focus Pro para lentes manuales y la integración con el ecosistema DJI Transmission. Zhiyun Crane 4 ofrece mayor fuerza bruta de motor (6 kg) y una útil luz LED integrada por $200 menos, pero el ecosistema y la fluidez del RS 4 Pro son insuperables.'
  }
]);
