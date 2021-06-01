import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '.';

describe('Home component', () => {
  it('should render a text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Hurb Challenge')).toBeInTheDocument();
  });
});
