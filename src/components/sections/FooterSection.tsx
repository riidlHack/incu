import {Linkedin, Mail, Instagram } from "lucide-react";

const FooterSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/riidlhack", label: "LinkedIn" },
    { icon: Mail, href: "mailto:riidlhack@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/riidl_hack", label: "Instagram"}
  ];

  

  return (
    <footer className="py-20 px-4 relative border-t border-neon-green/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Incuverse Brand Info (Left) */}
          <div className="lg:col-span-2"> {/* Takes up 2 columns on large screens */}
            <div className="mb-6">
              <h3 className="neon-text font-heading text-2xl font-black uppercase tracking-tight">
                Incuverse
              </h3>
              <p className="font-code text-sm text-neon-green mt-1">1.0</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building the future through code. Join 500+ developers for 48 hours of innovation, 
              collaboration, and breakthrough ideas.
            </p>
          </div>

          {/* Contact Us & Social Links (Right and Centered) */}
          <div className="lg:col-span-2 text-center lg:text-center"> {/* Center text for both small and large screens */}
            <h3 className="neon-text font-heading text-2xl font-black uppercase tracking-tight mb-4"> {/* Added mb-4 for space */}
              Contact Us
            </h3>
            {/* Social Links */}
            <div className="flex gap-3 justify-center"> {/* Centered social links */}
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded bg-neon-green/10 border border-neon-green/30 flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-neon-green/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2025 Incuverse. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-neon-green transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-neon-green transition-colors duration-300">
                Terms of Service
              </a>
              <span>•</span>
              <span>Developed by Incuverse Tech Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-transparent to-neon-green/20" />
        <div className="absolute bottom-0 right-1/4 w-px h-24 bg-gradient-to-t from-transparent to-neon-cyan/20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
      </div>
    </footer>
  );
};

export default FooterSection;