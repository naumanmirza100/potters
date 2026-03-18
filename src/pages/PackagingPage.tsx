import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const VIDEOS = [
  { src: "https://www.arraish.com/cdn/shop/videos/c/vp/bee2a985218d4bd09b25d0ede19d3441/bee2a985218d4bd09b25d0ede19d3441.HD-720p-1.6Mbps-40375830.mp4?v=0", poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/67.jpg", title: "Packaging Process 1" },
  { src: "https://www.arraish.com/cdn/shop/videos/c/vp/d362d8f4909745f08ad76661562b828e/d362d8f4909745f08ad76661562b828e.HD-1080p-7.2Mbps-40363618.mp4?v=0", poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/70.jpg", title: "Packing Your Order" },
  { src: "https://www.arraish.com/cdn/shop/videos/c/vp/c6593a13d9ab4ef4acb3f68a1affc207/c6593a13d9ab4ef4acb3f68a1affc207.HD-720p-1.6Mbps-40363636.mp4?v=0", poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/53.jpg", title: "Safe Delivery Commitment" },
  { src: "https://www.arraish.com/cdn/shop/videos/c/vp/48e83c7fcfb84639a269d18a6d6506aa/48e83c7fcfb84639a269d18a6d6506aa.HD-1080p-2.5Mbps-40363646.mp4?v=0", poster: "https://c.animaapp.com/mmu1yta2SFboEj/assets/72.jpg", title: "Unboxing Experience" },
];

export const PackagingPage = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="relative h-52 md:h-64 overflow-hidden bg-blue-950">
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">📦 Our Packaging</h1>
          <p className="text-white/80 mt-2 text-base">Safe delivery is our responsibility</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-[50px] py-10">
        <nav className="text-xs text-neutral-500 mb-8 flex items-center gap-1.5">
          <Link to="/" className="hover:text-blue-950 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-blue-950 font-medium">Our Packaging</span>
        </nav>
        <div className="bg-amber-50 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
          <p className="text-neutral-600 text-base leading-relaxed text-center max-w-2xl mx-auto">
            Every piece of Arraish blue pottery is carefully wrapped and packed to ensure it reaches you in perfect condition. Watch how we handle your order with the utmost care.
          </p>
        </div>
        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'stagger-children' : ''}`}>
          {VIDEOS.map((v, i) => (
            <div key={i} className="bg-amber-50 rounded-2xl overflow-hidden shadow-sm card-hover opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'forwards' }}>
              <video playsInline autoPlay loop muted preload="metadata" poster={v.poster} className="w-full aspect-video object-cover">
                <source src={v.src} type="video/mp4" />
                <img src={v.poster} alt={v.title} />
              </video>
              <div className="p-4">
                <h3 className="text-blue-950 font-semibold">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
