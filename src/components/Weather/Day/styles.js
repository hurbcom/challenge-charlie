import styled, { css } from 'styled-components';
import { media } from '../../../styles/devices';

const conditionalBackground = css`
  background-color: ${({ theme, id }) =>
    id === 2 ? theme.normal.secondDay : theme.normal.thirdDay};
`;

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  transition: all 300ms ease-in;

  cursor: ${({ isOpen }) => (isOpen ? 'default' : 'pointer')};

  ${({ theme, id }) =>
    id === 1
      ? `background-color: ${theme.normal.firstDay}`
      : conditionalBackground};

  ${media.mobileS} {
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '31rem' : '8.6rem')};
  }

  ${media.laptop} {
    flex-direction: row;
    height: ${({ isOpen }) => (isOpen ? '55.5vh' : '16vh')};
  }
`;
