import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Briefcase, Y as ArrowUpRight, _ as Rocket, g as Search, k as GraduationCap, q as BookOpen, r as Wrench } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/growth-CW6gMU4Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		cat: "Skills",
		title: "Excel for Finance Pros",
		desc: "From lookups to pivot mastery in 6 hours.",
		icon: GraduationCap,
		read: "6 hr"
	},
	{
		cat: "Skills",
		title: "Public Speaking Basics",
		desc: "Handle vivas and interviews with calm.",
		icon: GraduationCap,
		read: "2 hr"
	},
	{
		cat: "Freelancing",
		title: "Your First ₹10k Online",
		desc: "Land your first paying client in 30 days.",
		icon: Briefcase,
		read: "45 min"
	},
	{
		cat: "Freelancing",
		title: "Upwork vs. Fiverr for students",
		desc: "Which platform to start on and why.",
		icon: Briefcase,
		read: "12 min"
	},
	{
		cat: "AI Tools",
		title: "Notion AI for Notes",
		desc: "Auto-summarize lectures and chapters.",
		icon: Wrench,
		read: "8 min"
	},
	{
		cat: "AI Tools",
		title: "Perplexity for Research",
		desc: "Faster, cited answers than Google.",
		icon: Wrench,
		read: "10 min"
	},
	{
		cat: "Opportunities",
		title: "Summer Internship 2026",
		desc: "Big 4 audit programs open now.",
		icon: Rocket,
		read: "Deadline Feb 1"
	},
	{
		cat: "Opportunities",
		title: "Campus Ambassador Roles",
		desc: "Boost your resume + earn perks.",
		icon: Rocket,
		read: "Rolling"
	},
	{
		cat: "Learning",
		title: "CA Foundation Cheatsheet",
		desc: "Every formula, one page.",
		icon: BookOpen,
		read: "PDF"
	},
	{
		cat: "Learning",
		title: "Beginner's Guide to Investing",
		desc: "Grow money while you study.",
		icon: BookOpen,
		read: "20 min"
	}
];
var cats = [
	"All",
	"Skills",
	"Freelancing",
	"AI Tools",
	"Opportunities",
	"Learning"
];
function Growth() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => items.filter((i) => (cat === "All" || i.cat === cat) && (q === "" || (i.title + " " + i.desc).toLowerCase().includes(q.toLowerCase()))), [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Growth",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold text-white sm:text-[28px]",
					children: "Growth & Learning"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-white/55",
					children: "Curated skills, freelancing, AI tools and opportunities."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-2 rounded-md border border-white/8 bg-white/[0.02] px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					size: 14,
					className: "text-white/40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search articles, tools, opportunities…",
					className: "flex-1 bg-transparent text-sm text-white placeholder-white/35 outline-none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex flex-wrap gap-1.5",
				children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `rounded-md px-2.5 py-1 text-[12px] font-medium transition ${cat === c ? "bg-white/[0.08] text-white ring-1 ring-white/15" : "border border-white/8 bg-white/[0.02] text-white/60 hover:text-white/90"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: [filtered.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "group surface rounded-lg p-5 transition hover:border-white/20 hover:bg-white/[0.04]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.02] text-white/70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, {
									size: 14,
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-wider text-white/40",
								children: i.cat
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-[15px] font-semibold text-white",
							children: i.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-white/55",
							children: i.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between text-[11px] text-white/45",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.read }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 12,
								className: "transition group-hover:translate-x-0.5 group-hover:text-white"
							})]
						})
					]
				}, i.title)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-full rounded-md border border-dashed border-white/10 p-12 text-center text-sm text-white/45",
					children: "Nothing matches. Try another search."
				})]
			})
		]
	});
}
//#endregion
export { Growth as component };
