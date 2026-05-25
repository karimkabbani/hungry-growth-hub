import { Smartphone, type LucideIcon } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { useHs } from "@/lib/hs-context";
import vendor from "@/assets/vendor-portrait.jpg";
import { type ProductCardData } from "./ProductCard";
import { ProductFamilyLayout } from "./ProductFamilyLayout";
import dineInImage from "@/assets/dine-in-checkout.jpg";

const DELIVERY: ProductCardData = {
  name: "Delivery Service.",
  subhead:
    "Boost sales across 100+ cities. Our riders handle the last mile, you focus on the food.",
  stats: [
    { value: "+10×", label: "orders potential" },
    { value: "30 min", label: "avg delivery time" },
    { value: "100+", label: "cities live" },
  ],
  image: <PhoneMockup />,
  benefits: ["+10× orders potential", "30-min avg delivery", "Insured riders", "Live order dashboard"],
  steps: [
    { t: "Customer orders.", d: "Browse, pick, pay in the HungerStation app." },
    { t: "You prep.", d: "Receive the order in the Vendor Portal or your POS." },
    { t: "We deliver.", d: "Our riders handle the last mile, live-tracked." },
  ],
  testimonial: {
    quote: "[Vendor quote about reaching new customers across KSA — 2 sentences.]",
    author: "Ahmed Al-Saud",
    role: "Owner · Bayt Mansaf · Riyadh",
    avatar: vendor,
  },
  economics: [
    { label: "Commission", value: "From 18%", note: "Tiered by volume" },
    { label: "Setup fee", value: "SAR 0", note: "Onboarded in 7 days" },
    { label: "Payouts", value: "[TBD with Sales]" },
  ],
};

const PICKUP: ProductCardData = {
  name: "Pick-Up",
  subhead: "Let customers grab orders without paying delivery.",
  body: "Customers order in the HungerStation app and pick up at your restaurant — at the counter, or curbside (In-Car). No rider, no delivery fee, just a confirmed order waiting for them.",
  benefits: [
    "Zero delivery cost",
    "Counter or curbside (In-Car) pickup",
    "Higher margin per order",
    "Great for cafés & QSR",
  ],
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
};

const KITCHENS: ProductCardData = {
  name: "HungerStation Kitchens",
  subhead: "Cloud kitchens in high-demand zones, fully managed by us.",
  benefits: ["No real estate risk", "Open new neighborhoods fast", "Shared utilities"],
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
