import backgroundImage from '../../image/background_image.jpeg';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const FloatingCode = ({ code, delay, className = "" }: { code: string; delay: number; className?: string }) => (
  <div
    className={`absolute floating-code animate-code-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {code}
  </div>
);

const CircuitLines = () => (
  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
    <div
      className="circuit-line top-1/5 left-0 w-full h-px animate-circuit-flow"
      style={{ animationDelay: '0s' }}
    />
    <div
      className="circuit-line top-3/5 left-0 w-full h-px animate-circuit-flow"
      style={{ animationDelay: '2s' }}
    />
    <div
      className="circuit-line top-0 left-[30%] w-px h-full animate-circuit-flow"
      style={{
        animationDelay: '1s',
        background: 'linear-gradient(180deg, transparent, hsl(var(--neon-cyan) / 0.3), transparent)'
      }}
    />
    <div
      className="circuit-line top-0 left-[70%] w-px h-full animate-circuit-flow"
      style={{
        animationDelay: '3s',
        background: 'linear-gradient(180deg, transparent, hsl(var(--neon-lime) / 0.3), transparent)'
      }}
    />
  </div>
);

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image - UPDATED PATH */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` , opacity: 0.3 }} // **Path updated here**
      ></div>

      {/* Floating Code Elements */}
      <FloatingCode
        code="const future = await hack();"
        delay={0}
        className="top-[10%] -left-[20%]"
      />
      <FloatingCode
        code="innovation.push(idea);"
        delay={2}
        className="top-1/2 -right-[20%]"
      />
      <FloatingCode
        code="while(coding) { create(); }"
        delay={4}
        className="bottom-[20%] -left-[20%]"
      />

      {/* Main Logo Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8">
        <div className="glass-panel hover-glow p-8 md:p-12 relative mb-8">
          <CircuitLines />

          {/* Main Logo */}
          <div className="space-y-2">
            <h1 className="neon-text font-heading text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight leading-tight">
              Incuverse
            </h1>

            {/* Version */}
            <div className="flex justify-end">
              <span className="font-code text-lg md:text-2xl font-semibold text-neon-green animate-pulse-version tracking-widest">
                1.0
              </span>
            </div>

            {/* Tagline */}
            <p className="font-heading text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide mt-6">
              Ideas that last beyond 24 hours
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://unstop.com/o/cYvIijH?lb=Qt7tWF7u">
            <Button size="lg" className="glass-panel hover-glow font-heading text-lg px-8 py-4 bg-neon-green/20 border border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300">
              Register Now
            </Button>
          </a>
          <a href="https://chat.whatsapp.com/KhrcYpU25QS7KkI5dvFjwb">
          <Button size="lg" variant="outline" className="glass-panel hover-glow font-heading text-lg px-8 py-4 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover-glow:color-[#FAF9F6]">
            Join riidl community
          </Button></a>
        </div>

        {/* { Timer - Moved here to be below the CTA buttons } */}
        
      </div>
    </section>
  );
};

export default HeroSection;
