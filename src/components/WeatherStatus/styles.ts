import { styled } from '~/lib/stitches';

export const Container = styled('div', {
  display: 'grid',
  gap: '$32',
  alignItems: 'center',
  gridTemplateColumns: '1fr 0.8fr',

  height: '8rem',
  padding: '$24 $40',

  background: '$gray200',

  img: {
    margin: '0 auto',
  },

  variants: {
    backgroundColor: {
      yellow: {
        backgroundColor: 'yellow',
      },
    },
  },
});

export const Info = styled('div', {
  width: '100%',

  '> span': {
    display: 'block',

    color: '$black',
    fontSize: '$24',
    fontWeight: '500',

    '& + &': {
      marginTop: '10px',
    },
  },
});

export const Temperature = styled('span', {
  cursor: 'pointer',
});
