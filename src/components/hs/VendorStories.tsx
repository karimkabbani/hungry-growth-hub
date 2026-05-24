const STORIES = [
  {
    brand: "Bayt Mansaf",
    city: "Riyadh",
    quote: "We went from one branch to seven in eighteen months.",
    stats: [
      { n: "+47%", l: "orders" },
      { n: "5.2×", l: "ROAS" },
      { n: "SAR 180K", l: "incremental GMV" },
    ],
  },
  {
    brand: "Kanafa & Co.",
    city: "Jeddah",
    quote: "FlashDeals filled our 4–6pm dead hours — and stayed booked.",
    stats: [
      { n: "+62%", l: "off-peak orders" },
      { n: "4.8★", l: "rating" },
      { n: "2.1×", l: "repeat rate" },
    ],
  },
  {
    brand: "Najd Grills",
    city: "Dammam",
    quote: "Mofawter let us open the Khobar branch six months early.",
    stats: [
      { n: "SAR 240K", l: "advance" },
      { n: "11 mo", l: "payback" },
      { n: "+38%", l: "GMV" },
    ],
  },
];

export function VendorStories() {
  return (
    <section id="stories" className="relative scroll-mt-24 border-t border-border bg-background">
      <div className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-balance max-w-[16ch]">
              Built by Saudi restaurants.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">A few of the 55,000+ partners growing on HungerStation today.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <article key={s.brand} className="group relative flex flex-col rounded-3xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-cream font-display text-lg">
                  {s.brand[0]}
                </div>
                <div>
                  <div className="font-display text-lg leading-tight">{s.brand}</div>
                  <div className="text-xs text-muted-foreground">{s.city}</div>
                </div>
              </div>
              <p className="mt-6 font-display text-2xl text-balance leading-tight">"{s.quote}"</p>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t pt-6">
                {s.stats.map((st) => (
                  <div key={st.l}>
                    <div className="font-display text-xl text-magenta">{st.n}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{st.l}</div>
                  </div>
                ))}
              </div>
              <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 decoration-yellow decoration-4 group-hover:underline self-start">
                Read full story →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
