"use client";

import {
  workWithJolly,
  type InquiryTypeId,
} from "@/content/work-with-jolly";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

type OpportunitySelectorProps = {
  selected: InquiryTypeId | null;
  onSelect: (id: InquiryTypeId) => void;
};

export function OpportunitySelector({
  selected,
  onSelect,
}: OpportunitySelectorProps) {
  const { opportunities, types } = workWithJolly;

  return (
    <section className="bg-ivory section-y">
      <div className="editorial-container">
        <div className="mb-12 max-w-2xl md:mb-16">
          <Reveal>
            <MetadataLabel className="mb-5 text-muted">
              Opportunities
            </MetadataLabel>
          </Reveal>
          <h2 className="display text-section max-w-[14ch]">
            <TextReveal as="span">{opportunities.headline}</TextReveal>
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[15px] leading-relaxed text-muted md:text-body">
              {opportunities.supporting}
            </p>
          </Reveal>
        </div>

        <ul className="border-t border-charcoal/10">
          {types.map((type, index) => {
            const active = selected === type.id;
            return (
              <li key={type.id}>
                <Reveal delay={Math.min(index * 0.04, 0.2)}>
                  <button
                    type="button"
                    onClick={() => onSelect(type.id)}
                    aria-pressed={active}
                    className={cn(
                      "group flex w-full items-start gap-4 border-b border-charcoal/10 py-7 text-left transition-colors duration-editorial md:gap-8 md:py-9",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy focus-visible:ring-offset-4 focus-visible:ring-offset-ivory",
                      active ? "bg-warm-white/80" : "hover:bg-warm-white/50",
                    )}
                  >
                    <span
                      className={cn(
                        "shrink-0 pt-1 font-sans text-[11px] uppercase tracking-[0.16em]",
                        active ? "text-burgundy" : "text-stone",
                      )}
                    >
                      {type.number}
                    </span>
                    <span className="min-w-0 flex-1 pr-2">
                      <span
                        className={cn(
                          "display block text-[clamp(1.5rem,2.8vw,2.35rem)] leading-none transition-transform duration-editorial ease-editorial motion-safe:md:group-hover:translate-x-1",
                          active && "translate-x-1",
                        )}
                      >
                        {type.title}
                      </span>
                      <span className="mt-3 block max-w-xl text-[14px] leading-relaxed text-muted md:text-[15px]">
                        {type.description}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "shrink-0 pt-2 text-sm transition-transform duration-editorial ease-editorial",
                        "motion-safe:md:group-hover:translate-x-1",
                        active ? "text-burgundy" : "text-charcoal/50",
                      )}
                    >
                      →
                    </span>
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
