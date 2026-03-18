export type ReviewCardProps = {
  userImageSrc: string;
  userName: string;
  reviewDate: string;
  reviewerProfileUrl: string;
  reviewText: React.ReactNode;
  containerClassName?: string;
};

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div
      className={`box-border caret-transparent basis-[305px] shrink-0 min-h-[auto] md:basis-[292.667px] transition-transform duration-300 hover:scale-[1.02] ${props.containerClassName ?? ""}`}
    >
      <div className="text-blue-950 bg-yellow-50 box-border caret-transparent gap-x-2.5 flex flex-col min-h-[170px] gap-y-2.5 w-full pt-2.5 pb-[15px] px-[15px] rounded-[20px] shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-between min-h-[auto] min-w-[auto] gap-y-5 md:flex-nowrap">
          <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-start min-h-[auto] min-w-[auto] gap-y-2.5 text-left w-full">
            <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
              <div className="box-border caret-transparent shrink-0 h-8 w-8 overflow-hidden rounded-[50%] ring-2 ring-blue-950/20">
                <img
                  src={props.userImageSrc}
                  alt="User Image"
                  className="box-border caret-transparent inline h-full object-cover align-baseline w-full"
                />
              </div>
            </div>
            <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto]">
              <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                <div className="font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden">
                  {props.userName}
                </div>
              </div>
              <div className="text-[13px] box-border caret-transparent leading-[20.8px] min-h-[auto] min-w-[auto] opacity-70">
                {props.reviewDate}
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <a
              href={props.reviewerProfileUrl}
              aria-label="review the reviwers"
              className="text-blue-700 box-border caret-transparent transition-transform duration-200 hover:scale-110 inline-block"
            >
              <img
                src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-31.svg"
                alt="Google"
                className="box-border caret-transparent inline h-5 align-baseline w-5"
              />
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent justify-center min-h-[auto] min-w-[auto] text-left">
          <div className="items-center box-border caret-transparent gap-x-[3px] flex mt-[-5px] gap-y-[3px]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-29.svg"
                  alt="Star"
                  className="box-border caret-transparent h-5 align-baseline w-5"
                />
              </span>
            ))}
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2 text-left">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-ellipsis overflow-hidden flow-root text-sm leading-relaxed">
            {props.reviewText}
          </div>
        </div>
      </div>
    </div>
  );
};
