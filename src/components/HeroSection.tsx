import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useParallax, scrollToSection } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const parallaxRef = useParallax(0.15);

  return (
    <section id="hero" className="relative min-h-screen flex bg-background overflow-hidden">
      {/* Left: Large image with parallax */}
      <div className="hidden md:block md:w-[60%] relative overflow-hidden">
        <div ref={parallaxRef} className="w-full h-[120%] -mt-[10%]">
          <img
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80"
            alt="Vibrant colorful hair styling"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Mobile: full background image */}
      <div className="md:hidden absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80"
          alt="Vibrant colorful hair styling"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Right: Text panel */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 md:py-0">
        <div className="max-w-md space-y-8">
          <p
            className="text-sm tracking-[0.3em] uppercase text-primary font-medium opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Welcome to Hairkunst
          </p>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Discover Your{" "}
            <span className="text-gradient italic">Perfect Looks</span>
          </h1>

          <p
            className="text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            At Hairkunst, we integrate the artistry of European and Asian styling
            to fulfill your hair aspirations. Our experienced stylists deliver
            exceptional services in an elegant environment tailored to your needs.
          </p>

          <div
            className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://booking.hairkunst.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 group"
            >
              Book Online
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => scrollToSection("#outlets", 80)}
              className="px-8 py-3 border-2 border-foreground/20 text-foreground text-sm font-semibold tracking-wider uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Our Outlets
            </button>
          </div>

          <div
            className="flex flex-col items-center gap-2 pt-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <span className="font-serif italic text-muted-foreground text-base tracking-wider">scroll</span>
            <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
