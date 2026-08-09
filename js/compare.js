/* js/compare.js — Panel de comparativa */
(function () {
  'use strict';

  // ── References ──────────────────────────────────────────────────
  const modal       = document.getElementById('compare-modal');
  const overlay     = document.getElementById('compare-overlay');
  const backBtn     = document.getElementById('compare-back-btn');
  const panel       = document.getElementById('compare-panel');

  // Header
  const titleEl       = document.getElementById('compare-title');
  const iconEl        = document.getElementById('compare-icon');
  const sectionBadge  = document.getElementById('compare-section-badge');
  const starsEl       = document.getElementById('compare-stars');
  const numberEl      = document.getElementById('compare-number');
  const descEl        = document.getElementById('compare-description');

  // Products
  const imgA    = document.getElementById('product-a-img');
  const imgB    = document.getElementById('product-b-img');
  const phA     = document.getElementById('product-a-placeholder');
  const phB     = document.getElementById('product-b-placeholder');
  const brandA  = document.getElementById('product-a-brand');
  const brandB  = document.getElementById('product-b-brand');
  const nameA   = document.getElementById('product-a-name');
  const nameB   = document.getElementById('product-b-name');
  const priceA  = document.getElementById('product-a-price');
  const priceB  = document.getElementById('product-b-price');

  // Score
  const scoreAWins = document.getElementById('score-a-wins');
  const scoreBWins = document.getElementById('score-b-wins');
  const scoreALabel = document.getElementById('score-a-label');
  const scoreBLabel = document.getElementById('score-b-label');

  // Specs
  const specsTable = document.getElementById('specs-table');

  // Verdict
  const verdictText = document.getElementById('verdict-text');

  // ── Section label map ────────────────────────────────────────────
  const SECTION_LABELS = {
    internos: 'PC Internos', perifericos: 'Periféricos',
    smartphones: 'Smartphones', laptops: 'Laptops',
    tablets: 'Tablets', audio: 'Audio',
    almacenamiento: 'Almacenamiento', redes: 'Redes',
    accesorios: 'Accesorios', smart: 'Smart Devices'
  };

  // ── Helpers ─────────────────────────────────────────────────────
  function escapeHtml(str) {
    return String(str).replace(/[<>&"']/g, c => ({
      '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function starsHTML(n) {
    const full = Math.round(n);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }

  function getCategory(id) {
    return (window.CATALOG || []).find(c => c.id === id) || null;
  }

  // ── Open / Close ─────────────────────────────────────────────────
  function openModal(catId) {
    const cat = getCategory(catId);
    if (!cat) return;
    populateModal(cat);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;
    // Announce to screen readers
    titleEl.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // ── Populate ─────────────────────────────────────────────────────
  function populateModal(cat) {
    // Header
    iconEl.textContent = cat.icono;
    titleEl.textContent = cat.nombre;
    sectionBadge.textContent = SECTION_LABELS[cat.seccion] || cat.seccion;
    sectionBadge.className = `section-badge badge-${cat.seccion}`;
    starsEl.textContent = starsHTML(cat.complejidad);
    starsEl.setAttribute('aria-label', `Complejidad: ${cat.complejidad} de 5 estrellas`);
    numberEl.textContent = `#${String((window.CATALOG || []).indexOf(cat) + 1).padStart(3, '0')}`;
    descEl.textContent = cat.descripcion || '';

    // Products
    const pa = cat.productoA;
    const pb = cat.productoB;

    brandA.textContent  = pa.marca;
    nameA.textContent   = pa.nombre;
    priceA.textContent  = pa.precio;
    brandB.textContent  = pb.marca;
    nameB.textContent   = pb.nombre;
    priceB.textContent  = pb.precio;

    // Images
    loadImage(imgA, phA, pa.imagen, pa.nombre + ' - ' + pa.marca);
    loadImage(imgB, phB, pb.imagen, pb.nombre + ' - ' + pb.marca);

    // Score labels
    scoreALabel.textContent = pa.marca;
    scoreBLabel.textContent = pb.marca;

    // Specs + scores
    buildSpecs(cat);
  }

  function loadImage(img, placeholder, src, alt) {
    img.style.display = 'none';
    placeholder.style.display = 'block';

    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = src;
      img.alt = alt;
      img.style.display = 'block';
      placeholder.style.display = 'none';
    };
    tempImg.onerror = () => {
      placeholder.style.display = 'block';
      img.style.display = 'none';
    };
    tempImg.src = src;
  }

  function buildSpecs(cat) {
    const specs   = cat.productoA.specs;
    const specsB  = cat.productoB.specs;
    const winners = cat.ganadores || {};

    let winsA = 0;
    let winsB = 0;

    const rows = Object.keys(specs).map(key => {
      const valA   = specs[key]   || '—';
      const valB   = specsB[key]  || '—';
      const winner = winners[key] || 'empate';

      let classA = '', classB = '', indicator = '–';

      if (winner === 'A') {
        classA = 'winner'; classB = 'loser'; indicator = '🔵'; winsA++;
      } else if (winner === 'B') {
        classB = 'winner'; classA = 'loser'; indicator = '🟣'; winsB++;
      } else {
        indicator = '⚪';
      }

      return `
        <div class="spec-row" role="row">
          <div class="spec-name" role="rowheader">${escapeHtml(key)}</div>
          <div class="spec-value ${classA}" role="cell">${escapeHtml(valA)}</div>
          <div class="spec-value ${classB}" role="cell">${escapeHtml(valB)}</div>
          <div class="spec-indicator" role="cell" title="Ventaja: ${winner === 'A' ? cat.productoA.marca : winner === 'B' ? cat.productoB.marca : 'Empate'}">${indicator}</div>
        </div>`;
    });

    specsTable.innerHTML = rows.join('');

    // Update score
    scoreAWins.textContent = `${winsA} ventaja${winsA !== 1 ? 's' : ''}`;
    scoreBWins.textContent = `${winsB} ventaja${winsB !== 1 ? 's' : ''}`;

    // Verdict
    verdictText.textContent = cat.veredicto || '';
  }

  // ── Events ───────────────────────────────────────────────────────
  overlay.addEventListener('click', closeModal);
  backBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ── Public API ──────────────────────────────────────────────────
  window.CompareModule = {
    open: openModal,
    close: closeModal,
  };

})();
