import { Check } from "lucide-react";

const checks = [
  { type: "ENTWICKL.", label: "Code-Review & automatisierte Tests", status: "OK", complete: true },
  { type: "TEST", label: "Penetrationstest durchgeführt", status: "BESTANDEN", complete: true, highlight: true },
  { type: "TEST", label: "Lasttest unter Spitzenlast", status: "OK", complete: true },
  { type: "RELEASE", label: "Qualitätsfreigabe erteilt", status: "OK", complete: true },
  { type: "BETRIEB", label: "Performance-Monitoring", status: "LIVE", live: true },
  { type: "BETRIEB", label: "Nächster Penetrationstest", status: "GEPLANT", planned: true },
];

const reliabilityBars = Array.from({ length: 36 });

export function QualityControlPanel() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/[0.1] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] text-white">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] px-4 py-3.5 sm:px-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h4 className="text-base font-medium tracking-tight text-white/90 sm:text-lg">Qualitätskontrolle</h4>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.025] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/55 sm:text-[9px]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Kontinuierlich
          </span>
        </div>
        <span className="font-mono text-[9px] text-white/35">Entwicklung → Betrieb</span>
      </header>

      <div className="grid md:grid-cols-[1.45fr_0.95fr]">
        <div className="flex flex-col justify-center gap-1.5 border-b border-white/[0.08] p-3 sm:p-4 md:border-b-0 md:border-r">
          {checks.map((check) => (
            <div
              key={check.label}
              className={`grid grid-cols-[58px_minmax(0,1fr)_auto] items-center gap-2 rounded-lg px-2 py-2.5 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:gap-3 ${check.highlight ? "bg-white/[0.045]" : ""} ${check.planned ? "opacity-35" : ""}`}
            >
              <span className="truncate rounded-md border border-white/[0.09] px-1.5 py-1 text-center font-mono text-[7px] uppercase tracking-[0.09em] text-white/45 sm:text-[8px]">
                {check.type}
              </span>
              <span className="min-w-0 truncate text-[10px] text-white/75 sm:text-xs">{check.label}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.1em] text-white/40 sm:text-[8px]">
                {check.complete ? (
                  <span className="flex size-4 items-center justify-center rounded-full bg-emerald-400 text-[#07110c]">
                    <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
                  </span>
                ) : check.live ? (
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)] animate-pulse" />
                ) : (
                  <span className="size-2 rounded-full border border-white/30" />
                )}
                <span className="hidden sm:inline">{check.status}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-rows-[1fr_auto]">
          <div className="min-w-0 border-b border-white/[0.08] p-4 sm:p-5">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.13em] text-white/35">
              <span>Performance</span>
              <span className="inline-flex items-center gap-2 text-indigo-300">
                <span className="size-2 rounded-full bg-indigo-300 animate-pulse" />
                Live
              </span>
            </div>
            <p className="mt-1 font-mono text-lg text-white/85 sm:text-xl">Konstant hoch</p>
            <svg aria-hidden="true" viewBox="0 0 320 110" preserveAspectRatio="none" className="mt-3 h-[74px] w-full sm:h-[90px]">
              <defs>
                <linearGradient id="quality-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
                <linearGradient id="quality-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 48H320M0 78H320" stroke="rgba(255,255,255,0.07)" strokeDasharray="2 5" />
              <path d="M0 108V62L14 56L23 57L37 44L48 43L57 32L65 34L77 24L88 28L101 23L116 28L128 19L140 22L151 15L164 20L173 11L184 17L197 9L210 12L222 18L234 13L248 17L263 16L275 21L286 27L300 25L310 29L320 24V108Z" fill="url(#quality-fill)" />
              <path d="M0 62L14 56L23 57L37 44L48 43L57 32L65 34L77 24L88 28L101 23L116 28L128 19L140 22L151 15L164 20L173 11L184 17L197 9L210 12L222 18L234 13L248 17L263 16L275 21L286 27L300 25L310 29L320 24" fill="none" stroke="url(#quality-line)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              <circle cx="312" cy="27" r="8" fill="#a78bfa" fillOpacity="0.2" className="animate-pulse" />
              <circle cx="312" cy="27" r="4" fill="#fff" />
            </svg>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.13em] text-white/35">
              <span>Zuverlässigkeit</span>
              <span className="text-emerald-300">Stabil</span>
            </div>
            <div className="mt-3 flex h-8 items-stretch gap-[3px] overflow-hidden">
              {reliabilityBars.map((_, index) => (
                <span
                  key={index}
                  className="min-w-[3px] flex-1 rounded-sm bg-emerald-400"
                  style={{ opacity: 0.68 + (index % 4) * 0.08, animation: `pulse 2.2s ease-in-out ${index * 45}ms infinite` }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[7px] uppercase tracking-[0.12em] text-white/25">
              <span>Release</span>
              <span>Heute</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] px-4 py-3 sm:px-5">
        <span className="font-mono text-[9px] text-white/30">Penetrationstests · Qualitätskontrollen · Monitoring</span>
        <span className="font-mono text-[10px] text-indigo-300">Qualität an erster Stelle</span>
      </footer>
    </div>
  );
}