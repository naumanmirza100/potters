import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const VideoSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="videos" className="relative text-[15px] box-border caret-transparent leading-[27px] mt-10 md:text-base md:leading-[28.8px] md:mt-[55px]">
      <div className="text-[15px] bg-zinc-100 bg-cover box-border caret-transparent leading-[27px] bg-center mx-auto md:text-base md:leading-[28.8px]">
        <div ref={ref} className="text-[15px] box-border caret-transparent leading-[27px] max-w-[1440px] mx-auto px-[15px] md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
            <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
                <div className="relative text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
                  {/* Navigation arrows */}
                  <button
                    onClick={() => scrollSlider('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
                    aria-label="Scroll left"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollSlider('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
                    aria-label="Scroll right"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>

                  <div 
                    ref={sliderRef}
                    className="relative text-[15px] box-border caret-transparent leading-[27px] list-none z-[1] overflow-x-auto overflow-y-hidden mx-auto md:text-base md:leading-[28.8px] video-slider"
                  >
                    <div className={`relative text-[15px] caret-transparent flex h-full leading-[27px] w-max z-[1] md:text-base md:leading-[28.8px] gap-2.5 md:gap-[30px] ${isVisible ? 'stagger-children' : ''}`}>
                      <div
                        role="group"
                        aria-label="1 / 4"
                        className={`relative text-[15px] box-border caret-transparent shrink-0 h-full leading-[27px] min-h-[auto] min-w-[auto] w-[345px] md:text-base md:leading-[28.8px] md:w-[290px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: '0ms' }}
                      >
                        <div className="relative text-[15px] box-border caret-transparent leading-[27px] pb-[166%] md:text-base md:leading-[28.8px]">
                          <div className="absolute text-[15px] box-border caret-transparent leading-[27px] overflow-hidden rounded-lg inset-0 md:text-base md:leading-[28.8px] group">
                            <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px] h-full">
                              <video
                                playsInline
                                autoPlay
                                loop
                                muted
                                preload="metadata"
                                poster="https://c.animaapp.com/mmu1yta2SFboEj/assets/67.jpg"
                                className="absolute text-[15px] box-border caret-transparent h-full leading-[27px] object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px] transition-transform duration-500 group-hover:scale-105"
                              >
                                <source
                                  src="https://www.arraish.com/cdn/shop/videos/c/vp/bee2a985218d4bd09b25d0ede19d3441/bee2a985218d4bd09b25d0ede19d3441.HD-720p-1.6Mbps-40375830.mp4?v=0"
                                  type="video/mp4"
                                />
                                <img
                                  src="https://c.animaapp.com/mmu1yta2SFboEj/assets/67.jpg"
                                  alt=""
                                />
                              </video>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="group"
                        aria-label="2 / 4"
                        className={`relative text-[15px] box-border caret-transparent shrink-0 h-full leading-[27px] min-h-[auto] min-w-[auto] w-[345px] md:text-base md:leading-[28.8px] md:w-[290px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: '100ms' }}
                      >
                        <div className="relative text-[15px] box-border caret-transparent leading-[27px] pb-[166%] md:text-base md:leading-[28.8px]">
                          <div className="absolute text-[15px] box-border caret-transparent leading-[27px] overflow-hidden rounded-lg inset-0 md:text-base md:leading-[28.8px] group">
                            <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px] h-full">
                              <video
                                playsInline
                                autoPlay
                                loop
                                muted
                                preload="metadata"
                                poster="https://c.animaapp.com/mmu1yta2SFboEj/assets/70.jpg"
                                className="absolute text-[15px] box-border caret-transparent h-full leading-[27px] object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px] transition-transform duration-500 group-hover:scale-105"
                              >
                                <source
                                  src="https://www.arraish.com/cdn/shop/videos/c/vp/d362d8f4909745f08ad76661562b828e/d362d8f4909745f08ad76661562b828e.HD-1080p-7.2Mbps-40363618.mp4?v=0"
                                  type="video/mp4"
                                />
                                <img
                                  src="https://c.animaapp.com/mmu1yta2SFboEj/assets/70.jpg"
                                  alt=""
                                />
                              </video>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="group"
                        aria-label="3 / 4"
                        className={`relative text-[15px] box-border caret-transparent shrink-0 h-full leading-[27px] min-h-[auto] min-w-[auto] w-[345px] md:text-base md:leading-[28.8px] md:w-[290px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: '200ms' }}
                      >
                        <div className="relative text-[15px] box-border caret-transparent leading-[27px] pb-[166%] md:text-base md:leading-[28.8px]">
                          <div className="absolute text-[15px] box-border caret-transparent leading-[27px] overflow-hidden rounded-lg inset-0 md:text-base md:leading-[28.8px] group">
                            <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px] h-full">
                              <video
                                playsInline
                                autoPlay
                                loop
                                muted
                                preload="metadata"
                                poster="https://c.animaapp.com/mmu1yta2SFboEj/assets/53.jpg"
                                className="absolute text-[15px] box-border caret-transparent h-full leading-[27px] object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px] transition-transform duration-500 group-hover:scale-105"
                              >
                                <source
                                  src="https://www.arraish.com/cdn/shop/videos/c/vp/c6593a13d9ab4ef4acb3f68a1affc207/c6593a13d9ab4ef4acb3f68a1affc207.HD-720p-1.6Mbps-40363636.mp4?v=0"
                                  type="video/mp4"
                                />
                                <img
                                  src="https://c.animaapp.com/mmu1yta2SFboEj/assets/53.jpg"
                                  alt=""
                                />
                              </video>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="group"
                        aria-label="4 / 4"
                        className={`relative text-[15px] box-border caret-transparent shrink-0 h-full leading-[27px] min-h-[auto] min-w-[auto] w-[345px] md:text-base md:leading-[28.8px] md:w-[290px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: '300ms' }}
                      >
                        <div className="relative text-[15px] box-border caret-transparent leading-[27px] pb-[166%] md:text-base md:leading-[28.8px]">
                          <div className="absolute text-[15px] box-border caret-transparent leading-[27px] overflow-hidden rounded-lg inset-0 md:text-base md:leading-[28.8px] group">
                            <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px] h-full">
                              <video
                                playsInline
                                autoPlay
                                loop
                                muted
                                preload="metadata"
                                poster="https://c.animaapp.com/mmu1yta2SFboEj/assets/72.jpg"
                                className="absolute text-[15px] box-border caret-transparent h-full leading-[27px] object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px] transition-transform duration-500 group-hover:scale-105"
                              >
                                <source
                                  src="https://www.arraish.com/cdn/shop/videos/c/vp/48e83c7fcfb84639a269d18a6d6506aa/48e83c7fcfb84639a269d18a6d6506aa.HD-1080p-2.5Mbps-40363646.mp4?v=0"
                                  type="video/mp4"
                                />
                                <img
                                  src="https://c.animaapp.com/mmu1yta2SFboEj/assets/72.jpg"
                                  alt=""
                                />
                              </video>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-gray-200 text-[9px] box-border caret-transparent leading-[16.2px] right-2.5 bottom-2.5">
        powered by{" "}
        <b className="font-bold box-border caret-transparent">Tapita</b>
      </div>
    </section>
  );
};
