export function MarqueeBackground() {
  const row1Text = "JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0";
  const row2Text = "DEVELOPER \u00A0\u00A0\u00A0 DEVELOPER \u00A0\u00A0\u00A0 DEVELOPER \u00A0\u00A0\u00A0 DEVELOPER \u00A0\u00A0\u00A0 DEVELOPER \u00A0\u00A0\u00A0 DEVELOPER \u00A0\u00A0\u00A0";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Row 1 — scrolls left */}
      <div className="absolute top-[20%] left-0 w-full flex items-center">
        <div className="marquee-ltr whitespace-nowrap text-[10vw] font-black tracking-widest text-white/[0.04]">
          <span>{row1Text}{row1Text}</span>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="absolute top-[40%] left-0 w-full flex items-center">
        <div className="marquee-rtl whitespace-nowrap text-[10vw] font-black tracking-widest text-white/[0.04]">
          <span>{row2Text}{row2Text}</span>
        </div>
      </div>

      {/* Row 3 — scrolls left */}
      <div className="absolute top-[60%] left-0 w-full flex items-center">
        <div className="marquee-ltr whitespace-nowrap text-[10vw] font-black tracking-widest text-white/[0.04]" style={{ animationDelay: '-5s' }}>
          <span>{row1Text}{row1Text}</span>
        </div>
      </div>

      {/* Row 4 — scrolls right */}
      <div className="absolute top-[80%] left-0 w-full flex items-center">
        <div className="marquee-rtl whitespace-nowrap text-[10vw] font-black tracking-widest text-white/[0.04]" style={{ animationDelay: '-10s' }}>
          <span>{row2Text}{row2Text}</span>
        </div>
      </div>
    </div>
  );
}
