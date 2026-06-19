import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { aboutAchievements, specialisations } from "@/lib/data";
import { doctorName, doctorCredentials, whatsappLink } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12">
      <section className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] gradient-accent opacity-20 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden gradient-hero shadow-image flex items-end justify-center p-8 text-center border border-accent/20">
              <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative flex flex-col items-center gap-6">
                <div className="h-36 w-36 rounded-full gradient-accent grid place-items-center shadow-gold">
                  <span className="text-6xl font-black text-primary">M</span>
                </div>
                <div className="text-primary-foreground">
                  <p className="font-black text-2xl">{doctorName}</p>
                  <p className="mt-2 text-xs tracking-[0.18em] uppercase text-accent">Photograph coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal><SectionLabel>About the Doctor</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 text-4xl md:text-5xl font-black text-primary leading-tight">
              {doctorName}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 text-sm font-semibold tracking-[0.16em] uppercase gradient-text-gold">{doctorCredentials}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Aesthetic Dentist", "Implantologist", "Smile Design", "Gentle Care"].map((tag) => (
                <span key={tag} className="rounded-full bg-accent-soft text-primary px-3 py-1 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Dr. Maitri combines clinical expertise with a warm, patient-first approach. Her goal at
              Dr. Maitri's Dental Care is simple — provide the highest quality dental care in a comfortable,
              relaxed environment that feels less like a clinic and more like a calm retreat for your smile.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From a child's very first dental visit to complex full-mouth rehabilitation, every plan
              is unhurried, personalised, and explained in detail.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-20">
        <Reveal><SectionLabel>Credentials</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">Qualified. Experienced. Trusted.</h2></Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutAchievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-card border border-border p-6 shadow-card">
                  <div className="h-12 w-12 rounded-2xl gradient-accent grid place-items-center shadow-gold">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 font-bold text-primary">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-20 max-w-3xl">
        <Reveal><SectionLabel>Our Philosophy</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <blockquote className="mt-5 text-2xl md:text-3xl font-black text-primary leading-snug">
            "Great dentistry is <span className="italic font-light gradient-text-gold">half science, half empathy</span>. We commit to both — every visit, every patient."
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We believe in treatment plans built around <em>you</em> — your goals, your comfort, your budget.
            No upsells. No rushed decisions. Just calm, transparent, beautifully crafted dental care.
          </p>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal><SectionLabel>Specialisations</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 className="mt-3 text-3xl md:text-4xl font-black text-primary">Areas of expertise.</h2></Reveal>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {specialisations.map((s) => (
            <span key={s} className="rounded-full border border-accent/30 bg-accent-soft/60 px-4 py-2 text-sm font-semibold text-primary">
              {s}
            </span>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="mt-20 relative rounded-[2rem] overflow-hidden gradient-hero p-8 md:p-14 text-center text-primary-foreground shadow-image">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black">Ready to meet Dr. Maitri?</h2>
            <p className="mt-3 text-primary-foreground/80">Book a calm, unhurried consultation today.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={whatsappLink("Hi! I'd like to book an appointment with Dr. Maitri.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-gold">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition">
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
