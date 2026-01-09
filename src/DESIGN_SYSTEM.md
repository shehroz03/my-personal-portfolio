# Shehroz Shafiq Portfolio - Design System

This document defines the design system for easy implementation in React + Vite.

## ✨ What's New - Enhanced UI/UX

### Global Improvements
- ✅ Consistent 8px spacing system throughout
- ✅ Clear typography hierarchy (H1, H2, H3, body, captions)
- ✅ Comprehensive hover/active states for all interactive elements
- ✅ Better white space balance across all breakpoints
- ✅ Interactive design system showcase page (Ctrl/Cmd + D)

### Navigation Enhancements
- ✅ Scroll shrink effect: Header height reduces from 80px to 64px on scroll
- ✅ Backdrop blur and shadow on scroll
- ✅ Smooth logo size transition
- ✅ Active states for mobile menu button

### Hero Section
- ✅ Fade-in animation on page load
- ✅ Improved spacing with clamp() for responsive text
- ✅ Subtle parallax blur decorations with animation
- ✅ Image hover scale effect

### Tech Stack Strip
- ✅ NEW: Horizontal tech icons with hover animations
- ✅ Icon rotation and scale on hover
- ✅ Clean, minimal design

### Skills Section
- ✅ Enhanced card hover: lift, shadow, and icon animation
- ✅ Icon rotation (12°) and scale (125%) on hover
- ✅ Title color change on hover
- ✅ Individual list item hover with translate effect
- ✅ Gradient icon backgrounds

### Projects Section
- ✅ Image zoom (110%) on card hover
- ✅ Gradient overlay fade-in from bottom
- ✅ "View Details" button with smooth appearance
- ✅ Enhanced tag hover effects
- ✅ Improved card shadow and lift animation

### Project Detail Pages
- ✅ NEW: Full-screen modal with gradient header
- ✅ Large hero screenshot with image gallery
- ✅ Clickable thumbnail navigation (5-7 images)
- ✅ Two-column layout: details on left, actions on right
- ✅ Tech stack tags and key features list
- ✅ Live Demo and Source Code buttons
- ✅ CTA section to contact

### About Section
- ✅ Timeline cards with hover animations
- ✅ Icon rotation and scale on hover
- ✅ Portrait image ring and shadow
- ✅ Improved text hierarchy and spacing

### Services Section
- ✅ Enhanced card hierarchy with larger icons (72px)
- ✅ Icon rotation (12°) and scale on hover
- ✅ Button brightness increase on card hover
- ✅ Full-width CTA buttons
- ✅ Consistent card heights with minHeight

### Testimonials Section
- ✅ NEW: Client feedback cards with quotes
- ✅ Quote icon in teal background circle
- ✅ Clean card design with border separator
- ✅ Hover lift and shadow effects

### Contact Section
- ✅ Success message state with animation
- ✅ Enhanced contact method cards with hover
- ✅ Icon rotation and scale on hover
- ✅ Better focus states for form inputs
- ✅ Active states for Fiverr/Upwork buttons

### Footer
- ✅ NEW: Clean footer with three columns
- ✅ Quick links navigation
- ✅ Social media icons with hover effects
- ✅ Copyright and year display

### Design System Page
- ✅ NEW: Complete component showcase
- ✅ Color palette with hex codes
- ✅ Typography specimens
- ✅ Button variants and sizes
- ✅ Form input examples
- ✅ Card components
- ✅ Spacing system visual guide
- ✅ Accessible via button or Ctrl/Cmd + D

## 🎨 Color Palette

### Primary Colors
- **White**: `#ffffff`
- **Teal 600** (Primary): `#0d9488`
- **Teal 700** (Hover): `#0f766e`
- **Teal 100** (Light): `#ccfbf1`
- **Teal 50** (Subtle): `#f0fdfa`

### Grayscale
- **Gray 900** (Headings): `#111827`
- **Gray 700** (Text): `#374151`
- **Gray 600** (Body): `#4b5563`
- **Gray 300** (Borders): `#d1d5db`
- **Gray 200** (Borders): `#e5e7eb`
- **Gray 100** (Backgrounds): `#f3f4f6`
- **Gray 50** (Backgrounds): `#f9fafb`

## 📐 Spacing System (8px base)

Use multiples of 8px for consistent spacing:

- **1x**: `8px` - Micro spacing (gaps in lists, small margins)
- **2x**: `16px` - Small gaps (between related items, padding)
- **3x**: `24px` - Medium gaps (section internal spacing)
- **4x**: `32px` - Large gaps (card padding, grid gaps)
- **6x**: `48px` - XL gaps (section columns)
- **8x**: `64px` - Section spacing
- **10x**: `80px` - Navigation height
- **12x**: `96px` - Large section spacing
- **16x**: `128px` - Hero spacing
- **20x**: `160px` - Section vertical padding

## 🔤 Typography Hierarchy

### Font Family
- **Base**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

### Font Sizes & Line Heights

#### H1 (Page Titles)
- **Mobile**: `40px` / `1.2`
- **Desktop**: `56px` / `1.2`
- **Weight**: `600` (Semi-bold)
- **Usage**: Hero heading

#### H2 (Section Headings)
- **Mobile**: `32px` / `1.3`
- **Desktop**: `40px` / `1.3`
- **Weight**: `600` (Semi-bold)
- **Usage**: Section titles

#### H3 (Card/Component Titles)
- **Size**: `24px` / `1.3`
- **Weight**: `600` (Semi-bold)
- **Usage**: Card headings, subsection titles

#### H4 (Small Headings)
- **Size**: `18px` / `1.4`
- **Weight**: `600` (Semi-bold)
- **Usage**: Small component headers

#### Body Text
- **Size**: `16px` / `1.6`
- **Weight**: `400` (Regular)
- **Usage**: Paragraphs, descriptions

#### Subheading / Lead Text
- **Mobile**: `20px` / `1.4`
- **Desktop**: `24px` / `1.4`
- **Weight**: `500` (Medium)
- **Usage**: Hero subheading, important callouts

#### Small Text
- **Size**: `14px` / `1.5`
- **Weight**: `400` (Regular)
- **Usage**: Labels, metadata

#### Tiny Text
- **Size**: `12px` / `1.5`
- **Weight**: `400` (Regular)
- **Usage**: Captions, fine print

## 🎯 Component Styles

### Buttons

#### Primary Button
- **Background**: `#0d9488` (Teal 600)
- **Text**: `#ffffff` (White)
- **Padding**: `16px 32px` (md), `12px 24px` (sm), `20px 40px` (lg)
- **Border Radius**: `12px`
- **Font**: `16px` / `500` weight
- **Hover**: `scale(1.05)` + shadow

#### Secondary Button
- **Background**: `#ffffff` (White)
- **Text**: `#0d9488` (Teal 600)
- **Border**: `2px solid #0d9488`
- **Padding**: Same as primary
- **Hover**: `background: #f0fdfa` (Teal 50)

### Cards
- **Background**: `#ffffff`
- **Border**: `1px solid #e5e7eb` (Gray 200)
- **Border Radius**: `16px`
- **Padding**: `32px`
- **Shadow (hover)**: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`
- **Transform (hover)**: `translateY(-8px)`

### Form Inputs
- **Background**: `#f9fafb` (Gray 50)
- **Border**: `1px solid #e5e7eb` (Gray 200)
- **Border Radius**: `12px`
- **Padding**: `12px 16px`
- **Font**: `16px` / `400` weight
- **Focus**: `2px ring #0d9488`

### Navigation
- **Height**: `80px`
- **Background**: `#ffffff` with `backdrop-blur-sm` when scrolled
- **Logo**: `16px` / `600` weight / `0.1em` letter-spacing
- **Links**: `16px` / `500` weight / `32px` gap
- **Link Hover**: Teal underline animation

### Tags/Badges
- **Teal Variant**: `background: #f0fdfa`, `color: #0d9488`
- **Gray Variant**: `background: #f3f4f6`, `color: #374151`
- **Padding**: `8px 12px` (sm), `12px 16px` (md)
- **Border Radius**: `9999px` (full)

## ��� Layout System

### Max Widths
- **Container**: `1440px`
- **Content**: `1200px`
- **Narrow**: `800px`

### Horizontal Padding
- **Mobile**: `24px` (6×4)
- **Desktop**: `48px` (12×4)

### Section Spacing
- **Mobile**: `80px` top/bottom
- **Desktop**: `128px` top/bottom

### Grid Gaps
- **Cards**: `32px`
- **Form Fields**: `24px`
- **Content Blocks**: `48px`

## 🎬 Animations & Transitions

### Transition Speeds
- **Fast**: `150ms` - Micro-interactions
- **Base**: `300ms` - Standard interactions (buttons, hovers)
- **Slow**: `500ms` - Page transitions

### Easing
- **Default**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Common Animations
- **Button Hover**: `scale(1.05)` + shadow glow
- **Card Hover**: `translateY(-8px)` + shadow
- **Icon Hover**: `rotate(6deg)` + `scale(1.1)`
- **Nav Link**: Underline slide (width: 0 → 100%)

## 🔧 Shadows

- **Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Large**: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **XL**: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`
- **2XL**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`

## 🧩 Reusable Components

### In `/components/ui/`:
1. **Button.tsx** - Primary, Secondary, Ghost variants
2. **Card.tsx** - Card, CardHeader, CardContent, CardFooter
3. **Input.tsx** - Input and Textarea components
4. **Section.tsx** - Section wrapper with backgrounds
5. **Tag.tsx** - Badge/tag component

### Component Props Pattern
Each component accepts:
- `className` for custom styling
- `variant` for style variations
- `size` for size variations
- Standard HTML attributes

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `≥ 1024px`

Use Tailwind's responsive prefixes:
- `md:` for tablet (768px+)
- `lg:` for desktop (1024px+)

## 🎨 Implementation Tips

1. **Use CSS Variables**: All design tokens are defined in `/styles/globals.css`
2. **Spacing**: Always use multiples of 8px via inline styles or Tailwind
3. **Typography**: Use explicit font sizes with inline styles for clarity
4. **Components**: Import from `/components/ui/` for consistency
5. **Colors**: Use Tailwind color classes or CSS variables
6. **Transitions**: Add `transition-all duration-300` for smooth interactions

## 📦 File Structure

```
/components
  /ui                 # Reusable design system components
    Button.tsx
    Card.tsx
    Input.tsx
    Section.tsx
    Tag.tsx
  Hero.tsx            # Page sections using design system
  Skills.tsx
  Projects.tsx
  About.tsx
  Services.tsx
  Contact.tsx
  Navigation.tsx

/styles
  globals.css         # Design system CSS variables

App.tsx              # Main app component
```

## 🚀 Quick Reference

### Common Patterns

**Section with Header:**
```tsx
<Section id="skills" background="white">
  <SectionHeader title="Skills" subtitle="..." />
  {/* Content */}
</Section>
```

**Button Group:**
```tsx
<div style={{ display: 'flex', gap: '16px' }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
</div>
```

**Card with Icon:**
```tsx
<Card hoverable>
  <CardHeader icon={<Icon />}>
    <h3>Title</h3>
  </CardHeader>
  <CardContent>{/* ... */}</CardContent>
</Card>
```