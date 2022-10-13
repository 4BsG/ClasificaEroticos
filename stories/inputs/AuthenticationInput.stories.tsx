import { ComponentMeta } from '@storybook/react';

import AuthenticationInput from '../../components/input/AuthenticationInput';
import '../../styles/globals.css';

export default {
  title: 'AuthenticationInput',
  component: AuthenticationInput
} as ComponentMeta<typeof AuthenticationInput>;

export const Authentication = {
  args: {
    type: 'text'
  }
};
