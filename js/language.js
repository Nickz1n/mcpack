const langToggle = document.getElementById('lang-toggle');

let currentLang = localStorage.getItem('lang') || 'pt';

// Aplica a linguagem ao iniciar
document.addEventListener('DOMContentLoaded', () => {
  langToggle.checked = currentLang === 'en'; // Atualiza estado visual do toggle
  applyLanguage(currentLang);
});

// Troca o idioma ao alternar o switch
langToggle.addEventListener('change', () => {
  currentLang = langToggle.checked ? 'en' : 'pt';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
});

async function applyLanguage(lang) {
  try {
    const res = await fetch(`/lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key]) el.textContent = data[key];
    });
  } catch (err) {
    console.error("Erro ao carregar tradução:", err);
  }
}
