import styled from 'styled-components';

interface TProps {
  hoverColor?: string;
  margin?: string;
  cursor?: 'pointer' | 'default' | string;
}

export const Container = styled.div<TProps>`
  margin: ${({ margin }) => (margin ? margin : '0px')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
  svg {
    path {
      transition: fill 0.2s ease-in-out 0s;
    }

    &:hover {
      path {
        fill: ${({ hoverColor }) => hoverColor};
      }
    }
  }
`;
