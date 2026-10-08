import { Boxes, CircleCheck, Gauge, ShieldCheck } from "lucide-react";
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
              <div className="flex flex-col border-b border-white/10 p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
                <div className="flex min-h-full flex-col">
                  <div className="flex items-center text-2xl font-bold tracking-[-0.04em] text-foreground" aria-label="Praxi Gate">
                    <svg viewBox="0 0 135.09 27.43" className="h-8 w-auto text-[#a8d9ff]" role="img" aria-hidden="true">
                      <path fill="currentColor" d="M29.62,8.54c0-.26-.02-.53-.04-.79C29.26,3.53,25.7,.08,21.46,.03c-4.45-.06-8.9-.02-13.34,0-1.19,0-2.35,.28-3.4,.85C1.66,2.56,.06,5.17,.03,8.65c-.05,4.93-.01,9.85-.01,14.78,0,1.23,0,2.46,0,3.69,0,.15-.03,.31,.22,.3,.73-.02,1.46,0,2.19-.03,.87-.05,1.59-.45,2.17-1.1,.53-.61,.76-1.33,.77-2.13,0-.29,0-.58,0-.88,.57,0,1.09,0,1.62,0,1.85-.03,3.16-1.27,3.32-3.11,.02-.24-.03-.42-.22-.58-2.93-2.46-3.03-7.49,.33-10.16,1.74-1.39,3.75-1.77,5.92-1.37,3.11,.58,5.5,3.5,5.43,6.67-.05,1.96-.72,3.65-2.26,4.93-.08,.07-.17,.2-.17,.29,.01,1.74,1.12,2.96,2.43,3.2,.72,.13,1.47,.08,2.21,.12,.12,0,.2,0,.31,0,0,.04,0,.18,0,.22,0,.4,0,.79,.05,1.19,.16,1.31,1.14,2.41,2.44,2.62,.81,.13,1.64,.07,2.46,.12,.31,.02,.39-.08,.39-.39,0-6.17,0-12.33,0-18.5Zm-2.71,14.7c-.1,0-.18,.02-.27,.02-.66,0-1.32,0-1.98,0-.08,0-.29,0-.36,0v-.42s0-6.87,0-10.3c0-1.17-.1-2.32-.64-3.38-1.25-2.44-3.22-3.79-5.99-3.84-1.88-.03-3.76,.02-5.64-.01-3.37-.07-6.14,2.61-6.59,5.7-.07,.46-.09,.93-.09,1.4,0,3.49,0,6.99,.01,10.48v.36H2.74c0-.13-.02-.24-.02-.35,0-3.98,.03-7.96,0-11.94-.03-4.08,2.98-7.39,6.68-8.1,.45-.09,.91-.14,1.36-.14,2.64-.01,5.28-.05,7.92,0,3.01,.06,5.36,1.4,7,3.93,.83,1.27,1.21,2.7,1.22,4.21,0,4.02,.01,8.04,.02,12.07,0,.1,0,.2-.01,.33Z" />
                      <g fill="currentColor">
                        <path d="M35.97,20.45V6.98h5.57c.13,0,.3,0,.5,.01,.21,0,.4,.03,.57,.06,.78,.12,1.42,.38,1.93,.78,.51,.4,.89,.9,1.13,1.51s.37,1.28,.37,2.02-.12,1.41-.37,2.02c-.25,.61-.63,1.11-1.14,1.51s-1.15,.66-1.92,.78c-.18,.03-.37,.04-.58,.06-.21,.01-.38,.02-.5,.02h-3.31v4.7h-2.25Zm2.25-6.81h3.22c.12,0,.26,0,.42-.02,.16-.01,.3-.04,.43-.08,.37-.09,.67-.26,.88-.5,.22-.24,.37-.5,.46-.8,.09-.3,.14-.59,.14-.88s-.05-.58-.14-.88c-.09-.3-.24-.57-.46-.81-.21-.24-.51-.4-.88-.5-.13-.04-.27-.06-.43-.07-.16,0-.3-.01-.42-.01h-3.22v4.55Z"/>
                        <path d="M55.72,15.35c.61-.26,1.09-.64,1.44-1.15,.56-.79,.83-1.73,.83-2.83,0-.74-.12-1.42-.37-2.02-.24-.61-.62-1.12-1.13-1.52-.51-.39-1.15-.65-1.93-.77-.17-.03-.36-.05-.57-.06-.21-.01-.37-.02-.5-.02h-5.57v13.47h2.25v-4.7h3.21l2.27,4.7h2.56l-2.49-5.1Zm-5.55-6.25h3.22c.13,0,.27,0,.42,.01,.16,.01,.3,.03,.43,.07,.38,.1,.67,.26,.89,.5,.21,.23,.36,.5,.45,.81,.1,.3,.14,.59,.14,.88s-.04,.58-.14,.88c-.09,.3-.24,.57-.45,.8-.22,.24-.51,.41-.89,.5-.13,.04-.27,.06-.43,.07-.15,.02-.29,.02-.42,.02h-3.22v-4.54Z"/>
                        <path d="M66.88,6.98h-3.3l-4.25,13.47h2.32l.92-2.92h5.3l.93,2.92h2.32l-4.24-13.47Zm-3.65,8.45l1.98-6.26,1.99,6.26h-3.97Z"/>
                        <path d="M71.68,20.45l4.56-6.81-4.43-6.66h2.76l3.07,4.74,3.04-4.74h2.78l-4.43,6.66,4.55,6.81h-2.76l-3.17-4.89-3.18,4.89h-2.78Z"/>
                        <path d="M85.25,20.45V6.98h2.25v13.47h-2.25Z"/>
                        <path d="M95.87,20.73c-.87,0-1.69-.15-2.45-.46-.76-.31-1.43-.76-2.01-1.36-.58-.6-1.03-1.33-1.35-2.2-.32-.87-.49-1.87-.49-2.99,0-1.47,.27-2.73,.82-3.77,.55-1.04,1.3-1.84,2.25-2.4,.95-.56,2.03-.84,3.23-.84,1.66,0,2.97,.39,3.94,1.15,.97,.77,1.63,1.85,1.97,3.24l-2.3,.36c-.26-.8-.67-1.44-1.25-1.91-.58-.48-1.32-.72-2.22-.72-.9-.01-1.66,.18-2.25,.59-.6,.41-1.05,.98-1.35,1.71-.3,.74-.45,1.6-.45,2.58s.15,1.84,.45,2.57c.3,.73,.75,1.29,1.35,1.7,.6,.41,1.35,.61,2.26,.63,.68,0,1.27-.12,1.79-.37,.51-.25,.93-.64,1.25-1.15,.32-.51,.54-1.16,.65-1.93h-2.38v-1.77h4.77c.01,.1,.02,.25,.03,.44s0,.31,0,.35c0,1.27-.25,2.4-.75,3.39-.5,.99-1.22,1.76-2.16,2.32-.94,.56-2.06,.84-3.36,.84Z"/>
                        <path d="M110.25,6.98h-3.31l-4.24,13.47h2.32l.92-2.92h5.3l.93,2.92h2.32l-4.24-13.47Zm-3.65,8.45l1.97-6.27,2,6.27h-3.97Z"/>
                        <path d="M118.28,20.45V9.09h-4.36v-2.11h10.97v2.11h-4.36v11.35h-2.25Z"/>
                        <path d="M126.39,20.45V6.98h8.7v2.11h-6.44v3.32h5.32v2.11h-5.32v3.81h6.44v2.11h-8.7Z"/>
                      </g>
                    </svg>
                  </div>
                  <p className="mt-5 max-w-sm text-xl leading-snug text-foreground/90">
                    Agentensysteme, die mitdenken. Und mit Ihnen wachsen.
                  </p>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Qronos orchestriert wiederkehrende Aufgaben, erkennt Engpässe und hält jedes Team im gleichen Takt.
                  </p>
                  <div className="mt-auto pt-7 pb-1">
                    <a
                      href="https://www.praxigate.de/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 self-start rounded-md border border-[#a8d9ff]/60 bg-[#a8d9ff]/10 px-4 py-2 text-sm font-medium text-[#cfeeff] transition-colors hover:bg-[#a8d9ff]/20"
                    >
                      PraxiGate besuchen
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[360px] overflow-hidden p-5 sm:p-8 lg:min-h-[430px] lg:p-10">
                <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:42px_42px]" />
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8d9ff]/10 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
                <div className="relative flex h-full min-h-[320px] items-center justify-center">
                  <div className="absolute left-[42%] top-1/2 hidden h-px w-[8%] bg-gradient-to-r from-[#a8d9ff]/0 via-[#a8d9ff]/60 to-[#a8d9ff]/60 sm:block animate-[pulse_3.5s_ease-in-out_infinite]" />
                  <div className="absolute right-[42%] top-1/2 hidden h-px w-[8%] bg-gradient-to-l from-[#a8d9ff]/60 via-[#a8d9ff]/60 to-[#a8d9ff]/0 sm:block animate-[pulse_4s_ease-in-out_infinite]" />
                  <div className="absolute left-1/2 top-[18%] h-[32%] w-px bg-gradient-to-b from-transparent via-[#a8d9ff]/60 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />
                  <div className="absolute bottom-[18%] left-1/2 h-[32%] w-px bg-gradient-to-t from-transparent via-cyan-300/40 to-transparent animate-[pulse_3.8s_ease-in-out_infinite]" />

                  <div className="relative z-10 flex size-28 items-center justify-center rounded-[4px] border border-[#a8d9ff]/40 bg-[#12151a] shadow-[0_0_50px_rgba(168,217,255,0.16)] animate-[float_6s_ease-in-out_infinite]">
                    <div className="flex size-14 items-center justify-center rounded-[4px] border border-[#a8d9ff]/50 bg-[#a8d9ff]/15 text-[#cfeeff] animate-[pulse_4s_ease-in-out_infinite]">
                      <Boxes aria-hidden="true" size={27} strokeWidth={1.4} />
                    </div>
                  </div>

                  <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center sm:flex">
                    <div className="h-px w-8 bg-gradient-to-r from-[#a8d9ff]/60 to-transparent" />
                    <div className="border border-white/10 bg-[#11141a] px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Input</p>
                      <p className="mt-1 text-sm text-foreground">Daten & Aufgaben</p>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center sm:flex">
                    <div className="border border-violet-300/20 bg-[#11141a] px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Output</p>
                      <p className="mt-1 text-sm text-foreground">Klarheit & Tempo</p>
                    </div>
                    <div className="h-px w-8 bg-gradient-to-l from-[#a8d9ff]/60 to-transparent" />
                  </div>
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 border border-white/10 bg-[#11141a] px-4 py-3 text-center animate-[float_6.5s_ease-in-out_infinite]">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Agents</p>
                    <p className="mt-1 text-sm text-foreground">Zusammen arbeiten</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-cyan-300/20 bg-[#11141a] px-4 py-3 text-center animate-[float_7.5s_ease-in-out_infinite]">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Control</p>
                    <p className="mt-1 text-sm text-foreground">Sie behalten den Überblick</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-3">
              {productSignals.map(({ label, value, icon: Icon }, index) => (
                <div key={label} className={`flex items-center gap-3 p-5 ${index < productSignals.length - 1 ? "border-b border-white/10 sm:border-r sm:border-b-0" : ""}`}>
                  <Icon aria-hidden="true" className="text-[#a8d9ff]" size={17} strokeWidth={1.5} />
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