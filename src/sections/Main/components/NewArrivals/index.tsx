import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { NEW_ARRIVALS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useNavigate } from 'react-router-dom';

export const NewArrivals = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const navigate = useNavigate();

  return (
    <section id="new-arrivals" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="relative text-white/80 text-[15px] bg-fixed bg-blue-950 box-border caret-transparent leading-[27px] z-0 md:text-base md:leading-[28.8px]">
        <div ref={ref} className="text-[15px] box-border caret-transparent leading-[27px] pt-[27px] pb-[39px] md:text-base md:leading-[28.8px] md:pt-9 md:pb-[52px]">
          <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-[1200px] mb-[25px] mx-auto px-[15px] md:text-base md:leading-[28.8px] md:px-[50px]">
            <h2 className={`text-white text-[21px] box-border caret-transparent tracking-[0.63px] leading-[27px] mb-5 md:text-[25.2px] md:leading-[32.4px] md:mb-[30px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              New Arrivals
            </h2>
          </div>
          <div className="relative text-[15px] box-border caret-transparent block leading-[27px] max-w-[1200px] mx-auto px-[15px] md:text-base md:leading-[28.8px] md:px-[50px]">
            <ul
              role="list"
              aria-label="New Arrivals"
              className={`text-[15px] box-border caret-transparent gap-x-1.5 flex flex-wrap leading-[27px] list-none gap-y-1.5 mt-[15px] pl-0 md:text-base md:gap-x-3 md:leading-[28.8px] md:gap-y-3 md:mt-4 ${isVisible ? 'stagger-children' : ''}`}
            >
              {NEW_ARRIVALS.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </ul>
          </div>
          <div className={`text-[15px] box-border caret-transparent leading-[27px] text-center mt-4 md:text-base md:leading-[28.8px] ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
            <button
              onClick={() => navigate('/collections/new-arrival')}
              aria-label="View all new arrivals"
              className="relative text-white text-[15px] items-center bg-blue-950 box-border caret-transparent inline-flex justify-center tracking-[1px] leading-[18px] min-h-[47px] min-w-[122px] mt-2.5 px-[30px] rounded-[7px] btn-hover hover:bg-blue-900 transition-colors duration-200"
            >
              View all
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
