import { voiceSection } from "@/content/homepage";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

export function VoiceSection() {
  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container">
        <SectionIntro
          label={voiceSection.label}
          headline={voiceSection.headline}
          align="center"
          className="mb-10 md:mb-14"
        />

        <Reveal delay={0.08}>
          <p className="mx-auto max-w-xl text-center text-body text-muted">
            {voiceSection.intro}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {voiceSection.themes.map((theme) => (
              <li key={theme} className="meta text-stone">
                {theme}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-16 max-w-3xl border-t border-charcoal/10 pt-12 text-center md:mt-20 md:pt-16">
            <MetadataLabel className="mb-5">
              {voiceSection.featured.category}
            </MetadataLabel>
            <h3 className="display text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.05]">
              <TextReveal as="span">{voiceSection.featured.title}</TextReveal>
            </h3>
            <p className="mx-auto mt-5 max-w-md text-sm text-muted">
              {voiceSection.featured.note}
            </p>
            <div className="mt-10 flex justify-center">
              <LinkArrow href={voiceSection.cta.href}>
                {voiceSection.cta.label}
              </LinkArrow>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
