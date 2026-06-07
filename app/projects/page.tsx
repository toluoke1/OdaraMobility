const projectHighlights = [
  {
    title: "2023 FTA Connected Communities through Equitable Transit",
    body: "The transportation planning process has historically overlooked low-income, minority and English-isolation communities. I am leading a team of researchers in exploring racial and economic disparities in accessibility using spatial interaction models and feedback from equity-focused community outreach. As part of the project, we are quantifying accessibility and equity metrics across sociodemographic and geographic characteristics and identifying transformation scenarios that improve community connections using transit.",
  },
  {
    title: "2021 Fare-Capping Impact Analysis Using Mobile Ticket Data",
    body: "We demonstrated the use of a sample of account-linked mobile ticket data for estimating a multinomial logit product choice model, which was then applied to unlinked AFC transaction data to forecast ridership and revenue impacts of fare capping and other fare changes. The impact analysis included fare product switching, rider price sensitivity, and induced demand. The equity analysis utilized the fare changes and ridership results from the product choice model together with survey data to assess the changes in average cost per ride for various rider groups, including low-income and minority riders.",
    accent: "this paper",
  },
  {
    title: "2020 Transportation Access to Healthcare",
    body: "At PVTA, I am managing a project to address transportation access to health care in Springfield, MA. An earlier study showed that medical facilities in the Springfield area have a no-show rate of 25% and about 20% of those are attributed to transportation barriers, amounting to over $1 million in medical losses each year due to no-show patients. To that end, we piloted and are evaluating two mobility management programs that seek to minimize transportation barriers for patients as well as address other mobility related barriers such as language, affordability, and mental and physical wellbeing.",
  },
  {
    title: "2016-2018 FRA CONceptual Network Connections Tool (CONNECT)",
    body: "At Steer, I managed and led the technical development of a network planning tool which estimates ridership, revenue and cost performance of user-defined high-speed rail corridors and networks for the Federal Railroad Administration (FRA). The tool allowed the FRA to enter a proposed rail network and associated service plan, which is run through a back-end mode choice model to estimate the financial and operational performance of the network. The tool enables the FRA to compare multiple rail configurations and service options and evaluate their potential impacts in the early stages of network planning.",
  },
];

const publications = [
  {
    prefix: "Oke T. (2023). ",
    highlight: "Developing an Origin-Destination-Transfer (ODX) Model.",
    suffix: " Shared-Use Mobility Center.",
  },
  {
    prefix: "Morrissey A., Oke T. (2022). ",
    highlight: "Fare-Capping Impact Analysis Using Mobile Ticket Data.",
    suffix: " Transportation Research Record, 2676(7), 811-822.",
  },
  {
    prefix: "Clark M., Ogunbekun T. (2018). ",
    highlight: "Shared Ebike Potential: London and New York.",
    suffix: " Technical Report 23334001. Boston, MA: Steer.",
  },
  {
    prefix: "Bailey N., Doyle T.P., Ogunbekun T., Zhao J. (2016). ",
    highlight:
      "A Ride to Remember: Experienced vs. Remembered Emotion on Public Transit.",
    suffix: " 95th Transportation Research Board Annual Meeting.",
  },
  {
    prefix: "Ogunbekun T. Master's Thesis (2015). ",
    highlight: "The impact of Amtrak performance in the Northeast Corridor.",
    suffix: "",
  },
];

const affiliations = [
  "Transit Cooperative Research Program Project A-49 Panel on Fare Policies, Structures, and Technologies",
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col px-6 pt-20 pb-24 sm:px-10 lg:px-14 lg:pt-28">
      <section className="flex min-h-[42vh] flex-col items-center justify-center gap-7 border-b border-[color:var(--color-divider)] pb-18 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
          Projects
        </p>
        <h1 className="font-serif text-[clamp(4.25rem,10vw,7rem)] leading-none text-[color:var(--color-ink)]">
          42 projects | 25 clients
        </h1>
      </section>

      <section className="border-b border-[color:var(--color-divider)] py-18 sm:py-22">
        <h2 className="mb-14 text-center font-serif text-5xl leading-none text-[color:var(--color-ink)] sm:text-6xl">
          Project Highlights
        </h2>
        <div className="space-y-14">
          {projectHighlights.map((project) => (
            <article key={project.title} className="space-y-5">
              <h3 className="font-serif text-3xl leading-tight text-[color:var(--color-ink)] sm:text-4xl lg:text-[3.1rem]">
                {project.title}
              </h3>
              <p className="max-w-none text-lg leading-8 text-[color:var(--color-muted)]">
                {project.accent ? (
                  <>
                    In{" "}
                    <span className="text-[color:var(--color-accent)]">
                      {project.accent}
                    </span>
                    , {project.body}
                  </>
                ) : (
                  project.body
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-[color:var(--color-divider)] py-18 sm:py-22">
        <h2 className="mb-12 font-serif text-4xl leading-none text-[color:var(--color-ink)] sm:text-5xl">
          Publications and Blogposts
        </h2>
        <div className="space-y-7 text-xl leading-9 text-[color:var(--color-muted)]">
          {publications.map((publication) => (
            <p key={`${publication.prefix}${publication.highlight}`}>
              {publication.prefix}
              <span className="text-[color:var(--color-accent)]">
                {publication.highlight}
              </span>
              {publication.suffix}
            </p>
          ))}
        </div>
      </section>

      <section className="py-18 sm:py-22">
        <h2 className="mb-10 font-serif text-4xl leading-none text-[color:var(--color-ink)] sm:text-5xl">
          Affiliations
        </h2>
        <div className="space-y-6 text-xl leading-9 text-[color:var(--color-muted)]">
          {affiliations.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
