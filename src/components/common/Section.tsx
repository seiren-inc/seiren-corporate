import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionSurface = "default" | "muted" | "dark";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: SectionSurface;
  ariaLabel?: string;
};

const surfaceClass: Record<SectionSurface, string> = {
  default: "bg-neutral-bg",
  muted: "bg-neutral-surface",
  dark: "bg-surface-dark text-white",
};

export function Section({
  id,
  children,
  className,
  surface = "default",
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "scroll-mt-[var(--header-height)] py-16 sm:py-24",
        surfaceClass[surface],
        className,
      )}
    >
      {children}
    </section>
  );
}
