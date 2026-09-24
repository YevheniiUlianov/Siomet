import { Cloud, Code2, Lightbulb, RefreshCw } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

const projectStages = [
  {
    title: "Erste Idee",
    description: "Aus einer Vision wird ein konkreter, messbarer nächster Schritt.",
    icon: Lightbulb,
    color: "cyan",
  },
  {
    title: "Umsetzung",
    description: "Wir bauen Lösungen, die zu Ihren Prozessen und Ihrem Team passen.",
    icon: Code2,
    color: "violet",
  },
  {
    title: "Betrieb",
    description: "Stabil im Alltag, überwacht, optimiert und bereit für Wachstum.",
    icon: Cloud,
    color: "emerald",
  },
  {
    title: "Weiterentwicklung",
    description: "Neue Anforderungen werden zu Verbesserungen, die weiter Wirkung zeigen.",
    icon: RefreshCw,
    color: "violet",
  },
] as const;

const stageColors = {
  cyan: {
    icon: "border-cyan-300/40 bg-cyan-300/10 text-cyan-200",
  },
  violet: {
    icon: "border-violet-300/40 bg-violet-300/10 text-violet-200",
  },
  emerald: {
    icon: "border-emerald-300/40 bg-emerald-300/10 text-emerald-200",
  },
} as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>Projekte</SectionLabel>
              <h2 className="max-w-3xl font-display text-[37px] leading-[0.95] tracking-tight lg:text-[58px]">
                <span className="block text-foreground">Von der Idee</span>
                <span className="mt-2 block text-muted-foreground lg:mt-3">bis zum Erfolg.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-2 lg:text-xl">
              Wir begleiten Ihr Projekt von der ersten Frage bis zur Lösung, die im Alltag zuverlässig funktioniert.
            </p>
          </div>

          <div className="relative mt-14 lg:mt-20">
            <div aria-hidden="true" className="absolute left-7 top-16 h-[calc(100%-8rem)] w-px bg-gradient-to-b from-cyan-300/60 via-violet-300/50 to-emerald-300/50 lg:hidden" />
            <div aria-hidden="true" className="absolute top-7 hidden h-px bg-gradient-to-r from-cyan-300/60 to-violet-300/50 lg:left-[calc(12.5%+36px)] lg:block lg:w-[calc(25%-72px)]" />
            <div aria-hidden="true" className="absolute top-7 hidden h-px bg-gradient-to-r from-violet-300/50 to-emerald-300/50 lg:left-[calc(37.5%+36px)] lg:block lg:w-[calc(25%-72px)]" />
            <div aria-hidden="true" className="absolute top-7 hidden h-px bg-gradient-to-r from-emerald-300/50 to-violet-300/50 lg:left-[calc(62.5%+36px)] lg:block lg:w-[calc(25%-72px)]" />
            <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
              {projectStages.map(({ title, description, icon: Icon, color }, index) => {
                const colors = stageColors[color];

                return (
                  <article key={title} className="relative grid grid-cols-[3.5rem_1fr] gap-5 lg:block lg:text-center">
                    <div className={`relative z-10 flex size-14 items-center justify-center rounded-full border bg-[#0b0d12] shadow-[0_0_35px_rgba(0,0,0,0.35)] lg:mx-auto ${colors.icon}`}>
                      <Icon aria-hidden="true" size={24} strokeWidth={1.5} />
                    </div>
                    <div className="pt-1 lg:pt-7">
                      <p className="text-xl font-medium tracking-[-0.03em] text-foreground">{title}</p>
                      <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground lg:mx-auto">{description}</p>
                    </div>
                    {index < projectStages.length - 1 && (
                      <span aria-hidden="true" className="absolute left-7 top-14 h-10 w-px bg-gradient-to-b from-white/20 to-transparent lg:hidden" />
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}