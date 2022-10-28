import { ComponentMeta } from '@storybook/react';

import { CardAccountType } from '../components/Card/CardAccountType';
import { Button } from '../components/Button/Button';
import '../styles/globals.css';

const Buttons = [
  <Button key='1' label='register' variant='primary' action={() => alert('Test card-1')} />,
  <Button key='2' label='register' variant='secondary' action={() => alert('Test card-2')} />,
]

export default {
  title: 'Card',
  component: CardAccountType,
} as ComponentMeta<typeof CardAccountType>

export const AccountType = {
  args: {
    image: {src: '/man.svg', alt: 'card',},
    title: 'Choose your account type',
    description: 'Let us know for what you are here so we can serve you better',
    children: Buttons,
  },
}
