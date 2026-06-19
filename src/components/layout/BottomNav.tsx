import { Link } from "@tanstack/react-router";
import { Home, Sparkles, Image as ImageIcon, Star, Phone } from "lucide-react";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/treatments", label: "Treatments", icon: Sparkles },
  { to: "/gallery", label: "Gallery", icon: ImageIcon },
  { to: "/reviews", label: "Reviews", icon: Star },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border shadow-[0_-4px_24px_rgba(40,60,40,0.08)]">
      <div className="flex items-stretch justify-around max-w-md mx-auto px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              activeOptions={{ exact: true }}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-[10px] font-semibold tracking-wider uppercase text-muted-foreground data-[status=active]:text-primary transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
