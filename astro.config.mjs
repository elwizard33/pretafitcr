import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

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
  security: {
    checkOrigin: true
  },
  integrations: [
    sitemap({
      // Advanced sitemap configuration
      filter: (page) => !page.includes('/admin') && !page.includes('/private'),
      customPages: [
        'https://pretafitcr.com/',
        'https://pretafitcr.com/crossfit/',
        'https://pretafitcr.com/wodwarriors/'
      ],
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CR',
          en: 'en-US'
        }
      },
      // Generate separate sitemaps for different content types
      serialize(item) {
        // Add lastmod for better crawling
        item.lastmod = new Date().toISOString();
        
        // Set priority based on page importance
        if (item.url === 'https://pretafitcr.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/crossfit/') || item.url.includes('/wodwarriors/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        
        return item;
      }
    })
  ],
  build: { 
    format: 'directory', 
    assets: 'astro',
    inlineStylesheets: 'never'  // Keep stylesheets external for better caching
  },
  image: {
    domains: ['pretafitcr.com'],
    formats: ['webp', 'avif', 'jpeg'],
    quality: {
      low: 25,
      mid: 50,
      high: 80,
      max: 100
    },
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false
      }
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      },
      // Optimize CSS assets inlining
      assetsInlineLimit: 4096
    },

    plugins: [tailwindcss()],
    
    // CSS optimization
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        css: {
          // Enable CSS optimization
          charset: false
        }
      }
    }
  }
});