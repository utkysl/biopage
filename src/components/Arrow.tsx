type ArrowProps = {
  className?: string;
};

export function Arrow({ className = "" }: ArrowProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block translate-y-px transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
    >
      ↗
    </span>
  );
}
