import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProductCard } from '@/components/ProductCard';
import { SALE_PRODUCTS } from '@/data/products';
import { useState } from 'react';

const FILTER_CATEGORIES = ["All", "Bowls", "Serving Dishes", "Plates & Platters", "Tea Sets", "Karahi Handies & Cover Pots", "Pottery Jars", "Tea Mugs", "Tea Coasters", "Vases", "Planters"];
const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '').replace(/,/g, ''));

export const SalePage = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState("featured");

  let products = activeFilter === "All" ? [...SALE_PRODUCTS] : SALE_PRODUCTS.filter((p) => p.category === activeFilter);
  if (sort === "price-asc") products.sort((a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice));
  if (sort === "price-desc") products.sort((a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice));

  return (
    <div className="bg-zinc-100 min-h-screen">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-rose-600 py-12 px-4 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-white rounded-full translate-y-1/2" />
        </div>
        <div className="relative max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl">🏷️</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-widest">SALE</h1>
            <span className="text-3xl">🏷️</span>
          </div>
          <p className="text-white/80 text-base mt-2">
            {SALE_PRODUCTS.length} products · Up to <span className="text-yellow-300 font-bold">40% off</span> · All handcrafted Multani blue pottery
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-[50px] py-8">
        <nav className="text-xs text-neutral-500 mb-6 flex items-center gap-1.5">
          <Link to="/" className="hover:text-blue-950 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-red-600 font-medium">Sale</span>
        </nav>

        {/* Filter chips */}
        <div ref={ref} className={`flex flex-wrap gap-2 mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs tracking-[0.7px] px-3 py-1.5 rounded-full border transition-all duration-200 font-medium ${activeFilter === cat ? 'bg-blue-950 text-white border-blue-950 shadow-md' : 'bg-white text-neutral-600 border-neutral-300 hover:border-blue-950 hover:text-blue-950'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-neutral-500 text-sm">{products.length} product{products.length !== 1 ? 's' : ''}</span>
            <span className="text-xs text-red-500 bg-red-50 px-2.5 py-1 rounded-full border border-red-200 animate-pulse-soft">Limited Stock</span>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-950/20">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-24 text-neutral-400">
            <p className="text-lg font-medium">No products in this category</p>
          </div>
        ) : (
          <ul role="list" className="gap-x-3 flex flex-wrap gap-y-3">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </ul>
        )}
      </div>
    </div>
  );
};
