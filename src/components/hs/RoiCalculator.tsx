import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useHs } from "@/lib/hs-context";

const CUISINES = ["Fast Food", "Cafe & Bakery", "Casual Dining", "Fine Dining", "Cloud Kitchen"] as const;
const AOV: Record<(typeof CUISINES)[number], number> = {
  "Fast Food": 55,
  "Cafe & Bakery": 45,
  "Casual Dining": 110,
  "Fine Dining": 220,
  "Cloud Kitchen": 65,
};

function useCount(value: number, duration = 900) {
  const [d, setD] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const from = d;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setD(Math.round(from + (value - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return d;
}

const sar = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.max(0, n));

export function RoiCalculator() {
  const { markEngaged } = useHs();
  const [orders, setOrders] = useState(800);
  const [cuisine, setCuisine] = useState<(typeof CUISINES)[number]>("Casual Dining");
  const [adSpend, setAdSpend] = useState(5000);
  const [showNote, setShowNote] = useState(false);

  const aov = AOV[cuisine];
  const orderUplift = useMemo(() => Math.round(orders * 2), [orders]); // +200%
  const sponsoredOrders = useMemo(() => Math.round((adSpend * 5) / Math.max(1, aov)), [adSpend, aov]); // 5x ROAS
  const totalNewOrders = orderUplift + sponsoredOrders;
  const gmvGain = (totalNewOrders * aov) * 12;
  const financing = Math.round(gmvGain * 0.1);

  const upliftDisp = useCount(orderUplift);
  const sponDisp = useCount(sponsoredOrders);
  const gmvDisp = useCount(gmvGain);
  const finDisp = useCount(financing);

  return (
    <section id="roi" className="relative scroll-mt-24 border-t border-border bg-cream">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">07 — Run the numbers</div>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-balance">See your growth potential.</h2>
          </div>
          <p className="self-end text-lg text-muted-foreground max-w-xl">
            Drag the sliders. We'll project the lift from HPlus delivery membership and Sponsored Listings using conservative HungerStation benchmarks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[5fr_7fr]">
          {/* Inputs */}
          <div className="rounded-3xl border bg-card p-7 md:p-9">
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-muted-foreground">Inputs</h3>

            <div className="mt-8 space-y-10">
              <Field label="Current monthly orders on HungerStation" value={orders === 0 ? "Not on HS yet" : orders.toLocaleString()}>
                <input
                  type="range"
                  min={0}
                  max={10000}
                  step={50}
                  value={orders}
                  onChange={(e) => { setOrders(Number(e.target.value)); markEngaged("roi"); }}
                  className="hs-slider"
                />
              </Field>

              <div>
                <label className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Cuisine type</span>
                  <span className="text-sm font-semibold">Avg ticket · SAR {aov}</span>
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CUISINES.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCuisine(c); markEngaged("roi"); }}
                      className={`rounded-full px-3.5 py-1.5 text-sm border transition ${
                        cuisine === c ? "bg-ink text-cream border-ink" : "border-border hover:border-ink/40"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <Field label="Current monthly ad spend (SAR · optional)" value={`SAR ${adSpend.toLocaleString()}`}>
                <input
                  type="range"
                  min={0}
                  max={50000}
                  step={500}
                  value={adSpend}
                  onChange={(e) => { setAdSpend(Number(e.target.value)); markEngaged("roi"); }}
                  className="hs-slider"
                />
              </Field>
            </div>

            <button
              onClick={() => setShowNote((v) => !v)}
              className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              How we calculate this <ChevronDown className={`h-3.5 w-3.5 transition ${showNote ? "rotate-180" : ""}`} />
            </button>
            {showNote && (
              <p className="mt-3 text-xs text-muted-foreground max-w-md leading-relaxed">
                Order uplift assumes <strong>+200% on a 1-year horizon</strong> — a conservative reading of HungerStation's "10× orders" benchmark for new HPlus partners. Sponsored Listings assume <strong>5× ROAS</strong>. Vendor Financing capacity = <strong>10% of projected annual GMV</strong>. Real outcomes vary by city, cuisine and ops maturity.
              </p>
            )}
          </div>

          {/* Result */}
          <div className="relative overflow-hidden rounded-3xl bg-ink text-cream p-7 md:p-12">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.22em] text-cream/60">Projected — 12 months</div>

              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <Result label="Order uplift from HPlus" value={`+${sar(upliftDisp)}`} sub="orders / month" />
                <Result label="New orders from Sponsored" value={`+${sar(sponDisp)}`} sub="orders / month" />
              </div>

              <div className="mt-10 border-t border-cream/15 pt-8">
                <div className="text-xs uppercase tracking-[0.22em] text-cream/60">Projected GMV gain</div>
                <div className="mt-3 font-display text-6xl md:text-8xl text-yellow leading-none">
                  SAR {sar(gmvDisp)}
                </div>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-cream/15 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-cream/60">Mofawter capacity</div>
                  <div className="mt-2 font-display text-3xl">SAR {sar(finDisp)}</div>
                  <div className="text-xs text-cream/60 mt-1">Cash you could draw today</div>
                </div>
                <a
                  href="#plan"
                  onClick={() => markEngaged("roi-cta")}
                  className="rounded-2xl bg-yellow text-ink p-5 flex flex-col justify-between hover:bg-yellow/90 transition"
                >
                  <div className="text-xs uppercase tracking-[0.22em] opacity-70">Next step</div>
                  <div className="mt-6 font-display text-2xl">Talk to sales →</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hs-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: color-mix(in oklab, var(--ink) 12%, transparent);
          border-radius: 999px;
          outline: none;
        }
        .hs-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 26px; width: 26px;
          border-radius: 999px;
          background: var(--brand-yellow);
          border: 3px solid var(--ink);
          cursor: grab;
          box-shadow: 0 6px 16px color-mix(in oklab, var(--ink) 25%, transparent);
        }
        .hs-slider::-moz-range-thumb {
          height: 26px; width: 26px;
          border-radius: 999px;
          background: var(--brand-yellow);
          border: 3px solid var(--ink);
          cursor: grab;
        }
      `}</style>
    </section>
  );
}

function Field({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Result({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] text-cream/60">{label}</div>
      <div className="mt-2 font-display text-4xl md:text-5xl">{value}</div>
      <div className="text-xs text-cream/60">{sub}</div>
    </div>
  );
}
