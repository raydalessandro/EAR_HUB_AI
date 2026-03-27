import { describe, it, expect, vi } from 'vitest'
import { render, screen, userEvent } from '../../test/utils'
import { Button } from './Button'

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
  })

  it('renders with primary variant', () => {
    render(<Button variant="primary">Primary</Button>)
    const button = screen.getByRole('button', { name: 'Primary' })
    expect(button).toHaveClass('bg-primary')
  })

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: 'Secondary' })
    expect(button).toHaveClass('bg-secondary')
  })

  it('renders with outline variant', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button', { name: 'Outline' })
    expect(button).toHaveClass('border')
  })

  it('renders with ghost variant', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole('button', { name: 'Ghost' })
    expect(button).toHaveClass('hover:bg-accent')
  })

  it('applies correct size classes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-9')

    rerender(<Button size="default">Default</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-10')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-11')

    rerender(<Button size="icon">Icon</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10')
  })

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('supports asChild prop with anchor tag', () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: 'Link' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('merges custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Ref test</Button>)
    expect(ref).toHaveBeenCalled()
  })
})
