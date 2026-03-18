import { DesignCard } from "@/sections/Main/components/DesignSlider/DesignCard";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { DESIGN_FAMILY } from '@/data/categories';

const IMAGE_CLASS_MAP: Record<string, string> = {
  "Tranquility": "aspect-[auto_1080_/_1080]",
};

export const DesignSlider = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="designs" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="text-white/80 text-[15px] bg-fixed bg-blue-950 box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
        <div ref={ref} className="relative text-[15px] box-border caret-transparent leading-[27px] max-w-[1200px] z-0 mx-auto pt-9 pb-[45px] px-0 md:text-base md:leading-[28.8px] md:pt-12 md:pb-[60px] md:px-[50px]">
          <div className={`text-[15px] items-end box-border caret-transparent gap-x-2.5 flex flex-wrap justify-between leading-[27px] gap-y-2.5 mb-[30px] px-[15px] md:text-base md:items-center md:leading-[28.8px] md:px-0 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-white text-[21px] box-border caret-transparent tracking-[0.63px] leading-[27px] min-h-[auto] min-w-[auto] md:text-[25.2px] md:leading-[32.4px]">
              Shop by designs
            </h2>
          </div>
          <div className="relative text-[15px] box-border caret-transparent block leading-[27px] md:text-base md:leading-[28.8px]">
            <ul
              role="list"
              className={`text-[15px] box-border caret-transparent gap-x-1.5 flex flex-wrap leading-[27px] list-none gap-y-1.5 px-[15px] md:text-base md:gap-x-3 md:leading-[28.8px] md:gap-y-3 md:px-0 ${isVisible ? 'stagger-children' : ''}`}
            >
              {DESIGN_FAMILY.map((design, i) => (
                <DesignCard
                  key={design.slug}
                  imageSrc={design.imageSrc}
                  imageAlt={design.label}
                  imageClassName={IMAGE_CLASS_MAP[design.label] ?? "aspect-[auto_3024_/_3024]"}
                  title={design.label}
                  href={`/collections/${design.slug}`}
                  primaryIconSrc={design.primaryIconSrc}
                  showPrimaryBadgeIcon={design.showBadge}
                  comingSoon={design.count === 0}
                  index={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
