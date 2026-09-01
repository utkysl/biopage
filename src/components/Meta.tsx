import type { ReactNode } from "react";

type MonoTagProps = {
  children: ReactNode;
  className?: string;
};

export function MonoTag({ children, className = "" }: MonoTagProps) {
  return (
    <span
      className={`font-mono text-xs tracking-wider text-zinc-400 uppercase ${className}`}
    >
      {children}
    </span>
  );
}

type IndexMarkProps = {
  n: string;
  suffix?: string;
};

export function IndexMark({ n, suffix }: IndexMarkProps) {
  return (
    <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
      INDEX {n}
      {suffix ? <span> — {suffix}</span> : null}
    </p>
  );
}
