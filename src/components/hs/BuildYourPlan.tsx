import { useState } from "react";
import jsPDF from "jspdf";
import { Mail, Phone } from "lucide-react";
import { useHs, GOAL_META } from "@/lib/hs-context";

export function BuildYourPlan() {
  const { goal, engaged } = useHs();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const products = goal ? GOAL_META[goal].products : ["Delivery Service", "RDF / HPlus", "Sponsored Listing"];
  const goalLabel = goal ? GOAL_META[goal].label : "Custom growth stack";

  const downloadPdf = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const W = doc.internal.pageSize.getWidth();
    let y = 60;

    doc.setFillColor(255, 214, 10);
    doc.rect(0, 0, W, 8, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text("HUNGERSTATION · YOUR GROWTH PLAN", 48, (y -= 0) + 0);

    y += 30;
    doc.setFontSize(34);
    doc.setTextColor(59, 42, 26);
    doc.text(form.name || "Your Restaurant", 48, y);

    y += 28;
    doc.setFontSize(13);
    doc.setTextColor(110);
    doc.text(`Selected goal: ${goalLabel}`, 48, y);

    y += 40;
    doc.setFontSize(11);
    doc.setTextColor(120);
    doc.text("RECOMMENDED PRODUCTS", 48, y);

    y += 20;
    doc.setFontSize(16);
    doc.setTextColor(59, 42, 26);
    products.forEach((p) => {
      y += 22;
      doc.text(`•  ${p}`, 48, y);
    });

    y += 40;
    doc.setFontSize(11);
    doc.setTextColor(120);
    doc.text("CONTACT", 48, y);
    y += 18;
    doc.setFontSize(12);
    doc.setTextColor(59, 42, 26);
    if (form.email) { doc.text(form.email, 48, y); y += 16; }
    if (form.phone) { doc.text(form.phone, 48, y); y += 16; }

    y += 30;
    doc.setFontSize(9);
    doc.setTextColor(140);
    doc.text(`Engagement signals captured: ${engaged.size}`, 48, y);
    y += 12;
    doc.text("Your dedicated AM will reach out within one business day.", 48, y);

    doc.save(`HungerStation-Plan-${(form.name || "vendor").replace(/\s+/g, "-")}.pdf`);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="plan" className="relative scroll-mt-24 border-t border-border bg-ink text-cream">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cream/60">08 — Build your plan</div>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-balance">
              Your HungerStation<br /><span className="text-yellow">growth stack.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-cream/70">
              Based on what you explored, here's what we'd recommend you launch first.
            </p>

            <div className="mt-10 rounded-3xl border border-cream/15 bg-cream/5 p-7">
              <div className="text-xs uppercase tracking-[0.22em] text-cream/60">Selected goal</div>
              <div className="font-display text-3xl mt-2">{goalLabel}</div>

              <div className="mt-7 space-y-3">
                {products.map((p, i) => (
                  <div key={p} className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-yellow text-ink font-display text-sm">
                      {i + 1}
                    </span>
                    <span className="font-semibold">{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs uppercase tracking-[0.18em] text-cream/50">
                {engaged.size} engagement signal{engaged.size === 1 ? "" : "s"} captured · personalized for you
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={submit} className="rounded-3xl bg-cream text-ink p-7 md:p-9">
              <div className="font-display text-2xl">Let's get started.</div>
              <p className="mt-1 text-sm text-muted-foreground">An Account Manager will be in touch within one business day.</p>

              <div className="mt-6 space-y-4">
                <Input label="Restaurant name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Input label="Contact email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <Input label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-blue text-white font-semibold py-3.5 hover:bg-blue-hover transition"
                >
                  {submitted ? "✓ Submitted" : "Get started"}
                </button>
                <button
                  type="button"
                  onClick={downloadPdf}
                  className="flex-1 rounded-full bg-white text-foreground border border-border font-semibold py-3.5 hover:border-foreground/30 transition"
                >
                  Download my plan
                </button>
              </div>
              {submitted && (
                <p className="mt-4 text-xs text-muted-foreground">Thanks — we've got it. Check your email shortly.</p>
              )}
            </form>

            <div className="mt-6 rounded-3xl border border-cream/15 bg-cream/5 p-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-yellow text-ink grid place-items-center font-display text-xl">
                FA
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.18em] text-cream/60">Or speak to a real human</div>
                <div className="font-display text-lg mt-0.5">Fahad Alotaibi</div>
                <div className="text-xs text-cream/70">Senior Partner Manager · KSA</div>
              </div>
              <div className="hidden sm:flex flex-col gap-1 text-xs text-cream/80">
                <a href="tel:+966500000000" className="flex items-center gap-2 hover:text-yellow"><Phone className="h-3 w-3" /> +966 50 000 0000</a>
                <a href="mailto:partners@hungerstation.com" className="flex items-center gap-2 hover:text-yellow"><Mail className="h-3 w-3" /> partners@hungerstation.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-x border-t border-cream/15 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-cream/50">
        <div>© {new Date().getFullYear()} HungerStation. For restaurant partners.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream">Privacy</a>
          <a href="#" className="hover:text-cream">Terms</a>
          <a href="#" className="hover:text-cream">العربية</a>
        </div>
      </footer>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
      />
    </label>
  );
}
