import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({ component: LoginPage });

const themeSwatches = [
  { id: "cyan", from: "from-cyan-400", to: "to-indigo-500" },
  { id: "violet", from: "from-fuchsia-400", to: "to-violet-600" },
  { id: "emerald", from: "from-emerald-400", to: "to-teal-600" },
  { id: "sunset", from: "from-amber-400", to: "to-rose-500" },
];

function LoginPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [career, setCareer] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const canComplete = career && level && date && theme && terms;

  function submitAuth(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email.");
    if (pw.length < 6) return setError("Password must be at least 6 characters.");
    setStep(2);
  }
  function completeOnboarding() {
    setStep(3);
    setTimeout(() => navigate({ to: "/dashboard" }), 2000);
  }

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Link to="/"><Logo /></Link>
        <Link to="/" className="text-sm text-white/60 hover:text-white">← Back</Link>
      </header>

      <div className="mx-auto flex max-w-md items-center justify-center px-4 py-8">
        <div className="glass-strong w-full rounded-3xl p-6 sm:p-8">
          {/* Progress dots */}
          <div className="mb-6 flex items-center justify-center gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className={`h-1.5 rounded-full transition-all ${step >= n ? "w-8 bg-cyan-400" : "w-4 bg-white/15"}`} />
            ))}
          </div>

          {step === 1 && (
            <>
              <h1 className="text-2xl font-bold text-white">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
              <p className="mt-1 text-sm text-white/60">{mode === "signup" ? "Join the campus in seconds." : "Sign back into Vibe Campus."}</p>

              <form onSubmit={submitAuth} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/70">Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
                    placeholder="you@campus.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/70">Password</label>
                  <div className="relative">
                    <input type={showPw ? "text" : "password"} required value={pw} onChange={(e) => setPw(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 pr-10 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
                      placeholder="••••••••" />
                    <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/60 hover:bg-white/5">
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {error && <div className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">{error}</div>}

                <button type="submit" className="w-full rounded-xl bg-cyan-400 py-2.5 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
                  {mode === "signup" ? "Sign Up" : "Log In"}
                </button>

                <div className="flex items-center justify-between text-xs">
                  <button type="button" onClick={() => setMode(mode === "signup" ? "login" : "signup")} className="text-cyan-300 hover:underline">
                    {mode === "signup" ? "Have an account? Log in" : "New here? Sign up"}
                  </button>
                  <a href="#" className="text-white/60 hover:text-white">Forgot password?</a>
                </div>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-bold text-white">Tell us about you</h1>
              <p className="mt-1 text-sm text-white/60">This tunes your dashboard, coach and roadmap.</p>

              <div className="mt-6 space-y-4">
                <Field label="Career Goal">
                  <select value={career} onChange={(e) => setCareer(e.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60">
                    <option value="">Choose one…</option>
                    {["CA", "Engineering", "Freelancing", "Product Manager", "Designer", "Other"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Level">
                  <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60">
                    <option value="">Choose level…</option>
                    {["Foundation", "Intermediate", "Advanced", "Year 1", "Year 2", "Year 3", "Year 4"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Exam Date">
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60" />
                </Field>

                <Field label="Theme">
                  <div className="grid grid-cols-4 gap-2">
                    {themeSwatches.map((s) => (
                      <button key={s.id} type="button" onClick={() => setTheme(s.id)}
                        className={`h-10 rounded-xl bg-gradient-to-br ${s.from} ${s.to} ring-2 transition ${theme === s.id ? "ring-white" : "ring-transparent hover:ring-white/40"}`} />
                    ))}
                  </div>
                </Field>

                <label className="flex items-start gap-2 text-xs text-white/70">
                  <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} className="mt-0.5 accent-cyan-400" />
                  <span>I agree to the <Link to="/legal" className="text-cyan-300 hover:underline">Terms & Privacy</Link>.</span>
                </label>

                <button disabled={!canComplete} onClick={completeOnboarding}
                  className="w-full rounded-xl bg-cyan-400 py-2.5 text-sm font-semibold text-slate-900 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40">
                  Complete Setup
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="py-8 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                <CheckCircle2 size={32} />
              </div>
              <h1 className="mt-4 text-2xl font-bold text-white">You're in!</h1>
              <p className="mt-1 text-sm text-white/60">Taking you to your dashboard…</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-white/70">{label}</label>
      {children}
    </div>
  );
}
