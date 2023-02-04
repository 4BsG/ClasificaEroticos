import { ComponentMeta } from '@storybook/react';

import SelectCountry from '../../components/input/SelectCountry';
import '../../styles/globals.css';

export default {
  title: 'SelectCountry',
  component: SelectCountry
} as ComponentMeta<typeof SelectCountry>;

export const Country = {
  args: {}
};
