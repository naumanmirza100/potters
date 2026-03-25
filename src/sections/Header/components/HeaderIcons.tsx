import { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ALL_PRODUCTS } from '@/data/products';

export const HeaderIcons = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return ALL_PRODUCTS.filter(
      (p) =>
        p.productName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (href: string) => {
    setSearchOpen(false);
    setQuery('');
    navigate(href);
  };

  return (
    <div className="text-[15px] box-border caret-transparent flex col-end-[icons] col-start-[icons] row-end-[icons] row-start-[icons] justify-self-end leading-[27px] min-h-[auto] min-w-[auto] pr-2 md:text-base md:leading-[28.8px]">
      <div className="text-[15px] box-border caret-transparent flex leading-[0px] min-h-[auto] min-w-[auto] md:text-base">
        <div ref={searchRef} className="text-[15px] box-border caret-transparent min-h-[auto] min-w-[auto] md:text-base relative">
          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              if (searchOpen) setQuery('');
            }}
            aria-label="Search"
            className="relative text-neutral-800 text-sm box-border caret-transparent inline-flex items-center justify-center h-11 w-11 transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <span className="items-center box-border caret-transparent flex h-full justify-center">
              <span className="items-center box-border caret-transparent flex h-11 justify-center min-h-[auto] min-w-[auto] w-11">
                <img src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-16.svg" alt="Search" className="box-border caret-transparent h-5 w-5" />
              </span>
            </span>
          </button>
          <div className={`absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl border border-neutral-200 p-3 transition-all duration-200 z-50 ${searchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus={searchOpen}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-950/20 focus:border-blue-950 caret-black cursor-text"
            />
            {query.trim() && (
              <div className="mt-2 max-h-64 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSelect(product.productHref)}
                      className="w-full flex items-center gap-3 px-2 py-2 text-left hover:bg-neutral-100 rounded-md transition-colors"
                    >
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-800 truncate">{product.productName}</p>
                        <p className="text-xs text-neutral-500">{product.currentPrice}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-neutral-500 text-center py-3">No products found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setCartOpen(true)}
        aria-label="Cart"
        className="relative text-neutral-800 text-sm items-center box-border caret-transparent flex h-11 justify-center leading-[25.2px] min-h-[auto] min-w-[auto] w-11 -mr-3 transition-transform duration-200 hover:scale-110 group"
      >
        <span className="items-center box-border caret-transparent flex h-11 justify-center min-h-[auto] min-w-[auto] w-11">
          <img src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-23.svg" alt="Cart" className="box-border caret-transparent h-11 w-11" />
        </span>
        {totalItems > 0 && (
          <span className="absolute top-1 right-1 bg-blue-950 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
            {totalItems > 9 ? '9+' : totalItems}
          </span>
        )}
      </button>
    </div>
  );
};
