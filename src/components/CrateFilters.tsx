import { Star, Sparkles, TrendingUp, TrendingDown, DollarSign, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const FILTERS = [
  { icon: Star, label: "Popular", active: true },
  { icon: Sparkles, label: "New" },
  { icon: TrendingUp, label: "High Risk" },
  { icon: TrendingDown, label: "Low Risk" },
  { icon: DollarSign, label: "Cheap" },
];

const CrateFilters = () => {
  const [active, setActive] = useState("Popular");

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search a crate..."
            className="w-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-1 focus:ring-primary border border-border"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.label}
              onClick={() => setActive(f.label)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                active === f.label
                  ? "bg-secondary text-foreground border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <f.icon className="w-3.5 h-3.5" />
              {f.label}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
          🔥 Most popular
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default CrateFilters;
