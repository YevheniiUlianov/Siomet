"use client";

import { useEffect, useState } from "react";

const messages = [
  "Pipeline started · research agent assigned",
  "Shared memory loaded · 4 tool results restored",
  "Finance agent approved the daily budget",
  "Support handoff queued · customer context attached",
  "Agents set the next coordinated wake-up",
  "Pipeline waiting for the next trigger…",
];

function FlowDot({ path, duration, delay, color }: { path: string; duration: number; delay: number; color: string }) {
  return (
    <circle r="2.4" fill={color}>
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
    </circle>
  );
}

export function SelfOptimizingPipeline() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [runs, setRuns] = useState(28491);

  useEffect(() => {
    const messageTimer = window.setInterval(() => setMessageIndex((index) => (index + 1) % messages.length), 2600);
    const runTimer = window.setInterval(() => setRuns((count) => count + 1), 7200);

    return () => {
      window.clearInterval(messageTimer);
      window.clearInterval(runTimer);
    };
  }, []);

  const paths = {
    sourceToTransform: "M116 88 H176",
    transformToRouter: "M292 88 H350",
    routerToSnowflake: "M442 88 C462 88 470 50 488 50",
    routerToBigQuery: "M442 88 H488",
    routerToS3: "M442 88 C462 88 470 126 488 126",
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/[0.12] bg-[#080707] font-sans shadow-[0_14px_50px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="pipeline-status-dot h-1.5 w-1.5 rounded-full bg-orange-400" />
          <span className="font-mono text-[9px] tracking-[0.13em] text-white/40">MULTI-AGENT PIPELINE · LIVE</span>
        </div>
        <span className="font-mono text-[9px] text-white/25">state persisted</span>
      </div>

      <svg viewBox="0 0 610 172" className="block w-full" aria-hidden="true">
        <defs>
          <linearGradient id="pipeline-flow" x1="0" x2="1">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="55%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>

        {Object.values(paths).map((path) => (
          <path key={path} d={path} fill="none" stroke="url(#pipeline-flow)" strokeWidth="1.35" strokeDasharray="3 5" opacity="0.5" />
        ))}

        <FlowDot path={paths.sourceToTransform} duration={1.15} delay={0} color="#f97316" />
        <FlowDot path={paths.sourceToTransform} duration={1.15} delay={0.54} color="#fb7185" />
        <FlowDot path={paths.transformToRouter} duration={1.05} delay={0.22} color="#f97316" />
        <FlowDot path={paths.transformToRouter} duration={1.05} delay={0.75} color="#f9a8d4" />
        <FlowDot path={paths.routerToSnowflake} duration={1.35} delay={0.1} color="#fb7185" />
        <FlowDot path={paths.routerToBigQuery} duration={1.18} delay={0.42} color="#f97316" />
        <FlowDot path={paths.routerToS3} duration={1.42} delay={0.7} color="#f9a8d4" />

        <g className="pipeline-node">
          <rect x="16" y="66" width="100" height="44" fill="#141111" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />
          <text x="66" y="83" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.32)" fontFamily="system-ui" letterSpacing=".07em">ORCHESTRATOR</text>
          <text x="66" y="100" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.84)" fontFamily="system-ui">New request</text>
          <text x="66" y="122" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.24)" fontFamily="monospace">work assigned</text>
        </g>

        <g className="pipeline-node">
          <rect x="176" y="66" width="116" height="44" fill="#141111" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />
          <text x="234" y="83" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.32)" fontFamily="system-ui" letterSpacing=".07em">SHARED STATE</text>
          <text x="234" y="100" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.84)" fontFamily="system-ui">Context restored</text>
          <text x="234" y="122" textAnchor="middle" fontSize="8.5" fill="rgba(249,115,22,0.66)" fontFamily="monospace">tools + memory</text>
        </g>

        <g className="pipeline-router">
          <rect x="350" y="53" width="92" height="70" fill="#1b0c0b" stroke="url(#pipeline-flow)" strokeWidth="2" />
          <text x="396" y="78" textAnchor="middle" fontSize="9.5" fill="rgba(251,146,60,0.82)" fontFamily="system-ui" letterSpacing=".07em">ROUTER</text>
          <text x="396" y="97" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="system-ui" fontWeight="500">Coordinating</text>
          {[382, 396, 410].map((cx, index) => <circle key={cx} className="pipeline-pulse" cx={cx} cy="113" r="2.7" fill="#fb7185" style={{ animationDelay: `${index * 0.35}s` }} />)}
          <text x="396" y="139" textAnchor="middle" fontSize="8.5" fill="rgba(251,113,133,0.62)" fontFamily="monospace">handoffs active</text>
        </g>

        {[{ y: 35, name: "Research agent", color: "#4ade80" }, { y: 73, name: "Support agent", color: "#f59e0b" }, { y: 111, name: "Finance agent", color: "#fb7185" }].map(({ y, name, color }) => (
          <g key={name} className="pipeline-output">
            <rect x="488" y={y} width="106" height="30" fill="#111010" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" />
            <text x="535" y={y + 18.5} textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">{name}</text>
            <circle className="pipeline-status-dot" cx="579" cy={y + 8} r="3" fill={color} />
          </g>
        ))}
      </svg>

      <div className="flex h-[50px] items-start gap-2 overflow-hidden border-t border-white/[0.08] px-4 py-2.5">
        <span className="font-mono text-sm leading-none text-orange-400/70">›</span>
        <p key={messageIndex} className="pipeline-message font-mono text-[10px] leading-relaxed text-white/50">{messages[messageIndex]}</p>
      </div>

      <div className="flex items-center gap-5 border-t border-white/[0.08] px-4 py-2.5 font-mono">
        <div><span className="block text-[8px] tracking-[0.1em] text-white/25">RUNS TODAY</span><span className="text-sm text-white/75">{new Intl.NumberFormat("en-US").format(runs)}</span></div>
        <div><span className="block text-[8px] tracking-[0.1em] text-white/25">SUCCESS</span><span className="text-sm text-white/75">99.7%</span></div>
        <div><span className="block text-[8px] tracking-[0.1em] text-white/25">BUDGET LEFT</span><span className="text-sm text-orange-300/85">$12.40</span></div>
      </div>

      <style jsx>{`
        .pipeline-status-dot { animation: pipeline-status 2s ease-in-out infinite; }
        .pipeline-pulse { animation: pipeline-pulse 1.2s ease-in-out infinite; }
        .pipeline-message { animation: pipeline-message 280ms ease-out both; }
        @keyframes pipeline-status { 50% { opacity: 0.25; } }
        @keyframes pipeline-pulse { 50% { opacity: 0.2; transform: scale(0.65); } }
        @keyframes pipeline-message { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
