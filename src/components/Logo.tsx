import logoAsset from "@/assets/logo.png.asset.json";
import { Link } from "@tanstack/react-router";
import { clinicName } from "@/lib/site";

interface LogoProps {
  size?: number;
  showText?: boolean;
  variant?: "default" | "light";
}

export function Logo({ size = 44, showText = true, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-primary";
  const subColor = variant === "light" ? "text-primary-foreground/70" : "text-muted-foreground";

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span
        className="relative inline-flex items-center justify-center rounded-2xl gradient-accent shadow-gold transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src={logoAsset.url}
          alt={`${clinicName} logo`}
          width={size}
          height={size}
          className="w-[72%] h-[72%] object-contain"
          style={{ filter: "brightness(0)" }}
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-black text-[15px] tracking-tight ${textColor}`}>Dr. Maitri's</span>
          <span className={`font-semibold text-[11px] tracking-[0.18em] uppercase ${subColor}`}>
            Dental Care
          </span>
        </span>
      )}
    </Link>
  );
}
