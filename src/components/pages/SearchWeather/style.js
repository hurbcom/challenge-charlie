import styled from 'styled-components';


const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.breakpoints.small}) {
    align-items: center;
    justify-content: center;
  }
`;


export {
  Wrapper,
};
