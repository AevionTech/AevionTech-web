import { Bot, TrendingUp, Box, Cloud } from "lucide-react";

const focusAreas = [
  {
    title: "AI Agents",
    description: "Autonomous digital workers.",
    icon: Bot,
    span: "lg:col-span-2",
    index: "01",
  },
  {
    title: "Prediction Markets",
    description: "Decentralized crypto intelligence.",
    icon: TrendingUp,
    span: "lg:col-span-1",
    index: "02",
  },
  {
    title: "3D Graphics",
    description: "Immersive environments and rendering.",
    icon: Box,
    span: "lg:col-span-1",
    index: "03",
  },
  {
    title: "SaaS Solutions",
    description: "Enterprise scaling tools.",
    icon: Cloud,
    span: "lg:col-span-2",
    index: "04",
  },
];

const FocusAreasSection = () => {
  return (
    <section id="labs" className="relative py-24 lg:py-32 bg-background scroll-mt-16">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            [ FOCUS AREAS ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-4">
            R&D Sectors
            <span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Exploring the frontiers of technology across multiple verticals.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`
                  group relative p-8 lg:p-10 rounded-sm
                  bg-card/50 backdrop-blur-sm
                  border border-border/50
                  transition-all duration-300 ease-out
                  hover:scale-[1.02] hover:border-foreground
                  hover:bg-card/80
                  cursor-pointer
                  ${area.span}
                `}
              >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-foreground/[0.02] to-transparent pointer-events-none" />
                
                {/* Index number */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  [{area.index}]
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-foreground transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground font-mono text-sm group-hover:text-foreground/70 transition-colors duration-300">
                      {area.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                      Explore
                    </span>
                    <div className="w-4 h-[1px] bg-accent" />
                  </div>
                </div>

                {/* Corner accent dot */}
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-border rounded-full group-hover:bg-accent transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
