import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Sparkles, Share2, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/career")({ component: Career });

const roadmap = [
  { title: "Foundation Level", when: "Now", desc: "Cement fundamentals in Accounting, Law and Quant.", skills: ["Accounting", "Business Law", "Mathematics"] },
  { title: "Intermediate", when: "Nov 2026", desc: "Deepen into advanced accounting and audit basics.", skills: ["Advanced Accounts", "Audit", "Costing"] },
  { title: "Articleship", when: "2027", desc: "Real-world exposure at a CA firm.", skills: ["Client Work", "Tax Filing", "Compliance"] },
  { title: "Final Level", when: "2029", desc: "Specialize and clear final exams.", skills: ["Financial Reporting", "Strategic Mgmt", "Direct Tax"] },
  { title: "Chartered Accountant", when: "Dream role", desc: "Practice, consult, or lead finance at scale.", skills: ["Leadership", "Advisory", "Strategy"] },
];

function Career() {
  const [regenerating, setRegenerating] = useState(false);
  function regen() { setRegenerating(true); setTimeout(() => setRegenerating(false), 1500); }
  return (
    <AppShell title="Career">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Your Career Roadmap</h1>
          <p className="text-sm text-white/60">A personalized path from where you are today to your dream role.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={regen} disabled={regenerating} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300 disabled:opacity-60">
            <Sparkles size={16} /> {regenerating ? "Generating…" : "Edit Roadmap"}
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <ol className="relative space-y-6 border-l border-white/10 pl-6">
          {roadmap.map((r, i) => {
            const current = i === 0;
            const dream = i === roadmap.length - 1;
            return (
              <li key={r.title} className="relative">
                <span className={`absolute -left-[33px] grid h-6 w-6 place-items-center rounded-full ring-4 ring-slate-950 ${
                  current ? "bg-cyan-400 text-slate-900" : dream ? "bg-gradient-to-br from-fuchsia-400 to-indigo-500 text-white" : "bg-white/10 text-white/70"
                }`}>
                  <MapPin size={12} />
                </span>
                <div className={`glass rounded-2xl p-5 transition hover:bg-white/10 ${current ? "ring-1 ring-cyan-400/40" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-white">{r.title}</h3>
                    <span className={`rounded-md px-2 py-0.5 text-xs ${current ? "bg-cyan-400/20 text-cyan-200" : "bg-white/5 text-white/60"}`}>{r.when}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{r.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.skills.map((s) => (
                      <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/70">{s}</span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </AppShell>
  );
}
