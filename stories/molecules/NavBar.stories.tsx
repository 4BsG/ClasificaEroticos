import { ComponentMeta } from '@storybook/react';

import NavBar from '../../components/NavBar/NavBar';
import '../../styles/globals.css';

export default {
  title: 'NavBar',
  component: NavBar
} as ComponentMeta<typeof NavBar>;

export const Nav = {
  args: {}
};
