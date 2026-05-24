import type { ReactNode } from "react";
import { Quote } from "lucide-react";

export type CardSize = "flagship" | "secondary";

export type Testimonial = {
  quote: string;
  author?: string;
  role?: string;
  avatar?: string;
  stats?: { n: string; l: string }[];
};

export type StatHighlight = { value: string; label?: string };
export type EconomicsItem = { label: string; value: string; note?: string };

export type ProductCardData = {
  name: string;
  subhead: string;
  /** 1 stat → hero format; 2-3 → equal-weight row. Missing → placeholders. */
  stats?: StatHighlight[];
  image?: ReactNode;
  /** Optional "What is it?" body — only for complex products. */
  body?: string | null;
  benefits?: string[];
  /** Steps / capabilities / features (3 items). Omit entirely if N/A. */
  steps?: { t: string; d: string }[];
  testimonial?: Testimonial | null;
  /** 2-4 unit economics rows. Missing → placeholders. */
  economics?: EconomicsItem[];
};

const PLACEHOLDER_ITALIC = "italic text-muted-foreground/70";

export function ProductCard({
  data,
  size = "flagship",
  highlight,
  id,
}: {
  data: ProductCardData;
  size?: CardSize;
  highlight?: boolean;
  id?: string;
}) {
  const isFlag = size === "flagship";
  const benefits = data.benefits && data.benefits.length ? data.benefits : null;
  const steps = data.steps && data.steps.length === 3 ? data.steps : null;
  const economics = data.economics && data.economics.length >= 2 ? data.economics : null;
  const testimonial = data.testimonial ?? null;
  const stats =
    data.stats && data.stats.length >= 1 && data.stats.length <= 3 ? data.stats : null;

  return (
    <article
      id={id}
      className={`relative scroll-mt-28 overflow-hidden rounded-[2rem] border bg-card transition-all duration-500 ${
        isFlag ? "p-8 md:p-14" : "p-6 md:p-8"
      } ${highlight ? "ring-1 ring-[color:var(--brand-yellow)] shadow-xl" : "shadow-sm"}`}
    >
      {/* 1. Name */}
      <h3
        className={`font-display text-balance ${
          isFlag ? "text-5xl md:text-7xl" : "text-2xl md:text-3xl"
        }`}
      >
        {data.name}
      </h3>

      {/* 2. Sub-headline */}
      <p
        className={`max-w-2xl text-muted-foreground ${
          isFlag ? "mt-4 text-lg" : "mt-2 text-sm"
        }`}
      >
        {data.subhead}
      </p>

      {/* 3. Stat Highlights */}
      <StatHighlights stats={stats} size={size} />

      {/* 4. Image */}
      <div className={isFlag ? "mt-10" : "mt-6"}>
        <ProductImage image={data.image} size={size} />
      </div>

      {/* 5. What is it? body (optional) */}
      {data.body !== undefined && (
        <div className={isFlag ? "mt-10" : "mt-6"}>
          <Eyebrow>What is it?</Eyebrow>
          <p
            className={`mt-2 max-w-2xl ${isFlag ? "text-base" : "text-sm"} ${
              data.body === null ? PLACEHOLDER_ITALIC : ""
            }`}
          >
            {data.body ?? "[NEEDS CONTENT — to be drafted]"}
          </p>
        </div>
      )}

      {/* 6. Key benefits */}
      <div className={`flex flex-wrap gap-2 ${isFlag ? "mt-8" : "mt-5"}`}>
        {(benefits ?? ["[Benefit 1]", "[Benefit 2]", "[Benefit 3]"]).map((b, i) => (
          <span
            key={`${b}-${i}`}
            className={`inline-flex items-center gap-2 rounded-full border bg-background/60 ${
              isFlag ? "px-4 py-2 text-sm" : "px-3 py-1 text-xs"
            } ${!benefits ? PLACEHOLDER_ITALIC : ""}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" />
            {b}
          </span>
        ))}
      </div>

      {/* 7. How it works (compressed, optional) */}
      {steps && (
        <div className={isFlag ? "mt-8" : "mt-6"}>
          <Eyebrow>How it works</Eyebrow>
          <ol className="mt-3 grid gap-2 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-2 rounded-xl border bg-background/40 px-3 py-2"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-cream font-display text-[10px]">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold leading-tight">{s.t}</div>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* 8. Testimonial */}
      <div className={isFlag ? "mt-10" : "mt-6"}>
        <TestimonialCard testimonial={testimonial} compact={!isFlag} />
      </div>

      {/* 9. Unit Economics — compact specs panel */}
      <div className={isFlag ? "mt-8" : "mt-6"}>
        <UnitEconomics economics={economics} />
      </div>

      {/* 10. Dual CTA */}
      <DualCTA size={size} />
    </article>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-display text-[10px] md:text-xs uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </h4>
  );
}

function StatHighlights({
  stats,
  size,
}: {
  stats: StatHighlight[] | null;
  size: CardSize;
}) {
  const isFlag = size === "flagship";
  const items = stats ?? [
    { value: "[STAT 1]" },
    { value: "[STAT 2]" },
    { value: "[STAT 3]" },
  ];
  const placeholder = !stats;
  const isHero = items.length === 1;

  if (isHero) {
    const s = items[0];
    return (
      <div className={isFlag ? "mt-8" : "mt-5"}>
        <div
          className={`font-display leading-none text-foreground ${
            isFlag ? "text-7xl md:text-[7rem]" : "text-5xl md:text-6xl"
          } ${placeholder ? PLACEHOLDER_ITALIC : ""}`}
        >
          {s.value}
        </div>
        {s.label && (
          <p
            className={`mt-3 max-w-md text-muted-foreground ${
              isFlag ? "text-base" : "text-sm"
            }`}
          >
            {s.label}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${items.length === 2 ? "grid-cols-2" : "grid-cols-3"} ${
        isFlag ? "mt-8 max-w-2xl" : "mt-5"
      }`}
    >
      {items.map((s, i) => (
        <div key={i}>
          <div
            className={`font-display leading-none text-foreground ${
              isFlag ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
            } ${placeholder ? PLACEHOLDER_ITALIC : ""}`}
          >
            {s.value}
          </div>
          {s.label && (
            <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ProductImage({ image, size }: { image?: ReactNode; size: CardSize }) {
  if (image) {
    return (
      <div
        className={`rounded-3xl border bg-background/40 overflow-hidden grid place-items-center ${
          size === "flagship" ? "p-6" : "p-4"
        }`}
      >
        {image}
      </div>
    );
  }
  return (
    <div
      className={`rounded-3xl border bg-background/40 grid place-items-center w-full ${
        size === "flagship" ? "aspect-[16/9]" : "aspect-[16/10]"
      } ${PLACEHOLDER_ITALIC}`}
    >
      <span className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-center px-4">
        [Product mockup placeholder]
      </span>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  compact,
}: {
  testimonial: Testimonial | null;
  compact?: boolean;
}) {
  const placeholder = !testimonial;
  return (
    <div
      className={`rounded-3xl bg-background/40 border ${compact ? "p-5" : "p-6"}`}
    >
      <div className="h-1 w-10 rounded-full bg-[color:var(--brand-yellow)]" />
      <Quote className={`${compact ? "h-4 w-4" : "h-5 w-5"} mt-3 text-muted-foreground`} />
      <p
        className={`mt-3 font-display leading-tight text-balance text-foreground ${
          compact ? "text-base" : "text-xl"
        } ${placeholder ? PLACEHOLDER_ITALIC : ""}`}
      >
        {testimonial ? `"${testimonial.quote}"` : "[Vendor case study — placeholder]"}
      </p>

      {testimonial?.author && (
        <div className="mt-5 flex items-center gap-3">
          {testimonial.avatar && (
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              loading="lazy"
              className={`${compact ? "h-9 w-9" : "h-10 w-10"} rounded-full object-cover`}
            />
          )}
          <div>
            <div className="font-semibold text-sm">{testimonial.author}</div>
            {testimonial.role && (
              <div className="text-xs text-muted-foreground">{testimonial.role}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function UnitEconomics({ economics }: { economics: EconomicsItem[] | null }) {
  const items =
    economics ?? [
      { label: "[Lever 1]", value: "[PLACEHOLDER]" },
      { label: "[Lever 2]", value: "[PLACEHOLDER]" },
      { label: "[Lever 3]", value: "[PLACEHOLDER]" },
    ];
  const placeholder = !economics;
  return (
    <div className="w-full md:max-w-sm">
      <Eyebrow>Unit Economics</Eyebrow>
      <div className="mt-2 rounded-xl border bg-background/40 divide-y">
        {items.map((e, i) => (
          <div
            key={i}
            className="flex items-baseline justify-between gap-4 px-4 py-2.5"
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {e.label}
            </span>
            <span
              className={`text-sm font-semibold text-foreground text-right ${
                placeholder ? "italic text-muted-foreground/70 font-normal" : ""
              }`}
            >
              {e.value}
              {e.note && (
                <span className="block text-[10px] font-normal text-muted-foreground">
                  {e.note}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DualCTA({ size = "flagship" }: { size?: CardSize }) {
  const small = size === "secondary";
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${small ? "mt-6" : "mt-8"}`}>
      <a
        href="#plan"
        className="flex flex-col items-start rounded-2xl bg-blue px-5 py-3 text-white hover:bg-blue-hover transition"
      >
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-80">
          New to HungerStation?
        </span>
        <span className={`font-semibold ${small ? "text-sm" : "text-base"}`}>
          Get Started →
        </span>
      </a>
      <a
        href="#plan"
        className="flex flex-col items-start rounded-2xl border border-foreground/15 bg-background/60 px-5 py-3 hover:bg-background transition"
      >
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Already a partner?
        </span>
        <span className={`font-semibold ${small ? "text-sm" : "text-base"}`}>
          Talk to my AM →
        </span>
      </a>
    </div>
  );
}
