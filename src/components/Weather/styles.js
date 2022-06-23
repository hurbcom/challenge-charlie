import styled, { css, keyframes } from 'styled-components';
import { media } from '../../styles/devices';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const conditionalBackground = css`
  background-color: ${({ id }) =>
    id === 2 ? 'rgba(255, 221, 0, 0.8);' : 'rgba(204, 177, 0, 0.7);'};
`;

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  transition: all 300ms ease-in;
  height: ${({ isOpen }) => (isOpen ? '33rem' : '10rem')};
  cursor: ${({ isOpen }) => (isOpen ? 'default' : 'pointer')};
  ${({ id }) =>
    id === 1
      ? 'background-color: rgba(255, 234, 5, 0.6);'
      : conditionalBackground};

  ${media.mobileS} {
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '66%' : '13.3%')};
  }

  ${media.mobileM} {
    height: ${({ isOpen }) => (isOpen ? '67%' : '13.3%')};
  }
`;

export const IconWrapper = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 28rem;
    animation: ${fadeIn} 600ms linear normal;
  }

  ${media.mobileS} {
    flex: 1;
    img {
      height: 11rem;
    }
  }

  ${media.mobileM} {
    img {
      height: 16rem;
    }
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  flex: 1;
  color: #fff;
  height: 100%;
  font-size: 2rem;
  position: relative;
  padding-bottom: ${({ isOpen }) => (isOpen ? '8rem' : '1rem')};

  ${media.mobileS} {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    padding-bottom: ${({ isOpen }) => (isOpen ? '1.2rem' : '1rem')};
  }

  ${media.mobileM} {
    margin-top: 0;
    flex-direction: column;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  padding-top: 1rem;

  span,
  button {
    font-weight: 600;
    text-transform: uppercase;
  }

  button {
    color: #fff;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    text-align: left;
    background: transparent;
  }

  ${media.mobileS} {
    width: 100%;
    padding-top: 0;
    position: relative;
    align-items: center;

    button {
      font-size: 1.2rem;
    }
  }
`;

export const MidInfo = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 600ms linear normal;

  ${media.mobileS} {
    width: 100%;
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.3rem;
    align-items: center;
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 600ms linear normal;

  ${media.mobileS} {
    width: 100%;
    align-items: center;
  }
`;
