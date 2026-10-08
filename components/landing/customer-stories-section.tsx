import { Activity03Icon, TimeScheduleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CustomerStoryStack } from "@/components/ruixen/customer-story-stack";
import { SectionLabel } from "@/components/ui/section-label";

const NexaLogo = () => (
  <div className="flex items-center gap-3 text-foreground">
    <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-[8px] border border-white/12 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02)_55%,_transparent_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
      <svg viewBox="0 0 32 32" className="h-5 w-5 text-white" fill="none" aria-hidden="true">
        <path d="M8 24V8h3.2L18.7 19.7V8H24v16h-3.2L13.3 12.3V24H8Z" fill="currentColor" />
      </svg>
    </div>
    <span className="text-[11px] font-semibold tracking-[0.32em] text-white">NEXA</span>
  </div>
);

const operationsStories = [
  {
    id: "meridian-research",
    logo: <img src="/images/testimonial-logos/meridian.png" alt="Meridian" className="h-6 w-auto object-contain" />,
    quote: "Qronos gab unseren Research-Agenten einen verlässlichen Rhythmus. Jeder Brief beginnt mit dem Kontext und den Tools aus dem vorherigen Lauf.",
    author: { name: "Moustachia Balding", role: "CTO, Meridian Labs", avatarUrl: "/images/testimonials/moustachia-balding.png" },
    metrics: [
      { icon: <HugeiconsIcon icon={TimeScheduleIcon} />, label: "80 % der wiederkehrenden Analysen automatisiert" },
      { icon: <HugeiconsIcon icon={Activity03Icon} />, label: "Eine dauerhafte Laufhistorie für jeden Agenten" },
    ] as const,
  },
  {
    id: "beacon-operations",
    logo: <NexaLogo />,
    quote: "Wir ersetzten fragile Polling-Jobs durch Agenten, die auf echte Signale reagieren, durchhalten und im gesetzten Budget bleiben.",
    author: { name: "Dani Raulisa", role: "VP Engineering, NEXA", avatarUrl: "/images/testimonials/dani-raulisa.png" },
    metrics: [
      { icon: <HugeiconsIcon icon={Activity03Icon} />, label: "10× schnellere Reaktion auf Kundensignale" },
      { icon: <HugeiconsIcon icon={TimeScheduleIcon} />, label: "0 verpasste Übergaben in aktiven Workflows" },
    ] as const,
  },
];

export function CustomerStoriesSection() {
  return (
    <section id="customers" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Kundengeschichten</SectionLabel>
              <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
                <span className="block text-foreground">Teams, die schneller werden</span>
                <span className="mt-1 block text-muted-foreground lg:mt-3">mit autonomer Arbeit.</span>
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-4">
              Sehen Sie, wie Operations-Teams wiederkehrende Aufgaben in agentengesteuerte Systeme verwandeln, die agil, kontrollierbar und kontextbezogen bleiben.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {operationsStories.map((story) => (
              <div key={story.id} className="relative overflow-hidden rounded-[14px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]">
                <CustomerStoryStack
                  cases={[story]}
                  className="max-w-none px-0 py-0 lg:py-0"
                  frameClassName="w-full max-w-none"
                  cardClassName="overflow-hidden rounded-[8px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]"
                />
                <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
