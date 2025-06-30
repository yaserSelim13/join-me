
function setLang(lang) {
  localStorage.setItem('lang', lang);
  updateLangContent(lang);
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

function getLangFromURLOrStorage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  return langParam || localStorage.getItem('lang') || 'en';
}

function updateLangContent(lang) {
  document.querySelectorAll('[data-en], [data-de]').forEach(el => {
    el.innerText = lang === 'de' ? el.getAttribute('data-de') : el.getAttribute('data-en');
  });

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLangFromURLOrStorage();
  updateLangContent(lang);

  document.querySelectorAll('[data-set-lang]').forEach(button => {
    button.addEventListener('click', () => setLang(button.getAttribute('data-set-lang')));
  });
});
