import { ComponentMeta } from '@storybook/react';

import { ButtonGroup } from '../components/Button/ButtonGroup';
import { Button } from '../components/Button/Button';
import '../styles/globals.css';

export default {
  title: 'Button Group',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>

const Buttons = [
  <Button label='primary' variant='primary' action={()=> alert('clicked')} key='1' />,
  <Button label='secondary' variant='secondary' action={()=> alert('clicked')} key='2' />,
  <Button label='quiet' variant='quiet' action={()=> alert('clicked')} key='3' />,
]

export const vertical = {
  args: {
    orientation: 'vertical',
    children: Buttons,
  },
}

export const horizontal = {
  args: {
    orientation: 'horizontal',
    children: Buttons,
  },
}
