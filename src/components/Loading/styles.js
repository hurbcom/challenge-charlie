import styled from 'styled-components';
import { rotate } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 85vh;

  img {
    width: 14rem;
    animation: ${rotate} 17s linear infinite;
  }
`;
