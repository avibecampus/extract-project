import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Flame, F as Compass, L as Clock, R as ClipboardCheck, W as CalendarClock, Y as ArrowUpRight, o as Trophy, s as TrendingUp, u as Target, w as MessageSquare } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CYkjLxgv.js
var import_jsx_runtime = require_jsx_runtime();
var activity = [
	{
		title: "Taxation — Ch. 4 practice",
		time: "2h ago",
		tag: "Study"
	},
	{
		title: "Mock Test: Financial Reporting",
		time: "Yesterday",
		tag: "Test",
		score: "82%"
	},
	{
		title: "Cost Accounting — Marginal Costing",
		time: "2d ago",
		tag: "Study"
	}
];
var leaders = [
	{
		name: "Aarav S.",
		score: 2840
	},
	{
		name: "Diya M.",
		score: 2695
	},
	{
		name: "Kabir R.",
		score: 2510
	},
	{
		name: "Ishaan P.",
		score: 2380
	}
];
var quick = [
	{
		to: "/study-session",
		label: "Study Session",
		desc: "Plan & focus",
		icon: CalendarClock
	},
	{
		to: "/tests",
		label: "Practice Tests",
		desc: "Take a mock",
		icon: ClipboardCheck
	},
	{
		to: "/career",
		label: "Career Map",
		desc: "Your path",
		icon: Compass
	},
	{
		to: "/coach",
		label: "AI Coach",
		desc: "Ask anything",
		icon: MessageSquare
	}
];
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Dashboard",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold text-white sm:text-[28px]",
					children: "Good to see you back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-white/55",
					children: "Here's your growth at a glance."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Flame,
						label: "Current streak",
						value: "12",
						unit: "days",
						sub: "Personal best"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Trophy,
						label: "Points",
						value: "1,240",
						sub: "+80 this week",
						trend: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Clock,
						label: "Study time",
						value: "18",
						unit: "h",
						sub: "This week"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Target,
						label: "Avg test score",
						value: "78",
						unit: "%",
						sub: "Last 5 tests"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-white",
							children: "Quick access"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: quick.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: q.to,
							className: "group surface rounded-lg p-4 transition hover:border-white/20 hover:bg-white/[0.04]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.icon, {
										className: "text-white/70",
										size: 16,
										strokeWidth: 1.75
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 13,
										className: "text-white/25 transition group-hover:text-white/70"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 text-[13px] font-medium text-white",
									children: q.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-white/45",
									children: q.desc
								})
							]
						}, q.to))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-white",
							children: "Recent activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-[11px] text-white/50 hover:text-white",
							children: "View all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "surface divide-y divide-white/6 rounded-lg",
						children: activity.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-medium text-white",
									children: a.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-[11px] text-white/45",
									children: a.time
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center gap-2",
								children: [a.score && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-[oklch(0.78_0.12_250)]",
									children: a.score
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-white/8 px-2 py-0.5 text-[11px] text-white/55",
									children: a.tag
								})]
							})]
						}, i))
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-white",
							children: "Leaderboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wider text-white/40",
							children: "Preview"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface rounded-lg p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-1",
							children: leaders.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between rounded-md px-2.5 py-2 hover:bg-white/[0.03]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-4 text-[11px] font-medium text-white/45",
											children: i + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-medium text-white/80",
											children: l.name.charAt(0)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-white/85",
											children: l.name
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[12px] font-medium text-white/70",
									children: l.score.toLocaleString()
								})]
							}, l.name))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/premium",
							className: "mt-3 block rounded-md border border-white/10 py-2 text-center text-[11px] font-medium text-white/70 hover:border-white/20 hover:text-white",
							children: "Unlock full leaderboard →"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
							size: 14,
							className: "text-white/50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-white",
							children: "This week"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface rounded-lg p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end justify-between gap-1.5",
							children: [
								35,
								60,
								45,
								80,
								30,
								70,
								55
							].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full rounded-sm bg-[oklch(0.72_0.13_250)]/50",
									style: { height: `${h}px` }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-white/40",
									children: [
										"M",
										"T",
										"W",
										"T",
										"F",
										"S",
										"S"
									][i]
								})]
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/50",
								children: "Total this week"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-white",
								children: "18h 42m"
							})]
						})]
					})] })]
				})]
			})
		]
	});
}
function StatCard({ icon: Icon, label, value, unit, sub, trend }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface rounded-lg p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-7 w-7 place-items-center rounded-md border border-white/8 bg-white/[0.03] text-white/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 13,
						strokeWidth: 1.75
					})
				}), trend && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
					size: 12,
					className: "text-[oklch(0.74_0.14_155)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-[11px] uppercase tracking-wider text-white/45",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-baseline gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl font-semibold text-white",
					children: value
				}), unit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-white/50",
					children: unit
				})]
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[11px] text-white/45",
				children: sub
			})
		]
	});
}
//#endregion
export { Dashboard as component };
