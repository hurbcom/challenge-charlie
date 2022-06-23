import styled from 'styled-components';
import { media } from '../../../styles/devices';

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  flex: 1;
  color: #fff;
  height: 100%;
  position: relative;

  ${media.mobileS} {
    font-size: 1.1rem;
    margin-top: 0.4rem;
    padding-bottom: ${({ isOpen }) => (isOpen ? '1.2rem' : '0')};
  }

  ${media.mobileM} {
    margin-top: ${({ isOpen }) => (isOpen ? '0' : '0.3rem')};
  }

  ${media.laptopL} {
    font-size: 1.8rem;
    justify-content: flex-end;
    padding-bottom: ${({ isOpen }) => (isOpen ? '8rem' : '1rem')};
  }

  ${media.laptop} {
    padding-bottom: ${({ isOpen }) => (isOpen ? '3rem' : '1rem')};
  }

  ${media.desktop} {
    padding-bottom: ${({ isOpen }) => (isOpen ? '8rem' : '1rem')};
  }
`;
