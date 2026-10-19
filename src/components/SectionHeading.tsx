import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div>
        {subtitle && (
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
            <span className="h-px w-7 bg-violet-400/70" />
            {subtitle}
          </p>
        )}
        <h2 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h2>
      </div>
      <span aria-hidden="true" className="hidden pb-2 font-serif text-4xl italic text-white/15 sm:block">
        / /
      </span>
    </div>
  );
}
