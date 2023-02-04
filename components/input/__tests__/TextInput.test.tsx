import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from '../TextInput';

describe('TextInput', () => {
  it('renders a Text Input', () => {
    render(<TextInput />);
  });
});
