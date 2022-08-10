import styled from 'styled-components';


//Este é o estilo das seções de dia de Hoje. 
export const StyledSection = styled.section`

    border: 1px solid red;

    display: flex;
    flex-wrap:wrap;
    align-items: center;

    //Cor de background ajustada de acordo com valor da temperatura
    background-color: hsla(${props=>props.cor}, ${props=>props.sat}%, 50%, 0.7);

    //Ajustando posição e tamanho da seção para a informação do dia atual
    grid-row-start: 2;
    grid-row: span 3;

    //Ajuste de tamanho do ícone do clima
    img, #loading-icon {

        flex: 1;
        margin-left: 1rem;

        max-height: 80%;

        min-width: 125px;

        //Alteração do tamanho de acordo com o tamanho da tela.
        @media (max-width:1200px){
            width: 50%;
            height:50%;
        }
    }

    //adiciona animações do icone de loading
    #loading-icon {
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    //Ajustes da seção de informações
    #infoSection{
        flex: 1;

        display:flex;
        flex-wrap: wrap;

        //seção passa a ser em linha para tamanhos pequenos
        @media (min-width: 600px) {
            flex-direction: column; 
        }
        //remove estilos dos botões de temperatura
        button{
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
        }

        margin-left: 1rem;

        //Ajuste do tamanho do texto do dia.
        #dia{
            @media (max-width:600px) and (max-height:800px) {
                font-size:1.5rem;
                margin-bottom: 0.5rem;
            }
            @media (min-width:601px) and (min-height:801px) {
                font-size:2rem;
                margin-bottom: 1rem;
            }
        }

        //Ajuste da seção das temperaturas
        #tempSection{
            display: flex;
            
            #temperature{
                display:flex;
                flex-direction: column;
                margin-right: 2rem;
            }
        }
        #clima{
            @media (max-width:600px) and (max-height:800px) {
                font-size:1rem;
                margin-bottom: 0.5rem;
                margin-top: 1rem;
            }
            @media (min-width:601px) and (min-height:801px) {
                font-size:2rem;
                margin-bottom: 2rem;
                margin-top: 2rem;
            }
        }
    }
`;
