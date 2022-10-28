import styled from 'styled-components';

interface BackgroundContainerProps {
  backgroundImage: string
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background: url(${(props) => props.backgroundImage});
  overflow: auto;
`