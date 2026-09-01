import { site } from "../data/site";
import { Arrow } from "./Arrow";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-4 py-3.5 min-[400px]:px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-baseline gap-3 font-sans text-[12px] font-medium tracking-[0.22em] text-paper"
        >
          {site.nameMark}
          <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            {site.location}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-mute sm:gap-x-5"
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link py-0.5">
              {item.label}
            </a>
          ))}
          <span
            className="hidden h-3 w-px bg-white/15 sm:block"
            aria-hidden="true"
          />
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group nav-link inline-flex items-center gap-1 py-0.5"
          >
            GitHub
            <Arrow />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group nav-link inline-flex items-center gap-1 py-0.5"
          >
            LinkedIn
            <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}
