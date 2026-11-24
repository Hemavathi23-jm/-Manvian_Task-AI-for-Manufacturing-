import { Activity, ScanSearch, Cpu, Workflow } from "lucide-react";
import { Reveal, SectionLabel, Crosshair } from "./bits";

const APPS = [
  {
    icon: Activity,
    domain: "Predictive Health",
    specs: "10 kHz Vibration · FFT Analysis · 72h Advance Warning",
    title: "Sub-Harmonic Vibration & Spindle Diagnostics",
    body: "Detect micro-fissures, bearing flaking, and lubrication breakdown up to 72 hours before catastrophic spindle seizure. Transition from reactive firefighting to scheduled maintenance during planned shift changeovers.",
    metric: "-38% Unplanned Downtime",
  },
  {
    icon: ScanSearch,
    domain: "Optical Edge QA",
    specs: "GigE Vision · 15µm Resolution · 120 Parts/Min",
    title: "High-Speed Sub-Millimeter Optical Inspection",
    body: "Deploy edge vision models directly over active conveyor discharge points. Detect micro-scratches, weld porosity, and dimension drift in 14ms without cloud latency or high bandwidth costs.",
    metric: "99.6% Defect Accuracy",
  },
  {
    icon: Cpu,
    domain: "Brownfield Integration",
    specs: "OPC-UA · Modbus TCP · Non-Invasive Clamp-On Sensors",
    title: "Non-Invasive Brownfield SCADA & PLC Ingestion",
    body: "Extract high-frequency sensor telemetry from 20-year-old Siemens S7, Fanuc CNC, and Allen-Bradley PLCs. Zero ladder logic modifications, zero warranty voids, and zero production halts.",
    metric: "Zero Downtime Retrofit",
  },
  {
    icon: Workflow,
    domain: "Throughput Optimization",
    specs: "Closed-Loop Feedback · Real-time Drift Compensation",
    title: "Closed-Loop Dynamic OEE & Process Balancing",
    body: "Continuously orchestrate machine feed rates, cycle times, and thermal profiles to counteract ambient temperature fluctuations and batch-to-batch raw material variance.",
    metric: "+16% Average OEE Uplift",
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
          <SectionLabel index="02" text="Industrial AI Core Domains" dark />
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl font-display text-[clamp(32px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              PRACTICAL EDGE AI FOR THE FACTORY FLOOR.
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-graphite lg:text-[16px]">
              Moving beyond pilot purgatory. Discover the four core engineering domains where Edge AI delivers
              immediate, verifiable ROI across modern manufacturing cells.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {APPS.map((app, i) => (
            <Reveal key={app.title} delay={i * 0.08} className={`${SPANS[i]} h-full`}>
              <div
                className="group relative flex h-full flex-col justify-between border border-steel/10 bg-white p-8 transition-all duration-200 hover:border-copper/70 hover:shadow-lg lg:p-10"
                data-testid={`app-card-0${i + 1}`}
              >
                <Crosshair className="-left-1.5 -top-1.5" />
                <Crosshair className="-right-1.5 -top-1.5" />
                <Crosshair className="-bottom-1.5 -left-1.5" />
                <Crosshair className="-bottom-1.5 -right-1.5" />

                <div>
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border border-steel/15 bg-ivory/50 transition-colors duration-200 group-hover:border-copper/60 group-hover:bg-white">
                      <app.icon
                        size={22}
                        strokeWidth={1.75}
                        className="text-steel transition-colors duration-200 group-hover:text-copper"
                      />
                    </span>
                    <div className="text-right">
                      <span className="font-mono text-[11px] font-semibold tracking-[1.5px] text-graphite/70">
                        0{i + 1}
                      </span>
                      <p className="font-mono text-[9px] uppercase tracking-[1px] text-copper">
                        {app.domain}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 inline-block border border-steel/15 bg-steel/[0.03] px-2.5 py-1 font-mono text-[10px] text-graphite">
                    {app.specs}
                  </div>

                  <h3 className="mt-5 font-display text-[clamp(20px,2vw,23px)] font-semibold leading-snug">
                    {app.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-graphite lg:text-[15.5px]">
                    {app.body}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-steel/10 pt-4">
                  <span className="font-mono text-[11px] font-medium tracking-[1px] text-graphite">
                    Target Impact
                  </span>
                  <span className="font-mono text-[12px] font-bold text-copper">
                    {app.metric}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
