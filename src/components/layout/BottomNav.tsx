import { NavLink } from "react-router-dom";
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
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-1.5 py-1.5 rounded-xl text-[9px] font-semibold tracking-wide uppercase transition-colors min-w-0 flex-1 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="truncate w-full text-center">{tab.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
