# Preta Fit Project Development Standards

## Project Overview

- **Technology Stack**: Astro 5.13.5, TypeScript, Custom CSS (migrating to Tailwind), SEO-optimized, accessibility-focused
- **Project Type**: Business website for CrossFit/BJJ gym in Costa Rica
- **Core Architecture**: Component-based Astro with data-driven content and comprehensive SEO

## Critical File Coordination Rules

### Data File Dependencies

**MANDATORY**: When modifying any data file, update all dependent components:

- **businessInfo.ts changes**  Must update BaseLayout.astro structured data
- **reviews.ts changes**  Must update index.astro and any pages using getValidatedReviews()
- **schedules.ts changes**  Must update Schedule.astro component
- **plansCrossFit.ts changes**  Must update PlansCrossFit.astro component

### SEO and Security Chain

**CRITICAL**: BaseLayout.astro contains security headers and SEO - coordinate changes:

- **CSP Headers**: Update Content-Security-Policy when adding external resources
- **Structured Data**: Regenerated from businessInfo.ts - maintain schema validity
- **Meta Tags**: Preserve optimized title/description length limits (60/155 chars)
- **Font Loading**: Current Google Fonts in CSP - update if changing fonts

### Component Architecture Rules

**Page Structure Requirements**:
- All pages MUST import BaseLayout as wrapper
- Section components imported individually (NOT as default exports)
- Header/Footer slots used consistently
- SEO props passed to BaseLayout for each page

## Tailwind Migration Standards

### Visual Preservation Protocol

**ABSOLUTE REQUIREMENT**: Maintain exact pixel-perfect appearance during migration

**CSS Mapping Procedure**:
1. Map each custom class in theme.css to equivalent Tailwind utilities
2. Preserve all CSS variables (--brand, --card, --ink, etc.) in Tailwind config
3. Maintain all responsive breakpoints exactly: 900px, 600px, 480px, 360px
4. Preserve all animations and transitions with identical timing
5. Keep accessibility features: focus indicators, reduced motion support, high contrast

**Security Header Updates**:
- Remove Google Fonts from CSP when migrating to system fonts
- Add Tailwind CDN to CSP if using CDN approach
- Update style-src directive for Tailwind build output

### Accessibility Preservation Rules

**MANDATORY FEATURES TO MAINTAIN**:
- Skip links with exact keyboard navigation
- Focus indicators with current color/shadow specifications  
- ARIA attributes on all interactive elements
- Reduced motion media query support
- High contrast mode compatibility
- Screen reader announcements

## Framework Integration Standards

### Astro Component Rules

**Component Structure Requirements**:
- Use TypeScript for all new components
- Import data from /src/data/ files, never hardcode business data
- Implement proper slot usage for layout components
- Maintain SEO props interface for page-level components

**Styling Integration**:
- Apply Tailwind classes directly in component templates
- Use component-scoped styles only for complex animations
- Maintain responsive class patterns: mobile-first approach
- Preserve custom CSS for unique brand elements

### TypeScript Data Management

**Data File Standards**:
- Export typed interfaces for all business data structures
- Maintain businessInfo.ts as single source of truth for company data
- Use validation functions (like getValidatedReviews) for data integrity
- Keep image paths relative to /public/ directory

## Key File Interaction Matrix

### When Modifying BaseLayout.astro
- **Check**: All pages using layout (index.astro, crossfit.astro, wodwarriors.astro)
- **Update**: CSP headers if adding external resources
- **Verify**: Structured data generation with businessInfo.ts changes
- **Test**: SEO meta tag generation with all page variants

### When Modifying Component Styles
- **Coordinate**: All parent pages importing the component
- **Preserve**: Responsive breakpoints and hover states
- **Maintain**: Accessibility focus states and keyboard navigation
- **Verify**: No layout shifts during interaction states

### When Updating Business Data
- **businessInfo.ts changes**: Update BaseLayout structured data
- **Image path changes**: Verify all component references
- **Contact info changes**: Check Header, Footer, Contact components
- **Schedule changes**: Update both schedules.ts and Schedule.astro

## Prohibited Actions

### NEVER DO:
- **Break visual consistency** during Tailwind migration
- **Remove accessibility features** for styling convenience  
- **Hardcode business data** in components instead of importing from /src/data/
- **Skip CSP header updates** when adding external resources
- **Change responsive breakpoints** without checking all components
- **Remove SEO meta tags** or structured data elements
- **Modify TypeScript interfaces** without updating all dependent files
- **Use inline styles** instead of Tailwind classes
- **Remove ARIA attributes** during component refactoring

### Security Prohibitions:
- **Never use unsafe-eval** in CSP headers
- **Never remove security headers** from BaseLayout.astro
- **Never expose sensitive data** in client-side JavaScript
- **Never use external CDNs** without CSP whitelist updates

## AI Decision-Making Standards

### Priority Order for Conflicts:
1. **Visual consistency** - maintain exact appearance
2. **Accessibility compliance** - never compromise WCAG standards  
3. **SEO preservation** - maintain search optimization
4. **Security headers** - keep all existing protections
5. **Performance optimization** - improve without breaking functionality

### Ambiguous Situation Handling:
- **When unsure about styling**: Reference current theme.css implementation
- **When data structure unclear**: Check TypeScript interfaces in /src/data/
- **When component dependencies unclear**: Trace imports from pages to components
- **When accessibility unclear**: Maintain all existing ARIA and keyboard support

## Workflow Standards

### Before Making Changes:
1. **Identify dependencies** using file import chain
2. **Document current behavior** if modifying existing functionality  
3. **Plan coordination** for multi-file changes
4. **Verify CSP compliance** for external resource additions

### After Making Changes:
1. **Test visual consistency** across all responsive breakpoints
2. **Verify accessibility** with keyboard navigation and screen readers
3. **Check SEO validity** with structured data testing
4. **Confirm security headers** maintain protection level

### Change Coordination Checklist:
- [ ] All dependent files identified and planned for update
- [ ] Visual consistency maintained across viewport sizes
- [ ] Accessibility features preserved or enhanced
- [ ] SEO metadata and structured data validated
- [ ] Security headers updated appropriately
- [ ] TypeScript types maintained or improved
