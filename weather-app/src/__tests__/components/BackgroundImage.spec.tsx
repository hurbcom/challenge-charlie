import React from 'react';
import { render } from '@testing-library/react';

import BackgroundImage from '../../components/BackgroundImage';

jest.mock('../../hooks/useRequest', () => ({
  useRequest: () => ({
    data: {
      images: [
        {
          url: 'teste.com',
        },
      ],
    },
  }),
}));

describe('BackgroundImage Component', () => {
  it('should be able to render a image', () => {
    const { baseElement } = render(<BackgroundImage />);

    const [img] = Array.from(baseElement.getElementsByTagName('IMG'));

    expect(img.getAttribute('src')).toBeTruthy();
  });
});
