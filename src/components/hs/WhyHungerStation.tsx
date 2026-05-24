import { useState } from "react";
import { Quote, ChevronDown } from "lucide-react";
import phoneMenu from "@/assets/hs-phone-menu.gif";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const PILLARS = [
  {
    title: "Extensive Reach",
    body: "100+ cities, served 24/7. The largest delivery network in the Kingdom — your restaurant reaches customers anywhere, any time of day.",
  },
  {
    title: "Built for Vendors",
    body: "Seamless integration with the POS and order-management systems you already use. Robust vendor support when you need it. Fast vendor payouts that keep your cash flow growing.",
  },
  {
    title: "Cutting-Edge Fleet Management",
    body: "Flexible scheduling that puts riders where demand is — peak hours, peak coverage. Real-time tracking from kitchen to customer, so you and your customers always know where the order is.",
  },
];


const quoteSerif = { fontFamily: "Georgia, 'Times New Roman', serif" } as const;

export function WhyHungerStation() {
  const [open, setOpen] = useState(false);

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

        {/* CEO editorial pull-quote + product UI */}
        <div className="mt-16 md:mt-20 grid gap-12 md:gap-10 md:grid-cols-5 items-center">
          <figure className="md:col-span-3 relative text-center md:text-left">

            <Quote
              className="mx-auto md:mx-0 h-16 w-16 md:h-20 md:w-20 text-[color:var(--brand-yellow)]"
              strokeWidth={1}
            aria-hidden
          />

          <blockquote
            className="mt-6 font-display text-xl md:text-2xl lg:text-3xl leading-[1.45] text-balance text-foreground italic"
            style={quoteSerif}
          >
            <p>
              Our mission is rooted in partnership. From day one, we've believed that when our restaurant partners succeed, so do we.
            </p>
          </blockquote>

            <figcaption className="mt-10 flex items-center justify-center md:justify-start gap-4">
              <span className="h-px w-10 bg-foreground/40" aria-hidden />
              <div className="text-left">
                <div className="font-semibold text-sm text-foreground">— ENG. Ali Aldamanhori</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                  CEO, HungerStation
                </div>
              </div>
            </figcaption>

          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <div
                className="mt-10 space-y-6 text-left md:text-center font-display text-lg md:text-xl lg:text-2xl leading-[1.55] text-foreground/90 italic"
                style={quoteSerif}
              >
                <p>
                  More than 13 years ago, HungerStation launched with a simple idea: to make ordering food easier and more convenient for everyone in Saudi Arabia. Today, we're proud to be the <strong className="font-semibold not-italic text-foreground">largest platform of our kind in the Kingdom</strong> — connecting over <strong className="font-semibold not-italic text-foreground">55,000 partners</strong> to <strong className="font-semibold not-italic text-foreground">millions of customers</strong> across more than <strong className="font-semibold not-italic text-foreground">100 cities</strong>.
                </p>
                <p>
                  This growth has been driven by <strong className="font-semibold not-italic text-foreground">shared ambition</strong>, <strong className="font-semibold not-italic text-foreground">relentless execution</strong>, and <strong className="font-semibold not-italic text-foreground">the trust we've built together</strong>. And as the industry evolves, so do we — investing in the tools, data, and infrastructure that help you serve more customers, operate more efficiently, and grow with confidence.
                </p>
                <p>
                  Whether it's our AI-driven logistics, real-time insights, or new initiatives like the <strong className="font-semibold not-italic text-foreground">HungerStation Innovation Hub</strong>, we're committed to helping you stay ahead — because your success is our success.
                </p>
                <p>
                  We know how challenging this space can be. But we also know how rewarding it is when everything comes together. Our promise is to keep pushing forward — with <strong className="font-semibold not-italic text-foreground">speed</strong>, <strong className="font-semibold not-italic text-foreground">humility</strong>, and <strong className="font-semibold not-italic text-foreground">high standards</strong> — so we can build the future of delivery, together.
                </p>
              </div>
            </CollapsibleContent>

            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {open ? "Show less" : "Read the full note"}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </CollapsibleTrigger>
          </Collapsible>
          </figure>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <img
              src={phoneMenu}
              alt="HungerStation restaurant menu — bestsellers and SAR pricing"
              className="w-full max-w-[320px] md:max-w-[380px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>

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
