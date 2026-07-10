import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { X as ArrowRight, Z as ArrowLeft, l as Timer, v as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tests-Dp_7z7Cd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var testsList = [
	{
		id: "t1",
		name: "Financial Reporting — Mock 1",
		subject: "FR",
		questions: 30,
		best: 82,
		difficulty: "Medium"
	},
	{
		id: "t2",
		name: "Taxation — Direct Tax",
		subject: "Tax",
		questions: 25,
		best: 68,
		difficulty: "Hard"
	},
	{
		id: "t3",
		name: "Cost Accounting",
		subject: "Cost",
		questions: 20,
		best: 90,
		difficulty: "Easy"
	},
	{
		id: "t4",
		name: "Audit Essentials",
		subject: "Audit",
		questions: 30,
		best: null,
		difficulty: "Medium"
	}
];
var sampleQs = Array.from({ length: 5 }, (_, i) => ({
	q: `Sample question ${i + 1}: Which statement is true?`,
	options: [
		"Option A",
		"Option B",
		"Option C",
		"Option D"
	],
	correct: i % 4
}));
function Tests() {
	const [stage, setStage] = (0, import_react.useState)("list");
	const [subject, setSubject] = (0, import_react.useState)("All");
	const [diff, setDiff] = (0, import_react.useState)("All");
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)([]);
	const [time, setTime] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (stage !== "test") return;
		const t = setInterval(() => setTime((s) => s + 1), 1e3);
		return () => clearInterval(t);
	}, [stage]);
	const filtered = testsList.filter((t) => (subject === "All" || t.subject === subject) && (diff === "All" || t.difficulty === diff));
	const score = answers.reduce((acc, a, i) => acc + (a === sampleQs[i]?.correct ? 1 : 0), 0);
	const pct = Math.round(score / sampleQs.length * 100);
	function start() {
		setStage("test");
		setIdx(0);
		setAnswers([]);
		setTime(0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Practice Tests",
		children: [
			stage === "list" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold text-white sm:text-[28px]",
						children: "Practice Tests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-white/55",
						children: "Mock exams with instant analytics."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: subject,
							onChange: (e) => setSubject(e.target.value),
							className: "rounded-md border border-white/10 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white/80 outline-none focus:border-[oklch(0.72_0.13_250)]",
							children: [
								"All",
								"FR",
								"Tax",
								"Cost",
								"Audit"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: diff,
							onChange: (e) => setDiff(e.target.value),
							className: "rounded-md border border-white/10 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white/80 outline-none focus:border-[oklch(0.72_0.13_250)]",
							children: [
								"All",
								"Easy",
								"Medium",
								"Hard"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface rounded-lg p-5 transition hover:border-white/20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/60",
									children: t.subject
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-md px-2 py-0.5 text-[11px] ${t.difficulty === "Easy" ? "border border-[oklch(0.74_0.14_155)]/30 text-[oklch(0.82_0.13_155)]" : t.difficulty === "Medium" ? "border border-white/10 text-white/60" : "border border-[oklch(0.66_0.20_25)]/40 text-[oklch(0.78_0.16_25)]"}`,
									children: t.difficulty
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-[15px] font-semibold text-white",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 text-[11px] text-white/45",
								children: [
									t.questions,
									" questions · Best ",
									t.best ? `${t.best}%` : "—"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: start,
								className: "btn-primary mt-5 w-full",
								children: "Start Test"
							})
						]
					}, t.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center text-[11px] text-white/35",
					children: "Powered by Good for You Test Engine"
				})
			] }),
			stage === "test" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-strong mx-auto max-w-3xl rounded-lg p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-white/70",
							children: [
								"Question ",
								idx + 1,
								" of ",
								sampleQs.length
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 text-[11px] text-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { size: 12 }),
								" ",
								Math.floor(time / 60),
								":",
								String(time % 60).padStart(2, "0")
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 h-1 overflow-hidden rounded-full bg-white/8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-[oklch(0.64_0.16_255)] transition-all",
							style: { width: `${(idx + 1) / sampleQs.length * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold text-white",
						children: sampleQs[idx].q
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-2",
						children: sampleQs[idx].options.map((o, i) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									const next = [...answers];
									next[idx] = i;
									setAnswers(next);
								},
								className: `rounded-md border p-3 text-left text-sm transition ${answers[idx] === i ? "border-[oklch(0.72_0.13_250)] bg-white/[0.04] text-white" : "border-white/8 bg-white/[0.02] text-white/75 hover:border-white/20"}`,
								children: o
							}, i);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: idx === 0,
							onClick: () => setIdx(idx - 1),
							className: "btn-ghost !py-2 disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Prev"]
						}), idx < sampleQs.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIdx(idx + 1),
							className: "btn-primary !py-2",
							children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStage("result"),
							className: "btn-primary !py-2",
							children: "Submit"
						})]
					})
				]
			}),
			stage === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-strong mx-auto max-w-2xl rounded-lg p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-widest text-white/40",
						children: "Your score"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-4 text-6xl font-semibold text-white",
						children: [pct, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-white/55",
						children: [
							"Time · ",
							Math.floor(time / 60),
							":",
							String(time % 60).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Correct",
								value: String(score)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Wrong",
								value: String(sampleQs.length - score)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "Total",
								value: String(sampleQs.length)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: start,
							className: "btn-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 14 }), " Retake"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStage("list"),
							className: "btn-ghost",
							children: "Back to tests"
						})]
					})
				]
			})
		]
	});
}
function Metric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-white/8 bg-white/[0.02] p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-2xl font-semibold text-white",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] text-white/50",
			children: label
		})]
	});
}
//#endregion
export { Tests as component };
