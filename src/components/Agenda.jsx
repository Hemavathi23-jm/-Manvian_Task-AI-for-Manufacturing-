import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, CheckCircle2, Clock } from "lucide-react";
import { Reveal, SectionLabel, EASE } from "./bits";

const AGENDA = [
  {
    time: "00–10 MIN",
    tag: "Reality Check",
    title: "The 2026 Industrial Reality: AI Hype vs. Shop-Floor Physics",
    summary:
      "Why generic LLMs fail on the factory floor and where deterministic Edge ML delivers verifiable ROI. Mapping AI layers into the Purdue Model / ISA-95 automation hierarchy.",
    topics: [
      "Distinguishing cloud AI hype from real-time deterministic edge inference",
      "Mapping Edge AI into existing SCADA, MES, and PLC control loops",
      "Common failure modes in early industrial AI pilots and how to avoid them",
    ],
  },
  {
    time: "10–25 MIN",
    tag: "Hardware & Protocols",
    title: "Brownfield Edge Architecture & Non-Invasive Sensor Fusion",
    summary:
      "Step-by-step blueprint for extracting telemetry from 20-year-old machinery using clamp-on CTs, accelerometers, and edge IPC gateways without touching PLC ladder logic.",
    topics: [
      "Interfacing Modbus TCP/RTU, Siemens S7, and OPC-UA to local IPCs",
      "Selecting between NVIDIA Jetson, Intel Industrial PCs, and Coral TPUs",
      "Ensuring OT network isolation and cybersecurity compliance",
    ],
  },
  {
    time: "25–40 MIN",
    tag: "Live Case Study",
    title: "Deep-Dive: Vibration Telemetry & Predictive Spindle Maintenance",
    summary:
      "A complete technical walkthrough of high-frequency vibration signal processing (10 kHz) to detect bearing micro-fissures and lubrication breakdown 72 hours before failure.",
    topics: [
      "Time-domain waveform to FFT frequency spectrum conversion",
      "Training lightweight autoencoder anomaly detection models on edge devices",
      "Automotive Tier-1 CNC case study: Eliminating $420k in unplanned stoppages",
    ],
  },
  {
    time: "40–55 MIN",
    tag: "Vision Demo",
    title: "Sub-Millimeter Edge Optical Inspection on Active Conveyors",
    summary:
      "Live demonstration of sub-millimeter computer vision inspecting 120 parts/minute under 14ms latency. Tackling shop-floor ambient dust, vibrations, and variable lighting.",
    topics: [
      "Optimizing YOLO / TensorRT models for real-time edge bounding box inference",
      "Camera shutter synchronization and strobe illumination in high-speed cells",
      "Automated pneumatic ejector integration for instant zero-defect sorting",
    ],
  },
  {
    time: "55–65 MIN",
    tag: "Unit Economics",
    title: "The 90-Day POC Playbook: Unit Economics & Executive Buy-In",
    summary:
      "How to design, budget, and execute a single-machine proof-of-concept for under $5,000 to prove ROI to plant executives before scaling across the entire facility.",
    topics: [
      "Calculating your true Downtime-to-Dollar baseline cost metrics",
      "Crafting an airtight CapEx vs. OpEx business case for operations leadership",
      "Step-by-step 90-day execution milestone checklist",
    ],
  },
  {
    time: "65–75 MIN",
    tag: "Interactive Lab",
    title: "Live Architecture Troubleshooting & Attendee Q&A",
    summary:
      "Direct technical troubleshooting of attendee plant-floor challenges, legacy controller hurdles, and sensor selection, followed by distribution of the Attendee Resource Pack.",
    topics: [
      "Live teardown of participant machinery setups and sensor dilemmas",
      "Benchmarking vendor solutions vs. in-house open-source edge stacks",
      "Access distribution for the Smart Factory Hardware Matrix & ROI templates",
    ],
  },
];

const TAKEAWAYS = [
  "Retrofit Brownfield PLCs without modifying ladder logic or voiding warranties.",
  "Deploy sub-millimeter optical edge vision running at 120 parts/minute.",
  "Detect bearing and spindle failure 72 hours early using vibration telemetry.",
  "Calculate precise unit economics to secure executive CapEx approval.",
  "Walk away with the complete Smart Factory Hardware Matrix and ROI spreadsheet.",
];

const SIDE_IMG =
  "https://images.pexels.com/photos/34207359/pexels-photo-34207359.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Agenda() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      id="learn"
      className="tech-grid relative border-b border-white/10 bg-steel py-24 text-ivory lg:py-28"
      data-testid="agenda-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-14">
        <Reveal>
          <SectionLabel index="03" text="What You'll Learn" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(32px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
            FROM FACTORY FLOOR TO INTELLIGENT OPERATIONS.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ivory/70 sm:text-[16px]">
            A timed 75-minute technical agenda focused on production deployment, architecture diagrams, and
            real-world shop floor ROI. Click any module to preview key topics.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Takeaway Sidebar */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div
                  className="border border-machine/40 bg-machine/10 p-8 lg:p-9"
                  data-testid="takeaway-panel"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-machine">
                      Key Masterclass Deliverables
                    </p>
                    <span className="font-mono text-[10px] text-copper font-semibold">5 CORE ASSETS</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {TAKEAWAYS.map((t, i) => (
                      <li key={i} className="flex gap-3.5 text-[14px] leading-relaxed text-ivory/85 sm:text-[15px]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper" />
                        <span>{t}</span>
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
                    <div className="flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-[1px] text-machine">
                      <Clock size={12} />
                      <span>75 MIN LIVE</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Interactive Expandable Agenda Modules */}
          <div className="lg:col-span-7">
            {AGENDA.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <Reveal key={item.time} delay={i * 0.04}>
                  <div
                    className={`border-b border-white/10 transition-colors duration-200 ${
                      isOpen ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                    }`}
                    data-testid={`agenda-item-${i}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      className="flex w-full items-start gap-4 px-3 py-5 text-left sm:gap-6 sm:py-6"
                      aria-expanded={isOpen}
                    >
                      <div className="shrink-0 pt-0.5">
                        <span className="block font-mono text-[11px] font-medium tracking-[1.5px] text-copper">
                          {item.time}
                        </span>
                        <span className="mt-1 block font-mono text-[9px] uppercase tracking-[1px] text-graphite">
                          Part 0{i + 1}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2.5">
                          <span className="border border-white/15 bg-steeldeep px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[1px] text-machine">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-[17px] font-medium leading-snug transition-colors text-ivory group-hover:text-machine sm:text-[19px]">
                          {item.title}
                        </h3>
                      </div>

                      <div className="shrink-0 pt-1 text-machine/80">
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                        >
                          <ChevronDown size={19} />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/5 pb-6 pl-4 pr-4 pt-4 sm:pl-[104px] sm:pr-6">
                            <p className="text-[14px] leading-relaxed text-ivory/80 sm:text-[15px]">
                              {item.summary}
                            </p>

                            <div className="mt-4 rounded-none border border-white/10 bg-steeldeep/80 p-4">
                              <p className="font-mono text-[10px] font-semibold uppercase tracking-[1.5px] text-machine">
                                Key Topics & Architecture Focus:
                              </p>
                              <ul className="mt-2.5 space-y-2">
                                {item.topics.map((topic, tidx) => (
                                  <li
                                    key={tidx}
                                    className="flex items-start gap-2.5 text-[13px] text-ivory/70"
                                  >
                                    <span className="mt-1 text-copper font-mono text-[11px]">›</span>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
