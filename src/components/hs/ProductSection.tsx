import { Smartphone, type LucideIcon } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { useHs } from "@/lib/hs-context";
import { type ProductCardData } from "./ProductCard";
import { ProductFamilyLayout } from "./ProductFamilyLayout";
import dineInImage from "@/assets/dine-in-checkout.jpg";

// Source: Jan 2025 deck, page 9 (Delivery Service) + Why HS pillars
const DELIVERY: ProductCardData = {
  name: "Delivery Service.",
  subhead:
    "Your 24/7 delivery partner across 100+ cities. Our riders handle the last mile, you focus on the food.",
  stats: [
    { value: "100+", label: "cities served 24/7" },
    { value: "~30 min", label: "avg delivery time" },
    { value: "Largest", label: "fleet in KSA" },
  ],
  statsStatus: "directional",
  image: <PhoneMockup />,
  benefits: [
    "100+ cities, served 24/7",
    "Largest fleet in Saudi Arabia",
    "Insured riders, live tracking",
    "Onboard in days",
  ],
  steps: [
    { t: "Sign up.", d: "Register on the HungerStation Vendor Portal." },
    { t: "Receive orders.", d: "Customers browse, pick, and pay in the app. Orders land in your Portal or POS." },
    { t: "We deliver.", d: "Orders are assigned to nearby riders. Customers and you track in real time." },
  ],
  testimonial: {
    quote: "[Vendor testimonial — NEEDS Omar (real KSA partner with consent)]",
    author: "[Vendor name, brand, city]",
  },
  economics: [
    { label: "Commission", value: "[NEEDS Sherif]", note: "Tiered by volume" },
    { label: "Setup fee", value: "[NEEDS Sherif]" },
    { label: "Payouts", value: "[TBD with Sales]" },
  ],
  scenarioKey: "delivery",
};

// Source: Jan 2025 deck, page 10 (Self Pick-Up) — adapted to Pick-Up rename + In-Car absorption
const PICKUP: ProductCardData = {
  name: "Pick-Up",
  subhead: "Let customers grab orders directly from your restaurant — no delivery cost, more profile visibility.",
  body: "Customers order in the HungerStation app and pick up at your restaurant — at the counter, or curbside (In-Car). No rider, no delivery fee, just a confirmed order waiting for them. Vendors use Pick-Up to boost profile, increase revenue, and run pickup-only promotional offers.",
  stats: [
    { value: "0", label: "rider/delivery fee" },
    { value: "Counter or In-Car", label: "pickup modes" },
    { value: "+8-12%", label: "incremental orders" },
  ],
  statsStatus: "directional",
  benefits: [
    "Counter or curbside (In-Car) pickup",
    "No rider, no delivery cost",
    "Pickup-only promotional offers available",
    "Fresher handoff — food straight from kitchen to customer",
  ],
  steps: [
    { t: "Customer orders pickup.", d: "Selects Pick-Up (counter or In-Car) in the HungerStation app." },
    { t: "You prep.", d: "Order arrives labeled \"Take Away\" — no rider involved. Make the food." },
    { t: "Customer picks up.", d: "At the counter, or you bring it curbside for In-Car orders — your choice." },
  ],
  testimonial: {
    quote: "[Vendor testimonial — NEEDS Omar (real KSA partner running pickup)]",
    author: "[Vendor name, brand, city]",
  },
  economics: [
    { label: "Commission", value: "[NEEDS Sherif]", note: "Confirm delta vs Delivery commission" },
    { label: "Setup fee", value: "[NEEDS Sherif]" },
    { label: "Branch toggle", value: "Yes — enable/disable per branch" },
  ],
  scenarioKey: "pickup",
};

const DINEIN: ProductCardData = {
  name: "Dine-In",
  subhead: "Bring more guests through your doors.",
  stats: [
    { value: "0", label: "rider fee" },
    { value: "Pre-paid", label: "committed spend" },
    { value: "9M+", label: "deciding where to eat in the app" },
  ],
  body: "Eat-in ordering, built into the HungerStation app. Customers browse your menu, place an order before they arrive, and show up ready to be served — confirmed order, committed spend.",
  image: (
    <img
      src={dineInImage}
      alt="HungerStation Dine-In checkout screen showing Pick-up Options with Dine In selected"
      loading="lazy"
      className="w-full max-w-xs mx-auto rounded-2xl"
    />
  ),
  benefits: [
    "No rider fee — guest comes to you",
    "Visible to \"where-to-eat\" deciders",
    "Pre-ordered = committed spend",
    "App-driven loyalty — reviews and repeats",
  ],
  stepsNote: "Zero changes to how your kitchen runs.",
  steps: [
    { t: "Customer orders eat-in.", d: "Browses your menu in the HungerStation app and places an order before arriving." },
    { t: "Order arrives labeled \"Dine In.\"", d: "Hits your existing system — staff knows it's for a table, not a bag. No new devices." },
    { t: "Guest arrives ready.", d: "They collect from the counter, or you serve them — your choice." },
  ],
  callout: {
    title: "You're in Control.",
    body: "Toggle Dine-In on or off per branch from the vendor portal. Turning it off doesn't affect Pick-Up. No risk to your existing operations.",
  },
  testimonial: {
    quote: "[Vendor testimonial — NEEDS Omar]",
    author: "[Vendor name, brand, city]",
  },
  economics: [
    { label: "Rider fee", value: "0", note: "Guest comes to you" },
    { label: "Commission", value: "[TBD with Sales]" },
    { label: "Setup", value: "SAR 0" },
    { label: "Per-branch toggle", value: "Yes" },
  ],
  scenarioKey: "dine-in",
};

// Source: NONE. HSK content was dropped from the Jan 2025 deck.
// All copy below is placeholder until HSK product team provides current positioning.
// OPEN STRATEGIC DECISION: HSK in or out of the guide?
const KITCHENS: ProductCardData = {
  name: "HungerStation Kitchens",
  subhead: "[NEEDS Karim / handover — source current HSK positioning, or drop from guide]",
  body: "[NEEDS HSK content — value prop, target vendor, economics, case studies]",
  benefits: [
    "[NEEDS HSK content]",
    "[NEEDS HSK content]",
    "[NEEDS HSK content]",
  ],
  economics: [
    { label: "Setup", value: "[NEEDS HSK team]" },
    { label: "Commission", value: "[NEEDS HSK team]" },
    { label: "Lead time to launch", value: "[NEEDS HSK team]" },
  ],
  scenarioKey: "hsk",
};

export function GrowOnlineSection() {
  const { goal } = useHs();
  const highlight = goal === "online";

  return (
    <section id="grow-online" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        icon={Smartphone}
        eyebrow="Grow Online"
        title="Take orders across Saudi Arabia."
        copy="Delivery, pickup, and dark kitchens. Three ways to put your restaurant in front of customers wherever — and however — they want to eat."
        highlight={highlight}
      />

      <ProductFamilyLayout
        sectionId="grow-online"
        products={[DELIVERY, PICKUP, DINEIN, KITCHENS]}
        highlight={highlight}
      />
    </section>
  );
}

export function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  copy,
  highlight,
}: {
  icon: LucideIcon;
  index?: string;
  eyebrow: string;
  title: string;
  copy: string;
  highlight?: boolean;
}) {
  return (
    <div className="container-x pt-20 md:pt-28 pb-16 md:pb-20">
      <div className="inline-flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--brand-yellow)] text-ink">
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
        <span className="text-sm font-semibold text-foreground">{eyebrow}</span>
        {highlight && (
          <span className="h-2 w-2 rounded-full bg-[color:var(--brand-yellow)] animate-pulse-ring" />
        )}
      </div>
      <h2 className="mt-3 font-display text-5xl md:text-7xl text-balance">{title}</h2>
      <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{copy}</p>
    </div>
  );
}
