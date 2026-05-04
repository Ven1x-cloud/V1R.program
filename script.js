/* V1R.program — script.js */

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Navbar scroll style ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Particle generator ──
(function spawnParticles() {
  const container = document.getElementById('particles');
  const colors = ['#00ffff', '#ff00ff', '#39ff14', '#bf00ff'];

  function createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const x = Math.random() * 100;
    const dur = 6 + Math.random() * 10;
    const delay = Math.random() * 8;
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      left: ${x}%;
      bottom: 0;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      background: ${color};
      box-shadow: 0 0 6px ${color};
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
    `;
    container.appendChild(p);

    // Remove after one cycle to keep DOM clean
    setTimeout(() => p.remove(), (dur + delay) * 1000);
  }

  // Spawn initial batch
  for (let i = 0; i < 40; i++) createParticle();

  // Keep spawning
  setInterval(() => {
    if (document.getElementById('particles').children.length < 60) {
      for (let i = 0; i < 5; i++) createParticle();
    }
  }, 2000);
})();

// ── Reveal on scroll ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function addReveal(selector, stagger = 0) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * stagger}s`;
    revealObserver.observe(el);
  });
}

addReveal('.about-grid, .about-text p, .about-facts li', 0.05);
addReveal('.skill-card', 0.08);
addReveal('.project-card', 0.1);
addReveal('.contact-form, .socials', 0.1);
addReveal('.section-title', 0);

// ── Skill bars ──
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      if (fill) {
        const pct = fill.dataset.pct || 0;
        fill.style.width = pct + '%';
      }
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
  barObserver.observe(card);
});

// ── Contact form (demo) ──
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = '✅ Verstuurd!';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    this.reset();
  }, 3000);
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < bottom)
        ? 'var(--neon-cyan)'
        : '';
      link.style.textShadow = (scrollY >= top && scrollY < bottom)
        ? 'var(--glow-cyan)'
        : '';
    }
  });
});
