import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ButtonChoose } from '../ButtonChoose'

describe('Button', () => {
  it('renders a top up credit button', () => {
    render(<ButtonChoose
      type='credit'
      value='$20'
      price={40}
      action={() => console.log('Button choose test')}
    />)
    
    const ButtonCredit = screen.getByRole('button')
    const ValueButtonCredit = screen.getByText('$20')
    
    expect(ButtonCredit).toBeInTheDocument()
    expect(ValueButtonCredit).toHaveClass('text-positive')
  })

  it('renders a choose ad duration button', () => {
    render(<ButtonChoose
      type='ad'
      value='1 Month'
      price={20}
      action={() => console.log('Button choose test')}
    />)
    
    const ButtonChooseAd = screen.getByRole('button')
    const ValueButtonChooseAd = screen.getByText('1 Month')
    
    expect(ButtonChooseAd).toBeInTheDocument()
    expect(ValueButtonChooseAd).toHaveClass('text-color-label')
  })
})
