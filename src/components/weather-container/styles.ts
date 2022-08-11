import styled, { css } from 'styled-components';
import { media } from '../../styles/devices';
import { Theme } from '../../styles/theme';

interface DayProps {
  isOpen: boolean;
  dayNumber: number;
  theme: Theme;
}

const conditionalBackground = css`
  background-color: ${({ theme, dayNumber }: DayProps) =>
    dayNumber === 1 ? theme.secondDay : theme.thirdDay};
`;

export const Container = styled.div`
  display: block;
  width: 100%;
`;

export const Day = styled.div<DayProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  transition: all 300ms ease-in;

  cursor: ${({ isOpen }) => (isOpen ? 'default' : 'pointer')};

  ${({ theme, dayNumber }) =>
    dayNumber === 0 ? `background-color: ${theme.firstDay}` : conditionalBackground};

  ${media.mobileS} {
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '31rem' : '8.6rem')};
  }

  ${media.mobileM} {
    height: ${({ isOpen }) => (isOpen ? '31rem' : '5.85rem')};
  }

  ${media.laptop} {
    flex-direction: row;
    height: ${({ isOpen }) => (isOpen ? '55.5vh' : '16vh')};
  }
`;
