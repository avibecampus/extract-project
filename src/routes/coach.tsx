import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Brain, Compass, Sparkles, Send, Mic, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/coach")({ component: Coach });

const modes = [
  { id: "doubt", label: "Doubt solving", icon: Brain },
  { id: "career", label: "Career advice", icon: Compass },
  { id: "guidance", label: "Guidance", icon: Sparkles },
] as const;

type Msg = { from: "me" | "ai"; text: string; time: string };

function Coach() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("doubt");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "ai", text: "I'm your coach at A Vibe Campus. Ask a doubt, get career direction, or just tell me what's on your mind.", time: "now" },
  ]);
  const [input, setInput] = useState("");

  function send(text?: string) {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "me", text: t, time: "now" }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "ai", text: "Great question — I'd approach this in three parts. (Placeholder response — connect the /coach endpoint to make me answer for real.)", time: "now" }]);
    }, 700);
  }

  const prompts = {
    doubt: ["Explain marginal costing", "How does GST input credit work?", "Difference between IFRS & Ind AS"],
    career: ["Should I pair CA with CFA?", "How do I break into product management?", "How to freelance while studying?"],
    guidance: ["I feel burnt out", "How do I build a study streak?", "Motivate me for tomorrow's mock"],
  }[mode];

  return (
    <AppShell title="AI Coach">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-white sm:text-[28px]">AI Study Coach</h1>
          <p className="mt-1 text-sm text-white/55">Get help with doubts, career direction and daily motivation.</p>
        </div>
        <button onClick={() => setMessages([{ from: "ai", text: "New conversation started. What's up?", time: "now" }])}
          className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:border-white/20 hover:text-white">
          <Plus size={13} /> New chat
        </button>
      </div>

      <div className="mb-4 inline-flex rounded-lg border border-white/8 bg-white/[0.02] p-0.5">
        {modes.map((m) => {
          const active = m.id === mode;
          const Icon = m.icon;
          return (
            <button key={m.id} onClick={() => setMode(m.id)}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                active ? "bg-white/[0.06] text-white" : "text-white/55 hover:text-white/80"
              }`}>
              <Icon size={13} /> <span className="hidden sm:inline">{m.label}</span>
            </button>
          );
        })}
      </div>

      <div className="surface flex h-[68vh] flex-col rounded-lg">
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                m.from === "me"
                  ? "bg-[oklch(0.64_0.16_255)] text-white"
                  : "border border-white/8 bg-white/[0.02] text-white/90"
              }`}>
                {m.text}
                <div className={`mt-1 text-[10px] ${m.from === "me" ? "text-white/70" : "text-white/40"}`}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        {messages.length <= 1 && (
          <div className="border-t border-white/8 p-3">
            <div className="mb-2 text-[11px] uppercase tracking-wider text-white/40">Try asking</div>
            <div className="flex flex-wrap gap-2">
              {prompts.map((p) => (
                <button key={p} onClick={() => send(p)} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/75 hover:border-white/20 hover:text-white">
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex items-center gap-2 border-t border-white/8 p-3">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Message your coach…"
            className="flex-1 rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]" />
          <button type="button" aria-label="Voice" className="grid h-9 w-9 place-items-center rounded-md border border-white/8 text-white/60 hover:border-white/20 hover:text-white"><Mic size={14} /></button>
          <button type="submit" aria-label="Send" className="grid h-9 w-9 place-items-center rounded-md bg-[oklch(0.64_0.16_255)] text-white hover:bg-[oklch(0.70_0.16_255)]"><Send size={14} /></button>
        </form>
      </div>
    </AppShell>
  );
}
