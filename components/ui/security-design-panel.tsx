import { LockKeyhole, ShieldCheck } from "lucide-react";

const outcomes = [
  { label: "Performance", value: "Optimiert", color: "bg-cyan-300" },
  { label: "Daten", value: "Geschützt", color: "bg-emerald-300" },
  { label: "Schutzmechanismen", value: "Integriert", color: "bg-violet-300" },
];

export function SecurityDesignPanel() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/[0.1] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] text-white">
      <header className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="truncate font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
            Security by design · Aktiv
          </span>
        </div>
        <span className="shrink-0 text-[10px] text-white/40">Höchste Sicherheit</span>
      </header>

      <div className="relative h-[220px] overflow-hidden sm:h-[245px]">
        <svg aria-hidden="true" viewBox="0 0 640 270" preserveAspectRatio="xMidYMax meet" className="absolute inset-x-0 bottom-0 h-full w-full">
          <path d="M50 270 A270 270 0 0 1 590 270" fill="rgba(139,92,246,0.035)" stroke="rgba(139,92,246,0.55)" strokeWidth="2" />
          <path d="M115 270 A205 205 0 0 1 525 270" fill="rgba(16,185,129,0.035)" stroke="rgba(52,211,153,0.4)" strokeWidth="2" />
          <path d="M180 270 A140 140 0 0 1 460 270" fill="rgba(6,182,212,0.04)" stroke="rgba(103,232,249,0.45)" strokeWidth="2" />
          <path d="M25 270 H615" stroke="rgba(255,255,255,0.08)" />
          {Array.from({ length: 35 }).map((_, index) => {
            const angle = 198 + index * 4.6;
            const radians = (angle * Math.PI) / 180;
            const innerRadius = 276;
            const outerRadius = index % 5 === 0 ? 290 : 284;
            const x1 = Math.round(320 + Math.cos(radians) * innerRadius);
            const y1 = Math.round(270 + Math.sin(radians) * innerRadius);
            const x2 = Math.round(320 + Math.cos(radians) * outerRadius);
            const y2 = Math.round(270 + Math.sin(radians) * outerRadius);
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            );
          })}
          <circle cx="320" cy="0" r="5" fill="#a78bfa" className="animate-pulse" />
          <circle cx="77" cy="117" r="5" fill="#a78bfa" className="animate-pulse [animation-delay:400ms]" />
          <circle cx="563" cy="117" r="5" fill="#a78bfa" className="animate-pulse [animation-delay:800ms]" />
          <circle cx="173" cy="115" r="5" fill="#a7f3d0" className="animate-pulse [animation-delay:300ms]" />
          <circle cx="467" cy="115" r="5" fill="#a7f3d0" className="animate-pulse [animation-delay:700ms]" />
          <circle cx="180" cy="210" r="5" fill="#67e8f9" className="animate-pulse [animation-delay:200ms]" />
          <circle cx="460" cy="210" r="5" fill="#67e8f9" className="animate-pulse [animation-delay:600ms]" />
        </svg>

        <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-white/[0.12] bg-[#101012] px-3 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/60">
          Schutzmechanismen
        </span>
        <span className="absolute left-1/2 top-[29%] -translate-x-1/2 rounded-full border border-white/[0.12] bg-[#101012] px-3 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/60">
          Datenschutz
        </span>
        <span className="absolute left-1/2 top-[56%] -translate-x-1/2 rounded-full border border-white/[0.12] bg-[#101012] px-3 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/60">
          Performance
        </span>
        <div className="absolute bottom-0 left-1/2 z-10 flex w-[122px] -translate-x-1/2 flex-col items-center rounded-t-xl border-x border-t border-white/55 bg-[#080809] px-3 pb-3 pt-2 shadow-[0_0_24px_rgba(103,232,249,0.1)] sm:w-[140px]">
          <ShieldCheck aria-hidden="true" className="size-5 text-white/85" strokeWidth={1.8} />
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-indigo-300">Kern</span>
          <span className="mt-0.5 whitespace-nowrap text-sm font-medium text-white/90">Ihre Daten</span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-y border-white/[0.08] bg-white/[0.018] px-3 py-3 sm:gap-3 sm:px-4">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.04] sm:size-9">
          <LockKeyhole aria-hidden="true" className="size-4 text-white/80" />
        </span>
        <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.1em] text-white/65">Planung</span>
        <span className="shrink-0 rounded-md bg-white px-2 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-black sm:text-[8px]">
          Schutz ab Tag 1
        </span>
        <span className="h-px min-w-2 flex-1 bg-indigo-400/50" />
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] sm:size-9">
          <span className="size-1.5 rounded-full bg-indigo-400" />
        </span>
        <span className="hidden shrink-0 font-mono text-[8px] uppercase tracking-[0.1em] text-white/45 sm:inline">Umsetzung</span>
        <span className="h-px min-w-2 flex-1 bg-indigo-400/50" />
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] sm:size-9">
          <span className="size-1.5 rounded-full bg-indigo-400" />
        </span>
        <span className="hidden shrink-0 font-mono text-[8px] uppercase tracking-[0.1em] text-white/45 sm:inline">Betrieb</span>
      </div>

      <footer className="grid grid-cols-3 divide-x divide-white/[0.08]">
        {outcomes.map((outcome) => (
          <div key={outcome.label} className="min-w-0 px-3 py-3 sm:px-4">
            <span className="flex items-center gap-1.5 truncate font-mono text-[7px] uppercase tracking-[0.11em] text-white/35 sm:text-[8px]">
              <span className={`size-1.5 shrink-0 rounded-full ${outcome.color}`} />
              {outcome.label}
            </span>
            <span className="mt-1.5 block truncate font-mono text-xs text-white/80 sm:text-sm">{outcome.value}</span>
          </div>
        ))}
      </footer>
    </div>
  );
}