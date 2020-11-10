import styled from 'styled-components';

export const SAnimated = styled.div`
  animation-duration: ${(props) => props.animationDuration}ms;
  animation-name: ${(props) => props.animation};
  border-radius: 4px;
  opacity: 1;
`;
