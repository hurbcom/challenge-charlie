import styled from 'styled-components';

export const StyledSection = styled.section`
    width: 75vh;
    border: 1px solid red;

    //Cor de background ajustada de acordo com valor da temperatura
    background-color: hsla(0, 100%, 50%, 0.5);

    //Ajustando posição e tamanho da seção para a informação do dia atual
    grid-row-start: 2;
    grid-row: span 3;
`;
