async function loadLanguage(lang = "en") {
  const response = await fetch(`/lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  // Update links
  document.querySelectorAll("[data-href-i18n]").forEach((el) => {
    const hrefKey = el.getAttribute("data-href-i18n");
    el.href = `/${hrefKey}.html?lang=${lang}`;
  });
}
