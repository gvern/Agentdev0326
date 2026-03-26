/* ================================================
   GUSTAVE PORTFOLIO — script.js
   ================================================ */

// ---- Translations ----
const translations = {
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    'hero.badge': 'Disponible pour nouveaux projets',
    'hero.greeting': 'Bonjour, je suis',
    'hero.tagline': 'Je transforme la donnée brute en intelligence actionnable — <br class="break-md" />des <strong>LLMs</strong> aux <strong>pipelines MLOps</strong>, en passant par l\'<strong>orchestration d\'agents IA</strong>.',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',
    'hero.scroll': 'Scroll',
    'about.tag': '01 / À propos',
    'about.title': 'Qui suis-je ?',
    'about.lead': 'Data Scientist & AI/ML Engineer passionné, je construis des solutions IA concrètes qui créent de la valeur réelle pour les entreprises.',
    'about.p1': 'Chez <strong>Avisia</strong>, cabinet parisien spécialisé en data & IA, j\'accompagne des clients dans leur transformation data — de la conception d\'architectures cloud à l\'industrialisation de modèles ML, en passant par le développement d\'agents IA autonomes.',
    'about.p2': 'Ma passion : faire dialoguer la <strong>rigueur scientifique</strong> avec la <strong>créativité technique</strong> pour résoudre des problèmes complexes. Je crois que l\'IA n\'est utile que lorsqu\'elle est comprise, maîtrisée et alignée sur les besoins humains.',
    'about.interests.title': 'En dehors du code',
    'about.interest.run': 'Course à pied',
    'about.interest.swim': 'Natation',
    'about.interest.cali': 'Calisthenics',
    'about.interest.photo': 'Photographie',
    'about.interest.wood': 'Menuiserie',
    'skills.tag': '02 / Compétences',
    'skills.title': 'Stack technique',
    'skill.level.expert': 'Expert',
    'skill.level.advanced': 'Avancé',
    'skill.level.intermediate': 'Intermédiaire',
    'projects.tag': '03 / Projets',
    'projects.title': 'Réalisations',
    'project1.title': 'Agent NL2SQL Multi-Table',
    'project1.desc': 'Agent IA capable de répondre à des questions en langage naturel sur des bases de données complexes multi-tables. Utilise LangGraph pour l\'orchestration et Vertex AI pour l\'inférence.',
    'project2.title': 'Pipeline RAG d\'entreprise',
    'project2.desc': 'Système de RAG (Retrieval-Augmented Generation) pour l\'analyse de documents internes d\'entreprise. Ingestion, chunking intelligent, re-ranking et génération contextualisée.',
    'project3.title': 'Workflow Automation avec n8n',
    'project3.desc': 'Automatisation de workflows data complexes via n8n : ingestion de sources hétérogènes, enrichissement IA, alerting intelligent et reporting automatique pour clients B2B.',
    'project4.title': 'Plateforme MLOps sur GCP',
    'project4.desc': 'Architecture MLOps complète sur Google Cloud : entraînement automatisé avec Vertex AI Pipelines, registry de modèles, monitoring de drift et déploiement continu.',
    'project5.title': 'Dashboard Analytics Temps Réel',
    'project5.desc': 'Interface Next.js connectée à BigQuery pour visualiser des métriques business en temps réel. Filtres dynamiques, exports automatiques et alertes configurables.',
    'project6.title': 'Fine-tuning LLM domaine métier',
    'project6.desc': 'Fine-tuning d\'un modèle open-source (Mistral) sur données métier spécifiques avec LoRA/QLoRA. Évaluation rigoureuse, comparaison avec GPT-4 et déploiement optimisé.',
    'experience.tag': '04 / Expérience',
    'experience.title': 'Parcours',
    'exp1.role': 'Data Scientist & AI/ML Engineer',
    'exp1.date': '2023 — Présent',
    'exp1.task1': 'Conception et déploiement d\'agents IA autonomes (LangGraph, LangChain) pour automatiser des processus métier complexes',
    'exp1.task2': 'Développement de solutions NL2SQL permettant d\'interroger des entrepôts de données en langage naturel',
    'exp1.task3': 'Construction de pipelines MLOps sur GCP (Vertex AI, BigQuery, Cloud Run) de bout en bout',
    'exp1.task4': 'Automatisation de workflows data avec n8n et intégration d\'APIs LLM (OpenAI, Anthropic, Mistral)',
    'exp1.task5': 'Accompagnement et formation de clients sur les usages GenAI & bonnes pratiques prompt engineering',
    'exp2.role': 'Stage — Data Scientist',
    'exp2.date': '2022 — 2023',
    'exp2.task1': 'Modèles de scoring crédit & détection de fraude (XGBoost, Random Forest)',
    'exp2.task2': 'Pipeline de feature engineering sur données transactionnelles (Pandas, Spark)',
    'exp2.task3': 'Mise en production via API FastAPI déployée sur Cloud Run',
    'exp3.role': 'Master en Data Science & IA',
    'exp3.date': '2020 — 2022',
    'exp3.task1': 'Spécialisation Machine Learning, Deep Learning et traitement du langage naturel',
    'exp3.task2': 'Projets de recherche sur l\'interprétabilité des modèles (XAI)',
    'exp3.task3': 'Mention Très Bien — Mémoire sur les architectures Transformer pour la NL2SQL',
    'exp4.role': 'Licence en Mathématiques Appliquées',
    'exp4.date': '2017 — 2020',
    'exp4.task1': 'Statistiques, probabilités, algèbre linéaire et optimisation',
    'exp4.task2': 'Initiation à la programmation Python et R',
    'contact.tag': '05 / Contact',
    'contact.title': 'Travaillons ensemble',
    'contact.subtitle': 'Vous avez un projet data ou IA ambitieux ? Je serais ravi d\'en discuter.',
    'contact.text': 'Que ce soit pour une mission de conseil, un projet freelance, ou simplement pour échanger sur l\'IA et la data — n\'hésitez pas à me contacter !',
    'contact.availability': 'Disponible pour missions',
    'contact.cta.title': 'Démarrons une conversation',
    'contact.cta.desc': 'Envoyez-moi un message sur LinkedIn ou par email — je réponds généralement dans les 24h.',
    'contact.cta.email': 'Envoyer un email',
    'footer.copy': '© 2026 Gustave — Data Scientist & AI/ML Engineer chez Avisia',
    'aria.toggle': 'Toggle menu',
    'aria.source': 'Voir le code source',
    'aria.source.na': 'Voir le code source (indisponible)',
    'aria.demo': 'Voir le projet en ligne',
    'aria.demo.na': 'Voir le projet en ligne (indisponible)',
    'typed': ['Data Scientist', 'AI/ML Engineer', 'GenAI Specialist', 'LLM Orchestrator', 'Avisia — Paris'],
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.badge': 'Available for new projects',
    'hero.greeting': 'Hello, I am',
    'hero.tagline': 'I transform raw data into actionable intelligence — <br class="break-md" />from <strong>LLMs</strong> to <strong>MLOps pipelines</strong>, through <strong>AI agent orchestration</strong>.',
    'hero.cta.projects': 'See my projects',
    'hero.cta.contact': 'Contact me',
    'hero.scroll': 'Scroll',
    'about.tag': '01 / About',
    'about.title': 'Who am I?',
    'about.lead': 'Passionate Data Scientist & AI/ML Engineer, I build concrete AI solutions that create real value for businesses.',
    'about.p1': 'At <strong>Avisia</strong>, a Paris-based data & AI consulting firm, I support clients in their data transformation — from cloud architecture design to ML model industrialization and autonomous AI agent development.',
    'about.p2': 'My passion: bridging <strong>scientific rigor</strong> with <strong>technical creativity</strong> to solve complex problems. I believe AI is only useful when it is understood, mastered, and aligned with human needs.',
    'about.interests.title': 'Outside of code',
    'about.interest.run': 'Running',
    'about.interest.swim': 'Swimming',
    'about.interest.cali': 'Calisthenics',
    'about.interest.photo': 'Photography',
    'about.interest.wood': 'Woodworking',
    'skills.tag': '02 / Skills',
    'skills.title': 'Tech stack',
    'skill.level.expert': 'Expert',
    'skill.level.advanced': 'Advanced',
    'skill.level.intermediate': 'Intermediate',
    'projects.tag': '03 / Projects',
    'projects.title': 'Projects',
    'project1.title': 'Multi-Table NL2SQL Agent',
    'project1.desc': 'AI agent capable of answering natural language questions on complex multi-table databases. Uses LangGraph for orchestration and Vertex AI for inference.',
    'project2.title': 'Enterprise RAG Pipeline',
    'project2.desc': 'RAG (Retrieval-Augmented Generation) system for analyzing internal enterprise documents. Ingestion, intelligent chunking, re-ranking, and contextualized generation.',
    'project3.title': 'Workflow Automation with n8n',
    'project3.desc': 'Automation of complex data workflows via n8n: ingestion from heterogeneous sources, AI enrichment, intelligent alerting, and automatic reporting for B2B clients.',
    'project4.title': 'MLOps Platform on GCP',
    'project4.desc': 'Complete MLOps architecture on Google Cloud: automated training with Vertex AI Pipelines, model registry, drift monitoring, and continuous deployment.',
    'project5.title': 'Real-Time Analytics Dashboard',
    'project5.desc': 'Next.js interface connected to BigQuery to visualize business metrics in real time. Dynamic filters, automatic exports, and configurable alerts.',
    'project6.title': 'Domain-specific LLM Fine-tuning',
    'project6.desc': 'Fine-tuning of an open-source model (Mistral) on specific business data with LoRA/QLoRA. Rigorous evaluation, comparison with GPT-4, and optimized deployment.',
    'experience.tag': '04 / Experience',
    'experience.title': 'Career path',
    'exp1.role': 'Data Scientist & AI/ML Engineer',
    'exp1.date': '2023 — Present',
    'exp1.task1': 'Design and deployment of autonomous AI agents (LangGraph, LangChain) to automate complex business processes',
    'exp1.task2': 'Development of NL2SQL solutions enabling natural language querying of data warehouses',
    'exp1.task3': 'End-to-end MLOps pipeline construction on GCP (Vertex AI, BigQuery, Cloud Run)',
    'exp1.task4': 'Data workflow automation with n8n and LLM API integration (OpenAI, Anthropic, Mistral)',
    'exp1.task5': 'Client training and support on GenAI use cases & prompt engineering best practices',
    'exp2.role': 'Internship — Data Scientist',
    'exp2.date': '2022 — 2023',
    'exp2.task1': 'Credit scoring & fraud detection models (XGBoost, Random Forest)',
    'exp2.task2': 'Feature engineering pipeline on transactional data (Pandas, Spark)',
    'exp2.task3': 'Production deployment via FastAPI deployed on Cloud Run',
    'exp3.role': "Master's in Data Science & AI",
    'exp3.date': '2020 — 2022',
    'exp3.task1': 'Specialization in Machine Learning, Deep Learning and natural language processing',
    'exp3.task2': 'Research projects on model interpretability (XAI)',
    'exp3.task3': 'With Honors — Thesis on Transformer architectures for NL2SQL',
    'exp4.role': "Bachelor's in Applied Mathematics",
    'exp4.date': '2017 — 2020',
    'exp4.task1': 'Statistics, probability, linear algebra, and optimization',
    'exp4.task2': 'Introduction to Python and R programming',
    'contact.tag': '05 / Contact',
    'contact.title': "Let's work together",
    'contact.subtitle': 'Do you have an ambitious data or AI project? I would love to discuss it.',
    'contact.text': "Whether for a consulting mission, a freelance project, or simply to exchange ideas about AI and data — don't hesitate to reach out!",
    'contact.availability': 'Available for missions',
    'contact.cta.title': "Let's start a conversation",
    'contact.cta.desc': 'Send me a message on LinkedIn or by email — I usually respond within 24 hours.',
    'contact.cta.email': 'Send an email',
    'footer.copy': '© 2026 Gustave — Data Scientist & AI/ML Engineer at Avisia',
    'aria.toggle': 'Toggle menu',
    'aria.source': 'View source code',
    'aria.source.na': 'View source code (unavailable)',
    'aria.demo': 'View live project',
    'aria.demo.na': 'View live project (unavailable)',
    'typed': ['Data Scientist', 'AI/ML Engineer', 'GenAI Specialist', 'LLM Orchestrator', 'Avisia — Paris'],
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.badge': 'Disponible para nuevos proyectos',
    'hero.greeting': 'Hola, soy',
    'hero.tagline': 'Transformo datos en bruto en inteligencia accionable — <br class="break-md" />desde <strong>LLMs</strong> hasta <strong>pipelines MLOps</strong>, pasando por la <strong>orquestación de agentes IA</strong>.',
    'hero.cta.projects': 'Ver mis proyectos',
    'hero.cta.contact': 'Contáctame',
    'hero.scroll': 'Scroll',
    'about.tag': '01 / Sobre mí',
    'about.title': '¿Quién soy?',
    'about.lead': 'Data Scientist & AI/ML Engineer apasionado, construyo soluciones de IA concretas que crean valor real para las empresas.',
    'about.p1': 'En <strong>Avisia</strong>, consultora parisina especializada en datos & IA, acompaño a clientes en su transformación de datos — desde el diseño de arquitecturas cloud hasta la industrialización de modelos ML y el desarrollo de agentes IA autónomos.',
    'about.p2': 'Mi pasión: hacer dialogar el <strong>rigor científico</strong> con la <strong>creatividad técnica</strong> para resolver problemas complejos. Creo que la IA solo es útil cuando se comprende, se domina y se alinea con las necesidades humanas.',
    'about.interests.title': 'Fuera del código',
    'about.interest.run': 'Running',
    'about.interest.swim': 'Natación',
    'about.interest.cali': 'Calistenia',
    'about.interest.photo': 'Fotografía',
    'about.interest.wood': 'Carpintería',
    'skills.tag': '02 / Habilidades',
    'skills.title': 'Stack técnico',
    'skill.level.expert': 'Experto',
    'skill.level.advanced': 'Avanzado',
    'skill.level.intermediate': 'Intermedio',
    'projects.tag': '03 / Proyectos',
    'projects.title': 'Proyectos',
    'project1.title': 'Agente NL2SQL Multi-Tabla',
    'project1.desc': 'Agente IA capaz de responder preguntas en lenguaje natural sobre bases de datos complejas multi-tabla. Utiliza LangGraph para la orquestación y Vertex AI para la inferencia.',
    'project2.title': 'Pipeline RAG empresarial',
    'project2.desc': 'Sistema de RAG (Retrieval-Augmented Generation) para el análisis de documentos internos empresariales. Ingesta, chunking inteligente, re-ranking y generación contextualizada.',
    'project3.title': 'Automatización de Workflows con n8n',
    'project3.desc': 'Automatización de workflows de datos complejos con n8n: ingesta de fuentes heterogéneas, enriquecimiento IA, alertas inteligentes e informes automáticos para clientes B2B.',
    'project4.title': 'Plataforma MLOps en GCP',
    'project4.desc': 'Arquitectura MLOps completa en Google Cloud: entrenamiento automatizado con Vertex AI Pipelines, registro de modelos, monitoreo de drift y despliegue continuo.',
    'project5.title': 'Dashboard de Análisis en Tiempo Real',
    'project5.desc': 'Interfaz Next.js conectada a BigQuery para visualizar métricas de negocio en tiempo real. Filtros dinámicos, exportaciones automáticas y alertas configurables.',
    'project6.title': 'Fine-tuning LLM en dominio específico',
    'project6.desc': 'Fine-tuning de un modelo open-source (Mistral) en datos de negocio específicos con LoRA/QLoRA. Evaluación rigurosa, comparación con GPT-4 y despliegue optimizado.',
    'experience.tag': '04 / Experiencia',
    'experience.title': 'Trayectoria',
    'exp1.role': 'Data Scientist & AI/ML Engineer',
    'exp1.date': '2023 — Presente',
    'exp1.task1': 'Diseño y despliegue de agentes IA autónomos (LangGraph, LangChain) para automatizar procesos empresariales complejos',
    'exp1.task2': 'Desarrollo de soluciones NL2SQL que permiten consultar almacenes de datos en lenguaje natural',
    'exp1.task3': 'Construcción de pipelines MLOps en GCP (Vertex AI, BigQuery, Cloud Run) de extremo a extremo',
    'exp1.task4': 'Automatización de workflows de datos con n8n e integración de APIs LLM (OpenAI, Anthropic, Mistral)',
    'exp1.task5': 'Formación y acompañamiento de clientes en casos de uso GenAI y buenas prácticas de prompt engineering',
    'exp2.role': 'Prácticas — Data Scientist',
    'exp2.date': '2022 — 2023',
    'exp2.task1': 'Modelos de scoring crediticio & detección de fraude (XGBoost, Random Forest)',
    'exp2.task2': 'Pipeline de feature engineering sobre datos transaccionales (Pandas, Spark)',
    'exp2.task3': 'Puesta en producción mediante API FastAPI desplegada en Cloud Run',
    'exp3.role': 'Máster en Data Science & IA',
    'exp3.date': '2020 — 2022',
    'exp3.task1': 'Especialización en Machine Learning, Deep Learning y procesamiento del lenguaje natural',
    'exp3.task2': 'Proyectos de investigación sobre interpretabilidad de modelos (XAI)',
    'exp3.task3': 'Matrícula de Honor — Tesis sobre arquitecturas Transformer para NL2SQL',
    'exp4.role': 'Grado en Matemáticas Aplicadas',
    'exp4.date': '2017 — 2020',
    'exp4.task1': 'Estadística, probabilidad, álgebra lineal y optimización',
    'exp4.task2': 'Introducción a la programación en Python y R',
    'contact.tag': '05 / Contacto',
    'contact.title': 'Trabajemos juntos',
    'contact.subtitle': '¿Tienes un proyecto de datos o IA ambicioso? Me encantaría discutirlo.',
    'contact.text': 'Ya sea para una misión de consultoría, un proyecto freelance, o simplemente para intercambiar ideas sobre IA y datos — ¡no dudes en contactarme!',
    'contact.availability': 'Disponible para proyectos',
    'contact.cta.title': 'Comencemos una conversación',
    'contact.cta.desc': 'Envíame un mensaje en LinkedIn o por email — generalmente respondo en 24 horas.',
    'contact.cta.email': 'Enviar un email',
    'footer.copy': '© 2026 Gustave — Data Scientist & AI/ML Engineer en Avisia',
    'aria.toggle': 'Alternar menú',
    'aria.source': 'Ver código fuente',
    'aria.source.na': 'Ver código fuente (no disponible)',
    'aria.demo': 'Ver proyecto en línea',
    'aria.demo.na': 'Ver proyecto en línea (no disponible)',
    'typed': ['Data Scientist', 'AI/ML Engineer', 'GenAI Specialist', 'LLM Orchestrator', 'Avisia — París'],
  },
};

// ---- Typed animation state (declared early, used by applyTranslations) ----
let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

// ---- Current language ----
let currentLang = localStorage.getItem('lang') || detectBrowserLang();

function detectBrowserLang() {
  const lang = (navigator.language || navigator.userLanguage || 'fr').slice(0, 2).toLowerCase();
  return ['fr', 'en', 'es'].includes(lang) ? lang : 'fr';
}

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations.fr[key]) || key;
}

function applyTranslations(lang) {
  currentLang = lang;
  const tr = translations[lang] || translations.fr;

  // textContent elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) el.textContent = tr[key];
  });

  // innerHTML elements (contain HTML tags like <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (tr[key] !== undefined) el.innerHTML = tr[key];
  });

  // aria-label elements
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (tr[key] !== undefined) el.setAttribute('aria-label', tr[key]);
  });

  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Update page title & meta description
  const titles = { fr: 'Gustave — Data Scientist & AI/ML Engineer', en: 'Gustave — Data Scientist & AI/ML Engineer', es: 'Gustave — Data Scientist & AI/ML Engineer' };
  document.title = titles[lang] || titles.fr;

  // Persist choice
  localStorage.setItem('lang', lang);

  // Restart typed animation with new language lines
  clearTimeout(typingTimeout);
  lineIndex = 0;
  charIndex = 0;
  isDeleting = false;
  type();
}

// ---- Language switcher ----
function initLangSwitcher() {
  const switcher = document.getElementById('langSwitcher');
  if (!switcher) return;

  // Set initial active state
  switcher.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang') === currentLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) return;
      currentLang = lang;
      switcher.querySelectorAll('.lang-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      applyTranslations(lang);
    });
  });
}

// ---- Typed Text Animation ----
function type() {
  const el = document.getElementById('typedText');
  if (!el) return;

  const lines = (translations[currentLang] && translations[currentLang]['typed']) || translations.fr['typed'];
  const currentLine = lines[lineIndex % lines.length];

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
    lineIndex = (lineIndex + 1) % lines.length;
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
  initLangSwitcher();
  applyTranslations(currentLang);
  initNavbar();
  initMobileNav();
  initReveal();
  initSkillBars();
  initSmoothScroll();
});
