import { defineConfig } from 'astro/config';

// Docs deployment strategy: build static site into /docs for GitHub Pages (main branch /docs folder)
export default defineConfig({
  site: 'https://jourlez.github.io/pretafitcr',
  base: '/pretafitcr', // project page base path
  output: 'static',
  outDir: './docs',
  build: { format: 'directory', assets: 'astro' } // avoid leading underscore in assets folder
});
