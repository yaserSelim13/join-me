const translations = {
  en: {
    nav_why: "Why JoinMe",
    nav_how: "How it Works",
    nav_safety: "Safety",
    nav_screenshots: "Preview",
    nav_faq: "FAQ",
    nav_download: "Download",
  },
  de: {
    nav_why: "Warum JoinMe",
    nav_how: "So funktioniert's",
    nav_safety: "Sicherheit",
    nav_screenshots: "Vorschau",
    nav_faq: "FAQ",
    nav_download: "Download",
  }
};

function loadLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}