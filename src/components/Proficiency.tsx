import { site } from "../data/site";
import { Container } from "./Container";
import { IndexMark, MonoTag } from "./Meta";
import { Reveal } from "./Reveal";

export function Proficiency() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-label"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-navy"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 grid-field-dense" />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <IndexMark n="04" />
            <h2
              id="skills-label"
              className="mt-4 font-serif text-[clamp(2.2rem,5.5vw,3.75rem)] italic leading-[0.95] tracking-[-0.03em] text-paper"
            >
              Technical taxonomy
            </h2>
          </div>
          <MonoTag>Four pillars</MonoTag>
        </div>

        <Reveal className="mt-12 max-w-xl border-b border-white/10 pb-10">
          <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            Education
          </p>
          <p className="mt-3 text-[clamp(1.25rem,3vw,1.85rem)] leading-snug tracking-tight text-paper">
            {site.education.line}
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="mb-6 hidden h-px bg-gradient-to-r from-accent/80 via-white/15 to-transparent lg:block" />
          <ul className="grid gap-8 sm:grid-cols-2">
            {site.skills.map((group) => (
              <li key={group.category} className="min-w-0">
                <p className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-3">
                  <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                    P.{group.channel}
                  </span>
                  <span className="text-right font-mono text-xs tracking-wider text-zinc-400 uppercase">
                    {group.category}
                  </span>
                </p>
                <ol className="mt-4 space-y-2.5">
                  {group.items.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15px] text-zinc-200"
                    >
                      <span className="w-5 shrink-0 font-mono text-xs tabular-nums text-zinc-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
