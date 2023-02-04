import { ComponentMeta } from '@storybook/react';

import { ButtonFilter } from '../components/Button/ButtonFilter';
import '../styles/globals.css';

const ItemList = [
  <li key={1}>Item #1</li>,
  <li key={2}>Item #2</li>,
  <li key={3}>Item #3</li>,
]

export default {
  title: 'Button Filter',
  component: ButtonFilter,
} as ComponentMeta<typeof ButtonFilter>

export const Primary = {
  args: {
    children: ItemList,
  },
}
