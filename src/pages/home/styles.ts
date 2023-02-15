import Image from 'next/image';

import { styled } from '~/lib/stitches';

export const Container = styled('main', {
  '> img': {
    position: 'absolute',
    zIndex: -1,

    objectFit: 'cover',
    opacity: '0.2',
  },
});

export const Content = styled('div', {
  width: '100%',
  height: '100vh',
  maxWidth: '600px',
  margin: '0 auto',
});
