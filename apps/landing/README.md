# @ear-hub/landing

Landing page for EAR Hub - the entry point to all three applications (Oracle Astrology, Conflict Resolver, MenuAI).

## Technology Stack

- **Astro** - Static site generator for ultra-fast performance
- **React** - Interactive components via Astro islands
- **TailwindCSS 4** - Styling via @ear-hub/design-system
- **TypeScript** - Strict mode enabled

## Development

```bash
# Install dependencies (from monorepo root)
pnpm install

# Start dev server
cd apps/landing
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type check
pnpm typecheck
```

## Project Structure

```
src/
├── pages/
│   └── index.astro        # Main landing page
├── components/
│   ├── Hero.astro         # Hero section
│   ├── AppCard.astro      # App showcase card
│   └── Footer.astro       # Footer
├── layouts/
│   └── Layout.astro       # Base layout with SEO
└── styles/
    └── global.css         # Imports @ear-hub/design-system
```

## Deployment

This app is deployed independently on Vercel.

**Vercel Configuration:**
- Root Directory: `apps/landing`
- Build Command: `cd ../.. && pnpm turbo run build --filter=@ear-hub/landing`
- Output Directory: `dist`
- Install Command: `cd ../.. && pnpm install --frozen-lockfile`

**Domain:** `earhub.com` or `landing.earhub.com`

## Features

- Zero JavaScript by default (Astro SSG)
- Responsive design (mobile-first)
- Accessible (WCAG 2.1 AA compliant)
- SEO optimized (meta tags, Open Graph, Twitter Cards)
- Fast load times (<1s FCP target)
- Premium aesthetic (30+ years audience)

## Design System

Uses `@ear-hub/design-system` for consistent styling across all EAR Hub applications:
- TailwindCSS 4 with custom theme
- Design tokens (colors, typography, spacing)
- Font families: Inter (body), Space Grotesk (display), JetBrains Mono (code)

## License

MIT
