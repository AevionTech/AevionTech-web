"use client";

import Image from "next/image";
import type { MouseEvent } from "react";

const TerminalFooter = () => {
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
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
    <footer className="relative bg-black border-t border-accent">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-16 justify-items-center">
          {/* Col 1: Identity */}
          <div className="col-span-2 md:col-span-1 text-center">
            <div className="flex justify-center">
              <Image
                src="/logo.svg"
                alt="Aevion Technology"
                width={440}
                height={96}
                className="h-24 w-auto"
              />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-3">
              NYC 2026
            </p>
          </div>

          {/* Col 2: Directory */}
          <div className="text-center">
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
              Directory
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#orchard" 
                  onClick={(e) => scrollToSection(e, "orchard")}
                  className="text-foreground hover:text-accent transition-colors text-sm"
                >
                  Orchard <span className="font-mono text-[10px] text-accent">(Live)</span>
                </a>
              </li>
              <li>
                <a 
                  href="#labs" 
                  onClick={(e) => scrollToSection(e, "labs")}
                  className="text-foreground hover:text-accent transition-colors text-sm"
                >
                  Labs <span className="font-mono text-[10px] text-muted-foreground">(Beta)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal - Hidden */}
          <div className="hidden">
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="text-center">
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:support@aeviontech.com"
                  className="text-foreground hover:text-accent transition-colors text-sm"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="font-mono text-[10px] text-muted-foreground text-center">
            © 2026 Aevion Technology Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;
