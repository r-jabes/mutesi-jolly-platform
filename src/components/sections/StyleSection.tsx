import { styleSection } from "@/content/homepage";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { Gallery } from "@/components/editorial/Gallery";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";

export function StyleSection() {
  return (
    <section id="style" className="bg-warm-white section-y-lg overflow-hidden">
      <div className="editorial-container mb-10 md:mb-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            label={styleSection.label}
            headline={styleSection.headline}
            description={styleSection.supporting}
            className="max-w-3xl"
          />
          <Reveal>
            <LinkArrow href={styleSection.cta.href}>
              {styleSection.cta.label}
            </LinkArrow>
          </Reveal>
        </div>
      </div>
      <Gallery items={styleSection.items} />
    </section>
  );
}
