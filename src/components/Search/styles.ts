import styled, { css, DefaultTheme, keyframes } from 'styled-components';

interface ContainerProps {
  iconPosition?: number;
}

export const Container = styled.form<ContainerProps>`
  ${({ theme, iconPosition }) => css`
    position: relative;

    display: grid;
    align-items: center;
    gap: ${theme.sizings[8]};
    grid-template-columns: auto 1fr;

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
      transition: 0.3s;
      transform: rotate(${iconPosition}deg);
    }
  `}
`;

const inputModifiers = {
  withError: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.red};

    &:focus {
      border-color: ${theme.colors.red};
    }
  `,
};

export const Input = styled.input<{ withError: boolean }>`
  ${({ theme, withError }) => css`
    border: 0;
    width: 100%;
    border: 1px solid transparent;
    border-radius: ${theme.sizings[8]};
    padding: ${theme.sizings[8]} 5.5rem ${theme.sizings[8]} ${theme.sizings[8]};

    font-weight: 500;
    filter: contrast(1.2);
    color: ${theme.colors.gray400};
    font-size: ${theme.sizings[32]};
    background: ${theme.colors.gray200};

    &:focus {
      outline: 0;
      border-color: ${theme.colors.blue};
    }

    &::placeholder {
      color: ${theme.colors.gray300};
    }

    @media (max-width: 600px) {
      padding: ${theme.sizings[8]} 4rem ${theme.sizings[8]} ${theme.sizings[8]};

      font-size: ${theme.sizings[24]};
    }

    ${withError && inputModifiers.withError(theme)}
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

interface ButtonProps {
  withError: boolean;
  isClose: boolean;
}

const buttonModifiers = {
  isLoading: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray300};

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `,
  isClose: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray300};
  `,
  withError: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, disabled, isClose, withError }) => css`
    position: absolute;
    z-index: 1;
    right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    width: 82px;
    height: 55px;
    opacity: 0.85;
    padding: 0 ${theme.sizings[16]};
    border-radius: 0 ${theme.sizings[8]} ${theme.sizings[8]} 0;

    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.sizings[16]};
    background: ${theme.colors.blue};

    @media (max-width: 600px) {
      width: 60px;
      height: 46px;
      padding: 0 ${theme.sizings[8]};
    }

    ${!!disabled && buttonModifiers.isLoading(theme)}
    ${isClose && buttonModifiers.isClose(theme)}
    ${withError && buttonModifiers.withError(theme)}
  `}
`;
