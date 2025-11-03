import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AttractionsGrid from "@/components/AttractionsGrid";
import RestaurantShowcase from "@/components/RestaurantShowcase";
import EventsTimeline from "@/components/EventsTimeline";
import PracticalInfo from "@/components/PracticalInfo";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main>
        <section id="accueil">
          <HeroSection />
        </section>

        <section id="a-propos">
          <AboutSection />
        </section>

        <section id="attractions">
          <AttractionsGrid />
        </section>

        <section id="restaurants">
          <RestaurantShowcase />
        </section>

        <section id="evenements">
          <EventsTimeline />
        </section>

        <section id="galerie">
          <PracticalInfo />
        </section>

        <section id="contact">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </div>
  );
}
