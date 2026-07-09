export function Logo({ size = 32, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="relative grid shrink-0 place-items-center rounded-lg"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-full w-full">
          <rect x="1" y="1" width="30" height="30" rx="8" fill="oklch(0.19 0.010 260)" stroke="oklch(1 0 0 / 0.12)" />
          <path d="M9 10 L16 22 L23 10" stroke="oklch(0.72 0.13 250)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="16" cy="7" r="1.4" fill="oklch(0.72 0.13 250)" />
        </svg>
      </span>
      {showText && (
        <span className="text-[15px] font-semibold tracking-tight text-white">
          A Vibe <span className="text-white/70">Campus</span>
        </span>
      )}
    </div>
  );
}
