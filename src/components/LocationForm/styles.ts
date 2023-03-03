import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    height: 10%;
    max-height: 10%;

    display: flex;
    align-items: center;

    font-family: 'Ubuntu';
    color: ${theme.colors.darkGray};

    background-color: ${theme.colors.white};
    padding: 16px;

    .location-icon {
      height: 100%;

      display: flex;
      align-items: center;

      font-size: 58px;

      @media (min-width: ${theme.breakpoints.qHd}) {
        font-size: 5rem;
      }

      @media (max-width: ${theme.breakpoints.hd}) {
        font-size: 3rem;
      }

      @media (max-width: ${theme.breakpoints.smartphone}) {
        font-size: 2.2rem;
      }
    }

    .invalid-location-name-message {
      color: #e63946;

      @media (min-width: ${theme.breakpoints.qHd}) {
        font-size: 2rem;
      }

      @media (max-width: ${theme.breakpoints.smartphone}) {
        font-size: 0.8rem;
      }
    }

    form {
      width: 100%;
      height: 100%;
      margin-left: 16px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: ${theme.breakpoints.smartphone}) {
        margin-left: 0.5rem;
      }
    }

    input {
      all: unset;

      width: 100%;
      height: 100%;

      font-size: 2rem;
      font-weight: 500;

      @media (min-width: ${theme.breakpoints.qHd}) {
        font-size: 2.2rem;
      }

      @media (max-width: ${theme.breakpoints.hd}) {
        font-size: 1.5rem;
      }

      @media (max-width: ${theme.breakpoints.smartphone}) {
        font-size: 1.1rem;
      }

      &::-webkit-search-cancel-button {
        visibility: hidden;
      }
    }
  `}
`;
