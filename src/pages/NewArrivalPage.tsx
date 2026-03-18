import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProductCard } from '@/components/ProductCard';
import { NEW_ARRIVALS } from '@/data/products';
import { useState } from 'react';

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];
const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '').replace(/,/g, ''));

export const NewArrivalPage = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [sort, setSort] = useState("featured");
  const [saleOnly, setSaleOnly] = useState(false);

  let products = saleOnly ? NEW_ARRIVALS.filter((p) => p.isSale) : [...NEW_ARRIVALS];
  if (sort === "price-asc") products.sort((a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice));
  if (sort === "price-desc") products.sort((a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice));

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="relative h-52 md:h-64 overflow-hidden">
        <img src="https://arraish.com/cdn/shop/files/Arraish_Product_Shots_21-min_a40fc9f5-f4c1-4f32-b2fa-5282e4d9d13d.jpg?v=1706691694&width=1500" alt="New Arrivals" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">New Arrivals</h1>
          <p className="text-white/80 mt-2 text-sm md:text-base">Fresh handcrafted pieces, just in</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-[50px] py-8">
        <nav className="text-xs text-neutral-500 mb-6 flex items-center gap-1.5">
          <Link to="/" className="hover:text-blue-950 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-blue-950 font-medium">New Arrivals</span>
        </nav>
        <div ref={ref} className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-neutral-500 text-sm">{products.length} products</span>
            <label className="flex items-center gap-1.5 text-sm text-neutral-600 cursor-pointer">
              <input type="checkbox" checked={saleOnly} onChange={(e) => setSaleOnly(e.target.checked)} className="rounded" />
              Sale only
            </label>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-950/20">
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <ul role="list" className={`gap-x-3 flex flex-wrap gap-y-3 ${isVisible ? 'stagger-children' : ''}`}>
          {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </ul>
      </div>
    </div>
  );
};
