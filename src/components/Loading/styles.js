import styled, { css } from "styled-components";

export const Loading = styled.div`
  ${({ theme, height }) => css`
    display: flex;
    height: ${height+'px'};
    background: ${theme.colors.temperatures.null};
    font-size: 10rem;
    line-height: 10rem;
    color: ${theme.colors.textColors[400]};
    align-items: center;
    justify-content: center;
    animation: loop ease-in-out forwards infinite 1000ms;
    @keyframes loop {
      0% {
        opacity: 0.8;
      }
      50% {
        opacity: 0.9;
      }
      100% {
        opacity: 0.8;
      }
    }
  `}
`;
