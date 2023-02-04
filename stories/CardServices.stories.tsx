import { ComponentMeta } from '@storybook/react';

import { CardServices } from '../components/Card/CardServices';
import '../styles/globals.css';

const tags = [
  "Talca",
  "Rancagua",
  "La Serena",
  "Antofagasta",
  "Chillan",
  "Conception",
]

export default {
  title: 'Card',
  component: CardServices,
} as ComponentMeta<typeof CardServices>

export const Services = {
  args: {
    image: {src: '/masaje.svg', alt: 'card'},
    tags,
    action: () => alert("Test card-service"),
  },
}
