import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";

const commands = [
  { to: "/dashboard", label: "Go to Dashboard", hint: "Overview" },
  { to: "/study-session", label: "Start a Study Session", hint: "Focus" },
  { to: "/tests", label: "Practice Tests", hint: "GFYTE" },
  { to: "/coach", label: "Ask the AI Coach", hint: "Chat" },
  { to: "/career", label: "View Career Roadmap", hint: "Path" },
  { to: "/growth", label: "Growth Library", hint: "Learn" },
  { to: "/premium", label: "Premium features", hint: "Upgrade" },
  { to: "/profile", label: "Profile & Settings", hint: "Account" },
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-950/70 p-4 pt-24 backdrop-blur-sm animate-tilt-in"
      onClick={() => setOpen(false)}>
      <div className="glass-strong w-full max-w-lg overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <Search size={16} className="text-white/50" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a command or search…"
            className="flex-1 bg-transparent text-sm text-white placeholder-white/40 outline-none" />
          <kbd className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60">ESC</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.map((c) => (
            <li key={c.to}>
              <button onClick={() => { setOpen(false); nav({ to: c.to }); }}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-white/85 hover:bg-white/10">
                <span>{c.label}</span>
                <span className="text-[11px] text-white/40">{c.hint}</span>
              </button>
            </li>
          ))}
          {filtered.length === 0 && <li className="px-3 py-4 text-center text-xs text-white/40">No matches</li>}
        </ul>
      </div>
    </div>
  );
}
