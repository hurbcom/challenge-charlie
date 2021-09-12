import styled from 'styled-components';
import React from 'react';

const LoadingIcon = styled.div`
  display: inline-block;
  transform: translateZ(1px);
  & > div{
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #cef;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  @keyframes lds-circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;

const Loading = () => {
  return(
    <LoadingIcon><div></div></LoadingIcon>
  )
}

export default Loading;