import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { BackgroundFX } from "@/components/BackgroundFX";
import { ArrowRight, Brain, CalendarClock, ClipboardCheck, Compass, Check } from "lucide-react";
import { useAuth } from "@/components/auth/auth-context";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "A Vibe Campus — The student growth OS" },
      {
        name: "description",
        content:
          "A Vibe Campus is a focused workspace for students — study sessions, an AI coach, mock tests, and a career roadmap in one calm, professional hub.",
      },
      { property: "og:title", content: "A Vibe Campus — The student growth OS" },
      {
        property: "og:description",
        content:
          "A focused workspace for students — study sessions, AI coach, mock tests, and a career roadmap.",
      },
    ],
  }),
});

const benefits = [
  {
    icon: Brain,
    title: "AI Study Coach",
    desc: "Ask doubts, get career advice and daily direction — with memory of your journey.",
  },
  {
    icon: CalendarClock,
    title: "Structured Study",
    desc: "Assign topics to dates, run focus timers, and never miss a session.",
  },
  {
    icon: ClipboardCheck,
    title: "Practice Tests",
    desc: "Mock tests with instant analytics, historical scores, and weak-area detection.",
  },
  {
    icon: Compass,
    title: "Career Roadmap",
    desc: "A step-by-step path from where you are today to your dream role.",
  },
];

const proof = [
  { k: "12,000+", v: "Active students" },
  { k: "4.9/5", v: "Average rating" },
  { k: "18h", v: "Median weekly study" },
];

function Landing() {
  const { user, loading } = useAuth();
  const dashboardTarget = user ? "/dashboard" : "/login";
  const primaryLabel = user ? "Open dashboard" : "Get started";
  const secondaryLabel = loading
    ? "Checking session"
    : user
      ? "Continue learning"
      : "View dashboard";

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />

      <header className="relative z-10 border-b border-white/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#proof" className="hover:text-white">
              Why us
            </a>
            <Link to="/legal" className="hover:text-white">
              Legal
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to={user ? "/dashboard" : "/login"} className="btn-ghost !py-1.5 !text-xs">
              {user ? "Dashboard" : "Sign in"}
            </Link>
            <Link to={dashboardTarget} className="btn-primary !py-1.5 !text-xs">
              {primaryLabel}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-24 sm:pb-28">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.13_250)]" />
          Now in open beta for students in India
        </div>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
          The focused workspace
          <br className="hidden sm:block" /> for serious students.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
          Plan your syllabus, run deep-focus sessions, take mock tests, and get guidance from an AI
          coach — in one calm, professional workspace.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={dashboardTarget} className="btn-primary">
            {primaryLabel} <ArrowRight size={14} />
          </Link>
          <Link to={dashboardTarget} className="btn-ghost">
            {secondaryLabel}
          </Link>
        </div>
        <div className="mt-4 text-xs text-white/40">
          No credit card required · Free forever plan
        </div>
      </section>

      {/* Product preview mock */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="surface-strong overflow-hidden rounded-xl">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[11px] text-white/40">app.avibecampus.com/dashboard</span>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-4 sm:p-6">
            {[
              { k: "Streak", v: "12 days" },
              { k: "Points", v: "1,240" },
              { k: "Study time", v: "18h" },
              { k: "Avg score", v: "78%" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-white/8 bg-white/[0.02] p-4">
                <div className="text-[11px] uppercase tracking-wider text-white/40">{s.k}</div>
                <div className="mt-1.5 text-2xl font-semibold text-white">{s.v}</div>
              </div>
            ))}
            <div className="sm:col-span-4 rounded-lg border border-white/8 bg-white/[0.02] p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium text-white">This week's plan</div>
                <div className="text-[11px] text-white/40">Nov 10 – Nov 16</div>
              </div>
              <div className="space-y-2">
                {[
                  ["Mon", "Financial Reporting · Ch. 4", "2h"],
                  ["Tue", "Taxation · Direct Tax basics", "1.5h"],
                  ["Wed", "Mock Test — Cost Accounting", "1h"],
                ].map(([d, t, h]) => (
                  <div
                    key={d}
                    className="flex items-center justify-between rounded-md border border-white/6 bg-white/[0.015] px-3 py-2 text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 text-[11px] font-medium uppercase tracking-wider text-white/40">
                        {d}
                      </span>
                      <span className="text-white/85">{t}</span>
                    </div>
                    <span className="text-[11px] text-white/50">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mb-10 text-center">
          <div className="text-[11px] font-medium uppercase tracking-widest text-white/40">
            Features
          </div>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
            Everything you need. Nothing you don't.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-[oklch(0.145_0.008_260)] p-6">
              <div className="inline-grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-[oklch(0.78_0.12_250)]">
                <b.icon size={16} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section id="proof" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="surface rounded-xl px-6 py-10 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {proof.map((p) => (
              <div key={p.v} className="text-center sm:text-left">
                <div className="text-3xl font-semibold text-white sm:text-4xl">{p.k}</div>
                <div className="mt-1 text-sm text-white/50">{p.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="surface rounded-xl p-6">
            <div className="text-[11px] font-medium uppercase tracking-widest text-white/40">
              Free
            </div>
            <div className="mt-2 text-3xl font-semibold text-white">
              ₹0<span className="text-sm font-normal text-white/40"> / forever</span>
            </div>
            <p className="mt-2 text-sm text-white/55">Everything a student needs to start.</p>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {[
                "Study planner + focus timer",
                "AI Coach (standard)",
                "Unlimited practice tests",
                "Career roadmap",
              ].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check size={14} className="text-[oklch(0.72_0.13_250)]" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/login" className="mt-6 btn-ghost w-full">
              Get started
            </Link>
          </div>
          <div className="surface-strong relative rounded-xl p-6">
            <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/70">
              Coming soon
            </span>
            <div className="text-[11px] font-medium uppercase tracking-widest text-[oklch(0.78_0.12_250)]">
              Premium
            </div>
            <div className="mt-2 text-3xl font-semibold text-white">
              ₹99<span className="text-sm font-normal text-white/40"> / month</span>
            </div>
            <p className="mt-2 text-sm text-white/55">
              For students who want to compete and grow faster.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {[
                "Weekly live tests + leaderboard",
                "Priority AI Coach",
                "Study buddy matching",
                "Community chat rooms",
              ].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check size={14} className="text-[oklch(0.72_0.13_250)]" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/premium" className="mt-6 btn-primary w-full">
              Explore Premium
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/8 py-8 text-[11px] text-white/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between sm:px-6">
          <Logo size={26} />
          <div className="flex gap-5">
            <Link to="/legal" className="hover:text-white/70">
              Terms & Privacy
            </Link>
            <a href="#" className="hover:text-white/70">
              Twitter
            </a>
            <a href="#" className="hover:text-white/70">
              Instagram
            </a>
          </div>
          <div>© {new Date().getFullYear()} A Vibe Campus</div>
        </div>
      </footer>
    </div>
  );
}
