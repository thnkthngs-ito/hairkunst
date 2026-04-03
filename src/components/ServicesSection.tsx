import { Scissors, Palette, Sparkles, Wind, Heart, Crown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Scissors,
    title: "Cut & Style",
    description: "Precision cuts tailored to your face shape, texture, and lifestyle. From classic to avant-garde.",
    price: "From RM 65",
  },
  {
    icon: Palette,
    title: "Coloring",
    description: "Balayage, highlights, vivid fashion colors, and root touch-ups using premium ammonia-free formulas.",
    price: "From RM 150",
  },
  {
    icon: Sparkles,
    title: "Treatments",
    description: "Keratin smoothing, deep conditioning, scalp therapy, and bond-repair treatments for ultimate shine.",
    price: "From RM 120",
  },
  {
    icon: Wind,
    title: "Blowout & Styling",
    description: "Red carpet-ready blowouts, updos, and special occasion styling by our editorial team.",
    price: "From RM 55",
  },
  {
    icon: Heart,
    title: "Bridal",
    description: "Complete bridal packages including trial, day-of styling, and bridal party looks.",
    price: "From RM 500",
  },
  {
    icon: Crown,
    title: "Extensions",
    description: "Premium tape-in, micro-link, and hand-tied weft extensions for natural-looking volume and length.",
    price: "From RM 600",
  },
];

const STAGGER = 0.1;

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each service is a personalized experience, crafted with attention to detail and a passion for perfection.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={STAGGER * i} direction="scale">
              <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl h-full">
                <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <p className="text-primary font-semibold tracking-wider text-sm">{service.price}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
