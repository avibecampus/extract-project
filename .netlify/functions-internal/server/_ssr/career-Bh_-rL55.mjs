import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { H as Check, f as Sparkles, m as Share2 } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/career-Bh_-rL55.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var roadmap = [
	{
		title: "Foundation Level",
		when: "Now",
		desc: "Cement fundamentals in Accounting, Law and Quant.",
		skills: [
			"Accounting",
			"Business Law",
			"Mathematics"
		],
		status: "current"
	},
	{
		title: "Intermediate",
		when: "Nov 2026",
		desc: "Deepen into advanced accounting and audit basics.",
		skills: [
			"Advanced Accounts",
			"Audit",
			"Costing"
		],
		status: "next"
	},
	{
		title: "Articleship",
		when: "2027",
		desc: "Real-world exposure at a CA firm.",
		skills: [
			"Client Work",
			"Tax Filing",
			"Compliance"
		],
		status: "later"
	},
	{
		title: "Final Level",
		when: "2029",
		desc: "Specialize and clear final exams.",
		skills: [
			"Financial Reporting",
			"Strategic Mgmt",
			"Direct Tax"
		],
		status: "later"
	},
	{
		title: "Chartered Accountant",
		when: "Goal",
		desc: "Practice, consult, or lead finance at scale.",
		skills: [
			"Leadership",
			"Advisory",
			"Strategy"
		],
		status: "goal"
	}
];
function Career() {
	const [regenerating, setRegenerating] = (0, import_react.useState)(false);
	function regen() {
		setRegenerating(true);
		setTimeout(() => setRegenerating(false), 1200);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Career",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold text-white sm:text-[28px]",
				children: "Career Roadmap"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-white/55",
				children: "A personalized path from where you are today to your goal."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: regen,
					disabled: regenerating,
					className: "btn-primary !py-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }),
						" ",
						regenerating ? "Generating…" : "Edit"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "btn-ghost !py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { size: 14 }), " Share"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "surface rounded-lg p-6 sm:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative space-y-6 border-l border-white/10 pl-6",
				children: roadmap.map((r) => {
					const isCurrent = r.status === "current";
					const isGoal = r.status === "goal";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full ring-4 ring-[oklch(0.145_0.008_260)] ${isCurrent ? "bg-[oklch(0.64_0.16_255)] text-white" : isGoal ? "border border-white/25 bg-[oklch(0.19_0.010_260)] text-white/70" : "border border-white/15 bg-[oklch(0.19_0.010_260)] text-white/50"}`,
							children: isCurrent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 11 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-current" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-md border p-5 transition ${isCurrent ? "border-[oklch(0.72_0.13_250)]/40 bg-white/[0.03]" : "border-white/8 bg-white/[0.015] hover:bg-white/[0.03]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold text-white",
										children: r.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-md px-2 py-0.5 text-[11px] font-medium ${isCurrent ? "border border-[oklch(0.72_0.13_250)]/40 text-[oklch(0.78_0.12_250)]" : "border border-white/10 text-white/55"}`,
										children: r.when
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-white/65",
									children: r.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: r.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md border border-white/8 bg-white/[0.02] px-2 py-0.5 text-[11px] text-white/60",
										children: s
									}, s))
								})
							]
						})]
					}, r.title);
				})
			})
		})]
	});
}
//#endregion
export { Career as component };
