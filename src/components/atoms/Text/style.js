import styled from 'styled-components';


const P = styled.p`
  color: ${({ color }) => color};
  font-family: 'Roboto-Regular';
  font-size: ${({ theme }) => theme.text.fontSize}em;
  font-weight: bold;
  padding: ${({ theme }) => theme.text.paddingVertical}em 0;
  text-align: center;
`;


export {
  P,
};
