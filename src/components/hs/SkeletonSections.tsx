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

export function AttractSection() {
  const { goal } = useHs();
  return (
    <section id="attract" className="relative scroll-mt-24 border-t border-border bg-ink text-cream">
      <SectionHeader
        index="04"
        eyebrow="Attract New Customers"
        title="Be the first thing they tap."
        copy="A full ad stack — from sponsored listings to FlashDeals — built into the channel where 9M+ Saudis already shop for food."
        highlight={isOn(goal, "newcustomers")}
      />
      <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Sponsored Listing", pitch: "CPC bidding for top home-feed positions.", tag: "CPC" },
          { name: "Keyword Search", pitch: "Own the search results for your cuisine." },
          { name: "Display Ads", pitch: "Premium banners in the discovery tab." },
          { name: "Awareness Banner", pitch: "Full-bleed hero banner for launches." },
          { name: "Offer Hour / FlashDeals", pitch: "Time-boxed offers that spike orders.", tag: "5× ROAS" },
          { name: "Splash Screen", pitch: "First impression — app-open takeover." },
        ].map((p, i) => (
          <div key={p.name} className="rounded-2xl border border-cream/15 bg-cream/5 p-7 transition hover:-translate-y-1 hover:bg-cream/10">
            <div className="flex items-start justify-between">
              <span className="font-display text-xs text-cream/50">0{i + 1}</span>
              {p.tag && <span className="rounded-full bg-yellow text-ink px-2 py-0.5 text-[10px] uppercase tracking-widest font-semibold">{p.tag}</span>}
            </div>
            <h4 className="mt-4 font-display text-2xl md:text-3xl">{p.name}</h4>
            <p className="mt-2 text-sm text-cream/70">{p.pitch}</p>
          </div>
        ))}
      </div>
      <div className="container-x mt-12 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-cream/60">
        Booking channels:
        <span className="rounded-full border border-cream/20 px-3 py-1">Via Account Manager</span>
        <span className="rounded-full border border-cream/20 px-3 py-1">Self-Booking Portal</span>
      </div>
      <div className="h-20" />
    </section>
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
          <div className="absolute -bottom-6 -left-6 bg-yellow text-ink rounded-2xl p-5 max-w-[240px] shadow-xl">
            <div className="font-display text-3xl">SAR 180K</div>
            <div className="text-xs uppercase tracking-[0.18em]">Example unlocked for a Riyadh fast-casual</div>
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
