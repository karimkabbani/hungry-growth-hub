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

export type EconomicsItem = { label: string; value: string; note?: string };

export type ProductCardData = {
  name: string;
  subhead: string;
  /** Pass a string for real body; omit (undefined) for simple products; pass null for placeholder */
  body?: string | null;
  image?: ReactNode;
  benefits?: string[];
  steps?: { t: string; d: string }[];
  testimonial?: Testimonial | null;
  economics?: EconomicsItem[];
};

const PLACEHOLDER_ITALIC = "italic text-muted-foreground/70";

export function ProductCard({
  data,
  size = "flagship",
  highlight,
}: {
  data: ProductCardData;
  size?: CardSize;
  highlight?: boolean;
}) {
  const isFlag = size === "flagship";
  const benefits = data.benefits && data.benefits.length ? data.benefits : null;
  const steps = data.steps && data.steps.length === 3 ? data.steps : null;
  const economics = data.economics && data.economics.length === 3 ? data.economics : null;
  const testimonial = data.testimonial ?? null;

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border bg-card transition-all duration-500 ${
        isFlag ? "p-8 md:p-14" : "p-6 md:p-8"
      } ${highlight ? "ring-1 ring-[color:var(--brand-yellow)] shadow-xl" : "shadow-sm"}`}
    >
      <div className={isFlag ? "grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20" : "flex flex-col gap-6"}>
        {/* LEFT — copy column */}
        <div className="min-w-0">
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
            className={`max-w-lg text-muted-foreground ${
              isFlag ? "mt-4 text-lg" : "mt-2 text-sm"
            }`}
          >
            {data.subhead}
          </p>

          {/* 3. What is it? — only when body is defined (string or null = placeholder) */}
          {data.body !== undefined && (
            <div className={isFlag ? "mt-8" : "mt-5"}>
              <Eyebrow>What is it?</Eyebrow>
              <p
                className={`mt-2 max-w-xl ${isFlag ? "text-base" : "text-sm"} ${
                  data.body === null ? PLACEHOLDER_ITALIC : ""
                }`}
              >
                {data.body ?? "[NEEDS CONTENT — to be drafted]"}
              </p>
            </div>
          )}

          {/* 5. Benefits pills */}
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

          {/* 6. How it works */}
          <div className={isFlag ? "mt-10" : "mt-6"}>
            <Eyebrow>How it works</Eyebrow>
            <ol className={`mt-4 grid gap-3 sm:grid-cols-3 ${isFlag ? "sm:gap-4" : ""}`}>
              {(steps ?? [
                { t: "[Step 1]", d: "[NEEDS CONTENT — to be drafted]" },
                { t: "[Step 2]", d: "[NEEDS CONTENT — to be drafted]" },
                { t: "[Step 3]", d: "[NEEDS CONTENT — to be drafted]" },
              ]).map((s, i) => (
                <li
                  key={i}
                  className={`rounded-2xl border bg-background/40 ${isFlag ? "p-4" : "p-3"}`}
                >
                  <div
                    className={`grid place-items-center rounded-full bg-ink text-cream font-display ${
                      isFlag ? "h-9 w-9 text-sm" : "h-7 w-7 text-xs"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className={`mt-3 font-semibold ${isFlag ? "text-base" : "text-sm"} ${
                      !steps ? PLACEHOLDER_ITALIC : ""
                    }`}
                  >
                    {s.t}
                  </div>
                  <p
                    className={`mt-1 leading-relaxed ${
                      isFlag ? "text-sm" : "text-xs"
                    } text-muted-foreground ${!steps ? "italic" : ""}`}
                  >
                    {s.d}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* 8. Economics row */}
          <div
            className={`grid gap-3 rounded-2xl bg-ink text-cream sm:grid-cols-3 ${
              isFlag ? "mt-10 p-6" : "mt-6 p-5"
            }`}
          >
            {(economics ?? [
              { label: "Commission %", value: "[Commission %]" },
              { label: "Setup fee", value: "[Setup fee]" },
              { label: "Payout cadence", value: "[Payout cadence]" },
            ]).map((e, i) => (
              <div key={i}>
                <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">{e.label}</div>
                <div
                  className={`font-display mt-1 ${isFlag ? "text-2xl" : "text-lg"} ${
                    !economics ? "italic text-cream/60" : ""
                  }`}
                >
                  {e.value}
                </div>
                {e.note && <div className="text-xs text-cream/60 mt-0.5">{e.note}</div>}
              </div>
            ))}
          </div>

          {/* 9. Dual CTA */}
          <DualCTA size={size} />
        </div>

        {/* RIGHT (flagship only) — image + testimonial stacked */}
        {isFlag && (
          <div className="flex flex-col gap-8">
            <ProductImage image={data.image} size={size} />
            <TestimonialCard testimonial={testimonial} />
          </div>
        )}
      </div>

      {/* Secondary: image + testimonial as a 2-col strip under the copy */}
      {!isFlag && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <ProductImage image={data.image} size={size} />
          <TestimonialCard testimonial={testimonial} compact />
        </div>
      )}
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
      className={`rounded-3xl border bg-background/40 grid place-items-center ${
        size === "flagship" ? "aspect-[4/5]" : "aspect-[4/3]"
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
      className={`rounded-3xl bg-card border shadow-sm ${compact ? "p-5" : "p-6"}`}
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

      {testimonial?.stats && (
        <div className="mt-5 grid grid-cols-3 gap-3 border-t pt-4">
          {testimonial.stats.map((s) => (
            <div key={s.l}>
              <div
                className={`font-display text-foreground ${compact ? "text-lg" : "text-2xl"}`}
              >
                {s.n}
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function DualCTA({ size = "flagship" }: { size?: CardSize }) {
  const small = size === "secondary";
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${small ? "mt-6" : "mt-10"}`}>
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
