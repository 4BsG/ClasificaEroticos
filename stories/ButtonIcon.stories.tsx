import { ComponentMeta } from '@storybook/react';

import { ButtonIcon } from '../components/Button/ButtonIcon';
import '../styles/globals.css';

export default {
  title: 'Button Icon',
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>

export const Primary = {
  args: {
    icon: '',
  },
}
