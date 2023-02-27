import styled, { css, DefaultTheme } from 'styled-components';

import { BackgroundColorsEnum } from '~/pages/home';

interface ContainerProps {
  color?: BackgroundColorsEnum;
  isDetailed?: boolean;
  isLoading?: boolean;
}

const containerModifiers = {
  isDetailed: () => css`
    @media (max-width: 600px) {
      img {
        width: 120px;
        height: 120px;
      }
    }
  `,
  isLoading: (theme: DefaultTheme) => css`
    @media (max-width: 600px) {
      padding: ${theme.sizings[24]} ${theme.sizings[16]};

      display: block;
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, color, isDetailed, isLoading }) => css`
    position: relative;

    display: grid;
    gap: ${theme.sizings[32]};
    grid-template-columns: 2fr 1.5fr;

    height: 100%;
    min-height: 8rem;
    padding: ${theme.sizings[24]} ${theme.sizings[32]};

    background: transparent;

    @media (max-width: 600px) {
      grid-template-columns: 1.5fr 2fr;
    }

    &:first-child {
      &::before {
        opacity: 0.6;
        filter: brightness(1.8);
      }
    }

    &:nth-child(2) {
      &::before {
        opacity: 0.8;
        filter: brightness(1.8);
      }
    }

    &:nth-child(3) {
      &::before {
        opacity: 1;
      }
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      width: 100%;
      height: 100%;

      content: '';
      background: ${!!color ? theme.colors[color] : theme.colors.gray200};
    }

    img {
      margin: 0 auto;

      filter: brightness(10);

      @media (max-width: 600px) {
        width: 60px;
        height: 60px;
      }
    }

    ${!!isDetailed && containerModifiers.isDetailed}
    ${!!isLoading && containerModifiers.isLoading(theme)}
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;

    & + & {
      margin-top: ${theme.sizings[32]};
    }

    > span,
    > small {
      display: block;

      font-weight: 500;
      color: ${theme.colors.white};

      & + span {
        margin-top: ${theme.sizings[8]};
      }
    }

    > span {
      font-size: ${theme.sizings[24]};

      &:first-child {
        text-transform: uppercase;
      }
    }

    > small {
      margin-top: ${theme.sizings[16]};

      font-size: ${theme.sizings[16]};

      & + small {
        margin-top: ${theme.sizings[8]};
      }
    }
  `}
`;

export const Temperature = styled.span<{ isClickable: boolean }>`
  ${({ theme, isClickable }) => css`
    display: flex;

    cursor: ${isClickable ? 'pointer' : 'unset'};

    > span {
      & + span {
        position: relative;

        margin: 0 ${theme.sizings[4]} 0 ${theme.sizings[16]};

        opacity: 0.5;

        &:before {
          position: absolute;
          left: -${theme.sizings[8]};

          width: 2px;
          height: 100%;

          content: '';
          background: ${theme.colors.white};
        }
      }
    }

    svg {
      margin
    }
  `}
`;
