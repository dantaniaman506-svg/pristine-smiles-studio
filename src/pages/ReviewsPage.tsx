import { Star, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/lib/data";

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12">
      <Reveal>
        <div className="relative rounded-[2rem] overflow-hidden gradient-hero p-8 md:p-14 text-center text-primary-foreground shadow-image">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <SectionLabel>Patient Reviews</SectionLabel>
            <p className="mt-5 text-7xl md:text-8xl font-black gradient-text-gold">5.0</p>
            <div className="mt-3 flex justify-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
            </div>
            <p className="mt-4 text-primary-foreground/80 text-sm md:text-base">
              Verified Google reviews from 2,000+ happy patients across Mumbai.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.05}>
            <article className="h-full rounded-3xl bg-card border border-border p-6 md:p-7 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition">
              <div className="flex items-center justify-between">
                <div className="flex text-accent">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                </span>
              </div>
              <p className="mt-4 text-foreground italic leading-relaxed text-[15px]">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <p className="font-semibold text-primary">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.date}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
