import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthenticationInput from '../AuthenticationInput';

describe('AuthenticationInput', () => {
  it('renders an authentication input', () => {
    render(<AuthenticationInput />);
  });
});
