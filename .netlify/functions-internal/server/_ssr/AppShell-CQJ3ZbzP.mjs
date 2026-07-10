import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Logo, t as BackgroundFX } from "./BackgroundFX-llEyPkz5.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Menu, F as Compass, I as Command, O as LayoutDashboard, P as Crown, R as ClipboardCheck, W as CalendarClock, a as User, f as Sparkles, g as Search, n as X, w as MessageSquare } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-CQJ3ZbzP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var commands = [
	{
		to: "/dashboard",
		label: "Go to Dashboard",
		hint: "Overview"
	},
	{
		to: "/study-session",
		label: "Start a Study Session",
		hint: "Focus"
	},
	{
		to: "/tests",
		label: "Practice Tests",
		hint: "GFYTE"
	},
	{
		to: "/coach",
		label: "Ask the AI Coach",
		hint: "Chat"
	},
	{
		to: "/career",
		label: "View Career Roadmap",
		hint: "Path"
	},
	{
		to: "/growth",
		label: "Growth Library",
		hint: "Learn"
	},
	{
		to: "/premium",
		label: "Premium features",
		hint: "Upgrade"
	},
	{
		to: "/profile",
		label: "Profile & Settings",
		hint: "Account"
	}
];
function CommandPalette() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const nav = useNavigate();
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen((v) => !v);
			}
			if (e.key === "Escape") setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const filtered = commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-start justify-center bg-slate-950/70 p-4 pt-24 backdrop-blur-sm animate-tilt-in",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong w-full max-w-lg overflow-hidden rounded-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-white/10 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						className: "text-white/50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Type a command or search…",
						className: "flex-1 bg-transparent text-sm text-white placeholder-white/40 outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
						className: "rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60",
						children: "ESC"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "max-h-80 overflow-y-auto p-2",
				children: [filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setOpen(false);
						nav({ to: c.to });
					},
					className: "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-white/85 hover:bg-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-white/40",
						children: c.hint
					})]
				}) }, c.to)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-3 py-4 text-center text-xs text-white/40",
					children: "No matches"
				})]
			})]
		})
	});
}
var nav = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/study-session",
		label: "Study",
		icon: CalendarClock
	},
	{
		to: "/career",
		label: "Career",
		icon: Compass
	},
	{
		to: "/tests",
		label: "Tests",
		icon: ClipboardCheck
	},
	{
		to: "/coach",
		label: "Coach",
		icon: MessageSquare
	},
	{
		to: "/growth",
		label: "Growth",
		icon: Sparkles
	},
	{
		to: "/premium",
		label: "Premium",
		icon: Crown
	}
];
function AppShell({ children, title }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundFX, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-white/8 bg-[oklch(0.125_0.008_260)]/85 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md border border-white/10 p-1.5 text-white/80 lg:hidden",
								onClick: () => setOpen(!open),
								"aria-label": "Toggle menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
							})]
						}),
						title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden text-xs font-medium text-white/50 md:block",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => window.dispatchEvent(new KeyboardEvent("keydown", {
									key: "k",
									metaKey: true
								})),
								className: "hidden items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/55 hover:bg-white/[0.06] hover:text-white/80 sm:inline-flex",
								"aria-label": "Open command palette",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { size: 11 }),
									" Quick jump ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "rounded bg-white/10 px-1 text-[10px]",
										children: "⌘K"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/profile",
								"aria-label": "Profile",
								className: "grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-[oklch(0.19_0.010_260)] text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 14 })
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: `${open ? "block" : "hidden"} lg:block fixed inset-0 top-14 z-30 w-64 shrink-0 bg-[oklch(0.125_0.008_260)]/98 p-4 backdrop-blur-xl lg:static lg:inset-auto lg:top-auto lg:bg-transparent lg:p-0`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "sticky top-20 space-y-0.5 rounded-lg border border-white/8 bg-white/[0.02] p-2",
						children: nav.map((item) => {
							const active = pathname.startsWith(item.to);
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onClick: () => setOpen(false),
								className: `relative flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] font-medium transition ${active ? "bg-white/[0.06] text-white" : "text-white/60 hover:bg-white/[0.03] hover:text-white/90"}`,
								children: [
									active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r bg-[oklch(0.72_0.13_250)]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										size: 15,
										strokeWidth: 1.75
									}),
									item.label
								]
							}, item.to);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-w-0 flex-1 animate-fade-up",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-white/8 py-6 text-center text-[11px] text-white/40",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" A Vibe Campus · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/legal",
						className: "hover:text-white/70",
						children: "Legal"
					})
				]
			})
		]
	});
}
//#endregion
export { AppShell as t };
