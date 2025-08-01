import { Trophy, Award, Star, Target } from "lucide-react";

const prizes = [
  {
    title: "Innovation Award",
    amount: "Rs 60,000",
    description: "Most Creative Solution",
    icon: Star,
    gradient: "from-gray-200 to-gray-400",
    rank: "2nd Place"
  },
  {
    title: "Grand Prize",
    amount: "Rs 1,00,000",
    description: "Best Overall Project",
    icon: Trophy,
    gradient: "from-amber-300 via-yellow-400 to-amber-600",
    rank: "1st Place"
  },
  {
    title: "Impact Prize",
    amount: "Rs 40,000",
    description: "Social Good Category",
    icon: Target,
    gradient: "from-orange-400 to-red-600",
    rank: "3rd Place"
  },
];

export const PrizeSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="neon-text font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Prize Pool
          </h2>
          <div className="glass-panel inline-block p-4 hover-glow">
            <p className="font-code text-2xl md:text-4xl font-bold text-neon-green">
              Rs 2,00,000+
            </p>
            <p className="text-muted-foreground font-heading uppercase tracking-wide">
              Total Rewards
            </p>
          </div>
        </div>

        {/* Prize Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={prize.title}
                className="glass-panel p-6 hover-glow relative overflow-hidden w-full max-w-sm"
                style={{ animationDelay: `${index * 0.1}s` }}>

                <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-30`} />
                
                {/* Rank Badge */}
                <div className="absolute top-4 right-4">
                  <span className="font-code text-xs text-neon-green bg-neon-green/10 px-2 py-1 rounded border border-neon-green/30">
                    {prize.rank}
                  </span>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-neon-green mb-4" />
                  
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {prize.title}
                  </h3>
                  
                  <div className="font-code text-2xl font-bold text-neon-green mb-3">
                    {prize.amount}
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {prize.description}
                  </p>
                </div>

                {/* Circuit decoration */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-12 text-center">
          <div className="glass-panel p-6 hover-glow inline-block">
            <p className="text-muted-foreground font-heading uppercase tracking-wide text-sm mb-2">
              Plus Equipment & Swag Worth
            </p>
            <p className="font-code text-xl font-bold text-neon-cyan">
              $20,000+
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PrizeSection;