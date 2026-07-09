import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import {
  LayoutDashboard, CalendarClock, Compass, ClipboardCheck,
  MessageSquare, Sparkles, User, Crown, Menu, X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

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

  return (
    <div className="min-h-screen">
      {/* Top header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg border border-white/10 p-2 text-white/80 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
            <Link to="/dashboard"><Logo /></Link>
          </div>
          {title && <div className="hidden text-sm font-medium text-white/60 md:block">{title}</div>}
          <Link to="/profile" className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-bold text-slate-900 ring-2 ring-white/20 hover:ring-white/40">
            <User size={16} />
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className={`${open ? "block" : "hidden"} lg:block fixed inset-0 top-16 z-30 w-64 shrink-0 bg-slate-950/95 p-4 backdrop-blur-xl lg:static lg:inset-auto lg:bg-transparent lg:p-0`}>
          <nav className="glass sticky top-24 space-y-1 rounded-2xl p-3">
            {nav.map((item) => {
              const active = pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    active ? "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-400/30" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vibe Campus · <Link to="/legal" className="hover:text-cyan-300">Legal</Link>
      </footer>
    </div>
  );
}
