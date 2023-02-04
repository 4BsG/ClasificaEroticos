import { ComponentMeta } from '@storybook/react';

import NumberInput from '../../components/input/NumberInput';
import '../../styles/globals.css';

export default {
  title: 'NumberInput',
  component: NumberInput
} as ComponentMeta<typeof NumberInput>;

export const Number = {
  args: {
    placeholder: '000-000000',
    type: 'number'
  }
};
