import styled from 'styled-components';

import { IBackgroundImage } from './interface';

export const SContainerImage = styled.div<IBackgroundImage>`
  background-image: ${(props) => `url(${props.backgroundImageUrl})`};
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;
