import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import Input from '../../components/Input';

jest.mock('react-redux');

describe('Input component', () => {
  it('should be able to open the search box clicking in the open button', () => {
    useSelector.mockImplementation(cb =>
      cb({
        main: {
          location: 'Rio de Janeiro',
        },
      })
    );

    const { getByPlaceholderText } = render(<Input />);

    expect(getByPlaceholderText('Onde você está?')).toHaveProperty('disabled');
  });
});
