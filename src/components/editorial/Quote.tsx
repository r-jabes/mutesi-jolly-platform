import { cn } from "@/lib/utils";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";

type QuoteProps = {
  meta?: string;
  statement: string;
  className?: string;
};

export function Quote({ meta, statement, className }: QuoteProps) {
  return (
    <figure className={cn("mx-auto max-w-4xl text-center", className)}>
      {meta ? (
        <Reveal>
          <MetadataLabel className="mb-8">{meta}</MetadataLabel>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <blockquote className="display text-statement text-balance leading-[1.05]">
          {statement}
        </blockquote>
      </Reveal>
    </figure>
  );
}
