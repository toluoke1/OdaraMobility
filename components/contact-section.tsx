type ContactSectionProps = {
  className?: string;
};

const inputClassName =
  "w-full border border-[color:var(--color-divider)] bg-transparent px-4 py-4 text-base text-[color:var(--color-ink)] outline-none transition-colors placeholder:text-[color:color-mix(in_srgb,var(--color-muted)_45%,white)] focus:border-[color:var(--color-ink)]";

export function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section
      className={`mx-auto flex w-full max-w-[120rem] flex-col gap-10 px-6 py-18 sm:px-10 lg:px-14 ${className}`.trim()}
    >
      <div className="space-y-6 text-center">
        <h2 className="font-serif text-5xl leading-none text-[color:var(--color-ink)] sm:text-6xl">
          Let&apos;s Chat.
        </h2>
        <div className="mx-auto max-w-6xl space-y-5 text-left text-lg leading-8 text-[color:var(--color-muted)]">
          <p>
            Use the form below to contact us. To help us best service your
            inquiry, include your company or agency name, what kind of
            transportation or mobility services you provide and in what
            location, a description of your transportation project goals, and
            which of our service areas you&apos;re inquiring about. Please be as
            detailed as possible.
          </p>
          <p>
            For job opportunities, please email us your resume. We&apos;re always
            looking for new and exceptional talent to lead the firm into
            uncharted fields of practice.
          </p>
        </div>
      </div>

      <form className="space-y-6" action="#">
        <div className="grid gap-4 md:grid-cols-2">
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

        <label className="space-y-2">
          <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            Email Address <span className="normal-case">(required)</span>
          </span>
          <input type="email" name="email" required className={inputClassName} />
        </label>

        <label className="space-y-2">
          <span className="block text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            Company or Agency Name <span className="normal-case">(required)</span>
          </span>
          <input type="text" name="organization" required className={inputClassName} />
        </label>

        <label className="space-y-2">
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

        <label className="space-y-2">
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

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="min-w-40 border border-[color:var(--color-ink)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-background)]"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="space-y-6 pt-6 text-center">
        <blockquote className="mx-auto max-w-6xl font-serif text-4xl leading-tight text-[color:var(--color-ink)] sm:text-5xl">
          &ldquo;Providing people with transportation options gives them the
          freedom to interact with the world.&rdquo;
        </blockquote>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Tolu Becks Oke
        </p>
      </div>
    </section>
  );
}
