import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CardAccountType } from '../CardAccountType'

const manSvg = {
  src: '/man.svg',
  alt: 'card'
}

describe('Card', () => {
  it('renders a card whit two buttons', () => {
    render(<CardAccountType
      image= {manSvg}
      title= 'Choose your account type'
      descrption= 'Let us know for what you are here so we can serve you better'
    >
      <button data-testid='btn-1'>Button 1</button>
      <button data-testid='btn-2'>Button 2</button>
    </CardAccountType>)
    
    const Card = document.getElementsByClassName('card-account-type')[0]
    const Btn1 = screen.getByTestId('btn-1')
    const Btn2 = screen.getByTestId('btn-2')
    
    expect(Card).toBeInTheDocument()
    expect(Card).toContainElement(Btn1)
    expect(Card).toContainElement(Btn2)
  })

})
