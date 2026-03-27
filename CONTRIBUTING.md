# Contributing to EAR Hub

## Development Workflow

1. Create a new branch
2. Make changes
3. Run tests: `pnpm test`
4. Commit (pre-commit hooks auto-run)
5. Push and create PR

## Code Quality Standards

- TypeScript strict mode (no `any`, no implicit types)
- Test coverage >80%
- Accessibility WCAG 2.1 AA
- All components have error boundaries
- Loading states for async operations

## Commit Messages

Follow conventional commits:

- `feat: add new component`
- `fix: resolve button click issue`
- `docs: update README`
- `test: add unit tests for Button`
- `refactor: extract shared logic`
- `chore: update dependencies`

## Pull Request Process

1. Ensure all tests pass (`pnpm test`)
2. Ensure lint passes (`pnpm lint`)
3. Ensure type-check passes (`pnpm typecheck`)
4. Update documentation if needed
5. Request review

## Package Structure

All packages follow this structure:

```
packages/<name>/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   └── ...
└── README.md (optional)
```

## Testing Guidelines

- Write tests for all new features
- Use `@ear-hub/test-utils` for component tests
- Mock AI providers in tests (don't hit real APIs)
- Target >80% coverage

## TypeScript Guidelines

- Enable strict mode in all packages
- Use type-only imports when possible
- No `any` types (use `unknown` if needed)
- Prefer interfaces over types for object shapes
