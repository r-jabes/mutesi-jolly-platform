import { site } from "@/content/site";
import { workWithJolly } from "@/content/work-with-jolly";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";

/** Understated secondary contact using verified site.email only. */
export function InquiryAlternativeContact() {
  const { alternativeContact } = workWithJolly;
  const email = site.email;

  if (!email) return null;

  return (
    <section className="bg-ivory pb-16 md:pb-20 lg:pb-24">
      <div className="editorial-container">
        <Reveal>
          <div className="border-t border-charcoal/10 pt-10 md:pt-12">
            <MetadataLabel className="mb-4 text-muted">
              {alternativeContact.label}
            </MetadataLabel>
            <p className="max-w-md text-[15px] leading-relaxed text-muted">
              {alternativeContact.supporting}{" "}
              <a
                href={`mailto:${email}`}
                className="text-charcoal underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                {email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
