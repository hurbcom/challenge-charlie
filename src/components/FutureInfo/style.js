import styled from 'styled-components';

//Estilo das seções que mostram as temperaturas.
export const Temperature = styled.div`
    display:flex;

    width:50%;

    line-height: 1.5rem;

    padding-bottom: 0.5rem;

    margin-left:1.5rem;
    //Alinhamento a partir do meio da página + margem para alinhar com seção de "Hoje"
    @media (min-width:800px) {
        margin-left:calc(50% + 1rem);
    }

    div:not(:first-child){
        margin-left: 1.5rem;
    }

    //Remove estilo dos botões de temperatura.
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
`

//Seções básicas das temperaturas de dias futuros.
const StyledSection = styled.section`
    width: 100%;

    padding-top: 1rem;

    display:flex;
    flex-direction:column;

    #day{
        margin-left: 1.5rem;
        @media (min-width:800px) {
            margin-left:calc(50% + 1rem);
        }
        width:50%;
        padding-bottom: 0.5rem;
    }
`
//Seções de dia de "Amanhã" e "Depois de Amanhã", tendo seção acima como base.
export const Tomorrow = styled(StyledSection)`

    //Cor de background ajustada de acordo com valor da temperatura
    background-color: hsla(${props => props.cor}, ${props=>props.sat}%, 50%, 0.7);

    //Ajustando posição e tamanho da seção para a informação do dia atual
    grid-row: 5 / span 1;


`

export const AfterTomorrow = styled(StyledSection)`

    //Cor de background ajustada de acordo com valor da temperatura 
    background-color: hsla(${props => props.cor}, ${props=>props.sat}%, 50%, 0.7);

    //Ajustando posição e tamanho da seção para a informação do dia atual
    grid-row: 6 / span 1;
    
`
