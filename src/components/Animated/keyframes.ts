import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const appear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const feedbackTouch = keyframes`
  0% {opacity: 1; transform: scale(1); background-color: transparent;}
  50% {opacity: 1; transform: scale(1.2); background-color: #191919;}
  100% {opacity: 1; transform: scale(1); background-color: transparent;}
`;
