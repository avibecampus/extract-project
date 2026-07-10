import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CzOSO0NL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DvrWjxeg.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-md rounded-2xl p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-6xl font-bold text-white",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-white/60",
					children: "This page drifted off the campus map."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-md rounded-2xl p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold text-white",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/60",
					children: "Try refreshing, or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "A Vibe Campus — Study smarter, grow faster" },
			{
				name: "description",
				content: "A Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career."
			},
			{
				property: "og:title",
				content: "A Vibe Campus — Study smarter, grow faster"
			},
			{
				property: "og:description",
				content: "A Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "A Vibe Campus — Study smarter, grow faster"
			},
			{
				name: "twitter:description",
				content: "A Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f1c168ec-b7b2-438f-9215-e17dcae62243/id-preview-ed91ef0b--32970b97-9460-4bbd-a225-845e17f2301b.lovable.app-1783602333271.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f1c168ec-b7b2-438f-9215-e17dcae62243/id-preview-ed91ef0b--32970b97-9460-4bbd-a225-845e17f2301b.lovable.app-1783602333271.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$10 = () => import("./tests-Dp_7z7Cd.mjs");
var Route$10 = createFileRoute("/tests")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./study-session-CmjWnk1Y.mjs");
var Route$9 = createFileRoute("/study-session")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./profile-KqhTrnF3.mjs");
var Route$8 = createFileRoute("/profile")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./premium-y44dzP7-.mjs");
var Route$7 = createFileRoute("/premium")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./login-Dnveslj5.mjs");
var Route$6 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./legal-Dm5RvK0_.mjs");
var Route$5 = createFileRoute("/legal")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./growth-CW6gMU4Y.mjs");
var Route$4 = createFileRoute("/growth")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard-CYkjLxgv.mjs");
var Route$3 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./coach-JeHcwiBt.mjs");
var Route$2 = createFileRoute("/coach")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./career-Bh_-rL55.mjs");
var Route$1 = createFileRoute("/career")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routes-C_x_mCIV.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [
		{ title: "A Vibe Campus — The student growth OS" },
		{
			name: "description",
			content: "A Vibe Campus is a focused workspace for students — study sessions, an AI coach, mock tests, and a career roadmap in one calm, professional hub."
		},
		{
			property: "og:title",
			content: "A Vibe Campus — The student growth OS"
		},
		{
			property: "og:description",
			content: "A focused workspace for students — study sessions, AI coach, mock tests, and a career roadmap."
		}
	] })
});
var TestsRoute = Route$10.update({
	id: "/tests",
	path: "/tests",
	getParentRoute: () => Route$11
});
var StudySessionRoute = Route$9.update({
	id: "/study-session",
	path: "/study-session",
	getParentRoute: () => Route$11
});
var ProfileRoute = Route$8.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$11
});
var PremiumRoute = Route$7.update({
	id: "/premium",
	path: "/premium",
	getParentRoute: () => Route$11
});
var LoginRoute = Route$6.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$11
});
var LegalRoute = Route$5.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$11
});
var GrowthRoute = Route$4.update({
	id: "/growth",
	path: "/growth",
	getParentRoute: () => Route$11
});
var DashboardRoute = Route$3.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$11
});
var CoachRoute = Route$2.update({
	id: "/coach",
	path: "/coach",
	getParentRoute: () => Route$11
});
var CareerRoute = Route$1.update({
	id: "/career",
	path: "/career",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	CareerRoute,
	CoachRoute,
	DashboardRoute,
	GrowthRoute,
	LegalRoute,
	LoginRoute,
	PremiumRoute,
	ProfileRoute,
	StudySessionRoute,
	TestsRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
