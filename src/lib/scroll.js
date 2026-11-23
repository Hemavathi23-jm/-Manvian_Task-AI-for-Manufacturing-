import Lenis from "lenis";

export const lenisStore = { current: null };

export function initLenis() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  if (lenisStore.current) return lenisStore.current;
  const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  let rafId;
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
  lenisStore.current = lenis;
  lenisStore.destroy = () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    lenisStore.current = null;
  };
  return lenis;
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisStore.current) lenisStore.current.scrollTo(el, { offset: -72, duration: 1.2 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}
