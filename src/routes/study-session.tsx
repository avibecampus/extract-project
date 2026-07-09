import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Play, Pause, Square, Plus, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
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

  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startBlank = first.getDay();
  const cells = [...Array(startBlank).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  const monthName = first.toLocaleString("en", { month: "long" });

  function iso(d: number) { return new Date(year, month, d).toISOString().slice(0, 10); }
  function hasTopic(d: number) { return topics.some((t) => t.date === iso(d)); }

  const todaysTopics = topics.filter((t) => t.date === selected);

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
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white sm:text-[28px]">Study Session</h1>
        <p className="mt-1 text-sm text-white/55">{today.toDateString()}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="surface rounded-lg p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <button aria-label="Previous month" onClick={() => { const m = month - 1; if (m < 0) { setMonth(11); setYear(year - 1); } else setMonth(m); }} className="rounded-md border border-white/10 p-1.5 text-white/70 hover:border-white/20 hover:text-white"><ChevronLeft size={14} /></button>
            <div className="text-sm font-medium text-white">{monthName} {year}</div>
            <button aria-label="Next month" onClick={() => { const m = month + 1; if (m > 11) { setMonth(0); setYear(year + 1); } else setMonth(m); }} className="rounded-md border border-white/10 p-1.5 text-white/70 hover:border-white/20 hover:text-white"><ChevronRight size={14} /></button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-wider text-white/35">
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
                  className={`aspect-square rounded-md text-xs font-medium transition ${
                    isSel ? "bg-[oklch(0.64_0.16_255)] text-white"
                    : has ? "border border-[oklch(0.72_0.13_250)]/40 text-white hover:bg-white/[0.04]"
                    : isToday ? "border border-white/15 text-white"
                    : "text-white/60 hover:bg-white/[0.04]"
                  }`}>
                  {d}
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-white/50">
            <Legend color="bg-[oklch(0.64_0.16_255)]" label="Selected" />
            <Legend color="bg-[oklch(0.72_0.13_250)]/40" label="Scheduled" />
            <Legend color="bg-white/20" label="Today" />
          </div>
        </div>

        <div className="surface-strong flex flex-col rounded-lg p-6 text-center">
          <div className="text-[11px] uppercase tracking-widest text-white/40">Focus timer</div>
          <div className="my-4 font-mono text-4xl font-semibold text-white tabular-nums sm:text-5xl">{mmss}</div>
          {activeTopic ? (
            <div className="mb-4">
              <div className="text-sm font-medium text-white">{activeTopic.name}</div>
              <span className="mt-1 inline-block rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/60">{activeTopic.subject}</span>
            </div>
          ) : <div className="mb-4 text-[11px] text-white/40">No topic selected</div>}
          <div className="mt-auto flex justify-center gap-2">
            <button aria-label="Start" onClick={() => setRunning(true)} className="grid h-10 w-10 place-items-center rounded-md bg-[oklch(0.64_0.16_255)] text-white hover:bg-[oklch(0.70_0.16_255)]"><Play size={16} /></button>
            <button aria-label="Pause" onClick={() => setRunning(false)} className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white hover:border-white/20"><Pause size={16} /></button>
            <button aria-label="Reset" onClick={() => { setRunning(false); setSeconds(0); }} className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white hover:border-white/20"><Square size={16} /></button>
          </div>
          {seconds > 0 && (
            <button onClick={() => { setRunning(false); setSeconds(0); setActiveTopic(null); }} className="mt-3 inline-flex items-center justify-center gap-1 rounded-md border border-[oklch(0.74_0.14_155)]/40 px-3 py-2 text-[11px] font-medium text-[oklch(0.82_0.13_155)]">
              <CheckCircle2 size={13} /> Log as complete
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <form onSubmit={addTopic} className="surface rounded-lg p-5">
          <h3 className="mb-4 text-sm font-semibold text-white">Add topic for {selected}</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input label="Topic" value={f.name} onChange={(v) => setF({ ...f, name: v })} />
            <SelectField label="Subject" value={f.subject} onChange={(v) => setF({ ...f, subject: v })}
              options={["General","Taxation","Cost","FR","Audit","Law","Math","Physics"]} />
            <Input label="Date" type="date" value={f.date} onChange={(v) => setF({ ...f, date: v })} />
            <Input label="Duration (h)" type="number" value={String(f.hours)} onChange={(v) => setF({ ...f, hours: Number(v) })} />
            <Input label="Reminder" type="time" value={f.reminder} onChange={(v) => setF({ ...f, reminder: v })} />
            <Input label="Notes" value={f.notes} onChange={(v) => setF({ ...f, notes: v })} />
          </div>
          <button type="submit" className="btn-primary mt-4"><Plus size={14} /> Save topic</button>
        </form>

        <div className="surface rounded-lg p-5">
          <h3 className="mb-3 text-sm font-semibold text-white">Schedule · {selected}</h3>
          {todaysTopics.length === 0 && <div className="rounded-md border border-dashed border-white/10 p-6 text-center text-sm text-white/45">Nothing scheduled. Add a topic to begin.</div>}
          <div className="space-y-2">
            {todaysTopics.map((t) => (
              <div key={t.id} className="flex items-center justify-between rounded-md border border-white/8 bg-white/[0.02] p-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white">{t.name}</div>
                  <div className="mt-0.5 text-[11px] text-white/50">{t.subject} · {t.hours}h · {t.reminder}</div>
                </div>
                <button onClick={() => { setActiveTopic(t); setSeconds(0); setRunning(true); }} className="rounded-md border border-white/10 px-3 py-1.5 text-[11px] font-medium text-white hover:border-white/20">
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
  return <div className="flex items-center gap-1.5"><span className={`h-2 w-2 rounded-full ${color}`} />{label}</div>;
}
function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] uppercase tracking-wider text-white/45">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]" />
    </label>
  );
}
function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] uppercase tracking-wider text-white/45">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
