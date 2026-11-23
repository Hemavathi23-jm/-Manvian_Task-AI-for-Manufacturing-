export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" fill="#101D27" />
      <rect x="0.5" y="0.5" width="31" height="31" fill="none" stroke="#64737C" strokeOpacity="0.7" />
      <path d="M6 24V13l6 3.5V13l6 3.5V13l6 3.5V8h2v16Z" fill="#B9D9A4" />
      <circle cx="25.8" cy="6.6" r="1.7" fill="#D97843" />
    </svg>
  );
}
