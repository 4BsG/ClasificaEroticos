import { ComponentMeta } from '@storybook/react';

import { ButtonWalletUserPoints } from '../components/Button/ButtonWalletUserPoints';
import '../styles/globals.css';

export default {
  title: 'Button Wallet User Points',
  component: ButtonWalletUserPoints,
} as ComponentMeta<typeof ButtonWalletUserPoints>

export const UserPoints = {
  args: {
    points: 20,
    action: () => console.log("Clicked"),
  },
}
