import styled from 'styled-components';
import { rotate } from '../../styles/animations';

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ selectingLocation }) => (selectingLocation ? 'auto' : '100vw')};
  height: ${({ selectingLocation }) => (selectingLocation ? '50vh' : '85vh')};

  img {
    width: 14rem;
    animation: ${rotate} 17s linear infinite;
  }
`;
