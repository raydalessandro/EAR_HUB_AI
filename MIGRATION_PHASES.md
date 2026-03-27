# EAR Hub - Migration Phases

## ✅ Phase 0: Monorepo Setup (COMPLETE)
- Turborepo + pnpm workspaces
- TypeScript strict mode
- Shared packages: design-system, ui, utils
- CI/CD with GitHub Actions

## ✅ Phase 1: Design System (COMPLETE)
- Tailwind 3 configuration with CSS variables
- Typography tokens (Inter, Space Grotesk, JetBrains Mono)
- Color system with light/dark themes
- Spacing and radius scales
- Global styles and reset

## ✅ Phase 2: UI Component Library (COMPLETE)
- 8 core components migrated from Conflict Resolver
- Full TypeScript + Vitest test coverage (60 passing tests)
- Radix UI primitives + CVA variants
- Accessible, composable, documented

**Components:**
- Button (primary, secondary, ghost, destructive variants)
- Card (Header, Title, Content, Footer)
- Input + Label + TextArea
- Alert (default, destructive variants)
- Badge (default, secondary, outline variants)
- Spinner (sm, md, lg sizes)

## ✅ Phase 2.5: Landing Page (COMPLETE)
- Astro SSG with React islands
- Liquid glass design with neural background
- Interactive animations (particle burst, SVG effects)
- Mouse-tracked glare, sliding pill navigation
- CSS variables integration fixed (PostCSS import order)
- Deployed on Vercel

**Fix applied:** Moved `@import '@ear-hub/design-system/globals.css'` before `@tailwind` directives to ensure CSS variables load correctly.

---

## 🔄 Phase 3: Migrate Oracle Astrology App

**Current state:**
- Located: `C:/Users/aless/Desktop/MAIN/DEVELOPING/da CATALOGARE/oracle-astrology`
- Stack: React + Vite
- Dependencies: `astronomy-engine` (ephemeris calculations)
- Components: BirthDataForm, OracleReading, PeriodSelector
- Utils: ephemeris.js, interpreter.js

**Architecture decision needed:**
- **Option A (SSG):** Astro with React islands, client-side calculations
- **Option B (SSR):** Astro with API routes, server-side astronomy-engine
- **Option C (SPA):** Keep Vite, integrate with monorepo

**Recommendation:** Option B (SSR)
- `astronomy-engine` is computationally intensive → better on server
- Enables API caching for repeated calculations
- Progressive enhancement: works without JS for basic info

**Migration steps:**

1. **Create app structure**
   ```bash
   mkdir -p apps/oracle/src/{pages,components,layouts,api,utils}
   ```

2. **Setup Astro + React**
   ```json
   // apps/oracle/package.json
   {
     "name": "@ear-hub/oracle",
     "dependencies": {
       "astro": "^5.1.7",
       "@astrojs/react": "^4.1.2",
       "@astrojs/tailwind": "^6.1.1",
       "react": "^18.3.1",
       "react-dom": "^18.3.1",
       "astronomy-engine": "^2.1.19",
       "@ear-hub/ui": "workspace:*",
       "@ear-hub/design-system": "workspace:*"
     }
   }
   ```

3. **Migrate components to use @ear-hub/ui**
   - Replace existing Button/Input/Card with library components
   - Keep domain-specific components (OracleReading, PeriodSelector)
   - Add TypeScript types for astrology data

4. **Create API routes**
   ```typescript
   // apps/oracle/src/pages/api/calculate.ts
   import { Astronomy } from 'astronomy-engine';

   export async function POST({ request }) {
     const { birthDate, birthTime, location } = await request.json();
     // Calculate ephemeris, transits, aspects
     return new Response(JSON.stringify(results));
   }
   ```

5. **Design integration**
   - Liquid glass cards for readings
   - Zodiac wheel visualization
   - Animated planet positions
   - Dark theme with cosmic gradients

6. **Testing**
   - Unit tests for ephemeris calculations
   - Component tests with Vitest + Testing Library
   - E2E tests for full reading flow

---

## 🔄 Phase 4: Migrate Conflict Resolver App

**Current state:**
- Existing React app with UI components (already extracted to Phase 2)
- Domain logic: conflict analysis, archetype mapping, resolution strategies
- Likely has state management (Context/Redux)

**Migration steps:**

1. **Audit remaining components**
   - Identify components NOT yet in @ear-hub/ui
   - Extract reusable ones, keep domain-specific ones

2. **Create Astro app structure**
   ```bash
   mkdir -p apps/resolver/src/{pages,components,layouts,api}
   ```

3. **State management decision**
   - If simple: React Context + hooks
   - If complex: Consider Zustand (lighter than Redux)
   - Server state: TanStack Query for API calls

4. **API architecture**
   - `/api/analyze-conflict` — AI-powered analysis
   - `/api/suggest-strategies` — Resolution recommendations
   - Consider rate limiting, caching

5. **Design considerations**
   - Balance metaphor (scales, equilibrium)
   - Dual-perspective layout (conflict sides)
   - Progress visualization for resolution steps

---

## 🔄 Phase 5: Migrate MenuAI App

**Current state:**
- Unknown (needs discovery)
- Likely: recipe generation, meal planning, nutrition tracking

**Discovery needed:**
1. Find app location on disk
2. Audit dependencies (OpenAI? Anthropic? Local models?)
3. Check data models (recipes, ingredients, users)
4. Identify existing UI components

**Potential architecture:**
- Astro SSR for authenticated sessions
- PostgreSQL/SQLite for user data
- API routes for AI recipe generation
- Real-time updates for cooking timers

---

## 🔄 Phase 6: Unified Navigation & Integration

**Goal:** Seamless navigation between all 3 apps from landing page

**Implementation:**

1. **Shared header component**
   ```tsx
   // packages/ui/src/components/AppHeader.tsx
   export function AppHeader({ currentApp }: { currentApp: 'oracle' | 'resolver' | 'menu' }) {
     return (
       <header className="liquid-glass">
         <nav>
           <Link href="https://oracle.earhub.com" active={currentApp === 'oracle'}>Oracle</Link>
           <Link href="https://resolver.earhub.com" active={currentApp === 'resolver'}>Resolver</Link>
           <Link href="https://menu.earhub.com" active={currentApp === 'menu'}>MenuAI</Link>
         </nav>
       </header>
     );
   }
   ```

2. **Shared footer with cross-links**

3. **Unified auth system (if needed)**
   - Shared session across subdomains
   - Consider Clerk or Auth.js

4. **Analytics & monitoring**
   - Vercel Analytics for all apps
   - Error tracking (Sentry)
   - Performance monitoring

5. **SEO & social sharing**
   - Consistent og:image design
   - Sitemap generation
   - robots.txt for all apps

---

## Technical Debt & Improvements

**Before Phase 3:**
- [ ] Add logo to landing page header
- [ ] Refine header responsiveness
- [ ] Add footer to landing page
- [ ] Create og:image.svg (social preview)

**During migration:**
- [ ] Shared TypeScript config inheritance
- [ ] Vitest workspace configuration
- [ ] Storybook for component documentation
- [ ] E2E testing setup (Playwright)

**Post-migration:**
- [ ] Performance budgets (Core Web Vitals)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Internationalization (i18n) support
- [ ] Dark mode toggle persistence

---

## Coordination Lessons Learned

**What worked (previous days):**
1. Detailed specifications BEFORE implementation
2. Agent parallelization for independent tasks
3. Clear checkpoint approval between phases

**What to improve (today's session):**
1. Separate diagnostic phase from implementation
2. More specific agent instructions for coordination
3. Explicit "spec complete, proceed?" checkpoints
4. Use TodoWrite for multi-step tracking

**Pattern for next session:**
```
1. User describes goal
2. Claude proposes detailed spec with agent coordination plan
3. User approves spec
4. Claude launches agents in parallel with explicit instructions
5. Checkpoint after each major phase
6. Push only when user confirms quality
```

---

## Next Steps

**When resuming Phase 3:**
1. Choose architecture (A/B/C) for Oracle app
2. Create detailed spec with file structure
3. Plan agent coordination (explore, migrate components, test)
4. Checkpoint approval before each major step
5. Test locally before pushing to Vercel

**Estimated effort:**
- Phase 3 (Oracle): 2-3 hours (complex astrology logic)
- Phase 4 (Resolver): 1-2 hours (UI already extracted)
- Phase 5 (MenuAI): 2-3 hours (depends on discovery)
- Phase 6 (Integration): 1 hour (header/footer/nav)

**Total remaining:** ~7-9 hours of focused work
