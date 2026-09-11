# Saad Rehman — Personal Portfolio

A production-ready personal portfolio website for Saad Rehman — AI & ML Engineer, Full Stack Developer, and Automation Specialist.

**Live demo:** https://saadrehman.dev

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | Resend API (Nodemailer fallback) |
| Theme | next-themes (dark/light) |
| Carousel | Embla Carousel |
| Counters | react-countup |
| Deployment | Vercel |

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx                # Homepage (all sections)
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots.txt rules
│   ├── globals.css             # Global styles, CSS variables
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API (Resend / Nodemailer)
│   └── work/
│       └── [slug]/
│           └── page.tsx        # Individual case study pages
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky glass nav + mobile drawer
│   │   └── Footer.tsx          # Footer with links + socials
│   ├── sections/
│   │   ├── Hero.tsx            # Hero + animated grid + tech badges
│   │   ├── Stats.tsx           # Animated counter cards
│   │   ├── Services.tsx        # Service cards with hover effects
│   │   ├── Process.tsx         # 3-step process timeline
│   │   ├── Work.tsx            # Case studies with filter tabs
│   │   ├── TechStack.tsx       # Tech logos by category
│   │   ├── About.tsx           # Bio + avatar + socials + CV download
│   │   ├── Testimonials.tsx    # Auto-scroll testimonials carousel
│   │   ├── Audience.tsx        # Platform cards (LinkedIn/YT/Newsletter)
│   │   └── Contact.tsx         # Contact form + Calendly CTA
│   ├── providers/
│   │   └── theme-provider.tsx  # next-themes wrapper
│   └── ui/
│       ├── toast.tsx           # Toast primitives (Radix)
│       └── toaster.tsx         # Toast renderer
│
├── data/
│   ├── projects.ts             # Case study data + TypeScript interfaces
│   ├── services.ts             # Services data
│   ├── testimonials.ts         # Testimonials data
│   └── techStack.ts            # Tech stack + categories
│
├── hooks/
│   └── use-toast.ts            # Toast state hook
│
├── lib/
│   ├── utils.ts                # cn() helper (clsx + tailwind-merge)
│   └── validations.ts          # Zod schemas for contact form
│
├── public/
│   ├── favicon.ico
│   └── saad-rehman-cv.pdf      # Add your actual CV here
│
├── .env.local.example          # Environment variable template
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/saadrehman/portfolio.git
cd portfolio
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in:

- **`RESEND_API_KEY`** — Get a free key at [resend.com](https://resend.com) (3,000 emails/month free)
- **`TO_EMAIL`** — Your email where form submissions should arrive

### 3. Add your CV

Place your CV PDF at `public/saad-rehman-cv.pdf`.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customization Guide

### Update personal info

| What to change | File |
|----------------|------|
| Bio, name, location | `components/sections/About.tsx` |
| Social links | `components/sections/About.tsx`, `components/layout/Footer.tsx` |
| Calendly link | Search `calendly.com/saadrehman` and replace throughout |
| Email address | `components/sections/Contact.tsx`, `.env.local` |
| Hero headline | `components/sections/Hero.tsx` |

### Add/edit projects

Edit `data/projects.ts`. Each project has:

```typescript
{
  slug: string;           // URL slug: /work/your-slug
  title: string;
  category: "ai-agents" | "automation" | "full-stack" | "saas";
  categoryLabel: string;
  result: string;         // e.g. "Reduced costs by 60%"
  description: string;   // 1-2 sentence summary
  problem: string;        // Full paragraph
  solution: string;       // Full paragraph
  outcome: string;        // Full paragraph with metrics
  techStack: string[];
  gradient: string;       // Tailwind gradient classes
}
```

### Update testimonials

Edit `data/testimonials.ts`. Replace placeholder copy with real quotes once collected.

### Add your headshot

In `components/sections/About.tsx`, replace the `SR` monogram placeholder with:

```tsx
import Image from "next/image";

// Replace the <div> monogram with:
<Image
  src="/images/saad-headshot.jpg"
  alt="Saad Rehman"
  fill
  className="object-cover"
  priority
/>
```

Place your photo at `public/images/saad-headshot.jpg`.

### Update OG image

Replace `/public/og-image.jpg` with a 1200×630px branded image. Design it at [og-image.vercel.app](https://og-image.vercel.app) or use Figma.

---

## Deployment (Vercel)

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/saadrehman/portfolio)

### Manual deploy

```bash
npm run build    # Verify no build errors
npx vercel       # Follow prompts
```

**Set environment variables in Vercel dashboard:**
- `RESEND_API_KEY`
- `TO_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

---

## Email Setup (Resend — Recommended)

1. Create account at [resend.com](https://resend.com)
2. Add and verify your domain (e.g. `saadrehman.dev`)
3. Create an API key
4. Update `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   TO_EMAIL=hello@saadrehman.dev
   ```
5. Update the `from` address in `app/api/contact/route.ts` to use your verified domain:
   ```typescript
   from: "Portfolio Contact <hello@saadrehman.dev>",
   ```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 100 |
| SEO | 100 |

Run `npx lighthouse https://saadrehman.dev --view` to audit.

---

## Scripts

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## License

MIT — feel free to adapt for your own portfolio.

---

Built with ❤️ using Next.js, Tailwind CSS & Framer Motion.
