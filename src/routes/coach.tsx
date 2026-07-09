import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Brain, Compass, Sparkles, Send, Mic, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/coach")({ component: Coach });

const modes = [
  { id: "doubt", label: "Doubt Solving", icon: Brain, color: "cyan" },
  { id: "career", label: "Career Advice", icon: Compass, color: "indigo" },
  { id: "guidance", label: "Guidance", icon: Sparkles, color: "fuchsia" },
] as const;

type Msg = { from: "me" | "ai"; text: string; time: string };

function Coach() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("doubt");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "ai", text: "Hey! I'm your Vibe Coach. Ask me anything — doubts, career questions, or just say hi.", time: "now" },
  ]);
  const [input, setInput] = useState("");

  function send(text?: string) {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "me", text: t, time: "now" }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "ai", text: "Great question — I'd approach this by breaking it into 3 parts. (This is a placeholder response; connect the /coach endpoint to make me smart.)", time: "now" }]);
    }, 700);
  }

  const prompts = {
    doubt: ["Explain marginal costing", "How does GST input credit work?", "Difference between IFRS & Ind AS"],
    career: ["Should I do CA + CFA?", "How to break into product management?", "Freelancing while studying — how?"],
    guidance: ["I feel burnt out", "How to build a study streak?", "Motivate me for tomorrow's mock"],
  }[mode];

  return (
    <AppShell title="AI Coach">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">AI Study Coach</h1>
        <button onClick={() => setMessages([{ from: "ai", text: "New conversation started. What's up?", time: "now" }])}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white hover:bg-white/5">
          <Plus size={14} /> New chat
        </button>
      </div>

      {/* Mode selector */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        {modes.map((m) => {
          const active = m.id === mode;
          const Icon = m.icon;
          return (
            <button key={m.id} onClick={() => setMode(m.id)}
              className={`glass flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active ? "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-400/40" : "text-white/70 hover:bg-white/5"
              }`}>
              <Icon size={16} /> <span className="hidden sm:inline">{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Chat */}
      <div className="glass flex h-[62vh] flex-col rounded-2xl">
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                m.from === "me" ? "bg-cyan-400 text-slate-900" : "bg-white/5 text-white ring-1 ring-white/10"
              }`}>
                {m.text}
                <div className={`mt-1 text-[10px] ${m.from === "me" ? "text-slate-800/70" : "text-white/40"}`}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested prompts */}
        {messages.length <= 1 && (
          <div className="border-t border-white/10 p-3">
            <div className="mb-2 text-xs text-white/50">Try asking:</div>
            <div className="flex flex-wrap gap-2">
              {prompts.map((p) => (
                <button key={p} onClick={() => send(p)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex items-center gap-2 border-t border-white/10 p-3">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Ask in ${modes.find((m) => m.id === mode)?.label} mode…`}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60" />
          <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/70 hover:bg-white/5"><Mic size={16} /></button>
          <button type="submit" className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 text-slate-900 hover:bg-cyan-300"><Send size={16} /></button>
        </form>
      </div>
    </AppShell>
  );
}
