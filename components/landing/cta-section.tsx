import { ArrowRightDoubleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarButton } from "@/components/ui/star-button";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RisingLines from "@/components/originkit/ui/risinglines";
import { SectionLabel } from "@/components/ui/section-label";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[calc(100%-2rem)] max-w-[1344px] -translate-x-1/2 overflow-hidden opacity-60 lg:w-[calc(100%-3.5rem)]"
      >
        <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
          <RisingLines
            className="size-full"
            particles={180}
            color="#e4e4e7"
            riseSpeed={12}
            opacity={42}
            scale={8}
            showHorizon
            horizonColor="#a1a1aa"
            horizonOpacity={22}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="mx-0 px-0 py-20 text-center lg:mx-5 lg:px-6 lg:py-28">
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center" aria-label="Teams building with Qronos">
              {[
                { src: "/images/agent-logos/gemini.png", alt: "Gemini" },
                { src: "/images/agent-logos/codex.png", alt: "Codex" },
                { src: "/images/agent-logos/claude.png", alt: "Claude" },
                { src: "/images/agent-logos/cursor.png", alt: "Cursor" },
                { initials: "+", alt: "More agents", fallbackClassName: "text-base font-medium" },
              ].map((avatar) => (
                <Avatar key={avatar.alt} className="-ml-2 size-9 border border-white/12 bg-black p-[5px] first:ml-0">
                  {avatar.src && <AvatarImage src={avatar.src} alt={avatar.alt} className="object-contain" />}
                  <AvatarFallback className={`bg-zinc-900 text-white ${avatar.fallbackClassName ?? "text-[11px] font-semibold"}`}>{avatar.initials ?? avatar.alt.slice(0, 1)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex justify-center">
              <SectionLabel>Get started</SectionLabel>
            </div>
            <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
              <span className="block text-foreground">Stop babysitting agents.</span>
              <span className="mt-1 block bg-gradient-to-b from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent lg:mt-2">Let them own the work.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Turn every recurring task, signal, and handoff into reliable work that carries its context forward.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <StarButton backgroundColor="#000000" className="rounded-full border border-slate-200/50">
                GET STARTED
                <HugeiconsIcon icon={ArrowRightDoubleIcon} aria-hidden="true" size={14} strokeWidth={1.8} />
              </StarButton>
              <Button asChild variant="outline" className="relative isolate h-10 overflow-hidden rounded-full border-white/30 bg-white px-5 text-black hover:bg-white hover:text-black">
                <a href="#pricing">
                  <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-950/0 via-neutral-500 to-neutral-950/0" />
                  <span className="relative z-10">REQUEST A DEMO</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
