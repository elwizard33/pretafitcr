import { defineConfig } from 'astro/config';

// GitHub Pages (project page) deployment via Actions workflow
// - site: full canonical URL (owner/repo)
// - base: repository name (sub-path served at https://<owner>.github.io/<repo>/)
// - output: static (default for Astro when building static content)
// - outDir: use Astro default "dist" so the Actions workflow can upload ./dist
// NOTE: If you change the repository name, update both `site` and `base`.
export default defineConfig({
  site: 'https://pretafitcr.com',
  base: '/',
  output: 'static',
  build: { 
    format: 'directory', 
    assets: 'astro'
  },
  image: {
    domains: ['pretafitcr.com'],
    formats: ['webp', 'avif', 'jpeg'],
    quality: {
      low: 25,
      mid: 50,
      high: 80,
      max: 100
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});
