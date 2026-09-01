import { site } from "../data/site";
import { Container } from "./Container";
import { IndexMark } from "./Meta";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="relative overflow-hidden scroll-mt-24 border-b border-white/10 bg-ink"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40 grid-field-dense" />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="flex items-center justify-between gap-4">
          <h2 id="about-label" className="sr-only">
            Perspective
          </h2>
          <IndexMark n="01" suffix="Perspective" />
        </div>

        <Reveal>
          <p className="mt-10 max-w-[18ch] font-serif text-[clamp(2.75rem,9vw,7rem)] italic leading-[0.92] tracking-[-0.035em] text-paper sm:max-w-none">
            The intersection
            <br />
            of <span className="text-accent">physics</span>, code,
            <br />
            and curiosity.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5" delay={80}>
            <p className="text-[16px] leading-8 text-zinc-300 lg:text-[17px]">
              {site.about.dual}
            </p>
          </Reveal>

          <Reveal
            className="space-y-12 lg:col-span-6 lg:col-start-7 lg:mt-24"
            delay={140}
          >
            <article>
              <h3 className="flex items-baseline gap-3 font-sans text-sm font-medium tracking-tight text-paper">
                <span className="font-mono text-[10px] text-accent">01</span>
                {site.about.engineering.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-zinc-300 sm:text-base">
                {site.about.engineering.body}
              </p>
            </article>
            <article>
              <h3 className="flex items-baseline gap-3 font-sans text-sm font-medium tracking-tight text-paper">
                <span className="font-mono text-[10px] text-accent">02</span>
                {site.about.mindset.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-zinc-300 sm:text-base">
                {site.about.mindset.body}
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
