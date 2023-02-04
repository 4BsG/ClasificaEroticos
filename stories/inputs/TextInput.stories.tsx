import { ComponentMeta } from '@storybook/react';

import TextInput from '../../components/input/TextInput';
import '../../styles/globals.css';

export default {
  title: 'TextInput',
  component: TextInput
} as ComponentMeta<typeof TextInput>;

export const email = {
  args: {
    placeholder: 'Email@gmail.com',
    type: 'email'
  }
};
