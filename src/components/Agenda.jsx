import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./bits";

const AGENDA = [
  { time: "00–10 MIN", title: "The Evolution of Smart Manufacturing." },
  { time: "10–25 MIN", title: "Understanding AI in Industrial Operations." },
  { time: "25–40 MIN", title: "Predictive Maintenance and Quality Inspection." },
  { time: "40–55 MIN", title: "Real-World Manufacturing Use Cases." },
  { time: "55–65 MIN", title: "Implementation Challenges and Opportunities." },
  { time: "65–75 MIN", title: "Live Q&A and Key Takeaways." },
];

const TAKEAWAYS = [
  "Understand practical AI applications in manufacturing.",
  "Discover how intelligent technologies improve industrial processes.",
  "Explore opportunities in smart manufacturing.",
];

const SIDE_IMG =
  "https://images.pexels.com/photos/34207359/pexels-photo-34207359.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Agenda() {
  return (
    <section
      id="learn"
      className="tech-grid relative border-b border-white/10 bg-steel py-24 text-ivory lg:py-28"
      data-testid="agenda-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-14">
        <Reveal>
          <SectionLabel index="02" text="What You'll Learn" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(32px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
            FROM FACTORY FLOOR TO INTELLIGENT OPERATIONS.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div
                  className="border border-machine/40 bg-machine/10 p-8 lg:p-9"
                  data-testid="takeaway-panel"
                >
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-machine">
                    Key Takeaways
                  </p>
                  <ul className="mt-6 space-y-5">
                    {TAKEAWAYS.map((t, i) => (
                      <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-ivory/85 lg:text-[16px]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 hidden border border-white/10 lg:block" data-testid="agenda-side-image">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={SIDE_IMG}
                      alt="Industrial robotic arm operating on an automated fabrication line"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-graphite">
                      Fig. 02 — Robotic Fabrication Cell
                    </p>
                    <p className="font-mono text-[10px] font-medium tracking-[1.5px] text-machine">75 MIN</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            {AGENDA.map((item, i) => (
              <Reveal key={item.time} delay={i * 0.05}>
                <div
                  className="group flex items-center gap-5 border-b border-white/10 px-2 py-6 transition-colors duration-200 hover:bg-white/[0.03] sm:gap-8"
                  data-testid={`agenda-item-${i}`}
                >
                  <span className="w-[92px] shrink-0 font-mono text-[11px] font-medium tracking-[1.5px] text-copper">
                    {item.time}
                  </span>
                  <span className="hidden shrink-0 font-mono text-[11px] tracking-[1.5px] text-graphite sm:block">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-medium leading-snug transition-colors duration-200 group-hover:text-machine lg:text-[21px]">
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="ml-auto shrink-0 text-machine opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
