import Link from "next/link";

const navigation = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[color:var(--color-divider)]">
      <div className="mx-auto flex w-full max-w-[120rem] flex-col items-center gap-3 px-5 py-4 sm:px-8 lg:grid lg:min-h-24 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:py-0 lg:px-14">
        <div aria-hidden="true" className="hidden lg:block" />
        <Link
          href="/"
          className="text-center text-[1.45rem] uppercase tracking-[0.12em] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-accent)] sm:text-[1.65rem] lg:justify-self-center lg:text-[1.95rem] lg:tracking-[0.14em]"
        >
          Odara Mobility
        </Link>
        <nav
          aria-label="Primary"
          className="text-[0.95rem] font-medium tracking-[0.06em] text-[color:var(--color-accent)] sm:text-[1rem] lg:justify-self-end lg:text-[1.2rem]"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:justify-end lg:gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[color:var(--color-ink-strong)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
