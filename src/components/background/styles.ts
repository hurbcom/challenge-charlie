import styled from 'styled-components';

interface BackgroundProps {
  url?: string;
}
export const Container = styled.div<BackgroundProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;

  background-image: ${({ url }) => (url ? `url(${url})` : '#fff')};
`;

Container.displayName = 'Background';
