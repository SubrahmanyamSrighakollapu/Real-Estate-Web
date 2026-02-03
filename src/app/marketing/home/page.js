import HeroSection from './sections/HeroSection';
import WhyInvestUsSection from './sections/WhyInvestUsSection';
import OurProjectsSection from './sections/OurProjectsSection';
import SmartInvestmentPathSection from './sections/SmartInvestmentPathSection';
import TestimonialsSection from './sections/TestimonialsSection';
import QuickQuerySection from './sections/QuickQuerySection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhyInvestUsSection />
      <OurProjectsSection />
      <SmartInvestmentPathSection />
      <TestimonialsSection />
      <QuickQuerySection />
    </div>
  );
}