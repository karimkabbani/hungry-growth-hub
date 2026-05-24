import { useEffect, useState } from "react";

export function slugifyProduct(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ProductIndex({ names }: { names: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (names.length < 2) return;
    const ids = names.map(slugifyProduct);

    function onScroll() {
      const probe = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= probe) current = id;
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [names]);

  if (names.length < 2) return null;

  return (
    <nav
      aria-label="Products in this section"
      className="container-x -mt-10 md:-mt-14 pb-6"
    >
      <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm">
        {names.map((name, i) => {
          const id = slugifyProduct(name);
          const isActive = active === id;
          return (
            <li key={id} className="flex items-center">
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`inline-flex rounded-full px-3 py-1 transition-colors text-foreground/75 hover:bg-[color:var(--brand-yellow)]/30 hover:text-foreground ${
                  isActive
                    ? "text-foreground font-semibold [box-shadow:inset_0_-2px_0_0_var(--brand-yellow)]"
                    : ""
                }`}
              >
                {name}
              </a>
              {i < names.length - 1 && (
                <span className="text-muted-foreground/50 px-0.5" aria-hidden>
                  ·
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
