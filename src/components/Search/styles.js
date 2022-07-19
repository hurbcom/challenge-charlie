import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.white[100]};
    height: 56px;
    display: flex;
    align-items: center;
    transition: background ease-in-out 200ms;
    box-shadow: 0px 3px 6px -1px rgba(121, 121, 121, 0.28);
    :focus-within {
      background: ${theme.colors.white[200]};
    }
    input {
      background: none;
      border: none;
      height: 56px;
      width: 100%;
      padding-left: 8px;
      color: ${theme.colors.textColors[400]};
      outline: none;
      ::placeholder {
        opacity: 0.6;
      }
    }
  `}
  position: relative;
`;
export const Icon = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    padding: 0 16px 0 16px;
    color: ${theme.colors.textColors[400]};
    cursor: pointer;
    position: relative;
    z-index: 1;
    ::after {
      content: "";
      width: 48px;
      height: 48px;
      background: ${theme.colors.white[300]};
      position: absolute;
      z-index: -1;
      border-radius: 24px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity ease-in-out 300ms;
    }
    :hover::after {
      opacity: 1;
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: -22px;
    display: block;
    width: 100%;
    padding: 2px 4px;
    font-size: 1.2rem;
    border-radius: 0 0 4px 4px;
    background: ${theme.colors.error};
    z-index: 1;
    color: ${theme.colors.textColors[100]};
  `}
`;
