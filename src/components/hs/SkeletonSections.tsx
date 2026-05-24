import { SectionHeader } from "./ProductSection";
import { useHs, type Goal } from "@/lib/hs-context";
import {
  TrendingUp,
  Wallet,
  Megaphone,
  LayoutDashboard,
  Tablet,
  Plug,
  Boxes,
  Headphones,
  Megaphone as MegaphoneAlt,
  Smartphone,
  Heart,
  CalendarDays,
  Globe,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import rider from "@/assets/delivery-rider.jpg";
import { ProductCard, type ProductCardData } from "./ProductCard";
import { ProductIndex, slugifyProduct } from "./ProductIndex";

function isOn(goal: Goal | null, target: Goal) {
  return goal === target;
}

/* ============================================================
   INCREASE ORDER VALUE & VOLUME — flagship: RDF/HPlus
   ============================================================ */

const AOV_FLAGSHIP: ProductCardData = {
  name: "RDF / HPlus",
  subhead: "Free-delivery membership that locks in your best customers.",
  body: null,
  benefits: ["3× order frequency", "+27% basket size", "Lower CAC per repeat"],
  testimonial: {
    quote:
      "A leading Riyadh Arabic QSR saw +47% monthly order frequency in the first 90 days after enabling HPlus.",
  },
  economics: [
    { label: "Pricing", value: "Revenue share", note: "no upfront" },
    { label: "Expected lift", value: "+312%", note: "orders vs non-members" },
    { label: "Payout cadence", value: "[Payout cadence]" },
  ],
};

const AOV_SECONDARY: ProductCardData[] = [
  {
    name: "Super Saver",
    subhead: "Smart price drops on selected items to drive volume.",
    body: null,
    benefits: ["+18% units per order", "Margin-safe items only", "Auto-pricing engine"],
    testimonial: {
      quote: "A Jeddah burger chain lifted weekday AOV by 19% after enabling Super Saver on its top 10 SKUs.",
    },
    economics: [
      { label: "Pricing", value: "Discount funded 50/50" },
      { label: "Expected lift", value: "+22%", note: "AOV uplift" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
  {
    name: "Full Menu Discounts",
    subhead: "Site-wide promo banners across the app.",
    body: null,
    benefits: ["Maximum reach", "Tier-based discounting", "Great for new launches"],
    testimonial: {
      quote: "A Dammam shawarma group ran a 20%-off menu weekend and saw +34% weekend orders MoM.",
    },
    economics: [
      { label: "Pricing", value: "Vendor-funded" },
      { label: "Expected lift", value: "+34%", note: "weekend orders" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
  {
    name: "Meal for One",
    subhead: "Curated single-portion bundles for solo diners.",
    body: null,
    benefits: ["+SAR 12 AOV", "Targets lunch crowd", "Pre-built bundles"],
    testimonial: {
      quote: "A Khobar café added 4 Meal-for-One bundles and lifted weekday lunch AOV by 15% in 6 weeks.",
    },
    economics: [
      { label: "Pricing", value: "Bundle pricing", note: "no fee" },
      { label: "Expected lift", value: "+15%", note: "weekday lunch AOV" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
  {
    name: "HRewards",
    subhead: "Stamp-card loyalty. Repeat customers get rewards on us.",
    body: null,
    benefits: ["+2.1× repeat rate", "HungerStation-funded", "Zero setup"],
    testimonial: {
      quote: "A Riyadh dessert brand doubled its 60-day repeat rate after joining HRewards in its first month.",
    },
    economics: [
      { label: "Pricing", value: "Funded by HungerStation" },
      { label: "Expected lift", value: "+2.1×", note: "60-day repeat" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
];

export function OrderValueSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "aov");

  return (
    <section id="order-value" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        icon={TrendingUp}
        eyebrow="Increase Order Value & Volume"
        title="More orders. Bigger baskets."
        copy="Tools that grow how often customers order — and how much they spend per order."
        highlight={highlight}
      />

      <div className="container-x pb-20 md:pb-28">
        <ProductCard data={AOV_FLAGSHIP} size="flagship" highlight={highlight} />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {AOV_SECONDARY.map((p) => (
            <ProductCard key={p.name} data={p} size="secondary" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ATTRACT NEW CUSTOMERS — flagship: Sponsored Listing
   ============================================================ */

const ATTRACT_FLAGSHIP: ProductCardData = {
  name: "Sponsored Listing",
  subhead: "Bid your way to the top of the home feed.",
  body: null,
  benefits: ["+3× impressions", "Pay only per click", "Live bid control"],
  steps: [
    { t: "Set a daily budget", d: "Choose cities, dayparts, and a max CPC in the ads portal." },
    { t: "We auction in real time", d: "Your listing competes for premium home-feed slots on every session." },
    { t: "Track ROAS live", d: "See spend, orders and incremental GMV update by the hour." },
  ],
  testimonial: null,
  economics: [
    { label: "Pricing", value: "CPC", note: "from SAR 1.20" },
    { label: "Expected return", value: "5× ROAS", note: "avg" },
    { label: "Payout cadence", value: "[Payout cadence]" },
  ],
};

const ATTRACT_SECONDARY: ProductCardData[] = [
  {
    name: "Keyword Search",
    subhead: "Own the searches that already want you.",
    body: null,
    benefits: ["Intent-rich traffic", "Cuisine & brand keywords", "Beat the chains"],
    steps: [
      { t: "Pick your keywords", d: "Bid on cuisines, dishes, or competitor brand names relevant to your menu." },
      { t: "Appear above organic", d: "Sponsored result sits in the #1 slot on every matching search." },
      { t: "Refine weekly", d: "Your AM tunes keyword mix from a weekly performance report." },
    ],
    economics: [
      { label: "Pricing", value: "CPC", note: "from SAR 1.50" },
      { label: "Expected return", value: "5× ROAS", note: "avg" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
  {
    name: "Display Ads",
    subhead: "Premium banners in the discovery tab.",
    body: null,
    benefits: ["Full-color creative", "Category targeting", "Brand recall lift"],
    steps: [
      { t: "Send creative", d: "Upload a banner — or have our studio design it for you." },
      { t: "Pick a slot", d: "Discovery, cuisine pages, or city-specific placements." },
      { t: "[Step 3]", d: "[NEEDS CONTENT — to be drafted]" },
    ],
    economics: [
      { label: "Pricing", value: "CPM", note: "weekly buys" },
      { label: "Expected return", value: "5× ROAS", note: "avg" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
  {
    name: "Awareness Banner",
    subhead: "Full-bleed hero banner for launches.",
    body: null,
    benefits: ["Massive reach", "Launch-day spike", "Premium placement"],
    steps: [
      { t: "Book a window", d: "Reserve a day or weekend with your account manager." },
      { t: "Go wide", d: "Hero banner served to every active user in your selected cities." },
      { t: "[Step 3]", d: "[NEEDS CONTENT — to be drafted]" },
    ],
    economics: [
      { label: "Pricing", value: "Flat fee", note: "per day" },
      { label: "Expected return", value: "5× ROAS", note: "avg" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
  {
    name: "Offer Hour / FlashDeals",
    subhead: "Time-boxed offers that spike orders.",
    body: null,
    benefits: ["Fill dead hours", "+62% off-peak orders", "Urgency built in"],
    steps: [
      { t: "Pick the hour", d: "Choose the off-peak window you want to fill (e.g. 3–5pm)." },
      { t: "Set the offer", d: "Discount, free item, or bundle — visible across the app." },
      { t: "[Step 3]", d: "[NEEDS CONTENT — to be drafted]" },
    ],
    economics: [
      { label: "Pricing", value: "Commission on uplift" },
      { label: "Expected return", value: "5× ROAS", note: "avg" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
  {
    name: "Splash Screen",
    subhead: "First impression — app-open takeover.",
    body: null,
    benefits: ["100% share of voice", "Highest recall", "1-tap to your store"],
    steps: [
      { t: "Reserve the day", d: "Limited to one brand per city per day. Booked via AM." },
      { t: "Own the open", d: "Your creative is the first thing every user sees that day." },
      { t: "[Step 3]", d: "[NEEDS CONTENT — to be drafted]" },
    ],
    economics: [
      { label: "Pricing", value: "Flat fee", note: "per day" },
      { label: "Expected return", value: "5× ROAS", note: "avg" },
      { label: "Payout cadence", value: "[Payout cadence]" },
    ],
  },
];

export function AttractSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "newcustomers");
  return (
    <section
      id="attract"
      className="relative scroll-mt-24 border-t border-border bg-background text-foreground"
    >
      <SectionHeader
        icon={Megaphone}
        eyebrow="Attract New Customers"
        title="Be the first thing they tap."
        copy="The full ad stack across HungerStation — from sponsored placements to time-boxed flash deals — running where 9M+ Saudis already decide what to eat."
        highlight={highlight}
      />
      <div className="container-x pb-20 md:pb-28">
        {/* Stat band */}
        <div className="grid gap-6 rounded-3xl border bg-card p-8 md:grid-cols-3 md:p-10">
          <div className="md:col-span-2">
            <div className="font-display text-5xl md:text-6xl text-foreground">
              30K<span className="text-[color:var(--brand-yellow)]">+</span>{" "}
              <span className="text-muted-foreground text-3xl md:text-4xl font-display">
                brands advertise on HungerStation.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:border-l md:border-border md:pl-10">
            <div>
              <div className="font-display text-3xl text-foreground">5×</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                Avg ROAS
              </div>
            </div>
            <div>
              <div className="font-display text-3xl text-foreground">9M+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                Reachable users
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ProductCard data={ATTRACT_FLAGSHIP} size="flagship" highlight={highlight} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {ATTRACT_SECONDARY.map((p) => (
            <ProductCard key={p.name} data={p} size="secondary" />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Booking channels:
          <span className="rounded-full border px-3 py-1">Via Account Manager</span>
          <span className="rounded-full border px-3 py-1">Self-Booking Portal</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FUND YOUR GROWTH — Mofawter (single flagship)
   ============================================================ */

const MOFAWTER: ProductCardData = {
  name: "Mofawter",
  subhead: "Vendor financing — upfront payout, repay automatically from a small share of each order.",
  body: "HungerStation's vendor financing. Get an upfront payout, repay automatically from a small share of each order. No paperwork, no collateral, no fixed monthly payments.",
  image: (
    <img
      src={rider}
      alt="HungerStation rider in Riyadh"
      loading="lazy"
      className="rounded-2xl w-full aspect-[4/5] object-cover"
    />
  ),
  benefits: ["Paid in 48 hours", "No collateral", "Repays from sales", "No fixed installments"],
  steps: [
    {
      t: "We assess your sales history",
      d: "Mofawter looks at your HungerStation order history — no bank statements, no paperwork.",
    },
    {
      t: "You get paid in 48 hours",
      d: "A lump-sum payout lands in your account within two business days of approval.",
    },
    {
      t: "Repay as you sell",
      d: "We deduct a small % of each future order until the advance is repaid. No fixed installments.",
    },
  ],
  testimonial: {
    quote: "Example: SAR 180K unlocked for a Riyadh fast-casual to refresh its kitchen.",
  },
  economics: [
    { label: "Avg payout", value: "48h", note: "from approval" },
    { label: "Limit", value: "~10%", note: "of annual GMV" },
    { label: "Collateral", value: "0", note: "none required" },
  ],
};

export function FinancingSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "financing");

  return (
    <section id="financing" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        icon={Wallet}
        eyebrow="Fund Your Growth"
        title="Fund Your Growth."
        copy="Mofawter is HungerStation's vendor financing. Get an upfront payout, repay automatically from a small share of each order. No paperwork, no collateral, no fixed monthly payments."
        highlight={highlight}
      />
      <div className="container-x pb-20 md:pb-28">
        <ProductCard data={MOFAWTER} size="flagship" highlight={highlight} />
      </div>
    </section>
  );
}

/* ============================================================
   OPTIMIZE OPERATIONS — Vendor Portal flagship + 2 secondary
   + 9-module mini grid (unchanged)
   ============================================================ */

const OPS_FLAGSHIP: ProductCardData = {
  name: "Vendor Portal",
  subhead:
    "Your command center. Menus, pricing, hours and performance — managed from one place, across every branch.",
  body: "A single web dashboard for every HungerStation operation. Update menus and pricing, monitor live orders, manage promos, pull performance reports, and assign role-based access to your team — across one or many branches.",
  benefits: ["Multi-branch ready", "Real-time edits", "Role-based access", "Live analytics"],
  steps: [
    { t: "[Step 1]", d: "[NEEDS CONTENT — to be drafted]" },
    { t: "[Step 2]", d: "[NEEDS CONTENT — to be drafted]" },
    { t: "[Step 3]", d: "[NEEDS CONTENT — to be drafted]" },
  ],
  testimonial: null,
};

const OPS_SECONDARY: ProductCardData[] = [
  {
    name: "Order Management Suite",
    subhead:
      "The restaurant-side order flow — from incoming ticket to dispatcher handover. Built for high-volume kitchens.",
    body: null,
    benefits: ["Tablet + printer kit", "Dispatcher integration", "Handover tracking"],
  },
  {
    name: "POS Integrations",
    subhead:
      "Already on Deliverect, FeedUs, UrbanPiper, Grubtech, or POSist? Plug in directly and receive HungerStation orders in your existing flow.",
    body: null,
    benefits: ["Native sync", "No double-entry", "Live menu push"],
  },
];

const PLATFORM_MODULES = [
  { icon: Boxes, name: "Stock & Inventory", desc: "Track ingredient and item availability in real-time." },
  { icon: Headphones, name: "Call Center Panel", desc: "HungerStation customer service routes issues directly to your team." },
  { icon: MegaphoneAlt, name: "Marketing Tool", desc: "Run targeted promos from the vendor portal." },
  { icon: Smartphone, name: "Cockpit App", desc: "Mobile control center for managers on the go." },
  { icon: Heart, name: "Loyalty", desc: "HRewards integration for customer retention." },
  { icon: CalendarDays, name: "Table Reservation", desc: "Manage in-restaurant bookings alongside delivery." },
  { icon: Globe, name: "Online / Web Ordering", desc: "White-label ordering for your own channels." },
  { icon: MessageSquare, name: "Feedback Management", desc: "Customer ratings and reviews dashboard." },
  { icon: BarChart3, name: "Performance Reports", desc: "Daily, weekly, and monthly analytics." },
];

// keep icons referenced so unused imports don't break — Tablet/Plug shown via PLATFORM headers
void Tablet;
void Plug;

export function OpsSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "ops");
  return (
    <section id="ops" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        icon={LayoutDashboard}
        eyebrow="Optimize Operations"
        title="Run a tighter kitchen."
        copy="The back-office stack — vendor portal, order management, POS integrations, and a built-in platform of tools that come with HungerStation."
        highlight={highlight}
      />

      <div className="container-x">
        <ProductCard data={OPS_FLAGSHIP} size="flagship" highlight={highlight} />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {OPS_SECONDARY.map((p) => (
            <ProductCard key={p.name} data={p} size="secondary" />
          ))}
        </div>

        {/* Built-in platform tools — 9-module mini grid */}
        <div className="mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Built-in platform tools
              </div>
              <h3 className="mt-3 font-display text-4xl md:text-5xl text-balance max-w-[18ch]">
                Tools that come with the platform.
              </h3>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Nine modules included by default — no extra licensing, no separate logins.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_MODULES.map((m) => (
              <div
                key={m.name}
                className="group flex gap-4 rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-cream">
                  <m.icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-display text-lg text-foreground leading-tight">{m.name}</div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-20" />
    </section>
  );
}
