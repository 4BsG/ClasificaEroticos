import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectInput from '../SelectInput';

describe('SelectInput', () => {
  it('renders an SelectInput', () => {
    render(<SelectInput />);
  });
});
