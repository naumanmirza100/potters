import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProductCard } from '@/components/ProductCard';
import { ALL_PRODUCTS, DINNER_SETS, TEA_SETS, PLATES_PLATTERS, BOWLS, SERVING_DISHES, KARAHIS, VASES, PLANTERS, POTTERY_JARS, LAMPS, TABLE_DECOR } from '@/data/products';
import { CATEGORIES, DESIGN_FAMILY, TABLEWARE_SUBCATEGORIES, DECOR_SUBCATEGORIES } from '@/data/categories';
import { useState } from 'react';

// Map slugs to specific arrays for precise filtering
const COLLECTION_MAP: Record<string, { label: string; products: typeof ALL_PRODUCTS }> = {
  "dinner-sets":                      { label: "Dinner Sets",                    products: DINNER_SETS },
  "tea-sets-blue-pottery":            { label: "Tea Sets",                       products: TEA_SETS },
  "plates-platters":                  { label: "Plates & Platters",              products: PLATES_PLATTERS },
  "bowls":                            { label: "Bowls",                          products: BOWLS },
  "serving-dishes":                   { label: "Serving Dishes",                 products: SERVING_DISHES },
  "ceramic-blue-pottery-karahies":    { label: "Karahi Handies & Cover Pots",   products: KARAHIS },
  "vases":                            { label: "Vases",                          products: VASES },
  "planters":                         { label: "Planters",                       products: PLANTERS },
  "pottery-jars":                     { label: "Pottery Jars",                   products: POTTERY_JARS },
  "lamps":                            { label: "Lamps",                          products: LAMPS },
  "table-decoration":                 { label: "Table Decoration",               products: TABLE_DECOR },
};

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name A-Z", value: "name-asc" },
];

const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '').replace(/,/g, ''));

export const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [sort, setSort] = useState("featured");
  const [saleOnly, setSaleOnly] = useState(false);

  // Find collection info
  const category = CATEGORIES.find((c) => c.slug === slug);
  const designFamily = DESIGN_FAMILY.find((d) => d.slug === slug);
  const collectionName = (slug && COLLECTION_MAP[slug]?.label) ?? category?.title ?? designFamily?.label ?? slug?.replace(/-/g, ' ')?.replace(/\b\w/g, (l) => l.toUpperCase()) ?? 'Collection';
  const coverImage = category?.imageSrc ?? designFamily?.imageSrc;

  // Filter products — use precise map first, then fall back to string matching
  let products: typeof ALL_PRODUCTS = [];
  if (slug && COLLECTION_MAP[slug]) {
    products = COLLECTION_MAP[slug].products;
  } else {
    products = ALL_PRODUCTS.filter((p) => {
      const inCategory = p.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === slug || p.category.toLowerCase().replace(/\s+/g, '-') === slug;
      const inDesignFamily = p.designFamily?.toLowerCase().replace(/\s+/g, '-') === slug;
      return inCategory || inDesignFamily;
    });
  }

  // If no match, show all
  if (products.length === 0) products = ALL_PRODUCTS;
  if (saleOnly) products = products.filter((p) => p.isSale);

  // Sort
  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return parsePrice(a.currentPrice) - parsePrice(b.currentPrice);
    if (sort === "price-desc") return parsePrice(b.currentPrice) - parsePrice(a.currentPrice);
    if (sort === "name-asc") return a.productName.localeCompare(b.productName);
    return 0;
  });

  return (
    <div className="bg-zinc-100 min-h-screen">
      {/* Hero Banner */}
      {coverImage && (
        <div className="relative h-52 md:h-72 overflow-hidden">
          <img src={coverImage} alt={collectionName} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-950/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">{collectionName}</h1>
            {category?.description && <p className="text-white/80 mt-2 max-w-xl text-sm md:text-base">{category.description}</p>}
            {designFamily && <p className="text-white/80 mt-2 text-sm">{designFamily.count} products · {designFamily.priceRange}</p>}
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-4 md:px-[50px] py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-neutral-500 mb-6 flex items-center gap-1.5">
          <Link to="/" className="hover:text-blue-950 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-blue-950 font-medium">{collectionName}</span>
        </nav>

        {/* Filters & Sort */}
        <div ref={ref} className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-neutral-500 text-sm">{sorted.length} product{sorted.length !== 1 ? 's' : ''}</span>
            <label className="flex items-center gap-1.5 text-sm text-neutral-600 cursor-pointer">
              <input type="checkbox" checked={saleOnly} onChange={(e) => setSaleOnly(e.target.checked)} className="rounded" />
              Sale only
            </label>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-950/20"
          >
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        {/* Grid */}
        {sorted.length === 0 ? (
          <div className="text-center py-24 text-neutral-400">
            <p className="text-lg font-medium">No products found</p>
            <Link to="/" className="mt-4 inline-block text-blue-950 underline text-sm">Back to home</Link>
          </div>
        ) : (
          <ul role="list" className={`gap-x-3 flex flex-wrap gap-y-3 ${isVisible ? 'stagger-children' : ''}`}>
            {sorted.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
