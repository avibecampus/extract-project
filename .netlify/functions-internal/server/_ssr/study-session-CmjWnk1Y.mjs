import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as ChevronRight, S as Pause, V as ChevronLeft, b as Plus, d as Square, x as Play, z as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/study-session-CmjWnk1Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudySession() {
	const today = /* @__PURE__ */ new Date();
	const [month, setMonth] = (0, import_react.useState)(today.getMonth());
	const [year, setYear] = (0, import_react.useState)(today.getFullYear());
	const [selected, setSelected] = (0, import_react.useState)(today.toISOString().slice(0, 10));
	const [topics, setTopics] = (0, import_react.useState)([{
		id: "1",
		name: "Taxation Ch.4",
		subject: "Taxation",
		date: today.toISOString().slice(0, 10),
		hours: 2,
		reminder: "18:00",
		notes: ""
	}, {
		id: "2",
		name: "Marginal Costing",
		subject: "Cost",
		date: today.toISOString().slice(0, 10),
		hours: 1.5,
		reminder: "20:00",
		notes: ""
	}]);
	const [running, setRunning] = (0, import_react.useState)(false);
	const [seconds, setSeconds] = (0, import_react.useState)(0);
	const [activeTopic, setActiveTopic] = (0, import_react.useState)(null);
	const tick = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (running) tick.current = window.setInterval(() => setSeconds((s) => s + 1), 1e3);
		return () => {
			if (tick.current) window.clearInterval(tick.current);
		};
	}, [running]);
	const mmss = (0, import_react.useMemo)(() => {
		return `${String(Math.floor(seconds / 3600)).padStart(2, "0")}:${String(Math.floor(seconds % 3600 / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
	}, [seconds]);
	const first = new Date(year, month, 1);
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const startBlank = first.getDay();
	const cells = [...Array(startBlank).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
	const monthName = first.toLocaleString("en", { month: "long" });
	function iso(d) {
		return new Date(year, month, d).toISOString().slice(0, 10);
	}
	function hasTopic(d) {
		return topics.some((t) => t.date === iso(d));
	}
	const todaysTopics = topics.filter((t) => t.date === selected);
	const [f, setF] = (0, import_react.useState)({
		name: "",
		subject: "General",
		date: selected,
		hours: 1,
		reminder: "18:00",
		notes: ""
	});
	(0, import_react.useEffect)(() => setF((v) => ({
		...v,
		date: selected
	})), [selected]);
	function addTopic(e) {
		e.preventDefault();
		if (!f.name) return;
		setTopics((t) => [...t, {
			...f,
			id: crypto.randomUUID()
		}]);
		setF({
			name: "",
			subject: "General",
			date: selected,
			hours: 1,
			reminder: "18:00",
			notes: ""
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Study Session",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold text-white sm:text-[28px]",
					children: "Study Session"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-white/55",
					children: today.toDateString()
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface rounded-lg p-5 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Previous month",
									onClick: () => {
										const m = month - 1;
										if (m < 0) {
											setMonth(11);
											setYear(year - 1);
										} else setMonth(m);
									},
									className: "rounded-md border border-white/10 p-1.5 text-white/70 hover:border-white/20 hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 14 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm font-medium text-white",
									children: [
										monthName,
										" ",
										year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Next month",
									onClick: () => {
										const m = month + 1;
										if (m > 11) {
											setMonth(0);
											setYear(year + 1);
										} else setMonth(m);
									},
									className: "rounded-md border border-white/10 p-1.5 text-white/70 hover:border-white/20 hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 14 })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-wider text-white/35",
							children: [
								"S",
								"M",
								"T",
								"W",
								"T",
								"F",
								"S"
							].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-1",
								children: d
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 grid grid-cols-7 gap-1",
							children: cells.map((d, i) => {
								if (!d) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, i);
								const dstr = iso(d);
								const isSel = dstr === selected;
								const has = hasTopic(d);
								const isToday = dstr === today.toISOString().slice(0, 10);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelected(dstr),
									className: `aspect-square rounded-md text-xs font-medium transition ${isSel ? "bg-[oklch(0.64_0.16_255)] text-white" : has ? "border border-[oklch(0.72_0.13_250)]/40 text-white hover:bg-white/[0.04]" : isToday ? "border border-white/15 text-white" : "text-white/60 hover:bg-white/[0.04]"}`,
									children: d
								}, i);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-4 text-[11px] text-white/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									color: "bg-[oklch(0.64_0.16_255)]",
									label: "Selected"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									color: "bg-[oklch(0.72_0.13_250)]/40",
									label: "Scheduled"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									color: "bg-white/20",
									label: "Today"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-strong flex flex-col rounded-lg p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-widest text-white/40",
							children: "Focus timer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-4 font-mono text-4xl font-semibold text-white tabular-nums sm:text-5xl",
							children: mmss
						}),
						activeTopic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-white",
								children: activeTopic.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 inline-block rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/60",
								children: activeTopic.subject
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-[11px] text-white/40",
							children: "No topic selected"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex justify-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Start",
									onClick: () => setRunning(true),
									className: "grid h-10 w-10 place-items-center rounded-md bg-[oklch(0.64_0.16_255)] text-white hover:bg-[oklch(0.70_0.16_255)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Pause",
									onClick: () => setRunning(false),
									className: "grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white hover:border-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 16 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Reset",
									onClick: () => {
										setRunning(false);
										setSeconds(0);
									},
									className: "grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white hover:border-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { size: 16 })
								})
							]
						}),
						seconds > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setRunning(false);
								setSeconds(0);
								setActiveTopic(null);
							},
							className: "mt-3 inline-flex items-center justify-center gap-1 rounded-md border border-[oklch(0.74_0.14_155)]/40 px-3 py-2 text-[11px] font-medium text-[oklch(0.82_0.13_155)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 13 }), " Log as complete"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: addTopic,
					className: "surface rounded-lg p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-4 text-sm font-semibold text-white",
							children: ["Add topic for ", selected]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Topic",
									value: f.name,
									onChange: (v) => setF({
										...f,
										name: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
									label: "Subject",
									value: f.subject,
									onChange: (v) => setF({
										...f,
										subject: v
									}),
									options: [
										"General",
										"Taxation",
										"Cost",
										"FR",
										"Audit",
										"Law",
										"Math",
										"Physics"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Date",
									type: "date",
									value: f.date,
									onChange: (v) => setF({
										...f,
										date: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Duration (h)",
									type: "number",
									value: String(f.hours),
									onChange: (v) => setF({
										...f,
										hours: Number(v)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Reminder",
									type: "time",
									value: f.reminder,
									onChange: (v) => setF({
										...f,
										reminder: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Notes",
									value: f.notes,
									onChange: (v) => setF({
										...f,
										notes: v
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "btn-primary mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Save topic"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface rounded-lg p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-3 text-sm font-semibold text-white",
							children: ["Schedule · ", selected]
						}),
						todaysTopics.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md border border-dashed border-white/10 p-6 text-center text-sm text-white/45",
							children: "Nothing scheduled. Add a topic to begin."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: todaysTopics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-md border border-white/8 bg-white/[0.02] p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-sm font-medium text-white",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-0.5 text-[11px] text-white/50",
										children: [
											t.subject,
											" · ",
											t.hours,
											"h · ",
											t.reminder
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setActiveTopic(t);
										setSeconds(0);
										setRunning(true);
									},
									className: "rounded-md border border-white/10 px-3 py-1.5 text-[11px] font-medium text-white hover:border-white/20",
									children: "Start"
								})]
							}, t.id))
						})
					]
				})]
			})
		]
	});
}
function Legend({ color, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${color}` }), label]
	});
}
function Input({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-[11px] uppercase tracking-wider text-white/45",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]"
		})]
	});
}
function SelectField({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-[11px] uppercase tracking-wider text-white/45",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
		})]
	});
}
//#endregion
export { StudySession as component };
