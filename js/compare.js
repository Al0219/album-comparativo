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
  const recommendationText = document.getElementById('recommendation-text');

  // ── Section label map ────────────────────────────────────────────
  const SECTION_LABELS = {
    internos: 'PC Internos', perifericos: 'Periféricos',
    smartphones: 'Smartphones', laptops: 'Laptops',
    tablets: 'Tablets', audio: 'Audio',
    almacenamiento: 'Almacenamiento', redes: 'Redes',
    accesorios: 'Accesorios', smart: 'Smart Devices',
    oficina: 'Oficina Tech', gaming: 'Consolas & Gaming', creadores: 'Streaming & Creadores',
    hogar: 'Hogar Inteligente', cocina: 'Cocina Tech', movilidad: 'Movilidad Eléctrica'
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

  let currentCategory = null;

  function getCategory(id) {
    return (window.CATALOG || []).find(c => c.id === id) || null;
  }

  // ── Open / Close ─────────────────────────────────────────────────
  function openModal(catId) {
    const cat = getCategory(catId);
    if (!cat) return;
    currentCategory = cat;
    populateModal(cat);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;
    // Announce to screen readers
    titleEl.focus();
  }

  function closeModal() {
    currentCategory = null;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // ── Populate ─────────────────────────────────────────────────────
  function populateModal(cat) {
    currentCategory = cat;

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
    priceA.textContent  = window.CurrencyModule ? window.CurrencyModule.formatPrice(pa.precio) : pa.precio;
    brandB.textContent  = pb.marca;
    nameB.textContent   = pb.nombre;
    priceB.textContent  = window.CurrencyModule ? window.CurrencyModule.formatPrice(pb.precio) : pb.precio;

    // Images
    loadImage(imgA, phA, pa.imagen, pa.nombre + ' - ' + pa.marca);
    loadImage(imgB, phB, pb.imagen, pb.nombre + ' - ' + pb.marca);

    // Score labels
    if (scoreALabel) scoreALabel.textContent = pa.marca;
    if (scoreBLabel) scoreBLabel.textContent = pb.marca;

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

  function priceToNumber(price) {
    const value = Number.parseFloat(String(price).replace(/[^\d.]/g, ''));
    return Number.isFinite(value) ? value : Number.POSITIVE_INFINITY;
  }

  function getRecommendation(cat, winsA, winsB) {
    const { productoA: pa, productoB: pb } = cat;
    const explicit = cat.recomendado === 'A' ? 'A' : cat.recomendado === 'B' ? 'B' : null;
    const recommended = explicit || (winsA > winsB ? 'A' : winsB > winsA ? 'B'
      : priceToNumber(pa.precio) <= priceToNumber(pb.precio) ? 'A' : 'B');
    const product = recommended === 'A' ? pa : pb;
    const wins = recommended === 'A' ? winsA : winsB;
    const otherWins = recommended === 'A' ? winsB : winsA;
    const reason = explicit
      ? 'es la opción recomendada para esta categoría.'
      : wins === otherWins
        ? 'ofrece la mejor relación de características y precio ante un empate técnico.'
        : `acumula ${wins} ventaja${wins !== 1 ? 's' : ''} frente a ${otherWins}.`;

    return { product, reason };
  }

  function buildSpecs(cat) {
    const specs   = cat.productoA.specs;
    const specsB  = cat.productoB.specs;
    const winners = cat.ganadores || {};

    let winsA = 0;
    let winsB = 0;

    const keys = [...new Set([...Object.keys(specs), ...Object.keys(specsB)])];
    const rows = keys.map(key => {
      const hasA = Object.prototype.hasOwnProperty.call(specs, key);
      const hasB = Object.prototype.hasOwnProperty.call(specsB, key);
      const valA = hasA ? specs[key] : '—';
      const valB = hasB ? specsB[key] : '—';
      const winner = winners[key] || (hasA && !hasB ? 'A' : hasB && !hasA ? 'B' : 'empate');

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

    // Price row comparison
    const priceNumA = priceToNumber(cat.productoA.precio);
    const priceNumB = priceToNumber(cat.productoB.precio);
    let priceWinner = 'empate';
    let priceSubA = '';
    let priceSubB = '';

    if (priceNumA < priceNumB) {
      priceWinner = 'A';
      const diffUSD = priceNumB - priceNumA;
      const formattedDiff = window.CurrencyModule
        ? window.CurrencyModule.formatDifference(diffUSD)
        : `$${diffUSD.toFixed(2)}`;
      priceSubA = `<span class="price-advantage">Más económico (-${formattedDiff})</span>`;
    } else if (priceNumB < priceNumA) {
      priceWinner = 'B';
      const diffUSD = priceNumA - priceNumB;
      const formattedDiff = window.CurrencyModule
        ? window.CurrencyModule.formatDifference(diffUSD)
        : `$${diffUSD.toFixed(2)}`;
      priceSubB = `<span class="price-advantage">Más económico (-${formattedDiff})</span>`;
    }

    const formattedPriceA = window.CurrencyModule ? window.CurrencyModule.formatPrice(cat.productoA.precio) : escapeHtml(cat.productoA.precio);
    const formattedPriceB = window.CurrencyModule ? window.CurrencyModule.formatPrice(cat.productoB.precio) : escapeHtml(cat.productoB.precio);

    const priceRow = `
      <div class="spec-row spec-row-price" role="row">
        <div class="spec-name" role="rowheader">Precio de referencia</div>
        <div class="spec-value ${priceWinner === 'A' ? 'winner' : priceWinner === 'B' ? 'loser' : ''}" role="cell">
          ${formattedPriceA}
          ${priceSubA}
        </div>
        <div class="spec-value ${priceWinner === 'B' ? 'winner' : priceWinner === 'A' ? 'loser' : ''}" role="cell">
          ${formattedPriceB}
          ${priceSubB}
        </div>
        <div class="spec-indicator" role="cell" title="Precio más conveniente: ${priceWinner === 'A' ? cat.productoA.marca : priceWinner === 'B' ? cat.productoB.marca : 'Empate'}">${priceWinner === 'A' ? '🔵' : priceWinner === 'B' ? '🟣' : '⚪'}</div>
      </div>`;

    specsTable.innerHTML = priceRow + rows.join('');

    // Update score
    if (scoreAWins) scoreAWins.textContent = `${winsA} ventaja${winsA !== 1 ? 's' : ''}`;
    if (scoreBWins) scoreBWins.textContent = `${winsB} ventaja${winsB !== 1 ? 's' : ''}`;

    // Recommendation
    const recommendation = getRecommendation(cat, winsA, winsB);
    recommendationText.textContent = `${recommendation.product.marca} ${recommendation.product.nombre} ${recommendation.reason}`;

    // Verdict
    const originalVerdict = cat.veredicto || '';
    verdictText.textContent = window.CurrencyModule ? window.CurrencyModule.formatVerdictText(originalVerdict) : originalVerdict;
  }

  // ── Refresh prices in modal if open ──────────────────────────────
  function refreshPrices() {
    if (currentCategory && modal.classList.contains('open')) {
      const pa = currentCategory.productoA;
      const pb = currentCategory.productoB;
      priceA.textContent = window.CurrencyModule ? window.CurrencyModule.formatPrice(pa.precio) : pa.precio;
      priceB.textContent = window.CurrencyModule ? window.CurrencyModule.formatPrice(pb.precio) : pb.precio;
      buildSpecs(currentCategory);
    }
  }

  // ── Events ───────────────────────────────────────────────────────
  overlay.addEventListener('click', closeModal);
  backBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && getCategory(hash)) {
      openModal(hash);
    } else if (!hash && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Check initial hash once DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    const initialHash = window.location.hash.replace(/^#/, '');
    if (initialHash && getCategory(initialHash)) {
      openModal(initialHash);
    }
  });

  // ── Public API ──────────────────────────────────────────────────
  window.CompareModule = {
    open: openModal,
    close: closeModal,
    refreshPrices: refreshPrices,
  };

})();
