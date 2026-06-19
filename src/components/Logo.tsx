import logoSrc from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { clinicName } from "@/lib/site";

interface LogoProps {
  size?: number;
  showText?: boolean;
  variant?: "default" | "light";
}

export function Logo({ size = 52, showText = true, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-primary";
  const subColor = variant === "light" ? "text-primary-foreground/70" : "text-accent";

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span
        className="relative inline-flex items-center justify-center rounded-2xl bg-ivory shadow-gold ring-2 ring-accent/50 transition-transform group-hover:scale-105 overflow-hidden"
        style={{ width: size, height: size }}
      >
        <span
          className="absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-accent)", mixBlendMode: "soft-light" }}
        />
        <img
          src={logoSrc}
          alt={`${clinicName} logo`}
          width={size}
          height={size}
          className="relative w-[78%] h-[78%] object-contain"
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-black text-[15px] sm:text-base tracking-tight ${textColor}`}>
            Dr. Maitri's
          </span>
          <span className={`font-bold text-[10px] tracking-[0.22em] uppercase ${subColor}`}>
            Dental Care
          </span>
        </span>
      )}
    </Link>
  );
}
