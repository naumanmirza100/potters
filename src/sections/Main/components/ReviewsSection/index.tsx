import { useState, useEffect, useRef } from 'react';
import { ReviewCard } from "@/sections/Main/components/ReviewsSection/ReviewCard";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reviews = [
  {
    userImageSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/ALV-UjVwpw1vpQicKiIQ2cvgazZzWcq6eMImWLonu6TRjdofrSQ-rZ4.jpg",
    userName: "Rayan Naeem",
    reviewDate: "Sep 17, 2025",
    reviewerProfileUrl: "https://www.google.com/maps/contrib/106818339404138710105/place/ChIJn_3dX4cEGTkRxI_i0meScek",
    reviewText: "Initially i was really skeptical about the product quality but received in the safest packing and cherry on the top seller is so humble he assure the quality and packing, I'm super satisfied..."
  },
  {
    userImageSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/ACg8ocJlTLSOzzQ6ADpPj0OYHgxaArmpm32-dUhbkzFzztjy83euFQ.png",
    userName: "manahil masood",
    reviewDate: "Jul 30, 2025",
    reviewerProfileUrl: "https://www.google.com/maps/contrib/115740197425302733204/place/ChIJn_3dX4cEGTkRxI_i0meScek",
    reviewText: "Ordered a tea set and it's so pretty! It was also packed very nicely. 10/10"
  },
  {
    userImageSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/ALV-UjW2R2V3BCVPUdleUF67DvuLNNKjvzuQMUAABj4no7pDZQwlMHoz.jpg",
    userName: "Maria Kundi",
    reviewDate: "Jun 21, 2025",
    reviewerProfileUrl: "https://www.google.com/maps/contrib/105890376843829590567/place/ChIJn_3dX4cEGTkRxI_i0meScek",
    reviewText: "Just received my order and I'm obsessed with the jars and the handi pot! 😍 They're even more beautiful in person than in the photos, seriously stunning!"
  },
  {
    userImageSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/ACg8ocKRt9Q0OVikvjPWJxaMLFpoICCse5q-jTT7bfSh3hVvOIXI0Q.png",
    userName: "Hina Salwa",
    reviewDate: "Apr 29, 2025",
    reviewerProfileUrl: "https://www.google.com/maps/contrib/102175606063207653924/place/ChIJn_3dX4cEGTkRxI_i0meScek",
    reviewText: "Excellent quailty...highly refer for crockery lovers....thankyou so much aaraish u guys did an excellent job ....keep it up"
  },
  {
    userImageSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/ALV-UjUCDcsGPycjc6HLAfWM-qiDllhd8pjZ-Em3j4wvBoxije4V33nb.png",
    userName: "Sana Ruth",
    reviewDate: "Jan 13, 2025",
    reviewerProfileUrl: "https://www.google.com/maps/contrib/113987601660444210637/place/ChIJn_3dX4cEGTkRxI_i0meScek",
    reviewText: "Much happy with their customer service. And received gud quality cups with lid. Thank you so much for your kind dealing."
  }
];

export const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll to current index
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 320;
      sliderRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
      <div className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
        <div ref={ref} className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
          <div className={`text-sm bg-white box-border caret-transparent leading-[22.4px] max-w-[375px] pt-[30px] pb-2.5 px-2.5 md:max-w-screen-xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="box-border caret-transparent flex justify-end p-2.5">
              <div className="items-center box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] mr-[41px] mb-2.5">
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJn_3dX4cEGTkRxI_i0meScek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold bg-blue-500 box-border caret-transparent block min-h-[auto] min-w-[auto] text-center px-3.5 py-1.5 rounded-[10px] btn-hover hover:bg-blue-600 transition-colors"
                >
                  Write a Review
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center gap-y-2.5 md:flex-row md:justify-normal">
                <div className="text-blue-950 bg-white box-border caret-transparent shrink-0 max-w-[400px] min-h-[auto] min-w-[auto] p-2.5 rounded-[10px]">
                  <div className="box-border caret-transparent flex justify-center">
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                      <div className="items-center box-border caret-transparent gap-x-[17px] flex min-h-[auto] min-w-[auto] gap-y-[17px]">
                        <div className="box-border caret-transparent h-[60px] min-h-[auto] min-w-[auto] w-[65px] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr">
                          <img
                            src="https://c.animaapp.com/mmu1yta2SFboEj/assets/AF1QipP7BPW0KUeJTsZm8LIJiGSUVJK4V43-py-_eny8=w800-h500-k-no.jpg"
                            alt="Thumbnail"
                            className="box-border caret-transparent inline h-full object-cover align-baseline w-full rounded-bl rounded-br rounded-tl rounded-tr"
                          />
                        </div>
                        <div className="box-border caret-transparent gap-x-[3px] flex flex-col leading-[15.4px] min-h-[auto] min-w-[auto] gap-y-[3px] w-[170px]">
                          <div className="font-semibold box-border caret-transparent min-h-[auto] min-w-[auto]">
                            Arraish Blue Pottery
                          </div>
                          <div className="box-border caret-transparent gap-x-0.5 flex min-h-[auto] min-w-[auto] gap-y-0.5">
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
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                            <a
                              href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJn_3dX4cEGTkRxI_i0meScek"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white box-border caret-transparent hover:underline transition-all"
                            >
                              <b className="font-bold box-border caret-transparent">
                                41 Google Reviews
                              </b>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full overflow-hidden"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="relative box-border caret-transparent h-full max-w-full overflow-hidden px-[25px] md:px-[30px]">
                    {/* Left Arrow */}
                    <button
                      onClick={handlePrev}
                      className="absolute text-blue-950 items-center box-border caret-transparent flex shrink-0 h-[30px] justify-center w-[30px] rounded-[50%] left-0 top-[45%] z-10 bg-white shadow-md hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                      aria-label="Previous review"
                    >
                      <img
                        src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-30.svg"
                        alt="Previous"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                    </button>
                    
                    <div 
                      ref={sliderRef}
                      className="box-border caret-transparent h-auto overflow-x-auto overflow-y-hidden video-slider py-4"
                    >
                      <div className="items-start box-border caret-transparent gap-x-5 flex gap-y-5">
                        {reviews.map((review, index) => (
                          <ReviewCard
                            key={index}
                            userImageSrc={review.userImageSrc}
                            userName={review.userName}
                            reviewDate={review.reviewDate}
                            reviewerProfileUrl={review.reviewerProfileUrl}
                            reviewText={review.reviewText}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Arrow */}
                    <button
                      onClick={handleNext}
                      className="absolute text-blue-950 items-center box-border caret-transparent flex shrink-0 h-[30px] justify-center w-[30px] rounded-[50%] right-0 top-[45%] z-10 bg-white shadow-md hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                      aria-label="Next review"
                    >
                      <img
                        src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-32.svg"
                        alt="Next"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                    </button>
                  </div>
                  
                  {/* Dots indicator */}
                  <div className="box-border caret-transparent mt-4">
                    <div className="items-center box-border caret-transparent gap-x-2.5 flex h-6 justify-center gap-y-2.5">
                      {reviews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-blue-950 w-3 h-3' 
                              : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to review ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent flex justify-end -mt-2.5 p-2.5">
              <div className="items-center box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] mr-[41px] mb-2.5">
                <a
                  href="https://search.google.com/local/reviews?placeid=ChIJn_3dX4cEGTkRxI_i0meScek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 items-center box-border caret-transparent gap-x-[3px] flex min-h-[auto] min-w-[auto] gap-y-[3px] hover:underline transition-all"
                >
                  <img
                    src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-33.svg"
                    alt="Google"
                    className="box-border caret-transparent h-6 align-baseline w-6"
                  />
                  <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
                    See all Reviews
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
