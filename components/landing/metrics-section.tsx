"use client";

import { useEffect, useState, useRef } from "react";
import { AgentSchedulerScreen } from "@/components/landing/features-section";
import { SectionLabel } from "@/components/ui/section-label";

const metrics = [
  { 
    value: 12847392, 
    suffix: "", 
    prefix: "",
    label: "Runs completed today",
    sublabel: "across 23,847 scheduled jobs",
  },
  { 
    value: 99, 
    suffix: ".99%", 
    prefix: "",
    label: "Schedule reliability",
    sublabel: "across cron and event triggers",
  },
  { 
    value: 340, 
    suffix: "ms", 
    prefix: "<",
    label: "Agent runtime",
    sublabel: "p99 execution duration",
  },
];

function AnimatedNumber({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isScrambling, setIsScrambling] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2500;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            setIsScrambling(progress < 0.8);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const displayValue = new Intl.NumberFormat("en-US").format(count);

  return (
    <div ref={ref} className="inline-flex items-baseline">
      <span className="text-muted-foreground mr-1">{prefix}</span>
      <span className="tabular-nums">
        {displayValue.split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-150 ${
              isScrambling && char !== "," ? "blur-[1px]" : ""
            }`}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="text-muted-foreground">{suffix}</span>
    </div>
  );
}

function GridBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const frameRef = useRef(0);

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

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      ctx.clearRect(0, 0, width, height);
      const gridSize = 60;
      const time = timeRef.current;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const wave = Math.sin(x * 0.01 + y * 0.01 + time) * 0.5 + 0.5;
          const size = 1 + wave * 2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
          ctx.fill();
        }
      }
      const pulseY = (time * 30) % height;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, pulseY);
      ctx.lineTo(width, pulseY);
      ctx.stroke();
      timeRef.current += 0.02;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

function DotGraph({
  color = "white",
  height = 32,
  freq1 = 0.35,
  freq2 = 0.12,
  freqT = 0.7,
  speed = 0.025,
  baseline = 0.3,
  amplitude = 0.5,
}: {
  color?: string;
  height?: number;
  freq1?: number;
  freq2?: number;
  freqT?: number;
  speed?: number;
  baseline?: number;
  amplitude?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.offsetWidth || 300;
    const H = height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const render = () => {
      ctx.clearRect(0, 0, W, H);
      const t = timeRef.current;
      const cols = Math.floor(W / 8);

      for (let i = 0; i < cols; i++) {
        const raw = baseline + amplitude * Math.sin(i * freq1 + t) * Math.cos(i * freq2 + t * freqT);
        const v = Math.max(0, Math.min(1, raw));
        const dotY = H - 4 - v * (H - 8);
        const x = i * 8 + 4;
        const alpha = 0.15 + v * 0.55;
        const r = 1.5 + v * 1.2;

        ctx.beginPath();
        ctx.arc(x, dotY, r, 0, Math.PI * 2);
        ctx.fillStyle = color === "green"
          ? `rgba(236, 168, 214, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      timeRef.current += speed;
      frameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameRef.current);
  }, [mounted, color, height, freq1, freq2, freqT, speed, baseline, amplitude]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: `${height}px`, display: "block" }}
    />
  );
}

export function MetricsSection() {
  const [time, setTime] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section id="insights" ref={sectionRef} className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 mb-8 lg:mx-5 lg:mb-12">
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
                <SectionLabel>Team</SectionLabel>
              <h2 className={`font-display text-[37px] leading-[0.95] tracking-tight transition-all duration-1000 lg:text-[48px] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <span className="text-foreground">Unser Teamerfolg entsteht aus Erfahrung,</span>{" "}
                <span className="text-muted-foreground">Wissen und der Flexibilität jedes Einzelnen.</span>
              </h2>
            </div>
            <p className={`max-w-[34rem] text-xl leading-relaxed text-muted-foreground transition-all delay-200 duration-1000 lg:col-span-5 lg:justify-self-end lg:pb-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
              Wir richten den Blick auf globale Marktanforderungen und denken bewusst über etablierte Grenzen hinaus – das zeichnet Siomet aus.
            </p>
          </div>

          <div className={`mt-1 transition-all delay-200 duration-1000 lg:mt-2 ${isVisible ? "opacity-100" : "opacity-0"}`}><AgentSchedulerScreen /></div>
        </div>
      </div>
    </section>
  );
}
