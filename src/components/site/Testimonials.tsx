import { useState } from "react";

const quotes = [
  {
    text: "I finally understood what I actually needed instead of getting overwhelmed by all the different options.",
    name: "Alex R.",
    role: "Apartment, two people",
  },
  {
    text: "The process was simple and the information was easy to understand.",
    name: "Jordan M.",
    role: "Family home",
  },
  {
    text: "Nobody tried to push anything on me. It was just a clear explanation of how the categories differ.",
    name: "Priya S.",
    role: "Works from home",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i]!;
  const go = (dir: number) => setI((p) => (p + dir + quotes.length) % quotes.length);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
      <div>
        <p className="eyebrow text-brand">Experiences</p>
        <h2 className="display mt-5 text-4xl md:text-5xl">Made to feel simpler.</h2>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/55">
          Illustrative placeholder feedback shown for design purposes.
        </p>
      </div>
      <div>
        <blockquote
          key={i}
          className="animate-in fade-in slide-in-from-right-6 duration-500"
          aria-live="polite"
        >
          <p className="text-2xl leading-snug font-medium tracking-tight text-ink md:text-[2rem]">
            “{q.text}”
          </p>
          <footer className="mt-7 text-sm text-ink/55">
            <span className="font-semibold text-ink">— {q.name}</span> · {q.role}
          </footer>
        </blockquote>
        <div className="mt-10 flex items-center gap-4 border-t border-line pt-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
          >
            Previous
          </button>
          <span className="text-sm tabular-nums text-ink/50">
            0{i + 1} / 0{quotes.length}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
