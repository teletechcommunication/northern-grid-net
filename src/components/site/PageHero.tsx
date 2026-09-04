import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white lg:pt-48 lg:pb-28">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </>
      ) : null}
      <div className="shell relative">
        <Reveal>
          <p className="eyebrow text-brand">{eyebrow}</p>
          <h1 className="display mt-6 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            {intro}
          </p>
          {children ? <div className="mt-10">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
