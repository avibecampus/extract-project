import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Crown, Trophy, Users, Radio, MessageCircle, Zap, CalendarDays, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/premium")({ component: Premium });

const features = [
  { icon: CalendarDays, title: "Weekly live tests", desc: "Compete every week with timed live exams." },
  { icon: Trophy, title: "Leaderboard", desc: "See where you rank across the campus." },
  { icon: Users, title: "Buddy matching", desc: "Get paired with a study partner who matches your goals." },
  { icon: Radio, title: "Live campus pulse", desc: "Real-time feed of what students are studying." },
  { icon: MessageCircle, title: "Community chat", desc: "Topic-based rooms with mentors and peers." },
  { icon: Zap, title: "Priority AI Coach", desc: "Faster, deeper answers with unlimited chats." },
];

const inclusive = [
  "Weekly live tests + leaderboard",
  "Study buddy matching",
  "Community chat rooms",
  "Priority AI Coach (unlimited)",
  "Advanced analytics + exports",
  "Early access to new features",
];

function Premium() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <AppShell title="Premium">
      <div className="mb-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="surface-strong relative overflow-hidden rounded-lg p-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.13_250)]/30 bg-[oklch(0.72_0.13_250)]/10 px-2.5 py-1 text-[11px] font-medium text-[oklch(0.78_0.12_250)]">
            <Crown size={12} /> Premium — Coming soon
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Everything free, plus what makes you compete.</h1>
          <p className="mt-3 max-w-lg text-sm text-white/60">Premium unlocks the community layer of A Vibe Campus — live tests, ranked play, buddies and priority coaching.</p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-4xl font-semibold text-white">₹99</span>
            <span className="text-sm text-white/50">/ month</span>
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {inclusive.map((x) => (
              <li key={x} className="flex items-start gap-2 text-sm text-white/75">
                <Check size={14} className="mt-0.5 shrink-0 text-[oklch(0.72_0.13_250)]" /> {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface rounded-lg p-6">
          <h3 className="text-sm font-semibold text-white">Get notified at launch</h3>
          <p className="mt-1 text-sm text-white/55">We'll email you the day Premium goes live.</p>
          <form onSubmit={(e) => { e.preventDefault(); if (email) setOk(true); }} className="mt-4 flex flex-col gap-2">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@campus.com"
              className="rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]" />
            <button className="btn-primary">Notify me</button>
          </form>
          {ok && <div className="mt-3 rounded-md border border-[oklch(0.74_0.14_155)]/30 bg-[oklch(0.74_0.14_155)]/10 px-3 py-2 text-xs text-[oklch(0.82_0.13_155)]">You're on the list. We'll ping you first.</div>}
        </div>
      </div>

      <h2 className="mb-4 text-sm font-semibold text-white">What's included</h2>
      <div className="grid gap-px overflow-hidden rounded-lg border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="bg-[oklch(0.145_0.008_260)] p-5">
            <div className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.02] text-white/70"><f.icon size={14} strokeWidth={1.75} /></div>
            <h3 className="mt-4 text-[14px] font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-white/55">{f.desc}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
