import { ExternalLink } from "lucide-react";

// const sponsors = {
//   title: [
//     {
//       name: "TechCorp Global",
//       logo: "T",
//       tier: "Title Sponsor",
//       description: "Leading the future of technology innovation"
//     }
//   ],
//   platinum: [
//     {
//       name: "CloudVision AI",
//       logo: "CV",
//       tier: "Platinum",
//       description: "Advanced AI and machine learning platforms"
//     },
//     {
//       name: "QuantumPay",
//       logo: "QP", 
//       tier: "Platinum",
//       description: "Next-generation payment solutions"
//     }
//   ],
//   gold: [
//     {
//       name: "DevTools Pro",
//       logo: "DT",
//       tier: "Gold",
//       description: "Developer productivity tools"
//     },
//     {
//       name: "SecureChain",
//       logo: "SC",
//       tier: "Gold", 
//       description: "Blockchain security solutions"
//     },
//     {
//       name: "DataFlow Systems",
//       logo: "DF",
//       tier: "Gold",
//       description: "Real-time data processing"
//     }
//   ],
//   silver: [
//     {
//       name: "CodeCraft",
//       logo: "CC",
//       tier: "Silver",
//       description: "Code quality tools"
//     },
//     {
//       name: "APIHub",
//       logo: "AH", 
//       tier: "Silver",
//       description: "API management platform"
//     },
//     {
//       name: "CloudHost",
//       logo: "CH",
//       tier: "Silver",
//       description: "Cloud hosting services"
//     },
//     {
//       name: "MobileFirst",
//       logo: "MF",
//       tier: "Silver", 
//       description: "Mobile development tools"
//     }
//   ]
// };

// const tierStyles = {
//   title: {
//     containerClass: "glass-panel p-8 hover-glow",
//     logoSize: "w-20 h-20",
//     logoGradient: "from-neon-green to-neon-cyan",
//     textSize: "text-2xl",
//     borderColor: "border-neon-green"
//   },
//   platinum: {
//     containerClass: "glass-panel p-6 hover-glow",
//     logoSize: "w-16 h-16", 
//     logoGradient: "from-neon-cyan to-neon-lime",
//     textSize: "text-xl",
//     borderColor: "border-neon-cyan"
//   },
//   gold: {
//     containerClass: "glass-panel p-4 hover-glow",
//     logoSize: "w-12 h-12",
//     logoGradient: "from-neon-lime to-neon-green",
//     textSize: "text-lg",
//     borderColor: "border-neon-lime"
//   },
//   silver: {
//     containerClass: "glass-panel p-4 hover-glow",
//     logoSize: "w-10 h-10",
//     logoGradient: "from-neon-green/60 to-neon-cyan/60", 
//     textSize: "text-base",
//     borderColor: "border-neon-green/60"
//   }
// };

// const SponsorCard = ({ sponsor, style }: { sponsor: any, style: any }) => (
//   <div className={`${style.containerClass} group cursor-pointer relative overflow-hidden`}>
//     {/* Background Effect */}
//     <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
//     <div className="relative z-10 text-center">
//       {/* Logo */}
//       <div className={`${style.logoSize} mx-auto mb-4 rounded-lg bg-gradient-to-br ${style.logoGradient} flex items-center justify-center border ${style.borderColor}/30 group-hover:${style.borderColor}/60 transition-all duration-300`}>
//         <span className={`font-heading font-black text-background ${style.textSize}`}>
//           {sponsor.logo}
//         </span>
//       </div>
      
//       {/* Sponsor Info */}
//       <h3 className={`font-heading font-bold text-foreground mb-1 group-hover:text-neon-green transition-colors duration-300 ${style.textSize}`}>
//         {sponsor.name}
//       </h3>
      
//       <p className="text-muted-foreground text-xs mb-2">
//         {sponsor.description}
//       </p>
      
//       {/* Tier Badge */}
//       <span className="font-code text-xs text-neon-green bg-neon-green/10 px-2 py-1 rounded border border-neon-green/30">
//         {sponsor.tier}
//       </span>
//     </div>

//     {/* External Link Icon */}
//     <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-neon-green/40 group-hover:text-neon-green transition-colors duration-300" />
    
//     {/* Circuit decoration */}
//     <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
//   </div>
// );

export const SponsorsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="neon-text font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Sponsors
          </h2>
          {/* <p className="text-muted-foreground font-heading uppercase tracking-wide">
            Powered by industry leaders
          </p> */}
        </div>

        {/* Title Sponsor */}
        {/* {sponsors.title.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-neon-green uppercase tracking-wide">
                Title Sponsor
              </h3>
            </div>
            <div className="max-w-md mx-auto">
              {sponsors.title.map((sponsor, index) => (
                <SponsorCard 
                  key={sponsor.name} 
                  sponsor={sponsor} 
                  style={tierStyles.title}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Platinum Sponsors */}
        {/* {sponsors.platinum.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="font-heading text-xl font-bold text-neon-cyan uppercase tracking-wide">
                Platinum Partners
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {sponsors.platinum.map((sponsor, index) => (
                <SponsorCard 
                  key={sponsor.name} 
                  sponsor={sponsor} 
                  style={tierStyles.platinum}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Gold Sponsors */}
        {/* {sponsors.gold.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="font-heading text-lg font-bold text-neon-lime uppercase tracking-wide">
                Gold Partners
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <SponsorCard 
                  key={sponsor.name} 
                  sponsor={sponsor} 
                  style={tierStyles.gold}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Silver Sponsors */}
        {/* {sponsors.silver.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="font-heading text-base font-bold text-neon-green/80 uppercase tracking-wide">
                Silver Partners
              </h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {sponsors.silver.map((sponsor, index) => (
                <SponsorCard 
                  key={sponsor.name} 
                  sponsor={sponsor} 
                  style={tierStyles.silver}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Become a Sponsor */}
        <div className="mt-16 text-center">
          <div className="glass-panel p-8 hover-glow max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-neon-green mb-4">
              REVEALING SOON!!!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;