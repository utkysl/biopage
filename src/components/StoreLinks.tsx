import { Arrow } from "./Arrow";

type StoreLink = {
  label: string;
  href: string;
};

function StoreMark({ label }: { label: string }) {
  if (label !== "App Store" && label !== "Google Play") {
    return null;
  }

  if (label === "App Store") {
    return (
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 shrink-0"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M11.18 8.37c.02-1.9 1.55-2.82 1.62-2.86-.88-1.29-2.26-1.47-2.74-1.49-1.16-.12-2.27.69-2.86.69-.59 0-1.5-.67-2.47-.65-1.27.02-2.45.74-3.1 1.88-1.33 2.3-.34 5.7.94 7.56.63.91 1.38 1.93 2.36 1.89.95-.04 1.31-.61 2.46-.61s1.47.61 2.47.59c1.02-.02 1.67-.93 2.29-1.85.72-1.05 1.02-2.08 1.03-2.13-.02-.01-1.98-.76-2-3.02zM9.62 2.99c.52-.63.87-1.51.77-2.39-.74.03-1.64.5-2.17 1.12-.48.56-.9 1.46-.79 2.32.84.06 1.7-.43 2.19-1.05z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M1.2 1.4c-.13.14-.2.36-.2.64v11.92c0 .28.07.5.2.64l.06.05 6.64-6.64v-.02L1.26 1.35zM11.08 7.28 9.02 5.22 2.3.64l7.46 7.46zm0 1.46-1.32 1.32-6.72 6.32 7.46-7.46zM9.7 11.5l-1.72-1.72-6.68 6.68c.22.18.57.16.96-.06z" />
    </svg>
  );
}

export function StoreLinks({ stores }: { stores: readonly StoreLink[] }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
        Available on
      </p>
      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
        {stores.map((store) => (
          <li key={store.href}>
            <a
              href={store.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group nav-link inline-flex items-center gap-2 py-0.5 text-[13px] text-paper"
            >
              <StoreMark label={store.label} />
              {store.label}
              <Arrow />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
