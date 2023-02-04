import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordInput from '../PasswordInput';

describe('PasswordInput', () => {
  it('renders an Password input', () => {
    render(<PasswordInput />);
  });
});
