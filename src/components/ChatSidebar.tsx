import { Send, Globe, Info } from "lucide-react";
import { useState } from "react";

const MOCK_MESSAGES = [
  { user: "rain", badge: "🎖️", color: "text-gaming-red", msg: "I think might be hiding in some crate openings" },
  { user: "deep", badge: "I", color: "text-foreground", msg: "I've got 3 eggs max reward was 1.303" },
  { user: "Boxks", badge: "🎮", color: "text-foreground", msg: "refresh site and egg will move" },
  { user: "Ickie (>N<)", badge: "🎖️", color: "text-primary", msg: "yep" },
  { user: "azerbaijan tech employee", badge: "o", color: "text-gaming-green", msg: "zaniel" },
  { user: "Sebbo", badge: "💎", color: "text-gaming-red", msg: "could u not just inspect the site and search for egg in theory?" },
  { user: "John Beana", badge: "⭐", color: "text-foreground", msg: "🐦🐦🐦" },
  { user: "WIN", badge: "IV", color: "text-primary", msg: "😎" },
  { user: "DxD", badge: "o", color: "text-foreground", msg: "wow 0.05" },
  { user: "MrMcGoober", badge: "🎮", color: "text-foreground", msg: "wow" },
  { user: "Ickie (>N<)", badge: "🎖️", color: "text-primary", msg: "grats" },
  { user: "DxD", badge: "o", color: "text-foreground", msg: "gl pain maxwin" },
  { user: "kalmari", badge: "V", color: "text-primary", msg: "So you need to depo to get the eggs or can you get them f2p" },
];

const ChatSidebar = () => {
  const [message, setMessage] = useState("");

  return (
    <aside className="w-60 bg-sidebar border-r border-border flex flex-col h-full hidden lg:flex">
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {MOCK_MESSAGES.map((m, i) => (
          <div key={i} className="flex gap-2 text-sm">
            <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-[10px]">
              {m.badge}
            </div>
            <div className="min-w-0">
              <span className={`font-semibold ${m.color} text-xs`}>{m.user}: </span>
              <span className="text-secondary-foreground text-xs">{m.msg}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="bg-primary/10 border-b border-border px-3 py-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-primary font-bold">Rakeback Rain</span>
            <span className="text-muted-foreground">👥 242</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5">Join now to get free scrap based on your play amount</p>
          <button className="mt-1 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded">
            JOIN RAIN EVENT
          </button>
        </div>

        <div className="p-3">
          <div className="flex gap-2">
            <div className="flex items-center gap-1 bg-secondary rounded px-2 py-1.5 text-xs text-muted-foreground">
              <Globe className="w-3 h-3" />
              English
            </div>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-secondary text-xs text-foreground placeholder:text-muted-foreground rounded px-3 py-1.5 outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs font-bold hover:opacity-90 transition-opacity">
              SEND
            </button>
          </div>
          <div className="flex items-center gap-3 mt-2 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1 cursor-pointer hover:text-foreground"><Info className="w-3 h-3" /> Chat rules</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-foreground">🪙 Tip rain</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
