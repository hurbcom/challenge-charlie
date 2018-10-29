import styled from 'styled-components';


const Span = styled.span`
  &:before {
    color: ${({ color }) => color};
    font-family: '${({ theme }) => theme.fonts.icon}';
    content: attr(data-icon);
    font-size: ${({ theme }) => theme.icon.fontSize}em;
  }
`;


export {
  Span,
};
