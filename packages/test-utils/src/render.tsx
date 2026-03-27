import { render as rtlRender, type RenderOptions } from '@testing-library/react'
import { type ReactElement } from 'react'

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  // Future: Add custom provider options here
}

export function render(ui: ReactElement, options?: CustomRenderOptions) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    // Future: Add global providers (ThemeProvider, etc.)
    return <>{children}</>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { userEvent } from '@testing-library/user-event'
