import logoAsset from "@/assets/vibe-campus-logo.png.asset.json";

export function Logo({ size = 36, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="grid shrink-0 place-items-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20"
        style={{ width: size, height: size }}
      >
        <img src={logoAsset.url} alt="Vibe Campus" className="h-full w-full object-cover" />
      </div>
      {showText && (
        <span className="text-lg font-bold tracking-tight text-white" style={{ fontFamily: "Poppins, Inter, sans-serif" }}>
          Vibe<span className="text-cyan-300">Campus</span>
        </span>
      )}
    </div>
  );
}
