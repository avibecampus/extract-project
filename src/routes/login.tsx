import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Eye, EyeOff, CheckCircle2, ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/components/auth/auth-context";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [career, setCareer] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [completionState, setCompletionState] = useState<"ready" | "confirm-email">("ready");
  const navigate = useNavigate();
  const { user, loading, signIn, signUp, sendPasswordReset } = useAuth();

  const canComplete = career && level && date && terms;
  const progressSteps = useMemo(() => (mode === "signup" ? [1, 2, 3] : [1]), [mode]);

  useEffect(() => {
    if (!loading && user) {
      void navigate({ to: "/dashboard" });
    }
  }, [loading, navigate, user]);

  async function submitAuth(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    if (pw.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (mode === "signup") {
      setStep(2);
      return;
    }

    try {
      setSubmitting(true);
      await signIn(email, pw);
      toast.success("Signed in successfully.");
      await navigate({ to: "/dashboard" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in right now.");
    } finally {
      setSubmitting(false);
    }
  }

  async function completeOnboarding() {
    if (!canComplete) {
      setError("Complete every onboarding field before continuing.");
      return;
    }

    setError("");

    try {
      setSubmitting(true);
      const { needsEmailConfirmation } = await signUp({
        email,
        password: pw,
        profile: {
          full_name: email.split("@")[0] || "Student",
          bio: "",
          career,
          level,
          exam_date: date,
          reminder_time: "18:00",
          email_notifications: true,
          two_factor_enabled: false,
        },
      });

      setCompletionState(needsEmailConfirmation ? "confirm-email" : "ready");
      setStep(3);

      if (needsEmailConfirmation) {
        toast.success("Account created. Check your inbox to confirm your email.");
        return;
      }

      toast.success("Account created successfully.");
      setTimeout(() => {
        void navigate({ to: "/dashboard" });
      }, 1400);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create your account right now.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handlePasswordReset() {
    setError("");

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter your account email first, then request a reset link.");
      return;
    }

    try {
      setSubmitting(true);
      await sendPasswordReset(email);
      toast.success("Password reset email sent.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send reset email.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link to="/">
          <Logo />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white"
        >
          <ArrowLeft size={14} /> Back
        </Link>
      </header>

      <div className="relative z-10 mx-auto flex max-w-md items-center justify-center px-4 py-8 sm:py-12">
        <div className="surface-strong w-full rounded-lg p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-center gap-2">
            {progressSteps.map((n) => (
              <div
                key={n}
                className={`h-1 rounded-full transition-all ${step >= n ? "w-8 bg-[oklch(0.64_0.16_255)]" : "w-4 bg-white/12"}`}
              />
            ))}
          </div>

          {step === 1 && (
            <>
              <h1 className="text-2xl font-semibold text-white">
                {mode === "signup" ? "Create your account" : "Welcome back"}
              </h1>
              <p className="mt-1 text-sm text-white/55">
                {mode === "signup" ? "Join in seconds." : "Sign back into A Vibe Campus."}
              </p>

              <form onSubmit={submitAuth} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/45">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]"
                    placeholder="you@campus.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/45">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPw ? "text" : "password"}
                      required
                      value={pw}
                      onChange={(e) => setPw(e.target.value)}
                      className="w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 pr-10 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      aria-label="Toggle password visibility"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-white/50 hover:bg-white/[0.05] hover:text-white"
                    >
                      {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-md border border-[oklch(0.66_0.20_25)]/40 bg-[oklch(0.66_0.20_25)]/10 px-3 py-2 text-xs text-[oklch(0.85_0.10_25)]">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Please wait..." : mode === "signup" ? "Continue" : "Log in"}
                </button>

                <div className="flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setMode(mode === "signup" ? "login" : "signup")}
                    className="text-[oklch(0.78_0.12_250)] hover:underline"
                  >
                    {mode === "signup" ? "Have an account? Log in" : "New here? Sign up"}
                  </button>
                  <button
                    type="button"
                    onClick={handlePasswordReset}
                    className="text-white/50 hover:text-white"
                  >
                    Forgot password?
                  </button>
                </div>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-semibold text-white">Tell us about you</h1>
              <p className="mt-1 text-sm text-white/55">
                This tunes your dashboard, coach and roadmap.
              </p>

              <div className="mt-6 space-y-4">
                <Field label="Career goal">
                  <select
                    value={career}
                    onChange={(e) => setCareer(e.target.value)}
                    className="w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]"
                  >
                    <option value="">Choose one…</option>
                    {[
                      "CA",
                      "Engineering",
                      "Freelancing",
                      "Product Manager",
                      "Designer",
                      "Other",
                    ].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Level">
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]"
                  >
                    <option value="">Choose level…</option>
                    {[
                      "Foundation",
                      "Intermediate",
                      "Advanced",
                      "Year 1",
                      "Year 2",
                      "Year 3",
                      "Year 4",
                    ].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Exam date">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]"
                  />
                </Field>

                <label className="flex items-start gap-2 text-xs text-white/65">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    className="mt-0.5 accent-[oklch(0.64_0.16_255)]"
                  />
                  <span>
                    I agree to the{" "}
                    <Link to="/legal" className="text-[oklch(0.78_0.12_250)] hover:underline">
                      Terms & Privacy
                    </Link>
                    .
                  </span>
                </label>

                <button
                  disabled={!canComplete || submitting}
                  onClick={completeOnboarding}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Creating account..." : "Complete setup"}
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[oklch(0.74_0.14_155)]/30 bg-[oklch(0.74_0.14_155)]/10 text-[oklch(0.82_0.13_155)]">
                <CheckCircle2 size={26} />
              </div>
              <h1 className="mt-4 text-2xl font-semibold text-white">
                {completionState === "confirm-email" ? "Check your inbox." : "You're in."}
              </h1>
              <p className="mt-1 text-sm text-white/55">
                {completionState === "confirm-email"
                  ? "Confirm your email address to finish activating your account."
                  : "Taking you to your dashboard..."}
              </p>
              {completionState === "confirm-email" && (
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setStep(1);
                  }}
                  className="mt-6 text-sm text-[oklch(0.78_0.12_250)] hover:underline"
                >
                  Back to sign in
                </button>
              )}
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
      <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/45">
        {label}
      </label>
      {children}
    </div>
  );
}
