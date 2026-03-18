import { useState, useRef } from 'react';
import { CategoryCard } from "@/sections/Main/components/CategorySlider/CategoryCard";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const SEED_CATEGORIES = [
  { title: "Plates And Platters", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_8-min_3345d8b7-6f29-4d6d-9b57-61e27a6d8143.jpg?v=1706691880&width=533", imageAlt: "Plates And Platters", href: "/collections/plates-platters", description: "Plates and Platters That Bring Style to Your Table Your dining setup..." },
  { title: "Ceramic Blue Pottery Karahi", imageSrc: "https://arraish.com/cdn/shop/files/DSC_0045_a2c114f0-466f-4a00-8354-f58c49e7943c.jpg?v=1708453418&width=533", imageAlt: "Blue Pottery Karahi", href: "/collections/ceramic-blue-pottery-karahies", description: "Blue Pottery Karahi Designs That Add Tradition to Every Table Serve your..." },
  { title: "Blue Pottery Tea Sets", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_8-min_3345d8b7-6f29-4d6d-9b57-61e27a6d8143.jpg?v=1706691880&width=800", imageAlt: "Multani Blue Pottery Tea Sets", href: "/collections/tea-sets-blue-pottery", description: "Unique Designs for Your Perfect Tea Time Welcome to our Blue Pottery..." },
  { title: "Bowls", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_61-min.jpg?v=1706693730&width=533", imageAlt: "Multani Blue Pottery Ceramic Bowls", href: "/collections/bowls", description: "Handcrafted Ceramic Bowls for Every Meal Bring charm to your table with..." },
  { title: "Serving Dishes", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_37-min.jpg?v=1706692775&width=533", imageAlt: "Blue Pottery Serving Dishes", href: "/collections/serving-dishes", description: "Serving Dishes That Add Warmth to Every Meal Present your meals beautifully..." },
  { title: "Table Decoration", imageSrc: "https://arraish.com/cdn/shop/files/Blue_Felicity_Aromatic_Warmer_1_360x.jpg?v=1680516596", imageAlt: "Table Decoration", href: "/collections/table-decoration" },
];

const ICON_MAP: Record<string, string> = {
  titleIcon: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-25.svg",
  descIcon: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-24.svg",
  tableIcon: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-26.svg",
};

const IMAGE_CLASS_MAP: Record<string, string> = {
  "Plates And Platters": "aspect-[auto_3024_/_3024]",
  "Ceramic Blue Pottery Karahi": "aspect-[auto_1080_/_1080]",
  "Blue Pottery Tea Sets": "aspect-[auto_800_/_800]",
  "Bowls": "aspect-[auto_1080_/_1080]",
  "Serving Dishes": "aspect-[auto_3024_/_3024]",
  "Table Decoration": "aspect-[auto_3024_/_3024]",
};

export const CategorySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const totalSlides = SEED_CATEGORIES.length;

  const scrollToSlide = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    const newSlide = direction === 'next'
      ? Math.min(currentSlide + 1, totalSlides - 1)
      : Math.max(currentSlide - 1, 0);
    setCurrentSlide(newSlide);
    const scrollAmount = sliderRef.current.offsetWidth * 0.8;
    sliderRef.current.scrollBy({ left: direction === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  const displayCategories = SEED_CATEGORIES;

  return (
    <section id="categories" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="text-zinc-100/80 text-[15px] bg-fixed bg-sky-950 box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
        <div ref={ref} className="relative text-[15px] box-border caret-transparent leading-[27px] max-w-[1200px] z-0 mx-auto px-0 py-9 md:text-base md:leading-[28.8px] md:px-[50px] md:py-12">
          <div className={`text-[15px] items-end box-border caret-transparent gap-x-2.5 flex flex-wrap justify-between leading-[27px] gap-y-2.5 mb-[30px] px-[15px] md:text-base md:items-center md:leading-[28.8px] md:px-0 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-zinc-100 text-[21px] box-border caret-transparent tracking-[0.63px] leading-[27px] min-h-[auto] min-w-[auto] md:text-[25.2px] md:leading-[32.4px]">
              Shop our top categories
            </h2>
            <a href="/collections/plates-platters" className="text-zinc-100/90 text-sm box-border caret-transparent block shrink-0 leading-[25.2px] min-h-[auto] min-w-[auto] opacity-100 underline decoration-1 underline-offset-[3px] md:hidden md:min-h-0 md:min-w-0 md:opacity-[0.01] transition-opacity duration-200 hover:opacity-70">
              View all
            </a>
          </div>
          <div className="relative text-[15px] box-border caret-transparent block leading-[27px] md:text-base md:leading-[28.8px]">
            <ul ref={sliderRef} role="list" className={`relative text-[15px] box-border caret-transparent gap-x-1.5 flex flex-nowrap leading-[27px] list-none gap-y-1.5 scroll-smooth w-full overflow-auto mb-2.5 pl-0 scroll-pl-[15px] md:static md:text-base md:gap-x-3 md:flex-wrap md:leading-[28.8px] md:gap-y-3 md:scroll-auto md:snap-none md:w-auto md:overflow-visible md:mb-0 md:scroll-pl-[auto] video-slider ${isVisible ? 'stagger-children' : ''}`}>
              {displayCategories.map((cat, i) => (
                <CategoryCard key={i} liClassName={i === 0 ? "ml-[15px]" : ""} imageSrc={cat.imageSrc} imageAlt={cat.imageAlt} imageClassName={IMAGE_CLASS_MAP[cat.title] ?? "aspect-[auto_3024_/_3024]"} title={cat.title} href={cat.href} description={cat.description} descriptionIconSrc={cat.description ? ICON_MAP.descIcon : undefined} titleIconSrc={cat.title === "Table Decoration" ? ICON_MAP.tableIcon : ICON_MAP.titleIcon} index={i} />
              ))}
            </ul>
            <div className="text-[15px] items-center box-border caret-transparent flex justify-center leading-[27px] md:text-base md:hidden md:leading-[28.8px]">
              <button type="button" name="previous" aria-label="Slide left" onClick={() => scrollToSlide('prev')} className="text-[13.3333px] items-center bg-transparent caret-transparent flex h-11 justify-center tracking-[normal] leading-[normal] min-h-[auto] min-w-[auto] text-center w-11 font-arial md:min-h-0 md:min-w-0 transition-transform duration-200 hover:scale-110 active:scale-95">
                <span className="items-center box-border caret-transparent flex h-5 justify-center min-h-[auto] min-w-[auto] w-5 md:min-h-0 md:min-w-0">
                  <img src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-27.svg" alt="Previous" className="text-zinc-100/80 box-border caret-transparent h-1.5 rotate-90 align-baseline w-full md:text-zinc-100/30 md:transform-none" />
                </span>
              </button>
              <div className="text-[10px] box-border caret-transparent flex justify-center tracking-[0.7px] leading-[17px] min-h-[auto] min-w-11 md:text-xs md:leading-[20.4px] md:min-h-0">
                <span className="text-[10px] box-border caret-transparent block leading-[17px] min-h-[auto] min-w-[auto] md:text-xs md:leading-[20.4px] md:min-h-0 md:min-w-0">
                  {currentSlide + 1}
                </span>
                <span className="text-[10px] box-border caret-transparent block leading-[17px] min-h-[auto] min-w-[auto] md:text-xs md:leading-[20.4px] md:min-h-0 md:min-w-0">
                  {" "}/{" "}
                </span>
                <span className="text-[10px] box-border caret-transparent block leading-[17px] min-h-[auto] min-w-[auto] md:text-xs md:leading-[20.4px] md:min-h-0 md:min-w-0">
                  {totalSlides}
                </span>
              </div>
              <button type="button" name="next" aria-label="Slide right" onClick={() => scrollToSlide('next')} className="text-[13.3333px] items-center bg-transparent caret-transparent flex h-11 justify-center tracking-[normal] leading-[normal] min-h-[auto] min-w-[auto] text-center w-11 font-arial md:min-h-0 md:min-w-0 transition-transform duration-200 hover:scale-110 active:scale-95">
                <span className="items-center box-border caret-transparent flex h-5 justify-center min-h-[auto] min-w-[auto] w-5 md:min-h-0 md:min-w-0">
                  <img src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-27.svg" alt="Next" className="text-zinc-100/80 box-border caret-transparent h-1.5 -rotate-90 align-baseline w-full md:text-zinc-100/30 md:transform-none" />
                </span>
              </button>
            </div>
          </div>
          <div className={`text-[15px] box-border caret-transparent hidden leading-[27px] opacity-[0.01] text-center mt-5 md:text-base md:block md:leading-[28.8px] md:opacity-100 ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
            <a href="/collections/plates-platters" className="relative text-white text-[15px] items-center bg-sky-950 box-border caret-transparent inline-flex justify-center tracking-[1px] leading-[18px] min-h-[47px] min-w-[122px] px-[30px] rounded-[7px] btn-hover before:accent-auto before:shadow-[rgba(0,17,40,0)_0px_4px_5px_0px] before:box-border before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[1px] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[7px] before:border-separate before:inset-0 before:font-maven_pro after:accent-auto after:shadow-[rgba(255,255,255,0)_0px_0px_0px_1.3px,rgb(0,50,83)_0px_0px_0px_1px] after:box-border after:caret-transparent after:text-white after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[1px] after:leading-[18px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:rounded-md after:border-separate after:inset-px after:font-maven_pro hover:bg-sky-900 transition-colors duration-200">
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
