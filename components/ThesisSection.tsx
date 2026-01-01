"use client";

import { useEffect, useRef } from "react";

const ThesisSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let rotation = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.5;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      // Draw wireframe globe
      ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
      ctx.lineWidth = 1;
      
      // Longitude lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI;
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Latitude lines
      for (let i = -4; i <= 4; i++) {
        const y = (i / 4) * radius * 0.8;
        const r = Math.sqrt(radius * radius - y * y) * 0.9;
        if (r > 0) {
          ctx.beginPath();
          ctx.ellipse(0, y, r, r * 0.3, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      
      ctx.restore();
      
      rotation += 0.002;
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative py-24 lg:py-40 bg-background overflow-hidden">
      {/* Rotating wireframe globe background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Sticky Headline */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              [ OUR THESIS ]
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mt-6 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Algorithmic<br />Human<span className="text-accent">.</span>
            </h2>
          </div>

          {/* Right: Scrolling Text */}
          <div className="space-y-12 lg:pt-8">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              The barrier between digital logic and physical reality is dissolving. Whether finding love (Orchard) or navigating markets (Crypto), we believe technology should support your life, not distract from it.
            </p>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Aevion moves beyond apps and screens. We build invisible intelligence—systems that quietly elevate the human experience without asking for your attention.
            </p>

            {/* Visual separator */}
            <div className="flex items-center gap-4 pt-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                INTEGRATION, NOT INTERRUPTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
