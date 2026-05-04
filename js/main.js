/* ── Typing animation strings ── */
const TYPED_STRINGS = [
  'Developer 💻',
  'Designer 🎨',
  'Problem solver 🧩',
  'Open-source lover 🌍',
];

/* ──────────────────────────────────────────────
   Typing effect
   ────────────────────────────────────────────── */
(function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  let strIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = TYPED_STRINGS[strIndex];
    el.textContent = current.slice(0, charIndex);
    if (isDeleting) { charIndex--; } else { charIndex++; }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex > current.length) {
      isDeleting = true;
      delay = 1800; // pause before deleting
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      charIndex = 0;
      strIndex = (strIndex + 1) % TYPED_STRINGS.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
})();

/* ──────────────────────────────────────────────
   Navbar: scroll shadow + active link highlight
   ────────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  window.addEventListener('scroll', () => {
    // Scrolled class for background
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active link highlight based on scroll position
    const scrollMid = window.scrollY + window.innerHeight / 2;
    let current = sections[0].id;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollMid) current = sec.id;
    });

    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }, { passive: true });
})();

/* ──────────────────────────────────────────────
   Mobile hamburger menu
   ────────────────────────────────────────────── */
(function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const menu  = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  if (!btn || !menu) return;

  function close() {
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  links.forEach(link => link.addEventListener('click', close));
  document.addEventListener('click', e => {
    if (!e.target.closest('#navbar')) close();
  });
})();

/* ──────────────────────────────────────────────
   Scroll-reveal animation (Intersection Observer)
   ────────────────────────────────────────────── */
(function initReveal() {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.skill-card, .project-card, .about-grid, .contact-form, .section-title'
  );
  targets.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();

/* ──────────────────────────────────────────────
   Contact form – client-side validation demo
   ────────────────────────────────────────────── */
(function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className   = 'form-status';

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = '⚠️ Vul alle velden in.';
      status.classList.add('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.textContent = '⚠️ Voer een geldig e-mailadres in.';
      status.classList.add('error');
      return;
    }

    /* In a real project you would POST to a backend / Formspree / etc.
       Here we simply simulate a successful send. */
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Versturen…';

    await new Promise(r => setTimeout(r, 900));

    status.textContent = '✅ Bericht verzonden! Ik neem snel contact met je op.';
    status.classList.add('success');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Verstuur bericht ✉️';
  });
})();
