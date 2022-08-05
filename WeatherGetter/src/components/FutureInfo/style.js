import styled from 'styled-components';

export const StyledSection = styled.section`
    width: 75vh;
    border: 1px solid red;

    //Cor de background ajustada de acordo com valor da temperatura
    background-color: hsla(0, 100%, 50%, 0.5);

    //Ajustando posição e tamanho da seção para a informação do dia atual
    grid-row: 5 / span 2;

    #tomorrow{
        display:flex;
        flex-direction:column;
    }

    #afterTomorrow{
        display:flex;
        flex-direction:column;
    }
    #temperatures{
        display:flex;
    }
`;
