import { ShoppingBag, Users, TrendingUp, Settings, Banknote } from "lucide-react";
import { GOAL_META, useHs, type Goal } from "@/lib/hs-context";

const ICONS: Record<Goal, typeof ShoppingBag> = {
  online: ShoppingBag,
  aov: TrendingUp,
  newcustomers: Users,
  financing: Banknote,
  ops: Settings,
};

const COPY: Record<Goal, string> = {
  online: "Get listed, take orders, and ship across 100+ KSA cities.",
  aov: "Push average ticket with HPlus, Super Saver and loyalty.",
  newcustomers: "Run paid placements, search ads and FlashDeals to fill your funnel.",
  financing: "Unlock upfront cash with Mofawter — repaid as you sell.",
  ops: "Cut prep time and stockouts with POS-integrated tools.",
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
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">01 — Start here</span>
          <h2 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-[14ch]">
            What do you want to grow?
          </h2>
        </div>
        <p className="max-w-sm text-base text-muted-foreground">
          Pick a goal. We'll personalize the rest of this guide and build a plan for you at the end.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                  <Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                  {active && <span className="h-2 w-2 rounded-full bg-[color:var(--brand-yellow)]" />}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Goal · 0{i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl text-foreground">{GOAL_META[g].label}</h3>
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
