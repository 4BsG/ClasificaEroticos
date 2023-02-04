import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckInput from '../CheckInput';

describe('CheckInput', () => {
  it('renders an Check input', () => {
    render(<CheckInput />);
  });
});
