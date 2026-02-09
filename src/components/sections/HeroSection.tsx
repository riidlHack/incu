import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8">
        
        {/* GLASS PANEL */}
        <div className="glass-panel bg-white/85 backdrop-blur-md p-8 md:p-12 relative mb-10 rounded-2xl">

          {/* TITLE */}
          <h1
            className="
              font-heading
              text-4xl md:text-6xl lg:text-8xl
              font-black uppercase tracking-tight leading-tight
              text-[#0F172A]
              drop-shadow-[0_0_20px_rgba(46,216,195,0.35)]
            "
          >
            Startup Growth Challenge
          </h1>

          {/* VERSION */}
          <div className="flex justify-end mt-2">
            <span
              className="
                font-code
                text-lg md:text-xl
                font-semibold tracking-widest
                text-[#2ED8C3]
              "
            >
              1.0
            </span>
          </div>

          {/* TAGLINE */}
          <p
            className="
              font-heading
              text-xs md:text-sm
              font-medium uppercase tracking-wide
              mt-6
              text-[#475569]
            "
          >
            An execution-first growth sprint focused on real customers and real revenue
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://chat.whatsapp.com/KhrcYpU25QS7KkI5dvFjwb">
            <Button
              size="lg"
              variant="outline"
              className="
                glass-panel
                bg-white/80
                hover:bg-[#2ED8C3]/10
                border-[#2ED8C3]/40
                text-[#0F172A]
                font-heading
                text-lg
                px-8 py-4
                transition-all duration-300
              "
            >
              Join riidl community
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
