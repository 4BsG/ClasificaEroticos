import { ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button/Button';
import '../styles/globals.css';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Hello',
    action: () => alert("Clicked"),
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Hello',
    action: () => alert("Clicked"),
  },
}

export const Quiet = {
  args: {
    variant: 'quiet',
    label: 'Hello',
    action: () => alert("Clicked"),
  },
}

export const Small = {
  args: {
    variant: 'primary',
    label: 'Hello',
    size: 's',
    action: () => alert("Clicked"),
  },
}

export const Medium = {
  args: {
    variant: 'primary',
    label: 'Hello',
    size: 'm',
    action: () => alert("Clicked"),
  },
}

export const Large = {
  args: {
    variant: 'primary',
    label: 'Hello',
    size: 'l',
    action: () => alert("Clicked"),
  },
}
