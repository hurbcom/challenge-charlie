import styled from 'styled-components';
import { media } from '../../../styles/devices';
import { fadeIn } from '../../../styles/animations';

export const BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 600ms linear normal;

  ${media.mobileS} {
    width: 100%;
    align-items: center;
  }

  ${media.laptopL} {
    align-items: flex-start;
  }
`;
