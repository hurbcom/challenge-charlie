import styled from 'styled-components';


//Estilo do Header.
export const StyledHeader = styled.header`
    background-color: hsla(0, 0%, 100%, 0.8);

    grid-row-start: 1;
    display: flex;
    align-items: center;

    //Estilo do input do local.
    input{
        border:none;
        background: none;
        width: 60%;
        height: 50%;
        padding-right: 1rem;
        padding-left: 2rem;

        //Alteração do tamanho da fonte para telas maiores.
        @media (min-width: 800px) {
            font-size: 2em;
        } 
        
        font-weight: 600;
        color: #817d7c;

    }

    //Estilo do botão.
    button{
        border: none;
        background: none;

        font-size: 2rem;
        color: #817d7c;

        margin-left: 1rem;
        
        :hover{
            cursor: pointer;
        }
    }

    //Estilo do ícone de bússola.
    img{
        height: 50%;
        width: 20%;
    }

    //esconde o label do botão de enviar (presente por motivos de acessibilidade)
    .hidden{
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`;
