import styled from 'styled-components';


const borderWidthAux = '0.2em';

const TemperatureBox = styled.div`
  border-bottom: solid ${borderWidthAux} ${({ theme }) => theme.colors.transparent};
  border-top: solid ${borderWidthAux} ${({ theme }) => theme.colors.transparent};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  min-width: 2em;
  user-select: none;

  &:hover {
    border-bottom: solid ${borderWidthAux} ${({ theme }) => theme.colors.white};
  }
`;


export {
  TemperatureBox,
};
