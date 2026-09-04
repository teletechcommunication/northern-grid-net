export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-ink" : "text-white";
  return (
    <span className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <circle cx="16" cy="16" r="15" fill="var(--brand)" />
        <circle cx="16" cy="22" r="2.6" fill="#fff" />
        <path
          d="M9.5 16.5a9 9 0 0 1 13 0"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12.6 19.6a5 5 0 0 1 6.8 0"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className={`text-[1.05rem] font-extrabold tracking-[-0.04em] ${text}`}>
        NORTHERN-GRID NET
      </span>
    </span>
  );
}
