"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ChevronDown, Database, ServerCog } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Activity02Icon,
  Activity03Icon,
  AiSchedulingIcon,
  AiSearch02Icon,
  BubbleChatSpark01Icon,
  CursorRectangleSelection02Icon,
  EllipsisIcon,
  InboxIcon,
  PencilEdit02Icon,
  SecurityValidationIcon,
  TimeScheduleIcon,
  TimelineIcon,
} from "@hugeicons/core-free-icons";
import { DistributedProcessing } from "@/components/ui/distributed-processing";
import { SelfOptimizingPipeline } from "@/components/ui/self-optimizing-pipeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";
import { cn } from "@/lib/utils";

const features = [
  {
    number: "01",
    title: "Zustandsbezogene Agentenläufe",
    description: "Planen Sie wiederkehrende Agenten mit dauerhaftem Gedächtnis, Tool-Zugriff und Kontext über separate Ausführungen hinweg.",
    stats: { value: "99,7%", label: "erfolgreiche Läufe" },
  },
  {
    number: "02",
    title: "Ereignisgesteuerte Weckungen",
    description: "Wecken Sie Agenten sofort über Webhooks, Dateiuploads oder Datenbankänderungen – ohne Polling oder fragile Skripte.",
    stats: { value: "50+", label: "Trigger-Quellen" },
  },
  {
    number: "03",
    title: "Adaptive Planung",
    description: "Lassen Sie Agenten ihre Ergebnisse bewerten, die nächste Weckzeit festlegen und wiederkehrende Aufgaben automatisch im Blick behalten.",
    stats: { value: "15 Min", label: "strikte Zeitgrenze" },
  },
  {
    number: "04",
    title: "Gesicherte Autonomie",
    description: "Budgetlimits, Protokolle und strikte Zeitfenster halten autonomes Arbeiten sicher, kontrollierbar und nachvollziehbar.",
    stats: { value: "0", label: "laufende Kosten" },
  },
];

const ganttDays = ["03", "10", "17", "24", "31", "07", "14"];
const ganttRows = [
  { name: "Daily intelligence", trigger: "Cron · 08:30", left: "10%", width: "47%", forecast: "20%", forecastTone: "rose", highlightLast: true, accent: "bg-cyan-400/75", phases: [{ at: "36%", label: "Research" }, { at: "71%", label: "Brief" }] },
  { name: "Lead response", trigger: "Webhook", left: "2%", width: "73%", forecast: "30%", forecastTone: "rose", highlightLast: true, accent: "bg-emerald-400/70", phases: [{ at: "24%", label: "Enrich" }, { at: "57%", label: "Qualify" }] },
  { name: "Customer health", trigger: "Hourly", left: "22%", width: "68%", forecast: "25%", forecastTone: "blue", highlightLast: false, accent: "bg-white/45", phases: [{ at: "22%", label: "Score" }, { at: "48%", label: "Review" }, { at: "72%", label: "Escalate" }] },
  { name: "Research agents", trigger: "Adaptive", left: "14%", width: "55%", forecast: "0%", forecastTone: "none", highlightLast: false, accent: "bg-violet-300/65", phases: [{ at: "31%", label: "Gather" }, { at: "66%", label: "Synthesize" }] },
  { name: "Invoice follow-up", trigger: "Event-driven", left: "70%", width: "27%", forecast: "0%", forecastTone: "none", highlightLast: false, accent: "bg-amber-300/65", phases: [{ at: "28%", label: "Review" }, { at: "66%", label: "Send" }] },
  { name: "Memory maintenance", trigger: "Agent-set", left: "8%", width: "45%", forecast: "0%", forecastTone: "none", highlightLast: false, accent: "bg-sky-300/60", phases: [{ at: "34%", label: "Summarize" }, { at: "72%", label: "Persist" }] },
];

export function AgentScheduleGantt() {
  return (
    <section aria-label="Busy agent schedule Gantt chart" className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[#101112] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 size-full" preserveAspectRatio="none" viewBox="0 0 700 1000">
        {Array.from({ length: 7 }, (_, index) => (
          <line
            key={index}
            x1={index * 100}
            x2={index * 100}
            y1="0"
            y2="1000"
            stroke="rgba(255,255,255,0.04)"
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <header className="relative z-10 h-[70px] shrink-0">
        <div className="absolute inset-x-0 top-0 grid h-8 grid-cols-7 items-end pb-1 text-[10px] font-medium tracking-[0.06em] text-white/32">
          <span className="col-span-5 pl-4">AUG</span>
          <span className="col-span-2 pl-4">SEP</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 grid h-9 grid-cols-7 text-[9px] font-mono text-white/24">
          {ganttDays.map((day) => (
            <div key={day} className="flex items-center pl-4">{day}</div>
          ))}
        </div>
      </header>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 size-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <path d="M 690 348 C 780 348, 630 450, 700 450" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
        </svg>

        {ganttRows.map((row) => (
          <div key={row.name} className="relative min-h-0 flex-1">
            <div className="absolute top-[13%] flex items-center gap-2" style={{ left: row.left }}>
              <span className={cn("size-1.5 rounded-sm", row.accent)} />
              <span className="text-[11px] font-medium tracking-[-0.01em] text-white/72">{row.name}</span>
              <span className="text-[8px] font-mono text-white/24">{row.trigger}</span>
            </div>

            <div className="absolute top-[40%] h-[24px] rounded-md border border-white/[0.09] bg-gradient-to-b from-white/[0.045] to-white/[0.018] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]" style={{ left: row.left, width: row.width }}>
              {row.forecast !== "0%" && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 z-[1] border-l border-white/[0.14]"
                    style={{ right: row.forecast }}
                  />
                  <span
                    className={cn(
                      "absolute inset-y-[-1px] right-[-1px] rounded-r-md border-y border-r border-dashed",
                      row.forecastTone === "blue" ? "border-blue-300/35" : "border-rose-300/30"
                    )}
                    style={{
                      width: row.forecast,
                      backgroundImage: row.forecastTone === "blue"
                        ? "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 28%, rgba(59, 130, 246, 0.1) 100%)"
                        : "linear-gradient(90deg, transparent 0%, rgba(244, 63, 94, 0.09) 28%, rgba(244, 63, 94, 0.09) 100%)",
                      maskImage: "linear-gradient(90deg, transparent 0%, black 28%, black 100%)",
                      WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 28%, black 100%)",
                    }}
                  />
                </>
              )}
              {row.phases.map((phase, phaseIndex) => (
                <span key={phase.label} className="absolute inset-y-0" style={{ left: phase.at }}>
                  <span className={cn(
                    "absolute left-0 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rotate-45 border",
                    row.highlightLast && phaseIndex === row.phases.length - 1
                      ? "border-rose-400/90 bg-rose-500/25 shadow-[0_0_5px_rgba(244,63,94,0.35)]"
                      : "border-white/35 bg-[#101112]"
                  )} />
                  <span className="absolute left-0 top-[29px] -translate-x-1/2 whitespace-nowrap text-[8px] text-white/27">{phase.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

const insightTotals = [
  { label: "Abgeschlossene Agentenaufgaben", value: "3.389" },
  { label: "Laufende Agentenaufgaben", value: "1.128" },
  { label: "Agentenaufgaben in Prüfung", value: "729" },
];

const insightProjects = [
  { name: "Tägliche Intelligenz", tasks: "239", qronos: "81", codex: "76", copilot: "82", icon: BubbleChatSpark01Icon },
  { name: "Lead-Antwort", tasks: "181", qronos: "25", codex: "151", copilot: "5", icon: Activity03Icon },
  { name: "Kundenstatus", tasks: "95", qronos: "22", codex: "44", copilot: "29", icon: Activity02Icon },
  { name: "Support-Warteschlange", tasks: "88", qronos: "0", codex: "12", copilot: "76", icon: InboxIcon },
  { name: "Forschungsagenten", tasks: "72", qronos: "59", codex: "13", copilot: "0", icon: AiSearch02Icon },
  { name: "Rechnungsnachverfolgung", tasks: "51", qronos: "0", codex: "51", copilot: "0", icon: TimelineIcon },
  { name: "Speicherpflege", tasks: "50", qronos: "3", codex: "0", copilot: "47", icon: SecurityValidationIcon },
  { name: "Outbound-Nachverfolgung", tasks: "45", qronos: "18", codex: "21", copilot: "6", icon: BubbleChatSpark01Icon },
  { name: "Pipeline-Review", tasks: "43", qronos: "12", codex: "24", copilot: "7", icon: Activity03Icon },
  { name: "Revenue-Operations", tasks: "38", qronos: "14", codex: "8", copilot: "16", icon: CursorRectangleSelection02Icon },
];

function AgentInsightsDashboard() {
  const taskBars = [174, 153, 139, 140, 136, 116, 96, 82, 69, 61, 53, 39, 30, 22];
  const assignees = ["AM", "JT", "RK", "SL", "MP", "DN", "KC", "RB", "EA", "NW", "CV", "HF", "IO", "LG"];
  const avatarTones = ["bg-rose-400/70", "bg-cyan-400/70", "bg-amber-300/80", "bg-violet-400/70", "bg-emerald-400/70", "bg-orange-400/70", "bg-sky-400/70"];
  const [budgetUsage, setBudgetUsage] = useState(6840);
  const budgetLimit = 10000;
  const budgetPercentage = (budgetUsage / budgetLimit) * 100;

  useEffect(() => {
    const increments = [1, 2, 3];
    const interval = window.setInterval(() => {
      setBudgetUsage((currentUsage) => currentUsage >= 7120
        ? 6840
        : currentUsage + increments[Math.floor(Math.random() * increments.length)]);
    }, 5600);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section aria-label="Agent insights dashboard" className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[#101112] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
      <header className="flex h-11 shrink-0 items-center gap-2 border-b border-white/[0.06] px-5 text-sm">
        <span className="font-medium text-white/90">Agentenübersicht</span>
        <span className="text-amber-300">★</span>
        <span className="text-white/35">•••</span>
      </header>
      <div className="grid min-h-0 flex-1 grid-rows-[auto_1fr] gap-3 p-3 lg:gap-4 lg:p-4">
        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.25fr)] gap-3 lg:gap-4">
          {insightTotals.map((total) => (
            <Card key={total.label} className="insights-gradient-border gap-0 rounded-lg py-0 shadow-none">
              <CardHeader className="gap-1 px-3 py-3 lg:px-4">
                <CardTitle className="text-[10px] font-normal text-white/45 lg:text-xs">{total.label}</CardTitle>
              </CardHeader>
              <CardContent className="px-3 pb-3 lg:px-4 lg:pb-4"><p className="text-xl font-light tracking-tight text-white lg:text-2xl">{total.value}</p></CardContent>
            </Card>
          ))}
          <div className="flex min-w-0 items-center border-l border-white/[0.07] pl-3 lg:pl-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2"><p className="text-[10px] text-white/45 lg:text-xs">Tagesbudget</p><span className="flex items-center gap-1 text-[9px] text-emerald-300/75"><span className="size-1.5 rounded-full bg-emerald-300 animate-pulse" />Live</span></div>
              <p className="mt-1 text-lg font-light tracking-tight text-white lg:text-xl">{budgetUsage.toLocaleString("de-DE")} € <span className="text-xs text-white/40">/ 10.000 €</span></p>
              <Progress value={budgetPercentage} className="mt-2 h-1.5 bg-white/[0.12] after:pointer-events-none after:absolute after:inset-y-0 after:w-8 after:bg-gradient-to-r after:from-transparent after:via-white/70 after:to-transparent after:animate-[budget-meter-scan_5.6s_ease-in-out_infinite] [&>[data-slot=progress-indicator]]:bg-[linear-gradient(90deg,#575b61_0%,#d7dbe0_45%,#727780_100%)] [&>[data-slot=progress-indicator]]:shadow-[0_0_7px_rgba(255,255,255,0.25)]" />
              <p className="mt-1.5 text-[9px] text-white/40 lg:text-[10px]">{budgetPercentage.toFixed(1)} % zugewiesen auf aktive Läufe</p>
            </div>
          </div>
        </div>
        <div className="grid min-h-0 grid-cols-[1fr_1.02fr] gap-3 lg:gap-4">
          <Card className="insights-gradient-border min-h-0 gap-0 rounded-lg py-0 shadow-none">
            <CardHeader className="px-4 py-4 lg:px-5"><CardTitle className="text-xs font-normal text-white/55 lg:text-sm">Agentenaufgaben pro Verantwortlichem</CardTitle></CardHeader>
            <CardContent className="relative min-h-0 flex-1 px-4 pb-4 lg:px-5 lg:pb-5">
              <div className="absolute inset-x-4 top-3 bottom-12 flex flex-col justify-between lg:left-5 lg:right-[1.875rem] lg:top-4 lg:bottom-14">
                {["180", "160", "140", "120", "100", "80", "60", "40", "20", "0"].map((mark) => <div key={mark} className="relative border-t border-dashed border-white/[0.09]"><span className="absolute -right-5 -top-2 text-[8px] text-white/35 lg:text-[10px]">{mark}</span></div>)}
              </div>
              <div className="absolute inset-x-5 bottom-14 top-8 grid grid-cols-14 items-end justify-items-center gap-1.5 lg:left-5 lg:right-[1.875rem] lg:gap-2">
                {taskBars.map((height, index) => (
                  <div key={`${height}-${index}`} className="flex h-full w-1.5 flex-col justify-end lg:w-2">
                    <div className="bg-slate-100/85" style={{ height: `${(height * 0.22) / 180 * 100}%` }} />
                    <div className="bg-indigo-400/80" style={{ height: `${(height * 0.48) / 180 * 100}%` }} />
                    <div className="bg-amber-300/90" style={{ height: `${(height * 0.14) / 180 * 100}%` }} />
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-5 bottom-2 grid grid-cols-14 justify-items-center gap-1.5 lg:left-5 lg:right-[1.875rem] lg:gap-2">{assignees.map((assignee, index) => <Avatar key={assignee} className="size-3.5 border border-white/20 lg:size-5"><AvatarFallback className={`${avatarTones[index % avatarTones.length]} text-[5px] font-medium text-white lg:text-[7px]`}>{assignee}</AvatarFallback></Avatar>)}</div>
            </CardContent>
          </Card>
          <Card className="insights-gradient-border min-h-0 gap-0 overflow-hidden rounded-lg py-0 shadow-none">
            <CardHeader className="border-b border-white/[0.06] px-4 py-4 lg:px-5"><CardTitle className="text-xs font-normal text-white/55 lg:text-sm">Projekte, an denen Agenten arbeiten</CardTitle></CardHeader>
            <CardContent className="min-h-0 overflow-hidden px-0 pb-0">
              <Table className="table-fixed text-[9px] lg:text-xs">
                <colgroup><col className="w-[38%]" /><col className="w-[14%]" /><col className="w-[16%]" /><col className="w-[16%]" /><col className="w-[16%]" /></colgroup>
                <TableHeader className="text-white/40"><TableRow className="border-white/[0.06] hover:bg-transparent"><TableHead className="h-7 px-4 font-normal lg:px-5">Project</TableHead><TableHead className="h-7 border-l border-white/[0.06] px-2 font-normal">Tasks</TableHead><TableHead className="h-7 border-l border-white/[0.06] px-2 font-normal"><span className="flex items-center gap-1"><img src="/images/agent-logos/gemini.png" alt="" className="size-3 rounded-full object-contain" />Gemini</span></TableHead><TableHead className="h-7 border-l border-white/[0.06] px-2 font-normal"><span className="flex items-center gap-1"><img src="/images/agent-logos/codex.png" alt="" className="size-3 rounded-full object-contain" />Codex</span></TableHead><TableHead className="h-7 border-l border-white/[0.06] px-2 font-normal"><span className="flex items-center gap-1"><img src="/images/agent-logos/claude.png" alt="" className="size-3 rounded-full object-contain" />Claude</span></TableHead></TableRow></TableHeader>
                <TableBody>{insightProjects.map(({ name, tasks, qronos, codex, copilot, icon }) => <TableRow key={name} className="border-white/[0.06] hover:bg-white/[0.025]"><TableCell className="h-7 max-w-0 px-4 text-white/75 lg:h-8 lg:px-5"><span className="flex min-w-0 items-center gap-1.5"><HugeiconsIcon icon={icon} size={11} strokeWidth={1.5} className="shrink-0 text-white/45" /><span className="truncate">{name}</span></span></TableCell><TableCell className="h-7 border-l border-white/[0.06] px-2 text-white/65 lg:h-8">{tasks}</TableCell><TableCell className="h-7 border-l border-white/[0.06] px-2 text-white/65 lg:h-8">{qronos}</TableCell><TableCell className="h-7 border-l border-white/[0.06] px-2 text-white/65 lg:h-8">{codex}</TableCell><TableCell className="h-7 border-l border-white/[0.06] px-2 text-white/65 lg:h-8">{copilot}</TableCell></TableRow>)}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function AgentSchedulerScreen() {
  return (
    <div className="relative aspect-[1.05] w-full overflow-hidden lg:aspect-[2.28/1]">
      <TeamOrbitVisual />
    </div>
  );
}

function TeamOrbitVisual() {
  const roles = [
    { title: "Softwareentwickler", side: "left", row: "top", tone: "text-cyan-300", icon: "⌁" },
    { title: "Data Scientist", side: "right", row: "top", tone: "text-emerald-300", icon: "◒" },
    { title: "Datenbankentwickler", side: "left", row: "middle", tone: "text-amber-300", icon: <Database aria-hidden="true" className="size-4" strokeWidth={1.5} /> },
    { title: "DevOps", side: "right", row: "middle", tone: "text-sky-300", icon: <ServerCog aria-hidden="true" className="size-4" strokeWidth={1.5} /> },
    { title: "Produktmanager", side: "left", row: "bottom", tone: "text-violet-300", icon: "⌘" },
    { title: "UX/UI-Designer", side: "right", row: "bottom", tone: "text-rose-300", icon: "⌂" },
  ];

  return (
    <div className="relative h-full overflow-hidden px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-10">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[17%] h-[64%] w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 7 16 H 29 L 40 38" fill="none" stroke="#67e8f9" strokeOpacity="0.4" strokeWidth="0.55" />
        <path d="M 93 16 H 71 L 60 38" fill="none" stroke="#6ee7b7" strokeOpacity="0.4" strokeWidth="0.55" />
        <path d="M 7 50 H 29 L 40 50" fill="none" stroke="#fcd34d" strokeOpacity="0.4" strokeWidth="0.55" />
        <path d="M 93 50 H 71 L 60 50" fill="none" stroke="#7dd3fc" strokeOpacity="0.4" strokeWidth="0.55" />
        <path d="M 7 84 H 29 L 40 62" fill="none" stroke="#c4b5fd" strokeOpacity="0.4" strokeWidth="0.55" />
        <path d="M 93 84 H 71 L 60 62" fill="none" stroke="#fda4af" strokeOpacity="0.4" strokeWidth="0.55" />
      </svg>

      <GlobePulse className="absolute left-1/2 top-[58%] z-10 w-[47%] max-w-[390px] -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute inset-0 z-20">
        {roles.map((role) => <div key={role.title} className={`absolute -mt-2 flex w-[42%] -translate-y-1/2 items-center gap-2 sm:w-[35%] lg:w-[28%] ${role.side === "left" ? "left-[3%] justify-end text-right" : "right-[3%] flex-row-reverse justify-end text-left"} ${role.row === "top" ? "top-[28%]" : role.row === "middle" ? "top-[50%]" : "top-[72%]"}`}>
          <div className="relative min-w-0 -translate-y-2"><p className={`truncate text-[10px] font-light sm:text-sm lg:text-base ${role.tone}`}>{role.title}</p></div>
          <span className={`relative -translate-y-2 grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-[#090e14]/95 text-lg shadow-[0_0_0_5px_rgba(8,14,20,0.55)] sm:size-10 ${role.tone}`}>{role.icon}</span>
        </div>)}
      </div>
    </div>
  );
}

// Floating dot particles visualization
function ParticleVisualization() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Generate stable particle positions
    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: ((seed * 127.1) % 1),
        by: ((seed * 311.7) % 1),
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;

        const bx = p.bx * w;
        const by = p.by * h;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = by + flowY + influence * Math.sin(time + p.phase) * 36;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [progressVersion, setProgressVersion] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressSliderRef = useRef<HTMLDivElement>(null);
  const isDraggingProgressRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveFeature((currentFeature) => (currentFeature + 1) % 3);
      setProgressVersion((currentVersion) => currentVersion + 1);
    }, 15000);

    return () => window.clearTimeout(timeout);
  }, [activeFeature, progressVersion]);

  const selectFeature = (featureIndex: number) => {
    const nextFeature = Math.max(0, Math.min(2, featureIndex));
    if (nextFeature === activeFeature) return;

    setActiveFeature(nextFeature);
    setProgressVersion((currentVersion) => currentVersion + 1);
  };

  const seekToPointerPosition = (event: ReactPointerEvent<HTMLDivElement>) => {
    const slider = progressSliderRef.current;
    if (!slider) return;

    const { left, width } = slider.getBoundingClientRect();
    const progress = Math.max(0, Math.min(0.9999, (event.clientX - left) / width));
    selectFeature(Math.floor(progress * 3));
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative overflow-hidden pt-24 pb-0 lg:pt-32 lg:pb-0"
    >
      <div className="max-w-[1400px] mx-auto px-[15px] lg:px-14">
        {/* Header - Full width with diagonal layout */}
        <div className="hidden relative mb-24 lg:mb-32">
          <div className="relative mx-0 mt-0 aspect-[1.05] w-full overflow-hidden rounded-xl border border-[#37333b] bg-[radial-gradient(circle_at_50%_0%,rgba(94,73,86,0.24),transparent_68%),linear-gradient(#09090c,#09090c)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)] [mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)] lg:mx-5 lg:aspect-video lg:w-[calc(100%-2.5rem)]">
            <div className="hidden h-full w-full lg:flex">
              <aside aria-label="Agent scheduler sidebar preview" className="sticky top-0 h-full w-[18%] shrink-0 self-start overflow-hidden px-3 py-4 text-white/70 lg:px-5 lg:py-5">
                <div className="mb-6 flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2 font-medium text-white">
                    <img src="/images/qronos-logo-square.png" alt="" className="size-5 shrink-0 rounded-sm object-contain" />
                    <span className="truncate text-sm">Qronos</span>
                    <ChevronDown className="size-3 shrink-0 text-white/45" />
                  </div>
                  <div className="hidden items-center gap-2 lg:flex">
                    <HugeiconsIcon icon={AiSearch02Icon} size={16} strokeWidth={1.5} className="text-white/45" />
                    <span className="grid size-7 place-items-center rounded-full border border-white/10"><HugeiconsIcon icon={PencilEdit02Icon} size={14} strokeWidth={1.5} className="text-white/80" /></span>
                  </div>
                </div>

                <nav className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 px-2 py-1"><HugeiconsIcon icon={InboxIcon} size={16} strokeWidth={1.5} className="text-white/45" /><span>Inbox</span></div>
                  <div className="flex items-center gap-2 px-2 py-1"><HugeiconsIcon icon={CursorRectangleSelection02Icon} size={16} strokeWidth={1.5} className="text-white/45" /><span>My agents</span></div>
                  <div className="flex items-center gap-2 px-2 py-1"><HugeiconsIcon icon={TimelineIcon} size={16} strokeWidth={1.5} className="text-white/45" /><span>Run history</span></div>
                  <div className="flex items-center gap-2 px-2 py-1"><HugeiconsIcon icon={Activity03Icon} size={16} strokeWidth={1.5} className="text-white/45" /><span>Pulse</span></div>
                </nav>

                <div className="mt-7">
                  <p className="mb-2 flex items-center gap-1 text-[10px] font-medium text-white/35">Workspace <ChevronDown className="size-2.5" /></p>
                  <nav className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 px-2 py-1"><HugeiconsIcon icon={CursorRectangleSelection02Icon} size={16} strokeWidth={1.5} className="text-white/45" /><span>Agents</span></div>
                    <div className="sidebar-focus-item -mx-2 flex items-center gap-2 rounded-md py-1 pl-4 pr-2 text-white"><HugeiconsIcon icon={AiSchedulingIcon} size={16} strokeWidth={1.5} className="text-white/55" /><span>Schedules</span></div>
                    <div className="flex items-center gap-2 px-2 py-1"><HugeiconsIcon icon={EllipsisIcon} size={16} strokeWidth={1.5} className="text-white/45" /><span>More</span></div>
                  </nav>
                </div>

                <div className="mt-7">
                  <p className="mb-2 flex items-center gap-1 text-[10px] font-medium text-white/35">Favorites <ChevronDown className="size-2.5" /></p>
                  <nav className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 py-1"><HugeiconsIcon icon={BubbleChatSpark01Icon} size={16} strokeWidth={1.5} className="text-amber-400" /><span>Daily briefing</span></div>
                    <div className="flex items-center gap-2 py-1"><HugeiconsIcon icon={AiSearch02Icon} size={16} strokeWidth={1.5} className="text-cyan-400" /><span>Research agents</span></div>
                    <div className="flex items-center gap-2 py-1"><HugeiconsIcon icon={Activity02Icon} size={16} strokeWidth={1.5} className="text-rose-400" /><span>Budget watch</span></div>
                  </nav>
                </div>
              </aside>
              <div className="h-full w-[82%] p-[5px]">
                <AgentScheduleGantt />
              </div>
            </div>
            <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
          </div>

        </div>

        {/* Auto-advancing feature accordion */}
        <div className="hidden">
          <div 
            className={`lg:col-span-12 relative bg-black border-y border-foreground/10 min-h-[500px] overflow-hidden group transition-all duration-700 flex ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative flex-1 p-8 lg:p-12 bg-black">
              <ParticleVisualization />
              <div className="relative z-10 h-full">
                {features.slice(0, 3).map((feature, index) => (
                  <div
                    key={feature.number}
                    aria-hidden={activeFeature !== index}
                    className={`absolute inset-0 flex flex-col transition-all duration-700 ${
                      activeFeature === index
                        ? "opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
                    <h3 className="mt-4 mb-6 text-3xl font-display transition-transform duration-500 lg:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="mb-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                    <div>
                      <span className="text-5xl font-display lg:text-6xl">{feature.stats.value}</span>
                      <span className="mt-2 block font-mono text-sm text-muted-foreground">{feature.stats.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative w-[42%] shrink-0 overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ transform: "scaleX(-1)" }}
              />
              {/* Fade left edge into black */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
            </div>

            <div
              aria-hidden={activeFeature > 1}
              className={`pointer-events-none absolute inset-y-16 left-[46%] right-[10%] z-10 hidden items-center transition-all duration-700 lg:flex ${
                activeFeature < 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {activeFeature === 0 ? <SelfOptimizingPipeline /> : <DistributedProcessing />}
            </div>

            <div
              ref={progressSliderRef}
              role="slider"
              tabIndex={0}
              aria-label="Feature carousel progress"
              aria-valuemin={1}
              aria-valuemax={3}
              aria-valuenow={activeFeature + 1}
              aria-valuetext={`Feature ${activeFeature + 1} of 3`}
              className="absolute bottom-0 left-0 right-0 z-20 grid h-2 cursor-ew-resize touch-none grid-cols-3 bg-foreground/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onPointerDown={(event) => {
                isDraggingProgressRef.current = true;
                event.currentTarget.setPointerCapture(event.pointerId);
                seekToPointerPosition(event);
              }}
              onPointerMove={(event) => {
                if (isDraggingProgressRef.current) seekToPointerPosition(event);
              }}
              onPointerUp={(event) => {
                isDraggingProgressRef.current = false;
                event.currentTarget.releasePointerCapture(event.pointerId);
              }}
              onPointerCancel={() => {
                isDraggingProgressRef.current = false;
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                  event.preventDefault();
                  selectFeature(activeFeature + 1);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                  event.preventDefault();
                  selectFeature(activeFeature - 1);
                }
              }}
            >
              {[0, 1, 2].map((index) => (
                <span key={index} className="relative overflow-hidden">
                  {activeFeature === index && (
                    <span
                      key={`${activeFeature}-${index}`}
                      className="absolute inset-y-0 left-0 w-full origin-left feature-progress-brush animate-feature-progress"
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes feature-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .animate-feature-progress {
          animation: feature-progress 15s linear forwards;
        }

        .feature-progress-brush {
          background: linear-gradient(90deg, #7f1d1d 0%, #c2410c 54%, #be185d 78%, rgba(190, 24, 93, 0) 100%);
          clip-path: polygon(0 0, 91% 0, 100% 50%, 91% 100%, 0 100%);
          -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 68%, rgba(0, 0, 0, 0.78) 84%, transparent 100%);
          mask-image: linear-gradient(90deg, #000 0%, #000 68%, rgba(0, 0, 0, 0.78) 84%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
