import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#0A141C] py-14 text-graphite"
      data-testid="footer-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <p
                className="font-display text-[15px] font-semibold uppercase tracking-[0.14em] text-ivory"
                data-testid="footer-branding"
              >
                The Intelligent Factory
              </p>
            </div>
            <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[1.5px]">
              AI for Manufacturing
            </p>
          </div>

          <div className="flex flex-col gap-3 font-mono text-[12px] font-medium uppercase tracking-[1.5px] lg:text-right">
            <p data-testid="footer-date">10 December 2026</p>
            <a
              href="mailto:events@example.com"
              className="transition-colors hover:text-machine"
              data-testid="footer-email"
            >
              events@example.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[1.5px]" data-testid="footer-copyright">
            Copyright © 2026 The Intelligent Factory.
          </p>
        </div>
      </div>
    </footer>
  );
}
