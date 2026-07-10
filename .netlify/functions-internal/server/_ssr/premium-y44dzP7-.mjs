import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { H as Check, P as Crown, T as MessageCircle, U as CalendarDays, i as Users, o as Trophy, t as Zap, y as Radio } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/premium-y44dzP7-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		icon: CalendarDays,
		title: "Weekly live tests",
		desc: "Compete every week with timed live exams."
	},
	{
		icon: Trophy,
		title: "Leaderboard",
		desc: "See where you rank across the campus."
	},
	{
		icon: Users,
		title: "Buddy matching",
		desc: "Get paired with a study partner who matches your goals."
	},
	{
		icon: Radio,
		title: "Live campus pulse",
		desc: "Real-time feed of what students are studying."
	},
	{
		icon: MessageCircle,
		title: "Community chat",
		desc: "Topic-based rooms with mentors and peers."
	},
	{
		icon: Zap,
		title: "Priority AI Coach",
		desc: "Faster, deeper answers with unlimited chats."
	}
];
var inclusive = [
	"Weekly live tests + leaderboard",
	"Study buddy matching",
	"Community chat rooms",
	"Priority AI Coach (unlimited)",
	"Advanced analytics + exports",
	"Early access to new features"
];
function Premium() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [ok, setOk] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Premium",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-strong relative overflow-hidden rounded-lg p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.13_250)]/30 bg-[oklch(0.72_0.13_250)]/10 px-2.5 py-1 text-[11px] font-medium text-[oklch(0.78_0.12_250)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { size: 12 }), " Premium — Coming soon"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-3xl font-semibold text-white sm:text-4xl",
							children: "Everything free, plus what makes you compete."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg text-sm text-white/60",
							children: "Premium unlocks the community layer of A Vibe Campus — live tests, ranked play, buddies and priority coaching."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl font-semibold text-white",
								children: "₹99"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-white/50",
								children: "/ month"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 sm:grid-cols-2",
							children: inclusive.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm text-white/75",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 14,
										className: "mt-0.5 shrink-0 text-[oklch(0.72_0.13_250)]"
									}),
									" ",
									x
								]
							}, x))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface rounded-lg p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-white",
							children: "Get notified at launch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-white/55",
							children: "We'll email you the day Premium goes live."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								if (email) setOk(true);
							},
							className: "mt-4 flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: email,
								onChange: (e) => setEmail(e.target.value),
								type: "email",
								required: true,
								placeholder: "you@campus.com",
								className: "rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "btn-primary",
								children: "Notify me"
							})]
						}),
						ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 rounded-md border border-[oklch(0.74_0.14_155)]/30 bg-[oklch(0.74_0.14_155)]/10 px-3 py-2 text-xs text-[oklch(0.82_0.13_155)]",
							children: "You're on the list. We'll ping you first."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-sm font-semibold text-white",
				children: "What's included"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-lg border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[oklch(0.145_0.008_260)] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.02] text-white/70",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
								size: 14,
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-[14px] font-semibold text-white",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-white/55",
							children: f.desc
						})
					]
				}, f.title))
			})
		]
	});
}
//#endregion
export { Premium as component };
