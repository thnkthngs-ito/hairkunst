import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Detects if user prefers reduced motion.
 * When true, all scroll animations should be skipped.
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ─── Scroll-triggered visibility ────────────────────────────────────────────
interface UseScrollAnimationOptions {
  /** Fraction of element visible before triggering (0–1). Default 0.25 */
  threshold?: number;
  rootMargin?: string;
  /** Animate only the first time the element enters view. Default true */
  once?: boolean;
}

/**
 * Returns a ref to attach to any element and a boolean `isVisible`
 * that flips to true when the element scrolls into view.
 *
 * Usage:
 * ```tsx
 * const { ref, isVisible } = useScrollAnimation();
 * ```
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.25, rootMargin = "0px", once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  // If reduced-motion is on, start visible immediately
  const [isVisible, setIsVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) return; // nothing to observe
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

// ─── Active-section tracker for navigation ──────────────────────────────────
/**
 * Watches a list of section IDs and returns whichever one is currently
 * most visible near the top of the viewport — used to highlight the
 * active nav link.
 *
 * @param sectionIds  Array of element IDs (e.g. ["hero","services","gallery"])
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}

// ─── Parallax for hero imagery ──────────────────────────────────────────────
/**
 * Applies a subtle translateY parallax to the referenced element.
 * Clamped to ±`maxOffset` pixels. Disabled on mobile (<768px) and
 * when prefers-reduced-motion is set.
 *
 * @param speed      Multiplier for scroll offset (default 0.15)
 * @param maxOffset  Maximum translation in px (default 20)
 */
export function useParallax(speed = 0.15, maxOffset = 20) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile or reduced-motion
    if (prefersReducedMotion()) return;
    if (window.innerWidth < 768) return;

    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const raw = (rect.top - window.innerHeight / 2) * speed;
          // Clamp to [-maxOffset, maxOffset]
          const offset = Math.max(-maxOffset, Math.min(maxOffset, raw));
          el.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, maxOffset]);

  return ref;
}

// ─── Smooth scroll helper ───────────────────────────────────────────────────
/**
 * Scrolls to an anchor, accounting for the fixed header height.
 * Falls back to native anchor behaviour if JS fails.
 */
export function scrollToSection(href: string, headerHeight = 80) {
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
}
