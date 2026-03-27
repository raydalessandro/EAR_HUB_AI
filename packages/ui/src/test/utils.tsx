import { render as rtlRender, type RenderResult } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'

export function render(ui: ReactElement, options?: RenderOptions): RenderResult {
  return rtlRender(ui, options)
}

export { screen, waitFor } from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
