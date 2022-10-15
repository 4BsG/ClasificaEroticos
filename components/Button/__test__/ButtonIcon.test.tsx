import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ButtonIcon } from '../ButtonIcon'

describe('Button', () => {
  it('renders a Like button', () => {
    render(<ButtonIcon
      label='Like'
      icon='like'
      size='m'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })

  it('renders a Delete button', () => {
    render(<ButtonIcon
      label='Delete'
      icon='trash'
      size='m'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })

  it('renders a Play button', () => {
    render(<ButtonIcon
      icon='play'
      size='l'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })

  it('renders a Close button', () => {
    render(<ButtonIcon
      icon='close'
      size='l'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })

  it('renders a Next button', () => {
    render(<ButtonIcon
      icon='next'
      size='l'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })

  it('renders a Prev button', () => {
    render(<ButtonIcon
      icon='prev'
      size='l'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })

  it('renders a Double Next button', () => {
    render(<ButtonIcon
      icon='doubleNext'
      size='l'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })

  it('renders a Double Prev button', () => {
    render(<ButtonIcon
      icon='doublePrev'
      size='l'
      action={() => console.log('Icon button test')}
    />)
    
    const IconButton = screen.getByRole('button')
    
    expect(IconButton).toBeInTheDocument()
  })
})
