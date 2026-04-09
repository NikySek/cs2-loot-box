import Navbar from "@/components/Navbar";
import ChatSidebar from "@/components/ChatSidebar";
import CrateFilters from "@/components/CrateFilters";
import GameCard from "@/components/GameCard";

import crateBattles from "@/assets/crate-battles.jpg";
import caseOpening from "@/assets/case-opening.jpg";
import wheelFortune from "@/assets/wheel-fortune.jpg";
import coinflip from "@/assets/coinflip.jpg";
import upgrader from "@/assets/upgrader.jpg";
import jackpot from "@/assets/jackpot.jpg";
import roulette from "@/assets/roulette.jpg";

const GAMES = [
  { title: "Black & White", image: crateBattles, price: 4.60, accentColor: "bg-gaming-green" },
  { title: "5% AK", image: caseOpening, price: 1.47, accentColor: "bg-gaming-red" },
  { title: "Birthday", image: wheelFortune, price: 0.60, accentColor: "bg-purple-500" },
  { title: "70% Tempered", image: coinflip, price: 4.00, accentColor: "bg-blue-500" },
  { title: "Space Dream", image: upgrader, price: 2.80, accentColor: "bg-primary" },
  { title: "Gold", image: jackpot, price: 10.00, accentColor: "bg-primary" },
  { title: "Baller", image: roulette, price: 37.25, accentColor: "bg-gaming-green" },
  { title: "Birthday Snowball", image: crateBattles, price: 5.35, accentColor: "bg-gaming-red" },
  { title: "1% Baller", image: caseOpening, price: 8.45, accentColor: "bg-purple-500" },
  { title: "Snowball", image: wheelFortune, price: 20.50, accentColor: "bg-blue-500" },
  { title: "2024", image: coinflip, price: 40.95, accentColor: "bg-primary" },
  { title: "Booster", image: upgrader, price: 102.50, accentColor: "bg-gaming-red" },
];

const Index = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
          <CrateFilters />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {GAMES.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
