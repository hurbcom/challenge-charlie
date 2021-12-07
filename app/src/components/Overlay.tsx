import React from 'react';
import { styled } from 'utils';

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

function Overlay() {
  return <Container />;
}

export default Overlay;
