import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Logo, t as BackgroundFX } from "./BackgroundFX-llEyPkz5.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as EyeOff, Z as ArrowLeft, j as Eye, z as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Dnveslj5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [mode, setMode] = (0, import_react.useState)("signup");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [pw, setPw] = (0, import_react.useState)("");
	const [career, setCareer] = (0, import_react.useState)("");
	const [level, setLevel] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)("");
	const [terms, setTerms] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const canComplete = career && level && date && terms;
	function submitAuth(e) {
		e.preventDefault();
		setError("");
		if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email.");
		if (pw.length < 6) return setError("Password must be at least 6 characters.");
		setStep(2);
	}
	function completeOnboarding() {
		setStep(3);
		setTimeout(() => navigate({ to: "/dashboard" }), 1400);
	}
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex max-w-md items-center justify-center px-4 py-8 sm:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-strong w-full rounded-lg p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex items-center justify-center gap-2",
							children: [
								1,
								2,
								3
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1 rounded-full transition-all ${step >= n ? "w-8 bg-[oklch(0.64_0.16_255)]" : "w-4 bg-white/12"}` }, n))
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-semibold text-white",
								children: mode === "signup" ? "Create your account" : "Welcome back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/55",
								children: mode === "signup" ? "Join in seconds." : "Sign back into A Vibe Campus."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: submitAuth,
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block text-[11px] uppercase tracking-wider text-white/45",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										className: "w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]",
										placeholder: "you@campus.com"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block text-[11px] uppercase tracking-wider text-white/45",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPw ? "text" : "password",
											required: true,
											value: pw,
											onChange: (e) => setPw(e.target.value),
											className: "w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 pr-10 text-sm text-white placeholder-white/35 outline-none focus:border-[oklch(0.72_0.13_250)]",
											placeholder: "••••••••"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPw(!showPw),
											"aria-label": "Toggle password visibility",
											className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-white/50 hover:bg-white/[0.05] hover:text-white",
											children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 14 })
										})]
									})] }),
									error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-md border border-[oklch(0.66_0.20_25)]/40 bg-[oklch(0.66_0.20_25)]/10 px-3 py-2 text-xs text-[oklch(0.85_0.10_25)]",
										children: error
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "btn-primary w-full",
										children: mode === "signup" ? "Sign up" : "Log in"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setMode(mode === "signup" ? "login" : "signup"),
											className: "text-[oklch(0.78_0.12_250)] hover:underline",
											children: mode === "signup" ? "Have an account? Log in" : "New here? Sign up"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "text-white/50 hover:text-white",
											children: "Forgot password?"
										})]
									})
								]
							})
						] }),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-semibold text-white",
								children: "Tell us about you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/55",
								children: "This tunes your dashboard, coach and roadmap."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Career goal",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: career,
											onChange: (e) => setCareer(e.target.value),
											className: "w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Choose one…"
											}), [
												"CA",
												"Engineering",
												"Freelancing",
												"Product Manager",
												"Designer",
												"Other"
											].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Level",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: level,
											onChange: (e) => setLevel(e.target.value),
											className: "w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Choose level…"
											}), [
												"Foundation",
												"Intermediate",
												"Advanced",
												"Year 1",
												"Year 2",
												"Year 3",
												"Year 4"
											].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Exam date",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											value: date,
											onChange: (e) => setDate(e.target.value),
											className: "w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-start gap-2 text-xs text-white/65",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: terms,
											onChange: (e) => setTerms(e.target.checked),
											className: "mt-0.5 accent-[oklch(0.64_0.16_255)]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"I agree to the ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/legal",
												className: "text-[oklch(0.78_0.12_250)] hover:underline",
												children: "Terms & Privacy"
											}),
											"."
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										disabled: !canComplete,
										onClick: completeOnboarding,
										className: "btn-primary w-full",
										children: "Complete setup"
									})
								]
							})
						] }),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto grid h-14 w-14 place-items-center rounded-full border border-[oklch(0.74_0.14_155)]/30 bg-[oklch(0.74_0.14_155)]/10 text-[oklch(0.82_0.13_155)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 26 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 text-2xl font-semibold text-white",
									children: "You're in."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-white/55",
									children: "Taking you to your dashboard…"
								})
							]
						})
					]
				})
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-[11px] uppercase tracking-wider text-white/45",
		children: label
	}), children] });
}
//#endregion
export { LoginPage as component };
