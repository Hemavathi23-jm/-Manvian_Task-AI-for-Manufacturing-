import { motion } from "framer-motion";
import { ArrowLeft, MailCheck } from "lucide-react";
import { EASE } from "./bits";

const EVENT_INFO = [
  { label: "Date", value: "10 December 2026", testid: "thankyou-event-date" },
  { label: "Time", value: "Thursday | 6:00 PM IST", testid: "thankyou-event-time" },
  { label: "Format", value: "Online Webinar", testid: "thankyou-event-format" },
];

export default function ThankYou({ onGoHome }) {
  const handleHomeClick = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="tech-grid relative flex min-h-screen items-center justify-center bg-steel px-6 py-24 text-ivory"
      data-testid="thankyou-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="w-full max-w-xl text-center"
      >
        <motion.svg
          width="76"
          height="76"
          viewBox="0 0 76 76"
          fill="none"
          className="mx-auto"
          aria-hidden="true"
        >
          <motion.circle
            cx="38"
            cy="38"
            r="36"
            stroke="#B9D9A4"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <motion.path
            d="M24 39.5l10 10L53 28"
            stroke="#D97843"
            strokeWidth="2.5"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.55, delay: 0.75, ease: EASE }}
          />
        </motion.svg>

        <p className="mt-8 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-machine">
          Registration Confirmed
        </p>
        <h1
          className="mt-4 font-display text-[clamp(36px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.02em]"
          data-testid="thankyou-headline"
        >
          YOU'RE ON THE LIST!
        </h1>
        <p className="mt-3 font-display text-[clamp(18px,2.2vw,24px)] font-medium text-machine">
          THE FUTURE OF MANUFACTURING AWAITS.
        </p>
        <p
          className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-ivory/70 lg:text-[17px]"
          data-testid="thankyou-message"
        >
          Thank you for registering for AI for Manufacturing. We're excited to have you join us for an insightful
          session on the future of intelligent industry.
        </p>

        {/* Webinar Link Notification Banner */}
        <div
          className="mx-auto mt-6 flex max-w-lg items-center justify-center gap-3 border border-machine/30 bg-machine/10 px-5 py-3.5 text-left text-ivory/90"
          data-testid="thankyou-email-notice"
        >
          <MailCheck size={20} className="shrink-0 text-machine" />
          <p className="font-mono text-[12px] leading-relaxed text-ivory/90">
            The webinar joining link and session access details will be sent to your registered email shortly.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {EVENT_INFO.map((item) => (
            <div key={item.label} className="bg-steel px-5 py-5">
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
        </div>

        {/* Back to Home Page Button */}
        <div className="mt-10">
          <button
            onClick={handleHomeClick}
            className="group inline-flex items-center justify-center gap-3 border border-machine bg-machine px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-steel transition-colors hover:bg-[#a8cd8f]"
            data-testid="thankyou-navigate-home-button"
          >
            <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Navigate to Home Page
          </button>
        </div>

        <p className="mt-10 font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-graphite">
          Stay Curious <span className="text-copper">·</span> Think Intelligent{" "}
          <span className="text-copper">·</span> Build the Future
        </p>
      </motion.div>
    </section>
  );
}
