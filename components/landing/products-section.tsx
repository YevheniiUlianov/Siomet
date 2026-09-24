import { ArrowUpRight, Boxes, CircleCheck, Gauge, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

const productSignals = [
  { label: "Workflows", value: "24 active", icon: Boxes },
  { label: "Reliability", value: "99.99%", icon: Gauge },
  { label: "Guardrails", value: "Enabled", icon: ShieldCheck },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Produkte</SectionLabel>
              <h2 className="max-w-3xl font-display text-[37px] leading-[0.95] tracking-tight lg:text-[58px]">
                <span className="block text-foreground">Intelligente Lösungen</span>
                <span className="mt-2 block text-muted-foreground lg:mt-3">für Ihre Anforderungen.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-2 lg:text-xl">
              Von der Idee bis zum laufenden System: Wir verbinden Menschen, Daten und Prozesse in einer Plattform.
            </p>
          </div>

          <article className="mt-10 overflow-hidden rounded-[4px] border border-white/10 bg-[#090b10] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
                <div>
                  <div className="flex items-center gap-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    <span>Qro</span><span className="text-orange-400">nos</span>
                  </div>
                  <p className="mt-5 max-w-sm text-xl leading-snug text-foreground/90">
                    Agentensysteme, die mitdenken. Und mit Ihnen wachsen.
                  </p>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Qronos orchestriert wiederkehrende Aufgaben, erkennt Engpässe und hält jedes Team im gleichen Takt.
                  </p>
                </div>
                <a
                  href="#features"
                  className="mt-10 inline-flex w-fit items-center gap-3 border border-white/20 px-4 py-3 text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-orange-400/70 hover:text-orange-300"
                >
                  Mehr erfahren
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              </div>

              <div className="relative min-h-[360px] overflow-hidden p-5 sm:p-8 lg:min-h-[430px] lg:p-10">
                <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:42px_42px]" />
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-3xl" />
                <div className="relative flex h-full min-h-[320px] items-center justify-center">
                  <div className="absolute left-0 top-1/2 hidden h-px w-[25%] bg-gradient-to-r from-transparent to-orange-300/50 sm:block" />
                  <div className="absolute right-0 top-1/2 hidden h-px w-[25%] bg-gradient-to-l from-transparent to-violet-300/50 sm:block" />
                  <div className="absolute left-1/2 top-[18%] h-[32%] w-px bg-gradient-to-b from-transparent via-orange-300/50 to-transparent" />
                  <div className="absolute bottom-[18%] left-1/2 h-[32%] w-px bg-gradient-to-t from-transparent via-cyan-300/40 to-transparent" />

                  <div className="relative z-10 flex size-28 items-center justify-center rounded-[4px] border border-orange-300/40 bg-[#12151a] shadow-[0_0_50px_rgba(251,146,60,0.16)]">
                    <div className="flex size-14 items-center justify-center rounded-[4px] border border-orange-300/50 bg-orange-400/15 text-orange-300">
                      <Boxes aria-hidden="true" size={27} strokeWidth={1.4} />
                    </div>
                  </div>

                  <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 border border-white/10 bg-[#11141a] px-4 py-3 sm:block">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Input</p>
                    <p className="mt-1 text-sm text-foreground">Daten & Aufgaben</p>
                  </div>
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 border border-violet-300/20 bg-[#11141a] px-4 py-3 sm:block">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Output</p>
                    <p className="mt-1 text-sm text-foreground">Klarheit & Tempo</p>
                  </div>
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 border border-white/10 bg-[#11141a] px-4 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Agents</p>
                    <p className="mt-1 text-sm text-foreground">arbeiten zusammen</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-cyan-300/20 bg-[#11141a] px-4 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Control</p>
                    <p className="mt-1 text-sm text-foreground">Sie behalten den Überblick</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-3">
              {productSignals.map(({ label, value, icon: Icon }, index) => (
                <div key={label} className={`flex items-center gap-3 p-5 ${index < productSignals.length - 1 ? "border-b border-white/10 sm:border-r sm:border-b-0" : ""}`}>
                  <Icon aria-hidden="true" className="text-orange-300" size={17} strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground"><CircleCheck aria-hidden="true" size={13} className="text-cyan-300" />{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}