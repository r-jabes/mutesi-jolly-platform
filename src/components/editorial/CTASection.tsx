import { LinkArrow } from "@/components/ui/LinkArrow";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { Reveal } from "@/components/motion/Reveal";

type CTASectionProps = {
  lines: string[];
  supporting: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  lines,
  supporting,
  cta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="flex min-h-[72svh] items-end bg-charcoal py-20 text-ivory md:min-h-[78svh] md:items-center md:py-24 lg:py-28">
      <div className="editorial-container w-full">
        <LargeStatement lines={lines} tone="dark" className="max-w-5xl" />
        <Reveal delay={0.15}>
          <p className="mt-7 max-w-md text-sand text-body md:mt-8">{supporting}</p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 md:mt-12">
            <LinkArrow href={cta.href} tone="inverse" className="text-[13px]">
              {cta.label}
            </LinkArrow>
            {secondaryCta ? (
              <LinkArrow
                href={secondaryCta.href}
                tone="inverse"
                arrow="→"
                className="text-[13px] text-ivory/70 hover:text-ivory"
              >
                {secondaryCta.label}
              </LinkArrow>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
