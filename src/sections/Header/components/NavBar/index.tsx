import { NavItem } from "@/sections/Header/components/NavBar/NavItem";

export const NavBar = () => {
  return (
    <nav className="text-[15px] box-border caret-transparent hidden col-end-[navigation] col-start-[navigation] row-end-[navigation] row-start-[navigation] leading-[27px] min-h-0 min-w-0 -ml-3 md:text-base md:block md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto] md:ml-0">
      <ul
        role="list"
        className="text-[15px] box-border caret-transparent inline-flex flex-wrap leading-[27px] list-none pl-0 md:text-base md:leading-[28.8px]"
      >
        <NavItem
          label="New Arrival"
          href="/collections/new-arrival"
          hasDropdown={false}
        />
        <NavItem label="Tableware" hasDropdown={true} />
        <NavItem label="Decor" hasDropdown={true} />
        <NavItem label="Design Family" hasDropdown={true} />
        <NavItem
          label="Our Packaging Video"
          href="/pages/packaging"
          hasDropdown={false}
        />
        <NavItem label="SALE" href="/collections/sale" />
        <NavItem
          label="B-Stock "
          href="/collections/slightly-broken"
          hasDropdown={false}
        />
      </ul>
    </nav>
  );
};
