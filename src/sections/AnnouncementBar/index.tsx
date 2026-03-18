export const AnnouncementBar = () => {
  return (
    <div className="text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] z-[4] md:text-base md:leading-[28.8px]">
      <div className="text-white/80 text-[15px] bg-fixed bg-blue-950 box-border caret-transparent h-full leading-[27px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent grid [grid-template-areas:'announcements'] grid-cols-[1fr] leading-[27px] max-w-[1200px] mx-auto px-[30px] md:text-base md:leading-[28.8px] md:px-[50px]">
          <div
            role="region"
            aria-label="Announcement"
            className="text-white text-[15px] content-center box-border caret-transparent flex flex-wrap col-end-[announcements] col-start-[announcements] row-end-[announcements] row-start-[announcements] h-full justify-center leading-[27px] min-h-[auto] min-w-[auto] w-full md:text-base md:leading-[28.8px]"
          >
            <a
              href="#new-arrivals"
              className="text-sm items-center box-border caret-transparent flex h-full justify-center leading-[25.2px] min-h-[auto] min-w-[auto] underline-offset-[3px] w-full group"
            >
              <p className="text-[12.6px] box-border caret-transparent tracking-[1px] leading-[16.2px] min-h-[38px] min-w-[auto] text-center underline-offset-[3px] py-2.5 md:text-[13.65px] md:leading-[17.55px] transition-transform duration-300 group-hover:scale-105">
                <span className="text-[12.6px] box-border caret-transparent leading-[16.2px] underline-offset-[3px] md:text-[13.65px] md:leading-[17.55px]">
                  FREE SHIPPING ACROSS PAKISTAN | SAFE DELIVERY🚚 IS OUR
                  RESPONSIBILITY | Hassle free returns &amp; exchange policy
                </span>
                <img
                  src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-1.svg"
                  alt=""
                  className="text-[12.6px] box-border caret-transparent inline-block leading-[16.2px] pointer-events-none w-[15px] ml-2 mb-0.5 md:text-[13.65px] md:leading-[17.55px] transition-transform duration-300 group-hover:translate-x-1"
                />
              </p>
            </a>
          </div>
          <div className="text-[15px] self-center box-border caret-transparent flex col-end-[language-currency] col-start-[language-currency] row-end-[language-currency] row-start-[language-currency] justify-end leading-[27px] min-h-[auto] min-w-[auto] md:text-base md:leading-[28.8px]"></div>
        </div>
      </div>
    </div>
  );
};
