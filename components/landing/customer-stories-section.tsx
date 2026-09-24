import { Activity03Icon, TimeScheduleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CustomerStoryStack } from "@/components/ruixen/customer-story-stack";
import { SectionLabel } from "@/components/ui/section-label";

const operationsStories = [
  {
    id: "meridian-research",
    logo: <img src="/images/testimonial-logos/meridian.png" alt="Meridian" className="h-6 w-auto object-contain" />,
    quote: "Qronos gave our research agents a dependable rhythm. Every brief starts with the context and tools from the run before it.",
    author: { name: "Moustachia Balding", role: "CTO, Meridian Labs", avatarUrl: "/images/testimonials/moustachia-balding.png" },
    metrics: [
      { icon: <HugeiconsIcon icon={TimeScheduleIcon} />, label: "80% of recurring intelligence automated" },
      { icon: <HugeiconsIcon icon={Activity03Icon} />, label: "One durable run history for every agent" },
    ] as const,
  },
  {
    id: "beacon-operations",
    logo: <img src="/images/testimonial-logos/monolyth.png" alt="Monolyth" className="h-6 w-auto object-contain" />,
    quote: "We replaced brittle polling jobs with agents that wake on real signals, follow through, and stay inside the budget we set.",
    author: { name: "Dani Raulisa", role: "VP Engineering, Monolyth Dev", avatarUrl: "/images/testimonials/dani-raulisa.png" },
    metrics: [
      { icon: <HugeiconsIcon icon={Activity03Icon} />, label: "10× faster response to customer events" },
      { icon: <HugeiconsIcon icon={TimeScheduleIcon} />, label: "0 missed handoffs across active workflows" },
    ] as const,
  },
];

export function CustomerStoriesSection() {
  return (
    <section id="customers" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Customer stories</SectionLabel>
              <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
                <span className="block text-foreground">Teams moving faster</span>
                <span className="mt-1 block text-muted-foreground lg:mt-3">with autonomous work.</span>
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-4">
              See how operations teams turn recurring work into agent-led systems that stay responsive, governed, and in context.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {operationsStories.map((story) => (
              <div key={story.id} className="relative overflow-hidden rounded-[14px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]">
                <CustomerStoryStack
                  cases={[story]}
                  className="max-w-none px-0 py-0 lg:py-0"
                  frameClassName="w-full max-w-none"
                  cardClassName="overflow-hidden rounded-[8px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]"
                />
                <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
