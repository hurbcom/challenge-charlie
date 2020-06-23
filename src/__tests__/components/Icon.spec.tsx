import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import Icon from '../../components/Icon';

describe('Icon Component', () => {
  it('Should be able to render all posible icons', async () => {
    const { getAllByTestId } = render(
      <>
        <Icon name="01d" />
        <Icon name="02d" />
        <Icon name="03d" />
        <Icon name="04d" />
        <Icon name="09d" />
        <Icon name="10d" />
        <Icon name="11d" />
        <Icon name="13d" />
        <Icon name="50d" />
      </>,
    );

    await waitForElement(() => [getAllByTestId('icon')]);
  });
});
