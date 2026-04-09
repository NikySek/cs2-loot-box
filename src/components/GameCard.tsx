interface GameCardProps {
  title: string;
  image: string;
  price: number;
  accentColor?: string;
  hot?: boolean;
}

const GameCard = ({ title, image, price, accentColor = "bg-primary", hot }: GameCardProps) => {
  return (
    <div className="gaming-card cursor-pointer group relative">
      {hot && (
        <span className="absolute top-2 left-2 z-10 bg-gaming-red text-foreground text-[10px] font-bold uppercase px-2 py-0.5 rounded">
          Hot!
        </span>
      )}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-2.5 text-center space-y-1.5">
        <h3 className="text-xs font-bold text-foreground tracking-wider">{title}</h3>
        <div className={`h-0.5 w-full ${accentColor} rounded-full opacity-60`} />
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <span className="text-primary">🪙</span>
          <span>{price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
