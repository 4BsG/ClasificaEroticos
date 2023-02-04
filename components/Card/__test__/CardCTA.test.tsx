import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CardCTA } from '../CardCTA'

const notificationSvg = {
  src: '/notification.svg',
  alt: 'card'
}

describe('Card', () => {
  it('renders a card with a button', () => {
    render(<CardCTA
      image= {notificationSvg}
      title= 'publish your ads now'
      descrption= 'Register now to publish your ads and get much more!'
    >
      <button data-testid='btn-1'>Button 1</button>
    </CardCTA>)
    
    const Card = document.getElementsByClassName('card-cta')[0]
    const Btn1 = screen.getByTestId('btn-1')
    
    expect(Card).toBeInTheDocument()
    expect(Card).toContainElement(Btn1)
  })

})
