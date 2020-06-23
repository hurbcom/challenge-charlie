import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../page/Dashboard';

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

describe('Dashboard Page', () => {
  beforeEach(() => {
    global.navigator.geolocation = mockGeolocation;
  });
  it('Should be able to render the Dashboard', () => {
    const { debug } = render(<Dashboard />);

    debug();
  });

  it('Should be able to get the current position', () => {
    render(<Dashboard />);

    expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
