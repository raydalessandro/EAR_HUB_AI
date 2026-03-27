import { describe, it, expect, vi } from 'vitest'
import { render, screen, userEvent } from '../../test/utils'
import { TextArea } from './TextArea'

describe('TextArea', () => {
  it('renders correctly', () => {
    render(<TextArea placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('handles value changes', async () => {
    const user = userEvent.setup()
    render(<TextArea placeholder="Type here" />)
    const textarea = screen.getByPlaceholderText('Type here')

    await user.type(textarea, 'Hello World')
    expect(textarea).toHaveValue('Hello World')
  })

  it('handles disabled state', () => {
    render(<TextArea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('supports rows prop', () => {
    render(<TextArea rows={5} data-testid="textarea" />)
    expect(screen.getByTestId('textarea')).toHaveAttribute('rows', '5')
  })

  it('merges custom className', () => {
    render(<TextArea className="custom-class" data-testid="textarea" />)
    expect(screen.getByTestId('textarea')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<TextArea ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('applies min-height by default', () => {
    render(<TextArea data-testid="textarea" />)
    expect(screen.getByTestId('textarea')).toHaveClass('min-h-[80px]')
  })
})
