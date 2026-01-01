"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Ventures", href: "#ventures" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <span className="text-foreground font-bold text-lg tracking-tight uppercase font-mono">
              [ AEVION ]
            </span>
            <span className="text-muted-foreground font-mono text-xs hidden sm:inline">
              / TECHNOLOGY INC.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
                aria-label={link.name}
              >
                {/* {link.name} */}
              </a>
            ))}
            <a
              href="mailto:support@aeviontech.com"
              className="px-4 py-2 border border-foreground text-foreground font-medium text-sm uppercase tracking-wide transition-all duration-200 hover:bg-foreground hover:text-background"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2 uppercase tracking-wide"
                  aria-label={link.name}
                >
                  {/* {link.name} */}
                </a>
              ))}
              <a
                href="mailto:support@aeviontech.com"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-foreground text-foreground font-medium text-sm text-center uppercase tracking-wide transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;