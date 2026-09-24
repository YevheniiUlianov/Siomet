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
  { value: "off", label: "Off" },
  { value: "monitor", label: "Monitor" },
  { value: "enforce", label: "Enforce" },
  { value: "approval", label: "Require approval" },
];

const INITIAL: Item[] = [
  {
    id: "budget",
    label: "Daily API budget",
    hint: "Prevent runaway model spend",
    value: "enforce",
  },
  {
    id: "timeout",
    label: "Run timeout",
    hint: "Stop stalled agent jobs",
    value: "enforce",
  },
  {
    id: "tools",
    label: "Sensitive tools",
    hint: "Hold destructive actions",
    value: "approval",
  },
  {
    id: "retries",
    label: "Failure retries",
    hint: "End repeated error loops",
    value: "monitor",
  },
  {
    id: "concurrency",
    label: "Concurrency limits",
    hint: "Prevent overlapping agent runs",
    value: "enforce",
  },
  {
    id: "tool-access",
    label: "Tool access",
    hint: "Restrict agents to approved tools",
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
