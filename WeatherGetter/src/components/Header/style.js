import styled from 'styled-components';


//Estilo do Header.
export const StyledHeader = styled.header`
    border: 1px solid red;

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
`;
