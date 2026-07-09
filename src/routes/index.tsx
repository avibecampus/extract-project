import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Sparkles, Brain, Trophy, Compass, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Vibe Campus — Study smarter, grow faster" },
      { name: "description", content: "Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career." },
    ],
  }),
});

const benefits = [
  { icon: Brain, title: "AI Study Coach", desc: "Ask doubts, get career advice and daily motivation — all with memory of your journey." },
  { icon: Sparkles, title: "Structured Study", desc: "Assign topics to dates, run focus timers, and never miss a session." },
  { icon: Trophy, title: "Practice Tests", desc: "GFYTE-powered mock tests with instant analytics and personal scores." },
  { icon: Compass, title: "Career Roadmap", desc: "See a step-by-step path from where you are today to your dream role." },
];

function Landing() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Logo />
        <Link to="/login" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
          Join Now
        </Link>
      </header>

      <section className="mx-auto max-w-5xl px-4 pt-16 pb-20 text-center sm:pt-24">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-cyan-200">
          <Sparkles size={12} /> Your growth OS for student life
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl" style={{ fontFamily: "Poppins, Inter, sans-serif" }}>
          Study smarter. <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">Grow faster.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          Vibe Campus brings your study sessions, AI coach, practice tests, career roadmap and growth content into one calm, premium hub.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/login" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
            Get Started <ArrowRight size={16} />
          </Link>
          <Link to="/premium" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/5">
            Peek at Premium
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className="glass rounded-2xl p-5 hover:bg-white/10">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <b.icon size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{b.title}</h3>
            <p className="mt-1 text-sm text-white/60">{b.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24">
        <div className="glass-strong rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to level up?</h2>
          <p className="mt-3 text-white/70">Join Vibe Campus and start your streak today.</p>
          <Link to="/login" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/50">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between">
          <Logo size={28} />
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-cyan-300">Terms & Privacy</Link>
            <a href="#" className="hover:text-cyan-300">Twitter</a>
            <a href="#" className="hover:text-cyan-300">Instagram</a>
          </div>
          <div>© {new Date().getFullYear()} Vibe Campus</div>
        </div>
      </footer>
    </div>
  );
}
