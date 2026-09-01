import { useEffect, useRef } from "react";
import { site } from "../data/site";
import { Arrow } from "./Arrow";
import { Container } from "./Container";
import { IndexMark, MonoTag } from "./Meta";
import { OrbitField } from "./OrbitField";

export function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const node = portraitRef.current;
    if (!node || media.matches) {
      return;
    }

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 480) * 0.07;
        node.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-name"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-navy" />
      <div className="pointer-events-none absolute inset-0 grid-field" />
      <div
        className="pointer-events-none absolute -right-24 top-[-10%] h-[70%] w-[70%] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, rgb(76 195 245 / 0.14), transparent 64%)",
        }}
      />

      <Container className="relative grid min-h-[calc(100svh-4.25rem)] items-end gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="relative z-10 min-w-0 lg:col-span-7 lg:pb-6">
          <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            {site.coordinateLine}
          </p>

          <p className="mt-5 font-mono text-xs tracking-wider text-zinc-400 uppercase">
            {site.role}
          </p>

          <h1
            id="hero-name"
            className="mt-3 font-sans text-[clamp(2.55rem,10.5vw,7.25rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-pretty text-paper"
          >
            Utku Yeşil
          </h1>

          <p className="mt-8 max-w-md border-l border-accent/70 pl-4 text-[13px] leading-6 text-mute sm:text-sm">
            {site.descriptor}
          </p>

          <div className="mt-8 max-w-lg space-y-4 text-[15px] leading-7 text-zinc-300 sm:text-base">
            {site.heroBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-mute">
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
                  className="group nav-link inline-flex items-center gap-1 py-0.5"
                >
                  {label}
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 min-w-0 lg:col-span-5 lg:col-start-8">
          <div ref={portraitRef} className="relative will-change-transform">
            <OrbitField />
            <figure className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0">
              <span className="corner-frame top-[-6px] left-[-6px] border-t border-l" />
              <span className="corner-frame top-[-6px] right-[-6px] border-t border-r" />
              <span className="corner-frame bottom-[-6px] left-[-6px] border-b border-l" />
              <span className="corner-frame bottom-[-6px] right-[-6px] border-b border-r" />

              <div className="relative overflow-hidden border border-white/15 bg-ink">
                <img
                  src={site.portrait.src}
                  alt={site.portrait.alt}
                  width={720}
                  height={960}
                  className="aspect-[3/4] w-full object-cover object-[center_18%] grayscale contrast-[1.12]"
                />
                <span className="pointer-events-none absolute inset-x-3 top-3 flex justify-between font-mono text-xs tracking-wider text-zinc-300 uppercase">
                  <span>FIG. 01</span>
                  <span>OBS</span>
                </span>
              </div>

              <figcaption className="mt-4 flex items-baseline justify-between gap-4 font-mono text-xs tracking-wider text-zinc-400 uppercase">
                <span>{site.portrait.caption}</span>
                <span>{site.portrait.meta}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between lg:col-span-12">
          <IndexMark n="00" suffix="Hero" />
          <MonoTag>{site.coordinateLine}</MonoTag>
        </div>
      </Container>
    </section>
  );
}
