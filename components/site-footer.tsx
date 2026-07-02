import Link from "next/link";

const internalLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
];

const certifications = [
  {
    name: "Women Business Enterprise",
    acronym: "WBE",
  },
  {
    name: "Minority Business Enterprise",
    acronym: "MBE",
  },
  {
    name: "Small Business Purchasing Program",
    acronym: "SBPP",
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[color:var(--color-divider)]">
      <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        {/* Certifications live in the shared footer so the trust signal appears site-wide. */}
        <section className="rounded-[1rem] border border-[color:var(--color-divider)] bg-white px-5 py-5 shadow-[0_16px_34px_rgba(17,24,39,0.04)] sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Certifications
              </p>
              <h2 className="mt-2 font-serif text-[1.7rem] leading-none text-[color:var(--color-ink-strong)] sm:text-[2.1rem] lg:text-[2.4rem]">
                Certified in Massachusetts
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {certifications.map((item) => (
              <div
                key={item.acronym}
                className="rounded-[0.9rem] border border-[color:var(--color-ink-strong)] bg-[color:var(--color-background)] px-4 py-4 text-center font-serif text-[1.05rem] leading-6 text-[color:var(--color-ink-strong)] sm:text-[1.25rem] sm:leading-7"
              >
                <span className="block">{item.name}</span>
                <span className="mt-1 block text-center">({item.acronym})</span>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary footer keeps navigation and direct contact details lightweight. */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-6">
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
            </div>
            <address className="not-italic text-[1rem] leading-7 text-[color:var(--color-muted)] sm:text-lg sm:leading-8">
              <a href="tel:+14133456362" className="transition-colors hover:text-[color:var(--color-ink)]">
                (413) 345-6362
              </a>{" "}
              <span aria-hidden="true">|</span>{" "}
              <a
                href="mailto:tolu@odaramobility.com"
                className="transition-colors hover:text-[color:var(--color-ink)]"
              >
                tolu(at)odaramobility.com
              </a>
              <br />
              Amherst, MA 01002
            </address>
          </div>

          <div className="max-w-2xl space-y-6 text-left lg:pt-3">
            <p className="text-[1rem] leading-7 text-[color:var(--color-muted)] sm:text-lg sm:leading-8">
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
