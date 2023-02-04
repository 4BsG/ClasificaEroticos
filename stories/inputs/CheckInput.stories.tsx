import { ComponentMeta } from '@storybook/react';

import CheckInput from '../../components/input/CheckInput';
import '../../styles/globals.css';

export default {
  title: 'CheckInput',
  component: CheckInput
} as ComponentMeta<typeof CheckInput>;

export const Check = {
  args: {
    type: 'checkbox'
  }
};
