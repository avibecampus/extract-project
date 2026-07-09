export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora orbs */}
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-60 animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 280 / 0.55), transparent 70%)" }} />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-55 animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.60 0.20 200 / 0.5), transparent 70%)", animationDelay: "-5s" }} />
      <div className="absolute bottom-[-200px] left-1/3 h-[560px] w-[560px] rounded-full opacity-45 animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.60 0.24 330 / 0.5), transparent 70%)", animationDelay: "-9s" }} />

      {/* Grid overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#grid-mask)" />
      </svg>
    </div>
  );
}
