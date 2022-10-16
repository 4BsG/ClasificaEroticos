import { ComponentMeta } from '@storybook/react';

import { ButtonChoose } from '../components/Button/ButtonChoose';
import '../styles/globals.css';

export default {
  title: 'Button Choose',
  component: ButtonChoose,
} as ComponentMeta<typeof ButtonChoose>

export const ChooseAd = {
  args: {
    type: "ad",
    value: '1 Month',
    price: 20,
    action: () => console.log("Clicked"),
  },
}

export const ChooseCredit = {
  args: {
    type: "credit",
    value: '$20',
    price: 40,
    action: () => console.log("Clicked"),
  },
}
