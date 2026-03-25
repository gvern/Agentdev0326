# GitHub Copilot Instructions — Portfolio Gustave

## Context

This is a personal portfolio website for **Gustave**, Data Scientist & AI/ML Engineer at **Avisia** (Paris-based data & AI consulting firm).

**Tech stack**: HTML/CSS/JS vanilla — no build step, deployed on GitHub Pages.

## Profile

- **Name**: Gustave
- **Role**: Data Scientist & AI/ML Engineer
- **Company**: Avisia (data, AI, analytics consulting — Paris)
- **Expertise**: GenAI & LLMs, NL2SQL, AI agent orchestration, workflow automation, MLOps
- **Tech**: Python, SQL, Google Cloud, LangChain, LangGraph, n8n, React/Next.js

## Code Conventions

- **HTML**: Semantic elements (`<section>`, `<article>`, `<nav>`, etc.), accessible with ARIA labels
- **CSS**: CSS custom properties (variables) in `:root`, BEM-inspired class names, mobile-first responsive
- **JS**: Vanilla JS (no frameworks), `DOMContentLoaded` listener pattern, `IntersectionObserver` for animations
- **Colors**: Dark theme — primary `#0a0a0f`, accent `#6366f1` (indigo), secondary accent `#06b6d4` (cyan)
- **Fonts**: Inter (body), JetBrains Mono (code/labels) — loaded from Google Fonts

## File Structure

```
/
├── index.html       # Main portfolio page
├── style.css        # All styles (dark theme, responsive, animations)
├── script.js        # Interactions: typing effect, scroll reveal, skill bars
├── assets/          # Images and icons
└── .github/         # GitHub config
    ├── copilot-instructions.md
    └── ISSUE_TEMPLATE/
        └── feature_request.md
```

## Design System

- **Border radius**: `--radius: 12px`, `--radius-sm: 8px`
- **Transitions**: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Cards**: bg `var(--bg-card)`, border `var(--border)`, hover lifts with `translateY(-6px)` and accent shadow
- **Sections**: alternating `var(--bg-primary)` / `var(--bg-secondary)` backgrounds
- **Animations**: Intersection Observer-based scroll reveals + CSS keyframes

## Sections

1. `#hero` — Name, typed subtitle, tagline, CTA buttons, location/company meta
2. `#about` — Bio, values chips, interests grid
3. `#skills` — 4 skill categories with animated progress bars + tech badge cloud
4. `#projects` — 3-column card grid with featured variant, tech tags, GitHub/external links
5. `#experience` — Vertical timeline with role, company, dates, bullet tasks, tech stack
6. `#contact` — Contact links (email, LinkedIn, GitHub) + CTA card

## When Adding Features

- Keep vanilla JS (no npm install, no build step)
- Maintain dark theme consistency using CSS variables
- Add `reveal` class to new animated elements — the IntersectionObserver in `script.js` handles them automatically
- For new skill bars: use `class="skill-fill" data-width="<0-100>"` pattern
- Keep the page single-file friendly (all in `index.html` or linked `style.css`/`script.js`)
