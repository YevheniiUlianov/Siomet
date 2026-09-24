"use client";

import React from "react";
import Link from "next/link";
import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarButton } from "@/components/ui/star-button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

// ----- Subcomponents -----
function Card({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[14px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]",
        className,
      )}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
    </div>
  );
}

function Header({
  children,
  className,
  glassEffect = true,
  ...props
}: React.ComponentProps<"div"> & { glassEffect?: boolean }) {
  return (
    <div
      className={cn(
        "relative mb-4 overflow-hidden rounded-[8px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]",
        className,
      )}
      {...props}
    >
      {glassEffect && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-48 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)",
          }}
        />
      )}
      {children}
    </div>
  );
}

function Description({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground text-xs", className)} {...props} />
  );
}

function PlanName({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function Price({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("mb-3 flex items-end gap-1", className)} {...props} />
  );
}

function MainPrice({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("text-3xl font-extrabold tracking-tight", className)}
      {...props}
    />
  );
}

function Period({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("text-foreground/80 pb-1 text-sm", className)}
      {...props}
    />
  );
}

function Body({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-6 p-3", className)} {...props} />;
}

function List({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul className={cn("flex flex-col gap-3", className)} {...props} />;
}

function ListItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "text-muted-foreground flex items-start gap-3 text-sm",
        className,
      )}
      {...props}
    />
  );
}

// ----- Configurable PricingTiers Component -----
export interface Plan {
  title: string;
  price: string;
  annualPrice?: string;
  period: string;
  description: string;
  features: string[];
  cta?: string;
}

interface PricingTiersProps {
  plans: Plan[];
  heading?: string;
  subheading?: string;
  showHeader?: boolean;
  className?: string;
  containerClassName?: string;
  gridClassName?: string;
}

export default function PricingTiers({
  plans,
  heading = "Flexible Plans for Everyone",
  subheading = "Choose the plan that fits your workflow and budget.",
  showHeader = true,
  className,
  containerClassName,
  gridClassName,
}: PricingTiersProps) {
  const [annualPlans, setAnnualPlans] = React.useState<Record<string, boolean>>({});

  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className={cn("mx-auto max-w-6xl px-6", containerClassName)}>
        {showHeader && (
          <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
            <h2 className="text-4xl font-semibold lg:text-5xl">{heading}</h2>
            <Description>{subheading}</Description>
          </div>
        )}

        <div className={cn("mt-12 grid gap-6 md:mt-20 md:grid-cols-3", gridClassName)}>
          {plans.map((plan) => {
            const supportsAnnualBilling = Boolean(plan.annualPrice);
            const isAnnual = annualPlans[plan.title] ?? false;

            return (
            <Card key={plan.title}>
              <Header glassEffect>
                <div className="flex items-center justify-between gap-2">
                  <PlanName>{plan.title}</PlanName>
                  {supportsAnnualBilling && (
                    <div className="flex items-center gap-1.5">
                      <Switch
                        id={`${plan.title.toLowerCase()}-annual-billing`}
                        checked={isAnnual}
                        onCheckedChange={(checked) =>
                          setAnnualPlans((current) => ({ ...current, [plan.title]: checked }))
                        }
                        aria-label={`Bill ${plan.title} yearly`}
                        className="border-transparent data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-zinc-500 [&_[data-slot=switch-thumb]]:bg-white"
                      />
                      <label
                        htmlFor={`${plan.title.toLowerCase()}-annual-billing`}
                        className="cursor-pointer text-[10px] font-medium text-muted-foreground"
                      >
                        Yearly
                      </label>
                      <span
                        className={cn(
                          "inline-flex rounded-full border px-1.5 py-0 text-[9px] font-medium leading-4 transition-colors",
                          isAnnual
                            ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                            : "border-white/10 bg-white/[0.04] text-muted-foreground",
                        )}
                      >
                        Save 20%
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <Price>
                    <MainPrice>{isAnnual ? plan.annualPrice : plan.price}</MainPrice>
                    <Period>{plan.period}</Period>
                  </Price>
                </div>
                <Description>{plan.description}</Description>
                {plan.title === "Team" ? (
                  <StarButton
                    backgroundColor="#000000"
                    starColor="#d4d4d8"
                    className="mt-4 w-full border border-slate-200/45"
                  >
                    {plan.cta ?? "Get Started"}
                  </StarButton>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-full rounded-full border-white/25 bg-white/[0.06] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_rgba(0,0,0,0.18)] backdrop-blur-md hover:bg-white/[0.1] hover:text-foreground"
                  >
                    <Link href="#">{plan.cta ?? "Get Started"}</Link>
                  </Button>
                )}
              </Header>

              <Body>
                <List>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i} className="flex items-center gap-2">
                      <CheckCheck className="size-4 text-foreground" aria-hidden="true" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
              </Body>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
