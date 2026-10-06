import { finalCta } from "@/content/homepage";
import { CTASection } from "@/components/editorial/CTASection";

export function FinalCTA() {
  return (
    <CTASection
      lines={finalCta.headlineLines}
      supporting={finalCta.supporting}
      cta={finalCta.cta}
    />
  );
}
