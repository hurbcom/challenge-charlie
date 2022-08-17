import styled, { css } from "styled-components";

interface WrapperProps {
  isPostTomorrow?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  height: 17.5vh;
  background-color: var(--yellow-300);

  ${(props) =>
    props.isPostTomorrow &&
    css`
      background-color: var(--yellow-500);
    `}
`;
