import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import {
  clinicName,
  phoneDisplay,
  phoneDisplayAlt,
  email,
  address,
  instagram,
  hours,
  whatsappLink,
} from "@/lib/site";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-28 lg:pb-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="[&_*]:!text-primary-foreground">
              <Logo size={48} variant="light" />
            </div>
            <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed max-w-xs">
              {clinicName} — creating healthy, beautiful smiles with gentle, advanced care in the heart of Goregaon West, Mumbai.
            </p>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-accent hover:opacity-80 transition"
            >
              <Instagram className="h-4 w-4" /> @drmaitrisdentalcare
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/85">
              {[
                ["/", "Home"],
                ["/treatments", "Treatments"],
                ["/gallery", "Gallery"],
                ["/reviews", "Reviews"],
                ["/about", "About Dr. Maitri"],
                ["/contact", "Contact & Book"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-accent transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">Reach Us</h4>
            <ul className="space-y-3.5 text-sm text-primary-foreground/85">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>{address}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span><a href={`tel:${phoneDisplay.replace(/\s/g,'')}`} className="hover:text-accent">{phoneDisplay}</a><br /><a href={`tel:${phoneDisplayAlt.replace(/\s/g,'')}`} className="hover:text-accent">{phoneDisplayAlt}</a></span>
              </li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><a href={`mailto:${email}`} className="hover:text-accent break-all">{email}</a></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>
                  {hours.map((h) => <span key={h.day} className="block"><strong className="font-semibold text-primary-foreground">{h.day}:</strong> {h.time}</span>)}
                </span>
              </li>
            </ul>
            <a
              href={whatsappLink("Hi! I'd like to book an appointment.")}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 rounded-full gradient-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-gold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row gap-3 justify-between text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Dr. Maitri's Dental Care. All rights reserved.</p>
          <p>Mumbai · Maharashtra · India</p>
        </div>
      </div>
    </footer>
  );
}
