/**
 * Minimal, monochromatic SVG icon set. Uses currentColor so it inherits accent color.
 * Not a rainbow. Not 3D. Just clean line/fill glyphs.
 */
type Name =
  | "brain" | "spark" | "compass" | "trophy" | "shield" | "bolt"
  | "orbit" | "book" | "chat" | "calendar" | "target" | "flame";

const paths: Record<Name, JSX.Element> = {
  brain: (
    <>
      <path d="M8 4a3 3 0 00-3 3v1a3 3 0 00-1 5.5V16a3 3 0 003 3h1V4H8z" />
      <path d="M16 4a3 3 0 013 3v1a3 3 0 011 5.5V16a3 3 0 01-3 3h-1V4h1z" />
    </>
  ),
  spark: <path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" strokeWidth="1.6" />
      <path d="M15 9l-2.2 5.2L7.6 16.4l2.2-5.2L15 9z" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
      <path d="M4 5h3M17 5h3M9 19h6v2H9z" fill="none" strokeWidth="1.6" />
    </>
  ),
  shield: <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />,
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  orbit: (
    <>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  book: <path d="M4 4h7v16H6a2 2 0 01-2-2V4zM20 4h-7v16h5a2 2 0 002-2V4z" />,
  chat: <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-6l-5 4v-4H6a2 2 0 01-2-2V5z" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M7 3v4M17 3v4" fill="none" strokeWidth="1.6" stroke="oklch(0.145 0.008 260)" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="5" fill="none" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),
  flame: <path d="M12 2s5 4 5 9a5 5 0 01-10 0c0-2 1-3 1-3s-1 4 2 4c0 0-2-3 2-6 2 1.5 3 3 3 5" />,
};

export function GlyphIcon({ name, size = 20, className = "" }: { name: Name; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}
