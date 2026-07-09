import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Play, Pause, Square, Plus, CheckCircle2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export const Route = createFileRoute("/study-session")({ component: StudySession });

type Topic = { id: string; name: string; subject: string; date: string; hours: number; reminder: string; notes: string };

function StudySession() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selected, setSelected] = useState(today.toISOString().slice(0, 10));
  const [topics, setTopics] = useState<Topic[]>([
    { id: "1", name: "Taxation Ch.4", subject: "Taxation", date: today.toISOString().slice(0, 10), hours: 2, reminder: "18:00", notes: "" },
    { id: "2", name: "Marginal Costing", subject: "Cost", date: today.toISOString().slice(0, 10), hours: 1.5, reminder: "20:00", notes: "" },
  ]);

  // Timer
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const tick = useRef<number | null>(null);

  useEffect(() => {
    if (running) tick.current = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => { if (tick.current) window.clearInterval(tick.current); };
  }, [running]);

  const mmss = useMemo(() => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }, [seconds]);

  // Calendar grid
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startBlank = first.getDay();
  const cells = [...Array(startBlank).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  const monthName = first.toLocaleString("en", { month: "long" });

  function iso(d: number) { return new Date(year, month, d).toISOString().slice(0, 10); }
  function hasTopic(d: number) { return topics.some((t) => t.date === iso(d)); }

  const todaysTopics = topics.filter((t) => t.date === selected);

  // Form
  const [f, setF] = useState({ name: "", subject: "General", date: selected, hours: 1, reminder: "18:00", notes: "" });
  useEffect(() => setF((v) => ({ ...v, date: selected })), [selected]);

  function addTopic(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name) return;
    setTopics((t) => [...t, { ...f, id: crypto.randomUUID() }]);
    setF({ name: "", subject: "General", date: selected, hours: 1, reminder: "18:00", notes: "" });
  }

  return (
    <AppShell title="Study Session">
      <div className="mb-6 flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Study Session</h1>
          <p className="text-sm text-white/60">{today.toDateString()}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Calendar */}
        <div className="glass rounded-2xl p-4 lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <button onClick={() => { const m = month - 1; if (m < 0) { setMonth(11); setYear(year - 1); } else setMonth(m); }} className="rounded-lg border border-white/10 px-2 py-1 text-xs text-white/70">←</button>
            <div className="text-sm font-semibold text-white">{monthName} {year}</div>
            <button onClick={() => { const m = month + 1; if (m > 11) { setMonth(0); setYear(year + 1); } else setMonth(m); }} className="rounded-lg border border-white/10 px-2 py-1 text-xs text-white/70">→</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/40">
            {["S","M","T","W","T","F","S"].map((d, i) => <div key={i} className="py-1">{d}</div>)}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              if (!d) return <div key={i} />;
              const dstr = iso(d);
              const isSel = dstr === selected;
              const has = hasTopic(d);
              const isToday = dstr === today.toISOString().slice(0, 10);
              return (
                <button key={i} onClick={() => setSelected(dstr)}
                  className={`aspect-square rounded-xl text-xs font-medium transition ${
                    isSel ? "bg-cyan-400 text-slate-900"
                    : has ? "bg-indigo-500/25 text-white ring-1 ring-indigo-400/40"
                    : isToday ? "bg-white/10 text-white ring-1 ring-white/20"
                    : "text-white/70 hover:bg-white/5"
                  }`}>
                  {d}
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/50">
            <Legend color="bg-cyan-400" label="Selected" />
            <Legend color="bg-indigo-500/50" label="Scheduled" />
            <Legend color="bg-white/15" label="Today" />
          </div>
        </div>

        {/* Timer */}
        <div className="glass-strong flex flex-col rounded-2xl p-6 text-center">
          <div className="text-xs uppercase tracking-widest text-white/50">Focus timer</div>
          <div className="my-4 font-mono text-5xl font-bold text-white tabular-nums">{mmss}</div>
          {activeTopic && (
            <div className="mb-4">
              <div className="text-sm font-medium text-white">{activeTopic.name}</div>
              <span className="mt-1 inline-block rounded-md bg-cyan-400/15 px-2 py-0.5 text-xs text-cyan-200">{activeTopic.subject}</span>
            </div>
          )}
          <div className="mt-auto flex justify-center gap-2">
            <button onClick={() => setRunning(true)} className="grid h-11 w-11 place-items-center rounded-full bg-cyan-400 text-slate-900 hover:bg-cyan-300"><Play size={18} /></button>
            <button onClick={() => setRunning(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white hover:bg-white/5"><Pause size={18} /></button>
            <button onClick={() => { setRunning(false); setSeconds(0); }} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white hover:bg-white/5"><Square size={18} /></button>
          </div>
          {seconds > 0 && (
            <button onClick={() => { setRunning(false); setSeconds(0); setActiveTopic(null); }} className="mt-3 inline-flex items-center justify-center gap-1 rounded-lg bg-emerald-400/20 px-3 py-2 text-xs font-semibold text-emerald-200">
              <CheckCircle2 size={14} /> Log as complete
            </button>
          )}
        </div>
      </div>

      {/* Add topic + today's schedule */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <form onSubmit={addTopic} className="glass rounded-2xl p-5">
          <h3 className="mb-4 text-sm font-semibold text-white">Add topic for {selected}</h3>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Topic" value={f.name} onChange={(v) => setF({ ...f, name: v })} />
            <SelectField label="Subject" value={f.subject} onChange={(v) => setF({ ...f, subject: v })}
              options={["General","Taxation","Cost","FR","Audit","Law","Math","Physics"]} />
            <Input label="Date" type="date" value={f.date} onChange={(v) => setF({ ...f, date: v })} />
            <Input label="Duration (h)" type="number" value={String(f.hours)} onChange={(v) => setF({ ...f, hours: Number(v) })} />
            <Input label="Reminder" type="time" value={f.reminder} onChange={(v) => setF({ ...f, reminder: v })} />
            <Input label="Notes" value={f.notes} onChange={(v) => setF({ ...f, notes: v })} />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
            <Plus size={16} /> Save topic
          </button>
        </form>

        <div className="glass rounded-2xl p-5">
          <h3 className="mb-3 text-sm font-semibold text-white">Schedule · {selected}</h3>
          {todaysTopics.length === 0 && <div className="rounded-xl border border-dashed border-white/10 p-6 text-center text-sm text-white/50">Nothing scheduled. Add a topic to begin.</div>}
          <div className="space-y-2">
            {todaysTopics.map((t) => (
              <div key={t.id} className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.subject} · {t.hours}h · ⏰ {t.reminder}</div>
                </div>
                <button onClick={() => { setActiveTopic(t); setSeconds(0); setRunning(true); }} className="rounded-lg bg-cyan-400/20 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-400/30">
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return <div className="flex items-center gap-1.5"><span className={`h-2.5 w-2.5 rounded-full ${color}`} />{label}</div>;
}
function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-white/60">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60" />
    </label>
  );
}
function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-white/60">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
