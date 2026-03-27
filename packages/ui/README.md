# @ear-hub/ui

Shared React component library for EAR Hub apps.

## Installation

This package is internal to the monorepo. Import components using:

```typescript
import { Button, Card, Input } from '@ear-hub/ui'
```

## Components

### Button
Multi-variant button component with size options.

**Variants:** `primary` (default), `secondary`, `outline`, `ghost`, `link`
**Sizes:** `default`, `sm`, `lg`, `icon`
**Features:** Supports `asChild` prop for polymorphism (renders as child element)

```tsx
<Button variant="primary" size="lg">Click me</Button>
<Button asChild><a href="/link">Link Button</a></Button>
```

### Card
Container component with semantic sub-components for structured content.

**Sub-components:** `CardHeader`, `CardTitle`, `CardContent`, `CardFooter`

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

### Input
Accessible text input with focus states and disabled support.

```tsx
<Input type="email" placeholder="Email" />
<Input disabled value="Disabled" />
```

### Label
Accessible form label using Radix UI primitives.

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" />
```

### TextArea
Multi-line text input with configurable resize behavior.

**Resize options:** `none`, `vertical`, `both`

```tsx
<TextArea rows={5} placeholder="Enter text..." />
<TextArea resize="vertical" />
```

### Alert
Alert component with variants for different message types.

**Variants:** `default`, `destructive`
**Sub-components:** `AlertTitle`, `AlertDescription`

```tsx
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

### Spinner
Loading indicator with size variants.

**Sizes:** `sm`, `md` (default), `lg`

```tsx
<Spinner size="lg" />
```

### Badge
Status badge with variant options.

**Variants:** `default`, `secondary`, `outline`, `destructive`

```tsx
<Badge variant="destructive">Error</Badge>
<Badge>Info</Badge>
```

### Separator
Horizontal or vertical divider using Radix UI.

**Orientations:** `horizontal` (default), `vertical`

```tsx
<Separator />
<Separator orientation="vertical" />
```

## Architecture

- **Built with Radix UI primitives** for accessibility (Label, Separator, Slot)
- **CVA (class-variance-authority)** for type-safe variants
- **TailwindCSS** via `@ear-hub/design-system` for styling
- **TypeScript strict mode** enforced
- **ForwardRef** on all components for proper ref handling
- **>80% test coverage** with Vitest

## Testing

Run tests:
```bash
pnpm test
```

Run tests in watch mode:
```bash
pnpm test:watch
```

Generate coverage report:
```bash
pnpm test:coverage
```

## Type Checking

```bash
pnpm typecheck
```

## Development

Components follow this pattern:
- Use CVA for variant management
- Use Radix UI primitives where applicable
- ForwardRef for accessibility
- Export types alongside components
- Comprehensive unit tests with >80% coverage

## Adding New Components

1. Create component directory: `src/components/ComponentName/`
2. Implement component with CVA variants and ForwardRef
3. Write tests in `ComponentName.test.tsx`
4. Export from `ComponentName/index.ts`
5. Add to main `src/index.ts`
6. Update this README

## Dependencies

- `@radix-ui/react-*` - Accessible UI primitives
- `class-variance-authority` - Type-safe variant management
- `@ear-hub/utils` - Shared utilities (cn helper)
- `@ear-hub/design-system` - Theme and Tailwind config

All components are accessible (WCAG 2.1 AA compliant) with keyboard navigation and proper ARIA attributes.
