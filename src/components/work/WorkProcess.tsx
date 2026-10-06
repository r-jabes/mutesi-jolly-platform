import { work } from "@/content/work";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { Reveal } from "@/components/motion/Reveal";
import { MetadataLabel } from "@/components/ui/MetadataLabel";

export function WorkProcess() {
  const { process } = work;

  return (
    <section className="bg-warm-white section-y-lg">
      <div className="editorial-container">
        <LargeStatement
          lines={[process.headline]}
          className="mb-14 max-w-4xl md:mb-20"
        />

        <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
          {process.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <li className="border-t border-charcoal/10 pt-8">
                <MetadataLabel className="mb-6 text-muted">
                  {step.number}
                </MetadataLabel>
                <h3 className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
