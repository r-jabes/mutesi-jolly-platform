import { work } from "@/content/work";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function WorkSelected() {
  const { selectedWork } = work;
  const hasItems = selectedWork.items.length > 0;

  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container">
        <SectionIntro
          label="Archive"
          headline={selectedWork.headline}
          description={selectedWork.supporting}
          className="mb-12 max-w-3xl md:mb-16"
        />

        {hasItems ? (
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {selectedWork.items.map((item, index) => (
              <Reveal
                key={`${item.title}-${index}`}
                delay={index * 0.06}
                className={index === 0 ? "md:col-span-7" : "md:col-span-5"}
              >
                <article className="group">
                  {item.image ? (
                    <ImageReveal>
                      <EditorialImage
                        media={{
                          ...item.image,
                          aspect: item.image.aspect ?? "portrait",
                        }}
                        hoverScale
                        className="mb-5"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </ImageReveal>
                  ) : null}
                  <MetadataLabel className="mb-3 text-stone">
                    {[item.category, item.year].filter(Boolean).join(" · ")}
                  </MetadataLabel>
                  <h3 className="display text-[clamp(1.6rem,2.5vw,2.5rem)] leading-none">
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p className="mt-4 max-w-md text-sm text-muted">
                      {item.description}
                    </p>
                  ) : null}
                  {item.href ? (
                    <div className="mt-5">
                      <LinkArrow href={item.href} arrow="→">
                        View
                      </LinkArrow>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="border-t border-charcoal/10 pt-10 md:pt-12">
              <p className="max-w-lg text-[15px] leading-relaxed text-muted md:text-body">
                {selectedWork.emptyNote}
              </p>
              <div className="mt-10">
                <LinkArrow href="/work-with-jolly">
                  Work With Jolly
                </LinkArrow>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
