export type CategoryCardProps = {
  liClassName?: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName: string;
  title: string;
  href: string;
  description?: string;
  descriptionIconSrc?: string;
  titleIconSrc: string;
  index?: number;
};

export const CategoryCard = (props: CategoryCardProps) => {
  const getHref = () => {
    // Convert external URLs to internal anchors
    return '#categories';
  };

  return (
    <li
      className={`text-[15px] box-content caret-transparent grow shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[35%] snap-start w-[calc(100%_-_36px)] py-[5px] md:text-base md:box-border md:leading-[28.8px] md:max-w-[calc(16.66%_-_10px)] md:min-w-[auto] md:w-[calc(16.66%_-_10px)] md:py-0 ${props.liClassName ?? ""}`.trim()}
      style={{ animationDelay: `${(props.index || 0) * 100}ms` }}
    >
      <div className="relative text-[15px] box-content caret-transparent h-full leading-[27px] md:text-base md:box-border md:leading-[28.8px]">
        <div className="relative text-neutral-800/80 text-[15px] bg-fixed bg-amber-50 box-border caret-transparent flex flex-col h-full leading-[27px] text-left rounded-lg md:text-base md:leading-[28.8px] card-hover after:accent-auto after:shadow-[rgba(0,17,40,0)_0px_4px_5px_0px] after:box-border after:caret-transparent after:text-neutral-800/80 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[0.6px] after:leading-[27px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:z-[-1] after:rounded-lg after:border-separate after:left-0 after:top-0 after:font-maven_pro after:md:text-base after:md:leading-[28.8px] after:transition-shadow after:duration-300">
          <div className="relative text-[15px] items-stretch box-border caret-transparent flex leading-[27px] min-h-[auto] min-w-[auto] w-full md:text-base md:leading-[28.8px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-800/80 before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[0.6px] before:leading-[27px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0 before:pb-[100%] before:border-separate before:font-maven_pro before:md:text-base before:md:leading-[28.8px]">
            <div className="absolute text-[15px] box-border caret-transparent leading-[27px] w-full z-0 overflow-hidden rounded-t-lg inset-y-0 md:text-base md:leading-[28.8px] img-hover-zoom">
              <div className="absolute text-[15px] box-border caret-transparent leading-[27px] w-full overflow-hidden inset-y-0 md:text-base md:leading-[28.8px]">
                <img
                  src={props.imageSrc}
                  sizes="(min-width: 1200px) 366px, (min-width: 750px) calc((100vw - 10rem) / 2), calc(100vw - 3rem)"
                  alt={props.imageAlt}
                  className={`absolute text-[15px] box-border caret-transparent h-full leading-[27px] max-w-full object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px] ${props.imageClassName}`}
                />
              </div>
            </div>
            {props.description !== undefined && (
              <div className="relative text-[15px] box-border caret-transparent grid grow grid-rows-[minmax(0px,1fr)_max-content_minmax(0px,1fr)] leading-[27px] min-h-[auto] min-w-[auto] w-full p-2.5 md:text-base md:leading-[28.8px]">
                <div className="text-[15px] box-border caret-transparent hidden row-start-2 leading-[27px] px-2.5 py-[13px] md:text-base md:leading-[28.8px] md:py-[17px]">
                  <h3 className="text-neutral-800 text-[17.85px] box-border caret-transparent tracking-[0.63px] leading-[22.95px] md:text-[18.9px] md:leading-[24.3px]">
                    <a
                      href={getHref()}
                      className="text-[17.85px] box-border caret-transparent block leading-[22.95px] md:text-[18.9px] md:leading-[24.3px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-[17.85px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.63px] after:leading-[22.95px] after:list-outside after:list-none after:outline-offset-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:inset-0 after:font-maven_pro after:md:text-[18.9px] after:md:leading-[24.3px]"
                    >
                      {props.title}
                    </a>
                  </h3>
                  <p className="text-[15px] box-border caret-transparent leading-[27px] my-[15px] md:text-base md:leading-[28.8px] md:my-4">
                    {props.description}
                    <span className="text-[15px] box-border caret-transparent leading-[27px] text-nowrap overflow-hidden ml-2 md:text-base md:leading-[28.8px]">
                      <img
                        src={props.descriptionIconSrc}
                        alt="Icon"
                        className="text-[15px] box-border caret-transparent inline leading-[27px] text-nowrap align-baseline w-[15px] md:text-base md:leading-[28.8px]"
                      />
                    </span>
                  </p>
                </div>
              </div>
            )}
            {props.description === undefined && (
              <div className="relative text-[15px] box-border caret-transparent grid grow grid-rows-[minmax(0px,1fr)_max-content_minmax(0px,1fr)] leading-[27px] min-h-[auto] min-w-[auto] w-full p-2.5 md:text-base md:leading-[28.8px]">
                <div className="text-[15px] box-border caret-transparent hidden row-start-2 leading-[27px] px-2.5 py-[13px] md:text-base md:leading-[28.8px] md:py-[17px]">
                  <h3 className="text-neutral-800 text-[17.85px] box-border caret-transparent tracking-[0.63px] leading-[22.95px] md:text-[18.9px] md:leading-[24.3px]">
                    <a
                      href={getHref()}
                      className="text-[17.85px] box-border caret-transparent block leading-[22.95px] md:text-[18.9px] md:leading-[24.3px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-[17.85px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.63px] after:leading-[22.95px] after:list-outside after:list-none after:outline-offset-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:inset-0 after:font-maven_pro after:md:text-[18.9px] after:md:leading-[24.3px]"
                    >
                      {props.title}
                      <span className="text-[17.85px] box-border caret-transparent leading-[22.95px] text-nowrap overflow-hidden ml-2 md:text-[18.9px] md:leading-[24.3px]">
                        <img
                          src={props.titleIconSrc}
                          alt="Icon"
                          className="text-[17.85px] box-border caret-transparent inline leading-[22.95px] text-nowrap align-baseline w-[15.75px] md:text-[18.9px] md:leading-[24.3px]"
                        />
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div className="text-[15px] box-border caret-transparent grid grow grid-rows-[max-content_minmax(0px,1fr)_max-content_auto] leading-[27px] min-h-[auto] min-w-[auto] w-full p-2.5 md:text-base md:leading-[28.8px]">
            <div className="text-[15px] box-border caret-transparent row-start-2 leading-[27px] min-h-[auto] min-w-[auto] px-2.5 py-[13px] md:text-base md:leading-[28.8px] md:py-[17px]">
              <h3 className="text-neutral-800 text-[17.85px] box-border caret-transparent tracking-[0.63px] leading-[22.95px] md:text-[18.9px] md:leading-[24.3px]">
                <a
                  href={getHref()}
                  className="text-[17.85px] box-border caret-transparent block leading-[22.95px] md:text-[18.9px] md:leading-[24.3px] transition-colors duration-200 hover:text-blue-950 after:accent-auto after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-[17.85px] after:not-italic after:normal-nums after:font-normal after:tracking-[0.63px] after:leading-[22.95px] after:list-outside after:list-none after:outline-offset-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:inset-0 after:font-maven_pro after:md:text-[18.9px] after:md:leading-[24.3px]"
                >
                  {props.title}
                  <span className="text-[17.85px] box-border caret-transparent leading-[22.95px] text-nowrap overflow-hidden ml-2 md:text-[18.9px] md:leading-[24.3px] inline-block transition-transform duration-200 group-hover:translate-x-1">
                    <img
                      src={props.titleIconSrc}
                      alt="Icon"
                      className="text-[17.85px] box-border caret-transparent inline leading-[22.95px] text-nowrap align-baseline w-[15.75px] md:text-[18.9px] md:leading-[24.3px]"
                    />
                  </span>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
