import { journal } from "@/content/journal";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function JournalMedia() {
  const { appearances } = journal;
  const hasItems = appearances.items.length > 0;

  return (
    <section className="bg-warm-white section-y">
      <div className="editorial-container">
        <SectionIntro
          label={appearances.label}
          headline={appearances.headline}
          description={appearances.supporting}
          className="mb-12 max-w-3xl md:mb-16"
        />

        {hasItems ? (
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {appearances.items.map((item, index) => (
              <li key={item.id}>
                <Reveal delay={index * 0.06}>
                  <article>
                    {item.image ? (
                      <ImageReveal>
                        <EditorialImage
                          media={{
                            ...item.image,
                            aspect: item.image.aspect ?? "square",
                          }}
                          hoverScale
                          className="mb-5"
                          sizes="(max-width: 768px) 100vw, 22vw"
                        />
                      </ImageReveal>
                    ) : null}
                    <MetadataLabel className="mb-3 text-muted">
                      {item.label}
                      {item.year ? ` · ${item.year}` : ""}
                    </MetadataLabel>
                    <h3 className="display text-[clamp(1.35rem,2vw,1.75rem)] leading-none">
                      {item.title}
                    </h3>
                    {item.outlet ? (
                      <p className="mt-3 text-sm text-muted">{item.outlet}</p>
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
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <ul className="mb-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-charcoal/10 pt-8 md:grid-cols-4 md:gap-8">
              {appearances.labels.map((label, index) => (
                <li key={label}>
                  <Reveal delay={index * 0.05}>
                    <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
                      {label}
                    </p>
                    <p className="mt-3 display text-[clamp(1.25rem,2vw,1.6rem)] leading-none text-charcoal/40">
                      —
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={0.12}>
              <p className="max-w-lg text-[15px] leading-relaxed text-muted md:text-body">
                {appearances.emptyNote}
              </p>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
