import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from '../shared/Button';

describe('Button component', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Button text="Click here" onClick={() => {}} />);
    expect(getByText('Click here')).toBeInTheDocument();
  });
});
