import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Logo, t as BackgroundFX } from "./BackgroundFX-llEyPkz5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Compass, H as Check, K as Brain, R as ClipboardCheck, W as CalendarClock, X as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_x_mCIV.js
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	{
		icon: Brain,
		title: "AI Study Coach",
		desc: "Ask doubts, get career advice and daily direction — with memory of your journey."
	},
	{
		icon: CalendarClock,
		title: "Structured Study",
		desc: "Assign topics to dates, run focus timers, and never miss a session."
	},
	{
		icon: ClipboardCheck,
		title: "Practice Tests",
		desc: "Mock tests with instant analytics, historical scores, and weak-area detection."
	},
	{
		icon: Compass,
		title: "Career Roadmap",
		desc: "A step-by-step path from where you are today to your dream role."
	}
];
var proof = [
	{
		k: "12,000+",
		v: "Active students"
	},
	{
		k: "4.9/5",
		v: "Average rating"
	},
	{
		k: "18h",
		v: "Median weekly study"
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundFX, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative z-10 border-b border-white/8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 text-sm text-white/60 md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "hover:text-white",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#proof",
									className: "hover:text-white",
									children: "Why us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/legal",
									className: "hover:text-white",
									children: "Legal"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "btn-ghost !py-1.5 !text-xs",
								children: "Sign in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "btn-primary !py-1.5 !text-xs",
								children: "Get started"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-24 sm:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.13_250)]" }), "Now in open beta for students in India"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl",
						children: [
							"The focused workspace",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" for serious students."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60",
						children: "Plan your syllabus, run deep-focus sessions, take mock tests, and get guidance from an AI coach — in one calm, professional workspace."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login",
							className: "btn-primary",
							children: ["Get started free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "btn-ghost",
							children: "View dashboard"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-xs text-white/40",
						children: "No credit card required · Free forever plan"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto max-w-6xl px-4 pb-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-strong overflow-hidden rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-white/8 px-4 py-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 text-[11px] text-white/40",
								children: "app.avibecampus.com/dashboard"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 p-5 sm:grid-cols-4 sm:p-6",
						children: [[
							{
								k: "Streak",
								v: "12 days"
							},
							{
								k: "Points",
								v: "1,240"
							},
							{
								k: "Study time",
								v: "18h"
							},
							{
								k: "Avg score",
								v: "78%"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-white/8 bg-white/[0.02] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-white/40",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 text-2xl font-semibold text-white",
								children: s.v
							})]
						}, s.k)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-4 rounded-lg border border-white/8 bg-white/[0.02] p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-white",
									children: "This week's plan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-white/40",
									children: "Nov 10 – Nov 16"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									[
										"Mon",
										"Financial Reporting · Ch. 4",
										"2h"
									],
									[
										"Tue",
										"Taxation · Direct Tax basics",
										"1.5h"
									],
									[
										"Wed",
										"Mock Test — Cost Accounting",
										"1h"
									]
								].map(([d, t, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-md border border-white/6 bg-white/[0.015] px-3 py-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-8 text-[11px] font-medium uppercase tracking-wider text-white/40",
											children: d
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/85",
											children: t
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-white/50",
										children: h
									})]
								}, d))
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-medium uppercase tracking-widest text-white/40",
						children: "Features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-semibold text-white sm:text-4xl",
						children: "Everything you need. Nothing you don't."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4",
					children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[oklch(0.145_0.008_260)] p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-[oklch(0.78_0.12_250)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, {
									size: 16,
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-sm font-semibold text-white",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-white/55",
								children: b.desc
							})
						]
					}, b.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "proof",
				className: "relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "surface rounded-xl px-6 py-10 sm:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-3",
						children: proof.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center sm:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-semibold text-white sm:text-4xl",
								children: p.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm text-white/50",
								children: p.v
							})]
						}, p.v))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface rounded-xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-medium uppercase tracking-widest text-white/40",
								children: "Free"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-3xl font-semibold text-white",
								children: ["₹0", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-normal text-white/40",
									children: " / forever"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/55",
								children: "Everything a student needs to start."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm text-white/70",
								children: [
									"Study planner + focus timer",
									"AI Coach (standard)",
									"Unlimited practice tests",
									"Career roadmap"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 14,
										className: "text-[oklch(0.72_0.13_250)]"
									}), x]
								}, x))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "mt-6 btn-ghost w-full",
								children: "Get started"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-strong relative rounded-xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-4 top-4 rounded-full border border-white/15 bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/70",
								children: "Coming soon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-medium uppercase tracking-widest text-[oklch(0.78_0.12_250)]",
								children: "Premium"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-3xl font-semibold text-white",
								children: ["₹99", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-normal text-white/40",
									children: " / month"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/55",
								children: "For students who want to compete and grow faster."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm text-white/70",
								children: [
									"Weekly live tests + leaderboard",
									"Priority AI Coach",
									"Study buddy matching",
									"Community chat rooms"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 14,
										className: "text-[oklch(0.72_0.13_250)]"
									}), x]
								}, x))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/premium",
								className: "mt-6 btn-primary w-full",
								children: "Explore Premium"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t border-white/8 py-8 text-[11px] text-white/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: 26 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/legal",
									className: "hover:text-white/70",
									children: "Terms & Privacy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-white/70",
									children: "Twitter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-white/70",
									children: "Instagram"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" A Vibe Campus"
						] })
					]
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
