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
      documentation: "Documentation",
      faq: "FAQ"
    },
    index: {
      heading: "How JoinMe Works",
      description: "JoinMe helps you meet new people in your area based on your interests. Join events, chat with members, and enjoy real-life meetups."
    },
    safety: {
      title: "Safety Standards",
      intro: "We are committed to keeping JoinMe a safe space for all users, especially protecting minors from abuse or exploitation.",
      section1: { title: "1. Content Moderation", text: "Inappropriate content or behavior can be reported by users directly within the app. All reports are reviewed promptly to ensure a safe environment for everyone." },
      section2: { title: "2. Age Restrictions", text: "JoinMe is intended for users 18 and older. We monitor reports of underage usage and remove accounts that violate this policy." },
      section3: { title: "3. Reporting Tools", text: "Users can report harmful behavior through the app. We respond to all safety-related reports within 24 hours." },
      section4: { title: "4. Law Enforcement Cooperation", text: "We report CSAE content to appropriate authorities, including NCMEC or INHOPE." },
      section5: { title: "5. Contact Information", text: "To report abuse, email us at" },
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
    registered: {
      pageTitle: "Registration Successful",
      title: "You're all set!",
      text: "🎉 Your registration was successful. You can now close this page and return to the JoinMe app to start using it."
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
      documentation: "Dokumentation",
      faq: "FAQ"
    },
    index: {
      heading: "Wie JoinMe funktioniert",
      description: "JoinMe hilft dir, neue Leute in deiner Umgebung zu treffen. Nimm an Events teil, chatte mit anderen und verabrede dich im echten Leben."
    },
    safety: {
      title: "Sicherheitsrichtlinien",
      intro: "Wir setzen uns dafür ein, JoinMe zu einem sicheren Ort für alle Nutzer zu machen, insbesondere zum Schutz von Minderjährigen vor Missbrauch oder Ausbeutung.",
      section1: { title: "1. Inhaltsmoderation", text: "Unangemessene Inhalte oder Verhaltensweisen können direkt in der App von Nutzern gemeldet werden. Alle Meldungen werden zeitnah geprüft, um eine sichere Umgebung für alle zu gewährleisten." },
      section2: { title: "2. Altersbeschränkungen", text: "JoinMe ist für Nutzer ab 18 Jahren vorgesehen. Wir überwachen Berichte über Minderjährige und entfernen entsprechende Konten." },
      section3: { title: "3. Meldetools", text: "Nutzer können schädliches Verhalten direkt in der App melden. Wir reagieren innerhalb von 24 Stunden auf sicherheitsrelevante Meldungen." },
      section4: { title: "4. Zusammenarbeit mit Behörden", text: "Wir melden CSAE-Inhalte an die zuständigen Behörden, einschließlich NCMEC oder INHOPE." },
      section5: { title: "5. Kontaktinformation", text: "Um Missbrauch zu melden, senden Sie uns eine E-Mail an" },
    },
    why: {
      title: "Warum JoinMe?",
      text: "JoinMe bietet dir den einfachsten Weg, Menschen mit ähnlichen Interessen kennenzulernen. Egal, ob du neu in der Stadt bist, neue Freunde suchst oder Veranstaltungen organisierst – JoinMe ist der perfekte Startpunkt."
    },
    registered: {
      pageTitle: "Registrierung erfolgreich",
      title: "Du bist startklar!",
      text: "🎉 Deine Registrierung war erfolgreich. Du kannst diese Seite jetzt schließen und zur JoinMe-App zurückkehren, um loszulegen."
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

