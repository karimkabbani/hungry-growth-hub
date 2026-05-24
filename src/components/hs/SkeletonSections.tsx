import { SectionHeader } from "./ProductSection";
import { useHs, type Goal } from "@/lib/hs-context";
import foodSpread from "@/assets/food-spread.jpg";
import rider from "@/assets/delivery-rider.jpg";

function ProductGrid({ items, highlight }: { items: { name: string; pitch: string; tag?: string }[]; highlight?: boolean }) {
  return (
    <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <div
          key={p.name}
          className={`group rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl ${
            highlight ? "ring-2 ring-yellow/40" : ""
          }`}
        >
          <div className="flex items-start justify-between">
            <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
            {p.tag && (
              <span className="rounded-full bg-magenta/10 text-magenta px-2 py-0.5 text-[10px] uppercase tracking-widest font-semibold">
                {p.tag}
              </span>
            )}
          </div>
          <h4 className="mt-4 font-display text-2xl md:text-3xl">{p.name}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{p.pitch}</p>
          <div className="mt-6 text-sm font-semibold underline-offset-4 decoration-yellow decoration-4 group-hover:underline">
            Learn more →
          </div>
        </div>
      ))}
    </div>
  );
}

function isOn(goal: Goal | null, target: Goal) {
  return goal === target;
}

export function OrderValueSection() {
  const { goal } = useHs();
  return (
    <section id="order-value" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        index="03"
        eyebrow="Increase Order Value"
        title="Make every order worth more."
        copy="Loyalty, bundles, and smart discounts that lift average ticket without giving away margin."
        highlight={isOn(goal, "aov")}
      />
      <ProductGrid
        highlight={isOn(goal, "aov")}
        items={[
          { name: "RDF / HPlus", pitch: "Free delivery membership. Members order 3× more often.", tag: "Most popular" },
          { name: "Super Saver", pitch: "Smart price drops on selected items to drive volume." },
          { name: "Full Menu Discounts", pitch: "Site-wide promo banners across the app." },
          { name: "Meal for One", pitch: "Curated single-portion bundles for solo diners." },
          { name: "HRewards", pitch: "Stamp-card loyalty. Repeat customers get rewards on us." },
        ]}
      />
      <div className="container-x mt-10">
        <img src={foodSpread} alt="Saudi food spread" loading="lazy" className="rounded-3xl w-full aspect-[16/7] object-cover" />
      </div>
    </section>
  );
}

type AdProduct = {
  n: string;
  name: string;
  tagline: string;
  benefits: string[];
  steps: { t: string; d: string }[];
  pricing: string;
  roas: string;
  tag?: string;
};

const FEATURED_ADS: AdProduct[] = [
  {
    n: "01",
    name: "Sponsored Listing",
    tagline: "Bid your way to the top of the home feed.",
    benefits: ["+3× impressions", "Pay only per click", "Live bid control"],
    steps: [
      { t: "Set a daily budget", d: "Choose cities, dayparts, and a max CPC in the ads portal." },
      { t: "We auction in real time", d: "Your listing competes for premium home-feed slots on every session." },
      { t: "Track ROAS live", d: "See spend, orders and incremental GMV update by the hour." },
    ],
    pricing: "CPC · from SAR 1.20",
    roas: "5× ROAS (avg)",
    tag: "Most used",
  },
  {
    n: "02",
    name: "Keyword Search",
    tagline: "Own the searches that already want you.",
    benefits: ["Intent-rich traffic", "Cuisine & brand keywords", "Beat the chains"],
    steps: [
      { t: "Pick your keywords", d: "Bid on cuisines, dishes, or competitor brand names relevant to your menu." },
      { t: "Appear above organic", d: "Sponsored result sits in the #1 slot on every matching search." },
      { t: "Refine weekly", d: "Your AM tunes keyword mix from a weekly performance report." },
    ],
    pricing: "CPC · from SAR 1.50",
    roas: "5× ROAS (avg)",
    tag: "Highest intent",
  },
];

const SECONDARY_ADS: AdProduct[] = [
  {
    n: "03",
    name: "Display Ads",
    tagline: "Premium banners in the discovery tab.",
    benefits: ["Full-color creative", "Category targeting", "Brand recall lift"],
    steps: [
      { t: "Send creative", d: "Upload a banner — or have our studio design it for you." },
      { t: "Pick a slot", d: "Discovery, cuisine pages, or city-specific placements." },
    ],
    pricing: "CPM · weekly buys",
    roas: "5× ROAS (avg)",
  },
  {
    n: "04",
    name: "Awareness Banner",
    tagline: "Full-bleed hero banner for launches.",
    benefits: ["Massive reach", "Launch-day spike", "Premium placement"],
    steps: [
      { t: "Book a window", d: "Reserve a day or weekend with your account manager." },
      { t: "Go wide", d: "Hero banner served to every active user in your selected cities." },
    ],
    pricing: "Flat fee · per day",
    roas: "5× ROAS (avg)",
  },
  {
    n: "05",
    name: "Offer Hour / FlashDeals",
    tagline: "Time-boxed offers that spike orders.",
    benefits: ["Fill dead hours", "+62% off-peak orders", "Urgency built in"],
    steps: [
      { t: "Pick the hour", d: "Choose the off-peak window you want to fill (e.g. 3–5pm)." },
      { t: "Set the offer", d: "Discount, free item, or bundle — visible across the app." },
    ],
    pricing: "Commission on uplift",
    roas: "5× ROAS (avg)",
    tag: "Off-peak hero",
  },
  {
    n: "06",
    name: "Splash Screen",
    tagline: "First impression — app-open takeover.",
    benefits: ["100% share of voice", "Highest recall", "1-tap to your store"],
    steps: [
      { t: "Reserve the day", d: "Limited to one brand per city per day. Booked via AM." },
      { t: "Own the open", d: "Your creative is the first thing every user sees that day." },
    ],
    pricing: "Flat fee · per day",
    roas: "5× ROAS (avg)",
    tag: "Premium",
  },
];

export function AttractSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "newcustomers");
  return (
    <section id="attract" className="relative scroll-mt-24 border-t border-cream/10 bg-ink text-cream">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cream/50">04 — Product Family</div>
            <div className="mt-3 inline-flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${highlight ? "bg-[color:var(--brand-yellow)] animate-pulse-ring" : "bg-cream/30"}`} />
              <span className={`text-sm font-semibold ${highlight ? "text-[color:var(--brand-yellow)]" : "text-cream"}`}>Attract New Customers</span>
            </div>
          </div>
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-balance">Be the first thing they tap.</h2>
            <p className="mt-5 max-w-xl text-lg text-cream/70">
              The full ad stack across HungerStation — from sponsored placements to time-boxed flash deals — running where 9M+ Saudis already decide what to eat.
            </p>
          </div>
        </div>

        {/* Stat band */}
        <div className="mt-14 grid gap-6 rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 md:grid-cols-3 md:p-10">
          <div className="md:col-span-2">
            <div className="font-display text-5xl md:text-6xl">
              30K<span className="text-[color:var(--brand-yellow)]">+</span>{" "}
              <span className="text-cream/70 text-3xl md:text-4xl font-display">brands advertise on HungerStation.</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:border-l md:border-cream/15 md:pl-10">
            <div>
              <div className="font-display text-3xl">5×</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60 mt-1">Avg ROAS</div>
            </div>
            <div>
              <div className="font-display text-3xl">9M+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60 mt-1">Reachable users</div>
            </div>
          </div>
        </div>

        {/* Featured: Sponsored Listing + Keyword Search */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {FEATURED_ADS.map((p) => (
            <AdCard key={p.name} p={p} featured />
          ))}
        </div>

        {/* Secondary 2x2 */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {SECONDARY_ADS.map((p) => (
            <AdCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-cream/60">
          Booking channels:
          <span className="rounded-full border border-cream/20 px-3 py-1">Via Account Manager</span>
          <span className="rounded-full border border-cream/20 px-3 py-1">Self-Booking Portal</span>
        </div>
      </div>
    </section>
  );
}

function AdCard({ p, featured }: { p: AdProduct; featured?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 transition hover:bg-cream/[0.07] ${
        featured ? "md:p-10" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-xs text-cream/50">{p.n}</span>
        {p.tag && (
          <span className="rounded-full bg-[color:var(--brand-yellow)] text-ink px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold">
            {p.tag}
          </span>
        )}
      </div>

      <h3 className={`mt-5 font-display text-balance ${featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
        {p.name}
      </h3>
      <p className="mt-3 max-w-md text-cream/70">{p.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.benefits.map((b) => (
          <span key={b} className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs text-cream/90">
            {b}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">How it works</div>
        <ol className={`mt-4 grid gap-3 ${featured ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {p.steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-cream/10 bg-ink/40 p-4">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-cream/10 font-display text-xs text-cream">
                {i + 1}
              </div>
              <div className="mt-3 font-semibold text-sm text-cream">{s.t}</div>
              <p className="mt-1 text-xs text-cream/65 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 grid gap-4 rounded-2xl bg-ink/60 border border-cream/10 p-5 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">Pricing</div>
          <div className="font-display text-lg mt-1">{p.pricing}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">Expected return</div>
          <div className="font-display text-lg mt-1 text-[color:var(--brand-yellow)]">{p.roas}</div>
        </div>
        <a
          href="#plan"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-hover transition whitespace-nowrap"
        >
          Talk to my AM →
        </a>
      </div>
    </article>
  );
}


export function FinancingSection() {
  return (
    <section id="financing" className="relative scroll-mt-24 border-t border-border">
      <div className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-magenta text-magenta-foreground px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-semibold">
            New · Mofawter
          </div>
          <h2 className="mt-5 font-display text-5xl md:text-7xl text-balance">Cash today.<br />Repaid as you sell.</h2>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Mofawter is fast cash advances against your future HungerStation sales — repaid automatically as a small % of each order. No collateral, no fixed installments.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div><div className="font-display text-3xl">48h</div><div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Approval</div></div>
            <div><div className="font-display text-3xl">~10%</div><div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">of annual GMV</div></div>
            <div><div className="font-display text-3xl">0</div><div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Fixed installments</div></div>
          </div>
        </div>
        <div className="relative">
          <img src={rider} alt="HungerStation rider" loading="lazy" className="rounded-3xl w-full aspect-[4/5] object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-card border rounded-2xl p-5 max-w-[240px] shadow-xl">
            <div className="h-1 w-8 rounded-full bg-[color:var(--brand-yellow)]" />
            <div className="mt-3 font-display text-3xl text-foreground">SAR 180K</div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Example unlocked for a Riyadh fast-casual</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OpsSection() {
  const { goal } = useHs();
  return (
    <section id="ops" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        index="06"
        eyebrow="Optimize Operations"
        title="Run a tighter kitchen."
        copy="The back-office stack: a vendor portal, an order management suite, and POS integrations with the partners you already use."
        highlight={isOn(goal, "ops")}
      />
      <ProductGrid
        highlight={isOn(goal, "ops")}
        items={[
          { name: "Vendor Portal", pitch: "Menus, hours, pricing, performance. All in one place." },
          { name: "Order Management Suite", pitch: "Tablet + printer setup that scales to multi-branch." },
          { name: "POS Integrations", pitch: "Native sync with Deliverect, FeedUs, UrbanPiper, Grubtech, POSist." },
        ]}
      />
      <div className="container-x mt-12 overflow-hidden">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Integrated with</div>
        <div className="flex gap-12 items-center text-2xl font-display text-foreground/40">
          <span>Deliverect</span>
          <span>·</span>
          <span>FeedUs</span>
          <span>·</span>
          <span>UrbanPiper</span>
          <span>·</span>
          <span>Grubtech</span>
          <span>·</span>
          <span>POSist</span>
        </div>
      </div>
      <div className="h-20" />
    </section>
  );
}
