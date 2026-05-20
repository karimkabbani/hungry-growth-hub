import appScreen from "@/assets/app-screen.jpg";

export function PhoneMockup({ src = appScreen, alt = "HungerStation app" }: { src?: string; alt?: string }) {
  return (
    <div className="relative mx-auto w-[280px] md:w-[320px]">
      <div
        className="absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--brand-yellow), transparent)" }}
      />
      <div className="relative aspect-[9/19.5] rounded-[2.6rem] border-[10px] border-[color:var(--ink)] bg-[color:var(--ink)] shadow-2xl shadow-black/30 overflow-hidden transition-transform duration-700 hover:-translate-y-2 hover:rotate-[-1.5deg]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-5 w-24 rounded-full bg-[color:var(--ink)]" />
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    </div>
  );
}
