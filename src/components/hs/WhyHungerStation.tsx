import { Globe, HeartHandshake, Bike, Quote } from "lucide-react";

const PILLARS = [
  {
    icon: Globe,
    title: "Extensive Reach",
    body: "100+ cities, served 24/7. The largest delivery network in the Kingdom — your restaurant reaches customers anywhere, any time of day.",
  },
  {
    icon: HeartHandshake,
    title: "Built for Vendors",
    body: "Fast payouts. 24/7 vendor support. Native app integration. Products shaped by feedback from the restaurants that use them.",
  },
  {
    icon: Bike,
    title: "World-Class Logistics",
    body: "AI-driven dispatch. Real-time tracking. Flexible scheduling for peak hours. Orders arrive on time, and you stay in control.",
  },
];

const CEO_PARAGRAPHS = [
  "At HungerStation, our mission is rooted in partnership. From day one, we've believed that when our restaurant partners succeed, so do we.",
  "More than 13 years ago, we launched with a simple idea: make ordering food easier and more convenient for everyone in Saudi Arabia. Today, we're the largest platform of our kind in the Kingdom — connecting 55,000 partners to millions of customers across 100+ cities.",
  "Our promise is to keep pushing forward — with speed, humility, and high standards — so we can build the future of delivery, together.",
];

export function WhyHungerStation() {
  return (
    <section id="why" className="relative scroll-mt-24 border-t border-border">
      <div className="container-x py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              00 — Credentials
            </span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-[14ch]">
              Why HungerStation
            </h2>
          </div>
          <p className="max-w-sm text-base text-muted-foreground">
            Saudi Arabia's most established food delivery platform — built in partnership with restaurants from day one.
          </p>
        </div>

        {/* CEO editorial pull-quote — three paragraphs, no portrait */}
        <figure className="mt-16 md:mt-20 relative mx-auto max-w-3xl text-center">
          <Quote
            className="mx-auto h-16 w-16 md:h-20 md:w-20 text-[color:var(--brand-yellow)]"
            strokeWidth={1}
            aria-hidden
          />
          <blockquote
            className="mt-6 space-y-6 font-display text-xl md:text-2xl lg:text-3xl leading-[1.45] text-balance text-foreground italic"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {CEO_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-foreground/40" aria-hidden />
            <div className="text-left">
              <div className="font-semibold text-sm text-foreground">— ENG. Ali Aldamanhori</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                CEO, HungerStation
              </div>
            </div>
            <span className="h-px w-10 bg-foreground/40" aria-hidden />
          </figcaption>
        </figure>

        {/* Three pillars */}
        <div className="mt-20 md:mt-24 grid gap-12 md:gap-10 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center px-2">
              <p.icon
                className="h-8 w-8 text-ink"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-5 font-display text-2xl md:text-3xl text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
