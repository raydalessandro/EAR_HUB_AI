import { vi } from 'vitest'

export function mockNextNavigation() {
  vi.mock('next/navigation', () => ({
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      back: vi.fn(),
    }),
    usePathname: () => '/mock-path',
    useSearchParams: () => new URLSearchParams(),
  }))
}
