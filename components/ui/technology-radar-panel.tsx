import { Asterisk, CircleDot, Hexagon, Sparkles } from "lucide-react";

const radarItems = [
  {
    name: "On-Device-KI",
    detail: "Mehrwert in realen Projekten bestätigt",
    status: "Übernommen",
    icon: Sparkles,
    tone: "text-emerald-400",
    active: true,
  },
  {
    name: "Edge-Computing",
    detail: "Pilot im laufenden Projekt",
    status: "Im Test",
    icon: Hexagon,
    tone: "text-sky-400",
  },
  {
    name: "Neues UI-Framework",
    detail: "Reife und Langzeit-Support werden geprüft",
    status: "Beobachten",
    icon: CircleDot,
    tone: "text-amber-400",
  },
  {
    name: "Kurzlebiger Hype-Trend",
    detail: "Kein echter Nutzen für Kunden",
    status: "Verworfen",
    icon: Asterisk,
    tone: "text-white/25",
    muted: true,
  },
];

const projectMilestones = ["Projekt 01", "Projekt 02", "Projekt 03", "Projekt 04"];

export function TechnologyRadarPanel() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/[0.1] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] text-white">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-4 sm:px-5">
        <h4 className="text-lg font-medium tracking-tight text-white/90 sm:text-xl">Technologie-Radar</h4>
        <div className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-xl border border-white/[0.09] p-1 font-mono text-[8px] uppercase tracking-[0.1em] text-white/35 sm:text-[9px]">
          <span className="shrink-0 rounded-lg bg-white/[0.08] px-2.5 py-2 text-white/80 sm:px-3">Alle</span>
          <span className="shrink-0 px-2 py-2 sm:px-3">Übernommen</span>
          <span className="shrink-0 px-2 py-2 sm:px-3">Im Test</span>
          <span className="shrink-0 px-2 py-2 sm:px-3">Verworfen</span>
        </div>
      </header>

      <div className="space-y-1 px-3 py-3 sm:px-4 sm:py-4">
        {radarItems.map(({ name, detail, status, icon: Icon, tone, active, muted }) => (
          <div
            key={name}
            className={`grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-2 rounded-xl px-2.5 py-2.5 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:gap-3 sm:px-3 sm:py-3 ${active ? "bg-white/[0.045]" : ""} ${muted ? "opacity-35" : ""}`}
          >
            <Icon aria-hidden="true" className={`size-7 sm:size-9 ${tone}`} strokeWidth={1.8} />
            <span className="min-w-0">
              <span className="block truncate text-xs font-medium text-white/85 sm:text-base">{name}</span>
              <span className="mt-0.5 block truncate text-[9px] text-white/40 sm:text-sm">{detail}</span>
            </span>
            <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.08] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.1em] sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[9px] ${tone}`}>
              <span className={`size-1.5 rounded-full bg-current ${muted ? "" : "animate-pulse"}`} />
              {status}
            </span>
          </div>
        ))}
      </div>

      <footer className="border-t border-white/[0.08] px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-white/35 sm:text-[9px]">Weiterentwicklung</span>
          <span className="text-right font-mono text-[9px] text-indigo-300 sm:text-xs">Mit jedem Projekt dazugelernt</span>
        </div>
        <div className="relative mt-3 flex items-center justify-between gap-1 sm:mt-4">
          <span aria-hidden="true" className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-emerald-400/50 via-cyan-400/50 to-indigo-400/60" />
          {projectMilestones.map((milestone) => (
            <span key={milestone} className="relative z-10 rounded-full border border-white/[0.1] bg-[#101012] px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.08em] text-white/55 sm:px-3.5 sm:py-2 sm:text-[9px]">
              {milestone}
            </span>
          ))}
          <span className="relative z-10 rounded-full bg-white px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-black shadow-[0_0_18px_rgba(255,255,255,0.16)] sm:px-4 sm:py-2 sm:text-[9px]">
            Heute
          </span>
        </div>
      </footer>
    </div>
  );
}