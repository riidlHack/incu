import Navigation from "./Navigation";
import HeroSection from "./sections/HeroSection";
import PrizeSection from "./sections/PrizeSection";
import ScheduleSection from "./sections/ScheduleSection";
import TracksSection from "./sections/TracksSection";
import TeamSection from "./sections/TeamSection";
import SponsorsSection from "./sections/SponsorsSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";

const BackgroundGrid = () => (
  <div 
    className="fixed inset-0 opacity-10 animate-grid-move pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(hsl(var(--neon-green) / 0.1) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--neon-green) / 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    }}
  />
);

export const IncuverseLanding = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundGrid />
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="schedule">
          <ScheduleSection />
        </section>
        
        <section id="prizes">
          <PrizeSection />
        </section>
          
        <section id="tracks">
          <TracksSection />
        </section>
        
        <section id="sponsors">
          <SponsorsSection />
        </section>
        
        <section id="team">
          <TeamSection />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default IncuverseLanding;