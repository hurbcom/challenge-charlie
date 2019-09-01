import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  background: url(${props => props.background});
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;