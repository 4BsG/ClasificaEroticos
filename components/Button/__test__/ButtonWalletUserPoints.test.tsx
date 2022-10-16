import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ButtonWalletUserPoints } from '../ButtonWalletUserPoints'

describe('Button', () => {
  it('renders the wallet user points button', () => {
    render(<ButtonWalletUserPoints
      points={120}
      action={() => console.log('Button primary test')}
    />)
    
    const ButtonUserPoints = screen.getByRole('button')
    
    expect(ButtonUserPoints).toBeInTheDocument()
  })
})
