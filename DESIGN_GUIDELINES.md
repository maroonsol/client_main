# MaroonSol Website Design Guidelines

## Overview
This document outlines the design principles, color scheme, typography, and component guidelines for the MaroonSol website. These guidelines ensure consistency across all pages and future development.

## Design Philosophy
- **Simple & Royal**: Clean, minimalist design with elegant touches
- **Techy**: Modern, professional appearance suitable for a technology company
- **Dark Mode**: Primary dark theme with light accents and proper contrast
- **Responsive**: Mobile-first approach ensuring compatibility across all devices

## Color Palette

### Primary Colors (Dark Mode)
- **Background**: Dark theme background using CSS variables
- **Foreground**: Light text color for primary content
- **Primary**: Light accent color for buttons and highlights
- **Muted**: Subtle colors for secondary content and borders

### CSS Variables (Dark Mode)
- **Background**: `oklch(0.145 0 0)` - Main background color
- **Foreground**: `oklch(0.985 0 0)` - Primary text color
- **Card**: `oklch(0.205 0 0)` - Card background
- **Primary**: `oklch(0.922 0 0)` - Primary accent color
- **Muted**: `oklch(0.269 0 0)` - Muted backgrounds
- **Border**: `oklch(1 0 0 / 10%)` - Border colors
- **Input**: `oklch(1 0 0 / 15%)` - Input field backgrounds

### Accent Colors
- **Green**: `#10B981` - Success states, checkmarks
- **Blue**: `#3B82F6` - Links and interactive elements
- **Red**: `#EF4444` - Error states and warnings
- **Yellow**: `#F59E0B` - Star ratings and highlights

## Typography

### Font Family
- **Primary**: Geist Sans (modern, clean sans-serif)
- **Monospace**: Geist Mono (for code and technical content)

### Font Sizes
- **Hero Headings**: `text-4xl md:text-6xl` (36px - 60px)
- **Page Headings**: `text-3xl md:text-4xl` (30px - 36px)
- **Section Headings**: `text-2xl md:text-3xl` (24px - 30px)
- **Card Titles**: `text-xl md:text-2xl` (20px - 24px)
- **Body Text**: `text-base` (16px)
- **Small Text**: `text-sm` (14px)
- **Caption Text**: `text-xs` (12px)

### Font Weights
- **Bold**: `font-bold` (700) - Headings and emphasis
- **Semibold**: `font-semibold` (600) - Subheadings
- **Medium**: `font-medium` (500) - Important text
- **Normal**: `font-normal` (400) - Body text

## Layout Principles

### Container Width
- **Maximum Width**: `max-w-7xl` (1280px)
- **Responsive Padding**: `px-4 sm:px-6 lg:px-8`
- **Section Spacing**: `py-16 md:py-20` (64px - 80px)

### Grid System
- **Mobile**: Single column layout
- **Tablet**: 2-column grid where appropriate
- **Desktop**: 3-4 column grid for cards and content

### Spacing
- **Section Spacing**: `py-16 md:py-20`
- **Card Spacing**: `gap-6 md:gap-8`
- **Element Spacing**: `space-y-4 md:space-y-6`

## Component Guidelines

### Buttons
- **Primary**: Primary color background with primary-foreground text
- **Secondary**: Background color with primary border
- **Hover States**: Opacity changes or color inversions
- **Sizes**: `sm`, `default`, `lg` for different contexts

### Cards
- **Background**: Card color with subtle border
- **Border**: `border-border`
- **Hover Effect**: `hover:shadow-xl` with `hover:border-primary/50`
- **Padding**: `p-6` for content, `p-8` for larger cards

### Forms
- **Input Fields**: Background color with border
- **Focus States**: Primary border and ring
- **Labels**: Medium weight, foreground color
- **Placeholders**: Muted-foreground color

### Images
- **Client Logos**: Grayscale filter with color on hover
- **Icons**: Consistent sizing and spacing
- **Responsive**: Proper aspect ratios and sizing

## Hover Effects

### Universal Hover Effects
- **Cards**: Shadow increase and border color change
- **Buttons**: Background color inversion or darkening
- **Links**: Color change with underline animation
- **Images**: Grayscale to color transition

### Transition Properties
- **Duration**: `duration-300` (300ms)
- **Easing**: Default Tailwind easing
- **Properties**: `transition-all` for comprehensive effects

## Responsive Design

### Breakpoints
- **Mobile**: Default (0px+)
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+)
- **Large**: `lg:` (1024px+)
- **Extra Large**: `xl:` (1280px+)

### Mobile-First Approach
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Readable text sizes on all devices

## Icon Guidelines

### Icon Library
- **Primary**: Lucide React icons
- **Sizing**: Consistent sizing (w-4 h-4, w-5 h-5, w-6 h-6, w-8 h-8)
- **Colors**: Match text color or use accent colors
- **Spacing**: Proper spacing with text (mr-2, ml-2)

### Icon Usage
- **Navigation**: Simple, recognizable icons
- **Services**: Descriptive icons for each service
- **Features**: Checkmarks, arrows, and relevant symbols
- **Contact**: Phone, email, location icons

## Animation Guidelines

### Subtle Animations
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Subtle loading indicators
- **Page Transitions**: Smooth, non-distracting transitions

### Performance
- **Hardware Acceleration**: Use transform and opacity for animations
- **Reduced Motion**: Respect user preferences for reduced motion
- **Optimization**: Keep animations lightweight and purposeful

## Content Guidelines

### Tone of Voice
- **Professional**: Clear, concise, and business-appropriate
- **Friendly**: Approachable and helpful
- **Technical**: Accurate and informative for technical content
- **Confident**: Assured and trustworthy

### Content Structure
- **Headlines**: Clear, benefit-focused headlines
- **Subheadings**: Descriptive and scannable
- **Body Text**: Readable paragraphs with proper spacing
- **Call-to-Actions**: Clear and action-oriented

## Accessibility

### Color Contrast
- **Text**: Minimum 4.5:1 contrast ratio
- **Interactive Elements**: Clear focus states
- **Color Independence**: Information not conveyed by color alone

### Navigation
- **Keyboard Accessible**: All interactive elements accessible via keyboard
- **Screen Reader Friendly**: Proper semantic HTML and ARIA labels
- **Focus Management**: Clear focus indicators

## File Organization

### Component Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib/
│   └── data.ts
└── app/
    ├── page.tsx
    ├── about/
    ├── services/
    ├── clients/
    └── contact/
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Header.tsx`)
- **Files**: kebab-case for pages (e.g., `about/page.tsx`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

## Future Development Guidelines

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` with proper metadata
3. Update navigation in `data.ts`
4. Follow existing design patterns
5. Ensure responsive design

### Adding New Components
1. Create component in appropriate directory
2. Use shadcn/ui components when possible
3. Follow established styling patterns
4. Include proper TypeScript types
5. Add hover effects and transitions

### Content Updates
1. Update `data.ts` for company information
2. Maintain consistent tone and style
3. Update images in `public/` directory
4. Test responsive design
5. Verify accessibility

### Design System Updates
1. Update this document
2. Maintain backward compatibility
3. Test across all pages
4. Update component library if needed
5. Document changes clearly

## Quality Assurance

### Testing Checklist
- [ ] Responsive design on all devices
- [ ] Hover effects working properly
- [ ] Form validation and submission
- [ ] Image optimization and loading
- [ ] Accessibility compliance
- [ ] Performance optimization
- [ ] Cross-browser compatibility

### Performance Standards
- **Page Load**: Under 3 seconds
- **Image Optimization**: WebP format when possible
- **Code Splitting**: Lazy loading for non-critical components
- **SEO**: Proper meta tags and structured data

## Conclusion

These guidelines ensure consistency, maintainability, and scalability of the MaroonSol website. When making changes or additions, always refer to these guidelines to maintain the established design system and user experience.

For questions or clarifications about these guidelines, please refer to the development team or update this document as needed.
