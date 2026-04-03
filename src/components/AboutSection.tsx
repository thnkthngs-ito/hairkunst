import AnimatedSection from "@/components/AnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const parallaxRef = useParallax(0.15);

  return (
    <section id="about" className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Full background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef} className="w-full h-[130%] -mt-[15%]">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
            alt="Hairkunst salon interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 w-full">
        <div className="max-w-xl space-y-8">
          <AnimatedSection direction="left">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
              Welcome.{" "}
              <span className="text-gradient italic">Guten Tag</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              At Hairkunst Salon, we pride ourselves on delivering exceptional
              hair services tailored to your unique style. Experience a relaxing
              atmosphere and expert stylists dedicated to making you look
              and feel your best. Every visit is a curated journey of transformation.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
