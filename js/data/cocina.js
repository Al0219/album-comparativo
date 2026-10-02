/* js/data/cocina.js — 4 comparativas de cocina tecnológica */
(function(){
  const add=(id,nombre,icono,complejidad,descripcion,productoA,productoB,ganadores,recomendado,veredicto)=>{window.CATALOG=window.CATALOG||[];window.CATALOG.push({id,nombre,seccion:'cocina',icono,complejidad,descripcion,productoA,productoB,ganadores,recomendado,veredicto});};
  const p=(marca,nombre,precio,imagen,specs)=>({marca,nombre,precio,imagen:`assets/images/cocina/${imagen}`,specs});
  add('freidora-aire-smart','Freidoras de Aire Inteligentes','🍟',2,'Freidoras conectadas de gran capacidad para cocinar con poco aceite.',
    p('Cosori','Dual Blaze Smart 6.4L','$179.99 USD','../catalog-cards/cosori-dual-blaze-64l.svg',{'Capacidad':'6.4 L','Potencia':'1,750 W','Resistencias':'Superior e inferior','Temperatura':'80–205 °C','Programas':'12','Aplicación':'VeSync con recetas'}),
    p('Philips','Airfryer Combi XXL Connected','$349.99 USD','../catalog-cards/philips-airfryer-combi-xxl.svg',{'Capacidad':'8.3 L','Potencia':'2,200 W','Resistencias':'Superior con Rapid CombiAir','Temperatura':'40–200 °C','Programas':'22 funciones','Aplicación':'HomeID con cocción guiada'}),
    {'Capacidad':'B','Potencia':'B','Resistencias':'A','Temperatura':'B','Programas':'B','Aplicación':'B'},'A','Philips ofrece más capacidad y programas, pero Cosori cuesta casi la mitad e incorpora doble resistencia para cocinar sin voltear.');
  add('cafetera-superautomatica','Cafeteras Superautomáticas Domésticas','☕',3,'Cafeteras del grano a la taza con molinillo y bebidas de leche.',
    p('DeLonghi','Magnifica S Smart','$599.99 USD','../catalog-cards/delonghi-magnifica-s-smart.svg',{'Presión':'15 bar','Molinillo':'Acero, 13 ajustes','Bebidas':'4 directas','Leche':'Vaporizador manual','Depósito de agua':'1.8 L','Café en grano':'250 g'}),
    p('Philips','Serie 3200 LatteGo','$699.99 USD','philips-3200-lattego.jpg',{'Presión':'15 bar','Molinillo':'Cerámico, 12 ajustes','Bebidas':'5 directas','Leche':'LatteGo automático','Depósito de agua':'1.8 L','Café en grano':'275 g'}),
    {'Presión':'empate','Molinillo':'B','Bebidas':'B','Leche':'B','Depósito de agua':'empate','Café en grano':'B'},'B','Philips 3200 automatiza la leche y ofrece molinillo cerámico; DeLonghi cuesta menos y permite controlar manualmente la textura de la espuma.');
  add('microondas-inverter','Microondas Inverter con Sensor','🍲',2,'Microondas que regulan la potencia continuamente para calentar de forma uniforme.',
    p('Panasonic','NN-SN686S Genius Inverter','$229.99 USD','../catalog-cards/panasonic-nn-sn686s.svg',{'Capacidad':'1.2 pies³','Potencia':'1,200 W','Tecnología':'Inverter','Sensor':'Genius de humedad','Plato':'34 cm','Funciones':'14 menús automáticos'}),
    p('Breville','The Smooth Wave','$399.95 USD','../catalog-cards/breville-smooth-wave.svg',{'Capacidad':'1.2 pies³','Potencia':'1,250 W','Tecnología':'Power Smoothing Inverter','Sensor':'Sensor iQ','Plato':'31.5 cm','Funciones':'15 accesos y cierre suave'}),
    {'Capacidad':'empate','Potencia':'B','Tecnología':'empate','Sensor':'empate','Plato':'A','Funciones':'B'},'A','Breville suma cierre suave y controles refinados, pero Panasonic ofrece cocción inverter y sensor con un plato mayor a un precio mucho menor.');
  add('sous-vide-wifi','Circuladores Sous Vide con Wi-Fi','♨️',3,'Circuladores de inmersión para controlar con precisión tiempo y temperatura.',
    p('Anova','Precision Cooker 3.0','$199.00 USD','../catalog-cards/anova-precision-cooker-30.svg',{'Potencia':'1,100 W','Precisión':'±0.1 °C','Caudal':'8 L/min','Conectividad':'Wi-Fi 2.4 GHz','Protección':'IPX7','Controles':'Pantalla y app'}),
    p('Breville','Joule Turbo','$249.95 USD','../catalog-cards/breville-joule-turbo.svg',{'Potencia':'1,100 W','Precisión':'±0.1 °C','Caudal':'Sin cifra publicada','Conectividad':'Wi-Fi y Bluetooth','Protección':'Resistente al agua','Controles':'App; botón básico'}),
    {'Potencia':'empate','Precisión':'empate','Caudal':'A','Conectividad':'B','Protección':'A','Controles':'A'},'A','Anova permite cocinar aun sin teléfono, publica su caudal y certifica IPX7; Joule Turbo reduce tiempos en recetas compatibles desde su aplicación.');
})();
