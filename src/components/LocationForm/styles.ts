import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    height: 10%;
    max-height: 10%;

    font-family: 'Ubuntu';
    color: ${theme.colors.darkGray};

    form {
      height: 100%;
      padding: 16px;

      display: flex;
      align-items: center;

      background-color: ${theme.colors.white};

      .location-icon {
        font-size: 48px;
      }
    }

    input {
      all: unset;

      width: 100%;
      height: 100%;
      margin-left: 16px;

      font-size: 32px;
      font-weight: 500;
    }
  `}
`;
