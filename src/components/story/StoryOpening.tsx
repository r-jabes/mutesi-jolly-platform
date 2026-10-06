import { story } from "@/content/story";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { Reveal } from "@/components/motion/Reveal";

export function StoryOpening() {
  const { opening } = story;

  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container max-w-4xl">
        <LargeStatement lines={[...opening.statementLines]} />
        <Reveal delay={0.12}>
          <p className="mt-10 max-w-2xl text-body text-muted md:mt-12">
            {opening.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
