import styled, { css, DefaultTheme } from 'styled-components';

import { BackgroundColorsEnum } from '~/components/WeatherStatus';

const containerModifiers = {
  blue: () => css`
    img {
      filter: brightness(10);
    }
  `,
  red: () => css`
    img {
      filter: brightness(10);
    }
  `,
  yellow: () => css`
    img {
      filter: brightness(10);
    }
  `,
};

export const Container = styled.div<{ color?: BackgroundColorsEnum }>`
  ${({ theme, color }) => css`
    position: relative;

    display: grid;
    align-items: center;
    gap: ${theme.sizings[32]};
    grid-template-columns: 1fr 0.8fr;

    height: 8rem;
    padding: ${theme.sizings[24]} ${theme.sizings[32]};

    background: transparent;

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
    }

    ${!!color && containerModifiers[color]}
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;

    > span {
      display: block;

      font-weight: 500;
      color: ${theme.colors.white};
      font-size: ${theme.sizings[24]};

      & + span {
        margin-top: ${theme.sizings[8]};
      }
    }
  `}
`;

export const Temperature = styled.span`
  cursor: pointer;
`;
