import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TABLEWARE_SUBCATEGORIES, DECOR_SUBCATEGORIES, DESIGN_FAMILY } from '@/data/categories';

export type NavItemProps = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  iconSrc?: string;
};

export const NavItem = (props: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const getHref = () => {
    if (props.href) {
      if (props.href.includes('/collections/new-arrival')) return '/collections/new-arrival';
      if (props.href.includes('/collections/sale')) return '/collections/sale';
      if (props.href.includes('/collections/slightly-broken')) return '/collections/slightly-broken';
      if (props.href.includes('/pages/packaging')) return '/pages/packaging';
      return props.href;
    }
    return '#';
  };

  const getDropdownItems = () => {
    if (props.label === 'Tableware') return TABLEWARE_SUBCATEGORIES.map((i) => ({ label: i.label, href: `/collections/${i.slug}`, count: i.count }));
    if (props.label === 'Decor') return DECOR_SUBCATEGORIES.map((i) => ({ label: i.label, href: `/collections/${i.slug}`, count: i.count }));
    if (props.label === 'Design Family') return DESIGN_FAMILY.map((i) => ({ label: i.label, href: `/collections/${i.slug}`, count: i.count, comingSoon: i.count === 0 }));
    return [];
  };

  const dropdownItems = getDropdownItems();

  return (
    <li className="text-[15px] box-border caret-transparent leading-[27px] min-h-0 min-w-0 md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]">
      {props.hasDropdown ? (
        <div
          className="text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px] relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            onClick={() => props.label === 'Tableware' ? navigate('/collections/plates-platters') : props.label === 'Decor' ? navigate('/collections/vases') : navigate('/collections/blue-felicity')}
            className="relative text-sm items-center box-border caret-transparent flex leading-[18.2px] underline-offset-[3px] pl-3 pr-[27px] py-3 transition-colors duration-200 hover:text-blue-950 group"
          >
            <span className="box-border caret-transparent block min-h-0 min-w-0 underline-offset-[3px] md:min-h-[auto] md:min-w-[auto] relative">
              {props.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <img
              src={props.iconSrc || "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-15.svg"}
              alt=""
              className={`absolute box-border caret-transparent h-1.5 top-[calc(50%_-_2px)] align-baseline right-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 z-50 bg-amber-50 border border-neutral-200 shadow-xl rounded-b-lg overflow-hidden w-64">
              <ul className="py-2">
                {dropdownItems.map((item: any) => (
                  <li key={item.label}>
                    <button
                      onClick={() => { navigate(item.href); setIsOpen(false); }}
                      className="flex items-center justify-between w-full px-5 py-2.5 text-sm text-neutral-700 hover:bg-blue-950/5 hover:text-blue-950 transition-colors group/item text-left"
                    >
                      <span className="font-medium flex items-center gap-1.5">
                        {item.label}
                        {item.comingSoon && (
                          <span className="text-[9px] font-semibold uppercase tracking-wide text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">Soon</span>
                        )}
                      </span>
                      {item.count != null && item.count > 0 && (
                        <span className="text-[11px] text-neutral-400 group-hover/item:text-blue-950/60 ml-2">{item.count}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate(getHref())}
          className={`text-sm items-center box-border caret-transparent flex leading-[18.2px] underline-offset-[3px] p-3 transition-colors duration-200 group ${props.label === 'SALE' ? 'text-red-600 font-semibold hover:text-red-700' : 'hover:text-blue-950'}`}
        >
          <span className="box-border caret-transparent block min-h-0 min-w-0 underline-offset-[3px] md:min-h-[auto] md:min-w-[auto] relative">
            {props.label}
            <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${props.label === 'SALE' ? 'bg-red-600' : 'bg-blue-950'}`}></span>
          </span>
          {props.label === 'SALE' && (
            <span className="ml-1.5 text-[9px] font-bold uppercase tracking-wide text-white bg-red-600 px-1.5 py-0.5 rounded-full leading-none">Hot</span>
          )}
        </button>
      )}
    </li>
  );
};
