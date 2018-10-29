import styled from 'styled-components';


const Form = styled.form`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex: 1;
  height: inherit;
  padding: 0 0.5em;
`;

const Wrapper = styled.div`
  height: 3em;
`;


export {
  Form,
  Wrapper,
};
