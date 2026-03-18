import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SubItem = { label: string; href: string };
type NavItemData = { label: string; href: string; children: SubItem[] };

const MobileNavItem = ({ item, index, onNavClick }: { item: NavItemData; index: number; onNavClick: () => void }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children.length > 0;
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    navigate(href);
    onNavClick();
  };

  return (
    <li className="opacity-0 animate-slide-in-left" style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
      {hasChildren ? (
        <>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full flex items-center justify-between py-3 px-4 text-neutral-800 hover:bg-blue-950/5 rounded-lg transition-colors text-sm font-medium"
          >
            <span>{item.label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {expanded && (
            <ul className="ml-4 border-l-2 border-blue-950/10 pl-3 pb-1 space-y-0.5">
              {item.children.map((child) => (
                <li key={child.label}>
                  <button onClick={() => handleClick(child.href)} className="w-full text-left block py-2 px-3 text-neutral-600 hover:text-blue-950 hover:bg-blue-950/5 rounded-md transition-colors text-xs font-medium">
                    {child.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <button
          onClick={() => handleClick(item.href)}
          className={`w-full text-left block py-3 px-4 rounded-lg transition-colors text-sm font-medium ${item.label === 'SALE' ? 'text-red-600 font-semibold hover:bg-red-50' : 'text-neutral-800 hover:bg-blue-950/5'}`}
        >
          {item.label}
          {item.label === 'SALE' && (
            <span className="ml-2 text-[9px] font-bold uppercase tracking-wide text-white bg-red-600 px-1.5 py-0.5 rounded-full leading-none align-middle">Hot</span>
          )}
        </button>
      )}
    </li>
  );
};

export const MobileMenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems: NavItemData[] = [
    { label: "New Arrival", href: "/collections/new-arrival", children: [] },
    {
      label: "Tableware", href: "/collections/plates-platters",
      children: [
        { label: "Dinner Sets", href: "/collections/dinner-sets" },
        { label: "Tea Sets", href: "/collections/tea-sets-blue-pottery" },
        { label: "Serving Dishes", href: "/collections/serving-dishes" },
        { label: "Plates & Platters", href: "/collections/plates-platters" },
        { label: "Bowls", href: "/collections/bowls" },
        { label: "Blue Pottery", href: "/collections/blue-pottery" },
        { label: "Karahi Handies & Cover Pots", href: "/collections/ceramic-blue-pottery-karahies" },
        { label: "Pottery Jars", href: "/collections/pottery-jars" },
        { label: "Tea Mugs", href: "/collections/tea-mugs" },
        { label: "Tea Coasters", href: "/collections/tea-coasters" },
      ],
    },
    {
      label: "Decor", href: "/collections/vases",
      children: [
        { label: "Planters", href: "/collections/planters" },
        { label: "Vases", href: "/collections/vases" },
        { label: "Aromatic Warmers", href: "/collections/aromatic-warmers" },
        { label: "Table Decoration", href: "/collections/table-decoration" },
        { label: "Lamps", href: "/collections/lamps" },
      ],
    },
    {
      label: "Design Family", href: "/collections/blue-felicity",
      children: [
        { label: "Blue Felicity (48)", href: "/collections/blue-felicity" },
        { label: "Blue Pattern (12)", href: "/collections/blue-pattern" },
        { label: "Tranquility (28)", href: "/collections/tranquility" },
        { label: "Serina (45)", href: "/collections/serina" },
        { label: "Blue Flower (26)", href: "/collections/blue-flower" },
        { label: "Blue Celico (12)", href: "/collections/blue-celico" },
        { label: "Spring Pattern (2)", href: "/collections/spring-pattern" },
        { label: "Slightly Broken (Soon)", href: "/collections/slightly-broken" },
      ],
    },
    { label: "Our Packaging Video", href: "/pages/packaging", children: [] },
    { label: "SALE", href: "/collections/sale", children: [] },
    { label: "B-Stock", href: "/collections/slightly-broken", children: [] },
  ];

  return (
    <div className="text-[15px] box-border caret-transparent block justify-self-start leading-[27px] min-h-[auto] min-w-[auto] -ml-3 md:text-base md:hidden md:leading-[28.8px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        className="text-neutral-800 text-sm box-border caret-transparent h-11 leading-[25.2px] list-none min-h-[auto] min-w-[auto] w-11 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <span className="items-center box-border caret-transparent flex h-full justify-center">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <img src="https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-2.svg" alt="Menu" className="box-border caret-transparent h-5 w-5" />
          )}
        </span>
      </button>

      <div className={`fixed inset-0 bg-black/50 z-40 mobile-menu-overlay ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />

      <div className={`fixed top-0 left-0 h-full w-[280px] bg-amber-50 z-50 mobile-menu-drawer shadow-xl flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 shrink-0">
          <button onClick={() => { navigate('/'); setIsOpen(false); }}>
            <img src="https://c.animaapp.com/mmu1yta2SFboEj/assets/55.png" alt="Arraish" className="h-10" />
          </button>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <MobileNavItem key={item.label} item={item} index={index} onNavClick={() => setIsOpen(false)} />
            ))}
          </ul>
        </nav>
        <div className="shrink-0 p-4 border-t border-neutral-200 bg-amber-50">
          <div className="flex gap-4 justify-center">
            <a href="https://web.facebook.com/Arraish01" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-blue-950 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/arraish.official/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-blue-950 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCraDf0Yqe0J651bF8g4v7gQ" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-blue-950 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
