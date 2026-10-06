import { MousePointer2, ShieldCheck, Zap } from "lucide-react";

const focusCriteria = [
  {
    title: "Sicherheit",
    detail: "DATENSCHUTZ · ZUGRIFFE · UPDATES",
    icon: ShieldCheck,
    color: "text-cyan-300",
    dot: "bg-cyan-400",
  },
  {
    title: "Intuitive Bedienbarkeit",
    detail: "KLARE WEGE · WENIGER KLICKS",
    icon: MousePointer2,
    color: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  {
    title: "Leistungsfähigkeit",
    detail: "SCHNELL · STABIL · SKALIERBAR",
    icon: Zap,
    color: "text-violet-300",
    dot: "bg-violet-400",
  },
];

const projectPhases = ["KONZEPTION", "UMSETZUNG", "BETREUUNG"];

export function ProductFocusPanel() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] text-white">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-white/[0.08] px-4 py-4 lg:px-5">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <h4 className="text-lg font-medium tracking-tight text-white/90">Produktfokus</h4>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
            Sicherheit · Bedienbarkeit · Leistung
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] text-white/50">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Im Gleichgewicht
        </div>
      </header>

      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative flex min-h-[270px] flex-col items-center justify-center border-b border-white/[0.08] px-5 py-6 lg:border-b-0 lg:border-r">
          <span className="absolute top-5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
            Sicherheit
          </span>
          <svg aria-hidden="true" viewBox="0 0 320 250" className="w-full max-w-[330px] overflow-visible">
            <defs>
              <linearGradient id="product-focus-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="52%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id="product-focus-fill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="55%" stopColor="#10b981" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <polygon points="160,20 20,238 300,238" fill="none" stroke="white" strokeOpacity="0.07" />
            <polygon points="160,54 55,218 265,218" fill="url(#product-focus-fill)" stroke="url(#product-focus-stroke)" strokeWidth="2" />
            <polygon points="160,104 87,218 233,218" fill="none" stroke="white" strokeOpacity="0.08" strokeDasharray="3 5" />
            <path d="M160 54V160M55 218l105-58 105 58M55 218h210" fill="none" stroke="white" strokeOpacity="0.12" strokeDasharray="3 5" />
            <circle cx="160" cy="54" r="13" fill="#22d3ee" fillOpacity="0.15" className="animate-pulse" />
            <circle cx="160" cy="54" r="6" fill="#22d3ee" />
            <circle cx="55" cy="218" r="13" fill="#34d399" fillOpacity="0.15" className="animate-pulse [animation-delay:400ms]" />
            <circle cx="55" cy="218" r="6" fill="#34d399" />
            <circle cx="265" cy="218" r="13" fill="#8b5cf6" fillOpacity="0.16" className="animate-pulse [animation-delay:800ms]" />
            <circle cx="265" cy="218" r="6" fill="#8b5cf6" />
          </svg>
          <div className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
            Bedienbarkeit
          </div>
          <div className="absolute bottom-5 right-5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
            Leistung
          </div>
          <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/50 bg-[#09090a] px-4 py-2.5 text-center shadow-[0_0_24px_rgba(103,232,249,0.12)]">
            <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-indigo-300">
              Gesamtlösung
            </span>
            <span className="mt-1 block whitespace-nowrap text-sm font-medium text-white/90">Ausgewogen</span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-2 p-4 lg:p-5">
          {focusCriteria.map(({ title, detail, icon: Icon, color, dot }, index) => (
            <div
              key={title}
              className={`flex min-w-0 items-center gap-3 rounded-xl px-3 py-3 transition-colors ${index === 0 ? "bg-white/[0.045]" : ""}`}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-black/20">
                <Icon aria-hidden="true" className={`size-5 ${color}`} strokeWidth={1.8} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-white/85">{title}</span>
                <span className="mt-1 block truncate font-mono text-[8px] tracking-[0.1em] text-white/35">
                  {detail}
                </span>
              </span>
              <span className={`size-2 shrink-0 animate-pulse rounded-full ${dot} [animation-duration:2.4s]`} />
            </div>
          ))}
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] px-4 py-3 lg:px-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">In jeder Phase</span>
        <div className="flex flex-wrap gap-2">
          {projectPhases.map((phase) => (
            <span key={phase} className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] px-2.5 py-1.5 font-mono text-[8px] tracking-[0.1em] text-white/55">
              {phase}
              <span className="flex gap-1" aria-hidden="true">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span className="size-1.5 rounded-full bg-violet-400" />
              </span>
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px] text-indigo-300">Produkt im Fokus</span>
      </footer>
    </div>
  );
}