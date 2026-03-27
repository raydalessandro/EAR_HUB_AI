# EAR Hub

Unified monorepo for EAR apps: Oracle Astrology, Conflict Resolver, and MenuAI.

## Architecture

- **Monorepo:** Turborepo + pnpm workspaces
- **Framework:** React 18.3.1 + TypeScript (strict mode)
- **Styling:** TailwindCSS 4 + CSS custom properties
- **Testing:** Vitest + Playwright
- **CI/CD:** GitHub Actions + Vercel

## Project Structure

```
ear-hub/
├── apps/
│   ├── oracle-astrology/   # Oracle Astrology app (Phase 3)
│   ├── conflict-resolver/  # Conflict Resolver app (Phase 4)
│   └── menu-ai/            # MenuAI app (Phase 5)
├── packages/
│   ├── ui/                 # Shared component library
│   ├── ai-provider/        # AI provider abstraction (Anthropic + DeepSeek)
│   ├── design-system/      # Theme tokens + Tailwind config
│   ├── utils/              # Shared utilities
│   ├── test-utils/         # Testing utilities
│   ├── tsconfig/           # TypeScript configs
│   └── eslint-config/      # ESLint configs
└── turbo.json              # Turborepo pipeline
```

## Setup

### Prerequisites

- Node.js 20+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Run dev servers for all apps (once apps are added)
pnpm dev

# Run tests
pnpm test

# Build all apps
pnpm build
```

### Environment Variables

Each app requires its own `.env.local`:

```bash
# apps/oracle-astrology/.env.local
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_APP_NAME=Oracle Astrology

# apps/conflict-resolver/.env.local
DEEPSEEK_API_KEY=sk-...
NEXT_PUBLIC_APP_NAME=Conflict Resolver

# apps/menu-ai/.env.local
DEEPSEEK_API_KEY=sk-...
NEXT_PUBLIC_APP_NAME=MenuAI
```

## Development

### Commands

- `pnpm dev` - Start all dev servers
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all packages
- `pnpm test` - Run all tests
- `pnpm typecheck` - Type-check all packages
- `pnpm format` - Format code with Prettier

### Adding Dependencies

```bash
# Add to specific app
pnpm --filter @ear-hub/oracle-astrology add <package>

# Add to workspace root (dev tools)
pnpm add -Dw <package>

# Add to specific package
pnpm --filter @ear-hub/ui add <package>
```

### Creating a New Package

1. Create `packages/<name>/` directory
2. Add `package.json` with `name: "@ear-hub/<name>"`
3. Add `tsconfig.json` extending `@ear-hub/tsconfig`
4. Add to workspace (`pnpm-workspace.yaml` auto-detects)

## Testing

### Unit Tests (Vitest)

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter @ear-hub/ui test

# Watch mode
pnpm test --watch

# Coverage
pnpm test --coverage
```

### E2E Tests (Playwright)

```bash
# Run e2e tests
pnpm test:e2e

# Run in UI mode
pnpm test:e2e --ui
```

## Deployment

Each app is deployed independently on Vercel:

- **Oracle Astrology:** `oracle.earhub.com`
- **Conflict Resolver:** `resolver.earhub.com`
- **MenuAI:** `menu.earhub.com`

### Vercel Configuration

For each app, configure in Vercel dashboard:

- **Root Directory:** `apps/<app-name>`
- **Build Command:** `cd ../.. && pnpm turbo run build --filter=@ear-hub/<app-name>`
- **Output Directory:** `apps/<app-name>/.next`
- **Install Command:** `pnpm install --frozen-lockfile`

## Current Status

**Phase 0 - Complete:**
- ✅ Monorepo structure (Turborepo + pnpm)
- ✅ TypeScript strict configs
- ✅ TailwindCSS 4 design system
- ✅ Testing infrastructure (Vitest + Playwright)
- ✅ ESLint + Prettier configs
- ✅ CI/CD pipeline (GitHub Actions)
- ✅ 7 shared packages scaffolded

**Next phases:**
- Phase 1: Landing page (Astro SSG)
- Phase 2: Shared UI components (migrate from Conflict Resolver)
- Phase 3-5: Migrate 3 apps incrementally
- Phase 6: Integration, unified navigation, polish

## License

MIT
