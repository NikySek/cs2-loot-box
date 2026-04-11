import { useNavigate } from "react-router-dom";

interface GameCardProps {
  title: string;
  image: string;
  hot?: boolean;
  link?: string;
}

const GameCard = ({ title, image, hot, link }: GameCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="gaming-card cursor-pointer group relative"
      onClick={() => link && navigate(link)}
    >
      {hot && (
        <span className="absolute top-2 left-2 z-10 bg-gaming-red text-foreground text-[10px] font-bold uppercase px-2 py-0.5 rounded">
          Hot!
        </span>
      )}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-sm font-bold text-foreground tracking-wider">{title}</h3>
      </div>
    </div>
  );
};

export default GameCard;
