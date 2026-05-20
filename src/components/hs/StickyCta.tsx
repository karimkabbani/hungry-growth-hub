import { useEffect, useState } from "react";

export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight;
      const nearBottom = window.innerHeight + window.scrollY > document.body.offsetHeight - 600;
      setShow(past && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#plan"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-blue text-white px-5 py-3.5 text-sm font-semibold shadow-2xl shadow-black/20 transition-all hover:bg-blue-hover ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      Talk to Sales <span aria-hidden>→</span>
    </a>
  );
}
