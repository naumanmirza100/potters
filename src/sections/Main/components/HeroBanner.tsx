import { useEffect, useState } from 'react';

export const HeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="relative text-[15px] box-border caret-transparent flex flex-wrap isolate leading-[27px] min-h-0 md:text-base md:flex-nowrap md:leading-[28.8px] md:min-h-[560px] after:accent-auto after:bg-black after:box-border after:caret-transparent after:text-zinc-800/80 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-disc after:opacity-40 after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:z-[1] after:border-separate after:top-0 after:font-maven_pro after:md:text-base after:md:leading-[28.8px]">
        <div className="absolute text-[15px] bg-zinc-800/10 box-border caret-transparent h-full leading-[27px] w-full overflow-hidden left-0 top-0 md:text-base md:leading-[28.8px]">
          <img
            src="https://arraish.com/cdn/shop/files/Arraish_Product_Shots_4-min_94117d2c-7dfc-47a5-85a3-8a51b17cf479.jpg?v=1706691543&width=1500"
            alt=""
            sizes="100vw"
            className={`absolute text-[15px] aspect-[auto_5472_/_3348] box-border caret-transparent h-full leading-[27px] max-w-full object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px] transition-transform duration-[1.5s] ease-out ${isLoaded ? 'scale-100' : 'scale-105'}`}
          />
        </div>
        <div className="relative text-[15px] items-center box-border caret-transparent flex justify-center leading-[27px] max-w-[1200px] min-h-[340px] min-w-[auto] w-full z-[2] mx-auto p-0 md:text-base md:justify-start md:leading-[28.8px] md:min-h-[auto] md:p-[50px]">
          <div className="relative text-white/80 text-[15px] items-center box-border caret-transparent h-fit leading-[27px] max-w-none min-h-[auto] min-w-[auto] break-words text-center w-full z-[1] px-[15px] py-10 md:text-base md:leading-[28.8px] md:max-w-[680px] md:min-w-[450px] md:text-left md:w-auto md:px-0 after:accent-auto after:shadow-[rgba(255,255,255,0)_0px_4px_5px_0px] after:box-border after:caret-transparent after:text-white/80 after:hidden after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[-1] after:rounded-lg after:border-separate after:inset-0 after:font-maven_pro after:md:text-base after:md:leading-[28.8px] after:md:text-left">
            <h2 className={`text-white text-[21px] box-border caret-transparent tracking-[0.63px] leading-[27px] break-words text-center md:text-[25.2px] md:leading-[32.4px] md:text-left ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <strong className="text-[21px] font-bold box-border caret-transparent leading-[27px] break-words text-center md:text-[25.2px] md:leading-[32.4px] md:text-left">
                Blue Pottery of Multan: A Timeless Heritage for Modern Homes
              </strong>
            </h2>
            <div className={`text-[15px] box-border caret-transparent leading-[27px] break-words text-center mt-2.5 md:text-base md:leading-[28.8px] md:text-left ${isLoaded ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'} after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white/80 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-maven_pro after:md:text-base after:md:leading-[28.8px] after:md:text-left`}>
              <p className="text-[15px] box-border caret-transparent leading-[27px] break-words text-center md:text-base md:leading-[28.8px] md:text-left">
                Made for Everyday Use, Crafted with Care: Experience Authentic
                Blue Pottery Crockery
              </p>
            </div>
            <div className={`text-[15px] box-border caret-transparent gap-x-2.5 inline-flex flex-wrap leading-[27px] max-w-[450px] break-words gap-y-2.5 text-center mt-5 md:text-base md:leading-[28.8px] md:text-left ${isLoaded ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              <a
                href="#new-arrivals"
                className="relative text-white text-[15px] items-center bg-blue-950 box-border caret-transparent flex justify-center tracking-[1px] leading-[18px] min-h-[47px] min-w-[122px] break-words text-center px-[30px] rounded-[7px] btn-hover md:text-left before:accent-auto before:shadow-[rgba(255,255,255,0)_0px_4px_5px_0px] before:box-border before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[1px] before:leading-[18px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[7px] before:border-separate before:inset-0 before:font-maven_pro before:md:text-left after:accent-auto after:shadow-[rgba(255,255,255,0)_0px_0px_0px_1.3px,rgb(0,35,102)_0px_0px_0px_1px] after:box-border after:caret-transparent after:text-white after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[1px] after:leading-[18px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:rounded-md after:border-separate after:inset-px after:font-maven_pro after:md:text-left hover:bg-blue-900 transition-colors duration-200"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
