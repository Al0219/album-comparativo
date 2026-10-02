/* js/search.js — Búsqueda en tiempo real y autocompletado */
(function () {
  'use strict';

  // ── References ──────────────────────────────────────────────────
  const searchInput       = document.getElementById('search-input');
  const searchClear       = document.getElementById('search-clear');
  const autocompleteDD    = document.getElementById('autocomplete-dropdown');

  let searchQuery = '';
  let highlightedIndex = -1;
  let items = [];

  // ── Public API ──────────────────────────────────────────────────
  window.SearchModule = {
    query: () => searchQuery,
    onSearchChange: null,  // callback set by app.js
  };

  // ── Helpers ─────────────────────────────────────────────────────
  function escapeHtml(str) {
    return String(str).replace(/[<>&"']/g, c => ({
      '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const escapedQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return escaped.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<mark>$1</mark>');
  }

  function normalize(str) {
    return String(str)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  // ── Render autocomplete ─────────────────────────────────────────
  function buildItems(query) {
    const catalog = window.CATALOG || [];
    const q = normalize(query);
    if (!q) return [];

    const scored = [];

    catalog.forEach(cat => {
      let score = 0;
      const nameNorm = normalize(cat.nombre);
      const secNorm  = normalize(cat.seccion);
      const descNorm = normalize(cat.descripcion || '');
      const brandA   = normalize(cat.productoA?.marca || '');
      const brandB   = normalize(cat.productoB?.marca || '');
      const nameA    = normalize(cat.productoA?.nombre || '');
      const nameB    = normalize(cat.productoB?.nombre || '');

      if (nameNorm.startsWith(q))         score += 100;
      else if (nameNorm.includes(q))      score += 60;
      if (secNorm.includes(q))            score += 20;
      if (descNorm.includes(q))           score += 10;
      if (brandA.includes(q) || brandB.includes(q)) score += 15;
      if (nameA.includes(q) || nameB.includes(q))   score += 25;

      if (score > 0) scored.push({ cat, score });
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 8).map(s => s.cat);
  }

  function renderAutocomplete(query) {
    items = buildItems(query);
    highlightedIndex = -1;

    if (!query || items.length === 0) {
      closeDropdown();
      return;
    }

    const sectionLabels = {
      internos: 'PC Internos', perifericos: 'Periféricos',
      smartphones: 'Smartphones', laptops: 'Laptops',
      tablets: 'Tablets', audio: 'Audio',
      almacenamiento: 'Almacenamiento', redes: 'Redes',
      accesorios: 'Accesorios', smart: 'Smart Devices',
      oficina: 'Oficina Tech', gaming: 'Consolas & Gaming', creadores: 'Streaming & Creadores',
      hogar: 'Hogar Inteligente', cocina: 'Cocina Tech', movilidad: 'Movilidad Eléctrica'
    };

    autocompleteDD.innerHTML = items.map((cat, i) => `
      <div class="autocomplete-item" data-index="${i}" role="option" tabindex="-1" id="ac-item-${i}">
        <span class="ac-icon">${escapeHtml(cat.icono)}</span>
        <span class="ac-text">${highlightMatch(cat.nombre, query)}</span>
        <span class="ac-section">${escapeHtml(sectionLabels[cat.seccion] || cat.seccion)}</span>
      </div>
    `).join('');

    autocompleteDD.classList.add('open');
    autocompleteDD.querySelectorAll('.autocomplete-item').forEach((el, i) => {
      el.addEventListener('click', () => selectItem(i));
    });
    autocompleteDD.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    autocompleteDD.classList.remove('open');
    autocompleteDD.innerHTML = '';
    autocompleteDD.setAttribute('aria-expanded', 'false');
    highlightedIndex = -1;
    items = [];
  }

  function setHighlight(index) {
    const acItems = autocompleteDD.querySelectorAll('.autocomplete-item');
    acItems.forEach((el, i) => {
      el.classList.toggle('highlighted', i === index);
    });
    highlightedIndex = index;
    if (index >= 0 && acItems[index]) {
      acItems[index].scrollIntoView({ block: 'nearest' });
    }
  }

  function selectItem(index) {
    const cat = items[index];
    if (!cat) return;
    searchInput.value = cat.nombre;
    searchQuery = cat.nombre;
    closeDropdown();
    updateClear();
    if (window.SearchModule.onSearchChange) {
      window.SearchModule.onSearchChange(searchQuery);
    }
    // Open compare immediately if selected from dropdown
    if (window.CompareModule) {
      window.CompareModule.open(cat.id);
    }
  }

  // ── Event Listeners ─────────────────────────────────────────────
  function updateClear() {
    searchClear.classList.toggle('visible', searchInput.value.length > 0);
  }

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    updateClear();
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderAutocomplete(searchQuery);
      if (window.SearchModule.onSearchChange) {
        window.SearchModule.onSearchChange(searchQuery);
      }
    }, 100);
  });

  searchInput.addEventListener('keydown', (e) => {
    const open = autocompleteDD.classList.contains('open');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (open) setHighlight(Math.min(highlightedIndex + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (open) setHighlight(Math.max(highlightedIndex - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (open && highlightedIndex >= 0) {
        selectItem(highlightedIndex);
      } else {
        closeDropdown();
        if (window.SearchModule.onSearchChange) {
          window.SearchModule.onSearchChange(searchQuery);
        }
      }
    } else if (e.key === 'Escape') {
      closeDropdown();
      searchInput.blur();
    }
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    updateClear();
    closeDropdown();
    searchInput.focus();
    if (window.SearchModule.onSearchChange) {
      window.SearchModule.onSearchChange('');
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-wrapper')) closeDropdown();
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) renderAutocomplete(searchInput.value.trim());
  });

})();
