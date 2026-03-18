import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ALL_PRODUCTS } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProductCard } from '@/components/ProductCard';

export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, setIsOpen } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const { ref, isVisible } = useScrollAnimation(0.05);

  const product = ALL_PRODUCTS.find((p) => p.productHref === `/products/${slug}`);

  if (!product) {
    return (
      <div className="bg-zinc-100 min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-blue-950">Product not found</h1>
        <Link to="/" className="text-blue-950 underline">Back to home</Link>
      </div>
    );
  }

  const related = ALL_PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.designFamily === product.designFamily)).slice(0, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      for (let i = 0; i < qty; i++) addToCart(product);
      setIsAdding(false);
      setIsAdded(true);
      setIsOpen(true);
      setTimeout(() => setIsAdded(false), 2500);
    }, 700);
  };

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 md:px-[50px] py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-neutral-500 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-blue-950 transition-colors">Home</Link>
          <span>/</span>
          {product.designFamily && (
            <>
              <Link to={`/collections/${product.designFamily.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-950 transition-colors">{product.designFamily}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-blue-950 font-medium line-clamp-1">{product.productName}</span>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-amber-50 rounded-2xl p-6 md:p-10 shadow-sm">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden aspect-square bg-white shadow-inner">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {product.isSale && (
              <span className="absolute top-3 left-3 bg-sky-950 text-white text-xs tracking-widest px-3 py-1 rounded-full animate-pulse-soft">
                Sale
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5 justify-start">
            {product.designFamily && (
              <Link to={`/collections/${product.designFamily.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-950/60 text-xs uppercase tracking-widest font-semibold hover:text-blue-950 transition-colors">
                {product.designFamily}
              </Link>
            )}
            <h1 className="text-blue-950 text-2xl md:text-3xl font-bold leading-tight">{product.productName}</h1>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-blue-950">{product.currentPrice}</span>
              {product.isSale && product.originalPrice && (
                <s className="text-neutral-400 text-lg">{product.originalPrice}</s>
              )}
              {product.isSale && product.originalPrice && (
                <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                  {Math.round((1 - parseFloat(product.currentPrice.replace(/[^0-9.]/g, '').replace(/,/g, '')) / parseFloat(product.originalPrice.replace(/[^0-9.]/g, '').replace(/,/g, ''))) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-neutral-600 text-sm leading-relaxed">{product.description}</p>
            )}

            {/* Category badge */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-blue-950 bg-blue-950/10 px-3 py-1 rounded-full font-medium">{product.category}</span>
              {product.designFamily && (
                <span className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-medium">{product.designFamily}</span>
              )}
            </div>

            {/* Qty + Add to Cart */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center border border-neutral-300 rounded-lg overflow-hidden bg-white">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 text-lg text-neutral-600 hover:bg-neutral-100 transition-colors">-</button>
                <span className="px-4 py-2 text-sm font-medium text-blue-950 min-w-[40px] text-center">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 text-lg text-neutral-600 hover:bg-neutral-100 transition-colors">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex-1 flex items-center justify-center gap-2 min-h-[50px] px-6 rounded-lg text-white font-medium tracking-wide transition-all duration-200 btn-hover ${isAdded ? 'bg-green-600' : 'bg-blue-950 hover:bg-blue-900'} ${isAdding ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isAdding ? (
                  <><svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Adding...</>
                ) : isAdded ? (
                  <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Added to Cart!</>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 mt-2 pt-4 border-t border-neutral-200">
              {[
                { icon: "🚚", text: "Free Shipping" },
                { icon: "🔄", text: "Easy Returns" },
                { icon: "🏺", text: "Handcrafted" },
              ].map((b) => (
                <div key={b.text} className="text-center">
                  <div className="text-xl">{b.icon}</div>
                  <div className="text-xs text-neutral-500 mt-0.5 font-medium">{b.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div ref={ref} className="mt-14">
            <h2 className="text-blue-950 text-xl font-bold mb-6 tracking-wide">You May Also Like</h2>
            <div className="bg-blue-950 rounded-2xl px-4 md:px-8 py-6">
              <ul role="list" className={`gap-x-3 flex flex-wrap gap-y-3 ${isVisible ? 'stagger-children' : ''}`}>
                {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </ul>
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="mt-8 text-center">
          <button onClick={() => navigate(-1)} className="text-blue-950 text-sm underline hover:text-blue-800 transition-colors">
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};
