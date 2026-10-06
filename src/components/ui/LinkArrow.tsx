import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkArrowProps = {
  href: string;
  children: React.ReactNode;
  arrow?: "↗" | "→" | "↓";
  className?: string;
  tone?: "light" | "dark" | "inverse";
  onClick?: () => void;
};

export function LinkArrow({
  href,
  children,
  arrow = "↗",
  className,
  tone = "dark",
  onClick,
}: LinkArrowProps) {
  const toneClass =
    tone === "inverse"
      ? "text-ivory after:bg-ivory hover:text-ivory/85"
      : tone === "light"
        ? "text-ivory/90 after:bg-ivory hover:text-ivory"
        : "text-charcoal after:bg-charcoal hover:text-charcoal/80";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.14em]",
        "relative pb-1 transition-transform duration-editorial ease-editorial",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:transition-transform after:duration-editorial after:ease-editorial",
        "hover:translate-x-[2px] hover:after:scale-x-110",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
        toneClass,
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-editorial ease-editorial group-hover:translate-x-1 group-hover:-translate-y-px"
      >
        {arrow}
      </span>
    </Link>
  );
}
