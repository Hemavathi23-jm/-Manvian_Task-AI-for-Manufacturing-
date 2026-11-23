import { Reveal, SectionLabel } from "./bits";

const ROLES = [
  { role: "Manufacturing Managers", note: "Exploring operational improvement." },
  { role: "Production Engineers", note: "Interested in production systems and process reliability." },
  { role: "Operations Leaders", note: "Evaluating data-led operational decisions." },
  { role: "Technology Professionals", note: "Working with automation, analytics or industrial systems." },
  { role: "Students", note: "Interested in industrial technology and smart manufacturing." },
];

export default function Audience() {
  return (
    <section
      className="border-b border-steel/10 bg-white py-16 text-steel lg:py-20"
      data-testid="attendees-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-14">
        <Reveal>
          <SectionLabel index="04" text="Who Should Attend" dark />
          <h2 className="mt-5 font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.15] tracking-[-0.01em]">
            BUILT FOR EVERY MIND ON THE FACTORY FLOOR.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {ROLES.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.06} className="h-full">
              <div
                className="h-full border-t-2 border-steel pt-4 transition-colors duration-200 hover:border-copper"
                data-testid={`role-card-${i}`}
              >
                <p className="font-mono text-[11px] font-medium tracking-[1.5px] text-graphite/70">0{i + 1}</p>
                <h3 className="mt-3 font-display text-[17px] font-semibold leading-snug">{r.role}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-graphite">{r.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
