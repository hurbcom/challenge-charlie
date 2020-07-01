import styled, { css } from 'styled-components';

interface ContainerProps {
  background: string | undefined;
}

export const Wrapper = styled.div<ContainerProps>`
  ${(props) =>
    props.background &&
    css`
      background: url(${props.background}) no-repeat center;
      background-size: cover;
    `}
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
