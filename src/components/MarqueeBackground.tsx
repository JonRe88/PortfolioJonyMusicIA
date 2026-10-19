export function MarqueeBackground() {
  const row1Text =
    "JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0 JONY REYES \u00A0\u00A0\u00A0 ";
  const row2Text =
    "DISEÑO DIGITAL \u00A0\u00A0\u00A0 DISEÑO DIGITAL \u00A0\u00A0\u00A0 DISEÑO DIGITAL \u00A0\u00A0\u00A0 ";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden opacity-50"
    >
      <div className="absolute left-0 top-[22%] flex w-full items-center">
        <div className="marquee-ltr whitespace-nowrap text-[9vw] font-semibold tracking-[0.18em] text-white/[0.018]">
          <span>{row1Text}{row1Text}</span>
        </div>
      </div>

      <div className="absolute left-0 top-[48%] flex w-full items-center">
        <div className="marquee-rtl whitespace-nowrap text-[9vw] font-semibold tracking-[0.18em] text-white/[0.018]">
          <span>{row2Text}{row2Text}</span>
        </div>
      </div>

      <div className="absolute left-0 top-[74%] flex w-full items-center">
        <div
          className="marquee-ltr whitespace-nowrap text-[9vw] font-semibold tracking-[0.18em] text-white/[0.018]"
          style={{ animationDelay: "-8s" }}
        >
          <span>{row1Text}{row1Text}</span>
        </div>
      </div>
    </div>
  );
}
