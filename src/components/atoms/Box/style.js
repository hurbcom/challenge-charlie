import styled from 'styled-components';


const Box = styled.div`
  background-color: red;
  border-radius: none;
  height: 100%;
  overflow: hidden;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.breakpoints.small}) {
    border-radius: 20px;
    height: 35em;
    width: 22em;
  }
`;


export default Box;
