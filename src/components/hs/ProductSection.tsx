import { Smartphone, type LucideIcon } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { useHs } from "@/lib/hs-context";
import vendor from "@/assets/vendor-portrait.jpg";
import { ProductCard, type ProductCardData } from "./ProductCard";

const DELIVERY: ProductCardData = {
  name: "Delivery Service.",
  subhead:
    "Boost sales across 100+ cities. Our riders handle the last mile, you focus on the food.",
  body: "A managed end-to-end delivery channel. We bring the customers, the riders, the live tracking and the support — you bring the kitchen.",
  image: <PhoneMockup />,
  benefits: ["+10× orders potential", "30-min avg delivery", "Insured riders", "Live order dashboard"],
  steps: [
    { t: "Customer orders.", d: "Browse, pick, pay — all in the HungerStation app." },
    { t: "You prep.", d: "Receive the order in the Vendor Portal or your POS. Make the food." },
    { t: "We deliver.", d: "Our riders handle the last mile. Real-time tracking from kitchen to customer." },
  ],
  testimonial: {
    quote: "[Vendor quote about reaching new customers across KSA — 2 sentences.]",
    author: "Ahmed Al-Saud",
    role: "Owner · Bayt Mansaf · Riyadh",
    avatar: vendor,
    stats: [
      { n: "+312%", l: "Orders" },
      { n: "4.9★", l: "Rating" },
      { n: "7", l: "Branches" },
    ],
  },
  economics: [
    { label: "Commission", value: "From 18%", note: "Tiered by volume" },
    { label: "Setup fee", value: "SAR 0", note: "Onboarded in 7 days" },
    { label: "Payouts", value: "Weekly", note: "Net of commission" },
  ],
};

const SELF_PICKUP: ProductCardData = {
  name: "Self Pick-Up",
  subhead: "Let customers grab orders without paying delivery.",
  body: null,
  benefits: ["Zero delivery cost", "Higher margin per order", "Great for cafés & QSR"],
};

const KITCHENS: ProductCardData = {
  name: "HungerStation Kitchens",
  subhead: "Cloud kitchens in high-demand zones, fully managed by us.",
  body: null,
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

      <div className="container-x">
        <ProductCard data={DELIVERY} size="flagship" highlight={highlight} />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ProductCard data={SELF_PICKUP} size="secondary" />
          <ProductCard data={KITCHENS} size="secondary" />
        </div>
      </div>
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
    <div className="container-x py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--brand-yellow)] text-ink">
              <Icon className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span className="text-sm font-semibold text-foreground">{eyebrow}</span>
            {highlight && (
              <span className="h-2 w-2 rounded-full bg-[color:var(--brand-yellow)] animate-pulse-ring" />
            )}
          </div>
        </div>
        <div>
          <h2 className="font-display text-5xl md:text-7xl text-balance">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{copy}</p>
        </div>
      </div>
    </div>
  );
}
