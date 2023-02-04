import { ComponentMeta } from '@storybook/react';

import PasswordInput from '../../components/input/PasswordInput';
import '../../styles/globals.css';

export default {
  title: 'PasswordInput',
  component: PasswordInput
} as ComponentMeta<typeof PasswordInput>;

export const Password = {
  args: {
    placeholder: 'Enter here',
    type: 'password'
  }
};
