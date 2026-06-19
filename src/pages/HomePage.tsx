import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { features, stats, processSteps, reviews, treatments, clinicEntranceUrl, clinicRoomUrl } from "@/lib/data";
import { whatsappLink, telLink, doctorName, doctorCredentials, addressShort } from "@/lib/site";

const heroStats = [
  { icon: Star, label: "5.0★ Google" },
  { icon: HeartHandshake, label: "Gentle Care" },
  { icon: ShieldCheck, label: "Sterile Protocol" },
  { icon: MapPin, label: "Goregaon West" },
];

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 gradient-soft" />
        <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 md:pt-12 pb-16 md:pb-24 grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/60 backdrop-blur px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> Where Dentistry Meets Art
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-[2rem] leading-[1.12] sm:text-5xl md:text-6xl font-black tracking-tight text-primary">
                Creating Healthy<br />
                &amp; <span className="italic font-light gradient-text-gold">Beautiful</span> Smiles.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
                Personalised, gentle and advanced dental care by <strong className="text-foreground">{doctorName}</strong> — {doctorCredentials}. Located in {addressShort}.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hi! I'd like to book an appointment at Dr. Maitri's Dental Care.")}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-gold hover:scale-[1.02] transition"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </a>
                <a href={telLink} className="inline-flex items-center gap-2 rounded-full border-2 border-primary/15 bg-background/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition">
                  Call the Clinic
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap gap-2">
                {heroStats.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur border border-border px-3.5 py-1.5 text-xs font-medium text-foreground shadow-card">
                    <Icon className="h-3.5 w-3.5 text-accent" /> {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] gradient-accent opacity-30 blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-image border border-accent/30">
              <img
                src={clinicRoomUrl}
                alt="Modern dental treatment room at Dr. Maitri's Dental Care"
                className="w-full h-[440px] md:h-[560px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-[260px] rounded-2xl bg-background/95 backdrop-blur p-4 shadow-soft border border-border"
              >
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  <span className="ml-1 text-sm font-bold text-foreground">5.0</span>
                </div>
                <p className="mt-1.5 text-[13px] text-muted-foreground leading-snug">
                  Trusted by 2,000+ patients across Mumbai for gentle, advanced dental care.
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLINIC BANNER */}
      <section className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden shadow-image">
            <img src={clinicEntranceUrl} alt="Dr. Maitri's Dental Care clinic entrance" className="w-full h-[260px] md:h-[420px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
            <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 rounded-2xl bg-background/95 backdrop-blur px-5 py-4 shadow-soft border border-border">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">Modern Clinic</p>
              <p className="mt-1 text-lg md:text-xl font-black text-primary">Advanced Operatory</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* DOCTOR */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] gradient-accent opacity-20 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden gradient-hero shadow-image flex items-end justify-center p-8 text-center border border-accent/20">
              <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative flex flex-col items-center gap-6">
                <div className="h-32 w-32 rounded-full gradient-accent grid place-items-center shadow-gold">
                  <span className="text-5xl font-black text-primary">M</span>
                </div>
                <div className="text-primary-foreground">
                  <p className="font-black text-2xl">{doctorName}</p>
                  <p className="mt-2 text-sm tracking-[0.18em] uppercase text-accent">BDS · Implantologist</p>
                  <p className="mt-4 text-xs text-primary-foreground/70">Photograph coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal><SectionLabel>Meet the Doctor</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary leading-tight">
              A calm, careful approach to <span className="italic font-light gradient-text-gold">every smile</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Dr. Maitri Patel Kova combines aesthetic precision with a genuinely warm, patient-first approach.
              From a child's first visit to full mouth rehabilitation, every plan is personal — never rushed.
            </p>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {[
              "Certified Aesthetic Dentist & Implantologist",
              "2,000+ happy patients across Mumbai",
              "5.0★ Google rating from verified reviews",
              "Pain-managed, anxiety-friendly treatment style",
            ].map((b, i) => (
              <Reveal key={b} delay={0.12 + i * 0.04}>
                <li className="flex gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3}>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
              Read More About Dr. Maitri <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="rounded-2xl bg-card border border-border p-5 md:p-7 text-center shadow-card hover:shadow-soft transition">
                <p className="text-3xl md:text-4xl font-black gradient-text-gold">{s.value}</p>
                <p className="mt-1.5 text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Why Choose Us</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
              Premium dentistry, with <span className="italic font-light gradient-text-gold">heart</span>.
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="h-full rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all">
                  <div className="h-12 w-12 rounded-2xl gradient-accent grid place-items-center shadow-gold">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* TREATMENTS PREVIEW */}
      <section className="bg-forest-soft/40 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-xl">
              <Reveal><SectionLabel>Our Treatments</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
                  Every service, <span className="italic font-light gradient-text-gold">one warm roof</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link to="/treatments" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.slice(0, 4).map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.slug} delay={i * 0.05}>
                  <Link
                    to="/treatments"
                    className="group block rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img src={t.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute top-3 left-3 h-10 w-10 rounded-xl gradient-accent grid place-items-center shadow-gold">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-primary">{t.title}</h3>
                      <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{t.short}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/treatments" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              View all treatments <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><SectionLabel>Patient Stories</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">
              Loved by <span className="italic font-light gradient-text-gold">2,000+ patients</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4 inline-flex items-center gap-2">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="text-sm font-semibold text-foreground">5.0 on Google</span>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <div className="h-full rounded-3xl bg-card border border-border p-6 shadow-card">
                <div className="flex text-accent">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-foreground italic leading-relaxed">"{r.text}"</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="font-semibold text-primary">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition">
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><SectionLabel>Your Patient Journey</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">Four simple steps to a confident smile.</h2>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative rounded-3xl gradient-soft border border-border p-6 h-full">
                  <span className="absolute -top-3 right-5 text-xs font-black tracking-[0.2em] uppercase text-accent bg-background px-3 py-1 rounded-full border border-accent/30 shadow-card">
                    Step {i + 1}
                  </span>
                  <div className="h-12 w-12 rounded-2xl bg-primary grid place-items-center">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden gradient-hero p-8 md:p-14 text-center text-primary-foreground shadow-image">
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
            <div className="relative max-w-2xl mx-auto">
              <SectionLabel>Ready to begin?</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-5xl font-black text-primary-foreground">
                Your <span className="italic font-light gradient-text-gold">beautiful smile</span> starts here.
              </h2>
              <p className="mt-4 text-primary-foreground/80">Open Monday – Saturday · 10am–1pm &amp; 5pm–8:30pm</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href={whatsappLink("Hi! I'd like to book an appointment at Dr. Maitri's Dental Care.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-gold">
                  Book on WhatsApp
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition">
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
