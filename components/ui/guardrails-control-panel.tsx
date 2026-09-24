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

type Item = { id: string; label: string; hint: string; value: string };

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

export function GuardrailsControlPanel() {
  return (
    <Card className="border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] shadow-none">
      <CardContent className="flex flex-col gap-5">
        {INITIAL.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between gap-4 md:flex-row md:items-center ${
              index >= 3 ? "hidden md:flex" : ""
            }`}
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-muted-foreground text-xs">{item.hint}</span>
            </div>
            <Select value={item.value} disabled>
              <SelectTrigger className="w-36 shrink-0 rounded-[5px] border-foreground/30">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {POLICY_MODES.map((mode) => (
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
