import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, className = "", y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ index, text, dark = false, className = "" }) {
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[1.5px] ${
        dark ? "text-graphite" : "text-machine/80"
      } ${className}`}
    >
      <span className="text-copper">{index}</span>
      <span className="mx-2 opacity-50">//</span>
      {text}
    </p>
  );
}

export function Crosshair({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute font-mono text-sm leading-none text-graphite/60 ${className}`}
    >
      +
    </span>
  );
}
