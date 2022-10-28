import { ComponentMeta } from '@storybook/react';

import { CardCTA } from '../components/Card/CardCTA';
import { Button } from '../components/Button/Button';
import '../styles/globals.css';

export default {
  title: 'Card',
  component: CardCTA,
} as ComponentMeta<typeof CardCTA>

export const Notification = {
  args: {
    image: {src: '/notification.svg', alt: 'card'},
    title: 'publish your ads now',
    description: 'Register now to publish your ads and get much more!',
    children: <Button label='register' variant='primary' action={() => alert('Test card-cta')} />
  },
}
