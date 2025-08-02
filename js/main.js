const translations = {
  en: {
    title: "JoinMe",
    subtitle: "Meet new people in real life",
    nav: {
      home: "Home",
      why: "Why JoinMe",
      how: "How it works",
      safety: "Safety",
      screenshots: "Screenshots",
      faq: "FAQ"
    },
    index: {
      heading: "How JoinMe Works",
      description: "JoinMe helps you meet new people in your area based on your interests. Join events, chat with members, and enjoy real-life meetups."
    },
    why: {
      title: "Why JoinMe?",
      text: "  Sick of scrolling through endless cat videos and memes?\n" +
          "        Ready to take a break from your screen and actually meet cool people nearby?\n" +
          "\n" +
          "        Whether you’re new in town, bored of gaming marathons, or just craving some fresh faces — JoinMe is your go-to app for real-life fun!\n" +
          "\n" +
          "        Find friends who vibe with your interests\n" +
          "\n" +
          "        Join or create local events and hangouts\n" +
          "\n" +
          "        Discover your city through new eyes (and new people!)\n" +
          "\n" +
          "        Turn those online chats into real smiles and high-fives\n" +
          "\n" +
          "        Life’s too short to just watch from the sidelines — jump in and start making memories today with JoinMe!"
    },
    feature1Title: "👤 Profiles",
    feature1Text: "Everyone creates a profile with interests and location. Easy to discover and connect.",
    feature2Title: "💬 Chat",
    feature2Text: "Use our secure chat to communicate before meeting up.",
    feature3Title: "📍 Events",
    feature3Text: "Find public or private meetups, or create your own. It’s your space.",
    ctaButton: "Download the App",
    privacyLink: "Privacy",
    termsLink: "Terms"
  },
  de: {
    title: "JoinMe",
    subtitle: "Lerne neue Leute im echten Leben kennen",
    nav: {
      home: "Startseite",
      why: "Warum JoinMe",
      how: "Wie es funktioniert",
      safety: "Sicherheit",
      screenshots: "Screenshots",
      faq: "FAQ"
    },
    index: {
      heading: "Wie JoinMe funktioniert",
      description: "JoinMe hilft dir, neue Leute in deiner Umgebung zu treffen. Nimm an Events teil, chatte mit anderen und verabrede dich im echten Leben."
    },
    why: {
      title: "Warum JoinMe?",
      text: "JoinMe bietet dir den einfachsten Weg, Menschen mit ähnlichen Interessen kennenzulernen. Egal, ob du neu in der Stadt bist, neue Freunde suchst oder Veranstaltungen organisierst – JoinMe ist der perfekte Startpunkt."
    },
    feature1Title: "👤 Profile",
    feature1Text: "Jeder erstellt ein Profil mit Interessen und Standort. Einfach entdecken und vernetzen.",
    feature2Title: "💬 Chat",
    feature2Text: "Nutze unseren sicheren Chat, um dich vor dem Treffen auszutauschen.",
    feature3Title: "📍 Events",
    feature3Text: "Finde öffentliche oder private Treffen oder erstelle dein eigenes. Du gestaltest es.",
    ctaButton: "App herunterladen",
    privacyLink: "Datenschutz",
    termsLink: "AGB"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  loadLanguage(lang);
  document.getElementById("langSelector").value = lang;
}

function loadLanguage(lang) {
  const t = translations[lang] || translations["en"];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const keys = key.split('.');
    let value = t;
    for (const k of keys) value = value[k];
    if (value) el.innerText = value;
  });
}

const currentLang = localStorage.getItem("lang") || "en";
document.getElementById("langSelector").value = currentLang;
loadLanguage(currentLang);

