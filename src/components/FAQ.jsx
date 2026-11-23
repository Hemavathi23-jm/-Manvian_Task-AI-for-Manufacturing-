import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal, SectionLabel, EASE } from "./bits";

const FAQS = [
  {
    q: "Is this webinar free?",
    a: "Absolutely! This is a completely free webinar. Explore AI-powered manufacturing, learn from industry insights and discover practical applications without paying a registration fee.",
  },
  {
    q: "Will the session be recorded?",
    a: "Yes! Registered participants will receive access to the session recording so they can revisit the key concepts and insights whenever they need.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all! The session is designed for beginners, students, professionals and manufacturing enthusiasts. We will explain the concepts in a simple, practical and engaging way.",
  },
  {
    q: "How will I receive the joining link?",
    a: "Once you register, your webinar joining details will be shared through your registered email address before the session. Keep an eye on your inbox!",
  },
  {
    q: "Will participants receive a certificate?",
    a: "Yes! Participants who attend the live session will receive a digital certificate of participation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-ivory py-24 text-steel lg:py-28" data-testid="faq-section">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="06" text="FAQ" dark />
              <h2 className="mt-6 max-w-md font-display text-[clamp(32px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
                GOOD QUESTIONS. CLEAR ANSWERS.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border-b border-steel/12" data-testid={`faq-item-${i}`}>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={open === i}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(open === i ? -1 : i)}
                    data-testid={`faq-question-${i}`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="shrink-0 font-mono text-[11px] font-medium tracking-[1.5px] text-copper">
                        Q{i + 1}
                      </span>
                      <span className="font-display text-lg font-medium leading-snug lg:text-[21px]">{f.q}</span>
                    </span>
                    <span className="shrink-0 text-steel/60">
                      {open === i ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p
                          className="max-w-2xl pb-7 pl-9 pr-8 text-[15px] leading-relaxed text-graphite lg:text-[16px]"
                          data-testid={`faq-answer-${i}`}
                        >
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
