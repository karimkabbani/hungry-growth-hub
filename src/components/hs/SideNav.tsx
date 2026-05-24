import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      setVisible(y > window.innerHeight * 0.7);

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeItem = ITEMS.find((i) => i.id === active) ?? ITEMS[0];
  const activeIndex = ITEMS.indexOf(activeItem);

  return (
    <>
      {/* Top scroll progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-[color:var(--brand-yellow)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Bottom-center section pill */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open section navigation"
        className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ${
          visible && !open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--cream)]/95 pl-4 pr-2 py-2 shadow-lg backdrop-blur-md hover:shadow-xl transition-shadow">
          <span className="text-[10px] tabular-nums uppercase tracking-[0.2em] text-[color:var(--ink)]/50">
            {String(activeIndex + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold text-[color:var(--ink)] whitespace-nowrap">
            {activeItem.label}
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--ink)] text-[color:var(--cream)]">
            <Menu className="h-3.5 w-3.5" />
          </span>
        </div>
      </button>

      {/* Full nav overlay sheet */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[color:var(--ink)]/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 rounded-t-3xl bg-[color:var(--cream)] p-6 pb-10 shadow-2xl transition-transform duration-300 md:inset-y-0 md:right-0 md:left-auto md:w-[420px] md:rounded-l-3xl md:rounded-t-none md:p-10 ${
            open ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink)]/50">
              Navigate
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--ink)]/15 text-[color:var(--ink)] hover:bg-[color:var(--ink)]/5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            {ITEMS.map((it, i) => {
              const on = active === it.id;
              return (
                <li key={it.id}>
                  <a
                    href={`#${it.id}`}
                    onClick={() => setOpen(false)}
                    className={`group flex items-baseline gap-4 rounded-xl px-3 py-3 transition-colors ${
                      on
                        ? "bg-[color:var(--brand-yellow)]/25 text-[color:var(--ink)]"
                        : "text-[color:var(--ink)]/70 hover:bg-[color:var(--ink)]/5 hover:text-[color:var(--ink)]"
                    }`}
                  >
                    <span className="text-[10px] tabular-nums opacity-50 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-display text-2xl leading-tight ${on ? "font-bold" : ""}`}>
                      {it.label}
                    </span>
                    {on && (
                      <span className="ml-auto self-center h-2 w-2 rounded-full bg-[color:var(--brand-yellow)]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
