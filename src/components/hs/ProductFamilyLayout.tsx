import { useEffect, useState } from "react";
import { ProductCard, type ProductCardData } from "./ProductCard";

export function ProductFamilyLayout({
  sectionId,
  products,
  highlight,
  defaultIndex = 0,
}: {
  sectionId: string;
  products: ProductCardData[];
  highlight?: boolean;
  defaultIndex?: number;
}) {
  const [active, setActive] = useState(defaultIndex);

  // Hash sync: #section/product-slug
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash.startsWith(`${sectionId}/`)) return;
      const slug = hash.slice(sectionId.length + 1);
      const idx = products.findIndex((p) => slugify(p.name) === slug);
      if (idx >= 0) setActive(idx);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [sectionId, products]);

  const select = (i: number) => {
    setActive(i);
    const slug = slugify(products[i].name);
    if (typeof history !== "undefined") {
      history.replaceState(null, "", `#${sectionId}/${slug}`);
    }
  };

  const current = products[active];

  return (
    <div className="container-x pb-20 md:pb-28">
      {/* Mobile: horizontal pill tabs */}
      <div className="md:hidden -mx-4 mb-6 overflow-x-auto px-4">
        <div className="flex gap-2 w-max">
          {products.map((p, i) => (
            <button
              key={p.name}
              onClick={() => select(i)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                i === active
                  ? "bg-[color:var(--brand-yellow)] text-ink"
                  : "bg-card text-foreground/80 border border-border"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop two-panel */}
      <div className="grid gap-8 md:grid-cols-[minmax(180px,1fr)_3fr] lg:grid-cols-[minmax(200px,1fr)_3.2fr]">
        {/* Left rail */}
        <aside className="hidden md:block">
          <div className="sticky top-28">
            <ul className="flex flex-col gap-5">
              {products.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.name} className="flex items-center gap-3">
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" />
                    ) : (
                      <span className="h-1.5 w-1.5" />
                    )}
                    <button
                      onClick={() => select(i)}
                      className={`text-left text-[17px] leading-7 transition ${
                        isActive
                          ? "text-foreground font-semibold [box-shadow:inset_0_-2px_0_0_var(--brand-yellow)]"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {p.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Right panel */}
        <div key={current.name} className="min-w-0 animate-[fade-in_150ms_ease-out]">
          <ProductCard
            data={current}
            size="flagship"
            highlight={highlight}
            id={`${sectionId}-${slugify(current.name)}`}
          />
        </div>
      </div>
    </div>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
