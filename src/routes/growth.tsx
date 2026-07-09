import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Search, ExternalLink, Rocket, Wrench, GraduationCap, Briefcase, BookOpen } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/growth")({ component: Growth });

const items = [
  { cat: "Skills", title: "Excel for Finance Pros", desc: "From lookups to pivot mastery in 6 hours.", icon: GraduationCap },
  { cat: "Skills", title: "Public Speaking Basics", desc: "Handle vivas and interviews with calm.", icon: GraduationCap },
  { cat: "Freelancing", title: "Your First ₹10k Online", desc: "Land your first paying client in 30 days.", icon: Briefcase },
  { cat: "Freelancing", title: "Upwork vs. Fiverr for students", desc: "Which platform to start on and why.", icon: Briefcase },
  { cat: "AI Tools", title: "Notion AI for Notes", desc: "Auto-summarize lectures & chapters.", icon: Wrench },
  { cat: "AI Tools", title: "Perplexity for Research", desc: "Faster, cited answers than Google.", icon: Wrench },
  { cat: "Opportunities", title: "Summer Internship 2026", desc: "Big 4 audit programs open now.", icon: Rocket },
  { cat: "Opportunities", title: "Campus Ambassador Roles", desc: "Boost your resume + earn perks.", icon: Rocket },
  { cat: "Learning", title: "CA Foundation Cheatsheet", desc: "Every formula, one page.", icon: BookOpen },
  { cat: "Learning", title: "Beginner's Guide to Investing", desc: "Grow money while you study.", icon: BookOpen },
];

const cats = ["All", "Skills", "Freelancing", "AI Tools", "Opportunities", "Learning"] as const;

function Growth() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof cats)[number]>("All");

  const filtered = useMemo(() => items.filter((i) =>
    (cat === "All" || i.cat === cat) &&
    (q === "" || (i.title + " " + i.desc).toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  return (
    <AppShell title="Growth">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Growth & Learning</h1>
        <p className="text-sm text-white/60">Skills, freelancing, AI tools and opportunities — hand-picked.</p>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="glass relative flex flex-1 items-center rounded-xl px-3 py-2">
          <Search size={16} className="text-white/50" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles, tools, opportunities…"
            className="ml-2 w-full bg-transparent text-sm text-white placeholder-white/40 outline-none" />
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${cat === c ? "bg-cyan-400 text-slate-900" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <div key={i.title} className="glass group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:bg-white/10">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-400/15 text-indigo-200"><i.icon size={18} /></div>
              <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/60">{i.cat}</span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{i.title}</h3>
            <p className="mt-1 text-sm text-white/60">{i.desc}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 group-hover:underline">
              Read more <ExternalLink size={12} />
            </a>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-white/10 p-12 text-center text-sm text-white/50">
            Nothing matches. Try another search.
          </div>
        )}
      </div>
    </AppShell>
  );
}
