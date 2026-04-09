const DROPS = [
  { user: "Tim4iRus", value: "0.64", color: "border-primary" },
  { user: "Name", value: "0.09", color: "border-muted" },
  { user: "xShadow", value: "1.25", color: "border-gaming-green" },
  { user: "tom", value: "0.08", color: "border-muted" },
  { user: "Lucky7", value: "3.50", color: "border-primary" },
  { user: "Deagle", value: "0.15", color: "border-muted" },
];

const LiveDrops = () => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {DROPS.map((drop, i) => (
        <div
          key={i}
          className={`flex-shrink-0 bg-secondary rounded border-t-2 ${drop.color} px-4 py-2 min-w-[100px] text-center`}
        >
          <p className="text-primary font-bold text-sm">${drop.value}</p>
          <p className="text-xs text-muted-foreground truncate">{drop.user}</p>
        </div>
      ))}
    </div>
  );
};

export default LiveDrops;
