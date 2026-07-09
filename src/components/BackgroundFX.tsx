export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Single subtle accent glow at top */}
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.14 255 / 0.35), transparent 70%)" }}
      />
      {/* Grid overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="gfade" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="gmask"><rect width="100%" height="100%" fill="url(#gfade)" /></mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gmask)" />
      </svg>
    </div>
  );
}
