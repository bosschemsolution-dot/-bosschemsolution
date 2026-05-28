# Boss Chem Solution - Next.js Website

Premium engine coolant and radiator coolant manufacturer website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 16** with App Router for optimal performance
- **TypeScript** for type safety and better DX
- **Tailwind CSS 4** for modern, utility-first styling
- **Component-Based Architecture** - Reusable, scalable components
- **SEO Optimized** with metadata, structured data, and sitemaps
- **Responsive Design** - Mobile-first approach
- **Image Optimization** with Next.js Image component
- **Dynamic Routes** for product pages
- **Contact Form** with EmailJS integration
- **Swiper Carousels** for product showcases
- **Smooth Animations** and transitions
- **Type-Safe Data Management** with TypeScript interfaces

## 📁 Project Structure

```
boss-coolant/
├── app/                    # Next.js App Router pages
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, Products, etc.)
│   └── ui/                # Reusable UI components
├── lib/
│   ├── data/              # Centralized data (products, benefits, etc.)
│   └── utils/             # Utility functions
├── types/                 # TypeScript type definitions
├── config/                # Configuration files
└── public/                # Static assets
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed documentation.

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Pages

- **Home (/)** - Hero, products, benefits, testimonials, contact
- **Products (/products)** - All products with search and filter
- **Product Details (/product/[id])** - Individual product information
- **About (/about)** - Company information, team, achievements

## 🧩 Component System

### Layout Components
- `Header` - Navigation with mobile menu
- `Footer` - Company info and links

### Section Components
- `HeroSection` - Homepage hero banner
- `ProductsSection` - Product showcase with carousels
- `BenefitsSection` - Benefits grid
- `TestimonialsSection` - Customer reviews
- `ContactSection` - Contact form

### UI Components (Reusable)
- `Button` - Multiple variants and sizes
- `Card` - Card with sub-components
- `Container` - Responsive wrapper
- `Badge` - Status badges
- `SectionTitle` - Consistent section headers

## 📊 Data Management

All data is centralized in `lib/data/`:
- `products.ts` - Product data with helper functions
- `benefits.ts` - Benefits data
- `testimonials.ts` - Customer testimonials

Update data in one place, reflects everywhere!

## 🔧 Technologies

- **Framework**: Next.js 16
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Libraries**: Swiper.js, Lucide React
- **Form**: EmailJS
- **Icons**: Font Awesome
- **Utilities**: clsx, tailwind-merge

## 📧 Contact Form Setup

Update EmailJS credentials in `components/sections/ContactSection.tsx`:
```typescript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailData, "YOUR_PUBLIC_KEY")
```

## 🌐 SEO Features

- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Dynamic sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Canonical URLs
- Optimized images

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## 🎯 Performance Optimizations

- Image optimization with Next.js Image
- Code splitting with dynamic imports
- CSS optimization with Tailwind
- Font optimization
- Lazy loading for images
- Static page generation

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Deploy on Vercel
# 1. Go to vercel.com
# 2. Import repository
# 3. Deploy (auto-detected)
```

## 📝 Development Workflow

### Adding New Product
1. Add to `lib/data/products.ts`
2. Add image to `public/images/`
3. Product automatically appears

### Adding New Section
1. Create in `components/sections/`
2. Import in page
3. Add data to `lib/data/` if needed

### Styling
- Use Tailwind classes
- Use `cn()` utility for dynamic classes
- Update `globals.css` for global styles

## 🔍 Code Quality

- TypeScript for type safety
- ESLint for code quality
- Consistent file naming
- Component-based architecture
- Separation of concerns

## 📄 Documentation

- [README.md](./README.md) - This file
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed structure
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide

## 🤝 Contributing

1. Follow existing code structure
2. Use TypeScript types
3. Follow naming conventions
4. Test before committing

## 📞 Support

For issues or questions:
- Check documentation files
- Review Next.js docs
- Contact development team

## 📄 License

© 2025 Boss Chem Solution. All rights reserved.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
