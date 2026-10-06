import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const projectPhases = [
  {
    label: "Konzeption",
    detail: "WORKSHOP · ZIELE · BRIEFING",
    status: "ABGESCHLOSSEN",
    start: "0%",
    width: "32%",
    tone: "bg-gradient-to-r from-cyan-600/80 via-cyan-400 to-cyan-200",
  },
  {
    label: "Umsetzung",
    detail: "DESIGN · ENTWICKLUNG · TESTS",
    status: "ABGESCHLOSSEN",
    start: "27%",
    width: "43%",
    tone: "bg-gradient-to-r from-emerald-600/80 via-emerald-400 to-emerald-200",
  },
  {
    label: "Betreuung",
    detail: "NACH PROJEKTABSCHLUSS",
    status: "AKTIV",
    start: "70%",
    width: "30%",
    tone: "bg-gradient-to-r from-violet-600/80 via-violet-400 to-violet-200",
  },
] as const;

export function FlexibleSchedulingPanel() {
  return (
    <Card className="gap-0 overflow-hidden rounded-xl border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] py-0 shadow-none">
      <CardHeader className="flex min-h-16 flex-wrap items-center justify-between gap-2 px-5 py-4">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <CardTitle className="text-base font-medium text-white/90">Projektplan</CardTitle>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">KONZEPTION → BETREUUNG</span>
        </div>
        <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
          ZIEL REALISTISCH GEPLANT
        </span>
      </CardHeader>

      <Separator className="bg-white/[0.08]" />

      <CardContent className="relative p-5">
        <div aria-hidden="true" className="absolute inset-x-5 top-5 bottom-5 grid grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className="border-l border-white/[0.055] first:border-l-0" />
          ))}
        </div>

        <div className="relative flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
          {["KW 01", "KW 03", "KW 05", "KW 07", "KW 09", "KW 11+"].map((week) => (
            <span key={week}>{week}</span>
          ))}
        </div>

        <div className="relative mt-5">
          <div aria-hidden="true" className="absolute bottom-0 left-[70%] top-7 z-10 w-px bg-white/40">
            <span className="absolute -left-[6.5rem] -top-5 whitespace-nowrap rounded-t-md bg-white px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-black">
              LAUNCH · IM ZEITPLAN
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {projectPhases.map((phase) => (
              <div key={phase.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-2">
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white/80">{phase.label}</p>
                <p className="mt-0.5 truncate font-mono text-[9px] tracking-[0.08em] text-white/35">{phase.detail}</p>
              </div>
              <span className={`font-mono text-[8px] tracking-[0.08em] ${phase.status === "AKTIV" ? "text-indigo-300" : "text-white/35"}`}>
                {phase.status}
              </span>
              <div className="relative col-span-2 h-2 overflow-hidden rounded-full bg-white/[0.045]">
                <span
                  className={`absolute inset-y-0 rounded-full ${phase.tone}`}
                  style={{ left: phase.start, width: phase.width }}
                />
              </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3">
              <div>
                <p className="text-xs font-medium text-white/80">Qualitätssicherung</p>
                <p className="mt-0.5 font-mono text-[9px] tracking-[0.08em] text-white/35">IN JEDER PHASE</p>
              </div>
              <span className="font-mono text-[8px] tracking-[0.08em] text-white/35">DURCHGEHEND</span>
              <div className="relative col-span-2 mt-3 flex justify-between border-t border-dashed border-indigo-400/50">
                {Array.from({ length: 6 }).map((_, index) => (
                  <span key={index} className="-mt-[5px] size-2.5 rounded-full border-2 border-indigo-400 bg-[#111113] shadow-[0_0_8px_rgba(129,140,248,0.45)]" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3 font-mono text-[9px] tracking-[0.08em] text-white/35">
          <span>3 Phasen · 1 Ansprechpartner</span>
          <span className="text-indigo-300">Qualität in jeder Phase</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default FlexibleSchedulingPanel;
