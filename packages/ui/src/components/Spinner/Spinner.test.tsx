import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading')).toBeInTheDocument()
  })

  it('renders with default size', () => {
    render(<Spinner data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('h-8', 'w-8')
  })

  it('renders with sm size', () => {
    render(<Spinner size="sm" data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('h-4', 'w-4')
  })

  it('renders with lg size', () => {
    render(<Spinner size="lg" data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('h-12', 'w-12')
  })

  it('applies animate-spin class', () => {
    render(<Spinner data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('animate-spin')
  })

  it('has accessible loading text', () => {
    render(<Spinner />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<Spinner className="custom-class" data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('custom-class')
  })
})
