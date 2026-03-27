import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import { Alert, AlertTitle, AlertDescription } from './Alert'

describe('Alert', () => {
  it('renders correctly', () => {
    render(<Alert>Alert content</Alert>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Alert content')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    render(<Alert data-testid="alert">Default</Alert>)
    expect(screen.getByTestId('alert')).toHaveClass('bg-background')
  })

  it('renders with destructive variant', () => {
    render(<Alert variant="destructive" data-testid="alert">Error</Alert>)
    expect(screen.getByTestId('alert')).toHaveClass('border-destructive/50')
  })

  it('renders with success variant', () => {
    render(<Alert variant="success" data-testid="alert">Success</Alert>)
    expect(screen.getByTestId('alert')).toHaveClass('border-green-500/50')
  })

  it('renders with warning variant', () => {
    render(<Alert variant="warning" data-testid="alert">Warning</Alert>)
    expect(screen.getByTestId('alert')).toHaveClass('border-yellow-500/50')
  })

  it('renders AlertTitle correctly', () => {
    render(<AlertTitle>Alert Title</AlertTitle>)
    expect(screen.getByText('Alert Title')).toBeInTheDocument()
  })

  it('renders AlertDescription correctly', () => {
    render(<AlertDescription>Alert Description</AlertDescription>)
    expect(screen.getByText('Alert Description')).toBeInTheDocument()
  })

  it('renders complete alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong</AlertDescription>
      </Alert>
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<Alert className="custom-class" data-testid="alert">Content</Alert>)
    expect(screen.getByTestId('alert')).toHaveClass('custom-class')
  })
})
