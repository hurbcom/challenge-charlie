import styled from 'styled-components';

export const Container = styled.div<{ backgroundImage: string }>`
  width: 100vw;
  height: 100vh;

  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`;
