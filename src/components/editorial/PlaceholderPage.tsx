import { LinkArrow } from "@/components/ui/LinkArrow";
import { MetadataLabel } from "@/components/ui/MetadataLabel";

type PlaceholderPageProps = {
  label: string;
  title: string;
  description: string;
};

export function PlaceholderPage({
  label,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <section className="min-h-[85svh] bg-ivory pt-[calc(var(--header-h)+4rem)] pb-24">
      <div className="editorial-container max-w-3xl">
        <MetadataLabel className="mb-6">{label}</MetadataLabel>
        <h1 className="display text-section">{title}</h1>
        <p className="mt-8 text-body text-muted">{description}</p>
        <p className="mt-6 text-sm text-stone">
          Phase 1 placeholder route — full page design arrives in a later phase.
        </p>
        <div className="mt-12 flex flex-wrap gap-8">
          <LinkArrow href="/" arrow="→">
            Back Home
          </LinkArrow>
          <LinkArrow href="/work-with-jolly">Work With Jolly</LinkArrow>
        </div>
      </div>
    </section>
  );
}
