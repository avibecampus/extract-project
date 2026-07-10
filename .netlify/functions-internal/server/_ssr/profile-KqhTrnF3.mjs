import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as LogOut, J as Bell, N as Download, a as User, c as Trash2, p as Shield } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-CQJ3ZbzP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-KqhTrnF3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const [name, setName] = (0, import_react.useState)("Student");
	const [bio, setBio] = (0, import_react.useState)("Chasing CA Foundation · early riser · caffeine.");
	const [career, setCareer] = (0, import_react.useState)("CA");
	const [level, setLevel] = (0, import_react.useState)("Foundation");
	const [date, setDate] = (0, import_react.useState)("2026-11-01");
	const [notif, setNotif] = (0, import_react.useState)(true);
	const [tfa, setTfa] = (0, import_react.useState)(false);
	const [reminder, setReminder] = (0, import_react.useState)("18:00");
	const [confirmDel, setConfirmDel] = (0, import_react.useState)(false);
	const nav = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Profile",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold text-white sm:text-[28px]",
				children: "Profile & Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-white/55",
				children: "Manage your account, preferences and data."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface rounded-lg p-6 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/70",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								size: 24,
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "w-full rounded-md bg-transparent px-2 py-1 text-xl font-semibold text-white outline-none hover:bg-white/[0.03] focus:bg-white/[0.05]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2 text-sm text-white/45",
								children: "student@vibecampus.com"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
								label: "Career goal",
								value: career,
								onChange: setCareer,
								options: [
									"CA",
									"Engineering",
									"Freelancing",
									"PM",
									"Designer",
									"Other"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
								label: "Level",
								value: level,
								onChange: setLevel,
								options: [
									"Foundation",
									"Intermediate",
									"Advanced",
									"Year 1",
									"Year 2",
									"Year 3",
									"Year 4"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Exam date",
								type: "date",
								value: date,
								onChange: setDate
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Reminder time",
								type: "time",
								value: reminder,
								onChange: setReminder
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-[11px] uppercase tracking-wider text-white/45",
							children: "Bio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: bio,
							onChange: (e) => setBio(e.target.value),
							rows: 3,
							className: "w-full rounded-md border border-white/8 bg-white/[0.02] p-3 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-md border border-white/8 bg-white/[0.02] p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between text-[11px] text-white/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "uppercase tracking-wider text-white/45",
									children: "Progress"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-white",
									children: "Level 4 · 62%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-white/8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-[oklch(0.64_0.16_255)]",
									style: { width: "62%" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-white/55",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white",
										children: "12"
									}), "Day streak"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white",
										children: "14"
									}), "Tests taken"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white",
										children: "18"
									}), "Milestones"] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-primary mt-6",
						children: "Save changes"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "Account",
						icon: Shield,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full rounded-md border border-white/8 px-3 py-2 text-left text-sm text-white/75 hover:border-white/20 hover:text-white",
								children: "Change password"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Two-factor auth",
								checked: tfa,
								onChange: setTfa
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-white/45",
								children: "Last login · today, 09:12"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Preferences",
						icon: Bell,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Email notifications",
							checked: notif,
							onChange: setNotif
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "Data & Privacy",
						icon: Download,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex w-full items-center gap-2 rounded-md border border-white/8 px-3 py-2 text-left text-sm text-white/75 hover:border-white/20 hover:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 13 }), " Export my data"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal",
								className: "block text-[11px] text-[oklch(0.78_0.12_250)] hover:underline",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal",
								className: "block text-[11px] text-[oklch(0.78_0.12_250)] hover:underline",
								children: "Terms of Service"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "Danger zone",
						icon: LogOut,
						danger: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => nav({ to: "/" }),
							className: "inline-flex w-full items-center gap-2 rounded-md border border-white/8 px-3 py-2 text-left text-sm text-white/85 hover:border-white/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 13 }), " Sign out"]
						}), !confirmDel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setConfirmDel(true),
							className: "inline-flex w-full items-center gap-2 rounded-md border border-[oklch(0.66_0.20_25)]/30 px-3 py-2 text-left text-sm text-[oklch(0.78_0.16_25)] hover:border-[oklch(0.66_0.20_25)]/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 13 }), " Delete account"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-[oklch(0.66_0.20_25)]/40 bg-[oklch(0.66_0.20_25)]/10 p-3 text-xs text-[oklch(0.85_0.10_25)]",
							children: ["Are you sure? This is permanent.", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-md bg-[oklch(0.55_0.22_25)] px-3 py-1 text-white",
									children: "Delete"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setConfirmDel(false),
									className: "rounded-md border border-white/15 px-3 py-1",
									children: "Cancel"
								})]
							})]
						})]
					})
				]
			})]
		})]
	});
}
function Field({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-[11px] uppercase tracking-wider text-white/45",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]"
		})]
	});
}
function FieldSelect({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-[11px] uppercase tracking-wider text-white/45",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
		})]
	});
}
function Toggle({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between text-sm text-white/80",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(!checked),
			className: `relative h-5 w-9 rounded-full transition ${checked ? "bg-[oklch(0.64_0.16_255)]" : "bg-white/12"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${checked ? "left-4" : "left-0.5"}` })
		})]
	});
}
function Card({ title, icon: Icon, children, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `surface rounded-lg p-5 ${danger ? "border-[oklch(0.66_0.20_25)]/20" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-2 text-sm font-semibold text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 14,
					strokeWidth: 1.75
				}),
				" ",
				title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children
		})]
	});
}
//#endregion
export { Profile as component };
