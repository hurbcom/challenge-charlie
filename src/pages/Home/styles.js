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
export const Content = styled.div`
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

export const Icon = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -12px;
`;
export const PhotoTitle = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    position: absolute;
    top: 48px;
    padding: 16px;
    background: ${theme.colors.black[100] + "7d"};
    color: ${theme.colors.textColors[100]};
    border: 1px solid ${theme.colors.textColors[100] + "7d"};
    text-align: center;
    opacity: 0.5;
    transition: opacity ease-in-out 200ms;
    :hover {
      opacity: 1;
    }
  `}
`;
