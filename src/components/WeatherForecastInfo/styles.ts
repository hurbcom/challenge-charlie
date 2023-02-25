import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    max-height: 90%;

    main {
      height: 65%;

      display: flex;

      background-color: ${theme.colors.primary};
      opacity: 0.8;

      .icon-weather-wrapper {
        width: 60%;
        padding: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        .icon-weather {
          font-size: 300px;
          color: ${theme.colors.white};
        }
      }

      .info-weather-wrapper {
        width: 40%;
      }
    }

    footer {
      height: 35%;
      .weather-tomorrow-info {
        height: 50%;
        background-color: ${theme.colors.primary};
      }
      .weather-after-tomorrow-info {
        height: 50%;
        background-color: ${theme.colors.secondary};
      }
    }
  `};
`;
