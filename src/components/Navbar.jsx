import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { scrollToId } from "../lib/scroll";

const LINKS = [
  { id: "about", label: "About" },
  { id: "learn", label: "What You'll Learn" },
  { id: "speaker", label: "Speaker" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-steel/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      data-testid="navbar-container"
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-14">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-3 text-left"
          data-testid="brand-logo"
          aria-label="The Intelligent Factory — back to top"
        >
          <Logo size={32} />
          <span className="font-display text-[14px] font-semibold uppercase tracking-[0.14em] text-ivory">
            The Intelligent Factory
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-[14px] font-medium text-ivory/75 transition-colors hover:text-machine"
              data-testid={`nav-link-${l.id}`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("register")}
            className="border border-machine bg-machine px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-steel transition-colors hover:bg-[#a8cd8f]"
            data-testid="nav-cta-register-button"
          >
            Register Free
          </button>
        </div>

        <button
          className="text-ivory lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-steel px-6 pb-6 pt-2 lg:hidden" data-testid="nav-mobile-menu">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full border-b border-white/5 py-3.5 text-left text-[13px] font-medium uppercase tracking-[0.1em] text-ivory/80"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("register")}
            className="mt-5 w-full bg-machine py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-steel"
          >
            Register Free
          </button>
        </div>
      )}
    </header>
  );
}
