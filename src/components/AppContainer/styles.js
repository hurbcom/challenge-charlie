import { fadeIn } from '../../styles/animations';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 300ms linear normal;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'none'};
`;
