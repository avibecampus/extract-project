/**
 * Custom 3D-styled SVG icon set with gradient extrusion.
 * Use like: <GlyphIcon name="brain" size={24} />
 */
type Name = "brain" | "spark" | "compass" | "trophy" | "shield" | "bolt" | "orbit" | "book" | "chat" | "calendar" | "target" | "flame";

import type { ReactNode } from "react";

const paths: Record<Name, (id: string) => ReactNode> = {
  brain: (id) => (
    <>
      <path d="M9 4a4 4 0 00-4 4v1a3 3 0 00-1 5.7V17a4 4 0 004 4h1V4H9z" fill={`url(#${id}-g)`} />
      <path d="M15 4a4 4 0 014 4v1a3 3 0 011 5.7V17a4 4 0 01-4 4h-1V4h1z" fill={`url(#${id}-g)`} opacity="0.85" />
      <path d="M9 8h6M9 12h6M9 16h6" stroke="white" strokeWidth="0.8" opacity="0.4" />
    </>
  ),
  spark: (id) => (
    <path d="M12 2l2.4 6.2L21 10l-6.6 1.8L12 22l-2.4-10.2L3 10l6.6-1.8L12 2z" fill={`url(#${id}-g)`} />
  ),
  compass: (id) => (
    <>
      <circle cx="12" cy="12" r="10" fill={`url(#${id}-g)`} />
      <path d="M15 9l-2 5-5 2 2-5 5-2z" fill="white" opacity="0.95" />
      <circle cx="12" cy="12" r="1.2" fill="oklch(0.14 0.03 265)" />
    </>
  ),
  trophy: (id) => (
    <>
      <path d="M6 4h12v4a6 6 0 01-12 0V4z" fill={`url(#${id}-g)`} />
      <path d="M4 5h2v3a3 3 0 003 3M20 5h-2v3a3 3 0 01-3 3" stroke="white" strokeWidth="1.4" fill="none" opacity="0.5" />
      <rect x="9" y="15" width="6" height="2.5" rx="0.5" fill="white" opacity="0.85" />
      <rect x="7" y="18" width="10" height="2.5" rx="1" fill={`url(#${id}-g)`} />
    </>
  ),
  shield: (id) => (
    <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" fill={`url(#${id}-g)`} />
  ),
  bolt: (id) => (
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill={`url(#${id}-g)`} />
  ),
  orbit: (id) => (
    <>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={`url(#${id}-g)`} strokeWidth="1.5" fill="none" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke={`url(#${id}-g)`} strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="12" cy="12" r="2.5" fill={`url(#${id}-g)`} />
    </>
  ),
  book: (id) => (
    <>
      <path d="M4 4h7v16H6a2 2 0 01-2-2V4z" fill={`url(#${id}-g)`} />
      <path d="M20 4h-7v16h5a2 2 0 002-2V4z" fill={`url(#${id}-g)`} opacity="0.75" />
      <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="0.8" opacity="0.5" />
    </>
  ),
  chat: (id) => (
    <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-6l-5 4v-4H6a2 2 0 01-2-2V5z" fill={`url(#${id}-g)`} />
  ),
  calendar: (id) => (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" fill={`url(#${id}-g)`} />
      <rect x="3" y="5" width="18" height="5" rx="3" fill="white" opacity="0.25" />
      <rect x="7" y="2" width="2" height="5" rx="1" fill="white" opacity="0.9" />
      <rect x="15" y="2" width="2" height="5" rx="1" fill="white" opacity="0.9" />
    </>
  ),
  target: (id) => (
    <>
      <circle cx="12" cy="12" r="10" fill={`url(#${id}-g)`} />
      <circle cx="12" cy="12" r="6" fill="oklch(0.14 0.03 265)" opacity="0.5" />
      <circle cx="12" cy="12" r="2.5" fill="white" />
    </>
  ),
  flame: (id) => (
    <path d="M12 2s5 4 5 9a5 5 0 11-10 0c0-2 1-3 1-3s-1 4 2 4c0 0-2-3 2-6 2 1.5 3 3 3 5a3 3 0 11-6 0" fill={`url(#${id}-g)`} />
  ),
};

const gradients: Record<Name, [string, string]> = {
  brain: ["#22d3ee", "#a78bfa"],
  spark: ["#fde68a", "#f472b6"],
  compass: ["#34d399", "#22d3ee"],
  trophy: ["#fbbf24", "#f472b6"],
  shield: ["#a78bfa", "#22d3ee"],
  bolt: ["#22d3ee", "#4f46e5"],
  orbit: ["#f472b6", "#a78bfa"],
  book: ["#34d399", "#4f46e5"],
  chat: ["#22d3ee", "#f472b6"],
  calendar: ["#a78bfa", "#22d3ee"],
  target: ["#34d399", "#0891b2"],
  flame: ["#fb923c", "#f43f5e"],
};

export function GlyphIcon({ name, size = 24, className }: { name: Name; size?: number; className?: string }) {
  const uid = `gi-${name}`;
  const [a, b] = gradients[name];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
      </defs>
      {paths[name](uid)}
    </svg>
  );
}
