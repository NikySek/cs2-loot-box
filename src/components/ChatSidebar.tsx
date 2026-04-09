import { Send, Globe } from "lucide-react";
import { useState } from "react";

const MOCK_MESSAGES = [
  { user: "SkinMaster", color: "text-gaming-green", msg: "just won a karambit!!" },
  { user: "CrateKing", color: "text-primary", msg: "gg nice one" },
  { user: "NoScope420", color: "text-gaming-red", msg: "lol i lost everything" },
  { user: "AWP_Legend", color: "text-primary", msg: "who wants to battle?" },
  { user: "FlashBang", color: "text-gaming-green", msg: "im on a winning streak" },
  { user: "HeadshotHero", color: "text-foreground", msg: "coinflip anyone?" },
  { user: "SkinMaster", color: "text-gaming-green", msg: "lets gooo" },
  { user: "RushB", color: "text-primary", msg: "just deposited $50" },
  { user: "CrateKing", color: "text-primary", msg: "wheel is rigged jk" },
  { user: "NoScope420", color: "text-gaming-red", msg: "one more try..." },
  { user: "Defuser", color: "text-foreground", msg: "won 3 in a row" },
  { user: "FlashBang", color: "text-gaming-green", msg: "nice pull bro" },
];

const ChatSidebar = () => {
  const [message, setMessage] = useState("");

  return (
    <aside className="w-72 bg-sidebar border-r border-border flex flex-col h-full hidden lg:flex">
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {MOCK_MESSAGES.map((m, i) => (
          <div key={i} className="text-sm">
            <span className={`font-semibold ${m.color}`}>{m.user}: </span>
            <span className="text-secondary-foreground">{m.msg}</span>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-border">
        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-secondary text-sm text-foreground placeholder:text-muted-foreground rounded px-3 py-2 outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="bg-primary text-primary-foreground p-2 rounded hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
          <Globe className="w-3 h-3" />
          <span>English</span>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
