"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import DottedMap from "dotted-map";
import { AnimatePresence, motion } from "motion/react";

type Location = {
  lat: number;
  lng: number;
  label: string;
};

type Route = {
  start: Location;
  end: Location;
};

const locations = {
  capeTown: { lat: -33.9249, lng: 18.4241, label: "Cron engine" },
  virginia: { lat: 38.9696, lng: -77.3861, label: "Webhooks" },
  saoPaulo: { lat: -23.5558, lng: -46.6396, label: "Postgres" },
  london: { lat: 51.5072, lng: -0.1276, label: "AnythingLLM" },
  frankfurt: { lat: 50.1109, lng: 8.6821, label: "Relevance AI" },
  singapore: { lat: 1.3521, lng: 103.8198, label: "File uploads" },
  tokyo: { lat: 35.6762, lng: 139.6503, label: "Agent wakeups" },
};

const routes: Route[] = [
  { start: locations.capeTown, end: locations.frankfurt },
  { start: locations.virginia, end: locations.london },
  { start: locations.saoPaulo, end: locations.virginia },
  { start: locations.london, end: locations.frankfurt },
  { start: locations.frankfurt, end: locations.singapore },
  { start: locations.singapore, end: locations.tokyo },
];

const regionNodes = Object.values(locations);

function projectPoint(lat: number, lng: number) {
  return {
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  };
}

function createCurvedPath(start: { x: number; y: number }, end: { x: number; y: number }) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - Math.min(54, Math.abs(end.x - start.x) * 0.16);
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

export function DistributedProcessing() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);
  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: "#FFFFFF38",
        shape: "circle",
        backgroundColor: "#07080D",
      }),
    [map],
  );

  const animationDuration = 2.4;
  const staggerDelay = 0.34;
  const totalAnimationTime = routes.length * staggerDelay + animationDuration;
  const fullCycleDuration = totalAnimationTime + 2.4;

  return (
    <div className="w-full overflow-hidden border border-white/[0.12] bg-[#07080d] font-sans shadow-[0_14px_50px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-cyan-300 animate-pulse" />
          <span className="font-mono text-[9px] tracking-[0.13em] text-white/40">SCHEDULER MESH · LIVE</span>
        </div>
        <span className="font-mono text-[9px] text-white/25">50+ systems</span>
      </div>

      <div className="relative aspect-[2.25/1] w-full overflow-hidden bg-[#07080d]">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="pointer-events-none size-full select-none object-cover opacity-85 [mask-image:linear-gradient(to_bottom,transparent,white_8%,white_92%,transparent)]"
          alt="Dotted world map showing connected agent systems"
          height={400}
          width={800}
          draggable={false}
          unoptimized
        />

        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="absolute inset-0 size-full select-none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="edge-route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="12%" stopColor="#22d3ee" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="88%" stopColor="#c084fc" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
            </linearGradient>
            <filter id="edge-route-glow">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {routes.map((route, index) => {
            const start = projectPoint(route.start.lat, route.start.lng);
            const end = projectPoint(route.end.lat, route.end.lng);
            const path = createCurvedPath(start, end);
            const startTime = (index * staggerDelay) / fullCycleDuration;
            const endTime = (index * staggerDelay + animationDuration) / fullCycleDuration;
            const resetTime = totalAnimationTime / fullCycleDuration;

            return (
              <g key={`${route.start.label}-${route.end.label}`}>
                <motion.path
                  d={path}
                  fill="none"
                  stroke="url(#edge-route-gradient)"
                  strokeWidth="1.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 0, 1, 1, 0] }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                <motion.circle
                  r="4"
                  fill="#a5f3fc"
                  filter="url(#edge-route-glow)"
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: ["0%", "0%", "100%", "100%", "100%"],
                    opacity: [0, 0, 1, 0, 0],
                  }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  style={{ offsetPath: `path('${path}')` }}
                />
              </g>
            );
          })}

          {regionNodes.map((location, index) => {
            const point = projectPoint(location.lat, location.lng);
            return (
              <motion.g
                key={location.label}
                className="cursor-pointer"
                onHoverStart={() => setHoveredLocation(location.label)}
                onHoverEnd={() => setHoveredLocation(null)}
                whileHover={{ scale: 1.18 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <circle cx={point.x} cy={point.y} r="4" fill="#67e8f9" filter="url(#edge-route-glow)" />
                <circle cx={point.x} cy={point.y} r="4" fill="#67e8f9" opacity="0.48">
                  <animate attributeName="r" from="4" to="14" dur="2.2s" begin={`${index * 0.18}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.55" to="0" dur="2.2s" begin={`${index * 0.18}s`} repeatCount="indefinite" />
                </circle>
                <rect x={point.x - 38} y={point.y - 27} width="76" height="17" fill="rgba(7,8,13,0.9)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
                <text x={point.x} y={point.y - 15.5} textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.72)" fontFamily="monospace">
                  {location.label}
                </text>
              </motion.g>
            );
          })}
        </svg>

        <AnimatePresence>
          {hoveredLocation && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute bottom-2 left-3 border border-white/10 bg-black/85 px-2 py-1 font-mono text-[9px] text-white/70 backdrop-blur-sm lg:hidden"
            >
              {hoveredLocation} scheduler online
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6 border-t border-white/[0.08] px-4 py-2.5 font-mono">
        <div><span className="block text-[8px] tracking-[0.1em] text-white/25">TRIGGER TYPES</span><span className="text-sm text-white/75">3</span></div>
        <div><span className="block text-[8px] tracking-[0.1em] text-white/25">P95 WAKE-UP</span><span className="text-sm text-cyan-200/90">42ms</span></div>
        <div><span className="block text-[8px] tracking-[0.1em] text-white/25">RUN RELIABILITY</span><span className="text-sm text-white/75">99.99%</span></div>
      </div>
    </div>
  );
}
