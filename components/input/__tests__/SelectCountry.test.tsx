import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectCountry from '../SelectCountry';

describe('SelectCountry', () => {
  it('renders an SelectCountry', () => {
    render(<SelectCountry />);
  });
});
