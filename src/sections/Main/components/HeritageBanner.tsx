import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const HeritageBanner = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="heritage" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="relative text-[15px] box-border caret-transparent flex flex-wrap isolate leading-[27px] min-h-0 md:text-base md:flex-nowrap md:leading-[28.8px] md:min-h-[560px] after:accent-auto after:bg-black after:box-border after:caret-transparent after:text-zinc-800/80 after:hidden after:text-[15px] after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-disc after:opacity-70 after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:z-[1] after:border-separate after:top-0 after:font-maven_pro after:md:block after:md:text-base after:md:leading-[28.8px]">
        <div className="relative text-[15px] bg-zinc-800/10 box-border caret-transparent h-[340px] leading-[27px] min-h-[auto] min-w-[auto] w-full overflow-hidden left-0 top-0 md:absolute md:text-base md:h-full md:leading-[28.8px] md:min-h-0 md:min-w-0">
          <img
            src="https://c.animaapp.com/mmu1yta2SFboEj/assets/73.jpg"
            alt=""
            sizes="100vw"
            className="absolute text-[15px] aspect-[auto_1280_/_1280] box-border caret-transparent h-full leading-[27px] max-w-full object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px]"
          />
        </div>
        <div ref={ref} className="relative text-[15px] items-center box-border caret-transparent flex justify-center leading-[27px] max-w-[1200px] min-h-[auto] min-w-[auto] order-2 w-full z-[2] mx-auto p-0 md:text-base md:leading-[28.8px] md:order-none md:p-[50px]">
          <div className={`relative text-neutral-800/80 text-[15px] items-center bg-fixed bg-amber-50 box-border caret-transparent h-fit leading-[27px] max-w-none min-h-[auto] min-w-[auto] break-words text-center w-full z-[1] px-[35px] py-10 rounded-none md:text-base md:leading-[28.8px] md:max-w-[710px] md:min-w-[450px] md:w-auto md:rounded-lg after:accent-auto after:shadow-[rgba(0,17,40,0)_0px_4px_5px_0px] after:box-border after:caret-transparent after:text-neutral-800/80 after:hidden after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[-1] after:rounded-lg after:border-separate after:inset-0 after:font-maven_pro after:md:block after:md:text-base after:md:leading-[28.8px] ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className={`text-neutral-800 text-[31.5px] box-border caret-transparent tracking-[0.63px] leading-[40.5px] break-words md:text-[42px] md:leading-[54px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              The Rich Heritage of Blue Pottery
            </h2>
            <div className={`text-[15px] box-border caret-transparent leading-[27px] break-words mt-2.5 md:text-base md:leading-[28.8px] ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'} after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-800/80 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-maven_pro after:md:text-base after:md:leading-[28.8px]`}>
              <p className="text-[15px] box-border caret-transparent leading-[27px] break-words md:text-base md:leading-[28.8px]">
                Multani Blue Pottery is a centuries-old art form that blends
                tradition, culture, and exceptional craftsmanship. Renowned for
                its striking blue glaze and intricate designs, this blue pottery
                Multan embodies the rich heritage of South Punjab, Pakistan.
                From exquisite tea sets to elegant crockery and versatile
                kitchenware, each pottery piece tells a story of artisanal
                mastery, bringing timeless beauty to your everyday moments.
                Embrace the craftsmanship of Multan's blue pottery and
                incorporate these stunning pieces into your modern home,
                celebrating tradition with every use.
              </p>
            </div>
            <div className={`text-[15px] box-border caret-transparent gap-x-2.5 inline-flex flex-wrap leading-[27px] max-w-[450px] break-words gap-y-2.5 mt-5 md:text-base md:leading-[28.8px] ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              <a
                href="#heritage"
                className="relative text-white text-[15px] items-center bg-blue-950 box-border caret-transparent flex justify-center tracking-[1px] leading-[18px] min-h-[47px] min-w-[122px] break-words px-[30px] rounded-[7px] btn-hover before:accent-auto before:shadow-[rgba(0,17,40,0)_0px_4px_5px_0px] before:box-border before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[1px] before:leading-[18px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[7px] before:border-separate before:inset-0 before:font-maven_pro after:accent-auto after:shadow-[rgba(255,255,255,0)_0px_0px_0px_1.3px,rgb(0,35,102)_0px_0px_0px_1px] after:box-border after:caret-transparent after:text-white after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[1px] after:leading-[18px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:rounded-md after:border-separate after:inset-px after:font-maven_pro hover:bg-blue-900 transition-colors duration-200"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
