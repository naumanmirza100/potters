import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const AboutPage = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div className="bg-zinc-100 min-h-screen">
      {/* Hero */}
      <div className="relative h-60 md:h-80 overflow-hidden">
        <img src="https://c.animaapp.com/mmu1yta2SFboEj/assets/73.jpg" alt="About Arraish" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">About Arraish</h1>
          <p className="text-white/80 mt-2 text-base max-w-lg">Pakistan's premier destination for handcrafted Multani blue pottery</p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 md:px-[50px] py-12">
        <nav className="text-xs text-neutral-500 mb-8 flex items-center gap-1.5">
          <Link to="/" className="hover:text-blue-950 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-blue-950 font-medium">About Us</span>
        </nav>

        <div ref={ref} className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-blue-950 text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-neutral-600 leading-relaxed">
              Arraish was founded with a single vision: to bring the timeless art of Multani blue pottery into modern homes across Pakistan and beyond. Rooted in the rich cultural heritage of South Punjab, our blue pottery is handcrafted by skilled artisans who have inherited generations of expertise.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-blue-950 text-2xl font-bold mb-4">Our Craft</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Multani Blue Pottery is a centuries-old art form that blends tradition, culture, and exceptional craftsmanship. Renowned for its striking blue glaze and intricate designs, each piece tells a story of artisanal mastery.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              From exquisite tea sets to elegant crockery and versatile kitchenware, every Arraish piece is made for everyday use — crafted with care to bring timeless beauty to your everyday moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { stat: "200+", label: "Unique Designs" },
              { stat: "10,000+", label: "Happy Customers" },
              { stat: "100%", label: "Handcrafted" },
            ].map((s) => (
              <div key={s.stat} className="bg-blue-950 rounded-2xl p-6 text-center">
                <div className="text-white text-3xl font-bold">{s.stat}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-blue-950 text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <p className="text-neutral-600"><strong>WhatsApp:</strong> <a href="tel:03215575727" className="text-blue-950 hover:underline">0321 5575727</a></p>
              <p className="text-neutral-600"><strong>Email:</strong> <a href="mailto:contact@arraish.com" className="text-blue-950 hover:underline">contact@arraish.com</a></p>
              <p className="text-neutral-600"><strong>Website:</strong> <a href="https://www.arraish.com" target="_blank" rel="noopener noreferrer" className="text-blue-950 hover:underline">www.arraish.com</a></p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="inline-block bg-blue-950 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors btn-hover">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};
