import { ComponentMeta } from '@storybook/react';

import SearchInput from '../../components/input/SearchInput';
import '../../styles/globals.css';

export default {
  title: 'SearchInput',
  component: SearchInput
} as ComponentMeta<typeof SearchInput>;

export const search = {
  args: {
    placeholder: 'Search Here'
  }
};
