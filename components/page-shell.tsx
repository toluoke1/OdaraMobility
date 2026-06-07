type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

type PageSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: PageShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col gap-16 px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
      <section className="grid gap-8 border-b border-[color:var(--color-divider)] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-end">
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl font-serif text-5xl leading-none text-[color:var(--color-ink)] sm:text-6xl">
            {title}
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[color:var(--color-muted)] sm:text-xl">
          {intro}
        </p>
      </section>

      <div className="flex flex-col gap-12">{children}</div>
    </div>
  );
}

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section className="grid gap-6 border-b border-[color:var(--color-divider)] pb-10 last:border-b-0 last:pb-0 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
      <div>
        <h2 className="font-serif text-3xl leading-none text-[color:var(--color-ink)] sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="max-w-4xl text-lg leading-8 text-[color:var(--color-muted)]">
        {children}
      </div>
    </section>
  );
}
