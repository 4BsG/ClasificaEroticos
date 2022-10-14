import { ComponentMeta } from '@storybook/react';

import { ButtonIcon } from '../components/Button/ButtonIcon';
import '../styles/globals.css';

export default {
  title: 'Button Icon',
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>

export const like = {
  args: {
    icon: 'like',
    label: 'Like',
    size: 'm',
    action: () => console.log('Like'),
  },
}

export const trash = {
  args: {
    icon: 'trash',
    size: 'm',
    type: 'delete-round',
    action: () => console.log('Trash'),
  },
}

export const play = {
  args: {
    icon: 'play',
    size: 'm',
    type: 'play',
    action: () => console.log('play'),
  },
}

export const next = {
  args: {
    icon: 'next',
    size: 'm',
    action: () => console.log('next'),
  },
}

export const prev = {
  args: {
    icon: 'prev',
    size: 'm',
    action: () => console.log('prev'),
  },
}

export const doubleNext = {
  args: {
    icon: 'doubleNext',
    size: 'm',
    action: () => console.log('doubleNext'),
  },
}

export const doublePrev = {
  args: {
    icon: 'doublePrev',
    size: 'm',
    action: () => console.log('doublePrev'),
  },
}
