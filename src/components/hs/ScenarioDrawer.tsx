import { useMemo, useState } from "react";
import { Info, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useHs, type ScenarioProduct } from "@/lib/hs-context";

const CUISINES = ["Fast Food", "Cafe & Bakery", "Casual Dining", "Fine Dining", "Cloud Kitchen"] as const;
const AOV: Record<(typeof CUISINES)[number], number> = {
  "Fast Food": 55,
  "Cafe & Bakery": 45,
  "Casual Dining": 110,
  "Fine Dining": 220,
  "Cloud Kitchen": 65,
};

const PRODUCT_TITLE: Record<ScenarioProduct, string> = {
  hplus: "RDF / HPlus — illustrative scenario",
  sponsored: "Sponsored Listing — illustrative scenario",
  mofawter: "Mofawter — illustrative scenario",
};

/* ---- range formatting ---- */
function niceRound(n: number) {
  if (n >= 1_000_000) {
    const v = Math.round(n / 100_000) / 10;
    return `${v.toFixed(v % 1 === 0 ? 0 : 1)}M`;
  }
  if (n >= 10_000) return `${Math.round(n / 1000)}K`;
  if (n >= 1000)
    return new Intl.NumberFormat("en-US").format(Math.round(n / 100) * 100);
  return new Intl.NumberFormat("en-US").format(Math.round(n / 10) * 10);
}

function rangeFromCentral(central: number): [number, number] {
  return [Math.max(0, Math.round(central * 0.6)), Math.max(0, Math.round(central * 1.4))];
}

function sarRange(central: number) {
  const [lo, hi] = rangeFromCentral(central);
  if (lo === 0 && hi === 0) return "—";
  return `~SAR ${niceRound(lo)} – ${niceRound(hi)}`;
}

function ordersRange(central: number) {
  const [lo, hi] = rangeFromCentral(central);
  if (lo === 0 && hi === 0) return "—";
  return `+${niceRound(lo)} – ${niceRound(hi)}`;
}

export function ScenarioDrawer() {
  const { scenarioOpen, scenarioProduct, closeScenario, markEngaged } = useHs();
  const product: ScenarioProduct = scenarioProduct ?? "hplus";

  const [orders, setOrders] = useState(800);
  const [cuisine, setCuisine] = useState<(typeof CUISINES)[number]>("Casual Dining");
  const [adSpend, setAdSpend] = useState(5000);

  const aov = AOV[cuisine];
  const orderUplift = useMemo(() => Math.round(orders * 2), [orders]); // +200%
  const sponsoredOrders = useMemo(
    () => Math.round((adSpend * 5) / Math.max(1, aov)),
    [adSpend, aov],
  );
  const gmvUpliftAnnual = orderUplift * aov * 12;
  const gmvSponsoredAnnual = sponsoredOrders * aov * 12;
  const mofawterCapacity = Math.round(orders * aov * 12 * 0.1);

  const handleCta = () => {
    markEngaged(`scenario-cta-${product}`);
    closeScenario();
    setTimeout(() => {
      document.getElementById("plan")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <Sheet open={scenarioOpen} onOpenChange={(o) => !o && closeScenario()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[540px] p-0 overflow-y-auto bg-card flex flex-col gap-0"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b px-6 py-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Sample scenario
            </div>
            <h2 className="mt-1 font-display text-xl leading-tight">
              {PRODUCT_TITLE[product]}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeScenario}
            aria-label="Close"
            className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 px-6 py-6 space-y-7">
          {/* Disclaimer */}
          <div
            className="flex gap-3 rounded-xl border-l-4 px-4 py-3"
            style={{
              borderColor: "var(--ink)",
              background: "color-mix(in oklab, var(--brand-yellow) 14%, transparent)",
            }}
          >
            <Info className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--ink)]" />
            <p className="text-xs leading-relaxed text-foreground">
              <strong>Illustrative scenario — not a commitment.</strong> Actuals depend
              on market, category, operations, and execution. Talk to your Account
              Manager for personalized projections.
            </p>
          </div>

          {/* Inputs */}
          <div className="space-y-6">
            <Field
              label="Current monthly orders on HungerStation"
              value={orders === 0 ? "Not on HS yet" : orders.toLocaleString()}
            >
              <input
                type="range"
                min={0}
                max={10000}
                step={50}
                value={orders}
                onChange={(e) => {
                  setOrders(Number(e.target.value));
                  markEngaged("scenario");
                }}
                className="hs-slider"
              />
            </Field>

            <div>
              <label className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Cuisine type
                </span>
                <span className="text-sm font-semibold">Avg ticket · SAR {aov}</span>
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {CUISINES.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCuisine(c);
                      markEngaged("scenario");
                    }}
                    className={`rounded-full px-3 py-1.5 text-xs border transition ${
                      cuisine === c
                        ? "bg-ink text-cream border-ink"
                        : "border-border hover:border-ink/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {product === "sponsored" && (
              <Field
                label="Current monthly ad spend (SAR)"
                value={`SAR ${adSpend.toLocaleString()}`}
              >
                <input
                  type="range"
                  min={0}
                  max={50000}
                  step={500}
                  value={adSpend}
                  onChange={(e) => {
                    setAdSpend(Number(e.target.value));
                    markEngaged("scenario");
                  }}
                  className="hs-slider"
                />
              </Field>
            )}
          </div>

          {/* Outputs */}
          <div className="rounded-2xl border bg-background/40 p-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Estimated range — illustrative
            </div>

            {product === "hplus" && (
              <div className="mt-4 space-y-5">
                <Output
                  label="Order uplift / month"
                  value={`${ordersRange(orderUplift)} orders`}
                />
                <Output
                  label="GMV uplift over 12 months"
                  value={sarRange(gmvUpliftAnnual)}
                />
              </div>
            )}

            {product === "sponsored" && (
              <div className="mt-4 space-y-5">
                <Output
                  label="Sponsored orders / month"
                  value={`${ordersRange(sponsoredOrders)} orders`}
                />
                <Output
                  label="GMV from Sponsored over 12 months"
                  value={sarRange(gmvSponsoredAnnual)}
                />
              </div>
            )}

            {product === "mofawter" && (
              <div className="mt-4">
                <Output
                  label="Mofawter capacity"
                  value={sarRange(mofawterCapacity)}
                  large
                />
              </div>
            )}
          </div>

          {/* How we calculate this — expanded */}
          <div>
            <h4 className="font-display text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              How we calculate this
            </h4>
            <div className="mt-2 space-y-2 text-xs leading-relaxed text-muted-foreground">
              <p>
                Central estimates use HungerStation benchmarks: HPlus order uplift
                assumes <strong>+200% over 12 months</strong>; Sponsored Listings
                assume <strong>5× ROAS</strong>; Mofawter capacity is{" "}
                <strong>10% of annualized GMV</strong>. We then show a band of
                ±40% around that central estimate.
              </p>
              <p>
                These are reference benchmarks across many partners. Your
                category, location, ops maturity, and marketing execution can
                shift outcomes meaningfully.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t px-6 py-4 bg-card">
          <button
            type="button"
            onClick={handleCta}
            className="btn-hs-yellow w-full rounded-full py-3 text-sm font-semibold"
          >
            Talk to your Account Manager →
          </button>
        </div>

        <style>{`
          .hs-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 4px;
            background: #E5E7EB;
            border-radius: 999px;
            outline: none;
          }
          .hs-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 22px; width: 22px;
            border-radius: 999px;
            background: var(--brand-yellow);
            border: 3px solid #FFFFFF;
            cursor: grab;
            box-shadow: 0 2px 8px rgba(90, 45, 29, 0.25);
          }
          .hs-slider::-moz-range-thumb {
            height: 22px; width: 22px;
            border-radius: 999px;
            background: var(--brand-yellow);
            border: 3px solid #FFFFFF;
            cursor: grab;
          }
        `}</style>
      </SheetContent>
    </Sheet>
  );
}

function Field({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Output({
  label,
  value,
  large,
}: {
  label: string;
  value: string;
  large?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </div>
      <div
        className={`mt-1 font-display leading-tight ${
          large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
