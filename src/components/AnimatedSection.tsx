import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds (e.g. 0.1) */
  delay?: number;
  /** Direction the element slides in from */
  direction?: "up" | "left" | "right" | "scale";
}

/**
 * Wraps any content with a scroll-triggered fade + slide animation.
 * Respects prefers-reduced-motion (content is shown immediately).
 *
 * To add a new animated section, simply wrap it:
 * ```tsx
 * <AnimatedSection delay={0.1} direction="up">
 *   <MyComponent />
 * </AnimatedSection>
 * ```
 */
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

  const transforms: Record<string, string> = {
    up: "translateY(24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
    scale: "scale(0.95)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) translateX(0) scale(1)" : transforms[direction],
        transition: `opacity 500ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}s, transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
