import styled from 'styled-components';

export const SInput = styled.input`
  background-color: transparent;
  border: 0;
  color: #424242;
  flex: 1;
  width: 100%;
  padding-left: 1.6rem;
  font-weight: bold;

  &::placeholder {
    color: #bdbdbd;
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    outline: 0;
  }

  font-size: 1rem;

  @media (min-width: 601px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  @media (min-width: 961px) {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;
