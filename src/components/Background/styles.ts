import styled from 'styled-components';

interface BackgroundContainerProps {
  backgroundImage: string
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  height: 100vh;
  width: 100vw;
  background-size: cover !important;
  background-repeat: no-repeat;
  background: url(${(props) => props.backgroundImage});
  overflow: auto;
`