import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText('Badge')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    render(<Badge data-testid="badge">Default</Badge>)
    expect(screen.getByTestId('badge')).toHaveClass('bg-primary')
  })

  it('renders with secondary variant', () => {
    render(<Badge variant="secondary" data-testid="badge">Secondary</Badge>)
    expect(screen.getByTestId('badge')).toHaveClass('bg-secondary')
  })

  it('renders with destructive variant', () => {
    render(<Badge variant="destructive" data-testid="badge">Error</Badge>)
    expect(screen.getByTestId('badge')).toHaveClass('bg-destructive')
  })

  it('renders with outline variant', () => {
    render(<Badge variant="outline" data-testid="badge">Outline</Badge>)
    expect(screen.getByTestId('badge')).toHaveClass('text-foreground')
  })

  it('applies correct base styles', () => {
    render(<Badge data-testid="badge">Badge</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveClass('inline-flex', 'items-center', 'rounded-full', 'text-xs')
  })

  it('merges custom className', () => {
    render(<Badge className="custom-class" data-testid="badge">Custom</Badge>)
    expect(screen.getByTestId('badge')).toHaveClass('custom-class')
  })
})
