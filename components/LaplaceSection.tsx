import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LaplaceSection = () => {
  return (
    <section id="laplace" className="relative py-24 lg:py-32 bg-secondary scroll-mt-16">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            [ CURRENT FLAGSHIP ]
          </span>
        </div>

        <div className="max-w-4xl">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Laplace
                <span className="text-accent">.</span>
              </h2>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Project Status: Active Development
              </p>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              A new paradigm in institutional intelligence. Systematic market efficiency powered by predictive modeling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="font-mono text-2xl font-bold text-foreground">Q2</div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    Beta Launch
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-foreground">AI</div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    Powered
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-foreground">Web</div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    First
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaplaceSection;
