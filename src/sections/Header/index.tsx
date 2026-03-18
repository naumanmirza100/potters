import { MobileMenuDrawer } from "@/sections/Header/components/MobileMenuDrawer";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { NavBar } from "@/sections/Header/components/NavBar";
import { HeaderIcons } from "@/sections/Header/components/HeaderIcons";

export const Header = () => {
  return (
    <div className="sticky text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] z-[3] top-0 md:text-base md:leading-[28.8px]">
      <div className="relative text-neutral-800/80 text-[15px] bg-fixed bg-amber-50 box-border caret-transparent block leading-[27px] md:text-base md:leading-[28.8px]">
        <header className="text-[15px] items-center box-border caret-transparent gap-x-[normal] grid [grid-template-areas:'left-icons_heading_icons'] grid-cols-[1fr_2fr_1fr] leading-[27px] max-w-[1200px] mx-auto px-[30px] py-1 md:text-base md:gap-x-5 md:[grid-template-areas:'heading_navigation_icons'] md:grid-cols-[auto_auto_1fr] md:leading-[28.8px] md:px-[50px] md:py-2">
          <MobileMenuDrawer />
          <HeaderLogo />
          <NavBar />
          <HeaderIcons />
        </header>
      </div>
    </div>
  );
};
