/* ──────────────────────────────────────────────
   Internationalization – supports NL EN DE FR JA ZH
   ────────────────────────────────────────────── */
window.I18N = (function () {
  /* ── Translation table ── */
  const translations = {
    /* ── Dutch ── */
    nl: {
      'nav.home': 'Home',
      'nav.about': 'Over mij',
      'nav.skills': 'Skills',
      'nav.projects': 'Projecten',
      'nav.contact': 'Contact',
      'hamburger.aria': 'Menu openen',
      'hero.greeting': 'Hallo, ik ben',
      'hero.cta.view': 'Bekijk mijn werk',
      'hero.cta.contact': 'Neem contact op',
      'about.title': 'Over mij',
      'about.p1': 'Hey! Ik ben <strong>Ven1x</strong> (ook bekend als <strong>V1R.program</strong>), een gepassioneerde developer die houdt van het bouwen van mooie en functionele websites en applicaties.',
      'about.p2': 'Ik ben altijd op zoek naar nieuwe uitdagingen en technologieën om mezelf verder te ontwikkelen. Of het nu gaat om front-end design, back-end logica of alles daartussenin – ik ga ervoor.',
      'about.cta': 'Samenwerken?',
      'skills.title': 'Skills',
      'skill.frontend': 'Front-end',
      'skill.backend': 'Back-end',
      'skill.tools': 'Tools',
      'skill.database': 'Database',
      'projects.title': 'Projecten',
      'project.v1r.desc': 'Mijn persoonlijke portfolio website gebouwd met vanilla HTML, CSS en JavaScript.',
      'project.new.title': 'Nieuw project',
      'project.new.desc': 'Er komen binnenkort meer projecten. Stay tuned!',
      'contact.title': 'Contact',
      'contact.intro': 'Wil je samenwerken of gewoon een berichtje sturen? Dat kan!',
      'contact.name.label': 'Naam',
      'contact.name.placeholder': 'Jouw naam',
      'contact.email.label': 'E-mail',
      'contact.email.placeholder': 'jouw@email.com',
      'contact.message.label': 'Bericht',
      'contact.message.placeholder': 'Hallo Ven1x, ik wil\u2026',
      'contact.submit': 'Verstuur bericht \u2709\ufe0f',
      'footer.copy': '\u00a9 2026 Ven1x \u2013 Alle rechten voorbehouden',
      'form.sending': 'Versturen\u2026',
      'form.errorFields': '\u26a0\ufe0f Vul alle velden in.',
      'form.errorEmail': '\u26a0\ufe0f Voer een geldig e-mailadres in.',
      'form.success': '\u2705 Bericht verzonden! Ik neem snel contact met je op.',
      typed: ['Developer \ud83d\udcbb', 'Designer \ud83c\udfa8', 'Probleemoplosser \ud83e\udde9', 'Open-source liefhebber \ud83c\udf0d'],
    },

    /* ── English ── */
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hamburger.aria': 'Open menu',
      'hero.greeting': 'Hello, I am',
      'hero.cta.view': 'View my work',
      'hero.cta.contact': 'Get in touch',
      'about.title': 'About me',
      'about.p1': 'Hey! I\'m <strong>Ven1x</strong> (also known as <strong>V1R.program</strong>), a passionate developer who loves building beautiful and functional websites and applications.',
      'about.p2': 'I\'m always looking for new challenges and technologies to further develop myself. Whether it\'s front-end design, back-end logic or everything in between \u2013 I go for it.',
      'about.cta': 'Collaborate?',
      'skills.title': 'Skills',
      'skill.frontend': 'Front-end',
      'skill.backend': 'Back-end',
      'skill.tools': 'Tools',
      'skill.database': 'Database',
      'projects.title': 'Projects',
      'project.v1r.desc': 'My personal portfolio website built with vanilla HTML, CSS and JavaScript.',
      'project.new.title': 'New project',
      'project.new.desc': 'More projects coming soon. Stay tuned!',
      'contact.title': 'Contact',
      'contact.intro': 'Want to collaborate or just send a message? Feel free!',
      'contact.name.label': 'Name',
      'contact.name.placeholder': 'Your name',
      'contact.email.label': 'E-mail',
      'contact.email.placeholder': 'your@email.com',
      'contact.message.label': 'Message',
      'contact.message.placeholder': 'Hello Ven1x, I\'d like to\u2026',
      'contact.submit': 'Send message \u2709\ufe0f',
      'footer.copy': '\u00a9 2026 Ven1x \u2013 All rights reserved',
      'form.sending': 'Sending\u2026',
      'form.errorFields': '\u26a0\ufe0f Please fill in all fields.',
      'form.errorEmail': '\u26a0\ufe0f Please enter a valid email address.',
      'form.success': '\u2705 Message sent! I\'ll get back to you soon.',
      typed: ['Developer \ud83d\udcbb', 'Designer \ud83c\udfa8', 'Problem solver \ud83e\udde9', 'Open-source lover \ud83c\udf0d'],
    },

    /* ── German ── */
    de: {
      'nav.home': 'Startseite',
      'nav.about': '\u00dcber mich',
      'nav.skills': 'F\u00e4higkeiten',
      'nav.projects': 'Projekte',
      'nav.contact': 'Kontakt',
      'hamburger.aria': 'Men\u00fc \u00f6ffnen',
      'hero.greeting': 'Hallo, ich bin',
      'hero.cta.view': 'Meine Arbeit ansehen',
      'hero.cta.contact': 'Kontakt aufnehmen',
      'about.title': '\u00dcber mich',
      'about.p1': 'Hey! Ich bin <strong>Ven1x</strong> (auch bekannt als <strong>V1R.program</strong>), ein leidenschaftlicher Entwickler, der es liebt, sch\u00f6ne und funktionale Websites und Anwendungen zu bauen.',
      'about.p2': 'Ich bin immer auf der Suche nach neuen Herausforderungen und Technologien, um mich weiterzuentwickeln. Ob Front-end-Design, Back-end-Logik oder alles dazwischen \u2013 ich bin dabei.',
      'about.cta': 'Zusammenarbeiten?',
      'skills.title': 'F\u00e4higkeiten',
      'skill.frontend': 'Front-end',
      'skill.backend': 'Back-end',
      'skill.tools': 'Tools',
      'skill.database': 'Datenbank',
      'projects.title': 'Projekte',
      'project.v1r.desc': 'Meine pers\u00f6nliche Portfolio-Website, gebaut mit vanilla HTML, CSS und JavaScript.',
      'project.new.title': 'Neues Projekt',
      'project.new.desc': 'Weitere Projekte kommen bald. Bleib dran!',
      'contact.title': 'Kontakt',
      'contact.intro': 'M\u00f6chtest du zusammenarbeiten oder einfach eine Nachricht senden? Kein Problem!',
      'contact.name.label': 'Name',
      'contact.name.placeholder': 'Dein Name',
      'contact.email.label': 'E-Mail',
      'contact.email.placeholder': 'deine@email.de',
      'contact.message.label': 'Nachricht',
      'contact.message.placeholder': 'Hallo Ven1x, ich m\u00f6chte\u2026',
      'contact.submit': 'Nachricht senden \u2709\ufe0f',
      'footer.copy': '\u00a9 2026 Ven1x \u2013 Alle Rechte vorbehalten',
      'form.sending': 'Senden\u2026',
      'form.errorFields': '\u26a0\ufe0f Bitte alle Felder ausf\u00fcllen.',
      'form.errorEmail': '\u26a0\ufe0f Bitte eine g\u00fcltige E-Mail-Adresse eingeben.',
      'form.success': '\u2705 Nachricht gesendet! Ich melde mich bald.',
      typed: ['Entwickler \ud83d\udcbb', 'Designer \ud83c\udfa8', 'Probleml\u00f6ser \ud83e\udde9', 'Open-source-Fan \ud83c\udf0d'],
    },

    /* ── French ── */
    fr: {
      'nav.home': 'Accueil',
      'nav.about': '\u00c0 propos',
      'nav.skills': 'Comp\u00e9tences',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      'hamburger.aria': 'Ouvrir le menu',
      'hero.greeting': 'Bonjour, je suis',
      'hero.cta.view': 'Voir mon travail',
      'hero.cta.contact': 'Me contacter',
      'about.title': '\u00c0 propos de moi',
      'about.p1': 'Salut\u00a0! Je suis <strong>Ven1x</strong> (aussi connu sous le nom de <strong>V1R.program</strong>), un d\u00e9veloppeur passion\u00e9 qui aime cr\u00e9er des sites web et applications beaux et fonctionnels.',
      'about.p2': 'Je suis toujours \u00e0 la recherche de nouveaux d\u00e9fis et technologies pour me perfectionner. Que ce soit du design front-end, de la logique back-end ou tout ce qui est entre les deux \u2013 je fonce.',
      'about.cta': 'Collaborer\u00a0?',
      'skills.title': 'Comp\u00e9tences',
      'skill.frontend': 'Front-end',
      'skill.backend': 'Back-end',
      'skill.tools': 'Outils',
      'skill.database': 'Base de donn\u00e9es',
      'projects.title': 'Projets',
      'project.v1r.desc': 'Mon site portfolio personnel construit avec du HTML, CSS et JavaScript vanilla.',
      'project.new.title': 'Nouveau projet',
      'project.new.desc': 'D\'autres projets arrivent bient\u00f4t. Restez connect\u00e9s\u00a0!',
      'contact.title': 'Contact',
      'contact.intro': 'Vous voulez collaborer ou envoyer un message\u00a0? C\'est possible\u00a0!',
      'contact.name.label': 'Nom',
      'contact.name.placeholder': 'Votre nom',
      'contact.email.label': 'E-mail',
      'contact.email.placeholder': 'votre@email.fr',
      'contact.message.label': 'Message',
      'contact.message.placeholder': 'Bonjour Ven1x, je voudrais\u2026',
      'contact.submit': 'Envoyer le message \u2709\ufe0f',
      'footer.copy': '\u00a9 2026 Ven1x \u2013 Tous droits r\u00e9serv\u00e9s',
      'form.sending': 'Envoi\u2026',
      'form.errorFields': '\u26a0\ufe0f Veuillez remplir tous les champs.',
      'form.errorEmail': '\u26a0\ufe0f Veuillez entrer une adresse e-mail valide.',
      'form.success': '\u2705 Message envoy\u00e9\u00a0! Je vous r\u00e9pondrai bient\u00f4t.',
      typed: ['D\u00e9veloppeur \ud83d\udcbb', 'Designer \ud83c\udfa8', 'R\u00e9solveur de probl\u00e8mes \ud83e\udde9', 'Passionn\u00e9 open-source \ud83c\udf0d'],
    },

    /* ── Japanese ── */
    ja: {
      'nav.home': '\u30db\u30fc\u30e0',
      'nav.about': '\u81ea\u5df1\u7d39\u4ecb',
      'nav.skills': '\u30b9\u30ad\u30eb',
      'nav.projects': '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8',
      'nav.contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
      'hamburger.aria': '\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304f',
      'hero.greeting': '\u3053\u3093\u306b\u3061\u306f\u3001\u79c1\u306f',
      'hero.cta.view': '\u4f5c\u54c1\u3092\u898b\u308b',
      'hero.cta.contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
      'about.title': '\u81ea\u5df1\u7d39\u4ecb',
      'about.p1': '\u3053\u3093\u306b\u3061\u306f\uff01\u79c1\u306f<strong>Ven1x</strong>\uff08\u4ed6\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u306f<strong>V1R.program</strong>\u3068\u3082\u540d\u4e57\u3063\u3066\u3044\u307e\u3059\uff09\u3001\u7f8e\u3057\u304f\u6a5f\u80fd\u7684\u306a\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3084\u30a2\u30d7\u30ea\u3092\u4f5c\u308b\u3053\u3068\u304c\u5927\u597d\u304d\u306a\u60c5\u71b1\u7684\u306a\u958b\u767a\u8005\u3067\u3059\u3002',
      'about.p2': '\u5e38\u306b\u65b0\u3057\u3044\u30c1\u30e3\u30ec\u30f3\u30b8\u3084\u6280\u8853\u3092\u6c42\u3081\u3066\u81ea\u5206\u3092\u6210\u9577\u3055\u305b\u3066\u3044\u307e\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u30c7\u30b6\u30a4\u30f3\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u30ed\u30b8\u30c3\u30af\u3001\u305d\u3057\u3066\u305d\u306e\u9593\u306b\u3042\u308b\u3059\u3079\u3066\u306b\u5168\u529b\u3067\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002',
      'about.cta': '\u4e00\u7dd2\u306b\u4f5c\u696d\u3057\u307e\u305b\u3093\u304b\uff1f',
      'skills.title': '\u30b9\u30ad\u30eb',
      'skill.frontend': '\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9',
      'skill.backend': '\u30d0\u30c3\u30af\u30a8\u30f3\u30c9',
      'skill.tools': '\u30c4\u30fc\u30eb',
      'skill.database': '\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9',
      'projects.title': '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8',
      'project.v1r.desc': '\u30d0\u30cb\u30e9HTML\u30fbCSS\u30fbJavaScript\u3067\u69cb\u7bc9\u3057\u305f\u500b\u4eba\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3002',
      'project.new.title': '\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8',
      'project.new.desc': '\u8fd1\u65e5\u516c\u958b\u4e88\u5b9a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308a\u307e\u3059\u3002\u304a\u697d\u3057\u307f\u306b\uff01',
      'contact.title': '\u304a\u554f\u3044\u5408\u308f\u305b',
      'contact.intro': '\u4e00\u7dd2\u306b\u4f5c\u696d\u3057\u305f\u3044\u3001\u307e\u305f\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308a\u305f\u3044\u5834\u5408\u306f\u305c\u3072\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\uff01',
      'contact.name.label': '\u540d\u524d',
      'contact.name.placeholder': '\u3042\u306a\u305f\u306e\u540d\u524d',
      'contact.email.label': '\u30e1\u30fc\u30eb',
      'contact.email.placeholder': 'your@email.com',
      'contact.message.label': '\u30e1\u30c3\u30bb\u30fc\u30b8',
      'contact.message.placeholder': '\u3053\u3093\u306b\u3061\u306fVen1x\u3001\u2026',
      'contact.submit': '\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308b \u2709\ufe0f',
      'footer.copy': '\u00a9 2026 Ven1x \u2013 \u5168\u8457\u4f5c\u6a29\u6240\u6709',
      'form.sending': '\u9001\u4fe1\u4e2d\u2026',
      'form.errorFields': '\u26a0\ufe0f \u3059\u3079\u3066\u306e\u9805\u76ee\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'form.errorEmail': '\u26a0\ufe0f \u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'form.success': '\u2705 \u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\uff01\u3059\u3050\u306b\u3054\u9023\u7d61\u3057\u307e\u3059\u3002',
      typed: ['\u958b\u767a\u8005 \ud83d\udcbb', '\u30c7\u30b6\u30a4\u30ca\u30fc \ud83c\udfa8', '\u554f\u984c\u89e3\u6c7a\u8005 \ud83e\udde9', '\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u611b\u597d\u5bb6 \ud83c\udf0d'],
    },

    /* ── Chinese ── */
    zh: {
      'nav.home': '\u9996\u9875',
      'nav.about': '\u5173\u4e8e\u6211',
      'nav.skills': '\u6280\u80fd',
      'nav.projects': '\u9879\u76ee',
      'nav.contact': '\u8054\u7cfb',
      'hamburger.aria': '\u6253\u5f00\u83dc\u5355',
      'hero.greeting': '\u4f60\u597d\uff0c\u6211\u662f',
      'hero.cta.view': '\u67e5\u770b\u6211\u7684\u4f5c\u54c1',
      'hero.cta.contact': '\u8054\u7cfb\u6211',
      'about.title': '\u5173\u4e8e\u6211',
      'about.p1': '\u5618\uff01\u6211\u662f<strong>Ven1x</strong>\uff08\u5728\u5176\u4ed6\u8d26\u6237\u4e0a\u4e5f\u53eb<strong>V1R.program</strong>\uff09\uff0c\u4e00\u4f4d\u70ed\u7231\u6784\u5efa\u7f8e\u89c2\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u7f51\u7ad9\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u8005\u3002',
      'about.p2': '\u6211\u4e00\u76f4\u5728\u5bfb\u627e\u65b0\u7684\u6311\u6218\u548c\u6280\u672f\u6765\u63d0\u5347\u81ea\u5df1\u3002\u65e0\u8bba\u662f\u524d\u7aef\u8bbe\u8ba1\u3001\u540e\u7aef\u903b\u8f91\u8fd8\u662f\u4e24\u8005\u4e4b\u95f4\u7684\u4e00\u5207\u2014\u2014\u6211\u90fd\u4f1a\u5168\u529b\u4ee5\u8d74\u3002',
      'about.cta': '\u5408\u4f5c\uff1f',
      'skills.title': '\u6280\u80fd',
      'skill.frontend': '\u524d\u7aef',
      'skill.backend': '\u540e\u7aef',
      'skill.tools': '\u5de5\u5177',
      'skill.database': '\u6570\u636e\u5e93',
      'projects.title': '\u9879\u76ee',
      'project.v1r.desc': '\u4f7f\u7528\u539f\u751fHTML\u3001CSS\u548cJavaScript\u6784\u5efa\u7684\u4e2a\u4eba\u4f5c\u54c1\u96c6\u7f51\u7ad9\u3002',
      'project.new.title': '\u65b0\u9879\u76ee',
      'project.new.desc': '\u66f4\u591a\u9879\u76ee\u5373\u5c06\u63a8\u51fa\uff0c\u656c\u8bf7\u671f\u5f85\uff01',
      'contact.title': '\u8054\u7cfb',
      'contact.intro': '\u60f3\u8981\u5408\u4f5c\u6216\u8005\u53d1\u9001\u6d88\u606f\uff1f\u6b22\u8fce\u8054\u7cfb\uff01',
      'contact.name.label': '\u59d3\u540d',
      'contact.name.placeholder': '\u60a8\u7684\u59d3\u540d',
      'contact.email.label': '\u7535\u5b50\u90ae\u4ef6',
      'contact.email.placeholder': 'your@email.com',
      'contact.message.label': '\u6d88\u606f',
      'contact.message.placeholder': '\u4f60\u597d Ven1x\uff0c\u6211\u60f3\u2026',
      'contact.submit': '\u53d1\u9001\u6d88\u606f \u2709\ufe0f',
      'footer.copy': '\u00a9 2026 Ven1x \u2013 \u7248\u6743\u6240\u6709',
      'form.sending': '\u53d1\u9001\u4e2d\u2026',
      'form.errorFields': '\u26a0\ufe0f \u8bf7\u586b\u5199\u6240\u6709\u5b57\u6bb5\u3002',
      'form.errorEmail': '\u26a0\ufe0f \u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002',
      'form.success': '\u2705 \u6d88\u606f\u5df2\u53d1\u9001\uff01\u6211\u5f88\u5feb\u4f1a\u4e0e\u60a8\u8054\u7cfb\u3002',
      typed: ['\u5f00\u53d1\u8005 \ud83d\udcbb', '\u8bbe\u8ba1\u5e08 \ud83c\udfa8', '\u95ee\u9898\u89e3\u51b3\u8005 \ud83e\udde9', '\u5f00\u6e90\u7231\u597d\u8005 \ud83c\udf0d'],
    },
  };

  let current = 'nl';

  /* ── Translate a single key ── */
  function t(key) {
    const table = translations[current] || translations.nl;
    return (key in table) ? table[key] : ((translations.nl[key]) || key);
  }

  /* ── Apply a language to the whole page ── */
  function apply(lang) {
    if (!translations[lang]) return;
    current = lang;
    try { localStorage.setItem('lang', lang); } catch (_) { /* private browsing */ }

    document.documentElement.lang = lang;

    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });

    /* innerHTML (elements with embedded tags like <strong>) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    /* aria-label attributes */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    /* keep select in sync */
    const sel = document.getElementById('lang-select');
    if (sel && sel.value !== lang) sel.value = lang;

    /* notify other modules */
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  }

  /* ── Detect and apply initial language ── */
  function init() {
    let saved;
    try { saved = localStorage.getItem('lang'); } catch (_) { saved = null; }
    const browserLang = (navigator.language || 'nl').slice(0, 2);
    const supported = Object.keys(translations);
    const lang = (saved && supported.includes(saved))
      ? saved
      : (supported.includes(browserLang) ? browserLang : 'nl');
    apply(lang);
  }

  /* Public API */
  return {
    translations,
    get current() { return current; },
    t,
    apply,
    init,
  };
})();

/* Auto-initialise (scripts placed before </body> so DOM is ready) */
I18N.init();
