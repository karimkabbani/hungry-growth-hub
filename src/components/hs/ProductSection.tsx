import { Zap, Truck, ShieldCheck, BarChart3, Quote, Smartphone, type LucideIcon } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { useHs, GOAL_META } from "@/lib/hs-context";
import vendor from "@/assets/vendor-portrait.jpg";

const BENEFITS = [
  { icon: Truck, label: "+10× orders potential" },
  { icon: Zap, label: "30-min avg delivery" },
  { icon: ShieldCheck, label: "Insured riders" },
  { icon: BarChart3, label: "Live order dashboard" },
];

const STEPS = [
  { n: "01", t: "Customer orders.", d: "Browse, pick, pay — all in the HungerStation app." },
  { n: "02", t: "You prep.", d: "Receive the order in the Vendor Portal or your POS. Make the food." },
  { n: "03", t: "We deliver.", d: "Our riders handle the last mile. Real-time tracking from kitchen to customer." },
];

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
        {/* Featured product: Delivery Service */}
        <article
          className={`relative overflow-hidden rounded-[2rem] border bg-card p-8 md:p-14 transition-all duration-500 ${
            highlight ? "ring-1 ring-[color:var(--brand-yellow)] shadow-xl" : "shadow-sm"
          }`}
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-blue text-white font-display text-xs">1</span>
                Flagship Product
              </div>
              <h3 className="mt-6 font-display text-5xl md:text-7xl text-balance">Delivery Service.</h3>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                Boost sales across 100+ cities. Our riders handle the last mile, you focus on the food.
              </p>

              <div className="mt-12 grid gap-6">
                <div>
                  <h4 className="font-display text-sm uppercase tracking-[0.22em] text-muted-foreground">What it is</h4>
                  <p className="mt-2 max-w-lg text-base">
                    A managed end-to-end delivery channel. We bring the customers, the riders, the live tracking and the support — you bring the kitchen.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-sm uppercase tracking-[0.22em] text-muted-foreground">How it works</h4>
                  <ol className="mt-4 grid gap-4 sm:grid-cols-3">
                    {STEPS.map((s) => (
                      <li key={s.n} className="rounded-2xl border bg-background/40 p-4">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream font-display text-sm">
                          {s.n}
                        </div>
                        <div className="mt-3 font-semibold">{s.t}</div>
                        <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {BENEFITS.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm"
                    >
                      <Icon className="h-4 w-4 text-magenta" strokeWidth={1.8} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-3 rounded-2xl bg-ink p-6 text-cream sm:grid-cols-3">
                <Econ k="Commission" v="From 18%" note="Tiered by volume" />
                <Econ k="Setup fee" v="SAR 0" note="Onboarded in 7 days" />
                <Econ k="Payouts" v="Weekly" note="Net of commission" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-12">
              <PhoneMockup />

              <div className="w-full rounded-3xl bg-card border p-6 shadow-sm">
                <div className="h-1 w-10 rounded-full bg-[color:var(--brand-yellow)]" />
                <Quote className="h-5 w-5 mt-4 text-muted-foreground" />
                <p className="mt-3 font-display text-xl leading-tight text-balance text-foreground">
                  "[Vendor quote about reaching new customers across KSA — 2 sentences.]"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={vendor} alt="Vendor portrait" loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">Ahmed Al-Saud</div>
                    <div className="text-xs text-muted-foreground">Owner · Bayt Mansaf · Riyadh</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-5">
                  <Stat n="+312%" l="Orders" />
                  <Stat n="4.9★" l="Rating" />
                  <Stat n="7" l="Branches" />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary products */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <SecondaryProduct
            n="2"
            name="Self Pick-Up"
            pitch="Let customers grab orders without paying delivery."
            benefits={["Zero delivery cost", "Higher margin per order", "Great for cafés & QSR"]}
          />
          <SecondaryProduct
            n="3"
            name="HungerStation Kitchens"
            pitch="Cloud kitchens in high-demand zones, fully managed by us."
            benefits={["No real estate risk", "Open new neighborhoods fast", "Shared utilities"]}
          />
        </div>
      </div>
    </section>
  );
}

function Econ({ k, v, note }: { k: string; v: string; note: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">{k}</div>
      <div className="font-display text-2xl mt-1">{v}</div>
      <div className="text-xs text-cream/60">{note}</div>
    </div>
  );
}
function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-foreground">{n}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
    </div>
  );
}

function SecondaryProduct({
  n,
  name,
  pitch,
  benefits,
}: {
  n: string;
  name: string;
  pitch: string;
  benefits: string[];
}) {
  return (
    <article className="group rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-cream font-display">{n}</span>
        Product
      </div>
      <h3 className="mt-6 font-display text-3xl md:text-4xl">{name}</h3>
      <p className="mt-2 text-muted-foreground">{pitch}</p>
      <ul className="mt-6 space-y-2">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-magenta" /> {b}
          </li>
        ))}
      </ul>
      <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-yellow decoration-4 hover:decoration-magenta">
        Learn more →
      </button>
    </article>
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
            {highlight && <span className="h-2 w-2 rounded-full bg-[color:var(--brand-yellow)] animate-pulse-ring" />}
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
