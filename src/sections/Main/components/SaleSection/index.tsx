import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SALE_PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useNavigate } from 'react-router-dom';

const FILTER_CATEGORIES = ["All", "Bowls", "Serving Dishes", "Plates & Platters", "Tea Sets", "Karahi Handies & Cover Pots", "Pottery Jars", "Tea Mugs", "Tea Coasters", "Vases", "Planters"];

export const SaleSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const displayProducts = activeFilter === "All"
    ? SALE_PRODUCTS
    : SALE_PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="sale" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="relative text-white/80 text-[15px] bg-fixed bg-blue-950 box-border caret-transparent leading-[27px] z-0 md:text-base md:leading-[28.8px]">
        {/* Header banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-rose-600 py-6 px-4 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full translate-y-1/2" />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-[15px] md:px-[50px]">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="text-2xl">🏷️</span>
              <h2 className="text-white text-[22px] md:text-[28px] font-bold tracking-[1px] leading-tight">SALE</h2>
              <span className="text-2xl">🏷️</span>
            </div>
            <p className="text-white/80 text-sm md:text-base tracking-wider mt-1">
              {SALE_PRODUCTS.length} products · Up to <span className="text-yellow-300 font-bold">40% off</span> · All handcrafted Multani blue pottery
            </p>
          </div>
        </div>

        <div ref={ref} className="text-[15px] box-border caret-transparent leading-[27px] pt-[27px] pb-[39px] md:text-base md:leading-[28.8px] md:pt-9 md:pb-[52px]">
          <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-[1200px] mx-auto px-[15px] md:text-base md:leading-[28.8px] md:px-[50px]">
            {/* Filter chips */}
            <div className={`flex flex-wrap gap-2 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs tracking-[0.7px] px-3 py-1.5 rounded-full border transition-all duration-200 font-medium ${activeFilter === cat ? 'bg-white text-blue-950 border-white shadow-md' : 'bg-transparent text-white/70 border-white/30 hover:border-white/70 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={`flex items-center justify-between mb-4 ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
              <p className="text-white/60 text-xs tracking-wider uppercase">
                {displayProducts.length} product{displayProducts.length !== 1 ? 's' : ''}{activeFilter !== "All" ? ` in ${activeFilter}` : ' on sale'}
              </p>
              <span className="text-xs text-red-300 bg-red-900/40 px-2.5 py-1 rounded-full border border-red-600/30 animate-pulse-soft">
                Limited Stock
              </span>
            </div>
          </div>

          {/* Product grid */}
          <div className="relative text-[15px] box-border caret-transparent block leading-[27px] max-w-[1200px] mx-auto px-[15px] md:text-base md:leading-[28.8px] md:px-[50px]">
            {displayProducts.length === 0 ? (
              <div className="flex justify-center py-12">
                <div className="text-white/50 text-sm">No products in this category.</div>
              </div>
            ) : (
              <ul role="list" aria-label="Sale products" className={`text-[15px] box-border caret-transparent gap-x-1.5 flex flex-wrap leading-[27px] list-none gap-y-1.5 mt-[15px] pl-0 md:text-base md:gap-x-3 md:leading-[28.8px] md:gap-y-3 md:mt-4 ${isVisible ? 'stagger-children' : ''}`}>
                {displayProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </ul>
            )}
          </div>

          {/* View all CTA */}
          <div className={`text-[15px] box-border caret-transparent leading-[27px] text-center mt-8 md:text-base md:leading-[28.8px] ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
            <button
              onClick={() => navigate('/collections/sale')}
              aria-label="View all sale items"
              className="relative text-white text-[15px] items-center bg-red-700 box-border caret-transparent inline-flex justify-center tracking-[1px] leading-[18px] min-h-[47px] min-w-[160px] mt-2.5 px-[30px] rounded-[7px] btn-hover hover:bg-red-600 transition-colors duration-200 gap-2"
            >
              <span>View all {SALE_PRODUCTS.length} sale items</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
