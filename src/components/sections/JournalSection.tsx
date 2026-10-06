import { journalSection } from "@/content/homepage";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { JournalCard } from "@/components/editorial/JournalCard";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";

export function JournalSection() {
  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            label={journalSection.label}
            headline={journalSection.headline}
            description={journalSection.supporting}
            className="max-w-3xl"
          />
          <Reveal>
            <LinkArrow href={journalSection.cta.href}>
              {journalSection.cta.label}
            </LinkArrow>
          </Reveal>
        </div>

        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <JournalCard {...journalSection.featured} featured ctaLabel="Explore" />
          </div>
          <div className="flex flex-col gap-14 md:col-span-5 md:pt-16 lg:pt-24">
            {journalSection.items.map((item) => (
              <JournalCard key={item.id} {...item} ctaLabel="Explore" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
