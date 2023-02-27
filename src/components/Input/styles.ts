import styled, { css } from 'styled-components';

export const Container = styled.div<{ iconPosition: number }>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    gap: ${theme.sizings[16]};
    align-items: center;

    width: 100%;
    padding: ${theme.sizings[16]} ${theme.sizings[8]};

    opacity: 0.9;
    background: ${theme.colors.gray200};

    &:has(input:focus) {
      opacity: 1;
    }

    @media (max-width: 600px) {
      gap: ${theme.sizings[8]};

      img {
        width: 40px;
        height: 40px;
      }
    }

    img {
      transform: rotate(${iconPosition}deg);
      transition: 0.3s;
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
