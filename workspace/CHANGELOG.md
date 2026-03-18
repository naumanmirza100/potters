<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-03-17 (image-fix)
- **All animaapp.com placeholder images replaced** with real arraish.com CDN URLs sitewide
- **Category cards**: Plates, Karahi, Tea Sets, Bowls, Serving Dishes, Table Decor now show correct product photos
- **Design Family cards**: All 8 families (Blue Felicity, Blue Pattern, Tranquility, Serina, Blue Flower, Blue Celico, Spring Pattern, Slightly Broken) have matching product images
- **Karahis & Tea Sets & Dinner Sets**: Product-specific arraish.com images assigned (no more plate reuse)
- **Hero banners**: HeroBanner + NewArrivalPage hero now use real arraish.com lifestyle photography
- Files: `src/data/categories.ts`, `src/data/products.ts`, `src/sections/Main/components/CategorySlider/index.tsx`, `src/sections/Main/components/HeroBanner.tsx`, `src/pages/NewArrivalPage.tsx`

## 2026-03-17 (catalog-expansion)
- **Real product images**: Replaced ALL animaapp.com placeholder images with actual arraish.com CDN URLs (arraish.com/cdn/shop/files/...)
- **Catalog expanded 4×**: 43 → ~160 unique products across 11 categories: Dinner Sets (8), Tea Sets (6), Plates (22), Bowls (32), Serving Dishes (35), Karahis (6), Vases (16), Planters (5), Pottery Jars (22), Lamps (7), Table Decor (2)
- **CollectionPage**: Now uses direct `COLLECTION_MAP` for slug→array matching, no more fuzzy string filtering — every sub-nav link shows correct products
- **SALE_PRODUCTS**: Auto-derived from all sale-flagged items across all category arrays (no duplication)
- Files: `src/data/products.ts`, `src/pages/CollectionPage.tsx`

## 2026-03-17 (bugfix)
- **Fixed build error** in `CategorySlider/index.tsx`: removed stale `@animaapp/playground-react-sdk` import (`useQuery`/`useMutation`), replaced with static `SEED_CATEGORIES` data (already the fallback)

## 2026-03-17 (audit)
- **Full navbar audit completed**: All 7 nav items render correctly; dropdowns for Tableware (10), Decor (5), Design Family (8) are built
- **Gaps identified**: No router/multi-page nav; subcategory links are anchor-only; Decor, B-Stock, Blue Pottery, Tea Sets lack dedicated sections/data
- **Data status**: NewArrivals (8), Categories (6), DesignFamily (7), SaleProducts (35) all seeded in DB

## 2026-03-17 (static-frontend)
- **Removed `@animaapp/playground-react-sdk`** entirely — all `useQuery`/`useMutation` replaced with static data in `src/data/categories.ts` & `src/data/products.ts`
- **Added React Router** (`BrowserRouter`) with routes: `/`, `/collections/:slug`, `/products/:slug`, `/collections/new-arrival`, `/collections/sale`, `/pages/packaging`, `/pages/about`, `*` (404)
- **New pages**: `HomePage`, `CollectionPage`, `NewArrivalPage`, `SalePage`, `ProductPage`, `AboutPage`, `PackagingPage`, `NotFoundPage`
- **Cart system**: `CartContext` + `CartDrawer` — add to cart, remove, live badge count in header, slide-out drawer
- **Shared `ProductCard`** component uses `useNavigate` + `useCart`; nav links/logo use `useNavigate`; all href anchors converted to router paths

## 2026-03-17 (audit)
- **Sale section added**: Scraped 35 representative products from arraish.com/collections/sale (176 total in-stock, up to 40% off, Rs. 999–51,999)
  - New `SaleSection` component with category filter chips, animated header banner, "Limited Stock" badge, "View all 176" CTA linking to arraish.com
  - Files: `src/sections/Main/components/SaleSection/index.tsx` (new), `src/sections/Main/index.tsx`
  - Nav "SALE" link now routes to `#sale`, rendered in red with "Hot" badge on desktop & mobile; `NavItem.tsx`, `MobileMenuDrawer.tsx`

## 2026-03-17
- **Design Family nav dropdown**: Scraped all 8 collections — Blue Felicity×48, Blue Pattern×12, Tranquility×28, Serina×45, Blue Flower×26, Blue Celico×12, Spring Pattern×2, Slightly Broken×0 (coming soon)
  - Rich dropdown with counts + "Soon" badge; mobile accordion updated; DesignSlider SEED_DESIGNS enriched with productCount & priceRange
  - Files: `NavItem.tsx`, `MobileMenuDrawer.tsx`, `DesignSlider/index.tsx`
- **Decor nav dropdown**: Scraped all 5 subcategories (Planters×5, Vases×16, Aromatic Warmers×2, Table Decoration×14, Lamps×7) with counts + price ranges; rich hover dropdown matches Tableware style
- **Tableware nav dropdown**: Scraped all 9 subcategories from arraish.com with product counts; rich hover dropdown on desktop, accordion on mobile
- **Bug fix**: Moved seed `create()` calls out of render into `useEffect` in CategorySlider, DesignSlider, NewArrivals — fixes React render-loop crash
- **Arraish Blue Pottery**: Full interactivity & animation pass — mobile menu drawer, scroll-triggered animations, product card hover/add-to-cart, review carousel
</changelog>
