# Port-de-Bouc Tourism Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Taking primary inspiration from Visit Dubai's premium tourism aesthetic, combined with Apple's clean minimalism and Awwwards-winning modern web design patterns. The design should create an immediate "WOW factor" that makes visitors want to explore Port-de-Bouc.

## Core Design Elements

### A. Typography
**Headline Font**: Playfair Display or Lora (modern serif) - Bold/Semibold weights
- Hero headline: 3xl to 5xl
- Section headlines: 2xl to 3xl
- Card titles: xl to 2xl

**Body Font**: Inter or DM Sans (clean sans-serif)
- Body text: base to lg
- Captions: sm to base
- Buttons: base font, medium weight

### B. Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card padding: p-6 to p-8
- Element spacing: gap-4, gap-6, gap-8

**Container widths**: max-w-7xl for most sections, max-w-6xl for content-heavy areas

### C. Color Palette
- **Primary Blue**: #0A4D8C (Mediterranean depth)
- **Turquoise**: #00BCD4 (coastal waters)
- **Sandy Beige**: #F5E6D3 (beaches)
- **Sunset Orange**: #FF6B35 (accents, CTAs)
- **White**: #FFFFFF
- **Dark Gray**: #2C3E50 (dark mode backgrounds)
- **Light Gray**: #ECF0F1 (subtle backgrounds)

## Component Library

### Hero Section
- Full viewport height (100vh) immersive experience
- 3D animated wave background with parallax layers (use Framer Motion + optional Three.js)
- Centered glassmorphic card with frosted glass effect (backdrop-blur-lg, bg-white/10, border border-white/20)
- Large hero headline with gradient text effect
- Two CTAs: Primary (solid sunset orange, blurred background) and Secondary (outline, white border)
- Animated scroll indicator at bottom with bounce animation
- Background video option or animated gradient with 3D sphere elements

### About Section
- Split-screen layout or full-width with floating cards
- Four animated statistics cards appearing on scroll:
  - Large numbers with counter animation
  - Icon above number
  - Label below
  - Cards lift on hover with subtle shadow
- Masonry or carousel image gallery (3-4 high-quality images)
- Staggered slide-in animations for cards (left and right)

### Attractions Grid
- Category filter pills at top (pill-shaped buttons, active state with solid color)
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- 3D hover card effects: lift, tilt on mouse movement, enhanced shadow
- Each card: Full-width image at top, gradient overlay, title overlaid on image, short description below, "En savoir plus" button
- Modal popup on click: Large hero image, full description, embedded Google Map, "Obtenir des directions" button

### Restaurant Showcase
- Cuisine filter chips (horizontal scroll on mobile)
- Restaurant cards with food photography, name, cuisine badge, price indicator (€-€€€), rating stars
- Expandable interaction: Click to reveal full details, menu highlights, map button
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile

### Events Timeline
- Horizontal carousel or vertical timeline layout
- Event cards with date badge (circular or pill), category tag (colored), event image, title, description
- Filter toggles: Upcoming | This Month | All Year
- Category color coding: Festival (purple), Music (blue), Culture (orange), Gastronomy (red), Sports (green)

### Interactive Map
- Full-width section with custom-styled Google Maps
- Custom markers: Attractions (red pin), Restaurants (orange fork/knife), Events (purple calendar), Tourist Office (blue info)
- Click marker opens info popup with thumbnail image, name, category, directions button
- Layer toggles to show/hide categories

### Practical Info
- Accordion layout with expand/collapse sections
- Sections: How to Get There, Tourist Office Contact, Best Time to Visit, FAQ
- Icons next to each section header
- Smooth expand/collapse animations

### Gallery
- Masonry grid layout (Pinterest-style)
- Category filter tabs: All | Architecture | Nature | Beach | Culture
- Lightbox on image click with prev/next navigation, close button, image counter
- Hover effect: slight zoom and overlay with view icon

### Newsletter Section
- Gradient background (blue to turquoise)
- Centered content with headline, subtitle, email input + subscribe button (inline)
- Success/error message animations
- Floating effect with subtle shadow

## Visual Effects & Animations

**Glassmorphism**: Apply to hero card, navigation bar, overlaid cards - use backdrop-blur-lg, semi-transparent backgrounds (bg-white/10 to bg-white/20), border with border-white/20

**3D Card Tilts**: On hover, cards rotate slightly following mouse position, enhance shadow, lift with translateY

**Scroll Animations**: 
- Fade-in with slide-up for text elements
- Stagger animations for card grids (each card appears sequentially)
- Parallax backgrounds moving at different speeds
- Number counters animating on scroll into view

**Hover Interactions**:
- Image zoom effect (scale-110 transition)
- Button glow or subtle scale increase
- Card shadow enhancement

**Page Elements**:
- Scroll progress bar at top (fixed, gradient fill)
- Smooth scroll behavior throughout
- Loading skeletons for images and content

**Libraries**: Framer Motion for all animations, AOS for scroll triggers, Swiper for carousels

## Images

**Hero Section**: Large, cinematic image of Port-de-Bouc waterfront with Fort de Bouc visible, golden hour lighting preferred. Alternative: Mediterranean wave video loop or 3D animated background.

**About Section**: Mosaic of 3-4 images - Fort de Bouc fortress, beach scene, marina with boats, sunset over Mediterranean

**Attractions**: High-quality photos for each location - Fort de Bouc (architectural detail), Plage de la Lèque (beach panorama), Port de Plaisance (aerial marina view), waterfront promenade (people walking)

**Restaurants**: Authentic food photography - fresh seafood, Mediterranean dishes, restaurant ambiance shots

**Events**: Festival crowds, musicians performing, cultural celebrations, outdoor events

**Gallery**: 15-20 diverse images across categories showing architectural details, natural landscapes, beach scenes, cultural moments

All images should be high-resolution (minimum 1920px width for hero, 1200px for large cards), optimized for web (WebP format), with proper alt text for accessibility.

## Responsive Behavior
- Mobile-first approach with hamburger navigation
- Touch-friendly buttons (minimum 44x44px)
- Simplified animations on mobile devices (reduce motion)
- Swipeable carousels and galleries
- Stacked layouts on mobile (single column)
- Larger touch targets for interactive elements

## Accessibility
- WCAG 2.1 AA compliant
- Proper heading hierarchy (h1-h6)
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators on interactive elements