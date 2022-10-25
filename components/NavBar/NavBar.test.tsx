import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders a NavBar component', () => {
    render(<NavBar />);
  });
});
