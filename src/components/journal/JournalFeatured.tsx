import {
  journal,
  getFeaturedEntry,
  getJournalEntryHref,
  type JournalEntry,
} from "@/content/journal";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";

function FeaturedArticle({ entry }: { entry: JournalEntry }) {
  const meta = [entry.date, entry.readTime].filter(Boolean).join(" · ");

  return (
    <article className="grid items-end gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
      {entry.image ? (
        <div className="md:col-span-7 lg:col-span-8">
          <ImageReveal>
            <EditorialImage
              media={{
                ...entry.image,
                aspect: entry.image.aspect ?? "wide",
              }}
              hoverScale
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </ImageReveal>
        </div>
      ) : null}

      <div
        className={
          entry.image
            ? "md:col-span-5 lg:col-span-4"
            : "md:col-span-8 lg:col-span-7"
        }
      >
        <Reveal>
          <MetadataLabel className="mb-4 text-muted">
            {entry.category}
          </MetadataLabel>
        </Reveal>
        <h2 className="display text-section max-w-[14ch]">
          <TextReveal as="span">{entry.title}</TextReveal>
        </h2>
        {meta ? (
          <Reveal delay={0.08}>
            <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
              {meta}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted md:text-body">
            {entry.excerpt}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10">
            <LinkArrow href={getJournalEntryHref(entry)} arrow="→">
              Read Story
            </LinkArrow>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function FeaturedPlaceholder() {
  const { featuredPlaceholder } = journal;

  return (
    <div className="grid items-end gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
      <div className="md:col-span-7 lg:col-span-8">
        <ImageReveal>
          <EditorialImage
            media={featuredPlaceholder.media}
            hoverScale
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </ImageReveal>
      </div>
      <div className="md:col-span-5 lg:col-span-4">
        <Reveal>
          <MetadataLabel className="mb-4 text-muted">
            {featuredPlaceholder.label}
          </MetadataLabel>
        </Reveal>
        <h2 className="display text-section max-w-[12ch]">
          <TextReveal as="span">{featuredPlaceholder.headline}</TextReveal>
        </h2>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted md:text-body">
            {featuredPlaceholder.excerpt}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export function JournalFeatured() {
  const featured = getFeaturedEntry();

  return (
    <section className="bg-ivory section-y">
      <div className="editorial-container">
        {featured ? (
          <FeaturedArticle entry={featured} />
        ) : (
          <FeaturedPlaceholder />
        )}
      </div>
    </section>
  );
}
