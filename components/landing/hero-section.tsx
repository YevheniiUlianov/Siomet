"use client";

import { useEffect, useState } from "react";
import { ArrowRightDoubleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Vortex from "@/components/originkit/ui/tornado";
import { Button } from "@/components/ui/button";
import { StarButton } from "@/components/ui/star-button";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      {/* Interactive Tornado background */}
      <div className="hero-vortex-visual absolute inset-y-0 left-1/2 z-0 w-full max-w-[1344px] -translate-x-1/2 overflow-hidden sm:w-[calc(100%-2rem)] lg:w-[calc(100%-3.5rem)]">
        {mounted && (
          <Vortex
            background="#000000"
            lineOptions={{ color: "#ffffff", glow: 10 }}
            dotOptions={{ color: "#ffffff", glow: 10 }}
            cometOptions={{ color: "#eca8d6", glow: 6 }}
            repel
          />
        )}
        {/* Subtle overlay to ensure text readability on the left */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 py-28 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto flex max-w-full flex-col items-center text-center">
        {/* Main headline */}
        <div className="mb-6">
          <h1 
            className={`relative z-10 max-w-[22rem] text-balance text-center text-[clamp(2rem,9vw,2.5rem)] font-display leading-[0.96] tracking-tight text-white transition-all duration-1000 sm:max-w-none sm:text-[clamp(2rem,4.6vw,4.5rem)] sm:leading-[0.92] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block sm:whitespace-nowrap">Siomet – where knowledge</span>
            <span className="block bg-gradient-to-b from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent sm:whitespace-nowrap">meets passion</span>
          </h1>
        </div>
        <p
          className={`relative z-0 mb-8 max-w-[22rem] text-center text-sm leading-relaxed text-white sm:mb-10 sm:max-w-none sm:text-base lg:text-lg transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block sm:whitespace-nowrap">Mit Leidenschaft für innovative IT-Lösungen und einem kompromisslosen</span>
          <span className="block sm:whitespace-nowrap">Qualitätsanspruch begleiten wir Sie auf dem Weg in eine sichere digitale Zukunft.</span>
        </p>
        <div
        className={`flex w-full flex-col items-center justify-center transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        >
          <Button
            type="button"
            variant="outline"
            className="relative isolate h-10 overflow-hidden rounded-full border-white/30 bg-white px-5 text-black hover:bg-white hover:text-black"
            onClick={() => document.getElementById("loslegen")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-950/0 via-neutral-500 to-neutral-950/0" />
            <span className="relative z-10">
              KONTAKT
            </span>
          </Button>
        </div>
        </div>
      </div>
      {/* Scroll indicator */}

    </section>
  );
}
