import Image from "next/image";
import urbanImage from "@/images/urban.jpg";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[92rem] flex-col pb-24">
      {/* Patterned hero with the primary brand message and founder quote. */}
      <section
        className="relative overflow-hidden bg-[#102a45]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(8, 24, 45, 0.18) 0, rgba(8, 24, 45, 0.18) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(8, 24, 45, 0.18) 0, rgba(8, 24, 45, 0.18) 2px, transparent 2px),
            linear-gradient(45deg, rgba(10, 28, 55, 0.72) 25%, transparent 25%, transparent 75%, rgba(10, 28, 55, 0.72) 75%, rgba(10, 28, 55, 0.72)),
            linear-gradient(-45deg, rgba(10, 28, 55, 0.72) 25%, transparent 25%, transparent 75%, rgba(10, 28, 55, 0.72) 75%, rgba(10, 28, 55, 0.72))
          `,
          backgroundSize: "44px 44px, 44px 44px, 88px 88px, 88px 88px",
          backgroundPosition: "0 0, 22px 22px, 0 0, 0 0",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,24,45,0.18),rgba(10,24,45,0.26))]" />
        <div className="relative flex min-h-[54rem] flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:min-h-[57rem] lg:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
            Odara Mobility LLC
          </p>
          <h1 className="mt-8 font-serif text-[clamp(4.8rem,10vw,8.2rem)] leading-[0.92] text-white">
            Transportation
            <br />
            Consulting
          </h1>

          <div className="mt-18 w-full max-w-[78rem] space-y-3">
            <blockquote className="text-center text-[1.7rem] italic leading-[1.6] text-white sm:text-[2rem]">
              &ldquo;Providing people with transportation options gives them the
              freedom to interact with the world.&rdquo;
            </blockquote>
            <p className="text-right font-serif text-[1.95rem] leading-none text-[color:var(--color-accent)] sm:text-[2.2rem]">
              -Tolu Becks Oke
            </p>
          </div>
        </div>
      </section>

      {/* Full-width city image acts as the visual bridge into the contact section. */}
      <section className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={urbanImage}
          alt="Urban transportation corridor in a city center"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Shared contact form reused across pages. */}
      <ContactSection className="pt-0" />
    </div>
  );
}
