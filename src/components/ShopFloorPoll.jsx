import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ScanSearch, Cpu, BarChart3, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Reveal, SectionLabel, Crosshair, EASE } from "./bits";
import { scrollToId } from "../lib/scroll";

const BOTTLENECKS = [
  {
    id: "downtime",
    icon: Activity,
    title: "Unplanned Stoppages & Bearing Fatigue",
    desc: "Unexpected line downtime from mechanical wear, motor overheating, and spindle seizure.",
    initialPct: 42,
    moduleNum: "Module 03",
    moduleTime: "25–40 MIN",
    moduleTitle: "Sensor Fusion & Vibration Telemetry for Predictive Maintenance",
    solution:
      "We'll demonstrate step-by-step how acoustic vibration sensors detect bearing micro-fractures 72 hours before catastrophic failure, feeding directly into your local maintenance alert system.",
  },
  {
    id: "quality",
    icon: ScanSearch,
    title: "High Scrap Rates & Manual Visual QA Delays",
    desc: "Human visual inspection bottleneck causing missed surface flaws and high part rejection rates.",
    initialPct: 29,
    moduleNum: "Module 04",
    moduleTime: "40–55 MIN",
    moduleTitle: "High-Speed Optical Edge Computer Vision on Active Conveyors",
    solution:
      "Learn how to train and deploy sub-millimeter edge vision models that inspect 120 parts/minute with 99.6% accuracy, eliminating operator fatigue and false rejects.",
  },
  {
    id: "legacy",
    icon: Cpu,
    title: "Siloed Legacy PLCs & Brownfield SCADA",
    desc: "Decades-old Siemens, Allen-Bradley, and Modbus equipment locked in offline data silos.",
    initialPct: 18,
    moduleNum: "Module 02",
    moduleTime: "10–25 MIN",
    moduleTitle: "Non-Invasive IoT Gateways & Edge IPC Integration",
    solution:
      "See how non-invasive clamp-on sensors and OPC-UA edge bridges extract real-time telemetry from 20-year-old machinery without modifying PLC ladder logic or voiding warranties.",
  },
  {
    id: "oee",
    icon: BarChart3,
    title: "OEE Bottlenecks & Process Drift",
    desc: "Struggling to balance cycle times, heat curves, and variable material quality across shifts.",
    initialPct: 11,
    moduleNum: "Module 05",
    moduleTime: "55–65 MIN",
    moduleTitle: "Closed-Loop Reinforcement Optimization & 90-Day POC",
    solution:
      "Discover the framework to calculate unit economics, balance process drift in real time, and scale an AI proof-of-concept across an entire plant in under 90 days.",
  },
];

export default function ShopFloorPoll() {
  const [selected, setSelected] = useState("downtime");
  const [hasVoted, setHasVoted] = useState(true);

  const activeItem = BOTTLENECKS.find((b) => b.id === selected) || BOTTLENECKS[0];

  return (
    <section
      id="poll"
      className="tech-grid relative border-b border-white/10 bg-steeldeep py-20 text-ivory lg:py-24"
      data-testid="shop-floor-poll-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-14">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SectionLabel index="01.5" text="Interactive Shop-Floor Diagnostic" />
            <div className="flex items-center gap-2 font-mono text-[11px] text-graphite">
              <span className="h-1.5 w-1.5 rounded-full bg-machine animate-pulse" />
              <span>1,280+ ENGINEERS VOTED</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-[1.14] tracking-[-0.01em]">
              WHAT IS YOUR PLANT&apos;S #1 MANUFACTURING BOTTLENECK?
            </h2>
            <p className="max-w-md text-[14px] leading-relaxed text-ivory/70 sm:text-[15px]">
              Select your primary shop-floor challenge to see live peer benchmark data and discover the exact
              masterclass module designed to solve it.
            </p>
          </div>
        </Reveal>

        {/* 4 Interactive Bottleneck Choices */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {BOTTLENECKS.map((item, idx) => {
            const isSelected = selected === item.id;
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={idx * 0.06}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(item.id);
                    setHasVoted(true);
                  }}
                  className={`group relative flex h-full w-full flex-col justify-between border p-6 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-machine bg-machine/10 shadow-[0_0_24px_rgba(185,217,164,0.12)]"
                      : "border-white/10 bg-steel/70 hover:border-white/30 hover:bg-steel"
                  }`}
                  data-testid={`poll-option-${item.id}`}
                >
                  <Crosshair className="-left-1 -top-1 text-machine/60" />
                  <Crosshair className="-right-1 -top-1 text-machine/60" />
                  <Crosshair className="-bottom-1 -left-1 text-machine/60" />
                  <Crosshair className="-bottom-1 -right-1 text-machine/60" />

                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center border transition-colors ${
                          isSelected
                            ? "border-machine bg-machine text-steel"
                            : "border-white/15 bg-white/[0.03] text-machine group-hover:border-machine/50"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-copper">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[17px] font-semibold leading-snug text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ivory/65">
                      {item.desc}
                    </p>
                  </div>

                  {/* Percentage Bar */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-graphite">Attendee Share</span>
                      <span className={`font-bold ${isSelected ? "text-machine" : "text-ivory"}`}>
                        {item.initialPct}%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.initialPct}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: EASE }}
                        className={`h-full ${isSelected ? "bg-machine" : "bg-white/30"}`}
                      />
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Dynamic Solution Breakdown Card */}
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-8 border border-machine/40 bg-steel p-6 sm:p-8 lg:p-10"
              data-testid="poll-solution-panel"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="border border-machine bg-machine px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[1.5px] text-steel">
                      Solved In {activeItem.moduleNum}
                    </span>
                    <span className="font-mono text-[11px] font-medium tracking-[1.5px] text-copper">
                      {activeItem.moduleTime}
                    </span>
                    <span className="hidden text-white/20 sm:inline">//</span>
                    <span className="font-mono text-[12px] text-ivory/90 font-medium">
                      {activeItem.moduleTitle}
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-ivory/85 sm:text-[16px]">
                    <span className="font-semibold text-machine">Shop-Floor Architecture: </span>
                    {activeItem.solution}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => scrollToId("register")}
                    className="group inline-flex items-center gap-3 bg-machine px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-steel transition-colors hover:bg-[#a8cd8f]"
                    data-testid="poll-cta-button"
                  >
                    <span>Reserve Seat to Solve This</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
