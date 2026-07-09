import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-2xl p-8 text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="mt-3 text-sm text-white/60">This page drifted off the campus map.</p>
        <Link to="/" className="mt-6 inline-flex rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-2xl p-8 text-center">
        <h1 className="text-xl font-semibold text-white">Something went wrong</h1>
        <p className="mt-2 text-sm text-white/60">Try refreshing, or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
            Try again
          </button>
          <a href="/" className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vibe Campus — Study smarter, grow faster" },
      { name: "description", content: "Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career." },
      { property: "og:title", content: "Vibe Campus — Study smarter, grow faster" },
      { property: "og:description", content: "Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vibe Campus — Study smarter, grow faster" },
      { name: "twitter:description", content: "Vibe Campus is the all-in-one student growth OS — plan study sessions, chat with an AI coach, ace practice tests, and map your career." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f1c168ec-b7b2-438f-9215-e17dcae62243/id-preview-ed91ef0b--32970b97-9460-4bbd-a225-845e17f2301b.lovable.app-1783602333271.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f1c168ec-b7b2-438f-9215-e17dcae62243/id-preview-ed91ef0b--32970b97-9460-4bbd-a225-845e17f2301b.lovable.app-1783602333271.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
