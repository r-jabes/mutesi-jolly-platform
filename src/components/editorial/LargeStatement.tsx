import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/motion/TextReveal";

type LargeStatementProps = {
  lines: string[];
  className?: string;
  tone?: "light" | "dark";
};

export function LargeStatement({
  lines,
  className,
  tone = "light",
}: LargeStatementProps) {
  return (
    <div
      className={cn(
        "display text-statement",
        tone === "dark" ? "text-ivory" : "text-charcoal",
        className,
      )}
    >
      {lines.map((line, i) => (
        <div key={line}>
          <TextReveal as="span" delay={i * 0.08}>
            {line}
          </TextReveal>
        </div>
      ))}
    </div>
  );
}
