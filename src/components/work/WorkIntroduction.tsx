import { work } from "@/content/work";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { Reveal } from "@/components/motion/Reveal";

export function WorkIntroduction() {
  const { introduction } = work;

  return (
    <section className="bg-ivory section-y">
      <div className="editorial-container max-w-4xl">
        <LargeStatement lines={[introduction.headline]} />
        <Reveal delay={0.12}>
          <p className="mt-10 max-w-2xl text-body text-muted md:mt-12">
            {introduction.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
