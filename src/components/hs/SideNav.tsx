import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import hsLogo from "@/assets/hungerstation-logo.png";

const ITEMS = [
  { id: "grow-online", label: "Grow Online" },
  { id: "order-value", label: "Order Value & Volume" },
  { id: "attract", label: "Attract Customers" },
  { id: "financing", label: "Fund Your Growth" },
  { id: "ops", label: "Optimize Ops" },
];

export function SideNav() {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > window.innerHeight * 0.9);

      const threshold = window.innerHeight * 0.4;
      let current = "";
      for (const it of ITEMS) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= threshold) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop sticky top nav */}
      <div
        className={`fixed inset-x-0 top-0 z-40 hidden md:block transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="h-[60px] bg-[color:var(--cream)]/95 backdrop-blur-md border-b"
          style={{ borderColor: "rgba(90, 45, 29, 0.12)" }}
        >
          <div className="container-x flex h-full items-center justify-between gap-6">
            <a href="#top" onClick={scrollTo("top")} className="flex items-center">
              <img src={hsLogo} alt="HungerStation" className="h-8 w-auto" />
            </a>

            <nav className="flex items-center gap-7">
              {ITEMS.map((it) => {
                const on = active === it.id;
                return (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    onClick={scrollTo(it.id)}
                    className="relative text-sm font-medium transition-colors whitespace-nowrap"
                    style={{ color: "#5A2D1D" }}
                  >
                    <span className={on ? "" : "opacity-70 hover:opacity-100"}>{it.label}</span>
                    {on && (
                      <span
                        className="absolute left-0 right-0 -bottom-1.5 h-[2px] rounded-full"
                        style={{ backgroundColor: "#FCE413" }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <a
              href="#plan"
              onClick={scrollTo("plan")}
              className="btn-hs-yellow rounded-full px-4 py-2 text-sm font-semibold"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>

      {/* Mobile back-to-top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`md:hidden fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ backgroundColor: "#5A2D1D", color: "var(--cream)" }}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
