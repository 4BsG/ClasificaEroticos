import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CardServices } from '../CardServices'

const serviceSvg = {
  src: '/masaje.svg',
  alt: 'card'
}
const tagsList = [
  'Talca',
  'Rancagua',
  'La Serena',
  'Antofagasta',
  'Chillan',
  'Conception'
]


describe('Card', () => {
  it('renders a card with a button', () => {
    render(<CardServices
      image= {serviceSvg}
      tags={tagsList}
      action={() => console.log('Test card-service')}
    />)
    
    const Card = document.getElementsByClassName('card-services')[0]
    
    expect(Card).toBeInTheDocument()
    expect(Card).toHaveTextContent('Antofagasta')
  })

})
