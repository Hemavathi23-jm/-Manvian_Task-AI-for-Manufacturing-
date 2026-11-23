import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useCountdown from "../hooks/useCountdown";
import { scrollToId } from "../lib/scroll";
import { EASE, Crosshair } from "./bits";

const HERO_IMG =
  "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=1400&q=80";

const EVENT_INFO = [
  { label: "Date", value: "10 December 2026", testid: "hero-event-date" },
  { label: "Day & Time", value: "Thursday | 6:00 PM – 7:15 PM IST", testid: "hero-event-time" },
  { label: "Format", value: "Online Live Webinar", testid: "hero-event-format" },
  { label: "Registration", value: "Free", testid: "hero-event-price" },
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
      <p className="font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-graphite">
        {t.expired ? "Session is live" : "Session starts in"}
      </p>
      <div className="mt-3 flex border border-white/10">
        {units.map((u, i) => (
          <div key={u.label} className={`flex-1 py-4 text-center ${i > 0 ? "border-l border-white/10" : ""}`}>
            <p
              className="font-display text-[26px] font-semibold tabular-nums leading-none text-ivory sm:text-[32px]"
              data-testid={u.testid}
            >
              {String(u.value).padStart(2, "0")}
            </p>
            <p className="mt-2 font-mono text-[10px] font-medium tracking-[1.5px] text-graphite">{u.label}</p>
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
    <>THE NEXT FACTORY</>,
    <>
      IS <span className="text-machine">INTELLIGENT.</span>
    </>,
  ];

  return (
    <section
      id="hero"
      className="tech-grid relative overflow-hidden border-b border-white/10 bg-steel pb-20 pt-32 lg:pb-28 lg:pt-40"
      data-testid="hero-section"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-graphite"
            data-testid="hero-eyebrow"
          >
            Industry 4.0 <span className="text-copper">/</span> Live Masterclass <span className="text-copper">/</span>{" "}
            2026
          </motion.p>

          <h1
            className="mt-6 font-display text-[clamp(40px,6.4vw,72px)] font-bold leading-[1.03] tracking-[-0.02em] text-ivory"
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-ivory/70 lg:text-[17px]"
            data-testid="hero-subtitle"
          >
            Artificial intelligence is transforming the way the world manufactures. Discover how intelligent
            technologies are improving production, predicting machine failures and creating smarter industrial
            operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-9 grid grid-cols-2 gap-px bg-white/10 xl:grid-cols-4"
          >
            {EVENT_INFO.map((item) => (
              <div key={item.label} className="bg-steel px-4 py-4">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-graphite">
                  {item.label}
                </p>
                <p
                  className="mt-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-machine"
                  data-testid={item.testid}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToId("register")}
              className="group inline-flex items-center justify-center gap-3 bg-machine px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-steel transition-colors hover:bg-[#a8cd8f]"
              data-testid="hero-cta-primary"
            >
              Reserve My Free Seat
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("learn")}
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 text-[15px] font-medium uppercase tracking-[0.08em] text-ivory transition-colors hover:border-machine hover:text-machine"
              data-testid="hero-cta-secondary"
            >
              Explore the Agenda
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
            className="mt-10 max-w-md"
          >
            <Countdown />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          className="relative lg:col-span-5"
        >
          <div ref={frameRef} className="relative border border-white/10" data-testid="hero-image-frame">
            <Crosshair className="-left-2 -top-2.5 text-machine/70" />
            <Crosshair className="-right-2 -top-2.5" />
            <Crosshair className="-bottom-2.5 -left-2" />
            <Crosshair className="-bottom-2.5 -right-2" />
            <div className="relative h-[380px] overflow-hidden sm:h-[460px] lg:h-[540px]">
              <motion.img
                src={HERO_IMG}
                alt="Automated production line with industrial robotic arms in a modern manufacturing facility"
                style={{ y }}
                className="h-[115%] w-full object-cover"
                data-testid="hero-image"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-steel/70 via-transparent to-steel/20" />
            </div>
            <div className="flex items-center justify-between border-t border-white/10 bg-steel px-4 py-3">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-graphite">
                Fig. 01 — Automated Assembly Line
              </p>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-copper">Robotic Cell</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
