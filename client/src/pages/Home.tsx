import ScrollProgress from '@/components/ScrollProgress';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AttractionsGrid from '@/components/AttractionsGrid';
import RestaurantShowcase from '@/components/RestaurantShowcase';
import EventsTimeline from '@/components/EventsTimeline';
import PracticalInfo from '@/components/PracticalInfo';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AttractionsGrid />
        <RestaurantShowcase />
        <EventsTimeline />
        <PracticalInfo />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
