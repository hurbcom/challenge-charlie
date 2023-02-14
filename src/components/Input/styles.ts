import { styled } from "~/lib/stitches";

export const Container = styled('div', {
  display: 'flex',
  gap: '$8',
  alignItems: 'center',

  width: '100%',

  background: '$gray200'
});

export const Icon = styled('div', {});

export const Input = styled('input', {
  border: 0,

  fontSize: '$32',
  background: '$gray200',

  '&:focus': {
    outline: 0
  }
});
