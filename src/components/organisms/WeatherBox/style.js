import styled from 'styled-components';


const Box = styled.div`
  border-radius: 0;
  opacity: 0.9;
  overflow: hidden;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.breakpoints.small}) {
    border-radius: 1.3em;
    width: 22em;
  }
`;


export {
  Box,
};
