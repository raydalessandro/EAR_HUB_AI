import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import { Label } from './Label'

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Test Label</Label>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('associates with input via htmlFor', () => {
    render(
      <div>
        <Label htmlFor="test-input">Username</Label>
        <input id="test-input" />
      </div>
    )
    const label = screen.getByText('Username')
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('merges custom className', () => {
    render(<Label className="custom-class">Label</Label>)
    expect(screen.getByText('Label')).toHaveClass('custom-class')
  })

  it('applies correct styling classes', () => {
    render(<Label>Label</Label>)
    const label = screen.getByText('Label')
    expect(label).toHaveClass('text-sm', 'font-medium')
  })
})
