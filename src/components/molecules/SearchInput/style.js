import styled from 'styled-components';


const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex: 1;
  padding: 5px 10px;
  justify-content: space-between;
`;


export {
  Wrapper,
};
