import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    height: 10%;
    padding: 16px;
    max-height: 10%;

    display: flex;
    align-items: center;

    font-family: 'Ubuntu';
    color: ${theme.colors.darkGray};
    background-color: ${theme.colors.white};

    :hover {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

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

      margin-top: 4px;

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

      .input-wrapper {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;

        .search-icon-wrapper {
          all: unset;

          width: 10%;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      @media (max-width: ${theme.breakpoints.smartphone}) {
        margin-left: 0.5rem;
      }
    }

    input {
      all: unset;

      width: 90%;
      height: 100%;

      font-size: 2rem;
      font-weight: 500;

      &:focus {
        border-bottom: 1px solid #dfe1e5;
      }

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
