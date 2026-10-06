import { cn } from "@/lib/utils";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

type SectionIntroProps = {
  label?: string;
  headline: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  label,
  headline,
  description,
  tone = "light",
  className,
  align = "left",
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className,
      )}
    >
      {label ? (
        <Reveal>
          <MetadataLabel
            className={cn(
              "mb-6",
              tone === "dark" ? "text-stone" : "text-muted",
            )}
          >
            {label}
          </MetadataLabel>
        </Reveal>
      ) : null}
      <h2
        className={cn(
          "display text-section",
          tone === "dark" ? "text-ivory" : "text-charcoal",
        )}
      >
        <TextReveal as="span">{headline}</TextReveal>
      </h2>
      {description ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-6 max-w-xl text-body",
              align === "center" && "mx-auto",
              tone === "dark" ? "text-sand" : "text-muted",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
