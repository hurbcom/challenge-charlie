import styled from 'styled-components';
import { media } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  height: 100vh;

  ${media.mobileS} {
    width: 100vw;
  }

  ${media.laptop} {
    width: 70vw;
  }

  ${media.desktop} {
    width: 50vw;
  }
`;
