import styled, { css } from 'styled-components';

export const Container = styled.div<{ backgroundImage: string }>`
  ${({ theme, backgroundImage }) => css`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;

    background-image: ${`url(${backgroundImage})`};

    .weather-forecast-wrapper {
      width: 50%;
      height: 100%;

      @media (max-width: ${theme.breakpoints.mobile}) {
        width: 100%;
      }
    }
  `};
`;
