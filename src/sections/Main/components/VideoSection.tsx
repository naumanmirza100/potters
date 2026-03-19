import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const videos = [
  {
    src: "https://www.arraish.com/cdn/shop/videos/c/vp/bee2a985218d4bd09b25d0ede19d3441/bee2a985218d4bd09b25d0ede19d3441.HD-720p-1.6Mbps-40375830.mp4?v=0",
    poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/67.jpg",
  },
  {
    src: "https://www.arraish.com/cdn/shop/videos/c/vp/d362d8f4909745f08ad76661562b828e/d362d8f4909745f08ad76661562b828e.HD-1080p-7.2Mbps-40363618.mp4?v=0",
    poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/70.jpg",
  },
  {
    src: "https://www.arraish.com/cdn/shop/videos/c/vp/c6593a13d9ab4ef4acb3f68a1affc207/c6593a13d9ab4ef4acb3f68a1affc207.HD-720p-1.6Mbps-40363636.mp4?v=0",
    poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/53.jpg",
  },
  {
    src: "https://www.arraish.com/cdn/shop/videos/c/vp/48e83c7fcfb84639a269d18a6d6506aa/48e83c7fcfb84639a269d18a6d6506aa.HD-1080p-2.5Mbps-40363646.mp4?v=0",
    poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/72.jpg",
  },
];

export const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-12 md:py-16 px-4 md:px-[50px] max-w-[1200px] mx-auto">
      {/* Section heading */}
      <div className={`text-center mb-8 md:mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <p className="text-xs tracking-[3px] uppercase text-sky-700 mb-2 font-medium">Crafted with love</p>
        <h2 className="text-2xl md:text-[28px] text-sky-950 tracking-[0.5px] leading-snug">
          Watch Our Artisans at Work
        </h2>
      </div>

      {/* Video grid — staggered on desktop */}
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-start">
        {videos.map((v, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl shadow-md group transition-shadow duration-300 hover:shadow-xl
              ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
              ${i % 2 === 1 ? 'md:mt-8' : ''}
            `}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Portrait 9:16 ratio */}
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <video
                playsInline
                autoPlay
                loop
                muted
                preload="metadata"
                poster={v.poster}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={v.src} type="video/mp4" />
                <img src={v.poster} alt="Arraish ceramics" />
              </video>
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
