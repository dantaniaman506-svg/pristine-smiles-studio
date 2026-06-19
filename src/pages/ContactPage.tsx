import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertTriangle, Instagram } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { treatments } from "@/lib/data";
import {
  address, phoneDisplay, phoneDisplayAlt, email, hours, mapEmbedUrl, instagram,
  whatsappLink, telLink, closedDays,
} from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().refine((val) => {
    if (!val) return false;
    const day = new Date(val).getDay();
    return !closedDays.includes(day);
  }, { message: "Clinic is by appointment only on this day — please pick another or WhatsApp us." }),
  message: z.string().max(500).optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } =
    useForm<FormData>({ resolver: zodResolver(schema), mode: "onTouched" });

  const selectedDate = watch("date");
  const dateWarning =
    selectedDate && closedDays.includes(new Date(selectedDate).getDay())
      ? "Sundays & afternoon slots are by appointment only — WhatsApp us to confirm."
      : null;

  const onSubmit = (data: FormData) => {
    const msg = `New appointment request:%0A
Name: ${data.name}%0A
Phone: ${data.phone}%0A
Treatment: ${data.treatment}%0A
Date: ${data.date}%0A
${data.message ? `Message: ${data.message}` : ""}`;
    window.open(`https://wa.me/918788490331?text=${msg}`, "_blank");
    setSubmitted(true);
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12">
      <Reveal><SectionLabel>Contact & Book</SectionLabel></Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-3 text-4xl md:text-5xl font-black text-primary leading-tight">
          Let's get you <span className="italic font-light gradient-text-gold">smiling</span>.
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Fill the form and we'll confirm your slot on WhatsApp — or reach us directly anytime during clinic hours.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] bg-card border border-border p-6 md:p-8 shadow-card">
            {submitted && (
              <div className="mb-5 flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 p-4">
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <strong className="font-semibold">Request sent!</strong> WhatsApp opened with your details — please send the message to confirm.
                </div>
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name")} className="input" placeholder="Your name" autoComplete="name" />
              </Field>
              <Field label="Phone Number" error={errors.phone?.message}>
                <input {...register("phone")} className="input" placeholder="+91 98XXX XXXXX" autoComplete="tel" type="tel" />
              </Field>
              <Field label="Treatment Interest" error={errors.treatment?.message}>
                <select {...register("treatment")} className="input">
                  <option value="">Select a treatment</option>
                  {treatments.map((t) => <option key={t.slug} value={t.title}>{t.title}</option>)}
                  <option value="General Consultation">General Consultation</option>
                </select>
              </Field>
              <Field label="Preferred Date" error={errors.date?.message}>
                <input {...register("date")} type="date" className="input" min={new Date().toISOString().split("T")[0]} />
              </Field>
            </div>

            {dateWarning && !errors.date && (
              <div className="mt-3 flex items-start gap-2 rounded-xl bg-accent-soft/60 border border-accent/30 p-3 text-sm text-primary">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>{dateWarning}</span>
              </div>
            )}

            <Field label="Message (optional)" error={errors.message?.message} className="mt-5">
              <textarea {...register("message")} rows={4} className="input resize-none" placeholder="Tell us a bit about what you need..." />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-accent px-6 py-3.5 text-sm font-bold text-primary shadow-gold hover:scale-[1.01] transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Book Appointment"}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              By submitting, you agree to be contacted regarding your appointment.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="rounded-[2rem] gradient-hero text-primary-foreground p-6 md:p-8 shadow-image relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "var(--gradient-radial-gold)" }} />
            <div className="relative">
              <h2 className="text-xl font-black">Visit or reach us</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span className="text-primary-foreground/90">{address}</span></li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>
                    <a href={telLink} className="hover:text-accent">{phoneDisplay}</a><br />
                    <a href={`tel:${phoneDisplayAlt.replace(/\s/g, "")}`} className="hover:text-accent">{phoneDisplayAlt}</a>
                  </span>
                </li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" /><a href={`mailto:${email}`} className="hover:text-accent break-all">{email}</a></li>
                <li className="flex gap-3"><Instagram className="h-5 w-5 text-accent shrink-0 mt-0.5" /><a href={instagram} target="_blank" rel="noreferrer" className="hover:text-accent">@drmaitrisdentalcare</a></li>
              </ul>

              <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-[0.18em] uppercase text-accent">
                  <Clock className="h-4 w-4" /> Clinic Hours
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-primary-foreground/90">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-3">
                      <span className="font-semibold text-primary-foreground">{h.day}</span>
                      <span className="text-right text-primary-foreground/75">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={whatsappLink("Hi! I'd like to book an appointment.")} target="_blank" rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-accent px-5 py-3 text-sm font-bold text-primary shadow-gold">
                Quick WhatsApp Booking
              </a>
            </div>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-10 rounded-[2rem] overflow-hidden shadow-image border border-border">
          <iframe
            src={mapEmbedUrl}
            width="100%" height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Maitri's Dental Care location"
          />
        </div>
      </Reveal>

      <style>{`
        .input {
          width: 100%;
          border-radius: 9999px;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1.1rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 4px oklch(0.74 0.13 75 / 0.15); }
        textarea.input { border-radius: 1.25rem; }
      `}</style>
    </div>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-bold tracking-[0.16em] uppercase text-primary mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive font-medium">{error}</p>}
    </div>
  );
}
