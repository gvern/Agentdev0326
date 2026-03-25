/* ================================================
   GUSTAVE PORTFOLIO — script.js
   ================================================ */

// ---- Typed Text Animation ----
const typedLines = [
  'Data Scientist',
  'AI/ML Engineer',
  'GenAI Specialist',
  'LLM Orchestrator',
  'Avisia — Paris',
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function type() {
  const el = document.getElementById('typedText');
  if (!el) return;

  const currentLine = typedLines[lineIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  el.textContent = currentLine.substring(0, charIndex);

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === currentLine.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    lineIndex = (lineIndex + 1) % typedLines.length;
    delay = 400;
  }

  typingTimeout = setTimeout(type, delay);
}

// ---- Navbar scroll behavior ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---- Active nav link on scroll ----
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ---- Mobile nav toggle ----
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  // Ensure accessibility attributes are set
  toggle.setAttribute('aria-controls', 'navLinks');
  toggle.setAttribute(
    'aria-expanded',
    links.classList.contains('open') ? 'true' : 'false'
  );

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
    const isOpen = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ---- Scroll reveal animation ----
function initReveal() {
  const revealEls = document.querySelectorAll(
    '.section-header, .about-text, .about-interests, ' +
    '.skill-category, .project-card, .timeline-item, ' +
    '.contact-info, .contact-card, .tech-badges'
  );

  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    const delay = i % 4;
    if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// ---- Skill bar animation ----
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.getAttribute('data-width');
          fill.style.width = `${width}%`;
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach((fill) => observer.observe(fill));
}

// ---- Smooth scroll for anchor links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---- Init all on DOM ready ----
document.addEventListener('DOMContentLoaded', () => {
  type();
  initNavbar();
  initMobileNav();
  initReveal();
  initSkillBars();
  initSmoothScroll();
});
