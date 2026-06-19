import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { whatsappLink } from "@/lib/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function TopBar() {
  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(1180px,calc(100%-1.25rem))]">
      <div className="flex items-center justify-between gap-3 rounded-full border border-border/60 bg-background/85 backdrop-blur-xl px-3 py-2 shadow-soft">
        <div className="pl-1.5">
          <Logo size={42} />
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/75 hover:text-primary hover:bg-muted transition-colors data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink("Hi! I'd like to book an appointment at Dr. Maitri's Dental Care.")}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-accent px-4 lg:px-5 py-2.5 text-sm font-semibold text-primary shadow-gold hover:opacity-95 transition"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
