# Preta Fit Official Site (Astro)

Static Astro site with: 
- Main landing (`/pretafitcr/`) for Preta Fit programs 
- Event page (`/pretafitcr/event`) for WOD Warriors
- Deployed via GitHub Pages using GitHub Actions workflow (`.github/workflows/deploy-astro.yml`).

## Local Dev
`npm install`
`npm run dev`

## Deploy (GitHub Actions / Pages)
1. Push to `main` branch (workflow triggers automatically).
2. Action installs deps, builds (`dist/`), uploads artifact and deploys to Pages.
3. Pages environment URL appears in the workflow summary.
4. Production URL: https://elwizard33.github.io/pretafitcr/

### Configuration Notes
`astro.config.mjs` sets:
- `site`: canonical site URL.
- `base`: `/pretafitcr` (project page subpath).
- Output directory: default `dist/` (not committed).

## Notes
Images currently reference raw GitHub paths; can be migrated into `public/` for hashed asset management later.

### Local preview of production build
```
npm run build && npx serve dist
```
