import { Reveal } from "./Reveal";

export function AssistanceCTA({
  title = "Not sure where to begin?",
  copy = "Tell us what you're looking for and request independent assistance exploring connectivity and entertainment options.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-7 py-16 text-white lg:px-16 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 right-24 h-96 w-96 rounded-full border border-white/20"
            />
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85">{copy}</p>
              </div>
              <div>
                <a
                  href="tel:+18447268221"
                  className="arrow-slide inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-black"
                >
                  Call (844) 726-8221
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <p className="mt-4 text-xs text-white/70">
                  Independent third-party assistance platform.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
