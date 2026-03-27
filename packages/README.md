# Shared Packages

Internal packages used across EAR Hub apps.

## Packages

- **@ear-hub/ui** - React component library (Radix UI + Tailwind)
- **@ear-hub/ai-provider** - Multi-provider AI abstraction (Anthropic + DeepSeek)
- **@ear-hub/design-system** - Theme tokens, Tailwind config, CSS variables
- **@ear-hub/utils** - Shared utilities, hooks, helpers
- **@ear-hub/test-utils** - Testing utilities (render, mocks)
- **@ear-hub/tsconfig** - Shared TypeScript configurations
- **@ear-hub/eslint-config** - Shared ESLint configurations

All packages are private (not published to npm).

## Usage

Import packages using the `@ear-hub/` scope:

```typescript
// Import UI components
import { Button, Card } from '@ear-hub/ui'

// Import utilities
import { cn, createStorage } from '@ear-hub/utils'

// Import AI provider
import { createAIProvider } from '@ear-hub/ai-provider'

// Import test utilities
import { render, screen } from '@ear-hub/test-utils'
```

## Package Dependencies

Packages can depend on each other using `workspace:*`:

```json
{
  "dependencies": {
    "@ear-hub/utils": "workspace:*"
  }
}
```
