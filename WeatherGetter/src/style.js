import styled from 'styled-components'

const mdfont = 1.5;
const smfont = 1;
const xsfont = 0.5;

export const StyledApp = styled.div`
    //Margens responsivas.
    width: min(100vw - 30vw);
    margin-inline: auto;
    //Altura do background para a página inteira.
    height: 100vh;

    //Geração do background com opacidade utilizando o endereço da imagem com url (Prop)
    &:after{
      content: "";
      background-image: url(${props => props.bg});
      background-size:cover;
      background-repeat:repeat-y;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1; 
    }
`;

//Estilo do container como grid (Onde ficam as informações).
export const StyledContainer = styled.div`
    height: 100vh;

    display:grid;
    grid-template-columns: auto;
    //grid-template-rows: auto auto auto auto auto auto;

    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    //overflow-y: scroll;

    justify-content: center;

    position: relative;

    color: #fff;

    font-weight: 600;

`