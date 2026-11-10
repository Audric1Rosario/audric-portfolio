# Audric Rosario | Portfolio

Personal portfolio of Audric Rosario, Solutions Architect | Senior Software Engineer.
Live: https://audric1rosario.github.io/audric-portfolio/

## Stack

- React 19 + Vite 6
- MUI 7 with CSS theme variables (dark by default, light mode toggle)
- Self-hosted Inter and JetBrains Mono (`@fontsource-variable`)
- No background images: gradients and an SVG-free CSS grid only
- All images are WebP and load lazily

## Structure

```
src/
  data/        content (profile, expertise, career, education, projects)
  theme/       MUI theme (Tokyo Night dark / Slate light)
  styles/      global CSS (background layer, scroll offsets, reduced motion)
  components/  layout, hero, about, expertise, career, education, projects, contact
  assets/      profile photo and project screenshots (.webp)
```

Content lives in `src/data/`. Gallery and lightbox components for private case studies
(`components/projects`: PrivateProjectCard, GalleryCarousel, GalleryTabs, Lightbox) are kept
but not rendered, since recent enterprise work is confidential.

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve dist/ at http://localhost:4173/audric-portfolio/
npm run deploy    # publish dist/ to GitHub Pages
```
