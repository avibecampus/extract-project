import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Mic, F as Compass, K as Brain, b as Plus, f as Sparkles, h as Send } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coach-JeHcwiBt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var modes = [
	{
		id: "doubt",
		label: "Doubt solving",
		icon: Brain
	},
	{
		id: "career",
		label: "Career advice",
		icon: Compass
	},
	{
		id: "guidance",
		label: "Guidance",
		icon: Sparkles
	}
];
function Coach() {
	const [mode, setMode] = (0, import_react.useState)("doubt");
	const [messages, setMessages] = (0, import_react.useState)([{
		from: "ai",
		text: "I'm your coach at A Vibe Campus. Ask a doubt, get career direction, or just tell me what's on your mind.",
		time: "now"
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	function send(text) {
		const t = (text ?? input).trim();
		if (!t) return;
		setMessages((m) => [...m, {
			from: "me",
			text: t,
			time: "now"
		}]);
		setInput("");
		setTimeout(() => {
			setMessages((m) => [...m, {
				from: "ai",
				text: "Great question — I'd approach this in three parts. (Placeholder response — connect the /coach endpoint to make me answer for real.)",
				time: "now"
			}]);
		}, 700);
	}
	const prompts = {
		doubt: [
			"Explain marginal costing",
			"How does GST input credit work?",
			"Difference between IFRS & Ind AS"
		],
		career: [
			"Should I pair CA with CFA?",
			"How do I break into product management?",
			"How to freelance while studying?"
		],
		guidance: [
			"I feel burnt out",
			"How do I build a study streak?",
			"Motivate me for tomorrow's mock"
		]
	}[mode];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "AI Coach",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold text-white sm:text-[28px]",
					children: "AI Study Coach"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-white/55",
					children: "Get help with doubts, career direction and daily motivation."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMessages([{
						from: "ai",
						text: "New conversation started. What's up?",
						time: "now"
					}]),
					className: "inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:border-white/20 hover:text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 13 }), " New chat"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 inline-flex rounded-lg border border-white/8 bg-white/[0.02] p-0.5",
				children: modes.map((m) => {
					const active = m.id === mode;
					const Icon = m.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMode(m.id),
						className: `inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${active ? "bg-white/[0.06] text-white" : "text-white/55 hover:text-white/80"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 13 }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: m.label
							})
						]
					}, m.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface flex h-[68vh] flex-col rounded-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 space-y-3 overflow-y-auto p-4",
						children: messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex ${m.from === "me" ? "justify-end" : "justify-start"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${m.from === "me" ? "bg-[oklch(0.64_0.16_255)] text-white" : "border border-white/8 bg-white/[0.02] text-white/90"}`,
								children: [m.text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mt-1 text-[10px] ${m.from === "me" ? "text-white/70" : "text-white/40"}`,
									children: m.time
								})]
							})
						}, i))
					}),
					messages.length <= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-white/8 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-[11px] uppercase tracking-wider text-white/40",
							children: "Try asking"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: prompts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => send(p),
								className: "rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/75 hover:border-white/20 hover:text-white",
								children: p
							}, p))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							send();
						},
						className: "flex items-center gap-2 border-t border-white/8 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: input,
								onChange: (e) => setInput(e.target.value),
								placeholder: "Message your coach…",
								className: "flex-1 rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Voice",
								className: "grid h-9 w-9 place-items-center rounded-md border border-white/8 text-white/60 hover:border-white/20 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { size: 14 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								"aria-label": "Send",
								className: "grid h-9 w-9 place-items-center rounded-md bg-[oklch(0.64_0.16_255)] text-white hover:bg-[oklch(0.70_0.16_255)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 14 })
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Coach as component };
