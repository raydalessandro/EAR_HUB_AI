import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'

describe('Card', () => {
  it('renders Card correctly', () => {
    render(<Card data-testid="card">Content</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
    expect(screen.getByTestId('card')).toHaveTextContent('Content')
  })

  it('renders CardHeader correctly', () => {
    render(<CardHeader data-testid="header">Header</CardHeader>)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders CardTitle correctly', () => {
    render(<CardTitle>Title</CardTitle>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('renders CardDescription correctly', () => {
    render(<CardDescription>Description</CardDescription>)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders CardContent correctly', () => {
    render(<CardContent data-testid="content">Content</CardContent>)
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('renders CardFooter correctly', () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders complete card with all sub-components', () => {
    render(
      <Card data-testid="complete-card">
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    )
    const card = screen.getByTestId('complete-card')
    expect(card).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
    expect(screen.getByText('Test Footer')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<Card className="custom-class" data-testid="card">Content</Card>)
    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })

  it('applies correct styling classes', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('rounded-lg', 'border')
  })
})
