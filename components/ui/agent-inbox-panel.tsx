"use client";

import {
  Alert01Icon,
  ArrowUpDownIcon,
  FilterMailEditIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Check, Ellipsis } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const inboxItems = [
  {
    initials: "RA",
    title: "Research brief ready",
    description: "Research agent completed the competitor scan",
    time: "8m",
    tone: "cyan",
    status: "complete",
    avatarSrc: "/images/agent-logos/gemini.png",
    avatarAlt: "Gemini logo",
  },
  {
    initials: "SA",
    title: "Approval required",
    description: "Support agent wants to issue a refund",
    time: "1h",
    tone: "yellow",
    status: "approval",
    avatarSrc: "/images/agent-logos/codex.png",
    avatarAlt: "Codex logo",
  },
  {
    initials: "FA",
    title: "Budget threshold reached",
    description: "Finance agent paused the nightly run",
    time: "4h",
    tone: "red",
    status: "attention",
    avatarSrc: "/images/agent-logos/claude.png",
    avatarAlt: "Claude logo",
  },
  {
    initials: "OA",
    title: "Memory sync complete",
    description: "Ops agent saved context for its next wake-up",
    time: "1d",
    tone: "emerald",
    status: "complete",
    avatarSrc: "/images/agent-logos/claude.png",
    avatarAlt: "Claude logo",
  },
] as const;

const avatarTones = {
  cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
  yellow: "border-yellow-300/20 bg-yellow-300/10 text-yellow-100",
  red: "border-red-300/20 bg-red-300/10 text-red-100",
  emerald: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
};

function StatusMark({ status }: { status: (typeof inboxItems)[number]["status"] }) {
  if (status !== "complete") {
    return (
      <span
        className={`flex size-4 items-center justify-center rounded-full text-black shadow-[0_0_0_2px_rgba(7,7,8,0.95)] ${
          status === "approval" ? "bg-yellow-300" : "bg-red-400"
        }`}
      >
        <HugeiconsIcon icon={Alert01Icon} aria-hidden="true" size={10} strokeWidth={2.25} />
      </span>
    );
  }

  return (
    <span className="flex size-4 items-center justify-center rounded-full bg-emerald-300 text-black shadow-[0_0_0_2px_rgba(7,7,8,0.95)]">
      <Check aria-hidden="true" className="size-2.5" strokeWidth={2.75} />
    </span>
  );
}

export function AgentInboxPanel() {
  return (
    <Card className="gap-0 overflow-hidden rounded-xl border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] py-0 shadow-none">
      <CardHeader className="flex min-h-16 grid-cols-[1fr_auto] items-center gap-4 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <CardTitle className="text-base font-medium text-white/90">Inbox</CardTitle>
          <Ellipsis aria-hidden="true" className="size-4 text-white/35" />
        </div>
        <CardAction className="relative col-start-auto row-span-1 row-start-auto ml-auto flex items-center gap-1 self-auto justify-self-auto text-muted-foreground">
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Filter agent inbox" title="Filter">
            <HugeiconsIcon
              icon={FilterMailEditIcon}
              data-icon="inline-start"
              aria-hidden="true"
              strokeWidth={1.5}
            />
          </Button>
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Sort agent inbox" title="Sort">
            <HugeiconsIcon
              icon={ArrowUpDownIcon}
              data-icon="inline-start"
              aria-hidden="true"
              strokeWidth={1.5}
            />
          </Button>
        </CardAction>
      </CardHeader>

      <Separator className="bg-white/[0.08]" />

      <CardContent className="flex flex-col gap-1 p-3">
        {inboxItems.map((item, index) => (
          <div
            key={item.title}
            className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-lg px-3 py-3.5 ${
              index === 0 ? "bg-white/[0.045]" : "bg-transparent"
            }`}
          >
            <div className="relative">
              <Avatar className="size-10">
                <AvatarImage src={item.avatarSrc} alt={item.avatarAlt} />
                <AvatarFallback className={`border text-[11px] font-semibold ${avatarTones[item.tone]}`}>
                  {item.initials}
                </AvatarFallback>
              </Avatar>
              <span className="absolute -bottom-0.5 -right-0.5">
                <StatusMark status={item.status} />
              </span>
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white/85">{item.title}</p>
              <p className="mt-0.5 truncate text-xs text-white/40">{item.description}</p>
            </div>

            <time className="text-xs tabular-nums text-white/30">{item.time}</time>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
