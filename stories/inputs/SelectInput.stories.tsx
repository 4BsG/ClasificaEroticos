import { ComponentMeta } from '@storybook/react';

import SelectInput from '../../components/input/SelectInput';
import '../../styles/globals.css';

export default {
  title: 'SelectInput',
  component: SelectInput
} as ComponentMeta<typeof SelectInput>;

export const SelectPhone = {
  args: {
    isPhoneCode: false
  }
};

export const SelectCountry = {
  args: {
    isPhoneCode: true
  }
};
