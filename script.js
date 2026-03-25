document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navAnchors = document.querySelectorAll(".nav-links a");
  const dynamicTarget = document.getElementById("typedText");
  const sections = document.querySelectorAll("section[id]");
  const revealItems = document.querySelectorAll(".reveal");
  const skillFills = document.querySelectorAll(".skill-fill[data-width]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const dynamicTerms = [
    "GenAI & LLMs",
    "NL2SQL",
    "Agents IA",
    "Workflows automatises",
    "MLOps sur GCP"
  ];

  let dynamicIndex = 0;
  let typeTimer = null;

  const setNavbarState = () => {
    if (!navbar) {
      return;
    }

    navbar.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  const closeMenu = () => {
    if (!navToggle || !navLinks) {
      return;
    }

    navToggle.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    if (!navToggle || !navLinks) {
      return;
    }

    navToggle.classList.add("is-open");
    navLinks.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const updateActiveLink = () => {
    const offset = window.scrollY + 160;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");

      if (offset >= top && offset < bottom) {
        navAnchors.forEach((anchor) => {
          anchor.classList.toggle("is-active", anchor.getAttribute("href") === `#${id}`);
        });
      }
    });
  };

  const typeLoop = () => {
    if (!dynamicTarget || prefersReducedMotion) {
      return;
    }

    const nextValue = dynamicTerms[dynamicIndex];
    dynamicTarget.textContent = nextValue;
    dynamicIndex = (dynamicIndex + 1) % dynamicTerms.length;
    typeTimer = window.setTimeout(typeLoop, 1800);
  };

  if (navToggle && navLinks) {
    navToggle.setAttribute("aria-controls", "navLinks");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.addEventListener("click", () => {
      if (navLinks.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      if (navLinks && navLinks.classList.contains("is-open")) {
        closeMenu();
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const selector = anchor.getAttribute("href");

      if (!selector || selector === "#") {
        return;
      }

      const target = document.querySelector(selector);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });

  if (!prefersReducedMotion && dynamicTarget) {
    typeLoop();
  }

  if (prefersReducedMotion && dynamicTarget) {
    dynamicTarget.textContent = dynamicTerms[0];
  }

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => revealObserver.observe(item));

    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const width = entry.target.getAttribute("data-width");
        entry.target.style.width = `${width}%`;
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    skillFills.forEach((fill) => skillsObserver.observe(fill));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    skillFills.forEach((fill) => {
      fill.style.width = `${fill.getAttribute("data-width")}%`;
    });
  }

  window.addEventListener("scroll", () => {
    setNavbarState();
    updateActiveLink();
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 819) {
      closeMenu();
    }
  });

  setNavbarState();
  updateActiveLink();

  window.addEventListener("beforeunload", () => {
    if (typeTimer) {
      window.clearTimeout(typeTimer);
    }
  });
});
