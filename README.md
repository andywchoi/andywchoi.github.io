# Astro Portfolio Starter

This is a small Astro portfolio starter designed for GitHub Pages.

It is intentionally simple:

- `src/pages/index.astro` is the homepage.
- `src/data/projects.ts` is where your project list lives.
- `src/components/` has reusable pieces like the header and project cards.
- `src/styles/global.css` controls the visual design.
- `.github/workflows/deploy.yml` deploys the site to GitHub Pages.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:4321`.

## Edit Your Content

- Replace placeholder links like `your-username`, `andy@example.com`, and `your-profile`.
- Update project entries in `src/data/projects.ts`.
- Update homepage copy in `src/pages/index.astro`.
- Put screenshots, resume files, and public assets in `public/`.

## Deploy To GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.

The included workflow in `.github/workflows/deploy.yml` will build and publish the site.
