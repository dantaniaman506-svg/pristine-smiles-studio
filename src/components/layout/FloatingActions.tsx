import { Phone } from "lucide-react";
import { whatsappLink, telLink } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.486 2 2 6.486 2 12c0 1.92.55 3.71 1.5 5.236L2 22l4.881-1.477A9.953 9.953 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"/>
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed right-4 z-40 flex flex-col gap-3 bottom-[5.5rem] lg:bottom-6">
      <a
        href={whatsappLink("Hi! I'd like to know more about treatments at Dr. Maitri's Dental Care.")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="h-12 w-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-soft hover:scale-110 transition-transform"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={telLink}
        aria-label="Call clinic"
        className="h-12 w-12 rounded-full gradient-accent text-primary grid place-items-center shadow-gold hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
