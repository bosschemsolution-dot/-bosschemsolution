# Deployment Guide - Boss Chem Solution Website

## ?? Quick Start

### Development
```bash
cd boss-coolant
npm install
npm run dev
```
Visit: http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

## ?? Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

**Environment Variables:**
- No environment variables needed for basic deployment
- Add EmailJS credentials if needed

### 2. Netlify

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Build command: `npm run build`
5. Publish directory: `.next`

### 3. Self-Hosted (VPS/Dedicated Server)

**Requirements:**
- Node.js 18+ installed
- PM2 for process management

**Steps:**
```bash
# Clone repository
git clone <your-repo-url>
cd boss-coolant

# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "boss-coolant" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name bosschemsolution.com www.bosschemsolution.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**Build and Run:**
```bash
docker build -t boss-coolant .
docker run -p 3000:3000 boss-coolant
```

## ?? Configuration

### Update Domain
Update the domain in:
- `app/layout.tsx` - metadataBase
- `app/sitemap.ts` - baseUrl
- `app/robots.ts` - sitemap URL

### EmailJS Setup
1. Create account at [emailjs.com](https://emailjs.com)
2. Create email service
3. Create email template
4. Update credentials in `sections/ContactSection.tsx`:
   - Service ID
   - Template ID
   - Public Key

### Analytics (Optional)
Add Google Analytics or other analytics in `app/layout.tsx`

## ?? DNS Configuration

Point your domain to deployment:

**For Vercel/Netlify:**
- Add CNAME record: `www` ? `your-app.vercel.app`
- Add A record: `@` ? Provided IP

**For Self-Hosted:**
- Add A record: `@` ? Your server IP
- Add A record: `www` ? Your server IP

## ? Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test all product links
- [ ] Verify images load properly
- [ ] Check SEO meta tags
- [ ] Test sitemap.xml
- [ ] Verify robots.txt
- [ ] Check page load speed
- [ ] Test on different browsers

## ?? SEO Setup

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap: `https://bosschemsolution.com/sitemap.xml`

### Google Business Profile
1. Create/claim business listing
2. Add business information
3. Add photos
4. Verify business

## ?? Performance Monitoring

### Tools to Use:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse (Chrome DevTools)

### Target Metrics:
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1

## ?? Security

### SSL Certificate
- Vercel/Netlify: Automatic
- Self-hosted: Use Let's Encrypt (Certbot)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d bosschemsolution.com -d www.bosschemsolution.com
```

## ?? Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images Not Loading
- Check image paths in `/public/images/`
- Verify Next.js Image component usage
- Check next.config.ts settings

### Contact Form Not Working
- Verify EmailJS credentials
- Check browser console for errors
- Test EmailJS service status

## ?? Support

For deployment issues:
- Check Next.js documentation
- Review deployment platform docs
- Contact hosting support

## ?? Updates

To update the site:
```bash
git pull origin main
npm install
npm run build
pm2 restart boss-coolant  # If using PM2
```

## ?? Notes

- Always test in staging before production
- Keep dependencies updated
- Monitor error logs
- Backup regularly
- Use version control (Git)
