import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-kitchen.jpg";
import hsLogo from "@/assets/hungerstation-logo.png";
import phoneYellow from "@/assets/hs-phone-yellow.gif";
import { StatCounter } from "./StatCounter";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[color:var(--ink)] text-cream">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Saudi restaurant kitchen"
          className="h-[120%] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/40 via-[color:var(--ink)]/40 to-[color:var(--ink)]" />
      </div>

      <header className="container-x relative z-10 flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={hsLogo}
            alt="HungerStation"
            className="h-8 md:h-10 w-auto"
          />
          <span className="ml-1 hidden md:inline rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-widest">For Restaurants</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-cream/70">
          <a href="#grow-online" className="hover:text-cream">Products</a>
          <a href="#roi" className="hover:text-cream">ROI</a>
          <a href="#stories" className="hover:text-cream">Stories</a>
          <a href="#plan" className="hover:text-cream">Contact</a>
        </nav>
        <a
          href="#plan"
          className="rounded-full bg-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-hover transition"
        >
          Talk to Sales
        </a>
      </header>

      <div className="container-x relative z-10 grid min-h-[80vh] grid-cols-1 items-center gap-10 pb-24 pt-12 md:grid-cols-12">
        <div className="md:col-span-7 flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cream/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" /> Product Guide · 2025
          </span>
          <h1 className="font-display text-balance text-[14vw] md:text-[7.5vw] lg:text-[6.25rem] leading-[0.88] max-w-[18ch]">
            Your Door<br />to Growth in<br />
            <span className="accent-underline">Saudi Arabia.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-cream/70">
            Saudi Arabia's largest food delivery platform — and a lot more. <span className="text-cream font-semibold">13 years</span> building it, <span className="text-cream font-semibold">9 million customers</span> using it, <span className="text-cream font-semibold">55,000 restaurants</span> growing on it.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#goals"
              className="group inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-hover transition"
            >
              See How It Works
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#plan"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition"
            >
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-[60vw] max-w-[280px] md:w-full md:max-w-[440px] rotate-[6deg] md:rotate-[8deg]">
            <div
              className="absolute -inset-10 -z-10 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(closest-side, var(--brand-yellow), transparent)" }}
            />
            <img
              src={phoneYellow}
              alt="HungerStation app — Made with love in Al Khobar"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="container-x relative z-10 grid grid-cols-2 gap-8 border-t border-cream/15 py-10 md:grid-cols-4">
        <StatCounter value={9_000_000} suffix="+" label="Customers" />
        <StatCounter value={100} suffix="+" label="Cities" />
        <StatCounter value={55_000} suffix="+" label="Restaurant Partners" />
        <StatCounter value={30_000} suffix="+" label="Brands" />
      </div>
    </section>
  );
}
