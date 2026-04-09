import { Gamepad2, ChevronDown, HelpCircle, Trophy } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-12 bg-card border-b border-border flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-primary tracking-wider">
          CS2<span className="text-foreground">SKINS</span>
        </h1>
        <div className="hidden md:flex items-center gap-1">
          {[
            { icon: Gamepad2, label: "Games", hasDropdown: true },
            { icon: Trophy, label: "5K Race", badge: true },
            { icon: HelpCircle, label: "Help" },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm text-secondary-foreground hover:text-foreground hover:bg-secondary transition-colors relative"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              {item.badge && (
                <span className="absolute -top-1 -right-1 text-[9px] bg-gaming-red text-foreground px-1 rounded font-bold">
                  11h
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <button className="flex items-center gap-2 bg-secondary rounded px-4 py-1.5 hover:bg-border transition-colors border border-border">
        <span className="text-sm font-semibold text-foreground">LOG IN WITH STEAM</span>
      </button>
    </nav>
  );
};

export default Navbar;
