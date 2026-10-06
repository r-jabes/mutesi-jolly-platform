import { impact } from "@/content/impact";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

export function ImpactPhilosophy() {
  const { philosophy } = impact;

  return (
    <section className="bg-warm-white section-y-lg">
      <div className="editorial-container">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <MetadataLabel className="mb-6 text-muted">
                {philosophy.label}
              </MetadataLabel>
            </Reveal>
            <h2 className="display text-section max-w-[12ch]">
              <TextReveal as="span">{philosophy.headline}</TextReveal>
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-muted md:text-body">
                {philosophy.supporting}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <ul className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8 md:gap-y-1">
              {philosophy.themes.map((theme, index) => (
                <li
                  key={theme}
                  className={cn(
                    "border-t border-charcoal/10 pt-5 pb-6 sm:pt-6 sm:pb-8",
                    index % 2 === 1 && "sm:translate-y-8 md:translate-y-10",
                  )}
                >
                  <Reveal delay={index * 0.05}>
                    <span className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-tight">
                      {theme}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
