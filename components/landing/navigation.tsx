"use client";

import { useState, useEffect } from "react";
import { ArrowRightDoubleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { StarButton } from "@/components/ui/star-button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Unsere Prinzipien", href: "#how-it-works" },
  { name: "Team", href: "#insights" },
  { name: "Über uns", href: "#pricing" },
  { name: "Produkte", href: "#products" },
  { name: "Projekte", href: "#projects" },
  { name: "Kundengeschichten", href: "#customers" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 transition-all duration-500">
      <nav 
        className={`relative mx-auto w-full max-w-[1344px] before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-foreground/10 after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-px after:bg-foreground/10 lg:w-[calc(100%-3.5rem)] ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div 
          className="flex h-12 items-center justify-between px-5 transition-all duration-500"
        >
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Siomet home">
            <span className="font-display text-[1.6rem] font-medium tracking-[-0.08em] leading-none text-white transition-all duration-500">
              Siomet
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-foreground" : "bg-white"}`} />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <StarButton
              backgroundColor="#000000"
              className="h-8 border border-slate-200/50 px-4 text-xs"
              onClick={() => document.querySelector("#loslegen")?.scrollIntoView({ behavior: "smooth" })}
            >
              LOSLEGEN
              <HugeiconsIcon icon={ArrowRightDoubleIcon} aria-hidden="true" size={14} strokeWidth={1.8} />
            </StarButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-20 size-3 -translate-x-1/2 -translate-y-1/2 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-[linear-gradient(to_bottom,transparent,rgba(226,232,240,0.65)_50%,transparent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-full after:-translate-y-1/2 after:bg-[linear-gradient(to_right,transparent,rgba(226,232,240,0.65)_50%,transparent)]" />
        <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-20 size-3 translate-x-1/2 -translate-y-1/2 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-[linear-gradient(to_bottom,transparent,rgba(226,232,240,0.65)_50%,transparent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-full after:-translate-y-1/2 after:bg-[linear-gradient(to_right,transparent,rgba(226,232,240,0.65)_50%,transparent)]" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 size-3 -translate-x-1/2 translate-y-1/2 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-[linear-gradient(to_bottom,transparent,rgba(226,232,240,0.65)_50%,transparent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-full after:-translate-y-1/2 after:bg-[linear-gradient(to_right,transparent,rgba(226,232,240,0.65)_50%,transparent)]" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 size-3 translate-x-1/2 translate-y-1/2 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-[linear-gradient(to_bottom,transparent,rgba(226,232,240,0.65)_50%,transparent)] after:absolute after:left-0 after:top-1/2 after:h-px after:w-full after:-translate-y-1/2 after:bg-[linear-gradient(to_right,transparent,rgba(226,232,240,0.65)_50%,transparent)]" />

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex pt-8 border-t border-foreground/10 transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button asChild variant="outline" className="relative isolate h-10 overflow-hidden rounded-full border-white/30 bg-white px-5 text-black hover:bg-white hover:text-black">
              <a href="#loslegen">
                <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-950/0 via-neutral-500 to-neutral-950/0" />
                <span className="relative z-10">LOSLEGEN <HugeiconsIcon icon={ArrowRightDoubleIcon} aria-hidden="true" size={14} strokeWidth={1.8} className="ml-1 inline-block align-[-2px]" /></span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
