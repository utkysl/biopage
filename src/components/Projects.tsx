import { site } from "../data/site";
import { Arrow } from "./Arrow";
import { Container } from "./Container";
import { IndexMark, MonoTag } from "./Meta";
import { Reveal } from "./Reveal";

export function Projects() {
  const flagship = site.flagship;

  return (
    <section
      id="projects"
      aria-labelledby="projects-label"
      className="relative scroll-mt-24 border-b border-white/10 bg-ink"
    >
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <IndexMark n="03" />
            <h2
              id="projects-label"
              className="mt-4 font-serif text-[clamp(2.6rem,7vw,5rem)] italic leading-[0.95] tracking-[-0.03em] text-paper"
            >
              Selected work
            </h2>
          </div>
          <MonoTag>01–04</MonoTag>
        </div>

        <Reveal className="mt-14">
          <article className="tech-card overflow-hidden bg-navy">
            <div className="grid lg:grid-cols-12">
              <div className="img-zoom relative aspect-[16/10] min-h-[220px] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
                <img
                  src={flagship.image}
                  alt={`${flagship.title} product still`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 border-t border-white/10 p-6 sm:p-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:p-10">
                <div>
                  <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                    {flagship.figure} · {flagship.kicker}
                  </p>
                  <p className="mt-4 font-mono text-xs tracking-wider text-zinc-400 uppercase">
                    {flagship.index}
                  </p>
                  <h3 className="mt-2 font-sans text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-paper">
                    {flagship.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-300">
                    {flagship.description}
                  </p>
                  <p className="mt-8 font-mono text-xs tracking-wider text-zinc-400 uppercase">
                    Architecture
                  </p>
                  <ol className="mt-3 space-y-2">
                    {flagship.architecture.map((item, index) => (
                      <li
                        key={item}
                        className="flex gap-3 font-mono text-[12px] leading-5 text-zinc-300"
                      >
                        <span className="text-zinc-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                    {flagship.stack}
                  </p>
                  <a
                    href={flagship.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group nav-link shift inline-flex items-center gap-2 py-0.5 text-[13px] text-paper"
                  >
                    {flagship.hrefLabel}
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80} className="mt-16">
          <h3 className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            Studies
          </h3>
          <ul className="mt-6 grid gap-4">
            {site.studies.map((study) => (
              <li key={study.index}>
                <article className="tech-card p-5 sm:p-6">
                  <div className="grid gap-4 md:grid-cols-[3rem_minmax(9rem,0.9fr)_minmax(0,1.3fr)_minmax(0,1.1fr)_auto] md:items-start">
                    <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                      {study.index}
                    </p>
                    <h4 className="shift text-[16px] font-medium tracking-tight text-paper">
                      {study.title}
                    </h4>
                    <div>
                      <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                        Problem solved
                      </p>
                      <p className="mt-2 text-[13px] leading-6 text-zinc-300">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                        Hardware / software
                      </p>
                      <p className="mt-2 text-[13px] leading-6 text-zinc-300">
                        {study.architecture}
                      </p>
                      <p className="mt-1 font-mono text-xs tracking-wider text-zinc-400">
                        {study.stack}
                      </p>
                    </div>
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group nav-link inline-flex items-center gap-1 self-start py-0.5 text-[12px] text-zinc-300"
                    >
                      {study.hrefLabel}
                      <Arrow />
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
