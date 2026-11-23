const ITEMS = [
  "Predictive Maintenance",
  "Computer Vision",
  "Production Optimisation",
  "Data-Driven Decisions",
  "10 December 2026",
  "Live Online Webinar",
  "Free Registration",
];

function Row({ hidden = false }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex w-max items-center">
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className="flex items-center font-mono text-[12px] font-medium uppercase tracking-[2px] text-ivory/60"
        >
          <span className="px-9">{item}</span>
          <span className="text-copper">//</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-b border-white/10 bg-steeldeep py-4"
      data-testid="editorial-marquee"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
