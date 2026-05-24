import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Goal = "online" | "aov" | "newcustomers" | "financing" | "ops";

export const GOAL_META: Record<Goal, { label: string; sectionId: string; products: string[] }> = {
  online: {
    label: "Grow Online",
    sectionId: "grow-online",
    products: ["Delivery Service", "Self Pick-Up", "HungerStation Kitchens"],
  },
  aov: {
    label: "Increase Order Value & Volume",
    sectionId: "order-value",
    products: ["RDF / HPlus", "Super Saver", "Full Menu Discounts", "Meal for One", "HRewards"],
  },
  newcustomers: {
    label: "Attract New Customers",
    sectionId: "attract",
    products: ["Sponsored Listing", "Keyword Search", "Display Ads", "FlashDeals", "Splash Screen"],
  },
  financing: {
    label: "Fund Your Growth",
    sectionId: "financing",
    products: ["Mofawter"],
  },
  ops: {
    label: "Optimize Operations",
    sectionId: "ops",
    products: ["Vendor Portal", "Order Management Suite", "POS Integrations"],
  },
};

type Ctx = {
  goal: Goal | null;
  setGoal: (g: Goal | null) => void;
  engaged: Set<string>;
  markEngaged: (id: string) => void;
};

const HsContext = createContext<Ctx | null>(null);

export function HsProvider({ children }: { children: ReactNode }) {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [engaged, setEngaged] = useState<Set<string>>(new Set());

  const value = useMemo<Ctx>(
    () => ({
      goal,
      setGoal,
      engaged,
      markEngaged: (id) =>
        setEngaged((prev) => {
          if (prev.has(id)) return prev;
          const next = new Set(prev);
          next.add(id);
          return next;
        }),
    }),
    [goal, engaged],
  );

  return <HsContext.Provider value={value}>{children}</HsContext.Provider>;
}

export function useHs() {
  const ctx = useContext(HsContext);
  if (!ctx) throw new Error("useHs must be used inside HsProvider");
  return ctx;
}
