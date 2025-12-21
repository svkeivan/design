# Clarity Path Design System

**Version:** 1.0  
**Last Updated:** 2024  
**Status:** Approved for Production

---

## Table of Contents

1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Styles](#component-styles)
6. [Shadows & Effects](#shadows--effects)
7. [Animations](#animations)
8. [Accessibility](#accessibility)
9. [Implementation Guidelines](#implementation-guidelines)
10. [Code Examples](#code-examples)

---

## Overview

The Clarity Path design system is built on a **Healthcare-focused color palette** combined with a **Soft Neumorphic design style**. This combination creates a professional, trustworthy, and approachable interface perfect for mental health and professional development platforms.

### Design Principles

- **Trust & Professionalism**: Healthcare-inspired colors convey reliability and expertise
- **Soft & Approachable**: Neumorphic design creates a gentle, non-intimidating interface
- **Accessibility First**: WCAG AA compliant with high contrast ratios
- **Consistent Motion**: Smooth, purposeful animations that guide user attention
- **Content-Focused**: Design supports content without overwhelming it

---

## Color Palette

### Primary Colors

| Role | Color Name | Hex | RGB | Usage |
|------|------------|-----|-----|-------|
| **Primary** | Deep Teal | `#0D7377` | `rgb(13, 115, 119)` | Main actions, links, primary CTAs |
| **Secondary** | Soft Sage | `#7FB069` | `rgb(127, 176, 105)` | Secondary actions, highlights |
| **Accent** | Warm Amber | `#E8AA42` | `rgb(232, 170, 66)` | Important notices, progress indicators |

### Neutral Colors

| Role | Color Name | Hex | RGB | Usage |
|------|------------|-----|-----|-------|
| **Background** | Off-White | `#FAFBFC` | `rgb(250, 251, 252)` | Main page background |
| **Surface** | Light Gray | `#F0F4F5` | `rgb(240, 244, 245)` | Card backgrounds, elevated surfaces |
| **Text Primary** | Charcoal | `#1A2B3C` | `rgb(26, 43, 60)` | Headings, primary text |
| **Text Secondary** | Slate | `#5A6978` | `rgb(90, 105, 120)` | Body text, descriptions |

### Semantic Colors

| Role | Color Name | Hex | RGB | Usage |
|------|------------|-----|-----|-------|
| **Success** | Green | `#22C55E` | `rgb(34, 197, 94)` | Success states, positive feedback |
| **Warning** | Orange | `#F59E0B` | `rgb(245, 158, 11)` | Warnings, caution states |
| **Error** | Coral Red | `#EF4444` | `rgb(239, 68, 68)` | Errors, destructive actions |

### Color Usage Guidelines

- **Primary (Deep Teal)**: Use for primary buttons, active states, links, and key interactive elements
- **Secondary (Soft Sage)**: Use for secondary buttons, badges, and supporting elements
- **Accent (Warm Amber)**: Use sparingly for highlights, progress indicators, and attention-grabbing elements
- **Background**: Always maintain sufficient contrast (minimum 4.5:1 for text)
- **Text Colors**: Use Text Primary for headings and important content, Text Secondary for body text and descriptions

### CSS Variables

```css
:root {
  --color-primary: #0D7377;
  --color-secondary: #7FB069;
  --color-accent: #E8AA42;
  --color-background: #FAFBFC;
  --color-surface: #F0F4F5;
  --color-text-primary: #1A2B3C;
  --color-text-secondary: #5A6978;
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

---

## Typography

### Font Family

**Primary Font:** `Outfit`  
**Fallback:** `system-ui, -apple-system, sans-serif`

Outfit provides a modern, friendly feel that complements the soft neumorphic design while maintaining excellent readability.

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| **Normal** | `400` | Body text, descriptions |
| **Medium** | `500` | Subheadings, emphasized text |
| **Bold** | `700` | Headings, important labels |

### Type Scale

| Size | Font Size | Line Height | Usage |
|------|-----------|-------------|-------|
| **H1** | `2.5rem` (40px) | `1.2` | Page titles, hero headings |
| **H2** | `2rem` (32px) | `1.3` | Section headings |
| **H3** | `1.5rem` (24px) | `1.4` | Subsection headings |
| **H4** | `1.25rem` (20px) | `1.5` | Card titles, small headings |
| **Body Large** | `1.125rem` (18px) | `1.6` | Important body text |
| **Body** | `1rem` (16px) | `1.6` | Default body text |
| **Body Small** | `0.875rem` (14px) | `1.5` | Captions, helper text |
| **Caption** | `0.75rem` (12px) | `1.4` | Labels, metadata |

### Typography Guidelines

- Use H1-H4 for hierarchical content structure
- Maintain consistent line heights for readability
- Body text should never be smaller than 14px
- Use font-weight 700 sparingly for emphasis
- Ensure sufficient contrast (minimum 4.5:1) for all text

### CSS Typography Classes

```css
.heading-1 {
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text-primary);
}

.body-text {
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-secondary);
}
```

---

## Spacing & Layout

### Spacing Scale

Use a consistent 4px base unit for all spacing:

| Scale | Value | Usage |
|-------|-------|-------|
| **xs** | `4px` | Tight spacing, icon padding |
| **sm** | `8px` | Small gaps, compact layouts |
| **md** | `16px` | Default spacing, component padding |
| **lg** | `24px` | Section spacing, card padding |
| **xl** | `32px` | Large gaps, page sections |
| **2xl** | `48px` | Extra large spacing, major sections |
| **3xl** | `64px` | Hero sections, page margins |

### Container Widths

| Breakpoint | Max Width | Usage |
|------------|-----------|-------|
| **Mobile** | `100%` | Full width on mobile |
| **Tablet** | `768px` | Tablet layouts |
| **Desktop** | `1200px` | Standard desktop |
| **Large Desktop** | `1400px` | Large screens |

### Grid System

- Use CSS Grid or Flexbox for layouts
- 12-column grid system for complex layouts
- Consistent gutters: 16px on mobile, 24px on desktop
- Responsive breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`

---

## Component Styles

### Buttons

#### Primary Button
- **Background:** `#0D7377` (Deep Teal)
- **Text Color:** `#FFFFFF` (White)
- **Border Radius:** `16px`
- **Padding:** `12px 24px`
- **Font Weight:** `500`
- **Shadow:** Neumorphic inset/outset effect
- **Hover:** Slight scale (1.02) and shadow adjustment

#### Secondary Button
- **Background:** `#7FB069` (Soft Sage)
- **Text Color:** `#FFFFFF` (White)
- **Border Radius:** `16px`
- **Padding:** `12px 24px`
- **Font Weight:** `500`

#### Outline Button
- **Background:** Transparent
- **Border:** `2px solid #0D7377`
- **Text Color:** `#0D7377`
- **Border Radius:** `16px`
- **Padding:** `12px 24px`

#### Ghost Button
- **Background:** Transparent
- **Text Color:** `#0D7377`
- **Border Radius:** `16px`
- **Padding:** `12px 24px`
- **Hover:** Light background tint

### Cards

#### Standard Card
- **Background:** `#F0F4F5` (Surface color)
- **Border Radius:** `16px`
- **Padding:** `24px`
- **Shadow:** Neumorphic effect (see Shadows section)
- **Border:** None (rely on shadow for depth)

#### Elevated Card
- Same as Standard Card with enhanced shadow
- Use for modals, dropdowns, and important content

### Form Inputs

#### Text Input
- **Background:** `#FAFBFC` (Background color)
- **Border:** `2px solid #E0E5E7` (subtle border)
- **Border Radius:** `16px`
- **Padding:** `12px 16px`
- **Font Size:** `16px` (prevents zoom on iOS)
- **Focus State:** Border color changes to `#0D7377`, subtle shadow

#### Textarea
- Same styling as Text Input
- **Min Height:** `120px`
- **Resize:** Vertical only

#### Select Dropdown
- Same styling as Text Input
- **Padding Right:** `40px` (for dropdown arrow)

### Progress Indicators

#### Progress Bar
- **Background:** `#E0E5E7` (light gray)
- **Fill Color:** `#0D7377` (Primary) or `#E8AA42` (Accent)
- **Height:** `8px`
- **Border Radius:** `4px`

#### Circular Progress
- **Stroke Color:** `#0D7377` (Primary)
- **Background Stroke:** `#E0E5E7`
- **Stroke Width:** `8px`
- **Size:** `64px` (standard)

---

## Shadows & Effects

### Neumorphic Shadows

The soft neumorphic design uses dual shadows to create depth:

#### Standard Neumorphic Shadow
```css
box-shadow: 
  8px 8px 16px rgba(0, 0, 0, 0.1),
  -8px -8px 16px rgba(255, 255, 255, 0.9);
```

#### Inset Neumorphic Shadow
```css
box-shadow: 
  inset 8px 8px 16px rgba(0, 0, 0, 0.1),
  inset -8px -8px 16px rgba(255, 255, 255, 0.9);
```

#### Elevated Shadow (for modals, dropdowns)
```css
box-shadow: 
  12px 12px 24px rgba(0, 0, 0, 0.15),
  -12px -12px 24px rgba(255, 255, 255, 0.95);
```

### Shadow Usage

- **Standard:** Cards, buttons, input fields
- **Inset:** Pressed buttons, active form fields
- **Elevated:** Modals, dropdowns, tooltips, popovers

### Border Radius

- **Small:** `8px` - Small elements, badges
- **Medium:** `12px` - Buttons, inputs (alternative)
- **Large:** `16px` - Cards, buttons, inputs (standard)
- **Extra Large:** `24px` - Hero sections, large cards

---

## Animations

### Animation Principles

- **Purposeful:** Every animation should have a reason
- **Smooth:** Use easing functions for natural motion
- **Fast:** Keep durations short (200-400ms)
- **Consistent:** Use the same timing across similar interactions

### Motion Library (Framer Motion)

We use `motion` (formerly Framer Motion) for all animations. Always import from `motion/react`.

### Common Animations

#### Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
```

#### Slide Up
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
```

#### Scale on Hover
```tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
```

#### Stagger Children
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
```

### Easing Functions

- **Ease Out:** `cubic-bezier(0.4, 0, 0.2, 1)` - Default for most animations
- **Ease In Out:** `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth transitions
- **Spring:** Use for bouncy, playful interactions

### Animation Timing

| Duration | Usage |
|----------|-------|
| `150ms` | Micro-interactions, hover states |
| `200ms` | Button presses, toggles |
| `300ms` | Fades, slides |
| `400ms` | Page transitions, complex animations |

### Reduced Motion

Always respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility

### Color Contrast

All text must meet WCAG AA standards:
- **Normal Text:** Minimum 4.5:1 contrast ratio
- **Large Text (18px+):** Minimum 3:1 contrast ratio
- **Interactive Elements:** Minimum 3:1 contrast ratio

### Focus States

- All interactive elements must have visible focus indicators
- Use `outline: 2px solid #0D7377` with `outline-offset: 2px`
- Never remove focus styles without providing alternatives

### Touch Targets

- Minimum size: `44px × 44px` (iOS HIG recommendation)
- Spacing between targets: Minimum `8px`

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Skip links for main content
- Escape key closes modals/dropdowns

### Screen Readers

- Use semantic HTML elements
- Provide ARIA labels where needed
- Ensure form inputs have associated labels
- Use `aria-live` regions for dynamic content

### Alt Text

- All images must have descriptive alt text
- Decorative images should have empty alt text: `alt=""`

---

## Implementation Guidelines

### CSS Architecture

1. **CSS Variables:** Use CSS custom properties for theme values
2. **Tailwind CSS:** Primary styling framework
3. **Component Styles:** Scoped component styles when needed
4. **Utility Classes:** Prefer Tailwind utilities over custom CSS

### Component Structure

```tsx
// Component example structure
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const ComponentName = ({ className, ...props }) => {
  return (
    <motion.div
      className={cn("base-classes", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {/* Component content */}
    </motion.div>
  );
};
```

### Naming Conventions

- **Components:** PascalCase (e.g., `Button`, `Card`)
- **CSS Classes:** kebab-case (e.g., `button-primary`, `card-elevated`)
- **CSS Variables:** kebab-case with `--` prefix (e.g., `--color-primary`)

### File Organization

```
src/
├── components/
│   ├── ui/          # Base UI components
│   └── [feature]/   # Feature-specific components
├── styles/
│   └── globals.css  # Global styles, CSS variables
└── lib/
    └── utils.ts     # Utility functions (cn, etc.)
```

### Theme Implementation

Use the theme context for dynamic theming:

```tsx
import { useTheme } from '@/contexts/ThemeContext';

const { colors, design } = useTheme();
```

---

## Code Examples

### Button Component

```tsx
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  className,
  children,
  ...props 
}: ButtonProps) => {
  const baseClasses = "font-medium rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#0D7377] text-white shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.95)]",
    secondary: "bg-[#7FB069] text-white shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.9)]",
    outline: "border-2 border-[#0D7377] text-[#0D7377] bg-transparent",
    ghost: "text-[#0D7377] bg-transparent hover:bg-[#F0F4F5]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
```

### Card Component

```tsx
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export const Card = ({ 
  elevated = false,
  className,
  children,
  ...props 
}: CardProps) => {
  const shadowClass = elevated
    ? "shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.95)]"
    : "shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.9)]";

  return (
    <motion.div
      className={cn(
        "bg-[#F0F4F5] rounded-2xl p-6",
        shadowClass,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
```

### Input Component

```tsx
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <motion.input
      className={cn(
        "w-full px-4 py-3 rounded-2xl",
        "bg-[#FAFBFC] border-2 border-[#E0E5E7]",
        "text-base text-[#1A2B3C]",
        "focus:outline-none focus:border-[#0D7377] focus:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(255,255,255,0.9)]",
        "transition-all duration-200",
        className
      )}
      whileFocus={{ scale: 1.01 }}
      {...props}
    />
  );
};
```

### Progress Bar Component

```tsx
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // 0-100
  color?: 'primary' | 'accent';
  className?: string;
}

export const ProgressBar = ({ 
  value, 
  color = 'primary',
  className 
}: ProgressBarProps) => {
  const colorClass = color === 'primary' ? 'bg-[#0D7377]' : 'bg-[#E8AA42]';
  
  return (
    <div className={cn("w-full h-2 bg-[#E0E5E7] rounded-full overflow-hidden", className)}>
      <motion.div
        className={cn("h-full rounded-full", colorClass)}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};
```

---

## Design Tokens

### Complete Token List

```typescript
export const designTokens = {
  colors: {
    primary: '#0D7377',
    secondary: '#7FB069',
    accent: '#E8AA42',
    background: '#FAFBFC',
    surface: '#F0F4F5',
    textPrimary: '#1A2B3C',
    textSecondary: '#5A6978',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  typography: {
    fontFamily: "'Outfit', system-ui, sans-serif",
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    fontSize: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.5rem',
      h4: '1.25rem',
      bodyLarge: '1.125rem',
      body: '1rem',
      bodySmall: '0.875rem',
      caption: '0.75rem',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  shadows: {
    neumorphic: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.9)',
    neumorphicInset: 'inset 8px 8px 16px rgba(0, 0, 0, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
    elevated: '12px 12px 24px rgba(0, 0, 0, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.95)',
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '400ms',
    },
    easing: {
      easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};
```

---

## Resources

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap" rel="stylesheet">
```

### Tools & Libraries

- **Styling:** Tailwind CSS 3.4+
- **Animations:** Motion (Framer Motion) 12+
- **Icons:** Use consistent icon library (e.g., Lucide React, Heroicons)
- **Package Manager:** pnpm

---

## Version History

- **v1.0** (2024) - Initial design system with Healthcare palette + Soft Neumorphic style

---

## Questions & Support

For questions about this design system or to request additions/modifications, please contact the design team or create an issue in the project repository.
