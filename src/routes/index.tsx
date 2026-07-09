import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Hero3D } from "@/components/Hero3D";
import { GlyphIcon } from "@/components/GlyphIcon";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "A Vibe Campus — Study smarter, grow faster" },
      { name: "description", content: "A Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career." },
      { property: "og:title", content: "A Vibe Campus — Study smarter, grow faster" },
      { property: "og:description", content: "The all-in-one student growth OS — study sessions, AI coach, mock tests, career roadmap." },
    ],
  }),
});

const benefits = [
  { icon: "brain" as const, title: "AI Study Coach", desc: "Ask doubts, get career advice and daily motivation — all with memory of your journey." },
  { icon: "calendar" as const, title: "Structured Study", desc: "Assign topics to dates, run focus timers, and never miss a session." },
  { icon: "trophy" as const, title: "Practice Tests", desc: "GFYTE-powered mock tests with instant analytics and personal scores." },
  { icon: "compass" as const, title: "Career Roadmap", desc: "A step-by-step path from where you are today to your dream role." },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFX />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Logo />
        <div className="flex items-center gap-2">
          <Link to="/legal" className="hidden text-sm text-white/60 hover:text-white sm:inline">Legal</Link>
          <Link to="/login" className="btn-primary">Join Now <ArrowRight size={14} /></Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-12 pb-16 lg:grid-cols-2 lg:pt-20">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-cyan-200">
            <Sparkles size={12} /> Your growth OS for student life
          </span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Study smarter.
            <br />
            <span className="text-gradient">Grow faster.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            A Vibe Campus brings your study sessions, AI coach, practice tests, career roadmap and growth content into one calm, premium hub.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/login" className="btn-primary">Get Started <ArrowRight size={14} /></Link>
            <Link to="/premium" className="btn-ghost">Peek at Premium</Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-white/50">
            <div><span className="text-lg font-bold text-white">12k+</span> students</div>
            <div><span className="text-lg font-bold text-white">4.9★</span> avg rating</div>
            <div><span className="text-lg font-bold text-white">100%</span> free to start</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto aspect-square w-full max-w-lg"
        >
          <div className="glow-ring absolute inset-6 rounded-full bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-fuchsia-500/10 blur-2xl" />
          <div className="relative h-full w-full">
            <Hero3D />
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, rotateX: -3, rotateY: 3 }}
              className="glass card-3d rounded-2xl p-5"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5">
                <GlyphIcon name={b.icon} size={28} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{b.title}</h3>
              <p className="mt-1 text-sm text-white/60">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-4 pb-24">
        <div className="glass-strong grain relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "conic-gradient(from 90deg, oklch(0.85 0.15 200), oklch(0.70 0.20 300), oklch(0.72 0.24 335), oklch(0.85 0.15 200))" }} />
          <h2 className="relative text-4xl font-bold text-white sm:text-5xl">Ready to <span className="text-gradient">level up?</span></h2>
          <p className="relative mt-3 text-white/70">Join A Vibe Campus and start your streak today.</p>
          <div className="relative mt-8 flex justify-center">
            <Link to="/login" className="btn-primary">Get Started <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-white/50">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between">
          <Logo size={28} />
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-cyan-300">Terms & Privacy</Link>
            <a href="#" className="hover:text-cyan-300">Twitter</a>
            <a href="#" className="hover:text-cyan-300">Instagram</a>
          </div>
          <div>© {new Date().getFullYear()} A Vibe Campus</div>
        </div>
      </footer>
    </div>
  );
}
