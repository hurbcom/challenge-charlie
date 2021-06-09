import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Input } from '@components/shared/Input';

describe('Input component', () => {
  it('Input render correctly', () => {
    render(<Input type="text" value="Rio de Janeiro" onKeyPress={() => {}} onChange={() => {}} />);
  });
});
