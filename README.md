# Yadenno Plastics PLC — Product Showcase Site

A React + Vite + Tailwind CSS marketing site for a UPVC pipe manufacturer, featuring
a hover/tap-activated "pipe join" hero interaction, dark/light mode, and an
English/Amharic language switch.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  assets/favicon.svg       # icon mark used next to the "YADENNO" wordmark in the navbar
  components/
    Layout.jsx              # Navbar + page content + Footer shell
    Navbar.jsx               # logo, nav links, Request Quote CTA, dark/light + EN/AMH toggles
    Hero.jsx                 # image carousel + hover/tap pipe-join interaction
    Footer.jsx
  context/
    ThemeContext.jsx         # dark/light mode (persisted to localStorage)
    LanguageContext.jsx      # EN/AMH language state + t() translation helper
  data/
    translations.js          # flat EN/AMH string dictionary
    products.js              # UPVC pipe product line data
  pages/
    Home.jsx
    Products.jsx
    About.jsx
    Contact.jsx
  App.jsx                     # route definitions
  main.jsx                    # app entry point, providers, router
  index.css                   # Tailwind layers + custom "pipe-panel" CSS

public/
  fab2.jpg, fabrica.jpg, hero.jpg   # hero background carousel images
  favicon.svg                       # browser tab icon
```

## Notes on the hero interaction

Hovering the hero section (or tapping it, on touch devices — detected via
`matchMedia('(hover: none)')`) slides two metallic "pipe" panels in from the
left and right edges until they meet at the center, revealing the heading,
tagline, description, and CTA. Moving the mouse away (or tapping again on
touch) reverses the animation. The panel styling (gradients, inset shadows,
bolted flange seam) lives in `src/index.css` under the "pipe-panel" classes.

## Customizing

- **Colors**: edit the `primary` / `steel` / `accent` / `surface` palette in
  `tailwind.config.js`.
- **Copy / translations**: edit `src/data/translations.js` — every string in
  the site is pulled from there via `t('key')`.
- **Products**: edit `src/data/products.js`.
- **Hero images**: replace `public/fab2.jpg`, `public/fabrica.jpg`,
  `public/hero.jpg` with new images of the same names (any aspect ratio
  works; they're rendered with `background-size: cover`).
