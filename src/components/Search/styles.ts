import styled, { css, keyframes } from 'styled-components';

export const Container = styled.form<{ iconPosition?: number }>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    gap: ${theme.sizings[8]};
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
    border-radius: ${theme.sizings[4]};
    padding: ${theme.sizings[8]} ${theme.sizings[8]};

    font-weight: 500;
    color: ${theme.colors.gray400};
    font-size: ${theme.sizings[32]};
    background: ${theme.colors.gray200};

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

const buttonModifiers = {
  isLoading: () => css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `,
};

export const Button = styled.button`
  ${({ theme, disabled }) => css`
    border: none;
    padding: ${theme.sizings[8]} ${theme.sizings[16]};

    opacity: 0.8;
    cursor: pointer;
    background-color: transparent;
    font-size: ${theme.sizings[16]};

    ${!!disabled && buttonModifiers.isLoading}
  `}
`;
