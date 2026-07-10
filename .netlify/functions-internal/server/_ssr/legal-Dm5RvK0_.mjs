import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Logo, t as BackgroundFX } from "./BackgroundFX-llEyPkz5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Z as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-Dm5RvK0_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"Terms of Service",
	"Privacy Policy",
	"Cookie Policy"
];
function Legal() {
	const [tab, setTab] = (0, import_react.useState)("Terms of Service");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundFX, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto max-w-4xl px-4 pb-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-wrap items-end justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-semibold text-white",
							children: "Legal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-white/45",
							children: "v1.0 · Last updated 2026-01-01"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 inline-flex rounded-lg border border-white/8 bg-white/[0.02] p-0.5",
						children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTab(t),
							className: `rounded-md px-3 py-1.5 text-xs font-medium transition ${tab === t ? "bg-white/[0.06] text-white" : "text-white/55 hover:text-white/80"}`,
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-strong space-y-4 rounded-lg p-6 text-[15px] leading-relaxed text-white/70 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold text-white",
								children: tab
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"This is placeholder legal copy for A Vibe Campus. Replace with your real ",
								tab.toLowerCase(),
								" before launch."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum dictum orci, non commodo felis facilisis nec. Vivamus varius, urna eu ultrices consectetur." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "pt-2 text-base font-semibold text-white",
								children: "1. Overview"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "By using A Vibe Campus, you agree to the terms outlined here. If you disagree with any part, please discontinue use of the platform." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "pt-2 text-base font-semibold text-white",
								children: "2. Your data"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We store the minimum data required to power your learning experience — study sessions, test scores, streaks and preferences." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "pt-2 text-base font-semibold text-white",
								children: "3. Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Reach us at hello@vibecampus.example — we respond within 3 business days." })
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Legal as component };
