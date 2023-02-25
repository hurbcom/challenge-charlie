import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    main {
      height: 70vh;
      background-color: ${theme.colors.primary};
      opacity: 0.8;
    }

    footer {
      height: 20vh;

      .weather-tomorrow-info {
        background-color: ${theme.colors.primary};
      }
      .weather-after-tomorrow-info {
        background-color: ${theme.colors.secondary};
      }
    }
  `};
`;
