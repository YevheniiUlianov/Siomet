import {
  Check,
  ChevronDown,
  ClipboardCheck,
  Cpu,
  Layers,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const instrumentOptions = [
  {
    title: "Anforderungsanalyse",
    description: "Klärt, was die Lösung leisten muss",
    status: "Abgestimmt",
    icon: ClipboardCheck,
  },
  {
    title: "Hardware-Kompatibilität",
    description: "Passt Werkzeuge an Geräte und Leistung an",
    status: "Optimiert",
    icon: Cpu,
  },
  {
    title: "Einsatzszenario",
    description: "Wählt Werkzeuge passend zum Umfeld",
    status: "Passgenau",
    icon: Target,
    active: true,
  },
  {
    title: "Technologie-Stack",
    description: "Kombiniert nur geeignete Werkzeuge",
    status: "Gut abgestimmt",
    icon: Layers,
  },
  {
    title: "Innovation",
    description: "Prüft neue Ansätze auf echten Mehrwert",
    status: "Bewertet",
    icon: Sparkles,
  },
  {
    title: "Skalierung",
    description: "Wächst mit Anforderungen und Nutzung",
    status: "Vorbereitet",
    icon: TrendingUp,
    muted: true,
  },
];

export function InstrumentSelectionPanel() {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-white/[0.1] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-3 text-white sm:p-4">
      <div className="space-y-1">
        {instrumentOptions.map(({ title, description, status, icon: Icon, active, muted }) => (
          <div
            key={title}
            className={`grid grid-cols-[36px_minmax(0,1fr)_minmax(108px,0.55fr)] items-center gap-2 rounded-xl px-2 py-2.5 sm:grid-cols-[48px_minmax(0,1fr)_minmax(150px,0.6fr)] sm:gap-3 sm:px-3 ${active ? "bg-white/[0.025]" : ""} ${muted ? "opacity-35" : ""}`}
          >
            <span className={`flex size-9 items-center justify-center rounded-xl border bg-black/10 sm:size-11 ${active ? "border-emerald-300/70 text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.2)]" : "border-white/[0.09] text-white/65"}`}>
              <Icon aria-hidden="true" className="size-4 sm:size-5" strokeWidth={1.8} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-medium text-white/85 sm:text-sm">{title}</span>
              <span className="mt-0.5 block truncate text-[9px] text-white/40 sm:text-xs">{description}</span>
            </span>
            <span className="flex h-10 min-w-0 items-center justify-between gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.015] px-2 text-[10px] text-white/50 sm:h-12 sm:px-3 sm:text-sm">
              <span className="truncate">{status}</span>
              <ChevronDown aria-hidden="true" className="size-3 shrink-0 text-white/35 sm:size-4" />
            </span>
          </div>
        ))}
      </div>

      <div className="absolute right-3 top-[38%] z-10 w-[190px] rounded-2xl border border-white/[0.12] bg-[#151516] p-2.5 shadow-[0_20px_48px_rgba(0,0,0,0.65)] sm:right-[7%] sm:w-[230px] sm:p-3">
        <div className="flex h-11 items-center rounded-xl border border-white/[0.1] bg-white/[0.025] px-3 text-xs text-white/85 sm:h-12 sm:text-sm">
          Passgenau
          <ChevronDown aria-hidden="true" className="ml-auto size-4 text-white/40" />
        </div>
        <div className="-mx-2.5 mt-2 border-t border-white/[0.08] pt-2 sm:-mx-3 sm:mt-3 sm:pt-3">
          <p className="px-3 py-1.5 text-[10px] text-white/40 sm:text-xs">Standardlösung</p>
          <div className="flex items-center rounded-lg bg-white/[0.06] px-3 py-2 text-[10px] text-white/85 sm:text-xs">
            Passgenau
            <span className="ml-auto flex size-4 items-center justify-center rounded-full bg-emerald-400 text-[#07110c]">
              <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
            </span>
          </div>
          <p className="px-3 py-1.5 text-[10px] text-white/45 sm:text-xs">Universell</p>
        </div>
      </div>
    </div>
  );
}