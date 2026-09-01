export function OrbitField() {
  return (
    <svg
      className="pointer-events-none absolute -left-[18%] -top-[12%] h-[128%] w-[136%] overflow-visible"
      viewBox="0 0 360 360"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="180"
        cy="180"
        rx="118"
        ry="86"
        stroke="rgb(255 255 255 / 0.1)"
        strokeWidth="0.75"
      />
      <ellipse
        cx="180"
        cy="180"
        rx="148"
        ry="112"
        stroke="rgb(76 195 245 / 0.22)"
        strokeWidth="0.75"
      />
      <ellipse
        cx="180"
        cy="180"
        rx="178"
        ry="138"
        stroke="rgb(255 255 255 / 0.06)"
        strokeWidth="0.75"
        strokeDasharray="3 7"
      />
      <line
        x1="180"
        y1="28"
        x2="180"
        y2="332"
        stroke="rgb(255 255 255 / 0.06)"
        strokeWidth="0.75"
      />
      <line
        x1="28"
        y1="180"
        x2="332"
        y2="180"
        stroke="rgb(255 255 255 / 0.06)"
        strokeWidth="0.75"
      />
      <circle cx="328" cy="180" r="2.4" fill="#4cc3f5" />
    </svg>
  );
}
