import Image, { StaticImageData } from "next/image";
import behavioralResearchImage from "@/images/behavioral_research.jpeg";
import dataAnalyticsImage from "@/images/data_analytics.jpeg";
import demandForecastingImage from "@/images/demand modeling and traveling forecasting.png";
import mentoringImage from "@/images/mentoring.jpeg";
import projectManagementImage from "@/images/project_management.jpeg";
import transportationResearchImage from "@/images/transportation_research.jpeg";
import urbanImage from "@/images/urban.jpg";
import { ProjectsMetrics } from "@/components/projects-metrics";

const projectHighlights = [
  {
    title: "Connected Communities through Equitable Transit",
    body: "Exploring racial and economic disparities in accessibility through spatial interaction models, equity-focused outreach, and community connection scenarios.",
    image: urbanImage,
    alt: "People moving through an urban plaza",
  },
  {
    title: "Fare-Capping Impact Analysis Using Mobile Ticket Data",
    body: "Using account-linked mobile ticket data and demand modeling to forecast ridership, revenue, product switching, and equity impacts across rider groups.",
    image: dataAnalyticsImage,
    alt: "Data dashboards and analytics screens",
  },
  {
    title: "Transportation Access to Healthcare",
    body: "Evaluating mobility management programs that reduce transportation barriers to care while addressing language, affordability, and wellbeing constraints.",
    image: mentoringImage,
    alt: "Collaborative planning and workshop setting",
  },
  {
    title: "FRA CONceptual Network Connections Tool",
    body: "Leading development of a planning tool that estimates ridership, revenue, and operating performance for proposed high-speed rail corridors and networks.",
    image: transportationResearchImage,
    alt: "Transportation interchange and network infrastructure",
  },
];

const capabilities = [
  {
    title: "Active travel",
    image: urbanImage,
    alt: "Urban public space representing active travel",
  },
  {
    title: "Rail",
    image: transportationResearchImage,
    alt: "Transportation corridor representing rail",
  },
  {
    title: "Bus",
    image: demandForecastingImage,
    alt: "Demand map representing bus systems",
  },
  {
    title: "Transit",
    image: dataAnalyticsImage,
    alt: "Transit analytics and systems dashboard",
  },
  {
    title: "Aviation",
    image: behavioralResearchImage,
    alt: "Conversation and engagement imagery used to represent aviation planning",
  },
  {
    title: "Freight",
    image: projectManagementImage,
    alt: "Project systems image representing freight operations",
  },
  {
    title: "Roads",
    image: transportationResearchImage,
    alt: "Road interchange and highway planning",
  },
];

function FeatureCard({
  title,
  body,
  image,
  alt,
}: {
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
}) {
  return (
    // Project highlight cards combine a representative image with a short summary.
    <article className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_40px_rgba(17,24,39,0.08)]">
      <div className="relative aspect-[1.08/1] sm:aspect-[1.3/1]">
        <Image src={image} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,30,0.08),rgba(10,17,30,0.34))]" />
      </div>
      <div className="space-y-3 px-5 py-5 sm:space-y-4 sm:px-6 sm:py-6">
        <h3 className="font-serif text-[1.45rem] leading-[1.1] text-[color:var(--color-ink-strong)] sm:text-[1.9rem]">
          {title}
        </h3>
        <p className="text-[0.98rem] leading-6 text-[color:var(--color-ink)] sm:text-[1.05rem] sm:leading-7">
          {body}
        </p>
      </div>
    </article>
  );
}

function CapabilityCard({
  title,
  image,
  alt,
}: {
  title: string;
  image: StaticImageData;
  alt: string;
}) {
  return (
    // Capability cards follow the darker, image-overlay treatment from the client reference.
    <article className="group relative overflow-hidden rounded-[1.2rem] bg-[#18202a]">
      <div className="relative aspect-[1.22/1]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,30,0.16),rgba(10,17,30,0.72))]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="text-[1.15rem] leading-none text-white sm:text-[1.6rem]">
          {title}
        </h3>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-10 px-5 pb-20 pt-8 sm:gap-14 sm:px-8 sm:pb-24 sm:pt-10 lg:px-10 lg:pt-14">
      {/* Hero keeps the page summary and animated project/client counts together. */}
      <section className="overflow-hidden rounded-[1.5rem] bg-[#141b23] px-5 py-8 sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Projects
          </p>
          <h1 className="max-w-none font-serif text-[clamp(2.15rem,10vw,5rem)] leading-[1.04] text-white">
            Transportation projects grounded in research, equity, and delivery.
          </h1>
          <p className="max-w-none text-[1rem] leading-7 text-white/72 sm:text-[1.1rem] sm:leading-8 lg:max-w-[74rem] lg:text-[1.18rem] lg:leading-9">
            Odara Mobility brings together planning, demand modeling,
            behavioral research, and project delivery expertise across public
            transportation systems and mobility services.
          </p>
          <ProjectsMetrics />
        </div>
      </section>

      {/* Project highlights are framed as a visual portfolio rather than a long text list. */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Highlights
          </p>
          <h2 className="font-serif text-[2rem] leading-none text-[color:var(--color-ink-strong)] sm:text-[2.45rem] lg:text-[3rem]">
            Explore our past transportation projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectHighlights.map((project) => (
            <FeatureCard
              key={project.title}
              title={project.title}
              body={project.body}
              image={project.image}
              alt={project.alt}
            />
          ))}
        </div>
      </section>

      {/* Capability grid translates the Steer-style inspiration into Odara's service areas. */}
      <section className="space-y-8 rounded-[1.5rem] bg-[#181e25] px-5 py-7 sm:rounded-[2rem] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Capabilities
          </p>
          <h2 className="max-w-4xl font-serif text-[2rem] leading-none text-white sm:text-[2.45rem] lg:text-[3rem]">
            Explore our key transportation capabilities
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              title={capability.title}
              image={capability.image}
              alt={capability.alt}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
