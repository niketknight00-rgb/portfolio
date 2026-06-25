// ── NAV TOGGLE (mobile) ──────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── ACTIVE NAV LINK on scroll ────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ── NAV BACKGROUND on scroll ─────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60
    ? 'rgba(13,27,42,0.98)'
    : 'rgba(13,27,42,0.92)';
}, { passive: true });

// ── FADE-UP ANIMATIONS ───────────────────────
function initFadeUps() {
  const targets = document.querySelectorAll(
    '.about-grid, .expertise-card, .timeline-item, ' +
    '.pub-card, .ach-item, .cert-item, .edu-card, ' +
    '.contact-left, .contact-right, .section-title, .section-label'
  );

  targets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}

// ── STAGGERED CARD ANIMATIONS ────────────────
function staggerCards(selector, delay = 100) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * delay}ms`;
  });
}

// ── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    initFadeUps();
    staggerCards('.expertise-card', 80);
    staggerCards('.ach-item', 100);
    staggerCards('.edu-card', 100);
  }
});
