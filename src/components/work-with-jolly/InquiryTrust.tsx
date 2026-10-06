import { workWithJolly } from "@/content/work-with-jolly";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { MetadataLabel } from "@/components/ui/MetadataLabel";

export function InquiryTrust() {
  const { trust } = workWithJolly;

  return (
    <section className="bg-warm-white py-16 md:py-20 lg:py-24">
      <div className="editorial-container max-w-3xl">
        <h2 className="display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none max-w-[16ch]">
          <TextReveal as="span">{trust.headline}</TextReveal>
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted md:text-body">
            {trust.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
