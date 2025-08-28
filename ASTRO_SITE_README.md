# Preta Fit Official Site (Astro)

Static Astro site with: 
- Main landing (`/pretafitcr/`) for Preta Fit programs 
- Event page (`/pretafitcr/event`) for WOD Warriors
- Deployed via GitHub Pages "docs" folder strategy (no Actions needed)

## Local Dev
`npm install`
`npm run dev`

## Deploy (Docs Strategy)
1. Build: `npm run build` (outputs to `docs/`)
2. Commit `docs/` folder.
3. In GitHub repo settings > Pages: Source = `main` / `docs`.
4. Site available at: https://jourlez.github.io/pretafitcr/

No workflow required. `.nojekyll` files added; assets folder named `astro` (no underscore) to avoid Jekyll ignore.

## Notes
Images served from raw GitHub paths. Optionally move images to `public/` later for bundling.
