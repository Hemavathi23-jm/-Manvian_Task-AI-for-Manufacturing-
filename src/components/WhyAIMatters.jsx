import { Cog, ScanSearch, Workflow, BarChart3 } from "lucide-react";
import { Reveal, SectionLabel, Crosshair } from "./bits";

const APPS = [
  {
    icon: Cog,
    title: "Predictive Maintenance",
    body: "Identify potential machine failures before they disrupt production.",
  },
  {
    icon: ScanSearch,
    title: "Smart Quality Inspection",
    body: "Detect manufacturing defects using computer vision.",
  },
  {
    icon: Workflow,
    title: "Production Optimisation",
    body: "Improve production planning and reduce operational waste.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    body: "Transform factory data into meaningful operational insights.",
  },
];

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function WhyAIMatters() {
  return (
    <section
      id="about"
      className="tech-grid-light border-b border-steel/10 bg-ivory py-24 text-steel lg:py-28"
      data-testid="why-ai-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-14">
        <Reveal>
          <SectionLabel index="01" text="Why AI Matters" dark />
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(32px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              MANUFACTURING IS CHANGING. ARE YOU?
            </h2>
            <p className="max-w-sm text-[15px] leading-relaxed text-graphite lg:text-[17px]">
              AI is becoming a practical tool for solving everyday manufacturing challenges.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {APPS.map((app, i) => (
            <Reveal key={app.title} delay={i * 0.08} className={`${SPANS[i]} h-full`}>
              <div
                className="group relative h-full border border-steel/10 bg-white p-8 transition-colors duration-200 hover:border-copper/60 lg:p-10"
                data-testid={`app-card-0${i + 1}`}
              >
                <Crosshair className="-left-1.5 -top-1.5" />
                <Crosshair className="-right-1.5 -top-1.5" />
                <Crosshair className="-bottom-1.5 -left-1.5" />
                <Crosshair className="-bottom-1.5 -right-1.5" />
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-steel/15 transition-colors duration-200 group-hover:border-copper/60">
                    <app.icon size={22} strokeWidth={1.5} className="text-steel transition-colors duration-200 group-hover:text-copper" />
                  </span>
                  <span className="font-mono text-[11px] font-medium tracking-[1.5px] text-graphite/70">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[clamp(20px,2vw,23px)] font-semibold leading-snug">
                  {app.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite lg:text-[17px]">{app.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
