import Image, { StaticImageData } from "next/image";
import behavioralResearchImage from "@/images/Behavioral Research_Stakeholder Engagement.jpg";
import dataAnalyticsImage from "@/images/data_analytics.jpeg";
import demandForecastingImage from "@/images/Demand Modeling_Travel Forecasting.jpg";
import mentoringImage from "@/images/mentoring.jpeg";
import mitLogo from "@/images/mit_logo.png";
import mhcLogo from "@/images/mhc_logo.png";
import proposalWritingImage from "@/images/Proposal Development_Grant Writing.jpg";
import toluHeadshot from "@/images/tolu_headshot.jpeg";
import transportationResearchImage from "@/images/Transportation Planning_Research.jpg";
import umassLogo from "@/images/umass_logo.png";

const history =
  "After about a decade of working at a large transportation consulting firm and a mid-sized public transit agency, founder and principal Tolu Oke started Odara Mobility in 2019. Odara Mobility specializes in transportation planning, demand modeling, cost-benefit analysis, and safety and behavioral research.";

const founderBio =
  "Tolu has over 15 years of experience in solving complex problems and applying innovative and quantitative techniques to generate insights about transportation initiatives and their impacts on travel behavior, planning, and policy decisions. Her expertise includes impact and equity analysis, demand modeling, behavioral research, and transportation planning. Throughout her career, she has led multi-agency teams to successfully deliver on project goals for public and private sector clients.";

const education = [
  {
    school: "University of Massachusetts, Amherst",
    degree: "PhD, Civil Engineering, 2026",
    logo: umassLogo,
  },
  {
    school: "Massachusetts Institute of Technology",
    degree: "M.Eng., Civil Engineering, 2015",
    logo: mitLogo,
  },
  {
    school: "University of Massachusetts, Amherst",
    degree: "B.Sc., Mechanical Engineering, 2010",
    logo: umassLogo,
  },
  {
    school: "Mount Holyoke College",
    degree: "B.A., Physics, 2009",
    logo: mhcLogo,
  },
];

const publications = [
  {
    prefix: "Oke T. (2026). Doctoral Dissertation ",
    linkedText: "Investigating Pedestrian Safety Near Transit Bus Stops. ",
    href: "https://scholarworks.umass.edu/",
    suffix: "University of Massachusetts, Amherst.",
  },
  {
    prefix: "Kostopoulou E., Oke T., Oke J., Christofa E. (2026). ",
    linkedText: "A Scenario Discovery Approach to Transit Network Optimization for Improved Access in Areas of Persistent Poverty. ",
    href: "https://link.springer.com/article/10.1007/s42421-026-00167-3",
    suffix: "Data Science for Transportation.",
  },
  {
    prefix: "Oke T., Pate A., Tainter F., Oke J., Knodler M. (2025). ",
    linkedText: "Bus stop typology reveals crash risk environments. ",
    href: "https://www.researchgate.net/publication/398081491_Bus_Stop_Typology_Reveals_Crash_Risk_Environments",
    suffix: "Data Science for Transportation.",
  },
  {
    prefix: "Arabi M., Oke T., Baker E., Oke J. (2025). ",
    linkedText: "Harnessing hybrid buses in the near-term leads to faster transit decarbonization. ",
    href: "https://www.sciencedirect.com/science/article/pii/S2589004225018280",
    suffix: "iScience.",
  },
  {
    prefix: "Oke, A., Alkhatib, A., Almuhamf, I., Carruthers, M., Moody, A., Alam (2024). ",
    linkedText: "Rapid Screening Financial and Economic Evaluation Model for Intercity Rail: Application to the Kingdom of Saudi Arabia. ",
    href: "https://onlinepubs.trb.org/onlinepubs/am/SessionsEvents.pdf",
    suffix: "104th Transportation Research Board Annual Meeting.",
  },
  {
    prefix: "Oke T. (2023). ",
    linkedText: "Developing an Origin-Destination-Transfer (ODX) Model. ",
    href: "https://sumcmic.org/developing-an-origin-destination-transfer-odx-model",
    suffix: "Shared-Use Mobility Center.",
  },
  {
    prefix: "Oke T., Dasgupta M., Ainbinder A., Shepard B. (2023). ",
    linkedText: "PVTA RideCare-PV Program Evaluation Report. ",
    href: "https://www.nadtc.org/wp-content/uploads/PVTAFinal-RideCare-Report_20230728.pdf",
    suffix: "Federal Transit Administration .",
  },
  {
    prefix: "Morrissey A., Oke T. (2022). ",
    linkedText: "Fare-Capping Impact Analysis Using Mobile Ticket Data.",
    href: "https://doi.org/10.1177/03611981221082529",
    suffix: " Transportation Research Record, 2676(7), 811-822.",
  },
  {
    prefix: "Clark M., Ogunbekun T. (2018). ",
    linkedText: "Shared Ebike Potential: London and New York.",
    href: "https://www.steergroup.com/insights/news/understanding-potential-shared-ebikes-new-york-city",
    suffix: " Technical Report 23334001. Boston, MA: Steer.",
  },
  {
    prefix: "Bailey N., Doyle T.P., Ogunbekun T., Zhao J. (2016). ",
    linkedText:
      "A Ride to Remember: Experienced vs. Remembered Emotion on Public Transit.",
    href: "https://mobility.mit.edu/publications/2016/bailey-ride-remember-experienced-vs-remembered-emotion-public-transit",
    suffix: " 95th Transportation Research Board Annual Meeting.",
  },
  {
    prefix: "Ogunbekun T. Master's Thesis (2015). ",
    linkedText: "The impact of Amtrak performance in the Northeast Corridor.",
    href: "http://web.mit.edu/hsr-group/documents/OGUNBEKUN,%20Tolu_Thesis.pdf",
    suffix: " Massachusetts Institute of Technology",
  },
];

const practiceAreas = [
  {
    title: "Data Science & Analytics",
    body: "Leverage advanced analytics to turn transportation data into mobility insights and support policy decisions.",
    image: dataAnalyticsImage,
    imageAlt: "Data analytics interface on screens",
    animationClass: "about-float",
  },
  {
    title: "Demand Modeling & Travel Forecasting",
    body: "Build travel demand forecasting models to predict behavior and assess transportation project feasibility and impact.",
    image: demandForecastingImage,
    imageAlt: "Map graphic representing travel demand forecasting",
    animationClass: "about-float about-float-delay-1",
  },
  {
    title: "Transportation Planning & Research",
    body: "Develop quantitative and qualitative research to identify trends and guide strategic planning for system improvement.",
    image: transportationResearchImage,
    imageAlt: "Aerial transportation interchange",
    animationClass: "about-float",
  },
  {
    title: "Behavioral Research & Stakeholder Engagement",
    body: "Design stated-preference and customer surveys, and lead stakeholder engagement, to understand travel behavior.",
    image: behavioralResearchImage,
    imageAlt: "Group discussion bubbles representing stakeholder engagement",
    animationClass: "about-float about-float-delay-2",
  },
  {
    title: "Proposal Development & Grant Writing",
    body: "Secure funding through targeted research proposals and federal grants for university and transit agency initiatives.",
    image: proposalWritingImage,
    imageAlt: "Project management concepts on a digital screen",
    animationClass: "about-float about-float-delay-2",
  },
  {
    title: "Teaching & Professional Training",
    body: "Provide professional training and mentorship to strengthen transportation analytical and technical capabilities.",
    image: mentoringImage,
    imageAlt: "Mentoring and workshop setting",
    animationClass: "about-float about-float-delay-1",
  },
];

function EducationItem({
  school,
  degree,
  logo,
}: {
  school: string;
  degree: string;
  logo: StaticImageData;
}) {
  return (
    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-4">
      {/* School seal + degree copy are kept as a reusable row for the education list. */}
      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[color:var(--color-divider)] bg-white">
        <Image src={logo} alt={`${school} logo`} fill className="object-contain p-1.5" />
      </div>
      <div className="space-y-1">
        <h4 className="font-serif text-[1.2rem] leading-tight text-[color:var(--color-ink-strong)] sm:text-[1.3rem]">
          {school}
        </h4>
        <p className="text-[1.05rem] leading-7 text-[color:var(--color-ink)]">
          {degree}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-[84rem] flex-col gap-8 px-5 pb-20 pt-4 sm:gap-10 sm:px-8 lg:px-10 lg:pt-6">
      {/* Short intro block kept separate from the founder card for a simpler page rhythm. */}
      <section className="space-y-3">
        <h1 className="font-serif text-[2.1rem] leading-none text-[color:var(--color-accent)] sm:text-[2.5rem] lg:text-[3rem]">
          A Brief History
        </h1>
        <p className="max-w-none text-[1.08rem] leading-[1.55] text-[color:var(--color-ink)] sm:text-[1.2rem] lg:text-[1.55rem]">
          {history}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-serif text-[2.1rem] leading-none text-[color:var(--color-accent)] sm:text-[2.5rem] lg:text-[3rem]">
          Founder and Principal
        </h2>

        {/* Mobile stacks image, name, bio, then sections; desktop restores the two-column card. */}
        <div className="rounded-[1rem] border-[4px] border-[color:var(--color-ink-strong)] bg-transparent px-0 py-0">
          <div className="grid gap-6 px-5 py-5 sm:px-8 sm:py-6 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-10 lg:px-6">
            <div className="space-y-0">
              <div className="relative mx-auto aspect-[4/5] max-w-[15rem] overflow-hidden rounded-[0.7rem] sm:max-w-[17rem] lg:mx-0 lg:max-w-[20rem]">
                <Image
                  src={toluHeadshot}
                  alt="Portrait of Tolu Ogunbekun (Becks) Oke"
                  fill
                  sizes="(min-width: 1024px) 20rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-5 lg:pr-8">
              <div className="bg-[color:var(--color-accent)] px-5 py-5">
                <p className="text-center font-serif text-[1.45rem] leading-[1.15] text-black sm:text-[1.65rem] lg:text-right lg:text-[1.85rem]">
                  Tolu Oke, PhD
                </p>
              </div>

              <p className="max-w-none text-[1.08rem] leading-[1.55] text-[color:var(--color-ink)] sm:text-[1.2rem] lg:text-[1.55rem]">
                {founderBio}
              </p>
            </div>
          </div>

          <div className="grid gap-8 border-t border-[color:var(--color-divider)] px-5 py-5 sm:px-8 sm:py-6 lg:grid-cols-[24rem_minmax(0,1fr)] lg:gap-10 lg:px-6">
            <section className="space-y-6">
              <h3 className="font-serif text-[1.7rem] leading-none text-[color:var(--color-ink-strong)] sm:text-[1.9rem] lg:text-[2.15rem]">
                Education
              </h3>
              <div className="space-y-5">
                {education.map((item) => (
                  <EducationItem
                    key={`${item.school}-${item.degree}`}
                    school={item.school}
                    degree={item.degree}
                    logo={item.logo}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="font-serif text-[1.7rem] leading-none text-[color:var(--color-ink-strong)] sm:text-[1.9rem] lg:text-[2.15rem]">
                  Publications &amp; Blogposts
              </h3>
              {/* Linked titles are highlighted inline so only the referenced work turns orange. */}
              <div className="columns-1 gap-8 space-y-0 text-[1rem] leading-7 text-[color:var(--color-muted)] sm:text-[1.05rem] xl:columns-2">
                {publications.map((item, index) => (
                  <p
                    key={`${index}-${item.prefix}`}
                    className="mb-4 break-inside-avoid-column"
                  >
                    {item.prefix}
                    {item.linkedText ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[color:var(--color-accent)] transition-colors hover:text-[color:var(--color-ink-strong)]"
                      >
                        {item.linkedText}
                      </a>
                    ) : null}
                    {item.suffix}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <div className="border-t border-[color:var(--color-divider)] px-5 pb-5 pt-4 sm:px-8 sm:pb-6 sm:pt-5">
            <div className="space-y-1">
              <p className="font-serif text-[1.2rem] text-[color:var(--color-ink-strong)] sm:text-[1.45rem]">
                Affiliated with:
              </p>
              <p className="text-[1rem] leading-7 text-[color:var(--color-ink)] lg:whitespace-nowrap">
                Transit Cooperative Research Program Project A-49 Panel on Fare
                Policies, Structures, and Technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-3">
        <div className="bg-[#102a45] px-6 py-4 text-center">
          <h2 className="font-serif text-[2rem] leading-none text-white sm:text-[2.45rem] lg:text-[3.1rem]">
            Our Areas of Practice
          </h2>
        </div>

        {/* Practice cards reuse one image-led pattern and only vary by content. */}
        <div className="mt-7 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((area) => (
            <article key={area.title} className={`text-center ${area.animationClass}`.trim()}>
              <div
                className="group relative mx-auto aspect-[1.1/0.88] w-full max-w-[22rem] overflow-hidden sm:aspect-[1.18/0.8]"
                style={{ borderRadius: "1.6rem 1.6rem 3.9rem 1.6rem" }}
              >
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 22rem, (min-width: 768px) 44vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,16,28,0.04),rgba(9,16,28,0.12))]" />
                <div className="absolute bottom-0 left-1/2 w-[80%] -translate-x-1/2 bg-[rgba(133,132,127,0.95)] px-4 py-3">
                  <h3 className="font-serif text-[1.02rem] leading-[1.08] text-[color:var(--color-ink-strong)] sm:text-[1.22rem]">
                    {area.title}
                  </h3>
                </div>
              </div>
              <p className="mx-auto mt-3 max-w-[23rem] text-[1rem] leading-[1.45] text-[color:var(--color-ink)] sm:text-[1.18rem]">
                {area.body}
              </p>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
