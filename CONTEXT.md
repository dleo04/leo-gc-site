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
1. Handyman Services
2. Realtor & Listing Prep Services
3. General Home Repairs
4. Interior & Exterior Painting
5. Drywall Installation & Repair
6. Bathroom & Kitchen Refresh
7. Deck & Carpentry
8. Tile Work
9. Landscaping & Yard Maintenance

## Site Structure
- index.html — Homepage
- components/header.html — Shared header (loaded via components.js)
- components/footer.html — Shared footer (loaded via components.js)
- js/components.js — Loads header/footer into every page using {{BASE}} path system
- css/tailwind.css — All site styles
- services/ — 9 service pages + service-template.html (handyman-services.html, realtor-listing-prep.html, landscaping-yard-maintenance.html + 6 originals)
- locations/ — 12 location pages (bethesda, chevy-chase, clarksburg, gaithersburg, germantown, kensington, north-bethesda, olney, potomac, rockville, silver-spring, wheaton)
- service-areas/index.html — Service areas overview page
- gallery/index.html — Gallery page
- contact/index.html — Contact page
- images/ — Logo and all site images

## Component System
Pages use window.LGC_BASE to set relative paths. Each page sets this
before loading components.js. {{BASE}} is replaced at runtime.
Header and footer are in components/ folder and injected via fetch().

## Status
- Homepage: Complete
- Service pages: All 9 complete
- Gallery page: Complete (placeholder images)
- Contact page: Complete
- Footer: Redesigned with dark #141414 background
- Real photos: Not yet added

## Next Steps
- Replace placeholder images with real job photos when available
- Connect contact form to email service
- Deploy to leogeneral.com when ready