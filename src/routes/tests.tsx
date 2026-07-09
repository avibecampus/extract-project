import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Timer, ArrowRight, ArrowLeft, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/tests")({ component: Tests });

const testsList = [
  { id: "t1", name: "Financial Reporting — Mock 1", subject: "FR", questions: 30, best: 82, difficulty: "Medium" },
  { id: "t2", name: "Taxation — Direct Tax", subject: "Tax", questions: 25, best: 68, difficulty: "Hard" },
  { id: "t3", name: "Cost Accounting", subject: "Cost", questions: 20, best: 90, difficulty: "Easy" },
  { id: "t4", name: "Audit Essentials", subject: "Audit", questions: 30, best: null, difficulty: "Medium" },
];

const sampleQs = Array.from({ length: 5 }, (_, i) => ({
  q: `Sample question ${i + 1}: Which statement is true?`,
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: i % 4,
}));

function Tests() {
  const [stage, setStage] = useState<"list" | "test" | "result">("list");
  const [subject, setSubject] = useState("All");
  const [diff, setDiff] = useState("All");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (stage !== "test") return;
    const t = setInterval(() => setTime((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [stage]);

  const filtered = testsList.filter((t) => (subject === "All" || t.subject === subject) && (diff === "All" || t.difficulty === diff));
  const score = answers.reduce((acc, a, i) => acc + (a === sampleQs[i]?.correct ? 1 : 0), 0);
  const pct = Math.round((score / sampleQs.length) * 100);

  function start() { setStage("test"); setIdx(0); setAnswers([]); setTime(0); }

  return (
    <AppShell title="Practice Tests">
      {stage === "list" && (
        <>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Practice Tests</h1>
              <p className="text-sm text-white/60">GFYTE-powered mocks with instant analytics.</p>
            </div>
            <div className="flex gap-2">
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white">
                {["All","FR","Tax","Cost","Audit"].map((s) => <option key={s}>{s}</option>)}
              </select>
              <select value={diff} onChange={(e) => setDiff(e.target.value)} className="rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white">
                {["All","Easy","Medium","Hard"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <div key={t.id} className="glass rounded-2xl p-5">
                <div className="flex items-start justify-between">
                  <span className="rounded-md bg-indigo-400/20 px-2 py-0.5 text-xs text-indigo-200">{t.subject}</span>
                  <span className={`rounded-md px-2 py-0.5 text-xs ${
                    t.difficulty === "Easy" ? "bg-emerald-400/15 text-emerald-300" :
                    t.difficulty === "Medium" ? "bg-cyan-400/15 text-cyan-200" :
                    "bg-rose-400/15 text-rose-300"}`}>{t.difficulty}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-white">{t.name}</h3>
                <div className="mt-2 text-xs text-white/60">{t.questions} questions · Best: {t.best ? `${t.best}%` : "—"}</div>
                <button onClick={start} className="mt-4 w-full rounded-xl bg-cyan-400 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">Start Test</button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-white/40">Powered by Good for You Test Engine</div>
        </>
      )}

      {stage === "test" && (
        <div className="glass-strong mx-auto max-w-3xl rounded-2xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-white/70">Question {idx + 1} of {sampleQs.length}</div>
            <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs text-white/70">
              <Timer size={14} /> {Math.floor(time/60)}:{String(time%60).padStart(2,"0")}
            </div>
          </div>
          <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-cyan-400" style={{ width: `${((idx+1)/sampleQs.length)*100}%` }} />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-white">{sampleQs[idx].q}</h2>
          <div className="mt-4 grid gap-2">
            {sampleQs[idx].options.map((o, i) => {
              const chosen = answers[idx] === i;
              return (
                <button key={i} onClick={() => { const next = [...answers]; next[idx] = i; setAnswers(next); }}
                  className={`rounded-xl border p-3 text-left text-sm transition ${chosen ? "border-cyan-400/60 bg-cyan-400/10 text-white" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"}`}>
                  {o}
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex justify-between">
            <button disabled={idx === 0} onClick={() => setIdx(idx - 1)} className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-sm text-white disabled:opacity-40">
              <ArrowLeft size={14} /> Prev
            </button>
            {idx < sampleQs.length - 1 ? (
              <button onClick={() => setIdx(idx + 1)} className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900">
                Next <ArrowRight size={14} />
              </button>
            ) : (
              <button onClick={() => setStage("result")} className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900">
                Submit
              </button>
            )}
          </div>
        </div>
      )}

      {stage === "result" && (
        <div className="glass-strong mx-auto max-w-2xl rounded-2xl p-8 text-center">
          <div className="text-xs uppercase tracking-widest text-white/50">Your score</div>
          <div className="my-4 text-6xl font-extrabold text-white">{pct}%</div>
          <div className="text-sm text-white/60">Time taken · {Math.floor(time/60)}:{String(time%60).padStart(2,"0")}</div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Metric label="Correct" value={String(score)} tone="emerald" />
            <Metric label="Wrong" value={String(sampleQs.length - score)} tone="rose" />
            <Metric label="Total" value={String(sampleQs.length)} tone="cyan" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button onClick={start} className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900">
              <RefreshCw size={14} /> Retake
            </button>
            <button onClick={() => setStage("list")} className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5">Back to Tests</button>
          </div>
        </div>
      )}
    </AppShell>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone: "emerald" | "rose" | "cyan" }) {
  const map = { emerald: "text-emerald-300 bg-emerald-400/10", rose: "text-rose-300 bg-rose-400/10", cyan: "text-cyan-200 bg-cyan-400/10" };
  return <div className={`rounded-xl p-4 ${map[tone]}`}><div className="text-2xl font-bold">{value}</div><div className="text-xs opacity-80">{label}</div></div>;
}
