import RisingLines from "@/components/originkit/ui/risinglines";
import { SectionLabel } from "@/components/ui/section-label";

export function PricingTiersSection() {
  return (
    <section id="pricing" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Über uns</SectionLabel>
              <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
                <span className="block text-foreground">Technologie mit</span>
                <span className="mt-1 block text-muted-foreground lg:mt-3">Verantwortung.</span>
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-4">
              Wir entwickeln zuverlässige Agentensysteme, mit denen ambitionierte Teams schneller vorankommen, ohne die Kontrolle zu verlieren.
            </p>
          </div>
          <div className="mt-8 grid overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.02] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 bg-[#08090d] lg:min-h-[430px] lg:border-r lg:border-b-0">
              <RisingLines
                className="absolute inset-0 h-full w-full"
                particles={720}
                color="#60d8ff"
                riseSpeed={18}
                opacity={72}
                scale={7}
                showHorizon={true}
                horizonColor="#8b5cf6"
                horizonOpacity={76}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent" />
            </div>
            <div className="grid grid-rows-[auto_1fr]">
              <div className="grid grid-cols-3 gap-4 border-b border-white/10 p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-sm text-muted-foreground">Seit</p>
                  <p className="mt-3 text-4xl tracking-tight text-foreground sm:text-5xl">2019</p>
                  <p className="mt-2 text-xs text-muted-foreground">mit Sorgfalt entwickelt</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Umgesetzt</p>
                  <p className="mt-3 text-4xl tracking-tight text-foreground sm:text-5xl">50+</p>
                  <p className="mt-2 text-xs text-muted-foreground">Agenten-Workflows</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Partner</p>
                  <p className="mt-3 text-4xl tracking-tight text-foreground sm:text-5xl">20+</p>
                  <p className="mt-2 text-xs text-muted-foreground">Teams in Bewegung</p>
                </div>
              </div>
              <div className="flex items-end p-6 sm:p-8 lg:p-10">
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                  Unser Fokus liegt auf transparenter Automatisierung, durchdachten Sicherheitsvorkehrungen und Systemen, die Menschen unterstützen, statt sie zu ersetzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
