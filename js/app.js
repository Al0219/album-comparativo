/* js/app.js — Orquestador principal de la aplicación */
(function () {
  'use strict';

  // ── State ────────────────────────────────────────────────────────
  let activeSection   = 'todos';
  let maxComplexity   = 5;
  let sortOrder       = 'complejidad-asc';
  let searchQuery     = '';

  // ── References ───────────────────────────────────────────────────
  const categoryGrid    = document.getElementById('category-grid');
  const noResults       = document.getElementById('no-results');
  const resultsCount    = document.getElementById('results-count');
  const sectionTabs     = document.querySelectorAll('.section-tab');
  const complexityRange = document.getElementById('complexity-range');
  const complexityDisp  = document.getElementById('complexity-display');
  const sortSelect      = document.getElementById('sort-select');
  const themeToggle     = document.getElementById('theme-toggle');
  const logoBtn         = document.getElementById('logo-btn');

  // ── Section color mapping ────────────────────────────────────────
  const SECTION_COLORS = {
    internos: 'hsl(220, 92%, 60%)', perifericos: 'hsl(188, 92%, 56%)',
    smartphones: 'hsl(152, 72%, 52%)', laptops: 'hsl(265, 82%, 66%)',
    tablets: 'hsl(28, 92%, 62%)', audio: 'hsl(328, 82%, 66%)',
    almacenamiento: 'hsl(44, 92%, 60%)', redes: 'hsl(174, 76%, 52%)',
    accesorios: 'hsl(215, 18%, 62%)', smart: 'hsl(0, 82%, 66%)',
    oficina: 'hsl(205, 85%, 55%)', gaming: 'hsl(280, 85%, 65%)',
    creadores: 'hsl(340, 85%, 62%)', hogar: 'hsl(140, 70%, 50%)',
    cocina: 'hsl(15, 90%, 58%)', movilidad: 'hsl(160, 80%, 45%)',
    seguridad: 'hsl(208, 16%, 65%)'
  };

  const SECTION_LABELS = {
    internos: '🔧 PC Internos', perifericos: '🖱️ Periféricos',
    smartphones: '📱 Smartphones', laptops: '💻 Laptops',
    tablets: '📟 Tablets', audio: '🎧 Audio',
    almacenamiento: '💾 Almacenamiento', redes: '🌐 Redes',
    accesorios: '🔌 Accesorios', smart: '📺 Smart Devices',
    oficina: '🖨️ Oficina', gaming: '🎮 Gaming', creadores: '🎙️ Creadores',
    hogar: '🏠 Hogar', cocina: '🍳 Cocina', movilidad: '🛴 Movilidad',
    seguridad: '🛡️ Seguridad'
  };

  // ── Normalize (accent-insensitive search) ────────────────────────
  function normalize(str) {
    return String(str).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  // ── Filter & sort catalog ────────────────────────────────────────
  function getFiltered() {
    const catalog = window.CATALOG || [];
    const q = normalize(searchQuery);

    let filtered = catalog.filter(cat => {
      // Section filter
      if (activeSection !== 'todos' && cat.seccion !== activeSection) return false;
      // Complexity filter
      if (cat.complejidad > maxComplexity) return false;
      // Search filter
      if (q) {
        const haystack = normalize([
          cat.nombre, cat.seccion, cat.descripcion || '',
          cat.productoA?.marca || '', cat.productoB?.marca || '',
          cat.productoA?.nombre || '', cat.productoB?.nombre || '',
        ].join(' '));
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'complejidad-asc':  return a.complejidad - b.complejidad;
        case 'complejidad-desc': return b.complejidad - a.complejidad;
        case 'alfa':             return a.nombre.localeCompare(b.nombre, 'es');
        case 'alfa-desc':        return b.nombre.localeCompare(a.nombre, 'es');
        default: return 0;
      }
    });

    return filtered;
  }

  // ── Stars helper ─────────────────────────────────────────────────
  function starsHTML(n) {
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }

  function complexityStarsLabel(n) {
    const labels = ['', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
    return labels[n] || '';
  }

  // ── Build card HTML ──────────────────────────────────────────────
  function buildCard(cat, index, total) {
    const color = SECTION_COLORS[cat.seccion] || 'hsl(220, 92%, 60%)';
    const sectionLabel = (SECTION_LABELS[cat.seccion] || cat.seccion).replace(/^[\S]+\s/, '');
    const delay = Math.min(index * 30, 400);

    return `
      <article
        class="category-card"
        role="listitem"
        style="--card-color: ${color}; animation-delay: ${delay}ms"
        data-id="${cat.id}"
        tabindex="0"
        aria-label="${cat.nombre} — ${sectionLabel}"
      >
        <div class="card-top">
          <div class="card-icon" aria-hidden="true">${cat.icono}</div>
          <span class="section-badge badge-${cat.seccion}">${sectionLabel}</span>
        </div>
        <div class="card-number">#${String(index + 1).padStart(3, '0')} de ${total}</div>
        <h2 class="card-name">${cat.nombre}</h2>
        <p class="card-description">${cat.descripcion || ''}</p>
        <div class="card-footer">
          <div>
            <div class="card-stars" aria-label="Complejidad ${cat.complejidad} de 5">${starsHTML(cat.complejidad)}</div>
            <div class="card-brands">${cat.productoA?.marca || ''} vs ${cat.productoB?.marca || ''}</div>
          </div>
          <div class="card-cta" aria-hidden="true">▶</div>
        </div>
      </article>`;
  }

  // ── Render gallery ───────────────────────────────────────────────
  function renderGallery() {
    const filtered = getFiltered();
    const total = filtered.length;

    // Update count
    const totalInSection = activeSection === 'todos'
      ? (window.CATALOG || []).length
      : (window.CATALOG || []).filter(c => c.seccion === activeSection).length;

    resultsCount.textContent = `${total} categoría${total !== 1 ? 's' : ''}`;

    if (total === 0) {
      categoryGrid.innerHTML = '';
      noResults.classList.remove('hidden');
      return;
    }

    noResults.classList.add('hidden');
    categoryGrid.innerHTML = filtered.map((cat, i) => buildCard(cat, i, total)).join('');

    // Attach click handlers
    categoryGrid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        if (window.CompareModule) window.CompareModule.open(card.dataset.id);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (window.CompareModule) window.CompareModule.open(card.dataset.id);
        }
      });
    });
  }

  // ── Theme toggle ─────────────────────────────────────────────────
  function initTheme() {
    const saved = localStorage.getItem('techcompare-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('techcompare-theme', next);
  });

  // ── Section tabs ─────────────────────────────────────────────────
  sectionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sectionTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeSection = tab.dataset.section;
      renderGallery();
    });
  });

  // ── Complexity range ─────────────────────────────────────────────
  complexityRange.addEventListener('input', () => {
    maxComplexity = parseInt(complexityRange.value);
    const stars = complexityStarsLabel(maxComplexity);
    complexityDisp.textContent = stars;
    complexityDisp.setAttribute('aria-valuetext', `${maxComplexity} estrellas`);
    renderGallery();
  });

  // ── Sort ─────────────────────────────────────────────────────────
  sortSelect.addEventListener('change', () => {
    sortOrder = sortSelect.value;
    renderGallery();
  });

  // ── Search module hook ───────────────────────────────────────────
  if (window.SearchModule) {
    window.SearchModule.onSearchChange = (q) => {
      searchQuery = q;
      renderGallery();
    };
  }

  // ── Logo resets ──────────────────────────────────────────────────
  logoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sectionTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelector('[data-section="todos"]').classList.add('active');
    document.querySelector('[data-section="todos"]').setAttribute('aria-selected', 'true');
    activeSection = 'todos';
    document.getElementById('search-input').value = '';
    searchQuery = '';
    if (window.SearchModule) window.SearchModule.onSearchChange('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderGallery();
  });

  // ── Animated counters ────────────────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const step = 16;
    const steps = Math.floor(duration / step);
    let current = 0;
    let count = 0;

    const timer = setInterval(() => {
      count++;
      current = Math.round(target * (count / steps));
      el.textContent = current;
      if (count >= steps) {
        el.textContent = target;
        clearInterval(timer);
      }
    }, step);
  }

  function initCounters() {
    const catalog = window.CATALOG || [];
    const totalCats = catalog.length;
    const totalProds = totalCats * 2;
    const uniqueSections = new Set(catalog.map(c => c.seccion)).size;

    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers[0]) {
      statNumbers[0].dataset.target = totalCats;
      statNumbers[0].setAttribute('aria-label', `${totalCats} categorías`);
    }
    if (statNumbers[1]) {
      statNumbers[1].dataset.target = totalProds;
      statNumbers[1].setAttribute('aria-label', `${totalProds} productos`);
    }
    if (statNumbers[2]) {
      statNumbers[2].dataset.target = uniqueSections;
      statNumbers[2].setAttribute('aria-label', `${uniqueSections} secciones`);
    }

    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
      heroBadge.innerHTML = `<span class="badge-dot"></span>${totalCats} Categorías · ${totalProds} Productos · ${uniqueSections} Secciones`;
    }

    const footerText = document.querySelector('.footer-text');
    if (footerText) {
      footerText.textContent = `Álbum comparativo de tecnología — ${totalCats} categorías · ${totalProds} productos · ${uniqueSections} secciones`;
    }

    const counters = document.querySelectorAll('.stat-number[data-target]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
  }

  // ── Init ─────────────────────────────────────────────────────────
  function init() {
    initTheme();
    renderGallery();
    initCounters();

    // Sticky header height adjustment for filters
    const header = document.getElementById('site-header');
    const filters = document.querySelector('.filters-section');
    if (header && filters) {
      const updateFiltersTop = () => {
        filters.style.top = header.offsetHeight + 'px';
      };
      updateFiltersTop();
      window.addEventListener('resize', updateFiltersTop);
    }
  }

  // Wait for all data scripts to be ready (they all push synchronously)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
