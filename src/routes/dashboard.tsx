import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Flame, Trophy, Clock, Target, CalendarClock, ClipboardCheck, Compass, MessageSquare, ArrowUpRight, TrendingUp } from "lucide-react";

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
  { to: "/study-session", label: "Study Session", desc: "Plan & focus", icon: CalendarClock },
  { to: "/tests", label: "Practice Tests", desc: "Take a mock", icon: ClipboardCheck },
  { to: "/career", label: "Career Map", desc: "Your path", icon: Compass },
  { to: "/coach", label: "AI Coach", desc: "Ask anything", icon: MessageSquare },
] as const;

function Dashboard() {
  return (
    <AppShell title="Dashboard">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white sm:text-[28px]">Good to see you back</h1>
        <p className="mt-1 text-sm text-white/55">Here's your growth at a glance.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={Flame} label="Current streak" value="12" unit="days" sub="Personal best" />
        <StatCard icon={Trophy} label="Points" value="1,240" sub="+80 this week" trend />
        <StatCard icon={Clock} label="Study time" value="18" unit="h" sub="This week" />
        <StatCard icon={Target} label="Avg test score" value="78" unit="%" sub="Last 5 tests" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">Quick access</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quick.map((q) => (
                <Link key={q.to} to={q.to} className="group surface rounded-lg p-4 transition hover:border-white/20 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <q.icon className="text-white/70" size={16} strokeWidth={1.75} />
                    <ArrowUpRight size={13} className="text-white/25 transition group-hover:text-white/70" />
                  </div>
                  <div className="mt-6 text-[13px] font-medium text-white">{q.label}</div>
                  <div className="text-[11px] text-white/45">{q.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">Recent activity</h2>
              <button className="text-[11px] text-white/50 hover:text-white">View all</button>
            </div>
            <div className="surface divide-y divide-white/6 rounded-lg">
              {activity.map((a, i) => (
                <div key={i} className="flex items-center justify-between p-4">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-white">{a.title}</div>
                    <div className="mt-0.5 text-[11px] text-white/45">{a.time}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {a.score && <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-[oklch(0.78_0.12_250)]">{a.score}</span>}
                    <span className="rounded-md border border-white/8 px-2 py-0.5 text-[11px] text-white/55">{a.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">Leaderboard</h2>
              <span className="text-[10px] uppercase tracking-wider text-white/40">Preview</span>
            </div>
            <div className="surface rounded-lg p-3">
              <ol className="space-y-1">
                {leaders.map((l, i) => (
                  <li key={l.name} className="flex items-center justify-between rounded-md px-2.5 py-2 hover:bg-white/[0.03]">
                    <div className="flex items-center gap-3">
                      <span className="w-4 text-[11px] font-medium text-white/45">{i + 1}</span>
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-medium text-white/80">{l.name.charAt(0)}</span>
                      <span className="text-sm text-white/85">{l.name}</span>
                    </div>
                    <span className="text-[12px] font-medium text-white/70">{l.score.toLocaleString()}</span>
                  </li>
                ))}
              </ol>
              <Link to="/premium" className="mt-3 block rounded-md border border-white/10 py-2 text-center text-[11px] font-medium text-white/70 hover:border-white/20 hover:text-white">
                Unlock full leaderboard →
              </Link>
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp size={14} className="text-white/50" />
              <h2 className="text-sm font-semibold text-white">This week</h2>
            </div>
            <div className="surface rounded-lg p-4">
              <div className="flex items-end justify-between gap-1.5">
                {[35, 60, 45, 80, 30, 70, 55].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="w-full rounded-sm bg-[oklch(0.72_0.13_250)]/50" style={{ height: `${h}px` }} />
                    <span className="text-[10px] text-white/40">{["M","T","W","T","F","S","S"][i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px]">
                <span className="text-white/50">Total this week</span>
                <span className="font-medium text-white">18h 42m</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </AppShell>
  );
}

function StatCard({ icon: Icon, label, value, unit, sub, trend }: { icon: any; label: string; value: string; unit?: string; sub?: string; trend?: boolean }) {
  return (
    <div className="surface rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="grid h-7 w-7 place-items-center rounded-md border border-white/8 bg-white/[0.03] text-white/60"><Icon size={13} strokeWidth={1.75} /></span>
        {trend && <TrendingUp size={12} className="text-[oklch(0.74_0.14_155)]" />}
      </div>
      <div className="mt-4 text-[11px] uppercase tracking-wider text-white/45">{label}</div>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-semibold text-white">{value}</span>
        {unit && <span className="text-sm text-white/50">{unit}</span>}
      </div>
      {sub && <div className="mt-0.5 text-[11px] text-white/45">{sub}</div>}
    </div>
  );
}
