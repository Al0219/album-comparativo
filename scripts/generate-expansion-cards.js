/* Genera fichas SVG para productos sin fotografía revisada manualmente. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const files = ['hogar.js','cocina.js','movilidad.js','seguridad.js'];
const trusted = new Set([
  'philips-3200-lattego.jpg'
]);
const colors = { oficina:'#38bdf8',gaming:'#c084fc',creadores:'#f472b6',hogar:'#4ade80',cocina:'#fb923c',movilidad:'#facc15',seguridad:'#94a3b8' };
const escapeXml = value => String(value).replace(/[<>&"']/g, char => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[char]));
const wrap = (text, max=22) => {
  const words=String(text).split(/\s+/), lines=[]; let line='';
  for(const word of words){ if((line+' '+word).trim().length>max && line){lines.push(line);line=word;}else line=(line+' '+word).trim(); }
  if(line) lines.push(line); return lines.slice(0,3);
};

for (const file of files) {
  const full = path.join(root, 'js/data', file);
  let source = fs.readFileSync(full, 'utf8');
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context);
  for (const category of context.window.CATALOG || []) {
    for (const product of [category.productoA, category.productoB]) {
      const oldName = path.basename(product.imagen);
      if (trusted.has(oldName)) continue;
      const svgName = oldName.replace(/\.(?:jpe?g|png|webp)$/i, '.svg');
      source = source.replace(`'${oldName}'`, `'../catalog-cards/${svgName}'`);
      const modelLines = wrap(product.nombre);
      const lineSvg = modelLines.map((line,index) => `<text x="500" y="${545 + index*68}" text-anchor="middle" fill="#0f172a" font-family="Inter,Arial,sans-serif" font-size="50" font-weight="750">${escapeXml(line)}</text>`).join('');
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000"><rect width="1000" height="1000" fill="#fff"/><rect x="70" y="70" width="860" height="860" rx="64" fill="#f8fafc" stroke="${colors[category.seccion]}" stroke-width="8"/><circle cx="500" cy="330" r="145" fill="${colors[category.seccion]}" opacity=".13"/><text x="500" y="390" text-anchor="middle" font-size="150">${escapeXml(category.icono)}</text><text x="500" y="485" text-anchor="middle" fill="${colors[category.seccion]}" font-family="Inter,Arial,sans-serif" font-size="34" font-weight="800" letter-spacing="3">${escapeXml(product.marca.toUpperCase())}</text>${lineSvg}<text x="500" y="825" text-anchor="middle" fill="#64748b" font-family="Inter,Arial,sans-serif" font-size="26">FICHA VISUAL DEL CATÁLOGO</text></svg>`;
      fs.writeFileSync(path.join(root, 'assets/images/catalog-cards', svgName), svg);
    }
  }
  fs.writeFileSync(full, source);
}
console.log('Fichas SVG generadas para los productos sin fotografía verificada.');
