# Portfolio Gustave

Portfolio personnel de Gustave, Data Scientist et Ingenieur IA/ML chez Avisia, realise en HTML/CSS/JS vanilla et deploye sur GitHub Pages.

## Objectif

Ce depot sert a la fois de portfolio numerique et de support de demonstration pour l'atelier GitHub Copilot Agent Mode organise chez Avisia en mars 2026.

## Stack

- HTML semantique
- CSS mobile-first avec design system base sur variables CSS
- JavaScript vanilla pour les interactions
- Google Fonts pour Inter et JetBrains Mono
- GitHub Pages pour le deploiement statique

## Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- README.md
|-- .gitignore
`-- .github/
    |-- copilot-instructions.md
    |-- ISSUE_TEMPLATE/
    `-- workflows/
```

## Sections de la page

1. Hero avec proposition de valeur, CTA et synthese du profil
2. A propos avec bio, valeurs et centres d'interet
3. Competences avec categories et barres animees
4. Projets avec un projet phare et une grille de realisations
5. Experience sous forme de timeline
6. Contact avec liens directs et carte CTA

## Lancer localement

Aucune etape de build n'est necessaire. Ouvrir `index.html` dans un navigateur suffit pour verifier le rendu.

## Deploiement

Le workflow GitHub Actions existant publie le contenu racine du depot sur GitHub Pages a chaque push sur la branche `main`.

## Notes

- Le portfolio reste compatible avec une approche simple et statique.
- Les visuels peuvent etre remplaces plus tard par de vrais assets sans changer l'architecture.
- Les nouvelles animations doivent reutiliser la classe `reveal` et les nouvelles jauges le pattern `.skill-fill[data-width]`.