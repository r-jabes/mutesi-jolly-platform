import Link from "next/link";
import { workWithJolly } from "@/content/work-with-jolly";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { MetadataLabel } from "@/components/ui/MetadataLabel";

export function InquirySuccess() {
  const { success } = workWithJolly;

  return (
    <div
      role="status"
      aria-live="polite"
      className="border-t border-charcoal/10 pt-10 md:pt-12"
    >
      <MetadataLabel className="mb-5 text-muted">Inquiry</MetadataLabel>
      <h3 className="display text-[clamp(2rem,4vw,3.25rem)] leading-none">
        {success.headline}
      </h3>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted md:text-body">
        {success.message}
      </p>
      <div className="mt-10">
        <LinkArrow href={success.cta.href} arrow="→">
          {success.cta.label}
        </LinkArrow>
      </div>
    </div>
  );
}
