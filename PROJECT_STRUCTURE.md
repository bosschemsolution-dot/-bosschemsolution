# Boss Chem Solution - Project Structure

## 📁 Folder Structure

```
boss-coolant/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   │   ├── page.tsx
│   │   └── metadata.ts
│   ├── products/                 # Products listing
│   │   ├── page.tsx
│   │   └── metadata.ts
│   ├── product/[id]/            # Dynamic product details
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt
│
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Footer component
│   │
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx      # Hero banner
│   │   ├── ProductsSection.tsx  # Products showcase
│   │   ├── BenefitsSection.tsx  # Benefits grid
│   │   ├── TestimonialsSection.tsx # Customer reviews
│   │   └── ContactSection.tsx   # Contact form
│   │
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Button component
│       ├── Card.tsx             # Card components
│       ├── Container.tsx        # Container wrapper
│       ├── Badge.tsx            # Badge component
│       └── SectionTitle.tsx     # Section title component
│
├── lib/                         # Utility functions & data
│   ├── data/                    # Data files
│   │   ├── products.ts          # Product data & helpers
│   │   ├── benefits.ts          # Benefits data
│   │   └── testimonials.ts      # Testimonials data
│   │
│   └── utils/                   # Utility functions
│       └── cn.ts                # Class name utility
│
├── types/                       # TypeScript types
│   └── index.ts                 # All type definitions
│
├── config/                      # Configuration files
│   └── sectionContent.ts        # Section content config
│
├── public/                      # Static assets
│   ├── images/                  # All images
│   ├── favicon.png
│   ├── robots.txt
│   └── sitemap.xml
│
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies
├── README.md                    # Project documentation
├── DEPLOYMENT.md                # Deployment guide
└── PROJECT_STRUCTURE.md         # This file
```

## 🎯 Component Architecture

### Layout Components (`components/layout/`)
- **Header.tsx**: Navigation with mobile menu, logo, and links
- **Footer.tsx**: Footer with company info, links, and social media

### Section Components (`components/sections/`)
- **HeroSection.tsx**: Homepage hero with CTA buttons
- **ProductsSection.tsx**: Product showcase with Swiper carousels
- **BenefitsSection.tsx**: Benefits grid with icons
- **TestimonialsSection.tsx**: Customer testimonials carousel
- **ContactSection.tsx**: Contact form with EmailJS integration

### UI Components (`components/ui/`)
Reusable, composable components following atomic design:

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Card with Header, Content, Footer sub-components
- **Container**: Responsive container with size variants
- **Badge**: Status badges with color variants
- **SectionTitle**: Consistent section headers with badges

## 📊 Data Management

### Data Files (`lib/data/`)
Centralized data management for easy updates:

- **products.ts**: All product data with helper functions
  - `getProductById(id)`: Get single product
  - `getProductsByCategory(category)`: Filter by category

- **benefits.ts**: Benefits data array
- **testimonials.ts**: Customer testimonials array

### Types (`types/`)
TypeScript interfaces for type safety:
- Product, Testimonial, Stat, Achievement, Leader, Benefit, SectionContent

## 🎨 Styling System

### Tailwind CSS
- Custom animations in `globals.css`
- Utility-first approach
- Responsive breakpoints: mobile (320px), tablet (640px), desktop (1024px)

### Component Variants
Using `cn()` utility for dynamic class names:
```typescript
import { cn } from '@/lib/utils/cn';

<Button variant="primary" size="lg" />
```

## 🔧 Utilities

### Class Name Utility (`lib/utils/cn.ts`)
Combines `clsx` and `tailwind-merge` for optimal class handling:
```typescript
cn('base-class', condition && 'conditional-class', className)
```

## 📄 Pages

### Static Pages
- **Home (/)**: Hero, Products, Benefits, Testimonials, Contact
- **About (/about)**: Company story, stats, achievements, team
- **Products (/products)**: Product listing with search/filter

### Dynamic Pages
- **Product Details (/product/[id])**: Individual product information

## 🚀 Features

### SEO Optimization
- Metadata in each page
- Structured data (JSON-LD)
- Dynamic sitemap
- Robots.txt
- Open Graph tags
- Twitter Card tags

### Performance
- Next.js Image optimization
- Code splitting
- Lazy loading
- Font optimization

### Responsive Design
- Mobile-first approach
- Breakpoint system
- Touch-friendly UI

## 🔄 Data Flow

```
Data (lib/data/) → Types (types/) → Components (components/) → Pages (app/)
```

## 📝 Naming Conventions

### Files
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Utilities: camelCase (e.g., `cn.ts`)
- Data: camelCase (e.g., `products.ts`)

### Components
- Layout: `<Header />`, `<Footer />`
- Sections: `<HeroSection />`, `<ProductsSection />`
- UI: `<Button />`, `<Card />`

### Functions
- camelCase: `getProductById()`, `cn()`

## 🎯 Best Practices

### Component Design
1. Single Responsibility Principle
2. Reusable and composable
3. Props with TypeScript interfaces
4. Default props when appropriate

### File Organization
1. Group by feature/type
2. Co-locate related files
3. Clear naming conventions
4. Separate concerns

### Code Quality
1. TypeScript for type safety
2. ESLint for code quality
3. Consistent formatting
4. Meaningful variable names

## 🔌 Integration Points

### EmailJS (Contact Form)
- Service ID, Template ID, Public Key in `ContactSection.tsx`

### Swiper (Carousels)
- Product carousels in `ProductsSection.tsx`
- Testimonials carousel in `TestimonialsSection.tsx`

### Font Awesome (Icons)
- Loaded via CDN in `layout.tsx`

## 📦 Dependencies

### Core
- Next.js 16
- React 19
- TypeScript 5

### UI
- Tailwind CSS 4
- clsx
- tailwind-merge

### Features
- Swiper.js (carousels)
- EmailJS (contact form)
- Lucide React (icons)

## 🔄 Update Workflow

### Adding New Product
1. Add to `lib/data/products.ts`
2. Add image to `public/images/`
3. Product automatically appears on site

### Adding New Section
1. Create component in `components/sections/`
2. Import in page
3. Add data to `lib/data/` if needed

### Styling Updates
1. Update `globals.css` for global styles
2. Use Tailwind classes for component styles
3. Use `cn()` for dynamic classes

## 🎨 Design System

### Colors
- Primary: Blue (600-800)
- Secondary: Green (600-700)
- Accent: Cyan (600)
- Neutral: Gray (50-900)

### Typography
- Headings: Bold, responsive sizes
- Body: Regular, readable line-height
- Small: 0.875rem (14px)

### Spacing
- Section padding: py-10 md:py-16
- Container: px-4
- Gap: gap-4, gap-6, gap-8

### Shadows
- sm: Small elevation
- md: Medium elevation
- lg: Large elevation
- xl: Extra large elevation

This structure ensures scalability, maintainability, and developer experience.
