import Navbar from "@/components/Navbar";
import ChatSidebar from "@/components/ChatSidebar";
import HeroBanner from "@/components/HeroBanner";
import LiveDrops from "@/components/LiveDrops";
import GameCard from "@/components/GameCard";
import RewardsBar from "@/components/RewardsBar";

import crateBattles from "@/assets/crate-battles.jpg";
import caseOpening from "@/assets/case-opening.jpg";
import wheelFortune from "@/assets/wheel-fortune.jpg";
import coinflip from "@/assets/coinflip.jpg";
import upgrader from "@/assets/upgrader.jpg";
import jackpot from "@/assets/jackpot.jpg";
import roulette from "@/assets/roulette.jpg";

const GAMES = [
  { title: "Crate Battles", image: crateBattles, hot: true },
  { title: "Case Opening", image: caseOpening },
  { title: "Wheel of Fortune", image: wheelFortune },
  { title: "Coinflip", image: coinflip },
  { title: "Upgrader", image: upgrader },
  { title: "Jackpot", image: jackpot },
  { title: "Roulette", image: roulette },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Welcome back!</h2>
            <div className="flex items-center gap-1 text-sm text-gaming-green">
              <span className="w-2 h-2 rounded-full bg-gaming-green" />
              1,652 players online
            </div>
          </div>

          <LiveDrops />
          <HeroBanner />

          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Our Games</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
              {GAMES.map((game) => (
                <GameCard key={game.title} {...game} />
              ))}
            </div>
          </div>

          <RewardsBar />
        </main>
      </div>
    </div>
  );
};

export default Index;
