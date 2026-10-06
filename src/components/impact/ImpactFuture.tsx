import { impact } from "@/content/impact";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { Reveal } from "@/components/motion/Reveal";

export function ImpactFuture() {
  const { future } = impact;

  return (
    <section className="bg-warm-white section-y-lg">
      <div className="editorial-container max-w-4xl">
        <LargeStatement lines={[...future.headlineLines]} />
        <Reveal delay={0.12}>
          <p className="mt-10 max-w-2xl text-body text-muted md:mt-12">
            {future.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
