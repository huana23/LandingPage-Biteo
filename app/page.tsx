import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServiceEcosystem from '@/components/ServiceEcosystem'
import FeaturedExperience from '@/components/FeaturedExperience'
import BusinessSection from '@/components/BusinessSection'
import Opportunities from '@/components/Opportunities'
import SupportSection from '@/components/SupportSection'
import StatsSection from '@/components/StatsSection'
import DownloadApp from '@/components/DownloadApp'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <ServiceEcosystem />
      <FeaturedExperience />
      <BusinessSection />
      <Opportunities />
      <SupportSection />
      <StatsSection />
      <DownloadApp />
      <FinalCTA />
      <Footer />
    </main>
  )
}
