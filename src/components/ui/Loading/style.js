import styled, { keyframes } from 'styled-components';


const ballScaleMultiple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const LoadingChild = styled.div`
  animation: ${ballScaleMultiple} 1s 0s linear infinite;
  animation-fill-mode: both;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 100%;
  height: inherit;
  position: absolute;
  opacity: 0;
  width: inherit;
`;

const LoadingWrapper = styled.div`
  height: 100px;
  position: relative;
  width: 100px;

  ${LoadingChild}:nth-child(2) {
    animation-delay: -0.4s;
  }

  ${LoadingChild}:nth-child(3) {
    animation-delay: -0.2s;
  }
`;

export {
  LoadingChild,
  LoadingWrapper,
};
