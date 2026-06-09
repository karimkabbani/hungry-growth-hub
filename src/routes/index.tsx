import { createFileRoute } from "@tanstack/react-router";
import { HsProvider } from "@/lib/hs-context";
import { Hero } from "@/components/hs/Hero";
import { WhyHungerStation } from "@/components/hs/WhyHungerStation";
import { GoalPicker } from "@/components/hs/GoalPicker";
import { SideNav } from "@/components/hs/SideNav";
import { GrowOnlineSection } from "@/components/hs/ProductSection";
import {
  OrderValueSection,
  AttractSection,
  FinancingSection,
  OpsSection,
} from "@/components/hs/SkeletonSections";
import { ScenarioDrawer } from "@/components/hs/ScenarioDrawer";
import { VendorStories } from "@/components/hs/VendorStories";
import { BuildYourPlan } from "@/components/hs/BuildYourPlan";
import { StickyCta } from "@/components/hs/StickyCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HungerStation for Restaurants — Your Door to Growth in Saudi Arabia" },
      {
        name: "description",
        content:
          "The 2025 product guide for HungerStation restaurant partners. Delivery, ads, financing and ops — engineered for 9M+ Saudi customers across 100+ cities.",
      },
      { property: "og:title", content: "HungerStation for Restaurants — 2025 Product Guide" },
      { property: "og:description", content: "How 55,000+ KSA restaurant partners grow on HungerStation." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <HsProvider>
      <main id="top" className="relative">
        <Hero />
        <SideNav />
        <WhyHungerStation />
        <GoalPicker />
        <GrowOnlineSection />
        <OrderValueSection />
        <AttractSection />
        <FinancingSection />
        <OpsSection />
        <VendorStories />
        <BuildYourPlan />
        <StickyCta />
        <ScenarioDrawer />

      </main>
    </HsProvider>
  );
}
