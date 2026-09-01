type FlagCode = "tr" | "gb" | "jp" | "de";

type IsoFlagProps = {
  code: FlagCode;
};

export function IsoFlag({ code }: IsoFlagProps) {
  const title =
    code === "tr"
      ? "Turkey"
      : code === "gb"
        ? "United Kingdom"
        : code === "jp"
          ? "Japan"
          : "Germany";

  return (
    <svg
      viewBox="0 0 18 12"
      className="h-3 w-[18px] shrink-0 opacity-90"
      aria-hidden="true"
      focusable="false"
    >
      <title>{title}</title>
      {code === "tr" ? (
        <>
          <rect width="18" height="12" fill="#c8102e" />
          <circle cx="7.2" cy="6" r="3.1" fill="#fff" />
          <circle cx="8.05" cy="6" r="2.45" fill="#c8102e" />
          <polygon
            fill="#fff"
            points="10.4,6 12.55,6.7 11.15,4.85 11.15,7.15 12.55,5.3"
          />
        </>
      ) : null}
      {code === "gb" ? (
        <>
          <rect width="18" height="12" fill="#012169" />
          <path d="M0 0 L18 12 M18 0 L0 12" stroke="#fff" strokeWidth="2.2" />
          <path d="M0 0 L18 12 M18 0 L0 12" stroke="#c8102e" strokeWidth="1.1" />
          <path d="M9 0 V12 M0 6 H18" stroke="#fff" strokeWidth="3.4" />
          <path d="M9 0 V12 M0 6 H18" stroke="#c8102e" strokeWidth="1.8" />
        </>
      ) : null}
      {code === "jp" ? (
        <>
          <rect width="18" height="12" fill="#fff" />
          <circle cx="9" cy="6" r="3.2" fill="#bc002d" />
        </>
      ) : null}
      {code === "de" ? (
        <>
          <rect width="18" height="4" y="0" fill="#000" />
          <rect width="18" height="4" y="4" fill="#dd0000" />
          <rect width="18" height="4" y="8" fill="#ffce00" />
        </>
      ) : null}
    </svg>
  );
}
