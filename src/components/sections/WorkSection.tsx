import { workSection } from "@/content/homepage";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { WorkCategory } from "@/components/editorial/WorkCategory";
import { Reveal } from "@/components/motion/Reveal";

export function WorkSection() {
  return (
    <section className="bg-charcoal section-y-lg text-ivory">
      <div className="editorial-container">
        <SectionIntro
          label={workSection.label}
          headline={workSection.headline}
          description={workSection.supporting}
          tone="dark"
          className="mb-12 md:mb-16 max-w-4xl"
        />

        <Reveal>
          <div>
            {workSection.categories.map((category) => (
              <WorkCategory key={category.number} {...category} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
