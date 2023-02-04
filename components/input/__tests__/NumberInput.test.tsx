import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberInput from '../NumberInput';

describe('NumberInput', () => {
  it('renders an Number input', () => {
    render(<NumberInput />);
  });
});
