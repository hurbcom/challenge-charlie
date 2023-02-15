import { styled } from "~/lib/stitches";

export const Container = styled('div', {
  display: 'flex',
  gap: '$16',
  alignItems: 'center',

  width: '100%',
  padding: '$16 $8',

  opacity: 0.9,
  background: '$gray200',

  '@media (max-width: 600px)': {
    gap: '$8',

    img: {
      width: 40,
      height: 40
    }
  }
});

export const Input = styled('input', {
  border: 0,
  width: '100%',

  fontSize: '$32',
  fontWeight: '500',
  color: '$gray400',
  background: 'transparent',

  '&:focus': {
    outline: 0
  },

  '&::placeholder': {
    color: '$gray300'
  },

  '@media (max-width: 600px)': {
    fontSize: '$24'
  }
});
