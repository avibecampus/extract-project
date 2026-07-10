import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  CalendarClock,
  Compass,
  ClipboardCheck,
  MessageSquare,
  Sparkles,
  User,
  Crown,
  Menu,
  X,
  Command,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useAuth } from "@/components/auth/auth-context";
import { Logo } from "./Logo";
import { BackgroundFX } from "./BackgroundFX";
import { CommandPalette } from "./CommandPalette";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/study-session", label: "Study", icon: CalendarClock },
  { to: "/career", label: "Career", icon: Compass },
  { to: "/tests", label: "Tests", icon: ClipboardCheck },
  { to: "/coach", label: "Coach", icon: MessageSquare },
  { to: "/growth", label: "Growth", icon: Sparkles },
  { to: "/premium", label: "Premium", icon: Crown },
] as const;

export function AppShell({ children, title }: { children: ReactNode; title?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      void navigate({ to: "/login" });
    }
  }, [loading, navigate, user]);

  if (loading || !user) {
    return (
      <div className="relative min-h-screen">
        <BackgroundFX />
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="surface-strong w-full max-w-sm rounded-lg p-6 text-center">
            <div className="text-lg font-semibold text-white">Checking your session</div>
            <p className="mt-2 text-sm text-white/55">
              Redirecting to the login page if you are not signed in.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const userLabel =
    (typeof user.user_metadata.full_name === "string" && user.user_metadata.full_name.trim()) ||
    user.email?.charAt(0).toUpperCase() ||
    "U";

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <CommandPalette />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[oklch(0.125_0.008_260)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              className="rounded-md border border-white/10 p-1.5 text-white/80 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
            <Link to="/dashboard">
              <Logo />
            </Link>
          </div>
          {title && (
            <div className="hidden text-xs font-medium text-white/50 md:block">{title}</div>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
              }
              className="hidden items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/55 hover:bg-white/[0.06] hover:text-white/80 sm:inline-flex"
              aria-label="Open command palette"
            >
              <Command size={11} /> Quick jump{" "}
              <kbd className="rounded bg-white/10 px-1 text-[10px]">⌘K</kbd>
            </button>
            <Link
              to="/profile"
              aria-label="Profile"
              className="grid h-8 min-w-8 place-items-center rounded-full border border-white/15 bg-[oklch(0.19_0.010_260)] px-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white"
            >
              {userLabel.length === 1 ? userLabel : <User size={14} />}
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6">
        <aside
          className={`${open ? "block" : "hidden"} lg:block fixed inset-0 top-14 z-30 w-64 shrink-0 bg-[oklch(0.125_0.008_260)]/98 p-4 backdrop-blur-xl lg:static lg:inset-auto lg:top-auto lg:bg-transparent lg:p-0`}
        >
          <nav className="sticky top-20 space-y-0.5 rounded-lg border border-white/8 bg-white/[0.02] p-2">
            {nav.map((item) => {
              const active = pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`relative flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] font-medium transition ${
                    active
                      ? "bg-white/[0.06] text-white"
                      : "text-white/60 hover:bg-white/[0.03] hover:text-white/90"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r bg-[oklch(0.72_0.13_250)]"
                    />
                  )}
                  <Icon size={15} strokeWidth={1.75} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 animate-fade-up">{children}</main>
      </div>

      <footer className="border-t border-white/8 py-6 text-center text-[11px] text-white/40">
        © {new Date().getFullYear()} A Vibe Campus ·{" "}
        <Link to="/legal" className="hover:text-white/70">
          Legal
        </Link>
      </footer>
    </div>
  );
}
