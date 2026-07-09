export function Logo({ size = 36, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="relative grid shrink-0 place-items-center rounded-2xl animate-glow-pulse"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <defs>
            <linearGradient id="lg-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.90 0.14 195)" />
              <stop offset="55%" stopColor="oklch(0.65 0.18 275)" />
              <stop offset="100%" stopColor="oklch(0.72 0.24 335)" />
            </linearGradient>
            <linearGradient id="lg-b" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <filter id="lg-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>
          </defs>
          <rect x="2" y="2" width="44" height="44" rx="14" fill="url(#lg-a)" />
          <path d="M12 16 L24 34 L36 16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#lg-glow)" opacity="0.35" />
          <path d="M12 16 L24 34 L36 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="24" cy="10" r="2" fill="white" />
          <rect x="2" y="2" width="44" height="22" rx="14" fill="url(#lg-b)" />
        </svg>
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight text-white" style={{ fontFamily: "Poppins, Inter, sans-serif" }}>
          <span className="text-white/70">A</span> Vibe<span className="text-gradient">Campus</span>
        </span>
      )}
    </div>
  );
}
