import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
  index?: number;
};

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, setIsOpen } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
      setIsAdded(true);
      setIsOpen(true);
      setTimeout(() => setIsAdded(false), 2000);
    }, 600);
  };

  return (
    <li
      className="text-[15px] box-border caret-transparent grow shrink-0 leading-[27px] max-w-[calc(50%_-_3px)] min-h-[auto] min-w-[auto] w-[calc(50%_-_3px)] md:text-base md:leading-[28.8px] md:max-w-[calc(25%_-_9px)] md:w-[calc(25%_-_9px)] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative h-full cursor-pointer" onClick={() => navigate(product.productHref)}>
        <div className="text-[15px] box-border caret-transparent flex flex-col h-full leading-[27px] text-left md:text-base md:leading-[28.8px] group">
          {/* Image */}
          <div className="relative text-neutral-800/80 items-stretch bg-amber-50 box-border caret-transparent flex leading-[27px] w-full rounded-lg card-hover before:block before:h-0 before:w-0 before:pb-[100%] after:box-border after:h-full after:absolute after:w-full after:z-[-1] after:rounded-lg after:left-0 after:top-0 after:shadow-[rgba(0,17,40,0)_0px_4px_5px_0px] after:transition-shadow after:duration-300">
            <div className="absolute box-border leading-[27px] w-[calc(100%_-_24px)] z-0 overflow-hidden m-3 inset-y-0 img-hover-zoom">
              <div className="absolute box-border leading-[27px] w-full overflow-hidden inset-y-0">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="absolute box-border h-full leading-[27px] max-w-full object-cover w-full left-0 top-0 aspect-square"
                />
              </div>
            </div>
            <div className="relative box-border grid grow grid-rows-[minmax(0px,1fr)_max-content_minmax(0px,1fr)] leading-[27px] w-full p-[22px]">
              {product.isSale && (
                <div className="self-end row-start-3 justify-self-start">
                  <span className="text-white text-xs bg-sky-950 inline-block tracking-[1px] leading-3 text-center border pt-[5px] pb-1.5 px-[13px] rounded-[40px] border-solid border-white/10 animate-pulse-soft">
                    Sale
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* Details */}
          <div className="box-border grid grow grid-rows-[max-content_minmax(0px,1fr)_max-content_auto] leading-[27px] w-full">
            <div className="row-start-2 min-h-[auto] min-w-[auto] py-[13px]">
              <p className="text-white text-[12.6px] tracking-[0.63px] leading-[16.2px] md:text-[13.65px] md:leading-[17.55px]">
                <span className="block text-[12.6px] leading-[16.2px] md:text-[13.65px] md:leading-[17.55px] line-clamp-2">
                  {product.productName}
                </span>
              </p>
              <div className="text-white text-base tracking-[1px] leading-6 mt-[7px]">
                {product.isSale ? (
                  <div className="flex flex-wrap gap-1 items-center">
                    <s className="text-white/60 text-[13px] line-through">{product.originalPrice}</s>
                    <span className="text-green-400 font-medium">{product.currentPrice}</span>
                  </div>
                ) : (
                  <span>{product.currentPrice}</span>
                )}
              </div>
            </div>
            <div className="relative row-start-4 z-[1] mb-2.5">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`relative appearance-none text-white text-[15px] items-center bg-blue-950 caret-transparent flex justify-center tracking-[1px] leading-[18px] min-h-[47px] min-w-full text-center w-full p-2 rounded-[7px] btn-hover transition-all duration-200 ${isAdding ? 'opacity-70 cursor-wait' : ''} ${isAdded ? '!bg-green-600' : 'hover:bg-blue-900'}`}
              >
                {isAdding ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                  </span>
                ) : isAdded ? (
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Added!
                  </span>
                ) : 'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
