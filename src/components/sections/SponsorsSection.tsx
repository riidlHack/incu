import { ExternalLink } from "lucide-react";
import capgeminiLogo from "../../image/capgemini.png";

/* -------------------- DATA -------------------- */

type Sponsor = {
  name: string;
  logo: string;
  tier: string;
  description: string;
};

const sponsors: { title: Sponsor[] } = {
  title: [
    {
      name: "Capgemini",
      logo: '', 
      tier: "Title Sponsor",
      description: "Leading the future of technology innovation"
    }
  ]
};

/* -------------------- STYLES -------------------- */

const tierStyles = {
  title: {
    containerClass: "glass-panel p-8 hover-glow",
    logoSize: "w-40 h-24",
    textSize: "text-2xl",
    borderColor: "border-neon-green"
  }
};

/* -------------------- CARD -------------------- */

const SponsorCard = ({
  sponsor,
  style
}: {
  sponsor: Sponsor;
  style: any;
}) => {
  return (
    <div className={`${style.containerClass} relative overflow-hidden`}>
      {/* Glow */}
      <div className="absolute inset-0 bg-neon-green/5 opacity-0 hover:opacity-100 transition" />

      <div className="relative z-10 text-center">
        {/* LOGO — IMAGE ONLY */}
        <div
          className={`${style.logoSize} mx-auto mb-4 rounded-xl bg-background flex items-center justify-center border ${style.borderColor}/30`}
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="w-full h-full object-contain p-4"
          />
        </div>

        {/* NAME */}
        <h3
          className={`font-heading font-bold text-foreground mb-2 ${style.textSize}`}
        >
          {sponsor.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-sm mb-4">
          {sponsor.description}
        </p>

        {/* BADGE */}
        <span className="font-code text-xs text-neon-green bg-neon-green/10 px-3 py-1 rounded border border-neon-green/30">
          {sponsor.tier}
        </span>
      </div>

      {/* ICON */}
      <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-neon-green/50" />
    </div>
  );
};

/* -------------------- SECTION -------------------- */

const SponsorsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="neon-text font-heading text-4xl md:text-6xl font-black uppercase">
            Sponsors
          </h2>
        </div>

        {/* TITLE SPONSOR */}
        <div className="mb-20">
          <h3 className="text-center font-heading text-2xl font-bold text-neon-green uppercase mb-8">
            Title Sponsor
          </h3>

          <div className="max-w-md mx-auto">
            {sponsors.title.map((sponsor) => (
              <SponsorCard
                key={sponsor.name}
                sponsor={sponsor}
                style={tierStyles.title}
              />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center">
          <div className="glass-panel p-8 max-w-xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-neon-green">
              More sponsors revealing soon 🚀
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
