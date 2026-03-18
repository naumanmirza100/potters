import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const CustomerMemories = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const images = [
    "https://c.animaapp.com/mmu1yta2SFboEj/assets/32.webp",
    "https://c.animaapp.com/mmu1yta2SFboEj/assets/28.webp",
    "https://c.animaapp.com/mmu1yta2SFboEj/assets/22.jpg",
    "https://c.animaapp.com/mmu1yta2SFboEj/assets/33.webp",
    "https://c.animaapp.com/mmu1yta2SFboEj/assets/26.jpg",
    "https://c.animaapp.com/mmu1yta2SFboEj/assets/31.webp",
  ];

  return (
    <div id="memories" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="text-[15px] bg-blue-950 box-border caret-transparent leading-[27px] overflow-hidden md:text-base md:leading-[28.8px]">
        <div ref={ref} className="text-[15px] box-border caret-transparent leading-[27px] max-w-[1200px] mx-auto px-[15px] py-[27px] md:text-base md:leading-[28.8px] md:px-[50px] md:py-9">
          <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
            <div className={`text-[15px] box-border caret-transparent leading-[27px] text-center md:text-base md:leading-[28.8px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-white text-[28px] box-border caret-transparent tracking-[0.63px] leading-[36.4px] md:text-[40px] md:leading-[52px]">
                Customer Memories🤍
              </h2>
            </div>
            <div className="text-[15px] box-border caret-transparent leading-[27px] text-center mt-4 md:text-base md:leading-[28.8px]"></div>
          </div>
          <div className={`text-[15px] box-border caret-transparent gap-x-2.5 flex flex-col justify-between leading-[27px] gap-y-2.5 mt-6 md:text-base md:flex-row md:leading-[28.8px] md:mt-8 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <div className="text-[15px] box-border caret-transparent basis-auto leading-[27px] min-h-[auto] min-w-[auto] md:text-base md:basis-[calc(40%_-_5px)] md:leading-[28.8px]">
              <div className="relative text-[15px] box-border caret-transparent h-full leading-[27px] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr md:text-base md:leading-[28.8px] group after:md:accent-auto after:md:bg-black/50 after:md:box-border after:md:caret-transparent after:md:text-zinc-800/80 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[0.6px] after:md:leading-[28.8px] after:md:list-outside after:md:list-disc after:md:opacity-0 after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-separate after:md:left-0 after:md:top-0 after:md:font-maven_pro after:md:transition-opacity after:md:duration-300 hover:after:md:opacity-100">
                <img
                  src="https://c.animaapp.com/mmu1yta2SFboEj/assets/30.webp"
                  alt=""
                  className="text-[15px] box-border caret-transparent h-full leading-[27px] object-cover align-baseline w-full md:text-base md:leading-[28.8px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-[15px] box-border caret-transparent gap-x-2.5 grid grid-cols-[repeat(2,1fr)] leading-[27px] min-h-[auto] min-w-[auto] gap-y-2.5 w-full md:text-base md:grid-cols-[repeat(3,1fr)] md:leading-[28.8px] md:w-3/5">
              {images.map((src, index) => (
                <div 
                  key={index}
                  className="text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] md:text-base md:leading-[28.8px] opacity-0 animate-scale-in"
                  style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="relative text-[15px] box-border caret-transparent h-full leading-[27px] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr md:text-base md:leading-[28.8px] group after:md:accent-auto after:md:bg-black/50 after:md:box-border after:md:caret-transparent after:md:text-zinc-800/80 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[0.6px] after:md:leading-[28.8px] after:md:list-outside after:md:list-disc after:md:opacity-0 after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-separate after:md:left-0 after:md:top-0 after:md:font-maven_pro after:md:transition-opacity after:md:duration-300 hover:after:md:opacity-100">
                    <img
                      src={src}
                      alt=""
                      className="text-[15px] box-border caret-transparent h-full leading-[27px] object-cover align-baseline w-full md:text-base md:leading-[28.8px] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
