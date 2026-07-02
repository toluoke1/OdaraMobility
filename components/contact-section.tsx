type ContactSectionProps = {
  className?: string;
};

const inputClassName =
  "w-full border border-[color:var(--color-divider)] bg-white px-4 py-4 text-base text-[color:var(--color-ink)] outline-none transition-colors placeholder:text-[color:color-mix(in_srgb,var(--color-muted)_45%,white)] focus:border-[color:var(--color-ink-strong)]";

export function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section
      className={`mx-auto flex w-full max-w-[92rem] flex-col gap-0 px-0 py-0 ${className}`.trim()}
    >
      {/* Banner mirrors the homepage mockup and introduces the contact form. */}
      <div className="bg-[#102a45] px-5 py-5 text-center sm:px-8">
        <h2 className="font-serif text-[2.4rem] leading-none text-white sm:text-[3.2rem] lg:text-[4rem]">
          Let&apos;s Chat!
        </h2>
        <p className="mt-1 text-[1.05rem] leading-6 text-[color:var(--color-accent)]">
          Complete the form below
        </p>
      </div>

      {/* Inputs stay flat and minimal so the form reads like one clean block. */}
      <form className="space-y-0 bg-[color:var(--color-background)]" action="#">
        <div className="grid gap-2 md:grid-cols-2">
          <label className="space-y-2">
            <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              First Name <span className="normal-case">(required)</span>
            </span>
            <input type="text" name="firstName" required className={inputClassName} />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              Last Name <span className="normal-case">(required)</span>
            </span>
            <input type="text" name="lastName" required className={inputClassName} />
          </label>
        </div>

        <label className="space-y-2 block pt-2">
          <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            Email Address <span className="normal-case">(required)</span>
          </span>
          <input type="email" name="email" required className={inputClassName} />
        </label>

        <label className="space-y-2 block pt-2">
          <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            Company or Agency Name <span className="normal-case">(required)</span>
          </span>
          <input type="text" name="organization" required className={inputClassName} />
        </label>

        <label className="space-y-2 block pt-2">
          <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            Location <span className="normal-case">(required)</span>
          </span>
          <input
            type="text"
            name="location"
            required
            placeholder="State, Country"
            className={inputClassName}
          />
        </label>

        <label className="space-y-2 block pt-2">
          <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            How Can We Help? <span className="normal-case">(required)</span>
          </span>
          <span className="block text-sm text-[color:var(--color-muted)]">
            Please do not include confidential or sensitive information in your
            message.
          </span>
          <textarea
            name="message"
            required
            rows={6}
            className={`${inputClassName} resize-y`}
          />
        </label>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="min-w-40 border border-[color:var(--color-ink-strong)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-strong)] transition-colors hover:bg-[color:var(--color-ink-strong)] hover:text-white sm:px-8 sm:py-4"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
