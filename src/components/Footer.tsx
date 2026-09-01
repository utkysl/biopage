import { site } from "../data/site";
import { Arrow } from "./Arrow";
import { Container } from "./Container";
import { IndexMark, MonoTag } from "./Meta";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-navy">
      <Container className="relative py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <IndexMark n="06" suffix="Contact" />
          <MonoTag>{site.location}</MonoTag>
        </div>

        <p className="mt-8 max-w-xl font-serif text-[clamp(2rem,5vw,3.25rem)] italic leading-[1.15] text-paper">
          {site.contactLine}
        </p>
          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-300">
            {site.descriptor}
          </p>

        <ul className="mt-12 flex flex-col gap-3 text-[15px] text-mute sm:flex-row sm:flex-wrap sm:gap-x-8">
          {(
            [
              ["Email", site.links.email, false],
              ["GitHub", site.links.github, true],
              ["LinkedIn", site.links.linkedin, true],
              ["Instagram", site.links.instagram, true],
            ] as const
          ).map(([label, href, external]) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="group nav-link inline-flex items-center gap-2 py-0.5"
              >
                {label}
                <Arrow />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] tracking-wide text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p className="font-mono uppercase tracking-wider">{site.coordinateLine}</p>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none px-2 text-center font-sans text-[clamp(3.4rem,16vw,12rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.045]"
      >
        {site.nameMark}
      </p>
    </footer>
  );
}
