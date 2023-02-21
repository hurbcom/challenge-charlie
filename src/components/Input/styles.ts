import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizings[16]};
    align-items: center;

    width: 100%;
    padding: ${theme.sizings[16]} ${theme.sizings[8]};

    opacity: 0.85;
    background: ${theme.colors.gray200};

    &:has(input:focus) {
      opacity: 1;
    }

    @media (max-width: 600px) {
      gap: $8;

      img {
        width: 40;
        height: 40;
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0;
    width: 100%;

    font-weight: 500;
    background: transparent;
    color: ${theme.colors.gray400};
    font-size: ${theme.sizings[32]};

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${theme.colors.gray300};
    }

    @media (max-width: 600px) {
      font-size: ${theme.sizings[24]};
    }
  `}
`;
