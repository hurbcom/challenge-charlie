import styled, { css } from "styled-components";

export const Main = styled.main`
  ${({ background }) => css`
    background: url(${background});
    background-size: cover;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 102px 0;
  min-height: 100vh;
`;
export const Content = styled.main`
  width: 500px;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 16px;
  }
`;

export const Help = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    background: ${theme.colors.white[200]};
    color: ${theme.colors.textColors[400]};
    text-align: center;
  `}
`;
