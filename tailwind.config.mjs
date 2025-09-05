/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/*.html'
  ],
  
  // Enable dark mode with data-theme attribute strategy for theme switching
  darkMode: ['attribute', 'data-theme'],
  
  theme: {
    extend: {
      // ===== SEMANTIC COLOR SYSTEM =====
      // Maps to CSS custom properties defined in global.css @theme directive
      colors: {
        // Background colors
        'bg': 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        'surface': 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        
        // Text colors  
        'text': 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-soft': 'var(--color-text-soft)',
        
        // Border colors
        'border': 'var(--color-border)',
        'border-alt': 'var(--color-border-alt)',
        
        // Brand colors
        'brand': {
          DEFAULT: 'var(--color-brand)',
          hover: 'var(--color-brand-hover)',
          light: 'var(--color-brand-light)',
          lighter: 'var(--color-brand-lighter)',
        },
        
        // Semantic colors
        'secondary': {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
        },
        'accent': 'var(--color-accent)',
        
        // Component-specific colors
        'pill': 'var(--color-pill)',
        'card': 'var(--color-card)',
        
        // ===== LEGACY COMPATIBILITY =====
        // Preserve existing color names for backward compatibility
        page: 'var(--page)',           // Legacy: --page
        ink: 'var(--ink)',             // Legacy: --ink (headings)
        muted: 'var(--muted)',         // Legacy: --muted (body/labels)
        line: 'var(--line)',           // Legacy: --line (borders)
      },
      
      // ===== SPACING SYSTEM =====
      spacing: {
        'xs': 'var(--spacing-xs)',       // 4px
        'sm': 'var(--spacing-sm)',       // 8px
        'md': 'var(--spacing-md)',       // 12px
        'base': 'var(--spacing-base)',   // 16px
        'lg': 'var(--spacing-lg)',       // 24px
        'xl': 'var(--spacing-xl)',       // 32px
        '2xl': 'var(--spacing-2xl)',     // 48px
        '3xl': 'var(--spacing-3xl)',     // 72px
        'max': 'var(--spacing-max)',     // 1040px (legacy compatibility)
      },
      
      maxWidth: {
        'max': 'var(--spacing-max)',     // Content max width
      },
      
      // ===== BORDER RADIUS SYSTEM =====
      borderRadius: {
        'sm': 'var(--radius-sm)',        // 6px
        'DEFAULT': 'var(--radius)',      // 10px  
        'md': 'var(--radius-md)',        // 12px
        'lg': 'var(--radius-lg)',        // 14px
        'xl': 'var(--radius-xl)',        // 28px
        'round': 'var(--radius-round)',  // 999px
      },
      
      // ===== SHADOW SYSTEM =====
      boxShadow: {
        'sm': 'var(--shadow-sm)',        // Small shadow
        'DEFAULT': 'var(--shadow)',      // Default shadow
        'md': 'var(--shadow-md)',        // Medium shadow
        'lg': 'var(--shadow-lg)',        // Large shadow
        'brand': 'var(--shadow-brand)',  // Brand-colored shadow
        'custom': 'var(--shadow)',       // Legacy compatibility
      },
      
      // ===== TYPOGRAPHY SYSTEM =====
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Liberation Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
      },
      
      fontSize: {
        'xs': 'var(--font-size-xs)',     // 12px
        'sm': 'var(--font-size-sm)',     // 14px
        'base': 'var(--font-size-base)', // 16px
        'md': 'var(--font-size-md)',     // 18px
        'lg': 'var(--font-size-lg)',     // ~21px
        'xl': 'var(--font-size-xl)',     // 28px
        '2xl': 'var(--font-size-2xl)',   // Responsive large
      },
      
      // ===== RESPONSIVE BREAKPOINTS =====
      screens: {
        'xs': '360px',                   // ultra small phones
        'sm': '480px',                   // small phones  
        'md': '600px',                   // medium devices
        'lg': '900px',                   // large devices (navigation switch point)
        'xl': '1100px',                  // extra large devices
      },
      
      // ===== TRANSITIONS & ANIMATIONS =====
      transitionDuration: {
        'fast': '180ms',         // Fast hover effects
        'normal': '250ms',       // Standard interactions
        'slow': '350ms',         // Navigation transitions
        'slower': '600ms',       // Complex animations
        '200': '0.2s',          // Legacy compatibility
        '250': '0.25s',         // Legacy compatibility
        '350': '0.35s',         // Legacy compatibility
      },
      
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Brand transition curve
      },
      
      // ===== ENHANCED TYPOGRAPHY =====
      lineHeight: {
        'tight': '1.1',         // for headings
        'normal': '1.45',       // for body text
      },
      
      letterSpacing: {
        'tight': '-0.01em',     // for large headings
        'wide': '0.5px',        // for buttons and labels  
      },
    },
  },
  plugins: [],
  
  // ===== CONFIGURATION OPTIMIZATIONS =====
  corePlugins: {
    container: true,
    accessibility: true,
  },
  
  // ===== SAFELIST FOR DYNAMIC CLASSES =====
  // Ensure theme-related classes aren't purged in production
  safelist: [
    'data-theme',
    {
      pattern: /(bg|text|border)-(bg|surface|text|brand|secondary|accent|card|pill)/,
      variants: ['hover', 'focus', 'active', 'dark'],
    },
    {
      pattern: /(shadow)-(sm|md|lg|brand)/,
      variants: ['hover', 'focus'],
    }
  ]
}
