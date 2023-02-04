import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  it('renders an Search input', () => {
    render(<SearchInput />);
  });
});
