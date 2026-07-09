import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Crown, Trophy, Users, Radio, MessageCircle, Zap, CalendarDays } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/premium")({ component: Premium });

const features = [
  { icon: CalendarDays, title: "Weekly Live Tests", desc: "Compete every week with timed live exams." },
  { icon: Trophy, title: "Leaderboard", desc: "See where you rank across the campus." },
  { icon: Users, title: "Buddy Matching", desc: "Get paired with a study partner who matches your goals." },
  { icon: Radio, title: "Live Campus Pulse", desc: "Real-time feed of what students are studying." },
  { icon: MessageCircle, title: "Community Chat", desc: "Topic-based rooms with mentors and peers." },
  { icon: Zap, title: "Priority AI Coach", desc: "Faster, deeper answers with unlimited chats." },
];

function Premium() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <AppShell title="Premium">
      <div className="glass-strong mb-8 rounded-3xl p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 to-fuchsia-500 text-slate-900">
          <Crown size={26} />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Premium is coming</h1>
        <p className="mx-auto mt-2 max-w-xl text-white/70">A tier built for serious campus energy — live tests, ranked play, community chat and priority coaching.</p>
        <div className="mt-3 text-sm text-white/50">Starting at <span className="font-semibold text-cyan-300">₹99/month</span></div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="glass relative rounded-2xl p-5">
            <span className="absolute right-3 top-3 rounded-full bg-amber-300/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">Soon</span>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-cyan-200"><f.icon size={18} /></div>
            <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-white/60">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass mt-8 rounded-2xl p-6">
        <h3 className="text-base font-semibold text-white">Get notified when Premium launches</h3>
        <form onSubmit={(e) => { e.preventDefault(); if (email) setOk(true); }} className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@campus.com"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60" />
          <button className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-cyan-300">Notify me</button>
        </form>
        {ok && <div className="mt-3 rounded-lg bg-emerald-400/15 px-3 py-2 text-sm text-emerald-200">You're on the list. We'll ping you first.</div>}
      </div>
    </AppShell>
  );
}
