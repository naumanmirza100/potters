import { HeroBanner } from '@/sections/Main/components/HeroBanner';
import { CategorySlider } from '@/sections/Main/components/CategorySlider';
import { VideoSection } from '@/sections/Main/components/VideoSection';
import { DesignSlider } from '@/sections/Main/components/DesignSlider';
import { NewArrivals } from '@/sections/Main/components/NewArrivals';
import { SaleSection } from '@/sections/Main/components/SaleSection';
import { CustomerMemories } from '@/sections/Main/components/CustomerMemories';
import { ReviewsSection } from '@/sections/Main/components/ReviewsSection';
import { HeritageBanner } from '@/sections/Main/components/HeritageBanner';

export const HomePage = () => (
  <>
    <HeroBanner />
    <CategorySlider />
    <VideoSection />
    <DesignSlider />
    <NewArrivals />
    <SaleSection />
    <CustomerMemories />
    <ReviewsSection />
    <HeritageBanner />
  </>
);
