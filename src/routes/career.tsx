import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Sparkles, Share2, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/career")({ component: Career });

const roadmap = [
  { title: "Foundation Level", when: "Now", desc: "Cement fundamentals in Accounting, Law and Quant.", skills: ["Accounting", "Business Law", "Mathematics"], status: "current" as const },
  { title: "Intermediate", when: "Nov 2026", desc: "Deepen into advanced accounting and audit basics.", skills: ["Advanced Accounts", "Audit", "Costing"], status: "next" as const },
  { title: "Articleship", when: "2027", desc: "Real-world exposure at a CA firm.", skills: ["Client Work", "Tax Filing", "Compliance"], status: "later" as const },
  { title: "Final Level", when: "2029", desc: "Specialize and clear final exams.", skills: ["Financial Reporting", "Strategic Mgmt", "Direct Tax"], status: "later" as const },
  { title: "Chartered Accountant", when: "Goal", desc: "Practice, consult, or lead finance at scale.", skills: ["Leadership", "Advisory", "Strategy"], status: "goal" as const },
];

function Career() {
  const [regenerating, setRegenerating] = useState(false);
  function regen() { setRegenerating(true); setTimeout(() => setRegenerating(false), 1200); }
  return (
    <AppShell title="Career">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-white sm:text-[28px]">Career Roadmap</h1>
          <p className="mt-1 text-sm text-white/55">A personalized path from where you are today to your goal.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={regen} disabled={regenerating} className="btn-primary !py-1.5">
            <Sparkles size={14} /> {regenerating ? "Generating…" : "Edit"}
          </button>
          <button className="btn-ghost !py-1.5"><Share2 size={14} /> Share</button>
        </div>
      </div>

      <div className="surface rounded-lg p-6 sm:p-8">
        <ol className="relative space-y-6 border-l border-white/10 pl-6">
          {roadmap.map((r) => {
            const isCurrent = r.status === "current";
            const isGoal = r.status === "goal";
            return (
              <li key={r.title} className="relative">
                <span className={`absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full ring-4 ring-[oklch(0.145_0.008_260)] ${
                  isCurrent ? "bg-[oklch(0.64_0.16_255)] text-white"
                  : isGoal ? "border border-white/25 bg-[oklch(0.19_0.010_260)] text-white/70"
                  : "border border-white/15 bg-[oklch(0.19_0.010_260)] text-white/50"
                }`}>
                  {isCurrent ? <Check size={11} /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                </span>
                <div className={`rounded-md border p-5 transition ${isCurrent ? "border-[oklch(0.72_0.13_250)]/40 bg-white/[0.03]" : "border-white/8 bg-white/[0.015] hover:bg-white/[0.03]"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-white">{r.title}</h3>
                    <span className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${isCurrent ? "border border-[oklch(0.72_0.13_250)]/40 text-[oklch(0.78_0.12_250)]" : "border border-white/10 text-white/55"}`}>{r.when}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{r.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.skills.map((s) => (
                      <span key={s} className="rounded-md border border-white/8 bg-white/[0.02] px-2 py-0.5 text-[11px] text-white/60">{s}</span>
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
