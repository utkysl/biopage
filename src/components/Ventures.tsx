import { site } from "../data/site";
import { Arrow } from "./Arrow";
import { Container } from "./Container";
import { IndexMark, MonoTag } from "./Meta";
import { Reveal } from "./Reveal";
import { StoreLinks } from "./StoreLinks";

type Venture = (typeof site.ventures)[number];

function VentureCard({ venture }: { venture: Venture }) {
  return (
    <article className="tech-card grid gap-8 bg-ink/40 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
      <header className="lg:col-span-4">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            {venture.period}
          </p>
          {venture.logo ? (
            <img
              src={venture.logo}
              alt={venture.logoAlt}
              width={36}
              height={36}
              className={`h-9 w-9 shrink-0 border border-white/10 object-contain ${
                venture.name === "AU YAZGİT"
                  ? "rounded-full bg-white"
                  : "rounded-[5px]"
              }`}
            />
          ) : null}
        </div>
        <h3 className="mt-3 font-sans text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.035em] text-paper">
          {venture.name}
        </h3>
        <p className="mt-3 text-sm text-zinc-300">{venture.role}</p>
        {venture.location ? (
          <p className="mt-1 font-mono text-xs tracking-wider text-zinc-400 uppercase">
            {venture.location}
          </p>
        ) : null}
      </header>

      <div className="flex flex-col justify-between gap-8 lg:col-span-8">
        <p className="max-w-2xl text-[16px] leading-8 text-zinc-300">
          {venture.summary}
        </p>
        <div>
          <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            Key scope
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {venture.scope.map((item) => (
              <li
                key={item}
                className="font-mono text-[12px] tracking-wide text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs tracking-wider text-zinc-400 uppercase">
            {venture.stack.map((item) => (
              <li key={item} className="border border-white/10 px-2 py-1">
                {item}
              </li>
            ))}
          </ul>
          {venture.stores ? (
            <StoreLinks stores={venture.stores} />
          ) : venture.href ? (
            <a
              href={venture.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group nav-link shift inline-flex items-center gap-2 py-0.5 text-[13px] text-paper"
            >
              {venture.hrefLabel}
              <Arrow />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Ventures() {
  return (
    <section
      id="ventures"
      aria-labelledby="ventures-label"
      className="relative scroll-mt-24 border-b border-white/10 bg-navy"
    >
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <IndexMark n="02" />
            <h2
              id="ventures-label"
              className="mt-4 font-serif text-[clamp(2.4rem,6.5vw,4.5rem)] italic leading-[0.95] tracking-[-0.03em] text-paper"
            >
              Ventures & experience
            </h2>
          </div>
          <MonoTag>{site.location}</MonoTag>
        </div>

        <Reveal className="mt-14">
          <div className="grid gap-8">
            {site.ventures.map((venture) => (
              <VentureCard key={venture.name} venture={venture} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
