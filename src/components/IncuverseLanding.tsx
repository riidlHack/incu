import Navigation from "./Navigation";
import HeroSection from "./sections/HeroSection";
import PrizeSection from "./sections/PrizeSection";
import ScheduleSection from "./sections/ScheduleSection";
import TracksSection from "./sections/TracksSection";
import SponsorsSection from "./sections/SponsorsSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";
import About from "./sections/AboutUs";

export const IncuverseLanding = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] relative overflow-hidden">
      {/* LIGHT GRID BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* SOFT RADIAL WASH (optional but recommended) */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.08),transparent_55%)]" />

      <Navigation />

      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <About />
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

        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default IncuverseLanding;
