import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BackgroundFX-llEyPkz5.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ size = 32, showText = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid shrink-0 place-items-center rounded-lg",
			style: {
				width: size,
				height: size
			},
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "h-full w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "1",
						y: "1",
						width: "30",
						height: "30",
						rx: "8",
						fill: "oklch(0.19 0.010 260)",
						stroke: "oklch(1 0 0 / 0.12)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M9 10 L16 22 L23 10",
						stroke: "oklch(0.72 0.13 250)",
						strokeWidth: "2.2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "7",
						r: "1.4",
						fill: "oklch(0.72 0.13 250)"
					})
				]
			})
		}), showText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[15px] font-semibold tracking-tight text-white",
			children: ["A Vibe ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-white/70",
				children: "Campus"
			})]
		})]
	});
}
function BackgroundFX() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40",
			style: { background: "radial-gradient(ellipse, oklch(0.55 0.14 255 / 0.35), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "absolute inset-0 h-full w-full opacity-[0.035]",
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
					id: "grid",
					width: "56",
					height: "56",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 56 0 L 0 0 0 56",
						fill: "none",
						stroke: "white",
						strokeWidth: "0.5"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "gfade",
					cx: "50%",
					cy: "35%",
					r: "65%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "white",
						stopOpacity: "1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "white",
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
					id: "gmask",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#gfade)"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: "url(#grid)",
				mask: "url(#gmask)"
			})]
		})]
	});
}
//#endregion
export { Logo as n, BackgroundFX as t };
