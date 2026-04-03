import { Instagram, Facebook, Mail } from "lucide-react";
import { scrollToSection } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href, 80);
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-foreground tracking-wider">HAIRKUNST</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              European precision meets Asian artistry. Premium salons across Malaysia, one commitment to excellence.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com/hairkunst" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/hairkunst" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:hello@hairkunst.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Gallery", id: "gallery" },
                { label: "Outlets", id: "outlets" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={handleNav(`#${link.id}`)} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@hairkunst.com</li>
              <li>+60 3 1234 5678</li>
              <li>@Hairkunst</li>
              <li className="pt-2">
                <a
                  href="https://booking.hairkunst.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Book Online →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Hairkunst. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
