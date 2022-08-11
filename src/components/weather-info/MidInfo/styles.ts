import styled, { keyframes } from 'styled-components';
import { media } from '../../../styles/devices';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MidInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(29, 29, 27);

  animation: ${fadeIn} 600ms linear normal;

  span {
    text-transform: capitalize;
  }

  ${media.mobileS} {
    width: 100%;
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.3rem;
    align-items: center;
  }

  ${media.laptop} {
    font-size: 2.1rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
  }

  ${media.desktop} {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;
