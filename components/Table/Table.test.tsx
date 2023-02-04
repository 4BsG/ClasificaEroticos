import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table', () => {
  it('renders a Table component', () => {
    render(<Table />);
  });
});
