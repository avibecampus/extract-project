import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Flame, Trophy, Clock, Target, CalendarClock, ClipboardCheck, Compass, MessageSquare, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

const activity = [
  { title: "Taxation — Ch. 4 practice", time: "2h ago", tag: "Study" },
  { title: "Mock Test: Financial Reporting", time: "Yesterday", tag: "Test", score: "82%" },
  { title: "Cost Accounting — Marginal Costing", time: "2d ago", tag: "Study" },
];

const leaders = [
  { name: "Aarav S.", score: 2840 },
  { name: "Diya M.", score: 2695 },
  { name: "Kabir R.", score: 2510 },
  { name: "Ishaan P.", score: 2380 },
];

const quick = [
  { to: "/study-session", label: "Study Session", icon: CalendarClock, color: "from-cyan-400/20 to-cyan-400/5" },
  { to: "/tests", label: "Practice Tests", icon: ClipboardCheck, color: "from-indigo-400/20 to-indigo-400/5" },
  { to: "/career", label: "Career Map", icon: Compass, color: "from-emerald-400/20 to-emerald-400/5" },
  { to: "/coach", label: "AI Coach", icon: MessageSquare, color: "from-fuchsia-400/20 to-fuchsia-400/5" },
] as const;

function Dashboard() {
  return (
    <AppShell title="Dashboard">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Hey, Student 👋</h1>
        <p className="mt-1 text-sm text-white/60">Here's your growth at a glance.</p>
      </div>

      {/* Top row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Flame} accent="text-orange-300 bg-orange-400/15" label="Current Streak" value="12 days" sub="Keep it hot 🔥" />
        <StatCard icon={Trophy} accent="text-cyan-300 bg-cyan-400/15" label="Points" value="1,240" sub="+80 this week" progress={62} />
        <StatCard icon={Clock} accent="text-indigo-300 bg-indigo-400/15" label="Study Time" value="18h" sub="This week" />
        <StatCard icon={Target} accent="text-emerald-300 bg-emerald-400/15" label="Avg Test Score" value="78%" sub="Last 5 tests" />
      </div>

      {/* Middle: quick access + leaders */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-3 text-sm font-semibold text-white/80">Quick access</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {quick.map((q) => (
              <Link key={q.to} to={q.to} className={`glass group rounded-2xl bg-gradient-to-br ${q.color} p-4 transition hover:-translate-y-0.5`}>
                <q.icon className="text-white" size={20} />
                <div className="mt-6 text-sm font-medium text-white">{q.label}</div>
                <ArrowUpRight size={14} className="mt-1 text-white/40 group-hover:text-cyan-300" />
              </Link>
            ))}
          </div>

          <h2 className="mt-6 mb-3 text-sm font-semibold text-white/80">Recent activity</h2>
          <div className="glass divide-y divide-white/5 rounded-2xl">
            {activity.map((a, i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white">{a.title}</div>
                  <div className="text-xs text-white/50">{a.time}</div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {a.score && <span className="rounded-md bg-emerald-400/15 px-2 py-0.5 text-xs font-semibold text-emerald-300">{a.score}</span>}
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/60">{a.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-white/80">Leaders of the Board</h2>
          <div className="glass rounded-2xl p-4">
            <div className="mb-3 text-xs text-white/50">Premium preview · placeholder data</div>
            <ol className="space-y-2">
              {leaders.map((l, i) => (
                <li key={l.name} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${i === 0 ? "bg-amber-300 text-slate-900" : i === 1 ? "bg-slate-300 text-slate-900" : i === 2 ? "bg-orange-400 text-slate-900" : "bg-white/10 text-white/70"}`}>{i + 1}</span>
                    <span className="text-sm text-white">{l.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-cyan-300">{l.score.toLocaleString()}</span>
                </li>
              ))}
            </ol>
            <Link to="/premium" className="mt-3 block rounded-xl border border-cyan-400/30 py-2 text-center text-xs font-semibold text-cyan-200 hover:bg-cyan-400/10">
              Unlock full leaderboard →
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ icon: Icon, label, value, sub, accent, progress }: any) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className={`grid h-10 w-10 place-items-center rounded-xl ${accent}`}><Icon size={18} /></div>
      <div className="mt-4 text-xs text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/50">{sub}</div>
      {progress != null && (
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}
