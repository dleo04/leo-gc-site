# Leo General Contracting LLC — Website Project

## Business Info
- Name: Leo General Contracting LLC
- Phone: (301) 613-8066
- Email: leogeneralcontracting@gmail.com
- MHIC License: #168342 — Licensed, Bonded & Insured
- Location: Silver Spring / Rockville, MD
- Target market: Potomac, North Bethesda, Bethesda, Rockville, Gaithersburg, Silver Spring, Chevy Chase MD
- Brand colors: Gold #C49130 | Black #141414 | White #FFFFFF
- Font: Work Sans

## Services
1. Interior & Exterior Painting
2. Drywall Installation & Repair
3. Bathroom & Kitchen Refresh
4. Deck & Carpentry
5. Tile Work
6. General Home Repairs

## Site Structure
- index.html — Homepage
- components/header.html — Shared header (loaded via components.js)
- components/footer.html — Shared footer (loaded via components.js)
- js/components.js — Loads header/footer into every page using {{BASE}} path system
- css/tailwind.css — All site styles
- services/ — 6 service pages + service-template.html
- gallery/index.html — Gallery page
- contact/index.html — Contact page
- images/ — Logo and all site images

## Component System
Pages use window.LGC_BASE to set relative paths. Each page sets this
before loading components.js. {{BASE}} is replaced at runtime.
Header and footer are in components/ folder and injected via fetch().

## Status
- Homepage: Complete
- Service pages: All 6 complete
- Gallery page: Complete (placeholder images)
- Contact page: Complete
- Footer: Needs redesign (see next task)
- Social media links: Placeholder only — not yet active
- Real photos: Not yet added

## Next Steps
- Redesign footer with dark background matching brand
- Add location/service area pages
- Replace placeholder images with real job photos when available
- Connect contact form to email service
- Deploy to leogeneral.com when ready