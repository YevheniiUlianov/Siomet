"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { AgentInboxPanel } from "@/components/ui/agent-inbox-panel";
import { FlexibleSchedulingPanel } from "@/components/ui/flexible-scheduling-panel";
import { GuardrailsControlPanel } from "@/components/ui/guardrails-control-panel";
import { AIAgentPipeline } from "@/components/ui/ai-agent-pipeline";
import { SectionLabel } from "@/components/ui/section-label";

const triggerFeatures = [
  {
    title: "Leistung",
    description: "Qualität, Kundenzufriedenheit und realistische Zielsetzungen prägen unsere Arbeit – von der Konzeption über die Umsetzung bis zur Betreuung nach Projektabschluss.",
    detail: "agent handoffs",
  },
  {
    title: "Fokus auf Produkt",
    description: "In jeder Projektphase verbinden wir Sicherheit, intuitive Bedienbarkeit und hohe Leistungsfähigkeit zu einer ausgewogenen Gesamtlösung.",
    detail: "time · event · adaptive",
  },
  {
    title: "Höchste Sicherheit",
    description: "Sicherheit ist bei Siomet von Anfang an Bestandteil des Konzepts. Wir optimieren die Performance, schützen Daten und integrieren geeignete Schutzmechanismen bereits in der Planungsphase.",
    detail: "daily caps · timeouts",
  },
  {
    title: "Qualität an erster Stelle",
    description: "Penetrationstests und kontinuierliche Qualitätskontrollen begleiten unsere Produkte von der Entwicklung bis in den laufenden Betrieb. So sichern wir dauerhaft hohe Performance und Zuverlässigkeit für die Nutzer.",
    detail: "results · approvals · alerts",
  },
  {
    title: "Innovative Instrumente",
    description: "Siomet setzt gezielt die Werkzeuge ein, die optimal zu den Anforderungen, der Hardware und dem jeweiligen Einsatzszenario passen.",
    detail: "state · artifacts · memory",
  },
  {
    title: "Immer auf dem neuesten Stand",
    description: "Siomet bleibt technologisch auf dem neuesten Stand, ohne jedem Trend zu folgen. Entscheidend ist für uns, mit jedem Projekt gezielt dazuzulernen und Lösungen sinnvoll weiterzuentwickeln.",
    detail: "review · audit · approvals",
  },
];

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const guardrailBeamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const beamFrame = guardrailBeamRef.current;
    if (!beamFrame) return;

    const updateBeamPath = () => {
      const width = beamFrame.offsetWidth;
      const height = beamFrame.offsetHeight;
      const radius = 13;

      beamFrame.style.setProperty(
        "--guardrail-beam-path",
        `path('M ${radius} 1 H ${width - radius} Q ${width - 1} 1 ${width - 1} ${radius} V ${height - radius} Q ${width - 1} ${height - 1} ${width - radius} ${height - 1} H ${radius} Q 1 ${height - 1} 1 ${height - radius} V ${radius} Q 1 1 ${radius} 1')`,
      );
    };

    updateBeamPath();
    const resizeObserver = new ResizeObserver(updateBeamPath);
    resizeObserver.observe(beamFrame);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="mx-0 grid items-end gap-8 lg:mx-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Unsere Prinzipien</SectionLabel>
            <h2
              className={`font-display text-[37px] leading-[0.95] tracking-tight transition-all duration-1000 lg:text-[48px] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="block text-foreground">Warum Unternehmen</span>
              <span className="mt-1 block text-muted-foreground lg:mt-3">sich für Siomet entscheiden</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p
              className={`text-xl leading-relaxed text-muted-foreground transition-all delay-200 duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Sicherheit, Qualität und der richtige Werkzeugkasten – in jeder Phase eines Projekts.
            </p>
          </div>
        </div>

        <div
          className={`mx-0 mt-8 grid overflow-hidden rounded-xl border border-white/[0.12] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.055),transparent_70%),linear-gradient(#0a0a0c,#070708)] transition-all delay-300 duration-1000 md:grid-cols-2 lg:mx-5 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {triggerFeatures.map((feature, index) => (
            <>
              <article
                key={feature.title}
                className={`group relative flex min-h-[620px] flex-col overflow-hidden px-[15px] py-5 lg:p-10 ${
                  index < 2 ? "border-b border-white/[0.12]" : ""
                } ${index % 2 === 0 ? "md:border-r md:border-white/[0.12]" : ""} ${
                  index === 1 || index === 3 ? "md:pb-0" : ""
                }`}
              >
              {feature.title === "Multi-Agent Pipelines" || feature.title === "Leistung" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.09] p-[5px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
                      <AIAgentPipeline />
                      <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                    </div>
                  </div>
                </>
              ) : feature.title === "Fokus auf Produkt" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.09] p-[5px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
                      <FlexibleSchedulingPanel />
                      <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                    </div>
                  </div>
                </>
              ) : feature.title === "Höchste Sicherheit" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base font-medium leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full">
                      <div className="relative overflow-hidden rounded-[14px] border border-white/[0.09] p-[5px] md:mr-[75px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
                        <GuardrailsControlPanel />
                        <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                      </div>
                      <div
                        ref={guardrailBeamRef}
                        aria-hidden="true"
                        className="absolute right-0 top-1/2 z-10 hidden w-44 -translate-y-1/2 isolate overflow-hidden rounded-[14px] border border-white/[0.18] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[-18px_22px_36px_rgba(0,0,0,0.55)] md:block"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute left-[1.125rem] top-0 z-30 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0"
                        />
                        <div
                          aria-hidden="true"
                          className="animate-star-btn pointer-events-none absolute inset-0 z-10 aspect-square w-[110px] bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
                          style={
                            {
                              "--duration": 5,
                              "--light-color": "#FAFAFA",
                              offsetPath: "var(--guardrail-beam-path)",
                              offsetDistance: "0%",
                            } as CSSProperties
                          }
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-[2px] z-[15] rounded-[12px] bg-[linear-gradient(145deg,rgba(19,19,21,1),rgba(7,7,8,1))]"
                        />
                        <div className="relative z-20 rounded-[10px] bg-[linear-gradient(145deg,rgba(19,19,21,1),rgba(7,7,8,1))] p-3">
                          <div className="rounded-lg border border-white/[0.14] bg-white/[0.05] px-2 py-1.5 text-[10px] font-medium text-white/90">
                            Require approval
                          </div>
                          <div className="mt-2 space-y-1 border-t border-white/[0.08] pt-2 text-[9px]">
                            <div className="flex items-center justify-between rounded px-1.5 py-1 text-white/45">
                              <span>Monitor</span>
                            </div>
                            <div className="flex items-center justify-between rounded bg-white/[0.08] px-1.5 py-1 text-white/90">
                              <span>Require approval</span>
                              <svg viewBox="0 0 12 12" aria-hidden="true" className="size-2.5 text-emerald-300">
                                <circle cx="6" cy="6" r="5" fill="currentColor" />
                                <path d="m3.5 6.1 1.6 1.6 3.5-3.4" fill="none" stroke="#07110c" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="flex items-center justify-between rounded px-1.5 py-1 text-white/45">
                              <span>Block</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : feature.title === "Built-in guardrails" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base font-medium leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full">
                      <div className="relative overflow-hidden rounded-[14px] border border-white/[0.09] p-[5px] md:mr-[75px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
                        <GuardrailsControlPanel />
                        <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                      </div>
                      <div
                        ref={guardrailBeamRef}
                        aria-hidden="true"
                        className="absolute right-0 top-1/2 z-10 hidden w-44 -translate-y-1/2 isolate overflow-hidden rounded-[14px] border border-white/[0.18] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[-18px_22px_36px_rgba(0,0,0,0.55)] md:block"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute left-[1.125rem] top-0 z-30 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0"
                        />
                        <div
                          aria-hidden="true"
                          className="animate-star-btn pointer-events-none absolute inset-0 z-10 aspect-square w-[110px] bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
                          style={
                            {
                              "--duration": 5,
                              "--light-color": "#FAFAFA",
                              offsetPath: "var(--guardrail-beam-path)",
                              offsetDistance: "0%",
                            } as CSSProperties
                          }
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-[2px] z-[15] rounded-[12px] bg-[linear-gradient(145deg,rgba(19,19,21,1),rgba(7,7,8,1))]"
                        />
                        <div className="relative z-20 rounded-[10px] bg-[linear-gradient(145deg,rgba(19,19,21,1),rgba(7,7,8,1))] p-3">
                          <div className="rounded-lg border border-white/[0.14] bg-white/[0.05] px-2 py-1.5 text-[10px] font-medium text-white/90">
                            Require approval
                          </div>
                          <div className="mt-2 space-y-1 border-t border-white/[0.08] pt-2 text-[9px]">
                            <div className="flex items-center justify-between rounded px-1.5 py-1 text-white/45">
                              <span>Monitor</span>
                            </div>
                            <div className="flex items-center justify-between rounded bg-white/[0.08] px-1.5 py-1 text-white/90">
                              <span>Require approval</span>
                              <svg viewBox="0 0 12 12" aria-hidden="true" className="size-2.5 text-emerald-300">
                                <circle cx="6" cy="6" r="5" fill="currentColor" />
                                <path d="m3.5 6.1 1.6 1.6 3.5-3.4" fill="none" stroke="#07110c" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="flex items-center justify-between rounded px-1.5 py-1 text-white/45">
                              <span>Block</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : feature.title === "Qualität an erster Stelle" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.09] p-[5px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
                      <AgentInboxPanel />
                      <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                    </div>
                  </div>
                </>
              ) : feature.title === "Agent Inbox" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.09] p-[5px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
                      <AgentInboxPanel />
                      <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                    </div>
                  </div>
                </>
              ) : feature.title === "Innovative Instrumente" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative h-[270px] w-full overflow-hidden rounded-[14px] border border-white/[0.09] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.12),transparent_26%),linear-gradient(180deg,rgba(17,17,18,0.96),rgba(7,7,8,0.98))]">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />

                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(45,212,191,0.14)]">
                        <div className="absolute inset-2 rounded-full border border-cyan-400/35 animate-[spin_14s_linear_infinite]" />
                        <div className="absolute inset-5 rounded-full border border-violet-400/35 animate-[spin_20s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-cyan-400/25 to-violet-500/25 shadow-[0_0_32px_rgba(59,130,246,0.25)]">
                            <div className="flex gap-1">
                              <span className="block h-2.5 w-2.5 rounded-full bg-cyan-300" />
                              <span className="block h-2.5 w-2.5 rounded-full bg-violet-300" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute left-[14%] top-[16%] flex w-24 -translate-y-1 animate-[float_5s_ease-in-out_infinite] flex-col gap-2 rounded-xl border border-white/10 bg-[rgba(16,16,19,0.8)] p-2 shadow-[0_16px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                        <span className="h-1.5 w-12 rounded-full bg-cyan-400/90" />
                        <span className="h-1.5 w-16 rounded-full bg-white/20" />
                        <span className="h-1.5 w-10 rounded-full bg-violet-400/90" />
                      </div>

                      <div className="absolute bottom-[16%] left-[18%] flex w-28 animate-[float_5.4s_ease-in-out_infinite_0.8s] flex-col gap-2 rounded-xl border border-white/10 bg-[rgba(16,16,19,0.8)] p-2 shadow-[0_16px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                        <span className="h-1.5 w-14 rounded-full bg-violet-400/90" />
                        <span className="h-1.5 w-20 rounded-full bg-white/20" />
                        <span className="h-1.5 w-11 rounded-full bg-cyan-400/90" />
                      </div>

                      <div className="absolute right-[12%] top-[18%] flex w-24 animate-[float_4.8s_ease-in-out_infinite_1.2s] flex-col gap-2 rounded-xl border border-white/10 bg-[rgba(16,16,19,0.8)] p-2 shadow-[0_16px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                        <span className="h-1.5 w-10 rounded-full bg-cyan-400/90" />
                        <span className="h-1.5 w-16 rounded-full bg-white/20" />
                        <span className="h-1.5 w-12 rounded-full bg-violet-400/90" />
                      </div>

                      <div className="absolute inset-x-[18%] bottom-[14%] h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                      <div className="absolute left-[26%] top-[30%] h-20 w-px bg-gradient-to-b from-transparent via-violet-400/60 to-transparent" />
                      <div className="absolute right-[26%] top-[30%] h-20 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </>
              ) : feature.title === "Flexible scheduling" ? (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.09] p-[5px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
                      <FlexibleSchedulingPanel />
                      <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{feature.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">{feature.description}</p>
                  </div>
                  <div aria-hidden="true" className="relative h-64 overflow-hidden rounded-t-lg border border-b-0 border-white/[0.09] bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_55%)] lg:h-72">
                    <div className="absolute inset-x-4 top-4 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-white/20" />
                      <span className="size-1.5 rounded-full bg-white/15" />
                      <span className="size-1.5 rounded-full bg-white/10" />
                    </div>
                    <div className="absolute inset-x-5 bottom-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute bottom-5 left-[18%] size-2 rotate-45 border border-white/35" />
                    <div className="absolute bottom-5 left-1/2 size-2 rotate-45 border border-white/35" />
                    <div className="absolute bottom-5 right-[18%] size-2 rotate-45 border border-white/35" />
                    <span className="absolute bottom-7 left-[18%] h-10 w-px bg-gradient-to-t from-transparent to-white/15" />
                    <span className="absolute bottom-7 left-1/2 h-16 w-px bg-gradient-to-t from-transparent to-white/15" />
                    <span className="absolute bottom-7 right-[18%] h-7 w-px bg-gradient-to-t from-transparent to-white/15" />
                    <span className="absolute bottom-3 left-5 font-mono text-[10px] text-white/30">{feature.detail}</span>
                  </div>
                </>
              )}
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0 transition-all duration-500 group-hover:w-full" />
              </article>
              {index === 3 ? <div className="col-span-full h-px bg-[#2a2d31]" /> : null}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
