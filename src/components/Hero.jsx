import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, CheckCircle2 } from "lucide-react";
import useCountdown from "../hooks/useCountdown";
import { scrollToId } from "../lib/scroll";
import { EASE, Crosshair } from "./bits";

const HERO_IMG =
  "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=1400&q=80";

const METRICS = [
  { value: "-38%", label: "Unplanned Downtime", sub: "Sensor fusion prediction" },
  { value: "+16%", label: "OEE Uplift", sub: "Closed-loop optimization" },
  { value: "99.6%", label: "Defect Detection", sub: "Sub-millimeter optical edge" },
  { value: "< 90 Days", label: "POC Payback", sub: "Brownfield retrofitting" },
];

const EVENT_SPECS = [
  { label: "Date", value: "10 December 2026" },
  { label: "Day & Time", value: "Thursday | 6:00 PM – 7:15 PM IST" },
  { label: "Session Type", value: "Live Technical Masterclass" },
  { label: "Access", value: "100% Free Online" },
];

function Countdown() {
  const t = useCountdown();
  const units = [
    { label: "DAYS", value: t.days, testid: "countdown-timer-days" },
    { label: "HRS", value: t.hours, testid: "countdown-timer-hours" },
    { label: "MIN", value: t.minutes, testid: "countdown-timer-minutes" },
    { label: "SEC", value: t.seconds, testid: "countdown-timer-seconds" },
  ];
  return (
    <div data-testid="countdown-timer">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-graphite">
          {t.expired ? "Session is live" : "Webinar begins in"}
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-copper">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-copper" />
          LIMITED LIVE Q&A POOL
        </span>
      </div>
      <div className="mt-3 flex border border-white/10 bg-steeldeep/60">
        {units.map((u, i) => (
          <div key={u.label} className={`flex-1 py-3 text-center ${i > 0 ? "border-l border-white/10" : ""}`}>
            <p
              className="font-display text-[26px] font-semibold tabular-nums leading-none text-ivory sm:text-[32px]"
              data-testid={u.testid}
            >
              {String(u.value).padStart(2, "0")}
            </p>
            <p className="mt-1.5 font-mono text-[10px] font-medium tracking-[1.5px] text-graphite">{u.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const frameRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const lines = [
    <>FROM UNPLANNED DOWNTIME</>,
    <>
      TO <span className="text-machine">AUTONOMOUS THROUGHPUT.</span>
    </>,
  ];

  return (
    <section
      id="hero"
      className="tech-grid relative overflow-hidden border-b border-white/10 bg-steel pb-20 pt-32 lg:pb-28 lg:pt-36"
      data-testid="hero-section"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="lg:col-span-7">
          {/* Live Telemetry Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="inline-flex flex-wrap items-center gap-3 border border-white/10 bg-steeldeep/80 px-3.5 py-1.5 backdrop-blur-sm"
            data-testid="hero-eyebrow"
          >
            <span className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-machine">
              <span className="h-2 w-2 animate-pulse rounded-full bg-machine" />
              LIVE TELEMETRY ACTIVE
            </span>
            <span className="hidden font-mono text-[11px] text-graphite sm:inline">//</span>
            <span className="hidden font-mono text-[11px] tracking-[1.5px] text-graphite sm:inline">
              INDUSTRY 4.0 MASTERCLASS
            </span>
            <span className="font-mono text-[10px] font-semibold text-copper">2026</span>
          </motion.div>

          {/* Dynamic Headline */}
          <h1
            className="mt-6 font-display text-[clamp(38px,6vw,68px)] font-bold leading-[1.04] tracking-[-0.02em] text-ivory"
            data-testid="hero-headline"
          >
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: 0.3 + i * 0.14, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* High-Impact Engineering Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ivory/75 sm:text-[17px]"
            data-testid="hero-subtitle"
          >
            A 75-minute technical masterclass on deploying Computer Vision and Predictive Maintenance across
            brownfield and greenfield factory floors. Learn how plant leaders eliminate catastrophic machine
            failure and achieve zero-defect QA—without replacing legacy PLC infrastructure.
          </motion.p>

          {/* Industrial Benchmark Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4"
          >
            {METRICS.map((m) => (
              <div key={m.label} className="bg-steel px-4 py-3.5 transition-colors hover:bg-steeldeep">
                <p className="font-display text-[22px] font-bold text-machine lg:text-[26px]">
                  {m.value}
                </p>
                <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[1px] text-ivory">
                  {m.label}
                </p>
                <p className="mt-0.5 font-mono text-[9px] text-graphite">{m.sub}</p>
              </div>
            ))}
          </motion.div>

          {/* Quick Event Specs Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4 font-mono text-[11px] text-ivory/80"
          >
            {EVENT_SPECS.map((s, idx) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-graphite">{s.label}:</span>
                <span className="font-semibold text-machine">{s.value}</span>
                {idx < EVENT_SPECS.length - 1 && <span className="hidden text-white/20 sm:inline">|</span>}
              </div>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToId("register")}
              className="group inline-flex items-center justify-center gap-3 bg-machine px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-steel transition-colors hover:bg-[#a8cd8f]"
              data-testid="hero-cta-primary"
            >
              Reserve My Free Seat
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("learn")}
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 text-[14px] font-medium uppercase tracking-[0.08em] text-ivory transition-colors hover:border-machine hover:text-machine"
              data-testid="hero-cta-secondary"
            >
              Explore the 75-Min Agenda
            </button>
          </motion.div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25, ease: EASE }}
            className="mt-9 max-w-md"
          >
            <Countdown />
          </motion.div>
        </div>

        {/* Parallax Robotic Preview Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          className="relative lg:col-span-5"
        >
          <div ref={frameRef} className="relative border border-white/10" data-testid="hero-image-frame">
            <Crosshair className="-left-2 -top-2.5 text-machine/70" />
            <Crosshair className="-right-2 -top-2.5 text-machine/70" />
            <Crosshair className="-bottom-2.5 -left-2 text-machine/70" />
            <Crosshair className="-bottom-2.5 -right-2 text-machine/70" />

            {/* Edge AI Telemetry Overlay Badge */}
            <div className="absolute right-3 top-3 z-10 flex items-center gap-2 border border-white/20 bg-steeldeep/90 px-3 py-1.5 backdrop-blur-md">
              <Activity size={14} className="text-machine animate-pulse" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[1px] text-ivory">
                Edge Inference: 14ms
              </span>
            </div>

            <div className="relative h-[380px] overflow-hidden sm:h-[460px] lg:h-[540px]">
              <motion.img
                src={HERO_IMG}
                alt="Automated production line with industrial robotic arms and edge AI computer vision sensors"
                style={{ y }}
                className="h-[115%] w-full object-cover"
                data-testid="hero-image"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-steel/80 via-transparent to-steel/20" />
            </div>

            <div className="flex items-center justify-between border-t border-white/10 bg-steel px-4 py-3">
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-graphite">
                  Fig. 01 — Automated Assembly Cell
                </p>
                <p className="font-mono text-[10px] text-machine">Brownfield Sensor Retrofit</p>
              </div>
              <span className="border border-copper/40 bg-copper/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[1px] text-copper">
                Active Telemetry
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
