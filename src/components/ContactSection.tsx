import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-warm">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Experience Hairkunst</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Ready for a <span className="text-gradient italic">Transformation?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            Experience the Hairkunst difference anytime, anywhere. Book your
            appointment online and let us turn your hair into a masterpiece.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="https://booking.hairkunst.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 group"
          >
            Book Online
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
