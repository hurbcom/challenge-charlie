import React from 'react';
import { render } from '@testing-library/react';
import LocationContainer from './container';

describe('<App />', () => {
  it('should render correctly', () => {
    const component = render(<LocationContainer />);

    expect(component).toMatchSnapshot();
  });
});

// TO DO => test return data from LocationContainer, mocking the call in the api, waiting
// for the rendering and as a child of LocationContainer assign conditions to values
// received from the useLocation hook thus checking if when we use the LocationContainer
// we will receive the data we want
