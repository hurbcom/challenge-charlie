import styled from 'styled-components';
import { media } from '../../../styles/devices';
import { fadeIn } from '../../../styles/animations';

export const BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(29, 29, 27);
  animation: ${fadeIn} 600ms linear normal;

  ${media.mobileS} {
    width: 100%;
    align-items: center;
  }

  ${media.laptop} {
    align-items: flex-start;
  }
`;
