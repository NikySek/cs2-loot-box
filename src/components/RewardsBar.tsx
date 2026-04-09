import { Gift, Clock, DollarSign, Tag, Users } from "lucide-react";

const REWARDS = [
  { icon: Gift, label: "Level Rewards", sub: "Claim now" },
  { icon: Clock, label: "Free Coins", sub: "Available in 04:26" },
  { icon: DollarSign, label: "Free $0.03", sub: "Every 15 mins" },
  { icon: Tag, label: "Promo Code", sub: "Redeem free" },
  { icon: Users, label: "Referral", sub: "Get bonuses" },
];

const RewardsBar = () => {
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground mb-3">Get Free Money</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {REWARDS.map((r, i) => (
          <button
            key={i}
            className="gaming-card flex flex-col items-center p-4 gap-2 hover:border-primary/50"
          >
            <r.icon className="w-6 h-6 text-primary" />
            <span className="text-xs font-bold text-foreground">{r.label}</span>
            <span className="text-[10px] text-muted-foreground">{r.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RewardsBar;
