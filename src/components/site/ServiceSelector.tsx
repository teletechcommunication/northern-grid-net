import { useState } from "react";
import living from "../../assets/hero-living-room.jpg";
import tvLight from "../../assets/tv-light.jpg";
import streamingDark from "../../assets/streaming-dark.jpg";
import darkHome from "../../assets/dark-home.jpg";

type Option = {
  id: string;
  label: string;
  title: string;
  points: string[];
  cta: string;
  to: "/internet" | "/tv-cable" | "/streaming" | "/assistance";
  image: string;
  alt: string;
};

const options: Option[] = [
  {
    id: "faster",
    label: "Faster internet",
    title: "Understand what your household actually uses",
    points: [
      "How everyday activities share one connection",
      "Why device count matters more than people expect",
      "Wired versus wireless considerations",
      "Questions worth asking before you decide",
    ],
    cta: "Explore internet",
    to: "/internet",
    image: darkHome,
    alt: "Modern connected home lit at dusk",
  },
  {
    id: "wifi",
    label: "Better Wi-Fi",
    title: "Improve your connected home",
    points: [
      "Router placement inside the home",
      "Connected devices and simultaneous use",
      "Home network considerations",
      "Coverage across rooms and floors",
      "Everyday connectivity habits",
    ],
    cta: "Get assistance",
    to: "/assistance",
    image: living,
    alt: "Living room with router, laptop and smart TV",
  },
  {
    id: "tv",
    label: "TV & cable",
    title: "Television that fits how you watch",
    points: [
      "Live viewing versus on-demand habits",
      "Family and household preferences",
      "Equipment already in your home",
      "How TV and internet interact",
    ],
    cta: "Explore TV & cable",
    to: "/tv-cable",
    image: tvLight,
    alt: "Large television on a bright minimal wall",
  },
  {
    id: "streaming",
    label: "Streaming",
    title: "Digital entertainment, explained plainly",
    points: [
      "How streaming apps reach your screens",
      "Smart TV and device compatibility basics",
      "Watching on mobile and tablets",
      "Combining streaming with traditional TV",
    ],
    cta: "Explore streaming",
    to: "/streaming",
    image: streamingDark,
    alt: "Person watching a film in a dimly lit living room",
  },
  {
    id: "multiple",
    label: "Multiple services",
    title: "Looking at more than one category",
    points: [
      "Comparing internet, TV and streaming side by side",
      "Understanding how categories overlap",
      "Keeping track of what each one covers",
      "Organising your questions before deciding",
    ],
    cta: "Get assistance",
    to: "/assistance",
    image: living,
    alt: "Connected living room with multiple devices",
  },
  {
    id: "unsure",
    label: "Not sure yet",
    title: "Start with a conversation",
    points: [
      "Describe your household in plain language",
      "We explain the categories, not the sales pitch",
      "No pressure, no provider-specific claims",
      "Move forward only when it makes sense",
    ],
    cta: "Get assistance",
    to: "/assistance",
    image: darkHome,
    alt: "Warmly lit modern home in the evening",
  },
];

export function ServiceSelector() {
  const [active, setActive] = useState(options[1]!.id);
  const current = options.find((o) => o.id === active)!;

  return (
    <div>
      <div
        role="tablist"
        aria-label="What are you looking for"
        className="flex flex-wrap gap-3"
      >
        {options.map((o) => {
          const selected = o.id === active;
          return (
            <button
              key={o.id}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setActive(o.id)}
              className={`rounded-full border px-6 py-3.5 text-sm font-semibold transition-all duration-400 ${
                selected
                  ? "scale-[1.03] border-ink bg-ink text-white"
                  : "border-line bg-white text-ink/70 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      <div
        key={current.id}
        className="mt-10 grid animate-in fade-in slide-in-from-bottom-4 gap-8 duration-500 lg:grid-cols-[1.1fr_1fr]"
      >
        <div className="rounded-[2rem] border border-line bg-white p-8 lg:p-12">
          <h3 className="display text-3xl lg:text-4xl">{current.title}</h3>
          <ul className="mt-8 space-y-4">
            {current.points.map((p) => (
              <li key={p} className="flex gap-4 border-b border-line pb-4 last:border-0">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-[0.95rem] leading-relaxed text-ink/70">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="tel:+18447268221"
            className="arrow-slide mt-9 inline-flex items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Call (844) 726-8221
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
        <div className="zoom-media relative min-h-[18rem] overflow-hidden rounded-[2rem]">
          <img
            src={current.image}
            alt={current.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
