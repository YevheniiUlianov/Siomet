"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  'Eingang: "Bereite den täglichen Betriebsüberblick vor..."',
  "Planner hat Research-, Support- und Finanz-Agenten zugewiesen",
  "Gemeinsamer Speicher wiederhergestellt: Tools, Notizen und vorheriger Laufzustand geladen",
  "Research-Agent: Quellenscan abgeschlossen, Vertrauen 0,92",
  "Support-Agent: Warteschlange sortiert, zwei Follow-ups vorbereitet",
  "Finance-Agent: Ausgabenprüfung bestanden, Ausführung genehmigt",
  "Pipeline abgeschlossen. 3 Agenten-Übergaben in 342 ms aufgezeichnet.",
  "Bereit. Lauscht auf den nächsten Agenten-Trigger...",
];

function AnimatedDot({ path, duration, delay, size, opacity }: { path: string; duration: number; delay: number; size: number; opacity: number }) {
  return (
    <circle r={size} fill="url(#qronos-agent-pipeline-silver)" opacity={opacity}>
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
    </circle>
  );
}

function PulsingDot({ cx, cy, color, duration, delay = 0 }: { cx: number; cy: number; color: string; duration: number; delay?: number }) {
  return <motion.circle cx={cx} cy={cy} r={2.8} fill={color} animate={{ opacity: [0.15, 1, 0.15] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }} />;
}

function StatusIndicator({ cx, cy, color, pulsing = false, duration = 1.9, delay = 0 }: { cx: number; cy: number; color: string; pulsing?: boolean; duration?: number; delay?: number }) {
  return pulsing ? <motion.circle cx={cx} cy={cy} r={3} fill={color} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }} /> : <circle cx={cx} cy={cy} r={3} fill={color} opacity={0.95} />;
}

export function AIAgentPipeline() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [runs, setRuns] = useState(1247);

  useEffect(() => {
    const messageInterval = window.setInterval(() => setMessageIndex((previous) => (previous + 1) % messages.length), 2700);
    const runInterval = window.setInterval(() => setRuns((previous) => previous + 1), 7200);
    return () => { window.clearInterval(messageInterval); window.clearInterval(runInterval); };
  }, []);

  const paths = { p1: "M116,88 L158,88", p2: "M268,88 L306,88", p3: "M411,88 C425,88 435,50 448,50", p4: "M411,88 L448,88", p5: "M411,88 C425,88 435,126 448,126" };
  const nodeStroke = "rgba(255,255,255,0.09)";

  return (
    <div className="mx-auto w-full max-w-[620px] overflow-hidden rounded-[8px] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] font-sans">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-[18px] py-[11px]">
        <div className="flex items-center gap-[7px]">
          <motion.span className="inline-block size-[6px] rounded-full bg-green-500" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          <span className="font-mono text-[10px] tracking-[0.1em] text-white/30">MEHRAGENTEN-PIPELINE · AKTIV</span>
        </div>
        <span className="font-mono text-[10px] text-white/[0.18]">3 Agenten · 0 Fehler</span>
      </div>

      <svg width="100%" viewBox="0 0 580 172" className="block" aria-label="Animated multi-agent workflow">
        <defs>
          <linearGradient id="qronos-agent-pipeline-silver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f8fafc" />
            <stop offset="0.42" stopColor="#9ca3af" />
            <stop offset="0.7" stopColor="#e5e7eb" />
            <stop offset="1" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="qronos-orchestrator-silver" x1="306" y1="53" x2="411" y2="123" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f8fafc" />
            <stop offset="0.28" stopColor="#8b929d" />
            <stop offset="0.56" stopColor="#e5e7eb" />
            <stop offset="1" stopColor="#525866" />
          </linearGradient>
          <marker id="qronos-agent-pipeline-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1.5L7.5 5L2 8.5" fill="none" stroke="rgba(0,82,255,0.45)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        {[paths.p1, paths.p2].map((path, index) => <path key={path} d={path} fill="none" stroke="rgba(0,82,255,0.22)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#qronos-agent-pipeline-arrow)" />)}
        {[paths.p3, paths.p4, paths.p5].map((path) => <path key={path} d={path} fill="none" stroke="rgba(0,82,255,0.15)" strokeWidth="1.5" strokeDasharray="3 5" />)}
        <AnimatedDot path={paths.p1} duration={1.05} delay={0} size={2.5} opacity={1} /><AnimatedDot path={paths.p1} duration={1.05} delay={0.35} size={1.8} opacity={0.65} /><AnimatedDot path={paths.p1} duration={1.05} delay={0.7} size={1.3} opacity={0.35} />
        <AnimatedDot path={paths.p2} duration={0.88} delay={0.18} size={2.5} opacity={1} /><AnimatedDot path={paths.p2} duration={0.88} delay={0.62} size={1.8} opacity={0.65} />
        <AnimatedDot path={paths.p3} duration={1.3} delay={0.08} size={2.2} opacity={0.9} /><AnimatedDot path={paths.p3} duration={1.3} delay={0.65} size={1.5} opacity={0.55} />
        <AnimatedDot path={paths.p4} duration={1.15} delay={0.28} size={2.2} opacity={0.9} /><AnimatedDot path={paths.p4} duration={1.15} delay={0.85} size={1.5} opacity={0.55} />
        <AnimatedDot path={paths.p5} duration={1.4} delay={0.45} size={2.2} opacity={0.9} /><AnimatedDot path={paths.p5} duration={1.4} delay={1} size={1.5} opacity={0.55} />

        <rect x="16" y="66" width="100" height="44" rx="8" fill="#141414" stroke={nodeStroke} strokeWidth="0.5" />
        <text x="66" y="83" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.28)" fontFamily="system-ui" letterSpacing=".07em">TRIGGER</text>
        <text x="66" y="100" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.82)" fontFamily="system-ui">Täglicher Überblick</text>
        <text x="66" y="122" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="monospace">cron · webhook</text>

        <rect x="158" y="66" width="110" height="44" rx="8" fill="#141414" stroke={nodeStroke} strokeWidth="0.5" />
        <text x="213" y="83" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.28)" fontFamily="system-ui" letterSpacing=".07em">SHARED CONTEXT</text>
        <text x="213" y="100" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.82)" fontFamily="system-ui">Speicher geladen</text>
        <text x="213" y="122" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="monospace">Tools + Verlauf</text>

        <rect x="306" y="53" width="105" height="70" rx="10" fill="#000" stroke="url(#qronos-orchestrator-silver)" strokeWidth="2" />
        <text x="358" y="78" textAnchor="middle" fontSize="9.5" fill="rgba(138,180,255,0.9)" fontFamily="system-ui" letterSpacing=".07em">ORCHESTRATOR</text>
        <text x="358" y="97" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="system-ui" fontWeight="500">Arbeit verteilt</text>
        <PulsingDot cx={346} cy={113} color="url(#qronos-agent-pipeline-silver)" duration={1.2} /><PulsingDot cx={358} cy={113} color="url(#qronos-agent-pipeline-silver)" duration={1.2} delay={0.4} /><PulsingDot cx={370} cy={113} color="url(#qronos-agent-pipeline-silver)" duration={1.2} delay={0.8} />
        <text x="358" y="139" textAnchor="middle" fontSize="8.5" fill="rgba(138,180,255,0.8)" fontFamily="monospace">Übergaben aktiv</text>

        <rect x="448" y="35" width="116" height="30" rx="7" fill="#111" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" /><text x="490" y="53.5" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.62)" fontFamily="system-ui">Research-Agent</text><StatusIndicator cx={550} cy={43} color="#22c55e" />
        <rect x="448" y="73" width="116" height="30" rx="7" fill="#111" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" /><text x="490" y="91.5" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.62)" fontFamily="system-ui">Support-Agent</text><StatusIndicator cx={550} cy={81} color="#f59e0b" pulsing duration={1.9} />
        <rect x="448" y="111" width="116" height="30" rx="7" fill="#111" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" /><text x="490" y="129.5" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.62)" fontFamily="system-ui">Finance-Agent</text><StatusIndicator cx={550} cy={119} color="#f59e0b" pulsing duration={2.2} delay={0.35} />
      </svg>

      <div className="h-[52px] border-t border-white/[0.06] px-[18px] py-[9px]"><div className="flex h-full items-start gap-2"><span className="shrink-0 font-mono text-[13px] leading-[1.5] text-[#8ab4ff]/80">›</span><div className="relative h-full flex-1 overflow-hidden"><AnimatePresence mode="wait"><motion.div key={messageIndex} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.25 }} className="absolute inset-0 font-mono text-[11px] leading-[1.55] text-white/[0.42]">{messages[messageIndex]}</motion.div></AnimatePresence></div></div></div>
      <div className="flex items-center gap-[22px] border-t border-white/[0.06] px-[18px] py-[10px]">
        <div><div className="mb-[3px] text-[9px] tracking-[0.09em] text-white/20">LÄUFE HEUTE</div><motion.div key={runs} initial={{ scale: 1.05 }} animate={{ scale: 1 }} className="font-mono text-[16px] text-white/[0.72]">{new Intl.NumberFormat("de-DE").format(runs)}</motion.div></div>
        <div><div className="mb-[3px] text-[9px] tracking-[0.09em] text-white/20">ERFOLG</div><div className="font-mono text-[16px] text-white/[0.72]">99,9 %</div></div>
        <div><div className="mb-[3px] text-[9px] tracking-[0.09em] text-white/20">ÜBERGABEN</div><div className="font-mono text-[16px] text-white/[0.72]">342 ms</div></div>
        <div className="ml-auto text-right"><div className="mb-[3px] text-[9px] tracking-[0.09em] text-white/[0.18]">LAUFZEIT</div><div className="font-mono text-[10px] text-[#8ab4ff]/80">Qronos mesh</div></div>
      </div>
    </div>
  );
}
