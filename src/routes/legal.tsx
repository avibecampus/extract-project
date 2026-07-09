import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { useState } from "react";

export const Route = createFileRoute("/legal")({ component: Legal });

const tabs = ["Terms of Service", "Privacy Policy", "Cookie Policy"] as const;

function Legal() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Terms of Service");
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <Link to="/"><Logo /></Link>
        <Link to="/" className="text-sm text-white/60 hover:text-white">← Back</Link>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-16">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Legal</h1>
          <div className="text-xs text-white/50">v1.0 · Last updated 2026-01-01</div>
        </div>

        <div className="glass mb-4 flex flex-wrap gap-1 rounded-xl p-1">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition ${tab === t ? "bg-cyan-400 text-slate-900" : "text-white/70 hover:bg-white/5"}`}>
              {t}
            </button>
          ))}
        </div>

        <article className="glass-strong space-y-4 rounded-2xl p-6 text-sm leading-relaxed text-white/75">
          <h2 className="text-lg font-semibold text-white">{tab}</h2>
          <p>This is placeholder legal copy for A Vibe Campus. Replace with your real {tab.toLowerCase()} before launch.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum dictum orci, non commodo felis facilisis nec. Vivamus varius, urna eu ultrices consectetur, magna magna feugiat lectus, non dictum nisi lorem nec sem.</p>
          <h3 className="pt-2 text-base font-semibold text-white">1. Overview</h3>
          <p>By using A Vibe Campus, you agree to the terms outlined here. If you disagree with any part, please discontinue use of the platform.</p>
          <h3 className="pt-2 text-base font-semibold text-white">2. Your Data</h3>
          <p>We store the minimum data required to power your learning experience — study sessions, test scores, streaks and preferences.</p>
          <h3 className="pt-2 text-base font-semibold text-white">3. Contact</h3>
          <p>Reach us at hello@vibecampus.example — we respond within 3 business days.</p>
        </article>
      </main>
    </div>
  );
}
