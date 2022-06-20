import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 400ms linear normal;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'none'};
`;
