import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button } from '../Button'

describe('Button', () => {
  it('renders a primary button', () => {
    render(<Button
      label='Test'
      variant='primary'
      action={() => console.log('Button primary test')}
    />)
    
    const ButtonPrimary = screen.getByRole('button')
    
    expect(ButtonPrimary).toBeInTheDocument()
  })

  it('renders a secondary button', () => {
    render(<Button
      label='Test'
      variant='secondary'
      action={() => console.log('Button secondary test')}
    />)
    
    const ButtonSecondary = screen.getByRole('button')
    
    expect(ButtonSecondary).toBeInTheDocument()
  })

  it('renders a quiet button', () => {
    render(<Button
      label='Test'
      variant='quiet'
      action={() => console.log('Button quiet test')}
    />)
    
    const ButtonQuiet = screen.getByRole('button')
    
    expect(ButtonQuiet).toBeInTheDocument()
  })

})
