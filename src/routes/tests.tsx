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
              <h1 className="text-2xl font-semibold text-white sm:text-[28px]">Practice Tests</h1>
              <p className="mt-1 text-sm text-white/55">Mock exams with instant analytics.</p>
            </div>
            <div className="flex gap-2">
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="rounded-md border border-white/10 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white/80 outline-none focus:border-[oklch(0.72_0.13_250)]">
                {["All","FR","Tax","Cost","Audit"].map((s) => <option key={s}>{s}</option>)}
              </select>
              <select value={diff} onChange={(e) => setDiff(e.target.value)} className="rounded-md border border-white/10 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white/80 outline-none focus:border-[oklch(0.72_0.13_250)]">
                {["All","Easy","Medium","Hard"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <div key={t.id} className="surface rounded-lg p-5 transition hover:border-white/20">
                <div className="flex items-start justify-between">
                  <span className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/60">{t.subject}</span>
                  <span className={`rounded-md px-2 py-0.5 text-[11px] ${
                    t.difficulty === "Easy" ? "border border-[oklch(0.74_0.14_155)]/30 text-[oklch(0.82_0.13_155)]" :
                    t.difficulty === "Medium" ? "border border-white/10 text-white/60" :
                    "border border-[oklch(0.66_0.20_25)]/40 text-[oklch(0.78_0.16_25)]"}`}>{t.difficulty}</span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-white">{t.name}</h3>
                <div className="mt-1.5 text-[11px] text-white/45">{t.questions} questions · Best {t.best ? `${t.best}%` : "—"}</div>
                <button onClick={start} className="btn-primary mt-5 w-full">Start Test</button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[11px] text-white/35">Powered by Good for You Test Engine</div>
        </>
      )}

      {stage === "test" && (
        <div className="surface-strong mx-auto max-w-3xl rounded-lg p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-white/70">Question {idx + 1} of {sampleQs.length}</div>
            <div className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 text-[11px] text-white/60">
              <Timer size={12} /> {Math.floor(time/60)}:{String(time%60).padStart(2,"0")}
            </div>
          </div>
          <div className="mb-6 h-1 overflow-hidden rounded-full bg-white/8">
            <div className="h-full bg-[oklch(0.64_0.16_255)] transition-all" style={{ width: `${((idx+1)/sampleQs.length)*100}%` }} />
          </div>
          <h2 className="text-lg font-semibold text-white">{sampleQs[idx].q}</h2>
          <div className="mt-5 grid gap-2">
            {sampleQs[idx].options.map((o, i) => {
              const chosen = answers[idx] === i;
              return (
                <button key={i} onClick={() => { const next = [...answers]; next[idx] = i; setAnswers(next); }}
                  className={`rounded-md border p-3 text-left text-sm transition ${chosen ? "border-[oklch(0.72_0.13_250)] bg-white/[0.04] text-white" : "border-white/8 bg-white/[0.02] text-white/75 hover:border-white/20"}`}>
                  {o}
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex justify-between">
            <button disabled={idx === 0} onClick={() => setIdx(idx - 1)} className="btn-ghost !py-2 disabled:opacity-40">
              <ArrowLeft size={14} /> Prev
            </button>
            {idx < sampleQs.length - 1 ? (
              <button onClick={() => setIdx(idx + 1)} className="btn-primary !py-2">Next <ArrowRight size={14} /></button>
            ) : (
              <button onClick={() => setStage("result")} className="btn-primary !py-2">Submit</button>
            )}
          </div>
        </div>
      )}

      {stage === "result" && (
        <div className="surface-strong mx-auto max-w-2xl rounded-lg p-8 text-center">
          <div className="text-[11px] uppercase tracking-widest text-white/40">Your score</div>
          <div className="my-4 text-6xl font-semibold text-white">{pct}%</div>
          <div className="text-sm text-white/55">Time · {Math.floor(time/60)}:{String(time%60).padStart(2,"0")}</div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Metric label="Correct" value={String(score)} />
            <Metric label="Wrong" value={String(sampleQs.length - score)} />
            <Metric label="Total" value={String(sampleQs.length)} />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button onClick={start} className="btn-primary"><RefreshCw size={14} /> Retake</button>
            <button onClick={() => setStage("list")} className="btn-ghost">Back to tests</button>
          </div>
        </div>
      )}
    </AppShell>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/8 bg-white/[0.02] p-4">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-[11px] text-white/50">{label}</div>
    </div>
  );
}
