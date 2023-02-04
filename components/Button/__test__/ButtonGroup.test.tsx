import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ButtonGroup } from '../ButtonGroup'

describe('Button', () => {
  it('renders a vertical Group of three buttons', () => {
    render(<ButtonGroup orientation='vertical'>
      <div>Botton 1</div>
      <div>Botton 2</div>
      <div>Botton 3</div>
    </ButtonGroup>)
    
    const Group = document.getElementsByClassName('btn-group')[0]
    
    expect(Group).toHaveClass('flex-col')
  })
})
