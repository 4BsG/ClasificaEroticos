import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ButtonFilter } from '../ButtonFilter'

describe('Button', () => {
  it('renders a filter button', () => {
    render(<ButtonFilter>
      <li>Item a</li>
    </ButtonFilter>)
    
    const Filter = screen.getByRole('button')
    
    expect(Filter).toBeInTheDocument()
  })

  it('show list when is clicked', () => {
    render(<ButtonFilter>
      <li>Item</li>
    </ButtonFilter>)
    
    let ListAfterClick
    fireEvent.click(screen.getByRole('button'))

    waitFor(() => { ListAfterClick = screen.getByRole('list') })
    
    expect(ListAfterClick).not.toHaveClass('is-hidden')
  })

  it('renders three items inside the list', () => {
    render(<ButtonFilter>
      <li>Item a</li>
      <li>Item b</li>
      <li>Item c</li>
    </ButtonFilter>)
    
    const List = screen.getByRole('list')
    const ItemA = screen.getByText('Item a')
    const ItemB = screen.getByText('Item b')
    const ItemC = screen.getByText('Item c')
    
    expect(List).toContainElement(ItemA)
    expect(List).toContainElement(ItemB)
    expect(List).toContainElement(ItemC)
  })
})
