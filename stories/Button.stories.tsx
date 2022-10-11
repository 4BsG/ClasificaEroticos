import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button/Button';
import '../styles/globals.css';

export default {
  title: 'ExampleApp/Button',
  component: Button,

} as ComponentMeta<typeof Button>

export const ExampleButton = () => <Button label="test" action={() => alert("Click")}  variant="primary"/>
