import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { BackgroundFX } from "@/components/BackgroundFX";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/legal")({ component: Legal });

const tabs = ["Terms of Service", "Privacy Policy", "Cookie Policy"] as const;

function Legal() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Terms of Service");
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link to="/"><Logo /></Link>
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white"><ArrowLeft size={14} /> Back</Link>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
          <h1 className="text-3xl font-semibold text-white">Legal</h1>
          <div className="text-[11px] text-white/45">v1.0 · Last updated 2026-01-01</div>
        </div>

        <div className="mb-4 inline-flex rounded-lg border border-white/8 bg-white/[0.02] p-0.5">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${tab === t ? "bg-white/[0.06] text-white" : "text-white/55 hover:text-white/80"}`}>
              {t}
            </button>
          ))}
        </div>

        <article className="surface-strong space-y-4 rounded-lg p-6 text-[15px] leading-relaxed text-white/70 sm:p-8">
          <h2 className="text-lg font-semibold text-white">{tab}</h2>
          <p>This is placeholder legal copy for A Vibe Campus. Replace with your real {tab.toLowerCase()} before launch.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum dictum orci, non commodo felis facilisis nec. Vivamus varius, urna eu ultrices consectetur.</p>
          <h3 className="pt-2 text-base font-semibold text-white">1. Overview</h3>
          <p>By using A Vibe Campus, you agree to the terms outlined here. If you disagree with any part, please discontinue use of the platform.</p>
          <h3 className="pt-2 text-base font-semibold text-white">2. Your data</h3>
          <p>We store the minimum data required to power your learning experience — study sessions, test scores, streaks and preferences.</p>
          <h3 className="pt-2 text-base font-semibold text-white">3. Contact</h3>
          <p>Reach us at hello@vibecampus.example — we respond within 3 business days.</p>
        </article>
      </main>
    </div>
  );
}
