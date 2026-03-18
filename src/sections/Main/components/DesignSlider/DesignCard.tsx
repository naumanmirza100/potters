import { useNavigate } from 'react-router-dom';

export type DesignCardProps = {
  imageSrc: string;
  imageAlt: string;
  imageClassName: string;
  title: string;
  href: string;
  primaryIconSrc: string;
  showPrimaryBadgeIcon: boolean;
  comingSoon?: boolean;
  index?: number;
};

export const DesignCard = (props: DesignCardProps) => {
  const navigate = useNavigate();
  return (
    <li
      className="text-[15px] box-border caret-transparent grow shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] w-full md:text-base md:leading-[28.8px] md:max-w-[calc(16.66%_-_10px)] md:w-[calc(16.66%_-_10px)] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${(props.index || 0) * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className={`relative text-[15px] box-border caret-transparent h-full leading-[27px] md:text-base md:leading-[28.8px] ${props.comingSoon ? 'opacity-60' : 'cursor-pointer'}`}
        onClick={() => !props.comingSoon && navigate(props.href)}
      >
        <div className="relative text-neutral-800/80 text-[15px] bg-fixed bg-amber-50 box-border caret-transparent flex flex-col h-full leading-[27px] text-left rounded-lg md:text-base md:leading-[28.8px] card-hover after:absolute after:w-full after:h-full after:z-[-1] after:rounded-lg after:left-0 after:top-0 after:shadow-[rgba(0,17,40,0)_0px_4px_5px_0px] after:transition-shadow after:duration-300">
          <div className="relative text-[15px] items-stretch box-border caret-transparent flex leading-[27px] min-h-[auto] min-w-[auto] w-full md:text-base md:leading-[28.8px] before:block before:h-0 before:w-0 before:pb-[100%]">
            <div className="absolute text-[15px] box-border caret-transparent leading-[27px] w-full z-0 overflow-hidden rounded-t-lg inset-y-0 md:text-base md:leading-[28.8px] img-hover-zoom">
              <div className="absolute text-[15px] box-border caret-transparent leading-[27px] w-full overflow-hidden inset-y-0 md:text-base md:leading-[28.8px]">
                <img
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className={`absolute text-[15px] box-border caret-transparent h-full leading-[27px] max-w-full object-cover align-baseline w-full left-0 top-0 md:text-base md:leading-[28.8px] ${props.imageClassName}`}
                />
              </div>
            </div>
            {props.comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Coming Soon</span>
              </div>
            )}
          </div>
          <div className="text-[15px] box-border caret-transparent grid grow grid-rows-[max-content_minmax(0px,1fr)_max-content_auto] leading-[27px] min-h-[auto] min-w-[auto] w-full p-2.5 md:text-base md:leading-[28.8px]">
            <div className="text-[15px] box-border caret-transparent row-start-2 leading-[27px] min-h-[auto] min-w-[auto] px-2.5 py-[13px] md:text-base md:leading-[28.8px] md:py-[17px]">
              <h3 className="text-neutral-800 text-[17.85px] box-border caret-transparent tracking-[0.63px] leading-[22.95px] md:text-[18.9px] md:leading-[24.3px]">
                <span className="text-[17.85px] box-border caret-transparent block leading-[22.95px] md:text-[18.9px] md:leading-[24.3px] transition-colors duration-200 hover:text-blue-950">
                  {props.title}
                  {props.showPrimaryBadgeIcon && props.primaryIconSrc && (
                    <span className="text-[17.85px] box-border caret-transparent leading-[22.95px] overflow-hidden ml-2 md:text-[18.9px] md:leading-[24.3px] inline-block transition-transform duration-200">
                      <img src={props.primaryIconSrc} alt="" className="text-[17.85px] box-border caret-transparent inline leading-[22.95px] align-baseline w-[15.75px] md:text-[18.9px] md:leading-[24.3px]" />
                    </span>
                  )}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
