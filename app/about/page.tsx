import Link from "next/link";

const education = [
  {
    school: "University of Massachusetts, Amherst",
    degree: "PhD, Civil Engineering, 2026",
  },
  {
    school: "Massachusetts Institute of Technology",
    degree: "M.Eng., Civil Engineering, 2015",
  },
  {
    school: "University of Massachusetts, Amherst",
    degree: "B.Sc., Mechanical Engineering, 2010",
  },
  {
    school: "Mount Holyoke College",
    degree: "B.A., Physics, 2009",
  },
];

const practiceAreas = [
  {
    title: "Data and Analytics",
    body: "Generate insights about transportation initiatives and their impact on travel behavior and transportation policy. Develop strategic and innovative solutions for mobility systems.",
  },
  {
    title: "Demand Modeling and Travel Forecasting",
    body: "Develop demand forecasting models to predict travel behavior changes under future mobility scenarios and evaluate the feasibility and impact of transportation projects.",
  },
  {
    title: "Behavioral Research and Stakeholder Engagement",
    body: "Design and conduct stated preference surveys, customer surveys and stakeholder engagement to understand travel behavior and ensure representation.",
  },
  {
    title: "Project Management",
    body: "Manage people, timeline, budget and risks for successful proposal development and project delivery.",
  },
  {
    title: "Teaching and Mentoring",
    body: "Teach and mentor students to promote representation and ensure a diverse talent pool in the engineering and transportation industries.",
  },
  {
    title: "Transportation Research and Planning",
    body: "Design and develop quantitative and qualitative research and planning studies to better understand historical and current trends of transportation systems in order to strategically plan for future changes and system improvement.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col px-6 pt-20 pb-24 sm:px-10 lg:px-14 lg:pt-28">
      <section className="flex min-h-[42vh] flex-col items-center justify-center gap-7 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
          About
        </p>
        <h1 className="font-serif text-[clamp(4rem,9vw,7.2rem)] leading-none text-[color:var(--color-ink)]">
          Mobility Solutions
        </h1>
      </section>

      <section className="grid gap-12 border-b border-[color:var(--color-divider)] py-18 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)] lg:gap-18">
        <div className="space-y-8">
          <h2 className="font-serif text-5xl leading-none text-[color:var(--color-ink)] sm:text-6xl">
            History
          </h2>
          <p className="max-w-5xl text-lg leading-8 text-[color:var(--color-muted)]">
            Odara Mobility LLC. is a consulting firm founded by Tolu Becks
            Oke. My goal is to see people and communities thrive aided by
            equitable and accessible transportation options. Odara Mobility
            partners with agencies to develop sustainable solutions to enhance
            urban mobility by leveraging analytical and technological
            developments. I evaluate transportation initiatives, travel behavior
            and policy decisions to provide data-driven strategic planning and
            advise.
          </p>
        </div>

        <div className="space-y-8 lg:pt-2">
          <h2 className="font-serif text-5xl leading-none text-[color:var(--color-ink)] sm:text-6xl">
            Get in touch
          </h2>
          <p className="text-lg leading-8 text-[color:var(--color-muted)]">
            Odara Mobility offers free consultations to walk you through your
            needs, the scope of your transportation project, and your budget.
          </p>
          <Link
            href="mailto:tolu@odaramobility.com"
            className="inline-flex items-center gap-3 text-base font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)] transition-colors hover:text-[color:var(--color-ink)]"
          >
            Book an appointment
            <span aria-hidden="true">▸</span>
          </Link>
        </div>
      </section>

      <section className="grid gap-10 border-b border-[color:var(--color-divider)] py-18 lg:grid-cols-[28rem_minmax(0,1fr)] lg:gap-12">
        <div className="space-y-8">
          <h2 className="font-serif text-5xl leading-none text-[color:var(--color-ink)] sm:text-6xl">
            Team
          </h2>
          <div className="flex aspect-[4/5] items-center justify-center border-4 border-black bg-[color:var(--color-accent)] px-8 text-center text-2xl leading-tight text-black">
            Photo stub of person
          </div>
        </div>

        <div className="space-y-10 lg:pt-22">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
              Principal
            </p>
            <h3 className="font-serif text-4xl leading-tight text-[color:var(--color-ink)] sm:text-5xl">
              Tolu Ogunbekun (Becks) Oke, PhD
            </h3>
            <p className="max-w-5xl text-lg leading-8 text-[color:var(--color-muted)]">
              I have over 12 years of experience in solving complex problems
              and applying innovative and quantitative techniques to generate
              insights about transportation initiatives and their impacts on
              travel behavior, planning, and policy decisions. My expertise
              includes impact and equity analysis, demand modeling, behavioral
              research, and transportation planning. Throughout my career, I
              have led and galvanized multi-agency teams to successfully
              deliver on project goals for public and private sector clients.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="font-serif text-4xl leading-none text-[color:var(--color-ink)] sm:text-5xl">
              Education
            </h4>
            <div className="space-y-8">
              {education.map((item) => (
                <div key={`${item.school}-${item.degree}`} className="space-y-1">
                  <p className="text-2xl font-semibold text-[color:var(--color-muted)]">
                    {item.school}
                  </p>
                  <p className="text-xl text-[color:var(--color-muted)]">
                    {item.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 sm:py-22">
        <h2 className="mb-12 font-serif text-5xl leading-none text-[color:var(--color-ink)] sm:text-6xl">
          Areas of Practice
        </h2>
        <div className="space-y-10">
          {practiceAreas.map((area) => (
            <div key={area.title} className="space-y-3">
              <h3 className="text-2xl font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent)] sm:text-[2rem]">
                {area.title}
              </h3>
              <p className="max-w-none text-lg leading-8 text-[color:var(--color-muted)]">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
