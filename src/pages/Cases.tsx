import { useState } from "react";
import Navbar from "@/components/Navbar";
import ChatSidebar from "@/components/ChatSidebar";
import { Search, Star, Plus, AlertTriangle, Shield, DollarSign, ChevronDown } from "lucide-react";

interface CrateItem {
  name: string;
  price: number;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  image?: string;
}

const CRATES: CrateItem[] = [
  { name: "Ghostly Graves", price: 0.20, rarity: "common" },
  { name: "Rusty Angelo", price: 0.20, rarity: "common" },
  { name: "Dreamer", price: 0.25, rarity: "common" },
  { name: "Christmas Luck", price: 0.34, rarity: "uncommon" },
  { name: "Valentine's", price: 0.40, rarity: "uncommon" },
  { name: "10% Bunny", price: 0.40, rarity: "uncommon" },
  { name: "Recess Crate", price: 0.40, rarity: "uncommon" },
  { name: "1% Spacesuit", price: 0.40, rarity: "rare" },
  { name: "Big Red", price: 0.40, rarity: "rare" },
  { name: "Gun Crate", price: 0.50, rarity: "rare" },
  { name: "Birthday", price: 0.60, rarity: "rare" },
  { name: "Summer Bonanza", price: 0.60, rarity: "epic" },
  { name: "Airdrop Crate", price: 0.70, rarity: "epic" },
  { name: "Desert Crate", price: 0.70, rarity: "epic" },
  { name: "Easter Frenzy", price: 0.75, rarity: "epic" },
  { name: "Junk Pile", price: 0.80, rarity: "epic" },
  { name: "Framed", price: 0.85, rarity: "legendary" },
  { name: "Dumpster Drip", price: 0.96, rarity: "legendary" },
  { name: "1% Banana Eoka", price: 1.00, rarity: "legendary" },
  { name: "Coinflip Crate", price: 1.00, rarity: "legendary" },
  { name: "Pumpkin Dreamer", price: 1.00, rarity: "legendary" },
  { name: "10% Furnace", price: 1.25, rarity: "legendary" },
  { name: "5% AK", price: 1.47, rarity: "legendary" },
  { name: "Neon Dream", price: 1.50, rarity: "legendary" },
];

const FILTERS = [
  { label: "Popular", icon: Star },
  { label: "New", icon: Plus },
  { label: "High Risk", icon: AlertTriangle },
  { label: "Low Risk", icon: Shield },
  { label: "Cheap", icon: DollarSign },
];

const RARITY_COLORS: Record<string, string> = {
  common: "from-gray-500/30 to-gray-600/10 border-gray-500/30",
  uncommon: "from-green-500/30 to-green-600/10 border-green-500/30",
  rare: "from-blue-500/30 to-blue-600/10 border-blue-500/30",
  epic: "from-purple-500/30 to-purple-600/10 border-purple-500/30",
  legendary: "from-amber-500/30 to-amber-600/10 border-amber-500/30",
};

const RARITY_GLOW: Record<string, string> = {
  common: "shadow-gray-500/10",
  uncommon: "shadow-green-500/10",
  rare: "shadow-blue-500/10",
  epic: "shadow-purple-500/10",
  legendary: "shadow-amber-500/20",
};

const Cases = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Popular");
  const [sortOrder, setSortOrder] = useState("Price (low to high)");

  const filtered = CRATES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search a crate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              {FILTERS.map((f) => {
                const Icon = f.icon;
                const isActive = activeFilter === f.label;
                return (
                  <button
                    key={f.label}
                    onClick={() => setActiveFilter(f.label)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {f.label}
                  </button>
                );
              })}
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted-foreground bg-secondary hover:text-foreground transition-colors">
              {sortOrder}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Crate Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map((crate) => (
              <button
                key={crate.name}
                className={`gaming-card group relative flex flex-col items-center p-4 bg-gradient-to-b ${RARITY_COLORS[crate.rarity]} hover:shadow-lg ${RARITY_GLOW[crate.rarity]} transition-all duration-300`}
              >
                {/* Crate visual placeholder */}
                <div className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded border-2 border-current opacity-30 flex items-center justify-center text-foreground">
                    <span className="text-2xl">📦</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xs font-bold text-foreground tracking-wide text-center leading-tight mb-2">
                  {crate.name}
                </h3>

                {/* Price bar indicator */}
                <div className="w-full h-0.5 rounded-full bg-secondary mb-2">
                  <div
                    className="h-full rounded-full bg-gaming-green"
                    style={{ width: `${Math.min(crate.price / 2 * 100, 100)}%` }}
                  />
                </div>

                {/* Price */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="text-gaming-green font-semibold">💰</span>
                  <span className="font-bold text-foreground">{crate.price.toFixed(2)}</span>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cases;
