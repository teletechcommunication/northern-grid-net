import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { StaggeredMenu, type StaggeredMenuHandle } from "./StaggeredMenu";

const links = [
  { to: "/internet", label: "Internet" },
  { to: "/tv-cable", label: "TV & Cable" },
  { to: "/streaming", label: "Streaming" },
  { to: "/about", label: "How It Works" },
  { to: "/resources", label: "Resources" },
] as const;

const menuItems = [
  { label: "Internet", ariaLabel: "Explore internet options", link: "/internet" },
  { label: "TV & Cable", ariaLabel: "Explore TV and cable options", link: "/tv-cable" },
  { label: "Streaming", ariaLabel: "Explore streaming options", link: "/streaming" },
  { label: "How It Works", ariaLabel: "Learn how Northern-Grid Net works", link: "/about" },
  { label: "Resources", ariaLabel: "Browse resources", link: "/resources" },
  { label: "Assistance", ariaLabel: "Get assistance", link: "/assistance" },
  { label: "FAQ", ariaLabel: "Frequently asked questions", link: "/faq" },
  { label: "Contact", ariaLabel: "Contact us", link: "/contact" },
];

const socialItems = [
  { label: "Disclaimer", link: "/disclaimer" },
  { label: "Assistance", link: "/assistance" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<StaggeredMenuHandle | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "top-2" : "top-5"
        }`}
      >
        <div className="shell">
          <nav
            aria-label="Primary"
            className={`mx-auto flex items-center justify-between gap-6 rounded-full border px-4 transition-all duration-500 ${
              scrolled
                ? "border-line bg-white/95 py-2 shadow-[0_16px_40px_-28px_rgba(16,17,20,0.6)] backdrop-blur"
                : "border-transparent bg-white/70 py-3 backdrop-blur-sm"
            }`}
          >
            <Link to="/" aria-label="Northern-Grid Net home" className="shrink-0 pl-1">
              <Logo />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-brand"
                    activeProps={{ className: "text-brand" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="tel:+18447268221"
                className="arrow-slide hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand sm:inline-flex"
              >
                (844) 726-8221
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <button
                ref={triggerRef}
                type="button"
                onClick={() => menuRef.current?.toggle()}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <span className="sr-only">Menu</span>
                <span className="relative block h-3 w-4" aria-hidden="true">
                  <span
                    className={`absolute left-0 top-0 h-[1.6px] w-full bg-current transition-transform duration-300 ${
                      open ? "translate-y-[5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 bottom-0 h-[1.6px] w-full bg-current transition-transform duration-300 ${
                      open ? "-translate-y-[5px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <StaggeredMenu
        ref={menuRef}
        isFixed
        hideTrigger
        triggerRef={triggerRef}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        colors={["var(--brand)", "var(--cyan)"]}
        accentColor="var(--brand)"
        menuButtonColor="var(--ink)"
        openMenuButtonColor="var(--ink)"
        changeMenuColorOnOpen
        closeOnClickAway
        onMenuOpen={() => setOpen(true)}
        onMenuClose={() => setOpen(false)}
      />
    </>
  );
}
