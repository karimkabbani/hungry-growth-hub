import { Smartphone, TrendingUp, Megaphone, Wallet, LayoutGrid } from "lucide-react";
import { GOAL_META, useHs, type Goal } from "@/lib/hs-context";

const ICONS: Record<Goal, typeof Smartphone> = {
  online: Smartphone,
  aov: TrendingUp,
  newcustomers: Megaphone,
  financing: Wallet,
  ops: LayoutGrid,
};

const COPY: Record<Goal, string> = {
  online: "Channels to put your restaurant in front of more customers — delivery, pickup, and dark kitchens.",
  aov: "Promotions, discounts, and loyalty programs that drive bigger baskets and more orders per customer.",
  newcustomers: "Paid placements across HungerStation — sponsored listings, search ads, display ads, and more.",
  financing: "Capital to invest in your next branch, new equipment, or a campaign — repaid as you sell.",
  ops: "The back-office stack — vendor portal, order management, POS integrations, and built-in tools.",
};

export function GoalPicker() {
  const { goal, setGoal, markEngaged } = useHs();

  const pick = (g: Goal) => {
    setGoal(g);
    markEngaged(`goal:${g}`);
    requestAnimationFrame(() => {
      document.getElementById(GOAL_META[g].sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="goals" className="container-x relative py-24 md:py-32">
      <div>
        <h2 className="font-display text-5xl md:text-7xl text-balance max-w-[16ch]">
          How HungerStation helps you grow.
        </h2>
      </div>


      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {(Object.keys(GOAL_META) as Goal[]).map((g, i) => {
          const Icon = ICONS[g];
          const active = goal === g;
          return (
            <button
              key={g}
              onClick={() => pick(g)}
              className={`group relative overflow-hidden rounded-3xl border p-7 text-left transition-all duration-500 ${
                active
                  ? "border-foreground bg-card shadow-xl -translate-y-1 ring-1 ring-[color:var(--brand-yellow)]"
                  : "border-border bg-card hover:-translate-y-1 hover:border-foreground/30 hover:shadow-lg hover:ring-1 hover:ring-[color:var(--brand-yellow)]"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative flex h-full flex-col gap-10">
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8" strokeWidth={1.5} style={{ color: "#5A2D1D" }} />
                  {active && <span className="h-2 w-2 rounded-full bg-[color:var(--brand-yellow)]" />}
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">{GOAL_META[g].label}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {COPY[g]}
                  </p>
                </div>
                <div className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold ${active ? "text-blue" : "text-foreground"}`}>
                  {active ? "Selected" : "Explore"} <span aria-hidden>→</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
