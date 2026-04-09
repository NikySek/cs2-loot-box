import { Gamepad2, Wallet, Bell, ChevronDown, Users } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-14 bg-card border-b border-border flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-primary tracking-wider">
          CS2<span className="text-foreground">SKINS</span>
        </h1>
        <div className="hidden md:flex items-center gap-1">
          {[
            { icon: Gamepad2, label: "Games", hasDropdown: true },
            { icon: Users, label: "Leaderboard" },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm text-secondary-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm text-gaming-green">
          <span className="w-2 h-2 rounded-full bg-gaming-green animate-pulse" />
          <span className="hidden sm:inline">1,247 online</span>
        </div>

        <div className="flex items-center bg-secondary rounded px-3 py-1.5 gap-2">
          <span className="text-primary font-semibold text-sm">$12.50</span>
          <button className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">
            <Wallet className="w-3 h-3" />
          </button>
        </div>

        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-gaming-red rounded-full" />
        </button>

        <button className="flex items-center gap-2 bg-secondary rounded px-3 py-1.5 hover:bg-border transition-colors">
          <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs text-primary font-bold">
            U
          </div>
          <span className="text-sm text-foreground hidden sm:inline">User</span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
