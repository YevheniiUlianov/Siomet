import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const scheduledRuns = [
  {
    label: "Daily intelligence",
    mode: "CRON · 08:30",
    start: "8%",
    width: "43%",
    tone: "bg-gradient-to-r from-cyan-600/80 via-cyan-400 to-cyan-200",
  },
  {
    label: "Lead response",
    mode: "WEBHOOK",
    start: "28%",
    width: "27%",
    tone: "bg-gradient-to-r from-emerald-600/80 via-emerald-400 to-emerald-200",
  },
  {
    label: "Memory maintenance",
    mode: "ADAPTIVE",
    start: "54%",
    width: "31%",
    tone: "bg-gradient-to-r from-violet-600/80 via-violet-400 to-violet-200",
  },
] as const;

export function FlexibleSchedulingPanel() {
  return (
    <Card className="gap-0 overflow-hidden rounded-xl border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] py-0 shadow-none">
      <CardHeader className="flex min-h-16 grid-cols-[1fr_auto] items-center gap-4 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <CardTitle className="text-base font-medium text-white/90">Schedule</CardTitle>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">Next 7 days</span>
        </div>
        <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
          12 queued
        </span>
      </CardHeader>

      <Separator className="bg-white/[0.08]" />

      <CardContent className="relative p-5">
        <div aria-hidden="true" className="absolute inset-x-5 top-5 bottom-5 grid grid-cols-7">
          {Array.from({ length: 7 }).map((_, index) => (
            <span key={index} className="border-l border-white/[0.055] first:border-l-0" />
          ))}
        </div>

        <div className="relative flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="relative mt-5 flex flex-col gap-4">
          {scheduledRuns.map((run) => (
            <div key={run.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2">
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white/80">{run.label}</p>
                <p className="mt-0.5 font-mono text-[9px] tracking-[0.08em] text-white/35">{run.mode}</p>
              </div>
              <span className="font-mono text-[9px] text-white/30">LIVE</span>
              <div className="relative col-span-2 h-2 overflow-hidden rounded-full bg-white/[0.045]">
                <span
                  className={`absolute inset-y-0 rounded-full ${run.tone}`}
                  style={{ left: run.start, width: run.width }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3 font-mono text-[9px] tracking-[0.08em] text-white/35">
          <span>3 trigger types</span>
          <span>99.99% run reliability</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default FlexibleSchedulingPanel;
