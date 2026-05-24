import { useEffect, useState } from "react";

const ITEMS = [
  { id: "why", label: "Why HungerStation" },
  { id: "goals", label: "Overview" },
  { id: "grow-online", label: "Grow Online" },
  { id: "order-value", label: "Order Value & Volume" },
  { id: "attract", label: "Attract Customers" },
  { id: "financing", label: "Fund Your Growth" },
  { id: "ops", label: "Optimize Ops" },
  { id: "roi", label: "ROI Calculator" },
  { id: "plan", label: "Your Plan" },
];

export function SideNav() {
  const [active, setActive] = useState("goals");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
      let current = ITEMS[0].id;
      for (const it of ITEMS) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= 140) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className={`group/nav fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 xl:block ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col items-end gap-3">
        {ITEMS.map((it) => {
          const on = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-label={it.label}
                className="group/item flex items-center gap-3 py-1"
              >
                <span
                  className={`order-2 h-1.5 w-1.5 rounded-full transition-all ${
                    on
                      ? "bg-[color:var(--brand-yellow)] scale-150 shadow-[0_0_0_4px_rgba(255,196,0,0.18)]"
                      : "bg-foreground/25 group-hover/item:bg-foreground/60"
                  }`}
                />
                <span
                  className={`order-1 text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${
                    on
                      ? "opacity-100 translate-x-0 text-foreground font-semibold"
                      : "opacity-0 -translate-x-1 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 text-muted-foreground"
                  }`}
                >
                  {it.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
