import { useState } from 'react';

export type ProductCardProps = {
  imageSrc: string;
  imageAlt: string;
  productName: string;
  productHref: string;
  formId: string;
  productId: string;
  isSale: boolean;
  currentPrice: string;
  originalPrice?: string;
  index?: number;
};

export const ProductCard = (props: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }, 800);
  };

  return (
    <li 
      className="text-[15px] box-border caret-transparent grow shrink-0 leading-[27px] max-w-[calc(50%_-_3px)] min-h-[auto] min-w-[auto] w-[calc(50%_-_3px)] md:text-base md:leading-[28.8px] md:max-w-[calc(25%_-_9px)] md:w-[calc(25%_-_9px)] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${(props.index || 0) * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative text-[15px] box-border caret-transparent h-full leading-[27px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent flex flex-col h-full leading-[27px] text-left md:text-base md:leading-[28.8px] group">
          <div className="relative text-neutral-800/80 text-[15px] items-stretch bg-fixed bg-amber-50 box-border caret-transparent flex leading-[27px] min-h-[auto] min-w-[auto] w-full rounded-lg md:text-base md:leading-[28.8px] card-hover before:accent-auto before:box-border before:caret-transparent before:text-neutral-800/80 before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[0.6px] before:leading-[27px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0 before:pb-[100%] before:border-separate before:font-maven_pro before:md:text-base before:md:leading-[28.8px] after:accent-auto after:shadow-[rgba(0,17,40,0)_0px_4px_5px_0px] after:box-border after:caret-transparent after:text-neutral-800/80 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:z-[-1] after:rounded-lg after:border-separate after:left-0 after:top-0 after:font-maven_pro after:md:text-base after:md:leading-[28.8px] after:transition-shadow after:duration-300">
            <div className="absolute text-[15px] box-border caret-transparent leading-[27px] w-[calc(100%_-_24px)] z-0 overflow-hidden m-3 inset-y-0 md:text-base md:leading-[28.8px] img-hover-zoom">
              <div className="absolute text-[15px] box-border caret-transparent leading-[27px] w-full overflow-hidden inset-y-0 md:text-base md:leading-[28.8px]">
                <img
                  src={props.imageSrc}
                  sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                  alt={props.imageAlt}
                  className="absolute text-[15px] aspect-[auto_3024_/_3024] box-border caret-transparent h-full leading-[27px] max-w-full object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px]"
                />
              </div>
            </div>
            <div className="relative text-[15px] box-border caret-transparent grid grow grid-rows-[minmax(0px,1fr)_max-content_minmax(0px,1fr)] leading-[27px] min-h-[auto] min-w-[auto] w-full p-[22px] md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent hidden row-start-2 leading-[27px] px-2.5 py-[13px] md:text-base md:leading-[28.8px] md:py-[17px]">
                <h3 className="text-neutral-800 text-[17.85px] box-border caret-transparent tracking-[0.63px] leading-[22.95px] md:text-[18.9px] md:leading-[24.3px]">
                  <a
                    href="#"
                    className="text-[17.85px] box-border caret-transparent block leading-[22.95px] md:text-[18.9px] md:leading-[24.3px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-[17.85px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.63px] after:leading-[22.95px] after:list-outside after:list-none after:outline-offset-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:inset-0 after:font-maven_pro after:md:text-[18.9px] after:md:leading-[24.3px]"
                  >
                    {props.productName}
                  </a>
                </h3>
              </div>
              <div
                className={`text-[15px] self-end box-border caret-transparent row-start-3 justify-self-start leading-[27px] md:text-base md:leading-[28.8px] ${props.isSale ? "min-h-[auto] min-w-[auto]" : "hidden"}`}
              >
                {props.isSale && (
                  <span className="text-white text-xs bg-sky-950 box-border caret-transparent inline-block tracking-[1px] leading-3 text-center border pt-[5px] pb-1.5 px-[13px] rounded-[40px] border-solid border-white/10 animate-pulse-soft">
                    Sale
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="text-[15px] box-border caret-transparent grid grow grid-rows-[max-content_minmax(0px,1fr)_max-content_auto] leading-[27px] min-h-[auto] min-w-[auto] w-full md:text-base md:leading-[28.8px]">
            <div className="text-[15px] box-border caret-transparent row-start-2 leading-[27px] min-h-[auto] min-w-[auto] py-[13px] md:text-base md:leading-[28.8px] md:py-[17px]">
              <p className="text-white text-[12.6px] box-border caret-transparent tracking-[0.63px] leading-[16.2px] md:text-[13.65px] md:leading-[17.55px]">
                <a
                  href="#"
                  className="text-[12.6px] box-border caret-transparent block leading-[16.2px] md:text-[13.65px] md:leading-[17.55px] transition-colors duration-200 hover:text-white/80 after:accent-auto after:box-border after:caret-transparent after:text-white after:block after:text-[12.6px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.63px] after:leading-[16.2px] after:list-outside after:list-none after:outline-offset-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:inset-0 after:font-maven_pro after:md:text-[13.65px] after:md:leading-[17.55px]"
                >
                  {props.productName}
                </a>
              </p>
              <div className="text-[15px] box-border caret-transparent leading-[27px] w-full md:text-base md:leading-[28.8px]">
                <span className="text-white text-[13px] box-border caret-transparent tracking-[0.4px] leading-[18.2px] opacity-70"></span>
                <div className="text-white text-base box-border caret-transparent tracking-[1px] leading-6 mt-[7px]">
                  <div className="box-border caret-transparent inline-block align-top">
                    {props.isSale ? (
                      <>
                        <div className="box-border caret-transparent hidden">
                          <span className="text-white/80 text-[13px] box-border caret-transparent inline-block leading-[19.5px] line-through">
                            {props.currentPrice}
                          </span>
                        </div>
                        <div className="box-border caret-transparent inline flex-wrap">
                          <span className="box-border caret-transparent">
                            <s className="text-white/80 text-[13px] box-border caret-transparent inline-block leading-[19.5px] line-through mr-2.5">
                              {props.originalPrice}
                            </s>
                          </span>
                          <span className="box-border caret-transparent inline-block text-green-400">
                            {props.currentPrice}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="box-border caret-transparent">
                          <span className="box-border caret-transparent inline-block">
                            {props.currentPrice}
                          </span>
                        </div>
                        <div className="box-border caret-transparent hidden">
                          <span className="box-border caret-transparent">
                            <s className="box-border caret-transparent inline-block line-through mr-2.5"></s>
                          </span>
                          <span className="box-border caret-transparent inline-block">
                            {props.currentPrice}
                          </span>
                        </div>
                      </>
                    )}
                    <small className="text-white/70 text-[11px] box-border caret-transparent hidden tracking-[0.7px] leading-[13.2px] uppercase mt-0.5">
                      <span className="box-border caret-transparent inline-block">
                        <span className="box-border caret-transparent"></span>
                        <span className="box-border caret-transparent">/</span>
                        <span className="box-border caret-transparent"></span>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[15px] box-border caret-transparent row-start-4 leading-[27px] min-h-[auto] min-w-[auto] z-[1] mb-2.5 md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
                <form onSubmit={handleAddToCart} className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
                  <input type="hidden" name="form_type" value="product" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="id" value={props.formId} />
                  <button
                    type="submit"
                    name="add"
                    disabled={isAdding}
                    className={`relative appearance-none text-white text-[15px] items-center bg-blue-950 caret-transparent flex justify-center tracking-[1px] leading-[18px] min-h-[47px] min-w-full text-center w-full p-2 rounded-[7px] btn-hover before:accent-auto before:shadow-[rgba(255,255,255,0)_0px_4px_5px_0px] before:box-border before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[1px] before:leading-[18px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[7px] before:border-separate before:inset-0 before:font-maven_pro after:accent-auto after:shadow-[rgb(255,255,255)_0px_0px_0px_1.3px,rgb(0,35,102)_0px_0px_0px_1px] after:box-border after:caret-transparent after:text-white after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[1px] after:leading-[18px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:rounded-md after:border-separate after:inset-px after:font-maven_pro transition-all duration-200 ${isAdding ? 'opacity-70 cursor-wait' : ''} ${isAdded ? 'bg-green-600' : 'hover:bg-blue-900'}`}
                  >
                    <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
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
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          Added!
                        </span>
                      ) : (
                        'Add to cart'
                      )}
                    </span>
                  </button>
                  <input type="hidden" name="product-id" value={props.productId} />
                  <input type="hidden" name="section-id" value="template--15300359028818__featured_collection1" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
