import { useEffect } from "react";
import { prefersReducedMotion } from "../lib/motionPrefs";

/**
 * Applies a subtle vertical parallax to every element carrying
 * `data-parallax="<speed>"`. Runs inside a single rAF loop for performance.
 */
export function useParallax(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (nodes.length === 0) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) continue;
        const speed = Number(node.dataset.parallax) || 0.12;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        node.style.transform = `translate3d(0, ${(-progress * speed * 100).toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);
}
