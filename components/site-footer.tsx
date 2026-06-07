import Link from "next/link";

const internalLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[color:var(--color-divider)]">
      <div className="mx-auto flex w-full max-w-[120rem] flex-col gap-14 px-6 py-14 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-6">
            <p className="font-serif text-3xl leading-none text-[color:var(--color-ink)] sm:text-4xl">
              Women-Owned Business
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold tracking-[0.06em]">
              {internalLinks.map((item) => (
                <span key={item.href} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="text-[color:var(--color-accent)] transition-colors hover:text-[color:var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                  <span className="text-[color:var(--color-muted)]">|</span>
                </span>
              ))}
              <a
                href="mailto:tolu@odaramobility.com"
                className="text-[color:var(--color-accent)] transition-colors hover:text-[color:var(--color-ink)]"
              >
                contact
              </a>
            </div>
            <address className="not-italic text-lg leading-8 text-[color:var(--color-muted)]">
              <a href="tel:+14133456362" className="transition-colors hover:text-[color:var(--color-ink)]">
                (413) 345-6362
              </a>{" "}
              <span aria-hidden="true">|</span>{" "}
              <a
                href="mailto:tolu@odaramobility.com"
                className="transition-colors hover:text-[color:var(--color-ink)]"
              >
                tolu@odaramobility.com
              </a>
              <br />
              Amherst, MA 01002
            </address>
          </div>

          <div className="max-w-2xl space-y-6 text-left lg:pt-3">
            <p className="text-lg leading-8 text-[color:var(--color-muted)]">
              Odara Mobility LLC provides data collection, analytics, mobility
              modeling, transportation planning, and strategic advice for
              transportation agencies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
