import Link from "next/link";
import Image from "next/image";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-[color:var(--color-divider)]"
        style={{
          backgroundColor: "#11284b",
          backgroundImage: `
            radial-gradient(circle at center, rgba(6, 16, 33, 0.42) 2px, transparent 2px),
            radial-gradient(circle at center, rgba(6, 16, 33, 0.34) 1px, transparent 1px),
            radial-gradient(circle at center, transparent 62px, rgba(6, 16, 33, 0.55) 63px, transparent 65px)
          `,
          backgroundSize: "136px 136px, 34px 34px, 136px 136px",
          backgroundPosition: "0 0, 17px 17px, 0 0",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,28,52,0.15),rgba(7,18,37,0.32))]" />
        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-[120rem] items-center justify-center px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="max-w-5xl text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-accent)] sm:text-base">
              Odara Mobility LLC
            </p>
            <h1 className="font-serif text-6xl leading-[0.95] text-white sm:text-7xl lg:text-[8.5rem]">
              Transportation
              <br />
              Consulting
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[120rem] flex-col gap-12 px-6 py-18 sm:px-10 lg:px-14 lg:py-24">
        <div className="relative lg:min-h-[38rem]">
          <div className="relative z-10 max-w-[48rem] space-y-6 pt-2">
            <div className="space-y-2 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-[color:var(--color-ink)]">
              <span className="inline-block bg-white px-4 py-2 shadow-[0_10px_24px_rgba(22,34,55,0.05)]">
                Data-driven transportation
              </span>
              <br />
              <span className="inline-block bg-white px-4 py-2 shadow-[0_10px_24px_rgba(22,34,55,0.05)] lg:pr-12">
                consulting for equitable,
              </span>
              <br />
              <span className="inline-block bg-white px-4 py-2 shadow-[0_10px_24px_rgba(22,34,55,0.05)] lg:pr-8">
                accessible, &amp; efficient
              </span>
              <br />
              <span className="inline-block bg-white px-4 py-2 shadow-[0_10px_24px_rgba(22,34,55,0.05)] lg:pr-16">
                mobility systems
              </span>
            </div>
            <p className="max-w-2xl text-lg italic leading-8 text-[color:var(--color-muted)] sm:text-xl">
              At Odara Mobility LLC, we help organizations plan, analyze,
              improve, AND SCALE THEIR transportation systems
            </p>
          </div>

          <div className="relative mt-8 aspect-[5/4] overflow-hidden border border-[color:var(--color-divider)] md:ml-[18%] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:aspect-auto lg:h-[35rem] lg:w-[58%] lg:ml-0">
            <Image
              src="/home-overview-traffic.png"
              alt="City skyline and highway traffic at dusk"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,45,77,0.08),rgba(11,21,36,0.12))]" />
          </div>
        </div>

        <div className="border-b border-[color:var(--color-divider)] pb-14">
          <div className="w-full space-y-6 text-[color:var(--color-ink)]">
            <p className="font-serif text-xl leading-[1.65] sm:text-2xl lg:text-[2rem]">
              Transportation systems shape how people access jobs, services, and
              opportunities. From cycle and walk micromobilities to advanced
              aviation infrastructure and services, the ever-changing travel
              industry increasingly affects and is driven by complex economic,
              social and behavioral factors.
            </p>
            <p className="font-serif text-xl leading-[1.65] sm:text-2xl lg:text-[2rem]">
              Odara Mobility helps organizations design smarter, more
              equitable, and efficient mobility solutions using data, research,
              and strategy. With extensive experience in data analytics,
              artificial intelligence, and project management,{" "}
              <span className="text-[color:var(--color-accent)]">
                Dr Tolu Becks Oke
              </span>{" "}
              has helped governmental and private transportation agencies
              scale.
            </p>
            <Link
              href="/about"
              className="inline-flex min-h-14 w-full items-center justify-center border border-[color:var(--color-ink)] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-background)]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="mx-auto w-full max-w-[120rem] px-6 pb-18 sm:px-10 lg:px-14">
        <div className="border-t border-[color:var(--color-divider)] pt-8 text-sm uppercase tracking-[0.14em] text-[color:var(--color-muted)]">
          <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
            <Link
              href="/projects"
              className="rounded-full border border-[color:var(--color-divider)] px-5 py-3 text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[color:var(--color-divider)] px-5 py-3 text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              About Odara
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
