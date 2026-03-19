"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConstellationCanvas from "./ConstellationCanvas";

const HeroSection = () => {
  const scrollToLaplace = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("laplace");
    if (element) {
      const navbarHeight = 96; // h-24 = 6rem = 96px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToLabs = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("labs");
    if (element) {
      const navbarHeight = 96; // h-24 = 6rem = 96px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* Spotlight Effect - subtle radial gradient behind headline */}
      <div 
        className="absolute left-0 top-1/4 w-[60%] h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, hsl(0 0% 8% / 0.8) 0%, transparent 60%)"
        }}
      />

      {/* Grain/Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      />

      {/* Vignette Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 2%) 100%)"
        }}
      />

      {/* Constellation Canvas - Right Side */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <ConstellationCanvas />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-6 pt-32 pb-40">
        <div className="max-w-4xl">
          {/* Tag */}
          <div 
            className="inline-flex items-center gap-2 mb-8 animate-fade-in opacity-0"
            style={{ animationDelay: "0s" }}
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              [ VENTURE STUDIO ]
            </span>
          </div>

          {/* Main Heading - Left Aligned */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in opacity-0 leading-[0.9]"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Intelligence,</span>
            <br />
            <span className="text-foreground whitespace-nowrap">Woven into Life</span>
            <span className="text-accent">.</span>
          </h1>

          {/* Subtext - Left Aligned */}
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 animate-fade-in opacity-0 leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            We build the invisible layer where artificial intelligence meets human reality. From finding love to predicting the future, we make complex algorithms feel like second nature.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#laplace" onClick={scrollToLaplace}>
              <Button variant="primary" size="lg">
                View Project Laplace
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="#labs" onClick={scrollToLabs}>
              <Button variant="outline" size="lg">
                Access Labs
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div 
        className="relative z-10 border-t border-border bg-background animate-fade-in opacity-0"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {/* Status */}
            <div className="py-6 pr-4 md:pr-8">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                System Status
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-foreground uppercase">
                  Operational / Incubating
                </span>
              </div>
            </div>

            {/* Current Priority */}
            <div className="py-6 px-4 md:px-8">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                Current Priority
              </div>
              <div className="font-mono text-xs text-foreground uppercase">
                Project Laplace
              </div>
            </div>

            {/* Sectors */}
            <div className="py-6 px-4 md:px-8">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                Sectors
              </div>
              <div className="font-mono text-xs text-foreground uppercase">
                Social • Crypto • AI Agents
              </div>
            </div>

            {/* HQ */}
            <div className="py-6 pl-4 md:pl-8">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                HQ
              </div>
              <div className="font-mono text-xs text-foreground uppercase">
                NYC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;