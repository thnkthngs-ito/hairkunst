import AnimatedSection from "@/components/AnimatedSection";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Vibrant color transformation",
    label: "Color Transformation",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
    alt: "Blonde balayage highlights",
    label: "Balayage",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    alt: "Sleek bob precision cut",
    label: "Precision Cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    alt: "Bridal updo styling",
    label: "Bridal Styling",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    alt: "Hijabi-friendly styling",
    label: "Hijabi-Friendly",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    alt: "Curly hair treatment",
    label: "Curl Enhancement",
    span: "",
  },
];

const STAGGER = 0.1;

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Our Work</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Style <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A curated collection of transformations crafted by our master stylists.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} delay={STAGGER * index} direction="scale" className={image.span}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm tracking-wider uppercase text-primary-foreground font-medium">{image.label}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
