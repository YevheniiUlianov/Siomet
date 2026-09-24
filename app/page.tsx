import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { PricingTiersSection } from "@/components/landing/pricing-tiers-section";
import { ProductsSection } from "@/components/landing/products-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { CustomerStoriesSection } from "@/components/landing/customer-stories-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { SectionDivider } from "@/components/landing/section-divider";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-1/2 z-[51] w-full max-w-[1400px] -translate-x-1/2">
        <span className="absolute inset-y-0 left-0 w-px bg-white/15 mix-blend-difference lg:left-5" />
        <span className="absolute inset-y-0 right-0 w-px bg-white/15 mix-blend-difference lg:right-5" />
        <span className="absolute inset-y-0 left-px w-px bg-white/15 mix-blend-difference lg:left-7" />
        <span className="absolute inset-y-0 right-px w-px bg-white/15 mix-blend-difference lg:right-7" />
      </div>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SectionDivider />
      <MetricsSection />
      <SectionDivider />
      <PricingTiersSection />
      <SectionDivider />
      <ProductsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <CustomerStoriesSection />
      <SectionDivider />
      <CtaSection />
      <SectionDivider />
      <FooterSection />
    </main>
  );
}
