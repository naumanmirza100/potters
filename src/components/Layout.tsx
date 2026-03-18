import { AnnouncementBar } from '@/sections/AnnouncementBar';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="text-zinc-800/80 text-[15px] not-italic normal-nums font-normal accent-auto bg-fixed bg-zinc-100 box-border caret-transparent grid grid-cols-[100%] grid-rows-[auto_auto_1fr_auto] tracking-[0.6px] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-maven_pro md:text-base md:leading-[28.8px]">
    <AnnouncementBar />
    <Header />
    <main role="main">{children}</main>
    <Footer />
  </div>
);
