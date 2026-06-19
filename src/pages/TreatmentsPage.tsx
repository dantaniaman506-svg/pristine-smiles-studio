import { useState } from "react";
import { ChevronRight, CheckCircle2, Plus, X, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { treatments } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function TreatmentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-8 md:py-12">
      <Reveal><SectionLabel>Our Treatments</SectionLabel></Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-3 text-4xl md:text-5xl font-black text-primary leading-tight">
          Comprehensive dental care, <span className="italic font-light gradient-text-gold">crafted for you</span>.
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-muted-foreground">
          From routine cleanings to full smile makeovers — every treatment is delivered with precision,
          empathy and the latest technology.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-2 sm:grid-cols-2">
        {treatments.map((t) => (
          <a
            key={t.slug}
            href={`#treatment-${t.slug}`}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-primary hover:border-accent hover:shadow-card transition"
          >
            <span>{t.title}</span>
            <ChevronRight className="h-4 w-4 text-accent group-hover:translate-x-0.5 transition-transform" />
          </a>
        ))}
      </div>

      <div className="mt-16 space-y-20">
        {treatments.map((t, i) => (
          <TreatmentCard key={t.slug} treatment={t} index={i} />
        ))}
      </div>

      <Reveal>
        <div className="mt-20 relative rounded-[2rem] overflow-hidden gradient-hero p-8 md:p-12 text-center text-primary-foreground shadow-image">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-black">Not sure which treatment you need?</h2>
            <p className="mt-3 text-primary-foreground/80">Book a free consultation and we'll guide you through it.</p>
            <a href={whatsappLink("Hi! I'd like a free consultation at Dr. Maitri's Dental Care.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 rounded-full gradient-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-gold">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function TreatmentCard({ treatment: t, index }: { treatment: typeof treatments[number]; index: number }) {
  const Icon = t.icon;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Reveal>
      <article id={`treatment-${t.slug}`} className="scroll-mt-28">
        <div className="relative rounded-[2rem] overflow-hidden shadow-image">
          <img src={t.image} alt={t.title} className="w-full aspect-square md:aspect-[4/3] object-cover" loading="lazy" />
          <div className="absolute top-5 left-5 h-12 w-12 rounded-2xl gradient-accent grid place-items-center shadow-gold">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
            <span className="rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-black tracking-[0.2em] uppercase text-accent border border-accent/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full bg-primary/85 backdrop-blur px-4 py-2 text-sm font-bold text-primary-foreground">
              {t.title}
            </span>
          </div>
        </div>

        <div className="mt-7">
          <h2 className="text-2xl md:text-3xl font-black text-primary">{t.title}</h2>
          <p className="mt-3 text-muted-foreground">{t.short}</p>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-forest-soft/50 p-5 border border-border">
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-accent">Benefits</h3>
            <ul className="mt-3 space-y-2">
              {t.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-5 border border-border">
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-accent">The Process</h3>
            <ol className="mt-3 space-y-2.5">
              {t.process.map((p, i) => (
                <li key={p} className="flex gap-3 text-sm text-foreground">
                  <span className="h-5 w-5 rounded-full gradient-accent text-primary text-[11px] font-black grid place-items-center shrink-0">{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-7">
          <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-accent">FAQs</h3>
          <div className="mt-3 space-y-2">
            {t.faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="rounded-2xl border border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-primary"
                  >
                    {f.q}
                    {isOpen ? <X className="h-4 w-4 text-accent" /> : <Plus className="h-4 w-4 text-accent" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={whatsappLink(`Hi! I'd like to book a consultation for ${t.title}.`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full gradient-accent px-5 py-3 text-sm font-semibold text-primary shadow-gold">
            Book Consultation
          </a>
          <a href={whatsappLink(`Hi! I have a question about ${t.title}.`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/15 bg-background px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition">
            Ask on WhatsApp
          </a>
        </div>
      </article>
    </Reveal>
  );
}
