

# Hairkunst Malaysia — Full Site Rebuild Plan

## Summary

Rebuild the existing dark-purple Hairkunst site into a calm, warm, premium Malaysian salon site. The structure changes significantly: new sections (Our Story, Dashing Diva), revised Outlets with Malaysian locations, updated copy throughout, and a completely new color palette shifting from dark purple to warm neutrals with soft gradients.

## Design System Changes

**Color palette** — Replace dark purple theme with warm, elegant neutrals:
- Background: warm off-white/cream (e.g. `30 20% 97%`)
- Foreground: deep warm charcoal
- Primary: warm rose-gold / muted blush (`350 40% 55%`)
- Accent: soft gold (`38 60% 55%`)
- Cards: white with subtle warm border
- Muted: warm gray tones
- Gradients: soft cream-to-white, blush tints

**Typography** — Keep Playfair Display + Inter, but adjust weights for a lighter, airier feel.

**Utilities** — Update `.text-gradient`, `.bg-gradient-section`, `.glass` to match warm palette. Add `.section-padding` adjustments for generous spacing.

## Section Structure (9 sections)

### 1. Hero
- Headline: "Discover Your Perfect Looks"
- Existing subtext copy
- Two CTAs: "Book Online" (primary) + "View Our Outlets" (secondary/outline)
- Hero image placeholder (vibrant hair)
- Keep split layout but adjust for warm aesthetic

### 2. Welcome
- Reuse existing `AboutSection.tsx` structure
- Title: "Welcome. Guten Tag" (keep)
- Updated copy as provided
- Background image with warm gradient overlay

### 3. Our Story (NEW)
- New component `StorySection.tsx`
- Title: "Hairkunst Story"
- Copy about being open since 2007, 200k+ clients
- Simple text + image layout

### 4. Services
- Keep existing card grid, update currency to "From RM …"
- Adjust card styling for warm palette
- Keep icons and stagger animations

### 5. Premium Outlets (MAJOR REWORK)
- Title: "Hairkunst Premium Outlets"
- Three cards: The Curve, Melawati Mall (Hijabis), Shah Alam .13
- Each with unique description, address placeholder, "Book Now" button
- Remove German locations entirely

### 6. Dashing Diva (NEW)
- New component `DashingDivaSection.tsx`
- Casual, friendly copy about the affordable subsidiary
- CTA: "Visit Dashing Diva"

### 7. Gallery
- Keep existing masonry grid, update labels for Malaysian context (balayage, hijabi-friendly, bridal)

### 8. CTA / Experience Block
- Rework existing `ContactSection.tsx`
- Headline: "Ready for a Transformation?"
- Updated subtext + "Book Online" button
- Remove social icons from this section (move to footer)

### 9. Footer
- Brand line: "HAIRKUNST – European precision meets Asian artistry."
- Links: About, Services, Gallery, Outlets, Contact
- Contact: email, phone, @Hairkunst handle

## Files to Modify
1. **`src/index.css`** — New warm color tokens, updated gradients/utilities
2. **`tailwind.config.ts`** — Update color references if needed
3. **`src/components/HeroSection.tsx`** — New headline, dual CTAs, warm styling
4. **`src/components/AboutSection.tsx`** — Updated copy, warm overlay
5. **`src/components/ServicesSection.tsx`** — RM pricing, warm card style
6. **`src/components/OutletsSection.tsx`** — Three Malaysian locations with descriptions
7. **`src/components/GallerySection.tsx`** — Updated labels
8. **`src/components/ContactSection.tsx`** — CTA-focused block
9. **`src/components/Footer.tsx`** — Updated brand line, links, contact
10. **`src/components/Navbar.tsx`** — Update nav links for new sections

## Files to Create
1. **`src/components/StorySection.tsx`** — "Hairkunst Story" section
2. **`src/components/DashingDivaSection.tsx`** — Subsidiary brand section

## File to Update
- **`src/pages/Index.tsx`** — Add StorySection and DashingDivaSection in correct order

## Animations & Interactions
- Keep existing `AnimatedSection`, `useScrollAnimation`, `useParallax` hooks
- Keep smooth scroll + active nav highlighting
- Ensure all new sections use `AnimatedSection` wrapper
- Respect `prefers-reduced-motion`

