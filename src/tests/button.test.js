'use strict';

import React from 'react';
import Button from '../components/atoms/button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
    .create(<Button text="Teste Hurb" />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});