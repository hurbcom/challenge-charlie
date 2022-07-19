import styled, { css } from "styled-components";

export const CloseIcon = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: -10px;
    top: -10px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: ${theme.colors.white[400]};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    svg {
      fill:  ${theme.colors.textColors[400]};
    }
  `}
`;
export const Help = styled.div`
  ${({ theme }) => css`
    position: absolute;

    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    padding: 16px;
    width: 80%;
    max-width: 400px;
    border-radius: 4px;
    background: ${theme.colors.white[200]};
    color: ${theme.colors.textColors[400]};
    text-align: center;
    animation: intoUp ease-in-out 200ms forwards;
    @keyframes intoUp {
      from {
        transform: translateX(-50%) translateY(-10px);
      }
      to {
        transform: translateX(-50%) translateY(0px);
      }
    }
  `}
`;
