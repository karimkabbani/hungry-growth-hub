import { useEffect, useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 180);
  };

  const activeItem = ITEMS.find((i) => i.id === active) ?? ITEMS[0];
  const activeIndex = ITEMS.indexOf(activeItem);

  return (
    <nav
      aria-label="Section navigation"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocusCapture={handleEnter}
      onBlurCapture={handleLeave}
      className={`fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 lg:block ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
      }`}
    >
      {/* Collapsed rail: just dots + current section label chip */}
      <div
        className={`flex items-center gap-2 transition-all duration-300 ${
          open ? "opacity-0 pointer-events-none -translate-x-2" : "opacity-100"
        }`}
      >
        <div
          className="rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--cream)]/85 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink)]/70 shadow-sm backdrop-blur-md whitespace-nowrap"
        >
          {String(activeIndex + 1).padStart(2, "0")} · {activeItem.label}
        </div>
        <ul className="flex flex-col items-center gap-2 rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--cream)]/85 px-1.5 py-2 shadow-sm backdrop-blur-md">
          {ITEMS.map((it) => {
            const on = active === it.id;
            return (
              <li key={it.id}>
                <span
                  aria-hidden
                  className={`block h-1.5 w-1.5 rounded-full transition-all ${
                    on
                      ? "bg-[color:var(--brand-yellow)] scale-150 shadow-[0_0_0_3px_rgba(252,228,19,0.25)]"
                      : "bg-[color:var(--ink)]/25"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Expanded panel */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--cream)]/95 p-2 shadow-xl backdrop-blur-md min-w-[220px]">
          {ITEMS.map((it, i) => {
            const on = active === it.id;
            return (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                    on
                      ? "bg-[color:var(--brand-yellow)]/20 text-[color:var(--ink)] font-semibold"
                      : "text-[color:var(--ink)]/70 hover:bg-[color:var(--ink)]/5 hover:text-[color:var(--ink)]"
                  }`}
                >
                  <span className="text-[10px] tabular-nums opacity-50 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap">{it.label}</span>
                  {on && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
