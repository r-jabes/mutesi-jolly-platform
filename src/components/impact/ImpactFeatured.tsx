import { impact, type ImpactFeatured } from "@/content/impact";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";

function FeaturedEntry({ entry }: { entry: ImpactFeatured }) {
  const meta = [entry.year, entry.location].filter(Boolean).join(" · ");
  const detailHref = entry.href;
  const hasLink = Boolean(detailHref || entry.externalHref);

  return (
    <div className="grid items-start gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
      {entry.image ? (
        <div className="md:col-span-7">
          <ImageReveal>
            <EditorialImage
              media={{
                ...entry.image,
                aspect: entry.image.aspect ?? "landscape",
              }}
              hoverScale
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </ImageReveal>
        </div>
      ) : null}

      <div className={entry.image ? "md:col-span-5" : "md:col-span-8"}>
        <Reveal>
          <MetadataLabel className="mb-5 text-stone">Featured</MetadataLabel>
        </Reveal>
        {meta ? (
          <Reveal delay={0.04}>
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
              {meta}
            </p>
          </Reveal>
        ) : null}
        <h2 className="display text-section max-w-[14ch]">
          <TextReveal as="span">{entry.title}</TextReveal>
        </h2>

        {entry.description ? (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-sand/85 md:text-body">
              {entry.description}
            </p>
          </Reveal>
        ) : null}

        <dl className="mt-10 space-y-5">
          {(
            [
              ["Issue", entry.issue],
              ["Action", entry.action],
              ["People", entry.people],
              ["Result", entry.result],
            ] as const
          ).map(([label, value]) =>
            value ? (
              <Reveal key={label} delay={0.12}>
                <div>
                  <dt className="font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
                    {label}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-sand/90">
                    {value}
                  </dd>
                </div>
              </Reveal>
            ) : null,
          )}
        </dl>

        <Reveal delay={0.18}>
          {hasLink ? (
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {detailHref ? (
                <LinkArrow href={detailHref} tone="inverse" arrow="→">
                  Learn more
                </LinkArrow>
              ) : null}
              {entry.externalHref ? (
                <LinkArrow href={entry.externalHref} tone="inverse">
                  External link
                </LinkArrow>
              ) : null}
            </div>
          ) : null}
        </Reveal>
      </div>
    </div>
  );
}

function FeaturedPlaceholder() {
  const { featuredPlaceholder } = impact;

  return (
    <div className="max-w-3xl">
      <Reveal>
        <MetadataLabel className="mb-6 text-stone">
          {featuredPlaceholder.label}
        </MetadataLabel>
      </Reveal>
      <h2 className="display text-section max-w-[16ch]">
        <TextReveal as="span">{featuredPlaceholder.headline}</TextReveal>
      </h2>
      <Reveal delay={0.12}>
        <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-sand/85 md:text-body">
          {featuredPlaceholder.body}
        </p>
      </Reveal>
    </div>
  );
}

export function ImpactFeatured() {
  const featured = impact.featured;

  return (
    <section className="section-y-lg bg-charcoal text-ivory">
      <div className="editorial-container">
        {featured ? <FeaturedEntry entry={featured} /> : <FeaturedPlaceholder />}
      </div>
    </section>
  );
}
