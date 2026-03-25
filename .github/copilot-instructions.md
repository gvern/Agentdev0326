# Instructions GitHub Copilot — Portfolio Gustave

## Contexte

Ceci est un site portfolio/CV numérique personnel pour **Gustave**, Data Scientist & Ingénieur IA/ML chez **Avisia** (cabinet de conseil en data & IA basé à Paris). Ce projet est également le support de la démo live de l'atelier **GitHub Copilot Agent Mode — Avisia, Mars 2026**.

**Stack technique** : HTML/CSS/JS vanilla — pas d'étape de build, déployé sur GitHub Pages.

## Profil

- **Nom** : Gustave
- **Rôle** : Data Scientist & Ingénieur IA/ML
- **Entreprise** : Avisia (conseil en data, IA, analytics — Paris)
- **Âge** : 25 ans
- **Localisation** : Paris, France
- **Expertise** : GenAI & LLMs, NL2SQL, orchestration d'agents IA, automatisation de workflows, MLOps
- **Technologies** : Python, SQL, Google Cloud, LangChain, LangGraph, n8n, React/Next.js
- **Centres d'intérêt** : Course à pied, natation, calisthenics, photographie, menuiserie, langues (espagnol, italien, japonais)

## Conventions de code

- **HTML** : Éléments sémantiques (`<section>`, `<article>`, `<nav>`, etc.), accessibles avec des attributs ARIA
- **CSS** : Propriétés personnalisées (variables) dans `:root`, nommage inspiré de BEM, responsive mobile-first
- **JS** : Vanilla JS (sans framework), pattern `DOMContentLoaded`, `IntersectionObserver` pour les animations
- **Couleurs** : Thème sombre — primaire `#0a0a0f`, accent `#6366f1` (indigo), accent secondaire `#06b6d4` (cyan)
- **Polices** : Inter (corps de texte), JetBrains Mono (code/labels) — chargées depuis Google Fonts

## Structure des fichiers

```
/
├── index.html       # Page principale du portfolio
├── style.css        # Tous les styles (thème sombre, responsive, animations)
├── script.js        # Interactions : effet de frappe, scroll reveal, barres de compétences
├── assets/          # Images et icônes
├── README.md        # Documentation du projet
└── .github/         # Configuration GitHub
    ├── copilot-instructions.md
    └── ISSUE_TEMPLATE/
        └── feature_request.md
```

## Système de design

- **Border radius** : `--radius: 12px`, `--radius-sm: 8px`
- **Transitions** : `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Cartes** : fond `var(--bg-card)`, bordure `var(--border)`, au survol élévation avec `translateY(-6px)` et ombre colorée
- **Sections** : fonds alternés `var(--bg-primary)` / `var(--bg-secondary)`
- **Animations** : scroll reveals basés sur l'Intersection Observer + keyframes CSS
- **Design** : Moderne, thème sombre, responsive, animations hover sur les cartes
- **Performance** : Léger, sans dépendances lourdes

## Sections

1. `#hero` — Nom, titre, photo placeholder, tagline accrocheuse, boutons CTA, localisation/entreprise
2. `#about` — Bio courte, parcours, valeurs, puces de valeurs, grille d'intérêts
3. `#skills` — 4 catégories de compétences avec barres animées + nuage de badges technos
4. `#projects` — Grille de cartes en 3 colonnes avec variante mise en avant, tags techno, liens GitHub/externes
5. `#experience` — Timeline verticale avec poste, entreprise, dates, tâches détaillées, stack technique
6. `#contact` — Liens de contact (email, LinkedIn, GitHub) + carte CTA

## Déploiement

- GitHub Pages activé sur la branche `main`, dossier racine `/`
- S'assurer que le workflow de déploiement est en place
- Aucune étape de build nécessaire — les fichiers sont servis tels quels

## Lors de l'ajout de fonctionnalités

- Conserver le vanilla JS (pas de npm install, pas d'étape de build)
- Maintenir la cohérence du thème sombre via les variables CSS
- Ajouter la classe `reveal` aux nouveaux éléments animés — l'IntersectionObserver dans `script.js` les gère automatiquement
- Pour les nouvelles barres de compétences : utiliser le pattern `class="skill-fill" data-width="<0-100>"`
- Garder la page compatible avec une approche fichier unique (tout dans `index.html` ou les fichiers liés `style.css`/`script.js`)
