import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stepper from './Stepper';

describe('Stepper', () => {
  it('renders a Stepper component', () => {
    render(<Stepper />);
  });
});
