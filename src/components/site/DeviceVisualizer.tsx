import { useState } from "react";

type Device = {
  id: string;
  label: string;
  note: string;
  x: number;
  y: number;
  icon: string;
};

const devices: Device[] = [
  {
    id: "laptop",
    label: "Laptop",
    note: "Work calls, files and browsing rely on steady household connectivity.",
    x: 16,
    y: 20,
    icon: "M4 5h16v10H4zM2 18h20",
  },
  {
    id: "tv",
    label: "Smart TV",
    note: "Streaming and entertainment depend on your home's connectivity and network setup.",
    x: 84,
    y: 18,
    icon: "M3 5h18v11H3zM8 20h8",
  },
  {
    id: "phone",
    label: "Phone",
    note: "Phones often move between Wi-Fi and mobile networks throughout the day.",
    x: 8,
    y: 62,
    icon: "M8 3h8v18H8zM11 18h2",
  },
  {
    id: "tablet",
    label: "Tablet",
    note: "Shared family devices add to the number of simultaneous connections at home.",
    x: 92,
    y: 60,
    icon: "M5 3h14v18H5zM11 18h2",
  },
  {
    id: "console",
    label: "Gaming console",
    note: "Interactive play is sensitive to how a home network is arranged and shared.",
    x: 30,
    y: 90,
    icon: "M6 9h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8zM9 13h2M15 12v2",
  },
  {
    id: "speaker",
    label: "Smart speaker",
    note: "Voice assistants and smart devices stay connected in the background.",
    x: 70,
    y: 92,
    icon: "M7 3h10v18H7zM12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  },
];

export function DeviceVisualizer() {
  const [active, setActive] = useState<string | null>(null);
  const current = devices.find((d) => d.id === active);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
      <div className="relative aspect-[4/3] w-full rounded-[2rem] border border-white/10 bg-ink-2/60 p-4">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {devices.map((d) => (
            <line
              key={d.id}
              x1="50"
              y1="50"
              x2={d.x}
              y2={d.y}
              stroke={active === d.id ? "var(--brand)" : "rgba(255,255,255,0.16)"}
              strokeWidth="0.4"
              strokeDasharray="3 3"
              style={{ animation: "dash-flow 2.6s linear infinite" }}
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/50"
            style={{ animation: "pulse-ring 3s ease-out infinite" }}
          />
          <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-brand text-white">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 11a11 11 0 0 1 16 0M7.5 14.5a6.5 6.5 0 0 1 9 0"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="12" cy="18.5" r="1.8" fill="currentColor" />
            </svg>
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-white/70">Wi-Fi router</p>
        </div>

        {devices.map((d) => (
          <button
            key={d.id}
            type="button"
            onMouseEnter={() => setActive(d.id)}
            onFocus={() => setActive(d.id)}
            onClick={() => setActive(d.id)}
            aria-pressed={active === d.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-3 py-2.5 text-[11px] font-semibold transition-all duration-300 ${
              active === d.id
                ? "border-brand bg-brand text-white"
                : "border-white/12 bg-ink text-white/70 hover:border-white/40"
            }`}
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="mx-auto mb-1"
            >
              <path d={d.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {d.label}
          </button>
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <p className="eyebrow text-brand">{current ? current.label : "Connected home"}</p>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          {current
            ? current.note
            : "Hover or tap a device to see how everyday equipment shares one home network."}
        </p>
        <p className="mt-8 text-xs leading-relaxed text-white/35">
          Illustrative only. Actual home network behaviour varies by household, equipment and
          service.
        </p>
      </div>
    </div>
  );
}
