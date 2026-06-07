import Link from "next/link";

const navigation = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[color:var(--color-divider)]">
      <div className="mx-auto grid min-h-24 w-full max-w-[120rem] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 sm:px-10 lg:px-14">
        <div aria-hidden="true" />
        <Link
          href="/"
          className="justify-self-center text-center text-[1.95rem] uppercase tracking-[0.14em] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-accent)]"
        >
          Odara Mobility
        </Link>
        <nav
          aria-label="Primary"
          className="justify-self-end text-sm font-medium tracking-[0.06em] text-[color:var(--color-muted)]"
        >
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[color:var(--color-accent)]"
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
