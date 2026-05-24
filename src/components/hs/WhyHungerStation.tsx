import { MapPin, Handshake, Bike, Quote } from "lucide-react";

const PILLARS = [
  {
    icon: MapPin,
    eyebrow: "Extensive Coverage",
    title: "Nationwide reach",
    body: "100+ cities. 9 million customers. The largest food delivery footprint in Saudi Arabia.",
  },
  {
    icon: Handshake,
    eyebrow: "Vendor-Centric Solutions",
    title: "Built for vendors",
    body: "Products designed with — and for — Saudi restaurants. From self-service tools to financial enablers.",
  },
  {
    icon: Bike,
    eyebrow: "Cutting-Edge Fleet Management",
    title: "World-class fleet",
    body: "AI-routed dispatch, real-time tracking, full visibility from order to handover.",
  },
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
            Saudi Arabia's most established food delivery platform — built for restaurants from day one.
          </p>
        </div>

        {/* CEO quote — editorial pull-quote, no portrait */}
        <figure className="mt-16 md:mt-20 relative mx-auto max-w-4xl text-center">
          <Quote
            className="mx-auto h-20 w-20 md:h-28 md:w-28 text-[color:var(--brand-yellow)]"
            strokeWidth={1}
            aria-hidden
          />
          <blockquote
            className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-balance text-foreground italic"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            [CEO note from Ali Aldamanhori — 3 to 4 sentences about HungerStation's commitment to Saudi restaurants and growth.]
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-foreground/40" aria-hidden />
            <div className="text-left">
              <div className="font-semibold text-sm text-foreground">Ali Aldamanhori</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                CEO, HungerStation
              </div>
            </div>
            <span className="h-px w-10 bg-foreground/40" aria-hidden />
          </figcaption>
        </figure>


        {/* Three pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-cream">
                  <p.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="font-display text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-8 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {p.eyebrow}
              </div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
