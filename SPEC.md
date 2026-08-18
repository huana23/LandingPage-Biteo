# Biteo Landing Page - Specification

## 1. Concept & Vision

Biteo là một super app công nghệ Việt Nam kết hợp Video giải trí, Ẩm thực, Du lịch, Mua sắm và Dịch vụ địa phương trong một nền tảng duy nhất. Landing page phải tạo cảm giác của một công ty công nghệ lớn với thiết kế hiện đại, premium, đáng tin cậy - lấy cảm hứng từ Grab và Apple nhưng với bản sắc Việt Nam.

## 2. Design Language

### Color Palette
- **Biteo Green**: #00B14F (Primary)
- **Dark Green**: #008F3D (Primary Dark)
- **Lime Accent**: #B7F34A (Accent)
- **White**: #FFFFFF
- **Background**: #F7F8F7
- **Text Dark**: #17211B
- **Secondary Text**: #66706A
- **Footer Dark**: #111814

### Typography
- Font: Inter (Google Fonts)
- Headlines: Bold, 48-72px desktop, 32-40px mobile
- Body: Regular, 16-18px
- Eyebrow: Medium, 14px, uppercase tracking

### Spatial System
- Section padding: 80-120px vertical
- Card border-radius: 24px
- Button border-radius: 12px
- Gap between elements: 8px base unit

### Motion Philosophy
- Scroll-triggered animations with Framer Motion
- Fade in + slide up (opacity 0→1, y: 30→0)
- Stagger: 100ms between items
- Hover: scale 1.02-1.05, shadow increase
- Duration: 0.4-0.6s, ease-out
- Floating elements: subtle float animation

## 3. Layout & Structure

### Sections (in order)
1. Header (sticky)
2. Hero Section
3. Trust/Ecosystem Bar
4. Service Ecosystem Grid
5. Featured Experience (blue bg)
6. Business Partnership Split
7. Opportunities Cards
8. User-Centric Statistics
9. Download App CTA
10. Final CTA
11. Footer

### Responsive Strategy
- Mobile-first with breakpoints: 640px, 768px, 1024px, 1280px
- Hero: 2 columns desktop → stacked mobile
- Grid: 3 cols → 2 cols → 1 col
- Full-width CTAs on mobile

## 4. Features & Interactions

### Header
- Fixed on scroll with shadow on scroll
- Mobile: hamburger menu with slide-out drawer
- Smooth scroll to sections

### Hero
- Large headline with gradient text
- Floating ecosystem visualization
- Animated floating cards around phone mockup
- Dual CTA buttons

### Service Cards
- Hover: lift + shadow + icon scale
- Each card links to respective service

### Animations
- Intersection Observer for scroll reveals
- Parallax on hero background
- Staggered card appearances

## 5. Component Inventory

### Header
- Logo, Navigation links, CTA buttons
- States: default, scrolled (shadow), mobile (drawer)

### HeroSection
- Split layout, floating elements, phone mockup
- Animated background shapes

### ServiceCard
- Icon, image, title, description, CTA
- States: default, hover (lift + shadow)

### FeatureShowcase
- Phone mockup with floating features
- Scroll-triggered animations

### CTASection
- Background, heading, buttons, app store badges

### Footer
- Logo, description, column links, copyright

## 6. Technical Approach

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Images**: Custom SVG illustrations + Unsplash placeholders
- **Responsive**: Tailwind breakpoints
- **Performance**: Lazy loading, optimized images
