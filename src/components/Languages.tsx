import { site } from "../data/site";
import { Container } from "./Container";
import { IsoFlag } from "./IsoFlag";
import { IndexMark } from "./Meta";
import { Reveal } from "./Reveal";
import { SignalScope } from "./SignalScope";

export function Languages() {
  return (
    <section
      id="languages"
      aria-labelledby="languages-label"
      className="relative scroll-mt-24 border-b border-white/10 bg-ink"
    >
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <IndexMark n="05" />
            <h2
              id="languages-label"
              className="mt-4 font-serif text-[clamp(2.2rem,5.5vw,3.5rem)] italic leading-[0.95] tracking-[-0.03em] text-paper"
            >
              Languages & interests
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <Reveal>
            <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {site.languages.map((language) => (
                <li key={language.name}>
                  <article className="flex items-center gap-4 border border-white/10 p-4 sm:p-5">
                    <span className="flex h-10 w-12 items-center justify-center border border-white/10 bg-navy">
                      <IsoFlag code={language.flag} />
                    </span>
                    <div className="min-w-0">
                      <p className="flex items-baseline gap-2">
                        <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                          {language.iso}
                        </span>
                        <span className="text-[15px] font-medium tracking-tight text-paper">
                          {language.name}
                        </span>
                      </p>
                      <p className="mt-1 text-[13px] leading-5 text-zinc-300">
                        {language.level}
                      </p>
                      <p className="mt-1 font-mono text-xs tracking-wider text-zinc-400">
                        {language.detail}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:pt-2">
            <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
              Interests
            </p>
            <p className="mt-4 text-[15px] leading-7 text-zinc-300">
              {site.interests}
            </p>
            <SignalScope />
            <p className="mt-3 font-mono text-xs tracking-wider text-zinc-400 uppercase">
              Scope — sine / saw · analog trace
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
