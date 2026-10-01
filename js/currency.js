/* js/currency.js — Conversor y selector de moneda (GTQ / USD) */
(function () {
  'use strict';

  // Tasa de cambio de referencia comercial en Guatemala: 1 USD ≈ 7.80 GTQ
  const EXCHANGE_RATE = 7.80;
  const STORAGE_KEY = 'techcompare-currency';

  // Estado inicial: GTQ por defecto o el valor guardado
  let currentCurrency = 'GTQ';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'GTQ' || saved === 'USD') {
      currentCurrency = saved;
    }
  } catch (_) {
    currentCurrency = 'GTQ';
  }

  function parseUSD(raw) {
    if (typeof raw === 'number') return raw;
    const val = Number.parseFloat(String(raw).replace(/[^\d.]/g, ''));
    return Number.isFinite(val) ? val : 0;
  }

  function formatPrice(rawPrice) {
    const usd = parseUSD(rawPrice);
    if (currentCurrency === 'GTQ') {
      const gtq = usd * EXCHANGE_RATE;
      return `Q ${gtq.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} GTQ`;
    }
    return `$${usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  function formatDifference(diffUSD) {
    if (currentCurrency === 'GTQ') {
      const diffGTQ = diffUSD * EXCHANGE_RATE;
      return `Q ${diffGTQ.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${diffUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function formatVerdictText(text) {
    if (!text || currentCurrency === 'USD') return text;
    return text.replace(/\$([0-9,]+(?:\.[0-9]+)?)/g, (match, p1) => {
      const usdVal = Number.parseFloat(p1.replace(/,/g, ''));
      if (Number.isFinite(usdVal)) {
        const gtqVal = Math.round(usdVal * EXCHANGE_RATE);
        return `Q ${gtqVal.toLocaleString('es-GT')}`;
      }
      return match;
    });
  }

  function updateButtonsUI() {
    const buttons = document.querySelectorAll('.currency-btn');
    buttons.forEach(btn => {
      const isActive = btn.dataset.currency === currentCurrency;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function setCurrency(newCurrency) {
    if (newCurrency !== 'GTQ' && newCurrency !== 'USD') return;
    currentCurrency = newCurrency;
    try {
      localStorage.setItem(STORAGE_KEY, currentCurrency);
    } catch (_) {
      // Fallback silencioso
    }
    updateButtonsUI();

    // Notificar al módulo de comparación si está activo
    if (window.CompareModule && typeof window.CompareModule.refreshPrices === 'function') {
      window.CompareModule.refreshPrices();
    }
  }

  function getCurrency() {
    return currentCurrency;
  }

  function init() {
    updateButtonsUI();

    const container = document.querySelector('.currency-switch');
    if (container) {
      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.currency-btn');
        if (btn && btn.dataset.currency) {
          setCurrency(btn.dataset.currency);
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.CurrencyModule = {
    getCurrency,
    setCurrency,
    formatPrice,
    formatDifference,
    formatVerdictText,
    EXCHANGE_RATE,
  };
})();
