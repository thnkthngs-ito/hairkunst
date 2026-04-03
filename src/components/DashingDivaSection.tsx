import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const DashingDivaSection = () => {
  return (
    <section id="dashingdiva" className="section-padding bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 md:order-1">
            <AnimatedSection direction="left">
              <p className="text-sm tracking-[0.3em] uppercase text-accent font-medium">Affordable Subsidiary Salons</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Dashing <span className="text-gradient italic">Diva</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="left">
              <p className="text-muted-foreground leading-relaxed">
                Hey there! Welcome to Hairkunst Salon, where we're all about
                giving you awesome hair care and styling in a chill vibe. Our
                talented team is here to help you rock the look you want without
                any fuss.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25} direction="left">
              <p className="text-muted-foreground leading-relaxed">
                Plus, we've got an affordable sister salon, Dashing Diva, under
                our roof, so you can enjoy top‑notch services without spending a
                fortune. Come hang out with us at Dashing Diva and let's make
                your hair dreams come true!
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35} direction="left">
              <a
                href="https://booking.hairkunst.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 group"
              >
                Visit Dashing Diva
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection direction="right" className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80"
                alt="Dashing Diva salon"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DashingDivaSection;
