/* Verificación reproducible del catálogo. Ejecutar: node scripts/check-catalog.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
for (const file of fs.readdirSync(path.join(root, 'js/data')).filter(f => f.endsWith('.js')).sort()) {
  vm.runInContext(fs.readFileSync(path.join(root, 'js/data', file), 'utf8'), context, { filename: file });
}
const catalog = context.window.CATALOG || [];
const errors = [], warnings = [], ids = new Set(), products = new Map();
const expansionSections = new Set(['oficina', 'gaming', 'creadores', 'hogar', 'cocina', 'movilidad', 'seguridad']);
for (const category of catalog) {
  if (ids.has(category.id)) errors.push(`ID repetido: ${category.id}`);
  ids.add(category.id);
  if (category.productoA.marca.toLowerCase() === category.productoB.marca.toLowerCase()) errors.push(`Misma marca: ${category.id}`);
  if (!['A', 'B'].includes(category.recomendado)) errors.push(`Recomendación inválida: ${category.id}`);
  if (Object.keys(category.productoA.specs).sort().join('|') !== Object.keys(category.productoB.specs).sort().join('|')) errors.push(`Specs desalineadas: ${category.id}`);
  for (const product of [category.productoA, category.productoB]) {
    const key = `${product.marca} ${product.nombre}`.toLocaleLowerCase('es');
    if (products.has(key)) {
      const previous = products.get(key);
      const message = `Producto repetido: ${product.marca} ${product.nombre} (${previous.id} y ${category.id})`;
      if (expansionSections.has(previous.section) || expansionSections.has(category.seccion)) errors.push(message);
      else warnings.push(message);
    }
    products.set(key, { id: category.id, section: category.seccion });
    if (!fs.existsSync(path.join(root, product.imagen))) errors.push(`Imagen faltante: ${product.imagen}`);
  }
}
const sections = new Set(catalog.map(c => c.seccion));
console.log(`${catalog.length} categorías · ${catalog.length * 2} fichas de producto (${products.size} modelos únicos) · ${sections.size} secciones`);
if (warnings.length) console.warn(`Avisos heredados del catálogo base:\n${warnings.join('\n')}`);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log('Catálogo válido: sin duplicados, marcas iguales, specs desalineadas ni imágenes faltantes.');
