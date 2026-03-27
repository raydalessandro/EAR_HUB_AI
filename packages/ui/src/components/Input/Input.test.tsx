import { describe, it, expect, vi } from 'vitest'
import { render, screen, userEvent } from '../../test/utils'
import { Input } from './Input'

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('handles value changes', async () => {
    const user = userEvent.setup()
    render(<Input placeholder="Type here" />)
    const input = screen.getByPlaceholderText('Type here')

    await user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })

  it('handles disabled state', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('supports different input types', () => {
    const { rerender } = render(<Input type="email" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'email')

    rerender(<Input type="password" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'password')
  })

  it('merges custom className', () => {
    render(<Input className="custom-class" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Input ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })
})
