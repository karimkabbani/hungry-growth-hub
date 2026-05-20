import { useEffect, useState } from "react";

const ITEMS = [
  { id: "goals", label: "Overview" },
  { id: "grow-online", label: "Grow Online" },
  { id: "order-value", label: "Order Value" },
  { id: "attract", label: "Attract Customers" },
  { id: "financing", label: "Vendor Financing" },
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
      className={`fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 lg:block ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col gap-1">
        {ITEMS.map((it) => {
          const on = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="group flex items-center gap-3 py-2 text-xs uppercase tracking-[0.18em]"
              >
                <span
                  className={`h-px transition-all ${
                    on ? "w-10 bg-foreground" : "w-4 bg-foreground/30 group-hover:w-8 group-hover:bg-foreground/60"
                  }`}
                />
                <span className={on ? "text-foreground font-semibold" : "text-muted-foreground"}>
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
