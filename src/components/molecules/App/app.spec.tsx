import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

describe('<App />', () => {
  it('should render correctly', () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
});
