import { SectionHeader } from "./ProductSection";
import { useHs, type Goal } from "@/lib/hs-context";
import { Banknote, ShieldCheck, TrendingUp, FileSearch, Wallet, Repeat, Store, Flame, Sparkles, Megaphone, LayoutDashboard, Tablet, Plug, Boxes, Headphones, Megaphone as MegaphoneAlt, Smartphone, Heart, CalendarDays, Globe, MessageSquare, BarChart3 } from "lucide-react";
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

type AovProduct = {
  n: string;
  name: string;
  tagline: string;
  benefits: string[];
  pricing: string;
  lift: string;
  liftLabel: string;
  story: string;
  tag?: string;
};

const AOV_HERO: AovProduct = {
  n: "01",
  name: "RDF / HPlus",
  tagline: "Free-delivery membership that locks in your best customers.",
  benefits: ["3× order frequency", "+27% basket size", "Lower CAC per repeat"],
  pricing: "Revenue share · no upfront",
  lift: "+312%",
  liftLabel: "orders from members vs non-members",
  story: "A leading Riyadh Arabic QSR saw +47% monthly order frequency in the first 90 days after enabling HPlus.",
  tag: "Q2 priority",
};

const AOV_PRODUCTS: AovProduct[] = [
  {
    n: "02",
    name: "Super Saver",
    tagline: "Smart price drops on selected items to drive volume.",
    benefits: ["+18% units per order", "Margin-safe items only", "Auto-pricing engine"],
    pricing: "Discount funded 50/50",
    lift: "+22%",
    liftLabel: "AOV uplift (avg)",
    story: "A Jeddah burger chain lifted weekday AOV by 19% after enabling Super Saver on its top 10 SKUs.",
  },
  {
    n: "03",
    name: "Full Menu Discounts",
    tagline: "Site-wide promo banners across the app.",
    benefits: ["Maximum reach", "Tier-based discounting", "Great for new launches"],
    pricing: "Vendor-funded discount",
    lift: "+34%",
    liftLabel: "weekend orders (avg)",
    story: "A Dammam shawarma group ran a 20%-off menu weekend and saw +34% weekend orders MoM.",
  },
  {
    n: "04",
    name: "Meal for One",
    tagline: "Curated single-portion bundles for solo diners.",
    benefits: ["+SAR 12 AOV", "Targets lunch crowd", "Pre-built bundles"],
    pricing: "Bundle pricing · no fee",
    lift: "+15%",
    liftLabel: "weekday lunch AOV",
    story: "A Khobar café added 4 Meal-for-One bundles and lifted weekday lunch AOV by 15% in 6 weeks.",
  },
  {
    n: "05",
    name: "HRewards",
    tagline: "Stamp-card loyalty. Repeat customers get rewards on us.",
    benefits: ["+2.1× repeat rate", "HungerStation-funded", "Zero setup"],
    pricing: "Funded by HungerStation",
    lift: "+2.1×",
    liftLabel: "60-day repeat rate",
    story: "A Riyadh dessert brand doubled its 60-day repeat rate after joining HRewards in its first month.",
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

      <div className="container-x">
        <AovHero p={AOV_HERO} highlight={highlight} />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {AOV_PRODUCTS.map((p) => (
            <AovCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-12">
          <img src={foodSpread} alt="Saudi food spread" loading="lazy" className="rounded-3xl w-full aspect-[16/7] object-cover" />
        </div>
      </div>
    </section>
  );
}

function AovHero({ p, highlight }: { p: AovProduct; highlight?: boolean }) {
  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border bg-card p-8 md:p-14 transition-all duration-500 ${
        highlight ? "ring-1 ring-[color:var(--brand-yellow)] shadow-xl" : "shadow-sm"
      }`}
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-blue text-white font-display text-xs">{p.n}</span>
            Flagship · Loyalty
            {p.tag && (
              <span className="rounded-full bg-[color:var(--brand-yellow)] text-ink px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold">
                {p.tag}
              </span>
            )}
          </div>
          <h3 className="mt-6 font-display text-5xl md:text-7xl text-balance">{p.name}.</h3>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">{p.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.benefits.map((b) => (
              <span key={b} className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" /> {b}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl bg-ink p-6 text-cream sm:grid-cols-[1fr_1fr_auto] sm:items-center">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">Pricing</div>
              <div className="font-display text-lg mt-1">{p.pricing}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">Expected lift</div>
              <div className="font-display text-lg mt-1 text-[color:var(--brand-yellow)]">{p.lift}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-cream/60 mt-0.5">{p.liftLabel}</div>
            </div>
            <a
              href="#plan"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-hover transition whitespace-nowrap"
            >
              Talk to my AM →
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="rounded-3xl border bg-background/40 p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">In practice</div>
            <p className="mt-3 font-display text-2xl text-balance leading-tight">"{p.story}"</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-card p-5">
              <div className="font-display text-4xl text-foreground">{p.lift}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{p.liftLabel}</div>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <div className="font-display text-4xl text-foreground">+27%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">basket size lift</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function AovCard({ p }: { p: AovProduct }) {
  return (
    <article className="group flex flex-col rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <span className="font-display text-xs text-muted-foreground">{p.n}</span>
        {p.tag && (
          <span className="rounded-full bg-[color:var(--brand-yellow)] text-ink px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold">
            {p.tag}
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-3xl md:text-4xl text-balance">{p.name}</h3>
      <p className="mt-3 text-muted-foreground">{p.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.benefits.map((b) => (
          <span key={b} className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" /> {b}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 rounded-2xl border bg-background/40 p-5 sm:grid-cols-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Pricing</div>
          <div className="font-display text-base mt-1">{p.pricing}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Expected lift</div>
          <div className="font-display text-base mt-1 text-foreground">{p.lift}</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">{p.liftLabel}</div>
        </div>
      </div>

      <div className="mt-6 border-l-2 border-[color:var(--brand-yellow)] pl-4">
        <p className="text-sm text-muted-foreground italic leading-relaxed">"{p.story}"</p>
      </div>

      <a
        href="#plan"
        className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-hover transition"
      >
        Talk to my AM →
      </a>
    </article>
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
    <section id="attract" className="relative scroll-mt-24 border-t border-border bg-background text-foreground">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--brand-yellow)] text-ink">
                <Megaphone className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-foreground">Attract New Customers</span>
              {highlight && <span className="h-2 w-2 rounded-full bg-[color:var(--brand-yellow)] animate-pulse-ring" />}
            </div>
          </div>
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-balance">
              Be the first thing{" "}
              <span className="relative inline-block">
                they tap.
                <span className="absolute left-0 right-0 -bottom-1 h-2 bg-[color:var(--brand-yellow)] -z-10 rounded-full" aria-hidden />
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              The full ad stack across HungerStation — from sponsored placements to time-boxed flash deals — running where 9M+ Saudis already decide what to eat.
            </p>
          </div>
        </div>

        {/* Stat band */}
        <div className="mt-14 grid gap-6 rounded-3xl border bg-card p-8 md:grid-cols-3 md:p-10">
          <div className="md:col-span-2">
            <div className="font-display text-5xl md:text-6xl text-foreground">
              30K<span className="text-[color:var(--brand-yellow)]">+</span>{" "}
              <span className="text-muted-foreground text-3xl md:text-4xl font-display">brands advertise on HungerStation.</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:border-l md:border-border md:pl-10">
            <div>
              <div className="font-display text-3xl text-foreground">5×</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Avg ROAS</div>
            </div>
            <div>
              <div className="font-display text-3xl text-foreground">9M+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Reachable users</div>
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

        <div className="mt-12 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Booking channels:
          <span className="rounded-full border px-3 py-1">Via Account Manager</span>
          <span className="rounded-full border px-3 py-1">Self-Booking Portal</span>
        </div>
      </div>
    </section>
  );
}

function AdCard({ p, featured }: { p: AdProduct; featured?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl ${
        featured ? "md:p-10" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-xs text-muted-foreground">{p.n}</span>
        {p.tag && (
          <span className="rounded-full bg-[color:var(--brand-yellow)] text-ink px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-semibold">
            {p.tag}
          </span>
        )}
      </div>

      <h3 className={`mt-5 font-display text-balance text-foreground ${featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
        {p.name}
      </h3>
      <p className="mt-3 max-w-md text-muted-foreground">{p.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.benefits.map((b) => (
          <span key={b} className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" /> {b}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">How it works</div>
        <ol className={`mt-4 grid gap-3 ${featured ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {p.steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border bg-background/40 p-4">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-ink text-cream font-display text-xs">
                {i + 1}
              </div>
              <div className="mt-3 font-semibold text-sm text-foreground">{s.t}</div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 grid gap-4 rounded-2xl bg-ink text-cream p-5 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
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
  const { goal } = useHs();
  const highlight = isOn(goal, "financing");
  const STEPS = [
    { icon: FileSearch, t: "We assess your sales history", d: "Mofawter looks at your HungerStation order history — no bank statements, no paperwork." },
    { icon: Wallet, t: "You get paid in 48 hours", d: "A lump-sum payout lands in your account within two business days of approval." },
    { icon: Repeat, t: "Repay as you sell", d: "We deduct a small % of each future order until the advance is repaid. No fixed installments." },
  ];
  const USE_CASES = [
    { icon: Store, t: "Open a new branch" },
    { icon: Flame, t: "Refresh your kitchen" },
    { icon: Sparkles, t: "Fund a Ramadan campaign" },
  ];

  return (
    <section id="financing" className="relative scroll-mt-24 border-t border-border">
      <div className="container-x py-20 md:py-28">
        {/* Header row */}
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 flex-wrap">
              <span className={`h-2 w-2 rounded-full ${highlight ? "bg-[color:var(--brand-yellow)] animate-pulse-ring" : "bg-foreground/30"}`} />
              <span className={`text-sm font-semibold ${highlight ? "text-foreground" : "text-foreground"}`}>Fund Your Growth</span>
              <span className="rounded-full bg-blue text-white px-2.5 py-0.5 text-[10px] uppercase tracking-[0.22em] font-semibold">Flagship · Mofawter</span>
            </div>
          </div>
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-balance">Fund Your Growth.</h2>
            <p className="mt-3 font-display text-2xl md:text-3xl text-muted-foreground text-balance">Financial tools built for Saudi restaurants.</p>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Mofawter is HungerStation's vendor financing. Get an upfront payout, repay automatically from a small share of each order. No paperwork, no collateral, no fixed monthly payments.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Paid in 48 hours", "No collateral", "Repays from sales, not fixed installments"].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>


        {/* Photo + headline content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-16">
          <div className="relative">
            <img src={rider} alt="HungerStation rider in Riyadh" loading="lazy" className="rounded-3xl w-full h-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-card border rounded-2xl p-5 max-w-[260px] shadow-xl">
              <div className="h-1 w-8 rounded-full bg-[color:var(--brand-yellow)]" />
              <div className="mt-3 font-display text-3xl text-foreground">SAR 180K</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Example unlocked for a Riyadh fast-casual</div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">How it works</div>
              <ol className="mt-5 grid gap-4">
                {STEPS.map((s, i) => (
                  <li key={s.t} className="flex gap-5 rounded-2xl border bg-card p-5">
                    <div className="flex flex-col items-center">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-cream">
                        <s.icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <div className="mt-2 font-display text-xs text-muted-foreground">0{i + 1}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-xl">{s.t}</div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Use case panel */}
            <div className="rounded-3xl bg-ink text-cream p-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">Use it for</div>
              <p className="mt-3 font-display text-2xl text-balance leading-tight">
                Open a new branch, refresh your kitchen, fund a Ramadan campaign — Mofawter funds vendors for the moments that grow the business.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {USE_CASES.map((u) => (
                  <div key={u.t} className="flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/[0.04] p-4">
                    <u.icon className="h-5 w-5 text-[color:var(--brand-yellow)]" strokeWidth={1.8} />
                    <span className="text-sm">{u.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stat band */}
        <div className="mt-16 grid gap-6 rounded-3xl border bg-card p-8 md:grid-cols-[1.5fr_1fr_auto] md:items-center md:p-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">2025 to date</div>
            <div className="mt-2 font-display text-4xl md:text-5xl text-balance">
              SAR <span className="text-foreground">XXX</span>{" "}
              <span className="text-muted-foreground">disbursed to Saudi vendors.</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Banknote className="h-6 w-6 text-[color:var(--brand-yellow)]" strokeWidth={1.8} />
              <div>
                <div className="font-display text-xl">48h</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Avg payout</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-[color:var(--brand-yellow)]" strokeWidth={1.8} />
              <div>
                <div className="font-display text-xl">~10%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">of annual GMV</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[color:var(--brand-yellow)]" strokeWidth={1.8} />
              <div>
                <div className="font-display text-xl">0</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Collateral</div>
              </div>
            </div>
          </div>
          <a
            href="#plan"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition whitespace-nowrap"
          >
            See my financing options →
          </a>
        </div>
      </div>
    </section>
  );
}

type OpsProduct = {
  n: string;
  name: string;
  tagline: string;
  benefits: string[];
  icon: typeof LayoutDashboard;
  extra?: { label: string; items: string[] };
  partners?: string[];
  tag?: string;
};

const OPS_PRODUCTS: OpsProduct[] = [
  {
    n: "01",
    name: "Vendor Portal",
    tagline: "Your command center. Menus, pricing, hours and performance — managed from one place, across every branch.",
    benefits: ["Multi-branch ready", "Real-time edits", "Role-based access"],
    icon: LayoutDashboard,
    extra: {
      label: "What you can do in the Vendor Portal",
      items: [
        "Menu management",
        "Order tracking",
        "Analytics",
        "Payment management",
        "Promo setup",
        "Performance reports",
      ],
    },
  },
  {
    n: "02",
    name: "Order Management Suite",
    tagline: "The restaurant-side order flow — from incoming ticket to dispatcher handover. Built for high-volume kitchens.",
    benefits: ["Tablet + printer kit", "Dispatcher integration", "Handover tracking"],
    icon: Tablet,
  },
  {
    n: "03",
    name: "POS Integrations",
    tagline: "Already on Deliverect, FeedUs, UrbanPiper, Grubtech, or POSist? Plug in directly and receive HungerStation orders in your existing flow.",
    benefits: ["Native sync", "No double-entry", "Live menu push"],
    icon: Plug,
    partners: ["Deliverect", "FeedUs", "UrbanPiper", "Grubtech", "POSist"],
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

export function OpsSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "ops");
  return (
    <section id="ops" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        index="06"
        eyebrow="Optimize Operations"
        title="Run a tighter kitchen."
        copy="The back-office stack — vendor portal, order management, POS integrations, and a built-in platform of tools that come with HungerStation."
        highlight={highlight}
      />

      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OPS_PRODUCTS.map((p) => (
            <OpsCard key={p.name} p={p} />
          ))}
        </div>

        {/* Built-in platform tools */}
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

function OpsCard({ p }: { p: OpsProduct }) {
  return (
    <article className="group flex flex-col rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-cream">
          <p.icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <span className="font-display text-xs text-muted-foreground">{p.n}</span>
      </div>

      <h3 className="mt-6 font-display text-2xl md:text-3xl text-foreground">{p.name}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.benefits.map((b) => (
          <span key={b} className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" /> {b}
          </span>
        ))}
      </div>

      {p.extra && (
        <div className="mt-6 rounded-2xl border bg-background/40 p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.extra.label}</div>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
            {p.extra.items.map((i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--brand-yellow)]" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      )}

      {p.partners && (
        <div className="mt-6 rounded-2xl border bg-background/40 p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Integrated partners</div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-base text-foreground/70">
            {p.partners.map((partner, i) => (
              <span key={partner} className="flex items-center gap-3">
                {i > 0 && <span className="text-foreground/25">·</span>}
                {partner}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href="#plan"
        className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-hover transition"
      >
        Talk to my AM →
      </a>
    </article>
  );
}

