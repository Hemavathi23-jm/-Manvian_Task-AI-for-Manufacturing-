import { Reveal, SectionLabel, Crosshair } from "./bits";

const PORTRAIT =
  "https://static.prod-images.emergentagent.com/jobs/fba0eb77-dd62-4936-a5ce-5f7bbedeebcc/images/2ea1132a028acc37c628e1d1401e12259d38e3ad1cfe12da6387f97303187f08.jpeg";

const EXPERTISE = ["Industrial Automation", "Predictive Analytics", "Smart Factory Transformation"];

export default function Speaker() {
  return (
    <section
      id="speaker"
      className="tech-grid-light border-b border-steel/10 bg-ivory py-24 text-steel lg:py-28"
      data-testid="speaker-section"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <Reveal className="lg:col-span-5">
          <div className="relative border border-steel/10" data-testid="speaker-portrait-frame">
            <Crosshair className="-left-1.5 -top-1.5" />
            <Crosshair className="-right-1.5 -top-1.5" />
            <Crosshair className="-bottom-1.5 -left-1.5" />
            <Crosshair className="-bottom-1.5 -right-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={PORTRAIT}
                alt="AI-generated portrait of Dr. Kavya Menon, Industrial AI Strategist, standing in an advanced manufacturing facility"
                className="h-full w-full object-cover"
                data-testid="speaker-portrait"
                loading="lazy"
              />
              <div className="absolute right-2.5 top-2.5 border border-steel/20 bg-ivory/90 px-2 py-0.5 backdrop-blur-sm">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[1.5px] text-steel">
                  AI Generated
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-steel/10 px-4 py-3">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-graphite">
                Dr. Kavya Menon <span className="text-copper">(AI Generated)</span>
              </p>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-copper">Speaker</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="03" text="Speaker" dark />
            <h2 className="mt-6 font-display text-[clamp(32px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              LEARN FROM INDUSTRY EXPERIENCE.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mt-10 font-display text-[clamp(28px,3vw,36px)] font-semibold" data-testid="speaker-name">
              Dr. Kavya Menon
            </h3>
            <p
              className="mt-2 font-mono text-[12px] font-medium uppercase tracking-[1.5px] text-copper"
              data-testid="speaker-title"
            >
              Industrial AI Strategist | Smart Manufacturing Consultant
            </p>
            <p
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-graphite lg:text-[17px]"
              data-testid="speaker-bio"
            >
              With over 12 years of experience in industrial automation, digital transformation and smart
              manufacturing, Dr. Kavya Menon helps organisations understand and adopt emerging technologies. Her work
              focuses on connecting industrial intelligence with practical manufacturing outcomes.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-9 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-graphite">
              Expertise
            </p>
            <div className="mt-4 flex flex-wrap gap-3" data-testid="speaker-expertise-tags">
              {EXPERTISE.map((tag) => (
                <span
                  key={tag}
                  className="border border-steel/20 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-steel/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[1.5px] text-graphite/80">
              <span className="text-copper">*</span> AI-generated portrait. Fictional speaker profile created for the event concept.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
