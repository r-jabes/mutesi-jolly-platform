import { impact } from "@/content/impact";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { Reveal } from "@/components/motion/Reveal";

export function ImpactOpening() {
  const { opening } = impact;

  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container max-w-4xl">
        <LargeStatement lines={[...opening.headlineLines]} />
        <Reveal delay={0.12}>
          <p className="mt-10 max-w-2xl text-body text-muted md:mt-12">
            {opening.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
