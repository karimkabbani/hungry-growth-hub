import { MapPin, Handshake, Bike, Quote } from "lucide-react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

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

        {/* CEO quote */}
        <article className="mt-14 grid gap-0 overflow-hidden rounded-[2rem] border bg-card shadow-sm md:grid-cols-[1fr_1.6fr]">
          <div className="relative bg-muted">
            <img
              src={ceoPortrait}
              alt="Ali Aldamanhori, CEO of HungerStation"
              loading="lazy"
              width={896}
              height={1120}
              className="h-full w-full object-cover aspect-[4/5] md:aspect-auto"
            />
          </div>
          <div className="relative p-8 md:p-14 flex flex-col justify-center">
            <Quote
              className="absolute top-6 left-6 md:top-10 md:left-10 h-16 w-16 md:h-24 md:w-24 text-[color:var(--brand-yellow)]/30"
              strokeWidth={1}
              aria-hidden
            />
            <p
              className="relative font-display italic text-2xl md:text-3xl lg:text-4xl leading-snug text-balance text-foreground"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              [CEO note from Ali Aldamanhori — 3 to 4 sentences about HungerStation's commitment to Saudi restaurants and growth.]
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-foreground/40" aria-hidden />
              <div>
                <div className="font-semibold text-sm text-foreground">Ali Aldamanhori</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                  CEO, HungerStation
                </div>
              </div>
            </div>
          </div>
        </article>

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
