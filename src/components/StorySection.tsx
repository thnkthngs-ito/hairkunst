import AnimatedSection from "@/components/AnimatedSection";

const StorySection = () => {
  return (
    <section id="story" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80"
                alt="Hairkunst salon team"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="space-y-6">
            <AnimatedSection direction="right">
              <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Since 2007</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Hairkunst <span className="text-gradient italic">Story</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="right">
              <p className="text-muted-foreground leading-relaxed">
                Proudly open since 2007, Hairkunst has been the go-to salon for
                over 200,000 delighted clients seeking top‑notch hair services.
                Our team of skilled stylists is dedicated to creating stunning
                looks that exceed expectations.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25} direction="right">
              <p className="text-muted-foreground leading-relaxed">
                With a passion for hair artistry and a commitment to customer
                satisfaction, we strive to provide a welcoming and relaxing
                experience for every client. Visit us today and let us transform
                your hair into a masterpiece.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35} direction="right">
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">200K+</p>
                  <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">17+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years of Excellence</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground mt-1">Premium Outlets</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
