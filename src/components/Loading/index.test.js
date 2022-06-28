import React from 'react';
import renderer from 'react-test-renderer';
import { Loading } from './index';

describe('Loading', () => {
  it('should have 100vw width when has no prop', () => {
    const Component = renderer.create(<Loading />).toJSON();
    expect(Component).toHaveStyleRule('width', '100vw');
  });

  it('should have auto width when has prop', () => {
    const Component = renderer
      .create(<Loading selectingLocation={true} />)
      .toJSON();
    expect(Component).toHaveStyleRule('width', 'auto');
  });
});
