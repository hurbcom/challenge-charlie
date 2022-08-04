import styled from 'styled-components';

export const StyledSection = styled.section`
    width: 75vh;
    border: 1px solid red;

    display: flex;
    flex-wrap:wrap;

    //Cor de background ajustada de acordo com valor da temperatura
    background-color: hsla(0, 100%, 50%, 0.5);

    //Ajustando posição e tamanho da seção para a informação do dia atual
    grid-row-start: 2;
    grid-row: span 3;

    //Ajuste de tamanho do ícone do clima
    img {
        height: 100%;
        width: 50%;
    }

    //Ajustes da seção de informações
    #infoSection{

        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-bottom: 0;

        //Ajuste da seção das temperaturas
        #tempSection{
            display: flex;
            
            #temperature{
                display:flex;
                flex-direction: column;
            }
        }
    }
`;
