"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ClipboardCheck,
  Cpu,
  Layers,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Item = { id: string; label: string; hint: string; value: string; icon?: LucideIcon };
type Mode = { value: string; label: string };

const POLICY_MODES = [
  { value: "off", label: "Aus" },
  { value: "monitor", label: "Überwachen" },
  { value: "enforce", label: "Durchsetzen" },
  { value: "approval", label: "Freigabe erforderlich" },
];

const INITIAL: Item[] = [
  {
    id: "budget",
    label: "Tägliches API-Budget",
    hint: "Verhindert unkontrollierten Modellaufwand",
    value: "enforce",
  },
  {
    id: "timeout",
    label: "Laufzeitbegrenzung",
    hint: "Stoppt blockierte Agentenjobs",
    value: "enforce",
  },
  {
    id: "tools",
    label: "Sensible Tools",
    hint: "Verhindert destruktive Aktionen",
    value: "approval",
  },
  {
    id: "retries",
    label: "Fehlerwiederholungen",
    hint: "Beendet wiederholte Fehler-Schleifen",
    value: "monitor",
  },
  {
    id: "concurrency",
    label: "Parallelitätsgrenzen",
    hint: "Verhindert überlappende Agentenläufe",
    value: "enforce",
  },
  {
    id: "tool-access",
    label: "Tool-Zugriff",
    hint: "Beschränkt Agenten auf freigegebene Tools",
    value: "approval",
  },
];

const INSTRUMENTS: Item[] = [
  {
    id: "requirements",
    label: "Anforderungsanalyse",
    hint: "Klärt, was die Lösung leisten muss",
    value: "agreed",
    icon: ClipboardCheck,
  },
  {
    id: "hardware",
    label: "Hardware-Kompatibilität",
    hint: "Passt Werkzeuge an Geräte und Leistung an",
    value: "optimized",
    icon: Cpu,
  },
  {
    id: "scenario",
    label: "Einsatzszenario",
    hint: "Wählt Werkzeuge passend zum Umfeld",
    value: "fitted",
    icon: Target,
  },
  {
    id: "stack",
    label: "Technologie-Stack",
    hint: "Kombiniert nur geeignete Werkzeuge",
    value: "aligned",
    icon: Layers,
  },
  {
    id: "innovation",
    label: "Innovation",
    hint: "Prüft neue Ansätze auf echten Mehrwert",
    value: "evaluated",
    icon: Sparkles,
  },
  {
    id: "scaling",
    label: "Skalierung",
    hint: "Wächst mit Anforderungen und Nutzung",
    value: "prepared",
    icon: TrendingUp,
  },
];

const INSTRUMENT_MODES: Mode[] = [
  { value: "standard", label: "Standardlösung" },
  { value: "fitted", label: "Passgenau" },
  { value: "universal", label: "Universell" },
];

export function GuardrailsControlPanel({ variant = "guardrails" }: { variant?: "guardrails" | "instruments" }) {
  const items = variant === "instruments" ? INSTRUMENTS : INITIAL;
  const modes = variant === "instruments" ? INSTRUMENT_MODES : POLICY_MODES;

  return (
    <Card className="border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] shadow-none">
      <CardContent className="flex flex-col gap-5">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between gap-4 md:flex-row md:items-center ${
              index >= 3 && variant !== "instruments" ? "hidden md:flex" : ""
            }`}
          >
            <div className="flex min-w-0 items-center gap-3">
              {item.icon ? (
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${item.id === "scenario" ? "border-emerald-300/70 bg-black/20 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.18)]" : "border-white/[0.09] bg-black/10 text-white/65"}`}>
                  <item.icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </span>
              ) : null}
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium">{item.label}</span>
                <span className="text-muted-foreground truncate text-xs">{item.hint}</span>
              </span>
            </div>
            <Select value={item.value} disabled>
              <SelectTrigger className="w-36 shrink-0 rounded-[5px] border-foreground/30">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {modes.map((mode) => (
                    <SelectItem key={mode.value} value={mode.value}>
                      {mode.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default GuardrailsControlPanel;
