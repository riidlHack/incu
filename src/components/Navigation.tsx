import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Schedule", href: "#schedule" },
    { label: "Prizes", href: "#prizes" },
    { label: "Domains", href: "#tracks" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel border-b border-neon-green/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('#hero')}
              className="font-heading text-xl font-black text-neon-green hover:text-neon-cyan transition-colors duration-300"
            >
              INCUVERSE
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-heading text-sm font-medium text-muted-foreground hover:text-neon-green transition-colors duration-300 uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <a href="./Incuverse_PPT_Format.pptx" download>
              <button className="glass-panel hover-glow font-heading px-4 py-2 bg-neon-green/20 border border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 text-sm uppercase tracking-wide">
                Download PPT Format
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neon-green hover:text-neon-cyan transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-panel border-t border-neon-green/20 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 font-heading text-sm font-medium text-muted-foreground hover:text-neon-green transition-colors duration-300 uppercase tracking-wide w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <a href="./Incuverse_PPT_Format.pptx" download>
                <button className="w-full mt-4 glass-panel hover-glow font-heading px-4 py-2 bg-neon-green/20 border border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 text-sm uppercase tracking-wide">
                  Download PPT Format
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
