import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex items-end justify-between gap-6 border-b border-foreground/15 pb-5", className)}>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl">{title}</h2>
      {subtitle && <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{subtitle}</span>}
    </div>
  );
}
