import HeroBanner from '../../components/sections/HeroBanner/HeroBanner';
import StatsSection from '../../components/sections/StatsSection';
import ServicesSection from '../../components/sections/ServicesSection';
import FeaturesSection from '../../components/sections/FeaturesSection';
import PartnersSection from '../../components/sections/PartnersSection';
import CTASection from '../../components/sections/CTASection';

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroBanner />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}

export default HomePage;
