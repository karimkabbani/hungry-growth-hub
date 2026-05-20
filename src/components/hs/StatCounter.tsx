import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({ value, suffix = "", label, duration = 1800 }: Props) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.floor(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  const formatted =
    value >= 1_000_000
      ? `${(display / 1_000_000).toFixed(display >= value ? 0 : 1)}M`
      : value >= 1000
        ? `${(display / 1000).toFixed(0)}K`
        : display.toString();

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="font-display text-5xl md:text-7xl">
        {formatted}
        <span className="text-[color:var(--brand-yellow)]">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm uppercase tracking-[0.18em] opacity-70">
        {label}
      </div>
    </div>
  );
}
