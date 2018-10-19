import styled from 'styled-components';


const Box = styled.div`
  background-color: white;
  border-radius: none;
  height: 100%;
  opacity: 0.7;
  overflow: hidden;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.breakpoints.small}) {
    border-radius: 20px;
    height: 80%;
    width: 80%;
  }

  @media(min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 60%;
  }

  @media(min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 40%;
  }
`;


export default Box;
