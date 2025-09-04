# Preta Fit Astro Project Standards

## Project Identity & Domain Rules

### Canonical Domain
- **ALWAYS use `pretafitcr.com` as the canonical domain**
- **NEVER use `pretafit.cr` or any other domain variant**
- **ALL configuration files must reference `https://pretafitcr.com`**

### Domain Consistency Requirements
- `astro.config.mjs` → `site: 'https://pretafitcr.com'`
- `robots.txt` → `Sitemap: https://pretafitcr.com/sitemap.xml`
- All canonical URLs must use `pretafitcr.com`
- All Open Graph URLs must use `pretafitcr.com`

## Astro Architecture Rules

### Component Organization
- **Section components must be in `src/components/sections/`**
- **Layout components must be in `src/layouts/`**
- **Shared utilities must be in `src/components/`**
- **Each major page section requires its own `.astro` component**

### Data Management
- **Static data must be in `src/data/` as TypeScript files**
- **Data files must export typed objects or arrays**
- **No hardcoded content in components - use data imports**

### Layout Pattern
- **ALL pages must use `BaseLayout.astro`**
- **BaseLayout props: `title`, `description`, `image`, `url`**
- **Never duplicate meta tags in individual pages**

## SEO Implementation Rules

### Meta Tag Management
- **Use BaseLayout.astro for all SEO meta tags**
- **Pass page-specific SEO via props to BaseLayout**
- **Never hardcode meta tags in individual pages**
- **Always provide fallback values for SEO props**

### Sitemap Management
- **MUST use `@astrojs/sitemap` integration**
- **NEVER use manual `public/sitemap.xml`**
- **Remove `public/sitemap.xml` when adding integration**
- **Configure sitemap filter if needed to exclude drafts**

### Canonical URL Pattern
```astro
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
```

## Image & Asset Rules

### Image Optimization Strategy
- **Hero/media images MUST be in `src/assets/` and imported**
- **Use Astro's `<Image />` component for all optimized images**
- **Static assets (logos, icons) can remain in `public/images/`**
- **Always specify `width`, `height`, `alt` attributes**

### Loading Strategy
- **Above-the-fold images: `loading="eager" decoding="sync"`**
- **Below-the-fold images: `loading="lazy"`**
- **Hero images: explicit dimensions to prevent CLS**

### Image Formats
- **Primary format: WebP**
- **Fallback format: JPEG**
- **Quality settings: 85 for hero, 75 for content**

## Performance Standards

### Lighthouse Budgets
- **LCP ≤ 2.5s**
- **CLS ≤ 0.05**
- **TBT ≤ 100ms**
- **FCP ≤ 1.8s**

### Asset Loading
- **Critical CSS must be inlined**
- **Non-critical styles must be loaded asynchronously**
- **Images must use responsive loading strategies**
- **Fonts must be self-hosted and preloaded**

## Accessibility Requirements

### ARIA Patterns
- **Interactive elements require `aria-label` or `aria-labelledby`**
- **Form controls must have associated labels**
- **Skip-to-content link required in main layout**
- **Focus indicators must be visible and accessible**

### Error Handling
- **Wrap date/time calculations in try/catch blocks**
- **Provide fallback content for failed operations**
- **Never silently fail - always render alternative content**
- **Support `prefers-reduced-motion` for animations**

## Component Development Rules

### Component Props Pattern
```astro
---
interface Props {
  title?: string;
  description?: string;
  className?: string;
}
const { title, description, className = '' } = Astro.props;
---
```

### Component Structure
- **Frontmatter for props and logic**
- **Single root element with semantic HTML**
- **CSS classes from theme.css**
- **No inline styles except dynamic values**

### Import Patterns
- **Named imports for data files**
- **Default imports for images in src/assets/**
- **Astro components with relative paths**

## Build & Deployment Rules

### Integration Requirements
- **MUST include `@astrojs/sitemap` in integrations array**
- **Image optimization configured in astro.config.mjs**
- **Build format must be 'directory'**
- **Static output for hosting compatibility**

### Asset Configuration
```javascript
image: {
  domains: ['pretafitcr.com'],
  formats: ['webp', 'avif', 'jpeg'],
  quality: { high: 85, mid: 75 }
}
```

## Content Management Rules

### Spanish Content Standards
- **All content must be in Costa Rican Spanish**
- **Use formal tone for fitness/health content**
- **Currency references in Colones (₡) when applicable**
- **Location references to Jacó, Costa Rica**

### Data File Patterns
- **Export const arrays/objects with TypeScript types**
- **Descriptive file names matching content purpose**
- **No external API calls in static data files**

## Prohibited Actions

### NEVER Do These Things
- **❌ Use domain other than pretafitcr.com**
- **❌ Hardcode meta tags in individual pages**
- **❌ Place optimized images directly in public/**
- **❌ Create manual sitemap.xml files**
- **❌ Use inline styles except for dynamic values**
- **❌ Skip accessibility attributes on interactive elements**
- **❌ Import components without proper error handling**
- **❌ Deploy without running build validation**

### Required Validation Steps
- **✅ Run `npm run build` before deployment**
- **✅ Check all canonical URLs use pretafitcr.com**
- **✅ Verify sitemap.xml generates automatically**
- **✅ Test image loading and optimization**
- **✅ Validate HTML semantics and ARIA**

## File Coordination Requirements

### When Modifying BaseLayout.astro
- **Also update all page files that use BaseLayout**
- **Verify SEO prop interfaces match usage**
- **Test canonical URL generation across all pages**

### When Adding New Components
- **Add to appropriate directory (sections/ or components/)**
- **Follow established prop patterns**
- **Include TypeScript interfaces for props**
- **Add to index.astro if it's a main page section**

### When Updating astro.config.mjs
- **Verify site URL matches domain standard**
- **Test build process after configuration changes**
- **Update robots.txt if base path changes**
- **Verify image optimization settings work**
